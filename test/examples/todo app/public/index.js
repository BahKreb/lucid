(()=>{"use strict";var e,t,r,n,o,i,a,d={115:(e,t,r)=>{r(967);const n=new class{constructor(){this.components={},this.id=0,this.work=[]}state(e,t){const r=this.currentComponent;r.__hooks[r.__hookId]=r.__hooks[r.__hookId]||e;const n=r.__hookId;return[r.__hooks[r.__hookId++],(e,o)=>{const i=r.__hooks[n];return r.__hooks[n]=e,o||t&&t(i,e)||r.update(),e}]}effect(e,t){var r;const n=this.currentComponent;if(!n.__dom)return void this.work.push({cb:()=>{this.effect(e,t)},hookId:n.__hookId++});const o=n.__hooks[n.__hookId],i=!(null==o?void 0:o.deps)||!t.every(((e,t)=>e===o.deps[t]));t&&!i||("function"==typeof(null===(r=n.__hooks[n.__hookId])||void 0===r?void 0:r.cleanup)&&n.__hooks[n.__hookId].cleanup(),n.__hooks[n.__hookId]={},n.__hooks[n.__hookId].deps=t,n.__hooks[n.__hookId].cleanup=e()),++n.__hookId}ref(){return this.state({dom:void 0})[0]}createElement(e,t,...r){return{tag:e,attrs:t,children:r}}render(e,t){if("function"==typeof e.tag){const r={attrs:e.attrs,update:()=>{if("function"==typeof e.tag){const t=this.currentComponent;this.currentComponent=r,r.__hookId=0;const n=e.tag(r);this._update(r.__dom,n,r.__element,r),r.__element=n,this.currentComponent=t}},__dom:void 0,__element:void 0,__children:[],__hooks:[],__hookId:0},n=this.currentComponent;this.currentComponent=r;const o=this.id++;return this.components[o]=r,this._render(t,r.__element=e.tag(r),r,{svg:!1,parent:!0}),this.processWork(),this.currentComponent=n,o}}_render(e,t,r,n){if(Array.isArray(t)){for(let o=0;o<t.length;++o)"function"==typeof t[o].tag?r.__children.push(this.render(t[o],e)):this._render(e,t[o],r,n);return}let o;"svg"===t.tag||n.svg?(o=document.createElementNS("http://www.w3.org/2000/svg",t.tag),n.svg=!0):o=document.createElement(t.tag),n.parent&&(r.__dom=o,n.parent=!1);for(let e in t.attrs)e.startsWith("on")?o.addEventListener(e.substring(2).toLowerCase(),t.attrs[e],{capture:!0}):this.setDomAttribute(o,e,t.attrs[e],void 0);for(let e=0;e<t.children.length;++e)"function"==typeof t.children[e].tag?r.__children.push(this.render(t.children[e],o)):"object"==typeof t.children[e]?this._render(o,t.children[e],r,n):o.appendChild(document.createTextNode(t.children[e]));e.appendChild(o)}_update(e,t,r,n){var o,i;if(e.tagName.toLowerCase()!==t.tag){const r=e.parentNode;null==r||r.removeChild(e),e=document.createElement(t.tag),null==r||r.appendChild(e)}const a={};for(let n in null==r?void 0:r.attrs)n.startsWith("on")?(r.attrs&&r.attrs[n]&&e.removeEventListener(n.substring(2).toLowerCase(),r.attrs[n],{capture:!0}),t.attrs&&t.attrs[n]&&(a[n]=!0,e.addEventListener(n.substring(2).toLowerCase(),t.attrs[n],{capture:!0}))):(null==t?void 0:t.attrs[n])?(a[n]=!0,this.setDomAttribute(e,n,t.attrs[n],r.attrs[n])):this.removeDomAttribute(e,n);for(let r in null==t?void 0:t.attrs)a[r]||(r.startsWith("on")?t.attrs&&t.attrs[r]&&e.addEventListener(r.substring(2).toLowerCase(),t.attrs[r],{capture:!0}):this.setDomAttribute(e,r,t.attrs[r],void 0));for(let a=0;a<t.children.length||a<e.childNodes.length;++a)if(void 0!==t.children[a])if("function"==typeof t.children[a].tag){const r=document.createElement("div");n.__children.push(this.render(t.children[a],r)),void 0===e.childNodes[a]?e.appendChild(r.firstChild):e.replaceChild(r.firstChild,e.childNodes[a])}else{if(Array.isArray(t.children[a])){const d=r.children[a],c=t.children[a];let s={};for(let t=0;t<d.length;++t)s[d[t].attrs.key]=e.childNodes[t];for(let t=0,r=0;t<d.length||r<c.length;)if((null===(o=d[t])||void 0===o?void 0:o.attrs.key)===(null===(i=c[r])||void 0===i?void 0:i.attrs.key)){if("function"==typeof c[r].tag)this.components[n.__children[t]].attrs=c[r].attrs,this.components[n.__children[t]].update();else{let e=s[d[t].attrs.key];this._update(e,c[r],d[t],n)}++t,++r}else if(d[t]&&c[r]){let o=s[d[t].attrs.key];const i=document.createElement("div");"function"==typeof c[r].tag?n.__children.push(this.render(c[r],i)):this._render(i,c[r],n,{svg:!1,parent:!1}),e.insertBefore(i.firstChild,o),++r}else if(!d[t]&&c[r]){const t=document.createElement("div");"function"==typeof c[r].tag?n.__children.push(this.render(c[r],t)):this._render(t,c[r],n,{svg:!1,parent:!1}),e.appendChild(t.firstChild),++r}else d[t]&&!c[r]?(e.removeChild(s[d[t].attrs.key]),++t,++r):(++t,++r);break}"object"==typeof t.children[a]?(void 0===e.childNodes[a]?e.appendChild(document.createElement(t.children[a].tag)):e.childNodes[a].nodeType!==document.ELEMENT_NODE&&e.insertBefore(document.createElement(t.children[a].tag),e.childNodes[a]),this._update(e.childNodes[a],t.children[a],r.children[a],n)):void 0===e.childNodes[a]?e.appendChild(document.createTextNode(t.children[a])):e.childNodes[a].nodeType!==document.TEXT_NODE?e.insertBefore(document.createTextNode(t.children[a]),e.childNodes[a]):e.childNodes[a].nodeValue!==t.children[a]&&(e.childNodes[a].nodeValue=t.children[a])}else e.removeChild(e.childNodes[a--]);this.removeChildren(n,!1)}removeChildren(e,t){for(let r=0;r<e.__children.length;++r)!t&&this.components[e.__children[r]].__dom.parentNode||(this.removeChildren(this.components[e.__children[r]],!0),delete this.components[e.__children[r]],e.__children.splice(r--,1))}setDomAttribute(e,t,r,n){switch(t){case"key":case"":break;case"ref":r.dom=e;break;case"style":for(const t in r)e.style.setProperty(t,r[t]);break;default:r!==n&&e.setAttribute(t,r)}}removeDomAttribute(e,t){switch(t){case"key":case"ref":case"":case"style":break;default:e.removeAttribute(t)}}processWork(){for(let e=0;e<this.work.length;++e)this.currentComponent.__hookId=this.work[e].hookId,this.work[e].cb();this.work=[]}};function o(){localStorage.setItem("todos",JSON.stringify(a))}let i,a=[],d=0;function c(e){var t=n.ref();return n.createElement("div",null,n.createElement("input",{ref:t,maxLength:"29",type:"text",class:"input",placeholder:"Todo..."}),n.createElement("button",{class:"button",onClick:function(){var e;""!==t.dom.value&&(e=t.dom.value,a.push({id:d++,content:e,done:!1}),o(),i.update(),t.dom.value="")}},"Add todo"))}function s(e){var t=e.attrs.todo;return n.createElement("div",{class:"todo"},n.createElement(l,{onclick:function(){!function(e){for(let t=0;t<a.length;++t)if(a[t].id===e.id)return a[t].done=!a[t].done,o(),void i.update()}(t)}}),n.createElement(u,{onclick:function(){!function(e){for(let t=0;t<a.length;++t)if(a[t].id===e.id)return a.splice(t,1),o(),void i.update()}(t)}}),n.createElement("span",{class:"text "+(t.done?"done":"")},t.content))}function l(e){var t=e.attrs.onclick;return n.createElement("svg",{class:"icon",onclick:t,width:"32",height:"32",viewBox:"0 0 24 24","stroke-width":"1",stroke:"#000000",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("circle",{cx:"12",cy:"12",r:"9"}),n.createElement("path",{d:"M9 12l2 2l4 -4"}))}function u(e){var t=e.attrs.onclick;return n.createElement("svg",{class:"icon",onclick:t,width:"32",height:"32",viewBox:"0 0 24 24","stroke-width":"1",stroke:"#000000",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},n.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElement("circle",{cx:"12",cy:"12",r:"9"}),n.createElement("path",{d:"M10 10l4 4m0 -4l-4 4"}))}function p(e){return function(e){i=e}(e),n.createElement("div",null,a.map((function(e){return n.createElement(s,{key:e.id,todo:e})})))}!function(){a=JSON.parse(localStorage.getItem("todos")),a||(a=[{id:0,content:"Write report about Soda",done:!0},{id:1,content:"Study",done:!1}],o());for(let e=0;e<a.length;++e)d<a[e].id&&(d=a[e].id+1)}(),n.render(n.createElement((function(e){return n.createElement("div",{id:"app"},n.createElement(c,null),n.createElement(p,null))}),null),document.body)},137:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,"body{margin:25px;padding:0;outline:0;display:flex;justify-content:center}#app{max-width:400px}.input{overflow-wrap:break-word;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif;resize:none;outline:0;border:0;padding:0;border-bottom:1px solid #000000;border-radius:0;padding-bottom:1px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:18px}.button{padding:5px 20px;background-color:#000;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif;font-size:15px;border-radius:10px;border:0;cursor:pointer}.todo{display:flex;align-items:center}.todo .text{font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif;font-size:18px;margin-left:5px}.todo .icon{cursor:pointer}.todo .done{text-decoration:line-through}\n",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},967:(e,t,r)=>{var n=r(379),o=r.n(n),i=r(795),a=r.n(i),d=r(569),c=r.n(d),s=r(565),l=r.n(s),u=r(216),p=r.n(u),h=r(589),f=r.n(h),m=r(137),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p();var y=o()(m.default,v);if(!m.default.locals||e.hot.invalidate){var _=!m.default.locals,g=_?m:m.default.locals;e.hot.accept(137,(t=>{m=r(137),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(g,_?m:m.default.locals,_)?(g=_?m:m.default.locals,y(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()})),m.default&&m.default.locals&&m.default.locals},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],s=n.base?c[0]+n.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=r(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,n);n.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=r(i[a]);t[d].references--}for(var c=n(e,o),s=0;s<i.length;s++){var l=r(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},c={};function s(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=c[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:d[e],require:s};s.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}s.m=d,s.c=c,s.i=[],s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>{},s.hmrF=()=>"main."+s.h()+".hot-update.json",s.h=()=>"8e5b1ccbb1b4eff8b178",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="todo-app:",s.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var p=(t,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),d&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,r,n,o={},i=s.c,a=[],d=[],c="idle";function l(e){c=e;for(var t=[],r=0;r<d.length;r++)t[r]=d[r].call(null,e);return Promise.all(t)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check").then(s.hmrM).then((function(n){return n?l("prepare").then((function(){var o=[];return t=[],r=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,t){return s.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return u((function(){return e?f(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,d=l("apply"),c=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var r=0;r<t.length;r++)s.push(t[r])}})),Promise.all([i,d]).then((function(){return a?l("fail").then((function(){throw a})):n?f(e).then((function(e){return s.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):l("idle").then((function(){return s}))}))}function m(){if(n)return r||(r=[]),Object.keys(s.hmrI).forEach((function(e){n.forEach((function(t){s.hmrI[e](t,r)}))})),n=void 0,!0}s.hmrD=o,s.i.push((function(f){var m,v,y,_,g=f.module,b=function(r,n){var o=i[n];if(!o)return r;var d=function(t){if(o.hot.active){if(i[t]){var d=i[t].parents;-1===d.indexOf(n)&&d.push(n)}else a=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),a=[];return r(t)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&"e"!==p&&Object.defineProperty(d,p,s(p));return d.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),t.push(e),u((function(){return l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},d}(f.require,f.id);g.hot=(m=f.id,v=g,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){a=v.parents.slice(),e=y?void 0:m,s(m)},active:!0,accept:function(e,t,r){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)_._acceptedDependencies[e[n]]=t||function(){},_._acceptedErrorHandlers[e[n]]=r;else _._acceptedDependencies[e]=t||function(){},_._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)_._declinedDependencies[e[t]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=_._disposeHandlers.indexOf(e);t>=0&&_._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:o[m]},e=void 0,_),g.parents=a,g.children=[],a=[],f.require=b})),s.hmrC={},s.hmrI={}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=d,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),s.hmrC.miniCss=(e,t,d,c,l,u)=>{l.push(a),e.forEach((e=>{var t=s.miniCssF(e),a=s.p+t,d=n(t,a);d&&c.push(new Promise(((t,n)=>{var c=r(e,a,(()=>{c.as="style",c.rel="preload",t()}),n);o.push(d),i.push(c)})))}))},(()=>{var e,t,r,n,o=s.hmrS_jsonp=s.hmrS_jsonp||{179:0},i={};function a(e){return new Promise(((t,r)=>{i[e]=t;var n=s.p+s.hu(e),o=new Error;s.l(n,(t=>{if(i[e]){i[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r(o)}}))}))}function d(i){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,a=o.chain,c=s.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],p=s.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),d(r[u],[i])):(delete r[u],t.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}s.f&&delete s.f.jsonpHmr,e=void 0;var c={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in t)if(s.o(t,h)){var f,m=t[h],v=!1,y=!1,_=!1,g="";switch((f=m?a(h):{type:"disposed",moduleId:h}).chain&&(g="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":i.onDeclined&&i.onDeclined(f),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+g));break;case"declined":i.onDeclined&&i.onDeclined(f),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+g));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(f),i.ignoreUnaccepted||(v=new Error("Aborted because "+h+" is not accepted"+g));break;case"accepted":i.onAccepted&&i.onAccepted(f),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(f),_=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(y)for(h in u[h]=m,d(l,f.outdatedModules),f.outdatedDependencies)s.o(f.outdatedDependencies,h)&&(c[h]||(c[h]=[]),d(c[h],f.outdatedDependencies[h]));_&&(d(l,[f.moduleId]),u[h]=p)}t=void 0;for(var b,k=[],E=0;E<l.length;E++){var w=l[E],x=s.c[w];x&&(x.hot._selfAccepted||x.hot._main)&&u[w]!==p&&!x.hot._selfInvalidated&&k.push({module:w,require:x.hot._requireSelf,errorHandler:x.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var i=n.pop(),a=s.c[i];if(a){var d={},u=a.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,d);for(s.hmrD[i]=d,a.hot.active=!1,delete s.c[i],delete c[i],E=0;E<a.children.length;E++){var p=s.c[a.children[E]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var h in c)if(s.o(c,h)&&(a=s.c[h]))for(b=c[h],E=0;E<b.length;E++)t=b[E],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(e){for(var t in u)s.o(u,t)&&(s.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](s);for(var o in c)if(s.o(c,o)){var a=s.c[o];if(a){b=c[o];for(var d=[],p=[],h=[],f=0;f<b.length;f++){var m=b[f],v=a.hot._acceptedDependencies[m],y=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==d.indexOf(v))continue;d.push(v),p.push(y),h.push(m)}}for(var _=0;_<d.length;_++)try{d[_].call(null,b)}catch(t){if("function"==typeof p[_])try{p[_](t,{moduleId:o,dependencyId:h[_]})}catch(r){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:h[_],error:r,originalError:t}),i.ignoreErrored||(e(r),e(t))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:h[_],error:t}),i.ignoreErrored||e(t)}}}for(var g=0;g<k.length;g++){var E=k[g],w=E.module;try{E.require(w)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:w,module:s.c[w]})}catch(r){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:w,error:r,originalError:t}),i.ignoreErrored||(e(r),e(t))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:w,error:t}),i.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatetodo_app=(e,r,o)=>{for(var a in r)s.o(r,a)&&(t[a]=r[a]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},s.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(d)),s.o(t,e)||(t[e]=s.m[e])},s.hmrC.jsonp=function(i,c,l,u,p,h){p.push(d),e={},r=c,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],i.forEach((function(t){s.o(o,t)&&void 0!==o[t]&&(u.push(a(t)),e[t]=!0)})),s.f&&(s.f.jsonpHmr=function(t,r){e&&!s.o(e,t)&&s.o(o,t)&&void 0!==o[t]&&(r.push(a(t)),e[t]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),s(115)})();