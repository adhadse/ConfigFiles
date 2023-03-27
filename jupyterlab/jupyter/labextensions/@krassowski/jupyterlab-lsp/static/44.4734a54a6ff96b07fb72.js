"use strict";(self.webpackChunk_krassowski_jupyterlab_lsp=self.webpackChunk_krassowski_jupyterlab_lsp||[]).push([[44,875,501],{9258:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2609),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* a workaround for scrollbars being always on in the completer documentation panel, see\n https://github.com/jupyter-lsp/jupyterlab-lsp/pull/322#issuecomment-682724175\n */\n.lsp-completer .jp-Completer-docpanel {\n  overflow: auto;\n}\n\n.lsp-completer.jp-Completer {\n  --lsp-completer-max-label-width: 300px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\n.lsp-completer .jp-Completer-match {\n  max-width: var(--lsp-completer-max-label-width);\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\n.lsp-completer .jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\n.lsp-completer .jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\n.lsp-completer .jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.lsp-completer .jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n",""]);const o=l},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var l={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(l[i]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&l[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},6062:(e,t,n)=>{var r,l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],l=0;l<e.length;l++){var a=e[l],s=t.base?a[0]+t.base:a[0],c=n[s]||0,p="".concat(s," ").concat(c);n[s]=c+1;var d=i(p),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:p,updater:v(m,t),references:1}),r.push(p)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var l=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,l);else{var o=document.createTextNode(l),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,l=n.media,o=n.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,u=0;function v(e,t){var n,r,l;if(t.singleton){var o=u++;n=h||(h=s(t)),r=d.bind(null,n,o,!1),l=d.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else l()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var l=i(n[r]);o[l].references--}for(var s=a(e,t),c=0;c<n.length;c++){var p=i(n[c]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}n=s}}}},44:(e,t,n)=>{n.r(t),n.d(t,{COMPLETION_THEME_MANAGER:()=>u,CompletionThemeManager:()=>h});var r=n(6062),l=n.n(r),o=n(9258);l()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=n(1991),a=n(3082),s=n(8912),c=n(6271),p=n.n(c),d=n(5384);function m(e,t){let n=t.themes.map((n=>function(e,t,n,r){let l=[];for(let[e,r]of n(t))l.push(p().createElement("div",{className:"lsp-completer-icon-row"},p().createElement("div",null,e),p().createElement("div",{className:"jp-Completer-icon"},p().createElement(r.react,null))));return p().createElement("div",{className:"lsp-completer-themes "+d.wo+t.id},p().createElement("h4",null,t.name,r?e.__(" (current)"):""),p().createElement("ul",null,p().createElement("li",{key:"id"},"ID: ",p().createElement("code",null,t.id)),p().createElement("li",{key:"licence"},e.__("Licence: "),(o=t.icons.licence,p().createElement("div",{className:"lsp-licence"},p().createElement("a",{href:o.link,title:o.name},o.abbreviation)," ",o.licensor))),p().createElement("li",{key:"dark"},void 0===t.icons.dark?"":e.__("Includes dedicated dark mode icons set"))),p().createElement("div",{className:"lsp-completer-theme-icons"},l));var o}(e,n,t.get_set,n==t.current)));return p().createElement("div",null,n)}class h{constructor(e,t){this.themeManager=e,this.current_theme_id=null,this.themes=new Map,this.icons_cache=new Map,this.icon_overrides=new Map,e.themeChanged.connect(this.update_icons_set,this),this.trans=t}is_theme_light(){const e=this.themeManager.theme;return!e||this.themeManager.isLight(e)}get_iconset(e){var t,n;const r=e.icons,l=this.is_theme_light()||void 0===r.dark?r.light:r.dark,o=new Map;let i=(null===(n=null===(t=this.current_theme)||void 0===t?void 0:t.icons)||void 0===n?void 0:n.options)||{};const a=this.is_theme_light()?"light":"dark";for(let[t,n]of Object.entries(l)){let r,l="lsp:"+e.id+"-"+t.toLowerCase()+"-"+a;this.icons_cache.has(l)?r=this.icons_cache.get(l):(r=new s.LabIcon({name:l,svgstr:n}),this.icons_cache.set(l,r)),o.set(t,r.bindprops(i))}return o}update_icons_set(){null!==this.current_theme&&(this.current_icons=this.get_iconset(this.current_theme))}get_icon(e){return null===this.current_theme?null:(e&&(this.icon_overrides.has(e.toLowerCase())&&(e=this.icon_overrides.get(e.toLowerCase())),e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()),this.current_icons.has(e)?this.current_icons.get(e):e===d.OC?s.kernelIcon:null)}get current_theme_class(){return d.wo+this.current_theme_id}set_theme(e){this.current_theme_id&&document.body.classList.remove(this.current_theme_class),e&&!this.themes.has(e)&&console.warn(`[LSP][Completer] Icons theme ${e} cannot be set yet (it may be loaded later).`),this.current_theme_id=e,null!==e&&document.body.classList.add(this.current_theme_class),this.update_icons_set()}get current_theme(){return this.current_theme_id&&this.themes.has(this.current_theme_id)?this.themes.get(this.current_theme_id):null}register_theme(e){this.themes.has(e.id)&&console.warn("Theme with name",e.id,"was already registered, overwriting."),this.themes.set(e.id,e),this.update_icons_set()}display_themes(){(0,i.showDialog)({title:this.trans.__("LSP Completer Themes"),body:m(this.trans,{themes:[...this.themes.values()],current:this.current_theme,get_set:this.get_iconset.bind(this)}),buttons:[i.Dialog.okButton({label:this.trans.__("OK")})]}).catch(console.warn)}set_icons_overrides(e){this.icon_overrides=new Map(Object.keys(e).map((t=>[t.toLowerCase(),e[t]])))}}const u={id:d.Uu,requires:[i.IThemeManager,i.ICommandPalette,a.ITranslator],activate:(e,t,n,r)=>{const l=r.load("jupyterlab_lsp");let o=new h(t,l);const i="lsp:completer-about-themes";return e.commands.addCommand(i,{label:l.__("Display the completer themes"),execute:()=>{o.display_themes()}}),n.addItem({category:"Language server protocol",command:i}),o},provides:d.kZ,autoStart:!0}},5384:(e,t,n)=>{n.d(t,{wo:()=>l,Uu:()=>i,OC:()=>a,kZ:()=>s});var r=n(1526);const l="lsp-completer-theme-";var o;!function(e){e[e.Text=1]="Text",e[e.Method=2]="Method",e[e.Function=3]="Function",e[e.Constructor=4]="Constructor",e[e.Field=5]="Field",e[e.Variable=6]="Variable",e[e.Class=7]="Class",e[e.Interface=8]="Interface",e[e.Module=9]="Module",e[e.Property=10]="Property",e[e.Unit=11]="Unit",e[e.Value=12]="Value",e[e.Enum=13]="Enum",e[e.Keyword=14]="Keyword",e[e.Snippet=15]="Snippet",e[e.Color=16]="Color",e[e.File=17]="File",e[e.Reference=18]="Reference",e[e.Folder=19]="Folder",e[e.EnumMember=20]="EnumMember",e[e.Constant=21]="Constant",e[e.Struct=22]="Struct",e[e.Event=23]="Event",e[e.Operator=24]="Operator",e[e.TypeParameter=25]="TypeParameter"}(o||(o={}));const i="@krassowski/completion-manager",a="Kernel",s=new r.Token(i+":ILSPCompletionThemeManager")}}]);