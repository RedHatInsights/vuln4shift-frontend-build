"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[9053],{777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(5183).createIcon(t.lb),t.ZP=t.wl},7895:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3264),a=n.n(r),o=n(8071),l=n(777);const i=function(){return a().createElement(o.Bullseye,null,a().createElement(o.EmptyState,{variant:o.EmptyStateVariant.large},a().createElement(o.EmptyStateIcon,{icon:l.ZP,size:"sm"}),a().createElement(o.Title,{headingLevel:"h5",size:"lg"},"No clusters yet"),a().createElement(o.EmptyStateBody,null,"To get started, create or register your cluster to get information from Insights Vulnerability."),a().createElement(o.Button,{variant:"primary",component:"a",href:"https://console.redhat.com/openshift/create/",target:"_blank"},"Create Cluster"),a().createElement("br",null),a().createElement(o.Button,{variant:"link",component:"a",href:"https://console.redhat.com/openshift/register/",target:"_blank",className:"pf-u-mt-md"},"Register Cluster")))}},7596:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(885),a=n(3264),o=n.n(a),l=n(8071),i=n(4748),c=n(123),s=n(9173),u=n(8100),f=n(4494),m=n(2110),p=n(7895),d=n(5862),h=n(6743),v=n(6643);const g=function(){var e=(0,f.v9)((function(e){return e.ClusterListStore})),t=e.clusters,n=e.isLoading,r=e.meta,a=(0,h.eh)({allowedParams:u.aB,defaultParams:r,fetchAction:m.Ew,changeParamsAction:m.h}),l=r.search,i=[(0,d.Z)({urlParam:"search",label:"Name",placeholder:"Filter by name",value:l,apply:a,chipLabel:"Search term"})];return o().createElement(v.Z,{isLoading:n,rows:t.map((function(e){return(0,u.LM)(e)})),columns:u.IR,filters:i,meta:r,emptyState:o().createElement(p.Z,null),apply:a})},y=function(){var e=(0,h._)(u.vD),t=(0,r.Z)(e,2),n=t[0],f=t[1];return o().createElement(a.Fragment,null,o().createElement(c.Z,null,o().createElement(s.Z,{title:"Vulnerable clusters",className:"pf-u-mb-sm"}),!n&&o().createElement(l.Alert,{variant:l.AlertVariant.info,isInline:!0,className:"pf-u-mt-md",title:"Vulnerability information applies to OCP4.8+ version only",actionClose:o().createElement(l.AlertActionCloseButton,{onClose:function(){return f(!0)}})})),o().createElement(i.Z,null,o().createElement(g,null)))}},5862:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(4942),a=n(885),o=n(3264),l=n(3279),i=n.n(l),c=n(3237);const s=function(e){var t=e.urlParam,n=e.label,l=e.placeholder,s=e.value,u=e.apply,f=e.chipLabel,m=(0,o.useState)(),p=(0,a.Z)(m,2),d=p[0],h=p[1],v=(0,o.useState)((function(){return i()((function(e){var n;void 0!==e&&u((n={},(0,r.Z)(n,t,e),(0,r.Z)(n,"offset",0),n))}),400)})),g=(0,a.Z)(v,1)[0];(0,o.useEffect)((function(){return h(s)}),[s]);var y={type:c.Y.text,label:n,key:t,filterValues:{"aria-label":"search-field",id:"search-".concat(n.id),onChange:function(e,t){h(t),g(t)},placeholder:l,value:d}};return{filterConfig:y,activeFiltersConfig:{isShown:!!s,onDelete:function(){var e;return u((e={},(0,r.Z)(e,t,void 0),(0,r.Z)(e,"offset",0),e))},key:t,category:f,chips:[{name:s}]}}}},6643:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(885),a=n(3264),o=n.n(a),l=n(5697),i=n.n(l),c=n(4146),s=n(3764),u=n(5412),f=n(5084),m=function(e){var t=e.isLoading,n=e.isExpandable,l=e.rows,i=e.columns,m=e.filters,p=void 0===m?[]:m,d=e.meta,h=e.emptyState,v=e.apply,g=d.offset,y=d.limit,b=d.total_items,E=d.sort,Z=(0,f.KW)(p),P=(0,r.Z)(Z,2),w=P[0],O=P[1];return o().createElement(a.Fragment,null,o().createElement(s.Z,{page:g/y+1,perPage:y,itemCount:b,apply:v,filterConfig:w,activeFiltersConfig:O}),o().createElement(c.Z,{isLoading:t,columns:i,rows:l,isExpandable:n,emptyState:h,sortParam:E,apply:v}),o().createElement(u.Z,{page:g/y+1,perPage:y,itemCount:b,apply:v}))};m.propTypes={isLoading:i().bool.isRequired,columns:i().arrayOf(i().shape({title:i().node.isRequired,sortParam:i().string})).isRequired,rows:i().arrayOf(i().shape({key:i().string.isRequired,cells:i().arrayOf(i().node).isRequired,expandableContent:i().node})).isRequired,isExpandable:i().bool,emptyState:i().node.isRequired,sortParam:i().string,filters:i().array,meta:i().shape({offset:i().number,limit:i().number,total_items:i().number,sort:i().string}),apply:i().func};const p=m},6743:(e,t,n)=>{n.d(t,{_:()=>m,eh:()=>v});var r=n(4942),a=n(885),o=n(3264),l=n(7563),i=n(4494),c=n(2140),s=n(8100);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=(0,o.useState)(localStorage.getItem(e)),n=(0,a.Z)(t,2),r=n[0],l=n[1];return[r,function(t){l(t),localStorage.setItem(e,t)}]};function p(e,t){return Object.entries(e).filter((function(e){var n=(0,a.Z)(e,2),r=n[0],o=n[1];return!t.includes(r)||""===o})).forEach((function(t){var n=(0,a.Z)(t,1)[0];return delete e[n]})),e}var d=function(e){var t=new URL(window.location);return[p(l.parse(t.search),e),function(n){var r=l.stringify(p(n,e));window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname,"?").concat(r))}]},h=[function(e){var t=function(e){var t=function(e){return"".concat(1==="".concat(e).length?"0":"").concat(e)},n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,o=n.getDate();return"".concat(r,"-").concat(t(a),"-").concat(t(o))};if(e.published){var n=s.ab.find((function(t){return t.value===e.published}));e.published="".concat(n.from?t(n.from):"",",").concat(n.to?t(n.to):"")}return e}],v=function(e){var t=e.allowedParams,n=e.defaultParams,r=e.additionalParam,l=e.fetchAction,s=e.changeParamsAction,u=(0,i.I0)(),m=d(t),p=(0,a.Z)(m,1)[0];(0,o.useEffect)((function(){v(f(f({},n),p))}),[]),(0,c.ZP)((function(){u(l(function(e){var t=f({},e);return h.forEach((function(e){t=e(t)})),t}(p),r))}),[p]);var v=function(e){var n=d(t),r=(0,a.Z)(n,2),o=r[0];(0,r[1])(f(f({},o),e)),u(s(f(f({},o),e)))};return v}}}]);
//# sourceMappingURL=../sourcemaps/ClusterListPage.22a6ded80228df4bd620e045149f620d.js.map