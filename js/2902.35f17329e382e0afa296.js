(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[2902,2472,8537],{68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>l});var r,a=n(65353),o=n(28416),i=n(38296),s=n(62873),c=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const l=e=>{var{children:t=null,className:n="",component:u=r.p,isVisitedLink:p=!1,ouiaId:f,ouiaSafe:d=!0}=e,h=(0,a._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const m=u,y=(0,c.useOUIAProps)(l.displayName,f,d);return o.createElement(m,Object.assign({},y,h,{"data-pf-content":!0,className:(0,i.i)(p&&u===r.a&&s.Z.modifiers.visited,n)}),t)};l.displayName="Text"},32902:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Text:()=>l.x,TextContent:()=>s,TextList:()=>u,TextListItem:()=>f,TextListItemVariants:()=>p,TextListVariants:()=>c,TextVariants:()=>l.q});var r=n(65353),a=n(28416),o=n(62873),i=n(38296);const s=e=>{var{children:t,className:n="",isVisited:s=!1}=e,c=(0,r._T)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},c,{className:(0,i.i)(o.Z.content,s&&o.Z.modifiers.visited,n)}),t)};s.displayName="TextContent";var c,l=n(68340);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(c||(c={}));const u=e=>{var{children:t=null,className:n="",component:s=c.ul,isPlain:l=!1}=e,u=(0,r._T)(e,["children","className","component","isPlain"]);const p=s;return a.createElement(p,Object.assign({},u,{className:(0,i.i)(l&&o.Z.modifiers.plain,n)}),t)};var p;u.displayName="TextList",function(e){e.li="li",e.dt="dt",e.dd="dd"}(p||(p={}));const f=e=>{var{children:t=null,className:n="",component:o=p.li}=e,s=(0,r._T)(e,["children","className","component"]);const c=o;return a.createElement(c,Object.assign({},s,{className:(0,i.i)(n)}),t)};f.displayName="TextListItem"},62472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getDefaultOUIAId:()=>u,getOUIAProps:()=>s,useOUIAId:()=>l,useOUIAProps:()=>c});var r=n(28416);let a=0;const o="OUIA-Generated-",i={};function s(e,t,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const c=(e,t,n=!0,r)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":l(e,t,r)}),l=(e,t,n)=>{const a=(0,r.useMemo)((()=>u(e,n)),[e,n]);return null!=t?t:a};function u(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[n]||(i[n]=0),`${o}${e}-${t?`${t}-`:""}${++i[n]}`}catch(n){return`${o}${e}-${t?`${t}-`:""}${++a}`}}},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-v5-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain"}}},38296:(e,t,n)=>{"use strict";function r(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)&&e.length){const n=r(...e);n&&t.push(n)}else if("object"===a)for(const r in e)n.call(e,r)&&e[r]&&t.push(r)})),t.join(" ")}n.d(t,{i:()=>r})},65353:(e,t,n)=>{"use strict";function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function a(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function s(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}n.d(t,{CR:()=>i,Jh:()=>o,_T:()=>r,ev:()=>s,mG:()=>a}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},10108:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2902.7aa50cd95cdea1bdeb5237e07ac28705.js.map