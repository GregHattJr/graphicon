!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.GIcon=e():t.GIcon=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){"use strict";var o=n(3),r=n.n(o),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a=class{constructor(t,e){var n;this.name=t,this.contents="string"==typeof e&&e?(n=e,(new DOMParser).parseFromString(n,"image/svg+xml").firstChild.innerHTML):"",this.attrs=s({},r.a,{class:`g-icon-svg gi-${t}`})}toSvg(t={}){const e=s({},this.attrs,t,{class:function(...t){return Array.from(new Set(t.join(" ").split(" ").filter(t=>!!t))).join(" ")}(this.attrs.class,t.class)});return`<svg ${n=e,Object.entries(n).map(([t,e])=>`${t}="${e}"`).join(" ")}>${this.contents}</svg>`;var n}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(0);n.d(e,"Icon",function(){return r.a});o.a.install=function(t,e){e&&o.a.setIcons(e),t.component("g-icon",o.a),t.prototype.$setIcons=o.a.setIcons,t.prototype.$icons=o.a.icons},"undefined"!=typeof window&&(window.GIcon=o.a),e.default=o.a},function(t,e,n){"use strict";var o=n(0);let r={};e.a={props:{name:{type:String,default:""},rawSvg:{type:String,default:""},options:{type:Object,default:()=>({})}},computed:{icon(){return this.rawSvg?this.rawSvg:this.name in r?r[this.name].toSvg(this.options):""}},template:'<i class="g-icon" v-html="icon"></i>',get icons(){return r},setIcons(t={}){r=Object.entries(t).map(([t,e])=>new o.a(t,e)).reduce((t,e)=>(t[e.name]=e,t),{})},replaceIcon(t,e){r[t]&&(r[t]=new o.a(t,e))},newIcon:(...t)=>new o.a(...t)}},function(t,e){t.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}}])});