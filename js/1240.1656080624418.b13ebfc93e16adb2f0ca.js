"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[1240],{5412:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(3264),a=n.n(r),o=n(5697),i=n.n(o),s=n(8071),l=function(e){var t=e.page,n=e.perPage,r=e.itemCount,o=e.apply;return a().createElement(s.Pagination,{page:t,itemCount:r,perPage:n,variant:s.PaginationVariant.bottom,ouiaId:"pagination-bottom",isDisabled:0===r,onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}})};l.propTypes={page:i().number,perPage:i().number,itemCount:i().number,apply:i().func};const c=l},9767:(e,t,n)=>{n.d(t,{t:()=>O,Z:()=>w});var r=n(4942),a=n(7462),o=n(3366),i=n(5664),s=n(448),l=n.n(s),c=n(3264),u=n.n(c),p=n(4184),m=n.n(p),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};const y=function(e){var t,n=e.centered,r=e.className,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["centered","className"]),o=m()("ins-c-spinner",((t={})["ins-m-center"]=n,t),r);return u().createElement("div",f({role:"status",className:o},a),u().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};var d=n(5697),b=n.n(d),v=n(3193),g=n(8071),E=["isLoading","variant","children","size"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={spinner:"spinner",table:"table",compactTable:"compactTable",rectangle:"rectangle",inlineSkeleton:"inlineSkeleton",skeleton:"skeleton"},k=function(e){var t=e.isLoading,n=e.variant,r=e.children,s=e.size,c=function(e,t){if(null==e)return{};var n,r,a=(0,o.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,E);if(t)switch(n){case O.spinner:return u().createElement(y,(0,a.Z)({centered:!0},c));case O.table:return u().createElement(l(),c);case O.compactTable:return u().createElement(l(),(0,a.Z)({variant:v.TableVariant.compact},c));case O.rectangle:return u().createElement(i.Z,(0,a.Z)({shape:"square"},c));case O.inlineSkeleton:return u().createElement(g.Skeleton,(0,a.Z)({size:null!=s?s:i.i.lg},c,{style:P({display:"inline-block"},c.style)}));default:return u().createElement(i.Z,(0,a.Z)({size:null!=s?s:i.i.lg},c))}return r};k.propTypes={isLoading:b().bool,variant:b().oneOf(Object.keys(O)),style:b().object,children:b().node,size:b().string};const w=k},9167:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(2982),a=n(885),o=n(3264),i=n.n(o),s=n(5697),l=n.n(s),c=n(3193),u=n(448),p=n.n(u),m=function(e){var t=e.isLoading,n=e.columns,s=e.rows,l=e.isExpandable,u=void 0!==l&&l,m=e.emptyState,f=(0,o.useState)([]),y=(0,a.Z)(f,2),d=y[0],b=y[1],v=function(e){return d.includes(e)};return t?i().createElement(p(),{colSize:n.length,rowSize:20,variant:c.TableVariant.compact}):i().createElement(c.TableComposable,{variant:c.TableVariant.compact},i().createElement(c.Thead,null,i().createElement(c.Tr,null,u&&i().createElement(c.Th,null),n.map((function(e){return i().createElement(c.Th,{key:e.title,sort:e.sortParam},e.title)})))),i().createElement(c.Tbody,null,0===s.length?i().createElement(c.Tr,null,i().createElement(c.Td,{colSpan:100},m)):s.map((function(e,t){return i().createElement(o.Fragment,{key:t},i().createElement(c.Tr,null,u&&i().createElement(c.Td,{expand:{rowIndex:t,isExpanded:v(e.key),onToggle:function(){return function(e,t){return b((function(n){var a=n.filter((function(t){return t!==e}));return t?[].concat((0,r.Z)(a),[e]):a}))}(e.key,!v(e.key))}}}),e.cells.map((function(e,t){return i().createElement(c.Td,{key:t,dataLabel:n[t].title},e)}))),u&&i().createElement(c.Tr,{isExpanded:v(e.key)},i().createElement(c.Td,{colSpan:100},i().createElement(c.ExpandableRowContent,null,e.expandableContent))))}))))};m.propTypes={isLoading:l().bool.isRequired,columns:l().arrayOf(l().shape({title:l().node.isRequired,sortParam:l().string})).isRequired,rows:l().arrayOf(l().shape({key:l().string.isRequired,cells:l().arrayOf(l().node).isRequired,expandableContent:l().node})).isRequired,isExpandable:l().bool,emptyState:l().node.isRequired};const f=m},8282:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(3264),a=n.n(r),o=n(5697),i=n.n(o),s=n(8682),l=function(e){var t=e.page,n=e.perPage,r=e.itemCount,o=e.apply;return a().createElement(s.Z,{pagination:{isDisabled:0===r,itemCount:r,page:t,perPage:n,ouiaId:"pagination-top",onSetPage:function(e,t,n,r){return o({limit:n,offset:r})},onPerPageSelect:function(e,t){return o({limit:t,offset:0})}}})};l.propTypes={page:i().number,perPage:i().number,itemCount:i().number,apply:i().number};const c=l},8100:(e,t,n)=>{n.d(t,{Jy:()=>w,Y7:()=>T,IR:()=>O,LM:()=>j,P4:()=>k,ZZ:()=>C,R:()=>Z,_I:()=>P,Eu:()=>x,vD:()=>E,og:()=>h});var r=n(4942),a=n(3264),o=n.n(a),i=n(6530),s=n(5240),l=n(496),c=n(9492),u=n(885),p=n(5697),m=n.n(p),f=n(9210),y=n(8071),d=function(e){var t=e.count,n=e.linkTo;return o().createElement("div",{className:"shield-set"},Object.entries(h).map((function(e){var r=(0,u.Z)(e,2),a=r[0],s=r[1];return o().createElement(y.Tooltip,{key:a,content:"".concat(s.label," severity")},s.isInShieldSet&&(0===t[a]?o().createElement(i.Link,{className:"disabled-shield"},o().createElement(f.ZP,{style:{color:"var(--pf-global--disabled-color--200)"}}),o().createElement("span",null,"0")):o().createElement(i.Link,{key:a,to:n},o().createElement(f.ZP,{style:{color:s.iconColor}}),o().createElement("span",null,t[a]))))})))};d.propTypes={count:m().shape({critical:m().number,important:m().number,moderate:m().number,low:m().number}).isRequired,linkTo:m().string};const b=d;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E="vuln4shift:header-alert-dismissed",h={critical:{label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",isInShieldSet:!0},important:{label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",isInShieldSet:!0},moderate:{label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",isInShieldSet:!0},low:{label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",isInShieldSet:!0},unknown:{label:"Unknown"}},P=[{title:"CVE ID",sortParam:"synopsis"},{title:"Publish date",sortParam:"publish_date"},{title:"Severity",sortParam:"severity"},{title:"CVSS base score",sortParam:"cvss_score"},{title:"Clusters exposed",sortParam:"clusters_exposed"},{title:"Images exposed",sortParam:"images_exposed"}],O=[{title:"Name",sortParam:"display_name"},{title:"Status"},{title:"Type"},{title:"Version"},{title:"CVEs severity"},{title:"Provider",sortParam:"provider"}],k=[{title:"Name",sortParam:"display_name"},{title:"Status"},{title:"Type"},{title:"Version"},{title:"Provider",sortParam:"provider"}],w=[{title:"CVE ID",sortParam:"synopsis"},{title:"Publish date",sortParam:"publish_date"},{title:"Severity",sortParam:"severity"},{title:"CVSS base score",sortParam:"cvss_score"},{title:"Images exposed",sortParam:"images_exposed"}],S=function(e){return o().createElement(a.Fragment,null,o().createElement(y.TextContent,null,o().createElement(y.Text,{component:y.TextVariants.h6,style:{fontSize:14}},"CVE description")),e.description,o().createElement(i.Link,{to:"/cves/"+e.synopsis,className:"pf-u-mt-md pf-u-display-block"},"View more information about this CVE"))},x=function(e){return{key:e.synopsis,cells:[o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,s.Un)(e.publish_date),o().createElement(c.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,l.Z)(e.cvss2_score,e.cvss3_score,!0),o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.clusters_exposed),e.images_exposed],expandableContent:S(e)}},j=function(e){return{key:e.id,cells:[o().createElement(i.Link,{to:"/clusters/"+e.id,key:e.id},e.display_name),e.status_text,e.type,e.version,o().createElement(b,{key:e.id,count:g({},e.cves_severity),linkTo:"/clusters/".concat(e.id)}),e.provider]}},C=function(e){return{key:e.id,cells:[o().createElement(i.Link,{to:"/clusters/"+e.id,key:e.id},e.display_name),e.status_text,e.type,e.version,e.provider]}},T=function(e){return{key:e.synopsis,cells:[o().createElement(i.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,s.Un)(e.publish_date),o().createElement(c.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,l.Z)(e.cvss2_score,e.cvss3_score,!0),e.images_exposed],expandableContent:S(e)}},Z=["limit","offset","sort"]},2110:(e,t,n)=>{n.d(t,{sK:()=>P,FP:()=>E,ZH:()=>h,Ew:()=>b,zi:()=>v,ZO:()=>g,EK:()=>d});var r=n(5910),a=n(5861),o=n(7757),i=n.n(o),s=n(5564),l=n.n(s),c=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters",{params:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves/".concat(t,"/exposed_clusters"),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/cves/".concat(t),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters/".concat(t,"/cves"),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l().get("/api/ocp-vulnerability/v1/clusters/".concat(t),{params:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(e){return{type:r.eG,meta:{timestamp:new Date},payload:function(){return c(e)}}},b=function(e){return{type:r.A_,meta:{timestamp:new Date},payload:function(){return u(e)}}},v=function(e,t){return{type:r.UU,meta:{timestamp:new Date},payload:function(){return p(e,t)}}},g=function(e,t){return{type:r.Vh,meta:{timestamp:new Date},payload:function(){return m(e,t)}}},E=function(e,t){return{type:r.pq,meta:{timestamp:new Date},payload:function(){return f(e,t)}}},h=function(e,t){return{type:r.H1,meta:{timestamp:new Date},payload:function(){return y(e,t)}}},P=function(e){return{type:r.pj,meta:{timestamp:new Date},payload:function(){return e}}}}}]);
//# sourceMappingURL=../sourcemaps/1240.01a4a54a8cf770c0ad81ba83158b9753.js.map