parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G5Xn":[function(require,module,exports) {

},{}],"i1Q6":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e);
},{}],"g31e":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"zRh1":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"g31e"}],"BxvP":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"zotD":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"BxvP"}],"wLcK":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"MLNE":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"wLcK"}],"kxqa":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"BxvP","./_global":"i1Q6"}],"R6c1":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"MLNE","./_fails":"wLcK","./_dom-create":"kxqa"}],"EKwp":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"BxvP"}],"Gfzd":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(c){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"zotD","./_ie8-dom-define":"R6c1","./_to-primitive":"EKwp","./_descriptors":"MLNE"}],"WCHM":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"akPY":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"Gfzd","./_property-desc":"WCHM","./_descriptors":"MLNE"}],"yS17":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"vSO4":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"i1Q6","./_core":"zKeE","./_ctx":"zRh1","./_hide":"akPY","./_has":"yS17"}],"htFH":[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});
},{"./_export":"vSO4","./_descriptors":"MLNE","./_object-dp":"Gfzd"}],"v7pm":[function(require,module,exports) {
require("../../modules/es6.object.define-property");var e=require("../../modules/_core").Object;module.exports=function(r,o,t){return e.defineProperty(r,o,t)};
},{"../../modules/es6.object.define-property":"htFH","../../modules/_core":"zKeE"}],"eIqn":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":"v7pm"}],"ShN9":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"E5Ce":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"ShN9"}],"U72i":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"Wyka":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"E5Ce","./_defined":"U72i"}],"MpYs":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"S7IM":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"MpYs"}],"Zwq5":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"MpYs"}],"LNnS":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"Wyka","./_to-length":"S7IM","./_to-absolute-index":"Zwq5"}],"kq3x":[function(require,module,exports) {
module.exports=!0;
},{}],"NB7d":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"zKeE","./_global":"i1Q6","./_library":"kq3x"}],"X6va":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"wuYm":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"NB7d","./_uid":"X6va"}],"B9Lq":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"yS17","./_to-iobject":"Wyka","./_array-includes":"LNnS","./_shared-key":"wuYm"}],"KxjL":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"knrM":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"gjjs":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"Gfzd","./_an-object":"zotD","./_object-keys":"knrM","./_descriptors":"MLNE"}],"FshL":[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F*!require("./_descriptors"),"Object",{defineProperties:require("./_object-dps")});
},{"./_export":"vSO4","./_descriptors":"MLNE","./_object-dps":"gjjs"}],"tvE3":[function(require,module,exports) {
require("../../modules/es6.object.define-properties");var e=require("../../modules/_core").Object;module.exports=function(r,o){return e.defineProperties(r,o)};
},{"../../modules/es6.object.define-properties":"FshL","../../modules/_core":"zKeE"}],"CpmN":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/define-properties");
},{"core-js/library/fn/object/define-properties":"tvE3"}],"Ni5N":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys").concat("length","prototype");exports.f=Object.getOwnPropertyNames||function(t){return e(t,r)};
},{"./_object-keys-internal":"B9Lq","./_enum-bug-keys":"KxjL"}],"Ocr3":[function(require,module,exports) {
exports.f=Object.getOwnPropertySymbols;
},{}],"cz1j":[function(require,module,exports) {
var e=require("./_object-gopn"),r=require("./_object-gops"),o=require("./_an-object"),t=require("./_global").Reflect;module.exports=t&&t.ownKeys||function(t){var c=e.f(o(t)),n=r.f;return n?c.concat(n(t)):c};
},{"./_object-gopn":"Ni5N","./_object-gops":"Ocr3","./_an-object":"zotD","./_global":"i1Q6"}],"z7R8":[function(require,module,exports) {
exports.f={}.propertyIsEnumerable;
},{}],"sxPs":[function(require,module,exports) {
var e=require("./_object-pie"),r=require("./_property-desc"),i=require("./_to-iobject"),t=require("./_to-primitive"),o=require("./_has"),c=require("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;exports.f=require("./_descriptors")?u:function(p,q){if(p=i(p),q=t(q,!0),c)try{return u(p,q)}catch(_){}if(o(p,q))return r(!e.f.call(p,q),p[q])};
},{"./_object-pie":"z7R8","./_property-desc":"WCHM","./_to-iobject":"Wyka","./_to-primitive":"EKwp","./_has":"yS17","./_ie8-dom-define":"R6c1","./_descriptors":"MLNE"}],"vUQk":[function(require,module,exports) {
"use strict";var e=require("./_object-dp"),r=require("./_property-desc");module.exports=function(t,i,o){i in t?e.f(t,i,r(0,o)):t[i]=o};
},{"./_object-dp":"Gfzd","./_property-desc":"WCHM"}],"Y0jO":[function(require,module,exports) {
var e=require("./_export"),r=require("./_own-keys"),t=require("./_to-iobject"),o=require("./_object-gopd"),i=require("./_create-property");e(e.S,"Object",{getOwnPropertyDescriptors:function(e){for(var u,c,n=t(e),p=o.f,q=r(n),_={},a=0;q.length>a;)void 0!==(c=p(n,u=q[a++]))&&i(_,u,c);return _}});
},{"./_export":"vSO4","./_own-keys":"cz1j","./_to-iobject":"Wyka","./_object-gopd":"sxPs","./_create-property":"vUQk"}],"ANJ4":[function(require,module,exports) {
require("../../modules/es7.object.get-own-property-descriptors"),module.exports=require("../../modules/_core").Object.getOwnPropertyDescriptors;
},{"../../modules/es7.object.get-own-property-descriptors":"Y0jO","../../modules/_core":"zKeE"}],"Hv1v":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/get-own-property-descriptors");
},{"core-js/library/fn/object/get-own-property-descriptors":"ANJ4"}],"cOHw":[function(require,module,exports) {
var e=require("./_export"),r=require("./_core"),t=require("./_fails");module.exports=function(c,i){var o=(r.Object||{})[c]||Object[c],u={};u[c]=i(o),e(e.S+e.F*t(function(){o(1)}),"Object",u)};
},{"./_export":"vSO4","./_core":"zKeE","./_fails":"wLcK"}],"hHLa":[function(require,module,exports) {
var r=require("./_to-iobject"),e=require("./_object-gopd").f;require("./_object-sap")("getOwnPropertyDescriptor",function(){return function(t,o){return e(r(t),o)}});
},{"./_to-iobject":"Wyka","./_object-gopd":"sxPs","./_object-sap":"cOHw"}],"SQjP":[function(require,module,exports) {
require("../../modules/es6.object.get-own-property-descriptor");var e=require("../../modules/_core").Object;module.exports=function(r,o){return e.getOwnPropertyDescriptor(r,o)};
},{"../../modules/es6.object.get-own-property-descriptor":"hHLa","../../modules/_core":"zKeE"}],"mQ9c":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/get-own-property-descriptor");
},{"core-js/library/fn/object/get-own-property-descriptor":"SQjP"}],"gojl":[function(require,module,exports) {
module.exports=require("./_hide");
},{"./_hide":"akPY"}],"e8vu":[function(require,module,exports) {
var e=require("./_uid")("meta"),r=require("./_is-object"),t=require("./_has"),n=require("./_object-dp").f,i=0,u=Object.isExtensible||function(){return!0},f=!require("./_fails")(function(){return u(Object.preventExtensions({}))}),o=function(r){n(r,e,{value:{i:"O"+ ++i,w:{}}})},s=function(n,i){if(!r(n))return"symbol"==typeof n?n:("string"==typeof n?"S":"P")+n;if(!t(n,e)){if(!u(n))return"F";if(!i)return"E";o(n)}return n[e].i},c=function(r,n){if(!t(r,e)){if(!u(r))return!0;if(!n)return!1;o(r)}return r[e].w},E=function(r){return f&&a.NEED&&u(r)&&!t(r,e)&&o(r),r},a=module.exports={KEY:e,NEED:!1,fastKey:s,getWeak:c,onFreeze:E};
},{"./_uid":"X6va","./_is-object":"BxvP","./_has":"yS17","./_object-dp":"Gfzd","./_fails":"wLcK"}],"Ug9I":[function(require,module,exports) {
var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
},{"./_shared":"NB7d","./_uid":"X6va","./_global":"i1Q6"}],"UtKM":[function(require,module,exports) {
var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
},{"./_object-dp":"Gfzd","./_has":"yS17","./_wks":"Ug9I"}],"ZxII":[function(require,module,exports) {
exports.f=require("./_wks");
},{"./_wks":"Ug9I"}],"c2zY":[function(require,module,exports) {

var r=require("./_global"),e=require("./_core"),o=require("./_library"),i=require("./_wks-ext"),l=require("./_object-dp").f;module.exports=function(u){var a=e.Symbol||(e.Symbol=o?{}:r.Symbol||{});"_"==u.charAt(0)||u in a||l(a,u,{value:i.f(u)})};
},{"./_global":"i1Q6","./_core":"zKeE","./_library":"kq3x","./_wks-ext":"ZxII","./_object-dp":"Gfzd"}],"ycyv":[function(require,module,exports) {
var e=require("./_object-keys"),r=require("./_object-gops"),o=require("./_object-pie");module.exports=function(t){var u=e(t),i=r.f;if(i)for(var c,f=i(t),a=o.f,l=0;f.length>l;)a.call(t,c=f[l++])&&u.push(c);return u};
},{"./_object-keys":"knrM","./_object-gops":"Ocr3","./_object-pie":"z7R8"}],"ayXv":[function(require,module,exports) {
var r=require("./_cof");module.exports=Array.isArray||function(e){return"Array"==r(e)};
},{"./_cof":"ShN9"}],"mbLO":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"U72i"}],"ebIA":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"i1Q6"}],"TNJq":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"zotD","./_object-dps":"gjjs","./_enum-bug-keys":"KxjL","./_shared-key":"wuYm","./_dom-create":"kxqa","./_html":"ebIA"}],"rMkZ":[function(require,module,exports) {
var e=require("./_to-iobject"),t=require("./_object-gopn").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n=function(e){try{return t(e)}catch(o){return r.slice()}};module.exports.f=function(c){return r&&"[object Window]"==o.call(c)?n(c):t(e(c))};
},{"./_to-iobject":"Wyka","./_object-gopn":"Ni5N"}],"Aa2f":[function(require,module,exports) {

"use strict";var e=require("./_global"),r=require("./_has"),t=require("./_descriptors"),i=require("./_export"),n=require("./_redefine"),o=require("./_meta").KEY,u=require("./_fails"),s=require("./_shared"),f=require("./_set-to-string-tag"),c=require("./_uid"),a=require("./_wks"),l=require("./_wks-ext"),p=require("./_wks-define"),b=require("./_enum-keys"),y=require("./_is-array"),h=require("./_an-object"),_=require("./_is-object"),q=require("./_to-object"),g=require("./_to-iobject"),m=require("./_to-primitive"),v=require("./_property-desc"),d=require("./_object-create"),S=require("./_object-gopn-ext"),j=require("./_object-gopd"),O=require("./_object-gops"),w=require("./_object-dp"),k=require("./_object-keys"),P=j.f,F=w.f,E=S.f,N=e.Symbol,J=e.JSON,x=J&&J.stringify,I="prototype",T=a("_hidden"),C=a("toPrimitive"),M={}.propertyIsEnumerable,D=s("symbol-registry"),G=s("symbols"),K=s("op-symbols"),Q=Object[I],W="function"==typeof N&&!!O.f,Y=e.QObject,z=!Y||!Y[I]||!Y[I].findChild,A=t&&u(function(){return 7!=d(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(e,r,t){var i=P(Q,r);i&&delete Q[r],F(e,r,t),i&&e!==Q&&F(Q,r,i)}:F,B=function(e){var r=G[e]=d(N[I]);return r._k=e,r},H=W&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},L=function(e,t,i){return e===Q&&L(K,t,i),h(e),t=m(t,!0),h(i),r(G,t)?(i.enumerable?(r(e,T)&&e[T][t]&&(e[T][t]=!1),i=d(i,{enumerable:v(0,!1)})):(r(e,T)||F(e,T,v(1,{})),e[T][t]=!0),A(e,t,i)):F(e,t,i)},R=function(e,r){h(e);for(var t,i=b(r=g(r)),n=0,o=i.length;o>n;)L(e,t=i[n++],r[t]);return e},U=function(e,r){return void 0===r?d(e):R(d(e),r)},V=function(e){var t=M.call(this,e=m(e,!0));return!(this===Q&&r(G,e)&&!r(K,e))&&(!(t||!r(this,e)||!r(G,e)||r(this,T)&&this[T][e])||t)},X=function(e,t){if(e=g(e),t=m(t,!0),e!==Q||!r(G,t)||r(K,t)){var i=P(e,t);return!i||!r(G,t)||r(e,T)&&e[T][t]||(i.enumerable=!0),i}},Z=function(e){for(var t,i=E(g(e)),n=[],u=0;i.length>u;)r(G,t=i[u++])||t==T||t==o||n.push(t);return n},$=function(e){for(var t,i=e===Q,n=E(i?K:g(e)),o=[],u=0;n.length>u;)!r(G,t=n[u++])||i&&!r(Q,t)||o.push(G[t]);return o};W||(n((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=c(arguments.length>0?arguments[0]:void 0),i=function(t){this===Q&&i.call(K,t),r(this,T)&&r(this[T],e)&&(this[T][e]=!1),A(this,e,v(1,t))};return t&&z&&A(Q,e,{configurable:!0,set:i}),B(e)})[I],"toString",function(){return this._k}),j.f=X,w.f=L,require("./_object-gopn").f=S.f=Z,require("./_object-pie").f=V,O.f=$,t&&!require("./_library")&&n(Q,"propertyIsEnumerable",V,!0),l.f=function(e){return B(a(e))}),i(i.G+i.W+i.F*!W,{Symbol:N});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ee.length>re;)a(ee[re++]);for(var te=k(a.store),ie=0;te.length>ie;)p(te[ie++]);i(i.S+i.F*!W,"Symbol",{for:function(e){return r(D,e+="")?D[e]:D[e]=N(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var r in D)if(D[r]===e)return r},useSetter:function(){z=!0},useSimple:function(){z=!1}}),i(i.S+i.F*!W,"Object",{create:U,defineProperty:L,defineProperties:R,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$});var ne=u(function(){O.f(1)});i(i.S+i.F*ne,"Object",{getOwnPropertySymbols:function(e){return O.f(q(e))}}),J&&i(i.S+i.F*(!W||u(function(){var e=N();return"[null]"!=x([e])||"{}"!=x({a:e})||"{}"!=x(Object(e))})),"JSON",{stringify:function(e){for(var r,t,i=[e],n=1;arguments.length>n;)i.push(arguments[n++]);if(t=r=i[1],(_(r)||void 0!==e)&&!H(e))return y(r)||(r=function(e,r){if("function"==typeof t&&(r=t.call(this,e,r)),!H(r))return r}),i[1]=r,x.apply(J,i)}}),N[I][C]||require("./_hide")(N[I],C,N[I].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(e.JSON,"JSON",!0);
},{"./_global":"i1Q6","./_has":"yS17","./_descriptors":"MLNE","./_export":"vSO4","./_redefine":"gojl","./_meta":"e8vu","./_fails":"wLcK","./_shared":"NB7d","./_set-to-string-tag":"UtKM","./_uid":"X6va","./_wks":"Ug9I","./_wks-ext":"ZxII","./_wks-define":"c2zY","./_enum-keys":"ycyv","./_is-array":"ayXv","./_an-object":"zotD","./_is-object":"BxvP","./_to-object":"mbLO","./_to-iobject":"Wyka","./_to-primitive":"EKwp","./_property-desc":"WCHM","./_object-create":"TNJq","./_object-gopn-ext":"rMkZ","./_object-gopd":"sxPs","./_object-gops":"Ocr3","./_object-dp":"Gfzd","./_object-keys":"knrM","./_object-gopn":"Ni5N","./_object-pie":"z7R8","./_library":"kq3x","./_hide":"akPY"}],"hqWT":[function(require,module,exports) {
require("../../modules/es6.symbol"),module.exports=require("../../modules/_core").Object.getOwnPropertySymbols;
},{"../../modules/es6.symbol":"Aa2f","../../modules/_core":"zKeE"}],"DovH":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/get-own-property-symbols");
},{"core-js/library/fn/object/get-own-property-symbols":"hqWT"}],"PDcB":[function(require,module,exports) {
var e=require("./_to-object"),r=require("./_object-keys");require("./_object-sap")("keys",function(){return function(t){return r(e(t))}});
},{"./_to-object":"mbLO","./_object-keys":"knrM","./_object-sap":"cOHw"}],"eOjq":[function(require,module,exports) {
require("../../modules/es6.object.keys"),module.exports=require("../../modules/_core").Object.keys;
},{"../../modules/es6.object.keys":"PDcB","../../modules/_core":"zKeE"}],"d81a":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/keys");
},{"core-js/library/fn/object/keys":"eOjq"}],"n5FU":[function(require,module,exports) {
var e=require("../core-js/object/define-property");function r(r,n,o){return n in r?e(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}module.exports=r;
},{"../core-js/object/define-property":"eIqn"}],"Tzth":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"xM5U":[function(require,module,exports) {
var e=require("../core-js/object/define-property");function r(r,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),e(r,t.key,t)}}function n(e,n,o){return n&&r(e.prototype,n),o&&r(e,o),e}module.exports=n;
},{"../core-js/object/define-property":"eIqn"}],"uOZi":[function(require,module,exports) {
module.exports="health.43e5a605.jpg";
},{}],"wVG2":[function(require,module,exports) {
module.exports="math.4b90819c.jpg";
},{}],"lgxD":[function(require,module,exports) {
module.exports="movies.2f51b271.jpg";
},{}],"Fxl5":[function(require,module,exports) {
module.exports="music.0a95f35f.jpg";
},{}],"BorI":[function(require,module,exports) {
module.exports="politics.a533165c.jpg";
},{}],"Ffsf":[function(require,module,exports) {
module.exports="programming.de6dd66e.jpg";
},{}],"LjZ5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.allQuestions=exports.categories=void 0;var e=r(require("../public/img/health.jpg")),i=r(require("../public/img/math.jpg")),n=r(require("../public/img/movies.jpg")),s=r(require("../public/img/music.jpg")),a=r(require("../public/img/politics.jpg")),o=r(require("../public/img/programming.jpg"));function r(e){return e&&e.__esModule?e:{default:e}}var t=[{name:"Math",img:i.default},{name:"Movies",img:n.default},{name:"Music",img:s.default}];exports.categories=t;var c=[{category:"Math",questions:[{question:"3-5*4-1*7 = ?",choices:["-18","-20","-24"],answer:"-24"},{question:"The number of 3-digit numbers divisible by 6, is",choices:["150","166","149"],answer:"150"},{question:"Which of the following numbers gives 240 when added to its own square",choices:["16","15","17"],answer:"15"},{question:"106 × 106 – 94 × 94 = ?",choices:["2400","2004","1904"],answer:"2400"},{question:"What is 1004 divided by 2?",choices:["502","520","5"],answer:"502"}]},{category:"Movies",questions:[{question:"What was the first movie in the Marvel Cinematic Universe?",choices:["The Avengers","Iron Man","Spider-Man"],answer:"Iron Man"},{question:'Which of these actors DIDN\'T appear in "Pulp Fiction"?',choices:["Samuel L. Jackson","John Turturro","Bruce Willis"],answer:"John Turturro"},{question:"What is it called when an actor breaks character to directly address the audience?",choices:["Breaking the 4th wall","Bending the narrative","Sweeping the rug"],answer:"Breaking the 4th wall"},{question:"Which of these movies was NOT directed by M. Night Shyamalan?",choices:["The Sixth Sense","Signs","The Ring"],answer:"The Ring"},{question:'In the movie "Frozen", who is Olaf?',choices:["A snowman","A ghost","A knight"],answer:"A snowman"}]},{category:"Music",questions:[{question:"What is Fergie's real name ?",choices:["The Fergie is her real name","Stacie Ann Ferguson","Ann Stacy Fergie"],answer:"Stacie Ann Ferguson"},{question:'Who wrote the song "The way I live" ?',choices:["Baby Boy da Prince","T-Pain","Akon"],answer:"Baby Boy da Prince"},{question:'"Big Girls Don\'t Cry" is a song by Fergie.',choices:["True","False"],answer:"True"},{question:"Who won American Idol season one ?",choices:["Kelly Clarkson","Ruben Studdard","Fantasia"],answer:"Kelly Clarkson"},{question:"The song Umbrella was written by who ?",choices:["Rihanna","Hanna Montana","PCD"],answer:"Rihanna"}]}];exports.allQuestions=c;
},{"../public/img/health.jpg":"uOZi","../public/img/math.jpg":"wVG2","../public/img/movies.jpg":"lgxD","../public/img/music.jpg":"Fxl5","../public/img/politics.jpg":"BorI","../public/img/programming.jpg":"Ffsf"}],"K2h5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime-corejs2/helpers/classCallCheck")),t=i(require("@babel/runtime-corejs2/helpers/createClass"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function i(t,a){(0,e.default)(this,i),this.totalDuration=t,this.callbacks=a,this.timeRemaining=t,this.intervalId=null}return(0,t.default)(i,[{key:"startTimer",value:function(){var e=this;this.callbacks.onStart(this.totalDuration),this.intervalId=setInterval(function(){e.timeRemaining=e.timeRemaining-.02,e.timeRemaining<=0?(e.timeRemaining=0,e.callbacks.onTick(e.timeRemaining.toFixed(0)),e.callbacks.onComplete(),e.clearTimer()):e.callbacks.onTick(e.timeRemaining.toFixed(0))},20)}},{key:"clearTimer",value:function(){clearInterval(this.intervalId)}}]),i}(),n=a;exports.default=n;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"Tzth","@babel/runtime-corejs2/helpers/createClass":"xM5U"}],"eBcb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("@babel/runtime-corejs2/core-js/object/define-property")),t=d(require("@babel/runtime-corejs2/core-js/object/define-properties")),r=d(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors")),i=d(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor")),s=d(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols")),n=d(require("@babel/runtime-corejs2/core-js/object/keys")),u=d(require("@babel/runtime-corejs2/helpers/defineProperty")),a=d(require("@babel/runtime-corejs2/helpers/classCallCheck")),o=d(require("@babel/runtime-corejs2/helpers/createClass")),l=require("./data"),c=d(require("./timer"));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=(0,n.default)(e);if(s.default){var u=(0,s.default)(e);t&&(u=u.filter(function(t){return(0,i.default)(e,t).enumerable})),r.push.apply(r,u)}return r}function h(s){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?f(Object(a),!0).forEach(function(e){(0,u.default)(s,e,a[e])}):r.default?(0,t.default)(s,(0,r.default)(a)):f(Object(a)).forEach(function(t){(0,e.default)(s,t,(0,i.default)(a,t))})}return s}var m=document.querySelector(".app"),b=function(){function e(t){(0,a.default)(this,e),this.state={selectedCategory:null,difficulty:null,index:0,questions:null,question:null,answer:null,score:0},this.timer=null,this.ui=t,t.renderGameEntry(l.categories),this.registerListeners()}return(0,o.default)(e,[{key:"setState",value:function(e){var t=h({},this.state,{},e);this.state=t}},{key:"registerListeners",value:function(){var e=this;m.addEventListener("click",function(t){t.target.className.includes("category")?(e.setState({selectedCategory:t.target.getAttribute("id")}),e.ui.renderDifficulty()):t.target.className.includes("diffBtn")?(e.setState({difficulty:t.target.getAttribute("id")}),e.startTheGame()):"submit"===t.target.id?e.evalAnswerAndUpdateQuestion():"next"===t.target.id?e.showQuestion():"redo"===t.target.id&&e.startTheGame()})}},{key:"startTheGame",value:function(){var e=this,t=l.allQuestions.find(function(t){return t.category===e.state.selectedCategory});if(t){var r=t.questions;this.setState({questions:r,score:0,index:0}),this.showTimer(),this.showQuestion()}}},{key:"showTimer",value:function(){var e=this,t=this.state.difficulty,r=0;r="Hard"===t?30:"Medium"===t?45:60;var i=new c.default(r,{onStart:function(t){e.ui.renderTime(t)},onTick:function(t){e.ui.updateTime(t)},onComplete:function(){e.ui.renderResult("Time Ran Out",e.state.score,e.state.questions.length)}});this.timer=i,i.startTimer()}},{key:"showQuestion",value:function(){var e=this.state.questions[this.state.index],t=e.answer,r=e.choices,i=e.question;this.setState({answer:t,question:i}),this.ui.renderQuestion(i,r)}},{key:"evalAnswerAndUpdateQuestion",value:function(){var e=document.querySelector('input[name="action"]:checked');if(e){var t=this.state,r=t.answer,i=t.questions,s=t.index,n=e.value;if(n!==r&&this.ui.showWrongValue(n),n===r){var u=this.state.score+1;this.setState({score:u})}if(this.ui.showCorrectValueAndDisableInputs(r),s<i.length-1){this.ui.toggleSubmitToNext();var a=s+1;this.setState({index:a})}else this.ui.renderResult("Quiz Terminated",this.state.score,this.state.questions.length),this.timer.clearTimer()}else this.ui.renderAlert("info","Please Select An Answer Before Submit!")}}]),e}(),p=b;exports.default=p;
},{"@babel/runtime-corejs2/core-js/object/define-property":"eIqn","@babel/runtime-corejs2/core-js/object/define-properties":"CpmN","@babel/runtime-corejs2/core-js/object/get-own-property-descriptors":"Hv1v","@babel/runtime-corejs2/core-js/object/get-own-property-descriptor":"mQ9c","@babel/runtime-corejs2/core-js/object/get-own-property-symbols":"DovH","@babel/runtime-corejs2/core-js/object/keys":"d81a","@babel/runtime-corejs2/helpers/defineProperty":"n5FU","@babel/runtime-corejs2/helpers/classCallCheck":"Tzth","@babel/runtime-corejs2/helpers/createClass":"xM5U","./data":"LjZ5","./timer":"K2h5"}],"K3Lz":[function(require,module,exports) {
var r=require("./_export");r(r.S,"Array",{isArray:require("./_is-array")});
},{"./_export":"vSO4","./_is-array":"ayXv"}],"bW7s":[function(require,module,exports) {
require("../../modules/es6.array.is-array"),module.exports=require("../../modules/_core").Array.isArray;
},{"../../modules/es6.array.is-array":"K3Lz","../../modules/_core":"zKeE"}],"BpbX":[function(require,module,exports) {
module.exports=require("core-js/library/fn/array/is-array");
},{"core-js/library/fn/array/is-array":"bW7s"}],"TvDM":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"qgAY":[function(require,module,exports) {
var r=require("../core-js/array/is-array"),e=require("./arrayLikeToArray");function a(a){if(r(a))return e(a)}module.exports=a;
},{"../core-js/array/is-array":"BpbX","./arrayLikeToArray":"TvDM"}],"lytE":[function(require,module,exports) {
var e=require("./_to-integer"),r=require("./_defined");module.exports=function(t){return function(n,i){var o,u,c=String(r(n)),d=e(i),a=c.length;return d<0||d>=a?t?"":void 0:(o=c.charCodeAt(d))<55296||o>56319||d+1===a||(u=c.charCodeAt(d+1))<56320||u>57343?t?c.charAt(d):o:t?c.slice(d,d+2):u-56320+(o-55296<<10)+65536}};
},{"./_to-integer":"MpYs","./_defined":"U72i"}],"dhak":[function(require,module,exports) {
module.exports={};
},{}],"b7Q2":[function(require,module,exports) {
"use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
},{"./_object-create":"TNJq","./_property-desc":"WCHM","./_set-to-string-tag":"UtKM","./_hide":"akPY","./_wks":"Ug9I"}],"HHE0":[function(require,module,exports) {
var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
},{"./_has":"yS17","./_to-object":"mbLO","./_shared-key":"wuYm"}],"uRfg":[function(require,module,exports) {
"use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_iterators"),u=require("./_iter-create"),o=require("./_set-to-string-tag"),s=require("./_object-gpo"),a=require("./_wks")("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",l="keys",q="values",y=function(){return this};module.exports=function(_,p,h,k,v,w,d){u(h,p,k);var x,b,g,j=function(e){if(!c&&e in I)return I[e];switch(e){case l:case q:return function(){return new h(this,e)}}return function(){return new h(this,e)}},m=p+" Iterator",A=v==q,F=!1,I=_.prototype,O=I[a]||I[f]||v&&I[v],P=O||j(v),z=v?A?j("entries"):P:void 0,B="Array"==p&&I.entries||O;if(B&&(g=s(B.call(new _)))!==Object.prototype&&g.next&&(o(g,m,!0),e||"function"==typeof g[a]||i(g,a,y)),A&&O&&O.name!==q&&(F=!0,P=function(){return O.call(this)}),e&&!d||!c&&!F&&I[a]||i(I,a,P),n[p]=P,n[m]=y,v)if(x={values:A?P:j(q),keys:w?P:j(l),entries:z},d)for(b in x)b in I||t(I,b,x[b]);else r(r.P+r.F*(c||F),p,x);return x};
},{"./_library":"kq3x","./_export":"vSO4","./_redefine":"gojl","./_hide":"akPY","./_iterators":"dhak","./_iter-create":"b7Q2","./_set-to-string-tag":"UtKM","./_object-gpo":"HHE0","./_wks":"Ug9I"}],"iUHQ":[function(require,module,exports) {
"use strict";var i=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(i){this._t=String(i),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})});
},{"./_string-at":"lytE","./_iter-define":"uRfg"}],"hEIm":[function(require,module,exports) {
var r=require("./_an-object");module.exports=function(t,e,o,a){try{return a?e(r(o)[0],o[1]):e(o)}catch(n){var c=t.return;throw void 0!==c&&r(c.call(t)),n}};
},{"./_an-object":"zotD"}],"af0K":[function(require,module,exports) {
var r=require("./_iterators"),e=require("./_wks")("iterator"),t=Array.prototype;module.exports=function(o){return void 0!==o&&(r.Array===o||t[e]===o)};
},{"./_iterators":"dhak","./_wks":"Ug9I"}],"ZHvQ":[function(require,module,exports) {
var e=require("./_cof"),t=require("./_wks")("toStringTag"),n="Arguments"==e(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(n){}};module.exports=function(u){var o,c,i;return void 0===u?"Undefined":null===u?"Null":"string"==typeof(c=r(o=Object(u),t))?c:n?e(o):"Object"==(i=e(o))&&"function"==typeof o.callee?"Arguments":i};
},{"./_cof":"ShN9","./_wks":"Ug9I"}],"AqTK":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(o){if(null!=o)return o[e]||o["@@iterator"]||t[r(o)]};
},{"./_classof":"ZHvQ","./_wks":"Ug9I","./_iterators":"dhak","./_core":"zKeE"}],"Lli7":[function(require,module,exports) {
var r=require("./_wks")("iterator"),t=!1;try{var n=[7][r]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(e){}module.exports=function(n,u){if(!u&&!t)return!1;var o=!1;try{var c=[7],a=c[r]();a.next=function(){return{done:o=!0}},c[r]=function(){return a},n(c)}catch(e){}return o};
},{"./_wks":"Ug9I"}],"N484":[function(require,module,exports) {
"use strict";var e=require("./_ctx"),r=require("./_export"),t=require("./_to-object"),i=require("./_iter-call"),o=require("./_is-array-iter"),u=require("./_to-length"),n=require("./_create-property"),a=require("./core.get-iterator-method");r(r.S+r.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(r){var l,c,f,q,_=t(r),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,s=0,g=a(_);if(d&&(y=e(y,v>2?arguments[2]:void 0,2)),null==g||h==Array&&o(g))for(c=new h(l=u(_.length));l>s;s++)n(c,s,d?y(_[s],s):_[s]);else for(q=g.call(_),c=new h;!(f=q.next()).done;s++)n(c,s,d?i(q,y,[f.value,s],!0):f.value);return c.length=s,c}});
},{"./_ctx":"zRh1","./_export":"vSO4","./_to-object":"mbLO","./_iter-call":"hEIm","./_is-array-iter":"af0K","./_to-length":"S7IM","./_create-property":"vUQk","./core.get-iterator-method":"AqTK","./_iter-detect":"Lli7"}],"O35A":[function(require,module,exports) {
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/_core").Array.from;
},{"../../modules/es6.string.iterator":"iUHQ","../../modules/es6.array.from":"N484","../../modules/_core":"zKeE"}],"ybNn":[function(require,module,exports) {
module.exports=require("core-js/library/fn/array/from");
},{"core-js/library/fn/array/from":"O35A"}],"ID6i":[function(require,module,exports) {
module.exports=function(){};
},{}],"xwDU":[function(require,module,exports) {
module.exports=function(e,n){return{value:n,done:!!e}};
},{}],"OYXR":[function(require,module,exports) {
"use strict";var e=require("./_add-to-unscopables"),r=require("./_iter-step"),t=require("./_iterators"),i=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",function(e,r){this._t=i(e),this._i=0,this._k=r},function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])},"values"),t.Arguments=t.Array,e("keys"),e("values"),e("entries");
},{"./_add-to-unscopables":"ID6i","./_iter-step":"xwDU","./_iterators":"dhak","./_to-iobject":"Wyka","./_iter-define":"uRfg"}],"COf8":[function(require,module,exports) {

require("./es6.array.iterator");for(var t=require("./_global"),e=require("./_hide"),i=require("./_iterators"),r=require("./_wks")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),L=0;L<s.length;L++){var a=s[L],l=t[a],S=l&&l.prototype;S&&!S[r]&&e(S,r,a),i[a]=i.Array}
},{"./es6.array.iterator":"OYXR","./_global":"i1Q6","./_hide":"akPY","./_iterators":"dhak","./_wks":"Ug9I"}],"By4a":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").isIterable=function(i){var o=Object(i);return void 0!==o[e]||"@@iterator"in o||t.hasOwnProperty(r(o))};
},{"./_classof":"ZHvQ","./_wks":"Ug9I","./_iterators":"dhak","./_core":"zKeE"}],"TEgB":[function(require,module,exports) {
require("../modules/web.dom.iterable"),require("../modules/es6.string.iterator"),module.exports=require("../modules/core.is-iterable");
},{"../modules/web.dom.iterable":"COf8","../modules/es6.string.iterator":"iUHQ","../modules/core.is-iterable":"By4a"}],"xBqH":[function(require,module,exports) {
module.exports=require("core-js/library/fn/is-iterable");
},{"core-js/library/fn/is-iterable":"TEgB"}],"c6mp":[function(require,module,exports) {
require("./_wks-define")("asyncIterator");
},{"./_wks-define":"c2zY"}],"mwfR":[function(require,module,exports) {
require("./_wks-define")("observable");
},{"./_wks-define":"c2zY"}],"Ky5l":[function(require,module,exports) {
require("../../modules/es6.symbol"),require("../../modules/es6.object.to-string"),require("../../modules/es7.symbol.async-iterator"),require("../../modules/es7.symbol.observable"),module.exports=require("../../modules/_core").Symbol;
},{"../../modules/es6.symbol":"Aa2f","../../modules/es6.object.to-string":"G5Xn","../../modules/es7.symbol.async-iterator":"c6mp","../../modules/es7.symbol.observable":"mwfR","../../modules/_core":"zKeE"}],"mr6k":[function(require,module,exports) {
module.exports=require("core-js/library/fn/symbol");
},{"core-js/library/fn/symbol":"Ky5l"}],"dk6M":[function(require,module,exports) {
var r=require("../core-js/array/from"),e=require("../core-js/is-iterable"),o=require("../core-js/symbol");function i(i){if(void 0!==o&&e(Object(i)))return r(i)}module.exports=i;
},{"../core-js/array/from":"ybNn","../core-js/is-iterable":"xBqH","../core-js/symbol":"mr6k"}],"Q4vU":[function(require,module,exports) {
var r=require("../core-js/array/from"),t=require("./arrayLikeToArray");function e(e,o){if(e){if("string"==typeof e)return t(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?r(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,o):void 0}}module.exports=e;
},{"../core-js/array/from":"ybNn","./arrayLikeToArray":"TvDM"}],"ejHz":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"TW4i":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"qgAY","./iterableToArray":"dk6M","./unsupportedIterableToArray":"Q4vU","./nonIterableSpread":"ejHz"}],"aviX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,e){return'\n\t\t\t<div class="category" id="'.concat(t,'">\n\t\t\t\t<img src="').concat(e,'" alt="').concat(t,'" />\n\t\t\t\t<p>').concat(t,"</p>\n\t\t\t</div>\n")},e=t;exports.default=e;
},{}],"ATNh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Category"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(t){var r=document.createElement("div");r.insertAdjacentHTML("afterbegin",'<h1 class="u-text-center u-mb-2 heading-secondary">Please Select A Quiz Category</h1>');var a=document.createElement("div");return a.className="grid",t.forEach(function(t){a.innerHTML+=(0,e.default)(t.name,t.img)}),r.appendChild(a),r},a=r;exports.default=a;
},{"./Category":"aviX"}],"wlPB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,e){return'<a id="'.concat(t,'" class="diffBtn button button-circle button-').concat(e,'">').concat(t,"</a>")},e=t;exports.default=e;
},{}],"vZNP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./DiffButton"));function t(e){return e&&e.__esModule?e:{default:e}}var a=function(){var t=document.createElement("div");t.className="difficulties",t.insertAdjacentHTML("afterbegin",'\t<h1 class="u-text-center u-mb-2 heading-secondary">Please Select Quiz Difficulty</h1>');var a=document.createElement("div");a.className="grid",a.innerHTML+=(0,e.default)("Easy","action"),a.innerHTML+=(0,e.default)("Medium","primary"),a.innerHTML+=(0,e.default)("Hard","caution"),t.appendChild(a);var n=document.createElement("button");return n.textContent="Back",n.className="button  u-block",n.setAttribute("onclick","location.reload()"),t.appendChild(n),t},n=a;exports.default=n;
},{"./DiffButton":"wlPB"}],"JJtG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t){var e=document.createElement("div");e.className="question";for(var n="",a=arguments.length,c=new Array(a>1?a-1:0),o=1;o<a;o++)c[o-1]=arguments[o];c.forEach(function(t){n+='<div class="question__group">\n\t\t\t\t\t\t<input type="radio" name="action" id="'.concat(t,'" value="').concat(t,'" />\n\t\t\t\t\t\t<label for="').concat(t,'">').concat(t,"</label>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t</div>")});var i=document.createElement("fieldset");i.className="question__field",i.insertAdjacentHTML("afterbegin","<legend>".concat(t,"</legend>\n    ").concat(n,"\n    ")),e.appendChild(i);var r=document.createElement("a");return r.className="button button-action u-mt-2 u-dis-block",r.id="submit",r.textContent="Submit",e.appendChild(r),e},e=t;exports.default=e;
},{}],"r1uM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,e){return'<div class="alert alert--'.concat(t,'">\n\t\t\t').concat(e,"\n\t\t</div>")},e=t;exports.default=e;
},{}],"RR8V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,o,n){return'<div class="result">\n\t\t\t<h1>'.concat(t,"</h1>\n\t\t\t<p>You Scored: ").concat(o,"/").concat(n,'</p>\n\t\t\t<a onclick="location.reload()" class="button button-primary">Main Menu</a>\n\t\t\t<a id="redo" class="button button-action">Redo Quiz</a>\n\t\t</div>\n')},o=t;exports.default=o;
},{}],"Ga5s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime-corejs2/helpers/toConsumableArray")),t=i(require("@babel/runtime-corejs2/helpers/classCallCheck")),r=i(require("@babel/runtime-corejs2/helpers/createClass")),n=i(require("./components/GameEntry")),u=i(require("./components/Difficulty")),o=i(require("./components/Question")),l=i(require("./components/Alert")),a=i(require("./components/Result"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(){function i(){(0,t.default)(this,i),this.elements={app:document.querySelector(".app")}}return(0,r.default)(i,[{key:"renderGameEntry",value:function(e){var t=this.elements.app;t.innerHTML="",t.appendChild((0,n.default)(e))}},{key:"renderDifficulty",value:function(){var e=this.elements.app;e.innerHTML="",e.appendChild((0,u.default)())}},{key:"renderQuestion",value:function(t,r){var n=this.elements.app,u=o.default.apply(void 0,[t].concat((0,e.default)(r)));n.innerHTML="",n.appendChild(u)}},{key:"renderTime",value:function(e){var t='<p id="timer" class="timer">\n                    '.concat(e,"\n\t\t\t\t\t\t\t\t\t</p>");document.querySelector(".container").insertAdjacentHTML("afterbegin",t)}},{key:"updateTime",value:function(e){document.querySelector(".timer").textContent=e}},{key:"renderAlert",value:function(e,t){var r=this;this.clearAlert(),document.querySelector(".question").insertAdjacentHTML("afterbegin",(0,l.default)(e,t)),setTimeout(function(){r.clearAlert()},2e3)}},{key:"clearAlert",value:function(){var e=document.querySelector(".alert");e&&e.remove()}},{key:"showWrongValue",value:function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t.style.color="brown",t.style.fontWeight="bold"}},{key:"showCorrectValueAndDisableInputs",value:function(e){var t=document.querySelector('label[for="'.concat(e,'"'));t.style.color="green",t.style.fontWeight="bold",document.querySelectorAll("input").forEach(function(e){e.disabled=!0})}},{key:"toggleSubmitToNext",value:function(){var e=document.querySelector("#submit");e.setAttribute("id","next"),e.textContent="Next",e.classList.replace("button-action","button-primary")}},{key:"renderResult",value:function(e,t,r){var n=(0,a.default)(e,t,r),u=this.elements.app;u.innerHTML="",u.insertAdjacentHTML("afterbegin",n),document.querySelector(".timer").remove()}}]),i}(),s=c;exports.default=s;
},{"@babel/runtime-corejs2/helpers/toConsumableArray":"TW4i","@babel/runtime-corejs2/helpers/classCallCheck":"Tzth","@babel/runtime-corejs2/helpers/createClass":"xM5U","./components/GameEntry":"ATNh","./components/Difficulty":"vZNP","./components/Question":"JJtG","./components/Alert":"r1uM","./components/Result":"RR8V"}],"WSmw":[function(require,module,exports) {
"use strict";require("./scss/app.scss");var e=r(require("./App")),u=r(require("./ui"));function r(e){return e&&e.__esModule?e:{default:e}}new e.default(new u.default);
},{"./scss/app.scss":"G5Xn","./App":"eBcb","./ui":"Ga5s"}]},{},["WSmw"], null)
//# sourceMappingURL=main.ac94fcd2.js.map