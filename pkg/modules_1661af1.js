;/*!/modules/util/event/event.es*/
define("modules/util/event/event.es",function(e,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=e("components/zepto/main"),u=t(o),a=function(){function e(){r(this,e),this.eventMonitor=u["default"]({})}return i(e,[{key:"addListener",value:function(e,n){return this.eventMonitor.on(e,n),this}},{key:"removeListener",value:function(e){return this.eventMonitor.off(e),this}},{key:"emit",value:function(e){for(var n,t=arguments.length,r=Array(t>1?t-1:0),i=1;t>i;i++)r[i-1]=arguments[i];return(n=this.eventMonitor).trigger.apply(n,[e].concat(r)),this}},{key:"on",value:function(){return this.addListener.apply(this,arguments)}},{key:"off",value:function(){return this.removeListener.apply(this,arguments)}},{key:"once",value:function(e,n){return this.eventMonitor.once(e,n),this}}]),e}(),s=new a;n.EventEmitter=a,n.event=s});
;/*!/modules/html/score/score.es*/
define("modules/html/score/score.es",function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){s.event.on("score/update",function(e,t){i["default"]("#score").html(t.score)}),s.event.on("time/update",function(e,t){i["default"]("#timer").html(t.time)})}Object.defineProperty(t,"__esModule",{value:!0});var u=e("components/zepto/main"),i=n(u),s=e("modules/util/event/event.es");t.init=o});
;/*!/modules/lib/template/template.js*/
define("modules/lib/template/template",function(e,n,r){!function(e,t){var o=t(e);if("function"==typeof define&&define.amd)define("template",function(){return o});else if("object"==typeof n)r.exports=o;else{var _=e.template;o.noConflict=function(){return e.template===o&&(e.template=_),o},e.template=o}}(this,function(){"use strict";function e(e){if(null===e)return"null";var n=typeof e;if("object"!==n)return n;var r=f.call(e).slice(8,-1).toLowerCase();return"object"!==r?r:e.constructor==Object?r:"unkonw"}function n(n){return"object"===e(n)}function r(){for(var e=arguments[0]||{},n=Array.prototype.slice.call(arguments,1),r=n.length,t=0;r>t;t++){var o=n[t];for(var _ in o)e[_]=o[_]}return e}function t(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function _(e){function n(){return"template.js error"}var r="template.js error\n\n";for(var t in e)r+="<"+t+">\n"+e[t]+"\n\n";return r+="<message>\n"+e.message+"\n\n","undefined"!=typeof console&&console.error&&console.error(r),l.error(e),n.toString=function(){return'__code__ = "template.js error"'},n}function c(e,n){function r(e){return e=e.replace(/('|")/g,"\\$1").replace(/\n/g," "),';__code__ += ("'+e+'")\n'}function t(e){var n;return-1!==e.search(/^=/)?(n=e.slice(1),n=a?"__encodeHTML__(typeof ("+n+') === "undefined" ? "" : '+n+")":n,";__code__ += ("+n+")\n"):-1!==e.search(/^:h=/)?(n=e.slice(3),";__code__ += (__encodeHTML__(typeof ("+n+') === "undefined" ? "" : '+n+"))\n"):-1!==e.search(/^:=/)?(n=e.slice(2),";__code__ += (typeof ("+n+') === "undefined" ? "" : '+n+")\n"):-1!==e.search(/^:u=/)?(n=e.slice(3),";__code__ += (typeof ("+n+') === "undefined" ? "" : encodeURI('+n+"))\n"):";"+e+"\n"}for(var o="",_=n.sTag,c=n.eTag,a=n.escape,u=e.split(_),i=0,l=u.length;l>i;i++){var f=u[i].split(c);1===f.length?o+=r(f[0]):(o+=t(f[0],!0),f[1]&&(o+=r(f[1])))}return o}function a(e,n){var r=c(e,n),t='\n    var html = (function (__data__, __encodeHTML__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n',o="\n        ;return __code__;\n    }(__data__, __encodeHTML__));\n    return html;\n",_=t+r+o;_=_.replace(/[\r]/g," ");try{var a=new Function("__data__","__encodeHTML__",_);return a.toString=function(){return r},a}catch(u){throw u.temp="function anonymous(__data__, __encodeHTML__) {"+_+"}",u}}function u(e,n){function c(r){try{var c=u(r,t);return c=n.compress?o(c):c}catch(a){return a.name="RenderError",a.tpl=e,a.render=u.toString(),_(a)}}n=r({},l,n);try{var u=a(e,n)}catch(i){return i.name="CompileError",i.tpl=e,i.render=i.temp,delete i.temp,_(i)}return c.toString=function(){return u.toString()},c}function i(e,r){if("string"!=typeof e)return"";var t=u(e);return n(r)?t(r):t}var l={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(){}},f={}.toString;return i.config=function(e){return n(e)&&(l=r(l,e)),r({},l)},i.__encodeHTML=t,i.__compress=o,i.__handelError=_,i.__compile=u,i.version="0.6.1",i})});
;/*!/modules/util/template/template.es*/
define("modules/util/template/template.es",function(e,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e("modules/lib/template/template"),u=l(a);u["default"].config({sTag:"<#",eTag:"#>"}),window.template=u["default"],t.template=u["default"]});
;/*!/modules/html/screen/screen.es*/
define("modules/html/screen/screen.es",function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function render(){var e=level>=levelMap.length?levelMap[levelMap.length-1]:levelMap[level];level+=1;var t=Math.floor(Math.random()*e*e);list=new Array(e*e),list[t]=1;var r=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),l=r.toString(16)+n.toString(16)+o.toString(16),a=((r+rank>255?r-rank:r+rank)%255).toString(16)+((n+rank>255?n-rank:n+rank)%255).toString(16)+((o+rank>255?o-rank:o+rank)%255).toString(16);$screen.html(tpl({list:list,width:100/e+"%",color1:l,color2:a}))}function init(){render(),_zepto2["default"]("#screen").on("touchstart, click",".block",function(e){e.preventDefault();var t=_zepto2["default"](this).data("index");list[t]&&(rank=10>rank?10:rank-2,render(),_utilEventEvent.event.emit("screen/click"))}),_utilEventEvent.event.on("game/restart",function(){level=0,rank=40,render()})}Object.defineProperty(exports,"__esModule",{value:!0});var _zepto=require("components/zepto/main"),_zepto2=_interopRequireDefault(_zepto),_zeptoTouch=require("components/zepto/touch"),_zeptoTouch2=_interopRequireDefault(_zeptoTouch),_utilEventEvent=require("modules/util/event/event.es"),_utilTemplateTemplate=require("modules/util/template/template.es"),$screen=_zepto2["default"]("#screen"),tpl=function render(data){var keyArr=[],valArr=[];data=data||{},data.__encodeHTML__=window.template.__encodeHTML;for(var key in data)keyArr.push('"'+key+'"'),valArr.push(data[key]);var source="new Function("+keyArr.join(",")+', "\\"use strict\\";var __code__ = \\"\\";;__code__ += (\\"\\");for (var i = 0; i < list.length; i++) {;__code__ += (\\" <div class=\\\\\\"block\\\\\\" data-index=\\\\\\"\\");__code__ += (__encodeHTML__(typeof (i) === \\"undefined\\" ? \\"\\" : i));__code__ += (\\"\\\\\\" style=\\\\\\"width: \\");__code__ += (__encodeHTML__(typeof (width) === \\"undefined\\" ? \\"\\" : width));__code__ += (\\";\\\\\\">     <div class=\\\\\\"block-inner\\\\\\" style=\\\\\\"background-color: #\\");__code__ += (__encodeHTML__(typeof (list[i] ? color2 : color1) === \\"undefined\\" ? \\"\\" : list[i] ? color2 : color1));__code__ += (\\"\\\\\\"></div> </div> \\");};__code__ += (\\" \\");return __code__")';try{var fn=eval(source),html=fn.apply(null,valArr)}catch(e){return e.name="RenderError",e.tpl="modules/html/screen/screen.tmpl",window.template.__handelError(e),"template.js error"}return html},levelMap=[2,3,4,5,5,6,6,7,7,7,8,8,8,8,9],level=0,rank=40,list;exports.init=init});