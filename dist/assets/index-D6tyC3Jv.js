(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ap(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var co={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var op=co.exports,Du;function lp(){return Du||(Du=1,function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:op,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},l=n.push,u=n.indexOf,f={},h=f.toString,m=f.hasOwnProperty,_=m.toString,x=_.call(Object),M={},S=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},y=function(c){return c!=null&&c===c.window},g=e.document,L={type:!0,src:!0,nonce:!0,noModule:!0};function D(a,c,p){p=p||g;var v,E,T=p.createElement("script");if(T.text=a,c)for(v in L)E=c[v]||c.getAttribute&&c.getAttribute(v),E&&T.setAttribute(v,E);p.head.appendChild(T).parentNode.removeChild(T)}function C(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?f[h.call(a)]||"object":typeof a}var N="3.7.1",O=/HTML$/i,d=function(a,c){return new d.fn.init(a,c)};d.fn=d.prototype={jquery:N,constructor:d,length:0,toArray:function(){return s.call(this)},get:function(a){return a==null?s.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var c=d.merge(this.constructor(),a);return c.prevObject=this,c},each:function(a){return d.each(this,a)},map:function(a){return this.pushStack(d.map(this,function(c,p){return a.call(c,p,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(a,c){return(c+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(a,c){return c%2}))},eq:function(a){var c=this.length,p=+a+(a<0?c:0);return this.pushStack(p>=0&&p<c?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var a,c,p,v,E,T,b=arguments[0]||{},z=1,F=arguments.length,V=!1;for(typeof b=="boolean"&&(V=b,b=arguments[z]||{},z++),typeof b!="object"&&!S(b)&&(b={}),z===F&&(b=this,z--);z<F;z++)if((a=arguments[z])!=null)for(c in a)v=a[c],!(c==="__proto__"||b===v)&&(V&&v&&(d.isPlainObject(v)||(E=Array.isArray(v)))?(p=b[c],E&&!Array.isArray(p)?T=[]:!E&&!d.isPlainObject(p)?T={}:T=p,E=!1,b[c]=d.extend(V,T,v)):v!==void 0&&(b[c]=v));return b},d.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,p;return!a||h.call(a)!=="[object Object]"?!1:(c=i(a),c?(p=m.call(c,"constructor")&&c.constructor,typeof p=="function"&&_.call(p)===x):!0)},isEmptyObject:function(a){var c;for(c in a)return!1;return!0},globalEval:function(a,c,p){D(a,{nonce:c&&c.nonce},p)},each:function(a,c){var p,v=0;if(B(a))for(p=a.length;v<p&&c.call(a[v],v,a[v])!==!1;v++);else for(v in a)if(c.call(a[v],v,a[v])===!1)break;return a},text:function(a){var c,p="",v=0,E=a.nodeType;if(!E)for(;c=a[v++];)p+=d.text(c);return E===1||E===11?a.textContent:E===9?a.documentElement.textContent:E===3||E===4?a.nodeValue:p},makeArray:function(a,c){var p=c||[];return a!=null&&(B(Object(a))?d.merge(p,typeof a=="string"?[a]:a):l.call(p,a)),p},inArray:function(a,c,p){return c==null?-1:u.call(c,a,p)},isXMLDoc:function(a){var c=a&&a.namespaceURI,p=a&&(a.ownerDocument||a).documentElement;return!O.test(c||p&&p.nodeName||"HTML")},merge:function(a,c){for(var p=+c.length,v=0,E=a.length;v<p;v++)a[E++]=c[v];return a.length=E,a},grep:function(a,c,p){for(var v,E=[],T=0,b=a.length,z=!p;T<b;T++)v=!c(a[T],T),v!==z&&E.push(a[T]);return E},map:function(a,c,p){var v,E,T=0,b=[];if(B(a))for(v=a.length;T<v;T++)E=c(a[T],T,p),E!=null&&b.push(E);else for(T in a)E=c(a[T],T,p),E!=null&&b.push(E);return o(b)},guid:1,support:M}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,c){f["[object "+c+"]"]=c.toLowerCase()});function B(a){var c=!!a&&"length"in a&&a.length,p=C(a);return S(a)||y(a)?!1:p==="array"||c===0||typeof c=="number"&&c>0&&c-1 in a}function A(a,c){return a.nodeName&&a.nodeName.toLowerCase()===c.toLowerCase()}var R=n.pop,k=n.sort,ne=n.splice,W="[\\x20\\t\\r\\n\\f]",le=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g");d.contains=function(a,c){var p=c&&c.parentNode;return a===p||!!(p&&p.nodeType===1&&(a.contains?a.contains(p):a.compareDocumentPosition&&a.compareDocumentPosition(p)&16))};var he=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ae(a,c){return c?a==="\0"?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a}d.escapeSelector=function(a){return(a+"").replace(he,ae)};var ce=g,ie=l;(function(){var a,c,p,v,E,T=ie,b,z,F,V,re,de=d.expando,K=0,_e=0,nt=Oa(),bt=Oa(),lt=Oa(),hn=Oa(),rn=function(I,G){return I===G&&(E=!0),0},ui="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",fi="(?:\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",St="\\["+W+"*("+fi+")(?:"+W+"*([*^$|!~]?=)"+W+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+fi+"))|)"+W+"*\\]",Mr=":("+fi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+St+")*)|.*)\\)|)",At=new RegExp(W+"+","g"),qt=new RegExp("^"+W+"*,"+W+"*"),Qs=new RegExp("^"+W+"*([>+~]|"+W+")"+W+"*"),Wo=new RegExp(W+"|>"),hi=new RegExp(Mr),ea=new RegExp("^"+fi+"$"),di={ID:new RegExp("^#("+fi+")"),CLASS:new RegExp("^\\.("+fi+")"),TAG:new RegExp("^("+fi+"|[*])"),ATTR:new RegExp("^"+St),PSEUDO:new RegExp("^"+Mr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),bool:new RegExp("^(?:"+ui+")$","i"),needsContext:new RegExp("^"+W+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)","i")},$i=/^(?:input|select|textarea|button)$/i,Zi=/^h\d$/i,Yn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Xo=/[+~]/,Ri=new RegExp("\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\([^\\r\\n\\f])","g"),Pi=function(I,G){var $="0x"+I.slice(1)-65536;return G||($<0?String.fromCharCode($+65536):String.fromCharCode($>>10|55296,$&1023|56320))},Qd=function(){Ki()},ep=Ba(function(I){return I.disabled===!0&&A(I,"fieldset")},{dir:"parentNode",next:"legend"});function tp(){try{return b.activeElement}catch{}}try{T.apply(n=s.call(ce.childNodes),ce.childNodes),n[ce.childNodes.length].nodeType}catch{T={apply:function(G,$){ie.apply(G,s.call($))},call:function(G){ie.apply(G,s.call(arguments,1))}}}function Lt(I,G,$,te){var fe,Se,Pe,ke,De,_t,Je,rt=G&&G.ownerDocument,gt=G?G.nodeType:9;if($=$||[],typeof I!="string"||!I||gt!==1&&gt!==9&&gt!==11)return $;if(!te&&(Ki(G),G=G||b,F)){if(gt!==11&&(De=Yn.exec(I)))if(fe=De[1]){if(gt===9)if(Pe=G.getElementById(fe)){if(Pe.id===fe)return T.call($,Pe),$}else return $;else if(rt&&(Pe=rt.getElementById(fe))&&Lt.contains(G,Pe)&&Pe.id===fe)return T.call($,Pe),$}else{if(De[2])return T.apply($,G.getElementsByTagName(I)),$;if((fe=De[3])&&G.getElementsByClassName)return T.apply($,G.getElementsByClassName(fe)),$}if(!hn[I+" "]&&(!V||!V.test(I))){if(Je=I,rt=G,gt===1&&(Wo.test(I)||Qs.test(I))){for(rt=Xo.test(I)&&qo(G.parentNode)||G,(rt!=G||!M.scope)&&((ke=G.getAttribute("id"))?ke=d.escapeSelector(ke):G.setAttribute("id",ke=de)),_t=ta(I),Se=_t.length;Se--;)_t[Se]=(ke?"#"+ke:":scope")+" "+Fa(_t[Se]);Je=_t.join(",")}try{return T.apply($,rt.querySelectorAll(Je)),$}catch{hn(I,!0)}finally{ke===de&&G.removeAttribute("id")}}}return Pu(I.replace(le,"$1"),G,$,te)}function Oa(){var I=[];function G($,te){return I.push($+" ")>c.cacheLength&&delete G[I.shift()],G[$+" "]=te}return G}function ni(I){return I[de]=!0,I}function Qr(I){var G=b.createElement("fieldset");try{return!!I(G)}catch{return!1}finally{G.parentNode&&G.parentNode.removeChild(G),G=null}}function np(I){return function(G){return A(G,"input")&&G.type===I}}function ip(I){return function(G){return(A(G,"input")||A(G,"button"))&&G.type===I}}function Cu(I){return function(G){return"form"in G?G.parentNode&&G.disabled===!1?"label"in G?"label"in G.parentNode?G.parentNode.disabled===I:G.disabled===I:G.isDisabled===I||G.isDisabled!==!I&&ep(G)===I:G.disabled===I:"label"in G?G.disabled===I:!1}}function Er(I){return ni(function(G){return G=+G,ni(function($,te){for(var fe,Se=I([],$.length,G),Pe=Se.length;Pe--;)$[fe=Se[Pe]]&&($[fe]=!(te[fe]=$[fe]))})})}function qo(I){return I&&typeof I.getElementsByTagName<"u"&&I}function Ki(I){var G,$=I?I.ownerDocument||I:ce;return $==b||$.nodeType!==9||!$.documentElement||(b=$,z=b.documentElement,F=!d.isXMLDoc(b),re=z.matches||z.webkitMatchesSelector||z.msMatchesSelector,z.msMatchesSelector&&ce!=b&&(G=b.defaultView)&&G.top!==G&&G.addEventListener("unload",Qd),M.getById=Qr(function(te){return z.appendChild(te).id=d.expando,!b.getElementsByName||!b.getElementsByName(d.expando).length}),M.disconnectedMatch=Qr(function(te){return re.call(te,"*")}),M.scope=Qr(function(){return b.querySelectorAll(":scope")}),M.cssHas=Qr(function(){try{return b.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(c.filter.ID=function(te){var fe=te.replace(Ri,Pi);return function(Se){return Se.getAttribute("id")===fe}},c.find.ID=function(te,fe){if(typeof fe.getElementById<"u"&&F){var Se=fe.getElementById(te);return Se?[Se]:[]}}):(c.filter.ID=function(te){var fe=te.replace(Ri,Pi);return function(Se){var Pe=typeof Se.getAttributeNode<"u"&&Se.getAttributeNode("id");return Pe&&Pe.value===fe}},c.find.ID=function(te,fe){if(typeof fe.getElementById<"u"&&F){var Se,Pe,ke,De=fe.getElementById(te);if(De){if(Se=De.getAttributeNode("id"),Se&&Se.value===te)return[De];for(ke=fe.getElementsByName(te),Pe=0;De=ke[Pe++];)if(Se=De.getAttributeNode("id"),Se&&Se.value===te)return[De]}return[]}}),c.find.TAG=function(te,fe){return typeof fe.getElementsByTagName<"u"?fe.getElementsByTagName(te):fe.querySelectorAll(te)},c.find.CLASS=function(te,fe){if(typeof fe.getElementsByClassName<"u"&&F)return fe.getElementsByClassName(te)},V=[],Qr(function(te){var fe;z.appendChild(te).innerHTML="<a id='"+de+"' href='' disabled='disabled'></a><select id='"+de+"-\r\\' disabled='disabled'><option selected=''></option></select>",te.querySelectorAll("[selected]").length||V.push("\\["+W+"*(?:value|"+ui+")"),te.querySelectorAll("[id~="+de+"-]").length||V.push("~="),te.querySelectorAll("a#"+de+"+*").length||V.push(".#.+[+~]"),te.querySelectorAll(":checked").length||V.push(":checked"),fe=b.createElement("input"),fe.setAttribute("type","hidden"),te.appendChild(fe).setAttribute("name","D"),z.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),fe=b.createElement("input"),fe.setAttribute("name",""),te.appendChild(fe),te.querySelectorAll("[name='']").length||V.push("\\["+W+"*name"+W+"*="+W+`*(?:''|"")`)}),M.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),rn=function(te,fe){if(te===fe)return E=!0,0;var Se=!te.compareDocumentPosition-!fe.compareDocumentPosition;return Se||(Se=(te.ownerDocument||te)==(fe.ownerDocument||fe)?te.compareDocumentPosition(fe):1,Se&1||!M.sortDetached&&fe.compareDocumentPosition(te)===Se?te===b||te.ownerDocument==ce&&Lt.contains(ce,te)?-1:fe===b||fe.ownerDocument==ce&&Lt.contains(ce,fe)?1:v?u.call(v,te)-u.call(v,fe):0:Se&4?-1:1)}),b}Lt.matches=function(I,G){return Lt(I,null,null,G)},Lt.matchesSelector=function(I,G){if(Ki(I),F&&!hn[G+" "]&&(!V||!V.test(G)))try{var $=re.call(I,G);if($||M.disconnectedMatch||I.document&&I.document.nodeType!==11)return $}catch{hn(G,!0)}return Lt(G,b,null,[I]).length>0},Lt.contains=function(I,G){return(I.ownerDocument||I)!=b&&Ki(I),d.contains(I,G)},Lt.attr=function(I,G){(I.ownerDocument||I)!=b&&Ki(I);var $=c.attrHandle[G.toLowerCase()],te=$&&m.call(c.attrHandle,G.toLowerCase())?$(I,G,!F):void 0;return te!==void 0?te:I.getAttribute(G)},Lt.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},d.uniqueSort=function(I){var G,$=[],te=0,fe=0;if(E=!M.sortStable,v=!M.sortStable&&s.call(I,0),k.call(I,rn),E){for(;G=I[fe++];)G===I[fe]&&(te=$.push(fe));for(;te--;)ne.call(I,$[te],1)}return v=null,I},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(s.apply(this)))},c=d.expr={cacheLength:50,createPseudo:ni,match:di,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(Ri,Pi),I[3]=(I[3]||I[4]||I[5]||"").replace(Ri,Pi),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||Lt.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&Lt.error(I[0]),I},PSEUDO:function(I){var G,$=!I[6]&&I[2];return di.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":$&&hi.test($)&&(G=ta($,!0))&&(G=$.indexOf(")",$.length-G)-$.length)&&(I[0]=I[0].slice(0,G),I[2]=$.slice(0,G)),I.slice(0,3))}},filter:{TAG:function(I){var G=I.replace(Ri,Pi).toLowerCase();return I==="*"?function(){return!0}:function($){return A($,G)}},CLASS:function(I){var G=nt[I+" "];return G||(G=new RegExp("(^|"+W+")"+I+"("+W+"|$)"))&&nt(I,function($){return G.test(typeof $.className=="string"&&$.className||typeof $.getAttribute<"u"&&$.getAttribute("class")||"")})},ATTR:function(I,G,$){return function(te){var fe=Lt.attr(te,I);return fe==null?G==="!=":G?(fe+="",G==="="?fe===$:G==="!="?fe!==$:G==="^="?$&&fe.indexOf($)===0:G==="*="?$&&fe.indexOf($)>-1:G==="$="?$&&fe.slice(-$.length)===$:G==="~="?(" "+fe.replace(At," ")+" ").indexOf($)>-1:G==="|="?fe===$||fe.slice(0,$.length+1)===$+"-":!1):!0}},CHILD:function(I,G,$,te,fe){var Se=I.slice(0,3)!=="nth",Pe=I.slice(-4)!=="last",ke=G==="of-type";return te===1&&fe===0?function(De){return!!De.parentNode}:function(De,_t,Je){var rt,gt,je,zt,Pn,mn=Se!==Pe?"nextSibling":"previousSibling",jn=De.parentNode,pi=ke&&De.nodeName.toLowerCase(),es=!Je&&!ke,Mn=!1;if(jn){if(Se){for(;mn;){for(je=De;je=je[mn];)if(ke?A(je,pi):je.nodeType===1)return!1;Pn=mn=I==="only"&&!Pn&&"nextSibling"}return!0}if(Pn=[Pe?jn.firstChild:jn.lastChild],Pe&&es){for(gt=jn[de]||(jn[de]={}),rt=gt[I]||[],zt=rt[0]===K&&rt[1],Mn=zt&&rt[2],je=zt&&jn.childNodes[zt];je=++zt&&je&&je[mn]||(Mn=zt=0)||Pn.pop();)if(je.nodeType===1&&++Mn&&je===De){gt[I]=[K,zt,Mn];break}}else if(es&&(gt=De[de]||(De[de]={}),rt=gt[I]||[],zt=rt[0]===K&&rt[1],Mn=zt),Mn===!1)for(;(je=++zt&&je&&je[mn]||(Mn=zt=0)||Pn.pop())&&!((ke?A(je,pi):je.nodeType===1)&&++Mn&&(es&&(gt=je[de]||(je[de]={}),gt[I]=[K,Mn]),je===De)););return Mn-=fe,Mn===te||Mn%te===0&&Mn/te>=0}}},PSEUDO:function(I,G){var $,te=c.pseudos[I]||c.setFilters[I.toLowerCase()]||Lt.error("unsupported pseudo: "+I);return te[de]?te(G):te.length>1?($=[I,I,"",G],c.setFilters.hasOwnProperty(I.toLowerCase())?ni(function(fe,Se){for(var Pe,ke=te(fe,G),De=ke.length;De--;)Pe=u.call(fe,ke[De]),fe[Pe]=!(Se[Pe]=ke[De])}):function(fe){return te(fe,0,$)}):te}},pseudos:{not:ni(function(I){var G=[],$=[],te=Zo(I.replace(le,"$1"));return te[de]?ni(function(fe,Se,Pe,ke){for(var De,_t=te(fe,null,ke,[]),Je=fe.length;Je--;)(De=_t[Je])&&(fe[Je]=!(Se[Je]=De))}):function(fe,Se,Pe){return G[0]=fe,te(G,null,Pe,$),G[0]=null,!$.pop()}}),has:ni(function(I){return function(G){return Lt(I,G).length>0}}),contains:ni(function(I){return I=I.replace(Ri,Pi),function(G){return(G.textContent||d.text(G)).indexOf(I)>-1}}),lang:ni(function(I){return ea.test(I||"")||Lt.error("unsupported lang: "+I),I=I.replace(Ri,Pi).toLowerCase(),function(G){var $;do if($=F?G.lang:G.getAttribute("xml:lang")||G.getAttribute("lang"))return $=$.toLowerCase(),$===I||$.indexOf(I+"-")===0;while((G=G.parentNode)&&G.nodeType===1);return!1}}),target:function(I){var G=e.location&&e.location.hash;return G&&G.slice(1)===I.id},root:function(I){return I===z},focus:function(I){return I===tp()&&b.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:Cu(!1),disabled:Cu(!0),checked:function(I){return A(I,"input")&&!!I.checked||A(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!c.pseudos.empty(I)},header:function(I){return Zi.test(I.nodeName)},input:function(I){return $i.test(I.nodeName)},button:function(I){return A(I,"input")&&I.type==="button"||A(I,"button")},text:function(I){var G;return A(I,"input")&&I.type==="text"&&((G=I.getAttribute("type"))==null||G.toLowerCase()==="text")},first:Er(function(){return[0]}),last:Er(function(I,G){return[G-1]}),eq:Er(function(I,G,$){return[$<0?$+G:$]}),even:Er(function(I,G){for(var $=0;$<G;$+=2)I.push($);return I}),odd:Er(function(I,G){for(var $=1;$<G;$+=2)I.push($);return I}),lt:Er(function(I,G,$){var te;for($<0?te=$+G:$>G?te=G:te=$;--te>=0;)I.push(te);return I}),gt:Er(function(I,G,$){for(var te=$<0?$+G:$;++te<G;)I.push(te);return I})}},c.pseudos.nth=c.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[a]=np(a);for(a in{submit:!0,reset:!0})c.pseudos[a]=ip(a);function Ru(){}Ru.prototype=c.filters=c.pseudos,c.setFilters=new Ru;function ta(I,G){var $,te,fe,Se,Pe,ke,De,_t=bt[I+" "];if(_t)return G?0:_t.slice(0);for(Pe=I,ke=[],De=c.preFilter;Pe;){(!$||(te=qt.exec(Pe)))&&(te&&(Pe=Pe.slice(te[0].length)||Pe),ke.push(fe=[])),$=!1,(te=Qs.exec(Pe))&&($=te.shift(),fe.push({value:$,type:te[0].replace(le," ")}),Pe=Pe.slice($.length));for(Se in c.filter)(te=di[Se].exec(Pe))&&(!De[Se]||(te=De[Se](te)))&&($=te.shift(),fe.push({value:$,type:Se,matches:te}),Pe=Pe.slice($.length));if(!$)break}return G?Pe.length:Pe?Lt.error(I):bt(I,ke).slice(0)}function Fa(I){for(var G=0,$=I.length,te="";G<$;G++)te+=I[G].value;return te}function Ba(I,G,$){var te=G.dir,fe=G.next,Se=fe||te,Pe=$&&Se==="parentNode",ke=_e++;return G.first?function(De,_t,Je){for(;De=De[te];)if(De.nodeType===1||Pe)return I(De,_t,Je);return!1}:function(De,_t,Je){var rt,gt,je=[K,ke];if(Je){for(;De=De[te];)if((De.nodeType===1||Pe)&&I(De,_t,Je))return!0}else for(;De=De[te];)if(De.nodeType===1||Pe)if(gt=De[de]||(De[de]={}),fe&&A(De,fe))De=De[te]||De;else{if((rt=gt[Se])&&rt[0]===K&&rt[1]===ke)return je[2]=rt[2];if(gt[Se]=je,je[2]=I(De,_t,Je))return!0}return!1}}function Yo(I){return I.length>1?function(G,$,te){for(var fe=I.length;fe--;)if(!I[fe](G,$,te))return!1;return!0}:I[0]}function rp(I,G,$){for(var te=0,fe=G.length;te<fe;te++)Lt(I,G[te],$);return $}function za(I,G,$,te,fe){for(var Se,Pe=[],ke=0,De=I.length,_t=G!=null;ke<De;ke++)(Se=I[ke])&&(!$||$(Se,te,fe))&&(Pe.push(Se),_t&&G.push(ke));return Pe}function jo(I,G,$,te,fe,Se){return te&&!te[de]&&(te=jo(te)),fe&&!fe[de]&&(fe=jo(fe,Se)),ni(function(Pe,ke,De,_t){var Je,rt,gt,je,zt=[],Pn=[],mn=ke.length,jn=Pe||rp(G||"*",De.nodeType?[De]:De,[]),pi=I&&(Pe||!G)?za(jn,zt,I,De,_t):jn;if($?(je=fe||(Pe?I:mn||te)?[]:ke,$(pi,je,De,_t)):je=pi,te)for(Je=za(je,Pn),te(Je,[],De,_t),rt=Je.length;rt--;)(gt=Je[rt])&&(je[Pn[rt]]=!(pi[Pn[rt]]=gt));if(Pe){if(fe||I){if(fe){for(Je=[],rt=je.length;rt--;)(gt=je[rt])&&Je.push(pi[rt]=gt);fe(null,je=[],Je,_t)}for(rt=je.length;rt--;)(gt=je[rt])&&(Je=fe?u.call(Pe,gt):zt[rt])>-1&&(Pe[Je]=!(ke[Je]=gt))}}else je=za(je===ke?je.splice(mn,je.length):je),fe?fe(null,ke,je,_t):T.apply(ke,je)})}function $o(I){for(var G,$,te,fe=I.length,Se=c.relative[I[0].type],Pe=Se||c.relative[" "],ke=Se?1:0,De=Ba(function(rt){return rt===G},Pe,!0),_t=Ba(function(rt){return u.call(G,rt)>-1},Pe,!0),Je=[function(rt,gt,je){var zt=!Se&&(je||gt!=p)||((G=gt).nodeType?De(rt,gt,je):_t(rt,gt,je));return G=null,zt}];ke<fe;ke++)if($=c.relative[I[ke].type])Je=[Ba(Yo(Je),$)];else{if($=c.filter[I[ke].type].apply(null,I[ke].matches),$[de]){for(te=++ke;te<fe&&!c.relative[I[te].type];te++);return jo(ke>1&&Yo(Je),ke>1&&Fa(I.slice(0,ke-1).concat({value:I[ke-2].type===" "?"*":""})).replace(le,"$1"),$,ke<te&&$o(I.slice(ke,te)),te<fe&&$o(I=I.slice(te)),te<fe&&Fa(I))}Je.push($)}return Yo(Je)}function sp(I,G){var $=G.length>0,te=I.length>0,fe=function(Se,Pe,ke,De,_t){var Je,rt,gt,je=0,zt="0",Pn=Se&&[],mn=[],jn=p,pi=Se||te&&c.find.TAG("*",_t),es=K+=jn==null?1:Math.random()||.1,Mn=pi.length;for(_t&&(p=Pe==b||Pe||_t);zt!==Mn&&(Je=pi[zt])!=null;zt++){if(te&&Je){for(rt=0,!Pe&&Je.ownerDocument!=b&&(Ki(Je),ke=!F);gt=I[rt++];)if(gt(Je,Pe||b,ke)){T.call(De,Je);break}_t&&(K=es)}$&&((Je=!gt&&Je)&&je--,Se&&Pn.push(Je))}if(je+=zt,$&&zt!==je){for(rt=0;gt=G[rt++];)gt(Pn,mn,Pe,ke);if(Se){if(je>0)for(;zt--;)Pn[zt]||mn[zt]||(mn[zt]=R.call(De));mn=za(mn)}T.apply(De,mn),_t&&!Se&&mn.length>0&&je+G.length>1&&d.uniqueSort(De)}return _t&&(K=es,p=jn),Pn};return $?ni(fe):fe}function Zo(I,G){var $,te=[],fe=[],Se=lt[I+" "];if(!Se){for(G||(G=ta(I)),$=G.length;$--;)Se=$o(G[$]),Se[de]?te.push(Se):fe.push(Se);Se=lt(I,sp(fe,te)),Se.selector=I}return Se}function Pu(I,G,$,te){var fe,Se,Pe,ke,De,_t=typeof I=="function"&&I,Je=!te&&ta(I=_t.selector||I);if($=$||[],Je.length===1){if(Se=Je[0]=Je[0].slice(0),Se.length>2&&(Pe=Se[0]).type==="ID"&&G.nodeType===9&&F&&c.relative[Se[1].type]){if(G=(c.find.ID(Pe.matches[0].replace(Ri,Pi),G)||[])[0],G)_t&&(G=G.parentNode);else return $;I=I.slice(Se.shift().value.length)}for(fe=di.needsContext.test(I)?0:Se.length;fe--&&(Pe=Se[fe],!c.relative[ke=Pe.type]);)if((De=c.find[ke])&&(te=De(Pe.matches[0].replace(Ri,Pi),Xo.test(Se[0].type)&&qo(G.parentNode)||G))){if(Se.splice(fe,1),I=te.length&&Fa(Se),!I)return T.apply($,te),$;break}}return(_t||Zo(I,Je))(te,G,!F,$,!G||Xo.test(I)&&qo(G.parentNode)||G),$}M.sortStable=de.split("").sort(rn).join("")===de,Ki(),M.sortDetached=Qr(function(I){return I.compareDocumentPosition(b.createElement("fieldset"))&1}),d.find=Lt,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,Lt.compile=Zo,Lt.select=Pu,Lt.setDocument=Ki,Lt.tokenize=ta,Lt.escape=d.escapeSelector,Lt.getText=d.text,Lt.isXML=d.isXMLDoc,Lt.selectors=d.expr,Lt.support=d.support,Lt.uniqueSort=d.uniqueSort})();var ye=function(a,c,p){for(var v=[],E=p!==void 0;(a=a[c])&&a.nodeType!==9;)if(a.nodeType===1){if(E&&d(a).is(p))break;v.push(a)}return v},be=function(a,c){for(var p=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&p.push(a);return p},Be=d.expr.match.needsContext,Ze=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Et(a,c,p){return S(c)?d.grep(a,function(v,E){return!!c.call(v,E,v)!==p}):c.nodeType?d.grep(a,function(v){return v===c!==p}):typeof c!="string"?d.grep(a,function(v){return u.call(c,v)>-1!==p}):d.filter(c,a,p)}d.filter=function(a,c,p){var v=c[0];return p&&(a=":not("+a+")"),c.length===1&&v.nodeType===1?d.find.matchesSelector(v,a)?[v]:[]:d.find.matches(a,d.grep(c,function(E){return E.nodeType===1}))},d.fn.extend({find:function(a){var c,p,v=this.length,E=this;if(typeof a!="string")return this.pushStack(d(a).filter(function(){for(c=0;c<v;c++)if(d.contains(E[c],this))return!0}));for(p=this.pushStack([]),c=0;c<v;c++)d.find(a,E[c],p);return v>1?d.uniqueSort(p):p},filter:function(a){return this.pushStack(Et(this,a||[],!1))},not:function(a){return this.pushStack(Et(this,a||[],!0))},is:function(a){return!!Et(this,typeof a=="string"&&Be.test(a)?d(a):a||[],!1).length}});var ue,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ze=d.fn.init=function(a,c,p){var v,E;if(!a)return this;if(p=p||ue,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?v=[null,a,null]:v=ve.exec(a),v&&(v[1]||!c))if(v[1]){if(c=c instanceof d?c[0]:c,d.merge(this,d.parseHTML(v[1],c&&c.nodeType?c.ownerDocument||c:g,!0)),Ze.test(v[1])&&d.isPlainObject(c))for(v in c)S(this[v])?this[v](c[v]):this.attr(v,c[v]);return this}else return E=g.getElementById(v[2]),E&&(this[0]=E,this.length=1),this;else return!c||c.jquery?(c||p).find(a):this.constructor(c).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(S(a))return p.ready!==void 0?p.ready(a):a(d)}return d.makeArray(a,this)};ze.prototype=d.fn,ue=d(g);var Ae=/^(?:parents|prev(?:Until|All))/,$e={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(a){var c=d(a,this),p=c.length;return this.filter(function(){for(var v=0;v<p;v++)if(d.contains(this,c[v]))return!0})},closest:function(a,c){var p,v=0,E=this.length,T=[],b=typeof a!="string"&&d(a);if(!Be.test(a)){for(;v<E;v++)for(p=this[v];p&&p!==c;p=p.parentNode)if(p.nodeType<11&&(b?b.index(p)>-1:p.nodeType===1&&d.find.matchesSelector(p,a))){T.push(p);break}}return this.pushStack(T.length>1?d.uniqueSort(T):T)},index:function(a){return a?typeof a=="string"?u.call(d(a),this[0]):u.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,c){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(a,c))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function Qe(a,c){for(;(a=a[c])&&a.nodeType!==1;);return a}d.each({parent:function(a){var c=a.parentNode;return c&&c.nodeType!==11?c:null},parents:function(a){return ye(a,"parentNode")},parentsUntil:function(a,c,p){return ye(a,"parentNode",p)},next:function(a){return Qe(a,"nextSibling")},prev:function(a){return Qe(a,"previousSibling")},nextAll:function(a){return ye(a,"nextSibling")},prevAll:function(a){return ye(a,"previousSibling")},nextUntil:function(a,c,p){return ye(a,"nextSibling",p)},prevUntil:function(a,c,p){return ye(a,"previousSibling",p)},siblings:function(a){return be((a.parentNode||{}).firstChild,a)},children:function(a){return be(a.firstChild)},contents:function(a){return a.contentDocument!=null&&i(a.contentDocument)?a.contentDocument:(A(a,"template")&&(a=a.content||a),d.merge([],a.childNodes))}},function(a,c){d.fn[a]=function(p,v){var E=d.map(this,c,p);return a.slice(-5)!=="Until"&&(v=p),v&&typeof v=="string"&&(E=d.filter(v,E)),this.length>1&&($e[a]||d.uniqueSort(E),Ae.test(a)&&E.reverse()),this.pushStack(E)}});var Ke=/[^\x20\t\r\n\f]+/g;function kt(a){var c={};return d.each(a.match(Ke)||[],function(p,v){c[v]=!0}),c}d.Callbacks=function(a){a=typeof a=="string"?kt(a):d.extend({},a);var c,p,v,E,T=[],b=[],z=-1,F=function(){for(E=E||a.once,v=c=!0;b.length;z=-1)for(p=b.shift();++z<T.length;)T[z].apply(p[0],p[1])===!1&&a.stopOnFalse&&(z=T.length,p=!1);a.memory||(p=!1),c=!1,E&&(p?T=[]:T="")},V={add:function(){return T&&(p&&!c&&(z=T.length-1,b.push(p)),function re(de){d.each(de,function(K,_e){S(_e)?(!a.unique||!V.has(_e))&&T.push(_e):_e&&_e.length&&C(_e)!=="string"&&re(_e)})}(arguments),p&&!c&&F()),this},remove:function(){return d.each(arguments,function(re,de){for(var K;(K=d.inArray(de,T,K))>-1;)T.splice(K,1),K<=z&&z--}),this},has:function(re){return re?d.inArray(re,T)>-1:T.length>0},empty:function(){return T&&(T=[]),this},disable:function(){return E=b=[],T=p="",this},disabled:function(){return!T},lock:function(){return E=b=[],!p&&!c&&(T=p=""),this},locked:function(){return!!E},fireWith:function(re,de){return E||(de=de||[],de=[re,de.slice?de.slice():de],b.push(de),c||F()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!v}};return V};function ot(a){return a}function Ft(a){throw a}function H(a,c,p,v){var E;try{a&&S(E=a.promise)?E.call(a).done(c).fail(p):a&&S(E=a.then)?E.call(a,c,p):c.apply(void 0,[a].slice(v))}catch(T){p.apply(void 0,[T])}}d.extend({Deferred:function(a){var c=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],p="pending",v={state:function(){return p},always:function(){return E.done(arguments).fail(arguments),this},catch:function(T){return v.then(null,T)},pipe:function(){var T=arguments;return d.Deferred(function(b){d.each(c,function(z,F){var V=S(T[F[4]])&&T[F[4]];E[F[1]](function(){var re=V&&V.apply(this,arguments);re&&S(re.promise)?re.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[F[0]+"With"](this,V?[re]:arguments)})}),T=null}).promise()},then:function(T,b,z){var F=0;function V(re,de,K,_e){return function(){var nt=this,bt=arguments,lt=function(){var rn,ui;if(!(re<F)){if(rn=K.apply(nt,bt),rn===de.promise())throw new TypeError("Thenable self-resolution");ui=rn&&(typeof rn=="object"||typeof rn=="function")&&rn.then,S(ui)?_e?ui.call(rn,V(F,de,ot,_e),V(F,de,Ft,_e)):(F++,ui.call(rn,V(F,de,ot,_e),V(F,de,Ft,_e),V(F,de,ot,de.notifyWith))):(K!==ot&&(nt=void 0,bt=[rn]),(_e||de.resolveWith)(nt,bt))}},hn=_e?lt:function(){try{lt()}catch(rn){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(rn,hn.error),re+1>=F&&(K!==Ft&&(nt=void 0,bt=[rn]),de.rejectWith(nt,bt))}};re?hn():(d.Deferred.getErrorHook?hn.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(hn.error=d.Deferred.getStackHook()),e.setTimeout(hn))}}return d.Deferred(function(re){c[0][3].add(V(0,re,S(z)?z:ot,re.notifyWith)),c[1][3].add(V(0,re,S(T)?T:ot)),c[2][3].add(V(0,re,S(b)?b:Ft))}).promise()},promise:function(T){return T!=null?d.extend(T,v):v}},E={};return d.each(c,function(T,b){var z=b[2],F=b[5];v[b[1]]=z.add,F&&z.add(function(){p=F},c[3-T][2].disable,c[3-T][3].disable,c[0][2].lock,c[0][3].lock),z.add(b[3].fire),E[b[0]]=function(){return E[b[0]+"With"](this===E?void 0:this,arguments),this},E[b[0]+"With"]=z.fireWith}),v.promise(E),a&&a.call(E,E),E},when:function(a){var c=arguments.length,p=c,v=Array(p),E=s.call(arguments),T=d.Deferred(),b=function(z){return function(F){v[z]=this,E[z]=arguments.length>1?s.call(arguments):F,--c||T.resolveWith(v,E)}};if(c<=1&&(H(a,T.done(b(p)).resolve,T.reject,!c),T.state()==="pending"||S(E[p]&&E[p].then)))return T.then();for(;p--;)H(E[p],b(p),T.reject);return T.promise()}});var wn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(a,c){e.console&&e.console.warn&&a&&wn.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,c)},d.readyException=function(a){e.setTimeout(function(){throw a})};var ht=d.Deferred();d.fn.ready=function(a){return ht.then(a).catch(function(c){d.readyException(c)}),this},d.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(a!==!0&&--d.readyWait>0)&&ht.resolveWith(g,[d]))}}),d.ready.then=ht.then;function ut(){g.removeEventListener("DOMContentLoaded",ut),e.removeEventListener("load",ut),d.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(d.ready):(g.addEventListener("DOMContentLoaded",ut),e.addEventListener("load",ut));var Fe=function(a,c,p,v,E,T,b){var z=0,F=a.length,V=p==null;if(C(p)==="object"){E=!0;for(z in p)Fe(a,c,z,p[z],!0,T,b)}else if(v!==void 0&&(E=!0,S(v)||(b=!0),V&&(b?(c.call(a,v),c=null):(V=c,c=function(re,de,K){return V.call(d(re),K)})),c))for(;z<F;z++)c(a[z],p,b?v:v.call(a[z],z,c(a[z],p)));return E?a:V?c.call(a):F?c(a[0],p):T},Nt=/^-ms-/,Ve=/-([a-z])/g;function U(a,c){return c.toUpperCase()}function w(a){return a.replace(Nt,"ms-").replace(Ve,U)}var Z=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function pe(){this.expando=d.expando+pe.uid++}pe.uid=1,pe.prototype={cache:function(a){var c=a[this.expando];return c||(c={},Z(a)&&(a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,configurable:!0}))),c},set:function(a,c,p){var v,E=this.cache(a);if(typeof c=="string")E[w(c)]=p;else for(v in c)E[w(v)]=c[v];return E},get:function(a,c){return c===void 0?this.cache(a):a[this.expando]&&a[this.expando][w(c)]},access:function(a,c,p){return c===void 0||c&&typeof c=="string"&&p===void 0?this.get(a,c):(this.set(a,c,p),p!==void 0?p:c)},remove:function(a,c){var p,v=a[this.expando];if(v!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(w):(c=w(c),c=c in v?[c]:c.match(Ke)||[]),p=c.length;p--;)delete v[c[p]];(c===void 0||d.isEmptyObject(v))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var c=a[this.expando];return c!==void 0&&!d.isEmptyObject(c)}};var j=new pe,oe=new pe,Ge=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/[A-Z]/g;function Oe(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:Ge.test(a)?JSON.parse(a):a}function vt(a,c,p){var v;if(p===void 0&&a.nodeType===1)if(v="data-"+c.replace(we,"-$&").toLowerCase(),p=a.getAttribute(v),typeof p=="string"){try{p=Oe(p)}catch{}oe.set(a,c,p)}else p=void 0;return p}d.extend({hasData:function(a){return oe.hasData(a)||j.hasData(a)},data:function(a,c,p){return oe.access(a,c,p)},removeData:function(a,c){oe.remove(a,c)},_data:function(a,c,p){return j.access(a,c,p)},_removeData:function(a,c){j.remove(a,c)}}),d.fn.extend({data:function(a,c){var p,v,E,T=this[0],b=T&&T.attributes;if(a===void 0){if(this.length&&(E=oe.get(T),T.nodeType===1&&!j.get(T,"hasDataAttrs"))){for(p=b.length;p--;)b[p]&&(v=b[p].name,v.indexOf("data-")===0&&(v=w(v.slice(5)),vt(T,v,E[v])));j.set(T,"hasDataAttrs",!0)}return E}return typeof a=="object"?this.each(function(){oe.set(this,a)}):Fe(this,function(z){var F;if(T&&z===void 0)return F=oe.get(T,a),F!==void 0||(F=vt(T,a),F!==void 0)?F:void 0;this.each(function(){oe.set(this,a,z)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){oe.remove(this,a)})}}),d.extend({queue:function(a,c,p){var v;if(a)return c=(c||"fx")+"queue",v=j.get(a,c),p&&(!v||Array.isArray(p)?v=j.access(a,c,d.makeArray(p)):v.push(p)),v||[]},dequeue:function(a,c){c=c||"fx";var p=d.queue(a,c),v=p.length,E=p.shift(),T=d._queueHooks(a,c),b=function(){d.dequeue(a,c)};E==="inprogress"&&(E=p.shift(),v--),E&&(c==="fx"&&p.unshift("inprogress"),delete T.stop,E.call(a,b,T)),!v&&T&&T.empty.fire()},_queueHooks:function(a,c){var p=c+"queueHooks";return j.get(a,p)||j.access(a,p,{empty:d.Callbacks("once memory").add(function(){j.remove(a,[c+"queue",p])})})}}),d.fn.extend({queue:function(a,c){var p=2;return typeof a!="string"&&(c=a,a="fx",p--),arguments.length<p?d.queue(this[0],a):c===void 0?this:this.each(function(){var v=d.queue(this,a,c);d._queueHooks(this,a),a==="fx"&&v[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var p,v=1,E=d.Deferred(),T=this,b=this.length,z=function(){--v||E.resolveWith(T,[T])};for(typeof a!="string"&&(c=a,a=void 0),a=a||"fx";b--;)p=j.get(T[b],a+"queueHooks"),p&&p.empty&&(v++,p.empty.add(z));return z(),E.promise(c)}});var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ie=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),He=["Top","Right","Bottom","Left"],Ye=g.documentElement,Le=function(a){return d.contains(a.ownerDocument,a)},xt={composed:!0};Ye.getRootNode&&(Le=function(a){return d.contains(a.ownerDocument,a)||a.getRootNode(xt)===a.ownerDocument});var it=function(a,c){return a=c||a,a.style.display==="none"||a.style.display===""&&Le(a)&&d.css(a,"display")==="none"};function Dt(a,c,p,v){var E,T,b=20,z=v?function(){return v.cur()}:function(){return d.css(a,c,"")},F=z(),V=p&&p[3]||(d.cssNumber[c]?"":"px"),re=a.nodeType&&(d.cssNumber[c]||V!=="px"&&+F)&&Ie.exec(d.css(a,c));if(re&&re[3]!==V){for(F=F/2,V=V||re[3],re=+F||1;b--;)d.style(a,c,re+V),(1-T)*(1-(T=z()/F||.5))<=0&&(b=0),re=re/T;re=re*2,d.style(a,c,re+V),p=p||[]}return p&&(re=+re||+F||0,E=p[1]?re+(p[1]+1)*p[2]:+p[2],v&&(v.unit=V,v.start=re,v.end=E)),E}var X={};function Te(a){var c,p=a.ownerDocument,v=a.nodeName,E=X[v];return E||(c=p.body.appendChild(p.createElement(v)),E=d.css(c,"display"),c.parentNode.removeChild(c),E==="none"&&(E="block"),X[v]=E,E)}function se(a,c){for(var p,v,E=[],T=0,b=a.length;T<b;T++)v=a[T],v.style&&(p=v.style.display,c?(p==="none"&&(E[T]=j.get(v,"display")||null,E[T]||(v.style.display="")),v.style.display===""&&it(v)&&(E[T]=Te(v))):p!=="none"&&(E[T]="none",j.set(v,"display",p)));for(T=0;T<b;T++)E[T]!=null&&(a[T].style.display=E[T]);return a}d.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){it(this)?d(this).show():d(this).hide()})}});var me=/^(?:checkbox|radio)$/i,Re=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=g.createDocumentFragment(),c=a.appendChild(g.createElement("div")),p=g.createElement("input");p.setAttribute("type","radio"),p.setAttribute("checked","checked"),p.setAttribute("name","t"),c.appendChild(p),M.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",M.option=!!c.lastChild})();var qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td,M.option||(qe.optgroup=qe.option=[1,"<select multiple='multiple'>","</select>"]);function pt(a,c){var p;return typeof a.getElementsByTagName<"u"?p=a.getElementsByTagName(c||"*"):typeof a.querySelectorAll<"u"?p=a.querySelectorAll(c||"*"):p=[],c===void 0||c&&A(a,c)?d.merge([a],p):p}function Kt(a,c){for(var p=0,v=a.length;p<v;p++)j.set(a[p],"globalEval",!c||j.get(c[p],"globalEval"))}var Pt=/<|&#?\w+;/;function Cn(a,c,p,v,E){for(var T,b,z,F,V,re,de=c.createDocumentFragment(),K=[],_e=0,nt=a.length;_e<nt;_e++)if(T=a[_e],T||T===0)if(C(T)==="object")d.merge(K,T.nodeType?[T]:T);else if(!Pt.test(T))K.push(c.createTextNode(T));else{for(b=b||de.appendChild(c.createElement("div")),z=(Re.exec(T)||["",""])[1].toLowerCase(),F=qe[z]||qe._default,b.innerHTML=F[1]+d.htmlPrefilter(T)+F[2],re=F[0];re--;)b=b.lastChild;d.merge(K,b.childNodes),b=de.firstChild,b.textContent=""}for(de.textContent="",_e=0;T=K[_e++];){if(v&&d.inArray(T,v)>-1){E&&E.push(T);continue}if(V=Le(T),b=pt(de.appendChild(T),"script"),V&&Kt(b),p)for(re=0;T=b[re++];)Ce.test(T.type||"")&&p.push(T)}return de}var qn=/^([^.]*)(?:\.(.+)|)/;function bi(){return!0}function Ai(){return!1}function ti(a,c,p,v,E,T){var b,z;if(typeof c=="object"){typeof p!="string"&&(v=v||p,p=void 0);for(z in c)ti(a,z,p,v,c[z],T);return a}if(v==null&&E==null?(E=p,v=p=void 0):E==null&&(typeof p=="string"?(E=v,v=void 0):(E=v,v=p,p=void 0)),E===!1)E=Ai;else if(!E)return a;return T===1&&(b=E,E=function(F){return d().off(F),b.apply(this,arguments)},E.guid=b.guid||(b.guid=d.guid++)),a.each(function(){d.event.add(this,c,E,v,p)})}d.event={global:{},add:function(a,c,p,v,E){var T,b,z,F,V,re,de,K,_e,nt,bt,lt=j.get(a);if(Z(a))for(p.handler&&(T=p,p=T.handler,E=T.selector),E&&d.find.matchesSelector(Ye,E),p.guid||(p.guid=d.guid++),(F=lt.events)||(F=lt.events=Object.create(null)),(b=lt.handle)||(b=lt.handle=function(hn){return typeof d<"u"&&d.event.triggered!==hn.type?d.event.dispatch.apply(a,arguments):void 0}),c=(c||"").match(Ke)||[""],V=c.length;V--;)z=qn.exec(c[V])||[],_e=bt=z[1],nt=(z[2]||"").split(".").sort(),_e&&(de=d.event.special[_e]||{},_e=(E?de.delegateType:de.bindType)||_e,de=d.event.special[_e]||{},re=d.extend({type:_e,origType:bt,data:v,handler:p,guid:p.guid,selector:E,needsContext:E&&d.expr.match.needsContext.test(E),namespace:nt.join(".")},T),(K=F[_e])||(K=F[_e]=[],K.delegateCount=0,(!de.setup||de.setup.call(a,v,nt,b)===!1)&&a.addEventListener&&a.addEventListener(_e,b)),de.add&&(de.add.call(a,re),re.handler.guid||(re.handler.guid=p.guid)),E?K.splice(K.delegateCount++,0,re):K.push(re),d.event.global[_e]=!0)},remove:function(a,c,p,v,E){var T,b,z,F,V,re,de,K,_e,nt,bt,lt=j.hasData(a)&&j.get(a);if(!(!lt||!(F=lt.events))){for(c=(c||"").match(Ke)||[""],V=c.length;V--;){if(z=qn.exec(c[V])||[],_e=bt=z[1],nt=(z[2]||"").split(".").sort(),!_e){for(_e in F)d.event.remove(a,_e+c[V],p,v,!0);continue}for(de=d.event.special[_e]||{},_e=(v?de.delegateType:de.bindType)||_e,K=F[_e]||[],z=z[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=T=K.length;T--;)re=K[T],(E||bt===re.origType)&&(!p||p.guid===re.guid)&&(!z||z.test(re.namespace))&&(!v||v===re.selector||v==="**"&&re.selector)&&(K.splice(T,1),re.selector&&K.delegateCount--,de.remove&&de.remove.call(a,re));b&&!K.length&&((!de.teardown||de.teardown.call(a,nt,lt.handle)===!1)&&d.removeEvent(a,_e,lt.handle),delete F[_e])}d.isEmptyObject(F)&&j.remove(a,"handle events")}},dispatch:function(a){var c,p,v,E,T,b,z=new Array(arguments.length),F=d.event.fix(a),V=(j.get(this,"events")||Object.create(null))[F.type]||[],re=d.event.special[F.type]||{};for(z[0]=F,c=1;c<arguments.length;c++)z[c]=arguments[c];if(F.delegateTarget=this,!(re.preDispatch&&re.preDispatch.call(this,F)===!1)){for(b=d.event.handlers.call(this,F,V),c=0;(E=b[c++])&&!F.isPropagationStopped();)for(F.currentTarget=E.elem,p=0;(T=E.handlers[p++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||T.namespace===!1||F.rnamespace.test(T.namespace))&&(F.handleObj=T,F.data=T.data,v=((d.event.special[T.origType]||{}).handle||T.handler).apply(E.elem,z),v!==void 0&&(F.result=v)===!1&&(F.preventDefault(),F.stopPropagation()));return re.postDispatch&&re.postDispatch.call(this,F),F.result}},handlers:function(a,c){var p,v,E,T,b,z=[],F=c.delegateCount,V=a.target;if(F&&V.nodeType&&!(a.type==="click"&&a.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(a.type==="click"&&V.disabled===!0)){for(T=[],b={},p=0;p<F;p++)v=c[p],E=v.selector+" ",b[E]===void 0&&(b[E]=v.needsContext?d(E,this).index(V)>-1:d.find(E,this,null,[V]).length),b[E]&&T.push(v);T.length&&z.push({elem:V,handlers:T})}}return V=this,F<c.length&&z.push({elem:V,handlers:c.slice(F)}),z},addProp:function(a,c){Object.defineProperty(d.Event.prototype,a,{enumerable:!0,configurable:!0,get:S(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(p){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:p})}})},fix:function(a){return a[d.expando]?a:new d.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var c=this||a;return me.test(c.type)&&c.click&&A(c,"input")&&qi(c,"click",!0),!1},trigger:function(a){var c=this||a;return me.test(c.type)&&c.click&&A(c,"input")&&qi(c,"click"),!0},_default:function(a){var c=a.target;return me.test(c.type)&&c.click&&A(c,"input")&&j.get(c,"click")||A(c,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function qi(a,c,p){if(!p){j.get(a,c)===void 0&&d.event.add(a,c,bi);return}j.set(a,c,!1),d.event.add(a,c,{namespace:!1,handler:function(v){var E,T=j.get(this,c);if(v.isTrigger&1&&this[c]){if(T)(d.event.special[c]||{}).delegateType&&v.stopPropagation();else if(T=s.call(arguments),j.set(this,c,T),this[c](),E=j.get(this,c),j.set(this,c,!1),T!==E)return v.stopImmediatePropagation(),v.preventDefault(),E}else T&&(j.set(this,c,d.event.trigger(T[0],T.slice(1),this)),v.stopPropagation(),v.isImmediatePropagationStopped=bi)}})}d.removeEvent=function(a,c,p){a.removeEventListener&&a.removeEventListener(c,p)},d.Event=function(a,c){if(!(this instanceof d.Event))return new d.Event(a,c);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?bi:Ai,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,c&&d.extend(this,c),this.timeStamp=a&&a.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:Ai,isPropagationStopped:Ai,isImmediatePropagationStopped:Ai,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bi,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bi,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=bi,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(a,c){function p(v){if(g.documentMode){var E=j.get(this,"handle"),T=d.event.fix(v);T.type=v.type==="focusin"?"focus":"blur",T.isSimulated=!0,E(v),T.target===T.currentTarget&&E(T)}else d.event.simulate(c,v.target,d.event.fix(v))}d.event.special[a]={setup:function(){var v;if(qi(this,a,!0),g.documentMode)v=j.get(this,c),v||this.addEventListener(c,p),j.set(this,c,(v||0)+1);else return!1},trigger:function(){return qi(this,a),!0},teardown:function(){var v;if(g.documentMode)v=j.get(this,c)-1,v?j.set(this,c,v):(this.removeEventListener(c,p),j.remove(this,c));else return!1},_default:function(v){return j.get(v.target,a)},delegateType:c},d.event.special[c]={setup:function(){var v=this.ownerDocument||this.document||this,E=g.documentMode?this:v,T=j.get(E,c);T||(g.documentMode?this.addEventListener(c,p):v.addEventListener(a,p,!0)),j.set(E,c,(T||0)+1)},teardown:function(){var v=this.ownerDocument||this.document||this,E=g.documentMode?this:v,T=j.get(E,c)-1;T?j.set(E,c,T):(g.documentMode?this.removeEventListener(c,p):v.removeEventListener(a,p,!0),j.remove(E,c))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,c){d.event.special[a]={delegateType:c,bindType:c,handle:function(p){var v,E=this,T=p.relatedTarget,b=p.handleObj;return(!T||T!==E&&!d.contains(E,T))&&(p.type=b.origType,v=b.handler.apply(this,arguments),p.type=c),v}}}),d.fn.extend({on:function(a,c,p,v){return ti(this,a,c,p,v)},one:function(a,c,p,v){return ti(this,a,c,p,v,1)},off:function(a,c,p){var v,E;if(a&&a.preventDefault&&a.handleObj)return v=a.handleObj,d(a.delegateTarget).off(v.namespace?v.origType+"."+v.namespace:v.origType,v.selector,v.handler),this;if(typeof a=="object"){for(E in a)this.off(E,c,a[E]);return this}return(c===!1||typeof c=="function")&&(p=c,c=void 0),p===!1&&(p=Ai),this.each(function(){d.event.remove(this,a,p,c)})}});var La=/<script|<style|<link/i,Ia=/checked\s*(?:[^=]|=\s*.checked.)/i,Zr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function qs(a,c){return A(a,"table")&&A(c.nodeType!==11?c:c.firstChild,"tr")&&d(a).children("tbody")[0]||a}function Kr(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function Ua(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function Ys(a,c){var p,v,E,T,b,z,F;if(c.nodeType===1){if(j.hasData(a)&&(T=j.get(a),F=T.events,F)){j.remove(c,"handle events");for(E in F)for(p=0,v=F[E].length;p<v;p++)d.event.add(c,E,F[E][p])}oe.hasData(a)&&(b=oe.access(a),z=d.extend({},b),oe.set(c,z))}}function Oo(a,c){var p=c.nodeName.toLowerCase();p==="input"&&me.test(a.type)?c.checked=a.checked:(p==="input"||p==="textarea")&&(c.defaultValue=a.defaultValue)}function Yi(a,c,p,v){c=o(c);var E,T,b,z,F,V,re=0,de=a.length,K=de-1,_e=c[0],nt=S(_e);if(nt||de>1&&typeof _e=="string"&&!M.checkClone&&Ia.test(_e))return a.each(function(bt){var lt=a.eq(bt);nt&&(c[0]=_e.call(this,bt,lt.html())),Yi(lt,c,p,v)});if(de&&(E=Cn(c,a[0].ownerDocument,!1,a,v),T=E.firstChild,E.childNodes.length===1&&(E=T),T||v)){for(b=d.map(pt(E,"script"),Kr),z=b.length;re<de;re++)F=E,re!==K&&(F=d.clone(F,!0,!0),z&&d.merge(b,pt(F,"script"))),p.call(a[re],F,re);if(z)for(V=b[b.length-1].ownerDocument,d.map(b,Ua),re=0;re<z;re++)F=b[re],Ce.test(F.type||"")&&!j.access(F,"globalEval")&&d.contains(V,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?d._evalUrl&&!F.noModule&&d._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},V):D(F.textContent.replace(Zr,""),F,V))}return a}function Na(a,c,p){for(var v,E=c?d.filter(c,a):a,T=0;(v=E[T])!=null;T++)!p&&v.nodeType===1&&d.cleanData(pt(v)),v.parentNode&&(p&&Le(v)&&Kt(pt(v,"script")),v.parentNode.removeChild(v));return a}d.extend({htmlPrefilter:function(a){return a},clone:function(a,c,p){var v,E,T,b,z=a.cloneNode(!0),F=Le(a);if(!M.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a))for(b=pt(z),T=pt(a),v=0,E=T.length;v<E;v++)Oo(T[v],b[v]);if(c)if(p)for(T=T||pt(a),b=b||pt(z),v=0,E=T.length;v<E;v++)Ys(T[v],b[v]);else Ys(a,z);return b=pt(z,"script"),b.length>0&&Kt(b,!F&&pt(a,"script")),z},cleanData:function(a){for(var c,p,v,E=d.event.special,T=0;(p=a[T])!==void 0;T++)if(Z(p)){if(c=p[j.expando]){if(c.events)for(v in c.events)E[v]?d.event.remove(p,v):d.removeEvent(p,v,c.handle);p[j.expando]=void 0}p[oe.expando]&&(p[oe.expando]=void 0)}}}),d.fn.extend({detach:function(a){return Na(this,a,!0)},remove:function(a){return Na(this,a)},text:function(a){return Fe(this,function(c){return c===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,a,arguments.length)},append:function(){return Yi(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=qs(this,a);c.appendChild(a)}})},prepend:function(){return Yi(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=qs(this,a);c.insertBefore(a,c.firstChild)}})},before:function(){return Yi(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Yi(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,c=0;(a=this[c])!=null;c++)a.nodeType===1&&(d.cleanData(pt(a,!1)),a.textContent="");return this},clone:function(a,c){return a=a??!1,c=c??a,this.map(function(){return d.clone(this,a,c)})},html:function(a){return Fe(this,function(c){var p=this[0]||{},v=0,E=this.length;if(c===void 0&&p.nodeType===1)return p.innerHTML;if(typeof c=="string"&&!La.test(c)&&!qe[(Re.exec(c)||["",""])[1].toLowerCase()]){c=d.htmlPrefilter(c);try{for(;v<E;v++)p=this[v]||{},p.nodeType===1&&(d.cleanData(pt(p,!1)),p.innerHTML=c);p=0}catch{}}p&&this.empty().append(c)},null,a,arguments.length)},replaceWith:function(){var a=[];return Yi(this,arguments,function(c){var p=this.parentNode;d.inArray(this,a)<0&&(d.cleanData(pt(this)),p&&p.replaceChild(c,this))},a)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){d.fn[a]=function(p){for(var v,E=[],T=d(p),b=T.length-1,z=0;z<=b;z++)v=z===b?this:this.clone(!0),d(T[z])[c](v),l.apply(E,v.get());return this.pushStack(E)}});var js=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),$s=/^--/,Jr=function(a){var c=a.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(a)},P=function(a,c,p){var v,E,T={};for(E in c)T[E]=a.style[E],a.style[E]=c[E];v=p.call(a);for(E in c)a.style[E]=T[E];return v},q=new RegExp(He.join("|"),"i");(function(){function a(){if(V){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ye.appendChild(F).appendChild(V);var re=e.getComputedStyle(V);p=re.top!=="1%",z=c(re.marginLeft)===12,V.style.right="60%",T=c(re.right)===36,v=c(re.width)===36,V.style.position="absolute",E=c(V.offsetWidth/3)===12,Ye.removeChild(F),V=null}}function c(re){return Math.round(parseFloat(re))}var p,v,E,T,b,z,F=g.createElement("div"),V=g.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=V.style.backgroundClip==="content-box",d.extend(M,{boxSizingReliable:function(){return a(),v},pixelBoxStyles:function(){return a(),T},pixelPosition:function(){return a(),p},reliableMarginLeft:function(){return a(),z},scrollboxSize:function(){return a(),E},reliableTrDimensions:function(){var re,de,K,_e;return b==null&&(re=g.createElement("table"),de=g.createElement("tr"),K=g.createElement("div"),re.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="box-sizing:content-box;border:1px solid",de.style.height="1px",K.style.height="9px",K.style.display="block",Ye.appendChild(re).appendChild(de).appendChild(K),_e=e.getComputedStyle(de),b=parseInt(_e.height,10)+parseInt(_e.borderTopWidth,10)+parseInt(_e.borderBottomWidth,10)===de.offsetHeight,Ye.removeChild(re)),b}}))})();function Q(a,c,p){var v,E,T,b,z=$s.test(c),F=a.style;return p=p||Jr(a),p&&(b=p.getPropertyValue(c)||p[c],z&&b&&(b=b.replace(le,"$1")||void 0),b===""&&!Le(a)&&(b=d.style(a,c)),!M.pixelBoxStyles()&&js.test(b)&&q.test(c)&&(v=F.width,E=F.minWidth,T=F.maxWidth,F.minWidth=F.maxWidth=F.width=b,b=p.width,F.width=v,F.minWidth=E,F.maxWidth=T)),b!==void 0?b+"":b}function ee(a,c){return{get:function(){if(a()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Y=["Webkit","Moz","ms"],ge=g.createElement("div").style,Me={};function Ue(a){for(var c=a[0].toUpperCase()+a.slice(1),p=Y.length;p--;)if(a=Y[p]+c,a in ge)return a}function Ne(a){var c=d.cssProps[a]||Me[a];return c||(a in ge?a:Me[a]=Ue(a)||a)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"};function yt(a,c,p){var v=Ie.exec(c);return v?Math.max(0,v[2]-(p||0))+(v[3]||"px"):c}function Tt(a,c,p,v,E,T){var b=c==="width"?1:0,z=0,F=0,V=0;if(p===(v?"border":"content"))return 0;for(;b<4;b+=2)p==="margin"&&(V+=d.css(a,p+He[b],!0,E)),v?(p==="content"&&(F-=d.css(a,"padding"+He[b],!0,E)),p!=="margin"&&(F-=d.css(a,"border"+He[b]+"Width",!0,E))):(F+=d.css(a,"padding"+He[b],!0,E),p!=="padding"?F+=d.css(a,"border"+He[b]+"Width",!0,E):z+=d.css(a,"border"+He[b]+"Width",!0,E));return!v&&T>=0&&(F+=Math.max(0,Math.ceil(a["offset"+c[0].toUpperCase()+c.slice(1)]-T-F-z-.5))||0),F+V}function Vt(a,c,p){var v=Jr(a),E=!M.boxSizingReliable()||p,T=E&&d.css(a,"boxSizing",!1,v)==="border-box",b=T,z=Q(a,c,v),F="offset"+c[0].toUpperCase()+c.slice(1);if(js.test(z)){if(!p)return z;z="auto"}return(!M.boxSizingReliable()&&T||!M.reliableTrDimensions()&&A(a,"tr")||z==="auto"||!parseFloat(z)&&d.css(a,"display",!1,v)==="inline")&&a.getClientRects().length&&(T=d.css(a,"boxSizing",!1,v)==="border-box",b=F in a,b&&(z=a[F])),z=parseFloat(z)||0,z+Tt(a,c,p||(T?"border":"content"),b,v,z)+"px"}d.extend({cssHooks:{opacity:{get:function(a,c){if(c){var p=Q(a,"opacity");return p===""?"1":p}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(a,c,p,v){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var E,T,b,z=w(c),F=$s.test(c),V=a.style;if(F||(c=Ne(z)),b=d.cssHooks[c]||d.cssHooks[z],p!==void 0){if(T=typeof p,T==="string"&&(E=Ie.exec(p))&&E[1]&&(p=Dt(a,c,E),T="number"),p==null||p!==p)return;T==="number"&&!F&&(p+=E&&E[3]||(d.cssNumber[z]?"":"px")),!M.clearCloneStyle&&p===""&&c.indexOf("background")===0&&(V[c]="inherit"),(!b||!("set"in b)||(p=b.set(a,p,v))!==void 0)&&(F?V.setProperty(c,p):V[c]=p)}else return b&&"get"in b&&(E=b.get(a,!1,v))!==void 0?E:V[c]}},css:function(a,c,p,v){var E,T,b,z=w(c),F=$s.test(c);return F||(c=Ne(z)),b=d.cssHooks[c]||d.cssHooks[z],b&&"get"in b&&(E=b.get(a,!0,p)),E===void 0&&(E=Q(a,c,v)),E==="normal"&&c in Xe&&(E=Xe[c]),p===""||p?(T=parseFloat(E),p===!0||isFinite(T)?T||0:E):E}}),d.each(["height","width"],function(a,c){d.cssHooks[c]={get:function(p,v,E){if(v)return et.test(d.css(p,"display"))&&(!p.getClientRects().length||!p.getBoundingClientRect().width)?P(p,tt,function(){return Vt(p,c,E)}):Vt(p,c,E)},set:function(p,v,E){var T,b=Jr(p),z=!M.scrollboxSize()&&b.position==="absolute",F=z||E,V=F&&d.css(p,"boxSizing",!1,b)==="border-box",re=E?Tt(p,c,E,V,b):0;return V&&z&&(re-=Math.ceil(p["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(b[c])-Tt(p,c,"border",!1,b)-.5)),re&&(T=Ie.exec(v))&&(T[3]||"px")!=="px"&&(p.style[c]=v,v=d.css(p,c)),yt(p,v,re)}}}),d.cssHooks.marginLeft=ee(M.reliableMarginLeft,function(a,c){if(c)return(parseFloat(Q(a,"marginLeft"))||a.getBoundingClientRect().left-P(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(a,c){d.cssHooks[a+c]={expand:function(p){for(var v=0,E={},T=typeof p=="string"?p.split(" "):[p];v<4;v++)E[a+He[v]+c]=T[v]||T[v-2]||T[0];return E}},a!=="margin"&&(d.cssHooks[a+c].set=yt)}),d.fn.extend({css:function(a,c){return Fe(this,function(p,v,E){var T,b,z={},F=0;if(Array.isArray(v)){for(T=Jr(p),b=v.length;F<b;F++)z[v[F]]=d.css(p,v[F],!1,T);return z}return E!==void 0?d.style(p,v,E):d.css(p,v)},a,c,arguments.length>1)}});function mt(a,c,p,v,E){return new mt.prototype.init(a,c,p,v,E)}d.Tween=mt,mt.prototype={constructor:mt,init:function(a,c,p,v,E,T){this.elem=a,this.prop=p,this.easing=E||d.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=v,this.unit=T||(d.cssNumber[p]?"":"px")},cur:function(){var a=mt.propHooks[this.prop];return a&&a.get?a.get(this):mt.propHooks._default.get(this)},run:function(a){var c,p=mt.propHooks[this.prop];return this.options.duration?this.pos=c=d.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):mt.propHooks._default.set(this),this}},mt.prototype.init.prototype=mt.prototype,mt.propHooks={_default:{get:function(a){var c;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(c=d.css(a.elem,a.prop,""),!c||c==="auto"?0:c)},set:function(a){d.fx.step[a.prop]?d.fx.step[a.prop](a):a.elem.nodeType===1&&(d.cssHooks[a.prop]||a.elem.style[Ne(a.prop)]!=null)?d.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},mt.propHooks.scrollTop=mt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},d.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},d.fx=mt.prototype.init,d.fx.step={};var ft,We,nn=/^(?:toggle|show|hide)$/,Ct=/queueHooks$/;function Sn(){We&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Sn):e.setTimeout(Sn,d.fx.interval),d.fx.tick())}function wi(){return e.setTimeout(function(){ft=void 0}),ft=Date.now()}function ln(a,c){var p,v=0,E={height:a};for(c=c?1:0;v<4;v+=2-c)p=He[v],E["margin"+p]=E["padding"+p]=a;return c&&(E.opacity=E.width=a),E}function ji(a,c,p){for(var v,E=(Ht.tweeners[c]||[]).concat(Ht.tweeners["*"]),T=0,b=E.length;T<b;T++)if(v=E[T].call(p,c,a))return v}function Bt(a,c,p){var v,E,T,b,z,F,V,re,de="width"in c||"height"in c,K=this,_e={},nt=a.style,bt=a.nodeType&&it(a),lt=j.get(a,"fxshow");p.queue||(b=d._queueHooks(a,"fx"),b.unqueued==null&&(b.unqueued=0,z=b.empty.fire,b.empty.fire=function(){b.unqueued||z()}),b.unqueued++,K.always(function(){K.always(function(){b.unqueued--,d.queue(a,"fx").length||b.empty.fire()})}));for(v in c)if(E=c[v],nn.test(E)){if(delete c[v],T=T||E==="toggle",E===(bt?"hide":"show"))if(E==="show"&&lt&&lt[v]!==void 0)bt=!0;else continue;_e[v]=lt&&lt[v]||d.style(a,v)}if(F=!d.isEmptyObject(c),!(!F&&d.isEmptyObject(_e))){de&&a.nodeType===1&&(p.overflow=[nt.overflow,nt.overflowX,nt.overflowY],V=lt&&lt.display,V==null&&(V=j.get(a,"display")),re=d.css(a,"display"),re==="none"&&(V?re=V:(se([a],!0),V=a.style.display||V,re=d.css(a,"display"),se([a]))),(re==="inline"||re==="inline-block"&&V!=null)&&d.css(a,"float")==="none"&&(F||(K.done(function(){nt.display=V}),V==null&&(re=nt.display,V=re==="none"?"":re)),nt.display="inline-block")),p.overflow&&(nt.overflow="hidden",K.always(function(){nt.overflow=p.overflow[0],nt.overflowX=p.overflow[1],nt.overflowY=p.overflow[2]})),F=!1;for(v in _e)F||(lt?"hidden"in lt&&(bt=lt.hidden):lt=j.access(a,"fxshow",{display:V}),T&&(lt.hidden=!bt),bt&&se([a],!0),K.done(function(){bt||se([a]),j.remove(a,"fxshow");for(v in _e)d.style(a,v,_e[v])})),F=ji(bt?lt[v]:0,v,K),v in lt||(lt[v]=F.start,bt&&(F.end=F.start,F.start=0))}}function Rn(a,c){var p,v,E,T,b;for(p in a)if(v=w(p),E=c[v],T=a[p],Array.isArray(T)&&(E=T[1],T=a[p]=T[0]),p!==v&&(a[v]=T,delete a[p]),b=d.cssHooks[v],b&&"expand"in b){T=b.expand(T),delete a[v];for(p in T)p in a||(a[p]=T[p],c[p]=E)}else c[v]=E}function Ht(a,c,p){var v,E,T=0,b=Ht.prefilters.length,z=d.Deferred().always(function(){delete F.elem}),F=function(){if(E)return!1;for(var de=ft||wi(),K=Math.max(0,V.startTime+V.duration-de),_e=K/V.duration||0,nt=1-_e,bt=0,lt=V.tweens.length;bt<lt;bt++)V.tweens[bt].run(nt);return z.notifyWith(a,[V,nt,K]),nt<1&&lt?K:(lt||z.notifyWith(a,[V,1,0]),z.resolveWith(a,[V]),!1)},V=z.promise({elem:a,props:d.extend({},c),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},p),originalProperties:c,originalOptions:p,startTime:ft||wi(),duration:p.duration,tweens:[],createTween:function(de,K){var _e=d.Tween(a,V.opts,de,K,V.opts.specialEasing[de]||V.opts.easing);return V.tweens.push(_e),_e},stop:function(de){var K=0,_e=de?V.tweens.length:0;if(E)return this;for(E=!0;K<_e;K++)V.tweens[K].run(1);return de?(z.notifyWith(a,[V,1,0]),z.resolveWith(a,[V,de])):z.rejectWith(a,[V,de]),this}}),re=V.props;for(Rn(re,V.opts.specialEasing);T<b;T++)if(v=Ht.prefilters[T].call(V,a,re,V.opts),v)return S(v.stop)&&(d._queueHooks(V.elem,V.opts.queue).stop=v.stop.bind(v)),v;return d.map(re,ji,V),S(V.opts.start)&&V.opts.start.call(a,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),d.fx.timer(d.extend(F,{elem:a,anim:V,queue:V.opts.queue})),V}d.Animation=d.extend(Ht,{tweeners:{"*":[function(a,c){var p=this.createTween(a,c);return Dt(p.elem,a,Ie.exec(c),p),p}]},tweener:function(a,c){S(a)?(c=a,a=["*"]):a=a.match(Ke);for(var p,v=0,E=a.length;v<E;v++)p=a[v],Ht.tweeners[p]=Ht.tweeners[p]||[],Ht.tweeners[p].unshift(c)},prefilters:[Bt],prefilter:function(a,c){c?Ht.prefilters.unshift(a):Ht.prefilters.push(a)}}),d.speed=function(a,c,p){var v=a&&typeof a=="object"?d.extend({},a):{complete:p||!p&&c||S(a)&&a,duration:a,easing:p&&c||c&&!S(c)&&c};return d.fx.off?v.duration=0:typeof v.duration!="number"&&(v.duration in d.fx.speeds?v.duration=d.fx.speeds[v.duration]:v.duration=d.fx.speeds._default),(v.queue==null||v.queue===!0)&&(v.queue="fx"),v.old=v.complete,v.complete=function(){S(v.old)&&v.old.call(this),v.queue&&d.dequeue(this,v.queue)},v},d.fn.extend({fadeTo:function(a,c,p,v){return this.filter(it).css("opacity",0).show().end().animate({opacity:c},a,p,v)},animate:function(a,c,p,v){var E=d.isEmptyObject(a),T=d.speed(c,p,v),b=function(){var z=Ht(this,d.extend({},a),T);(E||j.get(this,"finish"))&&z.stop(!0)};return b.finish=b,E||T.queue===!1?this.each(b):this.queue(T.queue,b)},stop:function(a,c,p){var v=function(E){var T=E.stop;delete E.stop,T(p)};return typeof a!="string"&&(p=c,c=a,a=void 0),c&&this.queue(a||"fx",[]),this.each(function(){var E=!0,T=a!=null&&a+"queueHooks",b=d.timers,z=j.get(this);if(T)z[T]&&z[T].stop&&v(z[T]);else for(T in z)z[T]&&z[T].stop&&Ct.test(T)&&v(z[T]);for(T=b.length;T--;)b[T].elem===this&&(a==null||b[T].queue===a)&&(b[T].anim.stop(p),E=!1,b.splice(T,1));(E||!p)&&d.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var c,p=j.get(this),v=p[a+"queue"],E=p[a+"queueHooks"],T=d.timers,b=v?v.length:0;for(p.finish=!0,d.queue(this,a,[]),E&&E.stop&&E.stop.call(this,!0),c=T.length;c--;)T[c].elem===this&&T[c].queue===a&&(T[c].anim.stop(!0),T.splice(c,1));for(c=0;c<b;c++)v[c]&&v[c].finish&&v[c].finish.call(this);delete p.finish})}}),d.each(["toggle","show","hide"],function(a,c){var p=d.fn[c];d.fn[c]=function(v,E,T){return v==null||typeof v=="boolean"?p.apply(this,arguments):this.animate(ln(c,!0),v,E,T)}}),d.each({slideDown:ln("show"),slideUp:ln("hide"),slideToggle:ln("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,c){d.fn[a]=function(p,v,E){return this.animate(c,p,v,E)}}),d.timers=[],d.fx.tick=function(){var a,c=0,p=d.timers;for(ft=Date.now();c<p.length;c++)a=p[c],!a()&&p[c]===a&&p.splice(c--,1);p.length||d.fx.stop(),ft=void 0},d.fx.timer=function(a){d.timers.push(a),d.fx.start()},d.fx.interval=13,d.fx.start=function(){We||(We=!0,Sn())},d.fx.stop=function(){We=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(a,c){return a=d.fx&&d.fx.speeds[a]||a,c=c||"fx",this.queue(c,function(p,v){var E=e.setTimeout(p,a);v.stop=function(){e.clearTimeout(E)}})},function(){var a=g.createElement("input"),c=g.createElement("select"),p=c.appendChild(g.createElement("option"));a.type="checkbox",M.checkOn=a.value!=="",M.optSelected=p.selected,a=g.createElement("input"),a.value="t",a.type="radio",M.radioValue=a.value==="t"}();var cn,Jt=d.expr.attrHandle;d.fn.extend({attr:function(a,c){return Fe(this,d.attr,a,c,arguments.length>1)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})}}),d.extend({attr:function(a,c,p){var v,E,T=a.nodeType;if(!(T===3||T===8||T===2)){if(typeof a.getAttribute>"u")return d.prop(a,c,p);if((T!==1||!d.isXMLDoc(a))&&(E=d.attrHooks[c.toLowerCase()]||(d.expr.match.bool.test(c)?cn:void 0)),p!==void 0){if(p===null){d.removeAttr(a,c);return}return E&&"set"in E&&(v=E.set(a,p,c))!==void 0?v:(a.setAttribute(c,p+""),p)}return E&&"get"in E&&(v=E.get(a,c))!==null?v:(v=d.find.attr(a,c),v??void 0)}},attrHooks:{type:{set:function(a,c){if(!M.radioValue&&c==="radio"&&A(a,"input")){var p=a.value;return a.setAttribute("type",c),p&&(a.value=p),c}}}},removeAttr:function(a,c){var p,v=0,E=c&&c.match(Ke);if(E&&a.nodeType===1)for(;p=E[v++];)a.removeAttribute(p)}}),cn={set:function(a,c,p){return c===!1?d.removeAttr(a,p):a.setAttribute(p,p),p}},d.each(d.expr.match.bool.source.match(/\w+/g),function(a,c){var p=Jt[c]||d.find.attr;Jt[c]=function(v,E,T){var b,z,F=E.toLowerCase();return T||(z=Jt[F],Jt[F]=b,b=p(v,E,T)!=null?F:null,Jt[F]=z),b}});var Zs=/^(?:input|select|textarea|button)$/i,Ci=/^(?:a|area)$/i;d.fn.extend({prop:function(a,c){return Fe(this,d.prop,a,c,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[d.propFix[a]||a]})}}),d.extend({prop:function(a,c,p){var v,E,T=a.nodeType;if(!(T===3||T===8||T===2))return(T!==1||!d.isXMLDoc(a))&&(c=d.propFix[c]||c,E=d.propHooks[c]),p!==void 0?E&&"set"in E&&(v=E.set(a,p,c))!==void 0?v:a[c]=p:E&&"get"in E&&(v=E.get(a,c))!==null?v:a[c]},propHooks:{tabIndex:{get:function(a){var c=d.find.attr(a,"tabindex");return c?parseInt(c,10):Zs.test(a.nodeName)||Ci.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(d.propHooks.selected={get:function(a){var c=a.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(a){var c=a.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function yr(a){var c=a.match(Ke)||[];return c.join(" ")}function Sr(a){return a.getAttribute&&a.getAttribute("class")||""}function Fo(a){return Array.isArray(a)?a:typeof a=="string"?a.match(Ke)||[]:[]}d.fn.extend({addClass:function(a){var c,p,v,E,T,b;return S(a)?this.each(function(z){d(this).addClass(a.call(this,z,Sr(this)))}):(c=Fo(a),c.length?this.each(function(){if(v=Sr(this),p=this.nodeType===1&&" "+yr(v)+" ",p){for(T=0;T<c.length;T++)E=c[T],p.indexOf(" "+E+" ")<0&&(p+=E+" ");b=yr(p),v!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(a){var c,p,v,E,T,b;return S(a)?this.each(function(z){d(this).removeClass(a.call(this,z,Sr(this)))}):arguments.length?(c=Fo(a),c.length?this.each(function(){if(v=Sr(this),p=this.nodeType===1&&" "+yr(v)+" ",p){for(T=0;T<c.length;T++)for(E=c[T];p.indexOf(" "+E+" ")>-1;)p=p.replace(" "+E+" "," ");b=yr(p),v!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(a,c){var p,v,E,T,b=typeof a,z=b==="string"||Array.isArray(a);return S(a)?this.each(function(F){d(this).toggleClass(a.call(this,F,Sr(this),c),c)}):typeof c=="boolean"&&z?c?this.addClass(a):this.removeClass(a):(p=Fo(a),this.each(function(){if(z)for(T=d(this),E=0;E<p.length;E++)v=p[E],T.hasClass(v)?T.removeClass(v):T.addClass(v);else(a===void 0||b==="boolean")&&(v=Sr(this),v&&j.set(this,"__className__",v),this.setAttribute&&this.setAttribute("class",v||a===!1?"":j.get(this,"__className__")||""))}))},hasClass:function(a){var c,p,v=0;for(c=" "+a+" ";p=this[v++];)if(p.nodeType===1&&(" "+yr(Sr(p))+" ").indexOf(c)>-1)return!0;return!1}});var Od=/\r/g;d.fn.extend({val:function(a){var c,p,v,E=this[0];return arguments.length?(v=S(a),this.each(function(T){var b;this.nodeType===1&&(v?b=a.call(this,T,d(this).val()):b=a,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=d.map(b,function(z){return z==null?"":z+""})),c=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,b,"value")===void 0)&&(this.value=b))})):E?(c=d.valHooks[E.type]||d.valHooks[E.nodeName.toLowerCase()],c&&"get"in c&&(p=c.get(E,"value"))!==void 0?p:(p=E.value,typeof p=="string"?p.replace(Od,""):p??"")):void 0}}),d.extend({valHooks:{option:{get:function(a){var c=d.find.attr(a,"value");return c??yr(d.text(a))}},select:{get:function(a){var c,p,v,E=a.options,T=a.selectedIndex,b=a.type==="select-one",z=b?null:[],F=b?T+1:E.length;for(T<0?v=F:v=b?T:0;v<F;v++)if(p=E[v],(p.selected||v===T)&&!p.disabled&&(!p.parentNode.disabled||!A(p.parentNode,"optgroup"))){if(c=d(p).val(),b)return c;z.push(c)}return z},set:function(a,c){for(var p,v,E=a.options,T=d.makeArray(c),b=E.length;b--;)v=E[b],(v.selected=d.inArray(d.valHooks.option.get(v),T)>-1)&&(p=!0);return p||(a.selectedIndex=-1),T}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(a,c){if(Array.isArray(c))return a.checked=d.inArray(d(a).val(),c)>-1}},M.checkOn||(d.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})});var Ks=e.location,xu={guid:Date.now()},Bo=/\?/;d.parseXML=function(a){var c,p;if(!a||typeof a!="string")return null;try{c=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return p=c&&c.getElementsByTagName("parsererror")[0],(!c||p)&&d.error("Invalid XML: "+(p?d.map(p.childNodes,function(v){return v.textContent}).join(`
`):a)),c};var yu=/^(?:focusinfocus|focusoutblur)$/,Su=function(a){a.stopPropagation()};d.extend(d.event,{trigger:function(a,c,p,v){var E,T,b,z,F,V,re,de,K=[p||g],_e=m.call(a,"type")?a.type:a,nt=m.call(a,"namespace")?a.namespace.split("."):[];if(T=de=b=p=p||g,!(p.nodeType===3||p.nodeType===8)&&!yu.test(_e+d.event.triggered)&&(_e.indexOf(".")>-1&&(nt=_e.split("."),_e=nt.shift(),nt.sort()),F=_e.indexOf(":")<0&&"on"+_e,a=a[d.expando]?a:new d.Event(_e,typeof a=="object"&&a),a.isTrigger=v?2:3,a.namespace=nt.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=p),c=c==null?[a]:d.makeArray(c,[a]),re=d.event.special[_e]||{},!(!v&&re.trigger&&re.trigger.apply(p,c)===!1))){if(!v&&!re.noBubble&&!y(p)){for(z=re.delegateType||_e,yu.test(z+_e)||(T=T.parentNode);T;T=T.parentNode)K.push(T),b=T;b===(p.ownerDocument||g)&&K.push(b.defaultView||b.parentWindow||e)}for(E=0;(T=K[E++])&&!a.isPropagationStopped();)de=T,a.type=E>1?z:re.bindType||_e,V=(j.get(T,"events")||Object.create(null))[a.type]&&j.get(T,"handle"),V&&V.apply(T,c),V=F&&T[F],V&&V.apply&&Z(T)&&(a.result=V.apply(T,c),a.result===!1&&a.preventDefault());return a.type=_e,!v&&!a.isDefaultPrevented()&&(!re._default||re._default.apply(K.pop(),c)===!1)&&Z(p)&&F&&S(p[_e])&&!y(p)&&(b=p[F],b&&(p[F]=null),d.event.triggered=_e,a.isPropagationStopped()&&de.addEventListener(_e,Su),p[_e](),a.isPropagationStopped()&&de.removeEventListener(_e,Su),d.event.triggered=void 0,b&&(p[F]=b)),a.result}},simulate:function(a,c,p){var v=d.extend(new d.Event,p,{type:a,isSimulated:!0});d.event.trigger(v,null,c)}}),d.fn.extend({trigger:function(a,c){return this.each(function(){d.event.trigger(a,c,this)})},triggerHandler:function(a,c){var p=this[0];if(p)return d.event.trigger(a,c,p,!0)}});var Fd=/\[\]$/,Mu=/\r?\n/g,Bd=/^(?:submit|button|image|reset|file)$/i,zd=/^(?:input|select|textarea|keygen)/i;function zo(a,c,p,v){var E;if(Array.isArray(c))d.each(c,function(T,b){p||Fd.test(a)?v(a,b):zo(a+"["+(typeof b=="object"&&b!=null?T:"")+"]",b,p,v)});else if(!p&&C(c)==="object")for(E in c)zo(a+"["+E+"]",c[E],p,v);else v(a,c)}d.param=function(a,c){var p,v=[],E=function(T,b){var z=S(b)?b():b;v[v.length]=encodeURIComponent(T)+"="+encodeURIComponent(z??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){E(this.name,this.value)});else for(p in a)zo(p,a[p],c,E);return v.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=d.prop(this,"elements");return a?d.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!d(this).is(":disabled")&&zd.test(this.nodeName)&&!Bd.test(a)&&(this.checked||!me.test(a))}).map(function(a,c){var p=d(this).val();return p==null?null:Array.isArray(p)?d.map(p,function(v){return{name:c.name,value:v.replace(Mu,`\r
`)}}):{name:c.name,value:p.replace(Mu,`\r
`)}}).get()}});var kd=/%20/g,Hd=/#.*$/,Gd=/([?&])_=[^&]*/,Vd=/^(.*?):[ \t]*([^\r\n]*)$/mg,Wd=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xd=/^(?:GET|HEAD)$/,qd=/^\/\//,Eu={},ko={},Tu="*/".concat("*"),Ho=g.createElement("a");Ho.href=Ks.href;function bu(a){return function(c,p){typeof c!="string"&&(p=c,c="*");var v,E=0,T=c.toLowerCase().match(Ke)||[];if(S(p))for(;v=T[E++];)v[0]==="+"?(v=v.slice(1)||"*",(a[v]=a[v]||[]).unshift(p)):(a[v]=a[v]||[]).push(p)}}function Au(a,c,p,v){var E={},T=a===ko;function b(z){var F;return E[z]=!0,d.each(a[z]||[],function(V,re){var de=re(c,p,v);if(typeof de=="string"&&!T&&!E[de])return c.dataTypes.unshift(de),b(de),!1;if(T)return!(F=de)}),F}return b(c.dataTypes[0])||!E["*"]&&b("*")}function Go(a,c){var p,v,E=d.ajaxSettings.flatOptions||{};for(p in c)c[p]!==void 0&&((E[p]?a:v||(v={}))[p]=c[p]);return v&&d.extend(!0,a,v),a}function Yd(a,c,p){for(var v,E,T,b,z=a.contents,F=a.dataTypes;F[0]==="*";)F.shift(),v===void 0&&(v=a.mimeType||c.getResponseHeader("Content-Type"));if(v){for(E in z)if(z[E]&&z[E].test(v)){F.unshift(E);break}}if(F[0]in p)T=F[0];else{for(E in p){if(!F[0]||a.converters[E+" "+F[0]]){T=E;break}b||(b=E)}T=T||b}if(T)return T!==F[0]&&F.unshift(T),p[T]}function jd(a,c,p,v){var E,T,b,z,F,V={},re=a.dataTypes.slice();if(re[1])for(b in a.converters)V[b.toLowerCase()]=a.converters[b];for(T=re.shift();T;)if(a.responseFields[T]&&(p[a.responseFields[T]]=c),!F&&v&&a.dataFilter&&(c=a.dataFilter(c,a.dataType)),F=T,T=re.shift(),T){if(T==="*")T=F;else if(F!=="*"&&F!==T){if(b=V[F+" "+T]||V["* "+T],!b){for(E in V)if(z=E.split(" "),z[1]===T&&(b=V[F+" "+z[0]]||V["* "+z[0]],b)){b===!0?b=V[E]:V[E]!==!0&&(T=z[0],re.unshift(z[1]));break}}if(b!==!0)if(b&&a.throws)c=b(c);else try{c=b(c)}catch(de){return{state:"parsererror",error:b?de:"No conversion from "+F+" to "+T}}}}return{state:"success",data:c}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ks.href,type:"GET",isLocal:Wd.test(Ks.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,c){return c?Go(Go(a,d.ajaxSettings),c):Go(d.ajaxSettings,a)},ajaxPrefilter:bu(Eu),ajaxTransport:bu(ko),ajax:function(a,c){typeof a=="object"&&(c=a,a=void 0),c=c||{};var p,v,E,T,b,z,F,V,re,de,K=d.ajaxSetup({},c),_e=K.context||K,nt=K.context&&(_e.nodeType||_e.jquery)?d(_e):d.event,bt=d.Deferred(),lt=d.Callbacks("once memory"),hn=K.statusCode||{},rn={},ui={},fi="canceled",St={readyState:0,getResponseHeader:function(At){var qt;if(F){if(!T)for(T={};qt=Vd.exec(E);)T[qt[1].toLowerCase()+" "]=(T[qt[1].toLowerCase()+" "]||[]).concat(qt[2]);qt=T[At.toLowerCase()+" "]}return qt==null?null:qt.join(", ")},getAllResponseHeaders:function(){return F?E:null},setRequestHeader:function(At,qt){return F==null&&(At=ui[At.toLowerCase()]=ui[At.toLowerCase()]||At,rn[At]=qt),this},overrideMimeType:function(At){return F==null&&(K.mimeType=At),this},statusCode:function(At){var qt;if(At)if(F)St.always(At[St.status]);else for(qt in At)hn[qt]=[hn[qt],At[qt]];return this},abort:function(At){var qt=At||fi;return p&&p.abort(qt),Mr(0,qt),this}};if(bt.promise(St),K.url=((a||K.url||Ks.href)+"").replace(qd,Ks.protocol+"//"),K.type=c.method||c.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(Ke)||[""],K.crossDomain==null){z=g.createElement("a");try{z.href=K.url,z.href=z.href,K.crossDomain=Ho.protocol+"//"+Ho.host!=z.protocol+"//"+z.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=d.param(K.data,K.traditional)),Au(Eu,K,c,St),F)return St;V=d.event&&K.global,V&&d.active++===0&&d.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!Xd.test(K.type),v=K.url.replace(Hd,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(kd,"+")):(de=K.url.slice(v.length),K.data&&(K.processData||typeof K.data=="string")&&(v+=(Bo.test(v)?"&":"?")+K.data,delete K.data),K.cache===!1&&(v=v.replace(Gd,"$1"),de=(Bo.test(v)?"&":"?")+"_="+xu.guid+++de),K.url=v+de),K.ifModified&&(d.lastModified[v]&&St.setRequestHeader("If-Modified-Since",d.lastModified[v]),d.etag[v]&&St.setRequestHeader("If-None-Match",d.etag[v])),(K.data&&K.hasContent&&K.contentType!==!1||c.contentType)&&St.setRequestHeader("Content-Type",K.contentType),St.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Tu+"; q=0.01":""):K.accepts["*"]);for(re in K.headers)St.setRequestHeader(re,K.headers[re]);if(K.beforeSend&&(K.beforeSend.call(_e,St,K)===!1||F))return St.abort();if(fi="abort",lt.add(K.complete),St.done(K.success),St.fail(K.error),p=Au(ko,K,c,St),!p)Mr(-1,"No Transport");else{if(St.readyState=1,V&&nt.trigger("ajaxSend",[St,K]),F)return St;K.async&&K.timeout>0&&(b=e.setTimeout(function(){St.abort("timeout")},K.timeout));try{F=!1,p.send(rn,Mr)}catch(At){if(F)throw At;Mr(-1,At)}}function Mr(At,qt,Qs,Wo){var hi,ea,di,$i,Zi,Yn=qt;F||(F=!0,b&&e.clearTimeout(b),p=void 0,E=Wo||"",St.readyState=At>0?4:0,hi=At>=200&&At<300||At===304,Qs&&($i=Yd(K,St,Qs)),!hi&&d.inArray("script",K.dataTypes)>-1&&d.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),$i=jd(K,$i,St,hi),hi?(K.ifModified&&(Zi=St.getResponseHeader("Last-Modified"),Zi&&(d.lastModified[v]=Zi),Zi=St.getResponseHeader("etag"),Zi&&(d.etag[v]=Zi)),At===204||K.type==="HEAD"?Yn="nocontent":At===304?Yn="notmodified":(Yn=$i.state,ea=$i.data,di=$i.error,hi=!di)):(di=Yn,(At||!Yn)&&(Yn="error",At<0&&(At=0))),St.status=At,St.statusText=(qt||Yn)+"",hi?bt.resolveWith(_e,[ea,Yn,St]):bt.rejectWith(_e,[St,Yn,di]),St.statusCode(hn),hn=void 0,V&&nt.trigger(hi?"ajaxSuccess":"ajaxError",[St,K,hi?ea:di]),lt.fireWith(_e,[St,Yn]),V&&(nt.trigger("ajaxComplete",[St,K]),--d.active||d.event.trigger("ajaxStop")))}return St},getJSON:function(a,c,p){return d.get(a,c,p,"json")},getScript:function(a,c){return d.get(a,void 0,c,"script")}}),d.each(["get","post"],function(a,c){d[c]=function(p,v,E,T){return S(v)&&(T=T||E,E=v,v=void 0),d.ajax(d.extend({url:p,type:c,dataType:T,data:v,success:E},d.isPlainObject(p)&&p))}}),d.ajaxPrefilter(function(a){var c;for(c in a.headers)c.toLowerCase()==="content-type"&&(a.contentType=a.headers[c]||"")}),d._evalUrl=function(a,c,p){return d.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(v){d.globalEval(v,c,p)}})},d.fn.extend({wrapAll:function(a){var c;return this[0]&&(S(a)&&(a=a.call(this[0])),c=d(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var p=this;p.firstElementChild;)p=p.firstElementChild;return p}).append(this)),this},wrapInner:function(a){return S(a)?this.each(function(c){d(this).wrapInner(a.call(this,c))}):this.each(function(){var c=d(this),p=c.contents();p.length?p.wrapAll(a):c.append(a)})},wrap:function(a){var c=S(a);return this.each(function(p){d(this).wrapAll(c?a.call(this,p):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(a){return!d.expr.pseudos.visible(a)},d.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var $d={0:200,1223:204},Js=d.ajaxSettings.xhr();M.cors=!!Js&&"withCredentials"in Js,M.ajax=Js=!!Js,d.ajaxTransport(function(a){var c,p;if(M.cors||Js&&!a.crossDomain)return{send:function(v,E){var T,b=a.xhr();if(b.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(T in a.xhrFields)b[T]=a.xhrFields[T];a.mimeType&&b.overrideMimeType&&b.overrideMimeType(a.mimeType),!a.crossDomain&&!v["X-Requested-With"]&&(v["X-Requested-With"]="XMLHttpRequest");for(T in v)b.setRequestHeader(T,v[T]);c=function(z){return function(){c&&(c=p=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,z==="abort"?b.abort():z==="error"?typeof b.status!="number"?E(0,"error"):E(b.status,b.statusText):E($d[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=c(),p=b.onerror=b.ontimeout=c("error"),b.onabort!==void 0?b.onabort=p:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){c&&p()})},c=c("abort");try{b.send(a.hasContent&&a.data||null)}catch(z){if(c)throw z}},abort:function(){c&&c()}}}),d.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return d.globalEval(a),a}}}),d.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),d.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var c,p;return{send:function(v,E){c=d("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",p=function(T){c.remove(),p=null,T&&E(T.type==="error"?404:200,T.type)}),g.head.appendChild(c[0])},abort:function(){p&&p()}}}});var wu=[],Vo=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=wu.pop()||d.expando+"_"+xu.guid++;return this[a]=!0,a}}),d.ajaxPrefilter("json jsonp",function(a,c,p){var v,E,T,b=a.jsonp!==!1&&(Vo.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Vo.test(a.data)&&"data");if(b||a.dataTypes[0]==="jsonp")return v=a.jsonpCallback=S(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,b?a[b]=a[b].replace(Vo,"$1"+v):a.jsonp!==!1&&(a.url+=(Bo.test(a.url)?"&":"?")+a.jsonp+"="+v),a.converters["script json"]=function(){return T||d.error(v+" was not called"),T[0]},a.dataTypes[0]="json",E=e[v],e[v]=function(){T=arguments},p.always(function(){E===void 0?d(e).removeProp(v):e[v]=E,a[v]&&(a.jsonpCallback=c.jsonpCallback,wu.push(v)),T&&S(E)&&E(T[0]),T=E=void 0}),"script"}),M.createHTMLDocument=function(){var a=g.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),d.parseHTML=function(a,c,p){if(typeof a!="string")return[];typeof c=="boolean"&&(p=c,c=!1);var v,E,T;return c||(M.createHTMLDocument?(c=g.implementation.createHTMLDocument(""),v=c.createElement("base"),v.href=g.location.href,c.head.appendChild(v)):c=g),E=Ze.exec(a),T=!p&&[],E?[c.createElement(E[1])]:(E=Cn([a],c,T),T&&T.length&&d(T).remove(),d.merge([],E.childNodes))},d.fn.load=function(a,c,p){var v,E,T,b=this,z=a.indexOf(" ");return z>-1&&(v=yr(a.slice(z)),a=a.slice(0,z)),S(c)?(p=c,c=void 0):c&&typeof c=="object"&&(E="POST"),b.length>0&&d.ajax({url:a,type:E||"GET",dataType:"html",data:c}).done(function(F){T=arguments,b.html(v?d("<div>").append(d.parseHTML(F)).find(v):F)}).always(p&&function(F,V){b.each(function(){p.apply(this,T||[F.responseText,V,F])})}),this},d.expr.pseudos.animated=function(a){return d.grep(d.timers,function(c){return a===c.elem}).length},d.offset={setOffset:function(a,c,p){var v,E,T,b,z,F,V,re=d.css(a,"position"),de=d(a),K={};re==="static"&&(a.style.position="relative"),z=de.offset(),T=d.css(a,"top"),F=d.css(a,"left"),V=(re==="absolute"||re==="fixed")&&(T+F).indexOf("auto")>-1,V?(v=de.position(),b=v.top,E=v.left):(b=parseFloat(T)||0,E=parseFloat(F)||0),S(c)&&(c=c.call(a,p,d.extend({},z))),c.top!=null&&(K.top=c.top-z.top+b),c.left!=null&&(K.left=c.left-z.left+E),"using"in c?c.using.call(a,K):de.css(K)}},d.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(E){d.offset.setOffset(this,a,E)});var c,p,v=this[0];if(v)return v.getClientRects().length?(c=v.getBoundingClientRect(),p=v.ownerDocument.defaultView,{top:c.top+p.pageYOffset,left:c.left+p.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,c,p,v=this[0],E={top:0,left:0};if(d.css(v,"position")==="fixed")c=v.getBoundingClientRect();else{for(c=this.offset(),p=v.ownerDocument,a=v.offsetParent||p.documentElement;a&&(a===p.body||a===p.documentElement)&&d.css(a,"position")==="static";)a=a.parentNode;a&&a!==v&&a.nodeType===1&&(E=d(a).offset(),E.top+=d.css(a,"borderTopWidth",!0),E.left+=d.css(a,"borderLeftWidth",!0))}return{top:c.top-E.top-d.css(v,"marginTop",!0),left:c.left-E.left-d.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&d.css(a,"position")==="static";)a=a.offsetParent;return a||Ye})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var p=c==="pageYOffset";d.fn[a]=function(v){return Fe(this,function(E,T,b){var z;if(y(E)?z=E:E.nodeType===9&&(z=E.defaultView),b===void 0)return z?z[c]:E[T];z?z.scrollTo(p?z.pageXOffset:b,p?b:z.pageYOffset):E[T]=b},a,v,arguments.length)}}),d.each(["top","left"],function(a,c){d.cssHooks[c]=ee(M.pixelPosition,function(p,v){if(v)return v=Q(p,c),js.test(v)?d(p).position()[c]+"px":v})}),d.each({Height:"height",Width:"width"},function(a,c){d.each({padding:"inner"+a,content:c,"":"outer"+a},function(p,v){d.fn[v]=function(E,T){var b=arguments.length&&(p||typeof E!="boolean"),z=p||(E===!0||T===!0?"margin":"border");return Fe(this,function(F,V,re){var de;return y(F)?v.indexOf("outer")===0?F["inner"+a]:F.document.documentElement["client"+a]:F.nodeType===9?(de=F.documentElement,Math.max(F.body["scroll"+a],de["scroll"+a],F.body["offset"+a],de["offset"+a],de["client"+a])):re===void 0?d.css(F,V,z):d.style(F,V,re,z)},c,b?E:void 0,b)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,c){d.fn[c]=function(p){return this.on(c,p)}}),d.fn.extend({bind:function(a,c,p){return this.on(a,null,c,p)},unbind:function(a,c){return this.off(a,null,c)},delegate:function(a,c,p,v){return this.on(c,a,p,v)},undelegate:function(a,c,p){return arguments.length===1?this.off(a,"**"):this.off(c,a||"**",p)},hover:function(a,c){return this.on("mouseenter",a).on("mouseleave",c||a)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,c){d.fn[c]=function(p,v){return arguments.length>0?this.on(c,null,p,v):this.trigger(c)}});var Zd=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(a,c){var p,v,E;if(typeof c=="string"&&(p=a[c],c=a,a=p),!!S(a))return v=s.call(arguments,2),E=function(){return a.apply(c||this,v.concat(s.call(arguments)))},E.guid=a.guid=a.guid||d.guid++,E},d.holdReady=function(a){a?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=A,d.isFunction=S,d.isWindow=y,d.camelCase=w,d.type=C,d.now=Date.now,d.isNumeric=function(a){var c=d.type(a);return(c==="number"||c==="string")&&!isNaN(a-parseFloat(a))},d.trim=function(a){return a==null?"":(a+"").replace(Zd,"$1")};var Kd=e.jQuery,Jd=e.$;return d.noConflict=function(a){return e.$===d&&(e.$=Jd),a&&e.jQuery===d&&(e.jQuery=Kd),d},typeof t>"u"&&(e.jQuery=e.$=d),d})}(co)),co.exports}var cp=lp();const fa=ap(cp);class Qf{constructor(e){this.events=new Map,this.target=e||this}on(e,t,n=null){return this.events.has(e)||this.events.set(e,[]),this.events.get(e).push({func:t,ctx:n}),this.target}off(e=null,t=null){if(!e)this.events.clear();else if(this.events.has(e))if(!t)this.events.delete(e);else{const n=this.events.get(e);this.events.set(e,n.filter(i=>i.func!==t))}return this.target}emit(e,...t){if(!this.events.has(e))return this.target;const n=[...this.events.get(e)];for(const{func:i,ctx:s}of n)i.apply(s,t);return this.target}}const Rs=new Qf;function eh(){try{const r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl")||r.getContext("experimental-webgl")))}catch{return!1}}function up(){if(!eh()){const r=document.createElement("div");r.id="webgl-error-message",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",r.innerHTML=`
      Your graphics card or browser does not seem to support 
      <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.
      <br />Find out how to get it 
      <a href="http://get.webgl.org/" style="color:#000">here</a>.
    `,document.body.appendChild(r)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="172",Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fp=0,Lu=1,hp=2,th=1,dp=2,Oi=3,dr=0,Ln=1,gi=2,cr=0,Es=1,Iu=2,Uu=3,Nu=4,pp=5,Ur=100,mp=101,_p=102,gp=103,vp=104,xp=200,yp=201,Sp=202,Mp=203,Bl=204,zl=205,Ep=206,Tp=207,bp=208,Ap=209,wp=210,Cp=211,Rp=212,Pp=213,Dp=214,kl=0,Hl=1,Gl=2,Ps=3,Vl=4,Wl=5,Xl=6,ql=7,nh=0,Lp=1,Ip=2,ur=0,Up=1,Np=2,Op=3,Fp=4,Bp=5,zp=6,kp=7,ih=300,Ds=301,Ls=302,Yl=303,jl=304,Po=306,$l=1e3,Or=1001,Zl=1002,li=1003,Hp=1004,ka=1005,xi=1006,Ko=1007,Fr=1008,Vi=1009,rh=1010,sh=1011,va=1012,Vc=1013,Wr=1014,zi=1015,Ca=1016,Wc=1017,Xc=1018,Is=1020,ah=35902,oh=1021,Us=1022,oi=1023,lh=1024,ch=1025,Ts=1026,Ns=1027,uh=1028,qc=1029,fh=1030,Yc=1031,jc=1033,uo=33776,fo=33777,ho=33778,po=33779,Kl=35840,Jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,rc=37808,sc=37809,ac=37810,oc=37811,lc=37812,cc=37813,uc=37814,fc=37815,hc=37816,dc=37817,pc=37818,mc=37819,_c=37820,gc=37821,mo=36492,vc=36494,xc=36495,hh=36283,yc=36284,Sc=36285,Mc=36286,Gp=3200,Vp=3201,dh=0,Wp=1,sr="",Kn="srgb",Os="srgb-linear",yo="linear",It="srgb",ts=7680,Ou=519,Xp=512,qp=513,Yp=514,ph=515,jp=516,$p=517,Zp=518,Kp=519,Fu=35044,Bu="300 es",ki=2e3,So=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const ha=Math.PI/180,xa=180/Math.PI;function Ws(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function $c(r,e){return(r%e+e)%e}function Jp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Qp(r,e,t){return r!==e?(t-r)/(e-r):0}function da(r,e,t){return(1-t)*r+t*e}function em(r,e,t,n){return da(r,e,1-Math.exp(-t*n))}function tm(r,e=1){return e-Math.abs($c(r,e*2)-e)}function nm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function im(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function rm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sm(r,e){return r+Math.random()*(e-r)}function am(r){return r*(.5-Math.random())}function om(r){r!==void 0&&(zu=r);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(r){return r*ha}function cm(r){return r*xa}function um(r){return(r&r-1)===0&&r!==0}function fm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dm(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),u=o(t/2),f=s((e+n)/2),h=o((e+n)/2),m=s((e-n)/2),_=o((e-n)/2),x=s((n-e)/2),M=o((n-e)/2);switch(i){case"XYX":r.set(l*h,u*m,u*_,l*f);break;case"YZY":r.set(u*_,l*h,u*m,l*f);break;case"ZXZ":r.set(u*m,u*_,l*h,l*f);break;case"XZX":r.set(l*h,u*M,u*x,l*f);break;case"YXY":r.set(u*x,l*h,u*M,l*f);break;case"ZYZ":r.set(u*M,u*x,l*h,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const pm={DEG2RAD:ha,RAD2DEG:xa,generateUUID:Ws,clamp:dt,euclideanModulo:$c,mapLinear:Jp,inverseLerp:Qp,lerp:da,damp:em,pingpong:tm,smoothstep:nm,smootherstep:im,randInt:rm,randFloat:sm,randFloatSpread:am,seededRandom:om,degToRad:lm,radToDeg:cm,isPowerOfTwo:um,ceilPowerOfTwo:fm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:dm,normalize:En,denormalize:_s};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,l,u,f){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,f)}set(e,t,n,i,s,o,l,u,f){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],f=n[1],h=n[4],m=n[7],_=n[2],x=n[5],M=n[8],S=i[0],y=i[3],g=i[6],L=i[1],D=i[4],C=i[7],N=i[2],O=i[5],d=i[8];return s[0]=o*S+l*L+u*N,s[3]=o*y+l*D+u*O,s[6]=o*g+l*C+u*d,s[1]=f*S+h*L+m*N,s[4]=f*y+h*D+m*O,s[7]=f*g+h*C+m*d,s[2]=_*S+x*L+M*N,s[5]=_*y+x*D+M*O,s[8]=_*g+x*C+M*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*o*h-t*l*f-n*s*h+n*l*u+i*s*f-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],m=h*o-l*f,_=l*u-h*s,x=f*s-o*u,M=t*m+n*_+i*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=m*S,e[1]=(i*f-h*n)*S,e[2]=(l*n-i*o)*S,e[3]=_*S,e[4]=(h*t-i*u)*S,e[5]=(i*s-l*t)*S,e[6]=x*S,e[7]=(n*u-f*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*o+f*l)+o+e,-i*f,i*u,-i*(-f*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new st;function mh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mm(){const r=ya("canvas");return r.style.display="block",r}const ku={};function gs(r){r in ku||(ku[r]=!0,console.warn(r))}function _m(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xm(){const r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===It&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sr?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Os]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const Rt=xm();function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ns;class ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=ya("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sm=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(Qo(i[o].image)):s.push(Qo(i[o]))}else s=Qo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ym.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mm=0;class An extends jr{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Or,i=Or,s=xi,o=Fr,l=oi,u=Vi,f=An.DEFAULT_ANISOTROPY,h=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ws(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=ih;An.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,f=u[0],h=u[4],m=u[8],_=u[1],x=u[5],M=u[9],S=u[2],y=u[6],g=u[10];if(Math.abs(h-_)<.01&&Math.abs(m-S)<.01&&Math.abs(M-y)<.01){if(Math.abs(h+_)<.1&&Math.abs(m+S)<.1&&Math.abs(M+y)<.1&&Math.abs(f+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,C=(x+1)/2,N=(g+1)/2,O=(h+_)/4,d=(m+S)/4,B=(M+y)/4;return D>C&&D>N?D<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(D),i=O/n,s=d/n):C>N?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=O/i,s=B/i):N<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(N),n=d/s,i=B/s),this.set(n,i,s,t),this}let L=Math.sqrt((y-M)*(y-M)+(m-S)*(m-S)+(_-h)*(_-h));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(m-S)/L,this.z=(_-h)/L,this.w=Math.acos((f+x+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Em extends jr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new _h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends Em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=li,this.minFilter=li,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=li,this.minFilter=li,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let u=n[i+0],f=n[i+1],h=n[i+2],m=n[i+3];const _=s[o+0],x=s[o+1],M=s[o+2],S=s[o+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=m;return}if(l===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=S;return}if(m!==S||u!==_||f!==x||h!==M){let y=1-l;const g=u*_+f*x+h*M+m*S,L=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const N=Math.sqrt(D),O=Math.atan2(N,g*L);y=Math.sin(y*O)/N,l=Math.sin(l*O)/N}const C=l*L;if(u=u*y+_*C,f=f*y+x*C,h=h*y+M*C,m=m*y+S*C,y===1-l){const N=1/Math.sqrt(u*u+f*f+h*h+m*m);u*=N,f*=N,h*=N,m*=N}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],u=n[i+1],f=n[i+2],h=n[i+3],m=s[o],_=s[o+1],x=s[o+2],M=s[o+3];return e[t]=l*M+h*m+u*x-f*_,e[t+1]=u*M+h*_+f*m-l*x,e[t+2]=f*M+h*x+l*_-u*m,e[t+3]=h*M-l*m-u*_-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,f=l(n/2),h=l(i/2),m=l(s/2),_=u(n/2),x=u(i/2),M=u(s/2);switch(o){case"XYZ":this._x=_*h*m+f*x*M,this._y=f*x*m-_*h*M,this._z=f*h*M+_*x*m,this._w=f*h*m-_*x*M;break;case"YXZ":this._x=_*h*m+f*x*M,this._y=f*x*m-_*h*M,this._z=f*h*M-_*x*m,this._w=f*h*m+_*x*M;break;case"ZXY":this._x=_*h*m-f*x*M,this._y=f*x*m+_*h*M,this._z=f*h*M+_*x*m,this._w=f*h*m-_*x*M;break;case"ZYX":this._x=_*h*m-f*x*M,this._y=f*x*m+_*h*M,this._z=f*h*M-_*x*m,this._w=f*h*m+_*x*M;break;case"YZX":this._x=_*h*m+f*x*M,this._y=f*x*m+_*h*M,this._z=f*h*M-_*x*m,this._w=f*h*m-_*x*M;break;case"XZY":this._x=_*h*m-f*x*M,this._y=f*x*m-_*h*M,this._z=f*h*M+_*x*m,this._w=f*h*m+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],u=t[9],f=t[2],h=t[6],m=t[10],_=n+l+m;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(h-u)*x,this._y=(s-f)*x,this._z=(o-i)*x}else if(n>l&&n>m){const x=2*Math.sqrt(1+n-l-m);this._w=(h-u)/x,this._x=.25*x,this._y=(i+o)/x,this._z=(s+f)/x}else if(l>m){const x=2*Math.sqrt(1+l-n-m);this._w=(s-f)/x,this._x=(i+o)/x,this._y=.25*x,this._z=(u+h)/x}else{const x=2*Math.sqrt(1+m-n-l);this._w=(o-i)/x,this._x=(s+f)/x,this._y=(u+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=n*h+o*l+i*f-s*u,this._y=i*h+o*u+s*l-n*f,this._z=s*h+o*f+n*u-i*l,this._w=o*h-n*l-i*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const x=1-t;return this._w=x*o+t*this._w,this._x=x*n+t*this._x,this._y=x*i+t*this._y,this._z=x*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),h=Math.atan2(f,l),m=Math.sin((1-t)*h)/f,_=Math.sin(t*h)/f;return this._w=o*m+this._w*_,this._x=n*m+this._x*_,this._y=i*m+this._y*_,this._z=s*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,u=e.w,f=2*(o*i-l*n),h=2*(l*t-s*i),m=2*(s*n-o*t);return this.x=t+u*f+o*m-l*h,this.y=n+u*h+l*f-s*m,this.z=i+u*m+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*o-n*u,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new J,Vu=new qr;class Ra{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ga.subVectors(this.max,na),is.subVectors(e.a,na),rs.subVectors(e.b,na),ss.subVectors(e.c,na),Ji.subVectors(rs,is),Qi.subVectors(ss,rs),Tr.subVectors(is,ss);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Tr.z,Tr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Tr.z,0,-Tr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Tr.y,Tr.x,0];return!tl(t,is,rs,ss,Ga)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,is,rs,ss,Ga))?!1:(Va.crossVectors(Ji,Qi),t=[Va.x,Va.y,Va.z],tl(t,is,rs,ss,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new J,new J,new J,new J,new J,new J,new J,new J],ii=new J,Ha=new Ra,is=new J,rs=new J,ss=new J,Ji=new J,Qi=new J,Tr=new J,na=new J,Ga=new J,Va=new J,br=new J;function tl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){br.fromArray(r,s);const l=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),u=e.dot(br),f=t.dot(br),h=n.dot(br);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}const bm=new Ra,ia=new J,nl=new J;class Zc{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(nl)),this.expandByPoint(ia.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new J,il=new J,Wa=new J,er=new J,rl=new J,Xa=new J,sl=new J;class vh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){il.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),er.copy(this.origin).sub(il);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),l=er.dot(this.direction),u=-er.dot(Wa),f=er.lengthSq(),h=Math.abs(1-o*o);let m,_,x,M;if(h>0)if(m=o*u-l,_=o*l-u,M=s*h,m>=0)if(_>=-M)if(_<=M){const S=1/h;m*=S,_*=S,x=m*(m+o*_+2*l)+_*(o*m+_+2*u)+f}else _=s,m=Math.max(0,-(o*_+l)),x=-m*m+_*(_+2*u)+f;else _=-s,m=Math.max(0,-(o*_+l)),x=-m*m+_*(_+2*u)+f;else _<=-M?(m=Math.max(0,-(-o*s+l)),_=m>0?-s:Math.min(Math.max(-s,-u),s),x=-m*m+_*(_+2*u)+f):_<=M?(m=0,_=Math.min(Math.max(-s,-u),s),x=_*(_+2*u)+f):(m=Math.max(0,-(o*s+l)),_=m>0?s:Math.min(Math.max(-s,-u),s),x=-m*m+_*(_+2*u)+f);else _=o>0?-s:s,m=Math.max(0,-(o*_+l)),x=-m*m+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(il).addScaledVector(Wa,_),x}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,u;const f=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,i=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,i=(e.min.x-_.x)*f),h>=0?(s=(e.min.y-_.y)*h,o=(e.max.y-_.y)*h):(s=(e.max.y-_.y)*h,o=(e.min.y-_.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),m>=0?(l=(e.min.z-_.z)*m,u=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,u=(e.min.z-_.z)*m),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,s){rl.subVectors(t,e),Xa.subVectors(n,e),sl.crossVectors(rl,Xa);let o=this.direction.dot(sl),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;er.subVectors(this.origin,e);const u=l*this.direction.dot(Xa.crossVectors(er,Xa));if(u<0)return null;const f=l*this.direction.dot(rl.cross(er));if(f<0||u+f>o)return null;const h=-l*er.dot(sl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,n,i,s,o,l,u,f,h,m,_,x,M,S,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,f,h,m,_,x,M,S,y)}set(e,t,n,i,s,o,l,u,f,h,m,_,x,M,S,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=l,g[13]=u,g[2]=f,g[6]=h,g[10]=m,g[14]=_,g[3]=x,g[7]=M,g[11]=S,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(i),f=Math.sin(i),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const _=o*h,x=o*m,M=l*h,S=l*m;t[0]=u*h,t[4]=-u*m,t[8]=f,t[1]=x+M*f,t[5]=_-S*f,t[9]=-l*u,t[2]=S-_*f,t[6]=M+x*f,t[10]=o*u}else if(e.order==="YXZ"){const _=u*h,x=u*m,M=f*h,S=f*m;t[0]=_+S*l,t[4]=M*l-x,t[8]=o*f,t[1]=o*m,t[5]=o*h,t[9]=-l,t[2]=x*l-M,t[6]=S+_*l,t[10]=o*u}else if(e.order==="ZXY"){const _=u*h,x=u*m,M=f*h,S=f*m;t[0]=_-S*l,t[4]=-o*m,t[8]=M+x*l,t[1]=x+M*l,t[5]=o*h,t[9]=S-_*l,t[2]=-o*f,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const _=o*h,x=o*m,M=l*h,S=l*m;t[0]=u*h,t[4]=M*f-x,t[8]=_*f+S,t[1]=u*m,t[5]=S*f+_,t[9]=x*f-M,t[2]=-f,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const _=o*u,x=o*f,M=l*u,S=l*f;t[0]=u*h,t[4]=S-_*m,t[8]=M*m+x,t[1]=m,t[5]=o*h,t[9]=-l*h,t[2]=-f*h,t[6]=x*m+M,t[10]=_-S*m}else if(e.order==="XZY"){const _=o*u,x=o*f,M=l*u,S=l*f;t[0]=u*h,t[4]=-m,t[8]=f*h,t[1]=_*m+S,t[5]=o*h,t[9]=x*m-M,t[2]=M*m-x,t[6]=l*h,t[10]=S*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,wm)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(n,Bn),tr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(n,Bn)),tr.normalize(),qa.crossVectors(Bn,tr),i[0]=tr.x,i[4]=qa.x,i[8]=Bn.x,i[1]=tr.y,i[5]=qa.y,i[9]=Bn.y,i[2]=tr.z,i[6]=qa.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],f=n[12],h=n[1],m=n[5],_=n[9],x=n[13],M=n[2],S=n[6],y=n[10],g=n[14],L=n[3],D=n[7],C=n[11],N=n[15],O=i[0],d=i[4],B=i[8],A=i[12],R=i[1],k=i[5],ne=i[9],W=i[13],le=i[2],he=i[6],ae=i[10],ce=i[14],ie=i[3],ye=i[7],be=i[11],Be=i[15];return s[0]=o*O+l*R+u*le+f*ie,s[4]=o*d+l*k+u*he+f*ye,s[8]=o*B+l*ne+u*ae+f*be,s[12]=o*A+l*W+u*ce+f*Be,s[1]=h*O+m*R+_*le+x*ie,s[5]=h*d+m*k+_*he+x*ye,s[9]=h*B+m*ne+_*ae+x*be,s[13]=h*A+m*W+_*ce+x*Be,s[2]=M*O+S*R+y*le+g*ie,s[6]=M*d+S*k+y*he+g*ye,s[10]=M*B+S*ne+y*ae+g*be,s[14]=M*A+S*W+y*ce+g*Be,s[3]=L*O+D*R+C*le+N*ie,s[7]=L*d+D*k+C*he+N*ye,s[11]=L*B+D*ne+C*ae+N*be,s[15]=L*A+D*W+C*ce+N*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],u=e[9],f=e[13],h=e[2],m=e[6],_=e[10],x=e[14],M=e[3],S=e[7],y=e[11],g=e[15];return M*(+s*u*m-i*f*m-s*l*_+n*f*_+i*l*x-n*u*x)+S*(+t*u*x-t*f*_+s*o*_-i*o*x+i*f*h-s*u*h)+y*(+t*f*m-t*l*x-s*o*m+n*o*x+s*l*h-n*f*h)+g*(-i*l*h-t*u*m+t*l*_+i*o*m-n*o*_+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],m=e[9],_=e[10],x=e[11],M=e[12],S=e[13],y=e[14],g=e[15],L=m*y*f-S*_*f+S*u*x-l*y*x-m*u*g+l*_*g,D=M*_*f-h*y*f-M*u*x+o*y*x+h*u*g-o*_*g,C=h*S*f-M*m*f+M*l*x-o*S*x-h*l*g+o*m*g,N=M*m*u-h*S*u-M*l*_+o*S*_+h*l*y-o*m*y,O=t*L+n*D+i*C+s*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/O;return e[0]=L*d,e[1]=(S*_*s-m*y*s-S*i*x+n*y*x+m*i*g-n*_*g)*d,e[2]=(l*y*s-S*u*s+S*i*f-n*y*f-l*i*g+n*u*g)*d,e[3]=(m*u*s-l*_*s-m*i*f+n*_*f+l*i*x-n*u*x)*d,e[4]=D*d,e[5]=(h*y*s-M*_*s+M*i*x-t*y*x-h*i*g+t*_*g)*d,e[6]=(M*u*s-o*y*s-M*i*f+t*y*f+o*i*g-t*u*g)*d,e[7]=(o*_*s-h*u*s+h*i*f-t*_*f-o*i*x+t*u*x)*d,e[8]=C*d,e[9]=(M*m*s-h*S*s-M*n*x+t*S*x+h*n*g-t*m*g)*d,e[10]=(o*S*s-M*l*s+M*n*f-t*S*f-o*n*g+t*l*g)*d,e[11]=(h*l*s-o*m*s-h*n*f+t*m*f+o*n*x-t*l*x)*d,e[12]=N*d,e[13]=(h*S*i-M*m*i+M*n*_-t*S*_-h*n*y+t*m*y)*d,e[14]=(M*l*i-o*S*i-M*n*u+t*S*u+o*n*y-t*l*y)*d,e[15]=(o*m*i-h*l*i+h*n*u-t*m*u-o*n*_+t*l*_)*d,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,f=s*o,h=s*l;return this.set(f*o+n,f*l-i*u,f*u+i*l,0,f*l+i*u,h*l+n,h*u-i*o,0,f*u-i*l,h*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,f=s+s,h=o+o,m=l+l,_=s*f,x=s*h,M=s*m,S=o*h,y=o*m,g=l*m,L=u*f,D=u*h,C=u*m,N=n.x,O=n.y,d=n.z;return i[0]=(1-(S+g))*N,i[1]=(x+C)*N,i[2]=(M-D)*N,i[3]=0,i[4]=(x-C)*O,i[5]=(1-(_+g))*O,i[6]=(y+L)*O,i[7]=0,i[8]=(M+D)*d,i[9]=(y-L)*d,i[10]=(1-(_+S))*d,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),l=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);const f=1/s,h=1/o,m=1/l;return ri.elements[0]*=f,ri.elements[1]*=f,ri.elements[2]*=f,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=m,ri.elements[9]*=m,ri.elements[10]*=m,t.setFromRotationMatrix(ri),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=ki){const u=this.elements,f=2*s/(t-e),h=2*s/(n-i),m=(t+e)/(t-e),_=(n+i)/(n-i);let x,M;if(l===ki)x=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(l===So)x=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=ki){const u=this.elements,f=1/(t-e),h=1/(n-i),m=1/(o-s),_=(t+e)*f,x=(n+i)*h;let M,S;if(l===ki)M=(o+s)*m,S=-2*m;else if(l===So)M=s*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-x,u[2]=0,u[6]=0,u[10]=S,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new J,ri=new $t,Am=new J(0,0,0),wm=new J(1,1,1),tr=new J,qa=new J,Bn=new J,Wu=new $t,Xu=new qr;class Ei{constructor(e=0,t=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],u=i[1],f=i[5],h=i[9],m=i[2],_=i[6],x=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cm=0;const qu=new J,os=new qr,Ii=new $t,Ya=new J,ra=new J,Rm=new J,Pm=new qr,Yu=new J(1,0,0),ju=new J(0,1,0),$u=new J(0,0,1),Zu={type:"added"},Dm={type:"removed"},ls={type:"childadded",child:null},al={type:"childremoved",child:null};class dn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new J,t=new Ei,n=new qr,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new st}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ra,Ya,this.up):Ii.lookAt(Ya,ra,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Ii),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,h=u.length;f<h;f++){const m=u[f];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),f=o(e.textures),h=o(e.images),m=o(e.shapes),_=o(e.skeletons),x=o(e.animations),M=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=i,n;function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dn.DEFAULT_UP=new J(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new J,Ui=new J,ol=new J,Ni=new J,cs=new J,us=new J,Ku=new J,ll=new J,cl=new J,ul=new J,fl=new Yt,hl=new Yt,dl=new Yt;class ai{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),si.subVectors(e,t),i.cross(si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){si.subVectors(i,t),Ui.subVectors(n,t),ol.subVectors(e,t);const o=si.dot(si),l=si.dot(Ui),u=si.dot(ol),f=Ui.dot(Ui),h=Ui.dot(ol),m=o*f-l*l;if(m===0)return s.set(0,0,0),null;const _=1/m,x=(f*u-l*h)*_,M=(o*h-l*u)*_;return s.set(1-x-M,M,x)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,i,s,o,l,u){return this.getBarycoord(e,t,n,i,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ni.x),u.addScaledVector(o,Ni.y),u.addScaledVector(l,Ni.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return fl.setScalar(0),hl.setScalar(0),dl.setScalar(0),fl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fl,s.x),o.addScaledVector(hl,s.y),o.addScaledVector(dl,s.z),o}static isFrontFacing(e,t,n,i){return si.subVectors(n,t),Ui.subVectors(e,t),si.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;cs.subVectors(i,n),us.subVectors(s,n),ll.subVectors(e,n);const u=cs.dot(ll),f=us.dot(ll);if(u<=0&&f<=0)return t.copy(n);cl.subVectors(e,i);const h=cs.dot(cl),m=us.dot(cl);if(h>=0&&m<=h)return t.copy(i);const _=u*m-h*f;if(_<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(n).addScaledVector(cs,o);ul.subVectors(e,s);const x=cs.dot(ul),M=us.dot(ul);if(M>=0&&x<=M)return t.copy(s);const S=x*f-u*M;if(S<=0&&f>=0&&M<=0)return l=f/(f-M),t.copy(n).addScaledVector(us,l);const y=h*M-x*m;if(y<=0&&m-h>=0&&x-M>=0)return Ku.subVectors(s,i),l=(m-h)/(m-h+(x-M)),t.copy(i).addScaledVector(Ku,l);const g=1/(y+S+_);return o=S*g,l=_*g,t.copy(n).addScaledVector(cs,o).addScaledVector(us,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},ja={h:0,s:0,l:0};function pl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class wt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=$c(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pl(o,s,e+1/3),this.g=pl(o,s,e),this.b=pl(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Rt.fromWorkingColorSpace(gn.copy(this),e),Math.round(dt(gn.r*255,0,255))*65536+Math.round(dt(gn.g*255,0,255))*256+Math.round(dt(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let u,f;const h=(l+o)/2;if(l===o)u=0,f=0;else{const m=o-l;switch(f=h<=.5?m/(o+l):m/(2-o-l),o){case n:u=(i-s)/m+(i<s?6:0);break;case i:u=(s-n)/m+2;break;case s:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Rt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(ja);const n=da(nr.h,ja.h,t),i=da(nr.s,ja.s,t),s=da(nr.l,ja.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new wt;wt.NAMES=yh;let Lm=0;class Pa extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Es,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==Ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sh extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new J,$a=new at;class ci{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class Mh extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eh extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zr extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Im=0;const $n=new $t,ml=new dn,fs=new J,zn=new Ra,sa=new Ra,un=new J;class gr extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?Eh:Mh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];sa.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(zn.min,sa.min),zn.expandByPoint(un),un.addVectors(zn.max,sa.max),zn.expandByPoint(un)):(zn.expandByPoint(sa.min),zn.expandByPoint(sa.max))}zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)un.fromBufferAttribute(l,f),u&&(fs.fromBufferAttribute(e,f),un.add(fs)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let B=0;B<n.count;B++)l[B]=new J,u[B]=new J;const f=new J,h=new J,m=new J,_=new at,x=new at,M=new at,S=new J,y=new J;function g(B,A,R){f.fromBufferAttribute(n,B),h.fromBufferAttribute(n,A),m.fromBufferAttribute(n,R),_.fromBufferAttribute(s,B),x.fromBufferAttribute(s,A),M.fromBufferAttribute(s,R),h.sub(f),m.sub(f),x.sub(_),M.sub(_);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(S.copy(h).multiplyScalar(M.y).addScaledVector(m,-x.y).multiplyScalar(k),y.copy(m).multiplyScalar(x.x).addScaledVector(h,-M.x).multiplyScalar(k),l[B].add(S),l[A].add(S),l[R].add(S),u[B].add(y),u[A].add(y),u[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,A=L.length;B<A;++B){const R=L[B],k=R.start,ne=R.count;for(let W=k,le=k+ne;W<le;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const D=new J,C=new J,N=new J,O=new J;function d(B){N.fromBufferAttribute(i,B),O.copy(N);const A=l[B];D.copy(A),D.sub(N.multiplyScalar(N.dot(A))).normalize(),C.crossVectors(O,A);const k=C.dot(u[B])<0?-1:1;o.setXYZW(B,D.x,D.y,D.z,k)}for(let B=0,A=L.length;B<A;++B){const R=L[B],k=R.start,ne=R.count;for(let W=k,le=k+ne;W<le;W+=3)d(e.getX(W+0)),d(e.getX(W+1)),d(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const i=new J,s=new J,o=new J,l=new J,u=new J,f=new J,h=new J,m=new J;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),S=e.getX(_+1),y=e.getX(_+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,y),h.subVectors(o,s),m.subVectors(i,s),h.cross(m),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),l.add(h),u.add(h),f.add(h),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,x=t.count;_<x;_+=3)i.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),o.fromBufferAttribute(t,_+2),h.subVectors(o,s),m.subVectors(i,s),h.cross(m),n.setXYZ(_+0,h.x,h.y,h.z),n.setXYZ(_+1,h.x,h.y,h.z),n.setXYZ(_+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(l,u){const f=l.array,h=l.itemSize,m=l.normalized,_=new f.constructor(u.length*h);let x=0,M=0;for(let S=0,y=u.length;S<y;S++){l.isInterleavedBufferAttribute?x=u[S]*l.data.stride+l.offset:x=u[S]*h;for(let g=0;g<h;g++)_[M++]=f[x++]}return new ci(_,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++){const _=f[h],x=e(_,n);u.push(x)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],h=[];for(let m=0,_=f.length;m<_;m++){const x=f[m];h.push(x.toJSON(e.data))}h.length>0&&(i[u]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const f in i){const h=i[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],m=s[f];for(let _=0,x=m.length;_<x;_++)h.push(m[_].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new $t,Ar=new vh,Za=new Zc,Qu=new J,Ka=new J,Ja=new J,Qa=new J,_l=new J,eo=new J,ef=new J,to=new J;class Qn extends dn{constructor(e=new gr,t=new Sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){eo.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const h=l[u],m=s[u];h!==0&&(_l.fromBufferAttribute(m,e),o?eo.addScaledVector(_l,h):eo.addScaledVector(_l.sub(t),h))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Za.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Za,Qu)===null||Ar.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,_=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(o))for(let M=0,S=_.length;M<S;M++){const y=_[M],g=o[y.materialIndex],L=Math.max(y.start,x.start),D=Math.min(l.count,Math.min(y.start+y.count,x.start+x.count));for(let C=L,N=D;C<N;C+=3){const O=l.getX(C),d=l.getX(C+1),B=l.getX(C+2);i=no(this,g,e,n,f,h,m,O,d,B),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const M=Math.max(0,x.start),S=Math.min(l.count,x.start+x.count);for(let y=M,g=S;y<g;y+=3){const L=l.getX(y),D=l.getX(y+1),C=l.getX(y+2);i=no(this,o,e,n,f,h,m,L,D,C),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let M=0,S=_.length;M<S;M++){const y=_[M],g=o[y.materialIndex],L=Math.max(y.start,x.start),D=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let C=L,N=D;C<N;C+=3){const O=C,d=C+1,B=C+2;i=no(this,g,e,n,f,h,m,O,d,B),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const M=Math.max(0,x.start),S=Math.min(u.count,x.start+x.count);for(let y=M,g=S;y<g;y+=3){const L=y,D=y+1,C=y+2;i=no(this,o,e,n,f,h,m,L,D,C),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Um(r,e,t,n,i,s,o,l){let u;if(e.side===Ln?u=n.intersectTriangle(o,s,i,!0,l):u=n.intersectTriangle(i,s,o,e.side===dr,l),u===null)return null;to.copy(l),to.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(to);return f<t.near||f>t.far?null:{distance:f,point:to.clone(),object:r}}function no(r,e,t,n,i,s,o,l,u,f){r.getVertexPosition(l,Ka),r.getVertexPosition(u,Ja),r.getVertexPosition(f,Qa);const h=Um(r,e,t,n,Ka,Ja,Qa,ef);if(h){const m=new J;ai.getBarycoord(ef,Ka,Ja,Qa,m),i&&(h.uv=ai.getInterpolatedAttribute(i,l,u,f,m,new at)),s&&(h.uv1=ai.getInterpolatedAttribute(s,l,u,f,m,new at)),o&&(h.normal=ai.getInterpolatedAttribute(o,l,u,f,m,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const _={a:l,b:u,c:f,normal:new J,materialIndex:0};ai.getNormal(Ka,Ja,Qa,_.normal),h.face=_,h.barycoord=m}return h}class vr extends gr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],m=[];let _=0,x=0;M("z","y","x",-1,-1,n,t,e,o,s,0),M("z","y","x",1,-1,n,t,-e,o,s,1),M("x","z","y",1,1,e,n,t,i,o,2),M("x","z","y",1,-1,e,n,-t,i,o,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new zr(f,3)),this.setAttribute("normal",new zr(h,3)),this.setAttribute("uv",new zr(m,2));function M(S,y,g,L,D,C,N,O,d,B,A){const R=C/d,k=N/B,ne=C/2,W=N/2,le=O/2,he=d+1,ae=B+1;let ce=0,ie=0;const ye=new J;for(let be=0;be<ae;be++){const Be=be*k-W;for(let Ze=0;Ze<he;Ze++){const Et=Ze*R-ne;ye[S]=Et*L,ye[y]=Be*D,ye[g]=le,f.push(ye.x,ye.y,ye.z),ye[S]=0,ye[y]=0,ye[g]=O>0?1:-1,h.push(ye.x,ye.y,ye.z),m.push(Ze/d),m.push(1-be/B),ce+=1}}for(let be=0;be<B;be++)for(let Be=0;Be<d;Be++){const Ze=_+Be+he*be,Et=_+Be+he*(be+1),ue=_+(Be+1)+he*(be+1),ve=_+(Be+1)+he*be;u.push(Ze,Et,ve),u.push(Et,ue,ve),ie+=6}l.addGroup(x,ie,A),x+=ie,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const n=Fs(r[t]);for(const i in n)e[i]=n[i]}return e}function Nm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Th(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Om={clone:Fs,merge:Tn};var Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bh extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new J,tf=new at,nf=new at;class Jn extends bh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/f,i*=o.width/u,n*=o.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class zm extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(hs,ds,e,t);i.layers=this.layers,this.add(i);const s=new Jn(hs,ds,e,t);s.layers=this.layers,this.add(s);const o=new Jn(hs,ds,e,t);o.layers=this.layers,this.add(o);const l=new Jn(hs,ds,e,t);l.layers=this.layers,this.add(l);const u=new Jn(hs,ds,e,t);u.layers=this.layers,this.add(u);const f=new Jn(hs,ds,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,u]=t;for(const f of t)this.remove(f);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,h]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(m,_,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Ah extends An{constructor(e,t,n,i,s,o,l,u,f,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,s,o,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class km extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ah(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vr(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:cr});s.uniforms.tEquirect.value=t;const o=new Qn(i,s),l=t.minFilter;return t.minFilter===Fr&&(t.minFilter=xi),new zm(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Kc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(e),this.near=t,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hm extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gl=new J,Gm=new J,Vm=new st;class rr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gl.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vm.getNormalMatrix(e),i=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Zc,io=new J;class Jc{constructor(e=new rr,t=new rr,n=new rr,i=new rr,s=new rr,o=new rr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],u=i[3],f=i[4],h=i[5],m=i[6],_=i[7],x=i[8],M=i[9],S=i[10],y=i[11],g=i[12],L=i[13],D=i[14],C=i[15];if(n[0].setComponents(u-s,_-f,y-x,C-g).normalize(),n[1].setComponents(u+s,_+f,y+x,C+g).normalize(),n[2].setComponents(u+o,_+h,y+M,C+L).normalize(),n[3].setComponents(u-o,_-h,y-M,C-L).normalize(),n[4].setComponents(u-l,_-m,y-S,C-D).normalize(),t===ki)n[5].setComponents(u+l,_+m,y+S,C+D).normalize();else if(t===So)n[5].setComponents(l,m,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(io.x=i.normal.x>0?e.max.x:e.min.x,io.y=i.normal.y>0?e.max.y:e.min.y,io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oa extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class wh extends An{constructor(e,t,n,i,s,o,l,u,f,h=Ts){if(h!==Ts&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Wr),n===void 0&&h===Ns&&(n=Is),super(null,i,s,o,l,u,h,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:li,this.minFilter=u!==void 0?u:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Do extends gr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(i),f=l+1,h=u+1,m=e/l,_=t/u,x=[],M=[],S=[],y=[];for(let g=0;g<h;g++){const L=g*_-o;for(let D=0;D<f;D++){const C=D*m-s;M.push(C,-L,0),S.push(0,0,1),y.push(D/l),y.push(1-g/u)}}for(let g=0;g<u;g++)for(let L=0;L<l;L++){const D=L+f*g,C=L+f*(g+1),N=L+1+f*(g+1),O=L+1+f*g;x.push(D,C,O),x.push(C,N,O)}this.setIndex(x),this.setAttribute("position",new zr(M,3)),this.setAttribute("normal",new zr(S,3)),this.setAttribute("uv",new zr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends Pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wm extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qm{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,m){return f.push(h,m),this},this.removeHandler=function(h){const m=f.indexOf(h);return m!==-1&&f.splice(m,2),this},this.getHandler=function(h){for(let m=0,_=f.length;m<_;m+=2){const x=f[m],M=f[m+1];if(x.global&&(x.lastIndex=0),x.test(h))return M}return null}}}const Ym=new qm;class Ch{constructor(e){this.manager=e!==void 0?e:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ch.DEFAULT_MATERIAL_NAME="__DEFAULT";class jm extends Ch{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=ya("img");function u(){h(),rf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(m){h(),i&&i(m),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Rh extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vl=new $t,sf=new J,af=new J;class $m{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ph extends bh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zm extends $m{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Km extends Rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jm extends Rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qm extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class of{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class e_ extends jr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function lf(r,e,t,n){const i=t_(n);switch(t){case oh:return r*e;case lh:return r*e;case ch:return r*e*2;case uh:return r*e/i.components*i.byteLength;case qc:return r*e/i.components*i.byteLength;case fh:return r*e*2/i.components*i.byteLength;case Yc:return r*e*2/i.components*i.byteLength;case Us:return r*e*3/i.components*i.byteLength;case oi:return r*e*4/i.components*i.byteLength;case jc:return r*e*4/i.components*i.byteLength;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ho:case po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jl:case ec:return Math.max(r,16)*Math.max(e,8)/4;case Kl:case Ql:return Math.max(r,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mo:case vc:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hh:case yc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Sc:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t_(r){switch(r){case Vi:case rh:return{byteLength:1,components:1};case va:case sh:case Ca:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Wr:case Vc:case zi:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function n_(r){const e=new WeakMap;function t(l,u){const f=l.array,h=l.usage,m=f.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,f){const h=u.array,m=u.updateRanges;if(r.bindBuffer(f,l),m.length===0)r.bufferSubData(f,0,h);else{m.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<m.length;x++){const M=m[_],S=m[x];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++_,m[_]=S)}m.length=_+1;for(let x=0,M=m.length;x<M;x++){const S=m[x];r.bufferSubData(f,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const f=e.get(l);if(f===void 0)e.set(l,t(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,u),f.version=l.version}}return{get:i,remove:s,update:o}}var i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:i_,alphahash_pars_fragment:r_,alphamap_fragment:s_,alphamap_pars_fragment:a_,alphatest_fragment:o_,alphatest_pars_fragment:l_,aomap_fragment:c_,aomap_pars_fragment:u_,batching_pars_vertex:f_,batching_vertex:h_,begin_vertex:d_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:__,bumpmap_pars_fragment:g_,clipping_planes_fragment:v_,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:S_,color_fragment:M_,color_pars_fragment:E_,color_pars_vertex:T_,color_vertex:b_,common:A_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:C_,displacementmap_pars_vertex:R_,displacementmap_vertex:P_,emissivemap_fragment:D_,emissivemap_pars_fragment:L_,colorspace_fragment:I_,colorspace_pars_fragment:U_,envmap_fragment:N_,envmap_common_pars_fragment:O_,envmap_pars_fragment:F_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:$_,envmap_vertex:z_,fog_vertex:k_,fog_pars_vertex:H_,fog_fragment:G_,fog_pars_fragment:V_,gradientmap_pars_fragment:W_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Y_,lights_pars_begin:j_,lights_toon_fragment:Z_,lights_toon_pars_fragment:K_,lights_phong_fragment:J_,lights_phong_pars_fragment:Q_,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:rg,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:fg,map_particle_pars_fragment:hg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:_g,morphnormal_vertex:gg,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:Sg,normal_pars_fragment:Mg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Dg,premultiplied_alpha_fragment:Lg,project_vertex:Ig,dithering_fragment:Ug,dithering_pars_fragment:Ng,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:jg,tonemapping_pars_fragment:$g,transmission_fragment:Zg,transmission_pars_fragment:Kg,uv_pars_fragment:Jg,uv_pars_vertex:Qg,uv_vertex:e0,worldpos_vertex:t0,background_vert:n0,background_frag:i0,backgroundCube_vert:r0,backgroundCube_frag:s0,cube_vert:a0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distanceRGBA_vert:u0,distanceRGBA_frag:f0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:_0,meshbasic_frag:g0,meshlambert_vert:v0,meshlambert_frag:x0,meshmatcap_vert:y0,meshmatcap_frag:S0,meshnormal_vert:M0,meshnormal_frag:E0,meshphong_vert:T0,meshphong_frag:b0,meshphysical_vert:A0,meshphysical_frag:w0,meshtoon_vert:C0,meshtoon_frag:R0,points_vert:P0,points_frag:D0,shadow_vert:L0,shadow_frag:I0,sprite_vert:U0,sprite_frag:N0},Ee={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Tn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Tn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Tn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Tn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Tn([Ee.points,Ee.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Tn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Tn([Ee.common,Ee.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Tn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Tn([Ee.sprite,Ee.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Tn([Ee.common,Ee.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Tn([Ee.lights,Ee.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ro={r:0,b:0,g:0},Cr=new Ei,O0=new $t;function F0(r,e,t,n,i,s,o){const l=new wt(0);let u=s===!0?0:1,f,h,m=null,_=0,x=null;function M(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?t:e).get(C)),C}function S(D){let C=!1;const N=M(D);N===null?g(l,u):N&&N.isColor&&(g(N,1),C=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,C){const N=M(C);N&&(N.isCubeTexture||N.mapping===Po)?(h===void 0&&(h=new Qn(new vr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Fs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,d,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cr.copy(C.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Cr)),h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==It,(m!==N||_!==N.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,m=N,_=N.version,x=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new Qn(new Do(2,2),new pr({name:"BackgroundMaterial",uniforms:Fs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||_!==N.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,m=N,_=N.version,x=r.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function g(D,C){D.getRGB(ro,Th(r)),n.buffers.color.setClear(ro.r,ro.g,ro.b,C,o)}function L(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return l},setClearColor:function(D,C=1){l.set(D),u=C,g(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(D){u=D,g(l,u)},render:S,addToRenderList:y,dispose:L}}function B0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=_(null);let s=i,o=!1;function l(R,k,ne,W,le){let he=!1;const ae=m(W,ne,k);s!==ae&&(s=ae,f(s.object)),he=x(R,W,ne,le),he&&M(R,W,ne,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,C(R,k,ne,W),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function u(){return r.createVertexArray()}function f(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function m(R,k,ne){const W=ne.wireframe===!0;let le=n[R.id];le===void 0&&(le={},n[R.id]=le);let he=le[k.id];he===void 0&&(he={},le[k.id]=he);let ae=he[W];return ae===void 0&&(ae=_(u()),he[W]=ae),ae}function _(R){const k=[],ne=[],W=[];for(let le=0;le<t;le++)k[le]=0,ne[le]=0,W[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:W,object:R,attributes:{},index:null}}function x(R,k,ne,W){const le=s.attributes,he=k.attributes;let ae=0;const ce=ne.getAttributes();for(const ie in ce)if(ce[ie].location>=0){const be=le[ie];let Be=he[ie];if(Be===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Be=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Be=R.instanceColor)),be===void 0||be.attribute!==Be||Be&&be.data!==Be.data)return!0;ae++}return s.attributesNum!==ae||s.index!==W}function M(R,k,ne,W){const le={},he=k.attributes;let ae=0;const ce=ne.getAttributes();for(const ie in ce)if(ce[ie].location>=0){let be=he[ie];be===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(be=R.instanceColor));const Be={};Be.attribute=be,be&&be.data&&(Be.data=be.data),le[ie]=Be,ae++}s.attributes=le,s.attributesNum=ae,s.index=W}function S(){const R=s.newAttributes;for(let k=0,ne=R.length;k<ne;k++)R[k]=0}function y(R){g(R,0)}function g(R,k){const ne=s.newAttributes,W=s.enabledAttributes,le=s.attributeDivisors;ne[R]=1,W[R]===0&&(r.enableVertexAttribArray(R),W[R]=1),le[R]!==k&&(r.vertexAttribDivisor(R,k),le[R]=k)}function L(){const R=s.newAttributes,k=s.enabledAttributes;for(let ne=0,W=k.length;ne<W;ne++)k[ne]!==R[ne]&&(r.disableVertexAttribArray(ne),k[ne]=0)}function D(R,k,ne,W,le,he,ae){ae===!0?r.vertexAttribIPointer(R,k,ne,le,he):r.vertexAttribPointer(R,k,ne,W,le,he)}function C(R,k,ne,W){S();const le=W.attributes,he=ne.getAttributes(),ae=k.defaultAttributeValues;for(const ce in he){const ie=he[ce];if(ie.location>=0){let ye=le[ce];if(ye===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor)),ye!==void 0){const be=ye.normalized,Be=ye.itemSize,Ze=e.get(ye);if(Ze===void 0)continue;const Et=Ze.buffer,ue=Ze.type,ve=Ze.bytesPerElement,ze=ue===r.INT||ue===r.UNSIGNED_INT||ye.gpuType===Vc;if(ye.isInterleavedBufferAttribute){const Ae=ye.data,$e=Ae.stride,Qe=ye.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ie.locationSize;Ke++)g(ie.location+Ke,Ae.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ke=0;Ke<ie.locationSize;Ke++)y(ie.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Ke=0;Ke<ie.locationSize;Ke++)D(ie.location+Ke,Be/ie.locationSize,ue,be,$e*ve,(Qe+Be/ie.locationSize*Ke)*ve,ze)}else{if(ye.isInstancedBufferAttribute){for(let Ae=0;Ae<ie.locationSize;Ae++)g(ie.location+Ae,ye.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ae=0;Ae<ie.locationSize;Ae++)y(ie.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Ae=0;Ae<ie.locationSize;Ae++)D(ie.location+Ae,Be/ie.locationSize,ue,be,Be*ve,Be/ie.locationSize*Ae*ve,ze)}}else if(ae!==void 0){const be=ae[ce];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(ie.location,be);break;case 3:r.vertexAttrib3fv(ie.location,be);break;case 4:r.vertexAttrib4fv(ie.location,be);break;default:r.vertexAttrib1fv(ie.location,be)}}}}L()}function N(){B();for(const R in n){const k=n[R];for(const ne in k){const W=k[ne];for(const le in W)h(W[le].object),delete W[le];delete k[ne]}delete n[R]}}function O(R){if(n[R.id]===void 0)return;const k=n[R.id];for(const ne in k){const W=k[ne];for(const le in W)h(W[le].object),delete W[le];delete k[ne]}delete n[R.id]}function d(R){for(const k in n){const ne=n[k];if(ne[R.id]===void 0)continue;const W=ne[R.id];for(const le in W)h(W[le].object),delete W[le];delete ne[R.id]}}function B(){A(),o=!0,s!==i&&(s=i,f(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:B,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:O,releaseStatesOfProgram:d,initAttributes:S,enableAttribute:y,disableUnusedAttributes:L}}function z0(r,e,t){let n;function i(f){n=f}function s(f,h){r.drawArrays(n,f,h),t.update(h,n,1)}function o(f,h,m){m!==0&&(r.drawArraysInstanced(n,f,h,m),t.update(h,n,m))}function l(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,m);let x=0;for(let M=0;M<m;M++)x+=h[M];t.update(x,n,1)}function u(f,h,m,_){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)o(f[M],h[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,h,0,_,0,m);let M=0;for(let S=0;S<m;S++)M+=h[S]*_[S];t.update(M,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function k0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(d){return!(d!==oi&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(d){const B=d===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Vi&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==zi&&!B)}function u(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const h=u(f);h!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",h,"instead."),f=h);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:N,maxSamples:O}}function H0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new rr,l=new st,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||n!==0||i;return i=_,n=m.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,_){t=h(m,_,0)},this.setState=function(m,_,x){const M=m.clippingPlanes,S=m.clipIntersection,y=m.clipShadows,g=r.get(m);if(!i||M===null||M.length===0||s&&!y)s?h(null):f();else{const L=s?0:n,D=L*4;let C=g.clippingState||null;u.value=C,C=h(M,_,D,x);for(let N=0;N!==D;++N)C[N]=t[N];g.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=L}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,_,x,M){const S=m!==null?m.length:0;let y=null;if(S!==0){if(y=u.value,M!==!0||y===null){const g=x+S*4,L=_.matrixWorldInverse;l.getNormalMatrix(L),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,C=x;D!==S;++D,C+=4)o.copy(m[D]).applyMatrix4(L,l),o.normal.toArray(y,C),y[C+3]=o.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function G0(r){let e=new WeakMap;function t(o,l){return l===Yl?o.mapping=Ds:l===jl&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Yl||l===jl)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new km(u.height);return f.fromEquirectangularTexture(r,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const xs=4,cf=[.125,.215,.35,.446,.526,.582],Nr=20,xl=new Ph,uf=new wt;let yl=null,Sl=0,Ml=0,El=!1;const Lr=(1+Math.sqrt(5))/2,ps=1/Lr,ff=[new J(-Lr,ps,0),new J(Lr,ps,0),new J(-ps,0,Lr),new J(ps,0,Lr),new J(0,Lr,-ps),new J(0,Lr,ps),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,Sl,Ml),this._renderer.xr.enabled=El,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ca,format:oi,colorSpace:Os,depthBuffer:!1},i=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(s)),this._blurMaterial=W0(s,e,t)}return i}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,i){const l=new Jn(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,_=h.toneMapping;h.getClearColor(uf),h.toneMapping=ur,h.autoClear=!1;const x=new Sh({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),M=new Qn(new vr,x);let S=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,S=!0):(x.color.copy(uf),S=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(l.up.set(0,u[g],0),l.lookAt(f[g],0,0)):L===1?(l.up.set(0,0,u[g]),l.lookAt(0,f[g],0)):(l.up.set(0,u[g],0),l.lookAt(0,0,f[g]));const D=this._cubeSize;so(i,L*D,g>2?D:0,D,D),h.setRenderTarget(i),S&&h.render(M,l),h.render(e,l)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=_,h.autoClear=m,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;so(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=ff[(i-s-1)%ff.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new Qn(this._lodPlanes[i],f),_=f.uniforms,x=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*Nr-1),S=s/M,y=isFinite(s)?1+Math.floor(h*S):Nr;y>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Nr}`);const g=[];let L=0;for(let d=0;d<Nr;++d){const B=d/S,A=Math.exp(-B*B/2);g.push(A),d===0?L+=A:d<y&&(L+=2*A)}for(let d=0;d<g.length;d++)g[d]=g[d]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=o==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-n;const C=this._sizeLods[i],N=3*C*(i>D-xs?i-D+xs:0),O=4*(this._cubeSize-C);so(t,N,O,3*C,2*C),u.setRenderTarget(t),u.render(m,xl)}}function V0(r){const e=[],t=[],n=[];let i=r;const s=r-xs+1+cf.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let u=1/l;o>r-xs?u=cf[o-r+xs-1]:o===0&&(u=0),n.push(u);const f=1/(l-2),h=-f,m=1+f,_=[h,h,m,h,m,m,h,h,m,m,h,m],x=6,M=6,S=3,y=2,g=1,L=new Float32Array(S*M*x),D=new Float32Array(y*M*x),C=new Float32Array(g*M*x);for(let O=0;O<x;O++){const d=O%3*2/3-1,B=O>2?0:-1,A=[d,B,0,d+2/3,B,0,d+2/3,B+1,0,d,B,0,d+2/3,B+1,0,d,B+1,0];L.set(A,S*M*O),D.set(_,y*M*O);const R=[O,O,O,O,O,O];C.set(R,g*M*O)}const N=new gr;N.setAttribute("position",new ci(L,S)),N.setAttribute("uv",new ci(D,y)),N.setAttribute("faceIndex",new ci(C,g)),e.push(N),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function df(r,e,t){const n=new Xr(r,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function W0(r,e,t){const n=new Float32Array(Nr),i=new J(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function pf(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function mf(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===Yl||u===jl,h=u===Ds||u===Ls;if(f||h){let m=e.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new hf(r)),m=f?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const x=l.image;return f&&x&&x.height>0||h&&x&&i(x)?(t===null&&(t=new hf(r)),m=f?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",s),m.texture):null}}}return l}function i(l){let u=0;const f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function q0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Y0(r,e,t,n){const i={},s=new WeakMap;function o(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",o),delete i[_.id];const x=s.get(_);x&&(e.remove(x),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(m,_){return i[_.id]===!0||(_.addEventListener("dispose",o),i[_.id]=!0,t.memory.geometries++),_}function u(m){const _=m.attributes;for(const x in _)e.update(_[x],r.ARRAY_BUFFER)}function f(m){const _=[],x=m.index,M=m.attributes.position;let S=0;if(x!==null){const L=x.array;S=x.version;for(let D=0,C=L.length;D<C;D+=3){const N=L[D+0],O=L[D+1],d=L[D+2];_.push(N,O,O,d,d,N)}}else if(M!==void 0){const L=M.array;S=M.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const N=D+0,O=D+1,d=D+2;_.push(N,O,O,d,d,N)}}else return;const y=new(mh(_)?Eh:Mh)(_,1);y.version=S;const g=s.get(m);g&&e.remove(g),s.set(m,y)}function h(m){const _=s.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&f(m)}else f(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:h}}function j0(r,e,t){let n;function i(_){n=_}let s,o;function l(_){s=_.type,o=_.bytesPerElement}function u(_,x){r.drawElements(n,x,s,_*o),t.update(x,n,1)}function f(_,x,M){M!==0&&(r.drawElementsInstanced(n,x,s,_*o,M),t.update(x,n,M))}function h(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,s,_,0,M);let y=0;for(let g=0;g<M;g++)y+=x[g];t.update(y,n,1)}function m(_,x,M,S){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)f(_[g]/o,x[g],S[g]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,s,_,0,S,0,M);let g=0;for(let L=0;L<M;L++)g+=x[L]*S[L];t.update(g,n,1)}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function $0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Z0(r,e,t){const n=new WeakMap,i=new Yt;function s(o,l,u){const f=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let R=function(){B.dispose(),n.delete(l),l.removeEventListener("dispose",R)};var x=R;_!==void 0&&_.texture.dispose();const M=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],L=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let C=0;M===!0&&(C=1),S===!0&&(C=2),y===!0&&(C=3);let N=l.attributes.position.count*C,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const d=new Float32Array(N*O*4*m),B=new gh(d,N,O,m);B.type=zi,B.needsUpdate=!0;const A=C*4;for(let k=0;k<m;k++){const ne=g[k],W=L[k],le=D[k],he=N*O*4*k;for(let ae=0;ae<ne.count;ae++){const ce=ae*A;M===!0&&(i.fromBufferAttribute(ne,ae),d[he+ce+0]=i.x,d[he+ce+1]=i.y,d[he+ce+2]=i.z,d[he+ce+3]=0),S===!0&&(i.fromBufferAttribute(W,ae),d[he+ce+4]=i.x,d[he+ce+5]=i.y,d[he+ce+6]=i.z,d[he+ce+7]=0),y===!0&&(i.fromBufferAttribute(le,ae),d[he+ce+8]=i.x,d[he+ce+9]=i.y,d[he+ce+10]=i.z,d[he+ce+11]=le.itemSize===4?i.w:1)}}_={count:m,texture:B,size:new at(N,O)},n.set(l,_),l.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const S=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",f)}u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:s}}function K0(r,e,t,n){let i=new WeakMap;function s(u){const f=n.render.frame,h=u.geometry,m=e.get(u,h);if(i.get(m)!==f&&(e.update(m),i.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==f&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;i.get(_)!==f&&(_.update(),i.set(_,f))}return m}function o(){i=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Lh=new An,_f=new wh(1,1),Ih=new gh,Uh=new Tm,Nh=new Ah,gf=[],vf=[],xf=new Float32Array(16),yf=new Float32Array(9),Sf=new Float32Array(4);function Xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=gf[i];if(s===void 0&&(s=new Float32Array(i),gf[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lo(r,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function J0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function nv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Sf.set(n),r.uniformMatrix2fv(this.addr,!1,Sf),on(t,n)}}function iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;yf.set(n),r.uniformMatrix3fv(this.addr,!1,yf),on(t,n)}}function rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;xf.set(n),r.uniformMatrix4fv(this.addr,!1,xf),on(t,n)}}function sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function cv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function dv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_f.compareFunction=ph,s=_f):s=Lh,t.setTexture2D(e||s,i)}function pv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uh,i)}function mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nh,i)}function _v(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function gv(r){switch(r){case 5126:return J0;case 35664:return Q0;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return fv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return _v}}function vv(r,e){r.uniform1fv(this.addr,e)}function xv(r,e){const t=Xs(e,this.size,2);r.uniform2fv(this.addr,t)}function yv(r,e){const t=Xs(e,this.size,3);r.uniform3fv(this.addr,t)}function Sv(r,e){const t=Xs(e,this.size,4);r.uniform4fv(this.addr,t)}function Mv(r,e){const t=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ev(r,e){const t=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tv(r,e){const t=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bv(r,e){r.uniform1iv(this.addr,e)}function Av(r,e){r.uniform2iv(this.addr,e)}function wv(r,e){r.uniform3iv(this.addr,e)}function Cv(r,e){r.uniform4iv(this.addr,e)}function Rv(r,e){r.uniform1uiv(this.addr,e)}function Pv(r,e){r.uniform2uiv(this.addr,e)}function Dv(r,e){r.uniform3uiv(this.addr,e)}function Lv(r,e){r.uniform4uiv(this.addr,e)}function Iv(r,e,t){const n=this.cache,i=e.length,s=Lo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lh,s[o])}function Uv(r,e,t){const n=this.cache,i=e.length,s=Lo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Uh,s[o])}function Nv(r,e,t){const n=this.cache,i=e.length,s=Lo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nh,s[o])}function Ov(r,e,t){const n=this.cache,i=e.length,s=Lo(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function Fv(r){switch(r){case 5126:return vv;case 35664:return xv;case 35665:return yv;case 35666:return Sv;case 35674:return Mv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return bv;case 35667:case 35671:return Av;case 35668:case 35672:return wv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}class Bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gv(t.type)}}class zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function Mf(r,e){r.seq.push(e),r.map[e.id]=e}function Hv(r,e,t){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),o=Tl.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&o+2===i){Mf(t,f===void 0?new Bv(l,r,e):new zv(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new kv(l),Mf(t,m)),t=m}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ef(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Gv=37297;let Vv=0;function Wv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Tf=new st;function Xv(r){Rt._getMatrix(Tf,Rt.workingColorSpace,r);const e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case yo:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wv(r.getShaderSource(e),o)}else return i}function qv(r,e){const t=Xv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yv(r,e){let t;switch(e){case Up:t="Linear";break;case Np:t="Reinhard";break;case Op:t="Cineon";break;case Fp:t="ACESFilmic";break;case zp:t="AgX";break;case kp:t="Neutral";break;case Bp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new J;function jv(){Rt.getLuminanceCoefficients(ao);const r=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Zv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function la(r){return r!==""}function Af(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(r){return r.replace(Jv,ex)}const Qv=new Map;function ex(r,e){let t=ct[e];if(t===void 0){const n=Qv.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(r){return r.replace(tx,nx)}function nx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ix(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function rx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Ls:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ax(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nh:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function ox(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=ix(t),f=rx(t),h=sx(t),m=ax(t),_=ox(t),x=$v(t),M=Zv(s),S=i.createProgram();let y,g,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(la).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(la).join(`
`),g.length>0&&(g+=`
`)):(y=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),g=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?ct.tonemapping_pars_fragment:"",t.toneMapping!==ur?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=Ec(o),o=Af(o,t),o=wf(o,t),l=Ec(l),l=Af(l,t),l=wf(l,t),o=Cf(o),l=Cf(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=L+y+o,C=L+g+l,N=Ef(i,i.VERTEX_SHADER,D),O=Ef(i,i.FRAGMENT_SHADER,C);i.attachShader(S,N),i.attachShader(S,O),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function d(k){if(r.debug.checkShaderErrors){const ne=i.getProgramInfoLog(S).trim(),W=i.getShaderInfoLog(N).trim(),le=i.getShaderInfoLog(O).trim();let he=!0,ae=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,N,O);else{const ce=bf(i,N,"vertex"),ie=bf(i,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ce+`
`+ie)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(W===""||le==="")&&(ae=!1);ae&&(k.diagnostics={runnable:he,programLog:ne,vertexShader:{log:W,prefix:y},fragmentShader:{log:le,prefix:g}})}i.deleteShader(N),i.deleteShader(O),B=new _o(i,S),A=Kv(i,S)}let B;this.getUniforms=function(){return B===void 0&&d(this),B};let A;this.getAttributes=function(){return A===void 0&&d(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(S,Gv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=O,this}let cx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fx(e),t.set(e,n)),n}}class fx{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}}function hx(r,e,t,n,i,s,o){const l=new xh,u=new ux,f=new Set,h=[],m=i.logarithmicDepthBuffer,_=i.vertexTextures;let x=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return f.add(A),A===0?"uv":`uv${A}`}function y(A,R,k,ne,W){const le=ne.fog,he=W.geometry,ae=A.isMeshStandardMaterial?ne.environment:null,ce=(A.isMeshStandardMaterial?t:e).get(A.envMap||ae),ie=ce&&ce.mapping===Po?ce.image.height:null,ye=M[A.type];A.precision!==null&&(x=i.getMaxPrecision(A.precision),x!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const be=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Be=be!==void 0?be.length:0;let Ze=0;he.morphAttributes.position!==void 0&&(Ze=1),he.morphAttributes.normal!==void 0&&(Ze=2),he.morphAttributes.color!==void 0&&(Ze=3);let Et,ue,ve,ze;if(ye){const Pt=_i[ye];Et=Pt.vertexShader,ue=Pt.fragmentShader}else Et=A.vertexShader,ue=A.fragmentShader,u.update(A),ve=u.getVertexShaderID(A),ze=u.getFragmentShaderID(A);const Ae=r.getRenderTarget(),$e=r.state.buffers.depth.getReversed(),Qe=W.isInstancedMesh===!0,Ke=W.isBatchedMesh===!0,kt=!!A.map,ot=!!A.matcap,Ft=!!ce,H=!!A.aoMap,wn=!!A.lightMap,ht=!!A.bumpMap,ut=!!A.normalMap,Fe=!!A.displacementMap,Nt=!!A.emissiveMap,Ve=!!A.metalnessMap,U=!!A.roughnessMap,w=A.anisotropy>0,Z=A.clearcoat>0,pe=A.dispersion>0,j=A.iridescence>0,oe=A.sheen>0,Ge=A.transmission>0,we=w&&!!A.anisotropyMap,Oe=Z&&!!A.clearcoatMap,vt=Z&&!!A.clearcoatNormalMap,xe=Z&&!!A.clearcoatRoughnessMap,Ie=j&&!!A.iridescenceMap,He=j&&!!A.iridescenceThicknessMap,Ye=oe&&!!A.sheenColorMap,Le=oe&&!!A.sheenRoughnessMap,xt=!!A.specularMap,it=!!A.specularColorMap,Dt=!!A.specularIntensityMap,X=Ge&&!!A.transmissionMap,Te=Ge&&!!A.thicknessMap,se=!!A.gradientMap,me=!!A.alphaMap,Re=A.alphaTest>0,Ce=!!A.alphaHash,qe=!!A.extensions;let pt=ur;A.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(pt=r.toneMapping);const Kt={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:Et,fragmentShader:ue,defines:A.defines,customVertexShaderID:ve,customFragmentShaderID:ze,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&W._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&W.instanceColor!==null,instancingMorph:Qe&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Os,alphaToCoverage:!!A.alphaToCoverage,map:kt,matcap:ot,envMap:Ft,envMapMode:Ft&&ce.mapping,envMapCubeUVHeight:ie,aoMap:H,lightMap:wn,bumpMap:ht,normalMap:ut,displacementMap:_&&Fe,emissiveMap:Nt,normalMapObjectSpace:ut&&A.normalMapType===Wp,normalMapTangentSpace:ut&&A.normalMapType===dh,metalnessMap:Ve,roughnessMap:U,anisotropy:w,anisotropyMap:we,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:vt,clearcoatRoughnessMap:xe,dispersion:pe,iridescence:j,iridescenceMap:Ie,iridescenceThicknessMap:He,sheen:oe,sheenColorMap:Ye,sheenRoughnessMap:Le,specularMap:xt,specularColorMap:it,specularIntensityMap:Dt,transmission:Ge,transmissionMap:X,thicknessMap:Te,gradientMap:se,opaque:A.transparent===!1&&A.blending===Es&&A.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Ce,combine:A.combine,mapUv:kt&&S(A.map.channel),aoMapUv:H&&S(A.aoMap.channel),lightMapUv:wn&&S(A.lightMap.channel),bumpMapUv:ht&&S(A.bumpMap.channel),normalMapUv:ut&&S(A.normalMap.channel),displacementMapUv:Fe&&S(A.displacementMap.channel),emissiveMapUv:Nt&&S(A.emissiveMap.channel),metalnessMapUv:Ve&&S(A.metalnessMap.channel),roughnessMapUv:U&&S(A.roughnessMap.channel),anisotropyMapUv:we&&S(A.anisotropyMap.channel),clearcoatMapUv:Oe&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:vt&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:He&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Le&&S(A.sheenRoughnessMap.channel),specularMapUv:xt&&S(A.specularMap.channel),specularColorMapUv:it&&S(A.specularColorMap.channel),specularIntensityMapUv:Dt&&S(A.specularIntensityMap.channel),transmissionMapUv:X&&S(A.transmissionMap.channel),thicknessMapUv:Te&&S(A.thicknessMap.channel),alphaMapUv:me&&S(A.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!he.attributes.uv&&(kt||me),fog:!!le,useFog:A.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:$e,skinning:W.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ze,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:kt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:Nt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===gi,flipSided:A.side===Ln,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:qe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&A.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Kt.vertexUv1s=f.has(1),Kt.vertexUv2s=f.has(2),Kt.vertexUv3s=f.has(3),f.clear(),Kt}function g(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)R.push(k),R.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(L(R,A),D(R,A),R.push(r.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function L(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function D(A,R){l.disableAll(),R.supportsVertexTextures&&l.enable(0),R.instancing&&l.enable(1),R.instancingColor&&l.enable(2),R.instancingMorph&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),R.dispersion&&l.enable(20),R.batchingColor&&l.enable(21),A.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.reverseDepthBuffer&&l.enable(4),R.skinning&&l.enable(5),R.morphTargets&&l.enable(6),R.morphNormals&&l.enable(7),R.morphColors&&l.enable(8),R.premultipliedAlpha&&l.enable(9),R.shadowMapEnabled&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.decodeVideoTextureEmissive&&l.enable(20),R.alphaToCoverage&&l.enable(21),A.push(l.mask)}function C(A){const R=M[A.type];let k;if(R){const ne=_i[R];k=Om.clone(ne.uniforms)}else k=A.uniforms;return k}function N(A,R){let k;for(let ne=0,W=h.length;ne<W;ne++){const le=h[ne];if(le.cacheKey===R){k=le,++k.usedTimes;break}}return k===void 0&&(k=new lx(r,R,A,s),h.push(k)),k}function O(A){if(--A.usedTimes===0){const R=h.indexOf(A);h[R]=h[h.length-1],h.pop(),A.destroy()}}function d(A){u.remove(A)}function B(){u.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:N,releaseProgram:O,releaseShaderCache:d,programs:h,dispose:B}}function dx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function i(o,l,u){r.get(o)[l]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function px(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Df(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m,_,x,M,S,y){let g=r[e];return g===void 0?(g={id:m.id,object:m,geometry:_,material:x,groupOrder:M,renderOrder:m.renderOrder,z:S,group:y},r[e]=g):(g.id=m.id,g.object=m,g.geometry=_,g.material=x,g.groupOrder=M,g.renderOrder=m.renderOrder,g.z=S,g.group=y),e++,g}function l(m,_,x,M,S,y){const g=o(m,_,x,M,S,y);x.transmission>0?n.push(g):x.transparent===!0?i.push(g):t.push(g)}function u(m,_,x,M,S,y){const g=o(m,_,x,M,S,y);x.transmission>0?n.unshift(g):x.transparent===!0?i.unshift(g):t.unshift(g)}function f(m,_){t.length>1&&t.sort(m||px),n.length>1&&n.sort(_||Pf),i.length>1&&i.sort(_||Pf)}function h(){for(let m=e,_=r.length;m<_;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:h,sort:f}}function mx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Df,r.set(n,[o])):i>=s.length?(o=new Df,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function _x(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new wt};break;case"SpotLight":t={position:new J,direction:new J,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function gx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vx=0;function xx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yx(r){const e=new _x,t=gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new J);const i=new J,s=new $t,o=new $t;function l(f){let h=0,m=0,_=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let x=0,M=0,S=0,y=0,g=0,L=0,D=0,C=0,N=0,O=0,d=0;f.sort(xx);for(let A=0,R=f.length;A<R;A++){const k=f[A],ne=k.color,W=k.intensity,le=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=ne.r*W,m+=ne.g*W,_+=ne.b*W;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(k.sh.coefficients[ae],W);d++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,ie=t.get(k);ie.shadowIntensity=ce.intensity,ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,n.directionalShadow[x]=ie,n.directionalShadowMap[x]=he,n.directionalShadowMatrix[x]=k.shadow.matrix,L++}n.directional[x]=ae,x++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(ne).multiplyScalar(W),ae.distance=le,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,n.spot[S]=ae;const ce=k.shadow;if(k.map&&(n.spotLightMap[N]=k.map,N++,ce.updateMatrices(k),k.castShadow&&O++),n.spotLightMatrix[S]=ce.matrix,k.castShadow){const ie=t.get(k);ie.shadowIntensity=ce.intensity,ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,n.spotShadow[S]=ie,n.spotShadowMap[S]=he,C++}S++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(ne).multiplyScalar(W),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),n.rectArea[y]=ae,y++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const ce=k.shadow,ie=t.get(k);ie.shadowIntensity=ce.intensity,ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,ie.shadowCameraNear=ce.camera.near,ie.shadowCameraFar=ce.camera.far,n.pointShadow[M]=ie,n.pointShadowMap[M]=he,n.pointShadowMatrix[M]=k.shadow.matrix,D++}n.point[M]=ae,M++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(W),ae.groundColor.copy(k.groundColor).multiplyScalar(W),n.hemi[g]=ae,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=_;const B=n.hash;(B.directionalLength!==x||B.pointLength!==M||B.spotLength!==S||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==L||B.numPointShadows!==D||B.numSpotShadows!==C||B.numSpotMaps!==N||B.numLightProbes!==d)&&(n.directional.length=x,n.spot.length=S,n.rectArea.length=y,n.point.length=M,n.hemi.length=g,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=C+N-O,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=d,B.directionalLength=x,B.pointLength=M,B.spotLength=S,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=L,B.numPointShadows=D,B.numSpotShadows=C,B.numSpotMaps=N,B.numLightProbes=d,n.version=vx++)}function u(f,h){let m=0,_=0,x=0,M=0,S=0;const y=h.matrixWorldInverse;for(let g=0,L=f.length;g<L;g++){const D=f[g];if(D.isDirectionalLight){const C=n.directional[m];C.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(y),m++}else if(D.isSpotLight){const C=n.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(y),x++}else if(D.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),o.identity(),s.copy(D.matrixWorld),s.premultiply(y),o.extractRotation(s),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(D.isPointLight){const C=n.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),_++}else if(D.isHemisphereLight){const C=n.hemi[S];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),S++}}}return{setup:l,setupView:u,state:n}}function Lf(r){const e=new yx(r),t=[],n=[];function i(h){f.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function Sx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new Lf(r),e.set(i,[l])):s>=o.length?(l=new Lf(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tx(r,e,t){let n=new Jc;const i=new at,s=new at,o=new Yt,l=new Wm({depthPacking:Vp}),u=new Xm,f={},h=t.maxTextureSize,m={[dr]:Ln,[Ln]:dr,[gi]:gi},_=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Mx,fragmentShader:Ex}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new gr;M.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Qn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let g=this.type;this.render=function(O,d,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const A=r.getRenderTarget(),R=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(cr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const W=g!==Oi&&this.type===Oi,le=g===Oi&&this.type!==Oi;for(let he=0,ae=O.length;he<ae;he++){const ce=O[he],ie=ce.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;i.copy(ie.mapSize);const ye=ie.getFrameExtents();if(i.multiply(ye),s.copy(ie.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ye.x),i.x=s.x*ye.x,ie.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ye.y),i.y=s.y*ye.y,ie.mapSize.y=s.y)),ie.map===null||W===!0||le===!0){const Be=this.type!==Oi?{minFilter:li,magFilter:li}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Xr(i.x,i.y,Be),ie.map.texture.name=ce.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();const be=ie.getViewportCount();for(let Be=0;Be<be;Be++){const Ze=ie.getViewport(Be);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),ne.viewport(o),ie.updateMatrices(ce,Be),n=ie.getFrustum(),C(d,B,ie.camera,ce,this.type)}ie.isPointLightShadow!==!0&&this.type===Oi&&L(ie,B),ie.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(A,R,k)};function L(O,d){const B=e.update(S);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Xr(i.x,i.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(d,null,B,_,S,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(d,null,B,x,S,null)}function D(O,d,B,A){let R=null;const k=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=B.isPointLight===!0?u:l,r.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0){const ne=R.uuid,W=d.uuid;let le=f[ne];le===void 0&&(le={},f[ne]=le);let he=le[W];he===void 0&&(he=R.clone(),le[W]=he,d.addEventListener("dispose",N)),R=he}if(R.visible=d.visible,R.wireframe=d.wireframe,A===Oi?R.side=d.shadowSide!==null?d.shadowSide:d.side:R.side=d.shadowSide!==null?d.shadowSide:m[d.side],R.alphaMap=d.alphaMap,R.alphaTest=d.alphaTest,R.map=d.map,R.clipShadows=d.clipShadows,R.clippingPlanes=d.clippingPlanes,R.clipIntersection=d.clipIntersection,R.displacementMap=d.displacementMap,R.displacementScale=d.displacementScale,R.displacementBias=d.displacementBias,R.wireframeLinewidth=d.wireframeLinewidth,R.linewidth=d.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ne=r.properties.get(R);ne.light=B}return R}function C(O,d,B,A,R){if(O.visible===!1)return;if(O.layers.test(d.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Oi)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);const W=e.update(O),le=O.material;if(Array.isArray(le)){const he=W.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const ie=he[ae],ye=le[ie.materialIndex];if(ye&&ye.visible){const be=D(O,ye,A,R);O.onBeforeShadow(r,O,d,B,W,be,ie),r.renderBufferDirect(B,null,W,be,O,ie),O.onAfterShadow(r,O,d,B,W,be,ie)}}}else if(le.visible){const he=D(O,le,A,R);O.onBeforeShadow(r,O,d,B,W,he,null),r.renderBufferDirect(B,null,W,he,O,null),O.onAfterShadow(r,O,d,B,W,he,null)}}const ne=O.children;for(let W=0,le=ne.length;W<le;W++)C(ne[W],d,B,A,R)}function N(O){O.target.removeEventListener("dispose",N);for(const B in f){const A=f[B],R=O.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const bx={[kl]:Hl,[Gl]:Xl,[Vl]:ql,[Ps]:Wl,[Hl]:kl,[Xl]:Gl,[ql]:Vl,[Wl]:Ps};function Ax(r,e){function t(){let X=!1;const Te=new Yt;let se=null;const me=new Yt(0,0,0,0);return{setMask:function(Re){se!==Re&&!X&&(r.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){X=Re},setClear:function(Re,Ce,qe,pt,Kt){Kt===!0&&(Re*=pt,Ce*=pt,qe*=pt),Te.set(Re,Ce,qe,pt),me.equals(Te)===!1&&(r.clearColor(Re,Ce,qe,pt),me.copy(Te))},reset:function(){X=!1,se=null,me.set(-1,0,0,0)}}}function n(){let X=!1,Te=!1,se=null,me=null,Re=null;return{setReversed:function(Ce){if(Te!==Ce){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const pt=Re;Re=null,this.setClear(pt)}Te=Ce},getReversed:function(){return Te},setTest:function(Ce){Ce?Ae(r.DEPTH_TEST):$e(r.DEPTH_TEST)},setMask:function(Ce){se!==Ce&&!X&&(r.depthMask(Ce),se=Ce)},setFunc:function(Ce){if(Te&&(Ce=bx[Ce]),me!==Ce){switch(Ce){case kl:r.depthFunc(r.NEVER);break;case Hl:r.depthFunc(r.ALWAYS);break;case Gl:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Vl:r.depthFunc(r.EQUAL);break;case Wl:r.depthFunc(r.GEQUAL);break;case Xl:r.depthFunc(r.GREATER);break;case ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Ce}},setLocked:function(Ce){X=Ce},setClear:function(Ce){Re!==Ce&&(Te&&(Ce=1-Ce),r.clearDepth(Ce),Re=Ce)},reset:function(){X=!1,se=null,me=null,Re=null,Te=!1}}}function i(){let X=!1,Te=null,se=null,me=null,Re=null,Ce=null,qe=null,pt=null,Kt=null;return{setTest:function(Pt){X||(Pt?Ae(r.STENCIL_TEST):$e(r.STENCIL_TEST))},setMask:function(Pt){Te!==Pt&&!X&&(r.stencilMask(Pt),Te=Pt)},setFunc:function(Pt,Cn,qn){(se!==Pt||me!==Cn||Re!==qn)&&(r.stencilFunc(Pt,Cn,qn),se=Pt,me=Cn,Re=qn)},setOp:function(Pt,Cn,qn){(Ce!==Pt||qe!==Cn||pt!==qn)&&(r.stencilOp(Pt,Cn,qn),Ce=Pt,qe=Cn,pt=qn)},setLocked:function(Pt){X=Pt},setClear:function(Pt){Kt!==Pt&&(r.clearStencil(Pt),Kt=Pt)},reset:function(){X=!1,Te=null,se=null,me=null,Re=null,Ce=null,qe=null,pt=null,Kt=null}}}const s=new t,o=new n,l=new i,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,x=[],M=null,S=!1,y=null,g=null,L=null,D=null,C=null,N=null,O=null,d=new wt(0,0,0),B=0,A=!1,R=null,k=null,ne=null,W=null,le=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ae=ce>=1):ie.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ae=ce>=2);let ye=null,be={};const Be=r.getParameter(r.SCISSOR_BOX),Ze=r.getParameter(r.VIEWPORT),Et=new Yt().fromArray(Be),ue=new Yt().fromArray(Ze);function ve(X,Te,se,me){const Re=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(X,Ce),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<se;qe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(Te+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return Ce}const ze={};ze[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),ze[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ze[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Ae(r.DEPTH_TEST),o.setFunc(Ps),ht(!1),ut(Lu),Ae(r.CULL_FACE),H(cr);function Ae(X){h[X]!==!0&&(r.enable(X),h[X]=!0)}function $e(X){h[X]!==!1&&(r.disable(X),h[X]=!1)}function Qe(X,Te){return m[X]!==Te?(r.bindFramebuffer(X,Te),m[X]=Te,X===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Te),X===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ke(X,Te){let se=x,me=!1;if(X){se=_.get(Te),se===void 0&&(se=[],_.set(Te,se));const Re=X.textures;if(se.length!==Re.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,qe=Re.length;Ce<qe;Ce++)se[Ce]=r.COLOR_ATTACHMENT0+Ce;se.length=Re.length,me=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,me=!0);me&&r.drawBuffers(se)}function kt(X){return M!==X?(r.useProgram(X),M=X,!0):!1}const ot={[Ur]:r.FUNC_ADD,[mp]:r.FUNC_SUBTRACT,[_p]:r.FUNC_REVERSE_SUBTRACT};ot[gp]=r.MIN,ot[vp]=r.MAX;const Ft={[xp]:r.ZERO,[yp]:r.ONE,[Sp]:r.SRC_COLOR,[Bl]:r.SRC_ALPHA,[wp]:r.SRC_ALPHA_SATURATE,[bp]:r.DST_COLOR,[Ep]:r.DST_ALPHA,[Mp]:r.ONE_MINUS_SRC_COLOR,[zl]:r.ONE_MINUS_SRC_ALPHA,[Ap]:r.ONE_MINUS_DST_COLOR,[Tp]:r.ONE_MINUS_DST_ALPHA,[Cp]:r.CONSTANT_COLOR,[Rp]:r.ONE_MINUS_CONSTANT_COLOR,[Pp]:r.CONSTANT_ALPHA,[Dp]:r.ONE_MINUS_CONSTANT_ALPHA};function H(X,Te,se,me,Re,Ce,qe,pt,Kt,Pt){if(X===cr){S===!0&&($e(r.BLEND),S=!1);return}if(S===!1&&(Ae(r.BLEND),S=!0),X!==pp){if(X!==y||Pt!==A){if((g!==Ur||C!==Ur)&&(r.blendEquation(r.FUNC_ADD),g=Ur,C=Ur),Pt)switch(X){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFunc(r.ONE,r.ONE);break;case Uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,D=null,N=null,O=null,d.set(0,0,0),B=0,y=X,A=Pt}return}Re=Re||Te,Ce=Ce||se,qe=qe||me,(Te!==g||Re!==C)&&(r.blendEquationSeparate(ot[Te],ot[Re]),g=Te,C=Re),(se!==L||me!==D||Ce!==N||qe!==O)&&(r.blendFuncSeparate(Ft[se],Ft[me],Ft[Ce],Ft[qe]),L=se,D=me,N=Ce,O=qe),(pt.equals(d)===!1||Kt!==B)&&(r.blendColor(pt.r,pt.g,pt.b,Kt),d.copy(pt),B=Kt),y=X,A=!1}function wn(X,Te){X.side===gi?$e(r.CULL_FACE):Ae(r.CULL_FACE);let se=X.side===Ln;Te&&(se=!se),ht(se),X.blending===Es&&X.transparent===!1?H(cr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const me=X.stencilWrite;l.setTest(me),me&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):$e(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){R!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),R=X)}function ut(X){X!==fp?(Ae(r.CULL_FACE),X!==k&&(X===Lu?r.cullFace(r.BACK):X===hp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$e(r.CULL_FACE),k=X}function Fe(X){X!==ne&&(ae&&r.lineWidth(X),ne=X)}function Nt(X,Te,se){X?(Ae(r.POLYGON_OFFSET_FILL),(W!==Te||le!==se)&&(r.polygonOffset(Te,se),W=Te,le=se)):$e(r.POLYGON_OFFSET_FILL)}function Ve(X){X?Ae(r.SCISSOR_TEST):$e(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+he-1),ye!==X&&(r.activeTexture(X),ye=X)}function w(X,Te,se){se===void 0&&(ye===null?se=r.TEXTURE0+he-1:se=ye);let me=be[se];me===void 0&&(me={type:void 0,texture:void 0},be[se]=me),(me.type!==X||me.texture!==Te)&&(ye!==se&&(r.activeTexture(se),ye=se),r.bindTexture(X,Te||ze[X]),me.type=X,me.texture=Te)}function Z(){const X=be[ye];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(X){Et.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Le(X){ue.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ue.copy(X))}function xt(X,Te){let se=f.get(Te);se===void 0&&(se=new WeakMap,f.set(Te,se));let me=se.get(X);me===void 0&&(me=r.getUniformBlockIndex(Te,X.name),se.set(X,me))}function it(X,Te){const me=f.get(Te).get(X);u.get(Te)!==me&&(r.uniformBlockBinding(Te,me,X.__bindingPointIndex),u.set(Te,me))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ye=null,be={},m={},_=new WeakMap,x=[],M=null,S=!1,y=null,g=null,L=null,D=null,C=null,N=null,O=null,d=new wt(0,0,0),B=0,A=!1,R=null,k=null,ne=null,W=null,le=null,Et.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:Ae,disable:$e,bindFramebuffer:Qe,drawBuffers:Ke,useProgram:kt,setBlending:H,setMaterial:wn,setFlipSided:ht,setCullFace:ut,setLineWidth:Fe,setPolygonOffset:Nt,setScissorTest:Ve,activeTexture:U,bindTexture:w,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:j,texImage2D:Ie,texImage3D:He,updateUBOMapping:xt,uniformBlockBinding:it,texStorage2D:vt,texStorage3D:xe,texSubImage2D:oe,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:Oe,scissor:Ye,viewport:Le,reset:Dt}}function wx(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new at,h=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return x?new OffscreenCanvas(U,w):ya("canvas")}function S(U,w,Z){let pe=1;const j=Ve(U);if((j.width>Z||j.height>Z)&&(pe=Z/Math.max(j.width,j.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(pe*j.width),Ge=Math.floor(pe*j.height);m===void 0&&(m=M(oe,Ge));const we=w?M(oe,Ge):m;return we.width=oe,we.height=Ge,we.getContext("2d").drawImage(U,0,0,oe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+Ge+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,w,Z,pe,j=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=w;if(w===r.RED&&(Z===r.FLOAT&&(oe=r.R32F),Z===r.HALF_FLOAT&&(oe=r.R16F),Z===r.UNSIGNED_BYTE&&(oe=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.R8UI),Z===r.UNSIGNED_SHORT&&(oe=r.R16UI),Z===r.UNSIGNED_INT&&(oe=r.R32UI),Z===r.BYTE&&(oe=r.R8I),Z===r.SHORT&&(oe=r.R16I),Z===r.INT&&(oe=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(oe=r.RG32F),Z===r.HALF_FLOAT&&(oe=r.RG16F),Z===r.UNSIGNED_BYTE&&(oe=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RG16UI),Z===r.UNSIGNED_INT&&(oe=r.RG32UI),Z===r.BYTE&&(oe=r.RG8I),Z===r.SHORT&&(oe=r.RG16I),Z===r.INT&&(oe=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),Z===r.UNSIGNED_INT&&(oe=r.RGB32UI),Z===r.BYTE&&(oe=r.RGB8I),Z===r.SHORT&&(oe=r.RGB16I),Z===r.INT&&(oe=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(oe=r.RGBA32UI),Z===r.BYTE&&(oe=r.RGBA8I),Z===r.SHORT&&(oe=r.RGBA16I),Z===r.INT&&(oe=r.RGBA32I)),w===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),w===r.RGBA){const Ge=j?yo:Rt.getTransfer(pe);Z===r.FLOAT&&(oe=r.RGBA32F),Z===r.HALF_FLOAT&&(oe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(oe=Ge===It?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(U,w){let Z;return U?w===null||w===Wr||w===Is?Z=r.DEPTH24_STENCIL8:w===zi?Z=r.DEPTH32F_STENCIL8:w===va&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wr||w===Is?Z=r.DEPTH_COMPONENT24:w===zi?Z=r.DEPTH_COMPONENT32F:w===va&&(Z=r.DEPTH_COMPONENT16),Z}function N(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==li&&U.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function O(U){const w=U.target;w.removeEventListener("dispose",O),B(w),w.isVideoTexture&&h.delete(w)}function d(U){const w=U.target;w.removeEventListener("dispose",d),R(w)}function B(U){const w=n.get(U);if(w.__webglInit===void 0)return;const Z=U.source,pe=_.get(Z);if(pe){const j=pe[w.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(U),Object.keys(pe).length===0&&_.delete(Z)}n.remove(U)}function A(U){const w=n.get(U);r.deleteTexture(w.__webglTexture);const Z=U.source,pe=_.get(Z);delete pe[w.__cacheKey],o.memory.textures--}function R(U){const w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let j=0;j<w.__webglFramebuffer[pe].length;j++)r.deleteFramebuffer(w.__webglFramebuffer[pe][j]);else r.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)r.deleteFramebuffer(w.__webglFramebuffer[pe]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=U.textures;for(let pe=0,j=Z.length;pe<j;pe++){const oe=n.get(Z[pe]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(Z[pe])}n.remove(U)}let k=0;function ne(){k=0}function W(){const U=k;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),k+=1,U}function le(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function he(U,w){const Z=n.get(U);if(U.isVideoTexture&&Fe(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Z,U,w);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function ae(U,w){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ue(Z,U,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function ce(U,w){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ue(Z,U,w);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function ie(U,w){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ve(Z,U,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}const ye={[$l]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[Zl]:r.MIRRORED_REPEAT},be={[li]:r.NEAREST,[Hp]:r.NEAREST_MIPMAP_NEAREST,[ka]:r.NEAREST_MIPMAP_LINEAR,[xi]:r.LINEAR,[Ko]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},Be={[Xp]:r.NEVER,[Kp]:r.ALWAYS,[qp]:r.LESS,[ph]:r.LEQUAL,[Yp]:r.EQUAL,[Zp]:r.GEQUAL,[jp]:r.GREATER,[$p]:r.NOTEQUAL};function Ze(U,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===Ko||w.magFilter===ka||w.magFilter===Fr||w.minFilter===xi||w.minFilter===Ko||w.minFilter===ka||w.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ye[w.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ye[w.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ye[w.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,be[w.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,be[w.minFilter]),w.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===li||w.minFilter!==ka&&w.minFilter!==Fr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Et(U,w){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",O));const pe=w.source;let j=_.get(pe);j===void 0&&(j={},_.set(pe,j));const oe=le(w);if(oe!==U.__cacheKey){j[oe]===void 0&&(j[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),j[oe].usedTimes++;const Ge=j[U.__cacheKey];Ge!==void 0&&(j[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(w)),U.__cacheKey=oe,U.__webglTexture=j[oe].texture}return Z}function ue(U,w,Z){let pe=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=r.TEXTURE_3D);const j=Et(U,w),oe=w.source;t.bindTexture(pe,U.__webglTexture,r.TEXTURE0+Z);const Ge=n.get(oe);if(oe.version!==Ge.__version||j===!0){t.activeTexture(r.TEXTURE0+Z);const we=Rt.getPrimaries(Rt.workingColorSpace),Oe=w.colorSpace===sr?null:Rt.getPrimaries(w.colorSpace),vt=w.colorSpace===sr||we===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let xe=S(w.image,!1,i.maxTextureSize);xe=Nt(w,xe);const Ie=s.convert(w.format,w.colorSpace),He=s.convert(w.type);let Ye=D(w.internalFormat,Ie,He,w.colorSpace,w.isVideoTexture);Ze(pe,w);let Le;const xt=w.mipmaps,it=w.isVideoTexture!==!0,Dt=Ge.__version===void 0||j===!0,X=oe.dataReady,Te=N(w,xe);if(w.isDepthTexture)Ye=C(w.format===Ns,w.type),Dt&&(it?t.texStorage2D(r.TEXTURE_2D,1,Ye,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ye,xe.width,xe.height,0,Ie,He,null));else if(w.isDataTexture)if(xt.length>0){it&&Dt&&t.texStorage2D(r.TEXTURE_2D,Te,Ye,xt[0].width,xt[0].height);for(let se=0,me=xt.length;se<me;se++)Le=xt[se],it?X&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Le.width,Le.height,Ie,He,Le.data):t.texImage2D(r.TEXTURE_2D,se,Ye,Le.width,Le.height,0,Ie,He,Le.data);w.generateMipmaps=!1}else it?(Dt&&t.texStorage2D(r.TEXTURE_2D,Te,Ye,xe.width,xe.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Ie,He,xe.data)):t.texImage2D(r.TEXTURE_2D,0,Ye,xe.width,xe.height,0,Ie,He,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ye,xt[0].width,xt[0].height,xe.depth);for(let se=0,me=xt.length;se<me;se++)if(Le=xt[se],w.format!==oi)if(Ie!==null)if(it){if(X)if(w.layerUpdates.size>0){const Re=lf(Le.width,Le.height,w.format,w.type);for(const Ce of w.layerUpdates){const qe=Le.data.subarray(Ce*Re/Le.data.BYTES_PER_ELEMENT,(Ce+1)*Re/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Ce,Le.width,Le.height,1,Ie,qe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,xe.depth,Ie,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Ye,Le.width,Le.height,xe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,xe.depth,Ie,He,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Ye,Le.width,Le.height,xe.depth,0,Ie,He,Le.data)}else{it&&Dt&&t.texStorage2D(r.TEXTURE_2D,Te,Ye,xt[0].width,xt[0].height);for(let se=0,me=xt.length;se<me;se++)Le=xt[se],w.format!==oi?Ie!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Le.width,Le.height,Ie,He,Le.data):t.texImage2D(r.TEXTURE_2D,se,Ye,Le.width,Le.height,0,Ie,He,Le.data)}else if(w.isDataArrayTexture)if(it){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ye,xe.width,xe.height,xe.depth),X)if(w.layerUpdates.size>0){const se=lf(xe.width,xe.height,w.format,w.type);for(const me of w.layerUpdates){const Re=xe.data.subarray(me*se/xe.data.BYTES_PER_ELEMENT,(me+1)*se/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,xe.width,xe.height,1,Ie,He,Re)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,He,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ye,xe.width,xe.height,xe.depth,0,Ie,He,xe.data);else if(w.isData3DTexture)it?(Dt&&t.texStorage3D(r.TEXTURE_3D,Te,Ye,xe.width,xe.height,xe.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,He,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ye,xe.width,xe.height,xe.depth,0,Ie,He,xe.data);else if(w.isFramebufferTexture){if(Dt)if(it)t.texStorage2D(r.TEXTURE_2D,Te,Ye,xe.width,xe.height);else{let se=xe.width,me=xe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(r.TEXTURE_2D,Re,Ye,se,me,0,Ie,He,null),se>>=1,me>>=1}}else if(xt.length>0){if(it&&Dt){const se=Ve(xt[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ye,se.width,se.height)}for(let se=0,me=xt.length;se<me;se++)Le=xt[se],it?X&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Ie,He,Le):t.texImage2D(r.TEXTURE_2D,se,Ye,Ie,He,Le);w.generateMipmaps=!1}else if(it){if(Dt){const se=Ve(xe);t.texStorage2D(r.TEXTURE_2D,Te,Ye,se.width,se.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,He,xe)}else t.texImage2D(r.TEXTURE_2D,0,Ye,Ie,He,xe);y(w)&&g(pe),Ge.__version=oe.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ve(U,w,Z){if(w.image.length!==6)return;const pe=Et(U,w),j=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const oe=n.get(j);if(j.version!==oe.__version||pe===!0){t.activeTexture(r.TEXTURE0+Z);const Ge=Rt.getPrimaries(Rt.workingColorSpace),we=w.colorSpace===sr?null:Rt.getPrimaries(w.colorSpace),Oe=w.colorSpace===sr||Ge===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const vt=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let me=0;me<6;me++)!vt&&!xe?Ie[me]=S(w.image[me],!0,i.maxCubemapSize):Ie[me]=xe?w.image[me].image:w.image[me],Ie[me]=Nt(w,Ie[me]);const He=Ie[0],Ye=s.convert(w.format,w.colorSpace),Le=s.convert(w.type),xt=D(w.internalFormat,Ye,Le,w.colorSpace),it=w.isVideoTexture!==!0,Dt=oe.__version===void 0||pe===!0,X=j.dataReady;let Te=N(w,He);Ze(r.TEXTURE_CUBE_MAP,w);let se;if(vt){it&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,xt,He.width,He.height);for(let me=0;me<6;me++){se=Ie[me].mipmaps;for(let Re=0;Re<se.length;Re++){const Ce=se[Re];w.format!==oi?Ye!==null?it?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ce.width,Ce.height,Ye,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,xt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ce.width,Ce.height,Ye,Le,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,xt,Ce.width,Ce.height,0,Ye,Le,Ce.data)}}}else{if(se=w.mipmaps,it&&Dt){se.length>0&&Te++;const me=Ve(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,xt,me.width,me.height)}for(let me=0;me<6;me++)if(xe){it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ie[me].width,Ie[me].height,Ye,Le,Ie[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,xt,Ie[me].width,Ie[me].height,0,Ye,Le,Ie[me].data);for(let Re=0;Re<se.length;Re++){const qe=se[Re].image[me].image;it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,qe.width,qe.height,Ye,Le,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,xt,qe.width,qe.height,0,Ye,Le,qe.data)}}else{it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ye,Le,Ie[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,xt,Ye,Le,Ie[me]);for(let Re=0;Re<se.length;Re++){const Ce=se[Re];it?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Ye,Le,Ce.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,xt,Ye,Le,Ce.image[me])}}}y(w)&&g(r.TEXTURE_CUBE_MAP),oe.__version=j.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ze(U,w,Z,pe,j,oe){const Ge=s.convert(Z.format,Z.colorSpace),we=s.convert(Z.type),Oe=D(Z.internalFormat,Ge,we,Z.colorSpace),vt=n.get(w),xe=n.get(Z);if(xe.__renderTarget=w,!vt.__hasExternalTextures){const Ie=Math.max(1,w.width>>oe),He=Math.max(1,w.height>>oe);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,Oe,Ie,He,w.depth,0,Ge,we,null):t.texImage2D(j,oe,Oe,Ie,He,0,Ge,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),ut(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,j,xe.__webglTexture,0,ht(w)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,j,xe.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(U,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),w.depthBuffer){const pe=w.depthTexture,j=pe&&pe.isDepthTexture?pe.type:null,oe=C(w.stencilBuffer,j),Ge=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=ht(w);ut(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,oe,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,oe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,U)}else{const pe=w.textures;for(let j=0;j<pe.length;j++){const oe=pe[j],Ge=s.convert(oe.format,oe.colorSpace),we=s.convert(oe.type),Oe=D(oe.internalFormat,Ge,we,oe.colorSpace),vt=ht(w);Z&&ut(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Oe,w.width,w.height):ut(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,Oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const j=pe.__webglTexture,oe=ht(w);if(w.depthTexture.format===Ts)ut(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(w.depthTexture.format===Ns)ut(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Qe(U){const w=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const j=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",j)};pe.addEventListener("dispose",j),w.__depthDisposeCallback=j}w.__boundDepthTexture=pe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");$e(w.__webglFramebuffer,U)}else if(Z){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=r.createRenderbuffer(),Ae(w.__webglDepthbuffer[pe],U,!1);else{const j=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ae(w.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(U,w,Z){const pe=n.get(U);w!==void 0&&ze(pe.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Qe(U)}function kt(U){const w=U.texture,Z=n.get(U),pe=n.get(w);U.addEventListener("dispose",d);const j=U.textures,oe=U.isWebGLCubeRenderTarget===!0,Ge=j.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=w.version,o.memory.textures++),oe){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)Z.__webglFramebuffer[we][Oe]=r.createFramebuffer()}else Z.__webglFramebuffer[we]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)Z.__webglFramebuffer[we]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let we=0,Oe=j.length;we<Oe;we++){const vt=n.get(j[we]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&ut(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<j.length;we++){const Oe=j[we];Z.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const vt=s.convert(Oe.format,Oe.colorSpace),xe=s.convert(Oe.type),Ie=D(Oe.internalFormat,vt,xe,Oe.colorSpace,U.isXRRenderTarget===!0),He=ht(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Ie,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Ze(r.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ze(Z.__webglFramebuffer[we][Oe],U,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Oe);else ze(Z.__webglFramebuffer[we],U,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(w)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let we=0,Oe=j.length;we<Oe;we++){const vt=j[we],xe=n.get(vt);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),Ze(r.TEXTURE_2D,vt),ze(Z.__webglFramebuffer,U,vt,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),y(vt)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),Ze(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ze(Z.__webglFramebuffer[Oe],U,w,r.COLOR_ATTACHMENT0,we,Oe);else ze(Z.__webglFramebuffer,U,w,r.COLOR_ATTACHMENT0,we,0);y(w)&&g(we),t.unbindTexture()}U.depthBuffer&&Qe(U)}function ot(U){const w=U.textures;for(let Z=0,pe=w.length;Z<pe;Z++){const j=w[Z];if(y(j)){const oe=L(U),Ge=n.get(j).__webglTexture;t.bindTexture(oe,Ge),g(oe),t.unbindTexture()}}}const Ft=[],H=[];function wn(U){if(U.samples>0){if(ut(U)===!1){const w=U.textures,Z=U.width,pe=U.height;let j=r.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=n.get(U),we=w.length>1;if(we)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Oe]);const vt=n.get(w[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,vt,0)}r.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,j,r.NEAREST),u===!0&&(Ft.length=0,H.length=0,Ft.push(r.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ft.push(oe),H.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Oe]);const vt=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,vt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const w=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ht(U){return Math.min(i.maxSamples,U.samples)}function ut(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(U){const w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Nt(U,w){const Z=U.colorSpace,pe=U.format,j=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==Os&&Z!==sr&&(Rt.getTransfer(Z)===It?(pe!==oi||j!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=W,this.resetTextureUnits=ne,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=ie,this.rebindTextures=Ke,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ut}function Cx(r,e){function t(n,i=sr){let s;const o=Rt.getTransfer(i);if(n===Vi)return r.UNSIGNED_BYTE;if(n===Wc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return r.BYTE;if(n===sh)return r.SHORT;if(n===va)return r.UNSIGNED_SHORT;if(n===Vc)return r.INT;if(n===Wr)return r.UNSIGNED_INT;if(n===zi)return r.FLOAT;if(n===Ca)return r.HALF_FLOAT;if(n===oh)return r.ALPHA;if(n===Us)return r.RGB;if(n===oi)return r.RGBA;if(n===lh)return r.LUMINANCE;if(n===ch)return r.LUMINANCE_ALPHA;if(n===Ts)return r.DEPTH_COMPONENT;if(n===Ns)return r.DEPTH_STENCIL;if(n===uh)return r.RED;if(n===qc)return r.RED_INTEGER;if(n===fh)return r.RG;if(n===Yc)return r.RG_INTEGER;if(n===jc)return r.RGBA_INTEGER;if(n===uo||n===fo||n===ho||n===po)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tc||n===nc)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ic)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===uc||n===fc||n===hc||n===dc||n===pc||n===mc||n===_c||n===gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===vc||n===xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===yc||n===Sc||n===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Rx={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),g=this._getHandJoint(f,S);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const h=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],_=h.position.distanceTo(m.position),x=.02,M=.005;f.inputState.pinching&&_>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new An,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pr({vertexShader:Px,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends jr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",u=1,f=null,h=null,m=null,_=null,x=null,M=null;const S=new Lx,y=t.getContextAttributes();let g=null,L=null;const D=[],C=[],N=new at;let O=null;const d=new Jn;d.viewport=new Yt;const B=new Jn;B.viewport=new Yt;const A=[d,B],R=new Qm;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let ve=D[ue];return ve===void 0&&(ve=new bl,D[ue]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ue){let ve=D[ue];return ve===void 0&&(ve=new bl,D[ue]=ve),ve.getGripSpace()},this.getHand=function(ue){let ve=D[ue];return ve===void 0&&(ve=new bl,D[ue]=ve),ve.getHandSpace()};function W(ue){const ve=C.indexOf(ue.inputSource);if(ve===-1)return;const ze=D[ve];ze!==void 0&&(ze.update(ue.inputSource,ue.frame,f||o),ze.dispatchEvent({type:ue.type,data:ue.inputSource}))}function le(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",he);for(let ue=0;ue<D.length;ue++){const ve=C[ue];ve!==null&&(C[ue]=null,D[ue].disconnect(ve))}k=null,ne=null,S.reset(),e.setRenderTarget(g),x=null,_=null,m=null,i=null,L=null,Et.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){l=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ue){f=ue},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(ue){if(i=ue,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",le),i.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(N),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ze=null,Ae=null,$e=null;y.depth&&($e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ze=y.stencil?Ns:Ts,Ae=y.stencil?Is:Wr);const Qe={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:s};m=new XRWebGLBinding(i,t),_=m.createProjectionLayer(Qe),i.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Xr(_.textureWidth,_.textureHeight,{format:oi,type:Vi,depthTexture:new wh(_.textureWidth,_.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const ze={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,t,ze),i.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Xr(x.framebufferWidth,x.framebufferHeight,{format:oi,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}L.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await i.requestReferenceSpace(l),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function he(ue){for(let ve=0;ve<ue.removed.length;ve++){const ze=ue.removed[ve],Ae=C.indexOf(ze);Ae>=0&&(C[Ae]=null,D[Ae].disconnect(ze))}for(let ve=0;ve<ue.added.length;ve++){const ze=ue.added[ve];let Ae=C.indexOf(ze);if(Ae===-1){for(let Qe=0;Qe<D.length;Qe++)if(Qe>=C.length){C.push(ze),Ae=Qe;break}else if(C[Qe]===null){C[Qe]=ze,Ae=Qe;break}if(Ae===-1)break}const $e=D[Ae];$e&&$e.connect(ze)}}const ae=new J,ce=new J;function ie(ue,ve,ze){ae.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(ze.matrixWorld);const Ae=ae.distanceTo(ce),$e=ve.projectionMatrix.elements,Qe=ze.projectionMatrix.elements,Ke=$e[14]/($e[10]-1),kt=$e[14]/($e[10]+1),ot=($e[9]+1)/$e[5],Ft=($e[9]-1)/$e[5],H=($e[8]-1)/$e[0],wn=(Qe[8]+1)/Qe[0],ht=Ke*H,ut=Ke*wn,Fe=Ae/(-H+wn),Nt=Fe*-H;if(ve.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Nt),ue.translateZ(Fe),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),$e[10]===-1)ue.projectionMatrix.copy(ve.projectionMatrix),ue.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ve=Ke+Fe,U=kt+Fe,w=ht-Nt,Z=ut+(Ae-Nt),pe=ot*kt/U*Ve,j=Ft*kt/U*Ve;ue.projectionMatrix.makePerspective(w,Z,pe,j,Ve,U),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function ye(ue,ve){ve===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(ve.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(i===null)return;let ve=ue.near,ze=ue.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(ze=S.depthFar)),R.near=B.near=d.near=ve,R.far=B.far=d.far=ze,(k!==R.near||ne!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ne=R.far),d.layers.mask=ue.layers.mask|2,B.layers.mask=ue.layers.mask|4,R.layers.mask=d.layers.mask|B.layers.mask;const Ae=ue.parent,$e=R.cameras;ye(R,Ae);for(let Qe=0;Qe<$e.length;Qe++)ye($e[Qe],Ae);$e.length===2?ie(R,d,B):R.projectionMatrix.copy(d.projectionMatrix),be(ue,R,Ae)};function be(ue,ve,ze){ze===null?ue.matrix.copy(ve.matrixWorld):(ue.matrix.copy(ze.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(ve.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(ve.projectionMatrix),ue.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=xa*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return u},this.setFoveation=function(ue){u=ue,_!==null&&(_.fixedFoveation=ue),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ue)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(R)};let Be=null;function Ze(ue,ve){if(h=ve.getViewerPose(f||o),M=ve,h!==null){const ze=h.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ae=!1;ze.length!==R.cameras.length&&(R.cameras.length=0,Ae=!0);for(let Qe=0;Qe<ze.length;Qe++){const Ke=ze[Qe];let kt=null;if(x!==null)kt=x.getViewport(Ke);else{const Ft=m.getViewSubImage(_,Ke);kt=Ft.viewport,Qe===0&&(e.setRenderTargetTextures(L,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(L))}let ot=A[Qe];ot===void 0&&(ot=new Jn,ot.layers.enable(Qe),ot.viewport=new Yt,A[Qe]=ot),ot.matrix.fromArray(Ke.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Ke.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(kt.x,kt.y,kt.width,kt.height),Qe===0&&(R.matrix.copy(ot.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ae===!0&&R.cameras.push(ot)}const $e=i.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Qe=m.getDepthInformation(ze[0]);Qe&&Qe.isValid&&Qe.texture&&S.init(e,Qe,i.renderState)}}for(let ze=0;ze<D.length;ze++){const Ae=C[ze],$e=D[ze];Ae!==null&&$e!==void 0&&$e.update(Ae,ve,f||o)}Be&&Be(ue,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Et=new Dh;Et.setAnimationLoop(Ze),this.setAnimationLoop=function(ue){Be=ue},this.dispose=function(){}}}const Rr=new Ei,Ux=new $t;function Nx(r,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Th(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function i(y,g,L,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(y,g):g.isMeshToonMaterial?(s(y,g),m(y,g)):g.isMeshPhongMaterial?(s(y,g),h(y,g)):g.isMeshStandardMaterial?(s(y,g),_(y,g),g.isMeshPhysicalMaterial&&x(y,g,C)):g.isMeshMatcapMaterial?(s(y,g),M(y,g)):g.isMeshDepthMaterial?s(y,g):g.isMeshDistanceMaterial?(s(y,g),S(y,g)):g.isMeshNormalMaterial?s(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&l(y,g)):g.isPointsMaterial?u(y,g,L,D):g.isSpriteMaterial?f(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Ln&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Ln&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const L=e.get(g),D=L.envMap,C=L.envMapRotation;D&&(y.envMap.value=D,Rr.copy(C),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),y.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Rr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function l(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function u(y,g,L,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*L,y.scale.value=D*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,L){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function S(y,g){const L=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ox(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(L,D){const C=D.program;n.uniformBlockBinding(L,C)}function f(L,D){let C=i[L.id];C===void 0&&(M(L),C=h(L),i[L.id]=C,L.addEventListener("dispose",y));const N=D.program;n.updateUBOMapping(L,N);const O=e.render.frame;s[L.id]!==O&&(_(L),s[L.id]=O)}function h(L){const D=m();L.__bindingPointIndex=D;const C=r.createBuffer(),N=L.__size,O=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,N,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,C),C}function m(){for(let L=0;L<l;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const D=i[L.id],C=L.uniforms,N=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let O=0,d=C.length;O<d;O++){const B=Array.isArray(C[O])?C[O]:[C[O]];for(let A=0,R=B.length;A<R;A++){const k=B[A];if(x(k,O,A,N)===!0){const ne=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let he=0;he<W.length;he++){const ae=W[he],ce=S(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,ne+le,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,D,C,N){const O=L.value,d=D+"_"+C;if(N[d]===void 0)return typeof O=="number"||typeof O=="boolean"?N[d]=O:N[d]=O.clone(),!0;{const B=N[d];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return N[d]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function M(L){const D=L.uniforms;let C=0;const N=16;for(let d=0,B=D.length;d<B;d++){const A=Array.isArray(D[d])?D[d]:[D[d]];for(let R=0,k=A.length;R<k;R++){const ne=A[R],W=Array.isArray(ne.value)?ne.value:[ne.value];for(let le=0,he=W.length;le<he;le++){const ae=W[le],ce=S(ae),ie=C%N,ye=ie%ce.boundary,be=ie+ye;C+=ye,be!==0&&N-be<ce.storage&&(C+=N-be),ne.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=C,C+=ce.storage}}}const O=C%N;return O>0&&(C+=N-O),L.__size=C,L.__cache={},this}function S(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const C=o.indexOf(D.__bindingPointIndex);o.splice(C,1),r.deleteBuffer(i[D.id]),delete i[D.id],delete s[D.id]}function g(){for(const L in i)r.deleteBuffer(i[L]);o=[],i={},s={}}return{bind:u,update:f,dispose:g}}class Fx{constructor(e={}){const{canvas:t=mm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const M=new Uint32Array(4),S=new Int32Array(4);let y=null,g=null;const L=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=ur,this.toneMappingExposure=1;const C=this;let N=!1,O=0,d=0,B=null,A=-1,R=null;const k=new Yt,ne=new Yt;let W=null;const le=new wt(0);let he=0,ae=t.width,ce=t.height,ie=1,ye=null,be=null;const Be=new Yt(0,0,ae,ce),Ze=new Yt(0,0,ae,ce);let Et=!1;const ue=new Jc;let ve=!1,ze=!1;this.transmissionResolutionScale=1;const Ae=new $t,$e=new $t,Qe=new J,Ke=new Yt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ft(){return B===null?ie:1}let H=n;function wn(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const q="webgl2";if(H=wn(q,P),H===null)throw wn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,ut,Fe,Nt,Ve,U,w,Z,pe,j,oe,Ge,we,Oe,vt,xe,Ie,He,Ye,Le,xt,it,Dt,X;function Te(){ht=new q0(H),ht.init(),it=new Cx(H,ht),ut=new k0(H,ht,e,it),Fe=new Ax(H,ht),ut.reverseDepthBuffer&&_&&Fe.buffers.depth.setReversed(!0),Nt=new $0(H),Ve=new dx,U=new wx(H,ht,Fe,Ve,ut,it,Nt),w=new G0(C),Z=new X0(C),pe=new n_(H),Dt=new B0(H,pe),j=new Y0(H,pe,Nt,Dt),oe=new K0(H,j,pe,Nt),Ye=new Z0(H,ut,U),xe=new H0(Ve),Ge=new hx(C,w,Z,ht,ut,Dt,xe),we=new Nx(C,Ve),Oe=new mx,vt=new Sx(ht),He=new F0(C,w,Z,Fe,oe,x,u),Ie=new Tx(C,oe,ut),X=new Ox(H,Nt,ut,Fe),Le=new z0(H,ht,Nt),xt=new j0(H,ht,Nt),Nt.programs=Ge.programs,C.capabilities=ut,C.extensions=ht,C.properties=Ve,C.renderLists=Oe,C.shadowMap=Ie,C.state=Fe,C.info=Nt}Te();const se=new Ix(C,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(P){P!==void 0&&(ie=P,this.setSize(ae,ce,!1))},this.getSize=function(P){return P.set(ae,ce)},this.setSize=function(P,q,Q=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=P,ce=q,t.width=Math.floor(P*ie),t.height=Math.floor(q*ie),Q===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(ae*ie,ce*ie).floor()},this.setDrawingBufferSize=function(P,q,Q){ae=P,ce=q,ie=Q,t.width=Math.floor(P*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(Be)},this.setViewport=function(P,q,Q,ee){P.isVector4?Be.set(P.x,P.y,P.z,P.w):Be.set(P,q,Q,ee),Fe.viewport(k.copy(Be).multiplyScalar(ie).round())},this.getScissor=function(P){return P.copy(Ze)},this.setScissor=function(P,q,Q,ee){P.isVector4?Ze.set(P.x,P.y,P.z,P.w):Ze.set(P,q,Q,ee),Fe.scissor(ne.copy(Ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(P){Fe.setScissorTest(Et=P)},this.setOpaqueSort=function(P){ye=P},this.setTransparentSort=function(P){be=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(P=!0,q=!0,Q=!0){let ee=0;if(P){let Y=!1;if(B!==null){const ge=B.texture.format;Y=ge===jc||ge===Yc||ge===qc}if(Y){const ge=B.texture.type,Me=ge===Vi||ge===Wr||ge===va||ge===Is||ge===Wc||ge===Xc,Ue=He.getClearColor(),Ne=He.getClearAlpha(),et=Ue.r,tt=Ue.g,Xe=Ue.b;Me?(M[0]=et,M[1]=tt,M[2]=Xe,M[3]=Ne,H.clearBufferuiv(H.COLOR,0,M)):(S[0]=et,S[1]=tt,S[2]=Xe,S[3]=Ne,H.clearBufferiv(H.COLOR,0,S))}else ee|=H.COLOR_BUFFER_BIT}q&&(ee|=H.DEPTH_BUFFER_BIT),Q&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),He.dispose(),Oe.dispose(),vt.dispose(),Ve.dispose(),w.dispose(),Z.dispose(),oe.dispose(),Dt.dispose(),X.dispose(),Ge.dispose(),se.dispose(),se.removeEventListener("sessionstart",bi),se.removeEventListener("sessionend",Ai),ti.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const P=Nt.autoReset,q=Ie.enabled,Q=Ie.autoUpdate,ee=Ie.needsUpdate,Y=Ie.type;Te(),Nt.autoReset=P,Ie.enabled=q,Ie.autoUpdate=Q,Ie.needsUpdate=ee,Ie.type=Y}function Ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qe(P){const q=P.target;q.removeEventListener("dispose",qe),pt(q)}function pt(P){Kt(P),Ve.remove(P)}function Kt(P){const q=Ve.get(P).programs;q!==void 0&&(q.forEach(function(Q){Ge.releaseProgram(Q)}),P.isShaderMaterial&&Ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,Q,ee,Y,ge){q===null&&(q=kt);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=Oo(P,q,Q,ee,Y);Fe.setMaterial(ee,Me);let Ne=Q.index,et=1;if(ee.wireframe===!0){if(Ne=j.getWireframeAttribute(Q),Ne===void 0)return;et=2}const tt=Q.drawRange,Xe=Q.attributes.position;let yt=tt.start*et,Tt=(tt.start+tt.count)*et;ge!==null&&(yt=Math.max(yt,ge.start*et),Tt=Math.min(Tt,(ge.start+ge.count)*et)),Ne!==null?(yt=Math.max(yt,0),Tt=Math.min(Tt,Ne.count)):Xe!=null&&(yt=Math.max(yt,0),Tt=Math.min(Tt,Xe.count));const Vt=Tt-yt;if(Vt<0||Vt===1/0)return;Dt.setup(Y,ee,Ue,Q,Ne);let mt,ft=Le;if(Ne!==null&&(mt=pe.get(Ne),ft=xt,ft.setIndex(mt)),Y.isMesh)ee.wireframe===!0?(Fe.setLineWidth(ee.wireframeLinewidth*Ft()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(Y.isLine){let We=ee.linewidth;We===void 0&&(We=1),Fe.setLineWidth(We*Ft()),Y.isLineSegments?ft.setMode(H.LINES):Y.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else Y.isPoints?ft.setMode(H.POINTS):Y.isSprite&&ft.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ft.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const We=Y._multiDrawStarts,nn=Y._multiDrawCounts,Ct=Y._multiDrawCount,Sn=Ne?pe.get(Ne).bytesPerElement:1,wi=Ve.get(ee).currentProgram.getUniforms();for(let ln=0;ln<Ct;ln++)wi.setValue(H,"_gl_DrawID",ln),ft.render(We[ln]/Sn,nn[ln])}else if(Y.isInstancedMesh)ft.renderInstances(yt,Vt,Y.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,nn=Math.min(Q.instanceCount,We);ft.renderInstances(yt,Vt,nn)}else ft.render(yt,Vt)};function Pt(P,q,Q){P.transparent===!0&&P.side===gi&&P.forceSinglePass===!1?(P.side=Ln,P.needsUpdate=!0,Kr(P,q,Q),P.side=dr,P.needsUpdate=!0,Kr(P,q,Q),P.side=gi):Kr(P,q,Q)}this.compile=function(P,q,Q=null){Q===null&&(Q=P),g=vt.get(Q),g.init(q),D.push(g),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),P!==Q&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ee=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const Ue=ge[Me];Pt(Ue,Q,Y),ee.add(Ue)}else Pt(ge,Q,Y),ee.add(ge)}),D.pop(),g=null,ee},this.compileAsync=function(P,q,Q=null){const ee=this.compile(P,q,Q);return new Promise(Y=>{function ge(){if(ee.forEach(function(Me){Ve.get(Me).currentProgram.isReady()&&ee.delete(Me)}),ee.size===0){Y(P);return}setTimeout(ge,10)}ht.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Cn=null;function qn(P){Cn&&Cn(P)}function bi(){ti.stop()}function Ai(){ti.start()}const ti=new Dh;ti.setAnimationLoop(qn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(P){Cn=P,se.setAnimationLoop(P),P===null?ti.stop():ti.start()},se.addEventListener("sessionstart",bi),se.addEventListener("sessionend",Ai),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,q,B),g=vt.get(P,D.length),g.init(q),D.push(g),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix($e),ze=this.localClippingEnabled,ve=xe.init(this.clippingPlanes,ze),y=Oe.get(P,L.length),y.init(),L.push(y),se.enabled===!0&&se.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&qi(ge,q,-1/0,C.sortObjects)}qi(P,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ye,be),ot=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ot&&He.addToRenderList(y,P),this.info.render.frame++,ve===!0&&xe.beginShadows();const Q=g.state.shadowsArray;Ie.render(Q,P,q),ve===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,Y=y.transmissive;if(g.setupLights(),q.isArrayCamera){const ge=q.cameras;if(Y.length>0)for(let Me=0,Ue=ge.length;Me<Ue;Me++){const Ne=ge[Me];Ia(ee,Y,P,Ne)}ot&&He.render(P);for(let Me=0,Ue=ge.length;Me<Ue;Me++){const Ne=ge[Me];La(y,P,Ne,Ne.viewport)}}else Y.length>0&&Ia(ee,Y,P,q),ot&&He.render(P),La(y,P,q);B!==null&&d===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(C,P,q),Dt.resetDefaultState(),A=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],ve===!0&&xe.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function qi(P,q,Q,ee){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ue.intersectsSprite(P)){ee&&Ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4($e);const Me=oe.update(P),Ue=P.material;Ue.visible&&y.push(P,Me,Ue,Q,Ke.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ue.intersectsObject(P))){const Me=oe.update(P),Ue=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ke.copy(P.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ke.copy(Me.boundingSphere.center)),Ke.applyMatrix4(P.matrixWorld).applyMatrix4($e)),Array.isArray(Ue)){const Ne=Me.groups;for(let et=0,tt=Ne.length;et<tt;et++){const Xe=Ne[et],yt=Ue[Xe.materialIndex];yt&&yt.visible&&y.push(P,Me,yt,Q,Ke.z,Xe)}}else Ue.visible&&y.push(P,Me,Ue,Q,Ke.z,null)}}const ge=P.children;for(let Me=0,Ue=ge.length;Me<Ue;Me++)qi(ge[Me],q,Q,ee)}function La(P,q,Q,ee){const Y=P.opaque,ge=P.transmissive,Me=P.transparent;g.setupLightsView(Q),ve===!0&&xe.setGlobalState(C.clippingPlanes,Q),ee&&Fe.viewport(k.copy(ee)),Y.length>0&&Zr(Y,q,Q),ge.length>0&&Zr(ge,q,Q),Me.length>0&&Zr(Me,q,Q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ia(P,q,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new Xr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ca:Vi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ge=g.state.transmissionRenderTarget[ee.id],Me=ee.viewport||k;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const Ue=C.getRenderTarget();C.setRenderTarget(ge),C.getClearColor(le),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ot&&He.render(Q);const Ne=C.toneMapping;C.toneMapping=ur;const et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),ve===!0&&xe.setGlobalState(C.clippingPlanes,ee),Zr(P,Q,ee),U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge),ht.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Xe=0,yt=q.length;Xe<yt;Xe++){const Tt=q[Xe],Vt=Tt.object,mt=Tt.geometry,ft=Tt.material,We=Tt.group;if(ft.side===gi&&Vt.layers.test(ee.layers)){const nn=ft.side;ft.side=Ln,ft.needsUpdate=!0,qs(Vt,Q,ee,mt,ft,We),ft.side=nn,ft.needsUpdate=!0,tt=!0}}tt===!0&&(U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge))}C.setRenderTarget(Ue),C.setClearColor(le,he),et!==void 0&&(ee.viewport=et),C.toneMapping=Ne}function Zr(P,q,Q){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,ge=P.length;Y<ge;Y++){const Me=P[Y],Ue=Me.object,Ne=Me.geometry,et=ee===null?Me.material:ee,tt=Me.group;Ue.layers.test(Q.layers)&&qs(Ue,q,Q,Ne,et,tt)}}function qs(P,q,Q,ee,Y,ge){P.onBeforeRender(C,q,Q,ee,Y,ge),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(C,q,Q,ee,P,ge),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,C.renderBufferDirect(Q,q,ee,Y,P,ge),Y.side=dr,Y.needsUpdate=!0,C.renderBufferDirect(Q,q,ee,Y,P,ge),Y.side=gi):C.renderBufferDirect(Q,q,ee,Y,P,ge),P.onAfterRender(C,q,Q,ee,Y,ge)}function Kr(P,q,Q){q.isScene!==!0&&(q=kt);const ee=Ve.get(P),Y=g.state.lights,ge=g.state.shadowsArray,Me=Y.state.version,Ue=Ge.getParameters(P,Y.state,ge,q,Q),Ne=Ge.getProgramCacheKey(Ue);let et=ee.programs;ee.environment=P.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(P.isMeshStandardMaterial?Z:w).get(P.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",qe),et=new Map,ee.programs=et);let tt=et.get(Ne);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Me)return Ys(P,Ue),tt}else Ue.uniforms=Ge.getUniforms(P),P.onBeforeCompile(Ue,C),tt=Ge.acquireProgram(Ue,Ne),et.set(Ne,tt),ee.uniforms=Ue.uniforms;const Xe=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=xe.uniform),Ys(P,Ue),ee.needsLights=Na(P),ee.lightsStateVersion=Me,ee.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function Ua(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=_o.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Ys(P,q){const Q=Ve.get(P);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Oo(P,q,Q,ee,Y){q.isScene!==!0&&(q=kt),U.resetTextureUnits();const ge=q.fog,Me=ee.isMeshStandardMaterial?q.environment:null,Ue=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Os,Ne=(ee.isMeshStandardMaterial?Z:w).get(ee.envMap||Me),et=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,tt=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Q.morphAttributes.position,yt=!!Q.morphAttributes.normal,Tt=!!Q.morphAttributes.color;let Vt=ur;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ft=mt!==void 0?mt.length:0,We=Ve.get(ee),nn=g.state.lights;if(ve===!0&&(ze===!0||P!==R)){const cn=P===R&&ee.id===A;xe.setState(ee,P,cn)}let Ct=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==nn.state.version||We.outputColorSpace!==Ue||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isBatchedMesh&&We.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&We.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==Ne||ee.fog===!0&&We.fog!==ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==tt||We.morphTargets!==Xe||We.morphNormals!==yt||We.morphColors!==Tt||We.toneMapping!==Vt||We.morphTargetsCount!==ft)&&(Ct=!0):(Ct=!0,We.__version=ee.version);let Sn=We.currentProgram;Ct===!0&&(Sn=Kr(ee,q,Y));let wi=!1,ln=!1,ji=!1;const Bt=Sn.getUniforms(),Rn=We.uniforms;if(Fe.useProgram(Sn.program)&&(wi=!0,ln=!0,ji=!0),ee.id!==A&&(A=ee.id,ln=!0),wi||R!==P){Fe.buffers.depth.getReversed()?(Ae.copy(P.projectionMatrix),gm(Ae),vm(Ae),Bt.setValue(H,"projectionMatrix",Ae)):Bt.setValue(H,"projectionMatrix",P.projectionMatrix),Bt.setValue(H,"viewMatrix",P.matrixWorldInverse);const Jt=Bt.map.cameraPosition;Jt!==void 0&&Jt.setValue(H,Qe.setFromMatrixPosition(P.matrixWorld)),ut.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,ln=!0,ji=!0)}if(Y.isSkinnedMesh){Bt.setOptional(H,Y,"bindMatrix"),Bt.setOptional(H,Y,"bindMatrixInverse");const cn=Y.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Bt.setValue(H,"boneTexture",cn.boneTexture,U))}Y.isBatchedMesh&&(Bt.setOptional(H,Y,"batchingTexture"),Bt.setValue(H,"batchingTexture",Y._matricesTexture,U),Bt.setOptional(H,Y,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",Y._indirectTexture,U),Bt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",Y._colorsTexture,U));const Ht=Q.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Ye.update(Y,Q,Sn),(ln||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Bt.setValue(H,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Rn.envMap.value=Ne,Rn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),ln&&(Bt.setValue(H,"toneMappingExposure",C.toneMappingExposure),We.needsLights&&Yi(Rn,ji),ge&&ee.fog===!0&&we.refreshFogUniforms(Rn,ge),we.refreshMaterialUniforms(Rn,ee,ie,ce,g.state.transmissionRenderTarget[P.id]),_o.upload(H,Ua(We),Rn,U)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(_o.upload(H,Ua(We),Rn,U),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Bt.setValue(H,"center",Y.center),Bt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Bt.setValue(H,"normalMatrix",Y.normalMatrix),Bt.setValue(H,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const cn=ee.uniformsGroups;for(let Jt=0,Zs=cn.length;Jt<Zs;Jt++){const Ci=cn[Jt];X.update(Ci,Sn),X.bind(Ci,Sn)}}return Sn}function Yi(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Na(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return d},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,q,Q){Ve.get(P.texture).__webglTexture=q,Ve.get(P.depthTexture).__webglTexture=Q;const ee=Ve.get(P);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const Q=Ve.get(P);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};const js=H.createFramebuffer();this.setRenderTarget=function(P,q=0,Q=0){B=P,O=q,d=Q;let ee=!0,Y=null,ge=!1,Me=!1;if(P){const Ne=Ve.get(P);if(Ne.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(Ne.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Ne.__hasExternalTextures)U.rebindTextures(P,Ve.get(P.texture).__webglTexture,Ve.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(Ne.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const et=P.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const tt=Ve.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?Y=tt[q][Q]:Y=tt[q],ge=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Y=Ve.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[Q]:Y=tt,k.copy(P.viewport),ne.copy(P.scissor),W=P.scissorTest}else k.copy(Be).multiplyScalar(ie).floor(),ne.copy(Ze).multiplyScalar(ie).floor(),W=Et;if(Q!==0&&(Y=js),Fe.bindFramebuffer(H.FRAMEBUFFER,Y)&&ee&&Fe.drawBuffers(P,Y),Fe.viewport(k),Fe.scissor(ne),Fe.setScissorTest(W),ge){const Ne=Ve.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,Q)}else if(Me){const Ne=Ve.get(P.texture),et=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,Q,et)}else if(P!==null&&Q!==0){const Ne=Ve.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,Q)}A=-1},this.readRenderTargetPixels=function(P,q,Q,ee,Y,ge,Me){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue){Fe.bindFramebuffer(H.FRAMEBUFFER,Ue);try{const Ne=P.texture,et=Ne.format,tt=Ne.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ee&&Q>=0&&Q<=P.height-Y&&H.readPixels(q,Q,ee,Y,it.convert(et),it.convert(tt),ge)}finally{const Ne=B!==null?Ve.get(B).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(P,q,Q,ee,Y,ge,Me){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue){const Ne=P.texture,et=Ne.format,tt=Ne.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-ee&&Q>=0&&Q<=P.height-Y){Fe.bindFramebuffer(H.FRAMEBUFFER,Ue);const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,ge.byteLength,H.STREAM_READ),H.readPixels(q,Q,ee,Y,it.convert(et),it.convert(tt),0);const yt=B!==null?Ve.get(B).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,yt);const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _m(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ge),H.deleteBuffer(Xe),H.deleteSync(Tt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,q=null,Q=0){P.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const ee=Math.pow(2,-Q),Y=Math.floor(P.image.width*ee),ge=Math.floor(P.image.height*ee),Me=q!==null?q.x:0,Ue=q!==null?q.y:0;U.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,Me,Ue,Y,ge),Fe.unbindTexture()};const $s=H.createFramebuffer(),Jr=H.createFramebuffer();this.copyTextureToTexture=function(P,q,Q=null,ee=null,Y=0,ge=null){P.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,P=arguments[1],q=arguments[2],ge=arguments[3]||0,Q=null),ge===null&&(Y!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=Y,Y=0):ge=0);let Me,Ue,Ne,et,tt,Xe,yt,Tt,Vt;const mt=P.isCompressedTexture?P.mipmaps[ge]:P.image;if(Q!==null)Me=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,tt=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const Ht=Math.pow(2,-Y);Me=Math.floor(mt.width*Ht),Ue=Math.floor(mt.height*Ht),P.isDataArrayTexture?Ne=mt.depth:P.isData3DTexture?Ne=Math.floor(mt.depth*Ht):Ne=1,et=0,tt=0,Xe=0}ee!==null?(yt=ee.x,Tt=ee.y,Vt=ee.z):(yt=0,Tt=0,Vt=0);const ft=it.convert(q.format),We=it.convert(q.type);let nn;q.isData3DTexture?(U.setTexture3D(q,0),nn=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),nn=H.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),nn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Ct=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),wi=H.getParameter(H.UNPACK_SKIP_PIXELS),ln=H.getParameter(H.UNPACK_SKIP_ROWS),ji=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Bt=P.isDataArrayTexture||P.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const Ht=Ve.get(P),cn=Ve.get(q),Jt=Ve.get(Ht.__renderTarget),Zs=Ve.get(cn.__renderTarget);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Ci=0;Ci<Ne;Ci++)Bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(P).__webglTexture,Y,Xe+Ci),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,ge,Vt+Ci)),H.blitFramebuffer(et,tt,Me,Ue,yt,Tt,Me,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||Ve.has(P)){const Ht=Ve.get(P),cn=Ve.get(q);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,$s),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jr);for(let Jt=0;Jt<Ne;Jt++)Bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.__webglTexture,Y,Xe+Jt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ht.__webglTexture,Y),Rn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,ge,Vt+Jt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,ge),Y!==0?H.blitFramebuffer(et,tt,Me,Ue,yt,Tt,Me,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Rn?H.copyTexSubImage3D(nn,ge,yt,Tt,Vt+Jt,et,tt,Me,Ue):H.copyTexSubImage2D(nn,ge,yt,Tt,et,tt,Me,Ue);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rn?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(nn,ge,yt,Tt,Vt,Me,Ue,Ne,ft,We,mt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(nn,ge,yt,Tt,Vt,Me,Ue,Ne,ft,mt.data):H.texSubImage3D(nn,ge,yt,Tt,Vt,Me,Ue,Ne,ft,We,mt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ge,yt,Tt,Me,Ue,ft,We,mt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ge,yt,Tt,mt.width,mt.height,ft,mt.data):H.texSubImage2D(H.TEXTURE_2D,ge,yt,Tt,Me,Ue,ft,We,mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wi),H.pixelStorei(H.UNPACK_SKIP_ROWS,ln),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ji),ge===0&&q.generateMipmaps&&H.generateMipmap(nn),Fe.unbindTexture()},this.copyTextureToTexture3D=function(P,q,Q=null,ee=null,Y=0){return P.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,P=arguments[2],q=arguments[3],Y=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,q,Q,ee,Y)},this.initRenderTarget=function(P){Ve.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Fe.unbindTexture()},this.resetState=function(){O=0,d=0,B=null,Fe.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}var pa=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===h?"block":"none";r=h}var i=(performance||Date).now(),s=i,o=0,l=t(new pa.Panel("FPS","#0ff","#002")),u=t(new pa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new pa.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(u.update(h-i,200),h>=s+1e3&&(l.update(o*1e3/(h-s),100),s=h,o=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};pa.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),l=80*o,u=48*o,f=3*o,h=2*o,m=3*o,_=15*o,x=74*o,M=30*o,S=document.createElement("canvas");S.width=l,S.height=u,S.style.cssText="width:80px;height:48px";var y=S.getContext("2d");return y.font="bold "+9*o+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,l,u),y.fillStyle=e,y.fillText(r,f,h),y.fillRect(m,_,x,M),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m,_,x,M),{dom:S,update:function(g,L){n=Math.min(n,g),i=Math.max(i,g),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,l,_),y.fillStyle=e,y.fillText(s(g)+" "+r+" ("+s(n)+"-"+s(i)+")",f,h),y.drawImage(S,m+o,_,x-o,M,m,_,x-o,M),y.fillRect(m+x-o,_,o,M),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(m+x-o,_,o,s((1-g/L)*M))}}};let Bx;const Al=[];function zx(){}function kx(r,e){if(r.children.length>0){const t=[r.children[1],r.children[0]];r.remove(t[0]),r.remove(t[1]),wl(t[0],e),wl(t[1],e)}else wl(r,e)}function Hx(r=0){if(Al[r])return Al[r];const e=new An([]);e.format=Us,e.flipY=!1;const t=[{file:"/assets/img/skin.jpg",size:1024,glow:.2}];if(r<0||r>=t.length)return console.error(`Index ${r} invalide pour envMaps. Retourne une texture cube vide.`),e;const{file:n,size:i}=t[r];return new jm().load(n,o=>{const l=(u,f)=>{const h=document.createElement("canvas");return h.width=i,h.height=i,h.getContext("2d").drawImage(o,-u*i,-f*i),h};e.image[0]=l(2,1),e.image[1]=l(0,1),e.image[2]=l(1,0),e.image[3]=l(1,2),e.image[4]=l(1,1),e.image[5]=l(3,1),e.needsUpdate=!0}),Al[r]=e,e}function wl(r,e){var n;if(r.geometry&&r.geometry.dispose(),!r.material)return;let t=r.material.map;!t&&r.material.materials&&(t=(n=r.material.materials[1])==null?void 0:n.map),t&&e&&(t.needsUpdate=!1,t.dispose(),t.image=null,t=null),r.material.materials&&(r.material.materials.forEach(i=>i.dispose()),r.material.materials.length=0),r.material.dispose&&r.material.dispose(),r.material=null,r.geometry=null,t=null}function Gx(){return Bx}const Tc={init:zx,getTextureCube:Gx,destroy:kx,getCubeMap:Hx};function Fi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Oh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},tu,pn,Gt,Si=1e8,xn=1/Si,bc=Math.PI*2,Vx=bc/4,Wx=0,Fh=Math.sqrt,Xx=Math.cos,qx=Math.sin,fn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},nu=function(e){return typeof e>"u"},Ti=function(e){return typeof e=="object"},In=function(e){return e!==!1},iu=function(){return typeof window<"u"},oo=function(e){return jt(e)||fn(e)},Bh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yn=Array.isArray,Ac=/(?:-?\.?\d|\.)+/gi,zh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kh=/[+-]=-?[.\d]+/,Hh=/[^,'"\[\]\s]+/gi,Yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,mi,wc,ru,Wn={},Mo={},Gh,Vh=function(e){return(Mo=zs(e,Wn))&&Fn},su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sa=function(e,t){return!t&&console.warn(e)},Wh=function(e,t){return e&&(Wn[e]=t)&&Mo&&(Mo[e]=t)||Wn},Ma=function(){return 0},jx={suppressEvents:!0,isStart:!0,kill:!1},go={suppressEvents:!0,kill:!1},$x={suppressEvents:!0},au={},fr=[],Cc={},Xh,kn={},Rl={},If=30,vo=[],ou="",lu=function(e){var t=e[0],n,i;if(Ti(t)||jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=vo.length;i--&&!vo[i].targetTest(t););n=vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new md(e[i],n)))||e.splice(i,1);return e},kr=function(e){return e._gsap||lu(ei(e))[0]._gsap},qh=function(e,t,n){return(n=e[t])&&jt(n)?e[t]():nu(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},tn=function(e){return Math.round(e*1e7)/1e7||0},As=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Eo=function(){var e=fr.length,t=fr.slice(0),n,i;for(Cc={},fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yh=function(e,t,n,i){fr.length&&!pn&&Eo(),e.render(t,n,pn&&t<0&&(e._initted||e._startAt)),fr.length&&!pn&&Eo()},jh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hh).length<2?t:fn(e)?e.trim():e},$h=function(e){return e},Xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Kx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},zs=function(e,t){for(var n in t)e[n]=t[n];return e},Uf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ti(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},To=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ma=function(e){var t=e.parent||Wt,n=e.keyframes?Kx(yn(e.keyframes)):Xn;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zh=function(e,t,n,i,s){var o=e[i],l;if(s)for(l=t[s];o&&o[s]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Io=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rc=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ey=function r(e){return!e||e._ts&&r(e.parent)},Nf=function(e){return e._repeat?ks(e._tTime,e=e.duration()+e._rDelay)*e:0},ks=function(e,t){var n=Math.floor(e=tn(e/t));return e&&n===e?n-1:n},bo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Uo=function(e){return e._end=tn(e._start+(e._tDur/Math.abs(e._ts||e._rts||xn)||0))},No=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=tn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Uo(e),n._dirty||Hr(n,e)),e},Kh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=bo(e.rawTime(),t),(!t._dur||Da(0,t.totalDuration(),n)-t._tTime>xn)&&t.render(n,!0)),Hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},vi=function(e,t,n,i){return t.parent&&mr(t),t._start=tn((Wi(n)?n:n||e!==Wt?Zn(e,n,t):e._time)+t._delay),t._end=tn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zh(e,t,"_first","_last",e._sort?"_start":0),Pc(t)||(e._recent=t),i||Kh(e,t),e._ts<0&&No(e,e._tTime),e},Jh=function(e,t){return(Wn.ScrollTrigger||su("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Qh=function(e,t,n,i,s){if(uu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xh!==Hn.frame)return fr.push(e),e._lazy=[s,i],1},ty=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Pc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ny=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ty(e)&&!(!e._initted&&Pc(e))||(e._ts<0||e._dp._ts<0)&&!Pc(e))?0:1,l=e._rDelay,u=0,f,h,m;if(l&&e._repeat&&(u=Da(0,e._tDur,t),h=ks(u,l),e._yoyo&&h&1&&(o=1-o),h!==ks(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||pn||i||e._zTime===xn||!t&&e._zTime){if(!e._initted&&Qh(e,t,i,n,u))return;for(m=e._zTime,e._zTime=t||(n?xn:0),n||(n=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,f=e._pt;f;)f.r(o,f.d),f=f._next;t<0&&Rc(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&mr(e,1),!n&&!pn&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,o=tn(t)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:tn(o*(s+1)+e._rDelay*s):o,l>0&&!i&&No(e,e._tTime=e._tDur*l),e.parent&&Uo(e),n||Hr(e.parent,e),e},Of=function(e){return e instanceof bn?Hr(e):Hs(e,e._dur)},ry={_start:0,endTime:Ma,totalDuration:Ma},Zn=function r(e,t,n){var i=e.labels,s=e._recent||ry,o=e.duration()>=Si?s.endTime(!1):e._dur,l,u,f;return fn(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?s:n).totalDuration()/100:1)):l<0?(t in i||(i[t]=o),i[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&n&&(u=u/100*(yn(n)?n[0]:n).totalDuration()),l>1?r(e,t.substr(0,l-1),n)+u:o+u)):t==null?o:+t},_a=function(e,t,n){var i=Wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],l,u;if(i&&(o.duration=t[1]),o.parent=n,e){for(l=o,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=In(u.vars.inherit)&&u.parent;o.immediateRender=In(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},xr=function(e,t){return e||e===0?t(e):t},Da=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!fn(e)||!(t=Yx.exec(e))?"":t[1]},sy=function(e,t,n){return xr(n,function(i){return Da(e,t,i)})},Dc=[].slice,ed=function(e,t){return e&&Ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ti(e[0]))&&!e.nodeType&&e!==mi},ay=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||ed(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return Gt&&!t&&Gt.selector?Gt.selector(e):fn(e)&&!n&&(wc||!Gs())?Dc.call((t||ru).querySelectorAll(e),0):yn(e)?ay(e,n):ed(e)?Dc.call(e,0):e?[e]:[]},Lc=function(e){return e=ei(e)[0]||Sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Sa("Invalid scope")||ru.createElement("div"):e)}},td=function(e){return e.sort(function(){return .5-Math.random()})},nd=function(e){if(jt(e))return e;var t=Ti(e)?e:{each:e},n=Gr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},l=i>0&&i<1,u=isNaN(i)||l,f=t.axis,h=i,m=i;return fn(i)?h=m={center:.5,edges:.5,end:1}[i]||0:!l&&u&&(h=i[0],m=i[1]),function(_,x,M){var S=(M||t).length,y=o[S],g,L,D,C,N,O,d,B,A;if(!y){if(A=t.grid==="auto"?0:(t.grid||[1,Si])[1],!A){for(d=-1e8;d<(d=M[A++].getBoundingClientRect().left)&&A<S;);A<S&&A--}for(y=o[S]=[],g=u?Math.min(A,S)*h-.5:i%A,L=A===Si?0:u?S*m/A-.5:i/A|0,d=0,B=Si,O=0;O<S;O++)D=O%A-g,C=L-(O/A|0),y[O]=N=f?Math.abs(f==="y"?C:D):Fh(D*D+C*C),N>d&&(d=N),N<B&&(B=N);i==="random"&&td(y),y.max=d-B,y.min=B,y.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(A>S?S-1:f?f==="y"?S/A:A:Math.max(A,S/A))||0)*(i==="edges"?-1:1),y.b=S<0?s-S:s,y.u=vn(t.amount||t.each)||0,n=n&&S<0?hd(n):n}return S=(y[_]-y.min)/y.max||0,tn(y.b+(n?n(S):S)*y.v)+y.u}},Ic=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=tn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:vn(n))}},id=function(e,t){var n=yn(e),i,s;return!n&&Ti(e)&&(i=n=e.radius||Si,e.values?(e=ei(e.values),(s=!Wi(e[0]))&&(i*=i)):e=Ic(e.increment)),xr(t,n?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var l=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),f=Si,h=0,m=e.length,_,x;m--;)s?(_=e[m].x-l,x=e[m].y-u,_=_*_+x*x):_=Math.abs(e[m]-l),_<f&&(f=_,h=m);return h=!i||f<=i?e[h]:o,s||h===o||Wi(o)?h:h+vn(o)}:Ic(e))},rd=function(e,t,n,i){return xr(yn(e)?!t:n===!0?!!(n=0):!i,function(){return yn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},oy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},ly=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},cy=function(e,t,n){return ad(e,t,0,1,n)},sd=function(e,t,n){return xr(n,function(i){return e[~~t(i)]})},uy=function r(e,t,n){var i=t-e;return yn(e)?sd(e,r(0,e.length),t):xr(n,function(s){return(i+(s-e)%i)%i+e})},fy=function r(e,t,n){var i=t-e,s=i*2;return yn(e)?sd(e,r(0,e.length-1),t):xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ea=function(e){for(var t=0,n="",i,s,o,l;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),l=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(l?Hh:Ac),n+=e.substr(t,i-t)+rd(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ad=function(e,t,n,i,s){var o=t-e,l=i-n;return xr(s,function(u){return n+((u-e)/o*l||0)})},hy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!s){var o=fn(e),l={},u,f,h,m,_;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(yn(e)&&!yn(t)){for(h=[],m=e.length,_=m-2,f=1;f<m;f++)h.push(r(e[f-1],e[f]));m--,s=function(M){M*=m;var S=Math.min(_,~~M);return h[S](M-S)},n=t}else i||(e=zs(yn(e)?[]:{},e));if(!h){for(u in t)cu.call(l,e,u,"get",t[u]);s=function(M){return du(M,l)||(o?e.p:e)}}}return xr(n,s)},Ff=function(e,t,n){var i=e.labels,s=Si,o,l,u;for(o in i)l=i[o]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=o,s=l);return u},Gn=function(e,t,n){var i=e.vars,s=i[t],o=Gt,l=e._ctx,u,f,h;if(s)return u=i[t+"Params"],f=i.callbackScope||e,n&&fr.length&&Eo(),l&&(Gt=l),h=u?s.apply(f,u):s.call(f),Gt=o,h},ca=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&Gn(e,"onInterrupt"),e},Ss,od=[],ld=function(e){if(e)if(e=!e.name&&e.default||e,iu()||e.headless){var t=e.name,n=jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ma,render:du,add:cu,kill:Cy,modifier:wy,rawVars:0},o={targetTest:0,get:0,getSetter:hu,aliases:{},register:0};if(Gs(),e!==i){if(kn[t])return;Xn(i,Xn(To(e,s),o)),zs(i.prototype,zs(s,To(e,o))),kn[i.prop=t]=i,e.targetTest&&(vo.push(i),au[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wh(t,i),e.register&&e.register(Fn,i,Nn)}else od.push(e)},Ot=255,ua={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},cd=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&Ot,e&Ot]:0:ua.black,s,o,l,u,f,h,m,_,x,M;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ua[e])i=ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(i=M=e.match(Ac),!t)u=+i[0]%360/360,f=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(f+1):h+f-h*f,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pl(u+1/3,s,o),i[1]=Pl(u,s,o),i[2]=Pl(u-1/3,s,o);else if(~e.indexOf("="))return i=e.match(zh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ac)||ua.transparent;i=i.map(Number)}return t&&!M&&(s=i[0]/Ot,o=i[1]/Ot,l=i[2]/Ot,m=Math.max(s,o,l),_=Math.min(s,o,l),h=(m+_)/2,m===_?u=f=0:(x=m-_,f=h>.5?x/(2-m-_):x/(m+_),u=m===s?(o-l)/x+(o<l?6:0):m===o?(l-s)/x+2:(s-o)/x+4,u*=60),i[0]=~~(u+.5),i[1]=~~(f*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ud=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(s){var o=s.match(ys)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Bf=function(e,t,n){var i="",s=(e+i).match(hr),o=t?"hsla(":"rgba(",l=0,u,f,h,m;if(!s)return e;if(s=s.map(function(_){return(_=cd(_,t,1))&&o+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(h=ud(e),u=n.c,u.join(i)!==h.c.join(i)))for(f=e.replace(hr,"1").split(ys),m=f.length-1;l<m;l++)i+=f[l]+(~u.indexOf(l)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!f)for(f=e.split(hr),m=f.length-1;l<m;l++)i+=f[l]+s[l];return i+f[m]},hr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ua)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),dy=/hsl[a]?\(/,fd=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=dy.test(t),e[1]=Bf(e[1],n),e[0]=Bf(e[0],n,ud(e[1])),!0},Ta,Hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,l=[],u,f,h,m,_,x,M=function S(y){var g=r()-i,L=y===!0,D,C,N,O;if((g>e||g<0)&&(n+=g-t),i+=g,N=i-n,D=N-o,(D>0||L)&&(O=++m.frame,_=N-m.time*1e3,m.time=N=N/1e3,o+=D+(D>=s?4:s-D),C=1),L||(u=f(S)),C)for(x=0;x<l.length;x++)l[x](N,_,O,y)};return m={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){Gh&&(!wc&&iu()&&(mi=wc=window,ru=mi.document||{},Wn.gsap=Fn,(mi.gsapVersions||(mi.gsapVersions=[])).push(Fn.version),Vh(Mo||mi.GreenSockGlobals||!mi.gsap&&mi||{}),od.forEach(ld)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&m.sleep(),f=h||function(y){return setTimeout(y,o-m.time*1e3+1|0)},Ta=1,M(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(u),Ta=0,f=Ma},lagSmoothing:function(y,g){e=y||1/0,t=Math.min(g||33,e)},fps:function(y){s=1e3/(y||240),o=m.time*1e3+s},add:function(y,g,L){var D=g?function(C,N,O,d){y(C,N,O,d),m.remove(D)}:y;return m.remove(y),l[L?"unshift":"push"](D),Gs(),D},remove:function(y,g){~(g=l.indexOf(y))&&l.splice(g,1)&&x>=g&&x--},_listeners:l},m}(),Gs=function(){return!Ta&&Hn.wake()},Mt={},py=/^[\d.\-M][\d.\-,\s]/,my=/["']/g,_y=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,l,u,f;s<o;s++)u=n[s],l=s!==o-1?u.lastIndexOf(","):u.length,f=u.substr(0,l),t[i]=isNaN(f)?f.replace(my,"").trim():+f,i=u.substr(l+1).trim();return t},gy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},vy=function(e){var t=(e+"").split("("),n=Mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_y(t[1])]:gy(e).split(",").map(jh)):Mt._CE&&py.test(e)?Mt._CE("",e):n},hd=function(e){return function(t){return 1-e(1-t)}},dd=function r(e,t){for(var n=e._first,i;n;)n instanceof bn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Gr=function(e,t){return e&&(jt(e)?e:Mt[e]||vy(e))||t},$r=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Un(e,function(l){Mt[l]=Wn[l]=s,Mt[o=l.toLowerCase()]=n;for(var u in s)Mt[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Mt[l+"."+u]=s[u]}),s},pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/bc*(Math.asin(1/i)||0),l=function(h){return h===1?1:i*Math.pow(2,-10*h)*qx((h-o)*s)+1},u=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:pd(l);return s=bc/s,u.config=function(f,h){return r(e,f,h)},u},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pd(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$r(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Mt.Linear.easeNone=Mt.none=Mt.Linear.easeIn;$r("Elastic",Dl("in"),Dl("out"),Dl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(l){return l<t?r*l*l:l<n?r*Math.pow(l-1.5/e,2)+.75:l<i?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$r("Circ",function(r){return-(Fh(1-r*r)-1)});$r("Sine",function(r){return r===1?1:-Xx(r*Vx)+1});$r("Back",Ll("in"),Ll("out"),Ll());Mt.SteppedEase=Mt.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xn;return function(l){return((i*Da(0,o,l)|0)+s)*n}}};Bs.ease=Mt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ou+=r+","+r+"Params,"});var md=function(e,t){this.id=Wx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qh,this.set=t?t.getSetter:hu},ba=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Ta||Hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(No(this,n),!s._dp||s.parent||Kh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Da(-Math.abs(this._delay),this._tDur,s),i!==!1),Uo(this),Qx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xn&&(this._tTime-=xn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$x);var i=pn;return pn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Of(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=jt(n)?n:$h,l=function(){var f=i.then;i.then=null,jt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=f),s(o),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ca(this)},r}();Xn(ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var bn=function(r){Oh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),Wt&&vi(n.parent||Wt,Fi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jh(Fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _a(0,arguments,this),this},t.from=function(i,s,o){return _a(1,arguments,this),this},t.fromTo=function(i,s,o,l){return _a(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(i,s,Zn(this,o),1),this},t.call=function(i,s,o){return vi(this,en.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,l,u,f,h){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=f,o.onCompleteParams=h,o.parent=this,new en(i,o,Zn(this,u)),this},t.staggerFrom=function(i,s,o,l,u,f,h){return o.runBackwards=1,ma(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,l,u,f,h)},t.staggerFromTo=function(i,s,o,l,u,f,h,m){return l.startAt=o,ma(l).immediateRender=In(l.immediateRender),this.staggerTo(i,s,l,u,f,h,m)},t.render=function(i,s,o){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,f=this._dur,h=i<=0?0:tn(i),m=this._zTime<0!=i<0&&(this._initted||!f),_,x,M,S,y,g,L,D,C,N,O,d;if(this!==Wt&&h>u&&i>=0&&(h=u),h!==this._tTime||o||m){if(l!==this._time&&f&&(h+=this._time-l,i+=this._time-l),_=h,C=this._start,D=this._ts,g=!D,m&&(f||(l=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(O=this._yoyo,y=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(y*100+i,s,o);if(_=tn(h%y),h===u?(S=this._repeat,_=f):(N=tn(h/y),S=~~N,S&&S===N&&(_=f,S--),_>f&&(_=f)),N=ks(this._tTime,y),!l&&this._tTime&&N!==S&&this._tTime-N*y-this._dur<=0&&(N=S),O&&S&1&&(_=f-_,d=1),S!==N&&!this._lock){var B=O&&N&1,A=B===(O&&S&1);if(S<N&&(B=!B),l=B?0:h%f?f:h,this._lock=1,this.render(l||(d?0:tn(S*y)),s,!f)._lock=0,this._tTime=h,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!d&&(this.invalidate()._lock=1),l&&l!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,u=this._tDur,A&&(this._lock=2,l=B?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!d&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;dd(this,d)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=iy(this,tn(l),tn(_)),L&&(h-=_-(_=L._start))),this._tTime=h,this._time=_,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&_&&!s&&!S&&(Gn(this,"onStart"),this._tTime!==h))return this;if(_>=l&&i>=0)for(x=this._first;x;){if(M=x._next,(x._act||_>=x._start)&&x._ts&&L!==x){if(x.parent!==this)return this.render(i,s,o);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,s,o),_!==this._time||!this._ts&&!g){L=0,M&&(h+=this._zTime=-1e-8);break}}x=M}else{x=this._last;for(var R=i<0?i:_;x;){if(M=x._prev,(x._act||R<=x._end)&&x._ts&&L!==x){if(x.parent!==this)return this.render(i,s,o);if(x.render(x._ts>0?(R-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(R-x._start)*x._ts,s,o||pn&&(x._initted||x._startAt)),_!==this._time||!this._ts&&!g){L=0,M&&(h+=this._zTime=R?-1e-8:xn);break}}x=M}}if(L&&!s&&(this.pause(),L.render(_>=l?0:-1e-8)._zTime=_>=l?1:-1,this._ts))return this._start=C,Uo(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(h===u&&this._tTime>=this.totalDuration()||!h&&l)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(h===u&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(i<0&&!l)&&(h||l||!u)&&(Gn(this,h===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wi(s)||(s=Zn(this,s,i)),!(i instanceof ba)){if(yn(i))return i.forEach(function(l){return o.add(l,s)}),this;if(fn(i))return this.addLabel(i,s);if(jt(i))i=en.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},t.getChildren=function(i,s,o,l){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-1e8);for(var u=[],f=this._first;f;)f._start>=l&&(f instanceof en?s&&u.push(f):(o&&u.push(f),i&&u.push.apply(u,f.getChildren(!0,s,o)))),f=f._next;return u},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):jt(i)?this.killTweensOf(i):(i.parent===this&&Io(this,i),i===this._recent&&(this._recent=this._last),Hr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var l=en.delayedCall(0,s||Ma,o);return l.data="isPause",this._hasPause=1,vi(this,l,Zn(this,i))},t.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&mr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var l=this.getTweensOf(i,o),u=l.length;u--;)ar!==l[u]&&l[u].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],l=ei(i),u=this._first,f=Wi(s),h;u;)u instanceof en?Zx(u._targets,l)&&(f?(!ar||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(h=u.getTweensOf(l,s)).length&&o.push.apply(o,h),u=u._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,l=Zn(o,i),u=s,f=u.startAt,h=u.onStart,m=u.onStartParams,_=u.immediateRender,x,M=en.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale())||xn,onStart:function(){if(o.pause(),!x){var y=s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale());M._dur!==y&&Hs(M,y,0,1).render(M._time,!0,!0),x=1}h&&h.apply(M,m||[])}},s));return _?M.render(0):M},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xn({startAt:{time:Zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ff(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ff(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var l=this._first,u=this.labels,f;l;)l._start>=o&&(l._start+=i,l._end+=i),l=l._next;if(s)for(f in u)u[f]>=o&&(u[f]+=i);return Hr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hr(this)},t.totalDuration=function(i){var s=0,o=this,l=o._last,u=Si,f,h,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(m=o.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>u&&o._sort&&l._ts&&!o._lock?(o._lock=1,vi(o,l,h-l._delay,1)._lock=0):u=h,h<0&&l._ts&&(s-=h,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=f;Hs(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Wt._ts&&(Yh(Wt,bo(i,Wt)),Xh=Hn.frame),Hn.frame>=If){If+=Vn.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Vn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},e}(ba);Xn(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var xy=function(e,t,n,i,s,o,l){var u=new Nn(this._pt,e,t,0,1,Sd,null,s),f=0,h=0,m,_,x,M,S,y,g,L;for(u.b=n,u.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ea(i)),o&&(L=[n,i],o(L,e,t),n=L[0],i=L[1]),_=n.match(Cl)||[];m=Cl.exec(i);)M=m[0],S=i.substring(f,m.index),x?x=(x+1)%5:S.substr(-5)==="rgba("&&(x=1),M!==_[h++]&&(y=parseFloat(_[h-1])||0,u._pt={_next:u._pt,p:S||h===1?S:",",s:y,c:M.charAt(1)==="="?As(y,M)-y:parseFloat(M)-y,m:x&&x<4?Math.round:0},f=Cl.lastIndex);return u.c=f<i.length?i.substring(f,i.length):"",u.fp=l,(kh.test(i)||g)&&(u.e=0),this._pt=u,u},cu=function(e,t,n,i,s,o,l,u,f,h){jt(i)&&(i=i(s||0,e,o));var m=e[t],_=n!=="get"?n:jt(m)?f?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():m,x=jt(m)?f?Ty:xd:fu,M;if(fn(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(M=As(_,i)+(vn(_)||0),(M||M===0)&&(i=M))),!h||_!==i||Uc)return!isNaN(_*i)&&i!==""?(M=new Nn(this._pt,e,t,+_||0,i-(_||0),typeof m=="boolean"?Ay:yd,0,x),f&&(M.fp=f),l&&M.modifier(l,this,e),this._pt=M):(!m&&!(t in e)&&su(t,i),xy.call(this,e,t,_,i,x,u||Vn.stringFilter,f))},yy=function(e,t,n,i,s){if(jt(e)&&(e=ga(e,s,t,n,i)),!Ti(e)||e.style&&e.nodeType||yn(e)||Bh(e))return fn(e)?ga(e,s,t,n,i):e;var o={},l;for(l in e)o[l]=ga(e[l],s,t,n,i);return o},_d=function(e,t,n,i,s,o){var l,u,f,h;if(kn[e]&&(l=new kn[e]).init(s,l.rawVars?t[e]:yy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=u=new Nn(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==Ss))for(f=n._ptLookup[n._targets.indexOf(s)],h=l._props.length;h--;)f[l._props[h]]=u;return l},ar,Uc,uu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,l=i.immediateRender,u=i.lazy,f=i.onUpdate,h=i.runBackwards,m=i.yoyoEase,_=i.keyframes,x=i.autoRevert,M=e._dur,S=e._startAt,y=e._targets,g=e.parent,L=g&&g.data==="nested"?g.vars.targets:y,D=e._overwrite==="auto"&&!tu,C=e.timeline,N,O,d,B,A,R,k,ne,W,le,he,ae,ce;if(C&&(!_||!s)&&(s="none"),e._ease=Gr(s,Bs.ease),e._yEase=m?hd(Gr(m===!0?s:m,Bs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!i.runBackwards,!C||_&&!i.stagger){if(ne=y[0]?kr(y[0]).harness:0,ae=ne&&i[ne.prop],N=To(i,au),S&&(S._zTime<0&&S.progress(1),t<0&&h&&l&&!x?S.render(-1,!0):S.revert(h&&M?go:jx),S._lazy=0),o){if(mr(e._startAt=en.set(y,Xn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!S&&In(u),startAt:null,delay:0,onUpdate:f&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!l&&!x)&&e._startAt.revert(go),l&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&M&&!S){if(t&&(l=!1),d=Xn({overwrite:!1,data:"isFromStart",lazy:l&&!S&&In(u),immediateRender:l,stagger:0,parent:g},N),ae&&(d[ne.prop]=ae),mr(e._startAt=en.set(y,d)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(go):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,xn,xn);else if(!t)return}for(e._pt=e._ptCache=0,u=M&&In(u)||u&&!M,O=0;O<y.length;O++){if(A=y[O],k=A._gsap||lu(y)[O]._gsap,e._ptLookup[O]=le={},Cc[k.id]&&fr.length&&Eo(),he=L===y?O:L.indexOf(A),ne&&(W=new ne).init(A,ae||N,e,he,L)!==!1&&(e._pt=B=new Nn(e._pt,A,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ie){le[ie]=B}),W.priority&&(R=1)),!ne||ae)for(d in N)kn[d]&&(W=_d(d,N,e,he,A,L))?W.priority&&(R=1):le[d]=B=cu.call(e,A,d,"get",N[d],he,L,0,i.stringFilter);e._op&&e._op[O]&&e.kill(A,e._op[O]),D&&e._pt&&(ar=e,Wt.killTweensOf(A,le,e.globalTime(t)),ce=!e.parent,ar=0),e._pt&&u&&(Cc[k.id]=1)}R&&Md(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!ce,_&&t<=0&&C.render(Si,!0,!0)},Sy=function(e,t,n,i,s,o,l,u){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,m,_,x;if(!f)for(f=e._ptCache[t]=[],_=e._ptLookup,x=e._targets.length;x--;){if(h=_[x][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Uc=1,e.vars[t]="+=0",uu(e,l),Uc=0,u?Sa(t+" not eligible for reset"):1;f.push(h)}for(x=f.length;x--;)m=f[x],h=m._pt||m,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,m.e&&(m.e=Zt(n)+vn(m.e)),m.b&&(m.b=h.s+vn(m.b))},My=function(e,t){var n=e[0]?kr(e[0]).harness:0,i=n&&n.aliases,s,o,l,u;if(!i)return t;s=zs({},t);for(o in i)if(o in s)for(u=i[o].split(","),l=u.length;l--;)s[u[l]]=s[o];return s},Ey=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,l;if(yn(t))l=n[e]||(n[e]=[]),t.forEach(function(u,f){return l.push({t:f/(t.length-1)*100,v:u,e:s})});else for(o in t)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:s})},ga=function(e,t,n,i,s){return jt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?Ea(e):e},gd=ou+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vd={};Un(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vd[r]=1});var en=function(r){Oh(e,r);function e(n,i,s,o){var l;typeof i=="number"&&(s.duration=i,i=s,s=null),l=r.call(this,o?i:ma(i))||this;var u=l.vars,f=u.duration,h=u.delay,m=u.immediateRender,_=u.stagger,x=u.overwrite,M=u.keyframes,S=u.defaults,y=u.scrollTrigger,g=u.yoyoEase,L=i.parent||Wt,D=(yn(n)||Bh(n)?Wi(n[0]):"length"in i)?[n]:ei(n),C,N,O,d,B,A,R,k;if(l._targets=D.length?lu(D):Sa("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=x,M||_||oo(f)||oo(h)){if(i=l.vars,C=l.timeline=new bn({data:"nested",defaults:S||{},targets:L&&L.data==="nested"?L.vars.targets:D}),C.kill(),C.parent=C._dp=Fi(l),C._start=0,_||oo(f)||oo(h)){if(d=D.length,R=_&&nd(_),Ti(_))for(B in _)~gd.indexOf(B)&&(k||(k={}),k[B]=_[B]);for(N=0;N<d;N++)O=To(i,vd),O.stagger=0,g&&(O.yoyoEase=g),k&&zs(O,k),A=D[N],O.duration=+ga(f,Fi(l),N,A,D),O.delay=(+ga(h,Fi(l),N,A,D)||0)-l._delay,!_&&d===1&&O.delay&&(l._delay=h=O.delay,l._start+=h,O.delay=0),C.to(A,O,R?R(N,A,D):0),C._ease=Mt.none;C.duration()?f=h=0:l.timeline=0}else if(M){ma(Xn(C.vars.defaults,{ease:"none"})),C._ease=Gr(M.ease||i.ease||"none");var ne=0,W,le,he;if(yn(M))M.forEach(function(ae){return C.to(D,ae,">")}),C.duration();else{O={};for(B in M)B==="ease"||B==="easeEach"||Ey(B,M[B],O,M.easeEach);for(B in O)for(W=O[B].sort(function(ae,ce){return ae.t-ce.t}),ne=0,N=0;N<W.length;N++)le=W[N],he={ease:le.e,duration:(le.t-(N?W[N-1].t:0))/100*f},he[B]=le.v,C.to(D,he,ne),ne+=he.duration;C.duration()<f&&C.to({},{duration:f-C.duration()})}}f||l.duration(f=C.duration())}else l.timeline=0;return x===!0&&!tu&&(ar=Fi(l),Wt.killTweensOf(D),ar=0),vi(L,Fi(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(m||!f&&!M&&l._start===tn(L._time)&&In(m)&&ey(Fi(l))&&L.data!=="nested")&&(l._tTime=-1e-8,l.render(Math.max(0,-h)||0)),y&&Jh(Fi(l),y),l}var t=e.prototype;return t.render=function(i,s,o){var l=this._time,u=this._tDur,f=this._dur,h=i<0,m=i>u-xn&&!h?u:i<xn?0:i,_,x,M,S,y,g,L,D,C;if(!f)ny(this,i,s,o);else if(m!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(_=m,D=this.timeline,this._repeat){if(S=f+this._rDelay,this._repeat<-1&&h)return this.totalTime(S*100+i,s,o);if(_=tn(m%S),m===u?(M=this._repeat,_=f):(y=tn(m/S),M=~~y,M&&M===y?(_=f,M--):_>f&&(_=f)),g=this._yoyo&&M&1,g&&(C=this._yEase,_=f-_),y=ks(this._tTime,S),_===l&&!o&&this._initted&&M===y)return this._tTime=m,this;M!==y&&(D&&this._yEase&&dd(D,g),this.vars.repeatRefresh&&!g&&!this._lock&&_!==S&&this._initted&&(this._lock=o=1,this.render(tn(S*M),!0).invalidate()._lock=0))}if(!this._initted){if(Qh(this,h?i:_,o,s,m))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&M!==y))return this;if(f!==this._dur)return this.render(i,s,o)}if(this._tTime=m,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(C||this._ease)(_/f),this._from&&(this.ratio=L=1-L),_&&!l&&!s&&!M&&(Gn(this,"onStart"),this._tTime!==m))return this;for(x=this._pt;x;)x.r(L,x.d),x=x._next;D&&D.render(i<0?i:D._dur*D._ease(_/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Rc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&M!==y&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(h&&!this._onUpdate&&Rc(this,i,!0,!0),(i||!f)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&mr(this,1),!s&&!(h&&!l)&&(m||l||g)&&(Gn(this,m===u?"onComplete":"onReverseComplete",!0),this._prom&&!(m<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,l,u){Ta||Hn.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||uu(this,f),h=this._ease(f/this._dur),Sy(this,i,s,o,l,h,f,u)?this.resetTo(i,s,o,l,1):(No(this,0),this.parent||Zh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ar&&ar.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,u=i?ei(i):l,f=this._ptLookup,h=this._pt,m,_,x,M,S,y,g;if((!s||s==="all")&&Jx(l,u))return s==="all"&&(this._pt=0),ca(this);for(m=this._op=this._op||[],s!=="all"&&(fn(s)&&(S={},Un(s,function(L){return S[L]=1}),s=S),s=My(l,s)),g=l.length;g--;)if(~u.indexOf(l[g])){_=f[g],s==="all"?(m[g]=s,M=_,x={}):(x=m[g]=m[g]||{},M=s);for(S in M)y=_&&_[S],y&&((!("kill"in y.d)||y.d.kill(S)===!0)&&Io(this,y,"_pt"),delete _[S]),x!=="all"&&(x[S]=1)}return this._initted&&!this._pt&&h&&ca(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _a(1,arguments)},e.delayedCall=function(i,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(i,s,o){return _a(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Wt.killTweensOf(i,s,o)},e}(ba);Xn(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){en[r]=function(){var e=new bn,t=Dc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var fu=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},Ty=function(e,t,n,i){return e[t](i.fp,n)},by=function(e,t,n){return e.setAttribute(t,n)},hu=function(e,t){return jt(e[t])?xd:nu(e[t])&&e.setAttribute?by:fu},yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ay=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},du=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wy=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Cy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Io(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ry=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Md=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Nn=function(){function r(t,n,i,s,o,l,u,f,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=l||yd,this.d=u||this,this.set=f||fu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ry,this.m=n,this.mt=s,this.tween=i},r}();Un(ou+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return au[r]=1});Wn.TweenMax=Wn.TweenLite=en;Wn.TimelineLite=Wn.TimelineMax=bn;Wt=new bn({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=fd;var Vr=[],xo={},Py=[],zf=0,Dy=0,Il=function(e){return(xo[e]||Py).map(function(t){return t()})},Nc=function(){var e=Date.now(),t=[];e-zf>2&&(Il("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,s=n.conditions,o,l,u,f;for(l in i)o=mi.matchMedia(i[l]).matches,o&&(u=1),o!==s[l]&&(s[l]=o,f=1);f&&(n.revert(),u&&t.push(n))}),Il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zf=e,Il("matchMedia"))},Ed=function(){function r(t,n){this.selector=n&&Lc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){jt(n)&&(s=i,i=n,n=jt);var o=this,l=function(){var f=Gt,h=o.selector,m;return f&&f!==o&&f.data.push(o),s&&(o.selector=Lc(s)),Gt=o,m=i.apply(o,arguments),jt(m)&&o._r.push(m),Gt=f,o.selector=h,o.isReverted=!1,m};return o.last=l,n===jt?l(o,function(u){return o.add(null,u)}):n?o[n]=l:l},e.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,f;u--;)f=s.data[u],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,m){return m.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),u=s.data.length;u--;)f=s.data[u],f instanceof bn?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof en)&&f.revert&&f.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var o=Vr.length;o--;)Vr[o].id===this.id&&Vr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Ly=function(){function r(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ti(n)||(n={matches:n});var o=new Ed(0,s||this.scope),l=o.conditions={},u,f,h;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(f in n)f==="all"?h=1:(u=mi.matchMedia(n[f]),u&&(Vr.indexOf(o)<0&&Vr.push(o),(l[f]=u.matches)&&(h=1),u.addListener?u.addListener(Nc):u.addEventListener("change",Nc)));return h&&i(o,function(m){return o.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ao={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ld(i)})},timeline:function(e){return new bn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=ei(e)[0]);var s=kr(e||{}).get,o=n?$h:jh;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,n,i)):function(l,u,f){return o((kn[l]&&kn[l].get||s)(e,l,u,f))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(h){return Fn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var m=s;m--;)i[m](h)}}e=e[0]||{};var o=kn[t],l=kr(e),u=l.harness&&(l.harness.aliases||{})[t]||t,f=o?function(h){var m=new o;Ss._pt=0,m.init(e,n?h+n:h,Ss,0,[e]),m.render(1,m),Ss._pt&&du(1,Ss)}:l.set(e,u);return o?f:function(h){return f(e,u,n?h+n:h,l,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Xn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(u,f,h){return s.resetTo(t,u,f,h)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,Bs.ease)),Uf(Bs,e||{})},config:function(e){return Uf(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!kn[l]&&!Wn[l]&&Sa(t+" effect requires "+l+" plugin.")}),Rl[t]=function(l,u,f){return n(ei(l),Xn(u||{},s),f)},o&&(bn.prototype[t]=function(l,u,f){return this.add(Rl[t](l,Ti(u)?u:(f=u)&&{},this),f)})},registerEase:function(e,t){Mt[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):Mt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bn(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(Wt,n,0),n},context:function(e,t){return e?new Ed(e,t):Gt},matchMedia:function(e){return new Ly(e)},matchMediaRefresh:function(){return Vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Nc()},addEventListener:function(e,t){var n=xo[e]||(xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:uy,wrapYoyo:fy,distribute:nd,random:rd,snap:id,normalize:cy,getUnit:vn,clamp:sy,splitColor:cd,toArray:ei,selector:Lc,mapRange:ad,pipe:oy,unitize:ly,interpolate:hy,shuffle:td},install:Vh,effects:Rl,ticker:Hn,updateRoot:bn.updateRoot,plugins:kn,globalTimeline:Wt,core:{PropTween:Nn,globals:Wh,Tween:en,Timeline:bn,Animation:ba,getCache:kr,_removeLinkedListItem:Io,reverting:function(){return pn},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return tu=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ao[r]=en[r]});Hn.add(bn.updateRoot);Ss=Ao.to({},{duration:0});var Iy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Uy=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Iy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(l){var u,f;if(fn(s)&&(u={},Un(s,function(h){return u[h]=1}),s=u),t){u={};for(f in s)u[f]=t(s[f]);s=u}Uy(l,s)}}}},Fn=Ao.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,l,u;this.tween=n;for(o in t)u=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(u||0)+"",t[o],i,s,0,0,o),l.op=o,l.b=u,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",Ic),Ul("modifiers"),Ul("snap",id))||Ao;en.version=bn.version=Fn.version="3.12.7";Gh=1;iu()&&Gs();Mt.Power0;Mt.Power1;Mt.Power2;Mt.Power3;Mt.Power4;Mt.Linear;Mt.Quad;Mt.Cubic;Mt.Quart;Mt.Quint;Mt.Strong;Mt.Elastic;Mt.Back;Mt.SteppedEase;Mt.Bounce;Mt.Sine;Mt.Expo;Mt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kf,or,ws,pu,Br,Hf,mu,Ny=function(){return typeof window<"u"},Xi={},Ir=180/Math.PI,Cs=Math.PI/180,ms=Math.atan2,Gf=1e8,_u=/([A-Z])/g,Oy=/(left|right|width|margin|padding|x)/i,Fy=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},By=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ky=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Td=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Hy=function(e,t,n){return e.style[t]=n},Gy=function(e,t,n){return e.style.setProperty(t,n)},Vy=function(e,t,n){return e._gsap[t]=n},Wy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Xy=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},qy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Xt="transform",On=Xt+"Origin",Yy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Bi(i,l)}):this.tfm[e]=o.x?o[e]:Bi(i,e),e===On&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(l){return r.call(n,l,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(On,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},Ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(_u,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mu(),(!s||!s.isStart)&&!n[Xt]&&(Ad(n),i.zOrigin&&n[On]&&(n[On]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wd=function(e,t){var n={target:e,props:[],revert:jy,save:Yy};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Cd,Fc=function(e,t){var n=or.createElementNS?or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):or.createElement(e);return n&&n.style?n:or.createElement(e)},Mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(_u,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Vs(t)||t,1)||""},Vf="O,Moz,ms,Ms,Webkit".split(","),Vs=function(e,t,n){var i=t||Br,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Vf[o]:"")+e},Bc=function(){Ny()&&window.document&&(kf=window,or=kf.document,ws=or.documentElement,Br=Fc("div")||{style:{}},Fc("div"),Xt=Vs(Xt),On=Xt+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cd=!!Vs("perspective"),mu=Fn.core.reverting,pu=1)},Wf=function(e){var t=e.ownerSVGElement,n=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ws.removeChild(n),s},Xf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rd=function(e){var t,n;try{t=e.getBBox()}catch{t=Wf(e),n=1}return t&&(t.width||t.height)||n||(t=Wf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xf(e,["x","cx","x1"])||0,y:+Xf(e,["y","cy","y1"])||0,width:0,height:0}:t},Pd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rd(e))},Yr=function(e,t){if(t){var n=e.style,i;t in Xi&&t!==On&&(t=Xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(_u,"-$1").toLowerCase())):n.removeAttribute(t)}},lr=function(e,t,n,i,s,o){var l=new Nn(e._pt,t,n,0,1,o?bd:Td);return e._pt=l,l.b=i,l.e=s,e._props.push(n),l},qf={deg:1,rad:1,turn:1},$y={grid:1,flex:1},_r=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",l=Br.style,u=Oy.test(t),f=e.tagName.toLowerCase()==="svg",h=(f?"client":"offset")+(u?"Width":"Height"),m=100,_=i==="px",x=i==="%",M,S,y,g;if(i===o||!s||qf[i]||qf[o])return s;if(o!=="px"&&!_&&(s=r(e,t,n,"px")),g=e.getCTM&&Pd(e),(x||o==="%")&&(Xi[t]||~t.indexOf("adius")))return M=g?e.getBBox()[u?"width":"height"]:e[h],Zt(x?s/M*m:s/100*M);if(l[u?"width":"height"]=m+(_?o:i),S=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!f?e:e.parentNode,g&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===or||!S.appendChild)&&(S=or.body),y=S._gsap,y&&x&&y.width&&u&&y.time===Hn.time&&!y.uncache)return Zt(s/y.width*m);if(x&&(t==="height"||t==="width")){var L=e.style[t];e.style[t]=m+i,M=e[h],L?e.style[t]=L:Yr(e,t)}else(x||o==="%")&&!$y[Mi(S,"display")]&&(l.position=Mi(e,"position")),S===e&&(l.position="static"),S.appendChild(Br),M=Br[h],S.removeChild(Br),l.position="absolute";return u&&x&&(y=kr(S),y.time=Hn.time,y.width=S[h]),Zt(_?M*s/m:M&&s?m/M*s:0)},Bi=function(e,t,n,i){var s;return pu||Bc(),t in yi&&t!=="transform"&&(t=yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(s=wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Co(Mi(e,On))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wo[t]&&wo[t](e,t,n)||Mi(e,t)||qh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},Zy=function(e,t,n,i){if(!n||n==="none"){var s=Vs(t,e,1),o=s&&Mi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var l=new Nn(this._pt,e.style,t,0,1,Sd),u=0,f=0,h,m,_,x,M,S,y,g,L,D,C,N;if(l.b=n,l.e=i,n+="",i+="",i==="auto"&&(S=e.style[t],e.style[t]=i,i=Mi(e,t)||i,S?e.style[t]=S:Yr(e,t)),h=[n,i],fd(h),n=h[0],i=h[1],_=n.match(ys)||[],N=i.match(ys)||[],N.length){for(;m=ys.exec(i);)y=m[0],L=i.substring(u,m.index),M?M=(M+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(M=1),y!==(S=_[f++]||"")&&(x=parseFloat(S)||0,C=S.substr((x+"").length),y.charAt(1)==="="&&(y=As(x,y)+C),g=parseFloat(y),D=y.substr((g+"").length),u=ys.lastIndex-D.length,D||(D=D||Vn.units[t]||C,u===i.length&&(i+=D,l.e+=D)),C!==D&&(x=_r(e,t,S,D)||0),l._pt={_next:l._pt,p:L||f===1?L:",",s:x,c:g-x,m:M&&M<4||t==="zIndex"?Math.round:0});l.c=u<i.length?i.substring(u,i.length):""}else l.r=t==="display"&&i==="none"?bd:Td;return kh.test(i)&&(l.e=0),this._pt=l,l},Yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ky=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yf[n]||n,t[1]=Yf[i]||i,t.join(" ")},Jy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,l,u,f;if(s==="all"||s===!0)i.cssText="",u=1;else for(s=s.split(","),f=s.length;--f>-1;)l=s[f],Xi[l]&&(u=1,l=l==="transformOrigin"?On:Xt),Yr(n,l);u&&(Yr(n,Xt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wa(n,1),o.uncache=1,Ad(i)))}},wo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,Jy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Aa=[1,0,0,1,0,0],Dd={},Ld=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jf=function(e){var t=Mi(e,Xt);return Ld(t)?Aa:t.substr(7).match(zh).map(Zt)},gu=function(e,t){var n=e._gsap||kr(e),i=e.style,s=jf(e),o,l,u,f;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Aa:s):(s===Aa&&!e.offsetParent&&e!==ws&&!n.svg&&(u=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(f=1,l=e.nextElementSibling,ws.appendChild(e)),s=jf(e),u?i.display=u:Yr(e,"display"),f&&(l?o.insertBefore(e,l):o?o.appendChild(e):ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(e,t,n,i,s,o){var l=e._gsap,u=s||gu(e,!0),f=l.xOrigin||0,h=l.yOrigin||0,m=l.xOffset||0,_=l.yOffset||0,x=u[0],M=u[1],S=u[2],y=u[3],g=u[4],L=u[5],D=t.split(" "),C=parseFloat(D[0])||0,N=parseFloat(D[1])||0,O,d,B,A;n?u!==Aa&&(d=x*y-M*S)&&(B=C*(y/d)+N*(-S/d)+(S*L-y*g)/d,A=C*(-M/d)+N*(x/d)-(x*L-M*g)/d,C=B,N=A):(O=Rd(e),C=O.x+(~D[0].indexOf("%")?C/100*O.width:C),N=O.y+(~(D[1]||D[0]).indexOf("%")?N/100*O.height:N)),i||i!==!1&&l.smooth?(g=C-f,L=N-h,l.xOffset=m+(g*x+L*S)-g,l.yOffset=_+(g*M+L*y)-L):l.xOffset=l.yOffset=0,l.xOrigin=C,l.yOrigin=N,l.smooth=!!i,l.origin=t,l.originIsAbsolute=!!n,e.style[On]="0px 0px",o&&(lr(o,l,"xOrigin",f,C),lr(o,l,"yOrigin",h,N),lr(o,l,"xOffset",m,l.xOffset),lr(o,l,"yOffset",_,l.yOffset)),e.setAttribute("data-svg-origin",C+" "+N)},wa=function(e,t){var n=e._gsap||new md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",l="deg",u=getComputedStyle(e),f=Mi(e,On)||"0",h,m,_,x,M,S,y,g,L,D,C,N,O,d,B,A,R,k,ne,W,le,he,ae,ce,ie,ye,be,Be,Ze,Et,ue,ve;return h=m=_=S=y=g=L=D=C=0,x=M=1,n.svg=!!(e.getCTM&&Pd(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[Xt]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Xt]!=="none"?u[Xt]:"")),i.scale=i.rotate=i.translate="none"),d=gu(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),f=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",ce=""):ce=!t&&e.getAttribute("data-svg-origin"),zc(e,ce||f,!!ce||n.originIsAbsolute,n.smooth!==!1,d)),N=n.xOrigin||0,O=n.yOrigin||0,d!==Aa&&(k=d[0],ne=d[1],W=d[2],le=d[3],h=he=d[4],m=ae=d[5],d.length===6?(x=Math.sqrt(k*k+ne*ne),M=Math.sqrt(le*le+W*W),S=k||ne?ms(ne,k)*Ir:0,L=W||le?ms(W,le)*Ir+S:0,L&&(M*=Math.abs(Math.cos(L*Cs))),n.svg&&(h-=N-(N*k+O*W),m-=O-(N*ne+O*le))):(ve=d[6],Et=d[7],be=d[8],Be=d[9],Ze=d[10],ue=d[11],h=d[12],m=d[13],_=d[14],B=ms(ve,Ze),y=B*Ir,B&&(A=Math.cos(-B),R=Math.sin(-B),ce=he*A+be*R,ie=ae*A+Be*R,ye=ve*A+Ze*R,be=he*-R+be*A,Be=ae*-R+Be*A,Ze=ve*-R+Ze*A,ue=Et*-R+ue*A,he=ce,ae=ie,ve=ye),B=ms(-W,Ze),g=B*Ir,B&&(A=Math.cos(-B),R=Math.sin(-B),ce=k*A-be*R,ie=ne*A-Be*R,ye=W*A-Ze*R,ue=le*R+ue*A,k=ce,ne=ie,W=ye),B=ms(ne,k),S=B*Ir,B&&(A=Math.cos(B),R=Math.sin(B),ce=k*A+ne*R,ie=he*A+ae*R,ne=ne*A-k*R,ae=ae*A-he*R,k=ce,he=ie),y&&Math.abs(y)+Math.abs(S)>359.9&&(y=S=0,g=180-g),x=Zt(Math.sqrt(k*k+ne*ne+W*W)),M=Zt(Math.sqrt(ae*ae+ve*ve)),B=ms(he,ae),L=Math.abs(B)>2e-4?B*Ir:0,C=ue?1/(ue<0?-ue:ue):0),n.svg&&(ce=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ld(Mi(e,Xt)),ce&&e.setAttribute("transform",ce))),Math.abs(L)>90&&Math.abs(L)<270&&(s?(x*=-1,L+=S<=0?180:-180,S+=S<=0?180:-180):(M*=-1,L+=L<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=_+o,n.scaleX=Zt(x),n.scaleY=Zt(M),n.rotation=Zt(S)+l,n.rotationX=Zt(y)+l,n.rotationY=Zt(g)+l,n.skewX=L+l,n.skewY=D+l,n.transformPerspective=C+o,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(i[On]=Co(f)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?eS:Cd?Id:Qy,n.uncache=0,n},Co=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nl=function(e,t,n){var i=vn(t);return Zt(parseFloat(t)+parseFloat(_r(e,"x",n+"px",i)))+i},Qy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Id(e,t)},Pr="0deg",aa="0px",Dr=") ",Id=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.z,f=n.rotation,h=n.rotationY,m=n.rotationX,_=n.skewX,x=n.skewY,M=n.scaleX,S=n.scaleY,y=n.transformPerspective,g=n.force3D,L=n.target,D=n.zOrigin,C="",N=g==="auto"&&e&&e!==1||g===!0;if(D&&(m!==Pr||h!==Pr)){var O=parseFloat(h)*Cs,d=Math.sin(O),B=Math.cos(O),A;O=parseFloat(m)*Cs,A=Math.cos(O),o=Nl(L,o,d*A*-D),l=Nl(L,l,-Math.sin(O)*-D),u=Nl(L,u,B*A*-D+D)}y!==aa&&(C+="perspective("+y+Dr),(i||s)&&(C+="translate("+i+"%, "+s+"%) "),(N||o!==aa||l!==aa||u!==aa)&&(C+=u!==aa||N?"translate3d("+o+", "+l+", "+u+") ":"translate("+o+", "+l+Dr),f!==Pr&&(C+="rotate("+f+Dr),h!==Pr&&(C+="rotateY("+h+Dr),m!==Pr&&(C+="rotateX("+m+Dr),(_!==Pr||x!==Pr)&&(C+="skew("+_+", "+x+Dr),(M!==1||S!==1)&&(C+="scale("+M+", "+S+Dr),L.style[Xt]=C||"translate(0, 0)"},eS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.rotation,f=n.skewX,h=n.skewY,m=n.scaleX,_=n.scaleY,x=n.target,M=n.xOrigin,S=n.yOrigin,y=n.xOffset,g=n.yOffset,L=n.forceCSS,D=parseFloat(o),C=parseFloat(l),N,O,d,B,A;u=parseFloat(u),f=parseFloat(f),h=parseFloat(h),h&&(h=parseFloat(h),f+=h,u+=h),u||f?(u*=Cs,f*=Cs,N=Math.cos(u)*m,O=Math.sin(u)*m,d=Math.sin(u-f)*-_,B=Math.cos(u-f)*_,f&&(h*=Cs,A=Math.tan(f-h),A=Math.sqrt(1+A*A),d*=A,B*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),N*=A,O*=A)),N=Zt(N),O=Zt(O),d=Zt(d),B=Zt(B)):(N=m,B=_,O=d=0),(D&&!~(o+"").indexOf("px")||C&&!~(l+"").indexOf("px"))&&(D=_r(x,"x",o,"px"),C=_r(x,"y",l,"px")),(M||S||y||g)&&(D=Zt(D+M-(M*N+S*d)+y),C=Zt(C+S-(M*O+S*B)+g)),(i||s)&&(A=x.getBBox(),D=Zt(D+i/100*A.width),C=Zt(C+s/100*A.height)),A="matrix("+N+","+O+","+d+","+B+","+D+","+C+")",x.setAttribute("transform",A),L&&(x.style[Xt]=A)},tS=function(e,t,n,i,s){var o=360,l=fn(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Ir:1),f=u-i,h=i+f+"deg",m,_;return l&&(m=s.split("_")[1],m==="short"&&(f%=o,f!==f%(o/2)&&(f+=f<0?o:-360)),m==="cw"&&f<0?f=(f+o*Gf)%o-~~(f/o)*o:m==="ccw"&&f>0&&(f=(f-o*Gf)%o-~~(f/o)*o)),e._pt=_=new Nn(e._pt,t,n,i,f,By),_.e=h,_.u="deg",e._props.push(n),_},$f=function(e,t){for(var n in t)e[n]=t[n];return e},nS=function(e,t,n){var i=$f({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,u,f,h,m,_,x,M;i.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xt]=t,l=wa(n,1),Yr(n,Xt),n.setAttribute("transform",f)):(f=getComputedStyle(n)[Xt],o[Xt]=t,l=wa(n,1),o[Xt]=f);for(u in Xi)f=i[u],h=l[u],f!==h&&s.indexOf(u)<0&&(x=vn(f),M=vn(h),m=x!==M?_r(n,u,f,M):parseFloat(f),_=parseFloat(h),e._pt=new Nn(e._pt,l,u,m,_-m,Oc),e._pt.u=M||0,e._props.push(u));$f(l,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(l){return e<2?r+l:"border"+l+r});wo[e>1?"border"+r:r]=function(l,u,f,h,m){var _,x;if(arguments.length<4)return _=o.map(function(M){return Bi(l,M,f)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(h+"").split(" "),x={},o.forEach(function(M,S){return x[M]=_[S]=_[S]||_[(S-1)/2|0]}),l.init(u,x,m)}});var Ud={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,l=e.style,u=n.vars.startAt,f,h,m,_,x,M,S,y,g,L,D,C,N,O,d,B;pu||Bc(),this.styles=this.styles||wd(e),B=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(h=t[S],!(kn[S]&&_d(S,t,n,i,e,s)))){if(x=typeof h,M=wo[S],x==="function"&&(h=h.call(n,i,e,s),x=typeof h),x==="string"&&~h.indexOf("random(")&&(h=Ea(h)),M)M(this,e,S,h,n)&&(d=1);else if(S.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(S)+"").trim(),h+="",hr.lastIndex=0,hr.test(f)||(y=vn(f),g=vn(h)),g?y!==g&&(f=_r(e,S,f,g)+g):y&&(h+=y),this.add(l,"setProperty",f,h,i,s,0,0,S),o.push(S),B.push(S,0,l[S]);else if(x!=="undefined"){if(u&&S in u?(f=typeof u[S]=="function"?u[S].call(n,i,e,s):u[S],fn(f)&&~f.indexOf("random(")&&(f=Ea(f)),vn(f+"")||f==="auto"||(f+=Vn.units[S]||vn(Bi(e,S))||""),(f+"").charAt(1)==="="&&(f=Bi(e,S))):f=Bi(e,S),_=parseFloat(f),L=x==="string"&&h.charAt(1)==="="&&h.substr(0,2),L&&(h=h.substr(2)),m=parseFloat(h),S in yi&&(S==="autoAlpha"&&(_===1&&Bi(e,"visibility")==="hidden"&&m&&(_=0),B.push("visibility",0,l.visibility),lr(this,l,"visibility",_?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=yi[S],~S.indexOf(",")&&(S=S.split(",")[0]))),D=S in Xi,D){if(this.styles.save(S),C||(N=e._gsap,N.renderTransform&&!t.parseTransform||wa(e,t.parseTransform),O=t.smoothOrigin!==!1&&N.smooth,C=this._pt=new Nn(this._pt,l,Xt,0,1,N.renderTransform,N,0,-1),C.dep=1),S==="scale")this._pt=new Nn(this._pt,N,"scaleY",N.scaleY,(L?As(N.scaleY,L+m):m)-N.scaleY||0,Oc),this._pt.u=0,o.push("scaleY",S),S+="X";else if(S==="transformOrigin"){B.push(On,0,l[On]),h=Ky(h),N.svg?zc(e,h,0,O,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==N.zOrigin&&lr(this,N,"zOrigin",N.zOrigin,g),lr(this,l,S,Co(f),Co(h)));continue}else if(S==="svgOrigin"){zc(e,h,1,O,0,this);continue}else if(S in Dd){tS(this,N,S,_,L?As(_,L+h):h);continue}else if(S==="smoothOrigin"){lr(this,N,"smooth",N.smooth,h);continue}else if(S==="force3D"){N[S]=h;continue}else if(S==="transform"){nS(this,h,e);continue}}else S in l||(S=Vs(S)||S);if(D||(m||m===0)&&(_||_===0)&&!Fy.test(h)&&S in l)y=(f+"").substr((_+"").length),m||(m=0),g=vn(h)||(S in Vn.units?Vn.units[S]:y),y!==g&&(_=_r(e,S,f,g)),this._pt=new Nn(this._pt,D?N:l,S,_,(L?As(_,L+m):m)-_,!D&&(g==="px"||S==="zIndex")&&t.autoRound!==!1?ky:Oc),this._pt.u=g||0,y!==g&&g!=="%"&&(this._pt.b=f,this._pt.r=zy);else if(S in l)Zy.call(this,e,S,f,L?L+h:h);else if(S in e)this.add(e,S,f||e[S],L?L+h:h,i,s);else if(S!=="parseTransform"){su(S,h);continue}D||(S in l?B.push(S,0,l[S]):typeof e[S]=="function"?B.push(S,2,e[S]()):B.push(S,1,f||e[S])),o.push(S)}}d&&Md(this)},render:function(e,t){if(t.tween._time||!mu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bi,aliases:yi,getSetter:function(e,t,n){var i=yi[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==On&&(e._gsap.x||Bi(e,"x"))?n&&Hf===n?t==="scale"?Wy:Vy:(Hf=n||{})&&(t==="scale"?Xy:qy):e.style&&!nu(e.style[t])?Hy:~t.indexOf("-")?Gy:hu(e,t)},core:{_removeProperty:Yr,_getMatrix:gu}};Fn.utils.checkPrefix=Vs;Fn.core.getStyleSaver=wd;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){Xi[s]=1});Un(e,function(s){Vn.units[s]="deg",Dd[s]=1}),yi[i[13]]=r+","+e,Un(n,function(s){var o=s.split(":");yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Fn.registerPlugin(Ud);var kc=Fn.registerPlugin(Ud)||Fn;kc.core.Tween;new J;new J;const Zf={type:"change"},vu={type:"start"},Nd={type:"end"},lo=new vh,Kf=new rr,iS=Math.cos(70*pm.DEG2RAD),sn=new J,Dn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6;class rS extends e_{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new qr,this._lastTargetPosition=new J,this._quat=new qr().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new of,this._sphericalDelta=new of,this._scale=1,this._panOffset=new J,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new J,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aS.bind(this),this._onPointerDown=sS.bind(this),this._onPointerUp=oS.bind(this),this._onContextMenu=pS.bind(this),this._onMouseWheel=uS.bind(this),this._onKeyDown=fS.bind(this),this._onTouchStart=hS.bind(this),this._onTouchMove=dS.bind(this),this._onMouseDown=lS.bind(this),this._onMouseMove=cS.bind(this),this._interceptControlDown=mS.bind(this),this._interceptControlUp=_S.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zf),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Dn:n>Math.PI&&(n-=Dn),i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=sn.length();o=this._clampDistance(l*this._scale);const u=l-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new J(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const f=new J(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(l),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lo.origin.copy(this.object.position),lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lo.direction))<iS?this.object.lookAt(this.target):(Kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),lo.intersectPlane(Kf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(Zf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Dn/60*this.autoRotateSpeed*e:Dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;sn.copy(i).sub(this.target);let s=sn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,l=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function aS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function oS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nd),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ut.DOLLY;break;case Ms.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}break;case Ms.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(vu)}function cS(r){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function uS(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(r.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Nd))}function fS(r){this.enabled!==!1&&this._handleKeyDown(r)}function hS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ut.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ut.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(vu)}function dS(r){switch(this._trackPointer(r),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ut.NONE}}function pS(r){this.enabled!==!1&&r.preventDefault()}function mS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _S(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Hi={rendertime:0,camera:null,scene:null,renderer:null,controls:null,fullscreen:!1,cubeCameraRead:null,cubeCameraWrite:null,mobile:!1,BG_COLOR:16777215,directionalLight:null,WIDTH:window.innerWidth,HEIGHT:window.innerHeight,cube:null,init(){this.stats=new pa,document.body.appendChild(this.stats.dom);const r=parseInt(window.location.hash.substr(1));r||(Hc.fxParams.song=r),Rs.on("update",this.update.bind(this));const e=document.createElement("div");document.body.appendChild(e),this.renderer=new Fx({antialias:!0}),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.setClearColor(this.BG_COLOR),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!0,e.appendChild(this.renderer.domElement),this.scene=new Hm,this.camera=new Jn(45,this.WIDTH/this.HEIGHT,.1,1e3),this.camera.position.set(-2,2.5,2),this.scene.fog=new Kc(this.BG_COLOR,2,10),this.controls=new rS(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.update(),this.controls.autoRotate=!1,this.controls.enablePan=!1,this.controls.enableZoom=!0,this.controls.enableRotate=!0,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.05,this.controls.minDistance=2,this.controls.maxDistance=4,this.controls.maxPolarAngle=Math.PI/2.5,this.controls.minPolarAngle=Math.PI/5,this.directionalLight=new Km(16777215,.4),this.directionalLight.position.set(.1,.4,-.9),this.directionalLight.castShadow=!0;const t=6;this.directionalLight.shadow.camera.near=-6*2,this.directionalLight.shadow.camera.far=t*2,this.directionalLight.shadow.camera.left=-6,this.directionalLight.shadow.camera.right=t,this.directionalLight.shadow.camera.top=t,this.directionalLight.shadow.camera.bottom=-6,this.directionalLight.shadow.mapSize.width=1024,this.directionalLight.shadow.mapSize.height=1024,this.directionalLight.shadow.bias=1e-4,this.scene.add(this.directionalLight),this.scene.add(new Jm(16777215,.9));const n=new vr(1,1,1),i=new Qc({color:65280});this.cube=new Qn(n,i),this.cube.castShadow=!0,this.cube.receiveShadow=!0,this.scene.add(this.cube),kc.delayedCall(.1,this.updateShadow.bind(this))},updateShadow(){this.renderer.shadowMap.needsUpdate=!0},remake(){this.controls.autoRotateSpeed=Math.random()*.5-.25,kc.delayedCall(5,this.remake.bind(this))},setOrientationControls(r){r.alpha&&(this.controls.enabled=!1,this.controls=new(void 0)(this.camera,!0),this.controls.connect(),this.controls.update(),window.removeEventListener("deviceorientation",this.setOrientationControls),this.mobile=!0)},update(){this.controls.update(),this.mobile&&(this.camera.position.set(0,0,0),this.camera.translateZ(1.8)),this.stats&&this.stats.update(),this.renderer.render(this.scene,this.camera)},onResize(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.WIDTH,this.HEIGHT)},getCamera(){return this.camera},getScene(){return this.scene},getLight(){return this.directionalLight},getRenderer(){return this.renderer},getCubeCameras(){return[this.cubeCameraRead,this.cubeCameraWrite]},getControls(){return this.controls},isFullscreen(){return this.fullscreen},isMobile(){return this.mobile}};function Fl(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},l=r[0].morphTargetsRelative,u=new gr;let f=0;for(let h=0;h<r.length;++h){const m=r[h];let _=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in m.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;s[x]===void 0&&(s[x]=[]),s[x].push(m.attributes[x]),_++}if(_!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in m.morphAttributes){if(!i.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(m.morphAttributes[x])}if(e){let x;if(t)x=m.index.count;else if(m.attributes.position!==void 0)x=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;u.addGroup(f,x,h),f+=x}}if(t){let h=0;const m=[];for(let _=0;_<r.length;++_){const x=r[_].index;for(let M=0;M<x.count;++M)m.push(x.getX(M)+h);h+=r[_].attributes.position.count}u.setIndex(m)}for(const h in s){const m=Jf(s[h]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;u.setAttribute(h,m)}for(const h in o){const m=o[h][0].length;if(m===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[h]=[];for(let _=0;_<m;++_){const x=[];for(let S=0;S<o[h].length;++S)x.push(o[h][S][_]);const M=Jf(x);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;u.morphAttributes[h].push(M)}}return u}function Jf(r){let e,t,n,i=-1,s=0;for(let f=0;f<r.length;++f){const h=r[f];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),l=new ci(o,t,n);let u=0;for(let f=0;f<r.length;++f){const h=r[f];if(h.isInterleavedBufferAttribute){const m=u/t;for(let _=0,x=h.count;_<x;_++)for(let M=0;M<t;M++){const S=h.getComponent(_,M);l.setComponent(_+m,M,S)}}else o.set(h.array,u);u+=h.count*t}return i!==void 0&&(l.gpuType=i),l}const gS=(()=>{let r,e;function t(){Rs.on("update",i),Rs.on("onBeat",s);const l=.055,u=Tc.getCubeMap(0);u.format=Us;const f=0,h=1;e=new Qc({bumpScale:l,metalness:h,fog:!1,roughness:f,flatShading:!0,envMap:u}),n()}function n(){r&&(Hi.getScene().remove(r),r.geometry.dispose(),r=null);const l=new vr(.1,.1,.1,1,1,1),u=new dn;for(let _=0;_<400;_++){const M=new J;_!==0&&M.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15);const S=Math.random()*5;for(let y=0;y<S;y++){const g=new Qn(l,e),L=.2+.4*Math.random();g.position.set((Math.random()-.5)*L,(Math.random()-.5)*L,(Math.random()-.5)*L),g.position.add(M);const D=Math.random(),C=Math.random(),N=Math.random();g.scale.set(D,C,N),u.add(g),g.castShadow=!0,g.receiveShadow=!0}}const f=u.children.map(_=>{const x=_.geometry.clone();return x.applyMatrix4(_.matrix),x}),h=Fl(f).attributes.position,m=.1;for(let _=0;_<h.count;_++){const x=h.getX(_)+(Math.random()-.5)*m,M=h.getY(_)+(Math.random()-.5)*m,S=h.getZ(_)+(Math.random()-.5)*m;h.setXYZ(_,x,M,S)}Fl(f).computeVertexNormals(),r=new Qn(Fl(f),e),r.castShadow=!0,r.receiveShadow=!0,Hi.getScene().add(r),Hi.getRenderer().shadowMap.needsUpdate=!0}function i(){}function s(){}function o(){}return{init:t,update:i,onBeat:s,generate:o,reload:n}})(),Ro={shaderTime:0,screenW:1920,screenH:1080,blurriness:3,nuts:!1,bloomPass:null,hblurPass:null,vblurPass:null,copyPass:null,renderTarget2:null,glowComposer:null,composer:null,blendPass:null,badTVPass:null,mirrorPass:null,dotScreenPass:null,rgbPass:null,smaaPass:null,depthMaterial:null,depthRenderTarget:null,msaaPass:null,scene:null,renderer:null,camera:null,controls:null,vrControls:null,vr:!1,controller2:null,material:null,geom:null,bubbles:[],geoms:[],group:new oa,init(){this.controls=Hi.getControls(),this.scene=Hi.getScene(),this.renderer=Hi.getRenderer(),this.camera=Hi.getCamera(),Rs.on("update",this.update.bind(this)),Rs.on("onBeat",this.onBeat.bind(this)),this.setup()},setup(){this.controls.autoRotate=!1,this.controls.enabled=!1,this.scene.add(this.group),this.group.position.y=-1.5,this.vr=!0,gS.init();const r=Tc.getCubeMap(0);r.format=Us,this.geom=new vr(.2,.2,.2,1,1,1);const e=.055,t=Tc.getCubeMap(0);t.format=Us;const n=.4,i=.9,s=new wt(1,1,1);this.material=new Qc({bumpScale:e,color:s,metalness:i,roughness:n,flatShading:!0,envMap:t,side:gi}),this.onResize(),this.mobile=!1},removeBubble(r){this.scene.remove(r)},onBeat(){setTimeout(this.onBeatEnd.bind(this),300)},onBeatEnd(){},toggle(){this.setup()},onResize(){const r=window.innerWidth,e=window.innerHeight,t=this.renderer.getPixelRatio(),n=Math.floor(r/t)||1,i=Math.floor(e/t)||1;this.composer&&this.composer.setSize(n,i)},update(){this.vr||(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.render(this.scene,this.camera,this.depthRenderTarget),this.composer&&this.composer.render())}},Hc={t:0,mainParams:{time:1e-4,auto:!1,fullscreen:function(){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),Main.toggleControls()},generate_one:function(){Asteroid.generate(0,0)},generate_grid:function(){Asteroid.generate(8,8)}},audioParams:{useMic:!1,useSample:!1,showDebug:!0,volSens:1,beatHoldTime:40,beatDecayRate:.97,bpmMode:!1,bpmRate:0},fxParams:{song:0,nuts:!1,tilt:!0,tv:!1,kaleidoscope:-1,kaleidoscopeJump:!1,rgb:!0,wireframe:!1,dots:!1,person:!1,ssao:!0,ssaoOnly:!1,heart:!0,items:!0,black:!0,animSpeed:1,colorProgress:0,spreadProgress:0,waterProgress:.3,bgProgress:0,glow:.3},vizParams:{fullSize:!0,showControls:!1,fakeKinect:!1},init(){Rs.on("update",this.update.bind(this))},show(r,e,t,n){var i=!0;typeof n=="number"&&(i=n),mainParams.time>e&&mainParams.time<=t&&(fxParams[r]=i)},autoChange(){mainParams.auto=!0},manualChange(){mainParams.auto=!1,Ro.toggle()},update(){mainParams.auto&&(mainParams.time+=1/3/60/60/60,mainParams.time>1&&(mainParams.time=1),mainParams.time<0&&(mainParams.time=0));var r={};for(var e in fxParams)fxParams.hasOwnProperty(e)&&(r[e]=fxParams[e]);if(mainParams.auto){for(var e in fxParams)fxParams.hasOwnProperty(e)&&fxParams[e]===!0&&(fxParams[e]=!1);fxParams.waterProgress=Math.sin(3.5+mainParams.time*6)/2+.5,fxParams.colorProgress=mainParams.time,fxParams.spreadProgress=mainParams.time,show("black",.07,.25),show("bgProgress",0,.5,0),show("bgProgress",.5,1,1),show("kaleidoscope",0,.09,-1),show("kaleidoscope",.13,.16,0),show("kaleidoscope",.16,.19,1),show("kaleidoscope",.19,.24,4),show("heart",0,.37),show("heart",.43,1),show("black",.3,.4),show("spreadProgress",.3,1,1),show("kaleidoscope",.24,.3,-1),show("kaleidoscope",.3,.33,0),show("kaleidoscope",.33,.36,1),show("kaleidoscope",.36,.43,2),show("items",.15,1),show("animSpeed",.17,.2,-3),show("animSpeed",.2,.23,4),show("animSpeed",.23,.3,-10),show("animSpeed",.53,.61,-3),show("animSpeed",.61,.67,4),show("animSpeed",.67,.73,-6),show("animSpeed",.73,.81,7),show("animSpeed",.81,.87,0),show("animSpeed",.91,1,-10),show("kaleidoscope",.4,.6,-1),show("kaleidoscope",.6,.65,0),show("kaleidoscope",.65,.7,1),show("kaleidoscope",.7,.75,2),show("nuts",.43,.47),show("wireframe",.47,.57),show("nuts",.57,1),show("rgb",.3,.4),show("rgb",.7,1),show("tv",.65,1),show("kaleidoscopeJump",.75,1)}var t=!1;for(var e in fxParams)r[e]!=fxParams[e]&&typeof fxParams[e]=="boolean"&&e!=="heart"&&e!=="wireframe"&&e!=="items"&&e!=="black"&&e!=="waterProgress"&&e!=="spreadProgress"&&e!=="bgProgress"&&(t=!0,console.log(e,fxParams[e]));t&&Ro.toggle()}},vS=new Qf,xS={init(){if(!eh()){up();return}window.addEventListener("resize",this.onResize.bind(this),!1),Hc.init(),Hi.init(),Ro.init(),this.onResize(),Hc.vizParams.showControls&&fa("#controls").show(),this.update()},update(){requestAnimationFrame(this.update.bind(this)),vS.emit("update")},onResize(){Hi.onResize(),Ro.onResize()}};fa(window).on("load",function(){fa("#status").fadeOut(),fa("#preloader").delay(300).fadeOut("slow")});fa(document).ready(function(){setTimeout(()=>xS.init(),100)});
//# sourceMappingURL=index-D6tyC3Jv.js.map
