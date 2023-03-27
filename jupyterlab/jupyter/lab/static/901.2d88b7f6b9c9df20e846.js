(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[901,7113,8709],{51240:(n,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(94015);var e=a.n(r);var o=a(23645);var c=a.n(o);var i=c()(e());i.push([n.id,"/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.5;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: #FFF;\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #676B79;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #19F9D8;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #FF75B5;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/panda-syntax.css"],names:[],mappings:"AAAA;;;;CAIC;AACD;CACC,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,gGAAgG;AACjG;AACA,wCAAwC,qBAAqB,EAAE;AAC/D;CACC,mCAAmC;AACpC;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;IACI,cAAc;AAClB;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,cAAc;IACd,YAAY;AAChB",sourcesContent:["/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.5;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: #FFF;\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #676B79;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #19F9D8;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #FF75B5;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n"],sourceRoot:""}]);const s=i},23645:n=>{"use strict";n.exports=function(n){var t=[];t.toString=function t(){return this.map((function(t){var a=n(t);if(t[2]){return"@media ".concat(t[2]," {").concat(a,"}")}return a})).join("")};t.i=function(n,a,r){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(r){for(var o=0;o<this.length;o++){var c=this[o][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var s=[].concat(n[i]);if(r&&e[s[0]]){continue}if(a){if(!s[2]){s[2]=a}else{s[2]="".concat(a," and ").concat(s[2])}}t.push(s)}};return t}},94015:n=>{"use strict";function t(n,t){return c(n)||o(n,t)||r(n,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,t){if(!n)return;if(typeof n==="string")return e(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor)a=n.constructor.name;if(a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,t)}function e(n,t){if(t==null||t>n.length)t=n.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=n[a]}return r}function o(n,t){var a=n&&(typeof Symbol!=="undefined"&&n[Symbol.iterator]||n["@@iterator"]);if(a==null)return;var r=[];var e=true;var o=false;var c,i;try{for(a=a.call(n);!(e=(c=a.next()).done);e=true){r.push(c.value);if(t&&r.length===t)break}}catch(s){o=true;i=s}finally{try{if(!e&&a["return"]!=null)a["return"]()}finally{if(o)throw i}}return r}function c(n){if(Array.isArray(n))return n}n.exports=function n(a){var r=t(a,4),e=r[1],o=r[3];if(typeof btoa==="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(o))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);var s="/*# ".concat(i," */");var A=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(A).concat([s]).join("\n")}return[e].join("\n")}},901:(n,t,a)=>{"use strict";a.r(t);a.d(t,{default:()=>s});var r=a(93379);var e=a.n(r);var o=a(51240);var c={};c.insert="head";c.singleton=false;var i=e()(o.Z,c);const s=o.Z.locals||{}},93379:(n,t,a)=>{"use strict";var r=function n(){var t;return function n(){if(typeof t==="undefined"){t=Boolean(window&&document&&document.all&&!window.atob)}return t}}();var e=function n(){var t={};return function n(a){if(typeof t[a]==="undefined"){var r=document.querySelector(a);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{r=r.contentDocument.head}catch(e){r=null}}t[a]=r}return t[a]}}();var o=[];function c(n){var t=-1;for(var a=0;a<o.length;a++){if(o[a].identifier===n){t=a;break}}return t}function i(n,t){var a={};var r=[];for(var e=0;e<n.length;e++){var i=n[e];var s=t.base?i[0]+t.base:i[0];var A=a[s]||0;var f="".concat(s," ").concat(A);a[s]=A+1;var d=c(f);var l={css:i[1],media:i[2],sourceMap:i[3]};if(d!==-1){o[d].references++;o[d].updater(l)}else{o.push({identifier:f,updater:C(l,t),references:1})}r.push(f)}return r}function s(n){var t=document.createElement("style");var r=n.attributes||{};if(typeof r.nonce==="undefined"){var o=true?a.nc:0;if(o){r.nonce=o}}Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])}));if(typeof n.insert==="function"){n.insert(t)}else{var c=e(n.insert||"head");if(!c){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}c.appendChild(t)}return t}function A(n){if(n.parentNode===null){return false}n.parentNode.removeChild(n)}var f=function n(){var t=[];return function n(a,r){t[a]=r;return t.filter(Boolean).join("\n")}}();function d(n,t,a,r){var e=a?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet){n.styleSheet.cssText=f(t,e)}else{var o=document.createTextNode(e);var c=n.childNodes;if(c[t]){n.removeChild(c[t])}if(c.length){n.insertBefore(o,c[t])}else{n.appendChild(o)}}}function l(n,t,a){var r=a.css;var e=a.media;var o=a.sourceMap;if(e){n.setAttribute("media",e)}else{n.removeAttribute("media")}if(o&&typeof btoa!=="undefined"){r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}if(n.styleSheet){n.styleSheet.cssText=r}else{while(n.firstChild){n.removeChild(n.firstChild)}n.appendChild(document.createTextNode(r))}}var m=null;var u=0;function C(n,t){var a;var r;var e;if(t.singleton){var o=u++;a=m||(m=s(t));r=d.bind(null,a,o,false);e=d.bind(null,a,o,true)}else{a=s(t);r=l.bind(null,a,t);e=function n(){A(a)}}r(n);return function t(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap){return}r(n=a)}else{e()}}}n.exports=function(n,t){t=t||{};if(!t.singleton&&typeof t.singleton!=="boolean"){t.singleton=r()}n=n||[];var a=i(n,t);return function n(r){r=r||[];if(Object.prototype.toString.call(r)!=="[object Array]"){return}for(var e=0;e<a.length;e++){var s=a[e];var A=c(s);o[A].references--}var f=i(r,t);for(var d=0;d<a.length;d++){var l=a[d];var m=c(l);if(o[m].references===0){o[m].updater();o.splice(m,1)}}a=f}}}}]);
//# sourceMappingURL=901.2d88b7f6b9c9df20e846.js.map?v=2d88b7f6b9c9df20e846