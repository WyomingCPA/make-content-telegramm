import{k as ie,l as br}from"./index.162944fd.js";var Or=typeof ie=="object"&&ie&&ie.Object===Object&&ie,Ar=Or,wr=Ar,Pr=typeof self=="object"&&self&&self.Object===Object&&self,Er=wr||Pr||Function("return this")(),$r=Er,xr=$r,Fr=xr.Symbol,nr=Fr,We=nr,ar=Object.prototype,Ir=ar.hasOwnProperty,Rr=ar.toString,X=We?We.toStringTag:void 0;function Tr(r){var e=Ir.call(r,X),t=r[X];try{r[X]=void 0;var n=!0}catch{}var o=Rr.call(r);return n&&(e?r[X]=t:delete r[X]),o}var Nr=Tr,Mr=Object.prototype,_r=Mr.toString;function Dr(r){return _r.call(r)}var Br=Dr,Ge=nr,Cr=Nr,Ur=Br,Wr="[object Null]",Gr="[object Undefined]",Le=Ge?Ge.toStringTag:void 0;function Lr(r){return r==null?r===void 0?Gr:Wr:Le&&Le in Object(r)?Cr(r):Ur(r)}var Dn=Lr,kr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(e,t);if(f.value!==o||f.enumerable!==!0)return!1}return!0},ke=typeof Symbol!="undefined"&&Symbol,jr=kr,zr=function(){return typeof ke!="function"||typeof Symbol!="function"||typeof ke("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:jr()},Hr="Function.prototype.bind called on incompatible ",de=Array.prototype.slice,Qr=Object.prototype.toString,Vr="[object Function]",qr=function(e){var t=this;if(typeof t!="function"||Qr.call(t)!==Vr)throw new TypeError(Hr+t);for(var n=de.call(arguments,1),o,a=function(){if(this instanceof o){var u=t.apply(this,n.concat(de.call(arguments)));return Object(u)===u?u:this}else return t.apply(e,n.concat(de.call(arguments)))},f=Math.max(0,t.length-n.length),i=[],l=0;l<f;l++)i.push("$"+l);if(o=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var c=function(){};c.prototype=t.prototype,o.prototype=new c,c.prototype=null}return o},Jr=qr,Te=Function.prototype.bind||Jr,Kr=Te,Yr=Kr.call(Function.call,Object.prototype.hasOwnProperty),y,Q=SyntaxError,or=Function,z=TypeError,ge=function(r){try{return or('"use strict"; return ('+r+").constructor;")()}catch{}},B=Object.getOwnPropertyDescriptor;if(B)try{B({},"")}catch{B=null}var me=function(){throw new z},Xr=B?function(){try{return arguments.callee,me}catch{try{return B(arguments,"callee").get}catch{return me}}}():me,k=zr(),R=Object.getPrototypeOf||function(r){return r.__proto__},j={},Zr=typeof Uint8Array=="undefined"?y:R(Uint8Array),H={"%AggregateError%":typeof AggregateError=="undefined"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?y:ArrayBuffer,"%ArrayIteratorPrototype%":k?R([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":j,"%AsyncGenerator%":j,"%AsyncGeneratorFunction%":j,"%AsyncIteratorPrototype%":j,"%Atomics%":typeof Atomics=="undefined"?y:Atomics,"%BigInt%":typeof BigInt=="undefined"?y:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?y:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?y:FinalizationRegistry,"%Function%":or,"%GeneratorFunction%":j,"%Int8Array%":typeof Int8Array=="undefined"?y:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?y:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":k?R(R([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map=="undefined"?y:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!k?y:R(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?y:Promise,"%Proxy%":typeof Proxy=="undefined"?y:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?y:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!k?y:R(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":k?R(""[Symbol.iterator]()):y,"%Symbol%":k?Symbol:y,"%SyntaxError%":Q,"%ThrowTypeError%":Xr,"%TypedArray%":Zr,"%TypeError%":z,"%Uint8Array%":typeof Uint8Array=="undefined"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?y:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?y:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?y:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?y:WeakSet},et=function r(e){var t;if(e==="%AsyncFunction%")t=ge("async function () {}");else if(e==="%GeneratorFunction%")t=ge("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=ge("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&(t=R(o.prototype))}return H[e]=t,t},je={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ne=Te,pe=Yr,rt=ne.call(Function.call,Array.prototype.concat),tt=ne.call(Function.apply,Array.prototype.splice),ze=ne.call(Function.call,String.prototype.replace),ye=ne.call(Function.call,String.prototype.slice),nt=ne.call(Function.call,RegExp.prototype.exec),at=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,ot=/\\(\\)?/g,it=function(e){var t=ye(e,0,1),n=ye(e,-1);if(t==="%"&&n!=="%")throw new Q("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new Q("invalid intrinsic syntax, expected opening `%`");var o=[];return ze(e,at,function(a,f,i,l){o[o.length]=i?ze(l,ot,"$1"):f||a}),o},ft=function(e,t){var n=e,o;if(pe(je,n)&&(o=je[n],n="%"+o[0]+"%"),pe(H,n)){var a=H[n];if(a===j&&(a=et(n)),typeof a=="undefined"&&!t)throw new z("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new Q("intrinsic "+e+" does not exist!")},Ne=function(e,t){if(typeof e!="string"||e.length===0)throw new z("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new z('"allowMissing" argument must be a boolean');if(nt(/^%?[^%]*%?$/g,e)===null)throw new Q("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=it(e),o=n.length>0?n[0]:"",a=ft("%"+o+"%",t),f=a.name,i=a.value,l=!1,c=a.alias;c&&(o=c[0],tt(n,rt([0,1],c)));for(var u=1,d=!0;u<n.length;u+=1){var p=n[u],g=ye(p,0,1),v=ye(p,-1);if((g==='"'||g==="'"||g==="`"||v==='"'||v==="'"||v==="`")&&g!==v)throw new Q("property names with quotes must have matching quotes");if((p==="constructor"||!d)&&(l=!0),o+="."+p,f="%"+o+"%",pe(H,f))i=H[f];else if(i!=null){if(!(p in i)){if(!t)throw new z("base intrinsic for "+e+" exists, but the property is not available.");return}if(B&&u+1>=n.length){var b=B(i,p);d=!!b,d&&"get"in b&&!("originalValue"in b.get)?i=b.get:i=i[p]}else d=pe(i,p),i=i[p];d&&!l&&(H[f]=i)}}return i},ir={exports:{}};(function(r){var e=Te,t=Ne,n=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||e.call(o,n),f=t("%Object.getOwnPropertyDescriptor%",!0),i=t("%Object.defineProperty%",!0),l=t("%Math.max%");if(i)try{i({},"a",{value:1})}catch{i=null}r.exports=function(d){var p=a(e,o,arguments);if(f&&i){var g=f(p,"length");g.configurable&&i(p,"length",{value:1+l(0,d.length-(arguments.length-1))})}return p};var c=function(){return a(e,n,arguments)};i?i(r.exports,"apply",{value:c}):r.exports.apply=c})(ir);var fr=Ne,lr=ir.exports,lt=lr(fr("String.prototype.indexOf")),ct=function(e,t){var n=fr(e,!!t);return typeof n=="function"&&lt(e,".prototype.")>-1?lr(n):n},ut={},pt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),yt=br(pt),Me=typeof Map=="function"&&Map.prototype,he=Object.getOwnPropertyDescriptor&&Me?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,se=Me&&he&&typeof he.get=="function"?he.get:null,st=Me&&Map.prototype.forEach,_e=typeof Set=="function"&&Set.prototype,Se=Object.getOwnPropertyDescriptor&&_e?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ve=_e&&Se&&typeof Se.get=="function"?Se.get:null,vt=_e&&Set.prototype.forEach,dt=typeof WeakMap=="function"&&WeakMap.prototype,ee=dt?WeakMap.prototype.has:null,gt=typeof WeakSet=="function"&&WeakSet.prototype,re=gt?WeakSet.prototype.has:null,mt=typeof WeakRef=="function"&&WeakRef.prototype,He=mt?WeakRef.prototype.deref:null,ht=Boolean.prototype.valueOf,St=Object.prototype.toString,bt=Function.prototype.toString,Ot=String.prototype.match,De=String.prototype.slice,N=String.prototype.replace,At=String.prototype.toUpperCase,Qe=String.prototype.toLowerCase,cr=RegExp.prototype.test,Ve=Array.prototype.concat,w=Array.prototype.join,wt=Array.prototype.slice,qe=Math.floor,Ee=typeof BigInt=="function"?BigInt.prototype.valueOf:null,be=Object.getOwnPropertySymbols,$e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,V=typeof Symbol=="function"&&typeof Symbol.iterator=="object",S=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===V?"object":"symbol")?Symbol.toStringTag:null,ur=Object.prototype.propertyIsEnumerable,Je=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Ke(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||cr.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-qe(-r):qe(r);if(n!==r){var o=String(n),a=De.call(e,o.length+1);return N.call(o,t,"$&_")+"."+N.call(N.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return N.call(e,t,"$&_")}var xe=yt,Ye=xe.custom,Xe=yr(Ye)?Ye:null,Pt=function r(e,t,n,o){var a=t||{};if(T(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(T(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=T(a,"customInspect")?a.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(T(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(T(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var i=a.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return vr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return i?Ke(e,l):l}if(typeof e=="bigint"){var c=String(e)+"n";return i?Ke(e,c):c}var u=typeof a.depth=="undefined"?5:a.depth;if(typeof n=="undefined"&&(n=0),n>=u&&u>0&&typeof e=="object")return Fe(e)?"[Array]":"[Object]";var d=kt(a,n);if(typeof o=="undefined")o=[];else if(sr(o,e)>=0)return"[Circular]";function p($,G,oe){if(G&&(o=wt.call(o),o.push(G)),oe){var L={depth:a.depth};return T(a,"quoteStyle")&&(L.quoteStyle=a.quoteStyle),r($,L,n+1,o)}return r($,a,n+1,o)}if(typeof e=="function"&&!Ze(e)){var g=Mt(e),v=fe(e,p);return"[Function"+(g?": "+g:" (anonymous)")+"]"+(v.length>0?" { "+w.call(v,", ")+" }":"")}if(yr(e)){var b=V?N.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):$e.call(e);return typeof e=="object"&&!V?Z(b):b}if(Wt(e)){for(var P="<"+Qe.call(String(e.nodeName)),s=e.attributes||[],E=0;E<s.length;E++)P+=" "+s[E].name+"="+pr(Et(s[E].value),"double",a);return P+=">",e.childNodes&&e.childNodes.length&&(P+="..."),P+="</"+Qe.call(String(e.nodeName))+">",P}if(Fe(e)){if(e.length===0)return"[]";var F=fe(e,p);return d&&!Lt(F)?"["+Ie(F,d)+"]":"[ "+w.call(F,", ")+" ]"}if(xt(e)){var C=fe(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!ur.call(e,"cause")?"{ ["+String(e)+"] "+w.call(Ve.call("[cause]: "+p(e.cause),C),", ")+" }":C.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+w.call(C,", ")+" }"}if(typeof e=="object"&&f){if(Xe&&typeof e[Xe]=="function"&&xe)return xe(e,{depth:u-n});if(f!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(_t(e)){var K=[];return st.call(e,function($,G){K.push(p(G,e,!0)+" => "+p($,e))}),er("Map",se.call(e),K,d)}if(Ct(e)){var ae=[];return vt.call(e,function($){ae.push(p($,e))}),er("Set",ve.call(e),ae,d)}if(Dt(e))return Oe("WeakMap");if(Ut(e))return Oe("WeakSet");if(Bt(e))return Oe("WeakRef");if(It(e))return Z(p(Number(e)));if(Tt(e))return Z(p(Ee.call(e)));if(Rt(e))return Z(ht.call(e));if(Ft(e))return Z(p(String(e)));if(!$t(e)&&!Ze(e)){var _=fe(e,p),I=Je?Je(e)===Object.prototype:e instanceof Object||e.constructor===Object,U=e instanceof Object?"":"null prototype",W=!I&&S&&Object(e)===e&&S in e?De.call(M(e),8,-1):U?"Object":"",Y=I||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",O=Y+(W||U?"["+w.call(Ve.call([],W||[],U||[]),": ")+"] ":"");return _.length===0?O+"{}":d?O+"{"+Ie(_,d)+"}":O+"{ "+w.call(_,", ")+" }"}return String(e)};function pr(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Et(r){return N.call(String(r),/"/g,"&quot;")}function Fe(r){return M(r)==="[object Array]"&&(!S||!(typeof r=="object"&&S in r))}function $t(r){return M(r)==="[object Date]"&&(!S||!(typeof r=="object"&&S in r))}function Ze(r){return M(r)==="[object RegExp]"&&(!S||!(typeof r=="object"&&S in r))}function xt(r){return M(r)==="[object Error]"&&(!S||!(typeof r=="object"&&S in r))}function Ft(r){return M(r)==="[object String]"&&(!S||!(typeof r=="object"&&S in r))}function It(r){return M(r)==="[object Number]"&&(!S||!(typeof r=="object"&&S in r))}function Rt(r){return M(r)==="[object Boolean]"&&(!S||!(typeof r=="object"&&S in r))}function yr(r){if(V)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!$e)return!1;try{return $e.call(r),!0}catch{}return!1}function Tt(r){if(!r||typeof r!="object"||!Ee)return!1;try{return Ee.call(r),!0}catch{}return!1}var Nt=Object.prototype.hasOwnProperty||function(r){return r in this};function T(r,e){return Nt.call(r,e)}function M(r){return St.call(r)}function Mt(r){if(r.name)return r.name;var e=Ot.call(bt.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function sr(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function _t(r){if(!se||!r||typeof r!="object")return!1;try{se.call(r);try{ve.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function Dt(r){if(!ee||!r||typeof r!="object")return!1;try{ee.call(r,ee);try{re.call(r,re)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Bt(r){if(!He||!r||typeof r!="object")return!1;try{return He.call(r),!0}catch{}return!1}function Ct(r){if(!ve||!r||typeof r!="object")return!1;try{ve.call(r);try{se.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function Ut(r){if(!re||!r||typeof r!="object")return!1;try{re.call(r,re);try{ee.call(r,ee)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function Wt(r){return!r||typeof r!="object"?!1:typeof HTMLElement!="undefined"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function vr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return vr(De.call(r,0,e.maxStringLength),e)+n}var o=N.call(N.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Gt);return pr(o,"single",e)}function Gt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+At.call(e.toString(16))}function Z(r){return"Object("+r+")"}function Oe(r){return r+" { ? }"}function er(r,e,t,n){var o=n?Ie(t,n):w.call(t,", ");return r+" ("+e+") {"+o+"}"}function Lt(r){for(var e=0;e<r.length;e++)if(sr(r[e],`
`)>=0)return!1;return!0}function kt(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=w.call(Array(r.indent+1)," ");else return null;return{base:t,prev:w.call(Array(e+1),t)}}function Ie(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+w.call(r,","+t)+`
`+e.prev}function fe(r,e){var t=Fe(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=T(r,o)?e(r[o],r):""}var a=typeof be=="function"?be(r):[],f;if(V){f={};for(var i=0;i<a.length;i++)f["$"+a[i]]=a[i]}for(var l in r)!T(r,l)||t&&String(Number(l))===l&&l<r.length||V&&f["$"+l]instanceof Symbol||(cr.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r)));if(typeof be=="function")for(var c=0;c<a.length;c++)ur.call(r,a[c])&&n.push("["+e(a[c])+"]: "+e(r[a[c]],r));return n}var Be=Ne,J=ct,jt=Pt,zt=Be("%TypeError%"),le=Be("%WeakMap%",!0),ce=Be("%Map%",!0),Ht=J("WeakMap.prototype.get",!0),Qt=J("WeakMap.prototype.set",!0),Vt=J("WeakMap.prototype.has",!0),qt=J("Map.prototype.get",!0),Jt=J("Map.prototype.set",!0),Kt=J("Map.prototype.has",!0),Ce=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Yt=function(r,e){var t=Ce(r,e);return t&&t.value},Xt=function(r,e,t){var n=Ce(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Zt=function(r,e){return!!Ce(r,e)},en=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new zt("Side channel does not contain "+jt(a))},get:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Ht(e,a)}else if(ce){if(t)return qt(t,a)}else if(n)return Yt(n,a)},has:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Vt(e,a)}else if(ce){if(t)return Kt(t,a)}else if(n)return Zt(n,a);return!1},set:function(a,f){le&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new le),Qt(e,a,f)):ce?(t||(t=new ce),Jt(t,a,f)):(n||(n={key:{},next:null}),Xt(n,a,f))}};return o},rn=String.prototype.replace,tn=/%20/g,Ae={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ue={default:Ae.RFC3986,formatters:{RFC1738:function(r){return rn.call(r,tn,"+")},RFC3986:function(r){return String(r)}},RFC1738:Ae.RFC1738,RFC3986:Ae.RFC3986},nn=Ue,we=Object.prototype.hasOwnProperty,D=Array.isArray,A=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),an=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(D(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]!="undefined"&&o.push(n[a]);t.obj[t.prop]=o}}},dr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]!="undefined"&&(n[o]=e[o]);return n},on=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(D(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!we.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return D(e)&&!D(t)&&(o=dr(e,n)),D(e)&&D(t)?(t.forEach(function(a,f){if(we.call(e,f)){var i=e[f];i&&typeof i=="object"&&a&&typeof a=="object"?e[f]=r(i,a,n):e.push(a)}else e[f]=a}),e):Object.keys(t).reduce(function(a,f){var i=t[f];return we.call(a,f)?a[f]=r(a[f],i,n):a[f]=i,a},o)},fn=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},ln=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},cn=function(e,t,n,o,a){if(e.length===0)return e;var f=e;if(typeof e=="symbol"?f=Symbol.prototype.toString.call(e):typeof e!="string"&&(f=String(e)),n==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(u){return"%26%23"+parseInt(u.slice(2),16)+"%3B"});for(var i="",l=0;l<f.length;++l){var c=f.charCodeAt(l);if(c===45||c===46||c===95||c===126||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||a===nn.RFC1738&&(c===40||c===41)){i+=f.charAt(l);continue}if(c<128){i=i+A[c];continue}if(c<2048){i=i+(A[192|c>>6]+A[128|c&63]);continue}if(c<55296||c>=57344){i=i+(A[224|c>>12]+A[128|c>>6&63]+A[128|c&63]);continue}l+=1,c=65536+((c&1023)<<10|f.charCodeAt(l)&1023),i+=A[240|c>>18]+A[128|c>>12&63]+A[128|c>>6&63]+A[128|c&63]}return i},un=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],f=a.obj[a.prop],i=Object.keys(f),l=0;l<i.length;++l){var c=i[l],u=f[c];typeof u=="object"&&u!==null&&n.indexOf(u)===-1&&(t.push({obj:f,prop:c}),n.push(u))}return an(t),e},pn=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},yn=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},sn=function(e,t){return[].concat(e,t)},vn=function(e,t){if(D(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},gr={arrayToObject:dr,assign:fn,combine:sn,compact:un,decode:ln,encode:cn,isBuffer:yn,isRegExp:pn,maybeMap:vn,merge:on},mr=en,ue=gr,te=Ue,dn=Object.prototype.hasOwnProperty,rr={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},x=Array.isArray,gn=Array.prototype.push,hr=function(r,e){gn.apply(r,x(e)?e:[e])},mn=Date.prototype.toISOString,tr=te.default,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ue.encode,encodeValuesOnly:!1,format:tr,formatter:te.formatters[tr],indices:!1,serializeDate:function(e){return mn.call(e)},skipNulls:!1,strictNullHandling:!1},hn=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Pe={},Sn=function r(e,t,n,o,a,f,i,l,c,u,d,p,g,v,b,P){for(var s=e,E=P,F=0,C=!1;(E=E.get(Pe))!==void 0&&!C;){var K=E.get(e);if(F+=1,typeof K!="undefined"){if(K===F)throw new RangeError("Cyclic object value");C=!0}typeof E.get(Pe)=="undefined"&&(F=0)}if(typeof l=="function"?s=l(t,s):s instanceof Date?s=d(s):n==="comma"&&x(s)&&(s=ue.maybeMap(s,function(L){return L instanceof Date?d(L):L})),s===null){if(a)return i&&!v?i(t,h.encoder,b,"key",p):t;s=""}if(hn(s)||ue.isBuffer(s)){if(i){var ae=v?t:i(t,h.encoder,b,"key",p);return[g(ae)+"="+g(i(s,h.encoder,b,"value",p))]}return[g(t)+"="+g(String(s))]}var _=[];if(typeof s=="undefined")return _;var I;if(n==="comma"&&x(s))v&&i&&(s=ue.maybeMap(s,i)),I=[{value:s.length>0?s.join(",")||null:void 0}];else if(x(l))I=l;else{var U=Object.keys(s);I=c?U.sort(c):U}for(var W=o&&x(s)&&s.length===1?t+"[]":t,Y=0;Y<I.length;++Y){var O=I[Y],$=typeof O=="object"&&typeof O.value!="undefined"?O.value:s[O];if(!(f&&$===null)){var G=x(s)?typeof n=="function"?n(W,O):W:W+(u?"."+O:"["+O+"]");P.set(e,F);var oe=mr();oe.set(Pe,P),hr(_,r($,G,n,o,a,f,n==="comma"&&v&&x(s)?null:i,l,c,u,d,p,g,v,b,oe))}}return _},bn=function(e){if(!e)return h;if(e.encoder!==null&&typeof e.encoder!="undefined"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=te.default;if(typeof e.format!="undefined"){if(!dn.call(te.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=te.formatters[n],a=h.filter;return(typeof e.filter=="function"||x(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:h.addQueryPrefix,allowDots:typeof e.allowDots=="undefined"?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:h.charsetSentinel,delimiter:typeof e.delimiter=="undefined"?h.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:h.encode,encoder:typeof e.encoder=="function"?e.encoder:h.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:h.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:h.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:h.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:h.strictNullHandling}},On=function(r,e){var t=r,n=bn(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):x(n.filter)&&(a=n.filter,o=a);var f=[];if(typeof t!="object"||t===null)return"";var i;e&&e.arrayFormat in rr?i=e.arrayFormat:e&&"indices"in e?i=e.indices?"indices":"repeat":i="indices";var l=rr[i];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var c=l==="comma"&&e&&e.commaRoundTrip;o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var u=mr(),d=0;d<o.length;++d){var p=o[d];n.skipNulls&&t[p]===null||hr(f,Sn(t[p],p,l,c,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,u))}var g=f.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),g.length>0?v+g:""},q=gr,Re=Object.prototype.hasOwnProperty,An=Array.isArray,m={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:q.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},wn=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Sr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},Pn="utf8=%26%2310003%3B",En="utf8=%E2%9C%93",$n=function(e,t){var n={__proto__:null},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,f=o.split(t.delimiter,a),i=-1,l,c=t.charset;if(t.charsetSentinel)for(l=0;l<f.length;++l)f[l].indexOf("utf8=")===0&&(f[l]===En?c="utf-8":f[l]===Pn&&(c="iso-8859-1"),i=l,l=f.length);for(l=0;l<f.length;++l)if(l!==i){var u=f[l],d=u.indexOf("]="),p=d===-1?u.indexOf("="):d+1,g,v;p===-1?(g=t.decoder(u,m.decoder,c,"key"),v=t.strictNullHandling?null:""):(g=t.decoder(u.slice(0,p),m.decoder,c,"key"),v=q.maybeMap(Sr(u.slice(p+1),t),function(b){return t.decoder(b,m.decoder,c,"value")})),v&&t.interpretNumericEntities&&c==="iso-8859-1"&&(v=wn(v)),u.indexOf("[]=")>-1&&(v=An(v)?[v]:v),Re.call(n,g)?n[g]=q.combine(n[g],v):n[g]=v}return n},xn=function(r,e,t,n){for(var o=n?e:Sr(e,t),a=r.length-1;a>=0;--a){var f,i=r[a];if(i==="[]"&&t.parseArrays)f=[].concat(o);else{f=t.plainObjects?Object.create(null):{};var l=i.charAt(0)==="["&&i.charAt(i.length-1)==="]"?i.slice(1,-1):i,c=parseInt(l,10);!t.parseArrays&&l===""?f={0:o}:!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&t.parseArrays&&c<=t.arrayLimit?(f=[],f[c]=o):l!=="__proto__"&&(f[l]=o)}o=f}return o},Fn=function(e,t,n,o){if(!!e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,f=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=n.depth>0&&f.exec(a),c=l?a.slice(0,l.index):a,u=[];if(c){if(!n.plainObjects&&Re.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var d=0;n.depth>0&&(l=i.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&Re.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+a.slice(l.index)+"]"),xn(u,t,n,o)}},In=function(e){if(!e)return m;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset=="undefined"?m.charset:e.charset;return{allowDots:typeof e.allowDots=="undefined"?m.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:m.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||q.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling}},Rn=function(r,e){var t=In(e);if(r===""||r===null||typeof r=="undefined")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?$n(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),f=0;f<a.length;++f){var i=a[f],l=Fn(i,n[i],t,typeof r=="string");o=q.merge(o,l,t)}return t.allowSparse===!0?o:q.compact(o)},Tn=On,Nn=Rn,Mn=Ue,Bn={formats:Mn,parse:Nn,stringify:Tn};export{$r as _,Dn as a,Bn as l};
