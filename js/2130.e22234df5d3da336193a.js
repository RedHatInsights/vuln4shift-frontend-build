"use strict";(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[2130],{8280:(e,a,i)=>{i.r(a),i.d(a,{MenuToggle:()=>s.O,MenuToggleAction:()=>c,MenuToggleCheckbox:()=>r});var s=i(23971),l=i(65353),t=i(28416),n=i(9076),d=i(38296);class c extends t.Component{render(){const e=this.props,{id:a,className:i,onClick:s,isDisabled:c,children:o}=e,h=(0,l._T)(e,["id","className","onClick","isDisabled","children"]);return t.createElement("button",Object.assign({id:a,className:(0,d.i)(n.Z.menuToggleButton,i),onClick:s,type:"button",disabled:c},h),o)}}c.displayName="MenuToggleAction",c.defaultProps={className:"",isDisabled:!1,onClick:()=>{}};var o=i(54783),h=i(62472);class r extends t.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.target.checked,e)},this.calculateChecked=()=>{const{isChecked:e,defaultChecked:a}=this.props;return null!==e&&(void 0!==e?e:a)},this.state={ouiaStateId:(0,h.ql)(r.displayName)}}render(){const e=this.props,{className:a,isValid:i,isDisabled:s,isChecked:n,children:c,ouiaId:u,ouiaSafe:p,onChange:C,defaultChecked:k,id:m}=e,g=(0,l._T)(e,["className","isValid","isDisabled","isChecked","children","ouiaId","ouiaSafe","onChange","defaultChecked","id"]),b=c&&t.createElement("span",{className:(0,d.i)(o.Z.checkLabel,a),"aria-hidden":"true",id:m},c);return t.createElement("label",{className:(0,d.i)(o.Z.check,!c&&o.Z.modifiers.standalone,a),htmlFor:m},t.createElement("input",Object.assign({className:(0,d.i)(o.Z.checkInput)},void 0!==this.calculateChecked()&&{onChange:this.handleChange},{name:m,type:"checkbox",ref:e=>e&&(e.indeterminate=null===n),"aria-invalid":!i,disabled:s},void 0!==k?{defaultChecked:k}:{checked:n},(0,h.dp)(r.displayName,void 0!==u?u:this.state.ouiaStateId,p),g)),b)}}r.displayName="MenuToggleCheckbox",r.defaultProps={isValid:!0,isDisabled:!1,onChange:()=>{}}}}]);
//# sourceMappingURL=../sourcemaps/2130.270aa974afa7a333813cb1f920ba63bc.js.map