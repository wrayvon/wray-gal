!function(e,t,n){var r=[],o={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},i=function(){};i.prototype=o,i=new i;var a=[];function l(e,t){return typeof e===t}var s,c,u=t.documentElement,f="svg"===u.nodeName.toLowerCase();function d(e){var t=u.className,n=i._config.classPrefix||"";if(f&&(t=t.baseVal),i._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}i._config.enableClasses&&(t+=" "+n+e.join(" "+n),f?u.className.baseVal=t:u.className=t)}function p(e,t){if("object"==typeof e)for(var n in e)s(e,n)&&p(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=i[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return i;t="function"==typeof t?t():t,1==r.length?i[r[0]]=t:(!i[r[0]]||i[r[0]]instanceof Boolean||(i[r[0]]=new Boolean(i[r[0]])),i[r[0]][r[1]]=t),d([(t&&0!=t?"":"no-")+r.join("-")]),i._trigger(e,t)}return i}function m(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}s=l(c={}.hasOwnProperty,"undefined")||l(c.call,"undefined")?function(e,t){return t in e&&l(e.constructor.prototype[t],"undefined")}:function(e,t){return c.call(e,t)},o._l={},o.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout(function(){i._trigger(e,i[e])},0)},o._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},i._q.push(function(){o.addTest=p}),f||function(e,t){var n,r,o=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,l="_html5shiv",s=0,c={};function u(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function f(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function d(e){var t=c[e[l]];return t||(t={},s++,e[l]=s,c[s]=t),t}function p(e,n,o){return n||(n=t),r?n.createElement(e):(o||(o=d(n)),!(l=o.cache[e]?o.cache[e].cloneNode():a.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||i.test(e)||l.tagUrn?l:o.frag.appendChild(l));var l}function m(e){e||(e=t);var o,i,a=d(e);return!h.shivCSS||n||a.hasCSS||(a.hasCSS=!!u(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||(o=e,(i=a).cache||(i.cache={},i.createElem=o.createElement,i.createFrag=o.createDocumentFragment,i.frag=i.createFrag()),o.createElement=function(e){return h.shivMethods?p(e,o,i):i.createElem(e)},o.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+f().join().replace(/[\w\-:]+/g,function(e){return i.createElem(e),i.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,i.frag)),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,r=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,r=!0}}();var h={elements:o.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==o.shivCSS,supportsUnknownElements:r,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:m,createElement:p,createDocumentFragment:function(e,n){if(e||(e=t),r)return e.createDocumentFragment();for(var o=(n=n||d(e)).frag.cloneNode(),i=0,a=f(),l=a.length;i<l;i++)o.createElement(a[i]);return o},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(t);var v,g=/^$|\b(?:all|print)\b/,y="html5shiv",E=!(r||(v=t.documentElement,void 0===t.namespaces||void 0===t.parentWindow||void 0===v.applyElement||void 0===v.removeNode||void 0===e.attachEvent));function S(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(y+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function C(e){var t,n,r=d(e),o=e.namespaces,i=e.parentWindow;if(!E||e.printShived)return e;function a(){clearTimeout(r._removeSheetTimer),t&&t.removeNode(!0),t=null}return void 0===o[y]&&o.add(y),i.attachEvent("onbeforeprint",function(){a();for(var r,o,i,l=e.styleSheets,s=[],c=l.length,d=Array(c);c--;)d[c]=l[c];for(;i=d.pop();)if(!i.disabled&&g.test(i.media)){try{r=i.imports,o=r.length}catch(e){o=0}for(c=0;c<o;c++)d.push(r[c]);try{s.push(i.cssText)}catch(e){}}s=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+f().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+y+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(s.reverse().join("")),n=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+f().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(S(t)));return i}(e),t=u(e,s)}),i.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(n),clearTimeout(r._removeSheetTimer),r._removeSheetTimer=setTimeout(a,500)}),e.printShived=!0,e}h.type+=" print",h.shivPrint=C,C(t),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==e?e:this,t);var h={elem:m("modernizr")};i._q.push(function(){delete h.elem});var v={style:h.elem.style};function g(e,n,r,o){var i,a,l,s,c,d="modernizr",p=m("div"),h=((c=t.body)||((c=m(f?"svg":"body")).fake=!0),c);if(parseInt(r,10))for(;r--;)(l=m("div")).id=o?o[r]:d+(r+1),p.appendChild(l);return(i=m("style")).type="text/css",i.id="s"+d,(h.fake?h:p).appendChild(i),h.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",s=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),a=n(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=s,u.offsetHeight):p.parentNode.removeChild(p),!!a}function y(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function E(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(y(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+y(t[o])+":"+r+")");return g("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;null!==o?r&&(o=o.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}(t,null,"position")})}return n}i._q.unshift(function(){delete v.style});o.testProp=function(e,t,r){return function(e,t,r,o){if(o=!l(o,"undefined")&&o,!l(r,"undefined")){var i=E(e,r);if(!l(i,"undefined"))return i}for(var a,s,c,u,f,d=["modernizr","tspan","samp"];!v.style&&d.length;)a=!0,v.modElem=m(d.shift()),v.style=v.modElem.style;function p(){a&&(delete v.style,delete v.modElem)}for(c=e.length,s=0;s<c;s++)if(u=e[s],f=v.style[u],~(""+u).indexOf("-")&&(u=u.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[u]!==n){if(o||l(r,"undefined"))return p(),"pfx"!=t||u;try{v.style[u]=r}catch(e){}if(v.style[u]!=f)return p(),"pfx"!=t||u}return p(),!1}([e],n,t,r)};!function(){var e,t,n,o,s,c;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(t=r[u]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=l(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(c=e[s].split(".")).length?i[c[0]]=o:(!i[c[0]]||i[c[0]]instanceof Boolean||(i[c[0]]=new Boolean(i[c[0]])),i[c[0]][c[1]]=o),a.push((o?"":"no-")+c.join("-"))}}(),d(a),delete o.addTest,delete o.addAsyncTest;for(var S=0;S<i._q.length;S++)i._q[S]();e.Modernizr=i}(window,document);