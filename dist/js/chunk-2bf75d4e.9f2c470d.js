(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf75d4e"],{"0fc6":function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return m}));var r=a("2b0e"),i=a("a723"),n=a("a874"),l=a("8690"),s=a("7b1e"),o=a("d82f"),c=a("cf75"),d=a("686b"),u='Setting prop "options" to an object is deprecated. Use the array format instead.',b=Object(c["d"])({disabledField:Object(c["c"])(i["u"],"disabled"),htmlField:Object(c["c"])(i["u"],"html"),options:Object(c["c"])(i["d"],[]),textField:Object(c["c"])(i["u"],"text"),valueField:Object(c["c"])(i["u"],"value")},"formOptionControls"),m=r["default"].extend({props:b,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(s["k"])(e)){var a=Object(n["a"])(e,this.valueField),r=Object(n["a"])(e,this.textField);return{value:Object(s["o"])(a)?t||r:a,text:Object(l["b"])(String(Object(s["o"])(r)?t:r)),html:Object(n["a"])(e,this.htmlField),disabled:Boolean(Object(n["a"])(e,this.disabledField))}}return{value:t||e,text:Object(l["b"])(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return Object(s["a"])(e)?e.map((function(e){return t.normalizeOption(e)})):Object(s["k"])(e)?(Object(d["a"])(u,this.$options.name),Object(o["h"])(e).map((function(a){return t.normalizeOption(e[a]||{},a)}))):[]}}})},1673:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:function(t){return t.preventDefault(),e.saveSettings.apply(null,arguments)}}},[a("b-card",{attrs:{title:"App Settings"}},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"App Name","label-for":"mc-app-name"}},[a("b-form-input",{attrs:{id:"mc-app-name",placeholder:"App Name"},model:{value:e.details.app_name,callback:function(t){e.$set(e.details,"app_name",t)},expression:"details.app_name"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Email","label-for":"mc-email"}},[a("b-form-input",{attrs:{id:"mc-email",placeholder:"Email"},model:{value:e.details.email,callback:function(t){e.$set(e.details,"email",t)},expression:"details.email"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Phone Number","label-for":"mc-phone-number"}},[a("b-form-input",{attrs:{id:"mc-phone-number",placeholder:"Phone Number"},model:{value:e.details.phone_number,callback:function(t){e.$set(e.details,"phone_number",t)},expression:"details.phone_number"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Virtual Card Issuance (Naira)","label-for":"mc-card-issuance"}},[a("b-form-input",{attrs:{id:"mc-card-issuance",placeholder:"Virtual Card Issuance"},model:{value:e.details.card_issuance_naira,callback:function(t){e.$set(e.details,"card_issuance_naira",t)},expression:"details.card_issuance_naira"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Virtual Card Issuance (USD)","label-for":"mc-card-issuance-usd"}},[a("b-form-input",{attrs:{id:"mc-card-issuance-usd",placeholder:"Virtual Card Issuance"},model:{value:e.details.card_issuance_usd,callback:function(t){e.$set(e.details,"card_issuance_usd",t)},expression:"details.card_issuance_usd"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Card Transaction fee","label-for":"mc-card-fee"}},[a("b-form-input",{attrs:{id:"mc-card-fee",placeholder:"Card Transaction fee"},model:{value:e.details.card_fee,callback:function(t){e.$set(e.details,"card_fee",t)},expression:"details.card_fee"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Referral Bonus","label-for":"mc-referral-bonus"}},[a("b-form-input",{attrs:{id:"mc-referral-bonus",placeholder:"Referral Bonus"},model:{value:e.details.referral_bonus,callback:function(t){e.$set(e.details,"referral_bonus",t)},expression:"details.referral_bonus"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Bills Payment Provider -  ("+e.details.bills_payment_provider+")","label-for":"mc-bills-provider"}},[a("b-form-select",{attrs:{id:"mc-bills-provider",name:"bills_payment_provider"},model:{value:e.details.bills_payment_provider,callback:function(t){e.$set(e.details,"bills_payment_provider",t)},expression:"details.bills_payment_provider"}},[a("b-form-select-option",{attrs:{value:""}},[e._v("Select")]),a("b-form-select-option",{attrs:{value:"shago"}},[e._v("Shago Pay")]),a("b-form-select-option",{attrs:{value:"clubconnect"}},[e._v("ClubKonnect")])],1)],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Account Inactivity Message","label-for":"mc-deactivation_message"}},[a("ckeditor",{attrs:{editor:e.editor,config:e.editorConfig},model:{value:e.details.deactivation_message,callback:function(t){e.$set(e.details,"deactivation_message",t)},expression:"details.deactivation_message"}})],1)],1),a("b-col",{attrs:{md:"12"}},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[e._v(" Save "),a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{variant:"light",small:""}})],1)],1)],1)],1),a("b-card",{attrs:{title:"Savings Interest Rate Settings"}},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Savings Mini (3 Months) %","label-for":"mc-mini"}},[a("b-form-input",{attrs:{id:"mc-mini",placeholder:"0.00"},model:{value:e.details.savings_mini,callback:function(t){e.$set(e.details,"savings_mini",t)},expression:"details.savings_mini"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Savings Midi (6 Months) %","label-for":"mc-midi"}},[a("b-form-input",{attrs:{id:"mc-midi",placeholder:"0.00"},model:{value:e.details.savings_midi,callback:function(t){e.$set(e.details,"savings_midi",t)},expression:"details.savings_midi"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Savings Maxi (9 Months) %","label-for":"mc-maxi"}},[a("b-form-input",{attrs:{id:"mc-maxi",placeholder:"0.00"},model:{value:e.details.savings_maxi,callback:function(t){e.$set(e.details,"savings_maxi",t)},expression:"details.savings_maxi"}})],1)],1),a("b-col",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[e._v(" Save "),a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{variant:"light",small:""}})],1)],1)],1)],1),a("b-card",{attrs:{title:"Bank Transfer Charges"}},[a("b-row",[a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Transfer Charge Mini (N1 - N5,000)","label-for":"mc-mini"}},[a("b-form-input",{attrs:{placeholder:"0.00"},model:{value:e.details.transfer_charge_min,callback:function(t){e.$set(e.details,"transfer_charge_min",t)},expression:"details.transfer_charge_min"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Transfer Charge Midi (N5,000 - N50,000)","label-for":"mc-mini"}},[a("b-form-input",{attrs:{placeholder:"0.00"},model:{value:e.details.transfer_charge_mid,callback:function(t){e.$set(e.details,"transfer_charge_mid",t)},expression:"details.transfer_charge_mid"}})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"Transfer Charge Max (N50,000 above)","label-for":"mc-mini"}},[a("b-form-input",{attrs:{placeholder:"0.00"},model:{value:e.details.transfer_charge_max,callback:function(t){e.$set(e.details,"transfer_charge_max",t)},expression:"details.transfer_charge_max"}})],1)],1),a("b-col",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[e._v(" Save "),a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{variant:"light",small:""}})],1)],1)],1)],1)],1)},i=[],n=(a("d3b7"),a("a15b")),l=a("b28b"),s=a("8226"),o=a("4797"),c=a("11de"),d=a("1947"),u=a("205f"),b=a("01e3"),m=a("9c7d"),p=a("8361"),f=a("ea4c"),h=a("e009"),v=a("fb3d"),g=a.n(v),O={components:{ClassicEditor:g.a,BRow:n["a"],BCol:l["a"],BFormGroup:s["a"],BFormInput:o["a"],BForm:c["a"],BButton:d["a"],BCard:u["a"],BSpinner:b["a"],BFormTextarea:m["a"],BFormSelect:p["a"],BFormSelectOption:f["a"]},directives:{Ripple:h["a"]},data:function(){return{editor:g.a,editorData:"",editorConfig:{modules:{toolbar:"#toolbar"}},settings:{},details:{email:"",phone_number:""},loading:!1}},created:function(){this.getSettings();var e=localStorage.getItem("userData"),t=JSON.parse(e);this.user=t,t.role&&"admin"!=t.role.toLowerCase()&&(localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userData"),window.location.reload())},methods:{getSettings:function(){var e=this;this.$http.get("".concat(this.$url,"/settings")).then((function(t){t.status&&(e.settings=t.data.data.setting,e.details=t.data.data.app_setting)}))},saveSettings:function(){var e=this;this.loading=!0,this.$http.patch("".concat(this.$url,"/settings/update"),this.details).then((function(e){e.data.status&&window.location.reload()})).finally((function(){e.loading=!1}))},setBillPay:function(e){this.details.bills_payment_provider=e.target.selected}}},j=O,_=a("2877"),y=Object(_["a"])(j,r,i,!1,null,null,null);t["default"]=y.exports},8361:function(e,t,a){"use strict";a.d(t,"a",(function(){return J}));var r=a("2b0e"),i=a("c637"),n=a("0056"),l=a("a723"),s=a("9b76"),o=a("2326"),c=a("906c"),d=a("8690"),u=a("7b1e"),b=a("d82f"),m=a("cf75"),p=a("dde7"),f=a("a953"),h=a("ad47"),v=a("d520"),g=a("90ef"),O=a("58f2"),j=Object(O["a"])("value"),_=j.mixin,y=j.props,x=j.prop,w=j.event,S=a("8c18"),P=a("a874"),k=a("0fc6");function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){F(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z=Object(m["d"])(Object(b["m"])($($({},k["b"]),{},{labelField:Object(m["c"])(l["u"],"label"),optionsField:Object(m["c"])(l["u"],"options")})),"formOptions"),B=r["default"].extend({mixins:[k["a"]],props:z,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(u["k"])(e)){var a=Object(P["a"])(e,this.valueField),r=Object(P["a"])(e,this.textField),i=Object(P["a"])(e,this.optionsField,null);return Object(u["g"])(i)?{value:Object(u["o"])(a)?t||r:a,text:String(Object(u["o"])(r)?t:r),html:Object(P["a"])(e,this.htmlField),disabled:Boolean(Object(P["a"])(e,this.disabledField))}:{label:String(Object(P["a"])(e,this.labelField)||r),options:this.normalizeOptions(i)}}return{value:t||e,text:String(e),disabled:!1}}}}),D=a("ea4c");function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){V(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=Object(m["d"])(Object(b["m"])(I(I({},k["b"]),{},{label:Object(m["c"])(l["u"],void 0,!0)})),i["S"]),M=r["default"].extend({name:i["S"],mixins:[S["a"],k["a"]],props:E,render:function(e){var t=this.label,a=this.formOptions.map((function(t,a){var r=t.value,i=t.text,n=t.html,l=t.disabled;return e(D["a"],{attrs:{value:r,disabled:l},domProps:Object(d["a"])(n,i),key:"option_".concat(a)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(s["q"]),a,this.normalizeSlot()])}});function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){q(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A=Object(m["d"])(Object(b["m"])(R(R(R(R(R(R(R({},g["b"]),y),p["b"]),f["b"]),h["b"]),v["b"]),{},{ariaInvalid:Object(m["c"])(l["j"],!1),multiple:Object(m["c"])(l["g"],!1),selectSize:Object(m["c"])(l["n"],0)})),i["Q"]),J=r["default"].extend({name:i["Q"],mixins:[g["a"],_,p["a"],h["a"],v["a"],f["a"],B,S["a"]],props:A,data:function(){return{localValue:this[x]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(w,this.localValue)}},methods:{focus:function(){Object(c["d"])(this.$refs.input)},blur:function(){Object(c["c"])(this.$refs.input)},onChange:function(e){var t=this,a=e.target,r=Object(o["f"])(a.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=a.multiple?r:r[0],this.$nextTick((function(){t.$emit(n["d"],t.localValue)}))}},render:function(e){var t=this.name,a=this.disabled,r=this.required,i=this.computedSelectSize,n=this.localValue,l=this.formOptions.map((function(t,a){var r=t.value,i=t.label,n=t.options,l=t.disabled,s="option_".concat(a);return Object(u["a"])(n)?e(M,{props:{label:i,options:n},key:s}):e(D["a"],{props:{value:r,disabled:l},domProps:Object(d["a"])(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:i,disabled:a,required:r,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:n}],ref:"input"},[this.normalizeSlot(s["q"]),l,this.normalizeSlot()])}})},a953:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var r=a("2b0e"),i=a("a723"),n=a("cf75"),l=Object(n["d"])({plain:Object(n["c"])(i["g"],!1)},"formControls"),s=r["default"].extend({props:l,computed:{custom:function(){return!this.plain}}})},ea4c:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("2b0e"),i=a("b42e"),n=a("c637"),l=a("a723"),s=a("cf75"),o=Object(s["d"])({disabled:Object(s["c"])(l["g"],!1),value:Object(s["c"])(l["a"],void 0,!0)},n["R"]),c=r["default"].extend({name:n["R"],functional:!0,props:o,render:function(e,t){var a=t.props,r=t.data,n=t.children,l=a.value,s=a.disabled;return e("option",Object(i["a"])(r,{attrs:{disabled:s},domProps:{value:l}}),n)}})}}]);
//# sourceMappingURL=chunk-2bf75d4e.9f2c470d.js.map