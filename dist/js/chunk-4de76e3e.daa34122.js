(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4de76e3e"],{"541c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},i=[],r=n("205f"),s=n("4968"),o=n("ba06"),c=n("6197"),l=n("5843"),u=(n("c197"),n("84bf"),n("8d51")),d=n.n(u),g={components:{BCard:r["a"],BCardTitle:s["a"],BCardSubTitle:o["a"],BCardBody:c["a"],BCollapse:l["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=g,h=(n("8d54"),n("2877")),f=Object(h["a"])(p,a,i,!1,null,"aa799a9e",null);t["a"]=f.exports},5843:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var a,i=n("2b0e"),r=n("c637"),s="show",o=n("e863"),c=n("0056"),l=n("a723"),u=n("9b76"),d=n("906c"),g=n("6b77"),p=n("58f2"),h=n("d82f"),f=n("cf75"),b=n("90ef"),m=n("602d"),v=n("8c18"),y=n("b42e"),w=function(e){Object(d["F"])(e,"height",0),Object(d["B"])((function(){Object(d["w"])(e),Object(d["F"])(e,"height","".concat(e.scrollHeight,"px"))}))},O=function(e){Object(d["A"])(e,"height")},j=function(e){Object(d["F"])(e,"height","auto"),Object(d["F"])(e,"display","block"),Object(d["F"])(e,"height","".concat(Object(d["i"])(e).height,"px")),Object(d["w"])(e),Object(d["F"])(e,"height",0)},k=function(e){Object(d["A"])(e,"height")},F={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},A={enter:w,afterEnter:O,leave:j,afterLeave:k},x=i["default"].extend({name:r["v"],functional:!0,props:{appear:{type:Boolean,default:!1}},render:function(e,t){var n=t.props,a=t.data,i=t.children;return e("transition",Object(y["a"])(a,{props:F,on:A},{props:n}),i)}});function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=Object(g["d"])(r["u"],"toggle"),P=Object(g["d"])(r["u"],"request-state"),C=Object(g["e"])(r["u"],"accordion"),D=Object(g["e"])(r["u"],"state"),N=Object(g["e"])(r["u"],"sync-state"),T=Object(p["a"])("visible",{type:l["g"],defaultValue:!1}),L=T.mixin,I=T.props,z=T.prop,B=T.event,R=Object(f["d"])(Object(h["m"])(_(_(_({},b["b"]),I),{},{accordion:Object(f["c"])(l["u"]),appear:Object(f["c"])(l["g"],!1),isNav:Object(f["c"])(l["g"],!1),tag:Object(f["c"])(l["u"],"div")})),r["u"]),H=i["default"].extend({name:r["u"],mixins:[b["a"],L,v["a"],m["a"]],props:R,data:function(){return{show:this[z],transitioning:!1}},computed:{classObject:function(){var e=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!e,show:this.show&&!e}},slotScope:function(){var e=this;return{visible:this.show,close:function(){e.show=!1}}}},watch:(a={},$(a,z,(function(e){e!==this.show&&(this.show=e)})),$(a,"show",(function(e,t){e!==t&&this.emitState()})),a),created:function(){this.show=this[z]},mounted:function(){var e=this;this.show=this[z],this.listenOnRoot(E,this.handleToggleEvt),this.listenOnRoot(C,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){e.emitState()})),this.listenOnRoot(P,(function(t){t===e.safeId()&&e.$nextTick(e.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o["f"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(e){Object(g["c"])(e,window,"resize",this.handleResize,c["Y"]),Object(g["c"])(e,window,"orientationchange",this.handleResize,c["Y"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(c["S"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(c["T"])},onLeave:function(){this.transitioning=!0,this.$emit(c["w"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(c["v"])},emitState:function(){var e=this.show,t=this.accordion,n=this.safeId();this.$emit(B,e),this.emitOnRoot(D,n,e),t&&e&&this.emitOnRoot(C,n,t)},emitSync:function(){this.emitOnRoot(N,this.safeId(),this.show)},checkDisplayBlock:function(){var e=this.$el,t=Object(d["p"])(e,s);Object(d["y"])(e,s);var n="block"===Object(d["k"])(e).display;return t&&Object(d["b"])(e,s),n},clickHandler:function(e){var t=e.target;this.isNav&&t&&"block"===Object(d["k"])(this.$el).display&&(!Object(d["v"])(t,".nav-link,.dropdown-item")&&!Object(d["e"])(".nav-link,.dropdown-item",t)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(e){e===this.safeId()&&this.toggle()},handleAccordionEvt:function(e,t){var n=this.accordion,a=this.show;if(n&&n===t){var i=e===this.safeId();(i&&!a||!i&&a)&&this.toggle()}},handleResize:function(){this.show="block"===Object(d["k"])(this.$el).display}},render:function(e){var t=this.appear,n=e(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["i"],this.slotScope));return e(x,{props:{appear:t},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},"84bf":function(e,t,n){},"8d51":function(e,t,n){"use strict";function a(e){for(var t=arguments,n=1;n<arguments.length;n++)for(var a in arguments[n])e[a]=t[n][a];return e}var i={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var n=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),i=t.props.inline,r=t.props.language,s=Prism.languages[r],o="language-"+r;return i?e("code",a({},t.data,{class:[t.data.class,o],domProps:a({},t.data.domProps,{innerHTML:Prism.highlight(n,s)})})):e("pre",a({},t.data,{class:[t.data.class,o]}),[e("code",{class:o,domProps:{innerHTML:Prism.highlight(n,s)}})])}};e.exports=i},"8d54":function(e,t,n){"use strict";n("ecda")},a15b:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("b42e"),i=n("c637"),r=n("a723"),s=n("2326"),o=n("228e"),c=n("6c06"),l=n("b508"),u=n("d82f"),d=n("cf75"),g=n("fa73");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=["start","end","center"],m=Object(l["a"])((function(e,t){return t=Object(g["h"])(Object(g["g"])(t)),t?Object(g["c"])(["row-cols",e,t].filter(c["a"]).join("-")):null})),v=Object(l["a"])((function(e){return Object(g["c"])(e.replace("cols",""))})),y=[],w=function(){var e=Object(o["b"])().reduce((function(e,t){return e[Object(d["g"])(t,"cols")]=Object(d["c"])(r["p"]),e}),Object(u["c"])(null));return y=Object(u["h"])(e),Object(d["d"])(Object(u["m"])(h(h({},e),{},{alignContent:Object(d["c"])(r["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(b,"between","around","stretch"),e)})),alignH:Object(d["c"])(r["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(b,"between","around"),e)})),alignV:Object(d["c"])(r["u"],null,(function(e){return Object(s["a"])(Object(s["b"])(b,"baseline","stretch"),e)})),noGutters:Object(d["c"])(r["g"],!1),tag:Object(d["c"])(r["u"],"div")})),i["Ab"])},O={name:i["Ab"],functional:!0,get props(){return delete this.props,this.props=w(),this.props},render:function(e,t){var n,i=t.props,r=t.data,s=t.children,o=i.alignV,c=i.alignH,l=i.alignContent,u=[];return y.forEach((function(e){var t=m(v(e),i[e]);t&&u.push(t)})),u.push((n={"no-gutters":i.noGutters},f(n,"align-items-".concat(o),o),f(n,"justify-content-".concat(c),c),f(n,"align-content-".concat(l),l),n)),e(i.tag,Object(a["a"])(r,{staticClass:"row",class:u}),s)}}},c197:function(e,t,n){(function(t){var n="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++n}),e["__id"]},clone:function e(t,n){var i,r,s=a.util.type(t);switch(n=n||{},s){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var o in i={},n[r]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case"Array":return r=a.util.objId(t),n[r]?n[r]:(i=[],n[r]=i,t.forEach((function(t,a){i[a]=e(t,n)})),i);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i=i||a.languages;var r=i[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var c in n)n.hasOwnProperty(c)&&(s[c]=n[c]);n.hasOwnProperty(o)||(s[o]=r[o])}var l=i[e];return i[e]=s,a.languages.DFS(a.languages,(function(t,n){n===l&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,i,r){r=r||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],i||o);var c=t[o],l=a.util.type(c);"Object"!==l||r[s(c)]?"Array"!==l||r[s(c)]||(r[s(c)]=!0,e(c,n,o,r)):(r[s(c)]=!0,e(c,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(n,i,r){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var c=n.parentNode;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var l=n.textContent,u={element:n,language:s,grammar:o,code:l};function d(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),r&&r.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(r&&r.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(i&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){d(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(a.highlight(u.code,u.grammar,u.language));else d(a.util.encode(u.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,s,o,c){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var u=n[l];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(c&&c==l+","+d)return;var g=u[d],p=g.inside,h=!!g.lookbehind,f=!!g.greedy,b=0,m=g.alias;if(f&&!g.pattern.global){var v=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,v+"g")}g=g.pattern||g;for(var y=r,w=s;y<t.length;w+=t[y].length,++y){var O=t[y];if(t.length>e.length)return;if(!(O instanceof i)){if(f&&y!=t.length-1){g.lastIndex=w;var j=g.exec(e);if(!j)break;for(var k=j.index+(h&&j[1]?j[1].length:0),F=j.index+j[0].length,A=y,x=w,S=t.length;A<S&&(x<F||!t[A].type&&!t[A-1].greedy);++A)x+=t[A].length,k>=x&&(++y,w=x);if(t[y]instanceof i)continue;_=A-y,O=e.slice(w,x),j.index-=w}else{g.lastIndex=0;j=g.exec(O);var _=1}if(j){h&&(b=j[1]?j[1].length:0);k=j.index+b,j=j[0].slice(b),F=k+j.length;var $=O.slice(0,k),E=O.slice(F),P=[y,_];$&&(++y,w+=$.length,P.push($));var C=new i(l,p?a.tokenize(j,p):j,m,j,f);if(P.push(C),E&&P.push(E),Array.prototype.splice.apply(t,P),1!=_&&a.matchGrammar(e,t,n,y,w,!0,l+","+d),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}},Token:i};function i(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}if(e.Prism=a,i.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return i.stringify(e,t)})).join("");var n={type:e.type,content:i.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),i=n.language,r=n.code,s=n.immediateClose;e.postMessage(a.highlight(r,a.languages[i],i)),s&&e.close()}),!1),a):a;var r=a.util.currentScript();if(r&&(a.filename=r.src,r.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){function s(){a.manual||a.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&r&&r.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return a}(n);e.exports&&(e.exports=a),"undefined"!==typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",r)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var n,i=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;while(r&&!s.test(r.className))r=r.parentNode;if(r&&(n=(e.className.match(s)||[,""])[1]),!n){var o=(i.match(/\.(\w+)$/)||[,""])[1];n=t[o]||o}var c=document.createElement("code");c.className="language-"+n,e.textContent="",c.textContent="Loading…",e.appendChild(c);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,a.highlightElement(c),e.setAttribute("data-src-loaded","")):l.status>=400?c.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:c.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,n("c8ba"))},ecda:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4de76e3e.daa34122.js.map