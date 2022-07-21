"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[6425],{5084:(e,t,r)=>{r.d(t,{MG:()=>o,_A:()=>c,YD:()=>i,qc:()=>l,KW:()=>s});var n=r(1002);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=function(e){var t;null!==(t=e)&&void 0!==t&&t.includes(",")||(e=",");var r=e.split(",")[0],n=e.split(",")[1];return[""===r?0:Number(r),""===n?10:Number(n)]},c=function e(t){var r,o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}(Object.getOwnPropertyNames(t));try{for(o.s();!(r=o.n()).done;){var c=t[r.value];c&&"object"===(0,n.Z)(c)&&e(c)}}catch(e){o.e(e)}finally{o.f()}return Object.freeze(t)},i=function(e,t){return e.setDate(e.getDate()-t)},l=function(e,t){return e.setFullYear(e.getFullYear()-t)},s=function(e){var t={items:[]},r={filters:[],onDelete:function(e,t){return t.forEach((function(e){return e.onDelete(e.chips)}))},deleteTitle:"Reset filter"};return e.forEach((function(e){var n;t.items.push(e.filterConfig),(null===(n=e.activeFiltersConfig)||void 0===n?void 0:n.isShown)&&r.filters.push(e.activeFiltersConfig)})),r.showDeleteButton=r.filters.length>0,[t,r]}},5910:(e,t,r)=>{r.d(t,{eG:()=>n,UU:()=>a,A_:()=>o,pq:()=>c,Vh:()=>i,H1:()=>l,pj:()=>s,GA:()=>u});var n="FETCH_CVE_LIST_TABLE",a="FETCH_CVE_DETAIL_TABLE",o="FETCH_CLUSTER_LIST_TABLE",c="FETCH_CLUSTER_DETAIL_TABLE",i="FETCH_CVE_DETAILS",l="FETCH_CLUSTER_DETAILS",s="CHANGE_CVE_LIST_TABLE_PARAMS",u="CHANGE_CLUSTER_LIST_TABLE_PARAMS"},3827:(e,t,r)=>{r.r(t);var n=r(3264),a=r.n(n),o=r(3644),c=r.n(o),i=r(6530),l=r(4494),s=r(925),u=r(8573),f=r.n(u),p=r(4885),d=r(3215),y=r(4942),b=r(5084),m=r(5910);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=(0,b._A)({cves:[],isLoading:!0,meta:{limit:20,offset:0,total_items:0,sort:"-publish_date"}});const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.eG,"_PENDING"):return g(g({},e),{},{isLoading:!0});case"".concat(m.eG,"_FULFILLED"):return g(g({},e),{},{cves:t.payload.data.data,meta:g(g({},e.meta),{},{total_items:t.payload.data.meta.total_items}),isLoading:!1});case"".concat(m.pj):return g(g({},e),{},{meta:g(g({},e.meta),t.payload)})}return e};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,b._A)({clusters:[],isLoading:!0,meta:{limit:20,offset:0,total_items:0,sort:"-last_seen"}});const j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.A_,"_PENDING"):return _(_({},e),{},{isLoading:!0});case"".concat(m.A_,"_FULFILLED"):return _(_({},e),{},{clusters:t.payload.data.data,meta:_(_({},e.meta),{},{total_items:t.payload.data.meta.total_items}),isLoading:!1});case"".concat(m.GA):return _(_({},e),{},{meta:_(_({},e.meta),t.payload)})}return e};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=(0,b._A)({limit:20,offset:0,total_items:0,clusters:[],cve:{},isTableLoading:!0,isDetailLoading:!0});const A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.UU,"_PENDING"):return D(D({},e),{},{isTableLoading:!0});case"".concat(m.UU,"_FULFILLED"):return D(D(D({},e),{},{clusters:t.payload.data.data},t.payload.data.meta),{},{isTableLoading:!1});case"".concat(m.Vh,"_PENDING"):return D(D({},e),{},{isDetailLoading:!0});case"".concat(m.Vh,"_FULFILLED"):return D(D(D({},e),{},{cve:t.payload.data.data},t.payload.data.meta),{},{isDetailLoading:!1})}return e};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=(0,b._A)({limit:20,offset:0,total_items:0,cves:[],cluster:{},isTableLoading:!0,isDetailLoading:!0});const C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(m.pq,"_PENDING"):return T(T({},e),{},{isTableLoading:!0});case"".concat(m.pq,"_FULFILLED"):return T(T(T({},e),{},{cves:t.payload.data.data},t.payload.data.meta),{},{isTableLoading:!1});case"".concat(m.H1,"_PENDING"):return T(T({},e),{},{isDetailLoading:!0});case"".concat(m.H1,"_FULFILLED"):return T(T(T({},e),{},{cluster:t.payload.data.data},t.payload.data.meta),{},{isDetailLoading:!1})}return e};var F;function N(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(F=(0,s.JH)({},[f(),(0,p.ZP)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({notifications:d.ee}),F.register({CveListStore:h}),F.register({ClusterListStore:j}),F.register({CveDetailStore:A}),F.register({ClusterDetailStore:C}),F}var U=r(8071),G=(0,n.lazy)((function(){return Promise.all([r.e(1281),r.e(7303),r.e(5324),r.e(8026)]).then(r.bind(r,964))})),R=(0,n.lazy)((function(){return Promise.all([r.e(1281),r.e(7303),r.e(5324),r.e(9053)]).then(r.bind(r,7596))})),H=(0,n.lazy)((function(){return Promise.all([r.e(1281),r.e(5324),r.e(1560)]).then(r.bind(r,7915))})),k=(0,n.lazy)((function(){return Promise.all([r.e(1281),r.e(5324),r.e(2641)]).then(r.bind(r,8791))})),B=function(){return a().createElement(n.Suspense,{fallback:a().createElement(U.Bullseye,null,a().createElement(U.Spinner,null))},a().createElement(i.Switch,null,a().createElement(i.Route,{path:"/cves/:cveId",component:H}),a().createElement(i.Route,{path:"/clusters/:clusterId",component:k}),a().createElement(i.Route,{path:"/cves",component:G}),a().createElement(i.Route,{path:"/clusters",component:R}),a().createElement(i.Route,null,a().createElement(i.Redirect,{to:"/cves"}))))},V=r(5160);const Z=function(e){var t=(0,i.useHistory)();return(0,n.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("ocp-vulnerability");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}));return function(){e()}}),[]),a().createElement(n.Fragment,null,a().createElement(V.ZP,null),a().createElement(B,{childProps:e}))};var z=r(5240);const q=function(){return a().createElement(l.zt,{store:N().getStore()},a().createElement(i.BrowserRouter,{basename:(0,z.eb)(window.location.pathname,3)},a().createElement(Z,null)))};var M=document.getElementById("root");c().render(a().createElement(q,null),M,(function(){return M.setAttribute("data-ouia-safe",!0)}))}}]);
//# sourceMappingURL=../sourcemaps/6425.37ee367712a6f433faaf511de781e1ae.js.map