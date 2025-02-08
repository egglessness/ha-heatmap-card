(()=>{var bi=Object.create;var tn=Object.defineProperty;var vi=Object.getOwnPropertyDescriptor;var yi=Object.getOwnPropertyNames;var _i=Object.getPrototypeOf,wi=Object.prototype.hasOwnProperty;var ki=(q,c)=>()=>(c||q((c={exports:{}}).exports,c),c.exports);var xi=(q,c,p,m)=>{if(c&&typeof c=="object"||typeof c=="function")for(let b of yi(c))!wi.call(q,b)&&b!==p&&tn(q,b,{get:()=>c[b],enumerable:!(m=vi(c,b))||m.enumerable});return q};var $i=(q,c,p)=>(p=q!=null?bi(_i(q)):{},xi(c||!q||!q.__esModule?tn(p,"default",{value:q,enumerable:!0}):p,q));var an=ki((_t,wt)=>{(function(q,c){typeof _t=="object"&&typeof wt<"u"?wt.exports=c():typeof define=="function"&&define.amd?define(c):(q=typeof globalThis<"u"?globalThis:q||self).chroma=c()})(_t,function(){"use strict";for(var q=function(e,t,a){return t===void 0&&(t=0),a===void 0&&(a=1),e<t?t:e>a?a:e},c=q,p={},m=0,b=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];m<b.length;m+=1){var _=b[m];p["[object "+_+"]"]=_.toLowerCase()}var k=function(e){return p[Object.prototype.toString.call(e)]||"object"},A=k,R=k,C=Math.PI,f={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var t=0;t<=3;t++)t<3?((e[t]<0||e[t]>255)&&(e._clipped=!0),e[t]=c(e[t],0,255)):t===3&&(e[t]=c(e[t],0,1));return e},limit:q,type:k,unpack:function(e,t){return t===void 0&&(t=null),e.length>=3?Array.prototype.slice.call(e):A(e[0])=="object"&&t?t.split("").filter(function(a){return e[0][a]!==void 0}).map(function(a){return e[0][a]}):e[0]},last:function(e){if(e.length<2)return null;var t=e.length-1;return R(e[t])=="string"?e[t].toLowerCase():null},PI:C,TWOPI:2*C,PITHIRD:C/3,DEG2RAD:C/180,RAD2DEG:180/C},S={format:{},autodetect:[]},K=f.last,de=f.clip_rgb,re=f.type,Z=S,qe=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=this;if(re(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];var n=K(e),o=!1;if(!n){o=!0,Z.sorted||(Z.autodetect=Z.autodetect.sort(function(u,d){return d.p-u.p}),Z.sorted=!0);for(var i=0,r=Z.autodetect;i<r.length;i+=1){var s=r[i];if(n=s.test.apply(s,e))break}}if(!Z.format[n])throw new Error("unknown format: "+e);var l=Z.format[n].apply(null,o?e:e.slice(0,-1));a._rgb=de(l),a._rgb.length===3&&a._rgb.push(1)};qe.prototype.toString=function(){return re(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var E=qe,Ae=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ae.Color,[null].concat(e)))};Ae.Color=E,Ae.version="2.4.2";var V=Ae,nn=f.unpack,Mt=Math.max,rn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=nn(e,"rgb"),n=a[0],o=a[1],i=a[2],r=1-Mt(n/=255,Mt(o/=255,i/=255)),s=r<1?1/(1-r):0,l=(1-n-r)*s,u=(1-o-r)*s,d=(1-i-r)*s;return[l,u,d,r]},on=f.unpack,sn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=on(e,"cmyk"))[0],n=e[1],o=e[2],i=e[3],r=e.length>4?e[4]:1;return i===1?[0,0,0,r]:[a>=1?0:255*(1-a)*(1-i),n>=1?0:255*(1-n)*(1-i),o>=1?0:255*(1-o)*(1-i),r]},ln=V,Et=E,Ft=S,cn=f.unpack,un=f.type,fn=rn;Et.prototype.cmyk=function(){return fn(this._rgb)},ln.cmyk=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Et,[null].concat(e,["cmyk"])))},Ft.format.cmyk=sn,Ft.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=cn(e,"cmyk"),un(e)==="array"&&e.length===4)return"cmyk"}});var dn=f.unpack,hn=f.last,Ge=function(e){return Math.round(100*e)/100},pn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=dn(e,"hsla"),n=hn(e)||"lsa";return a[0]=Ge(a[0]||0),a[1]=Ge(100*a[1])+"%",a[2]=Ge(100*a[2])+"%",n==="hsla"||a.length>3&&a[3]<1?(a[3]=a.length>3?a[3]:1,n="hsla"):a.length=3,n+"("+a.join(",")+")"},gn=f.unpack,At=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=gn(e,"rgba"))[0],n=e[1],o=e[2];a/=255,n/=255,o/=255;var i,r,s=Math.min(a,n,o),l=Math.max(a,n,o),u=(l+s)/2;return l===s?(i=0,r=Number.NaN):i=u<.5?(l-s)/(l+s):(l-s)/(2-l-s),a==l?r=(n-o)/(l-s):n==l?r=2+(o-a)/(l-s):o==l&&(r=4+(a-n)/(l-s)),(r*=60)<0&&(r+=360),e.length>3&&e[3]!==void 0?[r,i,u,e[3]]:[r,i,u]},mn=f.unpack,bn=f.last,vn=pn,yn=At,je=Math.round,_n=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=mn(e,"rgba"),n=bn(e)||"rgb";return n.substr(0,3)=="hsl"?vn(yn(a),n):(a[0]=je(a[0]),a[1]=je(a[1]),a[2]=je(a[2]),(n==="rgba"||a.length>3&&a[3]<1)&&(a[3]=a.length>3?a[3]:1,n="rgba"),n+"("+a.slice(0,n==="rgb"?3:4).join(",")+")")},wn=f.unpack,Ve=Math.round,Ct=function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var n,o,i,r=(t=wn(t,"hsl"))[0],s=t[1],l=t[2];if(s===0)n=o=i=255*l;else{var u=[0,0,0],d=[0,0,0],v=l<.5?l*(1+s):l+s-l*s,w=2*l-v,y=r/360;u[0]=y+1/3,u[1]=y,u[2]=y-1/3;for(var g=0;g<3;g++)u[g]<0&&(u[g]+=1),u[g]>1&&(u[g]-=1),6*u[g]<1?d[g]=w+6*(v-w)*u[g]:2*u[g]<1?d[g]=v:3*u[g]<2?d[g]=w+(v-w)*(2/3-u[g])*6:d[g]=w;n=(e=[Ve(255*d[0]),Ve(255*d[1]),Ve(255*d[2])])[0],o=e[1],i=e[2]}return t.length>3?[n,o,i,t[3]]:[n,o,i,1]},Nt=Ct,Dt=S,St=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Pt=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,It=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ot=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Bt=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Rt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Lt=Math.round,Tt=function(e){var t;if(e=e.toLowerCase().trim(),Dt.format.named)try{return Dt.format.named(e)}catch{}if(t=e.match(St)){for(var a=t.slice(1,4),n=0;n<3;n++)a[n]=+a[n];return a[3]=1,a}if(t=e.match(Pt)){for(var o=t.slice(1,5),i=0;i<4;i++)o[i]=+o[i];return o}if(t=e.match(It)){for(var r=t.slice(1,4),s=0;s<3;s++)r[s]=Lt(2.55*r[s]);return r[3]=1,r}if(t=e.match(Ot)){for(var l=t.slice(1,5),u=0;u<3;u++)l[u]=Lt(2.55*l[u]);return l[3]=+l[3],l}if(t=e.match(Bt)){var d=t.slice(1,4);d[1]*=.01,d[2]*=.01;var v=Nt(d);return v[3]=1,v}if(t=e.match(Rt)){var w=t.slice(1,4);w[1]*=.01,w[2]*=.01;var y=Nt(w);return y[3]=+t[4],y}};Tt.test=function(e){return St.test(e)||Pt.test(e)||It.test(e)||Ot.test(e)||Bt.test(e)||Rt.test(e)};var kn=V,qt=E,Gt=S,xn=f.type,$n=_n,jt=Tt;qt.prototype.css=function(e){return $n(this._rgb,e)},kn.css=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(qt,[null].concat(e,["css"])))},Gt.format.css=jt,Gt.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&xn(e)==="string"&&jt.test(e))return"css"}});var Vt=E,Mn=V,En=f.unpack;S.format.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=En(e,"rgba");return a[0]*=255,a[1]*=255,a[2]*=255,a},Mn.gl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Vt,[null].concat(e,["gl"])))},Vt.prototype.gl=function(){var e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]};var Fn=f.unpack,An=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Fn(e,"rgb"),o=n[0],i=n[1],r=n[2],s=Math.min(o,i,r),l=Math.max(o,i,r),u=l-s,d=100*u/255,v=s/(255-u)*100;return u===0?a=Number.NaN:(o===l&&(a=(i-r)/u),i===l&&(a=2+(r-o)/u),r===l&&(a=4+(o-i)/u),(a*=60)<0&&(a+=360)),[a,d,v]},Cn=f.unpack,Nn=Math.floor,Dn=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,d,v=(r=Cn(r,"hcg"))[0],w=r[1],y=r[2];y*=255;var g=255*w;if(w===0)l=u=d=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var $=Nn(v/=60),x=v-$,O=y*(1-w),P=O+g*(1-x),j=O+g*x,H=O+g;switch($){case 0:l=(e=[H,j,O])[0],u=e[1],d=e[2];break;case 1:l=(t=[P,H,O])[0],u=t[1],d=t[2];break;case 2:l=(a=[O,H,j])[0],u=a[1],d=a[2];break;case 3:l=(n=[O,P,H])[0],u=n[1],d=n[2];break;case 4:l=(o=[j,O,H])[0],u=o[1],d=o[2];break;case 5:l=(i=[H,O,P])[0],u=i[1],d=i[2]}}return[l,u,d,r.length>3?r[3]:1]},Sn=f.unpack,Pn=f.type,In=V,Wt=E,Ht=S,On=An;Wt.prototype.hcg=function(){return On(this._rgb)},In.hcg=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Wt,[null].concat(e,["hcg"])))},Ht.format.hcg=Dn,Ht.autodetect.push({p:1,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Sn(e,"hcg"),Pn(e)==="array"&&e.length===3)return"hcg"}});var Bn=f.unpack,Rn=f.last,Ce=Math.round,zt=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Bn(e,"rgba"),n=a[0],o=a[1],i=a[2],r=a[3],s=Rn(e)||"auto";r===void 0&&(r=1),s==="auto"&&(s=r<1?"rgba":"rgb");var l=(n=Ce(n))<<16|(o=Ce(o))<<8|(i=Ce(i)),u="000000"+l.toString(16);u=u.substr(u.length-6);var d="0"+Ce(255*r).toString(16);switch(d=d.substr(d.length-2),s.toLowerCase()){case"rgba":return"#"+u+d;case"argb":return"#"+d+u;default:return"#"+u}},Ln=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Tn=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Qt=function(e){if(e.match(Ln)){e.length!==4&&e.length!==7||(e=e.substr(1)),e.length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,1]}if(e.match(Tn)){e.length!==5&&e.length!==9||(e=e.substr(1)),e.length===4&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var a=parseInt(e,16);return[a>>24&255,a>>16&255,a>>8&255,Math.round((255&a)/255*100)/100]}throw new Error("unknown hex color: "+e)},qn=V,Ut=E,Gn=f.type,Yt=S,jn=zt;Ut.prototype.hex=function(e){return jn(this._rgb,e)},qn.hex=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ut,[null].concat(e,["hex"])))},Yt.format.hex=Qt,Yt.autodetect.push({p:4,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Gn(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});var Vn=f.unpack,Jt=f.TWOPI,Wn=Math.min,Hn=Math.sqrt,zn=Math.acos,Qn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n=Vn(e,"rgb"),o=n[0],i=n[1],r=n[2],s=Wn(o/=255,i/=255,r/=255),l=(o+i+r)/3,u=l>0?1-s/l:0;return u===0?a=NaN:(a=(o-i+(o-r))/2,a/=Hn((o-i)*(o-i)+(o-r)*(i-r)),a=zn(a),r>i&&(a=Jt-a),a/=Jt),[360*a,u,l]},Un=f.unpack,We=f.limit,he=f.TWOPI,He=f.PITHIRD,pe=Math.cos,Yn=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=Un(e,"hsi"))[0],r=e[1],s=e[2];return isNaN(i)&&(i=0),isNaN(r)&&(r=0),i>360&&(i-=360),i<0&&(i+=360),(i/=360)<1/3?n=1-((o=(1-r)/3)+(a=(1+r*pe(he*i)/pe(He-he*i))/3)):i<2/3?o=1-((a=(1-r)/3)+(n=(1+r*pe(he*(i-=1/3))/pe(He-he*i))/3)):a=1-((n=(1-r)/3)+(o=(1+r*pe(he*(i-=2/3))/pe(He-he*i))/3)),[255*(a=We(s*a*3)),255*(n=We(s*n*3)),255*(o=We(s*o*3)),e.length>3?e[3]:1]},Jn=f.unpack,Kn=f.type,Zn=V,Kt=E,Zt=S,Xn=Qn;Kt.prototype.hsi=function(){return Xn(this._rgb)},Zn.hsi=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Kt,[null].concat(e,["hsi"])))},Zt.format.hsi=Yn,Zt.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=Jn(e,"hsi"),Kn(e)==="array"&&e.length===3)return"hsi"}});var er=f.unpack,tr=f.type,ar=V,Xt=E,ea=S,nr=At;Xt.prototype.hsl=function(){return nr(this._rgb)},ar.hsl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Xt,[null].concat(e,["hsl"])))},ea.format.hsl=Ct,ea.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=er(e,"hsl"),tr(e)==="array"&&e.length===3)return"hsl"}});var rr=f.unpack,or=Math.min,ir=Math.max,sr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=rr(e,"rgb"))[0],r=e[1],s=e[2],l=or(i,r,s),u=ir(i,r,s),d=u-l;return o=u/255,u===0?(a=Number.NaN,n=0):(n=d/u,i===u&&(a=(r-s)/d),r===u&&(a=2+(s-i)/d),s===u&&(a=4+(i-r)/d),(a*=60)<0&&(a+=360)),[a,n,o]},lr=f.unpack,cr=Math.floor,ur=function(){for(var e,t,a,n,o,i,r=[],s=arguments.length;s--;)r[s]=arguments[s];var l,u,d,v=(r=lr(r,"hsv"))[0],w=r[1],y=r[2];if(y*=255,w===0)l=u=d=y;else{v===360&&(v=0),v>360&&(v-=360),v<0&&(v+=360);var g=cr(v/=60),$=v-g,x=y*(1-w),O=y*(1-w*$),P=y*(1-w*(1-$));switch(g){case 0:l=(e=[y,P,x])[0],u=e[1],d=e[2];break;case 1:l=(t=[O,y,x])[0],u=t[1],d=t[2];break;case 2:l=(a=[x,y,P])[0],u=a[1],d=a[2];break;case 3:l=(n=[x,O,y])[0],u=n[1],d=n[2];break;case 4:l=(o=[P,x,y])[0],u=o[1],d=o[2];break;case 5:l=(i=[y,x,O])[0],u=i[1],d=i[2]}}return[l,u,d,r.length>3?r[3]:1]},fr=f.unpack,dr=f.type,hr=V,ta=E,aa=S,pr=sr;ta.prototype.hsv=function(){return pr(this._rgb)},hr.hsv=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ta,[null].concat(e,["hsv"])))},aa.format.hsv=ur,aa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=fr(e,"hsv"),dr(e)==="array"&&e.length===3)return"hsv"}});var Ne={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ge=Ne,gr=f.unpack,na=Math.pow,ze=function(e){return(e/=255)<=.04045?e/12.92:na((e+.055)/1.055,2.4)},Qe=function(e){return e>ge.t3?na(e,1/3):e/ge.t2+ge.t0},mr=function(e,t,a){return e=ze(e),t=ze(t),a=ze(a),[Qe((.4124564*e+.3575761*t+.1804375*a)/ge.Xn),Qe((.2126729*e+.7151522*t+.072175*a)/ge.Yn),Qe((.0193339*e+.119192*t+.9503041*a)/ge.Zn)]},ra=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=gr(e,"rgb"),n=a[0],o=a[1],i=a[2],r=mr(n,o,i),s=r[0],l=r[1],u=r[2],d=116*l-16;return[d<0?0:d,500*(s-l),200*(l-u)]},me=Ne,br=f.unpack,vr=Math.pow,Ue=function(e){return 255*(e<=.00304?12.92*e:1.055*vr(e,1/2.4)-.055)},Ye=function(e){return e>me.t1?e*e*e:me.t2*(e-me.t0)},oa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,n,o,i=(e=br(e,"lab"))[0],r=e[1],s=e[2];return n=(i+16)/116,a=isNaN(r)?n:n+r/500,o=isNaN(s)?n:n-s/200,n=me.Yn*Ye(n),a=me.Xn*Ye(a),o=me.Zn*Ye(o),[Ue(3.2404542*a-1.5371385*n-.4985314*o),Ue(-.969266*a+1.8760108*n+.041556*o),Ue(.0556434*a-.2040259*n+1.0572252*o),e.length>3?e[3]:1]},yr=f.unpack,_r=f.type,wr=V,ia=E,sa=S,kr=ra;ia.prototype.lab=function(){return kr(this._rgb)},wr.lab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ia,[null].concat(e,["lab"])))},sa.format.lab=oa,sa.autodetect.push({p:2,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=yr(e,"lab"),_r(e)==="array"&&e.length===3)return"lab"}});var xr=f.unpack,$r=f.RAD2DEG,Mr=Math.sqrt,Er=Math.atan2,Fr=Math.round,la=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=xr(e,"lab"),n=a[0],o=a[1],i=a[2],r=Mr(o*o+i*i),s=(Er(i,o)*$r+360)%360;return Fr(1e4*r)===0&&(s=Number.NaN),[n,r,s]},Ar=f.unpack,Cr=ra,Nr=la,Dr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Ar(e,"rgb"),n=a[0],o=a[1],i=a[2],r=Cr(n,o,i),s=r[0],l=r[1],u=r[2];return Nr(s,l,u)},Sr=f.unpack,Pr=f.DEG2RAD,Ir=Math.sin,Or=Math.cos,ca=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Sr(e,"lch"),n=a[0],o=a[1],i=a[2];return isNaN(i)&&(i=0),[n,Or(i*=Pr)*o,Ir(i)*o]},Br=f.unpack,Rr=ca,Lr=oa,ua=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=Br(e,"lch"))[0],n=e[1],o=e[2],i=Rr(a,n,o),r=i[0],s=i[1],l=i[2],u=Lr(r,s,l),d=u[0],v=u[1],w=u[2];return[d,v,w,e.length>3?e[3]:1]},Tr=f.unpack,qr=ua,Gr=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Tr(e,"hcl").reverse();return qr.apply(void 0,a)},jr=f.unpack,Vr=f.type,fa=V,De=E,Je=S,da=Dr;De.prototype.lch=function(){return da(this._rgb)},De.prototype.hcl=function(){return da(this._rgb).reverse()},fa.lch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(De,[null].concat(e,["lch"])))},fa.hcl=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(De,[null].concat(e,["hcl"])))},Je.format.lch=ua,Je.format.hcl=Gr,["lch","hcl"].forEach(function(e){return Je.autodetect.push({p:2,test:function(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];if(t=jr(t,e),Vr(t)==="array"&&t.length===3)return e}})});var ha={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},pa=S,Wr=f.type,xe=ha,Hr=Qt,zr=zt;E.prototype.name=function(){for(var e=zr(this._rgb,"rgb"),t=0,a=Object.keys(xe);t<a.length;t+=1){var n=a[t];if(xe[n]===e)return n.toLowerCase()}return e},pa.format.named=function(e){if(e=e.toLowerCase(),xe[e])return Hr(xe[e]);throw new Error("unknown color name: "+e)},pa.autodetect.push({p:5,test:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!t.length&&Wr(e)==="string"&&xe[e.toLowerCase()])return"named"}});var Qr=f.unpack,Ur=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=Qr(e,"rgb"),n=a[0],o=a[1],i=a[2];return(n<<16)+(o<<8)+i},Yr=f.type,Jr=function(e){if(Yr(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,255&e,1];throw new Error("unknown num color: "+e)},Kr=V,ga=E,ma=S,Zr=f.type,Xr=Ur;ga.prototype.num=function(){return Xr(this._rgb)},Kr.num=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(ga,[null].concat(e,["num"])))},ma.format.num=Jr,ma.autodetect.push({p:5,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e.length===1&&Zr(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});var eo=V,Ke=E,ba=S,va=f.unpack,ya=f.type,_a=Math.round;Ke.prototype.rgb=function(e){return e===void 0&&(e=!0),e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(_a)},Ke.prototype.rgba=function(e){return e===void 0&&(e=!0),this._rgb.slice(0,4).map(function(t,a){return a<3?e===!1?t:_a(t):t})},eo.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ke,[null].concat(e,["rgb"])))},ba.format.rgb=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=va(e,"rgba");return a[3]===void 0&&(a[3]=1),a},ba.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=va(e,"rgba"),ya(e)==="array"&&(e.length===3||e.length===4&&ya(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});var Se=Math.log,wa=function(e){var t,a,n,o=e/100;return o<66?(t=255,a=o<6?0:-155.25485562709179-.44596950469579133*(a=o-2)+104.49216199393888*Se(a),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*Se(n)):(t=351.97690566805693+.114206453784165*(t=o-55)-40.25366309332127*Se(t),a=325.4494125711974+.07943456536662342*(a=o-50)-28.0852963507957*Se(a),n=255),[t,a,n,1]},to=wa,ao=f.unpack,no=Math.round,ro=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a,n=ao(e,"rgb"),o=n[0],i=n[2],r=1e3,s=4e4,l=.4;s-r>l;){var u=to(a=.5*(s+r));u[2]/u[0]>=i/o?s=a:r=a}return no(a)},Ze=V,Pe=E,Xe=S,oo=ro;Pe.prototype.temp=Pe.prototype.kelvin=Pe.prototype.temperature=function(){return oo(this._rgb)},Ze.temp=Ze.kelvin=Ze.temperature=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Pe,[null].concat(e,["temp"])))},Xe.format.temp=Xe.format.kelvin=Xe.format.temperature=wa;var io=f.unpack,et=Math.cbrt,so=Math.pow,lo=Math.sign,ka=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=io(e,"rgb"),n=a[0],o=a[1],i=a[2],r=[tt(n/255),tt(o/255),tt(i/255)],s=r[0],l=r[1],u=r[2],d=et(.4122214708*s+.5363325363*l+.0514459929*u),v=et(.2119034982*s+.6806995451*l+.1073969566*u),w=et(.0883024619*s+.2817188376*l+.6299787005*u);return[.2104542553*d+.793617785*v-.0040720468*w,1.9779984951*d-2.428592205*v+.4505937099*w,.0259040371*d+.7827717662*v-.808675766*w]};function tt(e){var t=Math.abs(e);return t<.04045?e/12.92:(lo(e)||1)*so((t+.055)/1.055,2.4)}var co=f.unpack,Ie=Math.pow,uo=Math.sign,xa=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=co(e,"lab"))[0],n=e[1],o=e[2],i=Ie(a+.3963377774*n+.2158037573*o,3),r=Ie(a-.1055613458*n-.0638541728*o,3),s=Ie(a-.0894841775*n-1.291485548*o,3);return[255*at(4.0767416621*i-3.3077115913*r+.2309699292*s),255*at(-1.2684380046*i+2.6097574011*r-.3413193965*s),255*at(-.0041960863*i-.7034186147*r+1.707614701*s),e.length>3?e[3]:1]};function at(e){var t=Math.abs(e);return t>.0031308?(uo(e)||1)*(1.055*Ie(t,1/2.4)-.055):12.92*e}var fo=f.unpack,ho=f.type,po=V,$a=E,Ma=S,go=ka;$a.prototype.oklab=function(){return go(this._rgb)},po.oklab=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply($a,[null].concat(e,["oklab"])))},Ma.format.oklab=xa,Ma.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=fo(e,"oklab"),ho(e)==="array"&&e.length===3)return"oklab"}});var mo=f.unpack,bo=ka,vo=la,yo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=mo(e,"rgb"),n=a[0],o=a[1],i=a[2],r=bo(n,o,i),s=r[0],l=r[1],u=r[2];return vo(s,l,u)},_o=f.unpack,wo=ca,ko=xa,xo=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a=(e=_o(e,"lch"))[0],n=e[1],o=e[2],i=wo(a,n,o),r=i[0],s=i[1],l=i[2],u=ko(r,s,l),d=u[0],v=u[1],w=u[2];return[d,v,w,e.length>3?e[3]:1]},$o=f.unpack,Mo=f.type,Eo=V,Ea=E,Fa=S,Fo=yo;Ea.prototype.oklch=function(){return Fo(this._rgb)},Eo.oklch=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return new(Function.prototype.bind.apply(Ea,[null].concat(e,["oklch"])))},Fa.format.oklch=xo,Fa.autodetect.push({p:3,test:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if(e=$o(e,"oklch"),Mo(e)==="array"&&e.length===3)return"oklch"}});var Aa=E,Ao=f.type;Aa.prototype.alpha=function(e,t){return t===void 0&&(t=!1),e!==void 0&&Ao(e)==="number"?t?(this._rgb[3]=e,this):new Aa([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},E.prototype.clipped=function(){return this._rgb._clipped||!1};var se=E,Co=Ne;se.prototype.darken=function(e){e===void 0&&(e=1);var t=this.lab();return t[0]-=Co.Kn*e,new se(t,"lab").alpha(this.alpha(),!0)},se.prototype.brighten=function(e){return e===void 0&&(e=1),this.darken(-e)},se.prototype.darker=se.prototype.darken,se.prototype.brighter=se.prototype.brighten,E.prototype.get=function(e){var t=e.split("."),a=t[0],n=t[1],o=this[a]();if(n){var i=a.indexOf(n)-(a.substr(0,2)==="ok"?2:0);if(i>-1)return o[i];throw new Error("unknown channel "+n+" in mode "+a)}return o};var be=E,No=f.type,Do=Math.pow;be.prototype.luminance=function(e){if(e!==void 0&&No(e)==="number"){if(e===0)return new be([0,0,0,this._rgb[3]],"rgb");if(e===1)return new be([255,255,255,this._rgb[3]],"rgb");var t=this.luminance(),a=20,n=function(i,r){var s=i.interpolate(r,.5,"rgb"),l=s.luminance();return Math.abs(e-l)<1e-7||!a--?s:l>e?n(i,s):n(s,r)},o=(t>e?n(new be([0,0,0]),this):n(this,new be([255,255,255]))).rgb();return new be(o.concat([this._rgb[3]]))}return So.apply(void 0,this._rgb.slice(0,3))};var So=function(e,t,a){return .2126*(e=nt(e))+.7152*(t=nt(t))+.0722*(a=nt(a))},nt=function(e){return(e/=255)<=.03928?e/12.92:Do((e+.055)/1.055,2.4)},J={},Ca=E,Na=f.type,Oe=J,Da=function(e,t,a){a===void 0&&(a=.5);for(var n=[],o=arguments.length-3;o-- >0;)n[o]=arguments[o+3];var i=n[0]||"lrgb";if(Oe[i]||n.length||(i=Object.keys(Oe)[0]),!Oe[i])throw new Error("interpolation mode "+i+" is not defined");return Na(e)!=="object"&&(e=new Ca(e)),Na(t)!=="object"&&(t=new Ca(t)),Oe[i](e,t,a).alpha(e.alpha()+a*(t.alpha()-e.alpha()))},Sa=E,Po=Da;Sa.prototype.mix=Sa.prototype.interpolate=function(e,t){t===void 0&&(t=.5);for(var a=[],n=arguments.length-2;n-- >0;)a[n]=arguments[n+2];return Po.apply(void 0,[this,e,t].concat(a))};var Pa=E;Pa.prototype.premultiply=function(e){e===void 0&&(e=!1);var t=this._rgb,a=t[3];return e?(this._rgb=[t[0]*a,t[1]*a,t[2]*a,a],this):new Pa([t[0]*a,t[1]*a,t[2]*a,a],"rgb")};var rt=E,Io=Ne;rt.prototype.saturate=function(e){e===void 0&&(e=1);var t=this.lch();return t[1]+=Io.Kn*e,t[1]<0&&(t[1]=0),new rt(t,"lch").alpha(this.alpha(),!0)},rt.prototype.desaturate=function(e){return e===void 0&&(e=1),this.saturate(-e)};var Ia=E,Oa=f.type;Ia.prototype.set=function(e,t,a){a===void 0&&(a=!1);var n=e.split("."),o=n[0],i=n[1],r=this[o]();if(i){var s=o.indexOf(i)-(o.substr(0,2)==="ok"?2:0);if(s>-1){if(Oa(t)=="string")switch(t.charAt(0)){case"+":case"-":r[s]+=+t;break;case"*":r[s]*=+t.substr(1);break;case"/":r[s]/=+t.substr(1);break;default:r[s]=+t}else{if(Oa(t)!=="number")throw new Error("unsupported value for Color.set");r[s]=t}var l=new Ia(r,o);return a?(this._rgb=l._rgb,this):l}throw new Error("unknown channel "+i+" in mode "+o)}return r};var Oo=E;J.rgb=function(e,t,a){var n=e._rgb,o=t._rgb;return new Oo(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"rgb")};var Bo=E,ot=Math.sqrt,ve=Math.pow;J.lrgb=function(e,t,a){var n=e._rgb,o=n[0],i=n[1],r=n[2],s=t._rgb,l=s[0],u=s[1],d=s[2];return new Bo(ot(ve(o,2)*(1-a)+ve(l,2)*a),ot(ve(i,2)*(1-a)+ve(u,2)*a),ot(ve(r,2)*(1-a)+ve(d,2)*a),"rgb")};var Ro=E;J.lab=function(e,t,a){var n=e.lab(),o=t.lab();return new Ro(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"lab")};var Lo=E,ye=function(e,t,a,n){var o,i,r,s,l,u,d,v,w,y,g,$,x;return n==="hsl"?(r=e.hsl(),s=t.hsl()):n==="hsv"?(r=e.hsv(),s=t.hsv()):n==="hcg"?(r=e.hcg(),s=t.hcg()):n==="hsi"?(r=e.hsi(),s=t.hsi()):n==="lch"||n==="hcl"?(n="hcl",r=e.hcl(),s=t.hcl()):n==="oklch"&&(r=e.oklch().reverse(),s=t.oklch().reverse()),n.substr(0,1)!=="h"&&n!=="oklch"||(l=(o=r)[0],d=o[1],w=o[2],u=(i=s)[0],v=i[1],y=i[2]),isNaN(l)||isNaN(u)?isNaN(l)?isNaN(u)?$=Number.NaN:($=u,w!=1&&w!=0||n=="hsv"||(g=v)):($=l,y!=1&&y!=0||n=="hsv"||(g=d)):$=l+a*(u>l&&u-l>180?u-(l+360):u<l&&l-u>180?u+360-l:u-l),g===void 0&&(g=d+a*(v-d)),x=w+a*(y-w),new Lo(n==="oklch"?[x,g,$]:[$,g,x],n)},To=ye,Ba=function(e,t,a){return To(e,t,a,"lch")};J.lch=Ba,J.hcl=Ba;var qo=E;J.num=function(e,t,a){var n=e.num(),o=t.num();return new qo(n+a*(o-n),"num")};var Go=ye;J.hcg=function(e,t,a){return Go(e,t,a,"hcg")};var jo=ye;J.hsi=function(e,t,a){return jo(e,t,a,"hsi")};var Vo=ye;J.hsl=function(e,t,a){return Vo(e,t,a,"hsl")};var Wo=ye;J.hsv=function(e,t,a){return Wo(e,t,a,"hsv")};var Ho=E;J.oklab=function(e,t,a){var n=e.oklab(),o=t.oklab();return new Ho(n[0]+a*(o[0]-n[0]),n[1]+a*(o[1]-n[1]),n[2]+a*(o[2]-n[2]),"oklab")};var zo=ye;J.oklch=function(e,t,a){return zo(e,t,a,"oklch")};var it=E,Qo=f.clip_rgb,st=Math.pow,lt=Math.sqrt,ct=Math.PI,Ra=Math.cos,La=Math.sin,Uo=Math.atan2,Yo=function(e,t){for(var a=e.length,n=[0,0,0,0],o=0;o<e.length;o++){var i=e[o],r=t[o]/a,s=i._rgb;n[0]+=st(s[0],2)*r,n[1]+=st(s[1],2)*r,n[2]+=st(s[2],2)*r,n[3]+=s[3]*r}return n[0]=lt(n[0]),n[1]=lt(n[1]),n[2]=lt(n[2]),n[3]>.9999999&&(n[3]=1),new it(Qo(n))},X=V,_e=f.type,Jo=Math.pow,ut=function(e){var t="rgb",a=X("#ccc"),n=0,o=[0,1],i=[],r=[0,0],s=!1,l=[],u=!1,d=0,v=1,w=!1,y={},g=!0,$=1,x=function(h){if((h=h||["#fff","#000"])&&_e(h)==="string"&&X.brewer&&X.brewer[h.toLowerCase()]&&(h=X.brewer[h.toLowerCase()]),_e(h)==="array"){h.length===1&&(h=[h[0],h[0]]),h=h.slice(0);for(var M=0;M<h.length;M++)h[M]=X(h[M]);i.length=0;for(var D=0;D<h.length;D++)i.push(D/(h.length-1))}return H(),l=h},O=function(h){return h},P=function(h){return h},j=function(h,M){var D,F;if(M==null&&(M=!1),isNaN(h)||h===null)return a;if(M)F=h;else if(s&&s.length>2){var Q=function(T){if(s!=null){for(var L=s.length-1,U=0;U<L&&T>=s[U];)U++;return U-1}return 0}(h);F=Q/(s.length-2)}else F=v!==d?(h-d)/(v-d):1;F=P(F),M||(F=O(F)),$!==1&&(F=Jo(F,$)),F=r[0]+F*(1-r[0]-r[1]),F=Math.min(1,Math.max(0,F));var G=Math.floor(1e4*F);if(g&&y[G])D=y[G];else{if(_e(l)==="array")for(var B=0;B<i.length;B++){var I=i[B];if(F<=I){D=l[B];break}if(F>=I&&B===i.length-1){D=l[B];break}if(F>I&&F<i[B+1]){F=(F-I)/(i[B+1]-I),D=X.interpolate(l[B],l[B+1],F,t);break}}else _e(l)==="function"&&(D=l(F));g&&(y[G]=D)}return D},H=function(){return y={}};x(e);var N=function(h){var M=X(j(h));return u&&M[u]?M[u]():M};return N.classes=function(h){if(h!=null){if(_e(h)==="array")s=h,o=[h[0],h[h.length-1]];else{var M=X.analyze(o);s=h===0?[M.min,M.max]:X.limits(M,"e",h)}return N}return s},N.domain=function(h){if(!arguments.length)return o;d=h[0],v=h[h.length-1],i=[];var M=l.length;if(h.length===M&&d!==v)for(var D=0,F=Array.from(h);D<F.length;D+=1){var Q=F[D];i.push((Q-d)/(v-d))}else{for(var G=0;G<M;G++)i.push(G/(M-1));if(h.length>2){var B=h.map(function(T,L){return L/(h.length-1)}),I=h.map(function(T){return(T-d)/(v-d)});I.every(function(T,L){return B[L]===T})||(P=function(T){if(T<=0||T>=1)return T;for(var L=0;T>=I[L+1];)L++;var U=(T-I[L])/(I[L+1]-I[L]);return B[L]+U*(B[L+1]-B[L])})}}return o=[d,v],N},N.mode=function(h){return arguments.length?(t=h,H(),N):t},N.range=function(h,M){return x(h),N},N.out=function(h){return u=h,N},N.spread=function(h){return arguments.length?(n=h,N):n},N.correctLightness=function(h){return h==null&&(h=!0),w=h,H(),O=w?function(M){for(var D=j(0,!0).lab()[0],F=j(1,!0).lab()[0],Q=D>F,G=j(M,!0).lab()[0],B=D+(F-D)*M,I=G-B,T=0,L=1,U=20;Math.abs(I)>.01&&U-- >0;)Q&&(I*=-1),I<0?(T=M,M+=.5*(L-M)):(L=M,M+=.5*(T-M)),G=j(M,!0).lab()[0],I=G-B;return M}:function(M){return M},N},N.padding=function(h){return h!=null?(_e(h)==="number"&&(h=[h,h]),r=h,N):r},N.colors=function(h,M){arguments.length<2&&(M="hex");var D=[];if(arguments.length===0)D=l.slice(0);else if(h===1)D=[N(.5)];else if(h>1){var F=o[0],Q=o[1]-F;D=Ko(0,h,!1).map(function(L){return N(F+L/(h-1)*Q)})}else{e=[];var G=[];if(s&&s.length>2)for(var B=1,I=s.length,T=1<=I;T?B<I:B>I;T?B++:B--)G.push(.5*(s[B-1]+s[B]));else G=o;D=G.map(function(L){return N(L)})}return X[M]&&(D=D.map(function(L){return L[M]()})),D},N.cache=function(h){return h!=null?(g=h,N):g},N.gamma=function(h){return h!=null?($=h,N):$},N.nodata=function(h){return h!=null?(a=X(h),N):a},N};function Ko(e,t,a){for(var n=[],o=e<t,i=a?o?t+1:t-1:t,r=e;o?r<i:r>i;o?r++:r--)n.push(r);return n}var $e=E,Zo=ut,ft=V,ee=function(e,t,a){if(!ee[a])throw new Error("unknown blend mode "+a);return ee[a](e,t)},oe=function(e){return function(t,a){var n=ft(a).rgb(),o=ft(t).rgb();return ft.rgb(e(n,o))}},ie=function(e){return function(t,a){var n=[];return n[0]=e(t[0],a[0]),n[1]=e(t[1],a[1]),n[2]=e(t[2],a[2]),n}};ee.normal=oe(ie(function(e){return e})),ee.multiply=oe(ie(function(e,t){return e*t/255})),ee.screen=oe(ie(function(e,t){return 255*(1-(1-e/255)*(1-t/255))})),ee.overlay=oe(ie(function(e,t){return t<128?2*e*t/255:255*(1-2*(1-e/255)*(1-t/255))})),ee.darken=oe(ie(function(e,t){return e>t?t:e})),ee.lighten=oe(ie(function(e,t){return e>t?e:t})),ee.dodge=oe(ie(function(e,t){return e===255||(e=t/255*255/(1-e/255))>255?255:e})),ee.burn=oe(ie(function(e,t){return 255*(1-(1-t/255)/(e/255))}));for(var Xo=ee,dt=f.type,ei=f.clip_rgb,ti=f.TWOPI,ai=Math.pow,ni=Math.sin,ri=Math.cos,Ta=V,oi=E,ii=Math.floor,si=Math.random,ht=k,qa=Math.log,li=Math.pow,ci=Math.floor,ui=Math.abs,Ga=function(e,t){t===void 0&&(t=null);var a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return ht(e)==="object"&&(e=Object.values(e)),e.forEach(function(n){t&&ht(n)==="object"&&(n=n[t]),n==null||isNaN(n)||(a.values.push(n),a.sum+=n,n<a.min&&(a.min=n),n>a.max&&(a.max=n),a.count+=1)}),a.domain=[a.min,a.max],a.limits=function(n,o){return ja(a,n,o)},a},ja=function(e,t,a){t===void 0&&(t="equal"),a===void 0&&(a=7),ht(e)=="array"&&(e=Ga(e));var n=e.min,o=e.max,i=e.values.sort(function(bt,vt){return bt-vt});if(a===1)return[n,o];var r=[];if(t.substr(0,1)==="c"&&(r.push(n),r.push(o)),t.substr(0,1)==="e"){r.push(n);for(var s=1;s<a;s++)r.push(n+s/a*(o-n));r.push(o)}else if(t.substr(0,1)==="l"){if(n<=0)throw new Error("Logarithmic scales are only possible for values > 0");var l=Math.LOG10E*qa(n),u=Math.LOG10E*qa(o);r.push(n);for(var d=1;d<a;d++)r.push(li(10,l+d/a*(u-l)));r.push(o)}else if(t.substr(0,1)==="q"){r.push(n);for(var v=1;v<a;v++){var w=(i.length-1)*v/a,y=ci(w);if(y===w)r.push(i[y]);else{var g=w-y;r.push(i[y]*(1-g)+i[y+1]*g)}}r.push(o)}else if(t.substr(0,1)==="k"){var $,x=i.length,O=new Array(x),P=new Array(a),j=!0,H=0,N=null;(N=[]).push(n);for(var h=1;h<a;h++)N.push(n+h/a*(o-n));for(N.push(o);j;){for(var M=0;M<a;M++)P[M]=0;for(var D=0;D<x;D++)for(var F=i[D],Q=Number.MAX_VALUE,G=void 0,B=0;B<a;B++){var I=ui(N[B]-F);I<Q&&(Q=I,G=B),P[G]++,O[D]=G}for(var T=new Array(a),L=0;L<a;L++)T[L]=null;for(var U=0;U<x;U++)T[$=O[U]]===null?T[$]=i[U]:T[$]+=i[U];for(var le=0;le<a;le++)T[le]*=1/P[le];j=!1;for(var ce=0;ce<a;ce++)if(T[ce]!==N[ce]){j=!0;break}N=T,++H>200&&(j=!1)}for(var ue={},Me=0;Me<a;Me++)ue[Me]=[];for(var we=0;we<x;we++)ue[$=O[we]].push(i[we]);for(var te=[],Ee=0;Ee<a;Ee++)te.push(ue[Ee][0]),te.push(ue[Ee][ue[Ee].length-1]);te=te.sort(function(bt,vt){return bt-vt}),r.push(te[0]);for(var gt=1;gt<te.length;gt+=2){var mt=te[gt];isNaN(mt)||r.indexOf(mt)!==-1||r.push(mt)}}return r},Va={analyze:Ga,limits:ja},Wa=E,Ha=E,ne=Math.sqrt,W=Math.pow,fi=Math.min,di=Math.max,za=Math.atan2,Qa=Math.abs,Be=Math.cos,Ua=Math.sin,hi=Math.exp,Ya=Math.PI,Ja=E,pi=E,Ka=V,Za=ut,gi={cool:function(){return Za([Ka.hsl(180,1,.9),Ka.hsl(250,.7,.4)])},hot:function(){return Za(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Re={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},pt=0,Xa=Object.keys(Re);pt<Xa.length;pt+=1){var en=Xa[pt];Re[en.toLowerCase()]=Re[en]}var mi=Re,z=V;return z.average=function(e,t,a){t===void 0&&(t="lrgb"),a===void 0&&(a=null);var n=e.length;a||(a=Array.from(new Array(n)).map(function(){return 1}));var o=n/a.reduce(function($,x){return $+x});if(a.forEach(function($,x){a[x]*=o}),e=e.map(function($){return new it($)}),t==="lrgb")return Yo(e,a);for(var i=e.shift(),r=i.get(t),s=[],l=0,u=0,d=0;d<r.length;d++)if(r[d]=(r[d]||0)*a[0],s.push(isNaN(r[d])?0:a[0]),t.charAt(d)==="h"&&!isNaN(r[d])){var v=r[d]/180*ct;l+=Ra(v)*a[0],u+=La(v)*a[0]}var w=i.alpha()*a[0];e.forEach(function($,x){var O=$.get(t);w+=$.alpha()*a[x+1];for(var P=0;P<r.length;P++)if(!isNaN(O[P]))if(s[P]+=a[x+1],t.charAt(P)==="h"){var j=O[P]/180*ct;l+=Ra(j)*a[x+1],u+=La(j)*a[x+1]}else r[P]+=O[P]*a[x+1]});for(var y=0;y<r.length;y++)if(t.charAt(y)==="h"){for(var g=Uo(u/s[y],l/s[y])/ct*180;g<0;)g+=360;for(;g>=360;)g-=360;r[y]=g}else r[y]=r[y]/s[y];return w/=n,new it(r,t).alpha(w>.99999?1:w,!0)},z.bezier=function(e){var t=function(a){var n,o,i,r,s,l,u;if((a=a.map(function(g){return new $e(g)})).length===2)n=a.map(function(g){return g.lab()}),s=n[0],l=n[1],r=function(g){var $=[0,1,2].map(function(x){return s[x]+g*(l[x]-s[x])});return new $e($,"lab")};else if(a.length===3)o=a.map(function(g){return g.lab()}),s=o[0],l=o[1],u=o[2],r=function(g){var $=[0,1,2].map(function(x){return(1-g)*(1-g)*s[x]+2*(1-g)*g*l[x]+g*g*u[x]});return new $e($,"lab")};else if(a.length===4){var d;i=a.map(function(g){return g.lab()}),s=i[0],l=i[1],u=i[2],d=i[3],r=function(g){var $=[0,1,2].map(function(x){return(1-g)*(1-g)*(1-g)*s[x]+3*(1-g)*(1-g)*g*l[x]+3*(1-g)*g*g*u[x]+g*g*g*d[x]});return new $e($,"lab")}}else{if(!(a.length>=5))throw new RangeError("No point in running bezier with only one color.");var v,w,y;v=a.map(function(g){return g.lab()}),y=a.length-1,w=function(g){for(var $=[1,1],x=1;x<g;x++){for(var O=[1],P=1;P<=$.length;P++)O[P]=($[P]||0)+$[P-1];$=O}return $}(y),r=function(g){var $=1-g,x=[0,1,2].map(function(O){return v.reduce(function(P,j,H){return P+w[H]*Math.pow($,y-H)*Math.pow(g,H)*j[O]},0)});return new $e(x,"lab")}}return r}(e);return t.scale=function(){return Zo(t)},t},z.blend=Xo,z.cubehelix=function(e,t,a,n,o){e===void 0&&(e=300),t===void 0&&(t=-1.5),a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=[0,1]);var i,r=0;dt(o)==="array"?i=o[1]-o[0]:(i=0,o=[o,o]);var s=function(l){var u=ti*((e+120)/360+t*l),d=ai(o[0]+i*l,n),v=(r!==0?a[0]+l*r:a)*d*(1-d)/2,w=ri(u),y=ni(u);return Ta(ei([255*(d+v*(-.14861*w+1.78277*y)),255*(d+v*(-.29227*w-.90649*y)),255*(d+v*(1.97294*w)),1]))};return s.start=function(l){return l==null?e:(e=l,s)},s.rotations=function(l){return l==null?t:(t=l,s)},s.gamma=function(l){return l==null?n:(n=l,s)},s.hue=function(l){return l==null?a:(dt(a=l)==="array"?(r=a[1]-a[0])===0&&(a=a[1]):r=0,s)},s.lightness=function(l){return l==null?o:(dt(l)==="array"?(o=l,i=l[1]-l[0]):(o=[l,l],i=0),s)},s.scale=function(){return Ta.scale(s)},s.hue(a),s},z.mix=z.interpolate=Da,z.random=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef".charAt(ii(16*si()));return new oi(e,"hex")},z.scale=ut,z.analyze=Va.analyze,z.contrast=function(e,t){e=new Wa(e),t=new Wa(t);var a=e.luminance(),n=t.luminance();return a>n?(a+.05)/(n+.05):(n+.05)/(a+.05)},z.deltaE=function(e,t,a,n,o){a===void 0&&(a=1),n===void 0&&(n=1),o===void 0&&(o=1);var i=function(te){return 360*te/(2*Ya)},r=function(te){return 2*Ya*te/360};e=new Ha(e),t=new Ha(t);var s=Array.from(e.lab()),l=s[0],u=s[1],d=s[2],v=Array.from(t.lab()),w=v[0],y=v[1],g=v[2],$=(l+w)/2,x=(ne(W(u,2)+W(d,2))+ne(W(y,2)+W(g,2)))/2,O=.5*(1-ne(W(x,7)/(W(x,7)+W(25,7)))),P=u*(1+O),j=y*(1+O),H=ne(W(P,2)+W(d,2)),N=ne(W(j,2)+W(g,2)),h=(H+N)/2,M=i(za(d,P)),D=i(za(g,j)),F=M>=0?M:M+360,Q=D>=0?D:D+360,G=Qa(F-Q)>180?(F+Q+360)/2:(F+Q)/2,B=1-.17*Be(r(G-30))+.24*Be(r(2*G))+.32*Be(r(3*G+6))-.2*Be(r(4*G-63)),I=Q-F;I=Qa(I)<=180?I:Q<=F?I+360:I-360,I=2*ne(H*N)*Ua(r(I)/2);var T=w-l,L=N-H,U=1+.015*W($-50,2)/ne(20+W($-50,2)),le=1+.045*h,ce=1+.015*h*B,ue=30*hi(-W((G-275)/25,2)),Me=-(2*ne(W(h,7)/(W(h,7)+W(25,7))))*Ua(2*r(ue)),we=ne(W(T/(a*U),2)+W(L/(n*le),2)+W(I/(o*ce),2)+Me*(L/(n*le))*(I/(o*ce)));return di(0,fi(100,we))},z.distance=function(e,t,a){a===void 0&&(a="lab"),e=new Ja(e),t=new Ja(t);var n=e.get(a),o=t.get(a),i=0;for(var r in n){var s=(n[r]||0)-(o[r]||0);i+=s*s}return Math.sqrt(i)},z.limits=Va.limits,z.valid=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];try{return new(Function.prototype.bind.apply(pi,[null].concat(e))),!0}catch{return!1}},z.scales=gi,z.colors=ha,z.brewer=mi,z})});var yt=[{key:"black hot",name:"Black hot",steps:[{color:"#F5F5F5",value:0},{color:"#242124",value:1}],type:"relative"},{device_class:"carbon_dioxide",documentation:{text:`<p>CO\u2082 levels reflect the amount of fresh air in a space. High levels
indicate insufficient ventilation. The specific effects of higher
concentrations of CO\u2082 are highly individual, but studies have shown
that levels over 1000 ppm cause cognitive impairment in many
individuals.</p>
<p>Levels over 2000 ppm have been linked to health effects in some
studies. There is no conclusive sum of evidence.</p>
<p>This scale caps at 3000 ppm, as a maximum level that'd signify
fairly bad air. Levels above 5000 ppm are considered dangerous
in workplace standards (f.x OSHA in the US) and are indicative
of greatly insufficient ventilation overall.</p>`},key:"carbon dioxide",name:"CO\u2082, indoor exposure",steps:[{color:"#6d9b17",value:520},{color:"#FFBF00",value:1e3},{color:"#cf0000",value:1400},{color:"#5b0f8c",value:3e3}],type:"absolute"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bugn",name:"ColorBrewer 5-class BuGn",steps:[{color:"#edf8fb",value:0},{color:"#b2e2e2",value:.25},{color:"#66c2a4",value:.5},{color:"#2ca25f",value:.75},{color:"#006d2c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl bupu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#edf8fb",value:0},{color:"#b3cde3",value:.25},{color:"#8c96c6",value:.5},{color:"#8856a7",value:.75},{color:"#810f7c",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl rdpu",name:"ColorBrewer 5-class BuPu",steps:[{color:"#feebe2",value:0},{color:"#fbb4b9",value:.25},{color:"#f768a1",value:.5},{color:"#c51b8a",value:.75},{color:"#7a0177",value:1}],type:"relative"},{documentation:{license:{name:"Apache License 2.0",url:"https://www.apache.org/licenses/LICENSE-2.0"},text:`<p>Colors by Cynthia Brewer, <a href="https://colorbrewer2.org" rel="noopener" target="_blank">colorbrewer2.org</a>.
ColorBrewer provides guidance when selecting colors for map visualisations, making them distinct. While it's not a <em>perfect</em> fit for a gradient scale, such as this one, the colors are picked out to be safe for color blindness and offer improved distinction between the various parts of the band.</p>`},key:"colorbrewer 5cl ylorbr",name:"ColorBrewer 5-class YlOrBr",steps:[{color:"#ffffd4",value:0},{color:"#fed98e",value:.25},{color:"#fe9929",value:.5},{color:"#d95f0e",value:.75},{color:"#993404",value:1}],type:"relative"},{device_class:"temperature",documentation:{text:`<p>Indoor temperatures related to human comfort levels. Amalgation
of multiple sources. As always with temperature, individual
factors such as generics, clothing and activity level have a big
impact.</p>`},key:"indoor temperature",name:"Indoor temperature",steps:[{color:"#0f3489",value:12},{color:"#595ea3",value:16},{color:"#7374b0",value:18},{color:"#F5F5F5",value:20},{color:"#F5F5F5",value:22},{color:"#ea755a",value:24},{color:"#cf0000",value:28}],type:"absolute",unit:"\xB0C"},{key:"iron red",name:"Iron red",steps:[{color:"#230382",value:0},{color:"#921C96",value:.1},{color:"#C93F55",value:.25},{color:"#DF6D2D",value:.4},{color:"#EFB03D",value:.6},{color:"#F9DE52",value:.75},{color:"#F5F5D4",value:1}],type:"relative"},{device_class:"nitrogen_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"nitrogen dioxide eaqi",name:"Nitrogen dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:40},{color:"#F0E641",legend:"Moderate",value:90},{color:"#FF5050",legend:"Poor",value:120},{color:"#960032",legend:"Very poor",value:230},{color:"#7D2181",legend:"Extremely poor",value:340}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"temperature",documentation:{text:`<p>Outdoor temperatures related to human comfort and risk levels.</p>
<p>Note that this works best when using apparent (or <a href="https://en.wikipedia.org/wiki/Wet-bulb_temperature" rel="noopener" target="_blank">wet bulb</a>)
temperature and taking wind chill into account, not just <a href="https://en.wikipedia.org/wiki/Dry-bulb_temperature" rel="noopener" target="_blank">dry bulb</a>
temperature, such as a like a thermometer reading.</p>
<p>Individual factors such as clothing, activity level, wind speed and
exposure to sun all play a part in how we perceive temperature.
See this is a rough guideline.</p>`},key:"outdoor temperature",name:"Outdoor temperature",steps:[{color:"#0f3489",legend:"Severe risk of frostbite",value:-30},{color:"#595ea3",legend:"Risk of frostbite",value:0},{color:"#7374b0",legend:"Risk of hypothermia",value:10},{color:"#7374b0",legend:"Chilling temperatures",value:15},{color:"#F5F5F5",value:22},{color:"#F5F5F5",value:27},{color:"#ea755a",legend:"Risk of heat cramps or exhaustion",value:32},{color:"#cf0000",legend:"Heat exhaustion more likely",value:40},{color:"#5b0f8c",legend:"Heat stroke risk",value:54}],type:"absolute",unit:"\xB0C"},{device_class:"temperature",documentation:{text:`<p>Temperature scale specifically designed for oceanic climates - regions characterized 
by mild temperatures with rare extremes throughout the year.</p>
<p>Found in areas such as Western Europe, the Pacific Northwest of North America, 
parts of Southern Chile, New Zealand, and other coastal regions under maritime influence.</p>`},key:"outdoor temperature oceanic",name:"Outdoor temperature (Oceanic Climate)",steps:[{color:"#112488",legend:"Exceptionally cold for oceanic climate",value:-10},{color:"#1846A1",legend:"Very cold for oceanic climate",value:-5},{color:"#1F67C0",legend:"Freezing",value:0},{color:"#4CA9D5",legend:"Cold",value:5},{color:"#81DB7D",legend:"Cool",value:10},{color:"#B5DA60",legend:"Mild",value:15},{color:"#E0DD4A",legend:"Pleasant",value:20},{color:"#F98F46",legend:"Warm",value:25},{color:"#F5392A",legend:"Very warm for oceanic climate",value:30},{color:"#BE31B1",legend:"Exceptionally hot for oceanic climate",value:35}],type:"absolute",unit:"\xB0C"},{device_class:"ozone",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"ozone eaqi",name:"Ozone (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:50},{color:"#F0E641",legend:"Moderate",value:100},{color:"#FF5050",legend:"Poor",value:130},{color:"#960032",legend:"Very poor",value:240},{color:"#7D2181",legend:"Extremely poor",value:380}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm10",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm10 eaqi",name:"PM10 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:20},{color:"#F0E641",legend:"Moderate",value:40},{color:"#FF5050",legend:"Poor",value:50},{color:"#960032",legend:"Very poor",value:100},{color:"#7D2181",legend:"Extremely poor",value:150}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on an aggregate of the World Health Organization
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
the heatmap.</p>`},key:"pm25",name:"PM2.5 (WHO aggregate)",steps:[{color:"#6d9b17",legend:"AQG level",value:5},{color:"#FFBF00",legend:"Interim target 2",value:25},{color:"#cf0000",value:50},{color:"#5b0f8c",legends:"Risk level",value:100}],type:"absolute",unit:"\xB5g/m\xB3"},{device_class:"pm25",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"pm25 eaqi",name:"PM2.5 (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:10},{color:"#F0E641",legend:"Moderate",value:20},{color:"#FF5050",legend:"Poor",value:25},{color:"#960032",legend:"Very poor",value:50},{color:"#7D2181",legend:"Extremely poor",value:75}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"stoplight",name:"Stoplight",steps:[{color:"#6d9b17",value:0},{color:"#fde74c",value:.5},{color:"#cf0000",value:1}],type:"relative"},{device_class:"sulphur_dioxide",documentation:{text:`<p>This scale is based on the European Environment Agency (EEA) Air Quality Index
as implemented in their <a href="https://airindex.eea.europa.eu" rel="noopener" target="_blank">official interactive map</a>
as of late 2024.</p>`},key:"sulphur dioxide eaqi",name:"Sulphur dioxide (European Air Quality Index)",steps:[{color:"#50F0E6",legend:"Good",value:0},{color:"#50CCAA",legend:"Fair",value:100},{color:"#F0E641",legend:"Moderate",value:200},{color:"#FF5050",legend:"Poor",value:350},{color:"#960032",legend:"Very poor",value:500},{color:"#7D2181",legend:"Extremely poor",value:750}],type:"absolute",unit:"\xB5g/m\xB3"},{key:"water",name:"Water",steps:[{color:"#3ea8ee00",value:0},{color:"#3ea8eeff",value:1}],type:"relative"},{key:"white hot",name:"White hot",steps:[{color:"#242124",value:0},{color:"#F5F5F5",value:1}],type:"relative"},{device_class:"temperature",documentation:{license:{name:"Creative Commons Attribution-ShareAlike License 3.0",url:"https://creativecommons.org/licenses/by-sa/3.0/"},text:`<p>Wikipedia's <a href="https://en.wikipedia.org/wiki/Module:Weather" rel="noopener" target="_blank">Weather</a> template temperature graph color scheme, cool2 version.
Slightly modified by setting the minimum to -60\xB0C, instead of -90\xB0C.</p>`},key:"wikipedia climate cool2",name:"Wikipedia climate, cool2",steps:[{color:"#0000A2",value:-60},{color:"#0000D7",value:-43},{color:"#6565FF",value:-24},{color:"#FCFCFF",value:4},{color:"#FF7F00",value:23},{color:"#FF2C00",value:35},{color:"#F60000",value:42},{color:"#000000",value:56}],type:"absolute",unit:"\xB0C"}];var fe={apparent_power:{},atmospheric_pressure:{},aqi:{},battery:{},carbon_dioxide:{default:"carbon dioxide"},carbon_monoxide:{},current:{},date:{},duration:{},energy:{},frequency:{},gas:{},humidity:{},illuminance:{},monetary:{},nitrogen_dioxide:{},nitrogen_monoxide:{},nitrous_oxide:{},ozone:{},pm1:{},pm10:{},pm25:{default:"pm25"},power_factor:{},power:{},pressure:{},reactive_power:{},signal_strength:{},sulphur_dioxide:{},temperature:{default:"outdoor temperature",unit_system:"temperature"},timestamp:{},volatile_organic_compounds:{},voltage:{}};var kt=$i(an()),Le={temperature:{"\xB0C":{"\xB0F":q=>parseInt(q*1.8+32)},"\xB0F":{"\xB0C":q=>parseInt((q-32)/1.8)}}},ke=class{constructor(){this.default_scale="iron red",this.scale_by_key={};for(let c of yt)this.scale_by_key[c.key]=c}get_scale(c,p="",m={}){if(c===void 0&&(c=this.default_scale),typeof c=="string")return this.generate_scale(this.scale_by_key[c],p,m);var b=this.generate_scale(c,p,m);return delete b.docs,b}generate_scale(c,p=void 0,m={}){let b=JSON.parse(JSON.stringify(c.steps)),_=[],k=[],A=c.unit,R=f=>f;if(c.unit&&p&&m){let f=fe[p].unit_system,S=m[f];f&&S&&c.unit!==S&&Le[f]&&Le[f][c.unit]&&Le[f][c.unit][S]&&(A=S,R=Le[f][c.unit][S])}for(let f of b)_.push(f.color),"value"in f&&(f.value=R(f.value),k.push(f.value));let C;return k.length>0&&k.length===_.length?C=kt.default.scale(_).domain(k):C=kt.default.scale(_),{gradient:C,type:c.type??"relative",name:c.name,key:c.key,steps:b,unit:A,docs:c.documentation,css:this.legend_css_by_gradient(C)}}legend_css_by_gradient(c){var p=[];for(let[m,b]of c.colors(21).entries())p.push(`${b} ${m*5}%`);return p.join(", ")}defaults_for(c){return c in fe&&"default"in fe[c]?fe[c].default:this.default_scale}get_by(c,p){var m=yt.filter(b=>b[c]===p);return m.map(b=>this.get_scale(b))}};var xt=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),ae=xt.prototype.html,Fi=xt.prototype.css,Fe=class extends xt{last_render_ts=0;scales=new ke;static get properties(){return{hass:{},config:{},grid:[],grid_status:void 0,meta:{},tooltipOpen:!1,selected_element_data:""}}render(){(!this.grid||!this.grid.length)&&(this.grid=[]);let c=this.config.resolution||60,m=24*(60/c),b=m,_=0;return this.grid.forEach(k=>{k.vals.forEach((A,R)=>{A&&Number(A)!==0&&(b=Math.floor(Math.min(b,R)/12)*12,_=Math.ceil(Math.max(_,R)/12)*12)})}),b===m&&(b=0,_=m-1),ae`
      <ha-card header="${this.meta.title}" id="card">
        <div class="card-content">
          <table>
            <thead>
              <tr
                class="hr${this.myhass.locale.time_format}"
                style="line-height: 1.5"
              >
                <th class="hm-row-title"></th>
                ${this.date_table_headers(b,_,c)}
              </tr>
            </thead>
            <tbody>
              ${this.grid.map((k,A)=>ae`<tr>
                    <td class="hm-row-title">${k.date}</td>
                    ${(()=>{let R=[];for(let C=b;C<=_;C++){let f=k.vals[C],S="hm-box",K=f;if(K===null&&(S+=" null"),this.meta.scale.type==="relative"){let re=this.meta.data.max-this.meta.data.min;K=(f-this.meta.data.min)/re,K<0&&(K=0),K>1&&(K=1)}let de=this.meta.scale.gradient(K);R.push(ae` <td
                          @click="${this.toggle_tooltip}"
                          class="${S}"
                          data-val="${f}"
                          data-row="${A}"
                          data-bin="${C}"
                          style="color: ${de}"
                        ></td>`)}return R})()}
                  </tr>`)}
            </tbody>
          </table>
          ${this.render_status()} ${this.render_legend()}
          ${this.render_tooltip(c)}
        </div>
      </ha-card>
    `}date_table_headers(c,p,m){let b=[];for(let _=c;_<=p;_++){let k=_*m,A=Math.floor(k/60),R=k%60;if(R==0){let C="";this.myhass.locale.time_format==="12"?C=new Date(1970,0,1,A,R).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):C=String(A),b.push(ae`<th>${C}</th>`)}else R%10==0?b.push(ae`<th>•</th>`):b.push(ae`<th></th>`)}return b}render_status(){if(this.grid_status)return ae`<h3>${this.grid_status}</h3>`}render_legend(){if(this.config.display.legend===!1)return;let c=this.legend_scale(this.meta.scale);return ae`
      <div class="legend-container">
        <div
          id="legend"
          style="background: linear-gradient(90deg, ${this.meta.scale.css})"
        ></div>
        <div class="tick-container">
          ${c.map(p=>ae`
              <div class="legend-tick" style="left: ${p[0]}%;">
                <div class="caption">${p[1]} ${this.meta.scale.unit}</div>
              </div>
              <span class="legend-shadow"
                >${p[1]} ${this.meta.scale.unit}</span
              >
            `)}
        </div>
      </div>
    `}render_tooltip(c){let p="";if(this.selected_element_data){let m=this.selected_element_data.row,b=parseInt(this.selected_element_data.bin),_=this.grid[m]?.date,k=b*c,A=Math.floor(k/60),R=k%60,C=new Date("2022-03-20 00:00:00");C.setHours(A,R);let f=k+c,S=Math.floor(f/60),K=f%60,de=new Date("2022-03-20 00:00:00");de.setHours(S,K);let re;this.selected_element_data.val===""?re=this.myhass.localize("ui.components.data-table.no-data"):re=`${+parseFloat(this.selected_element_data.val).toFixed(2)} ${this.meta.scale.unit||this.meta.unit_of_measurement}`;let Z=new Intl.DateTimeFormat("sv-SE",{hour:"numeric",minute:"numeric"});this.myhass.locale.time_format==="12"&&(Z=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",hour12:!0})),p=ae`
        <div class="meta">
          ${_} ${Z.format(C)} - ${Z.format(de)}
        </div>
        <div class="value">${re}</div>
      `}return ae`<div
      id="tooltip"
      class="${this.tooltipOpen?"active":"hidden"}"
    >
      ${p}
    </div>`}legend_scale(c){let p=[];if(c.type==="relative"){let m=this.meta.data.max-this.meta.data.min;for(let b=0;b<=5;b++)p.push([b*20,+Number(this.meta.data.min+m/5*b).toFixed(2)])}else{let m=c.steps[0].value,_=c.steps[c.steps.length-1].value-m;for(let k of c.steps)p.push([(k.value-m)/_*100,k.value])}return p}toggle_tooltip(c){let p=this.renderRoot.querySelector("#selected"),m=this.renderRoot.querySelector("#card"),b=this.renderRoot.querySelector("#tooltip"),_=c.target;if(p&&(p.removeAttribute("id"),p===c.target)){this.tooltipOpen=!1;return}this.tooltipOpen=!0,_.id="selected";let k=_.getBoundingClientRect(),A=m.getBoundingClientRect(),R=k.top-A.top,C=k.left-A.left;b.style.top=(R-50-k.height).toString()+"px",b.style.left=(C-k.width/2-70).toString()+"px",this.selected_element_data=_.dataset}interpolateValues(c,p){let m=60/p,b=[];for(let _=0;_<c.length;_++){let k=c[_]!==null?Number(c[_]):0,A=_<c.length-1&&c[_+1]!==null?Number(c[_+1]):k;for(let R=0;R<m;R++){let C=R/m,f=k+(A-k)*C;b.push(f)}}return b}set hass(c){if(Date.now()-this.last_render_ts<10*60*1e3)return;this.myhass=c,this.meta=this.populate_meta(c);let p=[this.config.entity];this.get_recorder(p,this.config.days),this.last_render_ts=Date.now()}get_recorder(c,p){let m=new Date;this.grid_status=void 0;let b=new Date(m-p*864e5);b.setHours(23,0,0),this.myhass.callWS({type:"recorder/statistics_during_period",statistic_ids:c,period:"5minute",units:{energy:"kWh",temperature:this.myhass.config.unit_system.temperature},start_time:b.toISOString(),types:["sum","mean"]}).then(_=>{for(let k of c){let A=_[k];if(A===void 0){this.grid=[],this.grid_status=this.myhass.localize("ui.components.data-table.no-data");continue}switch(this.meta.state_class){case"measurement":this.grid=this.calculate_measurement_values(A);break;case"total":case"total_increasing":this.grid=this.calculate_increasing_values(A);break;default:throw new Error(`Unknown state_class defined (${this.meta.state_class} for ${k}.`)}}(this.config.data.max===void 0||this.config.data.max==="auto")&&(this.meta.data.max=this.max_from(this.grid)),(this.config.data.min===void 0||this.config.data.min==="auto")&&(this.meta.data.min=this.min_from(this.grid))})}max_from(c){let p=[];for(let m of c)p=p.concat(m.vals);return Math.max(...p)}min_from(c){let p=[];for(let m of c)p=p.concat(m.vals);return Math.min(...p)}calculate_measurement_values(c){let p=this.config.resolution||60,m=[],b=Array(288).fill(null),_=null;for(let k of c){let A=new Date(k.start),R=A.getHours()*12+A.getMinutes()/5,C=A.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});if(C!==_&&_!==null){let f=b;m.push({date:_,nativeDate:A,vals:f}),b=Array(288).fill(null)}b[R]=k.mean,_=C}if(_!==null){let k=b;m.push({date:_,nativeDate:new Date,vals:k})}return m.reverse()}calculate_increasing_values(c){let p=this.config.resolution||60,m=[],b=null,_=Array(24).fill(0),k=null;for(let A of c){let R=new Date(A.start),C=R.getHours(),f=R.toLocaleDateString(this.meta.language,{month:"short",day:"2-digit"});if(f!==k&&b!==null){let S=_;p<60&&(S=this.interpolateValues(_,p)),m.push({date:k,nativeDate:R,vals:S}),_=Array(24).fill(0)}if(b!==null){let S=(A.sum-b).toFixed(2);_[C]=S}b=A.sum,k=f}if(k!==null){let A=_;p<60&&(A=this.interpolateValues(_,p)),m.push({date:k,nativeDate:new Date,vals:A})}return m.reverse()}populate_meta(c){let p=c.states[this.config.entity].attributes,m=p.device_class??this.config.device_class;return{unit_of_measurement:p.unit_of_measurement,state_class:p.state_class,device_class:m,language:c.selectedLanguage??c.language??"en",scale:this.scales.get_scale(this.config.scale??this.scales.defaults_for(m),m,this.myhass.config.unit_system),title:this.config.title??(this.config.title===null?void 0:p.friendly_name),data:{max:this.config.data.max,min:this.config.data.min}}}setConfig(c){if(!c.entity)throw new Error("You need to define an entity");if(c.days&&c.days<=0)throw new Error("`days` need to be 1 or higher");if(this.config={title:c.title,days:c.days??21,entity:c.entity,scale:c.scale,data:c.data??{},display:c.display??{},resolution:c.resolution||5},this.config.data.max!==void 0&&this.config.data.max!=="auto"&&typeof this.config.data.max!="number")throw new Error("`data.max` need to be either `auto` or a number");if(this.config.data.min!==void 0&&this.config.data.min!=="auto"&&typeof this.config.data.min!="number")throw new Error("`data.min` need to be either `auto` or a number");this.last_render_ts=0}getCardSize(){return this.config.days?1+Math.ceil(this.config.days/6):1}static styles=Fi`
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
      width: 83%;
      margin-left: auto;
      position: relative;
    }
    .tick-container {
      position: relative;
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
  `};customElements.define("heatmap-card",Fe);var $t=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),Y=$t.prototype.html,Ai=$t.prototype.css;function Ci(q){var c=[q];return c.raw=!0,Y(c)}var Te=class extends $t{scales=new ke;static get properties(){return{_config:{},active_tab:void 0,entity:void 0,device_class:void 0,scale:void 0}}set hass(c){this.myhass=c}async setConfig(c){this._config=c;var p=await loadCardHelpers();customElements.get("ha-entity-picker")||await(await p.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),this.entity=this.myhass.states[this._config.entity],this.device_class=(this.entity&&this.entity.attributes.device_class)??this._config.device_class,this.scale=this.scales.get_scale(this._config.scale),this.active_tab===void 0&&this._config.scale&&(this.active_tab=this.tab_from_scale(this._config.scale))}tab_from_scale(c){return typeof c=="object"?2:this.scales.get_scale(c).type==="relative"?1:0}render_device_class_picker(){let c=Object.keys(fe).map(function(p){return{label:p,value:p}});if(this.entity&&!this.entity.attributes.device_class)return Y`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${c}
                    .value=${this._config.device_class??""}
                    .allowCustomValue=${!1}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `}render_scale_docs(c){if(this.scale!==void 0){var p;if(!(this.scale.docs===void 0||this.scale.type!==c))return this.scale.docs?.license&&(p=Y`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `),Y`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${Ci(this.scale.docs?.text)}
                ${p}
            </div>
        `}}render_tab_bar(){return this.device_class?Y`
            <mwc-tab-bar
                @MDCTabBar:activated=${p=>{for(let m of this.renderRoot.querySelectorAll(".scale-picker-content"))m.style.display="none";this.renderRoot.querySelector(`#tab-idx-${p.detail.index}`).style.display="block"}}
                .activeIndex=${this.active_tab??0}
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
        `:void 0}render_absolute_scale_picker(){var c;let p=this.scales.get_by("device_class",this.device_class);return typeof this._config.scale=="object"?c=Y`Using a custom scale, picker disabled`:p.length===0?c=Y`There are no predefined scales for this device class`:c=Y`
                ${p.map(m=>Y`
                    <ha-formfield .label=${m.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${m.key===this._config.scale}
                            .value=${m.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `,Y`
            <div>
                <h3>Scales for this device class</h3>
                ${c}
            </div>
        `}render_relative_scale_picker(){var c,p=this.scales.get_by("type","relative").map(function(b){return{label:b.name,value:b.key,css:b.css}});if(typeof this._config.scale=="object")c=Y`Using a custom scale, picker disabled`;else{var m=b=>Y`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${b.css});"></div> ${b.label}
            </ha-list-item>`;c=Y`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${p}
                    .value=${this._config.scale}
                    .renderer=${m}
                    .allowCustomValue=${!0}
                > </ha-combo-box>
            `}if(this.entity&&this.device_class)return Y`
                <h3>Color scales</h3>
                    ${c}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min??"auto"}
                        .placeholder=0
                        .disabled=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min==="auto"||this._config.data?.min===void 0}
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max??"auto"}
                        .disabled=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max==="auto"||this._config.data?.max===void 0}
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `}render_entity_warning(){if(this.entity!==void 0&&(this.entity.attributes?.state_class===void 0||["measurement","total","total_increasing"].includes(this.entity.attributes?.state_class)===!1))return Y`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class??"undefined"}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `}render(){if(!(this.myhass===void 0||this._config===void 0))return Y`
        <div class="root card-config">
            <ha-entity-picker
                .required=${!0}
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
                .helperPersistent=${!0}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${this.entity&&this.entity.attributes.friendly_name||""}
                .value=${this._config.title||""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
        </div>`}update_field(c){c.stopPropagation();let p=c.target.value;if(this.disabled||p===void 0||p===this.value)return;let m=new Event("value-changed",{bubbles:!0});"checked"in c.target?m.detail={value:c.target.checked===!0?p:0}:isNaN(parseFloat(p))?m.detail={value:p}:m.detail={value:parseFloat(p)},c.target.dispatchEvent(m)}createRenderRoot(){let c=super.createRenderRoot();return c.addEventListener("value-changed",p=>{p.stopPropagation();let m=p.target.configValue,b=p.detail.value;var _=JSON.parse(JSON.stringify(this._config));if(m==="device_class"&&(_.scale=this.scales.defaults_for(b),this.active_tab=this.tab_from_scale(_.scale)),m==="entity"){let C=this.myhass.states[b],f=C&&C.attributes.device_class;f&&(_.scale=this.scales.defaults_for(f),this.active_tab=this.tab_from_scale(_.scale),delete _.device_class)}var k=_,A=m;if(m.indexOf(".")){for(let C of m.split(".").slice(0,-1))k[C]===void 0&&(k[C]={}),k=k[C];A=m.split(".").slice(-1)}k[A]=b;let R=new Event("config-changed");R.detail={config:_},this.dispatchEvent(R)}),c}static styles=Ai`
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
    `};customElements.define("heatmap-card",Fe);customElements.define("heatmap-card-editor",Te);window.customCards=window.customCards||[];window.customCards.push({type:"heatmap-card",name:"Heatmap card",preview:!0,description:"Heat maps of entities or energy data"});})();
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
