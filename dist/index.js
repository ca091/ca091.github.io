!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist",e(e.s=79)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(30)("wks"),o=e(29),i=e(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(33)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(8),o=e(32);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(71),i=e(70),c=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(2),i=e(13),c=e(5),u=e(11),s=function(t,n,e){var a,f,l,p=t&s.F,v=t&s.G,h=t&s.S,d=t&s.P,y=t&s.B,m=t&s.W,_=v?o:o[n]||(o[n]={}),g=_.prototype,x=v?r:h?r[n]:(r[n]||{}).prototype;for(a in v&&(e=n),e)(f=!p&&x&&void 0!==x[a])&&u(_,a)||(l=f?x[a]:e[a],_[a]=v&&"function"!=typeof x[a]?e[a]:y&&f?i(l,r):m&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((_.virtual||(_.virtual={}))[a]=l,t&s.R&&g&&!g[a]&&c(g,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){"use strict";var r=e(12);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},function(t,n,e){var r=e(8).f,o=e(11),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(30)("keys"),o=e(29);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(63),o=e(20);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(7),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(3),o=e(7),i=e(14);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r,o,i,c=e(13),u=e(48),s=e(27),a=e(18),f=e(0),l=f.process,p=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){_.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(10)(l)?r=function(t){l.nextTick(c(_,t,1))}:d&&d.now?r=function(t){d.now(c(_,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),_.call(t)}}:function(t){setTimeout(c(_,t,1),0)}),t.exports={set:p,clear:v}},function(t,n,e){var r=e(3),o=e(12),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(10),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(2),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(19)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";var r=e(19),o=e(9),i=e(69),c=e(5),u=e(6),s=e(68),a=e(15),f=e(60),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,d,y,m){s(e,n,h);var _,g,x,b=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",P="values"==d,S=!1,j=t.prototype,O=j[l]||j["@@iterator"]||d&&j[d],M=O||b(d),T=d?P?b("entries"):M:void 0,k="Array"==n&&j.entries||O;if(k&&(x=f(k.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),r||"function"==typeof x[l]||c(x,l,v)),P&&O&&"values"!==O.name&&(S=!0,M=function(){return O.call(this)}),r&&!m||!p&&!S&&j[l]||c(j,l,M),u[n]=M,u[w]=v,d)if(_={values:P?M:b("values"),keys:y?M:b("keys"),entries:T},m)for(g in _)g in j||i(j,g,_[g]);else o(o.P+o.F*(p||S),n,_);return _}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.urlBase64ToUnit8Array=function(t){for(var n=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),e=window.atob(n),r=new Uint8Array(e.length),o=0,i=e.length;o<i;++o)r[o]=e.charCodeAt(o);return r}},function(t,n,e){var r=e(9);r(r.S+r.F*!e(4),"Object",{defineProperty:e(8).f})},function(t,n,e){e(36);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){t.exports={default:e(37),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(38),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";var r=e(9),o=e(14),i=e(23);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";var r=e(9),o=e(2),i=e(0),c=e(25),u=e(22);r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(8),c=e(4),u=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(5);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){var r=e(0).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(0),o=e(24).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==e(10)(c);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){c.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);e=function(){f.then(a)}}else e=function(){o.call(r,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(26),o=e(1)("iterator"),i=e(6);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(6),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(13),o=e(51),i=e(50),c=e(3),u=e(31),s=e(49),a={},f={};(n=t.exports=function(t,n,e,l,p){var v,h,d,y,m=p?function(){return t}:s(t),_=r(e,l,n?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=u(t.length);v>g;g++)if((y=n?_(c(h=t[g])[0],h[1]):_(t[g]))===a||y===f)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,_,h.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){"use strict";var r,o,i,c,u=e(19),s=e(0),a=e(13),f=e(26),l=e(9),p=e(7),v=e(12),h=e(53),d=e(52),y=e(25),m=e(24).set,_=e(47)(),g=e(14),x=e(23),b=e(46),w=e(22),P=s.TypeError,S=s.process,j=S&&S.versions,O=j&&j.v8||"",M=s.Promise,T="process"==f(S),k=function(){},E=o=g.f,L=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(k,k)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==O.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},C=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,s=n.resolve,a=n.reject,f=n.domain;try{u?(o||(2==t._h&&N(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),c=!0)),e===n.promise?a(P("Promise-chain cycle")):(i=A(e))?i.call(e,s,a):s(e)):a(r)}catch(t){f&&!c&&f.exit(),a(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)})}},F=function(t){m.call(s,function(){var n,e,r,o=t._v,i=R(t);if(i&&(n=x(function(){T?S.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=T||R(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(t){m.call(s,function(){var n;T?S.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},W=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),C(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw P("Promise can't be resolved itself");(n=A(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,a(I,r,1),a(W,r,1))}catch(t){W.call(r,t)}}):(e._v=t,e._s=1,C(e,!1))}catch(t){W.call({_w:e,_d:!1},t)}}};L||(M=function(t){h(this,M,"Promise","_h"),v(t),r.call(this);try{t(a(I,this,1),a(W,this,1))}catch(t){W.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(45)(M.prototype,{then:function(t,n){var e=E(y(this,M));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=T?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&C(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(I,t,1),this.reject=a(W,t,1)},g.f=E=function(t){return t===M||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!L,{Promise:M}),e(15)(M,"Promise"),e(44)("Promise"),c=e(2).Promise,l(l.S+l.F*!L,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!L),"Promise",{resolve:function(t){return w(u&&this===c?M:this,t)}}),l(l.S+l.F*!(L&&e(43)(function(t){M.all(t).catch(k)})),"Promise",{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,c=1;d(t,!1,function(t){var u=i++,s=!1;e.push(void 0),c++,n.resolve(t).then(function(t){s||(s=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=x(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=function(){}},function(t,n,e){"use strict";var r=e(56),o=e(55),i=e(6),c=e(17);t.exports=e(34)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){e(57);for(var r=e(0),o=e(5),i=e(6),c=e(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}},function(t,n,e){var r=e(20);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(11),o=e(59),i=e(16)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(21),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(17),o=e(31),i=e(61);t.exports=function(t){return function(n,e,c){var u,s=r(n),a=o(s.length),f=i(c,a);if(t&&e!=e){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(11),o=e(17),i=e(62)(!1),c=e(16)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),s=0,a=[];for(e in u)e!=c&&r(u,e)&&a.push(e);for(;n.length>s;)r(u,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(64),o=e(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(8),o=e(3),i=e(65);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,s=0;u>s;)r.f(t,e=c[s++],n[e]);return t}},function(t,n,e){var r=e(3),o=e(66),i=e(28),c=e(16)("IE_PROTO"),u=function(){},s=function(){var t,n=e(18)("iframe"),r=i.length;for(n.style.display="none",e(27).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){"use strict";var r=e(67),o=e(32),i=e(15),c={};e(5)(c,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=!e(4)&&!e(33)(function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(21),o=e(20);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),s=r(e),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(72)(!0);e(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n){},function(t,n,e){e(74),e(73),e(58),e(54),e(42),e(41),t.exports=e(2).Promise},function(t,n,e){t.exports={default:e(75),__esModule:!0}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(e(76)),o=u(e(40)),i=u(e(39)),c=e(35);function u(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(n){var e=n.elAddTo;(0,o.default)(this,t),this.registration=null,this.dfdPrompt=null,this.elAddTo=e}return(0,i.default)(t,[{key:"initSW",value:function(){var t=this;"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(n){t.registration=n,console.log("ServiceWorker登记成功，范围为",n.scope)}).catch(function(t){console.log("ServiceWorker登记失败：",t)}):alert("not support serviceWorker")}},{key:"initPush",value:function(){var t=this;"PushManager"in window?navigator.serviceWorker.ready.then(function(n){return t.subscribe(n)}):alert("not support PushManager")}},{key:"initNotification",value:function(){var t=this;return new r.default(function(t,n){var e=Notification.requestPermission(function(n){t(n)});e&&e.then(t,n)}).then(function(n){"granted"===n?t.registration&&t.registration.showNotification("ServiceWorker登记成功!",{icon:"/app/img/favicon.ico",body:"can u see?"}):console.log("no permission")})}},{key:"initAddToScreen",value:function(){var t=this,n=document.querySelector(this.elAddTo);function e(t,e){"dismissed"===t.outcome?(console.log("用户取消安装应用"),!this.dfdPrompt&&e&&(this.dfdPrompt=e),n.style.display="block"):(console.log("用户安装了应用"),this.dfdPrompt=null,n.style.display="none")}window.addEventListener("beforeinstallprompt",function(t){t.userChoice.then(function(n){return e(n,t)})}),n.addEventListener("click",function(){null!=t.dfdPrompt&&(t.dfdPrompt.prompt(),t.dfdPrompt.userChoice.then(function(t){return e(t)}))})}},{key:"subscribe",value:function(t){t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:(0,c.urlBase64ToUnit8Array)("BEb2P46QjCQigSz8cpjj8I4s97tQrw-dxlh7MwUhdDQXEg-e11V7fzbye3xEysTcoDp2f6d-B-Q9QoEZdCOESPk")}).then(function(t){console.log({subscription:t})}).catch(function(t){"denied"===Notification.permission&&console.log("用户拒绝了订阅请求")}),t.pushManager.getSubscription().then(function(t){t&&t.unsubscribe().then(function(t){}).catch(function(t){})})}}]),t}();n.default=s},function(t,n){},function(t,n,e){"use strict";e(78);var r,o=e(77),i=(r=o)&&r.__esModule?r:{default:r};window.addEventListener("load",function(){var t=new i.default({elAddTo:"#btn-add"});t.initSW(),t.initPush(),t.initNotification(),t.initAddToScreen()})}]);