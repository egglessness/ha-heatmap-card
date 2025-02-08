import { HeatmapScales } from "./heatmap-scales.js";

const LitElement = Object.getPrototypeOf(
  customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

export class HeatmapCard extends LitElement {
  last_render_ts = 0;
  scales = new HeatmapScales();
  static get properties() {
    return {
      hass: {},
      config: {},
      grid: [],
      grid_status: undefined,
      meta: {},
      tooltipOpen: false,
      selected_element_data: "",
    };
  }

  render() {
    if (!this.grid || !this.grid.length) {
      this.grid = [];
    }
    // Use a resolution (in minutes) specified in config; default is 60 (i.e. hourly)
    const resolution = this.config.resolution || 60;
    const binsPerHour = 60 / resolution;
    const totalBins = 24 * binsPerHour;

    // Auto-calculate start and end bin based on non-zero measurements
    let autoStartBin = totalBins;
    let autoEndBin = 0;
    this.grid.forEach((entry) => {
      entry.vals.forEach((val, idx) => {
        if (val && Number(val) !== 0) {
          // Approximate to the nearest whole hour
          autoStartBin = Math.floor(Math.min(autoStartBin, idx) / 12) * 12;
          autoEndBin = Math.ceil(Math.max(autoEndBin, idx) / 12) * 12 - 1;
        }
      });
    });
    if (autoStartBin === totalBins) {
      autoStartBin = 0;
      autoEndBin = totalBins - 1;
    }

    return html`
      <ha-card header="${this.meta.title}" id="card">
        <div class="card-content">
          <table>
            <thead>
              <tr class="hr${this.myhass.locale.time_format}">
                <th class="hm-row-title">
                  ${this.myhass.localize(
                    "ui.dialogs.helper_settings.input_datetime.date"
                  )}
                </th>
                ${this.date_table_headers(autoStartBin, autoEndBin, resolution)}
              </tr>
            </thead>
            <tbody>
              ${this.grid.map(
                (entry, row) =>
                  html`<tr>
                    <td class="hm-row-title">${entry.date}</td>
                    ${(() => {
                      let cells = [];
                      for (let idx = autoStartBin; idx <= autoEndBin; idx++) {
                        let util = entry.vals[idx];
                        let css_class = "hm-box";
                        let r = util;
                        if (r === null) {
                          css_class += " null";
                        }
                        if (this.meta.scale.type === "relative") {
                          const diff = this.meta.data.max - this.meta.data.min;
                          r = (util - this.meta.data.min) / diff;
                          if (r < 0) {
                            r = 0;
                          }
                          if (r > 1) {
                            r = 1;
                          }
                        }
                        const col = this.meta.scale.gradient(r);
                        cells.push(html` <td
                          @click="${this.toggle_tooltip}"
                          class="${css_class}"
                          data-val="${util}"
                          data-row="${row}"
                          data-bin="${idx}"
                          style="color: ${col}"
                        ></td>`);
                      }
                      return cells;
                    })()}
                  </tr>`
              )}
            </tbody>
          </table>
          ${this.render_status()} ${this.render_legend()}
          ${this.render_tooltip(resolution)}
        </div>
      </ha-card>
    `;
  }

  date_table_headers(startBin, endBin, resolution) {
    let headers = [];
    for (let idx = startBin; idx <= endBin; idx++) {
      const minutesTotal = idx * resolution;
      const hour = Math.floor(minutesTotal / 60);
      const minute = minutesTotal % 60;
      if (minute != 0) {
        continue;
      }
      let timeStr = "";
      if (this.myhass.locale.time_format === "12") {
        const dt = new Date(1970, 0, 1, hour, minute);
        timeStr = dt.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      } else {
        timeStr = String(hour);
      }
      headers.push(html`<th>${timeStr}</th>`);
    }
    return headers;
  }

  render_status() {
    if (this.grid_status) {
      return html`<h3>${this.grid_status}</h3>`;
    }
  }

  render_legend() {
    if (this.config.display.legend === false) {
      return;
    }
    const ticks = this.legend_scale(this.meta.scale);
    return html`
      <div class="legend-container">
        <div
          id="legend"
          style="background: linear-gradient(90deg, ${this.meta.scale.css})"
        ></div>
        <div class="tick-container">
          ${ticks.map(
            (tick) => html`
              <div class="legend-tick" style="left: ${tick[0]}%;">
                <div class="caption">${tick[1]} ${this.meta.scale.unit}</div>
              </div>
              <span class="legend-shadow"
                >${tick[1]} ${this.meta.scale.unit}</span
              >
            `
          )}
        </div>
      </div>
    `;
  }

  render_tooltip(resolution) {
    let content = "";
    if (this.selected_element_data) {
      const row = this.selected_element_data.row;
      const bin = parseInt(this.selected_element_data.bin);
      const date = this.grid[row]?.date;
      // Calculate the start and end times for this bin
      const minutesTotal = bin * resolution;
      const hour = Math.floor(minutesTotal / 60);
      const minute = minutesTotal % 60;
      const from = new Date("2022-03-20 00:00:00");
      from.setHours(hour, minute);
      const toMinutes = minutesTotal + resolution;
      const toHour = Math.floor(toMinutes / 60);
      const toMinute = toMinutes % 60;
      const to = new Date("2022-03-20 00:00:00");
      to.setHours(toHour, toMinute);
      let rendered_value;
      if (this.selected_element_data.val === "") {
        rendered_value = this.myhass.localize(
          "ui.components.data-table.no-data"
        );
      } else {
        const val = +parseFloat(this.selected_element_data.val).toFixed(2);
        rendered_value = `${val} ${
          this.meta.scale.unit || this.meta.unit_of_measurement
        }`;
      }
      let time_format = new Intl.DateTimeFormat("sv-SE", {
        hour: "numeric",
        minute: "numeric",
      });
      if (this.myhass.locale.time_format === "12") {
        time_format = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      }
      content = html`
        <div class="meta">
          ${date} ${time_format.format(from)} - ${time_format.format(to)}
        </div>
        <div class="value">${rendered_value}</div>
      `;
    }
    return html`<div
      id="tooltip"
      class="${this.tooltipOpen ? "active" : "hidden"}"
    >
      ${content}
    </div>`;
  }

  legend_scale(scale) {
    let ticks = [];
    if (scale.type === "relative") {
      const diff = this.meta.data.max - this.meta.data.min;
      for (let i = 0; i <= 5; i++) {
        ticks.push([
          i * 20,
          +Number(this.meta.data.min + (diff / 5) * i).toFixed(2),
        ]);
      }
    } else {
      const min = scale.steps[0].value;
      const max = scale.steps[scale.steps.length - 1].value;
      const span = max - min;
      for (const entry of scale.steps) {
        ticks.push([((entry.value - min) / span) * 100, entry.value]);
      }
    }
    return ticks;
  }

  toggle_tooltip(e) {
    const oldSelection = this.renderRoot.querySelector("#selected");
    const card = this.renderRoot.querySelector("#card");
    const tooltip = this.renderRoot.querySelector("#tooltip");
    const target = e.target;
    if (oldSelection) {
      oldSelection.removeAttribute("id");
      if (oldSelection === e.target) {
        this.tooltipOpen = false;
        return;
      }
    }
    this.tooltipOpen = true;
    target.id = "selected";
    const rect = target.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const top = rect.top - cardRect.top;
    const left = rect.left - cardRect.left;
    tooltip.style.top = (top - 50 - rect.height).toString() + "px";
    tooltip.style.left = (left - rect.width / 2 - 70).toString() + "px";
    this.selected_element_data = target.dataset;
  }

  // Helper to interpolate an array of 24 hourly values into finer bins
  interpolateValues(hourlyVals, resolution) {
    const binsPerHour = 60 / resolution;
    const interpolated = [];
    for (let h = 0; h < hourlyVals.length; h++) {
      const current = hourlyVals[h] !== null ? Number(hourlyVals[h]) : 0;
      const next =
        h < hourlyVals.length - 1 && hourlyVals[h + 1] !== null
          ? Number(hourlyVals[h + 1])
          : current;
      for (let i = 0; i < binsPerHour; i++) {
        const t = i / binsPerHour;
        const value = current + (next - current) * t;
        interpolated.push(value);
      }
    }
    return interpolated;
  }

  set hass(hass) {
    if (Date.now() - this.last_render_ts < 10 * 60 * 1000) {
      return;
    }
    this.myhass = hass;
    this.meta = this.populate_meta(hass);
    const consumers = [this.config.entity];
    this.get_recorder(consumers, this.config.days);
    this.last_render_ts = Date.now();
  }

  get_recorder(consumers, days) {
    const now = new Date();
    this.grid_status = undefined;
    const startTime = new Date(now - days * 86400000);
    startTime.setHours(23, 0, 0);
    this.myhass
      .callWS({
        type: "recorder/statistics_during_period",
        statistic_ids: consumers,
        period: "5minute",
        units: {
          energy: "kWh",
          temperature: this.myhass.config.unit_system.temperature,
        },
        start_time: startTime.toISOString(),
        types: ["sum", "mean"],
      })
      .then((recorderResponse) => {
        debugger;
        for (const consumer of consumers) {
          const consumerData = recorderResponse[consumer];
          if (consumerData === undefined) {
            this.grid = [];
            this.grid_status = this.myhass.localize(
              "ui.components.data-table.no-data"
            );
            continue;
          }
          switch (this.meta.state_class) {
            case "measurement":
              this.grid = this.calculate_measurement_values(consumerData);
              break;
            case "total":
            case "total_increasing":
              this.grid = this.calculate_increasing_values(consumerData);
              break;
            default:
              throw new Error(
                `Unknown state_class defined (${this.meta["state_class"]} for ${consumer}.`
              );
          }
        }
        if (
          this.config.data.max === undefined ||
          this.config.data.max === "auto"
        ) {
          this.meta.data.max = this.max_from(this.grid);
        }
        if (
          this.config.data.min === undefined ||
          this.config.data.min === "auto"
        ) {
          this.meta.data.min = this.min_from(this.grid);
        }
      });
  }

  max_from(grid) {
    let vals = [];
    for (const entry of grid) {
      vals = vals.concat(entry.vals);
    }
    return Math.max(...vals);
  }

  min_from(grid) {
    let vals = [];
    for (const entry of grid) {
      vals = vals.concat(entry.vals);
    }
    return Math.min(...vals);
  }

  calculate_measurement_values(consumerData) {
    const resolution = this.config.resolution || 60;
    let grid = [];
    let hourlyValues = Array(288).fill(null);
    let prevDate = null;
    for (const entry of consumerData) {
      const start = new Date(entry.start);
      const hour = start.getHours() * 12 + start.getMinutes() / 5;
      const dateRep = start.toLocaleDateString(this.meta.language, {
        month: "short",
        day: "2-digit",
      });
      if (dateRep !== prevDate && prevDate !== null) {
        let vals = hourlyValues;
        /* if (resolution < 60) {
          vals = this.interpolateValues(hourlyValues, resolution);
        } */
        grid.push({ date: prevDate, nativeDate: start, vals: vals });
        hourlyValues = Array(288).fill(null);
      }
      hourlyValues[hour] = entry.mean;
      prevDate = dateRep;
    }
    if (prevDate !== null) {
      let vals = hourlyValues;
      /* if (resolution < 60) {
        vals = this.interpolateValues(hourlyValues, resolution);
      } */
      grid.push({ date: prevDate, nativeDate: new Date(), vals: vals });
    }
    return grid.reverse();
  }

  calculate_increasing_values(consumerData) {
    const resolution = this.config.resolution || 60;
    let grid = [];
    let prev = null;
    let hourlyValues = Array(24).fill(0);
    let prevDate = null;
    for (const entry of consumerData) {
      const start = new Date(entry.start);
      const hour = start.getHours();
      const dateRep = start.toLocaleDateString(this.meta.language, {
        month: "short",
        day: "2-digit",
      });
      if (dateRep !== prevDate && prev !== null) {
        let vals = hourlyValues;
        if (resolution < 60) {
          vals = this.interpolateValues(hourlyValues, resolution);
        }
        grid.push({ date: prevDate, nativeDate: start, vals: vals });
        hourlyValues = Array(24).fill(0);
      }
      if (prev !== null) {
        const util = (entry.sum - prev).toFixed(2);
        hourlyValues[hour] = util;
      }
      prev = entry.sum;
      prevDate = dateRep;
    }
    if (prevDate !== null) {
      let vals = hourlyValues;
      if (resolution < 60) {
        vals = this.interpolateValues(hourlyValues, resolution);
      }
      grid.push({ date: prevDate, nativeDate: new Date(), vals: vals });
    }
    return grid.reverse();
  }

  populate_meta(hass) {
    const consumerAttributes = hass.states[this.config.entity].attributes;
    const device_class =
      consumerAttributes.device_class ?? this.config.device_class;
    return {
      unit_of_measurement: consumerAttributes.unit_of_measurement,
      state_class: consumerAttributes.state_class,
      device_class: device_class,
      language: hass.selectedLanguage ?? hass.language ?? "en",
      scale: this.scales.get_scale(
        this.config.scale ?? this.scales.defaults_for(device_class),
        device_class,
        this.myhass.config.unit_system
      ),
      title:
        this.config.title ??
        (this.config.title === null
          ? undefined
          : consumerAttributes.friendly_name),
      data: {
        max: this.config.data.max,
        min: this.config.data.min,
      },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    if (config.days && config.days <= 0) {
      throw new Error("`days` need to be 1 or higher");
    }
    this.config = {
      title: config.title,
      days: config.days ?? 21,
      entity: config.entity,
      scale: config.scale,
      data: config.data ?? {},
      display: config.display ?? {},
      resolution: config.resolution || 5,
    };
    if (
      this.config.data.max !== undefined &&
      this.config.data.max !== "auto" &&
      typeof this.config.data.max !== "number"
    ) {
      throw new Error("`data.max` need to be either `auto` or a number");
    }
    if (
      this.config.data.min !== undefined &&
      this.config.data.min !== "auto" &&
      typeof this.config.data.min !== "number"
    ) {
      throw new Error("`data.min` need to be either `auto` or a number");
    }
    this.last_render_ts = 0;
  }

  getCardSize() {
    if (!this.config.days) {
      return 1;
    } else {
      return 1 + Math.ceil(this.config.days / 6);
    }
  }

  static styles = css`
    /* Heatmap table */
    table {
      border: none;
      border-spacing: 0px;
      table-layout: fixed;
      width: 100%;
      pointer-events: none;
      user-drag: none;
      user-select: none;
      color: var(--secondary-text-color);
    }
    th {
      position: relative;
      font-weight: normal;
      vertical-align: bottom;
    }
    th:not(.hm-row-title) {
      text-align: center;
      white-space: nowrap;
    }
    tr.hr12 th:not(.hm-row-title) {
      font-size: 70%;
    }
    tr {
      line-height: 1.1;
      overflow: hidden;
      font-size: 90%;
    }
    .hm-row-title {
      text-align: left;
      max-height: 20px;
      min-width: 50px;
      width: 50px;
    }
    .hm-box {
      background-color: currentcolor;
      pointer-events: auto;
    }
    #selected {
      outline: 6px currentcolor solid;
      z-index: 2;
      margin: 3px;
      position: relative;
      box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 1),
        0px 0px 0px 8px rgba(255, 255, 255, 1);
    }
    /* Legend */
    .legend-container {
      margin-top: 20px;
      width: 80%;
      margin-left: auto;
      margin-right: 5%;
      position: relative;
    }
    .tick-container {
      position: relative;
      left: -10px;
    }
    #legend {
      height: 10px;
      outline-style: solid;
      outline-width: 1px;
    }
    .legend-tick {
      position: absolute;
      top: 10px;
      height: 10px;
      vertical-align: bottom;
      border-left-style: solid;
      border-left-width: 1px;
      white-space: nowrap;
      text-align: right;
      opacity: 0.7;
    }
    .legend-container .caption {
      position: relative;
      top: -15px;
      transform: translateY(100%) rotate(90deg);
      transform-origin: center left;
      font-size: 80%;
      text-align: left;
    }
    span.legend-shadow {
      margin-top: 15px;
      position: relative;
      border-color: red;
      border-style: solid;
      writing-mode: vertical-rl;
      transform-origin: bottom left;
      font-size: 80%;
      line-height: 0.2;
      visibility: hidden;
    }
    /* Detail view */
    #tooltip {
      display: none;
      z-index: 1;
      position: absolute;
      padding: 6px;
      border-radius: 4px;
      background: var(
        --ha-card-background,
        var(--card-background-color, white)
      );
      border-color: currentcolor;
      border-width: 1px;
      border-style: solid;
      white-space: nowrap;
    }
    #tooltip.active {
      display: block;
    }
    #tooltip div.meta {
      font-size: 90%;
    }
  `;
}

customElements.define("heatmap-card", HeatmapCard);
