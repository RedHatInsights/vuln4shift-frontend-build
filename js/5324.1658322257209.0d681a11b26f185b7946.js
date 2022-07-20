"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[5324],{5412:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(3264),a=n.n(r),o=n(5697),i=n.n(o),s=n(8071),l=function(e){var t=e.page,n=e.perPage,r=e.itemCount,o=e.apply;return a().createElement(s.Pagination,{page:t,itemCount:r,perPage:n,variant:s.PaginationVariant.bottom,ouiaId:"pagination-bottom",isDisabled:0===r,onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}})};l.propTypes={page:i().number,perPage:i().number,itemCount:i().number,apply:i().func};const c=l},9167:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2982),a=n(885),o=n(3264),i=n.n(o),s=n(5697),l=n.n(s),c=n(3193),u=n(448),p=n.n(u),m=function(e){var t=e.isLoading,n=e.columns,s=e.rows,l=e.isExpandable,u=void 0!==l&&l,m=e.emptyState,d=e.sortParam,y=e.apply,f=(0,o.useState)([]),v=(0,a.Z)(f,2),b=v[0],g=v[1],h=function(e){return b.includes(e)},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-publish_date",n="-"===t[0]?c.SortByDirection.desc:c.SortByDirection.asc;t=t.replace(/^(-|\+)/,"").split(",")[0];var r=e.findIndex((function(e){return e.sortParam===t}));return{index:r,direction:n,defaultDirection:c.SortByDirection.desc}};return t?i().createElement(p(),{colSize:n.length,rowSize:20,variant:c.TableVariant.compact}):i().createElement(c.TableComposable,{variant:c.TableVariant.compact,isStickyHeader:!0},i().createElement(c.Thead,null,i().createElement(c.Tr,null,u&&i().createElement(c.Th,null),n.map((function(e,t){return i().createElement(c.Th,{key:e.title,sort:e.sortParam&&(r=t,{sortBy:E(n,d),onSort:function(e,t,a){var o=n[r].sortParam;a===c.SortByDirection.desc&&(o="-"+o),y({sort:o})},columnIndex:r})},e.title);var r})))),i().createElement(c.Tbody,null,0===s.length?i().createElement(c.Tr,null,i().createElement(c.Td,{colSpan:100},m)):s.map((function(e,t){return i().createElement(o.Fragment,{key:t},i().createElement(c.Tr,null,u&&i().createElement(c.Td,{expand:{rowIndex:t,isExpanded:h(e.key),onToggle:function(){return function(e,t){return g((function(n){var a=n.filter((function(t){return t!==e}));return t?[].concat((0,r.Z)(a),[e]):a}))}(e.key,!h(e.key))}}}),e.cells.map((function(e,t){return i().createElement(c.Td,{key:t,dataLabel:n[t].title},e)}))),u&&i().createElement(c.Tr,{isExpanded:h(e.key)},i().createElement(c.Td,{colSpan:100},i().createElement(c.ExpandableRowContent,null,e.expandableContent))))}))))};m.propTypes={isLoading:l().bool.isRequired,columns:l().arrayOf(l().shape({title:l().node.isRequired,sortParam:l().string})).isRequired,rows:l().arrayOf(l().shape({key:l().string.isRequired,cells:l().arrayOf(l().node).isRequired,expandableContent:l().node})).isRequired,isExpandable:l().bool,emptyState:l().node.isRequired,sortParam:l().string,apply:l().func};const d=m},8282:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(3264),a=n.n(r),o=n(5697),i=n.n(o),s=n(9085),l=function(e){var t=e.page,n=e.perPage,r=e.itemCount,o=e.apply,i=e.filterConfig;return a().createElement(s.Z,{pagination:{isDisabled:0===r,itemCount:r,page:t,perPage:n,ouiaId:"pagination-top",onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}},filterConfig:i})};l.propTypes={page:i().number,perPage:i().number,itemCount:i().number,apply:i().func,filterConfig:i().shape({items:i().array})};const c=l},8100:(e,t,n)=>{n.d(t,{Jy:()=>_,Y7:()=>L,IR:()=>x,LM:()=>S,P4:()=>C,ZZ:()=>Z,R:()=>I,_I:()=>P,Eu:()=>D,vD:()=>E,ab:()=>k,og:()=>w});var r=n(4942),a=n(3264),o=n.n(a),i=n(6530),s=n(5240),l=n(496),c=n(9492),u=n(5697),p=n.n(u),m=n(9210),d=n(8071),y=function(e){var t=e.count,n=e.linkTo;return o().createElement("div",{className:"shield-set"},w.map((function(e){return o().createElement(d.Tooltip,{key:e.value,content:"".concat(e.label," severity")},e.hasIcon&&(0===t[e.value]?o().createElement(i.Link,{className:"disabled-shield"},o().createElement(m.ZP,{style:{color:"var(--pf-global--disabled-color--200)"}}),o().createElement("span",null,"0")):o().createElement(i.Link,{key:e.value,to:n},o().createElement(m.ZP,{style:{color:e.iconColor}}),o().createElement("span",null,t[e.value]))))})))};y.propTypes={count:p().shape({critical:p().number,important:p().number,moderate:p().number,low:p().number}).isRequired,linkTo:p().string};const f=y;var v=n(2410),b=n(5084);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E="vuln4shift:header-alert-dismissed",k=[{value:"all",label:"All"},{value:"last7days",label:"Last 7 days",from:(0,b.YD)(new Date,7)},{value:"last30days",label:"Last 30 days",from:(0,b.YD)(new Date,30)},{value:"last90days",label:"Last 90 days",from:(0,b.YD)(new Date,90)},{value:"lastYear",label:"Last year",from:(0,b.qc)(new Date,1)},{value:"moreThanYear",label:"More than 1 year ago",to:(0,b.qc)(new Date,1)}],w=[{value:"critical",label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",hasIcon:!0},{value:"important",label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",hasIcon:!0},{value:"moderate",label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",hasIcon:!0},{value:"low",label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",hasIcon:!0},{value:"none",label:"Unknown"}],P=[{title:"CVE ID",sortParam:"synopsis"},{title:"Publish date",sortParam:"publish_date"},{title:"Severity",sortParam:"severity"},{title:"CVSS base score",sortParam:"cvss_score"},{title:"Clusters exposed",sortParam:"clusters_exposed"},{title:"Images exposed",sortParam:"images_exposed"}],x=[{title:"Name"},{title:"Status"},{title:"Type"},{title:"Version"},{title:"CVEs severity"},{title:"Provider"},{title:"Last seen"}],C=[{title:"Name"},{title:"Status"},{title:"Type"},{title:"Version"},{title:"Provider"},{title:"Last seen"}],_=[{title:"CVE ID"},{title:"Publish date"},{title:"Severity"},{title:"CVSS base score"},{title:"Images exposed"}],T=function(e){return o().createElement(a.Fragment,null,o().createElement(d.TextContent,null,o().createElement(d.Text,{component:d.TextVariants.h6,style:{fontSize:14}},"CVE description")),e.description,o().createElement(i.Link,{to:"/cves/"+e.synopsis,className:"pf-u-mt-md pf-u-display-block"},"View more information about this CVE"))},D=function(e){return{key:e.synopsis,cells:[o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,s.Un)(e.publish_date),o().createElement(c.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,l.Z)(e.cvss2_score,e.cvss3_score,!0),o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.clusters_exposed),e.images_exposed],expandableContent:T(e)}},S=function(e){return{key:e.id,cells:[o().createElement(i.Link,{to:"/clusters/"+e.id,key:e.id},e.display_name),e.status_text,e.type,e.version,o().createElement(f,{key:e.id,count:h({},e.cves_severity),linkTo:"/clusters/".concat(e.id)}),e.provider,o().createElement(v.Z,{key:e.id,date:e.last_seen,type:"relative"})]}},Z=function(e){return{key:e.id,cells:[o().createElement(i.Link,{to:"/clusters/"+e.id,key:e.id},e.display_name),e.status_text,e.type,e.version,e.provider,o().createElement(v.Z,{key:e.id,date:e.last_seen,type:"relative"})]}},L=function(e){return{key:e.synopsis,cells:[o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,s.Un)(e.publish_date),o().createElement(c.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,l.Z)(e.cvss2_score,e.cvss3_score,!0),e.images_exposed],expandableContent:T(e)}},O=["limit","offset","sort"],I=[].concat(O,["search","published","severity","cvss_score","clusters_exposed"]);[].concat(O,["search","cve_severity"]),[].concat(O,["search"]),[].concat(O,["search","published","severity","cvss_score","images_exposed"])},2110:(e,t,n)=>{n.d(t,{sK:()=>k,FP:()=>h,ZH:()=>E,Ew:()=>v,zi:()=>b,ZO:()=>g,EK:()=>f});var r=n(5910),a=n(5861),o=n(4687),i=n.n(o),s=n(5564),l=n.n(s),c=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves/".concat(t,"/exposed_clusters"),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves/".concat(t),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters/".concat(t,"/cves"),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters/".concat(t),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(e){return{type:r.eG,meta:{timestamp:new Date},payload:function(){return c(e)}}},v=function(e){return{type:r.A_,meta:{timestamp:new Date},payload:function(){return u(e)}}},b=function(e,t){return{type:r.UU,meta:{timestamp:new Date},payload:function(){return p(e,t)}}},g=function(e,t){return{type:r.Vh,meta:{timestamp:new Date},payload:function(){return m(e,t)}}},h=function(e,t){return{type:r.pq,meta:{timestamp:new Date},payload:function(){return d(e,t)}}},E=function(e,t){return{type:r.H1,meta:{timestamp:new Date},payload:function(){return y(e,t)}}},k=function(e){return{type:r.pj,meta:{timestamp:new Date},payload:function(){return e}}}}}]);
//# sourceMappingURL=../sourcemaps/5324.b1295a95b3ca18c5870aa11bf0a38265.js.map