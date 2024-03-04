(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[2189,5623],{68425:(e,t,i)=>{"use strict";i.d(t,{C:()=>r});var a=i(65353),n=i(28416),s=i(38296),l=i(12971);const r=e=>{var{isRead:t=!1,className:i="",children:r="",screenReaderText:o}=e,p=(0,a._T)(e,["isRead","className","children","screenReaderText"]);return n.createElement("span",Object.assign({},p,{className:(0,s.i)(l.Z.badge,t?l.Z.modifiers.read:l.Z.modifiers.unread,i)}),r,o&&n.createElement("span",{className:"pf-v5-screen-reader"},o))};r.displayName="Badge"},47173:(e,t,i)=>{"use strict";i.d(t,{L$:()=>n,Wu:()=>a,qE:()=>s,zx:()=>u});var a,n,s,l=i(65353),r=i(28416),o=i(80480),p=i(38296),c=i(58057),d=i(62472),m=i(68425);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(a||(a={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(n||(n={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(s||(s={}));const f=e=>{var{children:t=null,className:i="",component:f="button",isActive:h=!1,isBlock:b=!1,isDisabled:g=!1,isAriaDisabled:v=!1,isLoading:y=null,isDanger:C=!1,spinnerAriaValueText:x,spinnerAriaLabelledBy:N,spinnerAriaLabel:E,size:O=s.default,inoperableEvents:_=["onClick","onKeyPress"],isInline:I=!1,type:T=n.button,variant:k=a.primary,iconPosition:L="start","aria-label":w=null,icon:P=null,ouiaId:R,ouiaSafe:A=!0,tabIndex:Z=null,innerRef:B,countOptions:D}=e,S=(0,l._T)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const W=(0,d.S$)(u.displayName,R,A,k),M=f,V="button"===M,j=I&&"span"===M,z=_.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return r.createElement(M,Object.assign({},S,v?z:null,{"aria-disabled":g||v,"aria-label":w,className:(0,p.i)(o.Z.button,o.Z.modifiers[k],b&&o.Z.modifiers.block,g&&o.Z.modifiers.disabled,v&&o.Z.modifiers.ariaDisabled,h&&o.Z.modifiers.active,I&&k===a.link&&o.Z.modifiers.inline,C&&(k===a.secondary||k===a.link)&&o.Z.modifiers.danger,null!==y&&k!==a.plain&&o.Z.modifiers.progress,y&&o.Z.modifiers.inProgress,O===s.sm&&o.Z.modifiers.small,O===s.lg&&o.Z.modifiers.displayLg,i),disabled:V?g:null,tabIndex:null!==Z?Z:g?V?null:-1:v?null:j?0:void 0,type:V||j?T:null,role:j?"button":null,ref:B},W),y&&r.createElement("span",{className:(0,p.i)(o.Z.buttonProgress)},r.createElement(c.$,{size:c.S.md,isInline:I,"aria-valuetext":x,"aria-label":E,"aria-labelledby":N})),k===a.plain&&null===t&&P?P:null,k!==a.plain&&P&&("start"===L||"left"===L)&&r.createElement("span",{className:(0,p.i)(o.Z.buttonIcon,o.Z.modifiers.start)},P),t,k!==a.plain&&P&&("end"===L||"right"===L)&&r.createElement("span",{className:(0,p.i)(o.Z.buttonIcon,o.Z.modifiers.end)},P),D&&r.createElement("span",{className:(0,p.i)(o.Z.buttonCount,D.className)},r.createElement(m.C,{isRead:D.isRead},D.count)))},u=r.forwardRef(((e,t)=>r.createElement(f,Object.assign({innerRef:t},e))));u.displayName="Button"},42189:(e,t,i)=>{"use strict";i.d(t,{A:()=>b});var a=i(65353),n=i(28416),s=i(38296),l=i(47173),r=i(75824),o=i(24307);i(94498);const p="pf-v5-c-chip",c="pf-v5-c-chip__content",d="pf-v5-c-chip__text",m="pf-m-overflow";var f=i(41724),u=i(62472);const h="--pf-v5-c-chip__text--MaxWidth";class b extends n.Component{constructor(e){super(e),this.span=n.createRef(),this.setChipStyle=()=>({[h]:this.props.textMaxWidth}),this.renderOverflowChip=()=>{const e=this.props,{badge:t,children:i,className:l,onClick:r,ouiaId:o,textMaxWidth:f,style:h,component:b,tooltipPosition:g,isOverflowChip:v,closeBtnAriaLabel:y,isReadOnly:C}=e,x=(0,a._T)(e,["badge","children","className","onClick","ouiaId","textMaxWidth","style","component","tooltipPosition","isOverflowChip","closeBtnAriaLabel","isReadOnly"]),N=b;return n.createElement(N,Object.assign({onClick:r},f&&Object.assign({style:this.setChipStyle()},h),{className:(0,s.i)(p,m,l)},"button"===b?{type:"button"}:{},(0,u.dp)("OverflowChip",void 0!==o?o:this.state.ouiaStateId),x),n.createElement("span",{className:(0,s.i)(c)},n.createElement("span",{className:(0,s.i)(d)},i),t&&t))},this.renderChip=e=>{const{children:t,tooltipPosition:i}=this.props;return this.state.isTooltipVisible?n.createElement(r.u,{position:i,content:t},this.renderInnerChip(e)):this.renderInnerChip(e)},this.state={isTooltipVisible:!1,ouiaStateId:(0,u.ql)(b.displayName)}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth)})}componentDidUpdate(e,t){const i=Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth);t.isTooltipVisible!==i&&this.setState({isTooltipVisible:i})}renderInnerChip(e){const t=this.props,{badge:i,children:r,className:m,onClick:f,closeBtnAriaLabel:h,isReadOnly:g,isOverflowChip:v,tooltipPosition:y,id:C,component:x,ouiaId:N,textMaxWidth:E}=t,O=(0,a._T)(t,["badge","children","className","onClick","closeBtnAriaLabel","isReadOnly","isOverflowChip","tooltipPosition","id","component","ouiaId","textMaxWidth"]),_=x;return n.createElement(_,Object.assign({},E&&{style:this.setChipStyle()},{className:(0,s.i)(p,m)},this.state.isTooltipVisible&&{tabIndex:0},(0,u.dp)(b.displayName,void 0!==N?N:this.state.ouiaStateId),O),n.createElement("span",{className:(0,s.i)(c)},n.createElement("span",{ref:this.span,className:(0,s.i)(d),id:e},r),i&&i),!g&&n.createElement("span",{className:(0,s.i)("pf-v5-c-chip__actions")},n.createElement(l.zx,{onClick:f,variant:"plain","aria-label":h,id:`remove_${e}`,"aria-labelledby":`remove_${e} ${e}`,ouiaId:N||h},n.createElement(o.ZP,{"aria-hidden":"true"}))))}render(){const{isOverflowChip:e}=this.props;return n.createElement(f.w,null,(t=>e?this.renderOverflowChip():this.renderChip(this.props.id||t)))}}b.displayName="Chip",b.defaultProps={closeBtnAriaLabel:"close",className:"",isOverflowChip:!1,isReadOnly:!1,tooltipPosition:"top",onClick:e=>{},component:"div"}},73597:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var a=i(65353),n=i(28416);i(1580);const s="pf-v5-c-chip-group__label",l="pf-v5-c-chip-group__list-item",r="pf-m-category";var o=i(38296),p=i(47173),c=i(42189),d=i(75824),m=i(72781),f=i(80164),u=i(41724),h=i(62472);class b extends n.Component{constructor(e){super(e),this.headingRef=n.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:i}=this.props,{isTooltipVisible:a}=this.state;return a?n.createElement(d.u,{position:i,content:t},n.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,o.i)(s)},n.createElement("span",{id:e},t))):n.createElement("span",{ref:this.headingRef,className:(0,o.i)(s),id:e},t)}render(){const e=this.props,{categoryName:t,children:i,className:s,isClosable:d,closeBtnAriaLabel:g,"aria-label":v,onClick:y,onOverflowChipClick:C,numChips:x,expandedText:N,collapsedText:E,ouiaId:O,defaultIsOpen:_,tooltipPosition:I}=e,T=(0,a._T)(e,["categoryName","children","className","isClosable","closeBtnAriaLabel","aria-label","onClick","onOverflowChipClick","numChips","expandedText","collapsedText","ouiaId","defaultIsOpen","tooltipPosition"]),{isOpen:k}=this.state,L=n.Children.count(i),w=(0,f.tJ)(E,{remaining:n.Children.count(i)-x}),P=e=>{const a=k?n.Children.toArray(i):n.Children.toArray(i).slice(0,x);return n.createElement("div",Object.assign({className:(0,o.i)("pf-v5-c-chip-group",s,t&&r),role:"group"},t&&{"aria-labelledby":e},!t&&{"aria-label":v},(0,h.dp)(b.displayName,O)),n.createElement("div",{className:(0,o.i)("pf-v5-c-chip-group__main")},t&&this.renderLabel(e),n.createElement("ul",Object.assign({className:(0,o.i)("pf-v5-c-chip-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":v},{role:"list"},T),a.map(((e,t)=>n.createElement("li",{className:(0,o.i)(l),key:t},e))),L>x&&n.createElement("li",{className:(0,o.i)(l)},n.createElement(c.A,{isOverflowChip:!0,onClick:e=>{this.toggleCollapse(),C(e)},component:"button"},k?N:w)))),d&&n.createElement("div",{className:(0,o.i)("pf-v5-c-chip-group__close")},n.createElement(p.zx,{variant:"plain","aria-label":g,onClick:y,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`,ouiaId:O||g},n.createElement(m.ZP,{"aria-hidden":"true"}))))};return 0===L?null:n.createElement(u.w,null,(e=>P(this.props.id||e)))}}b.displayName="ChipGroup",b.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numChips:3,isClosable:!1,onClick:e=>{},onOverflowChipClick:e=>{},closeBtnAriaLabel:"Close chip group",tooltipPosition:"top","aria-label":"Chip group category"}},15623:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Chip:()=>a.A,ChipGroup:()=>n.Z});var a=i(42189),n=i(73597)},58057:(e,t,i)=>{"use strict";i.d(t,{$:()=>p,S:()=>o});var a=i(65353),n=i(28416);i(66822);const s={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var l=i(38296);const r="--pf-v5-c-spinner--diameter";var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const p=e=>{var{className:t="",size:i="xl","aria-valuetext":o="Loading...",diameter:p,isInline:c=!1,"aria-label":d,"aria-labelledBy":m}=e,f=(0,a._T)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return n.createElement("svg",Object.assign({className:(0,l.i)(s.spinner,c?s.modifiers.inline:s.modifiers[i],t),role:"progressbar","aria-valuetext":o,viewBox:"0 0 100 100"},p&&{style:{[r]:p}},d&&{"aria-label":d},m&&{"aria-labelledBy":m},!d&&!m&&{"aria-label":"Contents"},f),n.createElement("circle",{className:s.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};p.displayName="Spinner"},75824:(e,t,i)=>{"use strict";i.d(t,{u:()=>I,D:()=>E});var a=i(65353),n=i(28416);i(49854);const s="pf-m-top",l="pf-m-top-left",r="pf-m-top-right",o="pf-m-bottom",p="pf-m-bottom-left",c="pf-m-bottom-right",d="pf-m-left",m="pf-m-left-top",f="pf-m-left-bottom",u="pf-m-right",h="pf-m-right-top",b="pf-m-right-bottom",g="pf-m-text-align-left";var v=i(38296);const y=e=>{var{className:t,children:i,isLeftAligned:s}=e,l=(0,a._T)(e,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__content",s&&g,t)},l),i)};y.displayName="TooltipContent";const C=e=>{var{className:t}=e,i=(0,a._T)(e,["className"]);return n.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__arrow",t)},i))};C.displayName="TooltipArrow";var x=i(1774);const N={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var E,O=i(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(E||(E={}));let _=1;const I=e=>{var{content:t,position:i="top",trigger:g="mouseenter focus",isVisible:E=!1,isContentLeftAligned:I=!1,enableFlip:T=!0,className:k="",entryDelay:L=300,exitDelay:w=300,appendTo:P=(()=>document.body),zIndex:R=9999,minWidth:A,maxWidth:Z=N.value,distance:B=15,aria:D="describedby",flipBehavior:S=["top","right","bottom","left","top","right","bottom"],id:W="pf-tooltip-"+_++,children:M,animationDuration:V=300,triggerRef:j,"aria-live":z=(j?"polite":"off"),onTooltipHidden:$=(()=>{})}=e,F=(0,a._T)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const G=g.includes("mouseenter"),H=g.includes("focus"),q=g.includes("click"),K="manual"===g,[J,U]=n.useState(!1),Q=n.createRef();n.useEffect((()=>{E?X():Y()}),[E]);const X=()=>{U(!0)},Y=()=>{U(!1)},ee={top:s,bottom:o,left:d,right:u,"top-start":l,"top-end":r,"bottom-start":p,"bottom-end":c,"left-start":m,"left-end":f,"right-start":h,"right-end":b},te=Z!==N.value,ie=n.createElement("div",Object.assign({"aria-live":z,className:(0,v.i)("pf-v5-c-tooltip",k),role:"tooltip",id:W,style:{maxWidth:te?Z:null},ref:Q},F),n.createElement(C,null),n.createElement(y,{isLeftAligned:I},t));return n.createElement(O.Popper,{trigger:"none"!==D&&J?"describedby"===D&&M&&M.props&&!M.props["aria-describedby"]?n.cloneElement(M,{"aria-describedby":W}):"labelledby"===D&&M.props&&!M.props["aria-labelledby"]?n.cloneElement(M,{"aria-labelledby":W}):M:M,triggerRef:j,popper:ie,popperRef:Q,minWidth:void 0!==A?A:"revert",appendTo:P,isVisible:J,positionModifiers:ee,distance:B,placement:i,onMouseEnter:G&&X,onMouseLeave:G&&Y,onPopperMouseEnter:G&&X,onPopperMouseLeave:G&&Y,onFocus:H&&X,onBlur:H&&Y,onDocumentClick:q&&((e,t)=>{J?Y():e.target===t&&X()}),onDocumentKeyDown:K?null:e=>{K||e.key===x.yu.Escape&&J&&Y()},onTriggerEnter:K?null:e=>{e.key===x.yu.Enter&&(J?Y():X())},enableFlip:T,zIndex:R,flipBehavior:S,animationDuration:V,entryDelay:L,exitDelay:w,onHidden:$})};I.displayName="Tooltip"},41724:(e,t,i)=>{"use strict";i.d(t,{w:()=>s});var a=i(28416);let n=0;class s extends a.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${n++}`}render(){return this.props.children(this.id)}}s.displayName="GenerateId",s.defaultProps={prefix:"pf-random-id-"}},40400:(e,t,i)=>{"use strict";i.d(t,{I:()=>l});var a=i(65353),n=i(28416);let s=0;function l({name:e,xOffset:t=0,yOffset:i=0,width:l,height:r,svgPath:o}){var p;return p=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{title:s,className:p}=e,c=(0,a._T)(e,["title","className"]),d=p?`pf-v5-svg ${p}`:"pf-v5-svg",m=Boolean(s),f=[t,i,l,r].join(" ");return n.createElement("svg",Object.assign({className:d,viewBox:f,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},c),m&&n.createElement("title",{id:this.id},s),n.createElement("path",{d:o}))}},p.displayName=e,p}},72781:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>a});const a=(0,i(40400).I)({name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0})},24307:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>a});const a=(0,i(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},12971:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a}),i(11452);const a={badge:"pf-v5-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-v5-theme-dark"}},80480:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a}),i(34946);const a={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},45467:()=>{},11452:()=>{},34946:()=>{},1580:()=>{},94498:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2189.fc9b215216dcd09dfa82dcd67f15ae58.js.map