"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[26],{50470:(e,t,r)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=r(35183).IU(t.mq),t.ZP=t.LA},3459:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(93264),a=r.n(n),l=r(6848),i=r(50470);const o=function(){var e=a().createElement("a",{href:"https://access.redhat.com/security/security-updates/#/cve",target:"__blank",rel:"noopener noreferrer",className:"nowrap"},"Red Hat CVE Database ",a().createElement(i.ZP,null)),t=a().createElement("a",{href:"https://access.redhat.com/security/team/contact/",target:"__blank",rel:"noopener noreferrer",className:"nowrap"},"Red Hat Product Security ",a().createElement(i.ZP,null));return a().createElement(l.Bullseye,null,a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},a().createElement(l.Title,{headingLevel:"h5",size:"lg"},"No matching CVEs found"),a().createElement(l.EmptyStateBody,null,"To continue, edit your filter settings and search again.",a().createElement("br",null),a().createElement("br",null),"As of today, Insights Vulnerability shows CVEs with Errata. It is possible the CVE you are searching for does not yet have an associated Errata. Please check the ",e," or if you would like more information, contact ",t)))}},70897:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(70885),a=r(93264),l=r.n(a),i=r(6848),o=r(55795),c=r(50470),s=r(14748),u=r(89376),m=r(39173),f=r(98100),p=r(39704),h=r(97534),b=r(3459),d=r(76743),y=r(95862),v=r(79499),g=r(5084),E=r(24724),x=r(71341),S=r(57903),P=r(82245);const V=function(){var e=(0,p.v9)((function(e){return e.CveListStore})),t=e.cves,r=e.isLoading,a=e.meta,i=e.error,o=(0,d.eh)({allowedParams:f.R,initialParams:a,fetchAction:h.EK,changeParamsAction:h.sK}),c=a.search,s=a.cvss_score,u=a.severity,m=a.published,V=a.affected_clusters,C=(0,g.MG)(s),Z=(0,n.Z)(C,2),w=Z[0],L=Z[1],O=(0,d.S)({filenamePrefix:f._l,fetchAction:P.Xt,allowedParams:f.R}),A=[(0,y.Z)({urlParam:"search",label:"CVE",placeholder:"Search ID or description",value:c,apply:o,chipLabel:"Search term"}),(0,x.Z)({urlParam:"published",label:"Publish date",value:m,items:f.ab,placeholder:"Filter by publish date",apply:o,chipLabel:"Publish date"}),(0,E.Z)({urlParam:"severity",label:"Severity",value:u,items:f.og,placeholder:"Filter by severity",apply:o,chipLabel:"Severity"}),(0,v.Z)({urlParam:"cvss_score",label:"CVSS score",minMaxLabels:{min:"Min CVSS",max:"Max CVSS"},range:{min:0,max:10},value:{min:w,max:L},placeholder:"Filter by CVSS score range",apply:o,chipLabel:"CVSS base score"}),(0,E.Z)({urlParam:"affected_clusters",label:"Exposed clusters",value:V,items:f.f9,placeholder:"Filter by exposed clusters",apply:o,chipLabel:"Exposed clusters"})],I=(0,g.KW)(A,a,f.of,o),k=(0,n.Z)(I,2),_=k[0],j=k[1];return l().createElement(S.Z,{isLoading:r,isExpandable:!0,rows:t.map((function(e){return(0,f.Eu)(e)})),columns:f._I,filterConfig:_,activeFiltersConfig:j,meta:a,error:i,emptyState:l().createElement(b.Z,null),apply:o,onExport:function(e){return O(e,a)}})};var C=r(55140);const Z=function(){var e=(0,C.Z)(),t=(0,d._)(f.vD),r=(0,n.Z)(t,2),p=r[0],h=r[1];(0,a.useEffect)((function(){e.updateDocumentTitle("CVEs - Vulnerability Dashboard | Red Hat Insights | console.redhat.com")}),[]);var b=l().createElement(i.Popover,{hasAutoWidth:!0,maxWidth:"380px",position:"right",enableFlip:!0,bodyContent:l().createElement(a.Fragment,null,"The Vulnerability service identifies CVEs with errata that may affect your Insights-connected OpenShift clusters. Vulnerability information applies for OCP4.8+ version only."),footerContent:l().createElement("a",{href:"https://access.redhat.com/documentation/en-us/openshift_cluster_manager/2022",target:"__blank",rel:"noopener noreferrer"},"Learn more ",l().createElement(c.ZP,null))},l().createElement("span",null,"CVEs",l().createElement(o.ZP,{color:"var(--pf-global--secondary-color--100)",className:"pf-u-ml-sm pointer cves-header-questionmark",style:{verticalAlign:"0"}})));return l().createElement(a.Fragment,null,l().createElement(u.Z,null,l().createElement(m.Z,{title:b,className:"pf-u-mb-sm"}),!p&&l().createElement(i.Alert,{variant:i.AlertVariant.info,isInline:!0,className:"pf-u-mt-md",title:"Vulnerability information applies to OCP4.8+ version only",actionClose:l().createElement(i.AlertActionCloseButton,{onClose:function(){return h(!0)}})})),l().createElement(s.ZP,null,l().createElement(i.Alert,{variant:i.AlertVariant.info,isInline:!0,title:"Check out Red Hat's fully managed Kubernetes-native security platform"},"Performs in-depth vulnerability analysis and protects containerized applications across the full application life cycle.",l().createElement("br",null),l().createElement("br",null),l().createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.isBeta()?"/preview":"","/application-services/acs/overview")},"Visit Red Hat Advanced Cluster Security Cloud Service (RHACSCS)",l().createElement(c.ZP,{className:"pf-u-ml-sm"}))),l().createElement(V,null)))}},71341:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4942),a=r(83237);const l=function(e){var t,r=e.urlParam,l=e.label,i=e.value,o=e.placeholder,c=e.items,s=e.apply,u=e.chipLabel,m=function(e){var t;s((t={},(0,n.Z)(t,r,e),(0,n.Z)(t,"offset",0),t))};return{filterConfig:{label:l,type:a.Y.radio,urlParam:r,key:r,filterValues:{onChange:function(e,t){m(t)},items:c,value:i||c[0].value,placeholder:o}},activeFiltersConfig:{isShown:!!i,onDelete:function(){m(void 0)},key:r,category:u,chips:null===(t=c.filter((function(e){return e.value===i})))||void 0===t?void 0:t.map((function(e){return{name:e.label,value:e.value}}))}}}},79499:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(4942),a=r(70885),l=r(93264),i=r.n(l),o=r(23279),c=r.n(o),s=r(87462),u=r(45697),m=r.n(u),f=r(6848);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.setValues,r=e.range,o=e.minMaxLabels,c=e.selectProps,u=e.inputValue,m=e.setInputValue,p=(0,l.useState)(!1),b=(0,a.Z)(p,2),d=b[0],y=b[1],v=function(e,t){var n={min:Number(e.min),max:Number(e.max)};return""!=e[t]&&n[t]<=r.max&&n[t]>=r.min&&n.min<=n.max},g=function(e,r){var a=h(h({},u),{},(0,n.Z)({},r,e));v(a,"min")&&v(a,"max")&&t({min:Number(a.min),max:Number(a.max)}),m(a)},E=i().createElement(f.Split,{className:"pf-u-m-md"},i().createElement(f.SplitItem,null,i().createElement("span",{style:{fontSize:"var(--pf-global--FontSize--sm)"}},o.min),i().createElement("br",null),i().createElement(f.TextInput,{type:"number",onChange:function(e){return g(e,"min")},validated:v(u,"min")?"default":"error",className:"range-filter-input",id:"range-filter-input-min",value:u.min})),i().createElement(f.SplitItem,null,i().createElement("br",null),i().createElement("span",{className:"pf-u-m-sm"},"-")),i().createElement(f.SplitItem,null,i().createElement("span",{style:{fontSize:"var(--pf-global--FontSize--sm)"}},o.max),i().createElement("br",null),i().createElement(f.TextInput,{type:"number",onChange:function(e){return g(e,"max")},validated:v(u,"max")?"default":"error",className:"range-filter-input",id:"range-filter-input-max",value:u.max})));return i().createElement(f.Select,(0,s.Z)({variant:"panel","aria-label":"Select Input",customContent:E,onToggle:function(){return y(!d)},isOpen:d,width:"auto"},c))};b.propTypes={setValues:m().func,range:m().shape({min:m().number,max:m().number}),minMaxLabels:m().shape({min:m().node,max:m().node}),selectProps:m().object,inputValue:m().shape({min:m().string,max:m().string}),setInputValue:m().func};const d=b;var y=r(83237),v=Object.prototype.hasOwnProperty;function g(e,t,r){for(r of e.keys())if(E(r,t))return r}function E(e,t){var r,n,a;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&E(e[n],t[n]););return-1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e){if((a=n)&&"object"==typeof a&&!(a=g(t,a)))return!1;if(!t.has(a))return!1}return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e){if((a=n[0])&&"object"==typeof a&&!(a=g(t,a)))return!1;if(!E(n[1],t.get(a)))return!1}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return-1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}if(!r||"object"==typeof e){for(r in n=0,e){if(v.call(e,r)&&++n&&!v.call(t,r))return!1;if(!(r in t)||!E(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!=e&&t!=t}const x=function(e){var t,r,o=e.urlParam,s=e.label,u=e.minMaxLabels,m=e.range,f=e.value,p=e.placeholder,h=e.apply,b=e.chipLabel,v=e.chipDecimalPlaces,g=void 0===v?1:v,x=(0,l.useState)((function(){return c()((function(e){var t;e.min>=m.min&&e.max<=m.max&&e.min<=e.max&&h((t={},(0,n.Z)(t,o,"".concat(e.min,",").concat(e.max)),(0,n.Z)(t,"offset",0),t))}),600)})),S=(0,a.Z)(x,1)[0],P=(0,l.useState)(),V=(0,a.Z)(P,2),C=V[0],Z=V[1];return t=function(){Z({min:(null!=f?f:m).min.toString(),max:(null!=f?f:m).max.toString()})},r=[f],l.useEffect(t,function(e){var t=l.useRef(e),r=l.useRef(0);return E(e,t.current)||(t.current=e,r.current+=1),l.useMemo((function(){return t.current}),[r.current])}(r)),{filterConfig:{label:s,type:y.Y.custom,key:o,urlParam:o,filterValues:{children:i().createElement(d,{setValues:S,range:m,className:"pf-u-mb-0",selectProps:{placeholderText:p},minMaxLabels:u,inputValue:C,setInputValue:Z})}},activeFiltersConfig:{isShown:f.min!==m.min||f.max!==m.max,onDelete:function(){var e;h((e={},(0,n.Z)(e,o,void 0),(0,n.Z)(e,"offset",0),e))},key:o,category:b,chips:[{name:f.min.toFixed(g)+" - "+f.max.toFixed(g)}]}}}}}]);