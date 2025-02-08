(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // lib/chroma.js
  var require_chroma = __commonJS({
    "lib/chroma.js"(exports, module) {
      !function(r, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).chroma = e();
      }(exports, function() {
        "use strict";
        for (var r = function(r2, e2, n2) {
          return void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), r2 < e2 ? e2 : r2 > n2 ? n2 : r2;
        }, e = r, n = {}, t = 0, a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; t < a.length; t += 1) {
          var f = a[t];
          n["[object " + f + "]"] = f.toLowerCase();
        }
        var o = /* @__PURE__ */ __name(function(r2) {
          return n[Object.prototype.toString.call(r2)] || "object";
        }, "o"), u = o, c = o, i = Math.PI, l = { clip_rgb: /* @__PURE__ */ __name(function(r2) {
          r2._clipped = false, r2._unclipped = r2.slice(0);
          for (var n2 = 0; n2 <= 3; n2++) n2 < 3 ? ((r2[n2] < 0 || r2[n2] > 255) && (r2._clipped = true), r2[n2] = e(r2[n2], 0, 255)) : 3 === n2 && (r2[n2] = e(r2[n2], 0, 1));
          return r2;
        }, "clip_rgb"), limit: r, type: o, unpack: /* @__PURE__ */ __name(function(r2, e2) {
          return void 0 === e2 && (e2 = null), r2.length >= 3 ? Array.prototype.slice.call(r2) : "object" == u(r2[0]) && e2 ? e2.split("").filter(function(e3) {
            return void 0 !== r2[0][e3];
          }).map(function(e3) {
            return r2[0][e3];
          }) : r2[0];
        }, "unpack"), last: /* @__PURE__ */ __name(function(r2) {
          if (r2.length < 2) return null;
          var e2 = r2.length - 1;
          return "string" == c(r2[e2]) ? r2[e2].toLowerCase() : null;
        }, "last"), PI: i, TWOPI: 2 * i, PITHIRD: i / 3, DEG2RAD: i / 180, RAD2DEG: 180 / i }, h = { format: {}, autodetect: [] }, s = l.last, d = l.clip_rgb, b = l.type, p = h, g = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = this;
          if ("object" === b(r2[0]) && r2[0].constructor && r2[0].constructor === this.constructor) return r2[0];
          var t2 = s(r2), a2 = false;
          if (!t2) {
            a2 = true, p.sorted || (p.autodetect = p.autodetect.sort(function(r3, e3) {
              return e3.p - r3.p;
            }), p.sorted = true);
            for (var f2 = 0, o2 = p.autodetect; f2 < o2.length; f2 += 1) {
              var u2 = o2[f2];
              if (t2 = u2.test.apply(u2, r2)) break;
            }
          }
          if (!p.format[t2]) throw new Error("unknown format: " + r2);
          var c2 = p.format[t2].apply(null, a2 ? r2 : r2.slice(0, -1));
          n2._rgb = d(c2), 3 === n2._rgb.length && n2._rgb.push(1);
        }, "g");
        g.prototype.toString = function() {
          return "function" == b(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
        };
        var v = g, m = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(m.Color, [null].concat(r2)))();
        }, "m");
        m.Color = v, m.version = "2.4.2";
        var y = m, k = l.unpack, w = Math.max, M = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = k(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = 1 - w(t2 /= 255, w(a2 /= 255, f2 /= 255)), u2 = o2 < 1 ? 1 / (1 - o2) : 0, c2 = (1 - t2 - o2) * u2, i2 = (1 - a2 - o2) * u2, l2 = (1 - f2 - o2) * u2;
          return [c2, i2, l2, o2];
        }, "M"), N = l.unpack, _ = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = (r2 = N(r2, "cmyk"))[0], t2 = r2[1], a2 = r2[2], f2 = r2[3], o2 = r2.length > 4 ? r2[4] : 1;
          return 1 === f2 ? [0, 0, 0, o2] : [n2 >= 1 ? 0 : 255 * (1 - n2) * (1 - f2), t2 >= 1 ? 0 : 255 * (1 - t2) * (1 - f2), a2 >= 1 ? 0 : 255 * (1 - a2) * (1 - f2), o2];
        }, "_"), x = y, A = v, E = h, F = l.unpack, P = l.type, O = M;
        A.prototype.cmyk = function() {
          return O(this._rgb);
        }, x.cmyk = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(A, [null].concat(r2, ["cmyk"])))();
        }, E.format.cmyk = _, E.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = F(r2, "cmyk"), "array" === P(r2) && 4 === r2.length) return "cmyk";
        }, "test") });
        var j = l.unpack, G = l.last, R = /* @__PURE__ */ __name(function(r2) {
          return Math.round(100 * r2) / 100;
        }, "R"), q = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = j(r2, "hsla"), t2 = G(r2) || "lsa";
          return n2[0] = R(n2[0] || 0), n2[1] = R(100 * n2[1]) + "%", n2[2] = R(100 * n2[2]) + "%", "hsla" === t2 || n2.length > 3 && n2[3] < 1 ? (n2[3] = n2.length > 3 ? n2[3] : 1, t2 = "hsla") : n2.length = 3, t2 + "(" + n2.join(",") + ")";
        }, "q"), L = l.unpack, I = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = (r2 = L(r2, "rgba"))[0], t2 = r2[1], a2 = r2[2];
          n2 /= 255, t2 /= 255, a2 /= 255;
          var f2, o2, u2 = Math.min(n2, t2, a2), c2 = Math.max(n2, t2, a2), i2 = (c2 + u2) / 2;
          return c2 === u2 ? (f2 = 0, o2 = Number.NaN) : f2 = i2 < 0.5 ? (c2 - u2) / (c2 + u2) : (c2 - u2) / (2 - c2 - u2), n2 == c2 ? o2 = (t2 - a2) / (c2 - u2) : t2 == c2 ? o2 = 2 + (a2 - n2) / (c2 - u2) : a2 == c2 && (o2 = 4 + (n2 - t2) / (c2 - u2)), (o2 *= 60) < 0 && (o2 += 360), r2.length > 3 && void 0 !== r2[3] ? [o2, f2, i2, r2[3]] : [o2, f2, i2];
        }, "I"), B = l.unpack, C = l.last, D = q, Y = I, S = Math.round, T = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = B(r2, "rgba"), t2 = C(r2) || "rgb";
          return "hsl" == t2.substr(0, 3) ? D(Y(n2), t2) : (n2[0] = S(n2[0]), n2[1] = S(n2[1]), n2[2] = S(n2[2]), ("rgba" === t2 || n2.length > 3 && n2[3] < 1) && (n2[3] = n2.length > 3 ? n2[3] : 1, t2 = "rgba"), t2 + "(" + n2.slice(0, "rgb" === t2 ? 3 : 4).join(",") + ")");
        }, "T"), $ = l.unpack, z = Math.round, X = /* @__PURE__ */ __name(function() {
          for (var r2, e2 = [], n2 = arguments.length; n2--; ) e2[n2] = arguments[n2];
          var t2, a2, f2, o2 = (e2 = $(e2, "hsl"))[0], u2 = e2[1], c2 = e2[2];
          if (0 === u2) t2 = a2 = f2 = 255 * c2;
          else {
            var i2 = [0, 0, 0], l2 = [0, 0, 0], h2 = c2 < 0.5 ? c2 * (1 + u2) : c2 + u2 - c2 * u2, s2 = 2 * c2 - h2, d2 = o2 / 360;
            i2[0] = d2 + 1 / 3, i2[1] = d2, i2[2] = d2 - 1 / 3;
            for (var b2 = 0; b2 < 3; b2++) i2[b2] < 0 && (i2[b2] += 1), i2[b2] > 1 && (i2[b2] -= 1), 6 * i2[b2] < 1 ? l2[b2] = s2 + 6 * (h2 - s2) * i2[b2] : 2 * i2[b2] < 1 ? l2[b2] = h2 : 3 * i2[b2] < 2 ? l2[b2] = s2 + (h2 - s2) * (2 / 3 - i2[b2]) * 6 : l2[b2] = s2;
            t2 = (r2 = [z(255 * l2[0]), z(255 * l2[1]), z(255 * l2[2])])[0], a2 = r2[1], f2 = r2[2];
          }
          return e2.length > 3 ? [t2, a2, f2, e2[3]] : [t2, a2, f2, 1];
        }, "X"), U = X, V = h, W = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, K = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Z = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, H = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, J = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Q = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, rr = Math.round, er = /* @__PURE__ */ __name(function(r2) {
          var e2;
          if (r2 = r2.toLowerCase().trim(), V.format.named) try {
            return V.format.named(r2);
          } catch (r3) {
          }
          if (e2 = r2.match(W)) {
            for (var n2 = e2.slice(1, 4), t2 = 0; t2 < 3; t2++) n2[t2] = +n2[t2];
            return n2[3] = 1, n2;
          }
          if (e2 = r2.match(K)) {
            for (var a2 = e2.slice(1, 5), f2 = 0; f2 < 4; f2++) a2[f2] = +a2[f2];
            return a2;
          }
          if (e2 = r2.match(Z)) {
            for (var o2 = e2.slice(1, 4), u2 = 0; u2 < 3; u2++) o2[u2] = rr(2.55 * o2[u2]);
            return o2[3] = 1, o2;
          }
          if (e2 = r2.match(H)) {
            for (var c2 = e2.slice(1, 5), i2 = 0; i2 < 3; i2++) c2[i2] = rr(2.55 * c2[i2]);
            return c2[3] = +c2[3], c2;
          }
          if (e2 = r2.match(J)) {
            var l2 = e2.slice(1, 4);
            l2[1] *= 0.01, l2[2] *= 0.01;
            var h2 = U(l2);
            return h2[3] = 1, h2;
          }
          if (e2 = r2.match(Q)) {
            var s2 = e2.slice(1, 4);
            s2[1] *= 0.01, s2[2] *= 0.01;
            var d2 = U(s2);
            return d2[3] = +e2[4], d2;
          }
        }, "er");
        er.test = function(r2) {
          return W.test(r2) || K.test(r2) || Z.test(r2) || H.test(r2) || J.test(r2) || Q.test(r2);
        };
        var nr = y, tr = v, ar = h, fr = l.type, or = T, ur = er;
        tr.prototype.css = function(r2) {
          return or(this._rgb, r2);
        }, nr.css = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(tr, [null].concat(r2, ["css"])))();
        }, ar.format.css = ur, ar.autodetect.push({ p: 5, test: /* @__PURE__ */ __name(function(r2) {
          for (var e2 = [], n2 = arguments.length - 1; n2-- > 0; ) e2[n2] = arguments[n2 + 1];
          if (!e2.length && "string" === fr(r2) && ur.test(r2)) return "css";
        }, "test") });
        var cr = v, ir = y, lr = l.unpack;
        h.format.gl = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = lr(r2, "rgba");
          return n2[0] *= 255, n2[1] *= 255, n2[2] *= 255, n2;
        }, ir.gl = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(cr, [null].concat(r2, ["gl"])))();
        }, cr.prototype.gl = function() {
          var r2 = this._rgb;
          return [r2[0] / 255, r2[1] / 255, r2[2] / 255, r2[3]];
        };
        var hr = l.unpack, sr = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2, t2 = hr(r2, "rgb"), a2 = t2[0], f2 = t2[1], o2 = t2[2], u2 = Math.min(a2, f2, o2), c2 = Math.max(a2, f2, o2), i2 = c2 - u2, l2 = 100 * i2 / 255, h2 = u2 / (255 - i2) * 100;
          return 0 === i2 ? n2 = Number.NaN : (a2 === c2 && (n2 = (f2 - o2) / i2), f2 === c2 && (n2 = 2 + (o2 - a2) / i2), o2 === c2 && (n2 = 4 + (a2 - f2) / i2), (n2 *= 60) < 0 && (n2 += 360)), [n2, l2, h2];
        }, "sr"), dr = l.unpack, br = Math.floor, pr = /* @__PURE__ */ __name(function() {
          for (var r2, e2, n2, t2, a2, f2, o2 = [], u2 = arguments.length; u2--; ) o2[u2] = arguments[u2];
          var c2, i2, l2, h2 = (o2 = dr(o2, "hcg"))[0], s2 = o2[1], d2 = o2[2];
          d2 *= 255;
          var b2 = 255 * s2;
          if (0 === s2) c2 = i2 = l2 = d2;
          else {
            360 === h2 && (h2 = 0), h2 > 360 && (h2 -= 360), h2 < 0 && (h2 += 360);
            var p2 = br(h2 /= 60), g2 = h2 - p2, v2 = d2 * (1 - s2), m2 = v2 + b2 * (1 - g2), y2 = v2 + b2 * g2, k2 = v2 + b2;
            switch (p2) {
              case 0:
                c2 = (r2 = [k2, y2, v2])[0], i2 = r2[1], l2 = r2[2];
                break;
              case 1:
                c2 = (e2 = [m2, k2, v2])[0], i2 = e2[1], l2 = e2[2];
                break;
              case 2:
                c2 = (n2 = [v2, k2, y2])[0], i2 = n2[1], l2 = n2[2];
                break;
              case 3:
                c2 = (t2 = [v2, m2, k2])[0], i2 = t2[1], l2 = t2[2];
                break;
              case 4:
                c2 = (a2 = [y2, v2, k2])[0], i2 = a2[1], l2 = a2[2];
                break;
              case 5:
                c2 = (f2 = [k2, v2, m2])[0], i2 = f2[1], l2 = f2[2];
            }
          }
          return [c2, i2, l2, o2.length > 3 ? o2[3] : 1];
        }, "pr"), gr = l.unpack, vr = l.type, mr = y, yr = v, kr = h, wr = sr;
        yr.prototype.hcg = function() {
          return wr(this._rgb);
        }, mr.hcg = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(yr, [null].concat(r2, ["hcg"])))();
        }, kr.format.hcg = pr, kr.autodetect.push({ p: 1, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = gr(r2, "hcg"), "array" === vr(r2) && 3 === r2.length) return "hcg";
        }, "test") });
        var Mr = l.unpack, Nr = l.last, _r = Math.round, xr = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = Mr(r2, "rgba"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = n2[3], u2 = Nr(r2) || "auto";
          void 0 === o2 && (o2 = 1), "auto" === u2 && (u2 = o2 < 1 ? "rgba" : "rgb");
          var c2 = (t2 = _r(t2)) << 16 | (a2 = _r(a2)) << 8 | (f2 = _r(f2)), i2 = "000000" + c2.toString(16);
          i2 = i2.substr(i2.length - 6);
          var l2 = "0" + _r(255 * o2).toString(16);
          switch (l2 = l2.substr(l2.length - 2), u2.toLowerCase()) {
            case "rgba":
              return "#" + i2 + l2;
            case "argb":
              return "#" + l2 + i2;
            default:
              return "#" + i2;
          }
        }, "xr"), Ar = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Er = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Fr = /* @__PURE__ */ __name(function(r2) {
          if (r2.match(Ar)) {
            4 !== r2.length && 7 !== r2.length || (r2 = r2.substr(1)), 3 === r2.length && (r2 = (r2 = r2.split(""))[0] + r2[0] + r2[1] + r2[1] + r2[2] + r2[2]);
            var e2 = parseInt(r2, 16);
            return [e2 >> 16, e2 >> 8 & 255, 255 & e2, 1];
          }
          if (r2.match(Er)) {
            5 !== r2.length && 9 !== r2.length || (r2 = r2.substr(1)), 4 === r2.length && (r2 = (r2 = r2.split(""))[0] + r2[0] + r2[1] + r2[1] + r2[2] + r2[2] + r2[3] + r2[3]);
            var n2 = parseInt(r2, 16);
            return [n2 >> 24 & 255, n2 >> 16 & 255, n2 >> 8 & 255, Math.round((255 & n2) / 255 * 100) / 100];
          }
          throw new Error("unknown hex color: " + r2);
        }, "Fr"), Pr = y, Or = v, jr = l.type, Gr = h, Rr = xr;
        Or.prototype.hex = function(r2) {
          return Rr(this._rgb, r2);
        }, Pr.hex = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(Or, [null].concat(r2, ["hex"])))();
        }, Gr.format.hex = Fr, Gr.autodetect.push({ p: 4, test: /* @__PURE__ */ __name(function(r2) {
          for (var e2 = [], n2 = arguments.length - 1; n2-- > 0; ) e2[n2] = arguments[n2 + 1];
          if (!e2.length && "string" === jr(r2) && [3, 4, 5, 6, 7, 8, 9].indexOf(r2.length) >= 0) return "hex";
        }, "test") });
        var qr = l.unpack, Lr = l.TWOPI, Ir = Math.min, Br = Math.sqrt, Cr = Math.acos, Dr = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2, t2 = qr(r2, "rgb"), a2 = t2[0], f2 = t2[1], o2 = t2[2], u2 = Ir(a2 /= 255, f2 /= 255, o2 /= 255), c2 = (a2 + f2 + o2) / 3, i2 = c2 > 0 ? 1 - u2 / c2 : 0;
          return 0 === i2 ? n2 = NaN : (n2 = (a2 - f2 + (a2 - o2)) / 2, n2 /= Br((a2 - f2) * (a2 - f2) + (a2 - o2) * (f2 - o2)), n2 = Cr(n2), o2 > f2 && (n2 = Lr - n2), n2 /= Lr), [360 * n2, i2, c2];
        }, "Dr"), Yr = l.unpack, Sr = l.limit, Tr = l.TWOPI, $r = l.PITHIRD, zr = Math.cos, Xr = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2, t2, a2, f2 = (r2 = Yr(r2, "hsi"))[0], o2 = r2[1], u2 = r2[2];
          return isNaN(f2) && (f2 = 0), isNaN(o2) && (o2 = 0), f2 > 360 && (f2 -= 360), f2 < 0 && (f2 += 360), (f2 /= 360) < 1 / 3 ? t2 = 1 - ((a2 = (1 - o2) / 3) + (n2 = (1 + o2 * zr(Tr * f2) / zr($r - Tr * f2)) / 3)) : f2 < 2 / 3 ? a2 = 1 - ((n2 = (1 - o2) / 3) + (t2 = (1 + o2 * zr(Tr * (f2 -= 1 / 3)) / zr($r - Tr * f2)) / 3)) : n2 = 1 - ((t2 = (1 - o2) / 3) + (a2 = (1 + o2 * zr(Tr * (f2 -= 2 / 3)) / zr($r - Tr * f2)) / 3)), [255 * (n2 = Sr(u2 * n2 * 3)), 255 * (t2 = Sr(u2 * t2 * 3)), 255 * (a2 = Sr(u2 * a2 * 3)), r2.length > 3 ? r2[3] : 1];
        }, "Xr"), Ur = l.unpack, Vr = l.type, Wr = y, Kr = v, Zr = h, Hr = Dr;
        Kr.prototype.hsi = function() {
          return Hr(this._rgb);
        }, Wr.hsi = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(Kr, [null].concat(r2, ["hsi"])))();
        }, Zr.format.hsi = Xr, Zr.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = Ur(r2, "hsi"), "array" === Vr(r2) && 3 === r2.length) return "hsi";
        }, "test") });
        var Jr = l.unpack, Qr = l.type, re = y, ee = v, ne = h, te = I;
        ee.prototype.hsl = function() {
          return te(this._rgb);
        }, re.hsl = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(ee, [null].concat(r2, ["hsl"])))();
        }, ne.format.hsl = X, ne.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = Jr(r2, "hsl"), "array" === Qr(r2) && 3 === r2.length) return "hsl";
        }, "test") });
        var ae = l.unpack, fe = Math.min, oe = Math.max, ue = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2, t2, a2, f2 = (r2 = ae(r2, "rgb"))[0], o2 = r2[1], u2 = r2[2], c2 = fe(f2, o2, u2), i2 = oe(f2, o2, u2), l2 = i2 - c2;
          return a2 = i2 / 255, 0 === i2 ? (n2 = Number.NaN, t2 = 0) : (t2 = l2 / i2, f2 === i2 && (n2 = (o2 - u2) / l2), o2 === i2 && (n2 = 2 + (u2 - f2) / l2), u2 === i2 && (n2 = 4 + (f2 - o2) / l2), (n2 *= 60) < 0 && (n2 += 360)), [n2, t2, a2];
        }, "ue"), ce = l.unpack, ie = Math.floor, le = /* @__PURE__ */ __name(function() {
          for (var r2, e2, n2, t2, a2, f2, o2 = [], u2 = arguments.length; u2--; ) o2[u2] = arguments[u2];
          var c2, i2, l2, h2 = (o2 = ce(o2, "hsv"))[0], s2 = o2[1], d2 = o2[2];
          if (d2 *= 255, 0 === s2) c2 = i2 = l2 = d2;
          else {
            360 === h2 && (h2 = 0), h2 > 360 && (h2 -= 360), h2 < 0 && (h2 += 360);
            var b2 = ie(h2 /= 60), p2 = h2 - b2, g2 = d2 * (1 - s2), v2 = d2 * (1 - s2 * p2), m2 = d2 * (1 - s2 * (1 - p2));
            switch (b2) {
              case 0:
                c2 = (r2 = [d2, m2, g2])[0], i2 = r2[1], l2 = r2[2];
                break;
              case 1:
                c2 = (e2 = [v2, d2, g2])[0], i2 = e2[1], l2 = e2[2];
                break;
              case 2:
                c2 = (n2 = [g2, d2, m2])[0], i2 = n2[1], l2 = n2[2];
                break;
              case 3:
                c2 = (t2 = [g2, v2, d2])[0], i2 = t2[1], l2 = t2[2];
                break;
              case 4:
                c2 = (a2 = [m2, g2, d2])[0], i2 = a2[1], l2 = a2[2];
                break;
              case 5:
                c2 = (f2 = [d2, g2, v2])[0], i2 = f2[1], l2 = f2[2];
            }
          }
          return [c2, i2, l2, o2.length > 3 ? o2[3] : 1];
        }, "le"), he = l.unpack, se = l.type, de = y, be = v, pe = h, ge = ue;
        be.prototype.hsv = function() {
          return ge(this._rgb);
        }, de.hsv = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(be, [null].concat(r2, ["hsv"])))();
        }, pe.format.hsv = le, pe.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = he(r2, "hsv"), "array" === se(r2) && 3 === r2.length) return "hsv";
        }, "test") });
        var ve = { Kn: 18, Xn: 0.95047, Yn: 1, Zn: 1.08883, t0: 0.137931034, t1: 0.206896552, t2: 0.12841855, t3: 8856452e-9 }, me = ve, ye = l.unpack, ke = Math.pow, we = /* @__PURE__ */ __name(function(r2) {
          return (r2 /= 255) <= 0.04045 ? r2 / 12.92 : ke((r2 + 0.055) / 1.055, 2.4);
        }, "we"), Me = /* @__PURE__ */ __name(function(r2) {
          return r2 > me.t3 ? ke(r2, 1 / 3) : r2 / me.t2 + me.t0;
        }, "Me"), Ne = /* @__PURE__ */ __name(function(r2, e2, n2) {
          return r2 = we(r2), e2 = we(e2), n2 = we(n2), [Me((0.4124564 * r2 + 0.3575761 * e2 + 0.1804375 * n2) / me.Xn), Me((0.2126729 * r2 + 0.7151522 * e2 + 0.072175 * n2) / me.Yn), Me((0.0193339 * r2 + 0.119192 * e2 + 0.9503041 * n2) / me.Zn)];
        }, "Ne"), _e = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = ye(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = Ne(t2, a2, f2), u2 = o2[0], c2 = o2[1], i2 = o2[2], l2 = 116 * c2 - 16;
          return [l2 < 0 ? 0 : l2, 500 * (u2 - c2), 200 * (c2 - i2)];
        }, "_e"), xe = ve, Ae = l.unpack, Ee = Math.pow, Fe = /* @__PURE__ */ __name(function(r2) {
          return 255 * (r2 <= 304e-5 ? 12.92 * r2 : 1.055 * Ee(r2, 1 / 2.4) - 0.055);
        }, "Fe"), Pe = /* @__PURE__ */ __name(function(r2) {
          return r2 > xe.t1 ? r2 * r2 * r2 : xe.t2 * (r2 - xe.t0);
        }, "Pe"), Oe = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2, t2, a2, f2 = (r2 = Ae(r2, "lab"))[0], o2 = r2[1], u2 = r2[2];
          return t2 = (f2 + 16) / 116, n2 = isNaN(o2) ? t2 : t2 + o2 / 500, a2 = isNaN(u2) ? t2 : t2 - u2 / 200, t2 = xe.Yn * Pe(t2), n2 = xe.Xn * Pe(n2), a2 = xe.Zn * Pe(a2), [Fe(3.2404542 * n2 - 1.5371385 * t2 - 0.4985314 * a2), Fe(-0.969266 * n2 + 1.8760108 * t2 + 0.041556 * a2), Fe(0.0556434 * n2 - 0.2040259 * t2 + 1.0572252 * a2), r2.length > 3 ? r2[3] : 1];
        }, "Oe"), je = l.unpack, Ge = l.type, Re = y, qe = v, Le = h, Ie = _e;
        qe.prototype.lab = function() {
          return Ie(this._rgb);
        }, Re.lab = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(qe, [null].concat(r2, ["lab"])))();
        }, Le.format.lab = Oe, Le.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = je(r2, "lab"), "array" === Ge(r2) && 3 === r2.length) return "lab";
        }, "test") });
        var Be = l.unpack, Ce = l.RAD2DEG, De = Math.sqrt, Ye = Math.atan2, Se = Math.round, Te = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = Be(r2, "lab"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = De(a2 * a2 + f2 * f2), u2 = (Ye(f2, a2) * Ce + 360) % 360;
          return 0 === Se(1e4 * o2) && (u2 = Number.NaN), [t2, o2, u2];
        }, "Te"), $e = l.unpack, ze = _e, Xe = Te, Ue = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = $e(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = ze(t2, a2, f2), u2 = o2[0], c2 = o2[1], i2 = o2[2];
          return Xe(u2, c2, i2);
        }, "Ue"), Ve = l.unpack, We = l.DEG2RAD, Ke = Math.sin, Ze = Math.cos, He = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = Ve(r2, "lch"), t2 = n2[0], a2 = n2[1], f2 = n2[2];
          return isNaN(f2) && (f2 = 0), [t2, Ze(f2 *= We) * a2, Ke(f2) * a2];
        }, "He"), Je = l.unpack, Qe = He, rn = Oe, en = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = (r2 = Je(r2, "lch"))[0], t2 = r2[1], a2 = r2[2], f2 = Qe(n2, t2, a2), o2 = f2[0], u2 = f2[1], c2 = f2[2], i2 = rn(o2, u2, c2), l2 = i2[0], h2 = i2[1], s2 = i2[2];
          return [l2, h2, s2, r2.length > 3 ? r2[3] : 1];
        }, "en"), nn = l.unpack, tn = en, an = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = nn(r2, "hcl").reverse();
          return tn.apply(void 0, n2);
        }, "an"), fn = l.unpack, on = l.type, un = y, cn = v, ln = h, hn = Ue;
        cn.prototype.lch = function() {
          return hn(this._rgb);
        }, cn.prototype.hcl = function() {
          return hn(this._rgb).reverse();
        }, un.lch = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(cn, [null].concat(r2, ["lch"])))();
        }, un.hcl = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(cn, [null].concat(r2, ["hcl"])))();
        }, ln.format.lch = en, ln.format.hcl = an, ["lch", "hcl"].forEach(function(r2) {
          return ln.autodetect.push({ p: 2, test: /* @__PURE__ */ __name(function() {
            for (var e2 = [], n2 = arguments.length; n2--; ) e2[n2] = arguments[n2];
            if (e2 = fn(e2, r2), "array" === on(e2) && 3 === e2.length) return r2;
          }, "test") });
        });
        var sn = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflower: "#6495ed", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }, dn = h, bn = l.type, pn = sn, gn = Fr, vn = xr;
        v.prototype.name = function() {
          for (var r2 = vn(this._rgb, "rgb"), e2 = 0, n2 = Object.keys(pn); e2 < n2.length; e2 += 1) {
            var t2 = n2[e2];
            if (pn[t2] === r2) return t2.toLowerCase();
          }
          return r2;
        }, dn.format.named = function(r2) {
          if (r2 = r2.toLowerCase(), pn[r2]) return gn(pn[r2]);
          throw new Error("unknown color name: " + r2);
        }, dn.autodetect.push({ p: 5, test: /* @__PURE__ */ __name(function(r2) {
          for (var e2 = [], n2 = arguments.length - 1; n2-- > 0; ) e2[n2] = arguments[n2 + 1];
          if (!e2.length && "string" === bn(r2) && pn[r2.toLowerCase()]) return "named";
        }, "test") });
        var mn = l.unpack, yn = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = mn(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2];
          return (t2 << 16) + (a2 << 8) + f2;
        }, "yn"), kn = l.type, wn = /* @__PURE__ */ __name(function(r2) {
          if ("number" == kn(r2) && r2 >= 0 && r2 <= 16777215) return [r2 >> 16, r2 >> 8 & 255, 255 & r2, 1];
          throw new Error("unknown num color: " + r2);
        }, "wn"), Mn = y, Nn = v, _n = h, xn = l.type, An = yn;
        Nn.prototype.num = function() {
          return An(this._rgb);
        }, Mn.num = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(Nn, [null].concat(r2, ["num"])))();
        }, _n.format.num = wn, _n.autodetect.push({ p: 5, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (1 === r2.length && "number" === xn(r2[0]) && r2[0] >= 0 && r2[0] <= 16777215) return "num";
        }, "test") });
        var En = y, Fn = v, Pn = h, On = l.unpack, jn = l.type, Gn = Math.round;
        Fn.prototype.rgb = function(r2) {
          return void 0 === r2 && (r2 = true), false === r2 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Gn);
        }, Fn.prototype.rgba = function(r2) {
          return void 0 === r2 && (r2 = true), this._rgb.slice(0, 4).map(function(e2, n2) {
            return n2 < 3 ? false === r2 ? e2 : Gn(e2) : e2;
          });
        }, En.rgb = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(Fn, [null].concat(r2, ["rgb"])))();
        }, Pn.format.rgb = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = On(r2, "rgba");
          return void 0 === n2[3] && (n2[3] = 1), n2;
        }, Pn.autodetect.push({ p: 3, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = On(r2, "rgba"), "array" === jn(r2) && (3 === r2.length || 4 === r2.length && "number" == jn(r2[3]) && r2[3] >= 0 && r2[3] <= 1)) return "rgb";
        }, "test") });
        var Rn = Math.log, qn = /* @__PURE__ */ __name(function(r2) {
          var e2, n2, t2, a2 = r2 / 100;
          return a2 < 66 ? (e2 = 255, n2 = a2 < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n2 = a2 - 2) + 104.49216199393888 * Rn(n2), t2 = a2 < 20 ? 0 : 0.8274096064007395 * (t2 = a2 - 10) - 254.76935184120902 + 115.67994401066147 * Rn(t2)) : (e2 = 351.97690566805693 + 0.114206453784165 * (e2 = a2 - 55) - 40.25366309332127 * Rn(e2), n2 = 325.4494125711974 + 0.07943456536662342 * (n2 = a2 - 50) - 28.0852963507957 * Rn(n2), t2 = 255), [e2, n2, t2, 1];
        }, "qn"), Ln = qn, In = l.unpack, Bn = Math.round, Cn = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          for (var n2, t2 = In(r2, "rgb"), a2 = t2[0], f2 = t2[2], o2 = 1e3, u2 = 4e4, c2 = 0.4; u2 - o2 > c2; ) {
            var i2 = Ln(n2 = 0.5 * (u2 + o2));
            i2[2] / i2[0] >= f2 / a2 ? u2 = n2 : o2 = n2;
          }
          return Bn(n2);
        }, "Cn"), Dn = y, Yn = v, Sn = h, Tn = Cn;
        Yn.prototype.temp = Yn.prototype.kelvin = Yn.prototype.temperature = function() {
          return Tn(this._rgb);
        }, Dn.temp = Dn.kelvin = Dn.temperature = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(Yn, [null].concat(r2, ["temp"])))();
        }, Sn.format.temp = Sn.format.kelvin = Sn.format.temperature = qn;
        var $n = l.unpack, zn = Math.cbrt, Xn = Math.pow, Un = Math.sign, Vn = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = $n(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = [Wn(t2 / 255), Wn(a2 / 255), Wn(f2 / 255)], u2 = o2[0], c2 = o2[1], i2 = o2[2], l2 = zn(0.4122214708 * u2 + 0.5363325363 * c2 + 0.0514459929 * i2), h2 = zn(0.2119034982 * u2 + 0.6806995451 * c2 + 0.1073969566 * i2), s2 = zn(0.0883024619 * u2 + 0.2817188376 * c2 + 0.6299787005 * i2);
          return [0.2104542553 * l2 + 0.793617785 * h2 - 0.0040720468 * s2, 1.9779984951 * l2 - 2.428592205 * h2 + 0.4505937099 * s2, 0.0259040371 * l2 + 0.7827717662 * h2 - 0.808675766 * s2];
        }, "Vn");
        function Wn(r2) {
          var e2 = Math.abs(r2);
          return e2 < 0.04045 ? r2 / 12.92 : (Un(r2) || 1) * Xn((e2 + 0.055) / 1.055, 2.4);
        }
        __name(Wn, "Wn");
        var Kn = l.unpack, Zn = Math.pow, Hn = Math.sign, Jn = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = (r2 = Kn(r2, "lab"))[0], t2 = r2[1], a2 = r2[2], f2 = Zn(n2 + 0.3963377774 * t2 + 0.2158037573 * a2, 3), o2 = Zn(n2 - 0.1055613458 * t2 - 0.0638541728 * a2, 3), u2 = Zn(n2 - 0.0894841775 * t2 - 1.291485548 * a2, 3);
          return [255 * Qn(4.0767416621 * f2 - 3.3077115913 * o2 + 0.2309699292 * u2), 255 * Qn(-1.2684380046 * f2 + 2.6097574011 * o2 - 0.3413193965 * u2), 255 * Qn(-0.0041960863 * f2 - 0.7034186147 * o2 + 1.707614701 * u2), r2.length > 3 ? r2[3] : 1];
        }, "Jn");
        function Qn(r2) {
          var e2 = Math.abs(r2);
          return e2 > 31308e-7 ? (Hn(r2) || 1) * (1.055 * Zn(e2, 1 / 2.4) - 0.055) : 12.92 * r2;
        }
        __name(Qn, "Qn");
        var rt = l.unpack, et = l.type, nt = y, tt = v, at = h, ft = Vn;
        tt.prototype.oklab = function() {
          return ft(this._rgb);
        }, nt.oklab = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(tt, [null].concat(r2, ["oklab"])))();
        }, at.format.oklab = Jn, at.autodetect.push({ p: 3, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = rt(r2, "oklab"), "array" === et(r2) && 3 === r2.length) return "oklab";
        }, "test") });
        var ot = l.unpack, ut = Vn, ct = Te, it = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = ot(r2, "rgb"), t2 = n2[0], a2 = n2[1], f2 = n2[2], o2 = ut(t2, a2, f2), u2 = o2[0], c2 = o2[1], i2 = o2[2];
          return ct(u2, c2, i2);
        }, "it"), lt = l.unpack, ht = He, st = Jn, dt = /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          var n2 = (r2 = lt(r2, "lch"))[0], t2 = r2[1], a2 = r2[2], f2 = ht(n2, t2, a2), o2 = f2[0], u2 = f2[1], c2 = f2[2], i2 = st(o2, u2, c2), l2 = i2[0], h2 = i2[1], s2 = i2[2];
          return [l2, h2, s2, r2.length > 3 ? r2[3] : 1];
        }, "dt"), bt = l.unpack, pt = l.type, gt = y, vt = v, mt = h, yt = it;
        vt.prototype.oklch = function() {
          return yt(this._rgb);
        }, gt.oklch = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          return new (Function.prototype.bind.apply(vt, [null].concat(r2, ["oklch"])))();
        }, mt.format.oklch = dt, mt.autodetect.push({ p: 3, test: /* @__PURE__ */ __name(function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          if (r2 = bt(r2, "oklch"), "array" === pt(r2) && 3 === r2.length) return "oklch";
        }, "test") });
        var kt = v, wt = l.type;
        kt.prototype.alpha = function(r2, e2) {
          return void 0 === e2 && (e2 = false), void 0 !== r2 && "number" === wt(r2) ? e2 ? (this._rgb[3] = r2, this) : new kt([this._rgb[0], this._rgb[1], this._rgb[2], r2], "rgb") : this._rgb[3];
        }, v.prototype.clipped = function() {
          return this._rgb._clipped || false;
        };
        var Mt = v, Nt = ve;
        Mt.prototype.darken = function(r2) {
          void 0 === r2 && (r2 = 1);
          var e2 = this.lab();
          return e2[0] -= Nt.Kn * r2, new Mt(e2, "lab").alpha(this.alpha(), true);
        }, Mt.prototype.brighten = function(r2) {
          return void 0 === r2 && (r2 = 1), this.darken(-r2);
        }, Mt.prototype.darker = Mt.prototype.darken, Mt.prototype.brighter = Mt.prototype.brighten, v.prototype.get = function(r2) {
          var e2 = r2.split("."), n2 = e2[0], t2 = e2[1], a2 = this[n2]();
          if (t2) {
            var f2 = n2.indexOf(t2) - ("ok" === n2.substr(0, 2) ? 2 : 0);
            if (f2 > -1) return a2[f2];
            throw new Error("unknown channel " + t2 + " in mode " + n2);
          }
          return a2;
        };
        var _t = v, xt = l.type, At = Math.pow;
        _t.prototype.luminance = function(r2) {
          if (void 0 !== r2 && "number" === xt(r2)) {
            if (0 === r2) return new _t([0, 0, 0, this._rgb[3]], "rgb");
            if (1 === r2) return new _t([255, 255, 255, this._rgb[3]], "rgb");
            var e2 = this.luminance(), n2 = 20, t2 = /* @__PURE__ */ __name(function(e3, a3) {
              var f2 = e3.interpolate(a3, 0.5, "rgb"), o2 = f2.luminance();
              return Math.abs(r2 - o2) < 1e-7 || !n2-- ? f2 : o2 > r2 ? t2(e3, f2) : t2(f2, a3);
            }, "t"), a2 = (e2 > r2 ? t2(new _t([0, 0, 0]), this) : t2(this, new _t([255, 255, 255]))).rgb();
            return new _t(a2.concat([this._rgb[3]]));
          }
          return Et.apply(void 0, this._rgb.slice(0, 3));
        };
        var Et = /* @__PURE__ */ __name(function(r2, e2, n2) {
          return 0.2126 * (r2 = Ft(r2)) + 0.7152 * (e2 = Ft(e2)) + 0.0722 * (n2 = Ft(n2));
        }, "Et"), Ft = /* @__PURE__ */ __name(function(r2) {
          return (r2 /= 255) <= 0.03928 ? r2 / 12.92 : At((r2 + 0.055) / 1.055, 2.4);
        }, "Ft"), Pt = {}, Ot = v, jt = l.type, Gt = Pt, Rt = /* @__PURE__ */ __name(function(r2, e2, n2) {
          void 0 === n2 && (n2 = 0.5);
          for (var t2 = [], a2 = arguments.length - 3; a2-- > 0; ) t2[a2] = arguments[a2 + 3];
          var f2 = t2[0] || "lrgb";
          if (Gt[f2] || t2.length || (f2 = Object.keys(Gt)[0]), !Gt[f2]) throw new Error("interpolation mode " + f2 + " is not defined");
          return "object" !== jt(r2) && (r2 = new Ot(r2)), "object" !== jt(e2) && (e2 = new Ot(e2)), Gt[f2](r2, e2, n2).alpha(r2.alpha() + n2 * (e2.alpha() - r2.alpha()));
        }, "Rt"), qt = v, Lt = Rt;
        qt.prototype.mix = qt.prototype.interpolate = function(r2, e2) {
          void 0 === e2 && (e2 = 0.5);
          for (var n2 = [], t2 = arguments.length - 2; t2-- > 0; ) n2[t2] = arguments[t2 + 2];
          return Lt.apply(void 0, [this, r2, e2].concat(n2));
        };
        var It = v;
        It.prototype.premultiply = function(r2) {
          void 0 === r2 && (r2 = false);
          var e2 = this._rgb, n2 = e2[3];
          return r2 ? (this._rgb = [e2[0] * n2, e2[1] * n2, e2[2] * n2, n2], this) : new It([e2[0] * n2, e2[1] * n2, e2[2] * n2, n2], "rgb");
        };
        var Bt = v, Ct = ve;
        Bt.prototype.saturate = function(r2) {
          void 0 === r2 && (r2 = 1);
          var e2 = this.lch();
          return e2[1] += Ct.Kn * r2, e2[1] < 0 && (e2[1] = 0), new Bt(e2, "lch").alpha(this.alpha(), true);
        }, Bt.prototype.desaturate = function(r2) {
          return void 0 === r2 && (r2 = 1), this.saturate(-r2);
        };
        var Dt = v, Yt = l.type;
        Dt.prototype.set = function(r2, e2, n2) {
          void 0 === n2 && (n2 = false);
          var t2 = r2.split("."), a2 = t2[0], f2 = t2[1], o2 = this[a2]();
          if (f2) {
            var u2 = a2.indexOf(f2) - ("ok" === a2.substr(0, 2) ? 2 : 0);
            if (u2 > -1) {
              if ("string" == Yt(e2)) switch (e2.charAt(0)) {
                case "+":
                case "-":
                  o2[u2] += +e2;
                  break;
                case "*":
                  o2[u2] *= +e2.substr(1);
                  break;
                case "/":
                  o2[u2] /= +e2.substr(1);
                  break;
                default:
                  o2[u2] = +e2;
              }
              else {
                if ("number" !== Yt(e2)) throw new Error("unsupported value for Color.set");
                o2[u2] = e2;
              }
              var c2 = new Dt(o2, a2);
              return n2 ? (this._rgb = c2._rgb, this) : c2;
            }
            throw new Error("unknown channel " + f2 + " in mode " + a2);
          }
          return o2;
        };
        var St = v;
        Pt.rgb = function(r2, e2, n2) {
          var t2 = r2._rgb, a2 = e2._rgb;
          return new St(t2[0] + n2 * (a2[0] - t2[0]), t2[1] + n2 * (a2[1] - t2[1]), t2[2] + n2 * (a2[2] - t2[2]), "rgb");
        };
        var Tt = v, $t = Math.sqrt, zt = Math.pow;
        Pt.lrgb = function(r2, e2, n2) {
          var t2 = r2._rgb, a2 = t2[0], f2 = t2[1], o2 = t2[2], u2 = e2._rgb, c2 = u2[0], i2 = u2[1], l2 = u2[2];
          return new Tt($t(zt(a2, 2) * (1 - n2) + zt(c2, 2) * n2), $t(zt(f2, 2) * (1 - n2) + zt(i2, 2) * n2), $t(zt(o2, 2) * (1 - n2) + zt(l2, 2) * n2), "rgb");
        };
        var Xt = v;
        Pt.lab = function(r2, e2, n2) {
          var t2 = r2.lab(), a2 = e2.lab();
          return new Xt(t2[0] + n2 * (a2[0] - t2[0]), t2[1] + n2 * (a2[1] - t2[1]), t2[2] + n2 * (a2[2] - t2[2]), "lab");
        };
        var Ut = v, Vt = /* @__PURE__ */ __name(function(r2, e2, n2, t2) {
          var a2, f2, o2, u2, c2, i2, l2, h2, s2, d2, b2, p2, g2;
          return "hsl" === t2 ? (o2 = r2.hsl(), u2 = e2.hsl()) : "hsv" === t2 ? (o2 = r2.hsv(), u2 = e2.hsv()) : "hcg" === t2 ? (o2 = r2.hcg(), u2 = e2.hcg()) : "hsi" === t2 ? (o2 = r2.hsi(), u2 = e2.hsi()) : "lch" === t2 || "hcl" === t2 ? (t2 = "hcl", o2 = r2.hcl(), u2 = e2.hcl()) : "oklch" === t2 && (o2 = r2.oklch().reverse(), u2 = e2.oklch().reverse()), "h" !== t2.substr(0, 1) && "oklch" !== t2 || (c2 = (a2 = o2)[0], l2 = a2[1], s2 = a2[2], i2 = (f2 = u2)[0], h2 = f2[1], d2 = f2[2]), isNaN(c2) || isNaN(i2) ? isNaN(c2) ? isNaN(i2) ? p2 = Number.NaN : (p2 = i2, 1 != s2 && 0 != s2 || "hsv" == t2 || (b2 = h2)) : (p2 = c2, 1 != d2 && 0 != d2 || "hsv" == t2 || (b2 = l2)) : p2 = c2 + n2 * (i2 > c2 && i2 - c2 > 180 ? i2 - (c2 + 360) : i2 < c2 && c2 - i2 > 180 ? i2 + 360 - c2 : i2 - c2), void 0 === b2 && (b2 = l2 + n2 * (h2 - l2)), g2 = s2 + n2 * (d2 - s2), new Ut("oklch" === t2 ? [g2, b2, p2] : [p2, b2, g2], t2);
        }, "Vt"), Wt = Vt, Kt = /* @__PURE__ */ __name(function(r2, e2, n2) {
          return Wt(r2, e2, n2, "lch");
        }, "Kt");
        Pt.lch = Kt, Pt.hcl = Kt;
        var Zt = v;
        Pt.num = function(r2, e2, n2) {
          var t2 = r2.num(), a2 = e2.num();
          return new Zt(t2 + n2 * (a2 - t2), "num");
        };
        var Ht = Vt;
        Pt.hcg = function(r2, e2, n2) {
          return Ht(r2, e2, n2, "hcg");
        };
        var Jt = Vt;
        Pt.hsi = function(r2, e2, n2) {
          return Jt(r2, e2, n2, "hsi");
        };
        var Qt = Vt;
        Pt.hsl = function(r2, e2, n2) {
          return Qt(r2, e2, n2, "hsl");
        };
        var ra = Vt;
        Pt.hsv = function(r2, e2, n2) {
          return ra(r2, e2, n2, "hsv");
        };
        var ea = v;
        Pt.oklab = function(r2, e2, n2) {
          var t2 = r2.oklab(), a2 = e2.oklab();
          return new ea(t2[0] + n2 * (a2[0] - t2[0]), t2[1] + n2 * (a2[1] - t2[1]), t2[2] + n2 * (a2[2] - t2[2]), "oklab");
        };
        var na = Vt;
        Pt.oklch = function(r2, e2, n2) {
          return na(r2, e2, n2, "oklch");
        };
        var ta = v, aa = l.clip_rgb, fa = Math.pow, oa = Math.sqrt, ua = Math.PI, ca = Math.cos, ia = Math.sin, la = Math.atan2, ha = /* @__PURE__ */ __name(function(r2, e2) {
          for (var n2 = r2.length, t2 = [0, 0, 0, 0], a2 = 0; a2 < r2.length; a2++) {
            var f2 = r2[a2], o2 = e2[a2] / n2, u2 = f2._rgb;
            t2[0] += fa(u2[0], 2) * o2, t2[1] += fa(u2[1], 2) * o2, t2[2] += fa(u2[2], 2) * o2, t2[3] += u2[3] * o2;
          }
          return t2[0] = oa(t2[0]), t2[1] = oa(t2[1]), t2[2] = oa(t2[2]), t2[3] > 0.9999999 && (t2[3] = 1), new ta(aa(t2));
        }, "ha"), sa = y, da = l.type, ba = Math.pow, pa = /* @__PURE__ */ __name(function(r2) {
          var e2 = "rgb", n2 = sa("#ccc"), t2 = 0, a2 = [0, 1], f2 = [], o2 = [0, 0], u2 = false, c2 = [], i2 = false, l2 = 0, h2 = 1, s2 = false, d2 = {}, b2 = true, p2 = 1, g2 = /* @__PURE__ */ __name(function(r3) {
            if ((r3 = r3 || ["#fff", "#000"]) && "string" === da(r3) && sa.brewer && sa.brewer[r3.toLowerCase()] && (r3 = sa.brewer[r3.toLowerCase()]), "array" === da(r3)) {
              1 === r3.length && (r3 = [r3[0], r3[0]]), r3 = r3.slice(0);
              for (var e3 = 0; e3 < r3.length; e3++) r3[e3] = sa(r3[e3]);
              f2.length = 0;
              for (var n3 = 0; n3 < r3.length; n3++) f2.push(n3 / (r3.length - 1));
            }
            return k2(), c2 = r3;
          }, "g"), v2 = /* @__PURE__ */ __name(function(r3) {
            return r3;
          }, "v"), m2 = /* @__PURE__ */ __name(function(r3) {
            return r3;
          }, "m"), y2 = /* @__PURE__ */ __name(function(r3, t3) {
            var a3, i3;
            if (null == t3 && (t3 = false), isNaN(r3) || null === r3) return n2;
            if (t3) i3 = r3;
            else if (u2 && u2.length > 2) {
              var s3 = function(r4) {
                if (null != u2) {
                  for (var e3 = u2.length - 1, n3 = 0; n3 < e3 && r4 >= u2[n3]; ) n3++;
                  return n3 - 1;
                }
                return 0;
              }(r3);
              i3 = s3 / (u2.length - 2);
            } else i3 = h2 !== l2 ? (r3 - l2) / (h2 - l2) : 1;
            i3 = m2(i3), t3 || (i3 = v2(i3)), 1 !== p2 && (i3 = ba(i3, p2)), i3 = o2[0] + i3 * (1 - o2[0] - o2[1]), i3 = Math.min(1, Math.max(0, i3));
            var g3 = Math.floor(1e4 * i3);
            if (b2 && d2[g3]) a3 = d2[g3];
            else {
              if ("array" === da(c2)) for (var y3 = 0; y3 < f2.length; y3++) {
                var k3 = f2[y3];
                if (i3 <= k3) {
                  a3 = c2[y3];
                  break;
                }
                if (i3 >= k3 && y3 === f2.length - 1) {
                  a3 = c2[y3];
                  break;
                }
                if (i3 > k3 && i3 < f2[y3 + 1]) {
                  i3 = (i3 - k3) / (f2[y3 + 1] - k3), a3 = sa.interpolate(c2[y3], c2[y3 + 1], i3, e2);
                  break;
                }
              }
              else "function" === da(c2) && (a3 = c2(i3));
              b2 && (d2[g3] = a3);
            }
            return a3;
          }, "y"), k2 = /* @__PURE__ */ __name(function() {
            return d2 = {};
          }, "k");
          g2(r2);
          var w2 = /* @__PURE__ */ __name(function(r3) {
            var e3 = sa(y2(r3));
            return i2 && e3[i2] ? e3[i2]() : e3;
          }, "w");
          return w2.classes = function(r3) {
            if (null != r3) {
              if ("array" === da(r3)) u2 = r3, a2 = [r3[0], r3[r3.length - 1]];
              else {
                var e3 = sa.analyze(a2);
                u2 = 0 === r3 ? [e3.min, e3.max] : sa.limits(e3, "e", r3);
              }
              return w2;
            }
            return u2;
          }, w2.domain = function(r3) {
            if (!arguments.length) return a2;
            l2 = r3[0], h2 = r3[r3.length - 1], f2 = [];
            var e3 = c2.length;
            if (r3.length === e3 && l2 !== h2) for (var n3 = 0, t3 = Array.from(r3); n3 < t3.length; n3 += 1) {
              var o3 = t3[n3];
              f2.push((o3 - l2) / (h2 - l2));
            }
            else {
              for (var u3 = 0; u3 < e3; u3++) f2.push(u3 / (e3 - 1));
              if (r3.length > 2) {
                var i3 = r3.map(function(e4, n4) {
                  return n4 / (r3.length - 1);
                }), s3 = r3.map(function(r4) {
                  return (r4 - l2) / (h2 - l2);
                });
                s3.every(function(r4, e4) {
                  return i3[e4] === r4;
                }) || (m2 = /* @__PURE__ */ __name(function(r4) {
                  if (r4 <= 0 || r4 >= 1) return r4;
                  for (var e4 = 0; r4 >= s3[e4 + 1]; ) e4++;
                  var n4 = (r4 - s3[e4]) / (s3[e4 + 1] - s3[e4]);
                  return i3[e4] + n4 * (i3[e4 + 1] - i3[e4]);
                }, "m"));
              }
            }
            return a2 = [l2, h2], w2;
          }, w2.mode = function(r3) {
            return arguments.length ? (e2 = r3, k2(), w2) : e2;
          }, w2.range = function(r3, e3) {
            return g2(r3), w2;
          }, w2.out = function(r3) {
            return i2 = r3, w2;
          }, w2.spread = function(r3) {
            return arguments.length ? (t2 = r3, w2) : t2;
          }, w2.correctLightness = function(r3) {
            return null == r3 && (r3 = true), s2 = r3, k2(), v2 = s2 ? function(r4) {
              for (var e3 = y2(0, true).lab()[0], n3 = y2(1, true).lab()[0], t3 = e3 > n3, a3 = y2(r4, true).lab()[0], f3 = e3 + (n3 - e3) * r4, o3 = a3 - f3, u3 = 0, c3 = 1, i3 = 20; Math.abs(o3) > 0.01 && i3-- > 0; ) t3 && (o3 *= -1), o3 < 0 ? (u3 = r4, r4 += 0.5 * (c3 - r4)) : (c3 = r4, r4 += 0.5 * (u3 - r4)), a3 = y2(r4, true).lab()[0], o3 = a3 - f3;
              return r4;
            } : function(r4) {
              return r4;
            }, w2;
          }, w2.padding = function(r3) {
            return null != r3 ? ("number" === da(r3) && (r3 = [r3, r3]), o2 = r3, w2) : o2;
          }, w2.colors = function(e3, n3) {
            arguments.length < 2 && (n3 = "hex");
            var t3 = [];
            if (0 === arguments.length) t3 = c2.slice(0);
            else if (1 === e3) t3 = [w2(0.5)];
            else if (e3 > 1) {
              var f3 = a2[0], o3 = a2[1] - f3;
              t3 = ga(0, e3, false).map(function(r3) {
                return w2(f3 + r3 / (e3 - 1) * o3);
              });
            } else {
              r2 = [];
              var i3 = [];
              if (u2 && u2.length > 2) for (var l3 = 1, h3 = u2.length, s3 = 1 <= h3; s3 ? l3 < h3 : l3 > h3; s3 ? l3++ : l3--) i3.push(0.5 * (u2[l3 - 1] + u2[l3]));
              else i3 = a2;
              t3 = i3.map(function(r3) {
                return w2(r3);
              });
            }
            return sa[n3] && (t3 = t3.map(function(r3) {
              return r3[n3]();
            })), t3;
          }, w2.cache = function(r3) {
            return null != r3 ? (b2 = r3, w2) : b2;
          }, w2.gamma = function(r3) {
            return null != r3 ? (p2 = r3, w2) : p2;
          }, w2.nodata = function(r3) {
            return null != r3 ? (n2 = sa(r3), w2) : n2;
          }, w2;
        }, "pa");
        function ga(r2, e2, n2) {
          for (var t2 = [], a2 = r2 < e2, f2 = n2 ? a2 ? e2 + 1 : e2 - 1 : e2, o2 = r2; a2 ? o2 < f2 : o2 > f2; a2 ? o2++ : o2--) t2.push(o2);
          return t2;
        }
        __name(ga, "ga");
        var va = v, ma = pa, ya = y, ka = /* @__PURE__ */ __name(function(r2, e2, n2) {
          if (!ka[n2]) throw new Error("unknown blend mode " + n2);
          return ka[n2](r2, e2);
        }, "ka"), wa = /* @__PURE__ */ __name(function(r2) {
          return function(e2, n2) {
            var t2 = ya(n2).rgb(), a2 = ya(e2).rgb();
            return ya.rgb(r2(t2, a2));
          };
        }, "wa"), Ma = /* @__PURE__ */ __name(function(r2) {
          return function(e2, n2) {
            var t2 = [];
            return t2[0] = r2(e2[0], n2[0]), t2[1] = r2(e2[1], n2[1]), t2[2] = r2(e2[2], n2[2]), t2;
          };
        }, "Ma");
        ka.normal = wa(Ma(function(r2) {
          return r2;
        })), ka.multiply = wa(Ma(function(r2, e2) {
          return r2 * e2 / 255;
        })), ka.screen = wa(Ma(function(r2, e2) {
          return 255 * (1 - (1 - r2 / 255) * (1 - e2 / 255));
        })), ka.overlay = wa(Ma(function(r2, e2) {
          return e2 < 128 ? 2 * r2 * e2 / 255 : 255 * (1 - 2 * (1 - r2 / 255) * (1 - e2 / 255));
        })), ka.darken = wa(Ma(function(r2, e2) {
          return r2 > e2 ? e2 : r2;
        })), ka.lighten = wa(Ma(function(r2, e2) {
          return r2 > e2 ? r2 : e2;
        })), ka.dodge = wa(Ma(function(r2, e2) {
          return 255 === r2 || (r2 = e2 / 255 * 255 / (1 - r2 / 255)) > 255 ? 255 : r2;
        })), ka.burn = wa(Ma(function(r2, e2) {
          return 255 * (1 - (1 - e2 / 255) / (r2 / 255));
        }));
        for (var Na = ka, _a = l.type, xa = l.clip_rgb, Aa = l.TWOPI, Ea = Math.pow, Fa = Math.sin, Pa = Math.cos, Oa = y, ja = v, Ga = Math.floor, Ra = Math.random, qa = o, La = Math.log, Ia = Math.pow, Ba = Math.floor, Ca = Math.abs, Da = function(r2, e2) {
          void 0 === e2 && (e2 = null);
          var n2 = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
          return "object" === qa(r2) && (r2 = Object.values(r2)), r2.forEach(function(r3) {
            e2 && "object" === qa(r3) && (r3 = r3[e2]), null == r3 || isNaN(r3) || (n2.values.push(r3), n2.sum += r3, r3 < n2.min && (n2.min = r3), r3 > n2.max && (n2.max = r3), n2.count += 1);
          }), n2.domain = [n2.min, n2.max], n2.limits = function(r3, e3) {
            return Ya(n2, r3, e3);
          }, n2;
        }, Ya = function(r2, e2, n2) {
          void 0 === e2 && (e2 = "equal"), void 0 === n2 && (n2 = 7), "array" == qa(r2) && (r2 = Da(r2));
          var t2 = r2.min, a2 = r2.max, f2 = r2.values.sort(function(r3, e3) {
            return r3 - e3;
          });
          if (1 === n2) return [t2, a2];
          var o2 = [];
          if ("c" === e2.substr(0, 1) && (o2.push(t2), o2.push(a2)), "e" === e2.substr(0, 1)) {
            o2.push(t2);
            for (var u2 = 1; u2 < n2; u2++) o2.push(t2 + u2 / n2 * (a2 - t2));
            o2.push(a2);
          } else if ("l" === e2.substr(0, 1)) {
            if (t2 <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
            var c2 = Math.LOG10E * La(t2), i2 = Math.LOG10E * La(a2);
            o2.push(t2);
            for (var l2 = 1; l2 < n2; l2++) o2.push(Ia(10, c2 + l2 / n2 * (i2 - c2)));
            o2.push(a2);
          } else if ("q" === e2.substr(0, 1)) {
            o2.push(t2);
            for (var h2 = 1; h2 < n2; h2++) {
              var s2 = (f2.length - 1) * h2 / n2, d2 = Ba(s2);
              if (d2 === s2) o2.push(f2[d2]);
              else {
                var b2 = s2 - d2;
                o2.push(f2[d2] * (1 - b2) + f2[d2 + 1] * b2);
              }
            }
            o2.push(a2);
          } else if ("k" === e2.substr(0, 1)) {
            var p2, g2 = f2.length, v2 = new Array(g2), m2 = new Array(n2), y2 = true, k2 = 0, w2 = null;
            (w2 = []).push(t2);
            for (var M2 = 1; M2 < n2; M2++) w2.push(t2 + M2 / n2 * (a2 - t2));
            for (w2.push(a2); y2; ) {
              for (var N2 = 0; N2 < n2; N2++) m2[N2] = 0;
              for (var _2 = 0; _2 < g2; _2++) for (var x2 = f2[_2], A2 = Number.MAX_VALUE, E2 = void 0, F2 = 0; F2 < n2; F2++) {
                var P2 = Ca(w2[F2] - x2);
                P2 < A2 && (A2 = P2, E2 = F2), m2[E2]++, v2[_2] = E2;
              }
              for (var O2 = new Array(n2), j2 = 0; j2 < n2; j2++) O2[j2] = null;
              for (var G2 = 0; G2 < g2; G2++) null === O2[p2 = v2[G2]] ? O2[p2] = f2[G2] : O2[p2] += f2[G2];
              for (var R2 = 0; R2 < n2; R2++) O2[R2] *= 1 / m2[R2];
              y2 = false;
              for (var q2 = 0; q2 < n2; q2++) if (O2[q2] !== w2[q2]) {
                y2 = true;
                break;
              }
              w2 = O2, ++k2 > 200 && (y2 = false);
            }
            for (var L2 = {}, I2 = 0; I2 < n2; I2++) L2[I2] = [];
            for (var B2 = 0; B2 < g2; B2++) L2[p2 = v2[B2]].push(f2[B2]);
            for (var C2 = [], D2 = 0; D2 < n2; D2++) C2.push(L2[D2][0]), C2.push(L2[D2][L2[D2].length - 1]);
            C2 = C2.sort(function(r3, e3) {
              return r3 - e3;
            }), o2.push(C2[0]);
            for (var Y2 = 1; Y2 < C2.length; Y2 += 2) {
              var S2 = C2[Y2];
              isNaN(S2) || -1 !== o2.indexOf(S2) || o2.push(S2);
            }
          }
          return o2;
        }, Sa = { analyze: Da, limits: Ya }, Ta = v, $a = v, za = Math.sqrt, Xa = Math.pow, Ua = Math.min, Va = Math.max, Wa = Math.atan2, Ka = Math.abs, Za = Math.cos, Ha = Math.sin, Ja = Math.exp, Qa = Math.PI, rf = v, ef = v, nf = y, tf = pa, af = { cool: /* @__PURE__ */ __name(function() {
          return tf([nf.hsl(180, 1, 0.9), nf.hsl(250, 0.7, 0.4)]);
        }, "cool"), hot: /* @__PURE__ */ __name(function() {
          return tf(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
        }, "hot") }, ff = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, of = 0, uf = Object.keys(ff); of < uf.length; of += 1) {
          var cf = uf[of];
          ff[cf.toLowerCase()] = ff[cf];
        }
        var lf = ff, hf = y;
        return hf.average = function(r2, e2, n2) {
          void 0 === e2 && (e2 = "lrgb"), void 0 === n2 && (n2 = null);
          var t2 = r2.length;
          n2 || (n2 = Array.from(new Array(t2)).map(function() {
            return 1;
          }));
          var a2 = t2 / n2.reduce(function(r3, e3) {
            return r3 + e3;
          });
          if (n2.forEach(function(r3, e3) {
            n2[e3] *= a2;
          }), r2 = r2.map(function(r3) {
            return new ta(r3);
          }), "lrgb" === e2) return ha(r2, n2);
          for (var f2 = r2.shift(), o2 = f2.get(e2), u2 = [], c2 = 0, i2 = 0, l2 = 0; l2 < o2.length; l2++) if (o2[l2] = (o2[l2] || 0) * n2[0], u2.push(isNaN(o2[l2]) ? 0 : n2[0]), "h" === e2.charAt(l2) && !isNaN(o2[l2])) {
            var h2 = o2[l2] / 180 * ua;
            c2 += ca(h2) * n2[0], i2 += ia(h2) * n2[0];
          }
          var s2 = f2.alpha() * n2[0];
          r2.forEach(function(r3, t3) {
            var a3 = r3.get(e2);
            s2 += r3.alpha() * n2[t3 + 1];
            for (var f3 = 0; f3 < o2.length; f3++) if (!isNaN(a3[f3])) if (u2[f3] += n2[t3 + 1], "h" === e2.charAt(f3)) {
              var l3 = a3[f3] / 180 * ua;
              c2 += ca(l3) * n2[t3 + 1], i2 += ia(l3) * n2[t3 + 1];
            } else o2[f3] += a3[f3] * n2[t3 + 1];
          });
          for (var d2 = 0; d2 < o2.length; d2++) if ("h" === e2.charAt(d2)) {
            for (var b2 = la(i2 / u2[d2], c2 / u2[d2]) / ua * 180; b2 < 0; ) b2 += 360;
            for (; b2 >= 360; ) b2 -= 360;
            o2[d2] = b2;
          } else o2[d2] = o2[d2] / u2[d2];
          return s2 /= t2, new ta(o2, e2).alpha(s2 > 0.99999 ? 1 : s2, true);
        }, hf.bezier = function(r2) {
          var e2 = function(r3) {
            var e3, n2, t2, a2, f2, o2, u2;
            if (2 === (r3 = r3.map(function(r4) {
              return new va(r4);
            })).length) e3 = r3.map(function(r4) {
              return r4.lab();
            }), f2 = e3[0], o2 = e3[1], a2 = /* @__PURE__ */ __name(function(r4) {
              var e4 = [0, 1, 2].map(function(e5) {
                return f2[e5] + r4 * (o2[e5] - f2[e5]);
              });
              return new va(e4, "lab");
            }, "a");
            else if (3 === r3.length) n2 = r3.map(function(r4) {
              return r4.lab();
            }), f2 = n2[0], o2 = n2[1], u2 = n2[2], a2 = /* @__PURE__ */ __name(function(r4) {
              var e4 = [0, 1, 2].map(function(e5) {
                return (1 - r4) * (1 - r4) * f2[e5] + 2 * (1 - r4) * r4 * o2[e5] + r4 * r4 * u2[e5];
              });
              return new va(e4, "lab");
            }, "a");
            else if (4 === r3.length) {
              var c2;
              t2 = r3.map(function(r4) {
                return r4.lab();
              }), f2 = t2[0], o2 = t2[1], u2 = t2[2], c2 = t2[3], a2 = /* @__PURE__ */ __name(function(r4) {
                var e4 = [0, 1, 2].map(function(e5) {
                  return (1 - r4) * (1 - r4) * (1 - r4) * f2[e5] + 3 * (1 - r4) * (1 - r4) * r4 * o2[e5] + 3 * (1 - r4) * r4 * r4 * u2[e5] + r4 * r4 * r4 * c2[e5];
                });
                return new va(e4, "lab");
              }, "a");
            } else {
              if (!(r3.length >= 5)) throw new RangeError("No point in running bezier with only one color.");
              var i2, l2, h2;
              i2 = r3.map(function(r4) {
                return r4.lab();
              }), h2 = r3.length - 1, l2 = function(r4) {
                for (var e4 = [1, 1], n3 = 1; n3 < r4; n3++) {
                  for (var t3 = [1], a3 = 1; a3 <= e4.length; a3++) t3[a3] = (e4[a3] || 0) + e4[a3 - 1];
                  e4 = t3;
                }
                return e4;
              }(h2), a2 = /* @__PURE__ */ __name(function(r4) {
                var e4 = 1 - r4, n3 = [0, 1, 2].map(function(n4) {
                  return i2.reduce(function(t3, a3, f3) {
                    return t3 + l2[f3] * Math.pow(e4, h2 - f3) * Math.pow(r4, f3) * a3[n4];
                  }, 0);
                });
                return new va(n3, "lab");
              }, "a");
            }
            return a2;
          }(r2);
          return e2.scale = function() {
            return ma(e2);
          }, e2;
        }, hf.blend = Na, hf.cubehelix = function(r2, e2, n2, t2, a2) {
          void 0 === r2 && (r2 = 300), void 0 === e2 && (e2 = -1.5), void 0 === n2 && (n2 = 1), void 0 === t2 && (t2 = 1), void 0 === a2 && (a2 = [0, 1]);
          var f2, o2 = 0;
          "array" === _a(a2) ? f2 = a2[1] - a2[0] : (f2 = 0, a2 = [a2, a2]);
          var u2 = /* @__PURE__ */ __name(function(u3) {
            var c2 = Aa * ((r2 + 120) / 360 + e2 * u3), i2 = Ea(a2[0] + f2 * u3, t2), l2 = (0 !== o2 ? n2[0] + u3 * o2 : n2) * i2 * (1 - i2) / 2, h2 = Pa(c2), s2 = Fa(c2);
            return Oa(xa([255 * (i2 + l2 * (-0.14861 * h2 + 1.78277 * s2)), 255 * (i2 + l2 * (-0.29227 * h2 - 0.90649 * s2)), 255 * (i2 + l2 * (1.97294 * h2)), 1]));
          }, "u");
          return u2.start = function(e3) {
            return null == e3 ? r2 : (r2 = e3, u2);
          }, u2.rotations = function(r3) {
            return null == r3 ? e2 : (e2 = r3, u2);
          }, u2.gamma = function(r3) {
            return null == r3 ? t2 : (t2 = r3, u2);
          }, u2.hue = function(r3) {
            return null == r3 ? n2 : ("array" === _a(n2 = r3) ? 0 === (o2 = n2[1] - n2[0]) && (n2 = n2[1]) : o2 = 0, u2);
          }, u2.lightness = function(r3) {
            return null == r3 ? a2 : ("array" === _a(r3) ? (a2 = r3, f2 = r3[1] - r3[0]) : (a2 = [r3, r3], f2 = 0), u2);
          }, u2.scale = function() {
            return Oa.scale(u2);
          }, u2.hue(n2), u2;
        }, hf.mix = hf.interpolate = Rt, hf.random = function() {
          for (var r2 = "#", e2 = 0; e2 < 6; e2++) r2 += "0123456789abcdef".charAt(Ga(16 * Ra()));
          return new ja(r2, "hex");
        }, hf.scale = pa, hf.analyze = Sa.analyze, hf.contrast = function(r2, e2) {
          r2 = new Ta(r2), e2 = new Ta(e2);
          var n2 = r2.luminance(), t2 = e2.luminance();
          return n2 > t2 ? (n2 + 0.05) / (t2 + 0.05) : (t2 + 0.05) / (n2 + 0.05);
        }, hf.deltaE = function(r2, e2, n2, t2, a2) {
          void 0 === n2 && (n2 = 1), void 0 === t2 && (t2 = 1), void 0 === a2 && (a2 = 1);
          var f2 = /* @__PURE__ */ __name(function(r3) {
            return 360 * r3 / (2 * Qa);
          }, "f"), o2 = /* @__PURE__ */ __name(function(r3) {
            return 2 * Qa * r3 / 360;
          }, "o");
          r2 = new $a(r2), e2 = new $a(e2);
          var u2 = Array.from(r2.lab()), c2 = u2[0], i2 = u2[1], l2 = u2[2], h2 = Array.from(e2.lab()), s2 = h2[0], d2 = h2[1], b2 = h2[2], p2 = (c2 + s2) / 2, g2 = (za(Xa(i2, 2) + Xa(l2, 2)) + za(Xa(d2, 2) + Xa(b2, 2))) / 2, v2 = 0.5 * (1 - za(Xa(g2, 7) / (Xa(g2, 7) + Xa(25, 7)))), m2 = i2 * (1 + v2), y2 = d2 * (1 + v2), k2 = za(Xa(m2, 2) + Xa(l2, 2)), w2 = za(Xa(y2, 2) + Xa(b2, 2)), M2 = (k2 + w2) / 2, N2 = f2(Wa(l2, m2)), _2 = f2(Wa(b2, y2)), x2 = N2 >= 0 ? N2 : N2 + 360, A2 = _2 >= 0 ? _2 : _2 + 360, E2 = Ka(x2 - A2) > 180 ? (x2 + A2 + 360) / 2 : (x2 + A2) / 2, F2 = 1 - 0.17 * Za(o2(E2 - 30)) + 0.24 * Za(o2(2 * E2)) + 0.32 * Za(o2(3 * E2 + 6)) - 0.2 * Za(o2(4 * E2 - 63)), P2 = A2 - x2;
          P2 = Ka(P2) <= 180 ? P2 : A2 <= x2 ? P2 + 360 : P2 - 360, P2 = 2 * za(k2 * w2) * Ha(o2(P2) / 2);
          var O2 = s2 - c2, j2 = w2 - k2, G2 = 1 + 0.015 * Xa(p2 - 50, 2) / za(20 + Xa(p2 - 50, 2)), R2 = 1 + 0.045 * M2, q2 = 1 + 0.015 * M2 * F2, L2 = 30 * Ja(-Xa((E2 - 275) / 25, 2)), I2 = -(2 * za(Xa(M2, 7) / (Xa(M2, 7) + Xa(25, 7)))) * Ha(2 * o2(L2)), B2 = za(Xa(O2 / (n2 * G2), 2) + Xa(j2 / (t2 * R2), 2) + Xa(P2 / (a2 * q2), 2) + I2 * (j2 / (t2 * R2)) * (P2 / (a2 * q2)));
          return Va(0, Ua(100, B2));
        }, hf.distance = function(r2, e2, n2) {
          void 0 === n2 && (n2 = "lab"), r2 = new rf(r2), e2 = new rf(e2);
          var t2 = r2.get(n2), a2 = e2.get(n2), f2 = 0;
          for (var o2 in t2) {
            var u2 = (t2[o2] || 0) - (a2[o2] || 0);
            f2 += u2 * u2;
          }
          return Math.sqrt(f2);
        }, hf.limits = Sa.limits, hf.valid = function() {
          for (var r2 = [], e2 = arguments.length; e2--; ) r2[e2] = arguments[e2];
          try {
            return new (Function.prototype.bind.apply(ef, [null].concat(r2)))(), true;
          } catch (r3) {
            return false;
          }
        }, hf.scales = af, hf.colors = sn, hf.brewer = lf, hf;
      });
    }
  });

  // src/scales.json
  var scales_default = [
    {
      key: "black hot",
      name: "Black hot",
      steps: [
        {
          color: "#F5F5F5",
          value: 0
        },
        {
          color: "#242124",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      device_class: "carbon_dioxide",
      documentation: {
        text: "<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels\nindicate insufficient ventilation. The specific effects of higher\nconcentrations of CO\u2082 are highly individual, but studies have shown\nthat levels over 1000 ppm cause cognitive impairment in many\nindividuals.</p>\n<p>Levels over 2000 ppm have been linked to health effects in some\nstudies. There is no conclusive sum of evidence.</p>\n<p>This scale caps at 3000 ppm, as a maximum level that'd signify\nfairly bad air. Levels above 5000 ppm are considered dangerous\nin workplace standards (f.x OSHA in the US) and are indicative\nof greatly insufficient ventilation overall.</p>"
      },
      key: "carbon dioxide",
      name: "CO\u2082, indoor exposure",
      steps: [
        {
          color: "#6d9b17",
          value: 520
        },
        {
          color: "#FFBF00",
          value: 1e3
        },
        {
          color: "#cf0000",
          value: 1400
        },
        {
          color: "#5b0f8c",
          value: 3e3
        }
      ],
      type: "absolute"
    },
    {
      documentation: {
        license: {
          name: "Apache License 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0"
        },
        text: `<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`
      },
      key: "colorbrewer 5cl bugn",
      name: "ColorBrewer 5-class BuGn",
      steps: [
        {
          color: "#edf8fb",
          value: 0
        },
        {
          color: "#b2e2e2",
          value: 0.25
        },
        {
          color: "#66c2a4",
          value: 0.5
        },
        {
          color: "#2ca25f",
          value: 0.75
        },
        {
          color: "#006d2c",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      documentation: {
        license: {
          name: "Apache License 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0"
        },
        text: `<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`
      },
      key: "colorbrewer 5cl bupu",
      name: "ColorBrewer 5-class BuPu",
      steps: [
        {
          color: "#edf8fb",
          value: 0
        },
        {
          color: "#b3cde3",
          value: 0.25
        },
        {
          color: "#8c96c6",
          value: 0.5
        },
        {
          color: "#8856a7",
          value: 0.75
        },
        {
          color: "#810f7c",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      documentation: {
        license: {
          name: "Apache License 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0"
        },
        text: `<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`
      },
      key: "colorbrewer 5cl rdpu",
      name: "ColorBrewer 5-class BuPu",
      steps: [
        {
          color: "#feebe2",
          value: 0
        },
        {
          color: "#fbb4b9",
          value: 0.25
        },
        {
          color: "#f768a1",
          value: 0.5
        },
        {
          color: "#c51b8a",
          value: 0.75
        },
        {
          color: "#7a0177",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      documentation: {
        license: {
          name: "Apache License 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0"
        },
        text: `<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`
      },
      key: "colorbrewer 5cl ylorbr",
      name: "ColorBrewer 5-class YlOrBr",
      steps: [
        {
          color: "#ffffd4",
          value: 0
        },
        {
          color: "#fed98e",
          value: 0.25
        },
        {
          color: "#fe9929",
          value: 0.5
        },
        {
          color: "#d95f0e",
          value: 0.75
        },
        {
          color: "#993404",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      device_class: "temperature",
      documentation: {
        text: "<p>Indoor temperatures related to human comfort levels. Amalgation\nof multiple sources. As always with temperature, individual\nfactors such as generics, clothing and activity level have a big\nimpact.</p>"
      },
      key: "indoor temperature",
      name: "Indoor temperature",
      steps: [
        {
          color: "#0f3489",
          value: 12
        },
        {
          color: "#595ea3",
          value: 16
        },
        {
          color: "#7374b0",
          value: 18
        },
        {
          color: "#F5F5F5",
          value: 20
        },
        {
          color: "#F5F5F5",
          value: 22
        },
        {
          color: "#ea755a",
          value: 24
        },
        {
          color: "#cf0000",
          value: 28
        }
      ],
      type: "absolute",
      unit: "\xB0C"
    },
    {
      key: "iron red",
      name: "Iron red",
      steps: [
        {
          color: "#230382",
          value: 0
        },
        {
          color: "#921C96",
          value: 0.1
        },
        {
          color: "#C93F55",
          value: 0.25
        },
        {
          color: "#DF6D2D",
          value: 0.4
        },
        {
          color: "#EFB03D",
          value: 0.6
        },
        {
          color: "#F9DE52",
          value: 0.75
        },
        {
          color: "#F5F5D4",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      device_class: "nitrogen_dioxide",
      documentation: {
        text: '<p>This scale is based on the European Environment Agency (EEA) Air Quality Index\nas implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>\nas of late 2024.</p>'
      },
      key: "nitrogen dioxide eaqi",
      name: "Nitrogen dioxide (European Air Quality Index)",
      steps: [
        {
          color: "#50F0E6",
          legend: "Good",
          value: 0
        },
        {
          color: "#50CCAA",
          legend: "Fair",
          value: 40
        },
        {
          color: "#F0E641",
          legend: "Moderate",
          value: 90
        },
        {
          color: "#FF5050",
          legend: "Poor",
          value: 120
        },
        {
          color: "#960032",
          legend: "Very poor",
          value: 230
        },
        {
          color: "#7D2181",
          legend: "Extremely poor",
          value: 340
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      device_class: "temperature",
      documentation: {
        text: '<p>Outdoor temperatures related to human comfort and risk levels.</p>\n<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)\ntemperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>\ntemperature, such as a like a thermometer reading.</p>\n<p>Individual factors such as clothing, activity level, wind speed and\nexposure to sun all play a part in how we perceive temperature.\nSee this is a rough guideline.</p>'
      },
      key: "outdoor temperature",
      name: "Outdoor temperature",
      steps: [
        {
          color: "#0f3489",
          legend: "Severe risk of frostbite",
          value: -30
        },
        {
          color: "#595ea3",
          legend: "Risk of frostbite",
          value: 0
        },
        {
          color: "#7374b0",
          legend: "Risk of hypothermia",
          value: 10
        },
        {
          color: "#7374b0",
          legend: "Chilling temperatures",
          value: 15
        },
        {
          color: "#F5F5F5",
          value: 22
        },
        {
          color: "#F5F5F5",
          value: 27
        },
        {
          color: "#ea755a",
          legend: "Risk of heat cramps or exhaustion",
          value: 32
        },
        {
          color: "#cf0000",
          legend: "Heat exhaustion more likely",
          value: 40
        },
        {
          color: "#5b0f8c",
          legend: "Heat stroke risk",
          value: 54
        }
      ],
      type: "absolute",
      unit: "\xB0C"
    },
    {
      device_class: "temperature",
      documentation: {
        text: "<p>Temperature scale specifically designed for oceanic climates - regions characterized \nby mild temperatures with rare extremes throughout the year.</p>\n<p>Found in areas such as Western Europe, the Pacific Northwest of North America, \nparts of Southern Chile, New Zealand, and other coastal regions under maritime influence.</p>"
      },
      key: "outdoor temperature oceanic",
      name: "Outdoor temperature (Oceanic Climate)",
      steps: [
        {
          color: "#112488",
          legend: "Exceptionally cold for oceanic climate",
          value: -10
        },
        {
          color: "#1846A1",
          legend: "Very cold for oceanic climate",
          value: -5
        },
        {
          color: "#1F67C0",
          legend: "Freezing",
          value: 0
        },
        {
          color: "#4CA9D5",
          legend: "Cold",
          value: 5
        },
        {
          color: "#81DB7D",
          legend: "Cool",
          value: 10
        },
        {
          color: "#B5DA60",
          legend: "Mild",
          value: 15
        },
        {
          color: "#E0DD4A",
          legend: "Pleasant",
          value: 20
        },
        {
          color: "#F98F46",
          legend: "Warm",
          value: 25
        },
        {
          color: "#F5392A",
          legend: "Very warm for oceanic climate",
          value: 30
        },
        {
          color: "#BE31B1",
          legend: "Exceptionally hot for oceanic climate",
          value: 35
        }
      ],
      type: "absolute",
      unit: "\xB0C"
    },
    {
      device_class: "ozone",
      documentation: {
        text: '<p>This scale is based on the European Environment Agency (EEA) Air Quality Index\nas implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>\nas of late 2024.</p>'
      },
      key: "ozone eaqi",
      name: "Ozone (European Air Quality Index)",
      steps: [
        {
          color: "#50F0E6",
          legend: "Good",
          value: 0
        },
        {
          color: "#50CCAA",
          legend: "Fair",
          value: 50
        },
        {
          color: "#F0E641",
          legend: "Moderate",
          value: 100
        },
        {
          color: "#FF5050",
          legend: "Poor",
          value: 130
        },
        {
          color: "#960032",
          legend: "Very poor",
          value: 240
        },
        {
          color: "#7D2181",
          legend: "Extremely poor",
          value: 380
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      device_class: "pm10",
      documentation: {
        text: '<p>This scale is based on the European Environment Agency (EEA) Air Quality Index\nas implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>\nas of late 2024.</p>'
      },
      key: "pm10 eaqi",
      name: "PM10 (European Air Quality Index)",
      steps: [
        {
          color: "#50F0E6",
          legend: "Good",
          value: 0
        },
        {
          color: "#50CCAA",
          legend: "Fair",
          value: 20
        },
        {
          color: "#F0E641",
          legend: "Moderate",
          value: 40
        },
        {
          color: "#FF5050",
          legend: "Poor",
          value: 50
        },
        {
          color: "#960032",
          legend: "Very poor",
          value: 100
        },
        {
          color: "#7D2181",
          legend: "Extremely poor",
          value: 150
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      device_class: "pm25",
      documentation: {
        text: `<p>This scale is based on an aggregate of the World Health Organization
<a href="https://www.who.int/publications/i/item/9789240034228" rel="noopener" target="_blank">global air quality guidelines</a> 
and <a href="https://www.who.int/publications/i/item/9789240000278" rel="noopener" target="_blank">Personal interventions and risk communication on Air Pollution</a>
reports.</p>
<p>The lowest part of the range map to the AQG (Air Quality Goal)
target, a PM<sub>2.5</sub> level of &lt;5 \u03BCg/m<sup>3</sup> which is considered relatively safe.
The upper part, &gt;100 \u03BCg/m<sup>3</sup>, is considered the level where the 
health benefits of regular physical activity is greatly offset by the
PM<sub>2.5</sub> exposure.</p>
<p>Note that the level of &lt;5 \u03BCg/m<sup>3</sup> is the AQG exposure
level on an annaul basis. The WHO also has a 24-hour AQG level of
&lt;15 \u03BCg/m<sup>3</sup> which is not included in this scale. As we're
trending patterns over time, the annual target made more sense for
the heatmap.</p>`
      },
      key: "pm25",
      name: "PM2.5 (WHO aggregate)",
      steps: [
        {
          color: "#6d9b17",
          legend: "AQG level",
          value: 5
        },
        {
          color: "#FFBF00",
          legend: "Interim target 2",
          value: 25
        },
        {
          color: "#cf0000",
          value: 50
        },
        {
          color: "#5b0f8c",
          legends: "Risk level",
          value: 100
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      device_class: "pm25",
      documentation: {
        text: '<p>This scale is based on the European Environment Agency (EEA) Air Quality Index\nas implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>\nas of late 2024.</p>'
      },
      key: "pm25 eaqi",
      name: "PM2.5 (European Air Quality Index)",
      steps: [
        {
          color: "#50F0E6",
          legend: "Good",
          value: 0
        },
        {
          color: "#50CCAA",
          legend: "Fair",
          value: 10
        },
        {
          color: "#F0E641",
          legend: "Moderate",
          value: 20
        },
        {
          color: "#FF5050",
          legend: "Poor",
          value: 25
        },
        {
          color: "#960032",
          legend: "Very poor",
          value: 50
        },
        {
          color: "#7D2181",
          legend: "Extremely poor",
          value: 75
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      key: "stoplight",
      name: "Stoplight",
      steps: [
        {
          color: "#6d9b17",
          value: 0
        },
        {
          color: "#fde74c",
          value: 0.5
        },
        {
          color: "#cf0000",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      device_class: "sulphur_dioxide",
      documentation: {
        text: '<p>This scale is based on the European Environment Agency (EEA) Air Quality Index\nas implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>\nas of late 2024.</p>'
      },
      key: "sulphur dioxide eaqi",
      name: "Sulphur dioxide (European Air Quality Index)",
      steps: [
        {
          color: "#50F0E6",
          legend: "Good",
          value: 0
        },
        {
          color: "#50CCAA",
          legend: "Fair",
          value: 100
        },
        {
          color: "#F0E641",
          legend: "Moderate",
          value: 200
        },
        {
          color: "#FF5050",
          legend: "Poor",
          value: 350
        },
        {
          color: "#960032",
          legend: "Very poor",
          value: 500
        },
        {
          color: "#7D2181",
          legend: "Extremely poor",
          value: 750
        }
      ],
      type: "absolute",
      unit: "\xB5g/m\xB3"
    },
    {
      key: "white hot",
      name: "White hot",
      steps: [
        {
          color: "#242124",
          value: 0
        },
        {
          color: "#F5F5F5",
          value: 1
        }
      ],
      type: "relative"
    },
    {
      device_class: "temperature",
      documentation: {
        license: {
          name: "Creative Commons Attribution-ShareAlike License 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0/"
        },
        text: `<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`
      },
      key: "wikipedia climate cool2",
      name: "Wikipedia climate, cool2",
      steps: [
        {
          color: "#0000A2",
          value: -60
        },
        {
          color: "#0000D7",
          value: -43
        },
        {
          color: "#6565FF",
          value: -24
        },
        {
          color: "#FCFCFF",
          value: 4
        },
        {
          color: "#FF7F00",
          value: 23
        },
        {
          color: "#FF2C00",
          value: 35
        },
        {
          color: "#F60000",
          value: 42
        },
        {
          color: "#000000",
          value: 56
        }
      ],
      type: "absolute",
      unit: "\xB0C"
    }
  ];

  // src/device_classes.json
  var device_classes_default = {
    apparent_power: {},
    atmospheric_pressure: {},
    aqi: {},
    battery: {},
    carbon_dioxide: { default: "carbon dioxide" },
    carbon_monoxide: {},
    current: {},
    date: {},
    duration: {},
    energy: {},
    frequency: {},
    gas: {},
    humidity: {},
    illuminance: {},
    monetary: {},
    nitrogen_dioxide: {},
    nitrogen_monoxide: {},
    nitrous_oxide: {},
    ozone: {},
    pm1: {},
    pm10: {},
    pm25: { default: "pm25" },
    power_factor: {},
    power: {},
    pressure: {},
    reactive_power: {},
    signal_strength: {},
    sulphur_dioxide: {},
    temperature: { default: "outdoor temperature", unit_system: "temperature" },
    timestamp: {},
    volatile_organic_compounds: {},
    voltage: {}
  };

  // src/heatmap-scales.js
  var import_chroma = __toESM(require_chroma());
  var conversions = {
    "temperature": {
      "\xB0C": {
        "\xB0F": /* @__PURE__ */ __name((val) => parseInt(val * 1.8 + 32), "\xB0F")
      },
      "\xB0F": {
        "\xB0C": /* @__PURE__ */ __name((val) => parseInt((val - 32) / 1.8), "\xB0C")
      }
    }
  };
  var HeatmapScales = class {
    static {
      __name(this, "HeatmapScales");
    }
    // Expects the unit_system object from hass frontend
    constructor() {
      this.default_scale = "iron red";
      this.scale_by_key = {};
      for (const scale of scales_default) {
        this.scale_by_key[scale.key] = scale;
      }
    }
    /*
        Returns a rendered scale, either a builtin one (if passed a string)
        or a custom scale (if passed an object).
    */
    get_scale(config, device_class = "", unit_system = {}) {
      if (config === void 0) {
        config = this.default_scale;
      }
      if (typeof config === "string") {
        return this.generate_scale(this.scale_by_key[config], device_class, unit_system);
      }
      var scale = this.generate_scale(config, device_class, unit_system);
      delete scale.docs;
      return scale;
    }
    /*
            Create the chromajs object + CSS gradient for the scale.
    
            We're also doing unit conversion if required; the way this works is that
            we adjust the scale if we need to (frontend unit config differs from
            scale unit config) and we know how to perform the conversion. This is a
            bit more heavy-handed than I'd like, but the alternatives seem messier.
    
            No caching done on the output, would need to reconsider that decision
            if the function becomes more expensive. Does get a bit messy since we're
            converting units on the fly.
        */
    generate_scale(config, device_class = void 0, unit_system = {}) {
      const steps = JSON.parse(JSON.stringify(config.steps));
      const colors = [];
      const domains = [];
      let unit = config.unit;
      let conversion_fn = /* @__PURE__ */ __name((val) => val, "conversion_fn");
      if (config.unit && device_class && unit_system) {
        const dc_domain = device_classes_default[device_class].unit_system;
        const us_unit = unit_system[dc_domain];
        if (dc_domain && us_unit && config.unit !== us_unit && conversions[dc_domain] && conversions[dc_domain][config.unit] && conversions[dc_domain][config.unit][us_unit]) {
          unit = us_unit;
          conversion_fn = conversions[dc_domain][config.unit][us_unit];
        }
      }
      for (const step of steps) {
        colors.push(step.color);
        if ("value" in step) {
          step.value = conversion_fn(step.value);
          domains.push(step.value);
        }
      }
      let gradient;
      if (domains.length > 0 && domains.length === colors.length) {
        gradient = import_chroma.default.scale(colors).domain(domains);
      } else {
        gradient = import_chroma.default.scale(colors);
      }
      return {
        "gradient": gradient,
        "type": config.type ?? "relative",
        "name": config.name,
        "key": config.key,
        "steps": steps,
        "unit": unit,
        "docs": config.documentation,
        "css": this.legend_css_by_gradient(gradient)
      };
    }
    /*
        Generate CSS for a gradient. There would be cleaner ways to go about this
        than generating a 21 step gradient every time; not sure if it can be safely
        optimized.
     */
    legend_css_by_gradient(gradient) {
      var fragment = [];
      for (const [idx, color] of gradient.colors(21).entries()) {
        fragment.push(`${color} ${idx * 5}%`);
      }
      return fragment.join(", ");
    }
    /*
        Return the default scale name for the given device class. If none
        defined, return the global default (iron red)
    */
    defaults_for(device_class) {
      if (device_class in device_classes_default && "default" in device_classes_default[device_class]) {
        return device_classes_default[device_class].default;
      } else {
        return this.default_scale;
      }
    }
    /*
        Fetch scale by attribute, typically type or device_class.
    */
    get_by(field, value) {
      var out = scales_default.filter((scale) => scale[field] === value);
      return out.map((scale) => this.get_scale(scale));
    }
  };

  // src/heatmap-card.js
  var LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
  );
  var html = LitElement.prototype.html;
  var css = LitElement.prototype.css;
  var HeatmapCard = class extends LitElement {
    static {
      __name(this, "HeatmapCard");
    }
    last_render_ts = 0;
    scales = new HeatmapScales();
    static get properties() {
      return {
        hass: {},
        config: {},
        grid: [],
        grid_status: void 0,
        meta: {},
        tooltipOpen: false,
        selected_element_data: ""
      };
    }
    render() {
      if (!this.grid || !this.grid.length) {
        this.grid = [];
      }
      const resolution = this.config.resolution || 60;
      const binsPerHour = 60 / resolution;
      const totalBins = 24 * binsPerHour;
      let autoStartBin = totalBins;
      let autoEndBin = 0;
      this.grid.forEach((entry) => {
        entry.vals.forEach((val, idx) => {
          if (val && Number(val) !== 0) {
            autoStartBin = Math.min(autoStartBin, idx);
            autoEndBin = Math.max(autoEndBin, idx);
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
        (entry, row) => html`<tr>
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
        let timeStr = "";
        if (this.myhass.locale.time_format === "12") {
          const dt = new Date(1970, 0, 1, hour, minute);
          timeStr = dt.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          });
        } else {
          timeStr = String(hour).padStart(2, "0") + ":" + String(minute).padStart(2, "0");
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
        const minutesTotal = bin * resolution;
        const hour = Math.floor(minutesTotal / 60);
        const minute = minutesTotal % 60;
        const from = /* @__PURE__ */ new Date("2022-03-20 00:00:00");
        from.setHours(hour, minute);
        const toMinutes = minutesTotal + resolution;
        const toHour = Math.floor(toMinutes / 60);
        const toMinute = toMinutes % 60;
        const to = /* @__PURE__ */ new Date("2022-03-20 00:00:00");
        to.setHours(toHour, toMinute);
        let rendered_value;
        if (this.selected_element_data.val === "") {
          rendered_value = this.myhass.localize(
            "ui.components.data-table.no-data"
          );
        } else {
          const val = +parseFloat(this.selected_element_data.val).toFixed(2);
          rendered_value = `${val} ${this.meta.scale.unit || this.meta.unit_of_measurement}`;
        }
        let time_format = new Intl.DateTimeFormat("sv-SE", {
          hour: "numeric",
          minute: "numeric"
        });
        if (this.myhass.locale.time_format === "12") {
          time_format = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
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
            +Number(this.meta.data.min + diff / 5 * i).toFixed(2)
          ]);
        }
      } else {
        const min = scale.steps[0].value;
        const max = scale.steps[scale.steps.length - 1].value;
        const span = max - min;
        for (const entry of scale.steps) {
          ticks.push([(entry.value - min) / span * 100, entry.value]);
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
        const next = h < hourlyVals.length - 1 && hourlyVals[h + 1] !== null ? Number(hourlyVals[h + 1]) : current;
        for (let i = 0; i < binsPerHour; i++) {
          const t = i / binsPerHour;
          const value = current + (next - current) * t;
          interpolated.push(value);
        }
      }
      return interpolated;
    }
    set hass(hass) {
      if (Date.now() - this.last_render_ts < 10 * 60 * 1e3) {
        return;
      }
      this.myhass = hass;
      this.meta = this.populate_meta(hass);
      const consumers = [this.config.entity];
      this.get_recorder(consumers, this.config.days);
      this.last_render_ts = Date.now();
    }
    get_recorder(consumers, days) {
      const now = /* @__PURE__ */ new Date();
      this.grid_status = void 0;
      const startTime = new Date(now - days * 864e5);
      startTime.setHours(23, 0, 0);
      this.myhass.callWS({
        type: "recorder/statistics_during_period",
        statistic_ids: consumers,
        period: "5minute",
        units: {
          energy: "kWh",
          temperature: this.myhass.config.unit_system.temperature
        },
        start_time: startTime.toISOString(),
        types: ["sum", "mean"]
      }).then((recorderResponse) => {
        debugger;
        for (const consumer of consumers) {
          const consumerData = recorderResponse[consumer];
          if (consumerData === void 0) {
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
        if (this.config.data.max === void 0 || this.config.data.max === "auto") {
          this.meta.data.max = this.max_from(this.grid);
        }
        if (this.config.data.min === void 0 || this.config.data.min === "auto") {
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
      let hourlyValues = Array(24).fill(null);
      let prevDate = null;
      for (const entry of consumerData) {
        const start = new Date(entry.start);
        const hour = start.getHours();
        const dateRep = start.toLocaleDateString(this.meta.language, {
          month: "short",
          day: "2-digit"
        });
        if (dateRep !== prevDate && prevDate !== null) {
          let vals = hourlyValues;
          if (resolution < 60) {
            vals = this.interpolateValues(hourlyValues, resolution);
          }
          grid.push({ date: prevDate, nativeDate: start, vals });
          hourlyValues = Array(24).fill(null);
        }
        hourlyValues[hour] = entry.mean;
        prevDate = dateRep;
      }
      if (prevDate !== null) {
        let vals = hourlyValues;
        if (resolution < 60) {
          vals = this.interpolateValues(hourlyValues, resolution);
        }
        grid.push({ date: prevDate, nativeDate: /* @__PURE__ */ new Date(), vals });
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
          day: "2-digit"
        });
        if (dateRep !== prevDate && prev !== null) {
          let vals = hourlyValues;
          if (resolution < 60) {
            vals = this.interpolateValues(hourlyValues, resolution);
          }
          grid.push({ date: prevDate, nativeDate: start, vals });
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
        grid.push({ date: prevDate, nativeDate: /* @__PURE__ */ new Date(), vals });
      }
      return grid.reverse();
    }
    populate_meta(hass) {
      const consumerAttributes = hass.states[this.config.entity].attributes;
      const device_class = consumerAttributes.device_class ?? this.config.device_class;
      return {
        unit_of_measurement: consumerAttributes.unit_of_measurement,
        state_class: consumerAttributes.state_class,
        device_class,
        language: hass.selectedLanguage ?? hass.language ?? "en",
        scale: this.scales.get_scale(
          this.config.scale ?? this.scales.defaults_for(device_class),
          device_class,
          this.myhass.config.unit_system
        ),
        title: this.config.title ?? (this.config.title === null ? void 0 : consumerAttributes.friendly_name),
        data: {
          max: this.config.data.max,
          min: this.config.data.min
        }
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
        resolution: config.resolution || 60
      };
      if (this.config.data.max !== void 0 && this.config.data.max !== "auto" && typeof this.config.data.max !== "number") {
        throw new Error("`data.max` need to be either `auto` or a number");
      }
      if (this.config.data.min !== void 0 && this.config.data.min !== "auto" && typeof this.config.data.min !== "number") {
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
  };
  customElements.define("heatmap-card", HeatmapCard);

  // src/heatmap-card-editor.js
  var LitElement2 = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
  var html2 = LitElement2.prototype.html;
  var css2 = LitElement2.prototype.css;
  function unsafe_html(text) {
    var spoof = [text];
    spoof.raw = true;
    return html2(spoof);
  }
  __name(unsafe_html, "unsafe_html");
  var HeatmapCardEditor = class extends LitElement2 {
    static {
      __name(this, "HeatmapCardEditor");
    }
    scales = new HeatmapScales();
    static get properties() {
      return {
        _config: {},
        active_tab: void 0,
        entity: void 0,
        device_class: void 0,
        scale: void 0
      };
    }
    set hass(hass) {
      this.myhass = hass;
    }
    async setConfig(config) {
      this._config = config;
      var helpers = await loadCardHelpers();
      if (!customElements.get("ha-entity-picker")) {
        const entities_card = await helpers.createCardElement({ type: "entities", entities: [] });
        await entities_card.constructor.getConfigElement();
      }
      this.entity = this.myhass.states[this._config.entity];
      this.device_class = (this.entity && this.entity.attributes.device_class) ?? this._config.device_class;
      this.scale = this.scales.get_scale(this._config.scale);
      if (this.active_tab === void 0 && this._config.scale) {
        this.active_tab = this.tab_from_scale(this._config.scale);
      }
    }
    /* Set the currently active tab */
    tab_from_scale(scale) {
      if (typeof scale === "object") {
        return 2;
      }
      const config = this.scales.get_scale(scale);
      if (config.type === "relative") {
        return 1;
      } else {
        return 0;
      }
    }
    /* We'll only display this element if the entity doesn't present a device_class */
    render_device_class_picker() {
      const dc_list = Object.keys(device_classes_default).map(function(dc) {
        return {
          "label": dc,
          "value": dc
        };
      });
      if (this.entity && !this.entity.attributes.device_class) {
        return html2`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${dc_list}
                    .value=${this._config.device_class ?? ""}
                    .allowCustomValue=${false}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `;
      }
    }
    /*
        Doc rendering function. We'll strip the `docs` key
        from any custom scale, so the text here should
        be safe to render verbatim as HTML / only ever originate
        from our repo.
    */
    render_scale_docs(scale_type) {
      if (this.scale === void 0) {
        return;
      }
      var license_block;
      if (this.scale.docs === void 0 || this.scale.type !== scale_type) {
        return;
      }
      if (this.scale.docs?.license) {
        license_block = html2`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `;
      }
      return html2`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${unsafe_html(this.scale.docs?.text)}
                ${license_block}
            </div>
        `;
    }
    render_tab_bar() {
      if (!this.device_class) {
        return;
      }
      const tab_switcher = /* @__PURE__ */ __name((ev) => {
        for (const elt of this.renderRoot.querySelectorAll(".scale-picker-content")) {
          elt.style.display = "none";
        }
        this.renderRoot.querySelector(`#tab-idx-${ev.detail.index}`).style.display = "block";
      }, "tab_switcher");
      return html2`
            <mwc-tab-bar
                @MDCTabBar:activated=${tab_switcher}
                .activeIndex=${this.active_tab ?? 0}
            >
                <mwc-tab label="Absolute"></mwc-tab>
                <mwc-tab label="Relative"></mwc-tab>
                <mwc-tab label="Custom"></mwc-tab>
            </mwc-tab-bar>
            <div class="scale-picker-content" id="tab-idx-0">
                ${this.render_absolute_scale_picker()}
                ${this.render_scale_docs("absolute")}
            </div>
            <div class="scale-picker-content" id="tab-idx-1">
                ${this.render_relative_scale_picker()}
                ${this.render_scale_docs("relative")}
            </div>
            <div class="scale-picker-content" id="tab-idx-2">
                <h3>Custom scale</h3>
                <p>There's no GUI support for setting a custom scale; use the code editor.</p>
                <p>See <a href="https://github.com/kandsten/ha-heatmap-card#custom-color-scales">
                the card README</a> for the config reference.</p>
            </div>
        `;
    }
    render_absolute_scale_picker() {
      var scale_picker;
      const scales = this.scales.get_by("device_class", this.device_class);
      if (typeof this._config.scale === "object") {
        scale_picker = html2`Using a custom scale, picker disabled`;
      } else if (scales.length === 0) {
        scale_picker = html2`There are no predefined scales for this device class`;
      } else {
        scale_picker = html2`
                ${scales.map((scale) => html2`
                    <ha-formfield .label=${scale.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${scale.key === this._config.scale}
                            .value=${scale.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `;
      }
      return html2`
            <div>
                <h3>Scales for this device class</h3>
                ${scale_picker}
            </div>
        `;
    }
    /*
        Dropdown (combobox) picker + min/max input widgets. Busy part of the
        code.
    */
    render_relative_scale_picker() {
      var scale_picker;
      var scales = this.scales.get_by("type", "relative").map(function(scale) {
        return {
          label: scale.name,
          value: scale.key,
          css: scale.css
        };
      });
      if (typeof this._config.scale === "object") {
        scale_picker = html2`Using a custom scale, picker disabled`;
      } else {
        var box_renderer = /* @__PURE__ */ __name((item) => html2`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${item.css});"></div> ${item.label}
            </ha-list-item>`, "box_renderer");
        scale_picker = html2`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${scales}
                    .value=${this._config.scale}
                    .renderer=${box_renderer}
                    .allowCustomValue=${true}
                > </ha-combo-box>
            `;
      }
      if (this.entity && this.device_class) {
        return html2`
                <h3>Color scales</h3>
                    ${scale_picker}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min ?? "auto"}
                        .placeholder=0
                        .disabled=${this._config.data?.min === "auto" || this._config.data?.min === void 0}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min === "auto" || this._config.data?.min === void 0}
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max ?? "auto"}
                        .disabled=${this._config.data?.max === "auto" || this._config.data?.max === void 0}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max === "auto" || this._config.data?.max === void 0}
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `;
      }
    }
    render_entity_warning() {
      if (this.entity === void 0) {
        return;
      }
      if (this.entity.attributes?.state_class === void 0 || ["measurement", "total", "total_increasing"].includes(this.entity.attributes?.state_class) === false) {
        return html2`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class ?? "undefined"}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `;
      }
    }
    render() {
      if (this.myhass === void 0 || this._config === void 0) {
        return;
      }
      return html2`
        <div class="root card-config">
            <ha-entity-picker
                .required=${true}
                .hass=${this.myhass}
                .value=${this._config.entity}
                .configValue=${"entity"}
                .includeDomains=${"sensor"}
            ></ha-entity-picker>
            ${this.render_entity_warning()}
            ${this.render_device_class_picker()}
            <ha-textfield
                .label=${"Days"}
                .placeholder=${21}
                .type=${"number"}
                .value=${this._config.days}
                .configValue=${"days"}
                @input=${this.update_field}
                .helper=${"Days of data to include in the heatmap. Defaults to 21"}
                .helperPersistent=${true}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${this.entity && this.entity.attributes.friendly_name || ""}
                .value=${this._config.title || ""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
        </div>`;
    }
    /*
            Cribbing the general idea from ha-selector-select.ts here, just
            doing some more manual event work.
    
            Not very generic and a bit fugly. Works for this particular scenario.
    
        */
    update_field(ev) {
      ev.stopPropagation();
      const value = ev.target.value;
      if (this.disabled || value === void 0 || value === this.value) {
        return;
      }
      const event = new Event("value-changed", { bubbles: true });
      if ("checked" in ev.target) {
        event.detail = { "value": ev.target.checked === true ? value : 0 };
      } else if (isNaN(parseFloat(value))) {
        event.detail = { "value": value };
      } else {
        event.detail = { "value": parseFloat(value) };
      }
      ev.target.dispatchEvent(event);
    }
    createRenderRoot() {
      const root = super.createRenderRoot();
      root.addEventListener("value-changed", (ev) => {
        ev.stopPropagation();
        const key = ev.target.configValue;
        const val = ev.detail.value;
        var config = JSON.parse(JSON.stringify(this._config));
        if (key === "device_class") {
          config["scale"] = this.scales.defaults_for(val);
          this.active_tab = this.tab_from_scale(config["scale"]);
        }
        if (key === "entity") {
          const new_entity = this.myhass.states[val];
          const new_device_class = new_entity && new_entity.attributes.device_class;
          if (new_device_class) {
            config["scale"] = this.scales.defaults_for(new_device_class);
            this.active_tab = this.tab_from_scale(config["scale"]);
            delete config["device_class"];
          }
        }
        var root2 = config;
        var target = key;
        if (key.indexOf(".")) {
          for (const segment of key.split(".").slice(0, -1)) {
            if (root2[segment] === void 0) {
              root2[segment] = {};
            }
            root2 = root2[segment];
          }
          target = key.split(".").slice(-1);
        }
        root2[target] = val;
        const event = new Event("config-changed");
        event.detail = { "config": config };
        this.dispatchEvent(event);
      });
      return root;
    }
    /* Copied from ha-form css; used for spacing between combo boxes */
    static styles = css2`
        .root > * {
            display: block;
        }
        .root > *:not([own-margin]):not(:last-child) {
            margin-bottom: 24px;
        }
        ha-alert[own-margin] {
            margin-bottom: 4px;
        }


        a:link, a:visited {
            color: var(--primary-color);
        }

        .scale-docs {
            margin-left: 2em;
            margin-right: 2em;
            word-wrap: break-word;
        }

        /* Don't mess with the line spacing */
        sup, sub {
            line-height: 0;
        }
    `;
  };

  // src/heatmap-card-anchor.js
  customElements.define("heatmap-card", HeatmapCard);
  customElements.define("heatmap-card-editor", HeatmapCardEditor);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "heatmap-card",
    name: "Heatmap card",
    preview: true,
    description: "Heat maps of entities or energy data"
  });
})();
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
