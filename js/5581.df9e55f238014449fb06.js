(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[5581,7685],{37685:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>N,AlertActionCloseButton:()=>x,AlertActionLink:()=>_,AlertContext:()=>g,AlertGroup:()=>M,AlertVariant:()=>L});var n=a(65353),i=a(28416),o=a(38296);a(81754);const l={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var r=a(68778),s=a(43047),c=a(69957),m=a(53688),p=a(34143);const d={success:r.ZP,danger:s.ZP,warning:c.ZP,info:m.ZP,custom:p.ZP},u=e=>{var{variant:t,customIcon:a,className:r=""}=e,s=(0,n._T)(e,["variant","customIcon","className"]);const c=d[t];return c?i.createElement("div",Object.assign({},s,{className:(0,o.i)(l.alertIcon,r)}),a||i.createElement(c,null)):null};var f=a(80164),v=a(62472);const g=i.createContext(null),h="--pf-v5-c-alert__title--max-lines";var b=a(75824),E=a(47173),C=a(93174);const T=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:r,isExpanded:s=!1}=e,c=(0,n._T)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:m,variantLabel:p}=i.useContext(g);return i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:r,"aria-expanded":s,"aria-label":""===t?`Toggle ${a||p} alert: ${m}`:t},c),i.createElement("span",{className:(0,o.i)(l.alertToggleIcon)},i.createElement(C.default,{"aria-hidden":"true"})))};var L;T.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(L||(L={}));const N=e=>{var{variant:t=L.custom,isInline:a=!1,isPlain:r=!1,isLiveRegion:s=!1,variantLabel:c=`${(0,f.kC)(t)} alert:`,actionClose:m,actionLinks:p,title:d,component:E="h4",children:C="",className:y="",ouiaId:x,ouiaSafe:_=!0,timeout:A=!1,timeoutAnimation:I=3e3,onTimeout:k=(()=>{}),truncateTitle:M=0,tooltipPosition:P,customIcon:w,isExpandable:O=!1,toggleAriaLabel:D=`${(0,f.kC)(t)} alert details`,onMouseEnter:S=(()=>{}),onMouseLeave:z=(()=>{}),id:R}=e,Z=(0,n._T)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const W=(0,v.S$)(N.displayName,x,_,t),j=i.createElement(i.Fragment,null,i.createElement("span",{className:"pf-v5-screen-reader"},c),d),B=i.useRef(null),$=E,H=i.useRef(),[V,F]=(0,i.useState)(!1);i.useEffect((()=>{if(!B.current||!M)return;B.current.style.setProperty(h,M.toString());const e=B.current&&B.current.offsetHeight<B.current.scrollHeight;V!==e&&F(e)}),[B,M,V]);const[G,q]=(0,i.useState)(!1),[K,U]=(0,i.useState)(!0),[J,Q]=(0,i.useState)(),[X,Y]=(0,i.useState)(),ee=G&&K&&!J&&!X;i.useEffect((()=>{const e=!0===A?8e3:Number(A);if(e>0){const t=setTimeout((()=>q(!0)),e);return()=>clearTimeout(t)}}),[A]),i.useEffect((()=>{const e=()=>{H.current&&(H.current.contains(document.activeElement)?(Y(!0),U(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),i.useEffect((()=>{if(!1===X||!1===J){const e=setTimeout((()=>U(!0)),I);return()=>clearTimeout(e)}}),[X,J,I]),i.useEffect((()=>{ee&&k()}),[ee,k]);const[te,ae]=(0,i.useState)(!1);if(ee)return null;const ne=i.createElement($,Object.assign({},V&&{tabIndex:0},{ref:B,className:(0,o.i)(l.alertTitle,M&&l.modifiers.truncate)}),j);return i.createElement("div",Object.assign({ref:H,className:(0,o.i)(l.alert,a&&l.modifiers.inline,r&&l.modifiers.plain,O&&l.modifiers.expandable,te&&l.modifiers.expanded,l.modifiers[t],y)},W,s&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),U(!1),S(e)},onMouseLeave:e=>{Q(!1),z(e)},id:R},Z),O&&i.createElement(g.Provider,{value:{title:d,variantLabel:c}},i.createElement("div",{className:(0,o.i)(l.alertToggle)},i.createElement(T,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":D}))),i.createElement(u,{variant:t,customIcon:w}),V?i.createElement(b.u,{content:j,position:P},ne):ne,m&&i.createElement(g.Provider,{value:{title:d,variantLabel:c}},i.createElement("div",{className:(0,o.i)(l.alertAction)},m)),C&&(!O||O&&te)&&i.createElement("div",{className:(0,o.i)(l.alertDescription)},C),p&&i.createElement("div",{className:(0,o.i)(l.alertActionGroup)},p))};N.displayName="Alert";var y=a(24307);const x=e=>{var{className:t,onClose:a=(()=>{}),"aria-label":o="",variantLabel:l}=e,r=(0,n._T)(e,["className","onClose","aria-label","variantLabel"]);return i.createElement(g.Consumer,null,(({title:e,variantLabel:n})=>i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:a,"aria-label":""===o?`Close ${l||n} alert: ${e}`:o,className:t},r),i.createElement(y.ZP,null))))};x.displayName="AlertActionCloseButton";const _=e=>{var{className:t="",children:a}=e,o=(0,n._T)(e,["className","children"]);return i.createElement(E.zx,Object.assign({variant:E.Wu.link,isInline:!0,className:t},o),a)};_.displayName="AlertActionLink";var A=a(31051);a(81235);const I="pf-m-toast",k=e=>{var{className:t,children:a,isToast:l,isLiveRegion:r,onOverflowClick:s,overflowMessage:c}=e,m=(0,n._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return i.createElement("ul",Object.assign({role:"list","aria-live":r?"polite":null,"aria-atomic":!r&&null,className:(0,o.i)("pf-v5-c-alert-group",t,l?I:"")},m),i.Children.toArray(a).map(((e,t)=>{var a;return i.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),c&&i.createElement("li",null,i.createElement("button",{onClick:s,className:(0,o.i)("pf-v5-c-alert-group__overflow-button")},c)))};k.displayName="AlertGroupInline";class M extends i.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:o,isLiveRegion:l,onOverflowClick:r,overflowMessage:s,"aria-label":c,appendTo:m}=e,p=(0,n._T)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),d=i.createElement(k,Object.assign({onOverflowClick:r,className:t,isToast:o,isLiveRegion:l,overflowMessage:s,"aria-label":c},p),a);if(!this.props.isToast)return d;const u=this.state.container;return f.Nq&&u?A.createPortal(d,u):null}}M.displayName="AlertGroup"},75824:(e,t,a)=>{"use strict";a.d(t,{u:()=>_,D:()=>N});var n=a(65353),i=a(28416);a(49854);const o="pf-m-top",l="pf-m-top-left",r="pf-m-top-right",s="pf-m-bottom",c="pf-m-bottom-left",m="pf-m-bottom-right",p="pf-m-left",d="pf-m-left-top",u="pf-m-left-bottom",f="pf-m-right",v="pf-m-right-top",g="pf-m-right-bottom",h="pf-m-text-align-left";var b=a(38296);const E=e=>{var{className:t,children:a,isLeftAligned:o}=e,l=(0,n._T)(e,["className","children","isLeftAligned"]);return i.createElement("div",Object.assign({className:(0,b.i)("pf-v5-c-tooltip__content",o&&h,t)},l),a)};E.displayName="TooltipContent";const C=e=>{var{className:t}=e,a=(0,n._T)(e,["className"]);return i.createElement("div",Object.assign({className:(0,b.i)("pf-v5-c-tooltip__arrow",t)},a))};C.displayName="TooltipArrow";var T=a(1774);const L={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var N,y=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(N||(N={}));let x=1;const _=e=>{var{content:t,position:a="top",trigger:h="mouseenter focus",isVisible:N=!1,isContentLeftAligned:_=!1,enableFlip:A=!0,className:I="",entryDelay:k=300,exitDelay:M=300,appendTo:P=(()=>document.body),zIndex:w=9999,minWidth:O,maxWidth:D=L.value,distance:S=15,aria:z="describedby",flipBehavior:R=["top","right","bottom","left","top","right","bottom"],id:Z="pf-tooltip-"+x++,children:W,animationDuration:j=300,triggerRef:B,"aria-live":$=(B?"polite":"off"),onTooltipHidden:H=(()=>{})}=e,V=(0,n._T)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const F=h.includes("mouseenter"),G=h.includes("focus"),q=h.includes("click"),K="manual"===h,[U,J]=i.useState(!1),Q=i.createRef();i.useEffect((()=>{N?X():Y()}),[N]);const X=()=>{J(!0)},Y=()=>{J(!1)},ee={top:o,bottom:s,left:p,right:f,"top-start":l,"top-end":r,"bottom-start":c,"bottom-end":m,"left-start":d,"left-end":u,"right-start":v,"right-end":g},te=D!==L.value,ae=i.createElement("div",Object.assign({"aria-live":$,className:(0,b.i)("pf-v5-c-tooltip",I),role:"tooltip",id:Z,style:{maxWidth:te?D:null},ref:Q},V),i.createElement(C,null),i.createElement(E,{isLeftAligned:_},t));return i.createElement(y.Popper,{trigger:"none"!==z&&U?"describedby"===z&&W&&W.props&&!W.props["aria-describedby"]?i.cloneElement(W,{"aria-describedby":Z}):"labelledby"===z&&W.props&&!W.props["aria-labelledby"]?i.cloneElement(W,{"aria-labelledby":Z}):W:W,triggerRef:B,popper:ae,popperRef:Q,minWidth:void 0!==O?O:"revert",appendTo:P,isVisible:U,positionModifiers:ee,distance:S,placement:a,onMouseEnter:F&&X,onMouseLeave:F&&Y,onPopperMouseEnter:F&&X,onPopperMouseLeave:F&&Y,onFocus:G&&X,onBlur:G&&Y,onDocumentClick:q&&((e,t)=>{U?Y():e.target===t&&X()}),onDocumentKeyDown:K?null:e=>{K||e.key===T.yu.Escape&&U&&Y()},onTriggerEnter:K?null:e=>{e.key===T.yu.Enter&&(U?Y():X())},enableFlip:A,zIndex:w,flipBehavior:R,animationDuration:j,entryDelay:k,exitDelay:M,onHidden:H})};_.displayName="Tooltip"},34143:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},68778:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},69957:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},53688:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},24307:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},45467:()=>{},81235:()=>{},81754:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5581.fa4ed17e813dd32c7a8964d6ea533645.js.map