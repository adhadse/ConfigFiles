(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7034,7113,8709],{59899:(r,e,n)=>{"use strict";n.d(e,{Z:()=>i});var t=n(94015);var a=n.n(t);var c=n(23645);var s=n.n(c);var o=s()(a());o.push([r.id,"/*\n\n    Name:       Railscasts\n    Author:     Ryan Bates (http://railscasts.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}\n.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}\n.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}\n.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}\n.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}\n\n.cm-s-railscasts span.cm-comment {color: #bc9458;}\n.cm-s-railscasts span.cm-atom {color: #b6b3eb;}\n.cm-s-railscasts span.cm-number {color: #b6b3eb;}\n\n.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}\n.cm-s-railscasts span.cm-keyword {color: #da4939;}\n.cm-s-railscasts span.cm-string {color: #ffc66d;}\n\n.cm-s-railscasts span.cm-variable {color: #a5c261;}\n.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}\n.cm-s-railscasts span.cm-def {color: #cc7833;}\n.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}\n.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}\n.cm-s-railscasts span.cm-tag {color: #da4939;}\n.cm-s-railscasts span.cm-link {color: #b6b3eb;}\n\n.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/railscasts.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,6BAA6B,mBAAmB,EAAE,cAAc,CAAC;AACjE,0CAA0C,8BAA8B,CAAC;AACzE,sCAAsC,mBAAmB,EAAE,iBAAiB,CAAC;AAC7E,yCAAyC,cAAc,CAAC;AACxD,qCAAqC,yCAAyC,CAAC;;AAE/E,kCAAkC,cAAc,CAAC;AACjD,+BAA+B,cAAc,CAAC;AAC9C,iCAAiC,cAAc,CAAC;;AAEhD,uEAAuE,cAAc,CAAC;AACtF,kCAAkC,cAAc,CAAC;AACjD,iCAAiC,cAAc,CAAC;;AAEhD,mCAAmC,cAAc,CAAC;AAClD,qCAAqC,cAAc,CAAC;AACpD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,mBAAmB,EAAE,cAAc,CAAC;AACpE,kCAAkC,cAAc,CAAC;AACjD,8BAA8B,cAAc,CAAC;AAC7C,+BAA+B,cAAc,CAAC;;AAE9C,+CAA+C,0BAA0B,EAAE,uBAAuB,CAAC;AACnG,qDAAqD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Railscasts\n    Author:     Ryan Bates (http://railscasts.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-railscasts.CodeMirror {background: #2b2b2b; color: #f4f1ed;}\n.cm-s-railscasts div.CodeMirror-selected {background: #272935 !important;}\n.cm-s-railscasts .CodeMirror-gutters {background: #2b2b2b; border-right: 0px;}\n.cm-s-railscasts .CodeMirror-linenumber {color: #5a647e;}\n.cm-s-railscasts .CodeMirror-cursor {border-left: 1px solid #d4cfc9 !important;}\n\n.cm-s-railscasts span.cm-comment {color: #bc9458;}\n.cm-s-railscasts span.cm-atom {color: #b6b3eb;}\n.cm-s-railscasts span.cm-number {color: #b6b3eb;}\n\n.cm-s-railscasts span.cm-property, .cm-s-railscasts span.cm-attribute {color: #a5c261;}\n.cm-s-railscasts span.cm-keyword {color: #da4939;}\n.cm-s-railscasts span.cm-string {color: #ffc66d;}\n\n.cm-s-railscasts span.cm-variable {color: #a5c261;}\n.cm-s-railscasts span.cm-variable-2 {color: #6d9cbe;}\n.cm-s-railscasts span.cm-def {color: #cc7833;}\n.cm-s-railscasts span.cm-error {background: #da4939; color: #d4cfc9;}\n.cm-s-railscasts span.cm-bracket {color: #f4f1ed;}\n.cm-s-railscasts span.cm-tag {color: #da4939;}\n.cm-s-railscasts span.cm-link {color: #b6b3eb;}\n\n.cm-s-railscasts .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-railscasts .CodeMirror-activeline-background { background: #303040; }\n"],sourceRoot:""}]);const i=o},23645:r=>{"use strict";r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var n=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(n,"}")}return n})).join("")};e.i=function(r,n,t){if(typeof r==="string"){r=[[null,r,""]]}var a={};if(t){for(var c=0;c<this.length;c++){var s=this[c][0];if(s!=null){a[s]=true}}}for(var o=0;o<r.length;o++){var i=[].concat(r[o]);if(t&&a[i[0]]){continue}if(n){if(!i[2]){i[2]=n}else{i[2]="".concat(n," and ").concat(i[2])}}e.push(i)}};return e}},94015:r=>{"use strict";function e(r,e){return s(r)||c(r,e)||t(r,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(!r)return;if(typeof r==="string")return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,e)}function a(r,e){if(e==null||e>r.length)e=r.length;for(var n=0,t=new Array(e);n<e;n++){t[n]=r[n]}return t}function c(r,e){var n=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(n==null)return;var t=[];var a=true;var c=false;var s,o;try{for(n=n.call(r);!(a=(s=n.next()).done);a=true){t.push(s.value);if(e&&t.length===e)break}}catch(i){c=true;o=i}finally{try{if(!a&&n["return"]!=null)n["return"]()}finally{if(c)throw o}}return t}function s(r){if(Array.isArray(r))return r}r.exports=function r(n){var t=e(n,4),a=t[1],c=t[3];if(typeof btoa==="function"){var s=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s);var i="/*# ".concat(o," */");var l=c.sources.map((function(r){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(r," */")}));return[a].concat(l).concat([i]).join("\n")}return[a].join("\n")}},57034:(r,e,n)=>{"use strict";n.r(e);n.d(e,{default:()=>i});var t=n(93379);var a=n.n(t);var c=n(59899);var s={};s.insert="head";s.singleton=false;var o=a()(c.Z,s);const i=c.Z.locals||{}},93379:(r,e,n)=>{"use strict";var t=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var a=function r(){var e={};return function r(n){if(typeof e[n]==="undefined"){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement){try{t=t.contentDocument.head}catch(a){t=null}}e[n]=t}return e[n]}}();var c=[];function s(r){var e=-1;for(var n=0;n<c.length;n++){if(c[n].identifier===r){e=n;break}}return e}function o(r,e){var n={};var t=[];for(var a=0;a<r.length;a++){var o=r[a];var i=e.base?o[0]+e.base:o[0];var l=n[i]||0;var A="".concat(i," ").concat(l);n[i]=l+1;var u=s(A);var m={css:o[1],media:o[2],sourceMap:o[3]};if(u!==-1){c[u].references++;c[u].updater(m)}else{c.push({identifier:A,updater:p(m,e),references:1})}t.push(A)}return t}function i(r){var e=document.createElement("style");var t=r.attributes||{};if(typeof t.nonce==="undefined"){var c=true?n.nc:0;if(c){t.nonce=c}}Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var s=a(r.insert||"head");if(!s){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}s.appendChild(e)}return e}function l(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var A=function r(){var e=[];return function r(n,t){e[n]=t;return e.filter(Boolean).join("\n")}}();function u(r,e,n,t){var a=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet){r.styleSheet.cssText=A(e,a)}else{var c=document.createTextNode(a);var s=r.childNodes;if(s[e]){r.removeChild(s[e])}if(s.length){r.insertBefore(c,s[e])}else{r.appendChild(c)}}}function m(r,e,n){var t=n.css;var a=n.media;var c=n.sourceMap;if(a){r.setAttribute("media",a)}else{r.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(r.styleSheet){r.styleSheet.cssText=t}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(t))}}var d=null;var f=0;function p(r,e){var n;var t;var a;if(e.singleton){var c=f++;n=d||(d=i(e));t=u.bind(null,n,c,false);a=u.bind(null,n,c,true)}else{n=i(e);t=m.bind(null,n,e);a=function r(){l(n)}}t(r);return function e(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap){return}t(r=n)}else{a()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=t()}r=r||[];var n=o(r,e);return function r(t){t=t||[];if(Object.prototype.toString.call(t)!=="[object Array]"){return}for(var a=0;a<n.length;a++){var i=n[a];var l=s(i);c[l].references--}var A=o(t,e);for(var u=0;u<n.length;u++){var m=n[u];var d=s(m);if(c[d].references===0){c[d].updater();c.splice(d,1)}}n=A}}}}]);
//# sourceMappingURL=7034.d28fe15bee6dfd5d7829.js.map?v=d28fe15bee6dfd5d7829