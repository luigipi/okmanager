(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee13a32"],{"0759":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var s=n("2b0e"),i=n("b42e"),o=n("c637"),r=n("a723"),a=n("992e"),u=n("d82f"),l=n("cf75"),c=n("fa73"),d=n("7386"),g=n("aa0d");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function e(t,n){if(!t)return null;var s=(t.$options||{}).components,i=s[n];return i||e(t.$parent,n)},b=Object(l["d"])(Object(u["m"])(m(m({},Object(u["j"])(g["b"],["content","stacked"])),{},{icon:Object(l["c"])(r["u"]),stacked:Object(l["c"])(r["g"],!1)})),o["ab"]),v=s["default"].extend({name:o["ab"],functional:!0,props:b,render:function(e,t){var n=t.data,s=t.props,o=t.parent,r=Object(c["e"])(Object(c["h"])(s.icon||"")).replace(a["n"],"");return e(r&&h(o,"BIcon".concat(r))||d["a"],Object(i["a"])(n,{props:m(m({},s),{},{icon:null})}))}})},"12d05":function(e,t,n){},"4c6b":function(e,t,n){},"62fb":function(e,t,n){"use strict";n("4c6b")},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("2b0e"),i=n("b42e"),o=n("c637"),r=n("a723"),a=n("cf75"),u=Object(a["d"])({textTag:Object(a["c"])(r["u"],"p")},o["r"]),l=s["default"].extend({name:o["r"],functional:!0,props:u,render:function(e,t){var n=t.props,s=t.data,o=t.children;return e(n.textTag,Object(i["a"])(s,{staticClass:"card-text"}),o)}})},dda8:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("auto-suggest-basic"),n("auto-suggest-slot"),n("auto-suggest-section"),n("auto-suggest-ajax")],1)],1)},i=[],o=n("a15b"),r=n("b28b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,limit:10,"input-props":{id:"autosuggest__input",class:"form-control",placeholder:"Do you feel lucky?"}},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("span",{staticClass:"my-suggestion-item"},[e._v(e._s(s.item.name))])]}}])})],1)},u=[],l=(n("fb6a"),n("4de4"),n("b0c0"),n("99af"),{name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:[Number,String],required:!1,default:1/0},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0},componentAttrPrefix:{type:String,required:!0},componentAttrIdAutosuggest:{type:String,required:!0}},data:function(){return{_currentIndex:this.currentIndex}},computed:{list:function(){var e=this.section,t=e.limit,n=e.data;return n.length<t&&(t=n.length),n.slice(0,t)}},methods:{getItemIndex:function(e){return this.section.start_index+e},getItemByIndex:function(e){return this.section.data[e]},onMouseEnter:function(e){var t=parseInt(e.currentTarget.getAttribute("data-suggestion-index"));this._currentIndex=t,this.$emit("updateCurrentIndex",t)},onMouseLeave:function(){this.$emit("updateCurrentIndex",null)}},render:function(e){var t=this,n=this.componentAttrPrefix,s={beforeSection:this.$scopedSlots["before-section-"+this.section.name],afterSectionDefault:this.$scopedSlots["after-section"],afterSectionNamed:this.$scopedSlots["after-section-"+this.section.name]},i=n+"__results-before "+n+"__results-before--"+this.section.name,o=s.beforeSection&&s.beforeSection({section:this.section,className:i})||[];return e("ul",{attrs:{role:"listbox","aria-labelledby":this.section.label&&this.componentAttrIdAutosuggest+"-"+this.section.label},class:this.section.ulClass},[o[0]&&o[0]||this.section.label&&e("li",{class:i,id:this.componentAttrIdAutosuggest+"-"+this.section.label},this.section.label)||"",this.list.map((function(s,i){var o,r=t.normalizeItemFunction(t.section.name,t.section.type,t.section.label,t.section.liClass,s),a=t.getItemIndex(i),u=t._currentIndex===a||parseInt(t.currentIndex)===a;return e("li",{attrs:Object.assign({},{role:"option","data-suggestion-index":a,"data-section-name":r.name,id:n+"__results-item--"+a},r.liAttributes),key:a,class:Object.assign((o={},o[n+"__results-item--highlighted"]=u,o[n+"__results-item"]=!0,o),r.liClass),on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[t.renderSuggestion?t.renderSuggestion(r):t.$scopedSlots.default&&t.$scopedSlots.default({_key:i,suggestion:r})])})),s.afterSectionDefault&&s.afterSectionDefault({section:this.section,className:n+"__results-after "+n+"__results-after--"+this.section.name}),s.afterSectionNamed&&s.afterSectionNamed({section:this.section,className:n+"__results_after "+n+"__results-after--"+this.section.name})])}});function c(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function d(e,t){c(e,t)||(e.className+=" "+t)}function g(e,t){e.classList&&e.classList.remove(t)}var p=-1,m={name:"default",type:"default-section"},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.componentAttrIdAutosuggest}},[e._t("before-input"),n("div",{attrs:{role:"combobox","aria-expanded":e.isOpen?"true":"false","aria-haspopup":"listbox","aria-owns":e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"}},[n("input",e._g(e._b({class:[e.isOpen?e.componentAttrPrefix+"__input--open":"",e.internal_inputProps.class],attrs:{type:e.internal_inputProps.type,autocomplete:e.internal_inputProps.autocomplete,"aria-autocomplete":"list","aria-activedescendant":e.isOpen&&null!==e.currentIndex?e.componentAttrPrefix+"__results-item--"+e.currentIndex:"","aria-controls":e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"},domProps:{value:e.internalValue},on:{input:e.inputHandler,keydown:e.handleKeyStroke}},"input",e.internal_inputProps,!1),e.listeners))]),e._t("after-input"),e._v(" "),n("div",{class:e._componentAttrClassAutosuggestResultsContainer,attrs:{id:e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"}},[e.isOpen?n("div",{class:e._componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":e.componentAttrIdAutosuggest}},[e._t("before-suggestions"),e._v(" "),e._l(e.computedSections,(function(t,s){return n(t.type,{key:e.getSectionRef(""+t.name+s),ref:e.getSectionRef(""+t.name+s),refInFor:!0,tag:"component",attrs:{"current-index":e.currentIndex,"normalize-item-function":e.normalizeItem,"render-suggestion":e.renderSuggestion,section:t,"component-attr-prefix":e.componentAttrPrefix,"component-attr-id-autosuggest":e.componentAttrIdAutosuggest},on:{updateCurrentIndex:e.updateCurrentIndex},scopedSlots:e._u([{key:"before-section-"+(t.name||t.label),fn:function(n){var s=n.section,i=n.className;return[e._t("before-section-"+(t.name||t.label),null,{section:s,className:i})]}},{key:"default",fn:function(t){var n=t.suggestion,s=t._key;return[e._t("default",[e._v(" "+e._s(n.item)+" ")],{suggestion:n,index:s})]}},{key:"after-section-"+(t.name||t.label),fn:function(n){var s=n.section;return[e._t("after-section-"+(t.name||t.label),null,{section:s})]}},{key:"after-section",fn:function(t){var n=t.section;return[e._t("after-section",null,{section:n})]}}])})})),e._v(" "),e._t("after-suggestions")],2):e._e(),e._v(" "),e._t("after-suggestions-container")],2)],2)},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:l},props:{value:{type:String,default:null},inputProps:{type:Object,required:!0},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(e){var t=e.item;return"object"==typeof t&&t.hasOwnProperty("name")?t.name:t}},shouldRenderSuggestions:{type:Function,required:!1,default:function(e,t){return e>0&&!t}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:null},componentAttrClassAutosuggestResults:{type:String,required:!1,default:null},componentAttrPrefix:{type:String,required:!1,default:"autosuggest"}},data:function(){return{internalValue:null,searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,defaultInputProps:{type:"text",autocomplete:"off"},clientXMouseDownInitial:null}},computed:{internal_inputProps:function(){return Object.assign({},this.defaultInputProps,this.inputProps)},listeners:function(){var e=this;return Object.assign({},this.$listeners,{input:function(e){},click:function(){e.loading=!1,e.$listeners.click&&e.$listeners.click(e.currentItem),e.$nextTick((function(){e.ensureItemVisible(e.currentItem,e.currentIndex)}))},selected:function(){e.currentItem&&e.sectionConfigs[e.currentItem.name]&&e.sectionConfigs[e.currentItem.name].onSelected?e.sectionConfigs[e.currentItem.name].onSelected(e.currentItem,e.searchInputOriginal):e.sectionConfigs.default.onSelected?e.sectionConfigs.default.onSelected(null,e.searchInputOriginal):e.$listeners.selected&&e.$emit("selected",e.currentItem,e.currentIndex),e.setChangeItem(null)}})},isOpen:function(){return this.shouldRenderSuggestions(this.totalResults,this.loading)},computedSections:function(){var e=this,t=0;return this.suggestions.map((function(n){if(n.data){var s,i,o,r,a=n.name?n.name:m.name,u=null;e.sectionConfigs[a]&&(s=e.sectionConfigs[a].limit,o=e.sectionConfigs[a].type,i=e.sectionConfigs[a].label,r=e.sectionConfigs[a].ulClass,u=e.sectionConfigs[a].liClass),o=o||m.type,s=(s=s||e.limit)||1/0,s=n.data.length<s?n.data.length:s;var l={name:a,label:i=i||n.label,type:o,limit:s,data:n.data,start_index:t,end_index:t+s-1,ulClass:r,liClass:u};return t+=s,l}}))},totalResults:function(){return this.computedSections.reduce((function(e,t){if(!t)return e;var n=t.limit,s=t.data;return e+(s.length>=n?n:s.length)}),0)},_componentAttrClassAutosuggestResultsContainer:function(){return this.componentAttrClassAutosuggestResultsContainer||this.componentAttrPrefix+"__results-container"},_componentAttrClassAutosuggestResults:function(){return this.componentAttrClassAutosuggestResults||this.componentAttrPrefix+"__results"}},watch:{value:{handler:function(e){this.internalValue=e},immediate:!0},isOpen:{handler:function(e,t){e!==t&&this.$emit(e?"opened":"closed")},immediate:!0}},created:function(){this.loading=!0},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{inputHandler:function(e){var t=e.target.value;this.$emit("input",t),this.internalValue=t,this.didSelectFromOptions||(this.searchInputOriginal=t,this.currentIndex=null)},getSectionRef:function(e){return"computed_section_"+e},getItemByIndex:function(e){var t=!1;if(null===e)return t;for(var n=0;n<this.computedSections.length;n++)if(e>=this.computedSections[n].start_index&&e<=this.computedSections[n].end_index){var s=e-this.computedSections[n].start_index,i=this.computedSections[n].name,o=this.$refs[this.getSectionRef(""+i+n)][0];if(o){t=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,o.section.label,o.section.liClass,o.getItemByIndex(s));break}}return t},handleKeyStroke:function(e){var t=this,n=e.keyCode;if(!([16,9,17,18,91,93].indexOf(n)>-1)){var s=!this.isOpen;if(this.loading=!1,this.didSelectFromOptions=!1,this.isOpen)switch(n){case 40:case 38:if(e.preventDefault(),38===n&&null===this.currentIndex)break;var i=40===n?1:-1,o=Math.max((parseInt(this.currentIndex)||0)+(s?0:i),p);this.setCurrentIndex(o,this.totalResults),this.didSelectFromOptions=!0,this.totalResults>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):this.currentIndex===p&&(this.setChangeItem(null),this.internalValue=this.searchInputOriginal,e.preventDefault()),this.$nextTick((function(){t.ensureItemVisible(t.currentItem,t.currentIndex)}));break;case 13:e.preventDefault(),this.totalResults>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.loading=!0,this.currentIndex=null,this.internalValue=this.searchInputOriginal,this.$emit("input",this.searchInputOriginal),e.preventDefault()}}},setChangeItem:function(e,t){if(void 0===t&&(t=!1),null!==this.currentIndex&&e){if(e){this.currentItem=e,this.$emit("item-changed",e,this.currentIndex);var n=this.getSuggestionValue(e);this.internalValue=n,t&&(this.searchInputOriginal=n),this.ensureItemVisible(e,this.currentIndex)}}else this.currentItem=null,this.$emit("item-changed",null,null)},normalizeItem:function(e,t,n,s,i){return{name:e,type:t,label:n,liClass:i.liClass||s,item:i}},ensureItemVisible:function(e,t,n){var s=this.$el.querySelector(n||"."+this._componentAttrClassAutosuggestResults);if(s){var i=s.querySelector("#"+this.componentAttrPrefix+"__results-item--"+t);if(i){var o=s.clientHeight,r=s.scrollTop,a=i.clientHeight,u=i.offsetTop;a+u>=r+o?s.scrollTop=a+u-o:u<r&&r>0&&(s.scrollTop=u)}}},updateCurrentIndex:function(e){this.setCurrentIndex(e,-1,!0)},clickedOnScrollbar:function(e,t){var n=this.$el.querySelector("."+this._componentAttrClassAutosuggestResults),s=n&&n.clientWidth<=t+17&&t+17<=n.clientWidth+34;return"DIV"===e.target.tagName&&n&&s||!1},onDocumentMouseDown:function(e){var t=e.target.getBoundingClientRect?e.target.getBoundingClientRect():0;this.clientXMouseDownInitial=e.clientX-t.left},onDocumentMouseUp:function(e){if(!this.$el.contains(e.target))return this.loading=!0,void(this.currentIndex=null);"INPUT"===e.target.tagName||this.clickedOnScrollbar(e,this.clientXMouseDownInitial)||(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.listeners.selected(!0))},setCurrentIndex:function(e,t,n){void 0===t&&(t=-1),void 0===n&&(n=!1);var s=e;n||(null===this.currentIndex||e>=t)&&(s=0),this.currentIndex=s;var i=this.$el.querySelector("#"+this.componentAttrPrefix+"__results-item--"+this.currentIndex),o=this.componentAttrPrefix+"__results-item--highlighted";this.$el.querySelector("."+o)&&g(this.$el.querySelector("."+o),o),i&&d(i,o)}}},h={install:function(e){e.component("vue-autosuggest-default-section",l),e.component("vue-autosuggest",f)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(h);var b=n("541c"),v="\n<template>\n  <vue-autosuggest\n    :suggestions=\"filteredOptions\"\n    :limit=\"10\"\n    :input-props=\"{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}\"\n    @input=\"onInputChange\"\n  >\n    <template slot-scope=\"{suggestion}\">\n      <span class=\"my-suggestion-item\">{{ suggestion.item.name }}</span>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from 'vue-autosuggest'\n\nexport default {\n  components: {\n    VueAutosuggest,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      limit: 10,\n      selected: null,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onInputChange(text) {\n      if (text === '' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n",x='\n<template>\n  <vue-autosuggest\n    :suggestions="filteredOptions"\n    :input-props="inputProps"\n    :on-selected="onSelected"\n    :limit="10"\n    @input="onInputChange"\n  >\n    <template slot-scope="{suggestion}">\n      <div class="d-flex align-items-center">\n        <b-avatar :src="suggestion.item.img" />\n        <div class="detail ml-50">\n          <b-card-text class="mb-0">\n            {{ suggestion.item.name }}\n          </b-card-text>\n          <small class="text-muted">\n            {{ suggestion.item.time }}\n          </small>\n        </div>\n      </div>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onSelected(option) {\n      this.selected = option.item\n    },\n    onInputChange(text) {\n      if (text === \'\' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n',y='\n<template>\n  <vue-autosuggest\n    v-model="query"\n    :suggestions="suggestions"\n    :input-props="inputProps"\n    :section-configs="sectionConfigs"\n    :render-suggestion="renderSuggestion"\n    :limit="10"\n    @input="fetchResults"\n  />\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BAvatar,\n    BCardText,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      query: \'\',\n      suggestions: [],\n      selected: null,\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      sectionConfigs: {\n        developers: {\n          limit: 6,\n          label: \'Developers\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        pages: {\n          limit: 6,\n          label: \'Pages\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    fetchResults(text) {\n      const { query } = this\n      if (query) {\n        this.suggestions = []\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredPages = this.datasuggest.data[0].pages.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      filteredDevelopers.length && this.suggestions.push({ name: \'developers\', data: filteredDevelopers })\n      filteredPages.length && this.suggestions.push({ name: \'pages\', data: filteredPages })\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === \'developers\') {\n        const dev = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <b-avatar src={dev.img} class="mr-50"></b-avatar>\n            <div class="detail">\n              <b-card-text class="mb-0">{dev.name}</b-card-text>\n              <small class="text-muted">{dev.email}</small>\n            </div>\n          </div>\n        )\n      }\n      if (suggestion.name === \'pages\') {\n        const page = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <feather-icon icon={page.icon} size={\'18\'} class={\'mr-75\'} />\n            <span>{page.name}</span>\n          </div>\n        )\n      }\n      return false\n    },\n  },\n}\n<\/script>\n',O="\n<template>\n  <div>\n    <vue-autosuggest\n      ref=\"autocomplete\"\n      v-model=\"query\"\n      :suggestions=\"suggestions\"\n      :input-props=\"inputProps\"\n      :section-configs=\"sectionConfigs\"\n      :render-suggestion=\"renderSuggestion\"\n      :get-suggestion-value=\"getSuggestionValue\"\n      @input=\"fetchResults\"\n    />\n\n    <b-card-text class=\"mt-1\">\n      Selected element (object):\n    </b-card-text>\n    <b-card\n      class=\"border\"\n      no-body\n    >\n      <pre>{{ JSON.stringify(selected, null, 4) }}</pre>\n    </b-card>\n  </div>\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: [\"error\", { \"allowShortCircuit\": true }] */\nimport { BCard, BCardText, BAvatar } from 'bootstrap-vue'\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport axios from 'axios'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCard,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      query: '',\n      results: [],\n      timeout: null,\n      selected: null,\n      debounceMilliseconds: 250,\n      usersUrl: 'https://jsonplaceholder.typicode.com/users',\n      photosUrl: 'https://jsonplaceholder.typicode.com/photos',\n      inputProps: {\n        id: 'autosuggest__input_ajax',\n        placeholder: 'Do you feel lucky, punk?',\n        class: 'form-control',\n        name: 'ajax',\n      },\n      suggestions: [],\n      sectionConfigs: {\n        destinations: {\n          limit: 6,\n          label: 'Destination',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        hotels: {\n          limit: 6,\n          label: 'Hotels',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n    }\n  },\n  methods: {\n    fetchResults() {\n      const { query } = this\n\n      clearTimeout(this.timeout)\n      this.timeout = setTimeout(() => {\n        const photosPromise = axios.get(this.photosUrl)\n        const usersPromise = axios.get(this.usersUrl)\n\n        Promise.all([photosPromise, usersPromise]).then(values => {\n          this.suggestions = []\n          this.selected = null\n\n          const photos = this.filterResults(values[0].data, query, 'title')\n          const users = this.filterResults(values[1].data, query, 'name')\n          users.length && this.suggestions.push({ name: 'destinations', data: users })\n          photos.length && this.suggestions.push({ name: 'hotels', data: photos })\n        })\n      }, this.debounceMilliseconds)\n    },\n    filterResults(data, text, field) {\n      return data.filter(item => {\n        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {\n          return item[field]\n        }\n        return false\n      }).sort()\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === 'hotels') {\n        const image = suggestion.item\n        return (\n          <div class=\"d-flex\">\n            <div>\n              <b-avatar src={image.thumbnailUrl} class=\"mr-50\"></b-avatar>\n            </div>\n            <div>\n              <span>{image.title}</span>\n            </div>\n          </div>\n        )\n      }\n      return suggestion.item.name\n    },\n    getSuggestionValue(suggestion) {\n      const { name, item } = suggestion\n      return name === 'hotels' ? item.title : item.name\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\" scoped>\npre{\n  min-height: 295px;\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: .5rem;\n}\n</style>\n",S={components:{VueAutosuggest:f,BCardCode:b["a"]},data:function(){return{datasuggest:[],filteredOptions:[],limit:10,selected:null,codeBasic:v}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},_=S,C=n("2877"),I=Object(C["a"])(_,a,u,!1,null,null,null),A=I.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSlot)+" ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,"input-props":e.inputProps,"on-selected":e.onSelected,limit:10},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{attrs:{src:s.item.img}}),n("div",{staticClass:"detail ml-50"},[n("b-card-text",{staticClass:"mb-0"},[e._v(" "+e._s(s.item.name)+" ")]),n("small",{staticClass:"text-muted"},[e._v(" "+e._s(s.item.time)+" ")])],1)],1)]}}])})],1)},w=[],P=n("d6e4"),D=n("e8a3"),k={components:{VueAutosuggest:f,BCardCode:b["a"],BCardText:P["a"],BAvatar:D["a"]},data:function(){return{datasuggest:[],filteredOptions:[],inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},limit:10,codeSlot:x}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onSelected:function(e){this.selected=e.item},onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},q=k,$=Object(C["a"])(q,j,w,!1,null,null,null),R=$.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Section"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSection)+" ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,limit:10},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)},B=[],V={components:{VueAutosuggest:f,BCardCode:b["a"],BAvatar:D["a"],BCardText:P["a"]},data:function(){var e=this;return{codeSection:y,datasuggest:[],query:"",suggestions:[],selected:null,inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},sectionConfigs:{developers:{limit:6,label:"Developers",onSelected:function(t){e.selected=t.item}},pages:{limit:6,label:"Pages",onSelected:function(t){e.selected=t.item}}},limit:10}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{fetchResults:function(e){var t=this.query;t&&(this.suggestions=[]);var n=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=this.datasuggest.data[0].pages.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit);n.length&&this.suggestions.push({name:"developers",data:n}),s.length&&this.suggestions.push({name:"pages",data:s})},renderSuggestion:function(e){var t=this.$createElement;if("developers"===e.name){var n=e.item;return t("div",{class:"d-flex align-items-center"},[t("b-avatar",{attrs:{src:n.img},class:"mr-50"}),t("div",{class:"detail"},[t("b-card-text",{class:"mb-0"},[n.name]),t("small",{class:"text-muted"},[n.email])])])}if("pages"===e.name){var s=e.item;return t("div",{class:"d-flex align-items-center"},[t("feather-icon",{attrs:{icon:s.icon,size:"18"},class:"mr-75"}),t("span",[s.name])])}return!1}}},T=V,z=Object(C["a"])(T,L,B,!1,null,null,null),E=z.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Ajax"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAjax)+" ")]},proxy:!0}])},[n("vue-autosuggest",{ref:"autocomplete",attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,"get-suggestion-value":e.getSuggestionValue},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("b-card-text",{staticClass:"mt-1"},[e._v(" Selected element (object): ")]),n("b-card",{staticClass:"border",attrs:{"no-body":""}},[n("pre",[e._v(e._s(JSON.stringify(e.selected,null,4)))])])],1)},M=[],N=(n("d3b7"),n("3ca3"),n("ddb0"),n("4e82"),n("205f")),U=n("bc3a"),H=n.n(U),G={components:{VueAutosuggest:f,BCardCode:b["a"],BCard:N["a"],BCardText:P["a"],BAvatar:D["a"]},data:function(){var e=this;return{codeAjax:O,query:"",results:[],timeout:null,selected:null,debounceMilliseconds:250,usersUrl:"https://jsonplaceholder.typicode.com/users",photosUrl:"https://jsonplaceholder.typicode.com/photos",inputProps:{id:"autosuggest__input_ajax",placeholder:"Do you feel lucky, punk?",class:"form-control",name:"ajax"},suggestions:[],sectionConfigs:{destinations:{limit:6,label:"Destination",onSelected:function(t){e.selected=t.item}},hotels:{limit:6,label:"Hotels",onSelected:function(t){e.selected=t.item}}}}},methods:{fetchResults:function(){var e=this,t=this.query;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var n=H.a.get(e.photosUrl),s=H.a.get(e.usersUrl);Promise.all([n,s]).then((function(n){e.suggestions=[],e.selected=null;var s=e.filterResults(n[0].data,t,"title"),i=e.filterResults(n[1].data,t,"name");i.length&&e.suggestions.push({name:"destinations",data:i}),s.length&&e.suggestions.push({name:"hotels",data:s})}))}),this.debounceMilliseconds)},filterResults:function(e,t,n){return e.filter((function(e){return e[n].toLowerCase().indexOf(t.toLowerCase())>-1&&e[n]})).sort()},renderSuggestion:function(e){var t=this.$createElement;if("hotels"===e.name){var n=e.item;return t("div",{class:"d-flex"},[t("div",[t("b-avatar",{attrs:{src:n.thumbnailUrl},class:"mr-50"})]),t("div",[t("span",[n.title])])])}return e.item.name},getSuggestionValue:function(e){var t=e.name,n=e.item;return"hotels"===t?n.title:n.name}}},J=G,X=(n("62fb"),Object(C["a"])(J,F,M,!1,null,"8f63cf16",null)),K=X.exports,W={components:{BRow:o["a"],BCol:r["a"],AutoSuggestBasic:A,AutoSuggestSlot:R,AutoSuggestSection:E,AutoSuggestAjax:K}},Q=W,Y=(n("ed07"),Object(C["a"])(Q,s,i,!1,null,null,null));t["default"]=Y.exports},e8a3:function(e,t,n){"use strict";n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return w}));var s=n("2b0e"),i=n("c637"),o=n("0056"),r=n("a723"),a=n("9b76"),u=n("7b1e"),l=n("3a58"),c=n("d82f"),d=n("cf75"),g=n("4a38"),p=n("8c18"),m=n("0759"),f=n("7386"),h=n("1947"),b=n("aa59");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="b-avatar",S=["sm",null,"lg"],_=.4,C=.7*_,I=function(e){return e=Object(u["n"])(e)&&Object(u["i"])(e)?Object(l["b"])(e,0):e,Object(u["h"])(e)?"".concat(e,"px"):e||null},A=Object(c["j"])(b["b"],["active","event","routerTag"]),j=Object(d["d"])(Object(c["m"])(x(x({},A),{},{alt:Object(d["c"])(r["u"],"avatar"),ariaLabel:Object(d["c"])(r["u"]),badge:Object(d["c"])(r["j"],!1),badgeLeft:Object(d["c"])(r["g"],!1),badgeOffset:Object(d["c"])(r["u"]),badgeTop:Object(d["c"])(r["g"],!1),badgeVariant:Object(d["c"])(r["u"],"primary"),button:Object(d["c"])(r["g"],!1),buttonType:Object(d["c"])(r["u"],"button"),icon:Object(d["c"])(r["u"]),rounded:Object(d["c"])(r["j"],!1),size:Object(d["c"])(r["p"]),square:Object(d["c"])(r["g"],!1),src:Object(d["c"])(r["u"]),text:Object(d["c"])(r["u"]),variant:Object(d["c"])(r["u"],"secondary")})),i["b"]),w=s["default"].extend({name:i["b"],mixins:[p["a"]],inject:{bvAvatarGroup:{default:null}},props:j,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var e=this.bvAvatarGroup;return I(e?e.size:this.size)},computedVariant:function(){var e=this.bvAvatarGroup;return e&&e.variant?e.variant:this.variant},computedRounded:function(){var e=this.bvAvatarGroup,t=!(!e||!e.square)||this.square,n=e&&e.rounded?e.rounded:this.rounded;return t?"0":""===n||(n||"circle")},fontStyle:function(){var e=this.computedSize,t=-1===S.indexOf(e)?"calc(".concat(e," * ").concat(_,")"):null;return t?{fontSize:t}:{}},marginStyle:function(){var e=this.computedSize,t=this.bvAvatarGroup,n=t?t.overlapScale:0,s=e&&n?"calc(".concat(e," * -").concat(n,")"):null;return s?{marginLeft:s,marginRight:s}:{}},badgeStyle:function(){var e=this.computedSize,t=this.badgeTop,n=this.badgeLeft,s=this.badgeOffset,i=s||"0px";return{fontSize:-1===S.indexOf(e)?"calc(".concat(e," * ").concat(C," )"):null,top:t?i:null,bottom:t?null:i,left:n?i:null,right:n?null:i}}},watch:{src:function(e,t){e!==t&&(this.localSrc=e||null)}},methods:{onImgError:function(e){this.localSrc=null,this.$emit(o["x"],e)},onClick:function(e){this.$emit(o["f"],e)}},render:function(e){var t,n=this.computedVariant,s=this.disabled,i=this.computedRounded,o=this.icon,r=this.localSrc,u=this.text,l=this.fontStyle,c=this.marginStyle,p=this.computedSize,v=this.button,_=this.buttonType,C=this.badge,I=this.badgeVariant,j=this.badgeStyle,w=!v&&Object(g["d"])(this),P=v?h["a"]:w?b["a"]:"span",D=this.alt,k=this.ariaLabel||null,q=null;this.hasNormalizedSlot()?q=e("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):r?(q=e("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:r,alt:D},on:{error:this.onImgError}}),q=e("span",{staticClass:"b-avatar-img"},[q])):q=o?e(m["a"],{props:{icon:o},attrs:{"aria-hidden":"true",alt:D}}):u?e("span",{staticClass:"b-avatar-text",style:l},[e("span",u)]):e(f["m"],{attrs:{"aria-hidden":"true",alt:D}});var $=e(),R=this.hasNormalizedSlot(a["d"]);if(C||""===C||R){var L=!0===C?"":C;$=e("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(I),I),style:j},[R?this.normalizeSlot(a["d"]):L])}var B={staticClass:O,class:(t={},y(t,"".concat(O,"-").concat(p),p&&-1!==S.indexOf(p)),y(t,"badge-".concat(n),!v&&n),y(t,"rounded",!0===i),y(t,"rounded-".concat(i),i&&!0!==i),y(t,"disabled",s),t),style:x(x({},c),{},{width:p,height:p}),attrs:{"aria-label":k||null},props:v?{variant:n,disabled:s,type:_}:w?Object(d["e"])(A,this):{},on:v||w?{click:this.onClick}:{}};return e(P,B,[q,$])}})},ed07:function(e,t,n){"use strict";n("12d05")}}]);
//# sourceMappingURL=chunk-7ee13a32.8269fcfe.js.map