(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[6425],{9396:e=>{e.exports={}},5910:(e,t,r)=>{"use strict";r.d(t,{eG:()=>n,UU:()=>o,A_:()=>c,pq:()=>a,Vh:()=>i,H1:()=>s});var n="FETCH_CVE_LIST_TABLE",o="FETCH_CVE_DETAIL_TABLE",c="FETCH_CLUSTER_LIST_TABLE",a="FETCH_CLUSTER_DETAIL_TABLE",i="FETCH_CVE_DETAILS",s="FETCH_CLUSTER_DETAILS"},3827:(e,t,r)=>{"use strict";r.r(t);var n=r(3264),o=r.n(n),c=r(3644),a=r.n(c),i=r(2982),s=r(6530),l=r(4494),u=r(925),p=r(8573),f=r.n(p),y=r(4885),b=r(3215),O=r(4942),d=r(5910);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=Object.freeze({limit:20,offset:0,total_items:0,cves:[],isLoading:!0});const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(d.eG,"_PENDING"):return v(v({},e),{},{isLoading:!0});case"".concat(d.eG,"_FULFILLED"):return v(v(v({},e),{},{cves:t.payload.data.data},t.payload.data.meta),{},{isLoading:!1})}return e};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=Object.freeze({limit:20,offset:0,total_items:0,clusters:[],isLoading:!0});const w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(d.A_,"_PENDING"):return j(j({},e),{},{isLoading:!0});case"".concat(d.A_,"_FULFILLED"):return j(j(j({},e),{},{clusters:t.payload.data.data},t.payload.data.meta),{},{isLoading:!1})}return e};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=Object.freeze({limit:20,offset:0,total_items:0,clusters:[],cve:{}});const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.UU:return D(D({},e),{},{clusters:t.payload.data},t.payload.meta);case d.Vh:return D(D({},e),{},{cve:t.payload.data},t.payload.meta)}return e};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,O.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=Object.freeze({limit:20,offset:0,total_items:0,cves:[],cluster:{}});const I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.pq:return C(C({},e),{},{cves:t.payload.data},t.payload.meta);case d.H1:return C(C({},e),{},{cluster:t.payload.data},t.payload.meta)}return e};var F;function k(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(F=(0,u.JH)({},[f(),(0,y.ZP)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({notifications:b.ee}),F.register({CveListStore:h}),F.register({ClusterListStore:w}),F.register({CveDetailStore:S}),F.register({ClusterDetailStore:I}),F}var H=r(8071),R=(0,n.lazy)((function(){return Promise.all([r.e(4622),r.e(4830),r.e(8026)]).then(r.bind(r,783))})),z=(0,n.lazy)((function(){return Promise.all([r.e(4622),r.e(4830),r.e(9053)]).then(r.bind(r,715))})),U=(0,n.lazy)((function(){return Promise.all([r.e(4622),r.e(4830),r.e(1560)]).then(r.bind(r,2970))})),B=(0,n.lazy)((function(){return Promise.all([r.e(4622),r.e(4830),r.e(2641)]).then(r.bind(r,8791))})),Z=function(){return o().createElement(n.Suspense,{fallback:o().createElement(H.Bullseye,null,o().createElement(H.Spinner,null))},o().createElement(s.Switch,null,o().createElement(s.Route,{path:"/cves/:cveId",component:U}),o().createElement(s.Route,{path:"/clusters/:clusterId",component:B}),o().createElement(s.Route,{path:"/cves",component:R}),o().createElement(s.Route,{path:"/clusters",component:z}),o().createElement(s.Route,null,o().createElement(s.Redirect,{to:"/cves"}))))},G=r(5160);const N=function(e){var t=(0,s.useHistory)();return(0,n.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("ocp-vulnerability");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}));return function(){e()}}),[]),o().createElement(n.Fragment,null,o().createElement(G.ZP,null),o().createElement(Z,{childProps:e}))};var V=r(5240);r(9396);const q=function(){return o().createElement(l.zt,{store:k.apply(void 0,(0,i.Z)([])).getStore()},o().createElement(s.BrowserRouter,{basename:(0,V.eb)(window.location.pathname,3)},o().createElement(N,null)))};var x=document.getElementById("root");a().render(o().createElement(q,null),x,(function(){return x.setAttribute("data-ouia-safe",!0)}))}}]);
//# sourceMappingURL=../sourcemaps/6425.21cd76d9ecc2edd7f7de9059c3b46a10.js.map