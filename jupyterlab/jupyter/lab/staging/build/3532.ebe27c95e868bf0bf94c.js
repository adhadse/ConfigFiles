(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[3532,7113,8709],{26655:(o,r,c)=>{"use strict";c.d(r,{Z:()=>i});var e=c(94015);var n=c.n(e);var t=c(23645);var a=c.n(t);var s=a()(n());s.push([o.id,"/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/hopscotch.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,yCAAyC,8BAA8B,CAAC;AACxE,qCAAqC,mBAAmB,EAAE,iBAAiB,CAAC;AAC5E,wCAAwC,cAAc,CAAC;AACvD,oCAAoC,yCAAyC,CAAC;;AAE9E,iCAAiC,cAAc,CAAC;AAChD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,cAAc,CAAC;;AAE/C,qEAAqE,cAAc,CAAC;AACpF,iCAAiC,cAAc,CAAC;AAChD,gCAAgC,cAAc,CAAC;;AAE/C,kCAAkC,cAAc,CAAC;AACjD,oCAAoC,cAAc,CAAC;AACnD,6BAA6B,cAAc,CAAC;AAC5C,+BAA+B,mBAAmB,EAAE,cAAc,CAAC;AACnE,iCAAiC,cAAc,CAAC;AAChD,6BAA6B,cAAc,CAAC;AAC5C,8BAA8B,cAAc,CAAC;;AAE7C,8CAA8C,0BAA0B,EAAE,uBAAuB,CAAC;AAClG,oDAAoD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n"],sourceRoot:""}]);const i=s},23645:o=>{"use strict";o.exports=function(o){var r=[];r.toString=function r(){return this.map((function(r){var c=o(r);if(r[2]){return"@media ".concat(r[2]," {").concat(c,"}")}return c})).join("")};r.i=function(o,c,e){if(typeof o==="string"){o=[[null,o,""]]}var n={};if(e){for(var t=0;t<this.length;t++){var a=this[t][0];if(a!=null){n[a]=true}}}for(var s=0;s<o.length;s++){var i=[].concat(o[s]);if(e&&n[i[0]]){continue}if(c){if(!i[2]){i[2]=c}else{i[2]="".concat(c," and ").concat(i[2])}}r.push(i)}};return r}},94015:o=>{"use strict";function r(o,r){return a(o)||t(o,r)||e(o,r)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(o,r){if(!o)return;if(typeof o==="string")return n(o,r);var c=Object.prototype.toString.call(o).slice(8,-1);if(c==="Object"&&o.constructor)c=o.constructor.name;if(c==="Map"||c==="Set")return Array.from(o);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return n(o,r)}function n(o,r){if(r==null||r>o.length)r=o.length;for(var c=0,e=new Array(r);c<r;c++){e[c]=o[c]}return e}function t(o,r){var c=o&&(typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"]);if(c==null)return;var e=[];var n=true;var t=false;var a,s;try{for(c=c.call(o);!(n=(a=c.next()).done);n=true){e.push(a.value);if(r&&e.length===r)break}}catch(i){t=true;s=i}finally{try{if(!n&&c["return"]!=null)c["return"]()}finally{if(t)throw s}}return e}function a(o){if(Array.isArray(o))return o}o.exports=function o(c){var e=r(c,4),n=e[1],t=e[3];if(typeof btoa==="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);var i="/*# ".concat(s," */");var A=t.sources.map((function(o){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(o," */")}));return[n].concat(A).concat([i]).join("\n")}return[n].join("\n")}},53532:(o,r,c)=>{"use strict";c.r(r);c.d(r,{default:()=>i});var e=c(93379);var n=c.n(e);var t=c(26655);var a={};a.insert="head";a.singleton=false;var s=n()(t.Z,a);const i=t.Z.locals||{}},93379:(o,r,c)=>{"use strict";var e=function o(){var r;return function o(){if(typeof r==="undefined"){r=Boolean(window&&document&&document.all&&!window.atob)}return r}}();var n=function o(){var r={};return function o(c){if(typeof r[c]==="undefined"){var e=document.querySelector(c);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement){try{e=e.contentDocument.head}catch(n){e=null}}r[c]=e}return r[c]}}();var t=[];function a(o){var r=-1;for(var c=0;c<t.length;c++){if(t[c].identifier===o){r=c;break}}return r}function s(o,r){var c={};var e=[];for(var n=0;n<o.length;n++){var s=o[n];var i=r.base?s[0]+r.base:s[0];var A=c[i]||0;var u="".concat(i," ").concat(A);c[i]=A+1;var l=a(u);var p={css:s[1],media:s[2],sourceMap:s[3]};if(l!==-1){t[l].references++;t[l].updater(p)}else{t.push({identifier:u,updater:d(p,r),references:1})}e.push(u)}return e}function i(o){var r=document.createElement("style");var e=o.attributes||{};if(typeof e.nonce==="undefined"){var t=true?c.nc:0;if(t){e.nonce=t}}Object.keys(e).forEach((function(o){r.setAttribute(o,e[o])}));if(typeof o.insert==="function"){o.insert(r)}else{var a=n(o.insert||"head");if(!a){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}a.appendChild(r)}return r}function A(o){if(o.parentNode===null){return false}o.parentNode.removeChild(o)}var u=function o(){var r=[];return function o(c,e){r[c]=e;return r.filter(Boolean).join("\n")}}();function l(o,r,c,e){var n=c?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(o.styleSheet){o.styleSheet.cssText=u(r,n)}else{var t=document.createTextNode(n);var a=o.childNodes;if(a[r]){o.removeChild(a[r])}if(a.length){o.insertBefore(t,a[r])}else{o.appendChild(t)}}}function p(o,r,c){var e=c.css;var n=c.media;var t=c.sourceMap;if(n){o.setAttribute("media",n)}else{o.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(o.styleSheet){o.styleSheet.cssText=e}else{while(o.firstChild){o.removeChild(o.firstChild)}o.appendChild(document.createTextNode(e))}}var h=null;var m=0;function d(o,r){var c;var e;var n;if(r.singleton){var t=m++;c=h||(h=i(r));e=l.bind(null,c,t,false);n=l.bind(null,c,t,true)}else{c=i(r);e=p.bind(null,c,r);n=function o(){A(c)}}e(o);return function r(c){if(c){if(c.css===o.css&&c.media===o.media&&c.sourceMap===o.sourceMap){return}e(o=c)}else{n()}}}o.exports=function(o,r){r=r||{};if(!r.singleton&&typeof r.singleton!=="boolean"){r.singleton=e()}o=o||[];var c=s(o,r);return function o(e){e=e||[];if(Object.prototype.toString.call(e)!=="[object Array]"){return}for(var n=0;n<c.length;n++){var i=c[n];var A=a(i);t[A].references--}var u=s(e,r);for(var l=0;l<c.length;l++){var p=c[l];var h=a(p);if(t[h].references===0){t[h].updater();t.splice(h,1)}}c=u}}}}]);
//# sourceMappingURL=3532.ebe27c95e868bf0bf94c.js.map?v=ebe27c95e868bf0bf94c