(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[6990,4212,7673],{49644:(e,t,s)=>{"use strict";s.d(t,{J:()=>u});var i=s(65353),r=s(28416),n=s(12455),a=s(38296),o=s(68778),l=s(43047),c=s(69957);const d={success:o.ZP,error:l.ZP,warning:c.ZP},u=e=>{var{status:t,customIcon:s,className:o}=e,l=(0,i._T)(e,["status","customIcon","className"]);const c=t&&d[t];return r.createElement("span",Object.assign({className:(0,a.i)(n.Z.formControlIcon,t&&n.Z.modifiers.status,o)},l),s||r.createElement(c,null))}},92607:(e,t,s)=>{"use strict";s.d(t,{BJ:()=>r,oi:()=>m,x:()=>i,y5:()=>f});var i,r,n=s(65353),a=s(28416),o=s(12455),l=s(38296),c=s(1774),d=s(80164),u=s(62472),p=s(84709),h=s(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class f extends a.Component{constructor(e){super(e),this.inputRef=a.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,d.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:s,onFocus:i}=this.props;(t||s)&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:s,onBlur:i}=this.props;(t||s)&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,u.ql)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:i,value:r,placeholder:d,validated:p,onChange:f,onFocus:v,onBlur:g,isLeftTruncated:x,isStartTruncated:b,isExpanded:y,expandedProps:T,readOnly:I,readOnlyVariant:C,isRequired:z,isDisabled:w,customIcon:R,ouiaId:E,ouiaSafe:O}=e,Z=(0,n._T)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),N=["success","error","warning"].includes(p),S=T?{"aria-expanded":null==T?void 0:T.isExpanded,"aria-controls":null==T?void 0:T.ariaControls,role:"combobox"}:{};return a.createElement("span",{className:(0,l.i)(o.Z.formControl,C&&o.Z.modifiers.readonly,"plain"===C&&o.Z.modifiers.plain,w&&o.Z.modifiers.disabled,(y||(null==T?void 0:T.isExpanded))&&o.Z.modifiers.expanded,R&&o.Z.modifiers.icon,N&&o.Z.modifiers[p],s)},a.createElement("input",Object.assign({},Z,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:i,value:this.sanitizeInputValue(r),"aria-invalid":Z["aria-invalid"]?Z["aria-invalid"]:p===c.LD.error},S,{required:z,disabled:w,readOnly:!!C||I,ref:t||this.inputRef,placeholder:d},(0,u.dp)(m.displayName,void 0!==E?E:this.state.ouiaStateId,O))),(R||N)&&a.createElement("span",{className:(0,l.i)(o.Z.formControlUtilities)},R&&a.createElement(h.J,{customIcon:R}),N&&a.createElement(h.J,{status:p})))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:i.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const m=a.forwardRef(((e,t)=>a.createElement(f,Object.assign({},e,{innerRef:t}))));m.displayName="TextInput"},96990:(e,t,s)=>{"use strict";s.r(t),s.d(t,{TextInput:()=>i.oi,TextInputBase:()=>i.y5,TextInputReadOnlyVariant:()=>i.BJ,TextInputTypes:()=>i.x});var i=s(92607)},84709:(e,t,s)=>{"use strict";s.d(t,{p:()=>r});var i=s(80164);const r=(e,t,s)=>{let r;if(i.Nq){const{ResizeObserver:i}=window;if(e&&i){const n=new i((e=>{s?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));n.observe(e),r=()=>n.unobserve(e)}else window.addEventListener("resize",t),r=()=>window.removeEventListener("resize",t)}return()=>{r&&r()}}},40400:(e,t,s)=>{"use strict";s.d(t,{I:()=>a});var i=s(65353),r=s(28416);let n=0;function a({name:e,xOffset:t=0,yOffset:s=0,width:a,height:o,svgPath:l}){var c;return c=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+n++}render(){const e=this.props,{title:n,className:c}=e,d=(0,i._T)(e,["title","className"]),u=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(n),h=[t,s,a,o].join(" ");return r.createElement("svg",Object.assign({className:u,viewBox:h,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&r.createElement("title",{id:this.id},n),r.createElement("path",{d:l}))}},c.displayName=e,c}},68778:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(40400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},43047:(e,t,s)=>{"use strict";s.d(t,{$O:()=>i,ZP:()=>r});const i=(0,s(40400).I)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),r=i},69957:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(40400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},12455:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(90479);const i={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},90479:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6990.5a9eb7d0c39d2d9e0002757759b870ef.js.map