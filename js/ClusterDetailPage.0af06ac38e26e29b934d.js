"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[641],{50470:(e,t,n)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=n(35183).IU(t.mq),t.ZP=t.LA},26899:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(85893),i=r(n(93264)),l=n(39371);t.default=function(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,o=e.extraTitle,c=e.tooltipProps,u=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===u.toString()?"invalid":r;return(0,a.jsx)(i.default.Fragment,{children:(0,l.dateByType)(s,c,o)(u)})}},39371:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.dateByType=t.dateStringByType=t.addTooltip=void 0;var a=n(85893),i=n(6848),l=36e5,o=24*l,c=30*o,u=365*o,s=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return s(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return s(Math.round(e/c),"month")}},{rightBound:c,description:function(e){return s(Math.round(e/o),"day")}},{rightBound:o,description:function(e){return s(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return s(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()};t.addTooltip=function(e,t,n,l){return void 0===l&&(l=""),(0,a.jsx)(i.Tooltip,r({},n,{content:(0,a.jsxs)("div",{children:[l,e]})},{children:t}))},t.dateStringByType=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},t.dateByType=function(e,n,r){return{exact:function(n){return(0,t.dateStringByType)(e)(n)},onlyDate:function(n){return(0,t.dateStringByType)(e)(n)},relative:function(i){return(0,t.addTooltip)((0,t.dateStringByType)("exact")(i),(0,a.jsx)("span",{children:(0,t.dateStringByType)(e)(i)}),n,r)},invalid:function(){return"Invalid date"}}[e]}},3459:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(93264),a=n.n(r),i=n(6848),l=n(50470);const o=function(){var e=a().createElement("a",{href:"https://access.redhat.com/security/security-updates/#/cve",target:"__blank",rel:"noopener noreferrer",className:"nowrap"},"Red Hat CVE Database ",a().createElement(l.ZP,null)),t=a().createElement("a",{href:"https://access.redhat.com/security/team/contact/",target:"__blank",rel:"noopener noreferrer",className:"nowrap"},"Red Hat Product Security ",a().createElement(l.ZP,null));return a().createElement(i.Bullseye,null,a().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},a().createElement(i.Title,{headingLevel:"h5",size:"lg"},"No matching CVEs found"),a().createElement(i.EmptyStateBody,null,"To continue, edit your filter settings and search again.",a().createElement("br",null),a().createElement("br",null),"As of today, Insights Vulnerability shows CVEs with Errata. It is possible the CVE you are searching for does not yet have an associated Errata. Please check the ",e," or if you would like more information, contact ",t)))}},39767:(e,t,n)=>{n.d(t,{t:()=>x,Z:()=>j});var r=n(4942),a=n(87462),i=n(63366),l=n(35664),o=n(60448),c=n.n(o),u=n(85893),s=n(94184),m=n.n(s),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};const p=function(e){var t,n=e.centered,r=e.className,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["centered","className"]),i=m()("ins-c-spinner",((t={})["ins-m-center"]=n,t),r);return(0,u.jsx)("div",f({role:"status",className:i},a,{children:(0,u.jsx)("span",f({className:"pf-u-screen-reader"},{children:"Loading..."}))}))};var d=n(45697),y=n.n(d),b=n(93264),h=n.n(b),g=n(60271),v=n(6848),E=["isLoading","variant","children","size"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={spinner:"spinner",table:"table",compactTable:"compactTable",rectangle:"rectangle",inlineSkeleton:"inlineSkeleton",skeleton:"skeleton"},P=function(e){var t=e.isLoading,n=e.variant,r=e.children,o=e.size,u=function(e,t){if(null==e)return{};var n,r,a=(0,i.Z)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,E);if(t)switch(n){case x.spinner:return h().createElement(p,(0,a.Z)({centered:!0},u));case x.table:return h().createElement(c(),u);case x.compactTable:return h().createElement(c(),(0,a.Z)({variant:g.TableVariant.compact},u));case x.rectangle:return h().createElement(l.Z,(0,a.Z)({shape:"square"},u));case x.inlineSkeleton:return h().createElement(v.Skeleton,(0,a.Z)({size:null!=o?o:l.i.lg},u,{style:O({display:"inline-block"},u.style)}));default:return h().createElement(l.Z,(0,a.Z)({size:null!=o?o:l.i.lg},u))}return r};P.propTypes={isLoading:y().bool,variant:y().oneOf(Object.keys(x)),style:y().object,children:y().node,size:y().string};const j=P},79171:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var r=n(93264),a=n.n(r),i=n(14748),l=n(6848),o=n(70885),c=n(98100),u=n(39704),s=n(97534),m=n(16530),f=n(76743),p=n(5084),d=n(95862),y=n(79499),b=n(24724),h=n(71341),g=n(57903),v=n(3459),E=n(82245);const S=function(){var e=(0,m.useRouteMatch)(),t=(0,u.v9)((function(e){return e.ClusterDetailStore})),n=t.cves,r=t.isTableLoading,i=t.meta,l=t.error,S=(0,f.eh)({allowedParams:c.wG,initialParams:i,additionalParam:e.params.clusterId,fetchAction:s.FP,changeParamsAction:s.W9}),O=i.search,x=i.cvss_score,P=i.severity,j=i.published,w=(0,p.MG)(x),Z=(0,o.Z)(w,2),L=Z[0],T=Z[1],V=(0,f.S)({filenamePrefix:c.l3,fetchAction:E.V2,fetchActionParam:e.params.clusterId,allowedParams:c.wG}),I=[(0,d.Z)({urlParam:"search",label:"CVE",placeholder:"Search ID or description",value:O,apply:S,chipLabel:"Search term"}),(0,h.Z)({urlParam:"published",label:"Publish date",value:j,items:c.ab,placeholder:"Filter by publish date",apply:S,chipLabel:"Publish date"}),(0,b.Z)({urlParam:"severity",label:"Severity",value:P,items:c.og,placeholder:"Filter by severity",apply:S,chipLabel:"Severity"}),(0,y.Z)({urlParam:"cvss_score",label:"CVSS score",minMaxLabels:{min:"Min CVSS",max:"Max CVSS"},range:{min:0,max:10},value:{min:L,max:T},placeholder:"Filter by CVSS score range",apply:S,chipLabel:"CVSS base score"})],k=(0,p.KW)(I,i,c.LH,S),C=(0,o.Z)(k,2),D=C[0],_=C[1];return a().createElement(g.Z,{isLoading:r,isExpandable:!0,rows:n.map((function(e){return(0,c.Y7)(e)})),columns:c.Jy,filterConfig:D,activeFiltersConfig:_,meta:i,error:l,emptyState:a().createElement(v.Z,null),apply:S,onExport:function(e){return V(e,i)}})};var O=n(89376),x=n(39173),P=n(26899),j=n.n(P),w=n(39767);const Z=function(){var e=(0,m.useRouteMatch)(),t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.ClusterDetailStore})),i=n.cluster,o=n.isDetailLoading;(0,r.useEffect)((function(){t((0,s.ZH)(e.params.clusterId))}),[]);var c=a().createElement(w.Z,{variant:w.t.inlineSkeleton,width:"300px",fontSize:"lg",isLoading:o,style:{verticalAlign:-4}},i.display_name);return a().createElement(O.Z,null,a().createElement(l.Breadcrumb,{className:"pf-u-mb-md"},a().createElement(l.BreadcrumbItem,null,a().createElement(m.Link,{to:"/"},"Vulnerability")),a().createElement(l.BreadcrumbItem,null,a().createElement(m.Link,{to:"/clusters"},"Clusters")),a().createElement(l.BreadcrumbItem,null,a().createElement(w.Z,{variant:w.t.inlineSkeleton,width:"200px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},i.display_name))),a().createElement(x.Z,{title:c,className:"pf-u-mb-sm"}),a().createElement("div",null,"UUID: ",a().createElement(w.Z,{variant:w.t.inlineSkeleton,width:"300px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},a().createElement("span",{ouiaId:"cluster-detail-id"},e.params.clusterId))),a().createElement("div",null,"Last seen: ",a().createElement(w.Z,{variant:w.t.inlineSkeleton,width:"200px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},a().createElement("span",{ouiaId:"cluster-detail-last-seen"},a().createElement(j(),{date:i.last_seen,type:"exact"})))))};var L=n(65670),T=n(55140);const V=function(){var e=(0,T.Z)(),t=(0,u.v9)((function(e){return e.ClusterDetailStore})),n=t.error,o=t.cluster;return(0,r.useEffect)((function(){o.display_name&&e.updateDocumentTitle("".concat(o.display_name," - Clusters - OCP Vulnerability | Red Hat Insights | console.redhat.com"))}),[o.display_name]),a().createElement(L.Z,{error:n},a().createElement(Z,null),a().createElement(i.ZP,null,a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.h2,className:"pf-u-mb-md"},"CVEs")),a().createElement(S,null)))}},71341:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(4942),a=n(83237);const i=function(e){var t,n=e.urlParam,i=e.label,l=e.value,o=e.placeholder,c=e.items,u=e.apply,s=e.chipLabel,m=function(e){var t;u((t={},(0,r.Z)(t,n,e),(0,r.Z)(t,"offset",0),t))};return{filterConfig:{label:i,type:a.Y.radio,urlParam:n,key:n,filterValues:{onChange:function(e,t){m(t)},items:c,value:l||c[0].value,placeholder:o}},activeFiltersConfig:{isShown:!!l,onDelete:function(){m(void 0)},key:n,category:s,chips:null===(t=c.filter((function(e){return e.value===l})))||void 0===t?void 0:t.map((function(e){return{name:e.label,value:e.value}}))}}}},79499:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(4942),a=n(70885),i=n(93264),l=n.n(i),o=n(23279),c=n.n(o),u=n(87462),s=n(45697),m=n.n(s),f=n(6848);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.setValues,n=e.range,o=e.minMaxLabels,c=e.selectProps,s=e.inputValue,m=e.setInputValue,p=(0,i.useState)(!1),y=(0,a.Z)(p,2),b=y[0],h=y[1],g=function(e,t){var r={min:Number(e.min),max:Number(e.max)};return""!=e[t]&&r[t]<=n.max&&r[t]>=n.min&&r.min<=r.max},v=function(e,n){var a=d(d({},s),{},(0,r.Z)({},n,e));g(a,"min")&&g(a,"max")&&t({min:Number(a.min),max:Number(a.max)}),m(a)},E=l().createElement(f.Split,{className:"pf-u-m-md"},l().createElement(f.SplitItem,null,l().createElement("span",{style:{fontSize:"var(--pf-global--FontSize--sm)"}},o.min),l().createElement("br",null),l().createElement(f.TextInput,{type:"number",onChange:function(e){return v(e,"min")},validated:g(s,"min")?"default":"error",className:"range-filter-input",id:"range-filter-input-min",value:s.min})),l().createElement(f.SplitItem,null,l().createElement("br",null),l().createElement("span",{className:"pf-u-m-sm"},"-")),l().createElement(f.SplitItem,null,l().createElement("span",{style:{fontSize:"var(--pf-global--FontSize--sm)"}},o.max),l().createElement("br",null),l().createElement(f.TextInput,{type:"number",onChange:function(e){return v(e,"max")},validated:g(s,"max")?"default":"error",className:"range-filter-input",id:"range-filter-input-max",value:s.max})));return l().createElement(f.Select,(0,u.Z)({variant:"panel","aria-label":"Select Input",customContent:E,onToggle:function(){return h(!b)},isOpen:b,width:"auto"},c))};y.propTypes={setValues:m().func,range:m().shape({min:m().number,max:m().number}),minMaxLabels:m().shape({min:m().node,max:m().node}),selectProps:m().object,inputValue:m().shape({min:m().string,max:m().string}),setInputValue:m().func};const b=y;var h=n(83237),g=Object.prototype.hasOwnProperty;function v(e,t,n){for(n of e.keys())if(E(n,t))return n}function E(e,t){var n,r,a;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&E(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((a=r)&&"object"==typeof a&&!(a=v(t,a)))return!1;if(!t.has(a))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((a=r[0])&&"object"==typeof a&&!(a=v(t,a)))return!1;if(!E(r[1],t.get(a)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"==typeof e){for(n in r=0,e){if(g.call(e,n)&&++r&&!g.call(t,n))return!1;if(!(n in t)||!E(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!=e&&t!=t}const S=function(e){var t,n,o=e.urlParam,u=e.label,s=e.minMaxLabels,m=e.range,f=e.value,p=e.placeholder,d=e.apply,y=e.chipLabel,g=e.chipDecimalPlaces,v=void 0===g?1:g,S=(0,i.useState)((function(){return c()((function(e){var t;e.min>=m.min&&e.max<=m.max&&e.min<=e.max&&d((t={},(0,r.Z)(t,o,"".concat(e.min,",").concat(e.max)),(0,r.Z)(t,"offset",0),t))}),600)})),O=(0,a.Z)(S,1)[0],x=(0,i.useState)(),P=(0,a.Z)(x,2),j=P[0],w=P[1];return t=function(){w({min:(null!=f?f:m).min.toString(),max:(null!=f?f:m).max.toString()})},n=[f],i.useEffect(t,function(e){var t=i.useRef(e),n=i.useRef(0);return E(e,t.current)||(t.current=e,n.current+=1),i.useMemo((function(){return t.current}),[n.current])}(n)),{filterConfig:{label:u,type:h.Y.custom,key:o,urlParam:o,filterValues:{children:l().createElement(b,{setValues:O,range:m,className:"pf-u-mb-0",selectProps:{placeholderText:p},minMaxLabels:s,inputValue:j,setInputValue:w})}},activeFiltersConfig:{isShown:f.min!==m.min||f.max!==m.max,onDelete:function(){var e;d((e={},(0,r.Z)(e,o,void 0),(0,r.Z)(e,"offset",0),e))},key:o,category:y,chips:[{name:f.min.toFixed(v)+" - "+f.max.toFixed(v)}]}}}},63366:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/ClusterDetailPage.9ad86bf8679280137fdd3c8bcf375ec8.js.map