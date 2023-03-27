(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9051],{28338:(e,t,n)=>{"use strict";n.r(t);n.d(t,{COMPLETION_THEME_MANAGER:()=>x,CompletionThemeManager:()=>_});var l=n(93379);var o=n.n(l);var a=n(57592);var r={};r.insert="head";r.singleton=false;var i=o()(a.Z,r);const s=a.Z.locals||{};var p=n(70994);var c=n(33254);var m=n(16923);var d=n(77865);var h=n.n(d);var A=n(91100);const C="lsp-completer-theme-";var u;(function(e){e[e["Text"]=1]="Text";e[e["Method"]=2]="Method";e[e["Function"]=3]="Function";e[e["Constructor"]=4]="Constructor";e[e["Field"]=5]="Field";e[e["Variable"]=6]="Variable";e[e["Class"]=7]="Class";e[e["Interface"]=8]="Interface";e[e["Module"]=9]="Module";e[e["Property"]=10]="Property";e[e["Unit"]=11]="Unit";e[e["Value"]=12]="Value";e[e["Enum"]=13]="Enum";e[e["Keyword"]=14]="Keyword";e[e["Snippet"]=15]="Snippet";e[e["Color"]=16]="Color";e[e["File"]=17]="File";e[e["Reference"]=18]="Reference";e[e["Folder"]=19]="Folder";e[e["EnumMember"]=20]="EnumMember";e[e["Constant"]=21]="Constant";e[e["Struct"]=22]="Struct";e[e["Event"]=23]="Event";e[e["Operator"]=24]="Operator";e[e["TypeParameter"]=25]="TypeParameter"})(u||(u={}));const E="@krassowski/completion-manager";const w="Kernel";const g=new A.Token(E+":ILSPCompletionThemeManager");function v(e){return h().createElement("div",{className:"lsp-licence"},h().createElement("a",{href:e.link,title:e.name},e.abbreviation)," ",e.licensor)}function b(e,t,n,l){let o=[];for(let[a,r]of n(t)){o.push(h().createElement("div",{className:"lsp-completer-icon-row"},h().createElement("div",null,a),h().createElement("div",{className:"jp-Completer-icon"},h().createElement(r.react,null))))}return h().createElement("div",{className:"lsp-completer-themes "+C+t.id},h().createElement("h4",null,t.name,l?e.__(" (current)"):""),h().createElement("ul",null,h().createElement("li",{key:"id"},"ID: ",h().createElement("code",null,t.id)),h().createElement("li",{key:"licence"},e.__("Licence: "),v(t.icons.licence)),h().createElement("li",{key:"dark"},typeof t.icons.dark==="undefined"?"":e.__("Includes dedicated dark mode icons set"))),h().createElement("div",{className:"lsp-completer-theme-icons"},o))}function y(e,t){let n=t.themes.map((n=>b(e,n,t.get_set,n==t.current)));return h().createElement("div",null,n)}class _{constructor(e,t){this.themeManager=e;this.current_theme_id=null;this.themes=new Map;this.icons_cache=new Map;this.icon_overrides=new Map;e.themeChanged.connect(this.update_icons_set,this);this.trans=t}is_theme_light(){const e=this.themeManager.theme;if(!e){return true}return this.themeManager.isLight(e)}get_iconset(e){var t,n;const l=e.icons;const o=!this.is_theme_light()&&typeof l.dark!=="undefined";const a=o?l.dark:l.light;const r=new Map;let i=((n=(t=this.current_theme)===null||t===void 0?void 0:t.icons)===null||n===void 0?void 0:n.options)||{};const s=this.is_theme_light()?"light":"dark";for(let[p,c]of Object.entries(a)){let t="lsp:"+e.id+"-"+p.toLowerCase()+"-"+s;let n;if(this.icons_cache.has(t)){n=this.icons_cache.get(t)}else{n=new m.LabIcon({name:t,svgstr:c});this.icons_cache.set(t,n)}r.set(p,n.bindprops(i))}return r}update_icons_set(){if(this.current_theme===null){return}this.current_icons=this.get_iconset(this.current_theme)}get_icon(e){if(this.current_theme===null){return null}if(e){if(this.icon_overrides.has(e.toLowerCase())){e=this.icon_overrides.get(e.toLowerCase())}e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}if(this.current_icons.has(e)){return this.current_icons.get(e)}if(e===w){return m.kernelIcon}return null}get current_theme_class(){return C+this.current_theme_id}set_theme(e){if(this.current_theme_id){document.body.classList.remove(this.current_theme_class)}if(e&&!this.themes.has(e)){console.warn(`[LSP][Completer] Icons theme ${e} cannot be set yet (it may be loaded later).`)}this.current_theme_id=e;document.body.classList.add(this.current_theme_class);this.update_icons_set()}get current_theme(){if(this.current_theme_id&&this.themes.has(this.current_theme_id)){return this.themes.get(this.current_theme_id)}return null}register_theme(e){if(this.themes.has(e.id)){console.warn("Theme with name",e.id,"was already registered, overwriting.")}this.themes.set(e.id,e);this.update_icons_set()}display_themes(){(0,p.showDialog)({title:this.trans.__("LSP Completer Themes"),body:y(this.trans,{themes:[...this.themes.values()],current:this.current_theme,get_set:this.get_iconset.bind(this)}),buttons:[p.Dialog.okButton({label:this.trans.__("OK")})]}).catch(console.warn)}set_icons_overrides(e){this.icon_overrides=new Map(Object.keys(e).map((t=>[t.toLowerCase(),e[t]])))}}const f="Language server protocol";const x={id:E,requires:[p.IThemeManager,p.ICommandPalette,c.ITranslator],activate:(e,t,n,l)=>{const o=l.load("jupyterlab_lsp");let a=new _(t,o);const r="lsp:completer-about-themes";e.commands.addCommand(r,{label:o.__("Display the completer themes"),execute:()=>{a.display_themes()}});n.addItem({category:f,command:r});return a},provides:g,autoStart:true}},57592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var l=n(94015);var o=n.n(l);var a=n(23645);var r=n.n(a);var i=r()(o());i.push([e.id,".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* a workaround for scrollbars being always on in the completer documentation panel, see\n https://github.com/jupyter-lsp/jupyterlab-lsp/pull/322#issuecomment-682724175\n */\n.jp-Completer-docpanel {\n  overflow: auto;\n}\n\n.jp-Completer {\n  --lsp-completer-max-label-width: 300px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\n.jp-Completer-match {\n  max-width: var(--lsp-completer-max-label-width);\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\n.jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\n.jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\n.jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n","",{version:3,sources:["webpack://./node_modules/@krassowski/completion-theme/style/index.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,uCAAuC;AACzC;;AAEA;EACE,+CAA+C;EAC/C,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,sFAAsF;AACtF;EACE,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,gCAAgC;EAChC,yCAAyC;EACzC,aAAa;EACb;;mBAEiB;EACjB,sCAAsC;AACxC;;AAEA;;EAEE;;GAEC;AACH;;AAEA;EACE,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,gDAAgD;EAChD,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yDAAyD;EACzD,0CAA0C;EAC1C,+CAA+C;EAC/C,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB;;GAEC;AACH;;AAEA;EACE,gBAAgB;EAChB;;GAEC;AACH;;AAEA;;;EAGE,cAAc;AAChB",sourcesContent:[".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* a workaround for scrollbars being always on in the completer documentation panel, see\n https://github.com/jupyter-lsp/jupyterlab-lsp/pull/322#issuecomment-682724175\n */\n.jp-Completer-docpanel {\n  overflow: auto;\n}\n\n.jp-Completer {\n  --lsp-completer-max-label-width: 300px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\n.jp-Completer-match {\n  max-width: var(--lsp-completer-max-label-width);\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\n.jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\n.jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\n.jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n"],sourceRoot:""}]);const s=i}}]);
//# sourceMappingURL=9051.99f3c956cf8b19518960.js.map?v=99f3c956cf8b19518960