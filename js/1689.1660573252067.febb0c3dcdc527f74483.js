"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[1689],{5862:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(4942),a=n(885),i=n(3264),o=n(3279),u=n.n(o),c=n(3237);const l=function(e){var t=e.urlParam,n=e.label,o=e.placeholder,l=e.value,s=e.apply,p=e.chipLabel,f=(0,i.useState)(),m=(0,a.Z)(f,2),d=m[0],v=m[1],y=(0,i.useState)((function(){return u()((function(e){var n;s((n={},(0,r.Z)(n,t,e),(0,r.Z)(n,"offset",0),n))}),400)})),g=(0,a.Z)(y,1)[0];(0,i.useEffect)((function(){return v(l)}),[l]);var b={type:c.Y.text,label:n,key:t,filterValues:{"aria-label":"search-field",id:"search-".concat(n.id),onChange:function(e,t){v(t),g(t)},placeholder:o,value:d}};return{filterConfig:b,activeFiltersConfig:{isShown:!!l,onDelete:function(){var e;return s((e={},(0,r.Z)(e,t,void 0),(0,r.Z)(e,"offset",0),e))},key:t,category:p,chips:[{name:l}]}}}},7903:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(3264),a=n.n(r),i=n(5697),o=n.n(i),u=n(2982),c=n(885),l=n(3193),s=n(448),p=n.n(s),f=n(8100),m=function(e){var t=e.isLoading,n=e.columns,i=e.rows,o=e.isExpandable,s=void 0!==o&&o,m=e.emptyState,d=e.sortParam,v=e.perPage,y=e.apply,g=(0,r.useState)([]),b=(0,c.Z)(g,2),h=b[0],w=b[1],E=(0,r.useState)(!1),P=(0,c.Z)(E,2),x=P[0],S=P[1];(0,r.useEffect)((function(){S(i.length>0&&i.length===h.length)}),[h]),(0,r.useEffect)((function(){x&&w(i.map((function(e){return e.key})))}),[i]);var Z=function(e){return h.includes(e)},C=function(e,t){if(0===i.length)return{};var n="-"===t[0]?l.SortByDirection.desc:l.SortByDirection.asc;return t=t.replace(/^(-|\+)/,"").split(",")[0],{index:e.findIndex((function(e){return e.sortParam===t})),direction:n,defaultDirection:l.SortByDirection.desc}};return t?a().createElement(p(),{colSize:n.length,rowSize:v||f.UZ,variant:l.TableVariant.compact}):a().createElement(l.TableComposable,{variant:l.TableVariant.compact,isStickyHeader:!0},a().createElement(l.Thead,null,a().createElement(l.Tr,null,s&&i.length>0&&a().createElement(l.Th,{expand:{onToggle:function(){return w(x?[]:i.map((function(e){return e.key})))},areAllExpanded:!x}}),n.map((function(e,t){return a().createElement(l.Th,{key:e.title,sort:e.sortParam&&(r=t,{sortBy:C(n,d),onSort:function(e,t,a){var o=n[r].sortParam;a===l.SortByDirection.desc&&(o="-"+o),i.length>0&&y({sort:o})},columnIndex:r})},e.title);var r})))),a().createElement(l.Tbody,null,0===i.length?a().createElement(l.Tr,null,a().createElement(l.Td,{colSpan:100},m)):i.map((function(e,t){return a().createElement(r.Fragment,{key:t},a().createElement(l.Tr,null,s&&a().createElement(l.Td,{expand:{rowIndex:t,isExpanded:Z(e.key),onToggle:function(){return function(e,t){return w((function(n){var r=n.filter((function(t){return t!==e}));return t?[].concat((0,u.Z)(r),[e]):r}))}(e.key,!Z(e.key))}}}),e.cells.map((function(e,t){return a().createElement(l.Td,{key:t,dataLabel:n[t].title},e)}))),s&&a().createElement(l.Tr,{isExpanded:Z(e.key)},a().createElement(l.Td,{colSpan:100},a().createElement(l.ExpandableRowContent,null,e.expandableContent))))}))))};m.propTypes={isLoading:o().bool.isRequired,columns:o().arrayOf(o().shape({title:o().node.isRequired,sortParam:o().string})).isRequired,rows:o().arrayOf(o().shape({key:o().string.isRequired,cells:o().arrayOf(o().node).isRequired,expandableContent:o().node})).isRequired,isExpandable:o().bool,emptyState:o().node.isRequired,sortParam:o().string,perPage:o().number,apply:o().func};const d=m;var v=n(9085),y=function(e){var t=e.page,n=e.perPage,r=e.itemCount,i=e.apply,o=e.filterConfig,u=e.activeFiltersConfig,c=e.onExport;return a().createElement(v.Z,{pagination:{isDisabled:0===r,itemCount:r,page:t,perPage:n,ouiaId:"pagination-top",onSetPage:function(e,t,n,r){return i({limit:n,offset:r})},onPerPageSelect:function(e,t){return i({limit:t,offset:0})}},filterConfig:o,activeFiltersConfig:u,exportConfig:c&&{isDisabled:0===r,onSelect:function(e,t){return c(t)}}})};y.propTypes={page:o().number,perPage:o().number,itemCount:o().number,apply:o().func,filterConfig:o().shape({items:o().array}),activeFiltersConfig:o().shape({filters:o().array}),onExport:o().func};const g=y;var b=n(8071),h=function(e){var t=e.page,n=e.perPage,r=e.itemCount,i=e.apply;return a().createElement(b.Pagination,{page:t,itemCount:r,perPage:n,variant:b.PaginationVariant.bottom,ouiaId:"pagination-bottom",isDisabled:0===r,onSetPage:function(e,t,n,r){return i({limit:n,offset:r})},onPerPageSelect:function(e,t){return i({limit:t,offset:0})}})};h.propTypes={page:o().number,perPage:o().number,itemCount:o().number,apply:o().func};const w=h;var E=function(e){var t=e.isLoading,n=e.isExpandable,i=e.rows,o=e.columns,u=e.filterConfig,c=void 0===u?[]:u,l=e.activeFiltersConfig,s=void 0===l?[]:l,p=e.meta,f=e.emptyState,m=e.apply,v=e.onExport,y=p.offset,b=p.limit,h=p.total_items,E=p.sort;return a().createElement(r.Fragment,null,a().createElement(g,{page:y/b+1,perPage:b,itemCount:h,apply:m,filterConfig:c,activeFiltersConfig:s,onExport:v}),a().createElement(d,{isLoading:t,columns:o,rows:i,isExpandable:n,emptyState:f,sortParam:E,perPage:b,apply:m}),a().createElement(w,{page:y/b+1,perPage:b,itemCount:h,apply:m}))};E.propTypes={isLoading:o().bool.isRequired,columns:o().arrayOf(o().shape({title:o().node.isRequired,sortParam:o().string})).isRequired,rows:o().arrayOf(o().shape({key:o().string.isRequired,cells:o().arrayOf(o().node).isRequired,expandableContent:o().node})).isRequired,isExpandable:o().bool,emptyState:o().node.isRequired,sortParam:o().string,filterConfig:o().object,activeFiltersConfig:o().object,meta:o().shape({offset:o().number,limit:o().number,total_items:o().number,sort:o().string}),apply:o().func,onExport:o().func};const P=E},2245:(e,t,n)=>{n.d(t,{Xt:()=>l,Zz:()=>s,l$:()=>p,ZO:()=>f,V2:()=>m,ZH:()=>d});var r=n(5861),a=n(4687),i=n.n(a),o=n(5564),u=n.n(o),c=u().create();c.interceptors.response.use(null,(function(e){var t,n,r;if(!u().isCancel(e)&&null!=e&&null!==(t=e.response)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.error)throw null==e||null===(r=e.response)||void 0===r?void 0:r.data.error;return e}));var l=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/cves",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/clusters",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/cves/".concat(n,"/exposed_clusters"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/cves/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/clusters/".concat(n,"/cves"),{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.get("/api/ocp-vulnerability/v1/clusters/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6743:(e,t,n)=>{n.d(t,{_:()=>y,eh:()=>E,S:()=>P});var r=n(5861),a=n(4942),i=n(885),o=n(4687),u=n.n(o),c=n(3264),l=n(7563),s=n(4494),p=n(8100),f=n(3215),m=n(5240);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=(0,c.useState)(localStorage.getItem(e)),n=(0,i.Z)(t,2),r=n[0],a=n[1];return[r,function(t){a(t),localStorage.setItem(e,t)}]};function g(e,t){var n=v({},e);return Object.entries(n).filter((function(e){var n=(0,i.Z)(e,2),r=n[0],a=n[1];return!t.includes(r)||""===a})).forEach((function(e){var t=(0,i.Z)(e,1)[0];return delete n[t]})),n}var b=[function(e){var t=function(e){var t=function(e){return"".concat(1==="".concat(e).length?"0":"").concat(e)},n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate();return"".concat(r,"-").concat(t(a),"-").concat(t(i))};if(e.published){var n=p.ab.find((function(t){return t.value===e.published}));e.published="".concat(n.from?t(n.from):"",",").concat(n.to?t(n.to):"")}return e},function(e){return e.affected_clusters&&(e.affected_clusters=p.f9.map((function(t){return e.affected_clusters.split(",").includes(t.value)?"true":"false"})).join(",")),e}],h=function(e){var t=v(v({},e),{},{total_items:void 0});return b.forEach((function(e){t=e(t)})),t},w=["limit","offset"],E=function(e){var t=e.allowedParams,n=e.initialParams,r=e.additionalParam,a=e.fetchAction,o=e.changeParamsAction,u=(0,s.I0)(),p=function(e){return[function(){var t=new URL(window.location);return g(l.parse(t.search),e)},function(e){var t=new URL(window.location),n=l.stringify(e);window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname,"?").concat(n))}]}(t),f=(0,i.Z)(p,2),m=f[0],d=f[1];(0,c.useEffect)((function(){var e=m();y(v(v({},n),e))}),[]);var y=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=m(),c=v(n?{}:v({},i),e);for(var l in c)w.includes(l)&&(c[l]=Number(c[l]));u(o(c));var s=g(c,t);u(a(h(s),r)),d(s)};return y},P=function(e,t,n){var a=(0,s.I0)(),i={offset:0,limit:100},o=function(){var o=(0,r.Z)(u().mark((function r(o,c){var l,s,p;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a((0,f.wN)({variant:"info",title:"Preparing export. Once complete, your download will start automatically."})),l=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",r.next=4,t(v(v({},h(c)),i),n);case 4:s=r.sent,p="json"===o?JSON.stringify(s):s,(0,m.Sv)(p,e+l,o),a((0,f.L1)()),a((0,f.wN)({variant:"success",title:"Downloading export.",description:"Temporary message to QA: Report currently contains only at most 100 items."}));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return o.apply(this,arguments)}}();return o}},7534:(e,t,n)=>{n.d(t,{EK:()=>i,Ew:()=>o,zi:()=>u,ZO:()=>c,FP:()=>l,ZH:()=>s,sK:()=>p,h:()=>f,fD:()=>m,W9:()=>d});var r=n(5910),a=n(2245),i=function(e){return{type:r.eG,meta:{timestamp:new Date},payload:function(){return a.Xt(e)}}},o=function(e){return{type:r.A_,meta:{timestamp:new Date},payload:function(){return a.Zz(e)}}},u=function(e,t){return{type:r.UU,meta:{timestamp:new Date},payload:function(){return a.l$(e,t)}}},c=function(e,t){return{type:r.Vh,meta:{timestamp:new Date},payload:function(){return a.ZO(e,t)}}},l=function(e,t){return{type:r.pq,meta:{timestamp:new Date},payload:function(){return a.V2(e,t)}}},s=function(e,t){return{type:r.H1,meta:{timestamp:new Date},payload:function(){return a.ZH(e,t)}}},p=function(e){return{type:r.pj,meta:{timestamp:new Date},payload:function(){return e}}},f=function(e){return{type:r.GA,meta:{timestamp:new Date},payload:function(){return e}}},m=function(e){return{type:r.ol,meta:{timestamp:new Date},payload:function(){return e}}},d=function(e){return{type:r.r9,meta:{timestamp:new Date},payload:function(){return e}}}}}]);
//# sourceMappingURL=../sourcemaps/1689.ab31a13ce0314da9063dcb666806e3eb.js.map