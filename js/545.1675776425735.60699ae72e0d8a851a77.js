"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[545],{5670:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(3264),a=n.n(r),i=n(5697),o=n.n(i),c=n(6700),u=n(5984),l=n(2443),s=n(8833),p=function(e){var t=e.error,n=e.children;if(!t)return n;switch(parseInt(null==t?void 0:t.status)){case 403:return a().createElement(s.Z,{serviceName:"Vulnerability for OpenShift"});case 404:return a().createElement(c.Z,null);case 500:case 502:case 503:return a().createElement(u.Z,null);default:return a().createElement(l.Z,null)}};p.propTypes={error:o().shape({status:o().oneOfType([o().number,o().string])}),children:o().node};const f=p},4724:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(4942),a=n(3237);const i=function(e){var t=e.urlParam,n=e.label,i=e.value,o=e.placeholder,c=e.items,u=e.apply,l=e.chipLabel,s=function(e){var n;u((n={},(0,r.Z)(n,t,e.join(",")),(0,r.Z)(n,"offset",0),n))};return{filterConfig:{label:n,type:a.Y.checkbox,urlParam:t,key:t,filterValues:{onChange:function(e,t){s(t)},items:c,value:i?i.split(","):[],placeholder:o}},activeFiltersConfig:{isShown:!!i,onDelete:function(e){var t=e.map((function(e){return e.value})),n=i.split(",").filter((function(e){return!t.includes(e)}));s(n)},key:t,category:l,chips:c.filter((function(e){return null==i?void 0:i.split(",").includes(e.value)})).map((function(e){return{name:e.label,value:e.value}}))}}}},5862:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(4942),a=n(885),i=n(3264),o=n(3279),c=n.n(o),u=n(3237);const l=function(e){var t=e.urlParam,n=e.label,o=e.placeholder,l=e.value,s=e.apply,p=e.chipLabel,f=(0,i.useState)(),m=(0,a.Z)(f,2),d=m[0],v=m[1],y=(0,i.useState)((function(){return c()((function(e){var n;s((n={},(0,r.Z)(n,t,e),(0,r.Z)(n,"offset",0),n))}),400)})),g=(0,a.Z)(y,1)[0];(0,i.useEffect)((function(){return v(l)}),[l]);var b={type:u.Y.text,label:n,key:t,filterValues:{"aria-label":"search-field",id:"text-filter-".concat(t),onChange:function(e,t){v(t),g(t)},placeholder:o,value:d}};return{filterConfig:b,activeFiltersConfig:{isShown:!!l,onDelete:function(){var e;return s((e={},(0,r.Z)(e,t,void 0),(0,r.Z)(e,"offset",0),e))},key:t,category:p,chips:[{name:l}]}}}},7903:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(3264),a=n.n(r),i=n(5697),o=n.n(i),c=n(4942),u=n(2982),l=n(885),s=n(7855),p=n(448),f=n.n(p),m=n(8100);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.isLoading,n=e.columns,i=e.rows,o=e.isExpandable,c=void 0!==o&&o,p=e.emptyState,d=e.sortParam,y=e.perPage,g=e.apply,b=(0,r.useState)([]),h=(0,l.Z)(b,2),w=h[0],E=h[1],P=(0,r.useState)(!1),O=(0,l.Z)(P,2),x=O[0],S=O[1];(0,r.useEffect)((function(){S(i.length>0&&i.length===w.length)}),[w]),(0,r.useEffect)((function(){x&&E(i.map((function(e){return e.key})))}),[i]);var Z=function(e){return w.includes(e)},D=function(e,t,n){var r,a;if(0===i.length||!t)return{};var o="-"===t[0]?s.SortByDirection.desc:s.SortByDirection.asc;return t=t.replace(/^(-|\+)/,"").split(",")[0],{index:e.findIndex((function(e){return e.sortParam===t})),direction:o,defaultDirection:null!==(r=null===(a=e[n])||void 0===a?void 0:a.sortDefaultDirection)&&void 0!==r?r:s.SortByDirection.desc}};return t?a().createElement(f(),{colSize:n.length,rowSize:y||m.UZ,variant:s.TableVariant.compact,columns:n.map((function(e){return e.sortParam?v(v({},e),{},{transforms:[s.sortable]}):e})),sortBy:D(n,d)}):a().createElement(s.TableComposable,{variant:s.TableVariant.compact,isStickyHeader:!0},a().createElement(s.Thead,null,a().createElement(s.Tr,null,c&&i.length>0&&a().createElement(s.Th,{expand:{onToggle:function(){return E(x?[]:i.map((function(e){return e.key})))},areAllExpanded:!x},ouiaId:"expand-all"}),n.map((function(e,t){return a().createElement(s.Th,{key:e.title,sort:e.sortParam&&(r=t,{sortBy:D(n,d,r),onSort:function(e,t,a){var o=n[r].sortParam;a===s.SortByDirection.desc&&(o="-"+o),i.length>0&&g({sort:o})},columnIndex:r})},e.title);var r})))),0===i.length?a().createElement(s.Tbody,null,a().createElement(s.Tr,null,a().createElement(s.Td,{colSpan:100},p))):i.map((function(e,t){return a().createElement(s.Tbody,{key:t,isExpanded:Z(e.key)},a().createElement(s.Tr,null,c&&a().createElement(s.Td,{expand:{rowIndex:t,isExpanded:Z(e.key),onToggle:function(){return function(e,t){return E((function(n){var r=n.filter((function(t){return t!==e}));return t?[].concat((0,u.Z)(r),[e]):r}))}(e.key,!Z(e.key))}}}),e.cells.map((function(e,t){return a().createElement(s.Td,{key:t,dataLabel:n[t].title},e)}))),c&&a().createElement(s.Tr,{isExpanded:Z(e.key)},a().createElement(s.Td,{colSpan:100},a().createElement(s.ExpandableRowContent,null,e.expandableContent))))})))};y.propTypes={isLoading:o().bool.isRequired,columns:o().arrayOf(o().shape({title:o().node.isRequired,sortParam:o().string,sortDefaultDirection:o().oneOf([void 0,"asc","desc"])})).isRequired,rows:o().arrayOf(o().shape({key:o().string.isRequired,cells:o().arrayOf(o().node).isRequired,expandableContent:o().node})).isRequired,isExpandable:o().bool,emptyState:o().node.isRequired,sortParam:o().string,perPage:o().number,apply:o().func};const g=y;var b=n(9085),h=n(4938),w=function(e){var t=e.isLoading,n=e.page,r=e.perPage,i=e.itemCount,o=e.apply,c=e.filterConfig,u=e.activeFiltersConfig,l=e.onExport;return a().createElement(b.Z,{pagination:t?a().createElement(h.Skeleton,{fontSize:"xl",width:"200px",style:{margin:10}}):{isDisabled:0===i,itemCount:i,page:n,perPage:r,ouiaId:"pagination-top",onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}},filterConfig:c,activeFiltersConfig:u,exportConfig:l&&{isDisabled:0===i,onSelect:function(e,t){return l(t)}}})};w.propTypes={isLoading:o().bool,page:o().number,perPage:o().number,itemCount:o().number,apply:o().func,filterConfig:o().shape({items:o().array}),activeFiltersConfig:o().shape({filters:o().array}),onExport:o().func};const E=w;var P=function(e){var t=e.isLoading,n=e.page,r=e.perPage,i=e.itemCount,o=e.apply;return t?a().createElement("div",{className:"pf-c-pagination pf-m-bottom"},a().createElement(h.Skeleton,{fontSize:"xl",width:"350px",style:{margin:10}})):a().createElement(h.Pagination,{page:n,itemCount:i,perPage:r,variant:h.PaginationVariant.bottom,ouiaId:"pagination-bottom",isDisabled:0===i,onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}})};P.propTypes={isLoading:o().bool,page:o().number,perPage:o().number,itemCount:o().number,apply:o().func};const O=P;var x=n(5670),S=function(e){var t=e.isLoading,n=e.isExpandable,r=e.rows,i=e.columns,o=e.filterConfig,c=void 0===o?[]:o,u=e.activeFiltersConfig,l=void 0===u?[]:u,s=e.meta,p=e.error,f=e.emptyState,m=e.apply,d=e.onExport,v=s.offset,y=s.limit,b=s.total_items,h=s.sort;return a().createElement(x.Z,{error:p},a().createElement(E,{isLoading:t,page:v/y+1,perPage:y,itemCount:b,apply:m,filterConfig:c,activeFiltersConfig:l,onExport:d}),a().createElement(g,{isLoading:t,columns:i,rows:r,isExpandable:n,emptyState:f,sortParam:h,perPage:y,apply:m}),a().createElement(O,{isLoading:t,page:v/y+1,perPage:y,itemCount:b,apply:m}))};S.propTypes={isLoading:o().bool.isRequired,columns:o().arrayOf(o().shape({title:o().node.isRequired,sortParam:o().string})).isRequired,rows:o().arrayOf(o().shape({key:o().string.isRequired,cells:o().arrayOf(o().node).isRequired,expandableContent:o().node})).isRequired,isExpandable:o().bool,emptyState:o().node.isRequired,sortParam:o().string,filterConfig:o().object,activeFiltersConfig:o().object,meta:o().shape({offset:o().number,limit:o().number,total_items:o().number,sort:o().string}),error:o().object,apply:o().func,onExport:o().func};const Z=S},2245:(e,t,n)=>{n.d(t,{V2:()=>m,Xt:()=>l,ZH:()=>d,ZO:()=>f,Zz:()=>s,l$:()=>p});var r=n(5861),a=n(4687),i=n.n(a),o=n(5564),c=n.n(o),u=c().create();u.interceptors.response.use(null,(function(e){var t,n=e.response;if(!c().isCancel(n)&&null!=n&&null!==(t=n.data)&&void 0!==t&&t.error)throw null==n?void 0:n.data.error;return n}));var l=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/cves",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/clusters",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/cves/".concat(n,"/exposed_clusters"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/cves/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/clusters/".concat(n,"/cves"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/ocp-vulnerability/v1/clusters/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6743:(e,t,n)=>{n.d(t,{S:()=>P,_:()=>y,eh:()=>E});var r=n(5861),a=n(4942),i=n(885),o=n(4687),c=n.n(o),u=n(3264),l=n(7563),s=n(8216),p=n(8100),f=n(3215),m=n(5240);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=(0,u.useState)(localStorage.getItem(e)),n=(0,i.Z)(t,2),r=n[0],a=n[1];return[r,function(t){a(t),localStorage.setItem(e,t)}]};function g(e,t){var n=v({},e);return Object.entries(n).filter((function(e){var n=(0,i.Z)(e,2),r=n[0],a=n[1];return!t.includes(r)||""===a})).forEach((function(e){var t=(0,i.Z)(e,1)[0];return delete n[t]})),n}var b=[function(e){var t=function(e){var t=function(e){return"".concat(1==="".concat(e).length?"0":"").concat(e)},n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate();return"".concat(r,"-").concat(t(a),"-").concat(t(i))};if(e.published){var n=p.ab.find((function(t){return t.value===e.published}));e.published="".concat(n.from?t(n.from):"",",").concat(n.to?t(n.to):"")}return e},function(e){return e.affected_clusters&&(e.affected_clusters=p.f9.map((function(t){return e.affected_clusters.split(",").includes(t.value)?"true":"false"})).join(",")),e},function(e){return e.cluster_severity?e.cluster_severity.split(",").includes("any")&&(e.cluster_severity=void 0):e.cluster_severity="low,moderate,important,critical",e}],h=function(e){var t=v(v({},e),{},{total_items:void 0});return b.forEach((function(e){t=e(t)})),t},w=["limit","offset"],E=function(e){var t=e.allowedParams,n=e.initialParams,r=e.additionalParam,a=e.fetchAction,o=e.changeParamsAction,c=(0,s.I0)(),p=function(e){return[function(){var t=new URL(window.location);return g(l.parse(t.search),e)},function(e){var t=new URL(window.location),n=l.stringify(e);window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname,"?").concat(n))}]}(t),f=(0,i.Z)(p,2),m=f[0],d=f[1];(0,u.useEffect)((function(){""===window.location.search&&y(v({},n))}),[window.location.search]),(0,u.useEffect)((function(){var e=m();y(v(v({},n),e))}),[]);var y=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=m(),u=v(n?{}:v({},i),e);for(var l in u)w.includes(l)&&(u[l]=Number(u[l]));c(o(u));var s=g(u,t);c(a(h(s),r)),d(s)};return y},P=function(e){var t=e.filenamePrefix,n=e.fetchAction,a=e.fetchActionParam,i=e.allowedParams,o=(0,s.I0)(),u={report:!0},l=function(){var e=(0,r.Z)(c().mark((function e(r,l){var s,p,d,y;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((0,f.wN)({variant:"info",title:"Preparing export. Once complete, your download will start automatically."})),s=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",p=g(l,i),e.next=5,n(v(v(v({},h(p)),u),{},{data_format:r}),a);case 5:d=e.sent,y="json"===r?JSON.stringify(d.data.data):d.data.data,(0,m.Sv)(y,t+s,r),o((0,f.L1)()),o((0,f.wN)({variant:"success",title:"Downloading export"}));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return l}},7534:(e,t,n)=>{n.d(t,{EK:()=>i,Ew:()=>o,FP:()=>l,W9:()=>d,ZH:()=>s,ZO:()=>u,fD:()=>m,h:()=>f,sK:()=>p,zi:()=>c});var r=n(5910),a=n(2245),i=function(e){return{type:r.eG,meta:{timestamp:new Date},payload:function(){return a.Xt(e)}}},o=function(e){return{type:r.A_,meta:{timestamp:new Date},payload:function(){return a.Zz(e)}}},c=function(e,t){return{type:r.UU,meta:{timestamp:new Date},payload:function(){return a.l$(e,t)}}},u=function(e,t){return{type:r.Vh,meta:{timestamp:new Date,noNotificationOnError:!0},payload:function(){return a.ZO(e,t)}}},l=function(e,t){return{type:r.pq,meta:{timestamp:new Date},payload:function(){return a.V2(e,t)}}},s=function(e,t){return{type:r.H1,meta:{timestamp:new Date,noNotificationOnError:!0},payload:function(){return a.ZH(e,t)}}},p=function(e){return{type:r.pj,meta:{timestamp:new Date},payload:function(){return e}}},f=function(e){return{type:r.GA,meta:{timestamp:new Date},payload:function(){return e}}},m=function(e){return{type:r.ol,meta:{timestamp:new Date},payload:function(){return e}}},d=function(e){return{type:r.r9,meta:{timestamp:new Date},payload:function(){return e}}}}}]);
//# sourceMappingURL=../sourcemaps/545.27cf9f708c846c8e6d29eee33e4504cd.js.map