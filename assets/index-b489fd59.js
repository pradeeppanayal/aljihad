var zd=Object.defineProperty;var Wd=(t,e,n)=>e in t?zd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ke=(t,e,n)=>(Wd(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */(function(t){typeof define=="function"&&define.amd?define(["jquery"],t):typeof module=="object"&&module.exports?module.exports=function(e,n){return n===void 0&&(n=typeof window<"u"?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)})(function(t){var e,n,K,r,s,i,o,l,c,h,m,b,A,k,V,K=((z=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:z)&&z.requirejs||(z?n=z:z={},c={},h={},m={},b={},A=Object.prototype.hasOwnProperty,k=[].slice,V=/\.js$/,o=function(v,f){var g,d,u=le(v),a=u[0],f=f[1];return v=u[1],a&&(g=J(a=G(a,f))),a?v=g&&g.normalize?g.normalize(v,(d=f,function(p){return G(p,d)})):G(v,f):(a=(u=le(v=G(v,f)))[0],v=u[1],a&&(g=J(a))),{f:a?a+"!"+v:v,n:v,pr:a,p:g}},l={require:function(v){return ee(v)},exports:function(v){var w=c[v];return w!==void 0?w:c[v]={}},module:function(v){return{id:v,uri:"",exports:c[v],config:(w=v,function(){return m&&m.config&&m.config[w]||{}})};var w}},s=function(v,w,g,d){var u,a,f,p,T,E=[],C=typeof g,M=Te(d=d||v);if(C=="undefined"||C=="function"){for(w=!w.length&&g.length?["require","exports","module"]:w,p=0;p<w.length;p+=1)if((a=(f=o(w[p],M)).f)==="require")E[p]=l.require(v);else if(a==="exports")E[p]=l.exports(v),T=!0;else if(a==="module")u=E[p]=l.module(v);else if(X(c,a)||X(h,a)||X(b,a))E[p]=J(a);else{if(!f.p)throw new Error(v+" missing "+a);f.p.load(f.n,ee(d,!0),function(L){return function(oe){c[L]=oe}}(a),{}),E[p]=c[a]}C=g?g.apply(c[v],E):void 0,v&&(u&&u.exports!==r&&u.exports!==c[v]?c[v]=u.exports:C===r&&T||(c[v]=C))}else v&&(c[v]=g)},e=n=i=function(v,w,g,d,u){if(typeof v=="string")return l[v]?l[v](w):J(o(v,Te(w)).f);if(!v.splice){if((m=v).deps&&i(m.deps,m.callback),!w)return;w.splice?(v=w,w=g,g=null):v=r}return w=w||function(){},typeof g=="function"&&(g=d,d=u),d?s(r,v,w,g):setTimeout(function(){s(r,v,w,g)},4),i},i.config=function(v){return i(v)},e._defined=c,(K=function(v,w,g){if(typeof v!="string")throw new Error("See almond README: incorrect module build, no module name");w.splice||(g=w,w=[]),X(c,v)||X(h,v)||(h[v]=[v,w,g])}).amd={jQuery:!0},z.requirejs=e,z.require=n,z.define=K),z.define("almond",function(){}),z.define("jquery",[],function(){var v=t||$;return v==null&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),v}),z.define("select2/utils",["jquery"],function(v){var w={};function g(a){var f,p=a.prototype,T=[];for(f in p)typeof p[f]=="function"&&f!=="constructor"&&T.push(f);return T}w.Extend=function(a,f){var p,T={}.hasOwnProperty;function E(){this.constructor=a}for(p in f)T.call(f,p)&&(a[p]=f[p]);return E.prototype=f.prototype,a.prototype=new E,a.__super__=f.prototype,a},w.Decorate=function(a,f){var p=g(f),T=g(a);function E(){var pe=Array.prototype.unshift,Se=f.prototype.constructor.length,Xe=a.prototype.constructor;0<Se&&(pe.call(arguments,a.prototype.constructor),Xe=f.prototype.constructor),Xe.apply(this,arguments)}f.displayName=a.displayName,E.prototype=new function(){this.constructor=E};for(var C=0;C<T.length;C++){var M=T[C];E.prototype[M]=a.prototype[M]}for(var L=0;L<p.length;L++){var oe=p[L];E.prototype[oe]=function(pe){var Se=function(){};pe in E.prototype&&(Se=E.prototype[pe]);var Xe=f.prototype[pe];return function(){return Array.prototype.unshift.call(arguments,Se),Xe.apply(this,arguments)}}(oe)}return E};function d(){this.listeners={}}d.prototype.on=function(a,f){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(f):this.listeners[a]=[f]},d.prototype.trigger=function(a){var f=Array.prototype.slice,p=f.call(arguments,1);this.listeners=this.listeners||{},(p=p??[]).length===0&&p.push({}),(p[0]._type=a)in this.listeners&&this.invoke(this.listeners[a],f.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,f){for(var p=0,T=a.length;p<T;p++)a[p].apply(this,f)},w.Observable=d,w.generateChars=function(a){for(var f="",p=0;p<a;p++)f+=Math.floor(36*Math.random()).toString(36);return f},w.bind=function(a,f){return function(){a.apply(f,arguments)}},w._convertData=function(a){for(var f in a){var p=f.split("-"),T=a;if(p.length!==1){for(var E=0;E<p.length;E++){var C=p[E];(C=C.substring(0,1).toLowerCase()+C.substring(1))in T||(T[C]={}),E==p.length-1&&(T[C]=a[f]),T=T[C]}delete a[f]}}return a},w.hasScroll=function(a,f){var p=v(f),T=f.style.overflowX,E=f.style.overflowY;return(T!==E||E!=="hidden"&&E!=="visible")&&(T==="scroll"||E==="scroll"||p.innerHeight()<f.scrollHeight||p.innerWidth()<f.scrollWidth)},w.escapeMarkup=function(a){var f={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return typeof a!="string"?a:String(a).replace(/[&<>"'\/\\]/g,function(p){return f[p]})},w.__cache={};var u=0;return w.GetUniqueElementId=function(a){var f=a.getAttribute("data-select2-id");return f!=null||(f=a.id?"select2-data-"+a.id:"select2-data-"+(++u).toString()+"-"+w.generateChars(4),a.setAttribute("data-select2-id",f)),f},w.StoreData=function(a,f,p){a=w.GetUniqueElementId(a),w.__cache[a]||(w.__cache[a]={}),w.__cache[a][f]=p},w.GetData=function(a,f){var p=w.GetUniqueElementId(a);return f?w.__cache[p]&&w.__cache[p][f]!=null?w.__cache[p][f]:v(a).data(f):w.__cache[p]},w.RemoveData=function(a){var f=w.GetUniqueElementId(a);w.__cache[f]!=null&&delete w.__cache[f],a.removeAttribute("data-select2-id")},w.copyNonInternalCssClasses=function(a,T){var p=(p=a.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")===0}),T=(T=T.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")!==0}),T=p.concat(T);a.setAttribute("class",T.join(" "))},w}),z.define("select2/results",["jquery","./utils"],function(v,w){function g(d,u,a){this.$element=d,this.data=a,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&d.attr("aria-multiselectable","true"),this.$results=d},g.prototype.clear=function(){this.$results.empty()},g.prototype.displayMessage=function(d){var u=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var a=v('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),f=this.options.get("translations").get(d.message);a.append(u(f(d.args))),a[0].className+=" select2-results__message",this.$results.append(a)},g.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},g.prototype.append=function(d){this.hideLoading();var u=[];if(d.results!=null&&d.results.length!==0){d.results=this.sort(d.results);for(var a=0;a<d.results.length;a++){var f=d.results[a],f=this.option(f);u.push(f)}this.$results.append(u)}else this.$results.children().length===0&&this.trigger("results:message",{message:"noResults"})},g.prototype.position=function(d,u){u.find(".select2-results").append(d)},g.prototype.sort=function(d){return this.options.get("sorter")(d)},g.prototype.highlightFirstItem=function(){var d=this.$results.find(".select2-results__option--selectable"),u=d.filter(".select2-results__option--selected");(0<u.length?u:d).first().trigger("mouseenter"),this.ensureHighlightVisible()},g.prototype.setClasses=function(){var d=this;this.data.current(function(u){var a=u.map(function(f){return f.id.toString()});d.$results.find(".select2-results__option--selectable").each(function(){var f=v(this),p=w.GetData(this,"data"),T=""+p.id;p.element!=null&&p.element.selected||p.element==null&&-1<a.indexOf(T)?(this.classList.add("select2-results__option--selected"),f.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),f.attr("aria-selected","false"))})})},g.prototype.showLoading=function(d){this.hideLoading(),d={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(d)},d=this.option(d),d.className+=" loading-results",this.$results.prepend(d)},g.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},g.prototype.option=function(d){var u=document.createElement("li");u.classList.add("select2-results__option"),u.classList.add("select2-results__option--selectable");var a,f={role:"option"},p=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(a in(d.element!=null&&p.call(d.element,":disabled")||d.element==null&&d.disabled)&&(f["aria-disabled"]="true",u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--disabled")),d.id==null&&u.classList.remove("select2-results__option--selectable"),d._resultId!=null&&(u.id=d._resultId),d.title&&(u.title=d.title),d.children&&(f.role="group",f["aria-label"]=d.text,u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--group")),f){var T=f[a];u.setAttribute(a,T)}if(d.children){var E=v(u),C=document.createElement("strong");C.className="select2-results__group",this.template(d,C);for(var M=[],L=0;L<d.children.length;L++){var oe=d.children[L],oe=this.option(oe);M.push(oe)}p=v("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"}),p.append(M),E.append(C),E.append(p)}else this.template(d,u);return w.StoreData(u,"data",d),u},g.prototype.bind=function(d,u){var a=this,f=d.id+"-results";this.$results.attr("id",f),d.on("results:all",function(p){a.clear(),a.append(p.data),d.isOpen()&&(a.setClasses(),a.highlightFirstItem())}),d.on("results:append",function(p){a.append(p.data),d.isOpen()&&a.setClasses()}),d.on("query",function(p){a.hideMessages(),a.showLoading(p)}),d.on("select",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("unselect",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("open",function(){a.$results.attr("aria-expanded","true"),a.$results.attr("aria-hidden","false"),a.setClasses(),a.ensureHighlightVisible()}),d.on("close",function(){a.$results.attr("aria-expanded","false"),a.$results.attr("aria-hidden","true"),a.$results.removeAttr("aria-activedescendant")}),d.on("results:toggle",function(){var p=a.getHighlightedResults();p.length!==0&&p.trigger("mouseup")}),d.on("results:select",function(){var p,T=a.getHighlightedResults();T.length!==0&&(p=w.GetData(T[0],"data"),T.hasClass("select2-results__option--selected")?a.trigger("close",{}):a.trigger("select",{data:p}))}),d.on("results:previous",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T);C<=0||(p=C-1,T.length===0&&(p=0),(C=E.eq(p)).trigger("mouseenter"),T=a.$results.offset().top,E=C.offset().top,C=a.$results.scrollTop()+(E-T),p===0?a.$results.scrollTop(0):E-T<0&&a.$results.scrollTop(C))}),d.on("results:next",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T)+1;C>=E.length||((p=E.eq(C)).trigger("mouseenter"),T=a.$results.offset().top+a.$results.outerHeight(!1),E=p.offset().top+p.outerHeight(!1),p=a.$results.scrollTop()+E-T,C===0?a.$results.scrollTop(0):T<E&&a.$results.scrollTop(p))}),d.on("results:focus",function(p){p.element[0].classList.add("select2-results__option--highlighted"),p.element[0].setAttribute("aria-selected","true")}),d.on("results:message",function(p){a.displayMessage(p)}),v.fn.mousewheel&&this.$results.on("mousewheel",function(p){var T=a.$results.scrollTop(),E=a.$results.get(0).scrollHeight-T+p.deltaY,T=0<p.deltaY&&T-p.deltaY<=0,E=p.deltaY<0&&E<=a.$results.height();T?(a.$results.scrollTop(0),p.preventDefault(),p.stopPropagation()):E&&(a.$results.scrollTop(a.$results.get(0).scrollHeight-a.$results.height()),p.preventDefault(),p.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(p){var T=v(this),E=w.GetData(this,"data");T.hasClass("select2-results__option--selected")?a.options.get("multiple")?a.trigger("unselect",{originalEvent:p,data:E}):a.trigger("close",{}):a.trigger("select",{originalEvent:p,data:E})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(p){var T=w.GetData(this,"data");a.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),a.trigger("results:focus",{data:T,element:v(this)})})},g.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},g.prototype.destroy=function(){this.$results.remove()},g.prototype.ensureHighlightVisible=function(){var d,u,a,f,p=this.getHighlightedResults();p.length!==0&&(d=this.$results.find(".select2-results__option--selectable").index(p),f=this.$results.offset().top,u=p.offset().top,a=this.$results.scrollTop()+(u-f),f=u-f,a-=2*p.outerHeight(!1),d<=2?this.$results.scrollTop(0):(f>this.$results.outerHeight()||f<0)&&this.$results.scrollTop(a))},g.prototype.template=function(p,u){var a=this.options.get("templateResult"),f=this.options.get("escapeMarkup"),p=a(p,u);p==null?u.style.display="none":typeof p=="string"?u.innerHTML=f(p):v(u).append(p)},g}),z.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),z.define("select2/selection/base",["jquery","../utils","../keys"],function(v,w,g){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,w.Observable),d.prototype.render=function(){var u=v('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,w.GetData(this.$element[0],"old-tabindex")!=null?this._tabindex=w.GetData(this.$element[0],"old-tabindex"):this.$element.attr("tabindex")!=null&&(this._tabindex=this.$element.attr("tabindex")),u.attr("title",this.$element.attr("title")),u.attr("tabindex",this._tabindex),u.attr("aria-disabled","false"),this.$selection=u},d.prototype.bind=function(u,a){var f=this,p=u.id+"-results";this.container=u,this.$selection.on("focus",function(T){f.trigger("focus",T)}),this.$selection.on("blur",function(T){f._handleBlur(T)}),this.$selection.on("keydown",function(T){f.trigger("keypress",T),T.which===g.SPACE&&T.preventDefault()}),u.on("results:focus",function(T){f.$selection.attr("aria-activedescendant",T.data._resultId)}),u.on("selection:update",function(T){f.update(T.data)}),u.on("open",function(){f.$selection.attr("aria-expanded","true"),f.$selection.attr("aria-owns",p),f._attachCloseHandler(u)}),u.on("close",function(){f.$selection.attr("aria-expanded","false"),f.$selection.removeAttr("aria-activedescendant"),f.$selection.removeAttr("aria-owns"),f.$selection.trigger("focus"),f._detachCloseHandler(u)}),u.on("enable",function(){f.$selection.attr("tabindex",f._tabindex),f.$selection.attr("aria-disabled","false")}),u.on("disable",function(){f.$selection.attr("tabindex","-1"),f.$selection.attr("aria-disabled","true")})},d.prototype._handleBlur=function(u){var a=this;window.setTimeout(function(){document.activeElement==a.$selection[0]||v.contains(a.$selection[0],document.activeElement)||a.trigger("blur",u)},1)},d.prototype._attachCloseHandler=function(u){v(document.body).on("mousedown.select2."+u.id,function(a){var f=v(a.target).closest(".select2");v(".select2.select2-container--open").each(function(){this!=f[0]&&w.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(u){v(document.body).off("mousedown.select2."+u.id)},d.prototype.position=function(u,a){a.find(".selection").append(u)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(u){throw new Error("The `update` method must be defined in child classes.")},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d}),z.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(v,w,g,d){function u(){u.__super__.constructor.apply(this,arguments)}return g.Extend(u,w),u.prototype.render=function(){var a=u.__super__.render.call(this);return a[0].classList.add("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},u.prototype.bind=function(a,f){var p=this;u.__super__.bind.apply(this,arguments);var T=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",T).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",T),this.$selection.attr("aria-controls",T),this.$selection.on("mousedown",function(E){E.which===1&&p.trigger("toggle",{originalEvent:E})}),this.$selection.on("focus",function(E){}),this.$selection.on("blur",function(E){}),a.on("focus",function(E){a.isOpen()||p.$selection.trigger("focus")})},u.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},u.prototype.display=function(a,f){var p=this.options.get("templateSelection");return this.options.get("escapeMarkup")(p(a,f))},u.prototype.selectionContainer=function(){return v("<span></span>")},u.prototype.update=function(a){var f,p;a.length!==0?(p=a[0],f=this.$selection.find(".select2-selection__rendered"),a=this.display(p,f),f.empty().append(a),(p=p.title||p.text)?f.attr("title",p):f.removeAttr("title")):this.clear()},u}),z.define("select2/selection/multiple",["jquery","./base","../utils"],function(v,w,g){function d(u,a){d.__super__.constructor.apply(this,arguments)}return g.Extend(d,w),d.prototype.render=function(){var u=d.__super__.render.call(this);return u[0].classList.add("select2-selection--multiple"),u.html('<ul class="select2-selection__rendered"></ul>'),u},d.prototype.bind=function(u,a){var f=this;d.__super__.bind.apply(this,arguments);var p=u.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",p),this.$selection.on("click",function(T){f.trigger("toggle",{originalEvent:T})}),this.$selection.on("click",".select2-selection__choice__remove",function(T){var E;f.isDisabled()||(E=v(this).parent(),E=g.GetData(E[0],"data"),f.trigger("unselect",{originalEvent:T,data:E}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(T){f.isDisabled()||T.stopPropagation()})},d.prototype.clear=function(){var u=this.$selection.find(".select2-selection__rendered");u.empty(),u.removeAttr("title")},d.prototype.display=function(u,a){var f=this.options.get("templateSelection");return this.options.get("escapeMarkup")(f(u,a))},d.prototype.selectionContainer=function(){return v('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},d.prototype.update=function(u){if(this.clear(),u.length!==0){for(var a=[],f=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",p=0;p<u.length;p++){var T=u[p],E=this.selectionContainer(),C=this.display(T,E),M=f+g.generateChars(4)+"-";T.id?M+=T.id:M+=g.generateChars(4),E.find(".select2-selection__choice__display").append(C).attr("id",M);var L=T.title||T.text;L&&E.attr("title",L),C=this.options.get("translations").get("removeItem"),L=E.find(".select2-selection__choice__remove"),L.attr("title",C()),L.attr("aria-label",C()),L.attr("aria-describedby",M),g.StoreData(E[0],"data",T),a.push(E)}this.$selection.find(".select2-selection__rendered").append(a)}},d}),z.define("select2/selection/placeholder",[],function(){function v(w,g,d){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d)}return v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.createPlaceholder=function(w,g){var d=this.selectionContainer();return d.html(this.display(g)),d[0].classList.add("select2-selection__placeholder"),d[0].classList.remove("select2-selection__choice"),g=g.title||g.text||d.text(),this.$selection.find(".select2-selection__rendered").attr("title",g),d},v.prototype.update=function(w,g){var d=g.length==1&&g[0].id!=this.placeholder.id;if(1<g.length||d)return w.call(this,g);this.clear(),g=this.createPlaceholder(this.placeholder),this.$selection.find(".select2-selection__rendered").append(g)},v}),z.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(v,w,g){function d(){}return d.prototype.bind=function(u,a,f){var p=this;u.call(this,a,f),this.placeholder==null&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(T){p._handleClear(T)}),a.on("keypress",function(T){p._handleKeyboardClear(T,a)})},d.prototype._handleClear=function(u,a){if(!this.isDisabled()){var f=this.$selection.find(".select2-selection__clear");if(f.length!==0){a.stopPropagation();var p=g.GetData(f[0],"data"),T=this.$element.val();this.$element.val(this.placeholder.id);var E={data:p};if(this.trigger("clear",E),E.prevented)this.$element.val(T);else{for(var C=0;C<p.length;C++)if(E={data:p[C]},this.trigger("unselect",E),E.prevented)return void this.$element.val(T);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},d.prototype._handleKeyboardClear=function(u,a,f){f.isOpen()||a.which!=w.DELETE&&a.which!=w.BACKSPACE||this._handleClear(a)},d.prototype.update=function(u,a){var f,p;u.call(this,a),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||a.length===0||(f=this.$selection.find(".select2-selection__rendered").attr("id"),p=this.options.get("translations").get("removeAllItems"),(u=v('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",p()),u.attr("aria-label",p()),u.attr("aria-describedby",f),g.StoreData(u[0],"data",a),this.$selection.prepend(u),this.$selection[0].classList.add("select2-selection--clearable"))},d}),z.define("select2/selection/search",["jquery","../utils","../keys"],function(v,w,g){function d(u,a,f){u.call(this,a,f)}return d.prototype.render=function(u){var a=this.options.get("translations").get("search"),f=v('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');return this.$searchContainer=f,this.$search=f.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",a()),u=u.call(this),this._transferTabIndex(),u.append(this.$searchContainer),u},d.prototype.bind=function(u,C,f){var p=this,T=C.id+"-results",E=C.id+"-container";u.call(this,C,f),p.$search.attr("aria-describedby",E),C.on("open",function(){p.$search.attr("aria-controls",T),p.$search.trigger("focus")}),C.on("close",function(){p.$search.val(""),p.resizeSearch(),p.$search.removeAttr("aria-controls"),p.$search.removeAttr("aria-activedescendant"),p.$search.trigger("focus")}),C.on("enable",function(){p.$search.prop("disabled",!1),p._transferTabIndex()}),C.on("disable",function(){p.$search.prop("disabled",!0)}),C.on("focus",function(L){p.$search.trigger("focus")}),C.on("results:focus",function(L){L.data._resultId?p.$search.attr("aria-activedescendant",L.data._resultId):p.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(L){p.trigger("focus",L)}),this.$selection.on("focusout",".select2-search--inline",function(L){p._handleBlur(L)}),this.$selection.on("keydown",".select2-search--inline",function(L){var oe;L.stopPropagation(),p.trigger("keypress",L),p._keyUpPrevented=L.isDefaultPrevented(),L.which!==g.BACKSPACE||p.$search.val()!==""||0<(oe=p.$selection.find(".select2-selection__choice").last()).length&&(oe=w.GetData(oe[0],"data"),p.searchRemoveChoice(oe),L.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(L){p.$search.val()&&L.stopPropagation()});var C=document.documentMode,M=C&&C<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(L){M?p.$selection.off("input.search input.searchcheck"):p.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(L){var oe;M&&L.type==="input"?p.$selection.off("input.search input.searchcheck"):(oe=L.which)!=g.SHIFT&&oe!=g.CTRL&&oe!=g.ALT&&oe!=g.TAB&&p.handleSearch(L)})},d.prototype._transferTabIndex=function(u){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(u,a){this.$search.attr("placeholder",a.text)},d.prototype.update=function(u,a){var f=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),u.call(this,a),this.resizeSearch(),f&&this.$search.trigger("focus")},d.prototype.handleSearch=function(){var u;this.resizeSearch(),this._keyUpPrevented||(u=this.$search.val(),this.trigger("query",{term:u})),this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(u,a){this.trigger("unselect",{data:a}),this.$search.val(a.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var u="100%";this.$search.attr("placeholder")===""&&(u=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",u)},d}),z.define("select2/selection/selectionCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("selectionCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/selection/eventRelay",["jquery"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var a=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],p=["opening","closing","selecting","unselecting","clearing"];g.call(this,d,u),d.on("*",function(T,E){var C;f.indexOf(T)!==-1&&(E=E||{},C=v.Event("select2:"+T,{params:E}),a.$element.trigger(C),p.indexOf(T)!==-1&&(E.prevented=C.isDefaultPrevented()))})},w}),z.define("select2/translation",["jquery","require"],function(v,w){function g(d){this.dict=d||{}}return g.prototype.all=function(){return this.dict},g.prototype.get=function(d){return this.dict[d]},g.prototype.extend=function(d){this.dict=v.extend({},d.all(),this.dict)},g._cache={},g.loadPath=function(d){var u;return d in g._cache||(u=w(d),g._cache[d]=u),new g(g._cache[d])},g}),z.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B","Ƀ":"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D","Ꝺ":"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F","Ꝼ":"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J","Ɉ":"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M","Ɱ":"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N","Ƞ":"N",Ɲ:"N","Ꞑ":"N","Ꞥ":"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O","Ꝋ":"O","Ꝍ":"O",Œ:"OE",Ƣ:"OI","Ꝏ":"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q",Ｑ:"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S",Ｓ:"S","ẞ":"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U","Ʉ":"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W","Ⱳ":"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a","ⱥ":"a",ɐ:"a","ꜳ":"aa",æ:"ae",ǽ:"ae",ǣ:"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d","ꝺ":"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e","ɇ":"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f","ꝼ":"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h","ⱨ":"h","ⱶ":"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j","ɉ":"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n","ꞑ":"n","ꞥ":"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o","ꝋ":"o","ꝍ":"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou","ꝏ":"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q",ｑ:"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r","ɍ":"r",ɽ:"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s","ȿ":"s","ꞩ":"s","ꞅ":"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v","ꝟ":"v",ʌ:"v","ꝡ":"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w","ⱳ":"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y","ɏ":"y","ỿ":"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z","ɀ":"z","ⱬ":"z","ꝣ":"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),z.define("select2/data/base",["../utils"],function(v){function w(g,d){w.__super__.constructor.call(this)}return v.Extend(w,v.Observable),w.prototype.current=function(g){throw new Error("The `current` method must be defined in child classes.")},w.prototype.query=function(g,d){throw new Error("The `query` method must be defined in child classes.")},w.prototype.bind=function(g,d){},w.prototype.destroy=function(){},w.prototype.generateResultId=function(g,d){return g=g.id+"-result-",g+=v.generateChars(4),d.id!=null?g+="-"+d.id.toString():g+="-"+v.generateChars(4),g},w}),z.define("select2/data/select",["./base","../utils","jquery"],function(v,w,g){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,v),d.prototype.current=function(u){var a=this;u(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(f){return a.item(g(f))}))},d.prototype.select=function(u){var a,f=this;if(u.selected=!0,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(p){var T=[];(u=[u]).push.apply(u,p);for(var E=0;E<u.length;E++){var C=u[E].id;T.indexOf(C)===-1&&T.push(C)}f.$element.val(T),f.$element.trigger("input").trigger("change")}):(a=u.id,this.$element.val(a),this.$element.trigger("input").trigger("change"))},d.prototype.unselect=function(u){var a=this;if(this.$element.prop("multiple")){if(u.selected=!1,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(f){for(var p=[],T=0;T<f.length;T++){var E=f[T].id;E!==u.id&&p.indexOf(E)===-1&&p.push(E)}a.$element.val(p),a.$element.trigger("input").trigger("change")})}},d.prototype.bind=function(u,a){var f=this;(this.container=u).on("select",function(p){f.select(p.data)}),u.on("unselect",function(p){f.unselect(p.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){w.RemoveData(this)})},d.prototype.query=function(u,a){var f=[],p=this;this.$element.children().each(function(){var T;this.tagName.toLowerCase()!=="option"&&this.tagName.toLowerCase()!=="optgroup"||(T=g(this),T=p.item(T),(T=p.matches(u,T))!==null&&f.push(T))}),a({results:f})},d.prototype.addOptions=function(u){this.$element.append(u)},d.prototype.option=function(u){var a;return u.children?(a=document.createElement("optgroup")).label=u.text:(a=document.createElement("option")).textContent!==void 0?a.textContent=u.text:a.innerText=u.text,u.id!==void 0&&(a.value=u.id),u.disabled&&(a.disabled=!0),u.selected&&(a.selected=!0),u.title&&(a.title=u.title),u=this._normalizeItem(u),u.element=a,w.StoreData(a,"data",u),g(a)},d.prototype.item=function(u){var a={};if((a=w.GetData(u[0],"data"))!=null)return a;var f=u[0];if(f.tagName.toLowerCase()==="option")a={id:u.val(),text:u.text(),disabled:u.prop("disabled"),selected:u.prop("selected"),title:u.prop("title")};else if(f.tagName.toLowerCase()==="optgroup"){a={text:u.prop("label"),children:[],title:u.prop("title")};for(var p=u.children("option"),T=[],E=0;E<p.length;E++){var C=g(p[E]),C=this.item(C);T.push(C)}a.children=T}return(a=this._normalizeItem(a)).element=u[0],w.StoreData(u[0],"data",a),a},d.prototype._normalizeItem=function(u){return u!==Object(u)&&(u={id:u,text:u}),(u=g.extend({},{text:""},u)).id!=null&&(u.id=u.id.toString()),u.text!=null&&(u.text=u.text.toString()),u._resultId==null&&u.id&&this.container!=null&&(u._resultId=this.generateResultId(this.container,u)),g.extend({},{selected:!1,disabled:!1},u)},d.prototype.matches=function(u,a){return this.options.get("matcher")(u,a)},d}),z.define("select2/data/array",["./select","../utils","jquery"],function(v,w,g){function d(u,a){this._dataToConvert=a.get("data")||[],d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype.bind=function(u,a){d.__super__.bind.call(this,u,a),this.addOptions(this.convertToOptions(this._dataToConvert))},d.prototype.select=function(u){var a=this.$element.find("option").filter(function(f,p){return p.value==u.id.toString()});a.length===0&&(a=this.option(u),this.addOptions(a)),d.__super__.select.call(this,u)},d.prototype.convertToOptions=function(u){for(var a=this,f=this.$element.find("option"),p=f.map(function(){return a.item(g(this)).id}).get(),T=[],E=0;E<u.length;E++){var C,M,L=this._normalizeItem(u[E]);0<=p.indexOf(L.id)?(C=f.filter(function(oe){return function(){return g(this).val()==oe.id}}(L)),M=this.item(C),M=g.extend(!0,{},L,M),M=this.option(M),C.replaceWith(M)):(M=this.option(L),L.children&&(L=this.convertToOptions(L.children),M.append(L)),T.push(M))}return T},d}),z.define("select2/data/ajax",["./array","../utils","jquery"],function(v,w,g){function d(u,a){this.ajaxOptions=this._applyDefaults(a.get("ajax")),this.ajaxOptions.processResults!=null&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype._applyDefaults=function(u){var a={data:function(f){return g.extend({},f,{q:f.term})},transport:function(f,p,T){return f=g.ajax(f),f.then(p),f.fail(T),f}};return g.extend({},a,u,!0)},d.prototype.processResults=function(u){return u},d.prototype.query=function(u,a){var f=this;this._request!=null&&(typeof this._request.abort=="function"&&this._request.abort(),this._request=null);var p=g.extend({type:"GET"},this.ajaxOptions);function T(){var E=p.transport(p,function(C){C=f.processResults(C,u),f.options.get("debug")&&window.console&&console.error&&(C&&C.results&&Array.isArray(C.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),a(C)},function(){"status"in E&&(E.status===0||E.status==="0")||f.trigger("results:message",{message:"errorLoading"})});f._request=E}typeof p.url=="function"&&(p.url=p.url.call(this.$element,u)),typeof p.data=="function"&&(p.data=p.data.call(this.$element,u)),this.ajaxOptions.delay&&u.term!=null?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(T,this.ajaxOptions.delay)):T()},d}),z.define("select2/data/tags",["jquery"],function(v){function w(g,d,u){var a=u.get("tags"),f=u.get("createTag");if(f!==void 0&&(this.createTag=f),f=u.get("insertTag"),f!==void 0&&(this.insertTag=f),g.call(this,d,u),Array.isArray(a))for(var p=0;p<a.length;p++){var T=a[p],T=this._normalizeItem(T),T=this.option(T);this.$element.append(T)}}return w.prototype.query=function(g,d,u){var a=this;this._removeOldTags(),d.term!=null&&d.page==null?g.call(this,d,function f(p,T){for(var E=p.results,C=0;C<E.length;C++){var M=E[C],L=M.children!=null&&!f({results:M.children},!0);if((M.text||"").toUpperCase()===(d.term||"").toUpperCase()||L)return!T&&(p.data=E,void u(p))}if(T)return!0;var oe,pe=a.createTag(d);pe!=null&&((oe=a.option(pe)).attr("data-select2-tag","true"),a.addOptions([oe]),a.insertTag(E,pe)),p.results=E,u(p)}):g.call(this,d,u)},w.prototype.createTag=function(g,d){return d.term==null?null:(d=d.term.trim(),d===""?null:{id:d,text:d})},w.prototype.insertTag=function(g,d,u){d.unshift(u)},w.prototype._removeOldTags=function(g){this.$element.find("option[data-select2-tag]").each(function(){this.selected||v(this).remove()})},w}),z.define("select2/data/tokenizer",["jquery"],function(v){function w(g,d,u){var a=u.get("tokenizer");a!==void 0&&(this.tokenizer=a),g.call(this,d,u)}return w.prototype.bind=function(g,d,u){g.call(this,d,u),this.$search=d.dropdown.$search||d.selection.$search||u.find(".select2-search__field")},w.prototype.query=function(g,d,u){var a=this;d.term=d.term||"";var f=this.tokenizer(d,this.options,function(p){var T,E=a._normalizeItem(p);a.$element.find("option").filter(function(){return v(this).val()===E.id}).length||((T=a.option(E)).attr("data-select2-tag",!0),a._removeOldTags(),a.addOptions([T])),T=E,a.trigger("select",{data:T})});f.term!==d.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.trigger("focus")),d.term=f.term),g.call(this,d,u)},w.prototype.tokenizer=function(g,d,u,a){for(var f=u.get("tokenSeparators")||[],p=d.term,T=0,E=this.createTag||function(M){return{id:M.term,text:M.term}};T<p.length;){var C=p[T];f.indexOf(C)!==-1?(C=p.substr(0,T),(C=E(v.extend({},d,{term:C})))!=null?(a(C),p=p.substr(T+1)||"",T=0):T++):T++}return{term:p}},w}),z.define("select2/data/minimumInputLength",[],function(){function v(w,g,d){this.minimumInputLength=d.get("minimumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",g.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumInputLength",[],function(){function v(w,g,d){this.maximumInputLength=d.get("maximumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",0<this.maximumInputLength&&g.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumSelectionLength",[],function(){function v(w,g,d){this.maximumSelectionLength=d.get("maximumSelectionLength"),w.call(this,g,d)}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(){u._checkIfMaximumSelected()})},v.prototype.query=function(w,g,d){var u=this;this._checkIfMaximumSelected(function(){w.call(u,g,d)})},v.prototype._checkIfMaximumSelected=function(w,g){var d=this;this.current(function(u){u=u!=null?u.length:0,0<d.maximumSelectionLength&&u>=d.maximumSelectionLength?d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):g&&g()})},v}),z.define("select2/dropdown",["jquery","./utils"],function(v,w){function g(d,u){this.$element=d,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<span class="select2-dropdown"><span class="select2-results"></span></span>');return d.attr("dir",this.options.get("dir")),this.$dropdown=d},g.prototype.bind=function(){},g.prototype.position=function(d,u){},g.prototype.destroy=function(){this.$dropdown.remove()},g}),z.define("select2/dropdown/search",["jquery"],function(v){function w(){}return w.prototype.render=function(a){var d=a.call(this),u=this.options.get("translations").get("search"),a=v('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=a,this.$search=a.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",u()),d.prepend(a),d},w.prototype.bind=function(g,d,u){var a=this,f=d.id+"-results";g.call(this,d,u),this.$search.on("keydown",function(p){a.trigger("keypress",p),a._keyUpPrevented=p.isDefaultPrevented()}),this.$search.on("input",function(p){v(this).off("keyup")}),this.$search.on("keyup input",function(p){a.handleSearch(p)}),d.on("open",function(){a.$search.attr("tabindex",0),a.$search.attr("aria-controls",f),a.$search.trigger("focus"),window.setTimeout(function(){a.$search.trigger("focus")},0)}),d.on("close",function(){a.$search.attr("tabindex",-1),a.$search.removeAttr("aria-controls"),a.$search.removeAttr("aria-activedescendant"),a.$search.val(""),a.$search.trigger("blur")}),d.on("focus",function(){d.isOpen()||a.$search.trigger("focus")}),d.on("results:all",function(p){p.query.term!=null&&p.query.term!==""||(a.showSearch(p)?a.$searchContainer[0].classList.remove("select2-search--hide"):a.$searchContainer[0].classList.add("select2-search--hide"))}),d.on("results:focus",function(p){p.data._resultId?a.$search.attr("aria-activedescendant",p.data._resultId):a.$search.removeAttr("aria-activedescendant")})},w.prototype.handleSearch=function(g){var d;this._keyUpPrevented||(d=this.$search.val(),this.trigger("query",{term:d})),this._keyUpPrevented=!1},w.prototype.showSearch=function(g,d){return!0},w}),z.define("select2/dropdown/hidePlaceholder",[],function(){function v(w,g,d,u){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d,u)}return v.prototype.append=function(w,g){g.results=this.removePlaceholder(g.results),w.call(this,g)},v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.removePlaceholder=function(w,g){for(var d=g.slice(0),u=g.length-1;0<=u;u--){var a=g[u];this.placeholder.id===a.id&&d.splice(u,1)}return d},v}),z.define("select2/dropdown/infiniteScroll",["jquery"],function(v){function w(g,d,u,a){this.lastParams={},g.call(this,d,u,a),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return w.prototype.append=function(g,d){this.$loadingMore.remove(),this.loading=!1,g.call(this,d),this.showLoadingMore(d)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},w.prototype.bind=function(g,d,u){var a=this;g.call(this,d,u),d.on("query",function(f){a.lastParams=f,a.loading=!0}),d.on("query:append",function(f){a.lastParams=f,a.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},w.prototype.loadMoreIfNeeded=function(){var g=v.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&g&&(g=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=g+50&&this.loadMore())},w.prototype.loadMore=function(){this.loading=!0;var g=v.extend({},{page:1},this.lastParams);g.page++,this.trigger("query:append",g)},w.prototype.showLoadingMore=function(g,d){return d.pagination&&d.pagination.more},w.prototype.createLoadingMore=function(){var g=v('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),d=this.options.get("translations").get("loadingMore");return g.html(d(this.lastParams)),g},w}),z.define("select2/dropdown/attachBody",["jquery","../utils"],function(v,w){function g(d,u,a){this.$dropdownParent=v(a.get("dropdownParent")||document.body),d.call(this,u,a)}return g.prototype.bind=function(d,u,a){var f=this;d.call(this,u,a),u.on("open",function(){f._showDropdown(),f._attachPositioningHandler(u),f._bindContainerResultHandlers(u)}),u.on("close",function(){f._hideDropdown(),f._detachPositioningHandler(u)}),this.$dropdownContainer.on("mousedown",function(p){p.stopPropagation()})},g.prototype.destroy=function(d){d.call(this),this.$dropdownContainer.remove()},g.prototype.position=function(d,u,a){u.attr("class",a.attr("class")),u[0].classList.remove("select2"),u[0].classList.add("select2-container--open"),u.css({position:"absolute",top:-999999}),this.$container=a},g.prototype.render=function(a){var u=v("<span></span>"),a=a.call(this);return u.append(a),this.$dropdownContainer=u},g.prototype._hideDropdown=function(d){this.$dropdownContainer.detach()},g.prototype._bindContainerResultHandlers=function(d,u){var a;this._containerResultsHandlersBound||(a=this,u.on("results:all",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:append",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:message",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("select",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("unselect",function(){a._positionDropdown(),a._resizeDropdown()}),this._containerResultsHandlersBound=!0)},g.prototype._attachPositioningHandler=function(d,E){var a=this,f="scroll.select2."+E.id,p="resize.select2."+E.id,T="orientationchange.select2."+E.id,E=this.$container.parents().filter(w.hasScroll);E.each(function(){w.StoreData(this,"select2-scroll-position",{x:v(this).scrollLeft(),y:v(this).scrollTop()})}),E.on(f,function(C){var M=w.GetData(this,"select2-scroll-position");v(this).scrollTop(M.y)}),v(window).on(f+" "+p+" "+T,function(C){a._positionDropdown(),a._resizeDropdown()})},g.prototype._detachPositioningHandler=function(d,p){var a="scroll.select2."+p.id,f="resize.select2."+p.id,p="orientationchange.select2."+p.id;this.$container.parents().filter(w.hasScroll).off(a),v(window).off(a+" "+f+" "+p)},g.prototype._positionDropdown=function(){var C=v(window),d=this.$dropdown[0].classList.contains("select2-dropdown--above"),u=this.$dropdown[0].classList.contains("select2-dropdown--below"),a=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var p={height:this.$container.outerHeight(!1)};p.top=f.top,p.bottom=f.top+p.height;var T=this.$dropdown.outerHeight(!1),M=C.scrollTop(),L=C.scrollTop()+C.height(),E=M<f.top-T,C=L>f.bottom+T,M={left:f.left,top:p.bottom},L=this.$dropdownParent;L.css("position")==="static"&&(L=L.offsetParent()),f={top:0,left:0},(v.contains(document.body,L[0])||L[0].isConnected)&&(f=L.offset()),M.top-=f.top,M.left-=f.left,d||u||(a="below"),C||!E||d?!E&&C&&d&&(a="below"):a="above",(a=="above"||d&&a!=="below")&&(M.top=p.top-f.top-T),a!=null&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+a),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+a)),this.$dropdownContainer.css(M)},g.prototype._resizeDropdown=function(){var d={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(d.minWidth=d.width,d.position="relative",d.width="auto"),this.$dropdown.css(d)},g.prototype._showDropdown=function(d){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},g}),z.define("select2/dropdown/minimumResultsForSearch",[],function(){function v(w,g,d,u){this.minimumResultsForSearch=d.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),w.call(this,g,d,u)}return v.prototype.showSearch=function(w,g){return!(function d(u){for(var a=0,f=0;f<u.length;f++){var p=u[f];p.children?a+=d(p.children):a++}return a}(g.data.results)<this.minimumResultsForSearch)&&w.call(this,g)},v}),z.define("select2/dropdown/selectOnClose",["../utils"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var a=this;g.call(this,d,u),d.on("close",function(f){a._handleSelectOnClose(f)})},w.prototype._handleSelectOnClose=function(g,d){if(d&&d.originalSelect2Event!=null){var u=d.originalSelect2Event;if(u._type==="select"||u._type==="unselect")return}u=this.getHighlightedResults(),u.length<1||(u=v.GetData(u[0],"data")).element!=null&&u.element.selected||u.element==null&&u.selected||this.trigger("select",{data:u})},w}),z.define("select2/dropdown/closeOnSelect",[],function(){function v(){}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(a){u._selectTriggered(a)}),g.on("unselect",function(a){u._selectTriggered(a)})},v.prototype._selectTriggered=function(w,g){var d=g.originalEvent;d&&(d.ctrlKey||d.metaKey)||this.trigger("close",{originalEvent:d,originalSelect2Event:g})},v}),z.define("select2/dropdown/dropdownCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("dropdownCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(v){function w(){}return w.prototype.highlightFirstItem=function(g){var d=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<d.length){var u=d.first(),d=v.GetData(u[0],"data").element;if(d&&d.getAttribute&&d.getAttribute("data-select2-tag")==="true")return void u.trigger("mouseenter")}g.call(this)},w}),z.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(g){var w=g.input.length-g.maximum,g="Please delete "+w+" character";return w!=1&&(g+="s"),g},inputTooShort:function(v){return"Please enter "+(v.minimum-v.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(v){var w="You can only select "+v.maximum+" item";return v.maximum!=1&&(w+="s"),w},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),z.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(v,w,g,d,u,a,f,p,T,E,C,M,L,oe,pe,Se,Xe,Tn,D,W,q,Q,ce,be,ie,y,I,R,P,x,U){function j(){this.reset()}return j.prototype.apply=function(S){var N;(S=v.extend(!0,{},this.defaults,S)).dataAdapter==null&&(S.ajax!=null?S.dataAdapter=pe:S.data!=null?S.dataAdapter=oe:S.dataAdapter=L,0<S.minimumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,Tn)),0<S.maximumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,D)),0<S.maximumSelectionLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,W)),S.tags&&(S.dataAdapter=E.Decorate(S.dataAdapter,Se)),S.tokenSeparators==null&&S.tokenizer==null||(S.dataAdapter=E.Decorate(S.dataAdapter,Xe))),S.resultsAdapter==null&&(S.resultsAdapter=w,S.ajax!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,be)),S.placeholder!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,ce)),S.selectOnClose&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,I)),S.tags&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,x))),S.dropdownAdapter==null&&(S.multiple?S.dropdownAdapter=q:(N=E.Decorate(q,Q),S.dropdownAdapter=N),S.minimumResultsForSearch!==0&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,y)),S.closeOnSelect&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,R)),S.dropdownCssClass!=null&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,P)),S.dropdownAdapter=E.Decorate(S.dropdownAdapter,ie)),S.selectionAdapter==null&&(S.multiple?S.selectionAdapter=d:S.selectionAdapter=g,S.placeholder!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,u)),S.allowClear&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,a)),S.multiple&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,f)),S.selectionCssClass!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,p)),S.selectionAdapter=E.Decorate(S.selectionAdapter,T)),S.language=this._resolveLanguage(S.language),S.language.push("en");for(var O=[],B=0;B<S.language.length;B++){var F=S.language[B];O.indexOf(F)===-1&&O.push(F)}return S.language=O,S.translations=this._processTranslations(S.language,S.debug),S},j.prototype.reset=function(){function S(N){return N.replace(/[^\u0000-\u007E]/g,function(O){return M[O]||O})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:E.escapeMarkup,language:{},matcher:function N(O,B){if(O.term==null||O.term.trim()==="")return B;if(B.children&&0<B.children.length){for(var F=v.extend(!0,{},B),H=B.children.length-1;0<=H;H--)N(O,B.children[H])==null&&F.children.splice(H,1);return 0<F.children.length?F:N(O,F)}var te=S(B.text).toUpperCase(),ae=S(O.term).toUpperCase();return-1<te.indexOf(ae)?B:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(N){return N},templateResult:function(N){return N.text},templateSelection:function(N){return N.text},theme:"default",width:"resolve"}},j.prototype.applyFromElement=function(S,H){var O=S.language,B=this.defaults.language,F=H.prop("lang"),H=H.closest("[lang]").prop("lang"),H=Array.prototype.concat.call(this._resolveLanguage(F),this._resolveLanguage(O),this._resolveLanguage(B),this._resolveLanguage(H));return S.language=H,S},j.prototype._resolveLanguage=function(S){if(!S)return[];if(v.isEmptyObject(S))return[];if(v.isPlainObject(S))return[S];for(var N,O=Array.isArray(S)?S:[S],B=[],F=0;F<O.length;F++)B.push(O[F]),typeof O[F]=="string"&&0<O[F].indexOf("-")&&(N=O[F].split("-")[0],B.push(N));return B},j.prototype._processTranslations=function(S,N){for(var O=new C,B=0;B<S.length;B++){var F=new C,H=S[B];if(typeof H=="string")try{F=C.loadPath(H)}catch{try{H=this.defaults.amdLanguageBase+H,F=C.loadPath(H)}catch{N&&window.console&&console.warn&&console.warn('Select2: The language file for "'+H+'" could not be automatically loaded. A fallback will be used instead.')}}else F=v.isPlainObject(H)?new C(H):H;O.extend(F)}return O},j.prototype.set=function(S,N){var O={};O[v.camelCase(S)]=N,O=E._convertData(O),v.extend(!0,this.defaults,O)},new j}),z.define("select2/options",["jquery","./defaults","./utils"],function(v,w,g){function d(u,a){this.options=u,a!=null&&this.fromElement(a),a!=null&&(this.options=w.applyFromElement(this.options,a)),this.options=w.apply(this.options)}return d.prototype.fromElement=function(u){var a=["select2"];this.options.multiple==null&&(this.options.multiple=u.prop("multiple")),this.options.disabled==null&&(this.options.disabled=u.prop("disabled")),this.options.autocomplete==null&&u.prop("autocomplete")&&(this.options.autocomplete=u.prop("autocomplete")),this.options.dir==null&&(u.prop("dir")?this.options.dir=u.prop("dir"):u.closest("[dir]").prop("dir")?this.options.dir=u.closest("[dir]").prop("dir"):this.options.dir="ltr"),u.prop("disabled",this.options.disabled),u.prop("multiple",this.options.multiple),g.GetData(u[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),g.StoreData(u[0],"data",g.GetData(u[0],"select2Tags")),g.StoreData(u[0],"tags",!0)),g.GetData(u[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),u.attr("ajax--url",g.GetData(u[0],"ajaxUrl")),g.StoreData(u[0],"ajax-Url",g.GetData(u[0],"ajaxUrl")));var f={};function p(oe,pe){return pe.toUpperCase()}for(var T=0;T<u[0].attributes.length;T++){var E=u[0].attributes[T].name,C="data-";E.substr(0,C.length)==C&&(E=E.substring(C.length),C=g.GetData(u[0],E),f[E.replace(/-([a-z])/g,p)]=C)}v.fn.jquery&&v.fn.jquery.substr(0,2)=="1."&&u[0].dataset&&(f=v.extend(!0,{},u[0].dataset,f));var M,L=v.extend(!0,{},g.GetData(u[0]),f);for(M in L=g._convertData(L))-1<a.indexOf(M)||(v.isPlainObject(this.options[M])?v.extend(this.options[M],L[M]):this.options[M]=L[M]);return this},d.prototype.get=function(u){return this.options[u]},d.prototype.set=function(u,a){this.options[u]=a},d}),z.define("select2/core",["jquery","./options","./utils","./keys"],function(v,w,g,d){var u=function(a,f){g.GetData(a[0],"select2")!=null&&g.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),f=f||{},this.options=new w(f,a),u.__super__.constructor.call(this);var p=a.attr("tabindex")||0;g.StoreData(a[0],"old-tabindex",p),a.attr("tabindex","-1"),f=this.options.get("dataAdapter"),this.dataAdapter=new f(a,this.options),p=this.render(),this._placeContainer(p),f=this.options.get("selectionAdapter"),this.selection=new f(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,p),f=this.options.get("dropdownAdapter"),this.dropdown=new f(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,p),p=this.options.get("resultsAdapter"),this.results=new p(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var T=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(E){T.trigger("selection:update",{data:E})}),a[0].classList.add("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),g.StoreData(a[0],"select2",this),a.data("select2",this)};return g.Extend(u,g.Observable),u.prototype._generateId=function(a){return"select2-"+(a.attr("id")!=null?a.attr("id"):a.attr("name")!=null?a.attr("name")+"-"+g.generateChars(2):g.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},u.prototype._placeContainer=function(a){a.insertAfter(this.$element);var f=this._resolveWidth(this.$element,this.options.get("width"));f!=null&&a.css("width",f)},u.prototype._resolveWidth=function(a,f){var p=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(f=="resolve"){var T=this._resolveWidth(a,"style");return T??this._resolveWidth(a,"element")}if(f=="element")return T=a.outerWidth(!1),T<=0?"auto":T+"px";if(f!="style")return f!="computedstyle"?f:window.getComputedStyle(a[0]).width;if(a=a.attr("style"),typeof a!="string")return null;for(var E=a.split(";"),C=0,M=E.length;C<M;C+=1){var L=E[C].replace(/\s/g,"").match(p);if(L!==null&&1<=L.length)return L[1]}return null},u.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},u.prototype._registerDomEvents=function(){var a=this;this.$element.on("change.select2",function(){a.dataAdapter.current(function(f){a.trigger("selection:update",{data:f})})}),this.$element.on("focus.select2",function(f){a.trigger("focus",f)}),this._syncA=g.bind(this._syncAttributes,this),this._syncS=g.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(f){a._syncA(),a._syncS(f)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},u.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerSelectionEvents=function(){var a=this,f=["toggle","focus"];this.selection.on("toggle",function(){a.toggleDropdown()}),this.selection.on("focus",function(p){a.focus(p)}),this.selection.on("*",function(p,T){f.indexOf(p)===-1&&a.trigger(p,T)})},u.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container[0].classList.add("select2-container--open")}),this.on("close",function(){a.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){a.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){a.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){a.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(f){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(f,function(p){a.trigger("results:all",{data:p,query:f})})}),this.on("query:append",function(f){this.dataAdapter.query(f,function(p){a.trigger("results:append",{data:p,query:f})})}),this.on("keypress",function(f){var p=f.which;a.isOpen()?p===d.ESC||p===d.UP&&f.altKey?(a.close(f),f.preventDefault()):p===d.ENTER||p===d.TAB?(a.trigger("results:select",{}),f.preventDefault()):p===d.SPACE&&f.ctrlKey?(a.trigger("results:toggle",{}),f.preventDefault()):p===d.UP?(a.trigger("results:previous",{}),f.preventDefault()):p===d.DOWN&&(a.trigger("results:next",{}),f.preventDefault()):(p===d.ENTER||p===d.SPACE||p===d.DOWN&&f.altKey)&&(a.open(),f.preventDefault())})},u.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},u.prototype._isChangeMutation=function(a){var f=this;if(a.addedNodes&&0<a.addedNodes.length){for(var p=0;p<a.addedNodes.length;p++)if(a.addedNodes[p].selected)return!0}else{if(a.removedNodes&&0<a.removedNodes.length)return!0;if(Array.isArray(a))return a.some(function(T){return f._isChangeMutation(T)})}return!1},u.prototype._syncSubtree=function(f){var f=this._isChangeMutation(f),p=this;f&&this.dataAdapter.current(function(T){p.trigger("selection:update",{data:T})})},u.prototype.trigger=function(a,f){var p=u.__super__.trigger,T={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(f===void 0&&(f={}),a in T){var E=T[a],T={prevented:!1,name:a,args:f};if(p.call(this,E,T),T.prevented)return void(f.prevented=!0)}p.call(this,a,f)},u.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},u.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},u.prototype.close=function(a){this.isOpen()&&this.trigger("close",{originalEvent:a})},u.prototype.isEnabled=function(){return!this.isDisabled()},u.prototype.isDisabled=function(){return this.options.get("disabled")},u.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},u.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},u.prototype.focus=function(a){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},u.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),a=!(a=a==null||a.length===0?[!0]:a)[0],this.$element.prop("disabled",a)},u.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(f){a=f}),a},u.prototype.val=function(a){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),a==null||a.length===0)return this.$element.val();a=a[0],Array.isArray(a)&&(a=a.map(function(f){return f.toString()})),this.$element.val(a).trigger("input").trigger("change")},u.prototype.destroy=function(){g.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",g.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),g.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},u.prototype.render=function(){var a=v('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return a.attr("dir",this.options.get("dir")),this.$container=a,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),g.StoreData(a[0],"element",this.$element),a},u}),z.define("jquery-mousewheel",["jquery"],function(v){return v}),z.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(v,w,g,d,u){var a;return v.fn.select2==null&&(a=["open","close","destroy"],v.fn.select2=function(f){if(typeof(f=f||{})=="object")return this.each(function(){var E=v.extend(!0,{},f);new g(v(this),E)}),this;if(typeof f!="string")throw new Error("Invalid arguments for Select2: "+f);var p,T=Array.prototype.slice.call(arguments,1);return this.each(function(){var E=u.GetData(this,"select2");E==null&&window.console&&console.error&&console.error("The select2('"+f+"') method was called on an element that is not using Select2."),p=E[f].apply(E,T)}),-1<a.indexOf(f)?this:p}),v.fn.select2.defaults==null&&(v.fn.select2.defaults=d),g}),{define:z.define,require:z.require});function X(v,w){return A.call(v,w)}function G(v,w){var g,d,u,a,f,p,T,E,C,M,L=w&&w.split("/"),oe=m.map,pe=oe&&oe["*"]||{};if(v){for(w=(v=v.split("/")).length-1,m.nodeIdCompat&&V.test(v[w])&&(v[w]=v[w].replace(V,"")),v[0].charAt(0)==="."&&L&&(v=L.slice(0,L.length-1).concat(v)),E=0;E<v.length;E++)(M=v[E])==="."?(v.splice(E,1),--E):M===".."&&(E===0||E===1&&v[2]===".."||v[E-1]===".."||0<E&&(v.splice(E-1,2),E-=2));v=v.join("/")}if((L||pe)&&oe){for(E=(g=v.split("/")).length;0<E;--E){if(d=g.slice(0,E).join("/"),L){for(C=L.length;0<C;--C)if(u=oe[L.slice(0,C).join("/")],u=u&&u[d]){a=u,f=E;break}}if(a)break;!p&&pe&&pe[d]&&(p=pe[d],T=E)}!a&&p&&(a=p,f=T),a&&(g.splice(0,f,a),v=g.join("/"))}return v}function ee(v,w){return function(){var g=k.call(arguments,0);return typeof g[0]!="string"&&g.length===1&&g.push(null),i.apply(r,g.concat([v,w]))}}function J(v){var w;if(X(h,v)&&(w=h[v],delete h[v],b[v]=!0,s.apply(r,w)),!X(c,v)&&!X(b,v))throw new Error("No "+v);return c[v]}function le(v){var w,g=v?v.indexOf("!"):-1;return-1<g&&(w=v.substring(0,g),v=v.substring(g+1,v.length)),[w,v]}function Te(v){return v?le(v):[]}var z=K.require("jquery.select2");return t.fn.select2.amd=K,z});function po(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function go(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Jd(r):go(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(xe(t))return t;if(we(t))return t}}const Kd=/;(?![^(]*\))/g,Gd=/:([^]+)/,Yd=/\/\*.*?\*\//gs;function Jd(t){const e={};return t.replace(Yd,"").split(Kd).forEach(n=>{if(n){const r=n.split(Gd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mo(t){let e="";if(xe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=mo(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xd=po(Qd);function ic(t){return!!t||t===""}function Zd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gs(t[r],e[r]);return n}function Gs(t,e){if(t===e)return!0;let n=wa(t),r=wa(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vr(t),r=vr(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?Zd(t,e):!1;if(n=we(t),r=we(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Gs(t[o],e[o]))return!1}}return String(t)===String(e)}function eh(t,e){return t.findIndex(n=>Gs(n,e))}const oc=t=>xe(t)?t:t==null?"":ne(t)||we(t)&&(t.toString===cc||!se(t.toString))?JSON.stringify(t,ac,2):String(t),ac=(t,e)=>e&&e.__v_isRef?ac(t,e.value):kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!ne(e)&&!uc(e)?String(e):e,Ie={},Pn=[],dt=()=>{},th=()=>!1,nh=/^on[^a-z]/,Ys=t=>nh.test(t),yo=t=>t.startsWith("onUpdate:"),We=Object.assign,_o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rh=Object.prototype.hasOwnProperty,he=(t,e)=>rh.call(t,e),ne=Array.isArray,kn=t=>$r(t)==="[object Map]",Js=t=>$r(t)==="[object Set]",wa=t=>$r(t)==="[object Date]",se=t=>typeof t=="function",xe=t=>typeof t=="string",vr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",lc=t=>we(t)&&se(t.then)&&se(t.catch),cc=Object.prototype.toString,$r=t=>cc.call(t),sh=t=>$r(t).slice(8,-1),uc=t=>$r(t)==="[object Object]",vo=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ih=/-(\w)/g,St=Qs(t=>t.replace(ih,(e,n)=>n?n.toUpperCase():"")),oh=/\B([A-Z])/g,Kn=Qs(t=>t.replace(oh,"-$1").toLowerCase()),Xs=Qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ii=Qs(t=>t?`on${Xs(t)}`:""),wr=(t,e)=>!Object.is(t,e),hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Es=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Is=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ba;const ah=()=>ba||(ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let lt;class lh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(t,e=lt){e&&e.active&&e.effects.push(t)}function uh(){return lt}const wo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dc=t=>(t.w&Qt)>0,hc=t=>(t.n&Qt)>0,dh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qt},hh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];dc(s)&&!hc(s)?s.delete(t):e[n++]=s,s.w&=~Qt,s.n&=~Qt}e.length=n}},Bi=new WeakMap;let or=0,Qt=1;const qi=30;let ct;const dn=Symbol(""),Hi=Symbol("");class bo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ch(this,r)}run(){if(!this.active)return this.fn();let e=ct,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,zt=!0,Qt=1<<++or,or<=qi?dh(this):Ea(this),this.fn()}finally{or<=qi&&hh(this),Qt=1<<--or,ct=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(Ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Ea(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const fc=[];function Gn(){fc.push(zt),zt=!1}function Yn(){const t=fc.pop();zt=t===void 0?!0:t}function Qe(t,e,n){if(zt&&ct){let r=Bi.get(t);r||Bi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wo()),pc(s)}}function pc(t,e){let n=!1;or<=qi?hc(t)||(t.n|=Qt,n=!dc(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function kt(t,e,n,r,s,i){const o=Bi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(r);o.forEach((h,m)=>{(m==="length"||m>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ne(t)?vo(n)&&l.push(o.get("length")):(l.push(o.get(dn)),kn(t)&&l.push(o.get(Hi)));break;case"delete":ne(t)||(l.push(o.get(dn)),kn(t)&&l.push(o.get(Hi)));break;case"set":kn(t)&&l.push(o.get(dn));break}if(l.length===1)l[0]&&zi(l[0]);else{const c=[];for(const h of l)h&&c.push(...h);zi(wo(c))}}function zi(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Ia(r);for(const r of n)r.computed||Ia(r)}function Ia(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const fh=po("__proto__,__v_isRef,__isVue"),gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vr)),ph=Eo(),gh=Eo(!1,!0),mh=Eo(!0),Ta=yh();function yh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Qe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn();const r=fe(this)[e].apply(this,n);return Yn(),r}}),t}function _h(t){const e=fe(this);return Qe(e,"has",t),e.hasOwnProperty(t)}function Eo(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Nh:wc:e?vc:_c).get(r))return r;const o=ne(r);if(!t){if(o&&he(Ta,s))return Reflect.get(Ta,s,i);if(s==="hasOwnProperty")return _h}const l=Reflect.get(r,s,i);return(vr(s)?gc.has(s):fh(s))||(t||Qe(r,"get",s),e)?l:Ve(l)?o&&vo(s)?l:l.value:we(l)?t?bc(l):Mr(l):l}}const vh=mc(),wh=mc(!0);function mc(t=!1){return function(n,r,s,i){let o=n[r];if(Mn(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!Ts(s)&&!Mn(s)&&(o=fe(o),s=fe(s)),!ne(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const l=ne(n)&&vo(r)?Number(r)<n.length:he(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(l?wr(s,o)&&kt(n,"set",r,s):kt(n,"add",r,s)),c}}function bh(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&kt(t,"delete",e,void 0),r}function Eh(t,e){const n=Reflect.has(t,e);return(!vr(e)||!gc.has(e))&&Qe(t,"has",e),n}function Ih(t){return Qe(t,"iterate",ne(t)?"length":dn),Reflect.ownKeys(t)}const yc={get:ph,set:vh,deleteProperty:bh,has:Eh,ownKeys:Ih},Th={get:mh,set(t,e){return!0},deleteProperty(t,e){return!0}},Sh=We({},yc,{get:gh,set:wh}),Io=t=>t,Zs=t=>Reflect.getPrototypeOf(t);function es(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Qe(s,"get",e),Qe(s,"get",i));const{has:o}=Zs(s),l=r?Io:n?Ao:br;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ts(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Qe(r,"has",t),Qe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ns(t,e=!1){return t=t.__v_raw,!e&&Qe(fe(t),"iterate",dn),Reflect.get(t,"size",t)}function Sa(t){t=fe(t);const e=fe(this);return Zs(e).has.call(e,t)||(e.add(t),kt(e,"add",t,t)),this}function Aa(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=Zs(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?wr(e,o)&&kt(n,"set",t,e):kt(n,"add",t,e),this}function Ca(t){const e=fe(this),{has:n,get:r}=Zs(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&kt(e,"delete",t,void 0),i}function Ra(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&kt(t,"clear",void 0,void 0),n}function rs(t,e){return function(r,s){const i=this,o=i.__v_raw,l=fe(o),c=e?Io:t?Ao:br;return!t&&Qe(l,"iterate",dn),o.forEach((h,m)=>r.call(s,c(h),c(m),i))}}function ss(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=kn(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),m=n?Io:e?Ao:br;return!e&&Qe(i,"iterate",c?Hi:dn),{next(){const{value:b,done:A}=h.next();return A?{value:b,done:A}:{value:l?[m(b[0]),m(b[1])]:m(b),done:A}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:this}}function Ah(){const t={get(i){return es(this,i)},get size(){return ns(this)},has:ts,add:Sa,set:Aa,delete:Ca,clear:Ra,forEach:rs(!1,!1)},e={get(i){return es(this,i,!1,!0)},get size(){return ns(this)},has:ts,add:Sa,set:Aa,delete:Ca,clear:Ra,forEach:rs(!1,!0)},n={get(i){return es(this,i,!0)},get size(){return ns(this,!0)},has(i){return ts.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:rs(!0,!1)},r={get(i){return es(this,i,!0,!0)},get size(){return ns(this,!0)},has(i){return ts.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ss(i,!1,!1),n[i]=ss(i,!0,!1),e[i]=ss(i,!1,!0),r[i]=ss(i,!0,!0)}),[t,n,e,r]}const[Ch,Rh,Oh,Ph]=Ah();function To(t,e){const n=e?t?Ph:Oh:t?Rh:Ch;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const kh={get:To(!1,!1)},Dh={get:To(!1,!0)},xh={get:To(!0,!1)},_c=new WeakMap,vc=new WeakMap,wc=new WeakMap,Nh=new WeakMap;function Lh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $h(t){return t.__v_skip||!Object.isExtensible(t)?0:Lh(sh(t))}function Mr(t){return Mn(t)?t:So(t,!1,yc,kh,_c)}function Mh(t){return So(t,!1,Sh,Dh,vc)}function bc(t){return So(t,!0,Th,xh,wc)}function So(t,e,n,r,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$h(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Dn(t){return Mn(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function Ts(t){return!!(t&&t.__v_isShallow)}function Ec(t){return Dn(t)||Mn(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Ic(t){return Es(t,"__v_skip",!0),t}const br=t=>we(t)?Mr(t):t,Ao=t=>we(t)?bc(t):t;function Tc(t){zt&&ct&&(t=fe(t),pc(t.dep||(t.dep=wo())))}function Sc(t,e){t=fe(t);const n=t.dep;n&&zi(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Uh(t){return Ac(t,!1)}function Fh(t){return Ac(t,!0)}function Ac(t,e){return Ve(t)?t:new jh(t,e)}class jh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:br(e)}get value(){return Tc(this),this._value}set value(e){const n=this.__v_isShallow||Ts(e)||Mn(e);e=n?e:fe(e),wr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:br(e),Sc(this))}}function hn(t){return Ve(t)?t.value:t}const Vh={get:(t,e,n)=>hn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cc(t){return Dn(t)?t:new Proxy(t,Vh)}var Rc;class Bh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rc]=!1,this._dirty=!0,this.effect=new bo(e,()=>{this._dirty||(this._dirty=!0,Sc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rc="__v_isReadonly";function qh(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=dt):(r=t.get,s=t.set),new Bh(r,s,i||!s,n)}function Wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ei(i,e,n)}return s}function ht(t,e,n,r){if(se(t)){const i=Wt(t,e,n,r);return i&&lc(i)&&i.catch(o=>{ei(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ht(t[i],e,n,r));return s}function ei(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const h=i.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,o,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Wt(c,null,10,[t,o,l]);return}}Hh(t,n,s,r)}function Hh(t,e,n,r=!0){console.error(t)}let Er=!1,Wi=!1;const je=[];let bt=0;const xn=[];let Ct=null,an=0;const Oc=Promise.resolve();let Co=null;function Pc(t){const e=Co||Oc;return t?e.then(this?t.bind(this):t):e}function zh(t){let e=bt+1,n=je.length;for(;e<n;){const r=e+n>>>1;Ir(je[r])<t?e=r+1:n=r}return e}function Ro(t){(!je.length||!je.includes(t,Er&&t.allowRecurse?bt+1:bt))&&(t.id==null?je.push(t):je.splice(zh(t.id),0,t),kc())}function kc(){!Er&&!Wi&&(Wi=!0,Co=Oc.then(xc))}function Wh(t){const e=je.indexOf(t);e>bt&&je.splice(e,1)}function Kh(t){ne(t)?xn.push(...t):(!Ct||!Ct.includes(t,t.allowRecurse?an+1:an))&&xn.push(t),kc()}function Oa(t,e=Er?bt+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function Dc(t){if(xn.length){const e=[...new Set(xn)];if(xn.length=0,Ct){Ct.push(...e);return}for(Ct=e,Ct.sort((n,r)=>Ir(n)-Ir(r)),an=0;an<Ct.length;an++)Ct[an]();Ct=null,an=0}}const Ir=t=>t.id==null?1/0:t.id,Gh=(t,e)=>{const n=Ir(t)-Ir(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xc(t){Wi=!1,Er=!0,je.sort(Gh);const e=dt;try{for(bt=0;bt<je.length;bt++){const n=je[bt];n&&n.active!==!1&&Wt(n,null,14)}}finally{bt=0,je.length=0,Dc(),Er=!1,Co=null,(je.length||xn.length)&&xc()}}function Yh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:A}=r[m]||Ie;A&&(s=n.map(k=>xe(k)?k.trim():k)),b&&(s=n.map(Is))}let l,c=r[l=Ii(e)]||r[l=Ii(St(e))];!c&&i&&(c=r[l=Ii(Kn(e))]),c&&ht(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(h,t,6,s)}}function Nc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!se(t)){const c=h=>{const m=Nc(h,e,!0);m&&(l=!0,We(o,m))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(we(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):We(o,i),we(t)&&r.set(t,o),o)}function ti(t,e){return!t||!Ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Kn(e))||he(t,e))}let Be=null,Lc=null;function Ss(t){const e=Be;return Be=t,Lc=t&&t.type.__scopeId||null,e}function st(t,e=Be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ua(-1);const i=Ss(e);let o;try{o=t(...s)}finally{Ss(i),r._d&&Ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ti(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:c,emit:h,render:m,renderCache:b,data:A,setupState:k,ctx:V,inheritAttrs:K}=t;let X,G;const ee=Ss(t);try{if(n.shapeFlag&4){const le=s||r;X=vt(m.call(le,le,b,i,k,A,V)),G=c}else{const le=e;X=vt(le.length>1?le(i,{attrs:c,slots:l,emit:h}):le(i,null)),G=e.props?c:Jh(c)}}catch(le){dr.length=0,ei(le,t,1),X=Ee(Xt)}let J=X;if(G&&K!==!1){const le=Object.keys(G),{shapeFlag:Te}=J;le.length&&Te&7&&(o&&le.some(yo)&&(G=Qh(G,o)),J=Un(J,G))}return n.dirs&&(J=Un(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),X=J,Ss(ee),X}const Jh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ys(n))&&((e||(e={}))[n]=t[n]);return e},Qh=(t,e)=>{const n={};for(const r in t)(!yo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Pa(r,o,h):!!o;if(c&8){const m=e.dynamicProps;for(let b=0;b<m.length;b++){const A=m[b];if(o[A]!==r[A]&&!ti(h,A))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Pa(r,o,h):!0:!!o;return!1}function Pa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ti(n,i))return!0}return!1}function Zh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ef=t=>t.__isSuspense;function tf(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Kh(t)}function fs(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function Pt(t,e,n=!1){const r=Re||Be;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}const is={};function ps(t,e,n){return $c(t,e,n)}function $c(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const l=uh()===(Re==null?void 0:Re.scope)?Re:null;let c,h=!1,m=!1;if(Ve(t)?(c=()=>t.value,h=Ts(t)):Dn(t)?(c=()=>t,r=!0):ne(t)?(m=!0,h=t.some(J=>Dn(J)||Ts(J)),c=()=>t.map(J=>{if(Ve(J))return J.value;if(Dn(J))return un(J);if(se(J))return Wt(J,l,2)})):se(t)?e?c=()=>Wt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return b&&b(),ht(t,l,3,[A])}:c=dt,e&&r){const J=c;c=()=>un(J())}let b,A=J=>{b=G.onStop=()=>{Wt(J,l,4)}},k;if(Sr)if(A=dt,e?n&&ht(e,l,3,[c(),m?[]:void 0,A]):c(),s==="sync"){const J=Xf();k=J.__watcherHandles||(J.__watcherHandles=[])}else return dt;let V=m?new Array(t.length).fill(is):is;const K=()=>{if(G.active)if(e){const J=G.run();(r||h||(m?J.some((le,Te)=>wr(le,V[Te])):wr(J,V)))&&(b&&b(),ht(e,l,3,[J,V===is?void 0:m&&V[0]===is?[]:V,A]),V=J)}else G.run()};K.allowRecurse=!!e;let X;s==="sync"?X=K:s==="post"?X=()=>Ge(K,l&&l.suspense):(K.pre=!0,l&&(K.id=l.uid),X=()=>Ro(K));const G=new bo(c,X);e?n?K():V=G.run():s==="post"?Ge(G.run.bind(G),l&&l.suspense):G.run();const ee=()=>{G.stop(),l&&l.scope&&_o(l.scope.effects,G)};return k&&k.push(ee),ee}function nf(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Mc(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Re;Fn(this);const l=$c(s,i.bind(r),n);return o?Fn(o):fn(),l}function Mc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function un(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))un(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)un(t[n],e);else if(Js(t)||kn(t))t.forEach(n=>{un(n,e)});else if(uc(t))for(const n in t)un(t[n],e);return t}function Uc(t){return se(t)?{setup:t,name:t.name}:t}const cr=t=>!!t.type.__asyncLoader,Fc=t=>t.type.__isKeepAlive;function rf(t,e){jc(t,"a",e)}function sf(t,e){jc(t,"da",e)}function jc(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ni(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fc(s.parent.vnode)&&of(r,e,n,s),s=s.parent}}function of(t,e,n,r){const s=ni(e,t,r,!0);Vc(()=>{_o(r[e],s)},n)}function ni(t,e,n=Re,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),Fn(n);const l=ht(e,n,t,o);return fn(),Yn(),l});return r?s.unshift(i):s.push(i),i}}const Nt=t=>(e,n=Re)=>(!Sr||t==="sp")&&ni(t,(...r)=>e(...r),n),af=Nt("bm"),lf=Nt("m"),cf=Nt("bu"),uf=Nt("u"),df=Nt("bum"),Vc=Nt("um"),hf=Nt("sp"),ff=Nt("rtg"),pf=Nt("rtc");function gf(t,e=Re){ni("ec",t,e)}function cb(t,e){const n=Be;if(n===null)return t;const r=oi(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,c,h=Ie]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&un(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:c,modifiers:h}))}return t}function nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Gn(),ht(c,n,8,[t.el,l,t,e]),Yn())}}const Bc="components";function mf(t,e){return _f(Bc,t,!0,e)||t}const yf=Symbol();function _f(t,e,n=!0,r=!1){const s=Be||Re;if(s){const i=s.type;if(t===Bc){const l=Yf(i,!1);if(l&&(l===e||l===St(e)||l===Xs(St(e))))return i}const o=ka(s[t]||i[t],e)||ka(s.appContext[t],e);return!o&&r?i:o}}function ka(t,e){return t&&(t[e]||t[St(e)]||t[Xs(St(e))])}function ub(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||xe(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const h=o[l];s[l]=e(t[h],h,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function vf(t,e,n={},r,s){if(Be.isCE||Be.parent&&cr(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),Ee("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ur();const o=i&&qc(i(n)),l=si(it,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function qc(t){return t.some(e=>Cs(e)?!(e.type===Xt||e.type===it&&!qc(e.children)):!0)?t:null}const Ki=t=>t?eu(t)?oi(t)||t.proxy:Ki(t.parent):null,ur=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ki(t.parent),$root:t=>Ki(t.root),$emit:t=>t.emit,$options:t=>Oo(t),$forceUpdate:t=>t.f||(t.f=()=>Ro(t.update)),$nextTick:t=>t.n||(t.n=Pc.bind(t.proxy)),$watch:t=>nf.bind(t)}),Si=(t,e)=>t!==Ie&&!t.__isScriptSetup&&he(t,e),wf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Si(r,e))return o[e]=1,r[e];if(s!==Ie&&he(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&he(h,e))return o[e]=3,i[e];if(n!==Ie&&he(n,e))return o[e]=4,n[e];Gi&&(o[e]=0)}}const m=ur[e];let b,A;if(m)return e==="$attrs"&&Qe(t,"get",e),m(t);if((b=l.__cssModules)&&(b=b[e]))return b;if(n!==Ie&&he(n,e))return o[e]=4,n[e];if(A=c.config.globalProperties,he(A,e))return A[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Si(s,e)?(s[e]=n,!0):r!==Ie&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ie&&he(t,o)||Si(e,o)||(l=i[0])&&he(l,o)||he(r,o)||he(ur,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gi=!0;function bf(t){const e=Oo(t),n=t.proxy,r=t.ctx;Gi=!1,e.beforeCreate&&Da(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:m,beforeMount:b,mounted:A,beforeUpdate:k,updated:V,activated:K,deactivated:X,beforeDestroy:G,beforeUnmount:ee,destroyed:J,unmounted:le,render:Te,renderTracked:z,renderTriggered:v,errorCaptured:w,serverPrefetch:g,expose:d,inheritAttrs:u,components:a,directives:f,filters:p}=e;if(h&&Ef(h,r,null,t.appContext.config.unwrapInjectedRef),o)for(const C in o){const M=o[C];se(M)&&(r[C]=M.bind(n))}if(s){const C=s.call(n,n);we(C)&&(t.data=Mr(C))}if(Gi=!0,i)for(const C in i){const M=i[C],L=se(M)?M.bind(n,n):se(M.get)?M.get.bind(n,n):dt,oe=!se(M)&&se(M.set)?M.set.bind(n):dt,pe=ot({get:L,set:oe});Object.defineProperty(r,C,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Se=>pe.value=Se})}if(l)for(const C in l)Hc(l[C],r,n,C);if(c){const C=se(c)?c.call(n):c;Reflect.ownKeys(C).forEach(M=>{fs(M,C[M])})}m&&Da(m,t,"c");function E(C,M){ne(M)?M.forEach(L=>C(L.bind(n))):M&&C(M.bind(n))}if(E(af,b),E(lf,A),E(cf,k),E(uf,V),E(rf,K),E(sf,X),E(gf,w),E(pf,z),E(ff,v),E(df,ee),E(Vc,le),E(hf,g),ne(d))if(d.length){const C=t.exposed||(t.exposed={});d.forEach(M=>{Object.defineProperty(C,M,{get:()=>n[M],set:L=>n[M]=L})})}else t.exposed||(t.exposed={});Te&&t.render===dt&&(t.render=Te),u!=null&&(t.inheritAttrs=u),a&&(t.components=a),f&&(t.directives=f)}function Ef(t,e,n=dt,r=!1){ne(t)&&(t=Yi(t));for(const s in t){const i=t[s];let o;we(i)?"default"in i?o=Pt(i.from||s,i.default,!0):o=Pt(i.from||s):o=Pt(i),Ve(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Da(t,e,n){ht(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,r){const s=r.includes(".")?Mc(n,r):()=>n[r];if(xe(t)){const i=e[t];se(i)&&ps(s,i)}else if(se(t))ps(s,t.bind(n));else if(we(t))if(ne(t))t.forEach(i=>Hc(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&ps(s,i,t)}}function Oo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>As(c,h,o,!0)),As(c,e,o)),we(e)&&i.set(e,c),c}function As(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&As(t,i,n,!0),s&&s.forEach(o=>As(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=If[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const If={data:xa,props:sn,emits:sn,methods:sn,computed:sn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:sn,directives:sn,watch:Sf,provide:xa,inject:Tf};function xa(t,e){return e?t?function(){return We(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Tf(t,e){return sn(Yi(t),Yi(e))}function Yi(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function sn(t,e){return t?We(We(Object.create(null),t),e):e}function Sf(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=ze(t[r],e[r]);return n}function Af(t,e,n,r=!1){const s={},i={};Es(i,ii,1),t.propsDefaults=Object.create(null),zc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=fe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=t.vnode.dynamicProps;for(let b=0;b<m.length;b++){let A=m[b];if(ti(t.emitsOptions,A))continue;const k=e[A];if(c)if(he(i,A))k!==i[A]&&(i[A]=k,h=!0);else{const V=St(A);s[V]=Ji(c,l,V,k,t,!1)}else k!==i[A]&&(i[A]=k,h=!0)}}}else{zc(t,e,s,i)&&(h=!0);let m;for(const b in l)(!e||!he(e,b)&&((m=Kn(b))===b||!he(e,m)))&&(c?n&&(n[b]!==void 0||n[m]!==void 0)&&(s[b]=Ji(c,l,b,void 0,t,!0)):delete s[b]);if(i!==l)for(const b in i)(!e||!he(e,b))&&(delete i[b],h=!0)}h&&kt(t,"set","$attrs")}function zc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ds(c))continue;const h=e[c];let m;s&&he(s,m=St(c))?!i||!i.includes(m)?n[m]=h:(l||(l={}))[m]=h:ti(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=fe(n),h=l||Ie;for(let m=0;m<i.length;m++){const b=i[m];n[b]=Ji(s,c,b,h[b],t,!he(h,b))}}return o}function Ji(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=he(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:h}=s;n in h?r=h[n]:(Fn(s),r=h[n]=c.call(null,e),fn())}else r=c}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Kn(n))&&(r=!0))}return r}function Wc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!se(t)){const m=b=>{c=!0;const[A,k]=Wc(b,e,!0);We(o,A),k&&l.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!i&&!c)return we(t)&&r.set(t,Pn),Pn;if(ne(i))for(let m=0;m<i.length;m++){const b=St(i[m]);Na(b)&&(o[b]=Ie)}else if(i)for(const m in i){const b=St(m);if(Na(b)){const A=i[m],k=o[b]=ne(A)||se(A)?{type:A}:Object.assign({},A);if(k){const V=Ma(Boolean,k.type),K=Ma(String,k.type);k[0]=V>-1,k[1]=K<0||V<K,(V>-1||he(k,"default"))&&l.push(b)}}}const h=[o,l];return we(t)&&r.set(t,h),h}function Na(t){return t[0]!=="$"}function La(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $a(t,e){return La(t)===La(e)}function Ma(t,e){return ne(e)?e.findIndex(n=>$a(n,t)):se(e)&&$a(e,t)?0:-1}const Kc=t=>t[0]==="_"||t==="$stable",Po=t=>ne(t)?t.map(vt):[vt(t)],Rf=(t,e,n)=>{if(e._n)return e;const r=st((...s)=>Po(e(...s)),n);return r._c=!1,r},Gc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kc(s))continue;const i=t[s];if(se(i))e[s]=Rf(s,i,r);else if(i!=null){const o=Po(i);e[s]=()=>o}}},Yc=(t,e)=>{const n=Po(e);t.slots.default=()=>n},Of=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Es(e,"_",n)):Gc(e,t.slots={})}else t.slots={},e&&Yc(t,e);Es(t.slots,ii,1)},Pf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(We(s,e),!n&&l===1&&delete s._):(i=!e.$stable,Gc(e,s)),o=e}else e&&(Yc(t,e),o={default:1});if(i)for(const l in s)!Kc(l)&&!(l in o)&&delete s[l]};function Jc(){return{app:null,config:{isNativeTag:th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kf=0;function Df(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!we(s)&&(s=null);const i=Jc(),o=new Set;let l=!1;const c=i.app={_uid:kf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zf,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&se(h.install)?(o.add(h),h.install(c,...m)):se(h)&&(o.add(h),h(c,...m))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,m){return m?(i.components[h]=m,c):i.components[h]},directive(h,m){return m?(i.directives[h]=m,c):i.directives[h]},mount(h,m,b){if(!l){const A=Ee(r,s);return A.appContext=i,m&&e?e(A,h):t(A,h,b),l=!0,c._container=h,h.__vue_app__=c,oi(A.component)||A.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,m){return i.provides[h]=m,c}};return c}}function Qi(t,e,n,r,s=!1){if(ne(t)){t.forEach((A,k)=>Qi(A,e&&(ne(e)?e[k]:e),n,r,s));return}if(cr(r)&&!s)return;const i=r.shapeFlag&4?oi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,m=l.refs===Ie?l.refs={}:l.refs,b=l.setupState;if(h!=null&&h!==c&&(xe(h)?(m[h]=null,he(b,h)&&(b[h]=null)):Ve(h)&&(h.value=null)),se(c))Wt(c,l,12,[o,m]);else{const A=xe(c),k=Ve(c);if(A||k){const V=()=>{if(t.f){const K=A?he(b,c)?b[c]:m[c]:c.value;s?ne(K)&&_o(K,i):ne(K)?K.includes(i)||K.push(i):A?(m[c]=[i],he(b,c)&&(b[c]=m[c])):(c.value=[i],t.k&&(m[t.k]=c.value))}else A?(m[c]=o,he(b,c)&&(b[c]=o)):k&&(c.value=o,t.k&&(m[t.k]=o))};o?(V.id=-1,Ge(V,n)):V()}}}const Ge=tf;function xf(t){return Nf(t)}function Nf(t,e){const n=ah();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:m,parentNode:b,nextSibling:A,setScopeId:k=dt,insertStaticContent:V}=t,K=(y,I,R,P=null,x=null,U=null,j=!1,S=null,N=!!I.dynamicChildren)=>{if(y===I)return;y&&!rr(y,I)&&(P=q(y),Se(y,x,U,!0),y=null),I.patchFlag===-2&&(N=!1,I.dynamicChildren=null);const{type:O,ref:B,shapeFlag:F}=I;switch(O){case ri:X(y,I,R,P);break;case Xt:G(y,I,R,P);break;case gs:y==null&&ee(I,R,P,j);break;case it:a(y,I,R,P,x,U,j,S,N);break;default:F&1?Te(y,I,R,P,x,U,j,S,N):F&6?f(y,I,R,P,x,U,j,S,N):(F&64||F&128)&&O.process(y,I,R,P,x,U,j,S,N,ce)}B!=null&&x&&Qi(B,y&&y.ref,U,I||y,!I)},X=(y,I,R,P)=>{if(y==null)r(I.el=l(I.children),R,P);else{const x=I.el=y.el;I.children!==y.children&&h(x,I.children)}},G=(y,I,R,P)=>{y==null?r(I.el=c(I.children||""),R,P):I.el=y.el},ee=(y,I,R,P)=>{[y.el,y.anchor]=V(y.children,I,R,P,y.el,y.anchor)},J=({el:y,anchor:I},R,P)=>{let x;for(;y&&y!==I;)x=A(y),r(y,R,P),y=x;r(I,R,P)},le=({el:y,anchor:I})=>{let R;for(;y&&y!==I;)R=A(y),s(y),y=R;s(I)},Te=(y,I,R,P,x,U,j,S,N)=>{j=j||I.type==="svg",y==null?z(I,R,P,x,U,j,S,N):g(y,I,x,U,j,S,N)},z=(y,I,R,P,x,U,j,S)=>{let N,O;const{type:B,props:F,shapeFlag:H,transition:te,dirs:ae}=y;if(N=y.el=o(y.type,U,F&&F.is,F),H&8?m(N,y.children):H&16&&w(y.children,N,null,P,x,U&&B!=="foreignObject",j,S),ae&&nn(y,null,P,"created"),v(N,y,y.scopeId,j,P),F){for(const ye in F)ye!=="value"&&!ds(ye)&&i(N,ye,null,F[ye],U,y.children,P,x,W);"value"in F&&i(N,"value",null,F.value),(O=F.onVnodeBeforeMount)&&yt(O,P,y)}ae&&nn(y,null,P,"beforeMount");const ve=(!x||x&&!x.pendingBranch)&&te&&!te.persisted;ve&&te.beforeEnter(N),r(N,I,R),((O=F&&F.onVnodeMounted)||ve||ae)&&Ge(()=>{O&&yt(O,P,y),ve&&te.enter(N),ae&&nn(y,null,P,"mounted")},x)},v=(y,I,R,P,x)=>{if(R&&k(y,R),P)for(let U=0;U<P.length;U++)k(y,P[U]);if(x){let U=x.subTree;if(I===U){const j=x.vnode;v(y,j,j.scopeId,j.slotScopeIds,x.parent)}}},w=(y,I,R,P,x,U,j,S,N=0)=>{for(let O=N;O<y.length;O++){const B=y[O]=S?Ft(y[O]):vt(y[O]);K(null,B,I,R,P,x,U,j,S)}},g=(y,I,R,P,x,U,j)=>{const S=I.el=y.el;let{patchFlag:N,dynamicChildren:O,dirs:B}=I;N|=y.patchFlag&16;const F=y.props||Ie,H=I.props||Ie;let te;R&&rn(R,!1),(te=H.onVnodeBeforeUpdate)&&yt(te,R,I,y),B&&nn(I,y,R,"beforeUpdate"),R&&rn(R,!0);const ae=x&&I.type!=="foreignObject";if(O?d(y.dynamicChildren,O,S,R,P,ae,U):j||M(y,I,S,null,R,P,ae,U,!1),N>0){if(N&16)u(S,I,F,H,R,P,x);else if(N&2&&F.class!==H.class&&i(S,"class",null,H.class,x),N&4&&i(S,"style",F.style,H.style,x),N&8){const ve=I.dynamicProps;for(let ye=0;ye<ve.length;ye++){const Ae=ve[ye],at=F[Ae],Sn=H[Ae];(Sn!==at||Ae==="value")&&i(S,Ae,at,Sn,x,y.children,R,P,W)}}N&1&&y.children!==I.children&&m(S,I.children)}else!j&&O==null&&u(S,I,F,H,R,P,x);((te=H.onVnodeUpdated)||B)&&Ge(()=>{te&&yt(te,R,I,y),B&&nn(I,y,R,"updated")},P)},d=(y,I,R,P,x,U,j)=>{for(let S=0;S<I.length;S++){const N=y[S],O=I[S],B=N.el&&(N.type===it||!rr(N,O)||N.shapeFlag&70)?b(N.el):R;K(N,O,B,null,P,x,U,j,!0)}},u=(y,I,R,P,x,U,j)=>{if(R!==P){if(R!==Ie)for(const S in R)!ds(S)&&!(S in P)&&i(y,S,R[S],null,j,I.children,x,U,W);for(const S in P){if(ds(S))continue;const N=P[S],O=R[S];N!==O&&S!=="value"&&i(y,S,O,N,j,I.children,x,U,W)}"value"in P&&i(y,"value",R.value,P.value)}},a=(y,I,R,P,x,U,j,S,N)=>{const O=I.el=y?y.el:l(""),B=I.anchor=y?y.anchor:l("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:te}=I;te&&(S=S?S.concat(te):te),y==null?(r(O,R,P),r(B,R,P),w(I.children,R,B,x,U,j,S,N)):F>0&&F&64&&H&&y.dynamicChildren?(d(y.dynamicChildren,H,R,x,U,j,S),(I.key!=null||x&&I===x.subTree)&&Qc(y,I,!0)):M(y,I,R,B,x,U,j,S,N)},f=(y,I,R,P,x,U,j,S,N)=>{I.slotScopeIds=S,y==null?I.shapeFlag&512?x.ctx.activate(I,R,P,j,N):p(I,R,P,x,U,j,N):T(y,I,N)},p=(y,I,R,P,x,U,j)=>{const S=y.component=Hf(y,P,x);if(Fc(y)&&(S.ctx.renderer=ce),zf(S),S.asyncDep){if(x&&x.registerDep(S,E),!y.el){const N=S.subTree=Ee(Xt);G(null,N,I,R)}return}E(S,y,I,R,x,U,j)},T=(y,I,R)=>{const P=I.component=y.component;if(Xh(y,I,R))if(P.asyncDep&&!P.asyncResolved){C(P,I,R);return}else P.next=I,Wh(P.update),P.update();else I.el=y.el,P.vnode=I},E=(y,I,R,P,x,U,j)=>{const S=()=>{if(y.isMounted){let{next:B,bu:F,u:H,parent:te,vnode:ae}=y,ve=B,ye;rn(y,!1),B?(B.el=ae.el,C(y,B,j)):B=ae,F&&hs(F),(ye=B.props&&B.props.onVnodeBeforeUpdate)&&yt(ye,te,B,ae),rn(y,!0);const Ae=Ti(y),at=y.subTree;y.subTree=Ae,K(at,Ae,b(at.el),q(at),y,x,U),B.el=Ae.el,ve===null&&Zh(y,Ae.el),H&&Ge(H,x),(ye=B.props&&B.props.onVnodeUpdated)&&Ge(()=>yt(ye,te,B,ae),x)}else{let B;const{el:F,props:H}=I,{bm:te,m:ae,parent:ve}=y,ye=cr(I);if(rn(y,!1),te&&hs(te),!ye&&(B=H&&H.onVnodeBeforeMount)&&yt(B,ve,I),rn(y,!0),F&&ie){const Ae=()=>{y.subTree=Ti(y),ie(F,y.subTree,y,x,null)};ye?I.type.__asyncLoader().then(()=>!y.isUnmounted&&Ae()):Ae()}else{const Ae=y.subTree=Ti(y);K(null,Ae,R,P,y,x,U),I.el=Ae.el}if(ae&&Ge(ae,x),!ye&&(B=H&&H.onVnodeMounted)){const Ae=I;Ge(()=>yt(B,ve,Ae),x)}(I.shapeFlag&256||ve&&cr(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&Ge(y.a,x),y.isMounted=!0,I=R=P=null}},N=y.effect=new bo(S,()=>Ro(O),y.scope),O=y.update=()=>N.run();O.id=y.uid,rn(y,!0),O()},C=(y,I,R)=>{I.component=y;const P=y.vnode.props;y.vnode=I,y.next=null,Cf(y,I.props,P,R),Pf(y,I.children,R),Gn(),Oa(),Yn()},M=(y,I,R,P,x,U,j,S,N=!1)=>{const O=y&&y.children,B=y?y.shapeFlag:0,F=I.children,{patchFlag:H,shapeFlag:te}=I;if(H>0){if(H&128){oe(O,F,R,P,x,U,j,S,N);return}else if(H&256){L(O,F,R,P,x,U,j,S,N);return}}te&8?(B&16&&W(O,x,U),F!==O&&m(R,F)):B&16?te&16?oe(O,F,R,P,x,U,j,S,N):W(O,x,U,!0):(B&8&&m(R,""),te&16&&w(F,R,P,x,U,j,S,N))},L=(y,I,R,P,x,U,j,S,N)=>{y=y||Pn,I=I||Pn;const O=y.length,B=I.length,F=Math.min(O,B);let H;for(H=0;H<F;H++){const te=I[H]=N?Ft(I[H]):vt(I[H]);K(y[H],te,R,null,x,U,j,S,N)}O>B?W(y,x,U,!0,!1,F):w(I,R,P,x,U,j,S,N,F)},oe=(y,I,R,P,x,U,j,S,N)=>{let O=0;const B=I.length;let F=y.length-1,H=B-1;for(;O<=F&&O<=H;){const te=y[O],ae=I[O]=N?Ft(I[O]):vt(I[O]);if(rr(te,ae))K(te,ae,R,null,x,U,j,S,N);else break;O++}for(;O<=F&&O<=H;){const te=y[F],ae=I[H]=N?Ft(I[H]):vt(I[H]);if(rr(te,ae))K(te,ae,R,null,x,U,j,S,N);else break;F--,H--}if(O>F){if(O<=H){const te=H+1,ae=te<B?I[te].el:P;for(;O<=H;)K(null,I[O]=N?Ft(I[O]):vt(I[O]),R,ae,x,U,j,S,N),O++}}else if(O>H)for(;O<=F;)Se(y[O],x,U,!0),O++;else{const te=O,ae=O,ve=new Map;for(O=ae;O<=H;O++){const Ze=I[O]=N?Ft(I[O]):vt(I[O]);Ze.key!=null&&ve.set(Ze.key,O)}let ye,Ae=0;const at=H-ae+1;let Sn=!1,ya=0;const nr=new Array(at);for(O=0;O<at;O++)nr[O]=0;for(O=te;O<=F;O++){const Ze=y[O];if(Ae>=at){Se(Ze,x,U,!0);continue}let mt;if(Ze.key!=null)mt=ve.get(Ze.key);else for(ye=ae;ye<=H;ye++)if(nr[ye-ae]===0&&rr(Ze,I[ye])){mt=ye;break}mt===void 0?Se(Ze,x,U,!0):(nr[mt-ae]=O+1,mt>=ya?ya=mt:Sn=!0,K(Ze,I[mt],R,null,x,U,j,S,N),Ae++)}const _a=Sn?Lf(nr):Pn;for(ye=_a.length-1,O=at-1;O>=0;O--){const Ze=ae+O,mt=I[Ze],va=Ze+1<B?I[Ze+1].el:P;nr[O]===0?K(null,mt,R,va,x,U,j,S,N):Sn&&(ye<0||O!==_a[ye]?pe(mt,R,va,2):ye--)}}},pe=(y,I,R,P,x=null)=>{const{el:U,type:j,transition:S,children:N,shapeFlag:O}=y;if(O&6){pe(y.component.subTree,I,R,P);return}if(O&128){y.suspense.move(I,R,P);return}if(O&64){j.move(y,I,R,ce);return}if(j===it){r(U,I,R);for(let F=0;F<N.length;F++)pe(N[F],I,R,P);r(y.anchor,I,R);return}if(j===gs){J(y,I,R);return}if(P!==2&&O&1&&S)if(P===0)S.beforeEnter(U),r(U,I,R),Ge(()=>S.enter(U),x);else{const{leave:F,delayLeave:H,afterLeave:te}=S,ae=()=>r(U,I,R),ve=()=>{F(U,()=>{ae(),te&&te()})};H?H(U,ae,ve):ve()}else r(U,I,R)},Se=(y,I,R,P=!1,x=!1)=>{const{type:U,props:j,ref:S,children:N,dynamicChildren:O,shapeFlag:B,patchFlag:F,dirs:H}=y;if(S!=null&&Qi(S,null,R,y,!0),B&256){I.ctx.deactivate(y);return}const te=B&1&&H,ae=!cr(y);let ve;if(ae&&(ve=j&&j.onVnodeBeforeUnmount)&&yt(ve,I,y),B&6)D(y.component,R,P);else{if(B&128){y.suspense.unmount(R,P);return}te&&nn(y,null,I,"beforeUnmount"),B&64?y.type.remove(y,I,R,x,ce,P):O&&(U!==it||F>0&&F&64)?W(O,I,R,!1,!0):(U===it&&F&384||!x&&B&16)&&W(N,I,R),P&&Xe(y)}(ae&&(ve=j&&j.onVnodeUnmounted)||te)&&Ge(()=>{ve&&yt(ve,I,y),te&&nn(y,null,I,"unmounted")},R)},Xe=y=>{const{type:I,el:R,anchor:P,transition:x}=y;if(I===it){Tn(R,P);return}if(I===gs){le(y);return}const U=()=>{s(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:j,delayLeave:S}=x,N=()=>j(R,U);S?S(y.el,U,N):N()}else U()},Tn=(y,I)=>{let R;for(;y!==I;)R=A(y),s(y),y=R;s(I)},D=(y,I,R)=>{const{bum:P,scope:x,update:U,subTree:j,um:S}=y;P&&hs(P),x.stop(),U&&(U.active=!1,Se(j,y,I,R)),S&&Ge(S,I),Ge(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},W=(y,I,R,P=!1,x=!1,U=0)=>{for(let j=U;j<y.length;j++)Se(y[j],I,R,P,x)},q=y=>y.shapeFlag&6?q(y.component.subTree):y.shapeFlag&128?y.suspense.next():A(y.anchor||y.el),Q=(y,I,R)=>{y==null?I._vnode&&Se(I._vnode,null,null,!0):K(I._vnode||null,y,I,null,null,null,R),Oa(),Dc(),I._vnode=y},ce={p:K,um:Se,m:pe,r:Xe,mt:p,mc:w,pc:M,pbc:d,n:q,o:t};let be,ie;return e&&([be,ie]=e(ce)),{render:Q,hydrate:be,createApp:Df(Q,be)}}function rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qc(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ft(s[i]),l.el=o.el),n||Qc(o,l)),l.type===ri&&(l.el=o.el)}}function Lf(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $f=t=>t.__isTeleport,it=Symbol(void 0),ri=Symbol(void 0),Xt=Symbol(void 0),gs=Symbol(void 0),dr=[];let ut=null;function Ur(t=!1){dr.push(ut=t?null:[])}function Mf(){dr.pop(),ut=dr[dr.length-1]||null}let Tr=1;function Ua(t){Tr+=t}function Xc(t){return t.dynamicChildren=Tr>0?ut||Pn:null,Mf(),Tr>0&&ut&&ut.push(t),t}function Uf(t,e,n,r,s,i){return Xc(ue(t,e,n,r,s,i,!0))}function si(t,e,n,r,s){return Xc(Ee(t,e,n,r,s,!0))}function Cs(t){return t?t.__v_isVNode===!0:!1}function rr(t,e){return t.type===e.type&&t.key===e.key}const ii="__vInternal",Zc=({key:t})=>t??null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Ve(t)||se(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function ue(t,e=null,n=null,r=0,s=null,i=t===it?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zc(e),ref:e&&ms(e),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return l?(ko(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),Tr>0&&!o&&ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ut.push(c),c}const Ee=Ff;function Ff(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yf)&&(t=Xt),Cs(t)){const l=Un(t,e,!0);return n&&ko(l,n),Tr>0&&!i&&ut&&(l.shapeFlag&6?ut[ut.indexOf(t)]=l:ut.push(l)),l.patchFlag|=-2,l}if(Jf(t)&&(t=t.__vccOpts),e){e=jf(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=mo(l)),we(c)&&(Ec(c)&&!ne(c)&&(c=We({},c)),e.style=go(c))}const o=xe(t)?1:ef(t)?128:$f(t)?64:we(t)?4:se(t)?2:0;return ue(t,e,n,r,s,o,i,!0)}function jf(t){return t?Ec(t)||ii in t?We({},t):t:null}function Un(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?Vf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Zc(l),ref:e&&e.ref?n&&s?ne(s)?s.concat(ms(e)):[s,ms(e)]:ms(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _t(t=" ",e=0){return Ee(ri,null,t,e)}function db(t,e){const n=Ee(gs,null,t);return n.staticCount=e,n}function hb(t="",e=!1){return e?(Ur(),si(Xt,null,t)):Ee(Xt,null,t)}function vt(t){return t==null||typeof t=="boolean"?Ee(Xt):ne(t)?Ee(it,null,t.slice()):typeof t=="object"?Ft(t):Ee(ri,null,String(t))}function Ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function ko(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ko(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ii in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),r&64?(n=16,e=[_t(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mo([e.class,r.class]));else if(s==="style")e.style=go([e.style,r.style]);else if(Ys(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yt(t,e,n,r=null){ht(t,e,7,[n,r])}const Bf=Jc();let qf=0;function Hf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bf,i={uid:qf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Nc(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yh.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const Fn=t=>{Re=t,t.scope.on()},fn=()=>{Re&&Re.scope.off(),Re=null};function eu(t){return t.vnode.shapeFlag&4}let Sr=!1;function zf(t,e=!1){Sr=e;const{props:n,children:r}=t.vnode,s=eu(t);Af(t,n,s,e),Of(t,r);const i=s?Wf(t,e):void 0;return Sr=!1,i}function Wf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ic(new Proxy(t.ctx,wf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Gf(t):null;Fn(t),Gn();const i=Wt(r,t,0,[t.props,s]);if(Yn(),fn(),lc(i)){if(i.then(fn,fn),e)return i.then(o=>{Fa(t,o,e)}).catch(o=>{ei(o,t,0)});t.asyncDep=i}else Fa(t,i,e)}else tu(t,e)}function Fa(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Cc(e)),tu(t,n)}let ja;function tu(t,e,n){const r=t.type;if(!t.render){if(!e&&ja&&!r.render){const s=r.template||Oo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=We(We({isCustomElement:i,delimiters:l},o),c);r.render=ja(s,h)}}t.render=r.render||dt}Fn(t),Gn(),bf(t),Yn(),fn()}function Kf(t){return new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}})}function Gf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Kf(t))},slots:t.slots,emit:t.emit,expose:e}}function oi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cc(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)},has(e,n){return n in e||n in ur}}))}function Yf(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Jf(t){return se(t)&&"__vccOpts"in t}const ot=(t,e)=>qh(t,e,Sr);function nu(t,e,n){const r=arguments.length;return r===2?we(e)&&!ne(e)?Cs(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cs(n)&&(n=[n]),Ee(t,e,n))}const Qf=Symbol(""),Xf=()=>Pt(Qf),Zf="3.2.47",ep="http://www.w3.org/2000/svg",ln=typeof document<"u"?document:null,Va=ln&&ln.createElement("template"),tp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ln.createElementNS(ep,t):ln.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Va.innerHTML=r?`<svg>${t}</svg>`:t;const l=Va.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function np(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rp(t,e,n){const r=t.style,s=xe(n);if(n&&!s){if(e&&!xe(e))for(const i in e)n[i]==null&&Xi(r,i,"");for(const i in n)Xi(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ba=/\s*!important$/;function Xi(t,e,n){if(ne(n))n.forEach(r=>Xi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sp(t,e);Ba.test(n)?t.setProperty(Kn(r),n.replace(Ba,""),"important"):t[r]=n}}const qa=["Webkit","Moz","ms"],Ai={};function sp(t,e){const n=Ai[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Ai[e]=r;r=Xs(r);for(let s=0;s<qa.length;s++){const i=qa[s]+r;if(i in t)return Ai[e]=i}return e}const Ha="http://www.w3.org/1999/xlink";function ip(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ha,e.slice(6,e.length)):t.setAttributeNS(Ha,e,n);else{const i=Xd(e);n==null||i&&!ic(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function op(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ic(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function ap(t,e,n,r){t.removeEventListener(e,n,r)}function lp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=cp(e);if(r){const h=i[e]=hp(r,s);cn(t,l,h,c)}else o&&(ap(t,l,o,c),i[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function cp(t){let e;if(za.test(t)){e={};let r;for(;r=t.match(za);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kn(t.slice(2)),e]}let Ci=0;const up=Promise.resolve(),dp=()=>Ci||(up.then(()=>Ci=0),Ci=Date.now());function hp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ht(fp(r,n.value),e,5,[r])};return n.value=t,n.attached=dp(),n}function fp(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wa=/^on[a-z]/,pp=(t,e,n,r,s=!1,i,o,l,c)=>{e==="class"?np(t,r,s):e==="style"?rp(t,n,r):Ys(e)?yo(e)||lp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gp(t,e,r,s))?op(t,e,r,i,o,l,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ip(t,e,r,s))};function gp(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wa.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wa.test(e)&&xe(n)?!1:e in t}const Rs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>hs(e,n):e};function mp(t){t.target.composing=!0}function Ka(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Rs(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Is(l)),t._assign(l)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",mp),cn(t,"compositionend",Ka),cn(t,"change",Ka))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Rs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Is(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Js(e);cn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Is(Os(o)):Os(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Rs(r)},mounted(t,{value:e}){Ga(t,e)},beforeUpdate(t,e,n){t._assign=Rs(n)},updated(t,{value:e}){Ga(t,e)}};function Ga(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!Js(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Os(i);if(n)ne(e)?i.selected=eh(e,o)>-1:i.selected=e.has(o);else if(Gs(Os(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Os(t){return"_value"in t?t._value:t.value}const gb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):sr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),sr(t,!0),r.enter(t)):r.leave(t,()=>{sr(t,!1)}):sr(t,e))},beforeUnmount(t,{value:e}){sr(t,e)}};function sr(t,e){t.style.display=e?t._vod:"none"}const yp=We({patchProp:pp},tp);let Ya;function _p(){return Ya||(Ya=xf(yp))}const vp=(...t)=>{const e=_p().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wp(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wp(t){return xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function bp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Ri(t,e){const n={};for(const r in e){const s=e[r];n[r]=ft(s)?s.map(t):t(s)}return n}const hr=()=>{},ft=Array.isArray,Ep=/\/$/,Ip=t=>t.replace(Ep,"");function Oi(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Cp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Tp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ja(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jn(e.matched[r],n.matched[s])&&ru(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ru(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ap(t[n],e[n]))return!1;return!0}function Ap(t,e){return ft(t)?Qa(t,e):ft(e)?Qa(e,t):t===e}function Qa(t,e){return ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ar;(function(t){t.pop="pop",t.push="push"})(Ar||(Ar={}));var fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fr||(fr={}));function Rp(t){if(!t)if(Cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ip(t)}const Op=/^[^#]+#/;function Pp(t,e){return t.replace(Op,"#")+e}function kp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ai=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xa(t,e){return(history.state?history.state.position-e:-1)+t}const Zi=new Map;function xp(t,e){Zi.set(t,e)}function Np(t){const e=Zi.get(t);return Zi.delete(t),e}let Lp=()=>location.protocol+"//"+location.host;function su(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ja(c,"")}return Ja(n,t)+r+s}function $p(t,e,n,r){let s=[],i=[],o=null;const l=({state:A})=>{const k=su(t,location),V=n.value,K=e.value;let X=0;if(A){if(n.value=k,e.value=A,o&&o===V){o=null;return}X=K?A.position-K.position:0}else r(k);s.forEach(G=>{G(n.value,V,{delta:X,type:Ar.pop,direction:X?X>0?fr.forward:fr.back:fr.unknown})})};function c(){o=n.value}function h(A){s.push(A);const k=()=>{const V=s.indexOf(A);V>-1&&s.splice(V,1)};return i.push(k),k}function m(){const{history:A}=window;A.state&&A.replaceState(me({},A.state,{scroll:ai()}),"")}function b(){for(const A of i)A();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",m),{pauseListeners:c,listen:h,destroy:b}}function Za(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ai():null}}function Mp(t){const{history:e,location:n}=window,r={value:su(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,m){const b=t.indexOf("#"),A=b>-1?(n.host&&document.querySelector("base")?t:t.slice(b))+c:Lp()+t+c;try{e[m?"replaceState":"pushState"](h,"",A),s.value=h}catch(k){console.error(k),n[m?"replace":"assign"](A)}}function o(c,h){const m=me({},e.state,Za(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,m,!0),r.value=c}function l(c,h){const m=me({},s.value,e.state,{forward:c,scroll:ai()});i(m.current,m,!0);const b=me({},Za(r.value,c,null),{position:m.position+1},h);i(c,b,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Up(t){t=Rp(t);const e=Mp(t),n=$p(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:Pp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fp(t){return typeof t=="string"||t&&typeof t=="object"}function iu(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ou=Symbol("");var el;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(el||(el={}));function Vn(t,e){return me(new Error,{type:t,[ou]:!0},e)}function At(t,e){return t instanceof Error&&ou in t&&(e==null||!!(t.type&e))}const tl="[^/]+?",jp={sensitive:!1,strict:!1,start:!0,end:!0},Vp=/[.+*?^${}()[\]/\\]/g;function Bp(t,e){const n=me({},jp,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const m=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let b=0;b<h.length;b++){const A=h[b];let k=40+(n.sensitive?.25:0);if(A.type===0)b||(s+="/"),s+=A.value.replace(Vp,"\\$&"),k+=40;else if(A.type===1){const{value:V,repeatable:K,optional:X,regexp:G}=A;i.push({name:V,repeatable:K,optional:X});const ee=G||tl;if(ee!==tl){k+=10;try{new RegExp(`(${ee})`)}catch(le){throw new Error(`Invalid custom RegExp for param "${V}" (${ee}): `+le.message)}}let J=K?`((?:${ee})(?:/(?:${ee}))*)`:`(${ee})`;b||(J=X&&h.length<2?`(?:/${J})`:"/"+J),X&&(J+="?"),s+=J,k+=20,X&&(k+=-8),K&&(k+=-20),ee===".*"&&(k+=-50)}m.push(k)}r.push(m)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const m=h.match(o),b={};if(!m)return null;for(let A=1;A<m.length;A++){const k=m[A]||"",V=i[A-1];b[V.name]=k&&V.repeatable?k.split("/"):k}return b}function c(h){let m="",b=!1;for(const A of t){(!b||!m.endsWith("/"))&&(m+="/"),b=!1;for(const k of A)if(k.type===0)m+=k.value;else if(k.type===1){const{value:V,repeatable:K,optional:X}=k,G=V in h?h[V]:"";if(ft(G)&&!K)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const ee=ft(G)?G.join("/"):G;if(!ee)if(X)A.length<2&&(m.endsWith("/")?m=m.slice(0,-1):b=!0);else throw new Error(`Missing required param "${V}"`);m+=ee}}return m||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function qp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=qp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nl(r))return 1;if(nl(s))return-1}return s.length-r.length}function nl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zp={type:0,value:""},Wp=/[a-zA-Z0-9_]/;function Kp(t){if(!t)return[[]];if(t==="/")return[[zp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(k){throw new Error(`ERR (${n})/"${h}": ${k}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",m="";function b(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:m,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function A(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&b(),o()):c===":"?(b(),n=1):A();break;case 4:A(),n=r;break;case 1:c==="("?n=2:Wp.test(c)?A():(b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+c:n=3:m+=c;break;case 3:b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,m="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),b(),o(),s}function Gp(t,e,n){const r=Bp(Kp(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yp(t,e){const n=[],r=new Map;e=il({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,b,A){const k=!A,V=Jp(m);V.aliasOf=A&&A.record;const K=il(e,m),X=[V];if("alias"in m){const J=typeof m.alias=="string"?[m.alias]:m.alias;for(const le of J)X.push(me({},V,{components:A?A.record.components:V.components,path:le,aliasOf:A?A.record:V}))}let G,ee;for(const J of X){const{path:le}=J;if(b&&le[0]!=="/"){const Te=b.record.path,z=Te[Te.length-1]==="/"?"":"/";J.path=b.record.path+(le&&z+le)}if(G=Gp(J,b,K),A?A.alias.push(G):(ee=ee||G,ee!==G&&ee.alias.push(G),k&&m.name&&!sl(G)&&o(m.name)),V.children){const Te=V.children;for(let z=0;z<Te.length;z++)i(Te[z],G,A&&A.children[z])}A=A||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&c(G)}return ee?()=>{o(ee)}:hr}function o(m){if(iu(m)){const b=r.get(m);b&&(r.delete(m),n.splice(n.indexOf(b),1),b.children.forEach(o),b.alias.forEach(o))}else{const b=n.indexOf(m);b>-1&&(n.splice(b,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function l(){return n}function c(m){let b=0;for(;b<n.length&&Hp(m,n[b])>=0&&(m.record.path!==n[b].record.path||!au(m,n[b]));)b++;n.splice(b,0,m),m.record.name&&!sl(m)&&r.set(m.record.name,m)}function h(m,b){let A,k={},V,K;if("name"in m&&m.name){if(A=r.get(m.name),!A)throw Vn(1,{location:m});K=A.record.name,k=me(rl(b.params,A.keys.filter(ee=>!ee.optional).map(ee=>ee.name)),m.params&&rl(m.params,A.keys.map(ee=>ee.name))),V=A.stringify(k)}else if("path"in m)V=m.path,A=n.find(ee=>ee.re.test(V)),A&&(k=A.parse(V),K=A.record.name);else{if(A=b.name?r.get(b.name):n.find(ee=>ee.re.test(b.path)),!A)throw Vn(1,{location:m,currentLocation:b});K=A.record.name,k=me({},b.params,m.params),V=A.stringify(k)}const X=[];let G=A;for(;G;)X.unshift(G.record),G=G.parent;return{name:K,path:V,params:k,matched:X,meta:Xp(X)}}return t.forEach(m=>i(m)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function rl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Qp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function sl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xp(t){return t.reduce((e,n)=>me(e,n.meta),{})}function il(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function au(t,e){return e.children.some(n=>n===t||au(t,n))}const lu=/#/g,Zp=/&/g,eg=/\//g,tg=/=/g,ng=/\?/g,cu=/\+/g,rg=/%5B/g,sg=/%5D/g,uu=/%5E/g,ig=/%60/g,du=/%7B/g,og=/%7C/g,hu=/%7D/g,ag=/%20/g;function Do(t){return encodeURI(""+t).replace(og,"|").replace(rg,"[").replace(sg,"]")}function lg(t){return Do(t).replace(du,"{").replace(hu,"}").replace(uu,"^")}function eo(t){return Do(t).replace(cu,"%2B").replace(ag,"+").replace(lu,"%23").replace(Zp,"%26").replace(ig,"`").replace(du,"{").replace(hu,"}").replace(uu,"^")}function cg(t){return eo(t).replace(tg,"%3D")}function ug(t){return Do(t).replace(lu,"%23").replace(ng,"%3F")}function dg(t){return t==null?"":ug(t).replace(eg,"%2F")}function Ps(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cu," "),o=i.indexOf("="),l=Ps(o<0?i:i.slice(0,o)),c=o<0?null:Ps(i.slice(o+1));if(l in e){let h=e[l];ft(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ol(t){let e="";for(let n in t){const r=t[n];if(n=cg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(r)?r.map(i=>i&&eo(i)):[r&&eo(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pg=Symbol(""),al=Symbol(""),xo=Symbol(""),fu=Symbol(""),to=Symbol("");function ir(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=b=>{b===!1?l(Vn(4,{from:n,to:e})):b instanceof Error?l(b):Fp(b)?l(Vn(2,{from:e,to:b})):(i&&r.enterCallbacks[s]===i&&typeof b=="function"&&i.push(b),o())},h=t.call(r&&r.instances[s],e,n,c);let m=Promise.resolve(h);t.length<3&&(m=m.then(c)),m.catch(b=>l(b))})}function Pi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gg(l)){const h=(l.__vccOpts||l)[e];h&&s.push(jt(h,n,r,i,o))}else{let c=l();s.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const m=bp(h)?h.default:h;i.components[o]=m;const A=(m.__vccOpts||m)[e];return A&&jt(A,n,r,i,o)()}))}}return s}function gg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ll(t){const e=Pt(xo),n=Pt(fu),r=ot(()=>e.resolve(hn(t.to))),s=ot(()=>{const{matched:c}=r.value,{length:h}=c,m=c[h-1],b=n.matched;if(!m||!b.length)return-1;const A=b.findIndex(jn.bind(null,m));if(A>-1)return A;const k=cl(c[h-2]);return h>1&&cl(m)===k&&b[b.length-1].path!==k?b.findIndex(jn.bind(null,c[h-2])):A}),i=ot(()=>s.value>-1&&vg(n.params,r.value.params)),o=ot(()=>s.value>-1&&s.value===n.matched.length-1&&ru(n.params,r.value.params));function l(c={}){return _g(c)?e[hn(t.replace)?"replace":"push"](hn(t.to)).catch(hr):Promise.resolve()}return{route:r,href:ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const mg=Uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ll,setup(t,{slots:e}){const n=Mr(ll(t)),{options:r}=Pt(xo),s=ot(()=>({[ul(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ul(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yg=mg;function _g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function cl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ul=(t,e,n)=>t??e??n,wg=Uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pt(to),s=ot(()=>t.route||r.value),i=Pt(al,0),o=ot(()=>{let h=hn(i);const{matched:m}=s.value;let b;for(;(b=m[h])&&!b.components;)h++;return h}),l=ot(()=>s.value.matched[o.value]);fs(al,ot(()=>o.value+1)),fs(pg,l),fs(to,s);const c=Uh();return ps(()=>[c.value,l.value,t.name],([h,m,b],[A,k,V])=>{m&&(m.instances[b]=h,k&&k!==m&&h&&h===A&&(m.leaveGuards.size||(m.leaveGuards=k.leaveGuards),m.updateGuards.size||(m.updateGuards=k.updateGuards))),h&&m&&(!k||!jn(m,k)||!A)&&(m.enterCallbacks[b]||[]).forEach(K=>K(h))},{flush:"post"}),()=>{const h=s.value,m=t.name,b=l.value,A=b&&b.components[m];if(!A)return dl(n.default,{Component:A,route:h});const k=b.props[m],V=k?k===!0?h.params:typeof k=="function"?k(h):k:null,X=nu(A,me({},V,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(b.instances[m]=null)},ref:c}));return dl(n.default,{Component:X,route:h})||X}}});function dl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pu=wg;function bg(t){const e=Yp(t.routes,t),n=t.parseQuery||hg,r=t.stringifyQuery||ol,s=t.history,i=ir(),o=ir(),l=ir(),c=Fh(Mt);let h=Mt;Cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=Ri.bind(null,D=>""+D),b=Ri.bind(null,dg),A=Ri.bind(null,Ps);function k(D,W){let q,Q;return iu(D)?(q=e.getRecordMatcher(D),Q=W):Q=D,e.addRoute(Q,q)}function V(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function K(){return e.getRoutes().map(D=>D.record)}function X(D){return!!e.getRecordMatcher(D)}function G(D,W){if(W=me({},W||c.value),typeof D=="string"){const y=Oi(n,D,W.path),I=e.resolve({path:y.path},W),R=s.createHref(y.fullPath);return me(y,I,{params:A(I.params),hash:Ps(y.hash),redirectedFrom:void 0,href:R})}let q;if("path"in D)q=me({},D,{path:Oi(n,D.path,W.path).path});else{const y=me({},D.params);for(const I in y)y[I]==null&&delete y[I];q=me({},D,{params:b(D.params)}),W.params=b(W.params)}const Q=e.resolve(q,W),ce=D.hash||"";Q.params=m(A(Q.params));const be=Tp(r,me({},D,{hash:lg(ce),path:Q.path})),ie=s.createHref(be);return me({fullPath:be,hash:ce,query:r===ol?fg(D.query):D.query||{}},Q,{redirectedFrom:void 0,href:ie})}function ee(D){return typeof D=="string"?Oi(n,D,c.value.path):me({},D)}function J(D,W){if(h!==D)return Vn(8,{from:W,to:D})}function le(D){return v(D)}function Te(D){return le(me(ee(D),{replace:!0}))}function z(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let Q=typeof q=="function"?q(D):q;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=ee(Q):{path:Q},Q.params={}),me({query:D.query,hash:D.hash,params:"path"in Q?{}:D.params},Q)}}function v(D,W){const q=h=G(D),Q=c.value,ce=D.state,be=D.force,ie=D.replace===!0,y=z(q);if(y)return v(me(ee(y),{state:typeof y=="object"?me({},ce,y.state):ce,force:be,replace:ie}),W||q);const I=q;I.redirectedFrom=W;let R;return!be&&Sp(r,Q,q)&&(R=Vn(16,{to:I,from:Q}),oe(Q,Q,!0,!1)),(R?Promise.resolve(R):g(I,Q)).catch(P=>At(P)?At(P,2)?P:L(P):C(P,I,Q)).then(P=>{if(P){if(At(P,2))return v(me({replace:ie},ee(P.to),{state:typeof P.to=="object"?me({},ce,P.to.state):ce,force:be}),W||I)}else P=u(I,Q,!0,ie,ce);return d(I,Q,P),P})}function w(D,W){const q=J(D,W);return q?Promise.reject(q):Promise.resolve()}function g(D,W){let q;const[Q,ce,be]=Eg(D,W);q=Pi(Q.reverse(),"beforeRouteLeave",D,W);for(const y of Q)y.leaveGuards.forEach(I=>{q.push(jt(I,D,W))});const ie=w.bind(null,D,W);return q.push(ie),An(q).then(()=>{q=[];for(const y of i.list())q.push(jt(y,D,W));return q.push(ie),An(q)}).then(()=>{q=Pi(ce,"beforeRouteUpdate",D,W);for(const y of ce)y.updateGuards.forEach(I=>{q.push(jt(I,D,W))});return q.push(ie),An(q)}).then(()=>{q=[];for(const y of D.matched)if(y.beforeEnter&&!W.matched.includes(y))if(ft(y.beforeEnter))for(const I of y.beforeEnter)q.push(jt(I,D,W));else q.push(jt(y.beforeEnter,D,W));return q.push(ie),An(q)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),q=Pi(be,"beforeRouteEnter",D,W),q.push(ie),An(q))).then(()=>{q=[];for(const y of o.list())q.push(jt(y,D,W));return q.push(ie),An(q)}).catch(y=>At(y,8)?y:Promise.reject(y))}function d(D,W,q){for(const Q of l.list())Q(D,W,q)}function u(D,W,q,Q,ce){const be=J(D,W);if(be)return be;const ie=W===Mt,y=Cn?history.state:{};q&&(Q||ie?s.replace(D.fullPath,me({scroll:ie&&y&&y.scroll},ce)):s.push(D.fullPath,ce)),c.value=D,oe(D,W,q,ie),L()}let a;function f(){a||(a=s.listen((D,W,q)=>{if(!Tn.listening)return;const Q=G(D),ce=z(Q);if(ce){v(me(ce,{replace:!0}),Q).catch(hr);return}h=Q;const be=c.value;Cn&&xp(Xa(be.fullPath,q.delta),ai()),g(Q,be).catch(ie=>At(ie,12)?ie:At(ie,2)?(v(ie.to,Q).then(y=>{At(y,20)&&!q.delta&&q.type===Ar.pop&&s.go(-1,!1)}).catch(hr),Promise.reject()):(q.delta&&s.go(-q.delta,!1),C(ie,Q,be))).then(ie=>{ie=ie||u(Q,be,!1),ie&&(q.delta&&!At(ie,8)?s.go(-q.delta,!1):q.type===Ar.pop&&At(ie,20)&&s.go(-1,!1)),d(Q,be,ie)}).catch(hr)}))}let p=ir(),T=ir(),E;function C(D,W,q){L(D);const Q=T.list();return Q.length?Q.forEach(ce=>ce(D,W,q)):console.error(D),Promise.reject(D)}function M(){return E&&c.value!==Mt?Promise.resolve():new Promise((D,W)=>{p.add([D,W])})}function L(D){return E||(E=!D,f(),p.list().forEach(([W,q])=>D?q(D):W()),p.reset()),D}function oe(D,W,q,Q){const{scrollBehavior:ce}=t;if(!Cn||!ce)return Promise.resolve();const be=!q&&Np(Xa(D.fullPath,0))||(Q||!q)&&history.state&&history.state.scroll||null;return Pc().then(()=>ce(D,W,be)).then(ie=>ie&&Dp(ie)).catch(ie=>C(ie,D,W))}const pe=D=>s.go(D);let Se;const Xe=new Set,Tn={currentRoute:c,listening:!0,addRoute:k,removeRoute:V,hasRoute:X,getRoutes:K,resolve:G,options:t,push:le,replace:Te,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:T.add,isReady:M,install(D){const W=this;D.component("RouterLink",yg),D.component("RouterView",pu),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(c)}),Cn&&!Se&&c.value===Mt&&(Se=!0,le(s.location).catch(ce=>{}));const q={};for(const ce in Mt)q[ce]=ot(()=>c.value[ce]);D.provide(xo,W),D.provide(fu,Mr(q)),D.provide(to,c);const Q=D.unmount;Xe.add(D),D.unmount=function(){Xe.delete(D),Xe.size<1&&(h=Mt,a&&a(),a=null,c.value=Mt,Se=!1,E=!1),Q()}}};return Tn}function An(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Eg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>jn(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>jn(h,c))||s.push(c))}return[n,r,s]}const Ig={__name:"App",setup(t){return(e,n)=>(Ur(),si(hn(pu)))}},Tg="modulepreload",Sg=function(t){return"/aljihad/"+t},hl={},He=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Sg(i),i in hl)return;hl[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const b=s[m];if(b.href===i&&(!o||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":Tg,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((m,b)=>{h.addEventListener("load",m),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Ag=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Cg={},Rg={class:"navbar navbar-expand-lg navbar-light bg-light"},Og={class:"container-fluid"},Pg=ue("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[ue("span",{class:"navbar-toggler-icon"})],-1),kg={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},Dg={class:"navbar-nav me-auto mb-2 mb-lg-0"},xg={class:"nav-item"},Ng={class:"nav-item"},Lg={class:"nav-item"},$g={class:"nav-item"},Mg={class:"nav-item"},Ug={class:"nav-item"},Fg={class:"navbar-nav me-auto mb-2 mb-lg-0"},jg={class:"nav-item dropdown"},Vg=ue("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),Bg={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},qg=ue("li",null,[ue("a",{class:"dropdown-item",href:"#"},"Profile Setting")],-1),Hg=ue("li",null,[ue("hr",{class:"dropdown-divider"})],-1),zg={class:"d-flex"},Wg={class:"navbar-nav me-auto mb-2 mb-lg-0"},Kg={class:"nav-item dropdown btn btn-outline-success"},Gg=ue("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),Yg={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function Jg(t,e){const n=mf("RouterLink");return Ur(),Uf(it,null,[ue("nav",Rg,[ue("div",Og,[Ee(n,{class:"navbar-brand",to:"/"},{default:st(()=>[ue("h3",null,oc(this.$appShortName),1)]),_:1}),Pg,ue("div",kg,[ue("ul",Dg,[ue("li",xg,[Ee(n,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Invoices")]),_:1})]),ue("li",Ng,[Ee(n,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Customers")]),_:1})]),ue("li",Lg,[Ee(n,{to:"/products",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Products")]),_:1})]),ue("li",$g,[Ee(n,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Payments")]),_:1})]),ue("li",Mg,[Ee(n,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Metal Rate")]),_:1})]),ue("li",Ug,[ue("ul",Fg,[ue("li",jg,[Vg,ue("ul",Bg,[qg,ue("li",null,[Ee(n,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:st(()=>[_t(" General Settings")]),_:1})]),Hg,ue("li",null,[Ee(n,{to:"/logout",class:"nav-link active","aria-current":"page"},{default:st(()=>[_t("Logout ")]),_:1})])])])])])]),ue("form",zg,[ue("ul",Wg,[ue("li",Kg,[Gg,ue("ul",Yg,[ue("li",null,[Ee(n,{to:"/invoice",class:"dropdown-item"},{default:st(()=>[_t(" Invoice")]),_:1})]),ue("li",null,[Ee(n,{to:"/payment",class:"dropdown-item"},{default:st(()=>[_t(" Payment")]),_:1})])])])])])])])]),vf(t.$slots,"default")],64)}const Qg=Ag(Cg,[["render",Jg]]),Xg={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},Zg={class:"display-4 fw-normal"},em=ue("p",{class:"fs-5 text-body-secondary"},null,-1),tm={mounted:function(){}},nm=Object.assign(tm,{__name:"HomeView",setup(t){return(e,n)=>(Ur(),si(Qg,null,{default:st(()=>[ue("div",Xg,[ue("h2",Zg,"Welcome to "+oc(e.$appname),1),em])]),_:1}))}}),gu=bg({history:Up("/aljihad/"),routes:[{path:"/",name:"home",component:nm},{path:"/invoice",name:"invoice",component:()=>He(()=>import("./Invoice-4f832a2a.js"),["assets/Invoice-4f832a2a.js","assets/InvoiceItemTable-9aad2504.js","assets/CAlert-e46368a8.js","assets/CustomerPicker-581c1e81.js"])},{path:"/invoices/:invoicenumber",name:"invoicereport",component:()=>He(()=>import("./InvoiceReport-1f7d72fb.js"),["assets/InvoiceReport-1f7d72fb.js","assets/InvoiceItemTable-9aad2504.js","assets/CAlert-e46368a8.js"])},{path:"/login",name:"login",component:()=>He(()=>import("./Login-9d2330ca.js"),["assets/Login-9d2330ca.js","assets/CAlert-e46368a8.js"])},{path:"/logout",name:"logout",component:()=>He(()=>import("./Logout-d0081e6c.js"),["assets/Logout-d0081e6c.js","assets/CAlert-e46368a8.js"])},{path:"/customers",name:"customers",component:()=>He(()=>import("./Customers-9db8f692.js"),["assets/Customers-9db8f692.js","assets/DynamicTable-7e2b855c.js","assets/DynamicDialog-ef7c559b.js","assets/CAlert-e46368a8.js"])},{path:"/users",name:"users",component:()=>He(()=>import("./Users-9e0c2884.js"),["assets/Users-9e0c2884.js","assets/DynamicTable-7e2b855c.js","assets/DynamicDialog-ef7c559b.js","assets/CAlert-e46368a8.js"])},{path:"/invoices",name:"invoices",component:()=>He(()=>import("./Invoices-51b398f1.js"),["assets/Invoices-51b398f1.js","assets/CAlert-e46368a8.js","assets/DynamicTable-7e2b855c.js"])},{path:"/rates",name:"rates",component:()=>He(()=>import("./Rates-16c9d0b7.js"),["assets/Rates-16c9d0b7.js","assets/DynamicTable-7e2b855c.js","assets/CAlert-e46368a8.js"])},{path:"/products",name:"products",component:()=>He(()=>import("./Products-1a5d5e9b.js"),["assets/Products-1a5d5e9b.js","assets/DynamicTable-7e2b855c.js","assets/DynamicDialog-ef7c559b.js","assets/CAlert-e46368a8.js"])},{path:"/settings/application",name:"applicationsettings",component:()=>He(()=>import("./Applicationsettings-a925b881.js"),["assets/Applicationsettings-a925b881.js","assets/CAlert-e46368a8.js"])},{path:"/settings/product",name:"productSettings",component:()=>He(()=>import("./ProductSettings-47e10b98.js"),["assets/ProductSettings-47e10b98.js","assets/DynamicTable-7e2b855c.js","assets/DynamicDialog-ef7c559b.js","assets/CAlert-e46368a8.js"])},{path:"/settings/customer",name:"customerSettings",component:()=>He(()=>import("./CustomerSettings-7544ba10.js"),["assets/CustomerSettings-7544ba10.js","assets/DynamicTable-7e2b855c.js","assets/DynamicDialog-ef7c559b.js","assets/CAlert-e46368a8.js"])},{path:"/payments",name:"payments",component:()=>He(()=>import("./Payments-fc09bcf0.js"),["assets/Payments-fc09bcf0.js","assets/DynamicTable-7e2b855c.js","assets/CAlert-e46368a8.js"])},{path:"/payment",name:"payment",component:()=>He(()=>import("./Payment-0614e71a.js"),["assets/Payment-0614e71a.js","assets/CustomerPicker-581c1e81.js","assets/CAlert-e46368a8.js"])},{path:"/payments/:receiptNumber",name:"paymentReport",component:()=>He(()=>import("./PaymentReport-8cddfd32.js"),["assets/PaymentReport-8cddfd32.js","assets/CAlert-e46368a8.js"])}]});class Bn{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,n,r){e.alertmode=r,e.alertmsg=n,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const n=e.split(" ");for(let r=0;r<n.length;r++)n[r]=Bn.capitalizeFirstLetter(n[r]);return n.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var n=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var l=e.split(""),c="",h=0,m=0;m<o;m++)(o-m)%3==2?l[m]=="1"?(c+=s[Number(l[m+1])]+" ",m++,h=1):l[m]!=0&&(c+=i[l[m]-2]+" ",h=1):l[m]!=0&&(c+=r[l[m]]+" ",(o-m)%3==0&&(c+="hundred "),h=1),(o-m)%3==1&&(h&&(c+=n[(o-m-1)/3]+" "),h=0);if(o!=e.length){var b=e.length;c+="point ";for(var m=o+1;m<b;m++)c+=r[l[m]]+" "}return Bn.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class mb{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateQutationNumber(){return this.generateId("TMP")}}/**
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
 */const mu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,m=i>>2,b=(i&3)<<4|l>>4;let A=(l&15)<<2|h>>6,k=h&63;c||(k=64,o||(A=64)),r.push(n[m],n[b],n[A],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||b==null)throw new sm;const A=i<<2|l>>4;if(r.push(A),h!==64){const k=l<<4&240|h>>2;if(r.push(k),b!==64){const V=h<<6&192|b;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const im=function(t){const e=mu(t);return yu.encodeByteArray(e,!0)},ks=function(t){return im(t).replace(/\./g,"")},_u=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const am=()=>om().__FIREBASE_DEFAULTS__,lm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},No=()=>{try{return am()||lm()||cm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vu=t=>{var e,n;return(n=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},um=t=>{const e=vu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wu=()=>{var t;return(t=No())===null||t===void 0?void 0:t.config},bu=t=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ks(JSON.stringify(n)),ks(JSON.stringify(o)),l].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function pm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function _m(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vm="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vm,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wm(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,l,r)}}function wm(t,e){return t.replace(bm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bm=/\{\$([^}]+)}/g;function Em(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fl(i)&&fl(o)){if(!Ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fl(t){return t!==null&&typeof t=="object"}/**
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
 */function jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ar(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Im(t,e){const n=new Tm(t,e);return n.subscribe.bind(n)}class Tm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ki),s.error===void 0&&(s.error=ki),s.complete===void 0&&(s.complete=ki);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ki(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rm(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cm(t){return t===on?void 0:t}function Rm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Pm={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},km=ge.INFO,Dm={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},xm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=km,this._logHandler=xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Nm=(t,e)=>e.some(n=>t instanceof n);let pl,gl;function Lm(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $m(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,no=new WeakMap,Iu=new WeakMap,Di=new WeakMap,$o=new WeakMap;function Mm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eu.set(n,t)}).catch(()=>{}),$o.set(e,t),e}function Um(t){if(no.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});no.set(t,e)}let ro={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return no.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fm(t){ro=t(ro)}function jm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xi(this),e,...n);return Iu.set(r,e.sort?e.sort():[e]),Kt(r)}:$m().includes(t)?function(...e){return t.apply(xi(this),e),Kt(Eu.get(this))}:function(...e){return Kt(t.apply(xi(this),e))}}function Vm(t){return typeof t=="function"?jm(t):(t instanceof IDBTransaction&&Um(t),Nm(t,Lm())?new Proxy(t,ro):t)}function Kt(t){if(t instanceof IDBRequest)return Mm(t);if(Di.has(t))return Di.get(t);const e=Vm(t);return e!==t&&(Di.set(t,e),$o.set(e,t)),e}const xi=t=>$o.get(t);function Bm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qm=["get","getKey","getAll","getAllKeys","count"],Hm=["put","add","delete","clear"],Ni=new Map;function ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qm.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ni.set(e,i),i}Fm(t=>({...t,get:(e,n,r)=>ml(e,n)||t.get(e,n,r),has:(e,n)=>!!ml(e,n)||t.has(e,n)}));/**
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
 */class zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",yl="0.9.10";/**
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
 */const mn=new Lo("@firebase/app"),Km="@firebase/app-compat",Gm="@firebase/analytics-compat",Ym="@firebase/analytics",Jm="@firebase/app-check-compat",Qm="@firebase/app-check",Xm="@firebase/auth",Zm="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/database-compat",ny="@firebase/functions",ry="@firebase/functions-compat",sy="@firebase/installations",iy="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",ly="@firebase/performance",cy="@firebase/performance-compat",uy="@firebase/remote-config",dy="@firebase/remote-config-compat",hy="@firebase/storage",fy="@firebase/storage-compat",py="@firebase/firestore",gy="@firebase/firestore-compat",my="firebase",yy="9.22.0";/**
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
 */const io="[DEFAULT]",_y={[so]:"fire-core",[Km]:"fire-core-compat",[Ym]:"fire-analytics",[Gm]:"fire-analytics-compat",[Qm]:"fire-app-check",[Jm]:"fire-app-check-compat",[Xm]:"fire-auth",[Zm]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[ry]:"fire-fn-compat",[sy]:"fire-iid",[iy]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[ly]:"fire-perf",[cy]:"fire-perf-compat",[uy]:"fire-rc",[dy]:"fire-rc-compat",[hy]:"fire-gcs",[fy]:"fire-gcs-compat",[py]:"fire-fst",[gy]:"fire-fst-compat","fire-js":"fire-js",[my]:"fire-js-all"};/**
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
 */const xs=new Map,oo=new Map;function vy(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(oo.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;oo.set(e,t);for(const n of xs.values())vy(n,t);return!0}function Mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new Fr("app","Firebase",wy);/**
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
 */class by{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=yy;function Tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:io,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(n||(n=wu()),!n)throw Gt.create("no-options");const i=xs.get(s);if(i){if(Ds(n,i.options)&&Ds(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const o=new Om(s);for(const c of oo.values())o.addComponent(c);const l=new by(n,r,o);return xs.set(s,l),l}function Su(t=io){const e=xs.get(t);if(!e&&t===io&&wu())return Tu();if(!e)throw Gt.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=_y[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}qn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ey="firebase-heartbeat-database",Iy=1,Cr="firebase-heartbeat-store";let Li=null;function Au(){return Li||(Li=Bm(Ey,Iy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Li}async function Ty(t){try{return await(await Au()).transaction(Cr).objectStore(Cr).get(Cu(t))}catch(e){if(e instanceof Lt)mn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function _l(t,e){try{const r=(await Au()).transaction(Cr,"readwrite");await r.objectStore(Cr).put(e,Cu(t)),await r.done}catch(n){if(n instanceof Lt)mn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Cu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sy=1024,Ay=30*24*60*60*1e3;class Cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Oy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ay}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vl(),{heartbeatsToSend:n,unsentEntries:r}=Ry(this._heartbeatsCache.heartbeats),s=ks(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vl(){return new Date().toISOString().substring(0,10)}function Ry(t,e=Sy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wl(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?_m().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ty(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wl(t){return ks(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Py(t){qn(new gn("platform-logger",e=>new zm(e),"PRIVATE")),qn(new gn("heartbeat",e=>new Cy(e),"PRIVATE")),Yt(so,yl,t),Yt(so,yl,"esm2017"),Yt("fire-js","")}Py("");var ky="firebase",Dy="9.22.0";/**
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
 */Yt(ky,Dy,"app");/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Qn="9.22.0";/**
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
 */const Hn=new Lo("@firebase/firestore");function yn(t,...e){if(Hn.logLevel<=ge.DEBUG){const n=e.map(Uo);Hn.debug(`Firestore (${Qn}): ${t}`,...n)}}function li(t,...e){if(Hn.logLevel<=ge.ERROR){const n=e.map(Uo);Hn.error(`Firestore (${Qn}): ${t}`,...n)}}function Ru(t,...e){if(Hn.logLevel<=ge.WARN){const n=e.map(Uo);Hn.warn(`Firestore (${Qn}): ${t}`,...n)}}function Uo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+t;throw li(e),new Error(e)}function nt(t,e){t||_e()}function Vr(t,e){return t}/**
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
 */const bl="ok",Fo="cancelled",Nn="unknown",Z="invalid-argument",Ou="deadline-exceeded",Pu="not-found",xy="already-exists",ku="permission-denied",Ns="unauthenticated",Du="resource-exhausted",_n="failed-precondition",jo="aborted",xu="out-of-range",Vo="unimplemented",Nu="internal",Lu="unavailable",Ny="data-loss";class Y extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $u{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class $y{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class My{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(nt(typeof e.accessToken=="string"),new $u(e.accessToken,new Ye(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Uy{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Fy{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Uy(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vy{constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(nt(typeof e.token=="string"),new jy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class By{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}class Or{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Or{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(Z,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Or{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return qy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(Z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(Z,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(Z,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(Z,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class Le{constructor(e){this.path=e}static fromPath(e){return new Le(ke.fromString(e))}static fromName(e){return new Le(ke.fromString(e).popFirst(5))}static empty(){return new Le(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Le(new ke(e.slice()))}}/**
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
 */function Mu(t,e,n){if(!n)throw new Y(Z,`Function ${t}() cannot be called with an empty ${e}.`)}function El(t){if(!Le.isDocumentKey(t))throw new Y(Z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Il(t){if(Le.isDocumentKey(t))throw new Y(Z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ci(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(Z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ci(t);throw new Y(Z,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Hy(t,e){if(e<=0)throw new Y(Z,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Uu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let os=null;function zy(){return os===null?os=268435456+Math.round(2147483648*Math.random()):os++,"0x"+os.toString(16)}/**
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
 */function Fu(t){return t==null}function Ls(t){return t===0&&1/t==-1/0}/**
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
 */const Wy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Tl,de;function Sl(t){if(t===void 0)return li("RPC_ERROR","HTTP error has no status"),Nn;switch(t){case 200:return bl;case 400:return _n;case 401:return Ns;case 403:return ku;case 404:return Pu;case 409:return jo;case 416:return xu;case 429:return Du;case 499:return Fo;case 500:return Nn;case 501:return Vo;case 503:return Lu;case 504:return Ou;default:return t>=200&&t<300?bl:t>=400&&t<500?_n:t>=500&&t<600?Nu:Nn}}/**
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
 */(de=Tl||(Tl={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";class Ky extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,s,i){const o=zy(),l=this.I(e,n);yn("RestConnection",`Sending RPC '${e}' ${o}:`,l,r);const c={};return this.T(c,s,i),this.A(e,l,c,r).then(h=>(yn("RestConnection",`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ru("RestConnection",`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,n){const r=Wy[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){var i;const o=JSON.stringify(s);let l;try{l=await this.P(n,{method:"POST",headers:r,body:o})}catch(c){const h=c;throw new Y(Sl(h.status),"Request failed with error: "+h.statusText)}if(!l.ok){let c=await l.json();Array.isArray(c)&&(c=c[0]);const h=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new Y(Sl(l.status),`Request failed with error: ${h??l.statusText}`)}return l.json()}}/**
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
 */function Gy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yy{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Gy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function ju(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function Al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jy("Invalid base64 string: "+s):s}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Qy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if(nt(!!t),typeof t=="string"){let e=0;const n=Qy.exec(t);if(nt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
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
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(Z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(Z,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bu(t){const e=t.mapValue.fields.__previous_value__;return Vu(e)?Bu(e):e}function kr(t){const e=vn(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */const as={fields:{__type__:{stringValue:"__max__"}}};function wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:_e()}function $s(t,e){if(t===e)return!0;const n=wn(t);if(n!==wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kr(t).isEqual(kr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=vn(r.timestampValue),o=vn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Pr(r.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Pe(r.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Pe(r.integerValue)===Pe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Pe(r.doubleValue),o=Pe(s.doubleValue);return i===o?Ls(i)===Ls(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ju(t.arrayValue.values||[],e.arrayValue.values||[],$s);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Al(i)!==Al(o))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(o[l]===void 0||!$s(i[l],o[l])))return!1;return!0}(t,e);default:return _e()}}function Dr(t,e){return(t.values||[]).find(n=>$s(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=wn(t),r=wn(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Pe(s.integerValue||s.doubleValue),l=Pe(i.integerValue||i.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return Cl(t.timestampValue,e.timestampValue);case 4:return Cl(kr(t),kr(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Pr(s),l=Pr(i);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),l=i.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=Ne(o[c],l[c]);if(h!==0)return h}return Ne(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ne(Pe(s.latitude),Pe(i.latitude));return o!==0?o:Ne(Pe(s.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],l=i.values||[];for(let c=0;c<o.length&&c<l.length;++c){const h=Ms(o[c],l[c]);if(h)return h}return Ne(o.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===as&&i===as)return 0;if(s===as)return 1;if(i===as)return-1;const o=s.fields||{},l=Object.keys(o),c=i.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const b=Ne(l[m],h[m]);if(b!==0)return b;const A=Ms(o[l[m]],c[h[m]]);if(A!==0)return A}return Ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Cl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=vn(t),r=vn(e),s=Ne(n.seconds,r.seconds);return s!==0?s:Ne(n.nanos,r.nanos)}function Rl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qu(t){return!!t&&"arrayValue"in t}function Ol(t){return!!t&&"nullValue"in t}function Pl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $i(t){return!!t&&"mapValue"in t}function pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class kl{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Hu{}class gt extends Hu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Xy(e,n,r):n==="array-contains"?new t_(e,r):n==="in"?new n_(e,r):n==="not-in"?new r_(e,r):n==="array-contains-any"?new s_(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Zy(e,r):new e_(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&wn(this.value)===wn(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Hr extends Hu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Hr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class Xy extends gt{constructor(e,n,r){super(e,n,r),this.key=Le.fromName(r.referenceValue)}matches(e){const n=Le.comparator(e.key,this.key);return this.matchesComparison(n)}}class Zy extends gt{constructor(e,n){super(e,"in",n),this.keys=zu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class e_ extends gt{constructor(e,n){super(e,"not-in",n),this.keys=zu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Le.fromName(r.referenceValue))}class t_ extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Dr(n.arrayValue,this.value)}}class n_ extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dr(this.value.arrayValue,n)}}class r_ extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dr(this.value.arrayValue,n)}}class s_ extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Dr(this.value.arrayValue,r))}}/**
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
 */class gr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new rt(0,0))}static max(){return new Ce(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Us{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Us(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Us(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Me(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fs{constructor(e){this.comparator=e,this.data=new Us(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dl(this.data.getIterator())}getIteratorFrom(e){return new Dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fs(this.comparator);return n.data=e,n}}class Dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new bn([])}unionWith(e){let n=new Fs(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ju(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=pr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $s(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new tt(pr(this.value))}}/**
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
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,Ce.min(),Ce.min(),Ce.min(),tt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,Ce.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,Ce.min(),Ce.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,Ce.min(),Ce.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class i_{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.S=null}}function xl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new i_(t,e,n,r,s,i,o)}/**
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
 */class ui{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function qo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function di(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function o_(t){return t.collectionGroup!==null}function Nl(t){const e=Vr(t);if(e.q===null){e.q=[];const n=di(e),r=qo(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new gr(n)),e.q.push(new gr(et.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new gr(et.keyField(),i))}}}return e.q}function a_(t){const e=Vr(t);if(!e.O)if(e.limitType==="F")e.O=xl(e.path,e.collectionGroup,Nl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Nl(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new gr(i.field,o))}const r=e.endAt?new kl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new kl(e.startAt.position,e.startAt.inclusive):null;e.O=xl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function ao(t,e){e.getFirstInequalityField(),di(t);const n=t.filters.concat([e]);return new ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function l_(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(r)?"-0":r}}(t,e)}/**
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
 */class hi{constructor(){this._=void 0}}class c_ extends hi{}class u_ extends hi{constructor(e){super(),this.elements=e}}class d_ extends hi{constructor(e){super(),this.elements=e}}class h_ extends hi{constructor(e,n){super(),this.serializer=e,this.k=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class fi{}class Wu extends fi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ho extends fi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ku extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gu extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const f_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),p_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),g_=(()=>({and:"AND",or:"OR"}))();class m_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function __(t,e){return lo(t,e.toTimestamp())}function mr(t){return nt(!!t),Ce.fromTimestamp(function(e){const n=vn(e);return new rt(n.seconds,n.nanos)}(t))}function zo(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function js(t,e){return zo(t.databaseId,e.path)}function co(t,e){const n=function(s){const i=ke.fromString(s);return nt(Qu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(Z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(Z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Le((nt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ll(t,e){return zo(t.databaseId,e)}function Yu(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $l(t,e,n){return{name:js(t,e),fields:n.value.mapValue.fields}}function v_(t,e){return"found"in e?function(n,r){nt(!!r.found),r.found.name,r.found.updateTime;const s=co(n,r.found.name),i=mr(r.found.updateTime),o=r.found.createTime?mr(r.found.createTime):Ce.min(),l=new tt({mapValue:{fields:r.found.fields}});return wt.newFoundDocument(s,i,o,l)}(t,e):"missing"in e?function(n,r){nt(!!r.missing),nt(!!r.readTime);const s=co(n,r.missing),i=mr(r.readTime);return wt.newNoDocument(s,i)}(t,e):_e()}function w_(t,e){let n;if(e instanceof Wu)n={update:$l(t,e.key,e.value)};else if(e instanceof Ku)n={delete:js(t,e.key)};else if(e instanceof Ho)n={update:$l(t,e.key,e.data),updateMask:S_(e.fieldMask)};else{if(!(e instanceof Gu))return _e();n={verify:js(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof c_)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof u_)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof d_)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof h_)return{fieldPath:i.field.canonicalString(),increment:o.k};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:__(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function b_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ll(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ll(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ju(Hr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Rn(m.field),direction:E_(m.dir)}}(h))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,h){return c.useProto3Json||Fu(h)?h:{value:h}}(t,e.limit);var l;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function E_(t){return f_[t]}function I_(t){return p_[t]}function T_(t){return g_[t]}function Rn(t){return{fieldPath:t.canonicalString()}}function Ju(t){return t instanceof gt?function(e){if(e.op==="=="){if(Pl(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NAN"}};if(Ol(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pl(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NOT_NAN"}};if(Ol(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rn(e.field),op:I_(e.op),value:e.value}}}(t):t instanceof Hr?function(e){const n=e.getFilters().map(r=>Ju(r));return n.length===1?n[0]:{compositeFilter:{op:T_(e.op),filters:n}}}(t):_e()}function S_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Wo(t){return new m_(t,!0)}/**
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
 */class Xu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=n,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const n=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,n-r);s>0&&yn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
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
 */class A_ extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new Y(_n,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ns&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(Nn,s.toString())})}R(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ns&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(Nn,i.toString())})}terminate(){this.J=!0}}async function Zu(t,e){const n=Vr(t),r=Yu(n.serializer)+"/documents",s={writes:e.map(i=>w_(n.serializer,i))};await n.v("Commit",r,s)}async function ed(t,e){const n=Vr(t),r=Yu(n.serializer)+"/documents",s={documents:e.map(c=>js(n.serializer,c))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const h=v_(n.serializer,c);o.set(h.key.toString(),h)});const l=[];return e.forEach(c=>{const h=o.get(c.toString());nt(!!h),l.push(h)}),l}async function C_(t,e){const n=Vr(t),r=b_(n.serializer,a_(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,l){const c=co(i,o.name),h=mr(o.updateTime),m=o.createTime?mr(o.createTime):Ce.min(),b=new tt({mapValue:{fields:o.fields}}),A=wt.newFoundDocument(c,h,m,b);return l&&A.setHasCommittedMutations(),l?A.setHasCommittedMutations():A}(n.serializer,s.document,void 0))}/**
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
 */const yr=new Map;function pi(t){if(t._terminated)throw new Y(_n,"The client has already been terminated.");if(!yr.has(t)){yn("ComponentProvider","Initializing Datastore");const i=function(c){return new Ky(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new By(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Uu(s.experimentalLongPollingOptions),s.useFetchStreams))),o=Wo(t._databaseId),l=function(c,h,m,b){return new A_(c,h,m,b)}(t._authCredentials,t._appCheckCredentials,i,o);yr.set(t,l)}var e,n,r,s;/**
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
*/return yr.get(t)}class Ml{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(Z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(Z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,l){if(i===!0&&l===!0)throw new Y(Z,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class zr{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ml({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(_n,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(_n,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ml(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ly;switch(n.type){case"firstParty":return new Fy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(Z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yr.get(e);n&&(yn("ComponentProvider","Removing Datastore"),yr.delete(e),n.terminate())}(this),Promise.resolve()}}function R_(t,e){const n=typeof t=="object"?t:Su(),r=typeof t=="string"?t:e||"(default)",s=Mo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=um("firestore");i&&O_(s,...i)}return s}function O_(t,e,n,r={}){var s;const i=(t=Br(t,zr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ru("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=Ye.MOCK_USER;else{o=hm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(Z,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(c)}t._authCredentials=new $y(new $u(o,l))}}/**
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
 */class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class en{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class Jt extends en{constructor(e,n,r){super(e,n,new ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Le(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function De(t,e,...n){if(t=Ue(t),Mu("collection","path",e),t instanceof zr){const r=ke.fromString(e,...n);return Il(r),new Jt(t,null,r)}{if(!(t instanceof Je||t instanceof Jt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Il(r),new Jt(t.firestore,null,r)}}function $e(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Yy.N()),Mu("doc","path",e),t instanceof zr){const r=ke.fromString(e,...n);return El(r),new Je(t,null,new Le(r))}{if(!(t instanceof Je||t instanceof Jt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return El(r),new Je(t.firestore,t instanceof Jt?t.converter:null,new Le(r))}}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Dt.fromBase64String(e))}catch(n){throw new Y(Z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(Z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ko{constructor(e){this._methodName=e}}/**
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
 */class Go{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(Z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(Z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */const P_=/^__.*__$/;class k_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ho(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wu(e,this.data,n,this.fieldTransforms)}}class td{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ho(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Yo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new Yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Vs(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(nd(this.et)&&P_.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class D_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wo(e)}ft(e,n,r,s=!1){return new Yo({et:e,methodName:n,lt:r,path:et.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jo(t){const e=t._freezeSettings(),n=Wo(t._databaseId);return new D_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rd(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);Qo("Data must be an object, but it was:",o,r);const l=sd(r,o);let c,h;if(i.merge)c=new bn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const b of i.mergeFields){const A=uo(e,b,n);if(!o.contains(A))throw new Y(Z,`Field '${A}' is specified in your field mask but missing from your input data.`);od(m,A)||m.push(A)}c=new bn(m),h=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,h=o.fieldTransforms;return new k_(new tt(l),c,h)}class mi extends Ko{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function x_(t,e,n,r){const s=t.ft(1,e,n);Qo("Data must be an object, but it was:",s,r);const i=[],o=tt.empty();qr(r,(c,h)=>{const m=Xo(e,c,n);h=Ue(h);const b=s.ot(m);if(h instanceof mi)i.push(m);else{const A=Wr(h,b);A!=null&&(i.push(m),o.set(m,A))}});const l=new bn(i);return new td(o,l,s.fieldTransforms)}function N_(t,e,n,r,s,i){const o=t.ft(1,e,n),l=[uo(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(Z,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)l.push(uo(e,i[A])),c.push(i[A+1]);const h=[],m=tt.empty();for(let A=l.length-1;A>=0;--A)if(!od(h,l[A])){const k=l[A];let V=c[A];V=Ue(V);const K=o.ot(k);if(V instanceof mi)h.push(k);else{const X=Wr(V,K);X!=null&&(h.push(k),m.set(k,X))}}const b=new bn(h);return new td(m,b,o.fieldTransforms)}function L_(t,e,n,r=!1){return Wr(n,t.ft(r?4:3,e))}function Wr(t,e){if(id(t=Ue(t)))return Qo("Unsupported field value:",e,t),sd(t,e);if(t instanceof Ko)return function(n,r){if(!nd(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let l=Wr(o,r.ut(i));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return l_(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=rt.fromDate(n);return{timestampValue:lo(r.serializer,s)}}if(n instanceof rt){const s=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:lo(r.serializer,s)}}if(n instanceof Go)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zn)return{bytesValue:y_(r.serializer,n._byteString)};if(n instanceof Je){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${ci(n)}`)}(t,e)}function sd(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,s)=>{const i=Wr(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function id(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Go||t instanceof zn||t instanceof Je||t instanceof Ko)}function Qo(t,e,n){if(!id(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ci(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function uo(t,e,n){if((e=Ue(e))instanceof gi)return e._internalPath;if(typeof e=="string")return Xo(t,e);throw Vs("Field path arguments must be of type string or ",t,!1,void 0,n)}const $_=new RegExp("[~\\*/\\[\\]]");function Xo(t,e,n){if(e.search($_)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gi(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(Z,l+t+c)}function od(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Bs{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ad extends Bs{data(){return super.data()}}class M_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Zo(t,e){return typeof e=="string"?Xo(t,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
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
 */class ea{}class ta extends ea{}function Kr(t,e,...n){let r=[];e instanceof ea&&r.push(e),r=r.concat(n),function(s){const i=s.filter(l=>l instanceof na).length,o=s.filter(l=>l instanceof yi).length;if(i>1||i>0&&o>0)throw new Y(Z,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yi extends ta{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yi(e,n,r)}_apply(e){const n=this._parse(e);return ld(e._query,n),new en(e.firestore,e.converter,ao(e._query,n))}_parse(e){const n=Jo(e.firestore);return function(s,i,o,l,c,h,m){let b;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(Z,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Fl(m,h);const A=[];for(const k of m)A.push(Ul(l,s,k));b={arrayValue:{values:A}}}else b=Ul(l,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Fl(m,h),b=L_(o,i,m,h==="in"||h==="not-in");return gt.create(c,h,b)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function U_(t,e,n){const r=e,s=Zo("where",t);return yi._create(s,r,n)}class na extends ea{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new na(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const l of o)ld(i,l),i=ao(i,l)}(e._query,n),new en(e.firestore,e.converter,ao(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ra extends ta{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ra(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new Y(Z,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Y(Z,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new gr(s,i);return function(l,c){if(qo(l)===null){const h=di(l);h!==null&&cd(l,h,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ui(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function _i(t,e="asc"){const n=e,r=Zo("orderBy",t);return ra._create(r,n)}class sa extends ta{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new sa(e,n,r)}_apply(e){return new en(e.firestore,e.converter,function(n,r,s){return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function ia(t){return Hy("limit",t),sa._create("limit",t,"F")}function Ul(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new Y(Z,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!o_(e)&&n.indexOf("/")!==-1)throw new Y(Z,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!Le.isDocumentKey(r))throw new Y(Z,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rl(t,new Le(r))}if(n instanceof Je)return Rl(t,n._key);throw new Y(Z,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ci(n)}.`)}function Fl(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(Z,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ld(t,e){if(e.isInequality()){const r=di(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new Y(Z,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=qo(t);i!==null&&cd(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(Z,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(Z,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cd(t,e,n){if(!n.isEqual(e))throw new Y(Z,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function ud(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class oa extends class{convertValue(e,n="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Go(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const n=vn(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);nt(Qu(r));const s=new Rr(r.get(1),r.get(3)),i=new Le(r.popFirst(5));return s.isEqual(n)||li(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function Zt(t){const e=pi((t=Br(t,Je)).firestore),n=new oa(t.firestore);return ed(e,[t._key]).then(r=>{nt(r.length===1);const s=r[0];return new Bs(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Gr(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Y(Vo,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Br(t,en))._query);const e=pi(t.firestore),n=new oa(t.firestore);return C_(e,t._query).then(r=>{const s=r.map(i=>new ad(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new M_(t,s)})}function In(t,e,n){const r=ud((t=Br(t,Je)).converter,e,n),s=rd(Jo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return Zu(pi(t.firestore),[s.toMutation(t._key,Et.none())])}function cs(t,e){if((t=Ue(t)).firestore!==e)throw new Y(Z,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class F_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Y(Z,"Firestore transactions require all reads to be executed before all writes.");const n=await ed(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ku(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=Le.fromPath(r);this.mutations.push(new Gu(s,this.precondition(s)))}),await Zu(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw _e();n=Ce.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Y(jo,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Ce.min())?Et.exists(!1):Et.updateTime(n):Et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Ce.min()))throw new Y(Z,"Can't update a document that doesn't exist.");return Et.updateTime(n)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */const j_={maxAttempts:5};/**
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
 */class V_{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new Xu(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new F_(this.datastore),n=this.vt(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const n=this.updateFunction(e);return!Fu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!function(r){switch(r){default:return _e();case Fo:case Nn:case Ou:case Du:case Nu:case Lu:case Ns:return!1;case Z:case Pu:case xy:case ku:case _n:case jo:case xu:case Vo:case Ny:return!0}}(n)}return!1}}/**
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
 */function Mi(){return typeof document<"u"?document:null}/**
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
 */class aa{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new aa(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(Fo,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class B_{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new Xu(this,"async_queue_retry"),this.Dt=()=>{const n=Mi();n&&yn("AsyncQueue","Visibility state changed to "+n.visibilityState),this.gt.H()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const n=new Bo;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(n){return n.name==="IndexedDbTransactionError"}(e))throw e;yn("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const n=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw li("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=n,n}enqueueAfterDelay(e,n,r){this.Ft(),this.Nt.indexOf(e)>-1&&(n=0);const s=aa.createAndSchedule(this,e,n,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&_e()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const n of this.Rt)if(n.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Rt)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const n=this.Rt.indexOf(e);this.Rt.splice(n,1)}}class q_{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Jo(e)}get(e){const n=cs(e,this._firestore),r=new oa(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return _e();const i=s[0];if(i.isFoundDocument())return new Bs(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Bs(this._firestore,r,n._key,null,n.converter);throw _e()})}set(e,n,r){const s=cs(e,this._firestore),i=ud(s.converter,n,r),o=rd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=cs(e,this._firestore);let o;return o=typeof(n=Ue(n))=="string"||n instanceof gi?N_(this._dataReader,"Transaction.update",i._key,n,r,s):x_(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=cs(e,this._firestore);return this._transaction.delete(n._key),this}}function H_(t,e,n){const r=pi(t=Br(t,zr)),s=Object.assign(Object.assign({},j_),n);(function(o){if(o.maxAttempts<1)throw new Y(Z,"Max attempts must be at least 1")})(s);const i=new Bo;return new V_(new B_,r,s,o=>e(new q_(t,o)),i).run(),i.promise}(function(t){Qn=t})(`${Jn}_lite`),qn(new gn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new zr(new My(t.getProvider("auth-internal")),new Vy(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Y(Z,'"projectId" not provided in firebase.initializeApp.');return new Rr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Yt("firestore-lite","3.12.0",""),Yt("firestore-lite","3.12.0","esm2017");class Ui{}Ke(Ui,"APPLICATION_SETTINGS","ApplicationSettings"),Ke(Ui,"PRODUCT_SETTINGS","ProductSettings"),Ke(Ui,"CUSTOMER_SETTINGS","CustomerSettings");class jl{}Ke(jl,"SUCCESS","Success"),Ke(jl,"ERROR","Error");class Fe{}Ke(Fe,"INVOICES","Invoices"),Ke(Fe,"SETTINGS","settings"),Ke(Fe,"RATES","Rates"),Ke(Fe,"CCUSTOMERS","Customers"),Ke(Fe,"PRODUCTS","Products"),Ke(Fe,"PAYMENTS","Payments"),Ke(Fe,"USERS","Users"),Ke(Fe,"AUDIT","Audit");function la(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z_=dd,hd=new Fr("auth","Firebase",dd());/**
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
 */const qs=new Lo("@firebase/auth");function W_(t,...e){qs.logLevel<=ge.WARN&&qs.warn(`Auth (${Jn}): ${t}`,...e)}function ys(t,...e){qs.logLevel<=ge.ERROR&&qs.error(`Auth (${Jn}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw ca(t,...e)}function It(t,...e){return ca(t,...e)}function K_(t,e,n){const r=Object.assign(Object.assign({},z_()),{[e]:n});return new Fr("auth","Firebase",r).create(e,{appName:t.name})}function ca(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hd.create(t,...e)}function re(t,e,...n){if(!t)throw ca(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function xt(t,e){t||Rt(e)}/**
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
 */function ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G_(){return Vl()==="http:"||Vl()==="https:"}function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G_()||pm()||"connection"in navigator)?navigator.onLine:!0}function J_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yr{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=fm()||gm()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ua(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const X_=new Yr(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return pd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=jr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fd.fetch()(gd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q_),e);try{const s=new Z_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw us(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw us(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw us(t,"user-disabled",o);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw K_(t,m,h);pt(t,m)}}catch(s){if(s instanceof Lt)throw s;pt(t,"network-request-failed",{message:String(s)})}}async function vi(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&pt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ua(t.config,s):`${t.config.apiScheme}://${s}`}class Z_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),X_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function us(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ev(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function tv(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nv(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=da(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_r(Fi(s.auth_time)),issuedAtTime:_r(Fi(s.iat)),expirationTime:_r(Fi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fi(t){return Number(t)*1e3}function da(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=_u(n);return s?JSON.parse(s):(ys("Failed to decode base64 JWT payload"),null)}catch(s){return ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rv(t){const e=da(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&sv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xr(t,tv(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lv(i.providerUserInfo):[],l=av(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=c?h:!1,b={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,b)}async function ov(t){const e=Ue(t);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function av(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lv(t){return t.map(e=>{var{providerId:n}=e,r=la(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cv(t,e){const n=await pd(t,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gd(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fd.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nr;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Ut(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nv(this,e)}reload(){return ov(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xr(this,ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,m;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,K=(l=n.tenantId)!==null&&l!==void 0?l:void 0,X=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,ee=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:J,emailVerified:le,isAnonymous:Te,providerData:z,stsTokenManager:v}=n;re(J&&v,e,"internal-error");const w=Nr.fromJSON(this.name,v);re(typeof J=="string",e,"internal-error"),Ut(b,e.name),Ut(A,e.name),re(typeof le=="boolean",e,"internal-error"),re(typeof Te=="boolean",e,"internal-error"),Ut(k,e.name),Ut(V,e.name),Ut(K,e.name),Ut(X,e.name),Ut(G,e.name),Ut(ee,e.name);const g=new pn({uid:J,auth:e,email:A,emailVerified:le,displayName:b,isAnonymous:Te,photoURL:V,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:G,lastLoginAt:ee});return z&&Array.isArray(z)&&(g.providerData=z.map(d=>Object.assign({},d))),X&&(g._redirectEventId=X),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nr;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hs(i),i}}/**
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
 */const Bl=new Map;function Ot(t){xt(t instanceof Function,"Expected a class definition");let e=Bl.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bl.set(t,e),e)}/**
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
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yd.type="NONE";const ql=yd;/**
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
 */function _s(t,e,n){return`firebase:${t}:${e}:${n}`}class Ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_s(this.userKey,s.apiKey,i),this.fullPersistenceKey=_s("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ln(Ot(ql),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ot(ql);const o=_s(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const m=await h._get(o);if(m){const b=pn._fromJSON(e,m);h!==i&&(l=b),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ln(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ln(i,e,r))}}/**
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
 */function Hl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ed(e))return"Blackberry";if(Id(e))return"Webos";if(ha(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _d(t=qe()){return/firefox\//i.test(t)}function ha(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(t=qe()){return/crios\//i.test(t)}function wd(t=qe()){return/iemobile/i.test(t)}function bd(t=qe()){return/android/i.test(t)}function Ed(t=qe()){return/blackberry/i.test(t)}function Id(t=qe()){return/webos/i.test(t)}function wi(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uv(t=qe()){var e;return wi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dv(){return mm()&&document.documentMode===10}function Td(t=qe()){return wi(t)||bd(t)||Id(t)||Ed(t)||/windows phone/i.test(t)||wd(t)}function hv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sd(t,e=[]){let n;switch(t){case"Browser":n=Hl(qe());break;case"Worker":n=`${Hl(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${r}`}async function Ad(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Jr(t,e))}function zl(t){return t!==void 0&&t.enterprise!==void 0}class Cd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function fv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fv().appendChild(r)})}function pv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gv="https://www.google.com/recaptcha/enterprise.js?render=",mv="recaptcha-enterprise",yv="NO_RECAPTCHA";class Od{constructor(e){this.type=mv,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ad(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Cd(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;zl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(yv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&zl(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rd(gv+l).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wl(t,e,n,r=!1){const s=new Od(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class _v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class vv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}async initializeRecaptchaConfig(){const e=await Ad(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Od(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return Ue(t)}class Kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Im(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wv(t,e){const n=Mo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ds(i,e??{}))return s;pt(s,"already-initialized")}return n.initialize({options:e})}function bv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ev(t,e,n){const r=Qr(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Pd(e),{host:o,port:l}=Iv(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Tv()}function Pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Iv(t){const e=Pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gl(o)}}}function Gl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function Sv(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ji(t,e){return vi(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
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
 */async function Av(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function Cv(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
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
 */class Lr extends fa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Lr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Wl(e,r,"signInWithPassword");return ji(e,s)}else return ji(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Wl(e,r,"signInWithPassword");return ji(e,i)}else return Promise.reject(s)});case"emailLink":return Av(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cv(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $n(t,e){return vi(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
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
 */const Rv="http://localhost";class En extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=la(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new En(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$n(e,n)}buildRequest(){const e={requestUri:Rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
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
 */function Ov(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pv(t){const e=ar(lr(t)).link,n=e?ar(lr(e)).deep_link_id:null,r=ar(lr(t)).deep_link_id;return(r?ar(lr(r)).link:null)||r||n||e||t}class pa{constructor(e){var n,r,s,i,o,l;const c=ar(lr(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,m=(r=c.oobCode)!==null&&r!==void 0?r:null,b=Ov((s=c.mode)!==null&&s!==void 0?s:null);re(h&&m&&b,"argument-error"),this.apiKey=h,this.operation=b,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Pv(e);try{return new pa(n)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,n){return Lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pa.parseLink(n);return re(r,"argument-error"),Lr._fromEmailAndCode(e,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xr extends kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Xr{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class qt extends Xr{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Xr{constructor(){super("twitter.com")}static credential(e,n){return En._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=Yl(r);return new Wn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yl(r);return new Wn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zs extends Lt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zs(e,n,r,s)}}function Dd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(t,i,e,r):i})}async function kv(t,e,n=!1){const r=await xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",r)}/**
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
 */async function Dv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xr(t,Dd(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=da(i.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),Wn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),i}}/**
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
 */async function xd(t,e,n=!1){const r="signIn",s=await Dd(t,r,e),i=await Wn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xv(t,e){return xd(Qr(t),e)}function Nv(t,e,n){return xv(Ue(t),Zn.credential(e,n))}function Lv(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function $v(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const Ws="__sak";/**
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
 */class Nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mv(){const t=qe();return ha(t)||wi(t)}const Uv=1e3,Fv=10;class Ld extends Nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mv()&&hv(),this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ld.type="LOCAL";const jv=Ld;/**
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
 */class $d extends Nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$d.type="SESSION";const Md=$d;/**
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
 */function Vv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Vv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bi.receivers=[];/**
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
 */function ga(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=ga("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(b){const A=b;if(A.data.eventId===h)switch(A.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(A.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function qv(t){Tt().location.href=t}/**
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
 */function Ud(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function Hv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wv(){return Ud()?self:null}/**
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
 */const Fd="firebaseLocalStorageDb",Kv=1,Ks="firebaseLocalStorage",jd="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ei(t,e){return t.transaction([Ks],e?"readwrite":"readonly").objectStore(Ks)}function Gv(){const t=indexedDB.deleteDatabase(Fd);return new Zr(t).toPromise()}function fo(){const t=indexedDB.open(Fd,Kv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ks,{keyPath:jd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ks)?e(r):(r.close(),await Gv(),e(await fo()))})})}async function Jl(t,e,n){const r=Ei(t,!0).put({[jd]:e,value:n});return new Zr(r).toPromise()}async function Yv(t,e){const n=Ei(t,!1).get(e),r=await new Zr(n).toPromise();return r===void 0?null:r.value}function Ql(t,e){const n=Ei(t,!0).delete(e);return new Zr(n).toPromise()}const Jv=800,Qv=3;class Vd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bi._getInstance(Wv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hv(),!this.activeServiceWorker)return;this.sender=new Bv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await Jl(e,Ws,"1"),await Ql(e,Ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ql(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ei(s,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vd.type="LOCAL";const Xv=Vd;new Yr(3e4,6e4);/**
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
 */function Zv(t,e){return e?Ot(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ma extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ew(t){return xd(t.auth,new ma(t),t.bypassAuthState)}function tw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Dv(n,new ma(t),t.bypassAuthState)}async function nw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),kv(n,new ma(t),t.bypassAuthState)}/**
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
 */class Bd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ew;case"linkViaPopup":case"linkViaRedirect":return nw;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:pt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rw=new Yr(2e3,1e4);class On extends Bd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rw.get())};e()}}On.currentPopupAction=null;/**
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
 */const sw="pendingRedirect",vs=new Map;class iw extends Bd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vs.get(this.auth._key());if(!e){try{const r=await ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vs.set(this.auth._key(),e)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(t,e){const n=cw(e),r=lw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aw(t,e){vs.set(t._key(),e)}function lw(t){return Ot(t._redirectPersistence)}function cw(t){return _s(sw,t.config.apiKey,t.name)}async function uw(t,e,n=!1){const r=Qr(t),s=Zv(r,e),o=await new iw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dw=10*60*1e3;class hw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qd(t);default:return!1}}/**
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
 */async function pw(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function yw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pw(t);for(const n of e)try{if(_w(n))return}catch{}pt(t,"unauthorized-domain")}function _w(t){const e=ho(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mw.test(n))return!1;if(gw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vw=new Yr(3e4,6e4);function Zl(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ww(t){return new Promise((e,n)=>{var r,s,i;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),n(It(t,"network-request-failed"))},timeout:vw.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tt().gapi)===null||i===void 0)&&i.load)o();else{const l=pv("iframefcb");return Tt()[l]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Rd(`https://apis.google.com/js/api.js?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ws=null,e})}let ws=null;function bw(t){return ws=ws||ww(t),ws}/**
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
 */const Ew=new Yr(5e3,15e3),Iw="__/auth/iframe",Tw="emulator/auth/iframe",Sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Aw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cw(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,Tw):`https://${t.config.authDomain}/${Iw}`,r={apiKey:e.apiKey,appName:t.name,v:Jn},s=Aw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jr(r).slice(1)}`}async function Rw(t){const e=await bw(t),n=Tt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Cw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=Tt().setTimeout(()=>{i(o)},Ew.get());function c(){Tt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pw=500,kw=600,Dw="_blank",xw="http://localhost";class ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(t,e,n,r=Pw,s=kw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ow),{width:r.toString(),height:s.toString(),top:i,left:o}),h=qe().toLowerCase();n&&(l=vd(h)?Dw:n),_d(h)&&(e=e||xw,c.scrollbars="yes");const m=Object.entries(c).reduce((A,[k,V])=>`${A}${k}=${V},`,"");if(uv(h)&&l!=="_self")return Lw(e||"",l),new ec(null);const b=window.open(e||"",l,m);re(b,t,"popup-blocked");try{b.focus()}catch{}return new ec(b)}function Lw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $w="__/auth/handler",Mw="emulator/auth/handler",Uw=encodeURIComponent("fac");async function tc(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jn,eventId:s};if(e instanceof kd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Em(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,b]of Object.entries(i||{}))o[m]=b}if(e instanceof Xr){const m=e.getScopes().filter(b=>b!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await t._getAppCheckToken(),h=c?`#${Uw}=${encodeURIComponent(c)}`:"";return`${Fw(t)}?${jr(l).slice(1)}${h}`}function Fw({config:t}){return t.emulator?ua(t,Mw):`https://${t.authDomain}/${$w}`}/**
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
 */const Vi="webStorageSupport";class jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Md,this._completeRedirectFn=uw,this._overrideRedirectResult=aw}async _openPopup(e,n,r,s){var i;xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tc(e,n,r,ho(),s);return Nw(e,o,ga())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tc(e,n,r,ho(),s);return qv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rw(e),r=new hw(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vi,{type:Vi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vi];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Td()||ha()||wi()}}const Vw=jw;var nc="@firebase/auth",rc="0.23.2";/**
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
 */class Bw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hw(t){qn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(t)},h=new vv(r,s,i,c);return bv(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new gn("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new Bw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(nc,rc,qw(t)),Yt(nc,rc,"esm2017")}/**
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
 */const zw=5*60,Ww=bu("authIdTokenMaxAge")||zw;let sc=null;const Kw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ww)return;const s=n==null?void 0:n.token;sc!==s&&(sc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bs(t=Su()){const e=Mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wv(t,{popupRedirectResolver:Vw,persistence:[Xv,jv,Md]}),r=bu("authTokenSyncURL");if(r){const i=Kw(r);$v(n,i,()=>i(n.currentUser)),Lv(n,o=>i(o))}const s=vu("auth");return s&&Ev(n,`http://${s}`),n}Hw("Browser");const Gw={apiKey:"AIzaSyAET8eUrZHm1IrHhzl2FaWfW1Jr4Wqo7IA",authDomain:"gold-smith-aljihad.firebaseapp.com",projectId:"gold-smith-aljihad",storageBucket:"gold-smith-aljihad.appspot.com",messagingSenderId:"265121429939",appId:"1:265121429939:web:419003c9403699fd8273c6",measurementId:"G-4B9DDZDD8V"},Yw=Tu(Gw),Oe=R_(Yw);class Jw{constructor(){this.collectionName=Fe.INVOICES}async addOrUpdate(e){const n=De(Oe,this.collectionName);var r=await Zt($e(n,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";tr.fillUpdatedInfo(e),await In($e(n,e.invoiceNumber),e),await ab.addOrUpdate({receiptNumber:"R"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalAmount,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),er.log(e,"Invoice","Created"+e.invoiceNumber)}async list(e,n,r){const s=De(Oe,this.collectionName),i=Kr(s,_i("purchaseDate","desc"),ia(10)),l=(await Gr(i)).docs.map(h=>h.data());if(r){var c=r.toLowerCase().trim();return _.filter(l,function(h){return h.invoiceNumber.toLowerCase().includes(c)||h.customer.toLowerCase().includes(c)})}return l}async getById(e){const n=De(Oe,this.collectionName);var r=await Zt($e(n,e));if(r.exists())return r.data()}}class Qw{constructor(){this.collectionName=Fe.SETTINGS}async addOrUpdate(e){const n=De(Oe,this.collectionName);tr.fillUpdatedInfo(e),await In($e(n,e.identifier),e),er.log(e,"Settings","Changed settings "+e.identifier)}async getById(e){const n=De(Oe,this.collectionName),r=await Zt($e(n,e));return r.exists()?r.data():{identifier:e}}}class Xw{constructor(){this.users=[],this.collectionName=Fe.USERS}addOrUpdate(e){this.users=_.filter(this.users,function(n){return n.name!=e.name}),this.users.push(e)}async getById(e){if(!e)return;const n=De(Oe,this.collectionName);var r=await Zt($e(n,customerId));if(r.exists())return r.data()}async list(){const e=[],n=bs();return e.push(...n.users),e}setStatus(e,n){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=n)}}class Zw{constructor(){this.collectionName=Fe.RATES}async addOrUpdate(e){let n=Bn.getTodayAsString();const r=De(Oe,this.collectionName);var s={rate:e.rate,date:n};tr.fillUpdatedInfo(s),await In($e(r,n),s),er.log(s,"Rate","Changed rate to "+s.rate)}async list(){const e=De(Oe,this.collectionName),n=Kr(e,_i("date","desc"),ia(10));return(await Gr(n)).docs.map(i=>i.data())}async getTodaysRate(){let e=Bn.getTodayAsString();const n=De(Oe,this.collectionName);var r=await Zt($e(n,e));if(r.exists())return r.data().rate}}class eb{constructor(){this.collectionName=Fe.CCUSTOMERS}async list(e,n=!1){const r=De(Oe,this.collectionName);var s=null;n&&(s=U_("status","==","Active"));const i=Kr(r,s);var l=(await Gr(i)).docs.map(c=>c.data());if(e){const c=e.toLowerCase();l=_.filter(l,function(h){return h.Name.toLowerCase().includes(c)||h.Contact&&h.Contact.toString().toLowerCase().includes(c)})}return l=_.sortBy(l,function(c){return c.Name}),l}async addOrUpdate(e){const n=De(Oe,this.collectionName);var r="Updated";e.id||(e.id=$e(n).id,r="Added"),tr.fillUpdatedInfo(e),await In($e(n,e.id),e),er.log(e,"Customer",r+":"+JSON.stringify(e))}async getById(e){const n=De(Oe,this.collectionName);var r=await Zt($e(n,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,n){const r=$e(De(Oe,this.collectionName),e);try{await H_(Oe,async s=>{const i=await s.get(r);if(!i.exists())throw"Document does not exist!";const o=i.data();n<0?o.debit?o.debit+=n*-1:o.debit=n*-1:o.credit?o.credit+=n:o.credit=n,s.update(r,o)}),console.log("Transaction successfully committed!")}catch(s){console.log("Transaction failed: ",s)}}}class tb{constructor(){this.collectionName=Fe.PRODUCTS}async list(e){const n=De(Oe,this.collectionName),r=Kr(n,_i("Name"));var i=(await Gr(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(l){return l.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const n=De(Oe,this.collectionName);var r="Updated";e.id||(e.id=$e(n).id,r="Added"),tr.fillUpdatedInfo(e),await In($e(n,e.id),e),er.log(e,"Product",r+":"+JSON.stringify(e))}}class nb{constructor(){this.collectionName=Fe.PAYMENTS}async addOrUpdate(e){const n=De(Oe,this.collectionName);var r=await Zt($e(n,e.receiptNumber));if(r.exists())throw"Payment cannot be updated";tr.fillUpdatedInfo(e),await In($e(n,e.receiptNumber),e),await ob.runDebitCreditTransaction(e.customerId,e.amount),er.log(e,"Payment","Added :"+e.receiptNumber)}async list(e,n){const r=De(Oe,this.collectionName),s=Kr(r,_i("paymentDate","desc"),ia(10));return(await Gr(s)).docs.map(l=>l.data())}async getById(e){const n=De(Oe,this.collectionName);var r=await Zt($e(n,e));if(r.exists())return r.data()}}class rb{async tryLogin(e,n){const r=bs();return await Nv(r,e,n)}getCurrentUser(){return bs().currentUser}async signOut(){this.getCurrentUser()&&await bs().signOut()}}class sb{constructor(){this.collectionName=Fe.AUDIT}async log(e,n,r){const s=De(Oe,this.collectionName);In($e(s),{time:e.updatedOn,user:e.updatedByDisplayName,userId:e.updatedBy,module:n,action:r})}}class ib{fillUpdatedInfo(e){const n=Hd.getCurrentUser();e.updatedByDisplayName=n.displayName??n.email,e.updatedBy=n.uid,e.updatedOn=Bn.getNowAsMilliSeconds()}}const yb=new Jw,_b=new Xw,vb=new Zw,ob=new eb,wb=new tb,bb=new Qw,ab=new nb,Hd=new rb,er=new sb,tr=new ib,tn=vp(Ig);tn.use(gu);tn.mount("#app");tn.config.globalProperties.$currentuser={};tn.config.globalProperties.$appname="AL JIHAD JEWELLERY MAKERS";tn.config.globalProperties.$appShortName="AL JIHAD";tn.config.globalProperties.$basedomainname="/aljihad/";tn.config.globalProperties.$statusLabelMapper={enabled:"Active",disabled:"Inactive"};tn.config.globalProperties.$alertShowDuration=3e3;gu.beforeEach((t,e,n)=>{if(t.path.startsWith("/payments/")||t.path.startsWith("/invoices/")||t.path.startsWith("/login")){n();return}Hd.getCurrentUser()?n():n({path:"/login",query:{nextUrl:t.path}})});export{jl as A,ab as B,Bn as C,db as D,it as F,mb as I,Ui as S,Ag as _,hb as a,ue as b,Uf as c,mf as d,gb as e,Ee as f,fb as g,si as h,st as i,Qg as j,vb as k,yb as l,_t as m,ob as n,Ur as o,wb as p,vf as q,ub as r,bb as s,oc as t,hn as u,pb as v,cb as w,Hd as x,mo as y,_b as z};
