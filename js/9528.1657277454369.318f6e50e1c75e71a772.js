"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[9528],{8187:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(3264),a=r.n(n),o=r(6530),c=r(76),i=r(5160);const s=function(e){var t=(0,o.useHistory)();return(0,n.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("ocp-vulnerability");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}));return function(){e()}}),[]),a().createElement(n.Fragment,null,a().createElement(i.ZP,null),a().createElement(c.Z,{childProps:e}))}},8412:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(3264),a=r.n(n),o=r(6530),c=r(4494),i=r(7186),s=r(8187),l=r(5240);const u=function(){return a().createElement(c.zt,{store:(0,i.S)().getStore()},a().createElement(o.BrowserRouter,{basename:(0,l.eb)(window.location.pathname,3)},a().createElement(s.Z,null)))}},76:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(3264),a=r.n(n),o=r(6530),c=r(8071),i=(0,n.lazy)((function(){return Promise.all([r.e(9042),r.e(5324),r.e(7893),r.e(8026)]).then(r.bind(r,8529))})),s=(0,n.lazy)((function(){return Promise.all([r.e(9042),r.e(5324),r.e(7893),r.e(9053)]).then(r.bind(r,7596))})),l=(0,n.lazy)((function(){return Promise.all([r.e(9042),r.e(5324),r.e(1560)]).then(r.bind(r,7915))})),u=(0,n.lazy)((function(){return Promise.all([r.e(9042),r.e(5324),r.e(2641)]).then(r.bind(r,8791))})),p=function(){return a().createElement(n.Suspense,{fallback:a().createElement(c.Bullseye,null,a().createElement(c.Spinner,null))},a().createElement(o.Switch,null,a().createElement(o.Route,{path:"/cves/:cveId",component:l}),a().createElement(o.Route,{path:"/clusters/:clusterId",component:u}),a().createElement(o.Route,{path:"/cves",component:i}),a().createElement(o.Route,{path:"/clusters",component:s}),a().createElement(o.Route,null,a().createElement(o.Redirect,{to:"/cves"}))))}},5910:(e,t,r)=>{r.d(t,{eG:()=>n,UU:()=>a,A_:()=>o,pq:()=>c,Vh:()=>i,H1:()=>s,pj:()=>l});var n="FETCH_CVE_LIST_TABLE",a="FETCH_CVE_DETAIL_TABLE",o="FETCH_CLUSTER_LIST_TABLE",c="FETCH_CLUSTER_DETAIL_TABLE",i="FETCH_CVE_DETAILS",s="FETCH_CLUSTER_DETAILS",l="CHANGE_CVE_LIST_TABLE_PARAMS"},7186:(e,t,r)=>{r.d(t,{S:()=>f});var n,a=r(925),o=r(8573),c=r.n(o),i=r(4885),s=r(3215),l=r(2145),u=r(6262),p=r(3893),d=r(9228);function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=(0,a.JH)({},[c(),(0,i.ZP)({errorDescriptionKey:["detail","stack"]})].concat(t))).register({notifications:s.ee}),n.register({CveListStore:l.Z}),n.register({ClusterListStore:u.Z}),n.register({CveDetailStore:p.Z}),n.register({ClusterDetailStore:d.Z}),n}},9228:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4942),a=r(5910);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Object.freeze({limit:20,offset:0,total_items:0,cves:[],cluster:{},isTableLoading:!0,isDetailLoading:!0});const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(a.pq,"_PENDING"):return c(c({},e),{},{isTableLoading:!0});case"".concat(a.pq,"_FULFILLED"):return c(c(c({},e),{},{cves:t.payload.data.data},t.payload.data.meta),{},{isTableLoading:!1});case"".concat(a.H1,"_PENDING"):return c(c({},e),{},{isDetailLoading:!0});case"".concat(a.H1,"_FULFILLED"):return c(c(c({},e),{},{cluster:t.payload.data.data},t.payload.data.meta),{},{isDetailLoading:!1})}return e}},6262:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4942),a=r(5910);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Object.freeze({limit:20,offset:0,total_items:0,clusters:[],isLoading:!0});const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(a.A_,"_PENDING"):return c(c({},e),{},{isLoading:!0});case"".concat(a.A_,"_FULFILLED"):return c(c(c({},e),{},{clusters:t.payload.data.data},t.payload.data.meta),{},{isLoading:!1})}return e}},3893:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4942),a=r(5910);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Object.freeze({limit:20,offset:0,total_items:0,clusters:[],cve:{},isTableLoading:!0,isDetailLoading:!0});const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(a.UU,"_PENDING"):return c(c({},e),{},{isTableLoading:!0});case"".concat(a.UU,"_FULFILLED"):return c(c(c({},e),{},{clusters:t.payload.data.data},t.payload.data.meta),{},{isTableLoading:!1});case"".concat(a.Vh,"_PENDING"):return c(c({},e),{},{isDetailLoading:!0});case"".concat(a.Vh,"_FULFILLED"):return c(c(c({},e),{},{cve:t.payload.data.data},t.payload.data.meta),{},{isDetailLoading:!1})}return e}},2145:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4942),a=r(5910);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Object.freeze({cves:[],isLoading:!0,meta:{limit:20,offset:0,total_items:0,sort:"-publish_date"}});const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(a.eG,"_PENDING"):return c(c({},e),{},{isLoading:!0});case"".concat(a.eG,"_FULFILLED"):return c(c({},e),{},{cves:t.payload.data.data,meta:c(c({},e.meta),{},{total_items:t.payload.data.meta.total_items}),isLoading:!1});case"".concat(a.pj):return c(c({},e),{},{meta:c(c({},e.meta),t.payload)})}return e}}}]);
//# sourceMappingURL=../sourcemaps/9528.aab9cf1e26ef0729cd96152c2676a68e.js.map