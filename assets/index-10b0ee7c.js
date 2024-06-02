var eh=Object.defineProperty;var th=(t,e,n)=>e in t?eh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Pe=(t,e,n)=>(th(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */(function(t){typeof define=="function"&&define.amd?define(["jquery"],t):typeof module=="object"&&module.exports?module.exports=function(e,n){return n===void 0&&(n=typeof window<"u"?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)})(function(t){var e,n,K,r,s,i,o,a,c,h,m,b,S,k,j,K=((z=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:z)&&z.requirejs||(z?n=z:z={},c={},h={},m={},b={},S=Object.prototype.hasOwnProperty,k=[].slice,j=/\.js$/,o=function(v,f){var g,d,u=le(v),l=u[0],f=f[1];return v=u[1],l&&(g=J(l=G(l,f))),l?v=g&&g.normalize?g.normalize(v,(d=f,function(p){return G(p,d)})):G(v,f):(l=(u=le(v=G(v,f)))[0],v=u[1],l&&(g=J(l))),{f:l?l+"!"+v:v,n:v,pr:l,p:g}},a={require:function(v){return te(v)},exports:function(v){var w=c[v];return w!==void 0?w:c[v]={}},module:function(v){return{id:v,uri:"",exports:c[v],config:(w=v,function(){return m&&m.config&&m.config[w]||{}})};var w}},s=function(v,w,g,d){var u,l,f,p,T,E=[],C=typeof g,M=Ce(d=d||v);if(C=="undefined"||C=="function"){for(w=!w.length&&g.length?["require","exports","module"]:w,p=0;p<w.length;p+=1)if((l=(f=o(w[p],M)).f)==="require")E[p]=a.require(v);else if(l==="exports")E[p]=a.exports(v),T=!0;else if(l==="module")u=E[p]=a.module(v);else if(X(c,l)||X(h,l)||X(b,l))E[p]=J(l);else{if(!f.p)throw new Error(v+" missing "+l);f.p.load(f.n,te(d,!0),function(L){return function(oe){c[L]=oe}}(l),{}),E[p]=c[l]}C=g?g.apply(c[v],E):void 0,v&&(u&&u.exports!==r&&u.exports!==c[v]?c[v]=u.exports:C===r&&T||(c[v]=C))}else v&&(c[v]=g)},e=n=i=function(v,w,g,d,u){if(typeof v=="string")return a[v]?a[v](w):J(o(v,Ce(w)).f);if(!v.splice){if((m=v).deps&&i(m.deps,m.callback),!w)return;w.splice?(v=w,w=g,g=null):v=r}return w=w||function(){},typeof g=="function"&&(g=d,d=u),d?s(r,v,w,g):setTimeout(function(){s(r,v,w,g)},4),i},i.config=function(v){return i(v)},e._defined=c,(K=function(v,w,g){if(typeof v!="string")throw new Error("See almond README: incorrect module build, no module name");w.splice||(g=w,w=[]),X(c,v)||X(h,v)||(h[v]=[v,w,g])}).amd={jQuery:!0},z.requirejs=e,z.require=n,z.define=K),z.define("almond",function(){}),z.define("jquery",[],function(){var v=t||$;return v==null&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),v}),z.define("select2/utils",["jquery"],function(v){var w={};function g(l){var f,p=l.prototype,T=[];for(f in p)typeof p[f]=="function"&&f!=="constructor"&&T.push(f);return T}w.Extend=function(l,f){var p,T={}.hasOwnProperty;function E(){this.constructor=l}for(p in f)T.call(f,p)&&(l[p]=f[p]);return E.prototype=f.prototype,l.prototype=new E,l.__super__=f.prototype,l},w.Decorate=function(l,f){var p=g(f),T=g(l);function E(){var pe=Array.prototype.unshift,Re=f.prototype.constructor.length,Ze=l.prototype.constructor;0<Re&&(pe.call(arguments,l.prototype.constructor),Ze=f.prototype.constructor),Ze.apply(this,arguments)}f.displayName=l.displayName,E.prototype=new function(){this.constructor=E};for(var C=0;C<T.length;C++){var M=T[C];E.prototype[M]=l.prototype[M]}for(var L=0;L<p.length;L++){var oe=p[L];E.prototype[oe]=function(pe){var Re=function(){};pe in E.prototype&&(Re=E.prototype[pe]);var Ze=f.prototype[pe];return function(){return Array.prototype.unshift.call(arguments,Re),Ze.apply(this,arguments)}}(oe)}return E};function d(){this.listeners={}}d.prototype.on=function(l,f){this.listeners=this.listeners||{},l in this.listeners?this.listeners[l].push(f):this.listeners[l]=[f]},d.prototype.trigger=function(l){var f=Array.prototype.slice,p=f.call(arguments,1);this.listeners=this.listeners||{},(p=p??[]).length===0&&p.push({}),(p[0]._type=l)in this.listeners&&this.invoke(this.listeners[l],f.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(l,f){for(var p=0,T=l.length;p<T;p++)l[p].apply(this,f)},w.Observable=d,w.generateChars=function(l){for(var f="",p=0;p<l;p++)f+=Math.floor(36*Math.random()).toString(36);return f},w.bind=function(l,f){return function(){l.apply(f,arguments)}},w._convertData=function(l){for(var f in l){var p=f.split("-"),T=l;if(p.length!==1){for(var E=0;E<p.length;E++){var C=p[E];(C=C.substring(0,1).toLowerCase()+C.substring(1))in T||(T[C]={}),E==p.length-1&&(T[C]=l[f]),T=T[C]}delete l[f]}}return l},w.hasScroll=function(l,f){var p=v(f),T=f.style.overflowX,E=f.style.overflowY;return(T!==E||E!=="hidden"&&E!=="visible")&&(T==="scroll"||E==="scroll"||p.innerHeight()<f.scrollHeight||p.innerWidth()<f.scrollWidth)},w.escapeMarkup=function(l){var f={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return typeof l!="string"?l:String(l).replace(/[&<>"'\/\\]/g,function(p){return f[p]})},w.__cache={};var u=0;return w.GetUniqueElementId=function(l){var f=l.getAttribute("data-select2-id");return f!=null||(f=l.id?"select2-data-"+l.id:"select2-data-"+(++u).toString()+"-"+w.generateChars(4),l.setAttribute("data-select2-id",f)),f},w.StoreData=function(l,f,p){l=w.GetUniqueElementId(l),w.__cache[l]||(w.__cache[l]={}),w.__cache[l][f]=p},w.GetData=function(l,f){var p=w.GetUniqueElementId(l);return f?w.__cache[p]&&w.__cache[p][f]!=null?w.__cache[p][f]:v(l).data(f):w.__cache[p]},w.RemoveData=function(l){var f=w.GetUniqueElementId(l);w.__cache[f]!=null&&delete w.__cache[f],l.removeAttribute("data-select2-id")},w.copyNonInternalCssClasses=function(l,T){var p=(p=l.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")===0}),T=(T=T.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")!==0}),T=p.concat(T);l.setAttribute("class",T.join(" "))},w}),z.define("select2/results",["jquery","./utils"],function(v,w){function g(d,u,l){this.$element=d,this.data=l,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&d.attr("aria-multiselectable","true"),this.$results=d},g.prototype.clear=function(){this.$results.empty()},g.prototype.displayMessage=function(d){var u=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var l=v('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),f=this.options.get("translations").get(d.message);l.append(u(f(d.args))),l[0].className+=" select2-results__message",this.$results.append(l)},g.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},g.prototype.append=function(d){this.hideLoading();var u=[];if(d.results!=null&&d.results.length!==0){d.results=this.sort(d.results);for(var l=0;l<d.results.length;l++){var f=d.results[l],f=this.option(f);u.push(f)}this.$results.append(u)}else this.$results.children().length===0&&this.trigger("results:message",{message:"noResults"})},g.prototype.position=function(d,u){u.find(".select2-results").append(d)},g.prototype.sort=function(d){return this.options.get("sorter")(d)},g.prototype.highlightFirstItem=function(){var d=this.$results.find(".select2-results__option--selectable"),u=d.filter(".select2-results__option--selected");(0<u.length?u:d).first().trigger("mouseenter"),this.ensureHighlightVisible()},g.prototype.setClasses=function(){var d=this;this.data.current(function(u){var l=u.map(function(f){return f.id.toString()});d.$results.find(".select2-results__option--selectable").each(function(){var f=v(this),p=w.GetData(this,"data"),T=""+p.id;p.element!=null&&p.element.selected||p.element==null&&-1<l.indexOf(T)?(this.classList.add("select2-results__option--selected"),f.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),f.attr("aria-selected","false"))})})},g.prototype.showLoading=function(d){this.hideLoading(),d={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(d)},d=this.option(d),d.className+=" loading-results",this.$results.prepend(d)},g.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},g.prototype.option=function(d){var u=document.createElement("li");u.classList.add("select2-results__option"),u.classList.add("select2-results__option--selectable");var l,f={role:"option"},p=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(l in(d.element!=null&&p.call(d.element,":disabled")||d.element==null&&d.disabled)&&(f["aria-disabled"]="true",u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--disabled")),d.id==null&&u.classList.remove("select2-results__option--selectable"),d._resultId!=null&&(u.id=d._resultId),d.title&&(u.title=d.title),d.children&&(f.role="group",f["aria-label"]=d.text,u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--group")),f){var T=f[l];u.setAttribute(l,T)}if(d.children){var E=v(u),C=document.createElement("strong");C.className="select2-results__group",this.template(d,C);for(var M=[],L=0;L<d.children.length;L++){var oe=d.children[L],oe=this.option(oe);M.push(oe)}p=v("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"}),p.append(M),E.append(C),E.append(p)}else this.template(d,u);return w.StoreData(u,"data",d),u},g.prototype.bind=function(d,u){var l=this,f=d.id+"-results";this.$results.attr("id",f),d.on("results:all",function(p){l.clear(),l.append(p.data),d.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),d.on("results:append",function(p){l.append(p.data),d.isOpen()&&l.setClasses()}),d.on("query",function(p){l.hideMessages(),l.showLoading(p)}),d.on("select",function(){d.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),d.on("unselect",function(){d.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),d.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),d.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),d.on("results:toggle",function(){var p=l.getHighlightedResults();p.length!==0&&p.trigger("mouseup")}),d.on("results:select",function(){var p,T=l.getHighlightedResults();T.length!==0&&(p=w.GetData(T[0],"data"),T.hasClass("select2-results__option--selected")?l.trigger("close",{}):l.trigger("select",{data:p}))}),d.on("results:previous",function(){var p,T=l.getHighlightedResults(),E=l.$results.find(".select2-results__option--selectable"),C=E.index(T);C<=0||(p=C-1,T.length===0&&(p=0),(C=E.eq(p)).trigger("mouseenter"),T=l.$results.offset().top,E=C.offset().top,C=l.$results.scrollTop()+(E-T),p===0?l.$results.scrollTop(0):E-T<0&&l.$results.scrollTop(C))}),d.on("results:next",function(){var p,T=l.getHighlightedResults(),E=l.$results.find(".select2-results__option--selectable"),C=E.index(T)+1;C>=E.length||((p=E.eq(C)).trigger("mouseenter"),T=l.$results.offset().top+l.$results.outerHeight(!1),E=p.offset().top+p.outerHeight(!1),p=l.$results.scrollTop()+E-T,C===0?l.$results.scrollTop(0):T<E&&l.$results.scrollTop(p))}),d.on("results:focus",function(p){p.element[0].classList.add("select2-results__option--highlighted"),p.element[0].setAttribute("aria-selected","true")}),d.on("results:message",function(p){l.displayMessage(p)}),v.fn.mousewheel&&this.$results.on("mousewheel",function(p){var T=l.$results.scrollTop(),E=l.$results.get(0).scrollHeight-T+p.deltaY,T=0<p.deltaY&&T-p.deltaY<=0,E=p.deltaY<0&&E<=l.$results.height();T?(l.$results.scrollTop(0),p.preventDefault(),p.stopPropagation()):E&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),p.preventDefault(),p.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(p){var T=v(this),E=w.GetData(this,"data");T.hasClass("select2-results__option--selected")?l.options.get("multiple")?l.trigger("unselect",{originalEvent:p,data:E}):l.trigger("close",{}):l.trigger("select",{originalEvent:p,data:E})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(p){var T=w.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),l.trigger("results:focus",{data:T,element:v(this)})})},g.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},g.prototype.destroy=function(){this.$results.remove()},g.prototype.ensureHighlightVisible=function(){var d,u,l,f,p=this.getHighlightedResults();p.length!==0&&(d=this.$results.find(".select2-results__option--selectable").index(p),f=this.$results.offset().top,u=p.offset().top,l=this.$results.scrollTop()+(u-f),f=u-f,l-=2*p.outerHeight(!1),d<=2?this.$results.scrollTop(0):(f>this.$results.outerHeight()||f<0)&&this.$results.scrollTop(l))},g.prototype.template=function(p,u){var l=this.options.get("templateResult"),f=this.options.get("escapeMarkup"),p=l(p,u);p==null?u.style.display="none":typeof p=="string"?u.innerHTML=f(p):v(u).append(p)},g}),z.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),z.define("select2/selection/base",["jquery","../utils","../keys"],function(v,w,g){function d(u,l){this.$element=u,this.options=l,d.__super__.constructor.call(this)}return w.Extend(d,w.Observable),d.prototype.render=function(){var u=v('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,w.GetData(this.$element[0],"old-tabindex")!=null?this._tabindex=w.GetData(this.$element[0],"old-tabindex"):this.$element.attr("tabindex")!=null&&(this._tabindex=this.$element.attr("tabindex")),u.attr("title",this.$element.attr("title")),u.attr("tabindex",this._tabindex),u.attr("aria-disabled","false"),this.$selection=u},d.prototype.bind=function(u,l){var f=this,p=u.id+"-results";this.container=u,this.$selection.on("focus",function(T){f.trigger("focus",T)}),this.$selection.on("blur",function(T){f._handleBlur(T)}),this.$selection.on("keydown",function(T){f.trigger("keypress",T),T.which===g.SPACE&&T.preventDefault()}),u.on("results:focus",function(T){f.$selection.attr("aria-activedescendant",T.data._resultId)}),u.on("selection:update",function(T){f.update(T.data)}),u.on("open",function(){f.$selection.attr("aria-expanded","true"),f.$selection.attr("aria-owns",p),f._attachCloseHandler(u)}),u.on("close",function(){f.$selection.attr("aria-expanded","false"),f.$selection.removeAttr("aria-activedescendant"),f.$selection.removeAttr("aria-owns"),f.$selection.trigger("focus"),f._detachCloseHandler(u)}),u.on("enable",function(){f.$selection.attr("tabindex",f._tabindex),f.$selection.attr("aria-disabled","false")}),u.on("disable",function(){f.$selection.attr("tabindex","-1"),f.$selection.attr("aria-disabled","true")})},d.prototype._handleBlur=function(u){var l=this;window.setTimeout(function(){document.activeElement==l.$selection[0]||v.contains(l.$selection[0],document.activeElement)||l.trigger("blur",u)},1)},d.prototype._attachCloseHandler=function(u){v(document.body).on("mousedown.select2."+u.id,function(l){var f=v(l.target).closest(".select2");v(".select2.select2-container--open").each(function(){this!=f[0]&&w.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(u){v(document.body).off("mousedown.select2."+u.id)},d.prototype.position=function(u,l){l.find(".selection").append(u)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(u){throw new Error("The `update` method must be defined in child classes.")},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d}),z.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(v,w,g,d){function u(){u.__super__.constructor.apply(this,arguments)}return g.Extend(u,w),u.prototype.render=function(){var l=u.__super__.render.call(this);return l[0].classList.add("select2-selection--single"),l.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),l},u.prototype.bind=function(l,f){var p=this;u.__super__.bind.apply(this,arguments);var T=l.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",T).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",T),this.$selection.attr("aria-controls",T),this.$selection.on("mousedown",function(E){E.which===1&&p.trigger("toggle",{originalEvent:E})}),this.$selection.on("focus",function(E){}),this.$selection.on("blur",function(E){}),l.on("focus",function(E){l.isOpen()||p.$selection.trigger("focus")})},u.prototype.clear=function(){var l=this.$selection.find(".select2-selection__rendered");l.empty(),l.removeAttr("title")},u.prototype.display=function(l,f){var p=this.options.get("templateSelection");return this.options.get("escapeMarkup")(p(l,f))},u.prototype.selectionContainer=function(){return v("<span></span>")},u.prototype.update=function(l){var f,p;l.length!==0?(p=l[0],f=this.$selection.find(".select2-selection__rendered"),l=this.display(p,f),f.empty().append(l),(p=p.title||p.text)?f.attr("title",p):f.removeAttr("title")):this.clear()},u}),z.define("select2/selection/multiple",["jquery","./base","../utils"],function(v,w,g){function d(u,l){d.__super__.constructor.apply(this,arguments)}return g.Extend(d,w),d.prototype.render=function(){var u=d.__super__.render.call(this);return u[0].classList.add("select2-selection--multiple"),u.html('<ul class="select2-selection__rendered"></ul>'),u},d.prototype.bind=function(u,l){var f=this;d.__super__.bind.apply(this,arguments);var p=u.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",p),this.$selection.on("click",function(T){f.trigger("toggle",{originalEvent:T})}),this.$selection.on("click",".select2-selection__choice__remove",function(T){var E;f.isDisabled()||(E=v(this).parent(),E=g.GetData(E[0],"data"),f.trigger("unselect",{originalEvent:T,data:E}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(T){f.isDisabled()||T.stopPropagation()})},d.prototype.clear=function(){var u=this.$selection.find(".select2-selection__rendered");u.empty(),u.removeAttr("title")},d.prototype.display=function(u,l){var f=this.options.get("templateSelection");return this.options.get("escapeMarkup")(f(u,l))},d.prototype.selectionContainer=function(){return v('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},d.prototype.update=function(u){if(this.clear(),u.length!==0){for(var l=[],f=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",p=0;p<u.length;p++){var T=u[p],E=this.selectionContainer(),C=this.display(T,E),M=f+g.generateChars(4)+"-";T.id?M+=T.id:M+=g.generateChars(4),E.find(".select2-selection__choice__display").append(C).attr("id",M);var L=T.title||T.text;L&&E.attr("title",L),C=this.options.get("translations").get("removeItem"),L=E.find(".select2-selection__choice__remove"),L.attr("title",C()),L.attr("aria-label",C()),L.attr("aria-describedby",M),g.StoreData(E[0],"data",T),l.push(E)}this.$selection.find(".select2-selection__rendered").append(l)}},d}),z.define("select2/selection/placeholder",[],function(){function v(w,g,d){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d)}return v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.createPlaceholder=function(w,g){var d=this.selectionContainer();return d.html(this.display(g)),d[0].classList.add("select2-selection__placeholder"),d[0].classList.remove("select2-selection__choice"),g=g.title||g.text||d.text(),this.$selection.find(".select2-selection__rendered").attr("title",g),d},v.prototype.update=function(w,g){var d=g.length==1&&g[0].id!=this.placeholder.id;if(1<g.length||d)return w.call(this,g);this.clear(),g=this.createPlaceholder(this.placeholder),this.$selection.find(".select2-selection__rendered").append(g)},v}),z.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(v,w,g){function d(){}return d.prototype.bind=function(u,l,f){var p=this;u.call(this,l,f),this.placeholder==null&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(T){p._handleClear(T)}),l.on("keypress",function(T){p._handleKeyboardClear(T,l)})},d.prototype._handleClear=function(u,l){if(!this.isDisabled()){var f=this.$selection.find(".select2-selection__clear");if(f.length!==0){l.stopPropagation();var p=g.GetData(f[0],"data"),T=this.$element.val();this.$element.val(this.placeholder.id);var E={data:p};if(this.trigger("clear",E),E.prevented)this.$element.val(T);else{for(var C=0;C<p.length;C++)if(E={data:p[C]},this.trigger("unselect",E),E.prevented)return void this.$element.val(T);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},d.prototype._handleKeyboardClear=function(u,l,f){f.isOpen()||l.which!=w.DELETE&&l.which!=w.BACKSPACE||this._handleClear(l)},d.prototype.update=function(u,l){var f,p;u.call(this,l),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||l.length===0||(f=this.$selection.find(".select2-selection__rendered").attr("id"),p=this.options.get("translations").get("removeAllItems"),(u=v('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",p()),u.attr("aria-label",p()),u.attr("aria-describedby",f),g.StoreData(u[0],"data",l),this.$selection.prepend(u),this.$selection[0].classList.add("select2-selection--clearable"))},d}),z.define("select2/selection/search",["jquery","../utils","../keys"],function(v,w,g){function d(u,l,f){u.call(this,l,f)}return d.prototype.render=function(u){var l=this.options.get("translations").get("search"),f=v('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');return this.$searchContainer=f,this.$search=f.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",l()),u=u.call(this),this._transferTabIndex(),u.append(this.$searchContainer),u},d.prototype.bind=function(u,C,f){var p=this,T=C.id+"-results",E=C.id+"-container";u.call(this,C,f),p.$search.attr("aria-describedby",E),C.on("open",function(){p.$search.attr("aria-controls",T),p.$search.trigger("focus")}),C.on("close",function(){p.$search.val(""),p.resizeSearch(),p.$search.removeAttr("aria-controls"),p.$search.removeAttr("aria-activedescendant"),p.$search.trigger("focus")}),C.on("enable",function(){p.$search.prop("disabled",!1),p._transferTabIndex()}),C.on("disable",function(){p.$search.prop("disabled",!0)}),C.on("focus",function(L){p.$search.trigger("focus")}),C.on("results:focus",function(L){L.data._resultId?p.$search.attr("aria-activedescendant",L.data._resultId):p.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(L){p.trigger("focus",L)}),this.$selection.on("focusout",".select2-search--inline",function(L){p._handleBlur(L)}),this.$selection.on("keydown",".select2-search--inline",function(L){var oe;L.stopPropagation(),p.trigger("keypress",L),p._keyUpPrevented=L.isDefaultPrevented(),L.which!==g.BACKSPACE||p.$search.val()!==""||0<(oe=p.$selection.find(".select2-selection__choice").last()).length&&(oe=w.GetData(oe[0],"data"),p.searchRemoveChoice(oe),L.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(L){p.$search.val()&&L.stopPropagation()});var C=document.documentMode,M=C&&C<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(L){M?p.$selection.off("input.search input.searchcheck"):p.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(L){var oe;M&&L.type==="input"?p.$selection.off("input.search input.searchcheck"):(oe=L.which)!=g.SHIFT&&oe!=g.CTRL&&oe!=g.ALT&&oe!=g.TAB&&p.handleSearch(L)})},d.prototype._transferTabIndex=function(u){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(u,l){this.$search.attr("placeholder",l.text)},d.prototype.update=function(u,l){var f=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),u.call(this,l),this.resizeSearch(),f&&this.$search.trigger("focus")},d.prototype.handleSearch=function(){var u;this.resizeSearch(),this._keyUpPrevented||(u=this.$search.val(),this.trigger("query",{term:u})),this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(u,l){this.trigger("unselect",{data:l}),this.$search.val(l.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var u="100%";this.$search.attr("placeholder")===""&&(u=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",u)},d}),z.define("select2/selection/selectionCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("selectionCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/selection/eventRelay",["jquery"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var l=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],p=["opening","closing","selecting","unselecting","clearing"];g.call(this,d,u),d.on("*",function(T,E){var C;f.indexOf(T)!==-1&&(E=E||{},C=v.Event("select2:"+T,{params:E}),l.$element.trigger(C),p.indexOf(T)!==-1&&(E.prevented=C.isDefaultPrevented()))})},w}),z.define("select2/translation",["jquery","require"],function(v,w){function g(d){this.dict=d||{}}return g.prototype.all=function(){return this.dict},g.prototype.get=function(d){return this.dict[d]},g.prototype.extend=function(d){this.dict=v.extend({},d.all(),this.dict)},g._cache={},g.loadPath=function(d){var u;return d in g._cache||(u=w(d),g._cache[d]=u),new g(g._cache[d])},g}),z.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B","Ƀ":"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D","Ꝺ":"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F","Ꝼ":"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J","Ɉ":"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M","Ɱ":"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N","Ƞ":"N",Ɲ:"N","Ꞑ":"N","Ꞥ":"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O","Ꝋ":"O","Ꝍ":"O",Œ:"OE",Ƣ:"OI","Ꝏ":"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q",Ｑ:"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S",Ｓ:"S","ẞ":"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U","Ʉ":"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W","Ⱳ":"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a","ⱥ":"a",ɐ:"a","ꜳ":"aa",æ:"ae",ǽ:"ae",ǣ:"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d","ꝺ":"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e","ɇ":"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f","ꝼ":"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h","ⱨ":"h","ⱶ":"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j","ɉ":"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n","ꞑ":"n","ꞥ":"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o","ꝋ":"o","ꝍ":"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou","ꝏ":"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q",ｑ:"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r","ɍ":"r",ɽ:"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s","ȿ":"s","ꞩ":"s","ꞅ":"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v","ꝟ":"v",ʌ:"v","ꝡ":"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w","ⱳ":"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y","ɏ":"y","ỿ":"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z","ɀ":"z","ⱬ":"z","ꝣ":"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),z.define("select2/data/base",["../utils"],function(v){function w(g,d){w.__super__.constructor.call(this)}return v.Extend(w,v.Observable),w.prototype.current=function(g){throw new Error("The `current` method must be defined in child classes.")},w.prototype.query=function(g,d){throw new Error("The `query` method must be defined in child classes.")},w.prototype.bind=function(g,d){},w.prototype.destroy=function(){},w.prototype.generateResultId=function(g,d){return g=g.id+"-result-",g+=v.generateChars(4),d.id!=null?g+="-"+d.id.toString():g+="-"+v.generateChars(4),g},w}),z.define("select2/data/select",["./base","../utils","jquery"],function(v,w,g){function d(u,l){this.$element=u,this.options=l,d.__super__.constructor.call(this)}return w.Extend(d,v),d.prototype.current=function(u){var l=this;u(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(f){return l.item(g(f))}))},d.prototype.select=function(u){var l,f=this;if(u.selected=!0,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(p){var T=[];(u=[u]).push.apply(u,p);for(var E=0;E<u.length;E++){var C=u[E].id;T.indexOf(C)===-1&&T.push(C)}f.$element.val(T),f.$element.trigger("input").trigger("change")}):(l=u.id,this.$element.val(l),this.$element.trigger("input").trigger("change"))},d.prototype.unselect=function(u){var l=this;if(this.$element.prop("multiple")){if(u.selected=!1,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(f){for(var p=[],T=0;T<f.length;T++){var E=f[T].id;E!==u.id&&p.indexOf(E)===-1&&p.push(E)}l.$element.val(p),l.$element.trigger("input").trigger("change")})}},d.prototype.bind=function(u,l){var f=this;(this.container=u).on("select",function(p){f.select(p.data)}),u.on("unselect",function(p){f.unselect(p.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){w.RemoveData(this)})},d.prototype.query=function(u,l){var f=[],p=this;this.$element.children().each(function(){var T;this.tagName.toLowerCase()!=="option"&&this.tagName.toLowerCase()!=="optgroup"||(T=g(this),T=p.item(T),(T=p.matches(u,T))!==null&&f.push(T))}),l({results:f})},d.prototype.addOptions=function(u){this.$element.append(u)},d.prototype.option=function(u){var l;return u.children?(l=document.createElement("optgroup")).label=u.text:(l=document.createElement("option")).textContent!==void 0?l.textContent=u.text:l.innerText=u.text,u.id!==void 0&&(l.value=u.id),u.disabled&&(l.disabled=!0),u.selected&&(l.selected=!0),u.title&&(l.title=u.title),u=this._normalizeItem(u),u.element=l,w.StoreData(l,"data",u),g(l)},d.prototype.item=function(u){var l={};if((l=w.GetData(u[0],"data"))!=null)return l;var f=u[0];if(f.tagName.toLowerCase()==="option")l={id:u.val(),text:u.text(),disabled:u.prop("disabled"),selected:u.prop("selected"),title:u.prop("title")};else if(f.tagName.toLowerCase()==="optgroup"){l={text:u.prop("label"),children:[],title:u.prop("title")};for(var p=u.children("option"),T=[],E=0;E<p.length;E++){var C=g(p[E]),C=this.item(C);T.push(C)}l.children=T}return(l=this._normalizeItem(l)).element=u[0],w.StoreData(u[0],"data",l),l},d.prototype._normalizeItem=function(u){return u!==Object(u)&&(u={id:u,text:u}),(u=g.extend({},{text:""},u)).id!=null&&(u.id=u.id.toString()),u.text!=null&&(u.text=u.text.toString()),u._resultId==null&&u.id&&this.container!=null&&(u._resultId=this.generateResultId(this.container,u)),g.extend({},{selected:!1,disabled:!1},u)},d.prototype.matches=function(u,l){return this.options.get("matcher")(u,l)},d}),z.define("select2/data/array",["./select","../utils","jquery"],function(v,w,g){function d(u,l){this._dataToConvert=l.get("data")||[],d.__super__.constructor.call(this,u,l)}return w.Extend(d,v),d.prototype.bind=function(u,l){d.__super__.bind.call(this,u,l),this.addOptions(this.convertToOptions(this._dataToConvert))},d.prototype.select=function(u){var l=this.$element.find("option").filter(function(f,p){return p.value==u.id.toString()});l.length===0&&(l=this.option(u),this.addOptions(l)),d.__super__.select.call(this,u)},d.prototype.convertToOptions=function(u){for(var l=this,f=this.$element.find("option"),p=f.map(function(){return l.item(g(this)).id}).get(),T=[],E=0;E<u.length;E++){var C,M,L=this._normalizeItem(u[E]);0<=p.indexOf(L.id)?(C=f.filter(function(oe){return function(){return g(this).val()==oe.id}}(L)),M=this.item(C),M=g.extend(!0,{},L,M),M=this.option(M),C.replaceWith(M)):(M=this.option(L),L.children&&(L=this.convertToOptions(L.children),M.append(L)),T.push(M))}return T},d}),z.define("select2/data/ajax",["./array","../utils","jquery"],function(v,w,g){function d(u,l){this.ajaxOptions=this._applyDefaults(l.get("ajax")),this.ajaxOptions.processResults!=null&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,u,l)}return w.Extend(d,v),d.prototype._applyDefaults=function(u){var l={data:function(f){return g.extend({},f,{q:f.term})},transport:function(f,p,T){return f=g.ajax(f),f.then(p),f.fail(T),f}};return g.extend({},l,u,!0)},d.prototype.processResults=function(u){return u},d.prototype.query=function(u,l){var f=this;this._request!=null&&(typeof this._request.abort=="function"&&this._request.abort(),this._request=null);var p=g.extend({type:"GET"},this.ajaxOptions);function T(){var E=p.transport(p,function(C){C=f.processResults(C,u),f.options.get("debug")&&window.console&&console.error&&(C&&C.results&&Array.isArray(C.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),l(C)},function(){"status"in E&&(E.status===0||E.status==="0")||f.trigger("results:message",{message:"errorLoading"})});f._request=E}typeof p.url=="function"&&(p.url=p.url.call(this.$element,u)),typeof p.data=="function"&&(p.data=p.data.call(this.$element,u)),this.ajaxOptions.delay&&u.term!=null?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(T,this.ajaxOptions.delay)):T()},d}),z.define("select2/data/tags",["jquery"],function(v){function w(g,d,u){var l=u.get("tags"),f=u.get("createTag");if(f!==void 0&&(this.createTag=f),f=u.get("insertTag"),f!==void 0&&(this.insertTag=f),g.call(this,d,u),Array.isArray(l))for(var p=0;p<l.length;p++){var T=l[p],T=this._normalizeItem(T),T=this.option(T);this.$element.append(T)}}return w.prototype.query=function(g,d,u){var l=this;this._removeOldTags(),d.term!=null&&d.page==null?g.call(this,d,function f(p,T){for(var E=p.results,C=0;C<E.length;C++){var M=E[C],L=M.children!=null&&!f({results:M.children},!0);if((M.text||"").toUpperCase()===(d.term||"").toUpperCase()||L)return!T&&(p.data=E,void u(p))}if(T)return!0;var oe,pe=l.createTag(d);pe!=null&&((oe=l.option(pe)).attr("data-select2-tag","true"),l.addOptions([oe]),l.insertTag(E,pe)),p.results=E,u(p)}):g.call(this,d,u)},w.prototype.createTag=function(g,d){return d.term==null?null:(d=d.term.trim(),d===""?null:{id:d,text:d})},w.prototype.insertTag=function(g,d,u){d.unshift(u)},w.prototype._removeOldTags=function(g){this.$element.find("option[data-select2-tag]").each(function(){this.selected||v(this).remove()})},w}),z.define("select2/data/tokenizer",["jquery"],function(v){function w(g,d,u){var l=u.get("tokenizer");l!==void 0&&(this.tokenizer=l),g.call(this,d,u)}return w.prototype.bind=function(g,d,u){g.call(this,d,u),this.$search=d.dropdown.$search||d.selection.$search||u.find(".select2-search__field")},w.prototype.query=function(g,d,u){var l=this;d.term=d.term||"";var f=this.tokenizer(d,this.options,function(p){var T,E=l._normalizeItem(p);l.$element.find("option").filter(function(){return v(this).val()===E.id}).length||((T=l.option(E)).attr("data-select2-tag",!0),l._removeOldTags(),l.addOptions([T])),T=E,l.trigger("select",{data:T})});f.term!==d.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.trigger("focus")),d.term=f.term),g.call(this,d,u)},w.prototype.tokenizer=function(g,d,u,l){for(var f=u.get("tokenSeparators")||[],p=d.term,T=0,E=this.createTag||function(M){return{id:M.term,text:M.term}};T<p.length;){var C=p[T];f.indexOf(C)!==-1?(C=p.substr(0,T),(C=E(v.extend({},d,{term:C})))!=null?(l(C),p=p.substr(T+1)||"",T=0):T++):T++}return{term:p}},w}),z.define("select2/data/minimumInputLength",[],function(){function v(w,g,d){this.minimumInputLength=d.get("minimumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",g.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumInputLength",[],function(){function v(w,g,d){this.maximumInputLength=d.get("maximumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",0<this.maximumInputLength&&g.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumSelectionLength",[],function(){function v(w,g,d){this.maximumSelectionLength=d.get("maximumSelectionLength"),w.call(this,g,d)}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(){u._checkIfMaximumSelected()})},v.prototype.query=function(w,g,d){var u=this;this._checkIfMaximumSelected(function(){w.call(u,g,d)})},v.prototype._checkIfMaximumSelected=function(w,g){var d=this;this.current(function(u){u=u!=null?u.length:0,0<d.maximumSelectionLength&&u>=d.maximumSelectionLength?d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):g&&g()})},v}),z.define("select2/dropdown",["jquery","./utils"],function(v,w){function g(d,u){this.$element=d,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<span class="select2-dropdown"><span class="select2-results"></span></span>');return d.attr("dir",this.options.get("dir")),this.$dropdown=d},g.prototype.bind=function(){},g.prototype.position=function(d,u){},g.prototype.destroy=function(){this.$dropdown.remove()},g}),z.define("select2/dropdown/search",["jquery"],function(v){function w(){}return w.prototype.render=function(l){var d=l.call(this),u=this.options.get("translations").get("search"),l=v('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=l,this.$search=l.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",u()),d.prepend(l),d},w.prototype.bind=function(g,d,u){var l=this,f=d.id+"-results";g.call(this,d,u),this.$search.on("keydown",function(p){l.trigger("keypress",p),l._keyUpPrevented=p.isDefaultPrevented()}),this.$search.on("input",function(p){v(this).off("keyup")}),this.$search.on("keyup input",function(p){l.handleSearch(p)}),d.on("open",function(){l.$search.attr("tabindex",0),l.$search.attr("aria-controls",f),l.$search.trigger("focus"),window.setTimeout(function(){l.$search.trigger("focus")},0)}),d.on("close",function(){l.$search.attr("tabindex",-1),l.$search.removeAttr("aria-controls"),l.$search.removeAttr("aria-activedescendant"),l.$search.val(""),l.$search.trigger("blur")}),d.on("focus",function(){d.isOpen()||l.$search.trigger("focus")}),d.on("results:all",function(p){p.query.term!=null&&p.query.term!==""||(l.showSearch(p)?l.$searchContainer[0].classList.remove("select2-search--hide"):l.$searchContainer[0].classList.add("select2-search--hide"))}),d.on("results:focus",function(p){p.data._resultId?l.$search.attr("aria-activedescendant",p.data._resultId):l.$search.removeAttr("aria-activedescendant")})},w.prototype.handleSearch=function(g){var d;this._keyUpPrevented||(d=this.$search.val(),this.trigger("query",{term:d})),this._keyUpPrevented=!1},w.prototype.showSearch=function(g,d){return!0},w}),z.define("select2/dropdown/hidePlaceholder",[],function(){function v(w,g,d,u){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d,u)}return v.prototype.append=function(w,g){g.results=this.removePlaceholder(g.results),w.call(this,g)},v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.removePlaceholder=function(w,g){for(var d=g.slice(0),u=g.length-1;0<=u;u--){var l=g[u];this.placeholder.id===l.id&&d.splice(u,1)}return d},v}),z.define("select2/dropdown/infiniteScroll",["jquery"],function(v){function w(g,d,u,l){this.lastParams={},g.call(this,d,u,l),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return w.prototype.append=function(g,d){this.$loadingMore.remove(),this.loading=!1,g.call(this,d),this.showLoadingMore(d)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},w.prototype.bind=function(g,d,u){var l=this;g.call(this,d,u),d.on("query",function(f){l.lastParams=f,l.loading=!0}),d.on("query:append",function(f){l.lastParams=f,l.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},w.prototype.loadMoreIfNeeded=function(){var g=v.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&g&&(g=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=g+50&&this.loadMore())},w.prototype.loadMore=function(){this.loading=!0;var g=v.extend({},{page:1},this.lastParams);g.page++,this.trigger("query:append",g)},w.prototype.showLoadingMore=function(g,d){return d.pagination&&d.pagination.more},w.prototype.createLoadingMore=function(){var g=v('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),d=this.options.get("translations").get("loadingMore");return g.html(d(this.lastParams)),g},w}),z.define("select2/dropdown/attachBody",["jquery","../utils"],function(v,w){function g(d,u,l){this.$dropdownParent=v(l.get("dropdownParent")||document.body),d.call(this,u,l)}return g.prototype.bind=function(d,u,l){var f=this;d.call(this,u,l),u.on("open",function(){f._showDropdown(),f._attachPositioningHandler(u),f._bindContainerResultHandlers(u)}),u.on("close",function(){f._hideDropdown(),f._detachPositioningHandler(u)}),this.$dropdownContainer.on("mousedown",function(p){p.stopPropagation()})},g.prototype.destroy=function(d){d.call(this),this.$dropdownContainer.remove()},g.prototype.position=function(d,u,l){u.attr("class",l.attr("class")),u[0].classList.remove("select2"),u[0].classList.add("select2-container--open"),u.css({position:"absolute",top:-999999}),this.$container=l},g.prototype.render=function(l){var u=v("<span></span>"),l=l.call(this);return u.append(l),this.$dropdownContainer=u},g.prototype._hideDropdown=function(d){this.$dropdownContainer.detach()},g.prototype._bindContainerResultHandlers=function(d,u){var l;this._containerResultsHandlersBound||(l=this,u.on("results:all",function(){l._positionDropdown(),l._resizeDropdown()}),u.on("results:append",function(){l._positionDropdown(),l._resizeDropdown()}),u.on("results:message",function(){l._positionDropdown(),l._resizeDropdown()}),u.on("select",function(){l._positionDropdown(),l._resizeDropdown()}),u.on("unselect",function(){l._positionDropdown(),l._resizeDropdown()}),this._containerResultsHandlersBound=!0)},g.prototype._attachPositioningHandler=function(d,E){var l=this,f="scroll.select2."+E.id,p="resize.select2."+E.id,T="orientationchange.select2."+E.id,E=this.$container.parents().filter(w.hasScroll);E.each(function(){w.StoreData(this,"select2-scroll-position",{x:v(this).scrollLeft(),y:v(this).scrollTop()})}),E.on(f,function(C){var M=w.GetData(this,"select2-scroll-position");v(this).scrollTop(M.y)}),v(window).on(f+" "+p+" "+T,function(C){l._positionDropdown(),l._resizeDropdown()})},g.prototype._detachPositioningHandler=function(d,p){var l="scroll.select2."+p.id,f="resize.select2."+p.id,p="orientationchange.select2."+p.id;this.$container.parents().filter(w.hasScroll).off(l),v(window).off(l+" "+f+" "+p)},g.prototype._positionDropdown=function(){var C=v(window),d=this.$dropdown[0].classList.contains("select2-dropdown--above"),u=this.$dropdown[0].classList.contains("select2-dropdown--below"),l=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var p={height:this.$container.outerHeight(!1)};p.top=f.top,p.bottom=f.top+p.height;var T=this.$dropdown.outerHeight(!1),M=C.scrollTop(),L=C.scrollTop()+C.height(),E=M<f.top-T,C=L>f.bottom+T,M={left:f.left,top:p.bottom},L=this.$dropdownParent;L.css("position")==="static"&&(L=L.offsetParent()),f={top:0,left:0},(v.contains(document.body,L[0])||L[0].isConnected)&&(f=L.offset()),M.top-=f.top,M.left-=f.left,d||u||(l="below"),C||!E||d?!E&&C&&d&&(l="below"):l="above",(l=="above"||d&&l!=="below")&&(M.top=p.top-f.top-T),l!=null&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+l),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+l)),this.$dropdownContainer.css(M)},g.prototype._resizeDropdown=function(){var d={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(d.minWidth=d.width,d.position="relative",d.width="auto"),this.$dropdown.css(d)},g.prototype._showDropdown=function(d){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},g}),z.define("select2/dropdown/minimumResultsForSearch",[],function(){function v(w,g,d,u){this.minimumResultsForSearch=d.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),w.call(this,g,d,u)}return v.prototype.showSearch=function(w,g){return!(function d(u){for(var l=0,f=0;f<u.length;f++){var p=u[f];p.children?l+=d(p.children):l++}return l}(g.data.results)<this.minimumResultsForSearch)&&w.call(this,g)},v}),z.define("select2/dropdown/selectOnClose",["../utils"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var l=this;g.call(this,d,u),d.on("close",function(f){l._handleSelectOnClose(f)})},w.prototype._handleSelectOnClose=function(g,d){if(d&&d.originalSelect2Event!=null){var u=d.originalSelect2Event;if(u._type==="select"||u._type==="unselect")return}u=this.getHighlightedResults(),u.length<1||(u=v.GetData(u[0],"data")).element!=null&&u.element.selected||u.element==null&&u.selected||this.trigger("select",{data:u})},w}),z.define("select2/dropdown/closeOnSelect",[],function(){function v(){}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(l){u._selectTriggered(l)}),g.on("unselect",function(l){u._selectTriggered(l)})},v.prototype._selectTriggered=function(w,g){var d=g.originalEvent;d&&(d.ctrlKey||d.metaKey)||this.trigger("close",{originalEvent:d,originalSelect2Event:g})},v}),z.define("select2/dropdown/dropdownCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("dropdownCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(v){function w(){}return w.prototype.highlightFirstItem=function(g){var d=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<d.length){var u=d.first(),d=v.GetData(u[0],"data").element;if(d&&d.getAttribute&&d.getAttribute("data-select2-tag")==="true")return void u.trigger("mouseenter")}g.call(this)},w}),z.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(g){var w=g.input.length-g.maximum,g="Please delete "+w+" character";return w!=1&&(g+="s"),g},inputTooShort:function(v){return"Please enter "+(v.minimum-v.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(v){var w="You can only select "+v.maximum+" item";return v.maximum!=1&&(w+="s"),w},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),z.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(v,w,g,d,u,l,f,p,T,E,C,M,L,oe,pe,Re,Ze,Pn,D,W,q,Q,ce,Te,ie,y,I,R,P,x,U){function V(){this.reset()}return V.prototype.apply=function(A){var N;(A=v.extend(!0,{},this.defaults,A)).dataAdapter==null&&(A.ajax!=null?A.dataAdapter=pe:A.data!=null?A.dataAdapter=oe:A.dataAdapter=L,0<A.minimumInputLength&&(A.dataAdapter=E.Decorate(A.dataAdapter,Pn)),0<A.maximumInputLength&&(A.dataAdapter=E.Decorate(A.dataAdapter,D)),0<A.maximumSelectionLength&&(A.dataAdapter=E.Decorate(A.dataAdapter,W)),A.tags&&(A.dataAdapter=E.Decorate(A.dataAdapter,Re)),A.tokenSeparators==null&&A.tokenizer==null||(A.dataAdapter=E.Decorate(A.dataAdapter,Ze))),A.resultsAdapter==null&&(A.resultsAdapter=w,A.ajax!=null&&(A.resultsAdapter=E.Decorate(A.resultsAdapter,Te)),A.placeholder!=null&&(A.resultsAdapter=E.Decorate(A.resultsAdapter,ce)),A.selectOnClose&&(A.resultsAdapter=E.Decorate(A.resultsAdapter,I)),A.tags&&(A.resultsAdapter=E.Decorate(A.resultsAdapter,x))),A.dropdownAdapter==null&&(A.multiple?A.dropdownAdapter=q:(N=E.Decorate(q,Q),A.dropdownAdapter=N),A.minimumResultsForSearch!==0&&(A.dropdownAdapter=E.Decorate(A.dropdownAdapter,y)),A.closeOnSelect&&(A.dropdownAdapter=E.Decorate(A.dropdownAdapter,R)),A.dropdownCssClass!=null&&(A.dropdownAdapter=E.Decorate(A.dropdownAdapter,P)),A.dropdownAdapter=E.Decorate(A.dropdownAdapter,ie)),A.selectionAdapter==null&&(A.multiple?A.selectionAdapter=d:A.selectionAdapter=g,A.placeholder!=null&&(A.selectionAdapter=E.Decorate(A.selectionAdapter,u)),A.allowClear&&(A.selectionAdapter=E.Decorate(A.selectionAdapter,l)),A.multiple&&(A.selectionAdapter=E.Decorate(A.selectionAdapter,f)),A.selectionCssClass!=null&&(A.selectionAdapter=E.Decorate(A.selectionAdapter,p)),A.selectionAdapter=E.Decorate(A.selectionAdapter,T)),A.language=this._resolveLanguage(A.language),A.language.push("en");for(var O=[],B=0;B<A.language.length;B++){var F=A.language[B];O.indexOf(F)===-1&&O.push(F)}return A.language=O,A.translations=this._processTranslations(A.language,A.debug),A},V.prototype.reset=function(){function A(N){return N.replace(/[^\u0000-\u007E]/g,function(O){return M[O]||O})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:E.escapeMarkup,language:{},matcher:function N(O,B){if(O.term==null||O.term.trim()==="")return B;if(B.children&&0<B.children.length){for(var F=v.extend(!0,{},B),H=B.children.length-1;0<=H;H--)N(O,B.children[H])==null&&F.children.splice(H,1);return 0<F.children.length?F:N(O,F)}var ne=A(B.text).toUpperCase(),ae=A(O.term).toUpperCase();return-1<ne.indexOf(ae)?B:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(N){return N},templateResult:function(N){return N.text},templateSelection:function(N){return N.text},theme:"default",width:"resolve"}},V.prototype.applyFromElement=function(A,H){var O=A.language,B=this.defaults.language,F=H.prop("lang"),H=H.closest("[lang]").prop("lang"),H=Array.prototype.concat.call(this._resolveLanguage(F),this._resolveLanguage(O),this._resolveLanguage(B),this._resolveLanguage(H));return A.language=H,A},V.prototype._resolveLanguage=function(A){if(!A)return[];if(v.isEmptyObject(A))return[];if(v.isPlainObject(A))return[A];for(var N,O=Array.isArray(A)?A:[A],B=[],F=0;F<O.length;F++)B.push(O[F]),typeof O[F]=="string"&&0<O[F].indexOf("-")&&(N=O[F].split("-")[0],B.push(N));return B},V.prototype._processTranslations=function(A,N){for(var O=new C,B=0;B<A.length;B++){var F=new C,H=A[B];if(typeof H=="string")try{F=C.loadPath(H)}catch{try{H=this.defaults.amdLanguageBase+H,F=C.loadPath(H)}catch{N&&window.console&&console.warn&&console.warn('Select2: The language file for "'+H+'" could not be automatically loaded. A fallback will be used instead.')}}else F=v.isPlainObject(H)?new C(H):H;O.extend(F)}return O},V.prototype.set=function(A,N){var O={};O[v.camelCase(A)]=N,O=E._convertData(O),v.extend(!0,this.defaults,O)},new V}),z.define("select2/options",["jquery","./defaults","./utils"],function(v,w,g){function d(u,l){this.options=u,l!=null&&this.fromElement(l),l!=null&&(this.options=w.applyFromElement(this.options,l)),this.options=w.apply(this.options)}return d.prototype.fromElement=function(u){var l=["select2"];this.options.multiple==null&&(this.options.multiple=u.prop("multiple")),this.options.disabled==null&&(this.options.disabled=u.prop("disabled")),this.options.autocomplete==null&&u.prop("autocomplete")&&(this.options.autocomplete=u.prop("autocomplete")),this.options.dir==null&&(u.prop("dir")?this.options.dir=u.prop("dir"):u.closest("[dir]").prop("dir")?this.options.dir=u.closest("[dir]").prop("dir"):this.options.dir="ltr"),u.prop("disabled",this.options.disabled),u.prop("multiple",this.options.multiple),g.GetData(u[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),g.StoreData(u[0],"data",g.GetData(u[0],"select2Tags")),g.StoreData(u[0],"tags",!0)),g.GetData(u[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),u.attr("ajax--url",g.GetData(u[0],"ajaxUrl")),g.StoreData(u[0],"ajax-Url",g.GetData(u[0],"ajaxUrl")));var f={};function p(oe,pe){return pe.toUpperCase()}for(var T=0;T<u[0].attributes.length;T++){var E=u[0].attributes[T].name,C="data-";E.substr(0,C.length)==C&&(E=E.substring(C.length),C=g.GetData(u[0],E),f[E.replace(/-([a-z])/g,p)]=C)}v.fn.jquery&&v.fn.jquery.substr(0,2)=="1."&&u[0].dataset&&(f=v.extend(!0,{},u[0].dataset,f));var M,L=v.extend(!0,{},g.GetData(u[0]),f);for(M in L=g._convertData(L))-1<l.indexOf(M)||(v.isPlainObject(this.options[M])?v.extend(this.options[M],L[M]):this.options[M]=L[M]);return this},d.prototype.get=function(u){return this.options[u]},d.prototype.set=function(u,l){this.options[u]=l},d}),z.define("select2/core",["jquery","./options","./utils","./keys"],function(v,w,g,d){var u=function(l,f){g.GetData(l[0],"select2")!=null&&g.GetData(l[0],"select2").destroy(),this.$element=l,this.id=this._generateId(l),f=f||{},this.options=new w(f,l),u.__super__.constructor.call(this);var p=l.attr("tabindex")||0;g.StoreData(l[0],"old-tabindex",p),l.attr("tabindex","-1"),f=this.options.get("dataAdapter"),this.dataAdapter=new f(l,this.options),p=this.render(),this._placeContainer(p),f=this.options.get("selectionAdapter"),this.selection=new f(l,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,p),f=this.options.get("dropdownAdapter"),this.dropdown=new f(l,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,p),p=this.options.get("resultsAdapter"),this.results=new p(l,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var T=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(E){T.trigger("selection:update",{data:E})}),l[0].classList.add("select2-hidden-accessible"),l.attr("aria-hidden","true"),this._syncAttributes(),g.StoreData(l[0],"select2",this),l.data("select2",this)};return g.Extend(u,g.Observable),u.prototype._generateId=function(l){return"select2-"+(l.attr("id")!=null?l.attr("id"):l.attr("name")!=null?l.attr("name")+"-"+g.generateChars(2):g.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},u.prototype._placeContainer=function(l){l.insertAfter(this.$element);var f=this._resolveWidth(this.$element,this.options.get("width"));f!=null&&l.css("width",f)},u.prototype._resolveWidth=function(l,f){var p=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(f=="resolve"){var T=this._resolveWidth(l,"style");return T??this._resolveWidth(l,"element")}if(f=="element")return T=l.outerWidth(!1),T<=0?"auto":T+"px";if(f!="style")return f!="computedstyle"?f:window.getComputedStyle(l[0]).width;if(l=l.attr("style"),typeof l!="string")return null;for(var E=l.split(";"),C=0,M=E.length;C<M;C+=1){var L=E[C].replace(/\s/g,"").match(p);if(L!==null&&1<=L.length)return L[1]}return null},u.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},u.prototype._registerDomEvents=function(){var l=this;this.$element.on("change.select2",function(){l.dataAdapter.current(function(f){l.trigger("selection:update",{data:f})})}),this.$element.on("focus.select2",function(f){l.trigger("focus",f)}),this._syncA=g.bind(this._syncAttributes,this),this._syncS=g.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(f){l._syncA(),l._syncS(f)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},u.prototype._registerDataEvents=function(){var l=this;this.dataAdapter.on("*",function(f,p){l.trigger(f,p)})},u.prototype._registerSelectionEvents=function(){var l=this,f=["toggle","focus"];this.selection.on("toggle",function(){l.toggleDropdown()}),this.selection.on("focus",function(p){l.focus(p)}),this.selection.on("*",function(p,T){f.indexOf(p)===-1&&l.trigger(p,T)})},u.prototype._registerDropdownEvents=function(){var l=this;this.dropdown.on("*",function(f,p){l.trigger(f,p)})},u.prototype._registerResultsEvents=function(){var l=this;this.results.on("*",function(f,p){l.trigger(f,p)})},u.prototype._registerEvents=function(){var l=this;this.on("open",function(){l.$container[0].classList.add("select2-container--open")}),this.on("close",function(){l.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){l.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){l.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){l.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(f){l.isOpen()||l.trigger("open",{}),this.dataAdapter.query(f,function(p){l.trigger("results:all",{data:p,query:f})})}),this.on("query:append",function(f){this.dataAdapter.query(f,function(p){l.trigger("results:append",{data:p,query:f})})}),this.on("keypress",function(f){var p=f.which;l.isOpen()?p===d.ESC||p===d.UP&&f.altKey?(l.close(f),f.preventDefault()):p===d.ENTER||p===d.TAB?(l.trigger("results:select",{}),f.preventDefault()):p===d.SPACE&&f.ctrlKey?(l.trigger("results:toggle",{}),f.preventDefault()):p===d.UP?(l.trigger("results:previous",{}),f.preventDefault()):p===d.DOWN&&(l.trigger("results:next",{}),f.preventDefault()):(p===d.ENTER||p===d.SPACE||p===d.DOWN&&f.altKey)&&(l.open(),f.preventDefault())})},u.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},u.prototype._isChangeMutation=function(l){var f=this;if(l.addedNodes&&0<l.addedNodes.length){for(var p=0;p<l.addedNodes.length;p++)if(l.addedNodes[p].selected)return!0}else{if(l.removedNodes&&0<l.removedNodes.length)return!0;if(Array.isArray(l))return l.some(function(T){return f._isChangeMutation(T)})}return!1},u.prototype._syncSubtree=function(f){var f=this._isChangeMutation(f),p=this;f&&this.dataAdapter.current(function(T){p.trigger("selection:update",{data:T})})},u.prototype.trigger=function(l,f){var p=u.__super__.trigger,T={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(f===void 0&&(f={}),l in T){var E=T[l],T={prevented:!1,name:l,args:f};if(p.call(this,E,T),T.prevented)return void(f.prevented=!0)}p.call(this,l,f)},u.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},u.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},u.prototype.close=function(l){this.isOpen()&&this.trigger("close",{originalEvent:l})},u.prototype.isEnabled=function(){return!this.isDisabled()},u.prototype.isDisabled=function(){return this.options.get("disabled")},u.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},u.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},u.prototype.focus=function(l){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},u.prototype.enable=function(l){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),l=!(l=l==null||l.length===0?[!0]:l)[0],this.$element.prop("disabled",l)},u.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var l=[];return this.dataAdapter.current(function(f){l=f}),l},u.prototype.val=function(l){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),l==null||l.length===0)return this.$element.val();l=l[0],Array.isArray(l)&&(l=l.map(function(f){return f.toString()})),this.$element.val(l).trigger("input").trigger("change")},u.prototype.destroy=function(){g.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",g.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),g.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},u.prototype.render=function(){var l=v('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return l.attr("dir",this.options.get("dir")),this.$container=l,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),g.StoreData(l[0],"element",this.$element),l},u}),z.define("jquery-mousewheel",["jquery"],function(v){return v}),z.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(v,w,g,d,u){var l;return v.fn.select2==null&&(l=["open","close","destroy"],v.fn.select2=function(f){if(typeof(f=f||{})=="object")return this.each(function(){var E=v.extend(!0,{},f);new g(v(this),E)}),this;if(typeof f!="string")throw new Error("Invalid arguments for Select2: "+f);var p,T=Array.prototype.slice.call(arguments,1);return this.each(function(){var E=u.GetData(this,"select2");E==null&&window.console&&console.error&&console.error("The select2('"+f+"') method was called on an element that is not using Select2."),p=E[f].apply(E,T)}),-1<l.indexOf(f)?this:p}),v.fn.select2.defaults==null&&(v.fn.select2.defaults=d),g}),{define:z.define,require:z.require});function X(v,w){return S.call(v,w)}function G(v,w){var g,d,u,l,f,p,T,E,C,M,L=w&&w.split("/"),oe=m.map,pe=oe&&oe["*"]||{};if(v){for(w=(v=v.split("/")).length-1,m.nodeIdCompat&&j.test(v[w])&&(v[w]=v[w].replace(j,"")),v[0].charAt(0)==="."&&L&&(v=L.slice(0,L.length-1).concat(v)),E=0;E<v.length;E++)(M=v[E])==="."?(v.splice(E,1),--E):M===".."&&(E===0||E===1&&v[2]===".."||v[E-1]===".."||0<E&&(v.splice(E-1,2),E-=2));v=v.join("/")}if((L||pe)&&oe){for(E=(g=v.split("/")).length;0<E;--E){if(d=g.slice(0,E).join("/"),L){for(C=L.length;0<C;--C)if(u=oe[L.slice(0,C).join("/")],u=u&&u[d]){l=u,f=E;break}}if(l)break;!p&&pe&&pe[d]&&(p=pe[d],T=E)}!l&&p&&(l=p,f=T),l&&(g.splice(0,f,l),v=g.join("/"))}return v}function te(v,w){return function(){var g=k.call(arguments,0);return typeof g[0]!="string"&&g.length===1&&g.push(null),i.apply(r,g.concat([v,w]))}}function J(v){var w;if(X(h,v)&&(w=h[v],delete h[v],b[v]=!0,s.apply(r,w)),!X(c,v)&&!X(b,v))throw new Error("No "+v);return c[v]}function le(v){var w,g=v?v.indexOf("!"):-1;return-1<g&&(w=v.substring(0,g),v=v.substring(g+1,v.length)),[w,v]}function Ce(v){return v?le(v):[]}var z=K.require("jquery.select2");return t.fn.select2.amd=K,z});function bo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Eo(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?ih(r):Eo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Ie(t))return t}}const nh=/;(?![^(]*\))/g,rh=/:([^]+)/,sh=/\/\*.*?\*\//gs;function ih(t){const e={};return t.replace(sh,"").split(nh).forEach(n=>{if(n){const r=n.split(rh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Io(t){let e="";if($e(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=Io(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=bo(oh);function fc(t){return!!t||t===""}function lh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Hr(t[r],e[r]);return n}function Hr(t,e){if(t===e)return!0;let n=Ca(t),r=Ca(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sr(t),r=Sr(e),n||r)return t===e;if(n=ee(t),r=ee(e),n||r)return n&&r?lh(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Hr(t[o],e[o]))return!1}}return String(t)===String(e)}function To(t,e){return t.findIndex(n=>Hr(n,e))}const pc=t=>$e(t)?t:t==null?"":ee(t)||Ie(t)&&(t.toString===yc||!se(t.toString))?JSON.stringify(t,mc,2):String(t),mc=(t,e)=>e&&e.__v_isRef?mc(t,e.value):Mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Zn(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!ee(e)&&!_c(e)?String(e):e,Ae={},$n=[],ht=()=>{},ch=()=>!1,uh=/^on[^a-z]/,ti=t=>uh.test(t),Ao=t=>t.startsWith("onUpdate:"),Ge=Object.assign,So=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dh=Object.prototype.hasOwnProperty,he=(t,e)=>dh.call(t,e),ee=Array.isArray,Mn=t=>zr(t)==="[object Map]",Zn=t=>zr(t)==="[object Set]",Ca=t=>zr(t)==="[object Date]",se=t=>typeof t=="function",$e=t=>typeof t=="string",Sr=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",gc=t=>Ie(t)&&se(t.then)&&se(t.catch),yc=Object.prototype.toString,zr=t=>yc.call(t),hh=t=>zr(t).slice(8,-1),_c=t=>zr(t)==="[object Object]",Co=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ws=bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fh=/-(\w)/g,St=ni(t=>t.replace(fh,(e,n)=>n?n.toUpperCase():"")),ph=/\B([A-Z])/g,er=ni(t=>t.replace(ph,"-$1").toLowerCase()),ri=ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ri=ni(t=>t?`on${ri(t)}`:""),Cr=(t,e)=>!Object.is(t,e),bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ps=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ra;const mh=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ct;class gh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yh(t,e=ct){e&&e.active&&e.effects.push(t)}function _h(){return ct}const Ro=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vc=t=>(t.w&nn)>0,wc=t=>(t.n&nn)>0,vh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=nn},wh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];vc(s)&&!wc(s)?s.delete(t):e[n++]=s,s.w&=~nn,s.n&=~nn}e.length=n}},Yi=new WeakMap;let fr=0,nn=1;const Ji=30;let ut;const gn=Symbol(""),Qi=Symbol("");class Oo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yh(this,r)}run(){if(!this.active)return this.fn();let e=ut,n=Jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,Jt=!0,nn=1<<++fr,fr<=Ji?vh(this):Oa(this),this.fn()}finally{fr<=Ji&&wh(this),nn=1<<--fr,ut=this.parent,Jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Oa(this),this.onStop&&this.onStop(),this.active=!1)}}function Oa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jt=!0;const bc=[];function tr(){bc.push(Jt),Jt=!1}function nr(){const t=bc.pop();Jt=t===void 0?!0:t}function Xe(t,e,n){if(Jt&&ut){let r=Yi.get(t);r||Yi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ro()),Ec(s)}}function Ec(t,e){let n=!1;fr<=Ji?wc(t)||(t.n|=nn,n=!vc(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function xt(t,e,n,r,s,i){const o=Yi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(r);o.forEach((h,m)=>{(m==="length"||m>=c)&&a.push(h)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Co(n)&&a.push(o.get("length")):(a.push(o.get(gn)),Mn(t)&&a.push(o.get(Qi)));break;case"delete":ee(t)||(a.push(o.get(gn)),Mn(t)&&a.push(o.get(Qi)));break;case"set":Mn(t)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&Xi(a[0]);else{const c=[];for(const h of a)h&&c.push(...h);Xi(Ro(c))}}function Xi(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&Pa(r);for(const r of n)r.computed||Pa(r)}function Pa(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bh=bo("__proto__,__v_isRef,__isVue"),Ic=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sr)),Eh=Po(),Ih=Po(!1,!0),Th=Po(!0),ka=Ah();function Ah(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Xe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tr();const r=fe(this)[e].apply(this,n);return nr(),r}}),t}function Sh(t){const e=fe(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function Po(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Bh:Rc:e?Cc:Sc).get(r))return r;const o=ee(r);if(!t){if(o&&he(ka,s))return Reflect.get(ka,s,i);if(s==="hasOwnProperty")return Sh}const a=Reflect.get(r,s,i);return(Sr(s)?Ic.has(s):bh(s))||(t||Xe(r,"get",s),e)?a:qe(a)?o&&Co(s)?a:a.value:Ie(a)?t?Oc(a):Wr(a):a}}const Ch=Tc(),Rh=Tc(!0);function Tc(t=!1){return function(n,r,s,i){let o=n[r];if(qn(o)&&qe(o)&&!qe(s))return!1;if(!t&&(!Ds(s)&&!qn(s)&&(o=fe(o),s=fe(s)),!ee(n)&&qe(o)&&!qe(s)))return o.value=s,!0;const a=ee(n)&&Co(r)?Number(r)<n.length:he(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?Cr(s,o)&&xt(n,"set",r,s):xt(n,"add",r,s)),c}}function Oh(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&xt(t,"delete",e,void 0),r}function Ph(t,e){const n=Reflect.has(t,e);return(!Sr(e)||!Ic.has(e))&&Xe(t,"has",e),n}function kh(t){return Xe(t,"iterate",ee(t)?"length":gn),Reflect.ownKeys(t)}const Ac={get:Eh,set:Ch,deleteProperty:Oh,has:Ph,ownKeys:kh},Dh={get:Th,set(t,e){return!0},deleteProperty(t,e){return!0}},xh=Ge({},Ac,{get:Ih,set:Rh}),ko=t=>t,si=t=>Reflect.getPrototypeOf(t);function as(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Xe(s,"get",e),Xe(s,"get",i));const{has:o}=si(s),a=r?ko:n?No:Rr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ls(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Xe(r,"has",t),Xe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function cs(t,e=!1){return t=t.__v_raw,!e&&Xe(fe(t),"iterate",gn),Reflect.get(t,"size",t)}function Da(t){t=fe(t);const e=fe(this);return si(e).has.call(e,t)||(e.add(t),xt(e,"add",t,t)),this}function xa(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=si(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cr(e,o)&&xt(n,"set",t,e):xt(n,"add",t,e),this}function Na(t){const e=fe(this),{has:n,get:r}=si(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&xt(e,"delete",t,void 0),i}function La(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function us(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?ko:t?No:Rr;return!t&&Xe(a,"iterate",gn),o.forEach((h,m)=>r.call(s,c(h),c(m),i))}}function ds(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Mn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),m=n?ko:e?No:Rr;return!e&&Xe(i,"iterate",c?Qi:gn),{next(){const{value:b,done:S}=h.next();return S?{value:b,done:S}:{value:a?[m(b[0]),m(b[1])]:m(b),done:S}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:this}}function Nh(){const t={get(i){return as(this,i)},get size(){return cs(this)},has:ls,add:Da,set:xa,delete:Na,clear:La,forEach:us(!1,!1)},e={get(i){return as(this,i,!1,!0)},get size(){return cs(this)},has:ls,add:Da,set:xa,delete:Na,clear:La,forEach:us(!1,!0)},n={get(i){return as(this,i,!0)},get size(){return cs(this,!0)},has(i){return ls.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:us(!0,!1)},r={get(i){return as(this,i,!0,!0)},get size(){return cs(this,!0)},has(i){return ls.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ds(i,!1,!1),n[i]=ds(i,!0,!1),e[i]=ds(i,!1,!0),r[i]=ds(i,!0,!0)}),[t,n,e,r]}const[Lh,$h,Mh,Uh]=Nh();function Do(t,e){const n=e?t?Uh:Mh:t?$h:Lh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const Fh={get:Do(!1,!1)},Vh={get:Do(!1,!0)},jh={get:Do(!0,!1)},Sc=new WeakMap,Cc=new WeakMap,Rc=new WeakMap,Bh=new WeakMap;function qh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hh(t){return t.__v_skip||!Object.isExtensible(t)?0:qh(hh(t))}function Wr(t){return qn(t)?t:xo(t,!1,Ac,Fh,Sc)}function zh(t){return xo(t,!1,xh,Vh,Cc)}function Oc(t){return xo(t,!0,Dh,jh,Rc)}function xo(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Hh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Un(t){return qn(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function Ds(t){return!!(t&&t.__v_isShallow)}function Pc(t){return Un(t)||qn(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function kc(t){return Ps(t,"__v_skip",!0),t}const Rr=t=>Ie(t)?Wr(t):t,No=t=>Ie(t)?Oc(t):t;function Dc(t){Jt&&ut&&(t=fe(t),Ec(t.dep||(t.dep=Ro())))}function xc(t,e){t=fe(t);const n=t.dep;n&&Xi(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function Wh(t){return Nc(t,!1)}function Kh(t){return Nc(t,!0)}function Nc(t,e){return qe(t)?t:new Gh(t,e)}class Gh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Rr(e)}get value(){return Dc(this),this._value}set value(e){const n=this.__v_isShallow||Ds(e)||qn(e);e=n?e:fe(e),Cr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Rr(e),xc(this))}}function yn(t){return qe(t)?t.value:t}const Yh={get:(t,e,n)=>yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Lc(t){return Un(t)?t:new Proxy(t,Yh)}var $c;class Jh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$c]=!1,this._dirty=!0,this.effect=new Oo(e,()=>{this._dirty||(this._dirty=!0,xc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Dc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$c="__v_isReadonly";function Qh(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=ht):(r=t.get,s=t.set),new Jh(r,s,i||!s,n)}function Qt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ii(i,e,n)}return s}function ft(t,e,n,r){if(se(t)){const i=Qt(t,e,n,r);return i&&gc(i)&&i.catch(o=>{ii(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ft(t[i],e,n,r));return s}function ii(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const h=i.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Qt(c,null,10,[t,o,a]);return}}Xh(t,n,s,r)}function Xh(t,e,n,r=!0){console.error(t)}let Or=!1,Zi=!1;const Be=[];let Et=0;const Fn=[];let Ot=null,fn=0;const Mc=Promise.resolve();let Lo=null;function Uc(t){const e=Lo||Mc;return t?e.then(this?t.bind(this):t):e}function Zh(t){let e=Et+1,n=Be.length;for(;e<n;){const r=e+n>>>1;Pr(Be[r])<t?e=r+1:n=r}return e}function $o(t){(!Be.length||!Be.includes(t,Or&&t.allowRecurse?Et+1:Et))&&(t.id==null?Be.push(t):Be.splice(Zh(t.id),0,t),Fc())}function Fc(){!Or&&!Zi&&(Zi=!0,Lo=Mc.then(jc))}function ef(t){const e=Be.indexOf(t);e>Et&&Be.splice(e,1)}function tf(t){ee(t)?Fn.push(...t):(!Ot||!Ot.includes(t,t.allowRecurse?fn+1:fn))&&Fn.push(t),Fc()}function $a(t,e=Or?Et+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Vc(t){if(Fn.length){const e=[...new Set(Fn)];if(Fn.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,r)=>Pr(n)-Pr(r)),fn=0;fn<Ot.length;fn++)Ot[fn]();Ot=null,fn=0}}const Pr=t=>t.id==null?1/0:t.id,nf=(t,e)=>{const n=Pr(t)-Pr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jc(t){Zi=!1,Or=!0,Be.sort(nf);const e=ht;try{for(Et=0;Et<Be.length;Et++){const n=Be[Et];n&&n.active!==!1&&Qt(n,null,14)}}finally{Et=0,Be.length=0,Vc(),Or=!1,Lo=null,(Be.length||Fn.length)&&jc()}}function rf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:S}=r[m]||Ae;S&&(s=n.map(k=>$e(k)?k.trim():k)),b&&(s=n.map(ks))}let a,c=r[a=Ri(e)]||r[a=Ri(St(e))];!c&&i&&(c=r[a=Ri(er(e))]),c&&ft(c,t,6,s);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(h,t,6,s)}}function Bc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const c=h=>{const m=Bc(h,e,!0);m&&(a=!0,Ge(o,m))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):Ge(o,i),Ie(t)&&r.set(t,o),o)}function oi(t,e){return!t||!ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,er(e))||he(t,e))}let He=null,qc=null;function xs(t){const e=He;return He=t,qc=t&&t.type.__scopeId||null,e}function Ke(t,e=He,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&za(-1);const i=xs(e);let o;try{o=t(...s)}finally{xs(i),r._d&&za(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oi(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:h,render:m,renderCache:b,data:S,setupState:k,ctx:j,inheritAttrs:K}=t;let X,G;const te=xs(t);try{if(n.shapeFlag&4){const le=s||r;X=wt(m.call(le,le,b,i,k,S,j)),G=c}else{const le=e;X=wt(le.length>1?le(i,{attrs:c,slots:a,emit:h}):le(i,null)),G=e.props?c:sf(c)}}catch(le){_r.length=0,ii(le,t,1),X=we(rn)}let J=X;if(G&&K!==!1){const le=Object.keys(G),{shapeFlag:Ce}=J;le.length&&Ce&7&&(o&&le.some(Ao)&&(G=of(G,o)),J=Hn(J,G))}return n.dirs&&(J=Hn(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),X=J,xs(te),X}const sf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ti(n))&&((e||(e={}))[n]=t[n]);return e},of=(t,e)=>{const n={};for(const r in t)(!Ao(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function af(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ma(r,o,h):!!o;if(c&8){const m=e.dynamicProps;for(let b=0;b<m.length;b++){const S=m[b];if(o[S]!==r[S]&&!oi(h,S))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ma(r,o,h):!0:!!o;return!1}function Ma(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!oi(n,i))return!0}return!1}function lf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cf=t=>t.__isSuspense;function uf(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):tf(t)}function Es(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=xe||He;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}const hs={};function Is(t,e,n){return Hc(t,e,n)}function Hc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){const a=_h()===(xe==null?void 0:xe.scope)?xe:null;let c,h=!1,m=!1;if(qe(t)?(c=()=>t.value,h=Ds(t)):Un(t)?(c=()=>t,r=!0):ee(t)?(m=!0,h=t.some(J=>Un(J)||Ds(J)),c=()=>t.map(J=>{if(qe(J))return J.value;if(Un(J))return mn(J);if(se(J))return Qt(J,a,2)})):se(t)?e?c=()=>Qt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return b&&b(),ft(t,a,3,[S])}:c=ht,e&&r){const J=c;c=()=>mn(J())}let b,S=J=>{b=G.onStop=()=>{Qt(J,a,4)}},k;if(Dr)if(S=ht,e?n&&ft(e,a,3,[c(),m?[]:void 0,S]):c(),s==="sync"){const J=ip();k=J.__watcherHandles||(J.__watcherHandles=[])}else return ht;let j=m?new Array(t.length).fill(hs):hs;const K=()=>{if(G.active)if(e){const J=G.run();(r||h||(m?J.some((le,Ce)=>Cr(le,j[Ce])):Cr(J,j)))&&(b&&b(),ft(e,a,3,[J,j===hs?void 0:m&&j[0]===hs?[]:j,S]),j=J)}else G.run()};K.allowRecurse=!!e;let X;s==="sync"?X=K:s==="post"?X=()=>Ye(K,a&&a.suspense):(K.pre=!0,a&&(K.id=a.uid),X=()=>$o(K));const G=new Oo(c,X);e?n?K():j=G.run():s==="post"?Ye(G.run.bind(G),a&&a.suspense):G.run();const te=()=>{G.stop(),a&&a.scope&&So(a.scope.effects,G)};return k&&k.push(te),te}function df(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?zc(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=xe;zn(this);const a=Hc(s,i.bind(r),n);return o?zn(o):vn(),a}function zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mn(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))mn(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)mn(t[n],e);else if(Zn(t)||Mn(t))t.forEach(n=>{mn(n,e)});else if(_c(t))for(const n in t)mn(t[n],e);return t}function Wc(t){return se(t)?{setup:t,name:t.name}:t}const gr=t=>!!t.type.__asyncLoader,Kc=t=>t.type.__isKeepAlive;function hf(t,e){Gc(t,"a",e)}function ff(t,e){Gc(t,"da",e)}function Gc(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ai(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Kc(s.parent.vnode)&&pf(r,e,n,s),s=s.parent}}function pf(t,e,n,r){const s=ai(e,t,r,!0);Yc(()=>{So(r[e],s)},n)}function ai(t,e,n=xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tr(),zn(n);const a=ft(e,n,t,o);return vn(),nr(),a});return r?s.unshift(i):s.push(i),i}}const Mt=t=>(e,n=xe)=>(!Dr||t==="sp")&&ai(t,(...r)=>e(...r),n),mf=Mt("bm"),gf=Mt("m"),yf=Mt("bu"),_f=Mt("u"),vf=Mt("bum"),Yc=Mt("um"),wf=Mt("sp"),bf=Mt("rtg"),Ef=Mt("rtc");function If(t,e=xe){ai("ec",t,e)}function bb(t,e){const n=He;if(n===null)return t;const r=di(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,h=Ae]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&mn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:h}))}return t}function cn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(tr(),ft(c,n,8,[t.el,a,t,e]),nr())}}const Jc="components";function Tf(t,e){return Sf(Jc,t,!0,e)||t}const Af=Symbol();function Sf(t,e,n=!0,r=!1){const s=He||xe;if(s){const i=s.type;if(t===Jc){const a=np(i,!1);if(a&&(a===e||a===St(e)||a===ri(St(e))))return i}const o=Ua(s[t]||i[t],e)||Ua(s.appContext[t],e);return!o&&r?i:o}}function Ua(t,e){return t&&(t[e]||t[St(e)]||t[ri(St(e))])}function Eb(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const h=o[a];s[a]=e(t[h],h,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Cf(t,e,n={},r,s){if(He.isCE||He.parent&&gr(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),_n();const o=i&&Qc(i(n)),a=ci(ot,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Qc(t){return t.some(e=>Ls(e)?!(e.type===rn||e.type===ot&&!Qc(e.children)):!0)?t:null}const eo=t=>t?lu(t)?di(t)||t.proxy:eo(t.parent):null,yr=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>eo(t.parent),$root:t=>eo(t.root),$emit:t=>t.emit,$options:t=>Mo(t),$forceUpdate:t=>t.f||(t.f=()=>$o(t.update)),$nextTick:t=>t.n||(t.n=Uc.bind(t.proxy)),$watch:t=>df.bind(t)}),Pi=(t,e)=>t!==Ae&&!t.__isScriptSetup&&he(t,e),Rf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let h;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pi(r,e))return o[e]=1,r[e];if(s!==Ae&&he(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&he(h,e))return o[e]=3,i[e];if(n!==Ae&&he(n,e))return o[e]=4,n[e];to&&(o[e]=0)}}const m=yr[e];let b,S;if(m)return e==="$attrs"&&Xe(t,"get",e),m(t);if((b=a.__cssModules)&&(b=b[e]))return b;if(n!==Ae&&he(n,e))return o[e]=4,n[e];if(S=c.config.globalProperties,he(S,e))return S[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pi(s,e)?(s[e]=n,!0):r!==Ae&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&he(t,o)||Pi(e,o)||(a=i[0])&&he(a,o)||he(r,o)||he(yr,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let to=!0;function Of(t){const e=Mo(t),n=t.proxy,r=t.ctx;to=!1,e.beforeCreate&&Fa(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:h,created:m,beforeMount:b,mounted:S,beforeUpdate:k,updated:j,activated:K,deactivated:X,beforeDestroy:G,beforeUnmount:te,destroyed:J,unmounted:le,render:Ce,renderTracked:z,renderTriggered:v,errorCaptured:w,serverPrefetch:g,expose:d,inheritAttrs:u,components:l,directives:f,filters:p}=e;if(h&&Pf(h,r,null,t.appContext.config.unwrapInjectedRef),o)for(const C in o){const M=o[C];se(M)&&(r[C]=M.bind(n))}if(s){const C=s.call(n,n);Ie(C)&&(t.data=Wr(C))}if(to=!0,i)for(const C in i){const M=i[C],L=se(M)?M.bind(n,n):se(M.get)?M.get.bind(n,n):ht,oe=!se(M)&&se(M.set)?M.set.bind(n):ht,pe=at({get:L,set:oe});Object.defineProperty(r,C,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Re=>pe.value=Re})}if(a)for(const C in a)Xc(a[C],r,n,C);if(c){const C=se(c)?c.call(n):c;Reflect.ownKeys(C).forEach(M=>{Es(M,C[M])})}m&&Fa(m,t,"c");function E(C,M){ee(M)?M.forEach(L=>C(L.bind(n))):M&&C(M.bind(n))}if(E(mf,b),E(gf,S),E(yf,k),E(_f,j),E(hf,K),E(ff,X),E(If,w),E(Ef,z),E(bf,v),E(vf,te),E(Yc,le),E(wf,g),ee(d))if(d.length){const C=t.exposed||(t.exposed={});d.forEach(M=>{Object.defineProperty(C,M,{get:()=>n[M],set:L=>n[M]=L})})}else t.exposed||(t.exposed={});Ce&&t.render===ht&&(t.render=Ce),u!=null&&(t.inheritAttrs=u),l&&(t.components=l),f&&(t.directives=f)}function Pf(t,e,n=ht,r=!1){ee(t)&&(t=no(t));for(const s in t){const i=t[s];let o;Ie(i)?"default"in i?o=Dt(i.from||s,i.default,!0):o=Dt(i.from||s):o=Dt(i),qe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Fa(t,e,n){ft(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xc(t,e,n,r){const s=r.includes(".")?zc(n,r):()=>n[r];if($e(t)){const i=e[t];se(i)&&Is(s,i)}else if(se(t))Is(s,t.bind(n));else if(Ie(t))if(ee(t))t.forEach(i=>Xc(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&Is(s,i,t)}}function Mo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ns(c,h,o,!0)),Ns(c,e,o)),Ie(e)&&i.set(e,c),c}function Ns(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ns(t,i,n,!0),s&&s.forEach(o=>Ns(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kf={data:Va,props:dn,emits:dn,methods:dn,computed:dn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:dn,directives:dn,watch:xf,provide:Va,inject:Df};function Va(t,e){return e?t?function(){return Ge(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Df(t,e){return dn(no(t),no(e))}function no(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function dn(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function xf(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Nf(t,e,n,r=!1){const s={},i={};Ps(i,ui,1),t.propsDefaults=Object.create(null),Zc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=t.vnode.dynamicProps;for(let b=0;b<m.length;b++){let S=m[b];if(oi(t.emitsOptions,S))continue;const k=e[S];if(c)if(he(i,S))k!==i[S]&&(i[S]=k,h=!0);else{const j=St(S);s[j]=ro(c,a,j,k,t,!1)}else k!==i[S]&&(i[S]=k,h=!0)}}}else{Zc(t,e,s,i)&&(h=!0);let m;for(const b in a)(!e||!he(e,b)&&((m=er(b))===b||!he(e,m)))&&(c?n&&(n[b]!==void 0||n[m]!==void 0)&&(s[b]=ro(c,a,b,void 0,t,!0)):delete s[b]);if(i!==a)for(const b in i)(!e||!he(e,b))&&(delete i[b],h=!0)}h&&xt(t,"set","$attrs")}function Zc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ws(c))continue;const h=e[c];let m;s&&he(s,m=St(c))?!i||!i.includes(m)?n[m]=h:(a||(a={}))[m]=h:oi(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=fe(n),h=a||Ae;for(let m=0;m<i.length;m++){const b=i[m];n[b]=ro(s,c,b,h[b],t,!he(h,b))}}return o}function ro(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:h}=s;n in h?r=h[n]:(zn(s),r=h[n]=c.call(null,e),vn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===er(n))&&(r=!0))}return r}function eu(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const m=b=>{c=!0;const[S,k]=eu(b,e,!0);Ge(o,S),k&&a.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!i&&!c)return Ie(t)&&r.set(t,$n),$n;if(ee(i))for(let m=0;m<i.length;m++){const b=St(i[m]);ja(b)&&(o[b]=Ae)}else if(i)for(const m in i){const b=St(m);if(ja(b)){const S=i[m],k=o[b]=ee(S)||se(S)?{type:S}:Object.assign({},S);if(k){const j=Ha(Boolean,k.type),K=Ha(String,k.type);k[0]=j>-1,k[1]=K<0||j<K,(j>-1||he(k,"default"))&&a.push(b)}}}const h=[o,a];return Ie(t)&&r.set(t,h),h}function ja(t){return t[0]!=="$"}function Ba(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qa(t,e){return Ba(t)===Ba(e)}function Ha(t,e){return ee(e)?e.findIndex(n=>qa(n,t)):se(e)&&qa(e,t)?0:-1}const tu=t=>t[0]==="_"||t==="$stable",Uo=t=>ee(t)?t.map(wt):[wt(t)],$f=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>Uo(e(...s)),n);return r._c=!1,r},nu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(tu(s))continue;const i=t[s];if(se(i))e[s]=$f(s,i,r);else if(i!=null){const o=Uo(i);e[s]=()=>o}}},ru=(t,e)=>{const n=Uo(e);t.slots.default=()=>n},Mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ps(e,"_",n)):nu(e,t.slots={})}else t.slots={},e&&ru(t,e);Ps(t.slots,ui,1)},Uf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,nu(e,s)),o=e}else e&&(ru(t,e),o={default:1});if(i)for(const a in s)!tu(a)&&!(a in o)&&delete s[a]};function su(){return{app:null,config:{isNativeTag:ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Vf(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!Ie(s)&&(s=null);const i=su(),o=new Set;let a=!1;const c=i.app={_uid:Ff++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:op,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&se(h.install)?(o.add(h),h.install(c,...m)):se(h)&&(o.add(h),h(c,...m))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,m){return m?(i.components[h]=m,c):i.components[h]},directive(h,m){return m?(i.directives[h]=m,c):i.directives[h]},mount(h,m,b){if(!a){const S=we(r,s);return S.appContext=i,m&&e?e(S,h):t(S,h,b),a=!0,c._container=h,h.__vue_app__=c,di(S.component)||S.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,m){return i.provides[h]=m,c}};return c}}function so(t,e,n,r,s=!1){if(ee(t)){t.forEach((S,k)=>so(S,e&&(ee(e)?e[k]:e),n,r,s));return}if(gr(r)&&!s)return;const i=r.shapeFlag&4?di(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,h=e&&e.r,m=a.refs===Ae?a.refs={}:a.refs,b=a.setupState;if(h!=null&&h!==c&&($e(h)?(m[h]=null,he(b,h)&&(b[h]=null)):qe(h)&&(h.value=null)),se(c))Qt(c,a,12,[o,m]);else{const S=$e(c),k=qe(c);if(S||k){const j=()=>{if(t.f){const K=S?he(b,c)?b[c]:m[c]:c.value;s?ee(K)&&So(K,i):ee(K)?K.includes(i)||K.push(i):S?(m[c]=[i],he(b,c)&&(b[c]=m[c])):(c.value=[i],t.k&&(m[t.k]=c.value))}else S?(m[c]=o,he(b,c)&&(b[c]=o)):k&&(c.value=o,t.k&&(m[t.k]=o))};o?(j.id=-1,Ye(j,n)):j()}}}const Ye=uf;function jf(t){return Bf(t)}function Bf(t,e){const n=mh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:h,setElementText:m,parentNode:b,nextSibling:S,setScopeId:k=ht,insertStaticContent:j}=t,K=(y,I,R,P=null,x=null,U=null,V=!1,A=null,N=!!I.dynamicChildren)=>{if(y===I)return;y&&!ur(y,I)&&(P=q(y),Re(y,x,U,!0),y=null),I.patchFlag===-2&&(N=!1,I.dynamicChildren=null);const{type:O,ref:B,shapeFlag:F}=I;switch(O){case li:X(y,I,R,P);break;case rn:G(y,I,R,P);break;case Ts:y==null&&te(I,R,P,V);break;case ot:l(y,I,R,P,x,U,V,A,N);break;default:F&1?Ce(y,I,R,P,x,U,V,A,N):F&6?f(y,I,R,P,x,U,V,A,N):(F&64||F&128)&&O.process(y,I,R,P,x,U,V,A,N,ce)}B!=null&&x&&so(B,y&&y.ref,U,I||y,!I)},X=(y,I,R,P)=>{if(y==null)r(I.el=a(I.children),R,P);else{const x=I.el=y.el;I.children!==y.children&&h(x,I.children)}},G=(y,I,R,P)=>{y==null?r(I.el=c(I.children||""),R,P):I.el=y.el},te=(y,I,R,P)=>{[y.el,y.anchor]=j(y.children,I,R,P,y.el,y.anchor)},J=({el:y,anchor:I},R,P)=>{let x;for(;y&&y!==I;)x=S(y),r(y,R,P),y=x;r(I,R,P)},le=({el:y,anchor:I})=>{let R;for(;y&&y!==I;)R=S(y),s(y),y=R;s(I)},Ce=(y,I,R,P,x,U,V,A,N)=>{V=V||I.type==="svg",y==null?z(I,R,P,x,U,V,A,N):g(y,I,x,U,V,A,N)},z=(y,I,R,P,x,U,V,A)=>{let N,O;const{type:B,props:F,shapeFlag:H,transition:ne,dirs:ae}=y;if(N=y.el=o(y.type,U,F&&F.is,F),H&8?m(N,y.children):H&16&&w(y.children,N,null,P,x,U&&B!=="foreignObject",V,A),ae&&cn(y,null,P,"created"),v(N,y,y.scopeId,V,P),F){for(const ve in F)ve!=="value"&&!ws(ve)&&i(N,ve,null,F[ve],U,y.children,P,x,W);"value"in F&&i(N,"value",null,F.value),(O=F.onVnodeBeforeMount)&&vt(O,P,y)}ae&&cn(y,null,P,"beforeMount");const Ee=(!x||x&&!x.pendingBranch)&&ne&&!ne.persisted;Ee&&ne.beforeEnter(N),r(N,I,R),((O=F&&F.onVnodeMounted)||Ee||ae)&&Ye(()=>{O&&vt(O,P,y),Ee&&ne.enter(N),ae&&cn(y,null,P,"mounted")},x)},v=(y,I,R,P,x)=>{if(R&&k(y,R),P)for(let U=0;U<P.length;U++)k(y,P[U]);if(x){let U=x.subTree;if(I===U){const V=x.vnode;v(y,V,V.scopeId,V.slotScopeIds,x.parent)}}},w=(y,I,R,P,x,U,V,A,N=0)=>{for(let O=N;O<y.length;O++){const B=y[O]=A?qt(y[O]):wt(y[O]);K(null,B,I,R,P,x,U,V,A)}},g=(y,I,R,P,x,U,V)=>{const A=I.el=y.el;let{patchFlag:N,dynamicChildren:O,dirs:B}=I;N|=y.patchFlag&16;const F=y.props||Ae,H=I.props||Ae;let ne;R&&un(R,!1),(ne=H.onVnodeBeforeUpdate)&&vt(ne,R,I,y),B&&cn(I,y,R,"beforeUpdate"),R&&un(R,!0);const ae=x&&I.type!=="foreignObject";if(O?d(y.dynamicChildren,O,A,R,P,ae,U):V||M(y,I,A,null,R,P,ae,U,!1),N>0){if(N&16)u(A,I,F,H,R,P,x);else if(N&2&&F.class!==H.class&&i(A,"class",null,H.class,x),N&4&&i(A,"style",F.style,H.style,x),N&8){const Ee=I.dynamicProps;for(let ve=0;ve<Ee.length;ve++){const Oe=Ee[ve],lt=F[Oe],kn=H[Oe];(kn!==lt||Oe==="value")&&i(A,Oe,lt,kn,x,y.children,R,P,W)}}N&1&&y.children!==I.children&&m(A,I.children)}else!V&&O==null&&u(A,I,F,H,R,P,x);((ne=H.onVnodeUpdated)||B)&&Ye(()=>{ne&&vt(ne,R,I,y),B&&cn(I,y,R,"updated")},P)},d=(y,I,R,P,x,U,V)=>{for(let A=0;A<I.length;A++){const N=y[A],O=I[A],B=N.el&&(N.type===ot||!ur(N,O)||N.shapeFlag&70)?b(N.el):R;K(N,O,B,null,P,x,U,V,!0)}},u=(y,I,R,P,x,U,V)=>{if(R!==P){if(R!==Ae)for(const A in R)!ws(A)&&!(A in P)&&i(y,A,R[A],null,V,I.children,x,U,W);for(const A in P){if(ws(A))continue;const N=P[A],O=R[A];N!==O&&A!=="value"&&i(y,A,O,N,V,I.children,x,U,W)}"value"in P&&i(y,"value",R.value,P.value)}},l=(y,I,R,P,x,U,V,A,N)=>{const O=I.el=y?y.el:a(""),B=I.anchor=y?y.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:ne}=I;ne&&(A=A?A.concat(ne):ne),y==null?(r(O,R,P),r(B,R,P),w(I.children,R,B,x,U,V,A,N)):F>0&&F&64&&H&&y.dynamicChildren?(d(y.dynamicChildren,H,R,x,U,V,A),(I.key!=null||x&&I===x.subTree)&&iu(y,I,!0)):M(y,I,R,B,x,U,V,A,N)},f=(y,I,R,P,x,U,V,A,N)=>{I.slotScopeIds=A,y==null?I.shapeFlag&512?x.ctx.activate(I,R,P,V,N):p(I,R,P,x,U,V,N):T(y,I,N)},p=(y,I,R,P,x,U,V)=>{const A=y.component=Qf(y,P,x);if(Kc(y)&&(A.ctx.renderer=ce),Xf(A),A.asyncDep){if(x&&x.registerDep(A,E),!y.el){const N=A.subTree=we(rn);G(null,N,I,R)}return}E(A,y,I,R,x,U,V)},T=(y,I,R)=>{const P=I.component=y.component;if(af(y,I,R))if(P.asyncDep&&!P.asyncResolved){C(P,I,R);return}else P.next=I,ef(P.update),P.update();else I.el=y.el,P.vnode=I},E=(y,I,R,P,x,U,V)=>{const A=()=>{if(y.isMounted){let{next:B,bu:F,u:H,parent:ne,vnode:ae}=y,Ee=B,ve;un(y,!1),B?(B.el=ae.el,C(y,B,V)):B=ae,F&&bs(F),(ve=B.props&&B.props.onVnodeBeforeUpdate)&&vt(ve,ne,B,ae),un(y,!0);const Oe=Oi(y),lt=y.subTree;y.subTree=Oe,K(lt,Oe,b(lt.el),q(lt),y,x,U),B.el=Oe.el,Ee===null&&lf(y,Oe.el),H&&Ye(H,x),(ve=B.props&&B.props.onVnodeUpdated)&&Ye(()=>vt(ve,ne,B,ae),x)}else{let B;const{el:F,props:H}=I,{bm:ne,m:ae,parent:Ee}=y,ve=gr(I);if(un(y,!1),ne&&bs(ne),!ve&&(B=H&&H.onVnodeBeforeMount)&&vt(B,Ee,I),un(y,!0),F&&ie){const Oe=()=>{y.subTree=Oi(y),ie(F,y.subTree,y,x,null)};ve?I.type.__asyncLoader().then(()=>!y.isUnmounted&&Oe()):Oe()}else{const Oe=y.subTree=Oi(y);K(null,Oe,R,P,y,x,U),I.el=Oe.el}if(ae&&Ye(ae,x),!ve&&(B=H&&H.onVnodeMounted)){const Oe=I;Ye(()=>vt(B,Ee,Oe),x)}(I.shapeFlag&256||Ee&&gr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&Ye(y.a,x),y.isMounted=!0,I=R=P=null}},N=y.effect=new Oo(A,()=>$o(O),y.scope),O=y.update=()=>N.run();O.id=y.uid,un(y,!0),O()},C=(y,I,R)=>{I.component=y;const P=y.vnode.props;y.vnode=I,y.next=null,Lf(y,I.props,P,R),Uf(y,I.children,R),tr(),$a(),nr()},M=(y,I,R,P,x,U,V,A,N=!1)=>{const O=y&&y.children,B=y?y.shapeFlag:0,F=I.children,{patchFlag:H,shapeFlag:ne}=I;if(H>0){if(H&128){oe(O,F,R,P,x,U,V,A,N);return}else if(H&256){L(O,F,R,P,x,U,V,A,N);return}}ne&8?(B&16&&W(O,x,U),F!==O&&m(R,F)):B&16?ne&16?oe(O,F,R,P,x,U,V,A,N):W(O,x,U,!0):(B&8&&m(R,""),ne&16&&w(F,R,P,x,U,V,A,N))},L=(y,I,R,P,x,U,V,A,N)=>{y=y||$n,I=I||$n;const O=y.length,B=I.length,F=Math.min(O,B);let H;for(H=0;H<F;H++){const ne=I[H]=N?qt(I[H]):wt(I[H]);K(y[H],ne,R,null,x,U,V,A,N)}O>B?W(y,x,U,!0,!1,F):w(I,R,P,x,U,V,A,N,F)},oe=(y,I,R,P,x,U,V,A,N)=>{let O=0;const B=I.length;let F=y.length-1,H=B-1;for(;O<=F&&O<=H;){const ne=y[O],ae=I[O]=N?qt(I[O]):wt(I[O]);if(ur(ne,ae))K(ne,ae,R,null,x,U,V,A,N);else break;O++}for(;O<=F&&O<=H;){const ne=y[F],ae=I[H]=N?qt(I[H]):wt(I[H]);if(ur(ne,ae))K(ne,ae,R,null,x,U,V,A,N);else break;F--,H--}if(O>F){if(O<=H){const ne=H+1,ae=ne<B?I[ne].el:P;for(;O<=H;)K(null,I[O]=N?qt(I[O]):wt(I[O]),R,ae,x,U,V,A,N),O++}}else if(O>H)for(;O<=F;)Re(y[O],x,U,!0),O++;else{const ne=O,ae=O,Ee=new Map;for(O=ae;O<=H;O++){const et=I[O]=N?qt(I[O]):wt(I[O]);et.key!=null&&Ee.set(et.key,O)}let ve,Oe=0;const lt=H-ae+1;let kn=!1,Ta=0;const cr=new Array(lt);for(O=0;O<lt;O++)cr[O]=0;for(O=ne;O<=F;O++){const et=y[O];if(Oe>=lt){Re(et,x,U,!0);continue}let _t;if(et.key!=null)_t=Ee.get(et.key);else for(ve=ae;ve<=H;ve++)if(cr[ve-ae]===0&&ur(et,I[ve])){_t=ve;break}_t===void 0?Re(et,x,U,!0):(cr[_t-ae]=O+1,_t>=Ta?Ta=_t:kn=!0,K(et,I[_t],R,null,x,U,V,A,N),Oe++)}const Aa=kn?qf(cr):$n;for(ve=Aa.length-1,O=lt-1;O>=0;O--){const et=ae+O,_t=I[et],Sa=et+1<B?I[et+1].el:P;cr[O]===0?K(null,_t,R,Sa,x,U,V,A,N):kn&&(ve<0||O!==Aa[ve]?pe(_t,R,Sa,2):ve--)}}},pe=(y,I,R,P,x=null)=>{const{el:U,type:V,transition:A,children:N,shapeFlag:O}=y;if(O&6){pe(y.component.subTree,I,R,P);return}if(O&128){y.suspense.move(I,R,P);return}if(O&64){V.move(y,I,R,ce);return}if(V===ot){r(U,I,R);for(let F=0;F<N.length;F++)pe(N[F],I,R,P);r(y.anchor,I,R);return}if(V===Ts){J(y,I,R);return}if(P!==2&&O&1&&A)if(P===0)A.beforeEnter(U),r(U,I,R),Ye(()=>A.enter(U),x);else{const{leave:F,delayLeave:H,afterLeave:ne}=A,ae=()=>r(U,I,R),Ee=()=>{F(U,()=>{ae(),ne&&ne()})};H?H(U,ae,Ee):Ee()}else r(U,I,R)},Re=(y,I,R,P=!1,x=!1)=>{const{type:U,props:V,ref:A,children:N,dynamicChildren:O,shapeFlag:B,patchFlag:F,dirs:H}=y;if(A!=null&&so(A,null,R,y,!0),B&256){I.ctx.deactivate(y);return}const ne=B&1&&H,ae=!gr(y);let Ee;if(ae&&(Ee=V&&V.onVnodeBeforeUnmount)&&vt(Ee,I,y),B&6)D(y.component,R,P);else{if(B&128){y.suspense.unmount(R,P);return}ne&&cn(y,null,I,"beforeUnmount"),B&64?y.type.remove(y,I,R,x,ce,P):O&&(U!==ot||F>0&&F&64)?W(O,I,R,!1,!0):(U===ot&&F&384||!x&&B&16)&&W(N,I,R),P&&Ze(y)}(ae&&(Ee=V&&V.onVnodeUnmounted)||ne)&&Ye(()=>{Ee&&vt(Ee,I,y),ne&&cn(y,null,I,"unmounted")},R)},Ze=y=>{const{type:I,el:R,anchor:P,transition:x}=y;if(I===ot){Pn(R,P);return}if(I===Ts){le(y);return}const U=()=>{s(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:V,delayLeave:A}=x,N=()=>V(R,U);A?A(y.el,U,N):N()}else U()},Pn=(y,I)=>{let R;for(;y!==I;)R=S(y),s(y),y=R;s(I)},D=(y,I,R)=>{const{bum:P,scope:x,update:U,subTree:V,um:A}=y;P&&bs(P),x.stop(),U&&(U.active=!1,Re(V,y,I,R)),A&&Ye(A,I),Ye(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},W=(y,I,R,P=!1,x=!1,U=0)=>{for(let V=U;V<y.length;V++)Re(y[V],I,R,P,x)},q=y=>y.shapeFlag&6?q(y.component.subTree):y.shapeFlag&128?y.suspense.next():S(y.anchor||y.el),Q=(y,I,R)=>{y==null?I._vnode&&Re(I._vnode,null,null,!0):K(I._vnode||null,y,I,null,null,null,R),$a(),Vc(),I._vnode=y},ce={p:K,um:Re,m:pe,r:Ze,mt:p,mc:w,pc:M,pbc:d,n:q,o:t};let Te,ie;return e&&([Te,ie]=e(ce)),{render:Q,hydrate:Te,createApp:Vf(Q,Te)}}function un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function iu(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=qt(s[i]),a.el=o.el),n||iu(o,a)),a.type===li&&(a.el=o.el)}}function qf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<h?i=a+1:o=a;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hf=t=>t.__isTeleport,ot=Symbol(void 0),li=Symbol(void 0),rn=Symbol(void 0),Ts=Symbol(void 0),_r=[];let dt=null;function _n(t=!1){_r.push(dt=t?null:[])}function zf(){_r.pop(),dt=_r[_r.length-1]||null}let kr=1;function za(t){kr+=t}function ou(t){return t.dynamicChildren=kr>0?dt||$n:null,zf(),kr>0&&dt&&dt.push(t),t}function ki(t,e,n,r,s,i){return ou(de(t,e,n,r,s,i,!0))}function ci(t,e,n,r,s){return ou(we(t,e,n,r,s,!0))}function Ls(t){return t?t.__v_isVNode===!0:!1}function ur(t,e){return t.type===e.type&&t.key===e.key}const ui="__vInternal",au=({key:t})=>t??null,As=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||qe(t)||se(t)?{i:He,r:t,k:e,f:!!n}:t:null;function de(t,e=null,n=null,r=0,s=null,i=t===ot?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&au(e),ref:e&&As(e),scopeId:qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return a?(Fo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),kr>0&&!o&&dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dt.push(c),c}const we=Wf;function Wf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Af)&&(t=rn),Ls(t)){const a=Hn(t,e,!0);return n&&Fo(a,n),kr>0&&!i&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag|=-2,a}if(rp(t)&&(t=t.__vccOpts),e){e=Kf(e);let{class:a,style:c}=e;a&&!$e(a)&&(e.class=Io(a)),Ie(c)&&(Pc(c)&&!ee(c)&&(c=Ge({},c)),e.style=Eo(c))}const o=$e(t)?1:cf(t)?128:Hf(t)?64:Ie(t)?4:se(t)?2:0;return de(t,e,n,r,s,o,i,!0)}function Kf(t){return t?Pc(t)||ui in t?Ge({},t):t:null}function Hn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&au(a),ref:e&&e.ref?n&&s?ee(s)?s.concat(As(e)):[s,As(e)]:As(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function tt(t=" ",e=0){return we(li,null,t,e)}function Ib(t,e){const n=we(Ts,null,t);return n.staticCount=e,n}function Wa(t="",e=!1){return e?(_n(),ci(rn,null,t)):we(rn,null,t)}function wt(t){return t==null||typeof t=="boolean"?we(rn):ee(t)?we(ot,null,t.slice()):typeof t=="object"?qt(t):we(li,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function Fo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ui in e)?e._ctx=He:s===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:He},n=32):(e=String(e),r&64?(n=16,e=[tt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Io([e.class,r.class]));else if(s==="style")e.style=Eo([e.style,r.style]);else if(ti(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vt(t,e,n,r=null){ft(t,e,7,[n,r])}const Yf=su();let Jf=0;function Qf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yf,i={uid:Jf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eu(r,s),emitsOptions:Bc(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rf.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const zn=t=>{xe=t,t.scope.on()},vn=()=>{xe&&xe.scope.off(),xe=null};function lu(t){return t.vnode.shapeFlag&4}let Dr=!1;function Xf(t,e=!1){Dr=e;const{props:n,children:r}=t.vnode,s=lu(t);Nf(t,n,s,e),Mf(t,r);const i=s?Zf(t,e):void 0;return Dr=!1,i}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kc(new Proxy(t.ctx,Rf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tp(t):null;zn(t),tr();const i=Qt(r,t,0,[t.props,s]);if(nr(),vn(),gc(i)){if(i.then(vn,vn),e)return i.then(o=>{Ka(t,o,e)}).catch(o=>{ii(o,t,0)});t.asyncDep=i}else Ka(t,i,e)}else cu(t,e)}function Ka(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Lc(e)),cu(t,n)}let Ga;function cu(t,e,n){const r=t.type;if(!t.render){if(!e&&Ga&&!r.render){const s=r.template||Mo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,h=Ge(Ge({isCustomElement:i,delimiters:a},o),c);r.render=Ga(s,h)}}t.render=r.render||ht}zn(t),tr(),Of(t),nr(),vn()}function ep(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function tp(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ep(t))},slots:t.slots,emit:t.emit,expose:e}}function di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lc(kc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yr)return yr[n](t)},has(e,n){return n in e||n in yr}}))}function np(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function rp(t){return se(t)&&"__vccOpts"in t}const at=(t,e)=>Qh(t,e,Dr);function uu(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!ee(e)?Ls(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ls(n)&&(n=[n]),we(t,e,n))}const sp=Symbol(""),ip=()=>Dt(sp),op="3.2.47",ap="http://www.w3.org/2000/svg",pn=typeof document<"u"?document:null,Ya=pn&&pn.createElement("template"),lp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?pn.createElementNS(ap,t):pn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ya.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ya.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function up(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&io(r,i,"");for(const i in n)io(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ja=/\s*!important$/;function io(t,e,n){if(ee(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dp(t,e);Ja.test(n)?t.setProperty(er(r),n.replace(Ja,""),"important"):t[r]=n}}const Qa=["Webkit","Moz","ms"],Di={};function dp(t,e){const n=Di[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Di[e]=r;r=ri(r);for(let s=0;s<Qa.length;s++){const i=Qa[s]+r;if(i in t)return Di[e]=i}return e}const Xa="http://www.w3.org/1999/xlink";function hp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xa,e.slice(6,e.length)):t.setAttributeNS(Xa,e,n);else{const i=ah(e);n==null||i&&!fc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function zt(t,e,n,r){t.addEventListener(e,n,r)}function pp(t,e,n,r){t.removeEventListener(e,n,r)}function mp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=gp(e);if(r){const h=i[e]=vp(r,s);zt(t,a,h,c)}else o&&(pp(t,a,o,c),i[e]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function gp(t){let e;if(Za.test(t)){e={};let r;for(;r=t.match(Za);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):er(t.slice(2)),e]}let xi=0;const yp=Promise.resolve(),_p=()=>xi||(yp.then(()=>xi=0),xi=Date.now());function vp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ft(wp(r,n.value),e,5,[r])};return n.value=t,n.attached=_p(),n}function wp(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const el=/^on[a-z]/,bp=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?cp(t,r,s):e==="style"?up(t,n,r):ti(e)?Ao(e)||mp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ep(t,e,r,s))?fp(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hp(t,e,r,s))};function Ep(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&el.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||el.test(e)&&$e(n)?!1:e in t}const Wn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>bs(e,n):e};function Ip(t){t.target.composing=!0}function tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Wn(s);const i=r||s.props&&s.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ks(a)),t._assign(a)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",Ip),zt(t,"compositionend",tl),zt(t,"change",tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Wn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ab={deep:!0,created(t,e,n){t._assign=Wn(n),zt(t,"change",()=>{const r=t._modelValue,s=xr(t),i=t.checked,o=t._assign;if(ee(r)){const a=To(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(a,1),o(h)}}else if(Zn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(du(t,i))})},mounted:nl,beforeUpdate(t,e,n){t._assign=Wn(n),nl(t,e,n)}};function nl(t,{value:e,oldValue:n},r){t._modelValue=e,ee(e)?t.checked=To(e,r.props.value)>-1:Zn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Hr(e,du(t,!0)))}const Sb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Zn(e);zt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ks(xr(o)):xr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Wn(r)},mounted(t,{value:e}){rl(t,e)},beforeUpdate(t,e,n){t._assign=Wn(n)},updated(t,{value:e}){rl(t,e)}};function rl(t,e){const n=t.multiple;if(!(n&&!ee(e)&&!Zn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=xr(i);if(n)ee(e)?i.selected=To(e,o)>-1:i.selected=e.has(o);else if(Hr(xr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xr(t){return"_value"in t?t._value:t.value}function du(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Cb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):dr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),dr(t,!0),r.enter(t)):r.leave(t,()=>{dr(t,!1)}):dr(t,e))},beforeUnmount(t,{value:e}){dr(t,e)}};function dr(t,e){t.style.display=e?t._vod:"none"}const Tp=Ge({patchProp:bp},lp);let sl;function Ap(){return sl||(sl=jf(Tp))}const Sp=(...t)=>{const e=Ap().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Cp(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cp(t){return $e(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof window<"u";function Rp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Ni(t,e){const n={};for(const r in e){const s=e[r];n[r]=pt(s)?s.map(t):t(s)}return n}const vr=()=>{},pt=Array.isArray,Op=/\/$/,Pp=t=>t.replace(Op,"");function Li(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Np(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function kp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function il(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Dp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kn(e.matched[r],n.matched[s])&&hu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xp(t[n],e[n]))return!1;return!0}function xp(t,e){return pt(t)?ol(t,e):pt(e)?ol(e,t):t===e}function ol(t,e){return pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Np(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Nr;(function(t){t.pop="pop",t.push="push"})(Nr||(Nr={}));var wr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wr||(wr={}));function Lp(t){if(!t)if(xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pp(t)}const $p=/^[^#]+#/;function Mp(t,e){return t.replace($p,"#")+e}function Up(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Up(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function al(t,e){return(history.state?history.state.position-e:-1)+t}const oo=new Map;function Vp(t,e){oo.set(t,e)}function jp(t){const e=oo.get(t);return oo.delete(t),e}let Bp=()=>location.protocol+"//"+location.host;function fu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),il(c,"")}return il(n,t)+r+s}function qp(t,e,n,r){let s=[],i=[],o=null;const a=({state:S})=>{const k=fu(t,location),j=n.value,K=e.value;let X=0;if(S){if(n.value=k,e.value=S,o&&o===j){o=null;return}X=K?S.position-K.position:0}else r(k);s.forEach(G=>{G(n.value,j,{delta:X,type:Nr.pop,direction:X?X>0?wr.forward:wr.back:wr.unknown})})};function c(){o=n.value}function h(S){s.push(S);const k=()=>{const j=s.indexOf(S);j>-1&&s.splice(j,1)};return i.push(k),k}function m(){const{history:S}=window;S.state&&S.replaceState(ye({},S.state,{scroll:hi()}),"")}function b(){for(const S of i)S();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",m),{pauseListeners:c,listen:h,destroy:b}}function ll(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hi():null}}function Hp(t){const{history:e,location:n}=window,r={value:fu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,m){const b=t.indexOf("#"),S=b>-1?(n.host&&document.querySelector("base")?t:t.slice(b))+c:Bp()+t+c;try{e[m?"replaceState":"pushState"](h,"",S),s.value=h}catch(k){console.error(k),n[m?"replace":"assign"](S)}}function o(c,h){const m=ye({},e.state,ll(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,m,!0),r.value=c}function a(c,h){const m=ye({},s.value,e.state,{forward:c,scroll:hi()});i(m.current,m,!0);const b=ye({},ll(r.value,c,null),{position:m.position+1},h);i(c,b,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function zp(t){t=Lp(t);const e=Hp(t),n=qp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:Mp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Wp(t){return typeof t=="string"||t&&typeof t=="object"}function pu(t){return typeof t=="string"||typeof t=="symbol"}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mu=Symbol("");var cl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cl||(cl={}));function Gn(t,e){return ye(new Error,{type:t,[mu]:!0},e)}function Rt(t,e){return t instanceof Error&&mu in t&&(e==null||!!(t.type&e))}const ul="[^/]+?",Kp={sensitive:!1,strict:!1,start:!0,end:!0},Gp=/[.+*?^${}()[\]/\\]/g;function Yp(t,e){const n=ye({},Kp,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const m=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let b=0;b<h.length;b++){const S=h[b];let k=40+(n.sensitive?.25:0);if(S.type===0)b||(s+="/"),s+=S.value.replace(Gp,"\\$&"),k+=40;else if(S.type===1){const{value:j,repeatable:K,optional:X,regexp:G}=S;i.push({name:j,repeatable:K,optional:X});const te=G||ul;if(te!==ul){k+=10;try{new RegExp(`(${te})`)}catch(le){throw new Error(`Invalid custom RegExp for param "${j}" (${te}): `+le.message)}}let J=K?`((?:${te})(?:/(?:${te}))*)`:`(${te})`;b||(J=X&&h.length<2?`(?:/${J})`:"/"+J),X&&(J+="?"),s+=J,k+=20,X&&(k+=-8),K&&(k+=-20),te===".*"&&(k+=-50)}m.push(k)}r.push(m)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(h){const m=h.match(o),b={};if(!m)return null;for(let S=1;S<m.length;S++){const k=m[S]||"",j=i[S-1];b[j.name]=k&&j.repeatable?k.split("/"):k}return b}function c(h){let m="",b=!1;for(const S of t){(!b||!m.endsWith("/"))&&(m+="/"),b=!1;for(const k of S)if(k.type===0)m+=k.value;else if(k.type===1){const{value:j,repeatable:K,optional:X}=k,G=j in h?h[j]:"";if(pt(G)&&!K)throw new Error(`Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`);const te=pt(G)?G.join("/"):G;if(!te)if(X)S.length<2&&(m.endsWith("/")?m=m.slice(0,-1):b=!0);else throw new Error(`Missing required param "${j}"`);m+=te}}return m||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Jp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Qp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Jp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(dl(r))return 1;if(dl(s))return-1}return s.length-r.length}function dl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xp={type:0,value:""},Zp=/[a-zA-Z0-9_]/;function em(t){if(!t)return[[]];if(t==="/")return[[Xp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(k){throw new Error(`ERR (${n})/"${h}": ${k}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,h="",m="";function b(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:m,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function S(){h+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&b(),o()):c===":"?(b(),n=1):S();break;case 4:S(),n=r;break;case 1:c==="("?n=2:Zp.test(c)?S():(b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+c:n=3:m+=c;break;case 3:b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,m="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),b(),o(),s}function tm(t,e,n){const r=Yp(em(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nm(t,e){const n=[],r=new Map;e=pl({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,b,S){const k=!S,j=rm(m);j.aliasOf=S&&S.record;const K=pl(e,m),X=[j];if("alias"in m){const J=typeof m.alias=="string"?[m.alias]:m.alias;for(const le of J)X.push(ye({},j,{components:S?S.record.components:j.components,path:le,aliasOf:S?S.record:j}))}let G,te;for(const J of X){const{path:le}=J;if(b&&le[0]!=="/"){const Ce=b.record.path,z=Ce[Ce.length-1]==="/"?"":"/";J.path=b.record.path+(le&&z+le)}if(G=tm(J,b,K),S?S.alias.push(G):(te=te||G,te!==G&&te.alias.push(G),k&&m.name&&!fl(G)&&o(m.name)),j.children){const Ce=j.children;for(let z=0;z<Ce.length;z++)i(Ce[z],G,S&&S.children[z])}S=S||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&c(G)}return te?()=>{o(te)}:vr}function o(m){if(pu(m)){const b=r.get(m);b&&(r.delete(m),n.splice(n.indexOf(b),1),b.children.forEach(o),b.alias.forEach(o))}else{const b=n.indexOf(m);b>-1&&(n.splice(b,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function a(){return n}function c(m){let b=0;for(;b<n.length&&Qp(m,n[b])>=0&&(m.record.path!==n[b].record.path||!gu(m,n[b]));)b++;n.splice(b,0,m),m.record.name&&!fl(m)&&r.set(m.record.name,m)}function h(m,b){let S,k={},j,K;if("name"in m&&m.name){if(S=r.get(m.name),!S)throw Gn(1,{location:m});K=S.record.name,k=ye(hl(b.params,S.keys.filter(te=>!te.optional).map(te=>te.name)),m.params&&hl(m.params,S.keys.map(te=>te.name))),j=S.stringify(k)}else if("path"in m)j=m.path,S=n.find(te=>te.re.test(j)),S&&(k=S.parse(j),K=S.record.name);else{if(S=b.name?r.get(b.name):n.find(te=>te.re.test(b.path)),!S)throw Gn(1,{location:m,currentLocation:b});K=S.record.name,k=ye({},b.params,m.params),j=S.stringify(k)}const X=[];let G=S;for(;G;)X.unshift(G.record),G=G.parent;return{name:K,path:j,params:k,matched:X,meta:im(X)}}return t.forEach(m=>i(m)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function hl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:sm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function sm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function fl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function im(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function pl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gu(t,e){return e.children.some(n=>n===t||gu(t,n))}const yu=/#/g,om=/&/g,am=/\//g,lm=/=/g,cm=/\?/g,_u=/\+/g,um=/%5B/g,dm=/%5D/g,vu=/%5E/g,hm=/%60/g,wu=/%7B/g,fm=/%7C/g,bu=/%7D/g,pm=/%20/g;function Vo(t){return encodeURI(""+t).replace(fm,"|").replace(um,"[").replace(dm,"]")}function mm(t){return Vo(t).replace(wu,"{").replace(bu,"}").replace(vu,"^")}function ao(t){return Vo(t).replace(_u,"%2B").replace(pm,"+").replace(yu,"%23").replace(om,"%26").replace(hm,"`").replace(wu,"{").replace(bu,"}").replace(vu,"^")}function gm(t){return ao(t).replace(lm,"%3D")}function ym(t){return Vo(t).replace(yu,"%23").replace(cm,"%3F")}function _m(t){return t==null?"":ym(t).replace(am,"%2F")}function $s(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function vm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_u," "),o=i.indexOf("="),a=$s(o<0?i:i.slice(0,o)),c=o<0?null:$s(i.slice(o+1));if(a in e){let h=e[a];pt(h)||(h=e[a]=[h]),h.push(c)}else e[a]=c}return e}function ml(t){let e="";for(let n in t){const r=t[n];if(n=gm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(r)?r.map(i=>i&&ao(i)):[r&&ao(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bm=Symbol(""),gl=Symbol(""),jo=Symbol(""),Eu=Symbol(""),lo=Symbol("");function hr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ht(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=b=>{b===!1?a(Gn(4,{from:n,to:e})):b instanceof Error?a(b):Wp(b)?a(Gn(2,{from:e,to:b})):(i&&r.enterCallbacks[s]===i&&typeof b=="function"&&i.push(b),o())},h=t.call(r&&r.instances[s],e,n,c);let m=Promise.resolve(h);t.length<3&&(m=m.then(c)),m.catch(b=>a(b))})}function $i(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Em(a)){const h=(a.__vccOpts||a)[e];h&&s.push(Ht(h,n,r,i,o))}else{let c=a();s.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const m=Rp(h)?h.default:h;i.components[o]=m;const S=(m.__vccOpts||m)[e];return S&&Ht(S,n,r,i,o)()}))}}return s}function Em(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yl(t){const e=Dt(jo),n=Dt(Eu),r=at(()=>e.resolve(yn(t.to))),s=at(()=>{const{matched:c}=r.value,{length:h}=c,m=c[h-1],b=n.matched;if(!m||!b.length)return-1;const S=b.findIndex(Kn.bind(null,m));if(S>-1)return S;const k=_l(c[h-2]);return h>1&&_l(m)===k&&b[b.length-1].path!==k?b.findIndex(Kn.bind(null,c[h-2])):S}),i=at(()=>s.value>-1&&Sm(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&hu(n.params,r.value.params));function a(c={}){return Am(c)?e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(vr):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Im=Wc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yl,setup(t,{slots:e}){const n=Wr(yl(t)),{options:r}=Dt(jo),s=at(()=>({[vl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:uu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Tm=Im;function Am(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function _l(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vl=(t,e,n)=>t??e??n,Cm=Wc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(lo),s=at(()=>t.route||r.value),i=Dt(gl,0),o=at(()=>{let h=yn(i);const{matched:m}=s.value;let b;for(;(b=m[h])&&!b.components;)h++;return h}),a=at(()=>s.value.matched[o.value]);Es(gl,at(()=>o.value+1)),Es(bm,a),Es(lo,s);const c=Wh();return Is(()=>[c.value,a.value,t.name],([h,m,b],[S,k,j])=>{m&&(m.instances[b]=h,k&&k!==m&&h&&h===S&&(m.leaveGuards.size||(m.leaveGuards=k.leaveGuards),m.updateGuards.size||(m.updateGuards=k.updateGuards))),h&&m&&(!k||!Kn(m,k)||!S)&&(m.enterCallbacks[b]||[]).forEach(K=>K(h))},{flush:"post"}),()=>{const h=s.value,m=t.name,b=a.value,S=b&&b.components[m];if(!S)return wl(n.default,{Component:S,route:h});const k=b.props[m],j=k?k===!0?h.params:typeof k=="function"?k(h):k:null,X=uu(S,ye({},j,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(b.instances[m]=null)},ref:c}));return wl(n.default,{Component:X,route:h})||X}}});function wl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Iu=Cm;function Rm(t){const e=nm(t.routes,t),n=t.parseQuery||vm,r=t.stringifyQuery||ml,s=t.history,i=hr(),o=hr(),a=hr(),c=Kh(jt);let h=jt;xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=Ni.bind(null,D=>""+D),b=Ni.bind(null,_m),S=Ni.bind(null,$s);function k(D,W){let q,Q;return pu(D)?(q=e.getRecordMatcher(D),Q=W):Q=D,e.addRoute(Q,q)}function j(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function K(){return e.getRoutes().map(D=>D.record)}function X(D){return!!e.getRecordMatcher(D)}function G(D,W){if(W=ye({},W||c.value),typeof D=="string"){const y=Li(n,D,W.path),I=e.resolve({path:y.path},W),R=s.createHref(y.fullPath);return ye(y,I,{params:S(I.params),hash:$s(y.hash),redirectedFrom:void 0,href:R})}let q;if("path"in D)q=ye({},D,{path:Li(n,D.path,W.path).path});else{const y=ye({},D.params);for(const I in y)y[I]==null&&delete y[I];q=ye({},D,{params:b(D.params)}),W.params=b(W.params)}const Q=e.resolve(q,W),ce=D.hash||"";Q.params=m(S(Q.params));const Te=kp(r,ye({},D,{hash:mm(ce),path:Q.path})),ie=s.createHref(Te);return ye({fullPath:Te,hash:ce,query:r===ml?wm(D.query):D.query||{}},Q,{redirectedFrom:void 0,href:ie})}function te(D){return typeof D=="string"?Li(n,D,c.value.path):ye({},D)}function J(D,W){if(h!==D)return Gn(8,{from:W,to:D})}function le(D){return v(D)}function Ce(D){return le(ye(te(D),{replace:!0}))}function z(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let Q=typeof q=="function"?q(D):q;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=te(Q):{path:Q},Q.params={}),ye({query:D.query,hash:D.hash,params:"path"in Q?{}:D.params},Q)}}function v(D,W){const q=h=G(D),Q=c.value,ce=D.state,Te=D.force,ie=D.replace===!0,y=z(q);if(y)return v(ye(te(y),{state:typeof y=="object"?ye({},ce,y.state):ce,force:Te,replace:ie}),W||q);const I=q;I.redirectedFrom=W;let R;return!Te&&Dp(r,Q,q)&&(R=Gn(16,{to:I,from:Q}),oe(Q,Q,!0,!1)),(R?Promise.resolve(R):g(I,Q)).catch(P=>Rt(P)?Rt(P,2)?P:L(P):C(P,I,Q)).then(P=>{if(P){if(Rt(P,2))return v(ye({replace:ie},te(P.to),{state:typeof P.to=="object"?ye({},ce,P.to.state):ce,force:Te}),W||I)}else P=u(I,Q,!0,ie,ce);return d(I,Q,P),P})}function w(D,W){const q=J(D,W);return q?Promise.reject(q):Promise.resolve()}function g(D,W){let q;const[Q,ce,Te]=Om(D,W);q=$i(Q.reverse(),"beforeRouteLeave",D,W);for(const y of Q)y.leaveGuards.forEach(I=>{q.push(Ht(I,D,W))});const ie=w.bind(null,D,W);return q.push(ie),Dn(q).then(()=>{q=[];for(const y of i.list())q.push(Ht(y,D,W));return q.push(ie),Dn(q)}).then(()=>{q=$i(ce,"beforeRouteUpdate",D,W);for(const y of ce)y.updateGuards.forEach(I=>{q.push(Ht(I,D,W))});return q.push(ie),Dn(q)}).then(()=>{q=[];for(const y of D.matched)if(y.beforeEnter&&!W.matched.includes(y))if(pt(y.beforeEnter))for(const I of y.beforeEnter)q.push(Ht(I,D,W));else q.push(Ht(y.beforeEnter,D,W));return q.push(ie),Dn(q)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),q=$i(Te,"beforeRouteEnter",D,W),q.push(ie),Dn(q))).then(()=>{q=[];for(const y of o.list())q.push(Ht(y,D,W));return q.push(ie),Dn(q)}).catch(y=>Rt(y,8)?y:Promise.reject(y))}function d(D,W,q){for(const Q of a.list())Q(D,W,q)}function u(D,W,q,Q,ce){const Te=J(D,W);if(Te)return Te;const ie=W===jt,y=xn?history.state:{};q&&(Q||ie?s.replace(D.fullPath,ye({scroll:ie&&y&&y.scroll},ce)):s.push(D.fullPath,ce)),c.value=D,oe(D,W,q,ie),L()}let l;function f(){l||(l=s.listen((D,W,q)=>{if(!Pn.listening)return;const Q=G(D),ce=z(Q);if(ce){v(ye(ce,{replace:!0}),Q).catch(vr);return}h=Q;const Te=c.value;xn&&Vp(al(Te.fullPath,q.delta),hi()),g(Q,Te).catch(ie=>Rt(ie,12)?ie:Rt(ie,2)?(v(ie.to,Q).then(y=>{Rt(y,20)&&!q.delta&&q.type===Nr.pop&&s.go(-1,!1)}).catch(vr),Promise.reject()):(q.delta&&s.go(-q.delta,!1),C(ie,Q,Te))).then(ie=>{ie=ie||u(Q,Te,!1),ie&&(q.delta&&!Rt(ie,8)?s.go(-q.delta,!1):q.type===Nr.pop&&Rt(ie,20)&&s.go(-1,!1)),d(Q,Te,ie)}).catch(vr)}))}let p=hr(),T=hr(),E;function C(D,W,q){L(D);const Q=T.list();return Q.length?Q.forEach(ce=>ce(D,W,q)):console.error(D),Promise.reject(D)}function M(){return E&&c.value!==jt?Promise.resolve():new Promise((D,W)=>{p.add([D,W])})}function L(D){return E||(E=!D,f(),p.list().forEach(([W,q])=>D?q(D):W()),p.reset()),D}function oe(D,W,q,Q){const{scrollBehavior:ce}=t;if(!xn||!ce)return Promise.resolve();const Te=!q&&jp(al(D.fullPath,0))||(Q||!q)&&history.state&&history.state.scroll||null;return Uc().then(()=>ce(D,W,Te)).then(ie=>ie&&Fp(ie)).catch(ie=>C(ie,D,W))}const pe=D=>s.go(D);let Re;const Ze=new Set,Pn={currentRoute:c,listening:!0,addRoute:k,removeRoute:j,hasRoute:X,getRoutes:K,resolve:G,options:t,push:le,replace:Ce,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:T.add,isReady:M,install(D){const W=this;D.component("RouterLink",Tm),D.component("RouterView",Iu),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(c)}),xn&&!Re&&c.value===jt&&(Re=!0,le(s.location).catch(ce=>{}));const q={};for(const ce in jt)q[ce]=at(()=>c.value[ce]);D.provide(jo,W),D.provide(Eu,Wr(q)),D.provide(lo,c);const Q=D.unmount;Ze.add(D),D.unmount=function(){Ze.delete(D),Ze.size<1&&(h=jt,l&&l(),l=null,c.value=jt,Re=!1,E=!1),Q()}}};return Pn}function Dn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Om(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(h=>Kn(h,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(h=>Kn(h,c))||s.push(c))}return[n,r,s]}const Pm={__name:"App",setup(t){return(e,n)=>(_n(),ci(yn(Iu)))}},km="modulepreload",Dm=function(t){return"/aljihad/"+t},bl={},Me=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dm(i),i in bl)return;bl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const b=s[m];if(b.href===i&&(!o||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":km,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((m,b)=>{h.addEventListener("load",m),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};class Yn{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,n,r){e.alertmode=r,e.alertmsg=n,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const n=e.split(" ");for(let r=0;r<n.length;r++)n[r]=Yn.capitalizeFirstLetter(n[r]);return n.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var n=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var a=e.split(""),c="",h=0,m=0;m<o;m++)(o-m)%3==2?a[m]=="1"?(c+=s[Number(a[m+1])]+" ",m++,h=1):a[m]!=0&&(c+=i[a[m]-2]+" ",h=1):a[m]!=0&&(c+=r[a[m]]+" ",(o-m)%3==0&&(c+="hundred "),h=1),(o-m)%3==1&&(h&&(c+=n[(o-m-1)/3]+" "),h=0);if(o!=e.length){var b=e.length;c+="point ";for(var m=o+1;m<b;m++)c+=r[a[m]]+" "}return Yn.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class Rb{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateGoldReceiptNumber(){return this.generateId("GLD")}static generateQutationNumber(){return this.generateId("TMP")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,m=i>>2,b=(i&3)<<4|a>>4;let S=(a&15)<<2|h>>6,k=h&63;c||(k=64,o||(S=64)),r.push(n[m],n[b],n[S],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||h==null||b==null)throw new Nm;const S=i<<2|a>>4;if(r.push(S),h!==64){const k=a<<4&240|h>>2;if(r.push(k),b!==64){const j=h<<6&192|b;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(t){const e=Tu(t);return Au.encodeByteArray(e,!0)},Ms=function(t){return Lm(t).replace(/\./g,"")},Su=function(t){try{return Au.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=()=>$m().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Su(t[1]);return e&&JSON.parse(e)},Bo=()=>{try{return Mm()||Um()||Fm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cu=t=>{var e,n;return(n=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vm=t=>{const e=Cu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ru=()=>{var t;return(t=Bo())===null||t===void 0?void 0:t.config},Ou=t=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ms(JSON.stringify(n)),Ms(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Hm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wm(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ym,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function Jm(t,e){return t.replace(Qm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qm=/\{\$([^}]+)}/g;function Xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(El(i)&&El(o)){if(!Us(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function El(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zm(t,e){const n=new eg(t,e);return n.subscribe.bind(n)}class eg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mi),s.error===void 0&&(s.error=Mi),s.complete===void 0&&(s.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rg(t){return t===hn?void 0:t}function sg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const og={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},ag=me.INFO,lg={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},cg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qo{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const ug=(t,e)=>e.some(n=>t instanceof n);let Il,Tl;function dg(){return Il||(Il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return Tl||(Tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,co=new WeakMap,ku=new WeakMap,Ui=new WeakMap,Ho=new WeakMap;function fg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pu.set(n,t)}).catch(()=>{}),Ho.set(e,t),e}function pg(t){if(co.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});co.set(t,e)}let uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return co.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ku.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mg(t){uo=t(uo)}function gg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fi(this),e,...n);return ku.set(r,e.sort?e.sort():[e]),Xt(r)}:hg().includes(t)?function(...e){return t.apply(Fi(this),e),Xt(Pu.get(this))}:function(...e){return Xt(t.apply(Fi(this),e))}}function yg(t){return typeof t=="function"?gg(t):(t instanceof IDBTransaction&&pg(t),ug(t,dg())?new Proxy(t,uo):t)}function Xt(t){if(t instanceof IDBRequest)return fg(t);if(Ui.has(t))return Ui.get(t);const e=yg(t);return e!==t&&(Ui.set(t,e),Ho.set(e,t)),e}const Fi=t=>Ho.get(t);function _g(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const vg=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],Vi=new Map;function Al(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&c.done]))[0]};return Vi.set(e,i),i}mg(t=>({...t,get:(e,n,r)=>Al(e,n)||t.get(e,n,r),has:(e,n)=>!!Al(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",Sl="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new qo("@firebase/app"),Ig="@firebase/app-compat",Tg="@firebase/analytics-compat",Ag="@firebase/analytics",Sg="@firebase/app-check-compat",Cg="@firebase/app-check",Rg="@firebase/auth",Og="@firebase/auth-compat",Pg="@firebase/database",kg="@firebase/database-compat",Dg="@firebase/functions",xg="@firebase/functions-compat",Ng="@firebase/installations",Lg="@firebase/installations-compat",$g="@firebase/messaging",Mg="@firebase/messaging-compat",Ug="@firebase/performance",Fg="@firebase/performance-compat",Vg="@firebase/remote-config",jg="@firebase/remote-config-compat",Bg="@firebase/storage",qg="@firebase/storage-compat",Hg="@firebase/firestore",zg="@firebase/firestore-compat",Wg="firebase",Kg="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="[DEFAULT]",Gg={[ho]:"fire-core",[Ig]:"fire-core-compat",[Ag]:"fire-analytics",[Tg]:"fire-analytics-compat",[Cg]:"fire-app-check",[Sg]:"fire-app-check-compat",[Rg]:"fire-auth",[Og]:"fire-auth-compat",[Pg]:"fire-rtdb",[kg]:"fire-rtdb-compat",[Dg]:"fire-fn",[xg]:"fire-fn-compat",[Ng]:"fire-iid",[Lg]:"fire-iid-compat",[$g]:"fire-fcm",[Mg]:"fire-fcm-compat",[Ug]:"fire-perf",[Fg]:"fire-perf-compat",[Vg]:"fire-rc",[jg]:"fire-rc-compat",[Bg]:"fire-gcs",[qg]:"fire-gcs-compat",[Hg]:"fire-fst",[zg]:"fire-fst-compat","fire-js":"fire-js",[Wg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,po=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(po.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,t);for(const n of Fs.values())Yg(n,t);return!0}function zo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Kr("app","Firebase",Jg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=Kg;function Du(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(n||(n=Ru()),!n)throw Zt.create("no-options");const i=Fs.get(s);if(i){if(Us(n,i.options)&&Us(r,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const o=new ig(s);for(const c of po.values())o.addComponent(c);const a=new Qg(n,r,o);return Fs.set(s,a),a}function xu(t=fo){const e=Fs.get(t);if(!e&&t===fo&&Ru())return Du();if(!e)throw Zt.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=Gg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(a.join(" "));return}Jn(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="firebase-heartbeat-database",Zg=1,Lr="firebase-heartbeat-store";let ji=null;function Nu(){return ji||(ji=_g(Xg,Zg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),ji}async function ey(t){try{return await(await Nu()).transaction(Lr).objectStore(Lr).get(Lu(t))}catch(e){if(e instanceof Ut)En.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Cl(t,e){try{const r=(await Nu()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,Lu(t)),await r.done}catch(n){if(n instanceof Ut)En.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Lu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=1024,ny=30*24*60*60*1e3;class ry{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ny}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rl(),{heartbeatsToSend:n,unsentEntries:r}=sy(this._heartbeatsCache.heartbeats),s=Ms(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rl(){return new Date().toISOString().substring(0,10)}function sy(t,e=ty){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ol(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ol(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ey(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ol(t){return Ms(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){Jn(new bn("platform-logger",e=>new bg(e),"PRIVATE")),Jn(new bn("heartbeat",e=>new ry(e),"PRIVATE")),en(ho,Sl,t),en(ho,Sl,"esm2017"),en("fire-js","")}oy("");var ay="firebase",ly="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(ay,ly,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new qo("@firebase/firestore");function In(t,...e){if(Qn.logLevel<=me.DEBUG){const n=e.map(Wo);Qn.debug(`Firestore (${sr}): ${t}`,...n)}}function fi(t,...e){if(Qn.logLevel<=me.ERROR){const n=e.map(Wo);Qn.error(`Firestore (${sr}): ${t}`,...n)}}function $u(t,...e){if(Qn.logLevel<=me.WARN){const n=e.map(Wo);Qn.warn(`Firestore (${sr}): ${t}`,...n)}}function Wo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t="Unexpected state"){const e=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: `+t;throw fi(e),new Error(e)}function st(t,e){t||be()}function Yr(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="ok",Ko="cancelled",Vn="unknown",Z="invalid-argument",Mu="deadline-exceeded",Uu="not-found",cy="already-exists",Fu="permission-denied",Vs="unauthenticated",Vu="resource-exhausted",Tn="failed-precondition",Go="aborted",ju="out-of-range",Yo="unimplemented",Bu="internal",qu="unavailable",uy="data-loss";class Y extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class hy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(st(typeof e.accessToken=="string"),new Hu(e.accessToken,new Je(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class py{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class my{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new py(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yy{constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(st(typeof e.token=="string"),new gy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r,s,i,o,a,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}class Mr{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(),r===void 0?r=e.length-n:r>e.length-n&&be(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Mr{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(Z,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const vy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Mr{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return vy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(Z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Y(Z,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(Z,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Y(Z,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.path=e}static fromPath(e){return new Fe(Le.fromString(e))}static fromName(e){return new Fe(Le.fromString(e).popFirst(5))}static empty(){return new Fe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fe(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e,n){if(!n)throw new Y(Z,`Function ${t}() cannot be called with an empty ${e}.`)}function kl(t){if(!Fe.isDocumentKey(t))throw new Y(Z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dl(t){if(Fe.isDocumentKey(t))throw new Y(Z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be()}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(Z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pi(t);throw new Y(Z,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wy(t,e){if(e<=0)throw new Y(Z,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=null;function by(){return fs===null?fs=268435456+Math.round(2147483648*Math.random()):fs++,"0x"+fs.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return t==null}function js(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xl,ue;function Nl(t){if(t===void 0)return fi("RPC_ERROR","HTTP error has no status"),Vn;switch(t){case 200:return Pl;case 400:return Tn;case 401:return Vs;case 403:return Fu;case 404:return Uu;case 409:return Go;case 416:return ju;case 429:return Vu;case 499:return Ko;case 500:return Vn;case 501:return Yo;case 503:return qu;case 504:return Mu;default:return t>=200&&t<300?Pl:t>=400&&t<500?Tn:t>=500&&t<600?Bu:Vn}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ue=xl||(xl={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";class Iy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,s,i){const o=by(),a=this.I(e,n);In("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.T(c,s,i),this.A(e,a,c,r).then(h=>(In("RestConnection",`Received RPC '${e}' ${o}: `,h),h),h=>{throw $u("RestConnection",`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+sr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,n){const r=Ey[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(n,{method:"POST",headers:r,body:o})}catch(c){const h=c;throw new Y(Nl(h.status),"Request failed with error: "+h.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const h=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new Y(Nl(a.status),`Request failed with error: ${h??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ty(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ue(t,e){return t<e?-1:t>e?1:0}function Gu(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sy("Invalid base64 string: "+s):s}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Cy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(st(!!t),typeof t=="string"){let e=0;const n=Cy.exec(t);if(st(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(Z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(Z,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ju(t){const e=t.mapValue.fields.__previous_value__;return Yu(e)?Ju(e):e}function Fr(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps={fields:{__type__:{stringValue:"__max__"}}};function Sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:be()}function Bs(t,e){if(t===e)return!0;const n=Sn(t);if(n!==Sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fr(t).isEqual(Fr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=An(r.timestampValue),o=An(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ur(r.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ne(r.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ne(r.integerValue)===Ne(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ne(r.doubleValue),o=Ne(s.doubleValue);return i===o?js(i)===js(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Gu(t.arrayValue.values||[],e.arrayValue.values||[],Bs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ll(i)!==Ll(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bs(i[a],o[a])))return!1;return!0}(t,e);default:return be()}}function Vr(t,e){return(t.values||[]).find(n=>Bs(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Sn(t),r=Sn(e);if(n!==r)return Ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ue(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ne(s.integerValue||s.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $l(t.timestampValue,e.timestampValue);case 4:return $l(Fr(t),Fr(e));case 5:return Ue(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ur(s),a=Ur(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=Ue(o[c],a[c]);if(h!==0)return h}return Ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ue(Ne(s.latitude),Ne(i.latitude));return o!==0?o:Ue(Ne(s.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=qs(o[c],a[c]);if(h)return h}return Ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ps&&i===ps)return 0;if(s===ps)return 1;if(i===ps)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let m=0;m<a.length&&m<h.length;++m){const b=Ue(a[m],h[m]);if(b!==0)return b;const S=qs(o[a[m]],c[h[m]]);if(S!==0)return S}return Ue(a.length,h.length)}(t.mapValue,e.mapValue);default:throw be()}}function $l(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ue(t,e);const n=An(t),r=An(e),s=Ue(n.seconds,r.seconds);return s!==0?s:Ue(n.nanos,r.nanos)}function Ml(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qu(t){return!!t&&"arrayValue"in t}function Ul(t){return!!t&&"nullValue"in t}function Fl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bi(t){return!!t&&"mapValue"in t}function br(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=br(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=br(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Vl{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{}class yt extends Xu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ry(e,n,r):n==="array-contains"?new ky(e,r):n==="in"?new Dy(e,r):n==="not-in"?new xy(e,r):n==="array-contains-any"?new Ny(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Oy(e,r):new Py(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xr extends Xu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Xr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class Ry extends yt{constructor(e,n,r){super(e,n,r),this.key=Fe.fromName(r.referenceValue)}matches(e){const n=Fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Oy extends yt{constructor(e,n){super(e,"in",n),this.keys=Zu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Py extends yt{constructor(e,n){super(e,"not-in",n),this.keys=Zu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Fe.fromName(r.referenceValue))}class ky extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Vr(n.arrayValue,this.value)}}class Dy extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vr(this.value.arrayValue,n)}}class xy extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vr(this.value.arrayValue,n)}}class Ny extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ke(e)}static min(){return new ke(new it(0,0))}static max(){return new ke(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Hs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Hs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ve(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.comparator=e,this.data=new Hs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jl(this.data.getIterator())}getIteratorFrom(e){return new jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new zs(this.comparator);return n.data=e,n}}class jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new zs(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gu(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=br(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=br(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(br(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,ke.min(),ke.min(),ke.min(),rt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ke.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ke.min(),ke.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ke.min(),ke.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Bl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ly(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function Qo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $y(t){return t.collectionGroup!==null}function ql(t){const e=Yr(t);if(e.q===null){e.q=[];const n=gi(e),r=Qo(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Er(n)),e.q.push(new Er(nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Er(nt.keyField(),i))}}}return e.q}function My(t){const e=Yr(t);if(!e.O)if(e.limitType==="F")e.O=Bl(e.path,e.collectionGroup,ql(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ql(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Er(i.field,o))}const r=e.endAt?new Vl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Vl(e.startAt.position,e.startAt.inclusive):null;e.O=Bl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function mo(t,e){e.getFirstInequalityField(),gi(t);const n=t.filters.concat([e]);return new mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:js(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this._=void 0}}class Fy extends yi{}class Vy extends yi{constructor(e){super(),this.elements=e}}class jy extends yi{constructor(e){super(),this.elements=e}}class By extends yi{constructor(e,n){super(),this.serializer=e,this.k=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class _i{}class ed extends _i{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xo extends _i{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class td extends _i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nd extends _i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zy=(()=>({and:"AND",or:"OR"}))();class Wy{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function go(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ky(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gy(t,e){return go(t,e.toTimestamp())}function Ir(t){return st(!!t),ke.fromTimestamp(function(e){const n=An(e);return new it(n.seconds,n.nanos)}(t))}function Zo(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ws(t,e){return Zo(t.databaseId,e.path)}function yo(t,e){const n=function(s){const i=Le.fromString(s);return st(id(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(Z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(Z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Fe((st((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Hl(t,e){return Zo(t.databaseId,e)}function rd(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zl(t,e,n){return{name:Ws(t,e),fields:n.value.mapValue.fields}}function Yy(t,e){return"found"in e?function(n,r){st(!!r.found),r.found.name,r.found.updateTime;const s=yo(n,r.found.name),i=Ir(r.found.updateTime),o=r.found.createTime?Ir(r.found.createTime):ke.min(),a=new rt({mapValue:{fields:r.found.fields}});return bt.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){st(!!r.missing),st(!!r.readTime);const s=yo(n,r.missing),i=Ir(r.readTime);return bt.newNoDocument(s,i)}(t,e):be()}function Jy(t,e){let n;if(e instanceof ed)n={update:zl(t,e.key,e.value)};else if(e instanceof td)n={delete:Ws(t,e.key)};else if(e instanceof Xo)n={update:zl(t,e.key,e.data),updateMask:t_(e.fieldMask)};else{if(!(e instanceof nd))return be();n={verify:Ws(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fy)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vy)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof jy)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof By)return{fieldPath:i.field.canonicalString(),increment:o.k};throw be()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Gy(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:be()}(t,e.precondition)),n}function Qy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return sd(Xr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Nn(m.field),direction:Xy(m.dir)}}(h))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,h){return c.useProto3Json||Ku(h)?h:{value:h}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Xy(t){return qy[t]}function Zy(t){return Hy[t]}function e_(t){return zy[t]}function Nn(t){return{fieldPath:t.canonicalString()}}function sd(t){return t instanceof yt?function(e){if(e.op==="=="){if(Fl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NAN"}};if(Ul(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fl(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NAN"}};if(Ul(e.value))return{unaryFilter:{field:Nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(e.field),op:Zy(e.op),value:e.value}}}(t):t instanceof Xr?function(e){const n=e.getFilters().map(r=>sd(r));return n.length===1?n[0]:{compositeFilter:{op:e_(e.op),filters:n}}}(t):be()}function t_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function id(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return new Wy(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=n,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const n=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,n-r);s>0&&In("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new Y(Tn,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Vs&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(Vn,s.toString())})}R(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Vs&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(Vn,i.toString())})}terminate(){this.J=!0}}async function ad(t,e){const n=Yr(t),r=rd(n.serializer)+"/documents",s={writes:e.map(i=>Jy(n.serializer,i))};await n.v("Commit",r,s)}async function ld(t,e){const n=Yr(t),r=rd(n.serializer)+"/documents",s={documents:e.map(c=>Ws(n.serializer,c))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const h=Yy(n.serializer,c);o.set(h.key.toString(),h)});const a=[];return e.forEach(c=>{const h=o.get(c.toString());st(!!h),a.push(h)}),a}async function r_(t,e){const n=Yr(t),r=Qy(n.serializer,My(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=yo(i,o.name),h=Ir(o.updateTime),m=o.createTime?Ir(o.createTime):ke.min(),b=new rt({mapValue:{fields:o.fields}}),S=bt.newFoundDocument(c,h,m,b);return a&&S.setHasCommittedMutations(),a?S.setHasCommittedMutations():S}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function vi(t){if(t._terminated)throw new Y(Tn,"The client has already been terminated.");if(!Tr.has(t)){In("ComponentProvider","Initializing Datastore");const i=function(c){return new Iy(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new _y(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Wu(s.experimentalLongPollingOptions),s.useFetchStreams))),o=ea(t._databaseId),a=function(c,h,m,b){return new n_(c,h,m,b)}(t._authCredentials,t._appCheckCredentials,i,o);Tr.set(t,a)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Tr.get(t)}class Wl{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(Z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(Z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,a){if(i===!0&&a===!0)throw new Y(Z,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Zr{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(Tn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(Tn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dy;switch(n.type){case"firstParty":return new my(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(Z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tr.get(e);n&&(In("ComponentProvider","Removing Datastore"),Tr.delete(e),n.terminate())}(this),Promise.resolve()}}function s_(t,e){const n=typeof t=="object"?t:xu(),r=typeof t=="string"?t:e||"(default)",s=zo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Vm("firestore");i&&i_(s,...i)}return s}function i_(t,e,n,r={}){var s;const i=(t=Jr(t,Zr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&$u("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Je.MOCK_USER;else{o=Bm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(Z,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(c)}t._authCredentials=new hy(new Hu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class sn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sn(this.firestore,e,this._query)}}class tn extends sn{constructor(e,n,r){super(e,n,new mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new Fe(e))}withConverter(e){return new tn(this.firestore,e,this._path)}}function _e(t,e,...n){if(t=je(t),zu("collection","path",e),t instanceof Zr){const r=Le.fromString(e,...n);return Dl(r),new tn(t,null,r)}{if(!(t instanceof Qe||t instanceof tn))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Dl(r),new tn(t.firestore,null,r)}}function Se(t,e,...n){if(t=je(t),arguments.length===1&&(e=Ay.N()),zu("doc","path",e),t instanceof Zr){const r=Le.fromString(e,...n);return kl(r),new Qe(t,null,new Fe(r))}{if(!(t instanceof Qe||t instanceof tn))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return kl(r),new Qe(t.firestore,t instanceof tn?t.converter:null,new Fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Nt.fromBase64String(e))}catch(n){throw new Y(Z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(Z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(Z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(Z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=/^__.*__$/;class a_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xo(e,this.data,this.fieldMask,n,this.fieldTransforms):new ed(e,this.data,n,this.fieldTransforms)}}class cd{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xo(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ud(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class ra{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new ra(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Ks(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(ud(this.et)&&o_.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class l_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ea(e)}ft(e,n,r,s=!1){return new ra({et:e,methodName:n,lt:r,path:nt.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sa(t){const e=t._freezeSettings(),n=ea(t._databaseId);return new l_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dd(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);ia("Data must be an object, but it was:",o,r);const a=hd(r,o);let c,h;if(i.merge)c=new Cn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const b of i.mergeFields){const S=_o(e,b,n);if(!o.contains(S))throw new Y(Z,`Field '${S}' is specified in your field mask but missing from your input data.`);pd(m,S)||m.push(S)}c=new Cn(m),h=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,h=o.fieldTransforms;return new a_(new rt(a),c,h)}class bi extends ta{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}function c_(t,e,n,r){const s=t.ft(1,e,n);ia("Data must be an object, but it was:",s,r);const i=[],o=rt.empty();Qr(r,(c,h)=>{const m=oa(e,c,n);h=je(h);const b=s.ot(m);if(h instanceof bi)i.push(m);else{const S=es(h,b);S!=null&&(i.push(m),o.set(m,S))}});const a=new Cn(i);return new cd(o,a,s.fieldTransforms)}function u_(t,e,n,r,s,i){const o=t.ft(1,e,n),a=[_o(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(Z,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<i.length;S+=2)a.push(_o(e,i[S])),c.push(i[S+1]);const h=[],m=rt.empty();for(let S=a.length-1;S>=0;--S)if(!pd(h,a[S])){const k=a[S];let j=c[S];j=je(j);const K=o.ot(k);if(j instanceof bi)h.push(k);else{const X=es(j,K);X!=null&&(h.push(k),m.set(k,X))}}const b=new Cn(h);return new cd(m,b,o.fieldTransforms)}function d_(t,e,n,r=!1){return es(n,t.ft(r?4:3,e))}function es(t,e){if(fd(t=je(t)))return ia("Unsupported field value:",e,t),hd(t,e);if(t instanceof ta)return function(n,r){if(!ud(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=es(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Uy(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=it.fromDate(n);return{timestampValue:go(r.serializer,s)}}if(n instanceof it){const s=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:go(r.serializer,s)}}if(n instanceof na)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xn)return{bytesValue:Ky(r.serializer,n._byteString)};if(n instanceof Qe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${pi(n)}`)}(t,e)}function hd(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,s)=>{const i=es(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof na||t instanceof Xn||t instanceof Qe||t instanceof ta)}function ia(t,e,n){if(!fd(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=pi(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function _o(t,e,n){if((e=je(e))instanceof wi)return e._internalPath;if(typeof e=="string")return oa(t,e);throw Ks("Field path arguments must be of type string or ",t,!1,void 0,n)}const h_=new RegExp("[~\\*/\\[\\]]");function oa(t,e,n){if(e.search(h_)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wi(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ks(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(Z,a+t+c)}function pd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new md(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class md extends Gs{data(){return super.data()}}class f_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function aa(t,e){return typeof e=="string"?oa(t,e):e instanceof wi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{}class ca extends la{}function Lt(t,e,...n){let r=[];e instanceof la&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof ua).length,o=s.filter(a=>a instanceof Ei).length;if(i>1||i>0&&o>0)throw new Y(Z,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ei extends ca{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ei(e,n,r)}_apply(e){const n=this._parse(e);return gd(e._query,n),new sn(e.firestore,e.converter,mo(e._query,n))}_parse(e){const n=sa(e.firestore);return function(s,i,o,a,c,h,m){let b;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(Z,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Gl(m,h);const S=[];for(const k of m)S.push(Kl(a,s,k));b={arrayValue:{values:S}}}else b=Kl(a,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Gl(m,h),b=d_(o,i,m,h==="in"||h==="not-in");return yt.create(c,h,b)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ii(t,e,n){const r=e,s=aa("where",t);return Ei._create(s,r,n)}class ua extends la{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ua(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)gd(i,a),i=mo(i,a)}(e._query,n),new sn(e.firestore,e.converter,mo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class da extends ca{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new da(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new Y(Z,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Y(Z,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Er(s,i);return function(a,c){if(Qo(a)===null){const h=gi(a);h!==null&&yd(a,h,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new sn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new mi(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function ts(t,e="asc"){const n=e,r=aa("orderBy",t);return da._create(r,n)}class ha extends ca{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ha(e,n,r)}_apply(e){return new sn(e.firestore,e.converter,function(n,r,s){return new mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function Ti(t){return wy("limit",t),ha._create("limit",t,"F")}function Kl(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new Y(Z,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$y(e)&&n.indexOf("/")!==-1)throw new Y(Z,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!Fe.isDocumentKey(r))throw new Y(Z,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ml(t,new Fe(r))}if(n instanceof Qe)return Ml(t,n._key);throw new Y(Z,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(n)}.`)}function Gl(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(Z,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gd(t,e){if(e.isInequality()){const r=gi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new Y(Z,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Qo(t);i!==null&&yd(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(Z,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(Z,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yd(t,e,n){if(!n.isEqual(e))throw new Y(Z,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fa extends class{convertValue(e,n="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw be()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new na(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ju(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const n=An(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);st(id(r));const s=new $r(r.get(1),r.get(3)),i=new Fe(r.popFirst(5));return s.isEqual(n)||fi(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function mt(t){const e=vi((t=Jr(t,Qe)).firestore),n=new fa(t.firestore);return ld(e,[t._key]).then(r=>{st(r.length===1);const s=r[0];return new Gs(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Ct(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Y(Yo,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Jr(t,sn))._query);const e=vi(t.firestore),n=new fa(t.firestore);return r_(e,t._query).then(r=>{const s=r.map(i=>new md(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new f_(t,s)})}function Ft(t,e,n){const r=_d((t=Jr(t,Qe)).converter,e,n),s=dd(sa(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return ad(vi(t.firestore),[s.toMutation(t._key,It.none())])}function gs(t,e){if((t=je(t)).firestore!==e)throw new Y(Z,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Y(Z,"Firestore transactions require all reads to be executed before all writes.");const n=await ld(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new td(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=Fe.fromPath(r);this.mutations.push(new nd(s,this.precondition(s)))}),await ad(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw be();n=ke.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Y(Go,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ke.min())?It.exists(!1):It.updateTime(n):It.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ke.min()))throw new Y(Z,"Can't update a document that doesn't exist.");return It.updateTime(n)}return It.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new od(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new p_(this.datastore),n=this.vt(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const n=this.updateFunction(e);return!Ku(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!function(r){switch(r){default:return be();case Ko:case Vn:case Mu:case Vu:case Bu:case qu:case Vs:return!1;case Z:case Uu:case cy:case Fu:case Tn:case Go:case ju:case Yo:case uy:return!0}}(n)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new pa(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(Ko,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new od(this,"async_queue_retry"),this.Dt=()=>{const n=qi();n&&In("AsyncQueue","Visibility state changed to "+n.visibilityState),this.gt.H()};const e=qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const n=qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const n=new Jo;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(n){return n.name==="IndexedDbTransactionError"}(e))throw e;In("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const n=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw fi("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=n,n}enqueueAfterDelay(e,n,r){this.Ft(),this.Nt.indexOf(e)>-1&&(n=0);const s=pa.createAndSchedule(this,e,n,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&be()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const n of this.Rt)if(n.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Rt)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const n=this.Rt.indexOf(e);this.Rt.splice(n,1)}}class __{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=sa(e)}get(e){const n=gs(e,this._firestore),r=new fa(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return be();const i=s[0];if(i.isFoundDocument())return new Gs(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Gs(this._firestore,r,n._key,null,n.converter);throw be()})}set(e,n,r){const s=gs(e,this._firestore),i=_d(s.converter,n,r),o=dd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=gs(e,this._firestore);let o;return o=typeof(n=je(n))=="string"||n instanceof wi?u_(this._dataReader,"Transaction.update",i._key,n,r,s):c_(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=gs(e,this._firestore);return this._transaction.delete(n._key),this}}function v_(t,e,n){const r=vi(t=Jr(t,Zr)),s=Object.assign(Object.assign({},m_),n);(function(o){if(o.maxAttempts<1)throw new Y(Z,"Max attempts must be at least 1")})(s);const i=new Jo;return new g_(new y_,r,s,o=>e(new __(t,o)),i).run(),i.promise}(function(t){sr=t})(`${rr}_lite`),Jn(new bn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Zr(new fy(t.getProvider("auth-internal")),new yy(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Y(Z,'"projectId" not provided in firebase.initializeApp.');return new $r(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),en("firestore-lite","3.12.0",""),en("firestore-lite","3.12.0","esm2017");class Hi{}Pe(Hi,"APPLICATION_SETTINGS","ApplicationSettings"),Pe(Hi,"PRODUCT_SETTINGS","ProductSettings"),Pe(Hi,"CUSTOMER_SETTINGS","CustomerSettings");class Yl{}Pe(Yl,"SUCCESS","Success"),Pe(Yl,"ERROR","Error");class De{}Pe(De,"INVOICES","Invoices"),Pe(De,"SETTINGS","settings"),Pe(De,"RATES","Rates"),Pe(De,"CCUSTOMERS","Customers"),Pe(De,"PRODUCTS","Products"),Pe(De,"CASH_PAYMENTS","CashPayments"),Pe(De,"GOLD_PAYMENTS","GoldPayments"),Pe(De,"USERS","Users"),Pe(De,"AUDIT","Audit"),Pe(De,"USER_CUSTOMER_MAPPING","UserCustomerMappings");class ys{}Pe(ys,"CASH_TRANSACTION_COLUMNS",[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"amount",show:!0,type:"amount"},{name:"description",show:!0}]),Pe(ys,"GOLD_TRANSACTION_COLUMNS",[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"weight",show:!0,type:"amount"},{name:"purity",show:!0,type:"amount"},{name:"pureWeight",show:!0,type:"amount"},{name:"description",show:!0}]),Pe(ys,"INVOICES_COLUMNS",[{name:"invoiceNumber",show:!0},{name:"purchaseDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"products",show:!0},{name:"weight",show:!0,type:"amount"},{name:"amount",show:!0,type:"amount"}]),Pe(ys,"USER_COLUMNS",[{name:"Name",show:!0,type:"string"},{name:"Email",show:!0,type:"string"},{name:"Contact",show:!0,type:"number"},{name:"status",show:!0,type:"string"}]);function ma(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w_=vd,wd=new Kr("auth","Firebase",vd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new qo("@firebase/auth");function b_(t,...e){Ys.logLevel<=me.WARN&&Ys.warn(`Auth (${rr}): ${t}`,...e)}function Ss(t,...e){Ys.logLevel<=me.ERROR&&Ys.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw ga(t,...e)}function Tt(t,...e){return ga(t,...e)}function E_(t,e,n){const r=Object.assign(Object.assign({},w_()),{[e]:n});return new Kr("auth","Firebase",r).create(e,{appName:t.name})}function ga(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wd.create(t,...e)}function re(t,e,...n){if(!t)throw ga(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ss(e),new Error(e)}function $t(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I_(){return Jl()==="http:"||Jl()==="https:"}function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Hm()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,$t(n>e,"Short delay should be less than long delay!"),this.isMobile=qm()||zm()}get(){return T_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new ns(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return Ed(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bd.fetch()(Id(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ed(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},S_),e);try{const s=new R_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _s(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _s(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _s(t,"user-disabled",o);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw E_(t,m,h);gt(t,m)}}catch(s){if(s instanceof Ut)throw s;gt(t,"network-request-failed",{message:String(s)})}}async function rs(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Id(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ya(t.config,s):`${t.config.apiScheme}://${s}`}class R_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),C_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k_(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=_a(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ar(zi(s.auth_time)),issuedAtTime:Ar(zi(s.iat)),expirationTime:Ar(zi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zi(t){return Number(t)*1e3}function _a(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const s=Su(n);return s?JSON.parse(s):(Ss("Failed to decode base64 JWT payload"),null)}catch(s){return Ss("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function D_(t){const e=_a(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&x_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jr(t,P_(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?M_(i.providerUserInfo):[],a=$_(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),m=c?h:!1,b={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Td(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,b)}async function L_(t){const e=je(t);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function M_(t){return t.map(e=>{var{providerId:n}=e,r=ma(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e){const n=await Ed(t,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Id(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await U_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Br;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ma(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Td(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return k_(this,e)}reload(){return L_(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,h,m;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,j=(o=n.photoURL)!==null&&o!==void 0?o:void 0,K=(a=n.tenantId)!==null&&a!==void 0?a:void 0,X=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,te=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:J,emailVerified:le,isAnonymous:Ce,providerData:z,stsTokenManager:v}=n;re(J&&v,e,"internal-error");const w=Br.fromJSON(this.name,v);re(typeof J=="string",e,"internal-error"),Bt(b,e.name),Bt(S,e.name),re(typeof le=="boolean",e,"internal-error"),re(typeof Ce=="boolean",e,"internal-error"),Bt(k,e.name),Bt(j,e.name),Bt(K,e.name),Bt(X,e.name),Bt(G,e.name),Bt(te,e.name);const g=new wn({uid:J,auth:e,email:S,emailVerified:le,displayName:b,isAnonymous:Ce,photoURL:j,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:G,lastLoginAt:te});return z&&Array.isArray(z)&&(g.providerData=z.map(d=>Object.assign({},d))),X&&(g._redirectEventId=X),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new Br;s.updateFromServerResponse(n);const i=new wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Js(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Map;function kt(t){$t(t instanceof Function,"Expected a class definition");let e=Ql.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ql.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ad.type="NONE";const Xl=Ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Cs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(kt(Xl),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kt(Xl);const o=Cs(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const m=await h._get(o);if(m){const b=wn._fromJSON(e,m);h!==i&&(a=b),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new jn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(kd(e))return"Webos";if(va(e))return"Safari";if((e.includes("chrome/")||Cd(e))&&!e.includes("edge/"))return"Chrome";if(Od(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sd(t=ze()){return/firefox\//i.test(t)}function va(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cd(t=ze()){return/crios\//i.test(t)}function Rd(t=ze()){return/iemobile/i.test(t)}function Od(t=ze()){return/android/i.test(t)}function Pd(t=ze()){return/blackberry/i.test(t)}function kd(t=ze()){return/webos/i.test(t)}function Ai(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F_(t=ze()){var e;return Ai(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V_(){return Wm()&&document.documentMode===10}function Dd(t=ze()){return Ai(t)||Od(t)||kd(t)||Pd(t)||/windows phone/i.test(t)||Rd(t)}function j_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e=[]){let n;switch(t){case"Browser":n=Zl(ze());break;case"Worker":n=`${Zl(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}async function Nd(t,e){return or(t,"GET","/v2/recaptchaConfig",ir(t,e))}function ec(t){return t!==void 0&&t.enterprise!==void 0}class Ld{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $d(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",B_().appendChild(r)})}function q_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const H_="https://www.google.com/recaptcha/enterprise.js?render=",z_="recaptcha-enterprise",W_="NO_RECAPTCHA";class Md{constructor(e){this.type=z_,this.auth=ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Nd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ld(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ec(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(W_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ec(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$d(H_+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Qs(t,e,n,r=!1){const s=new Md(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new K_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}async initializeRecaptchaConfig(){const e=await Nd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ld(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Md(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&b_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ar(t){return je(t)}class tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zm(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e){const n=zo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Us(i,e??{}))return s;gt(s,"already-initialized")}return n.initialize({options:e})}function J_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q_(t,e,n){const r=ar(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ud(e),{host:o,port:a}=X_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Z_()}function Ud(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function X_(t){const e=Ud(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:nc(o)}}}function nc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Z_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function ev(t,e){return or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return rs(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e){return rs(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function nv(t,e){return rs(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends wa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Qs(e,r,"signInWithPassword");return Wi(e,s)}else return Wi(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Qs(e,r,"signInWithPassword");return Wi(e,i)}else return Promise.reject(s)});case"emailLink":return tv(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ev(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nv(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e){return rs(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="http://localhost";class Rn extends wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ma(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bn(e,n)}buildRequest(){const e={requestUri:rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iv(t){const e=pr(mr(t)).link,n=e?pr(mr(e)).deep_link_id:null,r=pr(mr(t)).deep_link_id;return(r?pr(mr(r)).link:null)||r||n||e||t}class ba{constructor(e){var n,r,s,i,o,a;const c=pr(mr(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,m=(r=c.oobCode)!==null&&r!==void 0?r:null,b=sv((s=c.mode)!==null&&s!==void 0?s:null);re(h&&m&&b,"argument-error"),this.apiKey=h,this.operation=b,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iv(e);try{return new ba(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,n){return qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ba.parseLink(n);return re(r,"argument-error"),qr._fromEmailAndCode(e,r.code,r.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends ss{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ss{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ss{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e){return rs(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wn._fromIdTokenResponse(e,r,s),o=rc(r);return new On({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rc(r);return new On({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xs(e,n,r,s)}}function Vd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,i,e,r):i})}async function ov(t,e,n=!1){const r=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await jr(t,Vd(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=_a(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),On._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(t,e,n=!1){const r="signIn",s=await Vd(t,r,e),i=await On._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lv(t,e){return jd(ar(t),e)}async function cv(t,e,n){var r;const s=ar(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const h=await Qs(s,i,"signUpPassword");o=Ki(s,h)}else o=Ki(s,i).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const m=await Qs(s,i,"signUpPassword");return Ki(s,m)}else return Promise.reject(h)});const a=await o.catch(h=>Promise.reject(h)),c=await On._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function uv(t,e,n){return lv(je(t),lr.credential(e,n))}function dv(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function hv(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Zs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){const t=ze();return va(t)||Ai(t)}const pv=1e3,mv=10;class qd extends Bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fv()&&j_(),this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);V_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const gv=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends Bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hd.type="SESSION";const zd=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Si(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(n.origin,i)),c=await yv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Si.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const h=Ea("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(b){const S=b;if(S.data.eventId===h)switch(S.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(S.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function vv(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ev(){return Wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="firebaseLocalStorageDb",Iv=1,ei="firebaseLocalStorage",Gd="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ci(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function Tv(){const t=indexedDB.deleteDatabase(Kd);return new is(t).toPromise()}function wo(){const t=indexedDB.open(Kd,Iv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ei,{keyPath:Gd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await Tv(),e(await wo()))})})}async function sc(t,e,n){const r=Ci(t,!0).put({[Gd]:e,value:n});return new is(r).toPromise()}async function Av(t,e){const n=Ci(t,!1).get(e),r=await new is(n).toPromise();return r===void 0?null:r.value}function ic(t,e){const n=Ci(t,!0).delete(e);return new is(n).toPromise()}const Sv=800,Cv=3;class Yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Si._getInstance(Ev()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await sc(e,Zs,"1"),await ic(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Av(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ci(s,!1).getAll();return new is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yd.type="LOCAL";const Rv=Yd;new ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e){return e?kt(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pv(t){return jd(t.auth,new Ia(t),t.bypassAuthState)}function kv(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),av(n,new Ia(t),t.bypassAuthState)}async function Dv(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),ov(n,new Ia(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pv;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return kv;default:gt(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new ns(2e3,1e4);class Ln extends Jd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=Ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xv.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="pendingRedirect",Rs=new Map;class Lv extends Jd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const r=await $v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $v(t,e){const n=Fv(e),r=Uv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Mv(t,e){Rs.set(t._key(),e)}function Uv(t){return kt(t._redirectPersistence)}function Fv(t){return Cs(Nv,t.config.apiKey,t.name)}async function Vv(t,e,n=!1){const r=ar(t),s=Ov(r,e),o=await new Lv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=10*60*1e3;class Bv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jv&&this.cachedEventUids.clear(),this.cachedEventUids.has(oc(e))}saveEventToCache(e){this.cachedEventUids.add(oc(e)),this.lastProcessedEventTime=Date.now()}}function oc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Kv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hv(t);for(const n of e)try{if(Gv(n))return}catch{}gt(t,"unauthorized-domain")}function Gv(t){const e=vo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wv.test(n))return!1;if(zv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new ns(3e4,6e4);function ac(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jv(t){return new Promise((e,n)=>{var r,s,i;function o(){ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ac(),n(Tt(t,"network-request-failed"))},timeout:Yv.get()})}if(!((s=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=At().gapi)===null||i===void 0)&&i.load)o();else{const a=q_("iframefcb");return At()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},$d(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Os=null,e})}let Os=null;function Qv(t){return Os=Os||Jv(t),Os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new ns(5e3,15e3),Zv="__/auth/iframe",ew="emulator/auth/iframe",tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rw(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ya(e,ew):`https://${t.config.authDomain}/${Zv}`,r={apiKey:e.apiKey,appName:t.name,v:rr},s=nw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gr(r).slice(1)}`}async function sw(t){const e=await Qv(t),n=At().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:rw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=At().setTimeout(()=>{i(o)},Xv.get());function c(){At().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ow=500,aw=600,lw="_blank",cw="http://localhost";class lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uw(t,e,n,r=ow,s=aw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ze().toLowerCase();n&&(a=Cd(h)?lw:n),Sd(h)&&(e=e||cw,c.scrollbars="yes");const m=Object.entries(c).reduce((S,[k,j])=>`${S}${k}=${j},`,"");if(F_(h)&&a!=="_self")return dw(e||"",a),new lc(null);const b=window.open(e||"",a,m);re(b,t,"popup-blocked");try{b.focus()}catch{}return new lc(b)}function dw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="__/auth/handler",fw="emulator/auth/handler",pw=encodeURIComponent("fac");async function cc(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,b]of Object.entries(i||{}))o[m]=b}if(e instanceof ss){const m=e.getScopes().filter(b=>b!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const c=await t._getAppCheckToken(),h=c?`#${pw}=${encodeURIComponent(c)}`:"";return`${mw(t)}?${Gr(a).slice(1)}${h}`}function mw({config:t}){return t.emulator?ya(t,fw):`https://${t.authDomain}/${hw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class gw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=Vv,this._overrideRedirectResult=Mv}async _openPopup(e,n,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cc(e,n,r,vo(),s);return uw(e,o,Ea())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cc(e,n,r,vo(),s);return vv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sw(e),r=new Bv(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gi,{type:Gi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gi];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dd()||va()||Ai()}}const yw=gw;var uc="@firebase/auth",dc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ww(t){Jn(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(t)},h=new G_(r,s,i,c);return J_(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new bn("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(r=>new _w(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(uc,dc,vw(t)),en(uc,dc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=5*60,Ew=Ou("authIdTokenMaxAge")||bw;let hc=null;const Iw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ew)return;const s=n==null?void 0:n.token;hc!==s&&(hc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vs(t=xu()){const e=zo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Y_(t,{popupRedirectResolver:yw,persistence:[Rv,gv,zd]}),r=Ou("authTokenSyncURL");if(r){const i=Iw(r);hv(n,i,()=>i(n.currentUser)),dv(n,o=>i(o))}const s=Cu("auth");return s&&Q_(n,`http://${s}`),n}ww("Browser");const Tw={apiKey:"AIzaSyAET8eUrZHm1IrHhzl2FaWfW1Jr4Wqo7IA",authDomain:"gold-smith-aljihad.firebaseapp.com",projectId:"gold-smith-aljihad",storageBucket:"gold-smith-aljihad.appspot.com",messagingSenderId:"265121429939",appId:"1:265121429939:web:419003c9403699fd8273c6",measurementId:"G-4B9DDZDD8V"},Aw=Du(Tw),ge=s_(Aw);class Sw{constructor(){this.collectionName=De.INVOICES}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";an.fillUpdatedInfo(e),await Ft(Se(n,e.invoiceNumber),e),await Uw.addOrUpdate({receiptNumber:"PR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalMakingCharge,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),await Fw.addOrUpdate({receiptNumber:"GR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,weight:-1*e.totals.pureWeight,purity:1e3,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),on.log(e,"Invoice","Created"+e.invoiceNumber)}async list(e,n,r){const s=_e(ge,this.collectionName),i=Lt(s,ts("purchaseDate","desc"),Ti(10)),a=(await Ct(i)).docs.map(h=>h.data());if(r){var c=r.toLowerCase().trim();return _.filter(a,function(h){return h.invoiceNumber.toLowerCase().includes(c)||h.customer.toLowerCase().includes(c)})}return a}async listByCustomer(e){if(!e)return[];const n=_e(ge,this.collectionName),r=Lt(n,Ii("customerId","==",e));return(await Ct(r)).docs.map(o=>o.data())}async getById(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data()}}class Cw{constructor(){this.collectionName=De.SETTINGS}async addOrUpdate(e){const n=_e(ge,this.collectionName);an.fillUpdatedInfo(e),await Ft(Se(n,e.identifier),e),on.log(e,"Settings","Changed settings "+e.identifier)}async getById(e){const n=_e(ge,this.collectionName),r=await mt(Se(n,e));return r.exists()?r.data():{identifier:e}}}class Rw{constructor(){this.collectionName=De.USERS}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r="Updated";e.id||(e.id=e.Email,r="Added");const s=e.Password;e.Password=null,an.fillUpdatedInfo(e),await Ft(Se(n,e.Email),e),on.log(e,"User",r+":"+JSON.stringify(e)),r=="Added"&&await os.createUser(e.Email,s)}async getById(e){if(!e)return;const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data()}async list(){const e=_e(ge,this.collectionName);return(await Ct(e)).docs.map(s=>s.data())}}class Ow{constructor(){this.collectionName=De.USER_CUSTOMER_MAPPING}async list(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));return r.exists()?r.data().customers:[]}async addOrUpdate(e,n){const r=_e(ge,this.collectionName);return await Ft(Se(r,e),{customers:n})}}class Pw{constructor(){this.collectionName=De.RATES}async addOrUpdate(e){let n=Yn.getTodayAsString();const r=_e(ge,this.collectionName);var s={rate:e.rate,date:n};an.fillUpdatedInfo(s),await Ft(Se(r,n),s),on.log(s,"Rate","Changed rate to "+s.rate)}async list(){const e=_e(ge,this.collectionName),n=Lt(e,ts("date","desc"),Ti(10));return(await Ct(n)).docs.map(i=>i.data())}async getTodaysRate(){let e=Yn.getTodayAsString();const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data().rate}}class kw{constructor(){this.collectionName=De.CCUSTOMERS}async list(e,n=!1,r=!1){const s=_e(ge,this.collectionName);var i=null;n&&(i=Ii("status","==","Active"));const o=Lt(s,i);var c=(await Ct(o)).docs.map(h=>h.data());if(!r){console.log("Called");const h=await Vw.list(os.getCurrentUser().email);c=_.filter(c,function(m){return h.includes(m.id)})}if(e){const h=e.toLowerCase();c=_.filter(c,function(m){return m.Name.toLowerCase().includes(h)||m.Contact&&m.Contact.toString().toLowerCase().includes(h)})}return c=_.sortBy(c,function(h){return h.Name}),c}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r="Updated";e.id||(e.id=Se(n).id,r="Added"),an.fillUpdatedInfo(e),await Ft(Se(n,e.id),e),on.log(e,"Customer",r+":"+JSON.stringify(e))}async getById(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,n,r){const s=Se(_e(ge,this.collectionName),e);try{await v_(ge,async i=>{const o=await i.get(s);if(!o.exists())throw"Document does not exist!";const a=r+"Debit",c=r+"Credit",h=o.data();n<0?h[a]?h[a]+=n*-1:h[a]=n*-1:h[c]?h[c]+=n:h[c]=n,i.update(s,h)}),console.log("Transaction successfully committed!")}catch(i){console.log("Transaction failed: ",i)}}}class Dw{constructor(){this.collectionName=De.PRODUCTS}async list(e){const n=_e(ge,this.collectionName),r=Lt(n,ts("Name"));var i=(await Ct(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r="Updated";e.id||(e.id=Se(n).id,r="Added"),an.fillUpdatedInfo(e),await Ft(Se(n,e.id),e),on.log(e,"Product",r+":"+JSON.stringify(e))}}class xw{constructor(){this.collectionName=De.CASH_PAYMENTS}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e.receiptNumber));if(r.exists())throw"Cash payment cannot be updated";an.fillUpdatedInfo(e),await Ft(Se(n,e.receiptNumber),e),await Xd.runDebitCreditTransaction(e.customerId,e.amount,"Cash"),on.log(e,"CashPayment","Added :"+e.receiptNumber)}async list(e,n){const r=_e(ge,this.collectionName),s=Lt(r,ts("paymentDate","desc"),Ti(10));return(await Ct(s)).docs.map(a=>a.data())}async listByCustomer(e){if(!e)return[];const n=_e(ge,this.collectionName),r=Lt(n,Ii("customerId","==",e));return(await Ct(r)).docs.map(o=>o.data())}async getById(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data()}}class Nw{constructor(){this.collectionName=De.GOLD_PAYMENTS}async addOrUpdate(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e.receiptNumber));if(r.exists())throw"Gold Payment cannot be updated";an.fillUpdatedInfo(e),await Ft(Se(n,e.receiptNumber),e),await Xd.runDebitCreditTransaction(e.customerId,e.weight*(e.purity/1e3),"Gold"),on.log(e,"GoldPayment","Added :"+e.receiptNumber)}async list(e,n){const r=_e(ge,this.collectionName),s=Lt(r,ts("paymentDate","desc"),Ti(10));return(await Ct(s)).docs.map(a=>a.data())}async listByCustomer(e){if(!e)return[];const n=_e(ge,this.collectionName),r=Lt(n,Ii("customerId","==",e));return(await Ct(r)).docs.map(o=>o.data())}async getById(e){const n=_e(ge,this.collectionName);var r=await mt(Se(n,e));if(r.exists())return r.data()}}class Lw{async tryLogin(e,n){const r=vs();return await uv(r,e,n)}getCurrentUser(){return vs().currentUser}async createUser(e,n){return await cv(vs(),e,n)}async signOut(){this.getCurrentUser()&&await vs().signOut()}}class $w{constructor(){this.collectionName=De.AUDIT}async log(e,n,r){_e(ge,this.collectionName)}}class Mw{fillUpdatedInfo(e){const n=os.getCurrentUser();e.updatedByDisplayName=n.displayName??n.email,e.updatedBy=n.uid,e.updatedOn=Yn.getNowAsMilliSeconds()}}const Ob=new Sw,Pb=new Rw,kb=new Pw,Xd=new kw,Db=new Dw,xb=new Cw,Uw=new xw,Fw=new Nw,os=new Lw,on=new $w,an=new Mw,Vw=new Ow,jw=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bw={data:function(){return{hasAdminPrivillage:!1}},mounted:function(){this.hasAdminPrivillage=os.getCurrentUser().email==this.$adminMailId}},qw={class:"navbar navbar-expand-lg navbar-light bg-light"},Hw={class:"container-fluid"},zw=de("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[de("span",{class:"navbar-toggler-icon"})],-1),Ww={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},Kw={class:"navbar-nav me-auto mb-2 mb-lg-0"},Gw={class:"nav-item"},Yw={class:"nav-item"},Jw={class:"nav-item"},Qw={class:"nav-item"},Xw={class:"nav-item"},Zw={key:0,class:"nav-item"},eb={class:"nav-item"},tb={class:"nav-item"},nb={class:"navbar-nav me-auto mb-2 mb-lg-0"},rb={class:"nav-item dropdown"},sb=de("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),ib={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},ob={key:0},ab=de("li",null,[de("hr",{class:"dropdown-divider"})],-1),lb={class:"d-flex"},cb={class:"navbar-nav me-auto mb-2 mb-lg-0"},ub={class:"nav-item dropdown btn btn-outline-success"},db=de("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),hb={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function fb(t,e,n,r,s,i){const o=Tf("RouterLink");return _n(),ki(ot,null,[de("nav",qw,[de("div",Hw,[we(o,{class:"navbar-brand",to:"/"},{default:Ke(()=>[de("h3",null,pc(this.$appShortName),1)]),_:1}),zw,de("div",Ww,[de("ul",Kw,[de("li",Gw,[we(o,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Invoices")]),_:1})]),de("li",Yw,[we(o,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Customers")]),_:1})]),de("li",Jw,[we(o,{to:"/products",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Products")]),_:1})]),de("li",Qw,[we(o,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Cash Transactions")]),_:1})]),de("li",Xw,[we(o,{to:"/goldtransactions",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Gold Transactions")]),_:1})]),t.hasAdminPrivillage?(_n(),ki("li",Zw,[we(o,{to:"/users",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Users")]),_:1})])):Wa("",!0),de("li",eb,[we(o,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Metal Rate")]),_:1})]),de("li",tb,[de("ul",nb,[de("li",rb,[sb,de("ul",ib,[t.hasAdminPrivillage?(_n(),ki("li",ob,[we(o,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:Ke(()=>[tt(" General Settings")]),_:1})])):Wa("",!0),ab,de("li",null,[we(o,{to:"/logout",class:"nav-link active","aria-current":"page"},{default:Ke(()=>[tt("Logout ")]),_:1})])])])])])]),de("form",lb,[de("ul",cb,[de("li",ub,[db,de("ul",hb,[de("li",null,[we(o,{to:"/invoice",class:"dropdown-item"},{default:Ke(()=>[tt(" Invoice")]),_:1})]),de("li",null,[we(o,{to:"/payment",class:"dropdown-item"},{default:Ke(()=>[tt(" Cash Payment")]),_:1})]),de("li",null,[we(o,{to:"/goldtransaction",class:"dropdown-item"},{default:Ke(()=>[tt(" Gold Payment")]),_:1})])])])])])])])]),Cf(t.$slots,"default")],64)}const pb=jw(Bw,[["render",fb]]),mb={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},gb={class:"display-4 fw-normal"},yb=de("p",{class:"fs-5 text-body-secondary"},null,-1),_b={mounted:function(){}},vb=Object.assign(_b,{__name:"HomeView",setup(t){return(e,n)=>(_n(),ci(pb,null,{default:Ke(()=>[de("div",mb,[de("h2",gb,"Welcome to "+pc(e.$appname),1),yb])]),_:1}))}}),Zd=Rm({history:zp("/aljihad/"),routes:[{path:"/",name:"home",component:vb},{path:"/invoice",name:"invoice",component:()=>Me(()=>import("./Invoice-b95a2f0b.js"),["assets/Invoice-b95a2f0b.js","assets/InvoiceItemTable-72aaf19d.js","assets/CAlert-42342ca2.js","assets/CustomerPicker-9b08489f.js"])},{path:"/invoices/:invoicenumber",name:"invoicereport",component:()=>Me(()=>import("./InvoiceReport-0a730a5b.js"),["assets/InvoiceReport-0a730a5b.js","assets/InvoiceItemTable-72aaf19d.js","assets/CAlert-42342ca2.js"])},{path:"/login",name:"login",component:()=>Me(()=>import("./Login-d0dfc878.js"),["assets/Login-d0dfc878.js","assets/CAlert-42342ca2.js"])},{path:"/logout",name:"logout",component:()=>Me(()=>import("./Logout-4b2b39e7.js"),["assets/Logout-4b2b39e7.js","assets/CAlert-42342ca2.js"])},{path:"/customers",name:"customers",component:()=>Me(()=>import("./Customers-28b0edb7.js"),["assets/Customers-28b0edb7.js","assets/DynamicTable-9e157228.js","assets/DynamicDialog-9f295a1f.js","assets/CAlert-42342ca2.js"])},{path:"/customers/:customerid",name:"customerdetails",component:()=>Me(()=>import("./CustomerDetails-661f13db.js"),["assets/CustomerDetails-661f13db.js","assets/CAlert-42342ca2.js","assets/TwoColumnTable-0726e1a6.js","assets/DynamicTable-9e157228.js"])},{path:"/users",name:"users",component:()=>Me(()=>import("./Users-a1a82337.js"),["assets/Users-a1a82337.js","assets/DynamicTable-9e157228.js","assets/DynamicDialog-9f295a1f.js","assets/CAlert-42342ca2.js"])},{path:"/invoices",name:"invoices",component:()=>Me(()=>import("./Invoices-d74e2881.js"),["assets/Invoices-d74e2881.js","assets/CAlert-42342ca2.js","assets/DynamicTable-9e157228.js"])},{path:"/rates",name:"rates",component:()=>Me(()=>import("./Rates-72c78e14.js"),["assets/Rates-72c78e14.js","assets/DynamicTable-9e157228.js","assets/CAlert-42342ca2.js"])},{path:"/products",name:"products",component:()=>Me(()=>import("./Products-b06ba283.js"),["assets/Products-b06ba283.js","assets/DynamicTable-9e157228.js","assets/DynamicDialog-9f295a1f.js","assets/CAlert-42342ca2.js"])},{path:"/settings/application",name:"applicationsettings",component:()=>Me(()=>import("./Applicationsettings-de5eac02.js"),["assets/Applicationsettings-de5eac02.js","assets/CAlert-42342ca2.js","assets/TwoColumnTable-0726e1a6.js"])},{path:"/settings/product",name:"productSettings",component:()=>Me(()=>import("./ProductSettings-d8ddfd3f.js"),["assets/ProductSettings-d8ddfd3f.js","assets/DynamicTable-9e157228.js","assets/DynamicDialog-9f295a1f.js","assets/CAlert-42342ca2.js"])},{path:"/settings/customer",name:"customerSettings",component:()=>Me(()=>import("./CustomerSettings-0ef3a32c.js"),["assets/CustomerSettings-0ef3a32c.js","assets/DynamicTable-9e157228.js","assets/DynamicDialog-9f295a1f.js","assets/CAlert-42342ca2.js"])},{path:"/payments",name:"payments",component:()=>Me(()=>import("./Payments-9f959d01.js"),["assets/Payments-9f959d01.js","assets/DynamicTable-9e157228.js","assets/CAlert-42342ca2.js"])},{path:"/payment",name:"payment",component:()=>Me(()=>import("./Payment-15527c38.js"),["assets/Payment-15527c38.js","assets/CustomerPicker-9b08489f.js","assets/CAlert-42342ca2.js"])},{path:"/payments/:receiptNumber",name:"paymentReport",component:()=>Me(()=>import("./PaymentReport-a94fc8b1.js"),["assets/PaymentReport-a94fc8b1.js","assets/CAlert-42342ca2.js"])},{path:"/goldtransactions",name:"goldtransactions",component:()=>Me(()=>import("./GoldTransactions-e4016f3b.js"),["assets/GoldTransactions-e4016f3b.js","assets/DynamicTable-9e157228.js","assets/CAlert-42342ca2.js"])},{path:"/goldtransaction",name:"goldtransaction",component:()=>Me(()=>import("./GoldTransaction-20576cff.js"),["assets/GoldTransaction-20576cff.js","assets/CustomerPicker-9b08489f.js","assets/CAlert-42342ca2.js"])}]}),ln=Sp(Pm);ln.use(Zd);ln.mount("#app");ln.config.globalProperties.$appname="AL JIHAD JEWELLERY MAKERS";ln.config.globalProperties.$appShortName="AL JIHAD";ln.config.globalProperties.$basedomainname="/aljihad/";ln.config.globalProperties.$statusLabelMapper={enabled:"Active",disabled:"Inactive"};ln.config.globalProperties.$alertShowDuration=3e3;ln.config.globalProperties.$adminMailId="admin@goldsmith.com";Zd.beforeEach((t,e,n)=>{if(t.path.startsWith("/payments/")||t.path.startsWith("/invoices/")||t.path.startsWith("/login")||t.path.startsWith("/goldtransaction/")){n();return}os.getCurrentUser()?n():n({path:"/login",query:{nextUrl:t.path}})});export{Yl as A,Io as B,Yn as C,ys as D,Vw as E,ot as F,Ab as G,Pb as H,Rb as I,Ib as J,Hi as S,jw as _,Wa as a,de as b,ki as c,Tf as d,Cb as e,we as f,Tb as g,ci as h,Ke as i,pb as j,kb as k,Ob as l,tt as m,Xd as n,_n as o,Db as p,Cf as q,Eb as r,xb as s,pc as t,yn as u,Sb as v,bb as w,os as x,Uw as y,Fw as z};
