(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[4212,7673],{49644:(e,t,s)=>{"use strict";s.d(t,{J:()=>u});var i=s(65353),a=s(28416),r=s(12455),n=s(38296),o=s(68778),l=s(43047),c=s(69957);const d={success:o.ZP,error:l.ZP,warning:c.ZP},u=e=>{var{status:t,customIcon:s,className:o}=e,l=(0,i._T)(e,["status","customIcon","className"]);const c=t&&d[t];return a.createElement("span",Object.assign({className:(0,n.i)(r.Z.formControlIcon,t&&r.Z.modifiers.status,o)},l),s||a.createElement(c,null))}},92607:(e,t,s)=>{"use strict";s.d(t,{BJ:()=>a,oi:()=>m,x:()=>i,y5:()=>h});var i,a,r=s(65353),n=s(28416),o=s(12455),l=s(38296),c=s(1774),d=s(80164),u=s(62472),p=s(84709),f=s(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(i||(i={})),function(e){e.default="default",e.plain="plain"}(a||(a={}));class h extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,d.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:s,onFocus:i}=this.props;(t||s)&&this.restoreText(),i&&i(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:s,onBlur:i}=this.props;(t||s)&&this.handleResize(),i&&i(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,u.ql)(h.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:i,value:a,placeholder:d,validated:p,onChange:h,onFocus:v,onBlur:x,isLeftTruncated:T,isStartTruncated:g,isExpanded:b,expandedProps:y,readOnly:I,readOnlyVariant:C,isRequired:R,isDisabled:z,customIcon:Z,ouiaId:S,ouiaSafe:E}=e,O=(0,r._T)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),L=["success","error","warning"].includes(p),w=y?{"aria-expanded":null==y?void 0:y.isExpanded,"aria-controls":null==y?void 0:y.ariaControls,role:"combobox"}:{};return n.createElement("span",{className:(0,l.i)(o.Z.formControl,C&&o.Z.modifiers.readonly,"plain"===C&&o.Z.modifiers.plain,z&&o.Z.modifiers.disabled,(b||(null==y?void 0:y.isExpanded))&&o.Z.modifiers.expanded,Z&&o.Z.modifiers.icon,L&&o.Z.modifiers[p],s)},n.createElement("input",Object.assign({},O,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:i,value:this.sanitizeInputValue(a),"aria-invalid":O["aria-invalid"]?O["aria-invalid"]:p===c.LD.error},w,{required:R,disabled:z,readOnly:!!C||I,ref:t||this.inputRef,placeholder:d},(0,u.dp)(m.displayName,void 0!==S?S:this.state.ouiaStateId,E))),(Z||L)&&n.createElement("span",{className:(0,l.i)(o.Z.formControlUtilities)},Z&&n.createElement(f.J,{customIcon:Z}),L&&n.createElement(f.J,{status:p})))}}h.displayName="TextInputBase",h.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:i.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const m=n.forwardRef(((e,t)=>n.createElement(h,Object.assign({},e,{innerRef:t}))));m.displayName="TextInput"},96990:(e,t,s)=>{"use strict";s.r(t),s.d(t,{TextInput:()=>i.oi,TextInputBase:()=>i.y5,TextInputReadOnlyVariant:()=>i.BJ,TextInputTypes:()=>i.x});var i=s(92607)},68778:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(40400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},69957:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});const i=(0,s(40400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},12455:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i}),s(90479);const i={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},90479:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4212.c66ba04a54a01ef27fd65f8da48df646.js.map