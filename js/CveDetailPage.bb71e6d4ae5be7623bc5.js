"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[560],{470:(e,t,a)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=a(5183).IU(t.mq),t.ZP=t.LA},620:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(3264),r=a.n(n),l=a(5356);const c=function(){return r().createElement(l.Bullseye,null,r().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large},r().createElement(l.Title,{headingLevel:"h5",size:"lg"},"No matching clusters found"),r().createElement(l.EmptyStateBody,null,"To continue, edit your filter settings and search again.")))}},9767:(e,t,a)=>{a.d(t,{t:()=>L,Z:()=>O});var n=a(4942),r=a(7462),l=a(3366),c=a(5664),i=a(448),o=a.n(i),s=a(5893),m=a(4184),u=a.n(m),p=function(){return p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)};const d=function(e){var t,a=e.centered,n=e.className,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["centered","className"]),l=u()("ins-c-spinner",((t={})["ins-m-center"]=a,t),n);return(0,s.jsx)("div",p({role:"status",className:l},r,{children:(0,s.jsx)("span",p({className:"pf-u-screen-reader"},{children:"Loading..."}))}))};var v=a(5697),b=a.n(v),f=a(3264),y=a.n(f),h=a(7891),E=a(5356),g=["isLoading","variant","children","size"];function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={spinner:"spinner",table:"table",compactTable:"compactTable",rectangle:"rectangle",inlineSkeleton:"inlineSkeleton",skeleton:"skeleton"},N=function(e){var t=e.isLoading,a=e.variant,n=e.children,i=e.size,s=function(e,t){if(null==e)return{};var a,n,r=(0,l.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,g);if(t)switch(a){case L.spinner:return y().createElement(d,(0,r.Z)({centered:!0},s));case L.table:return y().createElement(o(),s);case L.compactTable:return y().createElement(o(),(0,r.Z)({variant:h.TableVariant.compact},s));case L.rectangle:return y().createElement(c.Z,(0,r.Z)({shape:"square"},s));case L.inlineSkeleton:return y().createElement(E.Skeleton,(0,r.Z)({size:null!=i?i:c.i.lg},s,{style:S({display:"inline-block"},s.style)}));default:return y().createElement(c.Z,(0,r.Z)({size:null!=i?i:c.i.lg},s))}return n};N.propTypes={isLoading:b().bool,variant:b().oneOf(Object.keys(L)),style:b().object,children:b().node,size:b().string};const O=N},5863:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(3264),r=a.n(n),l=a(4748),c=a(9376),i=a(9173),o=a(5356),s=a(6530),m=a(9492),u=a(885),p=a(5795),d=a(7891),v=a(5697),b=a.n(v),f=a(9767),y={AV:{name:"Attack vector",values:{N:"Network",A:"Adjacent",L:"Local",P:"Physical"}},AC:{name:"Attack complexity",values:{L:"Low",H:"High"}},PR:{name:"Privileges required",values:{N:"None",L:"Low",H:"High"}},UI:{name:"User interaction",values:{N:"None",R:"Required"}},S:{name:"Scope",values:{U:"Unchanged",C:"Changed"}},C:{name:"Confidentiality",values:{N:"None",L:"Low",H:"High"}},I:{name:"Integrity",values:{N:"None",L:"Low",H:"High"}},A:{name:"Availability",values:{N:"None",L:"Low",H:"High"}}},h={AV:{name:"Access vector",values:{N:"Network",A:"Adjacent Network",L:"Local"}},AC:{name:"Access complexity",values:{N:"None",L:"Low",H:"High"}},Au:{name:"Authentication",values:{M:"Multiple",S:"Single",N:"None"}},C:{name:"Confidentiality impact",values:{C:"Complete",P:"Partial",N:"None"}},I:{name:"Integrity impact",values:{C:"Complete",P:"Partial",N:"None"}},A:{name:"Availability impact",values:{C:"Complete",P:"Partial",N:"None"}}},E=function(e){var t=e.cvss2Vector,a=e.cvss3Vector,n=e.score,l=e.isLoading,c=e.hasMetadata,i=t?"CVSS 2.0":"CVSS 3.0",s=t||a,m=function(e,t){var a={};return null==e||e.split("/").forEach((function(e){var n,r,l,c=e.split(":"),i=(0,u.Z)(c,2),o=i[0],s=i[1],m=null===(n=t[o])||void 0===n?void 0:n.name,p=null!==(r=null===(l=t[o])||void 0===l?void 0:l.values[s])&&void 0!==r?r:"N/A";m&&(a[m]=p)})),a}(s,t?h:y);return delete m.cvssVersion,c?r().createElement(o.TextContent,null,r().createElement(o.Popover,{id:"popover-cvss",position:"bottom",maxWidth:"100%",enableFlip:!0,headerContent:"".concat(i," vector breakdown"),bodyContent:r().createElement(f.Z,{isLoading:l,colSize:2,rowSize:8,variant:f.t.compactTable},s?r().createElement(d.Table,{"aria-label":"Metric breakdown",variant:d.TableVariant.compact,gridBreakPoint:"",cells:["Metric","Value"],rows:Object.entries(m)},r().createElement(d.TableHeader,null),r().createElement(d.TableBody,null)):"N/A")},r().createElement(o.Text,{component:o.TextVariants.h6,className:"pointer pf-u-mb-xs"},i," base score",r().createElement(p.ZP,{color:"var(--pf-global--secondary-color--100)",className:"pf-u-ml-xs"}))),r().createElement(f.Z,{isLoading:l,variant:f.t.inlineSkeleton,width:"360px"},r().createElement("span",{className:"pf-u-mr-md",ouiaId:"cve-detail-cvss-score"},n),r().createElement("span",{id:"cvss-vector-content",ouiaId:"cve-detail-cvss-score-breakdown"},"Vector:"," "+(null==s?void 0:s.substring(s.indexOf("/")+1))||0))):r().createElement(o.TextContent,null,r().createElement(o.Text,{component:o.TextVariants.h6,className:"pf-u-mb-xs"},"CVSS base score"),r().createElement("span",{ouiaId:"cve-detail-cvss-score"},"Unknown"))};E.propTypes={cvss2Vector:b().string,cvss3Vector:b().string,score:b().any.isRequired,isLoading:b().bool.isRequired,hasMetadata:b().bool.isRequired};const g=E;var P=a(9494),S=a(470),L=a(8216),N=a(7534),O=a(5240),w=a(496),k=a(8100);const Z=function(){var e,t=(0,s.useRouteMatch)(),a=(0,L.I0)(),l=(0,L.v9)((function(e){return e.CveDetailStore})),u=l.cve,p=l.isDetailLoading,d=u.description,v=u.severity,b=u.publish_date,y=u.cvss2_score,h=u.cvss3_score,E=u.cvss2_metrics,Z=u.cvss3_metrics,x="unknown"!==d;return(0,n.useEffect)((function(){a((0,N.ZO)(t.params.cveId))}),[]),r().createElement(c.Z,{style:{paddingBottom:0}},r().createElement(o.Breadcrumb,{className:"pf-u-mb-md"},r().createElement(o.BreadcrumbItem,null,r().createElement(s.Link,{to:"/"},"Vulnerability")),r().createElement(o.BreadcrumbItem,null,r().createElement(s.Link,{to:"/cves"},"CVEs")),r().createElement(o.BreadcrumbItem,null,t.params.cveId)),r().createElement(i.Z,{title:r().createElement(n.Fragment,null,r().createElement("span",{className:"pf-u-mr-md"},t.params.cveId)),className:"pf-u-mb-sm"}),r().createElement(o.Grid,{hasGutter:!0},r().createElement(o.GridItem,{md:8,sm:12},r().createElement(o.Stack,{hasGutter:!0},x&&r().createElement(o.StackItem,{className:"pf-u-mt-sm"},"Publish date: ",r().createElement(f.Z,{isLoading:p,variant:f.t.inlineSkeleton,width:"100px",fontSize:"sm",style:{verticalAlign:-4}},r().createElement("span",{ouiaId:"cve-detail-publish-date"},(0,O.Un)(b)))),r().createElement(o.StackItem,null,r().createElement(f.Z,{isLoading:p,variant:f.t.rectangle,style:{height:"132px",width:"100%"}},x?r().createElement(o.TextContent,{style:{textAlign:"justify"},ouiaId:"cve-detail-description"},r().createElement(o.Text,{component:o.TextVariants.p},d)):r().createElement(P.Z,{variant:o.EmptyStateVariant.full,style:{maxWidth:800,padding:16}}))),r().createElement(o.StackItem,{className:"pf-u-mt-sm pf-u-mb-md"},r().createElement("a",{href:"https://access.redhat.com/security/cve/".concat(t.params.cveId),target:"__blank",rel:"noopener noreferrer"},"View in Red Hat CVE database ",r().createElement(S.ZP,null))))),r().createElement(o.GridItem,{md:4,sm:12,className:"pf-u-mt-sm pf-u-ml-sm"},r().createElement(o.Stack,{hasGutter:!0},r().createElement(o.StackItem,null,r().createElement(o.TextContent,null,r().createElement(o.Text,{component:o.TextVariants.h6,className:"pointer pf-u-mb-xs"},"Severity")),r().createElement(f.Z,{isLoading:p,variant:f.t.inlineSkeleton,width:"100px",fontSize:"sm",style:{verticalAlign:-4}},r().createElement("b",null,r().createElement("span",{style:{color:x&&(null===(e=k.og.find((function(e){return e.label===v})))||void 0===e?void 0:e.textColor)},ouiaId:"cve-detail-severity"},r().createElement(m.Z,{impact:x?v:"Unknown",hasLabel:!0}))))),r().createElement(o.StackItem,null,r().createElement(g,{isLoading:p,score:(0,w.Z)(null!=h?h:y),cvss2Vector:E,cvss3Vector:Z,hasMetadata:x}))))),r().createElement(o.Tabs,{activeKey:0,hasBorderBottom:!1},r().createElement(o.Tab,{eventKey:0,title:r().createElement(o.TabTitleText,null,"Exposed clusters")})))};var x=a(620),V=a(7903),C=a(6743),A=a(5862),I=a(5084),T=a(2245),j=a(4724),H=a(4439);const _=function(){var e=(0,s.useRouteMatch)(),t=(0,L.v9)((function(e){return e.CveDetailStore})),a=t.clusters,n=t.isTableLoading,l=t.meta,c=t.error,i=(0,C.eh)({allowedParams:k.Wb,initialParams:l,additionalParam:e.params.cveId,fetchAction:N.zi,changeParamsAction:N.fD}),o=l.search,m=l.status,p=l.dynamic_status_options,d=l.version,v=l.dynamic_version_options,b=l.provider,f=l.dynamic_provider_options,y=(0,C.S)({filenamePrefix:k.bs,fetchAction:T.l$,fetchActionParam:e.params.cveId,allowedParams:k.Wb}),h=[(0,A.Z)({urlParam:"search",label:"Name",placeholder:"Filter by name",value:o,apply:i,chipLabel:"Search term"}),(0,j.Z)({urlParam:"status",label:"Status",value:m,items:(0,H.uniqBy)(k.a1.concat((null!=p?p:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by status",apply:i,chipLabel:"Status"}),(0,j.Z)({urlParam:"version",label:"Version",value:d,items:(0,H.uniqBy)(k.v0.concat((null!=v?v:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by version",apply:i,chipLabel:"Version"}),(0,j.Z)({urlParam:"provider",label:"Provider",value:b,items:(0,H.uniqBy)(k.uk.concat((null!=f?f:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by provider",apply:i,chipLabel:"Provider"})],E=(0,I.KW)(h,l,k.tW,i),g=(0,u.Z)(E,2),P=g[0],S=g[1];return r().createElement(V.Z,{isLoading:n,rows:a.map((function(e){return(0,k.ZZ)(e)})),columns:k.P4,filterConfig:P,activeFiltersConfig:S,meta:l,error:c,emptyState:r().createElement(x.Z,null),apply:i,onExport:function(e){return y(e,l)}})};var B=a(5670);const q=function(){var e=(0,L.v9)((function(e){return e.CveDetailStore})),t=e.error,a=e.cve;return a.synopsis&&insights.chrome.updateDocumentTitle("".concat(a.synopsis," - CVEs - OCP Vulnerability | Red Hat Insights | console.redhat.com")),r().createElement(B.Z,{error:t},r().createElement(Z,null),r().createElement(l.ZP,null,r().createElement(_,null)))}}}]);
//# sourceMappingURL=../sourcemaps/CveDetailPage.5a2b4eee4daf03e194d09c625d065546.js.map