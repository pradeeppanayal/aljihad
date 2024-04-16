var qd=Object.defineProperty;var zd=(t,e,n)=>e in t?qd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xe=(t,e,n)=>(zd(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function po(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?Jd(r):po(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ye(t))return t;if(ie(t))return t}}const Wd=/;(?![^(]*\))/g,Kd=/:([^]+)/,Gd=/\/\*.*?\*\//gs;function Jd(t){const e={};return t.replace(Gd,"").split(Wd).forEach(n=>{if(n){const r=n.split(Kd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mo(t){let e="";if(ye(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=mo(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qd=fo(Yd);function sl(t){return!!t||t===""}function Xd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ks(t[r],e[r]);return n}function Ks(t,e){if(t===e)return!0;let n=va(t),r=va(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_r(t),r=_r(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?Xd(t,e):!1;if(n=ie(t),r=ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ks(t[o],e[o]))return!1}}return String(t)===String(e)}function Zd(t,e){return t.findIndex(n=>Ks(n,e))}const il=t=>ye(t)?t:t==null?"":U(t)||ie(t)&&(t.toString===cl||!H(t.toString))?JSON.stringify(t,ol,2):String(t),ol=(t,e)=>e&&e.__v_isRef?ol(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!U(e)&&!ll(e)?String(e):e,ae={},Rn=[],nt=()=>{},eh=()=>!1,th=/^on[^a-z]/,Gs=t=>th.test(t),go=t=>t.startsWith("onUpdate:"),Ne=Object.assign,_o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nh=Object.prototype.hasOwnProperty,J=(t,e)=>nh.call(t,e),U=Array.isArray,Cn=t=>xr(t)==="[object Map]",Js=t=>xr(t)==="[object Set]",va=t=>xr(t)==="[object Date]",H=t=>typeof t=="function",ye=t=>typeof t=="string",_r=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",al=t=>ie(t)&&H(t.then)&&H(t.catch),cl=Object.prototype.toString,xr=t=>cl.call(t),rh=t=>xr(t).slice(8,-1),ll=t=>xr(t)==="[object Object]",yo=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sh=/-(\w)/g,yt=Ys(t=>t.replace(sh,(e,n)=>n?n.toUpperCase():"")),ih=/\B([A-Z])/g,qn=Ys(t=>t.replace(ih,"-$1").toLowerCase()),Qs=Ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ei=Ys(t=>t?`on${Qs(t)}`:""),yr=(t,e)=>!Object.is(t,e),ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Es=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wa;const oh=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ze;class ah{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ch(t,e=Ze){e&&e.active&&e.effects.push(t)}function lh(){return Ze}const vo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ul=t=>(t.w&zt)>0,dl=t=>(t.n&zt)>0,uh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zt},dh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ul(s)&&!dl(s)?s.delete(t):e[n++]=s,s.w&=~zt,s.n&=~zt}e.length=n}},Bi=new WeakMap;let sr=0,zt=1;const ji=30;let et;const an=Symbol(""),Hi=Symbol("");class wo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ch(this,r)}run(){if(!this.active)return this.fn();let e=et,n=Vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=et,et=this,Vt=!0,zt=1<<++sr,sr<=ji?uh(this):ba(this),this.fn()}finally{sr<=ji&&dh(this),zt=1<<--sr,et=this.parent,Vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){et===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vt=!0;const hl=[];function zn(){hl.push(Vt),Vt=!1}function Wn(){const t=hl.pop();Vt=t===void 0?!0:t}function Ue(t,e,n){if(Vt&&et){let r=Bi.get(t);r||Bi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vo()),fl(s)}}function fl(t,e){let n=!1;sr<=ji?dl(t)||(t.n|=zt,n=!ul(t)):n=!t.has(et),n&&(t.add(et),et.deps.push(t))}function Tt(t,e,n,r,s,i){const o=Bi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?yo(n)&&a.push(o.get("length")):(a.push(o.get(an)),Cn(t)&&a.push(o.get(Hi)));break;case"delete":U(t)||(a.push(o.get(an)),Cn(t)&&a.push(o.get(Hi)));break;case"set":Cn(t)&&a.push(o.get(an));break}if(a.length===1)a[0]&&qi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);qi(vo(c))}}function qi(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(t,e){(t!==et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hh=fo("__proto__,__v_isRef,__isVue"),pl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_r)),fh=bo(),ph=bo(!1,!0),mh=bo(!0),Ia=gh();function gh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const r=Q(this)[e].apply(this,n);return Wn(),r}}),t}function _h(t){const e=Q(this);return Ue(e,"has",t),e.hasOwnProperty(t)}function bo(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Dh:vl:e?yl:_l).get(r))return r;const o=U(r);if(!t){if(o&&J(Ia,s))return Reflect.get(Ia,s,i);if(s==="hasOwnProperty")return _h}const a=Reflect.get(r,s,i);return(_r(s)?pl.has(s):hh(s))||(t||Ue(r,"get",s),e)?a:Re(a)?o&&yo(s)?a:a.value:ie(a)?t?wl(a):Mr(a):a}}const yh=ml(),vh=ml(!0);function ml(t=!1){return function(n,r,s,i){let o=n[r];if(xn(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!Is(s)&&!xn(s)&&(o=Q(o),s=Q(s)),!U(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=U(n)&&yo(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,s,i);return n===Q(i)&&(a?yr(s,o)&&Tt(n,"set",r,s):Tt(n,"add",r,s)),c}}function wh(t,e){const n=J(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tt(t,"delete",e,void 0),r}function bh(t,e){const n=Reflect.has(t,e);return(!_r(e)||!pl.has(e))&&Ue(t,"has",e),n}function Eh(t){return Ue(t,"iterate",U(t)?"length":an),Reflect.ownKeys(t)}const gl={get:fh,set:yh,deleteProperty:wh,has:bh,ownKeys:Eh},Ih={get:mh,set(t,e){return!0},deleteProperty(t,e){return!0}},Th=Ne({},gl,{get:ph,set:vh}),Eo=t=>t,Xs=t=>Reflect.getPrototypeOf(t);function Zr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(e!==i&&Ue(s,"get",e),Ue(s,"get",i));const{has:o}=Xs(s),a=r?Eo:n?So:vr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function es(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(t!==s&&Ue(r,"has",t),Ue(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ts(t,e=!1){return t=t.__v_raw,!e&&Ue(Q(t),"iterate",an),Reflect.get(t,"size",t)}function Ta(t){t=Q(t);const e=Q(this);return Xs(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function Sa(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=Xs(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?yr(e,o)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function Aa(t){const e=Q(this),{has:n,get:r}=Xs(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tt(e,"delete",t,void 0),i}function Ra(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function ns(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),c=e?Eo:t?So:vr;return!t&&Ue(a,"iterate",an),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function rs(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=Cn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Eo:e?So:vr;return!e&&Ue(i,"iterate",c?Hi:an),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Ot(t){return function(...e){return t==="delete"?!1:this}}function Sh(){const t={get(i){return Zr(this,i)},get size(){return ts(this)},has:es,add:Ta,set:Sa,delete:Aa,clear:Ra,forEach:ns(!1,!1)},e={get(i){return Zr(this,i,!1,!0)},get size(){return ts(this)},has:es,add:Ta,set:Sa,delete:Aa,clear:Ra,forEach:ns(!1,!0)},n={get(i){return Zr(this,i,!0)},get size(){return ts(this,!0)},has(i){return es.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:ns(!0,!1)},r={get(i){return Zr(this,i,!0,!0)},get size(){return ts(this,!0)},has(i){return es.call(this,i,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=rs(i,!1,!1),n[i]=rs(i,!0,!1),e[i]=rs(i,!1,!0),r[i]=rs(i,!0,!0)}),[t,n,e,r]}const[Ah,Rh,Ch,Ph]=Sh();function Io(t,e){const n=e?t?Ph:Ch:t?Rh:Ah;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const Oh={get:Io(!1,!1)},kh={get:Io(!1,!0)},Nh={get:Io(!0,!1)},_l=new WeakMap,yl=new WeakMap,vl=new WeakMap,Dh=new WeakMap;function xh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mh(t){return t.__v_skip||!Object.isExtensible(t)?0:xh(rh(t))}function Mr(t){return xn(t)?t:To(t,!1,gl,Oh,_l)}function Lh(t){return To(t,!1,Th,kh,yl)}function wl(t){return To(t,!0,Ih,Nh,vl)}function To(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Pn(t){return xn(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function xn(t){return!!(t&&t.__v_isReadonly)}function Is(t){return!!(t&&t.__v_isShallow)}function bl(t){return Pn(t)||xn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function El(t){return bs(t,"__v_skip",!0),t}const vr=t=>ie(t)?Mr(t):t,So=t=>ie(t)?wl(t):t;function Il(t){Vt&&et&&(t=Q(t),fl(t.dep||(t.dep=vo())))}function Tl(t,e){t=Q(t);const n=t.dep;n&&qi(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Fh(t){return Sl(t,!1)}function Uh(t){return Sl(t,!0)}function Sl(t,e){return Re(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:vr(e)}get value(){return Il(this),this._value}set value(e){const n=this.__v_isShallow||Is(e)||xn(e);e=n?e:Q(e),yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vr(e),Tl(this))}}function cn(t){return Re(t)?t.value:t}const $h={get:(t,e,n)=>cn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Al(t){return Pn(t)?t:new Proxy(t,$h)}var Rl;class Bh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rl]=!1,this._dirty=!0,this.effect=new wo(e,()=>{this._dirty||(this._dirty=!0,Tl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return Il(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rl="__v_isReadonly";function jh(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=nt):(r=t.get,s=t.set),new Bh(r,s,i||!s,n)}function $t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zs(i,e,n)}return s}function rt(t,e,n,r){if(H(t)){const i=$t(t,e,n,r);return i&&al(i)&&i.catch(o=>{Zs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(rt(t[i],e,n,r));return s}function Zs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$t(c,null,10,[t,o,a]);return}}Hh(t,n,s,r)}function Hh(t,e,n,r=!0){console.error(t)}let wr=!1,zi=!1;const Ae=[];let pt=0;const On=[];let wt=null,nn=0;const Cl=Promise.resolve();let Ao=null;function Pl(t){const e=Ao||Cl;return t?e.then(this?t.bind(this):t):e}function qh(t){let e=pt+1,n=Ae.length;for(;e<n;){const r=e+n>>>1;br(Ae[r])<t?e=r+1:n=r}return e}function Ro(t){(!Ae.length||!Ae.includes(t,wr&&t.allowRecurse?pt+1:pt))&&(t.id==null?Ae.push(t):Ae.splice(qh(t.id),0,t),Ol())}function Ol(){!wr&&!zi&&(zi=!0,Ao=Cl.then(Nl))}function zh(t){const e=Ae.indexOf(t);e>pt&&Ae.splice(e,1)}function Wh(t){U(t)?On.push(...t):(!wt||!wt.includes(t,t.allowRecurse?nn+1:nn))&&On.push(t),Ol()}function Ca(t,e=wr?pt+1:0){for(;e<Ae.length;e++){const n=Ae[e];n&&n.pre&&(Ae.splice(e,1),e--,n())}}function kl(t){if(On.length){const e=[...new Set(On)];if(On.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,r)=>br(n)-br(r)),nn=0;nn<wt.length;nn++)wt[nn]();wt=null,nn=0}}const br=t=>t.id==null?1/0:t.id,Kh=(t,e)=>{const n=br(t)-br(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nl(t){zi=!1,wr=!0,Ae.sort(Kh);const e=nt;try{for(pt=0;pt<Ae.length;pt++){const n=Ae[pt];n&&n.active!==!1&&$t(n,null,14)}}finally{pt=0,Ae.length=0,kl(),wr=!1,Ao=null,(Ae.length||On.length)&&Nl()}}function Gh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ae;p&&(s=n.map(y=>ye(y)?y.trim():y)),h&&(s=n.map(Es))}let a,c=r[a=Ei(e)]||r[a=Ei(yt(e))];!c&&i&&(c=r[a=Ei(qn(e))]),c&&rt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(l,t,6,s)}}function Dl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=Dl(l,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):Ne(o,i),ie(t)&&r.set(t,o),o)}function ei(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,qn(e))||J(t,e))}let Ce=null,xl=null;function Ts(t){const e=Ce;return Ce=t,xl=t&&t.type.__scopeId||null,e}function We(t,e=Ce,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fa(-1);const i=Ts(e);let o;try{o=t(...s)}finally{Ts(i),r._d&&Fa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ii(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:y,ctx:S,inheritAttrs:N}=t;let V,O;const B=Ts(t);try{if(n.shapeFlag&4){const Y=s||r;V=ht(u.call(Y,Y,h,i,y,p,S)),O=c}else{const Y=e;V=ht(Y.length>1?Y(i,{attrs:c,slots:a,emit:l}):Y(i,null)),O=e.props?c:Jh(c)}}catch(Y){lr.length=0,Zs(Y,t,1),V=oe(Wt)}let D=V;if(O&&N!==!1){const Y=Object.keys(O),{shapeFlag:pe}=D;Y.length&&pe&7&&(o&&Y.some(go)&&(O=Yh(O,o)),D=Mn(D,O))}return n.dirs&&(D=Mn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),V=D,Ts(B),V}const Jh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},Yh=(t,e)=>{const n={};for(const r in t)(!go(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Qh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Pa(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!ei(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Pa(r,o,l):!0:!!o;return!1}function Pa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ei(n,i))return!0}return!1}function Xh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Zh=t=>t.__isSuspense;function ef(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Wh(t)}function hs(t,e){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=he||Ce;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const ss={};function fs(t,e,n){return Ml(t,e,n)}function Ml(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ae){const a=lh()===(he==null?void 0:he.scope)?he:null;let c,l=!1,u=!1;if(Re(t)?(c=()=>t.value,l=Is(t)):Pn(t)?(c=()=>t,r=!0):U(t)?(u=!0,l=t.some(D=>Pn(D)||Is(D)),c=()=>t.map(D=>{if(Re(D))return D.value;if(Pn(D))return on(D);if(H(D))return $t(D,a,2)})):H(t)?e?c=()=>$t(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),rt(t,a,3,[p])}:c=nt,e&&r){const D=c;c=()=>on(D())}let h,p=D=>{h=O.onStop=()=>{$t(D,a,4)}},y;if(Ir)if(p=nt,e?n&&rt(e,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const D=Qf();y=D.__watcherHandles||(D.__watcherHandles=[])}else return nt;let S=u?new Array(t.length).fill(ss):ss;const N=()=>{if(O.active)if(e){const D=O.run();(r||l||(u?D.some((Y,pe)=>yr(Y,S[pe])):yr(D,S)))&&(h&&h(),rt(e,a,3,[D,S===ss?void 0:u&&S[0]===ss?[]:S,p]),S=D)}else O.run()};N.allowRecurse=!!e;let V;s==="sync"?V=N:s==="post"?V=()=>Me(N,a&&a.suspense):(N.pre=!0,a&&(N.id=a.uid),V=()=>Ro(N));const O=new wo(c,V);e?n?N():S=O.run():s==="post"?Me(O.run.bind(O),a&&a.suspense):O.run();const B=()=>{O.stop(),a&&a.scope&&_o(a.scope.effects,O)};return y&&y.push(B),B}function tf(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?Ll(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=he;Ln(this);const a=Ml(s,i.bind(r),n);return o?Ln(o):ln(),a}function Ll(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function on(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))on(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)on(t[n],e);else if(Js(t)||Cn(t))t.forEach(n=>{on(n,e)});else if(ll(t))for(const n in t)on(t[n],e);return t}function Fl(t){return H(t)?{setup:t,name:t.name}:t}const ar=t=>!!t.type.__asyncLoader,Ul=t=>t.type.__isKeepAlive;function nf(t,e){Vl(t,"a",e)}function rf(t,e){Vl(t,"da",e)}function Vl(t,e,n=he){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ti(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ul(s.parent.vnode)&&sf(r,e,n,s),s=s.parent}}function sf(t,e,n,r){const s=ti(e,t,r,!0);$l(()=>{_o(r[e],s)},n)}function ti(t,e,n=he,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),Ln(n);const a=rt(e,n,t,o);return ln(),Wn(),a});return r?s.unshift(i):s.push(i),i}}const Rt=t=>(e,n=he)=>(!Ir||t==="sp")&&ti(t,(...r)=>e(...r),n),of=Rt("bm"),af=Rt("m"),cf=Rt("bu"),lf=Rt("u"),uf=Rt("bum"),$l=Rt("um"),df=Rt("sp"),hf=Rt("rtg"),ff=Rt("rtc");function pf(t,e=he){ti("ec",t,e)}function cb(t,e){const n=Ce;if(n===null)return t;const r=ii(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ae]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&on(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(zn(),rt(c,n,8,[t.el,a,t,e]),Wn())}}const Bl="components";function mf(t,e){return _f(Bl,t,!0,e)||t}const gf=Symbol();function _f(t,e,n=!0,r=!1){const s=Ce||he;if(s){const i=s.type;if(t===Bl){const a=Gf(i,!1);if(a&&(a===e||a===yt(e)||a===Qs(yt(e))))return i}const o=Oa(s[t]||i[t],e)||Oa(s.appContext[t],e);return!o&&r?i:o}}function Oa(t,e){return t&&(t[e]||t[yt(e)]||t[Qs(yt(e))])}function lb(t,e,n,r){let s;const i=n&&n[r];if(U(t)||ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function yf(t,e,n={},r,s){if(Ce.isCE||Ce.parent&&ar(Ce.parent)&&Ce.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Lr();const o=i&&jl(i(n)),a=ri(Ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function jl(t){return t.some(e=>As(e)?!(e.type===Wt||e.type===Ke&&!jl(e.children)):!0)?t:null}const Wi=t=>t?Zl(t)?ii(t)||t.proxy:Wi(t.parent):null,cr=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wi(t.parent),$root:t=>Wi(t.root),$emit:t=>t.emit,$options:t=>Co(t),$forceUpdate:t=>t.f||(t.f=()=>Ro(t.update)),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>tf.bind(t)}),Ti=(t,e)=>t!==ae&&!t.__isScriptSetup&&J(t,e),vf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ti(r,e))return o[e]=1,r[e];if(s!==ae&&J(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==ae&&J(n,e))return o[e]=4,n[e];Ki&&(o[e]=0)}}const u=cr[e];let h,p;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ti(s,e)?(s[e]=n,!0):r!==ae&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ae&&J(t,o)||Ti(e,o)||(a=i[0])&&J(a,o)||J(r,o)||J(cr,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ki=!0;function wf(t){const e=Co(t),n=t.proxy,r=t.ctx;Ki=!1,e.beforeCreate&&ka(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:y,updated:S,activated:N,deactivated:V,beforeDestroy:O,beforeUnmount:B,destroyed:D,unmounted:Y,render:pe,renderTracked:Ee,renderTriggered:Ve,errorCaptured:Je,serverPrefetch:at,expose:ze,inheritAttrs:Pt,components:ct,directives:wn,filters:Yt}=e;if(l&&bf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ee=o[re];H(ee)&&(r[re]=ee.bind(n))}if(s){const re=s.call(n,n);ie(re)&&(t.data=Mr(re))}if(Ki=!0,i)for(const re in i){const ee=i[re],Ye=H(ee)?ee.bind(n,n):H(ee.get)?ee.get.bind(n,n):nt,Qt=!H(ee)&&H(ee.set)?ee.set.bind(n):nt,Qe=Ge({get:Ye,set:Qt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:De=>Qe.value=De})}if(a)for(const re in a)Hl(a[re],r,n,re);if(c){const re=H(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ee=>{hs(ee,re[ee])})}u&&ka(u,t,"c");function le(re,ee){U(ee)?ee.forEach(Ye=>re(Ye.bind(n))):ee&&re(ee.bind(n))}if(le(of,h),le(af,p),le(cf,y),le(lf,S),le(nf,N),le(rf,V),le(pf,Je),le(ff,Ee),le(hf,Ve),le(uf,B),le($l,Y),le(df,at),U(ze))if(ze.length){const re=t.exposed||(t.exposed={});ze.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:Ye=>n[ee]=Ye})})}else t.exposed||(t.exposed={});pe&&t.render===nt&&(t.render=pe),Pt!=null&&(t.inheritAttrs=Pt),ct&&(t.components=ct),wn&&(t.directives=wn)}function bf(t,e,n=nt,r=!1){U(t)&&(t=Gi(t));for(const s in t){const i=t[s];let o;ie(i)?"default"in i?o=It(i.from||s,i.default,!0):o=It(i.from||s):o=It(i),Re(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ka(t,e,n){rt(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hl(t,e,n,r){const s=r.includes(".")?Ll(n,r):()=>n[r];if(ye(t)){const i=e[t];H(i)&&fs(s,i)}else if(H(t))fs(s,t.bind(n));else if(ie(t))if(U(t))t.forEach(i=>Hl(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&fs(s,i,t)}}function Co(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ss(c,l,o,!0)),Ss(c,e,o)),ie(e)&&i.set(e,c),c}function Ss(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ss(t,i,n,!0),s&&s.forEach(o=>Ss(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ef[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ef={data:Na,props:en,emits:en,methods:en,computed:en,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:en,directives:en,watch:Tf,provide:Na,inject:If};function Na(t,e){return e?t?function(){return Ne(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function If(t,e){return en(Gi(t),Gi(e))}function Gi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?Ne(Ne(Object.create(null),t),e):e}function Tf(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=ke(t[r],e[r]);return n}function Sf(t,e,n,r=!1){const s={},i={};bs(i,si,1),t.propsDefaults=Object.create(null),ql(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Af(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(ei(t.emitsOptions,p))continue;const y=e[p];if(c)if(J(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const S=yt(p);s[S]=Ji(c,a,S,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{ql(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!J(e,h)&&((u=qn(h))===h||!J(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ji(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!J(e,h))&&(delete i[h],l=!0)}l&&Tt(t,"set","$attrs")}function ql(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(us(c))continue;const l=e[c];let u;s&&J(s,u=yt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ei(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Q(n),l=a||ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ji(s,c,h,l[h],t,!J(l,h))}}return o}function Ji(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ln(s),r=l[n]=c.call(null,e),ln())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===qn(n))&&(r=!0))}return r}function zl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[p,y]=zl(h,e,!0);Ne(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&r.set(t,Rn),Rn;if(U(i))for(let u=0;u<i.length;u++){const h=yt(i[u]);Da(h)&&(o[h]=ae)}else if(i)for(const u in i){const h=yt(u);if(Da(h)){const p=i[u],y=o[h]=U(p)||H(p)?{type:p}:Object.assign({},p);if(y){const S=La(Boolean,y.type),N=La(String,y.type);y[0]=S>-1,y[1]=N<0||S<N,(S>-1||J(y,"default"))&&a.push(h)}}}const l=[o,a];return ie(t)&&r.set(t,l),l}function Da(t){return t[0]!=="$"}function xa(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ma(t,e){return xa(t)===xa(e)}function La(t,e){return U(e)?e.findIndex(n=>Ma(n,t)):H(e)&&Ma(e,t)?0:-1}const Wl=t=>t[0]==="_"||t==="$stable",Po=t=>U(t)?t.map(ht):[ht(t)],Rf=(t,e,n)=>{if(e._n)return e;const r=We((...s)=>Po(e(...s)),n);return r._c=!1,r},Kl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wl(s))continue;const i=t[s];if(H(i))e[s]=Rf(s,i,r);else if(i!=null){const o=Po(i);e[s]=()=>o}}},Gl=(t,e)=>{const n=Po(e);t.slots.default=()=>n},Cf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),bs(e,"_",n)):Kl(e,t.slots={})}else t.slots={},e&&Gl(t,e);bs(t.slots,si,1)},Pf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ne(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Kl(e,s)),o=e}else e&&(Gl(t,e),o={default:1});if(i)for(const a in s)!Wl(a)&&!(a in o)&&delete s[a]};function Jl(){return{app:null,config:{isNativeTag:eh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Of=0;function kf(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!ie(s)&&(s=null);const i=Jl(),o=new Set;let a=!1;const c=i.app={_uid:Of++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=oe(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,ii(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Yi(t,e,n,r,s=!1){if(U(t)){t.forEach((p,y)=>Yi(p,e&&(U(e)?e[y]:e),n,r,s));return}if(ar(r)&&!s)return;const i=r.shapeFlag&4?ii(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,J(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),H(c))$t(c,a,12,[o,u]);else{const p=ye(c),y=Re(c);if(p||y){const S=()=>{if(t.f){const N=p?J(h,c)?h[c]:u[c]:c.value;s?U(N)&&_o(N,i):U(N)?N.includes(i)||N.push(i):p?(u[c]=[i],J(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,J(h,c)&&(h[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,Me(S,n)):S()}}}const Me=ef;function Nf(t){return Df(t)}function Df(t,e){const n=oh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:y=nt,insertStaticContent:S}=t,N=(d,f,m,g=null,w=null,I=null,R=!1,E=null,T=!!f.dynamicChildren)=>{if(d===f)return;d&&!tr(d,f)&&(g=A(d),De(d,w,I,!0),d=null),f.patchFlag===-2&&(T=!1,f.dynamicChildren=null);const{type:b,ref:M,shapeFlag:k}=f;switch(b){case ni:V(d,f,m,g);break;case Wt:O(d,f,m,g);break;case ps:d==null&&B(f,m,g,R);break;case Ke:ct(d,f,m,g,w,I,R,E,T);break;default:k&1?pe(d,f,m,g,w,I,R,E,T):k&6?wn(d,f,m,g,w,I,R,E,T):(k&64||k&128)&&b.process(d,f,m,g,w,I,R,E,T,G)}M!=null&&w&&Yi(M,d&&d.ref,I,f||d,!f)},V=(d,f,m,g)=>{if(d==null)r(f.el=a(f.children),m,g);else{const w=f.el=d.el;f.children!==d.children&&l(w,f.children)}},O=(d,f,m,g)=>{d==null?r(f.el=c(f.children||""),m,g):f.el=d.el},B=(d,f,m,g)=>{[d.el,d.anchor]=S(d.children,f,m,g,d.el,d.anchor)},D=({el:d,anchor:f},m,g)=>{let w;for(;d&&d!==f;)w=p(d),r(d,m,g),d=w;r(f,m,g)},Y=({el:d,anchor:f})=>{let m;for(;d&&d!==f;)m=p(d),s(d),d=m;s(f)},pe=(d,f,m,g,w,I,R,E,T)=>{R=R||f.type==="svg",d==null?Ee(f,m,g,w,I,R,E,T):at(d,f,w,I,R,E,T)},Ee=(d,f,m,g,w,I,R,E)=>{let T,b;const{type:M,props:k,shapeFlag:L,transition:j,dirs:z}=d;if(T=d.el=o(d.type,I,k&&k.is,k),L&8?u(T,d.children):L&16&&Je(d.children,T,null,g,w,I&&M!=="foreignObject",R,E),z&&Xt(d,null,g,"created"),Ve(T,d,d.scopeId,R,g),k){for(const te in k)te!=="value"&&!us(te)&&i(T,te,null,k[te],I,d.children,g,w,C);"value"in k&&i(T,"value",null,k.value),(b=k.onVnodeBeforeMount)&&ut(b,g,d)}z&&Xt(d,null,g,"beforeMount");const se=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;se&&j.beforeEnter(T),r(T,f,m),((b=k&&k.onVnodeMounted)||se||z)&&Me(()=>{b&&ut(b,g,d),se&&j.enter(T),z&&Xt(d,null,g,"mounted")},w)},Ve=(d,f,m,g,w)=>{if(m&&y(d,m),g)for(let I=0;I<g.length;I++)y(d,g[I]);if(w){let I=w.subTree;if(f===I){const R=w.vnode;Ve(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},Je=(d,f,m,g,w,I,R,E,T=0)=>{for(let b=T;b<d.length;b++){const M=d[b]=E?Dt(d[b]):ht(d[b]);N(null,M,f,m,g,w,I,R,E)}},at=(d,f,m,g,w,I,R)=>{const E=f.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:M}=f;T|=d.patchFlag&16;const k=d.props||ae,L=f.props||ae;let j;m&&Zt(m,!1),(j=L.onVnodeBeforeUpdate)&&ut(j,m,f,d),M&&Xt(f,d,m,"beforeUpdate"),m&&Zt(m,!0);const z=w&&f.type!=="foreignObject";if(b?ze(d.dynamicChildren,b,E,m,g,z,I):R||ee(d,f,E,null,m,g,z,I,!1),T>0){if(T&16)Pt(E,f,k,L,m,g,w);else if(T&2&&k.class!==L.class&&i(E,"class",null,L.class,w),T&4&&i(E,"style",k.style,L.style,w),T&8){const se=f.dynamicProps;for(let te=0;te<se.length;te++){const ue=se[te],Xe=k[ue],En=L[ue];(En!==Xe||ue==="value")&&i(E,ue,Xe,En,w,d.children,m,g,C)}}T&1&&d.children!==f.children&&u(E,f.children)}else!R&&b==null&&Pt(E,f,k,L,m,g,w);((j=L.onVnodeUpdated)||M)&&Me(()=>{j&&ut(j,m,f,d),M&&Xt(f,d,m,"updated")},g)},ze=(d,f,m,g,w,I,R)=>{for(let E=0;E<f.length;E++){const T=d[E],b=f[E],M=T.el&&(T.type===Ke||!tr(T,b)||T.shapeFlag&70)?h(T.el):m;N(T,b,M,null,g,w,I,R,!0)}},Pt=(d,f,m,g,w,I,R)=>{if(m!==g){if(m!==ae)for(const E in m)!us(E)&&!(E in g)&&i(d,E,m[E],null,R,f.children,w,I,C);for(const E in g){if(us(E))continue;const T=g[E],b=m[E];T!==b&&E!=="value"&&i(d,E,b,T,R,f.children,w,I,C)}"value"in g&&i(d,"value",m.value,g.value)}},ct=(d,f,m,g,w,I,R,E,T)=>{const b=f.el=d?d.el:a(""),M=f.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:L,slotScopeIds:j}=f;j&&(E=E?E.concat(j):j),d==null?(r(b,m,g),r(M,m,g),Je(f.children,m,M,w,I,R,E,T)):k>0&&k&64&&L&&d.dynamicChildren?(ze(d.dynamicChildren,L,m,w,I,R,E),(f.key!=null||w&&f===w.subTree)&&Yl(d,f,!0)):ee(d,f,m,M,w,I,R,E,T)},wn=(d,f,m,g,w,I,R,E,T)=>{f.slotScopeIds=E,d==null?f.shapeFlag&512?w.ctx.activate(f,m,g,R,T):Yt(f,m,g,w,I,R,T):Zn(d,f,T)},Yt=(d,f,m,g,w,I,R)=>{const E=d.component=Hf(d,g,w);if(Ul(d)&&(E.ctx.renderer=G),qf(E),E.asyncDep){if(w&&w.registerDep(E,le),!d.el){const T=E.subTree=oe(Wt);O(null,T,f,m)}return}le(E,d,f,m,w,I,R)},Zn=(d,f,m)=>{const g=f.component=d.component;if(Qh(d,f,m))if(g.asyncDep&&!g.asyncResolved){re(g,f,m);return}else g.next=f,zh(g.update),g.update();else f.el=d.el,g.vnode=f},le=(d,f,m,g,w,I,R)=>{const E=()=>{if(d.isMounted){let{next:M,bu:k,u:L,parent:j,vnode:z}=d,se=M,te;Zt(d,!1),M?(M.el=z.el,re(d,M,R)):M=z,k&&ds(k),(te=M.props&&M.props.onVnodeBeforeUpdate)&&ut(te,j,M,z),Zt(d,!0);const ue=Ii(d),Xe=d.subTree;d.subTree=ue,N(Xe,ue,h(Xe.el),A(Xe),d,w,I),M.el=ue.el,se===null&&Xh(d,ue.el),L&&Me(L,w),(te=M.props&&M.props.onVnodeUpdated)&&Me(()=>ut(te,j,M,z),w)}else{let M;const{el:k,props:L}=f,{bm:j,m:z,parent:se}=d,te=ar(f);if(Zt(d,!1),j&&ds(j),!te&&(M=L&&L.onVnodeBeforeMount)&&ut(M,se,f),Zt(d,!0),k&&q){const ue=()=>{d.subTree=Ii(d),q(k,d.subTree,d,w,null)};te?f.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=Ii(d);N(null,ue,m,g,d,w,I),f.el=ue.el}if(z&&Me(z,w),!te&&(M=L&&L.onVnodeMounted)){const ue=f;Me(()=>ut(M,se,ue),w)}(f.shapeFlag&256||se&&ar(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Me(d.a,w),d.isMounted=!0,f=m=g=null}},T=d.effect=new wo(E,()=>Ro(b),d.scope),b=d.update=()=>T.run();b.id=d.uid,Zt(d,!0),b()},re=(d,f,m)=>{f.component=d;const g=d.vnode.props;d.vnode=f,d.next=null,Af(d,f.props,g,m),Pf(d,f.children,m),zn(),Ca(),Wn()},ee=(d,f,m,g,w,I,R,E,T=!1)=>{const b=d&&d.children,M=d?d.shapeFlag:0,k=f.children,{patchFlag:L,shapeFlag:j}=f;if(L>0){if(L&128){Qt(b,k,m,g,w,I,R,E,T);return}else if(L&256){Ye(b,k,m,g,w,I,R,E,T);return}}j&8?(M&16&&C(b,w,I),k!==b&&u(m,k)):M&16?j&16?Qt(b,k,m,g,w,I,R,E,T):C(b,w,I,!0):(M&8&&u(m,""),j&16&&Je(k,m,g,w,I,R,E,T))},Ye=(d,f,m,g,w,I,R,E,T)=>{d=d||Rn,f=f||Rn;const b=d.length,M=f.length,k=Math.min(b,M);let L;for(L=0;L<k;L++){const j=f[L]=T?Dt(f[L]):ht(f[L]);N(d[L],j,m,null,w,I,R,E,T)}b>M?C(d,w,I,!0,!1,k):Je(f,m,g,w,I,R,E,T,k)},Qt=(d,f,m,g,w,I,R,E,T)=>{let b=0;const M=f.length;let k=d.length-1,L=M-1;for(;b<=k&&b<=L;){const j=d[b],z=f[b]=T?Dt(f[b]):ht(f[b]);if(tr(j,z))N(j,z,m,null,w,I,R,E,T);else break;b++}for(;b<=k&&b<=L;){const j=d[k],z=f[L]=T?Dt(f[L]):ht(f[L]);if(tr(j,z))N(j,z,m,null,w,I,R,E,T);else break;k--,L--}if(b>k){if(b<=L){const j=L+1,z=j<M?f[j].el:g;for(;b<=L;)N(null,f[b]=T?Dt(f[b]):ht(f[b]),m,z,w,I,R,E,T),b++}}else if(b>L)for(;b<=k;)De(d[b],w,I,!0),b++;else{const j=b,z=b,se=new Map;for(b=z;b<=L;b++){const $e=f[b]=T?Dt(f[b]):ht(f[b]);$e.key!=null&&se.set($e.key,b)}let te,ue=0;const Xe=L-z+1;let En=!1,ga=0;const er=new Array(Xe);for(b=0;b<Xe;b++)er[b]=0;for(b=j;b<=k;b++){const $e=d[b];if(ue>=Xe){De($e,w,I,!0);continue}let lt;if($e.key!=null)lt=se.get($e.key);else for(te=z;te<=L;te++)if(er[te-z]===0&&tr($e,f[te])){lt=te;break}lt===void 0?De($e,w,I,!0):(er[lt-z]=b+1,lt>=ga?ga=lt:En=!0,N($e,f[lt],m,null,w,I,R,E,T),ue++)}const _a=En?xf(er):Rn;for(te=_a.length-1,b=Xe-1;b>=0;b--){const $e=z+b,lt=f[$e],ya=$e+1<M?f[$e+1].el:g;er[b]===0?N(null,lt,m,ya,w,I,R,E,T):En&&(te<0||b!==_a[te]?Qe(lt,m,ya,2):te--)}}},Qe=(d,f,m,g,w=null)=>{const{el:I,type:R,transition:E,children:T,shapeFlag:b}=d;if(b&6){Qe(d.component.subTree,f,m,g);return}if(b&128){d.suspense.move(f,m,g);return}if(b&64){R.move(d,f,m,G);return}if(R===Ke){r(I,f,m);for(let k=0;k<T.length;k++)Qe(T[k],f,m,g);r(d.anchor,f,m);return}if(R===ps){D(d,f,m);return}if(g!==2&&b&1&&E)if(g===0)E.beforeEnter(I),r(I,f,m),Me(()=>E.enter(I),w);else{const{leave:k,delayLeave:L,afterLeave:j}=E,z=()=>r(I,f,m),se=()=>{k(I,()=>{z(),j&&j()})};L?L(I,z,se):se()}else r(I,f,m)},De=(d,f,m,g=!1,w=!1)=>{const{type:I,props:R,ref:E,children:T,dynamicChildren:b,shapeFlag:M,patchFlag:k,dirs:L}=d;if(E!=null&&Yi(E,null,m,d,!0),M&256){f.ctx.deactivate(d);return}const j=M&1&&L,z=!ar(d);let se;if(z&&(se=R&&R.onVnodeBeforeUnmount)&&ut(se,f,d),M&6)v(d.component,m,g);else{if(M&128){d.suspense.unmount(m,g);return}j&&Xt(d,null,f,"beforeUnmount"),M&64?d.type.remove(d,f,m,w,G,g):b&&(I!==Ke||k>0&&k&64)?C(b,f,m,!1,!0):(I===Ke&&k&384||!w&&M&16)&&C(T,f,m),g&&bn(d)}(z&&(se=R&&R.onVnodeUnmounted)||j)&&Me(()=>{se&&ut(se,f,d),j&&Xt(d,null,f,"unmounted")},m)},bn=d=>{const{type:f,el:m,anchor:g,transition:w}=d;if(f===Ke){Xr(m,g);return}if(f===ps){Y(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:E}=w,T=()=>R(m,I);E?E(d.el,I,T):T()}else I()},Xr=(d,f)=>{let m;for(;d!==f;)m=p(d),s(d),d=m;s(f)},v=(d,f,m)=>{const{bum:g,scope:w,update:I,subTree:R,um:E}=d;g&&ds(g),w.stop(),I&&(I.active=!1,De(R,d,f,m)),E&&Me(E,f),Me(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},C=(d,f,m,g=!1,w=!1,I=0)=>{for(let R=I;R<d.length;R++)De(d[R],f,m,g,w)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,f,m)=>{d==null?f._vnode&&De(f._vnode,null,null,!0):N(f._vnode||null,d,f,null,null,null,m),Ca(),kl(),f._vnode=d},G={p:N,um:De,m:Qe,r:bn,mt:Yt,mc:Je,pc:ee,pbc:ze,n:A,o:t};let ce,q;return e&&([ce,q]=e(G)),{render:x,hydrate:ce,createApp:kf(x,ce)}}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yl(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dt(s[i]),a.el=o.el),n||Yl(o,a)),a.type===ni&&(a.el=o.el)}}function xf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mf=t=>t.__isTeleport,Ke=Symbol(void 0),ni=Symbol(void 0),Wt=Symbol(void 0),ps=Symbol(void 0),lr=[];let tt=null;function Lr(t=!1){lr.push(tt=t?null:[])}function Lf(){lr.pop(),tt=lr[lr.length-1]||null}let Er=1;function Fa(t){Er+=t}function Ql(t){return t.dynamicChildren=Er>0?tt||Rn:null,Lf(),Er>0&&tt&&tt.push(t),t}function Ff(t,e,n,r,s,i){return Ql(W(t,e,n,r,s,i,!0))}function ri(t,e,n,r,s){return Ql(oe(t,e,n,r,s,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const si="__vInternal",Xl=({key:t})=>t??null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||Re(t)||H(t)?{i:Ce,r:t,k:e,f:!!n}:t:null;function W(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xl(e),ref:e&&ms(e),scopeId:xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return a?(Oo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),Er>0&&!o&&tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&tt.push(c),c}const oe=Uf;function Uf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gf)&&(t=Wt),As(t)){const a=Mn(t,e,!0);return n&&Oo(a,n),Er>0&&!i&&tt&&(a.shapeFlag&6?tt[tt.indexOf(t)]=a:tt.push(a)),a.patchFlag|=-2,a}if(Jf(t)&&(t=t.__vccOpts),e){e=Vf(e);let{class:a,style:c}=e;a&&!ye(a)&&(e.class=mo(a)),ie(c)&&(bl(c)&&!U(c)&&(c=Ne({},c)),e.style=po(c))}const o=ye(t)?1:Zh(t)?128:Mf(t)?64:ie(t)?4:H(t)?2:0;return W(t,e,n,r,s,o,i,!0)}function Vf(t){return t?bl(t)||si in t?Ne({},t):t:null}function Mn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?$f(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xl(a),ref:e&&e.ref?n&&s?U(s)?s.concat(ms(e)):[s,ms(e)]:ms(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function dt(t=" ",e=0){return oe(ni,null,t,e)}function ub(t,e){const n=oe(ps,null,t);return n.staticCount=e,n}function db(t="",e=!1){return e?(Lr(),ri(Wt,null,t)):oe(Wt,null,t)}function ht(t){return t==null||typeof t=="boolean"?oe(Wt):U(t)?oe(Ke,null,t.slice()):typeof t=="object"?Dt(t):oe(ni,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function Oo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Oo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(si in e)?e._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ce},n=32):(e=String(e),r&64?(n=16,e=[dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function $f(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mo([e.class,r.class]));else if(s==="style")e.style=po([e.style,r.style]);else if(Gs(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ut(t,e,n,r=null){rt(t,e,7,[n,r])}const Bf=Jl();let jf=0;function Hf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bf,i={uid:jf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zl(r,s),emitsOptions:Dl(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gh.bind(null,i),t.ce&&t.ce(i),i}let he=null;const Ln=t=>{he=t,t.scope.on()},ln=()=>{he&&he.scope.off(),he=null};function Zl(t){return t.vnode.shapeFlag&4}let Ir=!1;function qf(t,e=!1){Ir=e;const{props:n,children:r}=t.vnode,s=Zl(t);Sf(t,n,s,e),Cf(t,r);const i=s?zf(t,e):void 0;return Ir=!1,i}function zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=El(new Proxy(t.ctx,vf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Kf(t):null;Ln(t),zn();const i=$t(r,t,0,[t.props,s]);if(Wn(),ln(),al(i)){if(i.then(ln,ln),e)return i.then(o=>{Ua(t,o,e)}).catch(o=>{Zs(o,t,0)});t.asyncDep=i}else Ua(t,i,e)}else eu(t,e)}function Ua(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Al(e)),eu(t,n)}let Va;function eu(t,e,n){const r=t.type;if(!t.render){if(!e&&Va&&!r.render){const s=r.template||Co(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ne(Ne({isCustomElement:i,delimiters:a},o),c);r.render=Va(s,l)}}t.render=r.render||nt}Ln(t),zn(),wf(t),Wn(),ln()}function Wf(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function Kf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Wf(t))},slots:t.slots,emit:t.emit,expose:e}}function ii(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Al(El(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cr)return cr[n](t)},has(e,n){return n in e||n in cr}}))}function Gf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Jf(t){return H(t)&&"__vccOpts"in t}const Ge=(t,e)=>jh(t,e,Ir);function tu(t,e,n){const r=arguments.length;return r===2?ie(e)&&!U(e)?As(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&As(n)&&(n=[n]),oe(t,e,n))}const Yf=Symbol(""),Qf=()=>It(Yf),Xf="3.2.47",Zf="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,$a=rn&&rn.createElement("template"),ep={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?rn.createElementNS(Zf,t):rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$a.innerHTML=r?`<svg>${t}</svg>`:t;const a=$a.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function np(t,e,n){const r=t.style,s=ye(n);if(n&&!s){if(e&&!ye(e))for(const i in e)n[i]==null&&Qi(r,i,"");for(const i in n)Qi(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ba=/\s*!important$/;function Qi(t,e,n){if(U(n))n.forEach(r=>Qi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rp(t,e);Ba.test(n)?t.setProperty(qn(r),n.replace(Ba,""),"important"):t[r]=n}}const ja=["Webkit","Moz","ms"],Si={};function rp(t,e){const n=Si[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return Si[e]=r;r=Qs(r);for(let s=0;s<ja.length;s++){const i=ja[s]+r;if(i in t)return Si[e]=i}return e}const Ha="http://www.w3.org/1999/xlink";function sp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ha,e.slice(6,e.length)):t.setAttributeNS(Ha,e,n);else{const i=Qd(e);n==null||i&&!sl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ip(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function sn(t,e,n,r){t.addEventListener(e,n,r)}function op(t,e,n,r){t.removeEventListener(e,n,r)}function ap(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cp(e);if(r){const l=i[e]=dp(r,s);sn(t,a,l,c)}else o&&(op(t,a,o,c),i[e]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function cp(t){let e;if(qa.test(t)){e={};let r;for(;r=t.match(qa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qn(t.slice(2)),e]}let Ai=0;const lp=Promise.resolve(),up=()=>Ai||(lp.then(()=>Ai=0),Ai=Date.now());function dp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rt(hp(r,n.value),e,5,[r])};return n.value=t,n.attached=up(),n}function hp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const za=/^on[a-z]/,fp=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?tp(t,r,s):e==="style"?np(t,n,r):Gs(e)?go(e)||ap(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pp(t,e,r,s))?ip(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sp(t,e,r,s))};function pp(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&za.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||za.test(e)&&ye(n)?!1:e in t}const Rs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ds(e,n):e};function mp(t){t.target.composing=!0}function Wa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Rs(s);const i=r||s.props&&s.props.type==="number";sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Es(a)),t._assign(a)}),n&&sn(t,"change",()=>{t.value=t.value.trim()}),e||(sn(t,"compositionstart",mp),sn(t,"compositionend",Wa),sn(t,"change",Wa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Rs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Es(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},fb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Js(e);sn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Es(Cs(o)):Cs(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Rs(r)},mounted(t,{value:e}){Ka(t,e)},beforeUpdate(t,e,n){t._assign=Rs(n)},updated(t,{value:e}){Ka(t,e)}};function Ka(t,e){const n=t.multiple;if(!(n&&!U(e)&&!Js(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Cs(i);if(n)U(e)?i.selected=Zd(e,o)>-1:i.selected=e.has(o);else if(Ks(Cs(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Cs(t){return"_value"in t?t._value:t.value}const pb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):nr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),nr(t,!0),r.enter(t)):r.leave(t,()=>{nr(t,!1)}):nr(t,e))},beforeUnmount(t,{value:e}){nr(t,e)}};function nr(t,e){t.style.display=e?t._vod:"none"}const gp=Ne({patchProp:fp},ep);let Ga;function _p(){return Ga||(Ga=Nf(gp))}const yp=(...t)=>{const e=_p().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vp(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vp(t){return ye(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof window<"u";function wp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Ri(t,e){const n={};for(const r in e){const s=e[r];n[r]=st(s)?s.map(t):t(s)}return n}const ur=()=>{},st=Array.isArray,bp=/\/$/,Ep=t=>t.replace(bp,"");function Ci(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ap(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ip(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ja(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fn(e.matched[r],n.matched[s])&&nu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sp(t[n],e[n]))return!1;return!0}function Sp(t,e){return st(t)?Ya(t,e):st(e)?Ya(e,t):t===e}function Ya(t,e){return st(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ap(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Tr;(function(t){t.pop="pop",t.push="push"})(Tr||(Tr={}));var dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(dr||(dr={}));function Rp(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ep(t)}const Cp=/^[^#]+#/;function Pp(t,e){return t.replace(Cp,"#")+e}function Op(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oi=()=>({left:window.pageXOffset,top:window.pageYOffset});function kp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Op(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qa(t,e){return(history.state?history.state.position-e:-1)+t}const Xi=new Map;function Np(t,e){Xi.set(t,e)}function Dp(t){const e=Xi.get(t);return Xi.delete(t),e}let xp=()=>location.protocol+"//"+location.host;function ru(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ja(c,"")}return Ja(n,t)+r+s}function Mp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=ru(t,location),S=n.value,N=e.value;let V=0;if(p){if(n.value=y,e.value=p,o&&o===S){o=null;return}V=N?p.position-N.position:0}else r(y);s.forEach(O=>{O(n.value,S,{delta:V,type:Tr.pop,direction:V?V>0?dr.forward:dr.back:dr.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(y),y}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:oi()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Xa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oi():null}}function Lp(t){const{history:e,location:n}=window,r={value:ru(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:xp()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,Xa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:oi()});i(u.current,u,!0);const h=Z({},Xa(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Fp(t){t=Rp(t);const e=Lp(t),n=Mp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:Pp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Up(t){return typeof t=="string"||t&&typeof t=="object"}function su(t){return typeof t=="string"||typeof t=="symbol"}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iu=Symbol("");var Za;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Za||(Za={}));function Un(t,e){return Z(new Error,{type:t,[iu]:!0},e)}function vt(t,e){return t instanceof Error&&iu in t&&(e==null||!!(t.type&e))}const ec="[^/]+?",Vp={sensitive:!1,strict:!1,start:!0,end:!0},$p=/[.+*?^${}()[\]/\\]/g;function Bp(t,e){const n=Z({},Vp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace($p,"\\$&"),y+=40;else if(p.type===1){const{value:S,repeatable:N,optional:V,regexp:O}=p;i.push({name:S,repeatable:N,optional:V});const B=O||ec;if(B!==ec){y+=10;try{new RegExp(`(${B})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${S}" (${B}): `+Y.message)}}let D=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(D=V&&l.length<2?`(?:/${D})`:"/"+D),V&&(D+="?"),s+=D,y+=20,V&&(y+=-8),N&&(y+=-20),B===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const y=u[p]||"",S=i[p-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of p)if(y.type===0)u+=y.value;else if(y.type===1){const{value:S,repeatable:N,optional:V}=y,O=S in l?l[S]:"";if(st(O)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const B=st(O)?O.join("/"):O;if(!B)if(V)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=B}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(tc(r))return 1;if(tc(s))return-1}return s.length-r.length}function tc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qp={type:0,value:""},zp=/[a-zA-Z0-9_]/;function Wp(t){if(!t)return[[]];if(t==="/")return[[qp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:zp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Kp(t,e,n){const r=Bp(Wp(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gp(t,e){const n=[],r=new Map;e=sc({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const y=!p,S=Jp(u);S.aliasOf=p&&p.record;const N=sc(e,u),V=[S];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of D)V.push(Z({},S,{components:p?p.record.components:S.components,path:Y,aliasOf:p?p.record:S}))}let O,B;for(const D of V){const{path:Y}=D;if(h&&Y[0]!=="/"){const pe=h.record.path,Ee=pe[pe.length-1]==="/"?"":"/";D.path=h.record.path+(Y&&Ee+Y)}if(O=Kp(D,h,N),p?p.alias.push(O):(B=B||O,B!==O&&B.alias.push(O),y&&u.name&&!rc(O)&&o(u.name)),S.children){const pe=S.children;for(let Ee=0;Ee<pe.length;Ee++)i(pe[Ee],O,p&&p.children[Ee])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return B?()=>{o(B)}:ur}function o(u){if(su(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Hp(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ou(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rc(u)&&r.set(u.record.name,u)}function l(u,h){let p,y={},S,N;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Un(1,{location:u});N=p.record.name,y=Z(nc(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&nc(u.params,p.keys.map(B=>B.name))),S=p.stringify(y)}else if("path"in u)S=u.path,p=n.find(B=>B.re.test(S)),p&&(y=p.parse(S),N=p.record.name);else{if(p=h.name?r.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw Un(1,{location:u,currentLocation:h});N=p.record.name,y=Z({},h.params,u.params),S=p.stringify(y)}const V=[];let O=p;for(;O;)V.unshift(O.record),O=O.parent;return{name:N,path:S,params:y,matched:V,meta:Qp(V)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function nc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Yp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function rc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qp(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function sc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ou(t,e){return e.children.some(n=>n===t||ou(t,n))}const au=/#/g,Xp=/&/g,Zp=/\//g,em=/=/g,tm=/\?/g,cu=/\+/g,nm=/%5B/g,rm=/%5D/g,lu=/%5E/g,sm=/%60/g,uu=/%7B/g,im=/%7C/g,du=/%7D/g,om=/%20/g;function ko(t){return encodeURI(""+t).replace(im,"|").replace(nm,"[").replace(rm,"]")}function am(t){return ko(t).replace(uu,"{").replace(du,"}").replace(lu,"^")}function Zi(t){return ko(t).replace(cu,"%2B").replace(om,"+").replace(au,"%23").replace(Xp,"%26").replace(sm,"`").replace(uu,"{").replace(du,"}").replace(lu,"^")}function cm(t){return Zi(t).replace(em,"%3D")}function lm(t){return ko(t).replace(au,"%23").replace(tm,"%3F")}function um(t){return t==null?"":lm(t).replace(Zp,"%2F")}function Ps(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cu," "),o=i.indexOf("="),a=Ps(o<0?i:i.slice(0,o)),c=o<0?null:Ps(i.slice(o+1));if(a in e){let l=e[a];st(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ic(t){let e="";for(let n in t){const r=t[n];if(n=cm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(r)?r.map(i=>i&&Zi(i)):[r&&Zi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=st(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fm=Symbol(""),oc=Symbol(""),No=Symbol(""),hu=Symbol(""),eo=Symbol("");function rr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function xt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Un(4,{from:n,to:e})):h instanceof Error?a(h):Up(h)?a(Un(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Pi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(pm(a)){const l=(a.__vccOpts||a)[e];l&&s.push(xt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wp(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&xt(p,n,r,i,o)()}))}}return s}function pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ac(t){const e=It(No),n=It(hu),r=Ge(()=>e.resolve(cn(t.to))),s=Ge(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Fn.bind(null,u));if(p>-1)return p;const y=cc(c[l-2]);return l>1&&cc(u)===y&&h[h.length-1].path!==y?h.findIndex(Fn.bind(null,c[l-2])):p}),i=Ge(()=>s.value>-1&&ym(n.params,r.value.params)),o=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&nu(n.params,r.value.params));function a(c={}){return _m(c)?e[cn(t.replace)?"replace":"push"](cn(t.to)).catch(ur):Promise.resolve()}return{route:r,href:Ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mm=Fl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ac,setup(t,{slots:e}){const n=Mr(ac(t)),{options:r}=It(No),s=Ge(()=>({[lc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gm=mm;function _m(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ym(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!st(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function cc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lc=(t,e,n)=>t??e??n,vm=Fl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(eo),s=Ge(()=>t.route||r.value),i=It(oc,0),o=Ge(()=>{let l=cn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ge(()=>s.value.matched[o.value]);hs(oc,Ge(()=>o.value+1)),hs(fm,a),hs(eo,s);const c=Fh();return fs(()=>[c.value,a.value,t.name],([l,u,h],[p,y,S])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Fn(u,y)||!p)&&(u.enterCallbacks[h]||[]).forEach(N=>N(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return uc(n.default,{Component:p,route:l});const y=h.props[u],S=y?y===!0?l.params:typeof y=="function"?y(l):y:null,V=tu(p,Z({},S,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return uc(n.default,{Component:V,route:l})||V}}});function uc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fu=vm;function wm(t){const e=Gp(t.routes,t),n=t.parseQuery||dm,r=t.stringifyQuery||ic,s=t.history,i=rr(),o=rr(),a=rr(),c=Uh(kt);let l=kt;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ri.bind(null,v=>""+v),h=Ri.bind(null,um),p=Ri.bind(null,Ps);function y(v,C){let A,x;return su(v)?(A=e.getRecordMatcher(v),x=C):x=v,e.addRoute(x,A)}function S(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function N(){return e.getRoutes().map(v=>v.record)}function V(v){return!!e.getRecordMatcher(v)}function O(v,C){if(C=Z({},C||c.value),typeof v=="string"){const d=Ci(n,v,C.path),f=e.resolve({path:d.path},C),m=s.createHref(d.fullPath);return Z(d,f,{params:p(f.params),hash:Ps(d.hash),redirectedFrom:void 0,href:m})}let A;if("path"in v)A=Z({},v,{path:Ci(n,v.path,C.path).path});else{const d=Z({},v.params);for(const f in d)d[f]==null&&delete d[f];A=Z({},v,{params:h(v.params)}),C.params=h(C.params)}const x=e.resolve(A,C),G=v.hash||"";x.params=u(p(x.params));const ce=Ip(r,Z({},v,{hash:am(G),path:x.path})),q=s.createHref(ce);return Z({fullPath:ce,hash:G,query:r===ic?hm(v.query):v.query||{}},x,{redirectedFrom:void 0,href:q})}function B(v){return typeof v=="string"?Ci(n,v,c.value.path):Z({},v)}function D(v,C){if(l!==v)return Un(8,{from:C,to:v})}function Y(v){return Ve(v)}function pe(v){return Y(Z(B(v),{replace:!0}))}function Ee(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let x=typeof A=="function"?A(v):A;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=B(x):{path:x},x.params={}),Z({query:v.query,hash:v.hash,params:"path"in x?{}:v.params},x)}}function Ve(v,C){const A=l=O(v),x=c.value,G=v.state,ce=v.force,q=v.replace===!0,d=Ee(A);if(d)return Ve(Z(B(d),{state:typeof d=="object"?Z({},G,d.state):G,force:ce,replace:q}),C||A);const f=A;f.redirectedFrom=C;let m;return!ce&&Tp(r,x,A)&&(m=Un(16,{to:f,from:x}),Qt(x,x,!0,!1)),(m?Promise.resolve(m):at(f,x)).catch(g=>vt(g)?vt(g,2)?g:Ye(g):re(g,f,x)).then(g=>{if(g){if(vt(g,2))return Ve(Z({replace:q},B(g.to),{state:typeof g.to=="object"?Z({},G,g.to.state):G,force:ce}),C||f)}else g=Pt(f,x,!0,q,G);return ze(f,x,g),g})}function Je(v,C){const A=D(v,C);return A?Promise.reject(A):Promise.resolve()}function at(v,C){let A;const[x,G,ce]=bm(v,C);A=Pi(x.reverse(),"beforeRouteLeave",v,C);for(const d of x)d.leaveGuards.forEach(f=>{A.push(xt(f,v,C))});const q=Je.bind(null,v,C);return A.push(q),In(A).then(()=>{A=[];for(const d of i.list())A.push(xt(d,v,C));return A.push(q),In(A)}).then(()=>{A=Pi(G,"beforeRouteUpdate",v,C);for(const d of G)d.updateGuards.forEach(f=>{A.push(xt(f,v,C))});return A.push(q),In(A)}).then(()=>{A=[];for(const d of v.matched)if(d.beforeEnter&&!C.matched.includes(d))if(st(d.beforeEnter))for(const f of d.beforeEnter)A.push(xt(f,v,C));else A.push(xt(d.beforeEnter,v,C));return A.push(q),In(A)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),A=Pi(ce,"beforeRouteEnter",v,C),A.push(q),In(A))).then(()=>{A=[];for(const d of o.list())A.push(xt(d,v,C));return A.push(q),In(A)}).catch(d=>vt(d,8)?d:Promise.reject(d))}function ze(v,C,A){for(const x of a.list())x(v,C,A)}function Pt(v,C,A,x,G){const ce=D(v,C);if(ce)return ce;const q=C===kt,d=Tn?history.state:{};A&&(x||q?s.replace(v.fullPath,Z({scroll:q&&d&&d.scroll},G)):s.push(v.fullPath,G)),c.value=v,Qt(v,C,A,q),Ye()}let ct;function wn(){ct||(ct=s.listen((v,C,A)=>{if(!Xr.listening)return;const x=O(v),G=Ee(x);if(G){Ve(Z(G,{replace:!0}),x).catch(ur);return}l=x;const ce=c.value;Tn&&Np(Qa(ce.fullPath,A.delta),oi()),at(x,ce).catch(q=>vt(q,12)?q:vt(q,2)?(Ve(q.to,x).then(d=>{vt(d,20)&&!A.delta&&A.type===Tr.pop&&s.go(-1,!1)}).catch(ur),Promise.reject()):(A.delta&&s.go(-A.delta,!1),re(q,x,ce))).then(q=>{q=q||Pt(x,ce,!1),q&&(A.delta&&!vt(q,8)?s.go(-A.delta,!1):A.type===Tr.pop&&vt(q,20)&&s.go(-1,!1)),ze(x,ce,q)}).catch(ur)}))}let Yt=rr(),Zn=rr(),le;function re(v,C,A){Ye(v);const x=Zn.list();return x.length?x.forEach(G=>G(v,C,A)):console.error(v),Promise.reject(v)}function ee(){return le&&c.value!==kt?Promise.resolve():new Promise((v,C)=>{Yt.add([v,C])})}function Ye(v){return le||(le=!v,wn(),Yt.list().forEach(([C,A])=>v?A(v):C()),Yt.reset()),v}function Qt(v,C,A,x){const{scrollBehavior:G}=t;if(!Tn||!G)return Promise.resolve();const ce=!A&&Dp(Qa(v.fullPath,0))||(x||!A)&&history.state&&history.state.scroll||null;return Pl().then(()=>G(v,C,ce)).then(q=>q&&kp(q)).catch(q=>re(q,v,C))}const Qe=v=>s.go(v);let De;const bn=new Set,Xr={currentRoute:c,listening:!0,addRoute:y,removeRoute:S,hasRoute:V,getRoutes:N,resolve:O,options:t,push:Y,replace:pe,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Zn.add,isReady:ee,install(v){const C=this;v.component("RouterLink",gm),v.component("RouterView",fu),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(c)}),Tn&&!De&&c.value===kt&&(De=!0,Y(s.location).catch(G=>{}));const A={};for(const G in kt)A[G]=Ge(()=>c.value[G]);v.provide(No,C),v.provide(hu,Mr(A)),v.provide(eo,c);const x=v.unmount;bn.add(v),v.unmount=function(){bn.delete(v),bn.size<1&&(l=kt,ct&&ct(),ct=null,c.value=kt,De=!1,le=!1),x()}}};return Xr}function In(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Fn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Fn(l,c))||s.push(c))}return[n,r,s]}const Em={__name:"App",setup(t){return(e,n)=>(Lr(),ri(cn(fu)))}},Im="modulepreload",Tm=function(t){return"/aljihad/"+t},dc={},Oe=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Tm(i),i in dc)return;dc[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Im,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Sm=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Am={},Rm={class:"navbar navbar-expand-lg navbar-light bg-light"},Cm={class:"container-fluid"},Pm=W("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[W("span",{class:"navbar-toggler-icon"})],-1),Om={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},km={class:"navbar-nav me-auto mb-2 mb-lg-0"},Nm={class:"nav-item"},Dm={class:"nav-item"},xm={class:"nav-item"},Mm={class:"nav-item"},Lm={class:"nav-item"},Fm={class:"nav-item"},Um={class:"navbar-nav me-auto mb-2 mb-lg-0"},Vm={class:"nav-item dropdown"},$m=W("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),Bm={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},jm=W("li",null,[W("a",{class:"dropdown-item",href:"#"},"Profile Setting")],-1),Hm=W("li",null,[W("hr",{class:"dropdown-divider"})],-1),qm={class:"d-flex"},zm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Wm={class:"nav-item dropdown btn btn-outline-success"},Km=W("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),Gm={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function Jm(t,e){const n=mf("RouterLink");return Lr(),Ff(Ke,null,[W("nav",Rm,[W("div",Cm,[oe(n,{class:"navbar-brand",to:"/"},{default:We(()=>[W("h3",null,il(this.$appShortName),1)]),_:1}),Pm,W("div",Om,[W("ul",km,[W("li",Nm,[oe(n,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Invoices")]),_:1})]),W("li",Dm,[oe(n,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Customers")]),_:1})]),W("li",xm,[oe(n,{to:"/products",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Products")]),_:1})]),W("li",Mm,[oe(n,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Payments")]),_:1})]),W("li",Lm,[oe(n,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Metal Rate")]),_:1})]),W("li",Fm,[W("ul",Um,[W("li",Vm,[$m,W("ul",Bm,[jm,W("li",null,[oe(n,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:We(()=>[dt(" General Settings")]),_:1})]),Hm,W("li",null,[oe(n,{to:"/logout",class:"nav-link active","aria-current":"page"},{default:We(()=>[dt("Logout ")]),_:1})])])])])])]),W("form",qm,[W("ul",zm,[W("li",Wm,[Km,W("ul",Gm,[W("li",null,[oe(n,{to:"/invoice",class:"dropdown-item"},{default:We(()=>[dt(" Invoice")]),_:1})]),W("li",null,[oe(n,{to:"/payment",class:"dropdown-item"},{default:We(()=>[dt(" Payment")]),_:1})])])])])])])])]),yf(t.$slots,"default")],64)}const Ym=Sm(Am,[["render",Jm]]),Qm={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},Xm={class:"display-4 fw-normal"},Zm=W("p",{class:"fs-5 text-body-secondary"},null,-1),eg={mounted:function(){}},tg=Object.assign(eg,{__name:"HomeView",setup(t){return(e,n)=>(Lr(),ri(Ym,null,{default:We(()=>[W("div",Qm,[W("h2",Xm,"Welcome to "+il(e.$appname),1),Zm])]),_:1}))}}),pu=wm({history:Fp("/aljihad/"),routes:[{path:"/",name:"home",component:tg},{path:"/invoice",name:"invoice",component:()=>Oe(()=>import("./Invoice-0480fa56.js"),["assets/Invoice-0480fa56.js","assets/InvoiceItemTable-22996719.js","assets/CAlert-95901150.js","assets/CustomerPicker-fe8ae26c.js"])},{path:"/invoices/:invoicenumber",name:"invoicereport",component:()=>Oe(()=>import("./InvoiceReport-8ac7ce84.js"),["assets/InvoiceReport-8ac7ce84.js","assets/InvoiceItemTable-22996719.js","assets/CAlert-95901150.js"])},{path:"/login",name:"login",component:()=>Oe(()=>import("./Login-7985e6bc.js"),["assets/Login-7985e6bc.js","assets/CAlert-95901150.js"])},{path:"/logout",name:"logout",component:()=>Oe(()=>import("./Logout-e1a43343.js"),["assets/Logout-e1a43343.js","assets/CAlert-95901150.js"])},{path:"/customers",name:"customers",component:()=>Oe(()=>import("./Customers-226928fa.js"),["assets/Customers-226928fa.js","assets/DynamicTable-e0e7bc50.js","assets/DynamicDialog-96e44cf4.js","assets/CAlert-95901150.js"])},{path:"/users",name:"users",component:()=>Oe(()=>import("./Users-6cebdc94.js"),["assets/Users-6cebdc94.js","assets/DynamicTable-e0e7bc50.js","assets/DynamicDialog-96e44cf4.js","assets/CAlert-95901150.js"])},{path:"/invoices",name:"invoices",component:()=>Oe(()=>import("./Invoices-994d763a.js"),["assets/Invoices-994d763a.js","assets/CAlert-95901150.js","assets/DynamicTable-e0e7bc50.js"])},{path:"/rates",name:"rates",component:()=>Oe(()=>import("./Rates-5bbb885d.js"),["assets/Rates-5bbb885d.js","assets/DynamicTable-e0e7bc50.js","assets/CAlert-95901150.js"])},{path:"/products",name:"products",component:()=>Oe(()=>import("./Products-6dff05e3.js"),["assets/Products-6dff05e3.js","assets/DynamicTable-e0e7bc50.js","assets/DynamicDialog-96e44cf4.js","assets/CAlert-95901150.js"])},{path:"/settings/application",name:"applicationsettings",component:()=>Oe(()=>import("./Applicationsettings-d0a963e5.js"),["assets/Applicationsettings-d0a963e5.js","assets/CAlert-95901150.js"])},{path:"/settings/product",name:"productSettings",component:()=>Oe(()=>import("./ProductSettings-5ace9d32.js"),["assets/ProductSettings-5ace9d32.js","assets/DynamicTable-e0e7bc50.js","assets/DynamicDialog-96e44cf4.js","assets/CAlert-95901150.js"])},{path:"/settings/customer",name:"customerSettings",component:()=>Oe(()=>import("./CustomerSettings-8a6b4358.js"),["assets/CustomerSettings-8a6b4358.js","assets/DynamicTable-e0e7bc50.js","assets/DynamicDialog-96e44cf4.js","assets/CAlert-95901150.js"])},{path:"/payments",name:"payments",component:()=>Oe(()=>import("./Payments-d4e154d9.js"),["assets/Payments-d4e154d9.js","assets/DynamicTable-e0e7bc50.js","assets/CAlert-95901150.js"])},{path:"/payment",name:"payment",component:()=>Oe(()=>import("./Payment-a823abd2.js"),["assets/Payment-a823abd2.js","assets/CustomerPicker-fe8ae26c.js","assets/CAlert-95901150.js"])},{path:"/payments/:receiptNumber",name:"paymentReport",component:()=>Oe(()=>import("./PaymentReport-351db56d.js"),["assets/PaymentReport-351db56d.js","assets/CAlert-95901150.js"])}]});class Vn{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,n,r){e.alertmode=r,e.alertmsg=n,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const n=e.split(" ");for(let r=0;r<n.length;r++)n[r]=Vn.capitalizeFirstLetter(n[r]);return n.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var n=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var a=e.split(""),c="",l=0,u=0;u<o;u++)(o-u)%3==2?a[u]=="1"?(c+=s[Number(a[u+1])]+" ",u++,l=1):a[u]!=0&&(c+=i[a[u]-2]+" ",l=1):a[u]!=0&&(c+=r[a[u]]+" ",(o-u)%3==0&&(c+="hundred "),l=1),(o-u)%3==1&&(l&&(c+=n[(o-u-1)/3]+" "),l=0);if(o!=e.length){var h=e.length;c+="point ";for(var u=o+1;u<h;u++)c+=r[a[u]]+" "}return Vn.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class mb{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateQutationNumber(){return this.generateId("TMP")}}/**
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
 */const mu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ng=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[u],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ng(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new rg;const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=mu(t);return gu.encodeByteArray(e,!0)},Os=function(t){return sg(t).replace(/\./g,"")},_u=function(t){try{return gu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const og=()=>ig().__FIREBASE_DEFAULTS__,ag=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},Do=()=>{try{return og()||ag()||cg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yu=t=>{var e,n;return(n=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lg=t=>{const e=yu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vu=()=>{var t;return(t=Do())===null||t===void 0?void 0:t.config},wu=t=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ug{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Os(JSON.stringify(n)),Os(JSON.stringify(o)),a].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const yg="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yg,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,a,r)}}function vg(t,e){return t.replace(wg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wg=/\{\$([^}]+)}/g;function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hc(i)&&hc(o)){if(!ks(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ir(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function or(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Eg(t,e){const n=new Ig(t,e);return n.subscribe.bind(n)}class Ig{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oi),s.error===void 0&&(s.error=Oi),s.complete===void 0&&(s.complete=Oi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oi(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Sg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ug;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rg(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ag(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ag(t){return t===tn?void 0:t}function Rg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Pg={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Og=X.INFO,kg={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Ng=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xo{constructor(e){this.name=e,this._logLevel=Og,this._logHandler=Ng,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Dg=(t,e)=>e.some(n=>t instanceof n);let fc,pc;function xg(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bu=new WeakMap,to=new WeakMap,Eu=new WeakMap,ki=new WeakMap,Mo=new WeakMap;function Lg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bu.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function Fg(t){if(to.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Eu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ug(t){no=t(no)}function Vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ni(this),e,...n);return Eu.set(r,e.sort?e.sort():[e]),Bt(r)}:Mg().includes(t)?function(...e){return t.apply(Ni(this),e),Bt(bu.get(this))}:function(...e){return Bt(t.apply(Ni(this),e))}}function $g(t){return typeof t=="function"?Vg(t):(t instanceof IDBTransaction&&Fg(t),Dg(t,xg())?new Proxy(t,no):t)}function Bt(t){if(t instanceof IDBRequest)return Lg(t);if(ki.has(t))return ki.get(t);const e=$g(t);return e!==t&&(ki.set(t,e),Mo.set(e,t)),e}const Ni=t=>Mo.get(t);function Bg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jg=["get","getKey","getAll","getAllKeys","count"],Hg=["put","add","delete","clear"],Di=new Map;function mc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Di.set(e,i),i}Ug(t=>({...t,get:(e,n,r)=>mc(e,n)||t.get(e,n,r),has:(e,n)=>!!mc(e,n)||t.has(e,n)}));/**
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
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ro="@firebase/app",gc="0.9.10";/**
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
 */const hn=new xo("@firebase/app"),Wg="@firebase/app-compat",Kg="@firebase/analytics-compat",Gg="@firebase/analytics",Jg="@firebase/app-check-compat",Yg="@firebase/app-check",Qg="@firebase/auth",Xg="@firebase/auth-compat",Zg="@firebase/database",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",s_="@firebase/installations-compat",i_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",l_="@firebase/remote-config",u_="@firebase/remote-config-compat",d_="@firebase/storage",h_="@firebase/storage-compat",f_="@firebase/firestore",p_="@firebase/firestore-compat",m_="firebase",g_="9.22.0";/**
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
 */const so="[DEFAULT]",__={[ro]:"fire-core",[Wg]:"fire-core-compat",[Gg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Jg]:"fire-app-check-compat",[Qg]:"fire-auth",[Xg]:"fire-auth-compat",[Zg]:"fire-rtdb",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[s_]:"fire-iid-compat",[i_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[l_]:"fire-rc",[u_]:"fire-rc-compat",[d_]:"fire-gcs",[h_]:"fire-gcs-compat",[f_]:"fire-fst",[p_]:"fire-fst-compat","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Ns=new Map,io=new Map;function y_(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(io.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,t);for(const n of Ns.values())y_(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const v_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new Fr("app","Firebase",v_);/**
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
 */class w_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kn=g_;function Iu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:so,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=vu()),!n)throw jt.create("no-options");const i=Ns.get(s);if(i){if(ks(n,i.options)&&ks(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new Cg(s);for(const c of io.values())o.addComponent(c);const a=new w_(n,r,o);return Ns.set(s,a),a}function Tu(t=so){const e=Ns.get(t);if(!e&&t===so&&vu())return Iu();if(!e)throw jt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=__[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}$n(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const b_="firebase-heartbeat-database",E_=1,Sr="firebase-heartbeat-store";let xi=null;function Su(){return xi||(xi=Bg(b_,E_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}}).catch(t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})})),xi}async function I_(t){try{return await(await Su()).transaction(Sr).objectStore(Sr).get(Au(t))}catch(e){if(e instanceof Ct)hn.warn(e.message);else{const n=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function _c(t,e){try{const r=(await Su()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(e,Au(t)),await r.done}catch(n){if(n instanceof Ct)hn.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function Au(t){return`${t.name}!${t.options.appId}`}/**
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
 */const T_=1024,S_=30*24*60*60*1e3;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=S_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yc(),{heartbeatsToSend:n,unsentEntries:r}=R_(this._heartbeatsCache.heartbeats),s=Os(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yc(){return new Date().toISOString().substring(0,10)}function R_(t,e=T_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class C_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await I_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vc(t){return Os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function P_(t){$n(new dn("platform-logger",e=>new qg(e),"PRIVATE")),$n(new dn("heartbeat",e=>new A_(e),"PRIVATE")),Ht(ro,gc,t),Ht(ro,gc,"esm2017"),Ht("fire-js","")}P_("");var O_="firebase",k_="9.22.0";/**
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
 */Ht(O_,k_,"app");/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Gn="9.22.0";/**
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
 */const Bn=new xo("@firebase/firestore");function fn(t,...e){if(Bn.logLevel<=X.DEBUG){const n=e.map(Fo);Bn.debug(`Firestore (${Gn}): ${t}`,...n)}}function ai(t,...e){if(Bn.logLevel<=X.ERROR){const n=e.map(Fo);Bn.error(`Firestore (${Gn}): ${t}`,...n)}}function Ru(t,...e){if(Bn.logLevel<=X.WARN){const n=e.map(Fo);Bn.warn(`Firestore (${Gn}): ${t}`,...n)}}function Fo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw ai(e),new Error(e)}function He(t,e){t||ne()}function Vr(t,e){return t}/**
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
 */const wc="ok",Uo="cancelled",kn="unknown",F="invalid-argument",Cu="deadline-exceeded",Pu="not-found",N_="already-exists",Ou="permission-denied",Ds="unauthenticated",ku="resource-exhausted",pn="failed-precondition",Vo="aborted",Nu="out-of-range",$o="unimplemented",Du="internal",xu="unavailable",D_="data-loss";class P extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class M_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L_{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(He(typeof e.accessToken=="string"),new Mu(e.accessToken,new Le(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class F_{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class U_{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new F_(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $_{constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(He(typeof e.token=="string"),new V_(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class B_{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}class Rr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Rr{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(F,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Rr{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(F,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(F,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(F,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(F,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(ge.fromString(e))}static fromName(e){return new we(ge.fromString(e).popFirst(5))}static empty(){return new we(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new ge(e.slice()))}}/**
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
 */function Lu(t,e,n){if(!n)throw new P(F,`Function ${t}() cannot be called with an empty ${e}.`)}function bc(t){if(!we.isDocumentKey(t))throw new P(F,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ec(t){if(we.isDocumentKey(t))throw new P(F,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ci(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function $r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(F,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ci(t);throw new P(F,`Expected type '${e.name}', but it was: ${n}`)}}return t}function H_(t,e){if(e<=0)throw new P(F,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Fu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let is=null;function q_(){return is===null?is=268435456+Math.round(2147483648*Math.random()):is++,"0x"+is.toString(16)}/**
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
 */function Uu(t){return t==null}function xs(t){return t===0&&1/t==-1/0}/**
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
 */const z_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Ic,K;function Tc(t){if(t===void 0)return ai("RPC_ERROR","HTTP error has no status"),kn;switch(t){case 200:return wc;case 400:return pn;case 401:return Ds;case 403:return Ou;case 404:return Pu;case 409:return Vo;case 416:return Nu;case 429:return ku;case 499:return Uo;case 500:return kn;case 501:return $o;case 503:return xu;case 504:return Cu;default:return t>=200&&t<300?wc:t>=400&&t<500?pn:t>=500&&t<600?Du:kn}}/**
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
 */(K=Ic||(Ic={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";class W_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,s,i){const o=q_(),a=this.I(e,n);fn("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.T(c,s,i),this.A(e,a,c,r).then(l=>(fn("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ru("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,n){const r=z_[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(n,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new P(Tc(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new P(Tc(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */function K_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class G_{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=K_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Vu(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function Sc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new J_("Invalid base64 string: "+s):s}}(e);return new St(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const Y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(He(!!t),typeof t=="string"){let e=0;const n=Y_.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(F,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(F,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(F,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(F,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function $u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bu(t){const e=t.mapValue.fields.__previous_value__;return $u(e)?Bu(e):e}function Pr(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */const os={fields:{__type__:{stringValue:"__max__"}}};function gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$u(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ne()}function Ms(t,e){if(t===e)return!0;const n=gn(t);if(n!==gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pr(t).isEqual(Pr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=mn(r.timestampValue),o=mn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Cr(r.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return me(r.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return me(r.integerValue)===me(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=me(r.doubleValue),o=me(s.doubleValue);return i===o?xs(i)===xs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Vu(t.arrayValue.values||[],e.arrayValue.values||[],Ms);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Sc(i)!==Sc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ms(i[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function Or(t,e){return(t.values||[]).find(n=>Ms(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=gn(t),r=gn(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=me(s.integerValue||s.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ac(t.timestampValue,e.timestampValue);case 4:return Ac(Pr(t),Pr(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Cr(s),a=Cr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ve(o[c],a[c]);if(l!==0)return l}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ve(me(s.latitude),me(i.latitude));return o!==0?o:ve(me(s.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ls(o[c],a[c]);if(l)return l}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===os&&i===os)return 0;if(s===os)return 1;if(i===os)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ve(a[u],l[u]);if(h!==0)return h;const p=Ls(o[a[u]],c[l[u]]);if(p!==0)return p}return ve(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Ac(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=mn(t),r=mn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Rc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ju(t){return!!t&&"arrayValue"in t}function Cc(t){return!!t&&"nullValue"in t}function Pc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mi(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Oc{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Hu{}class ot extends Hu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Q_(e,n,r):n==="array-contains"?new ey(e,r):n==="in"?new ty(e,r):n==="not-in"?new ny(e,r):n==="array-contains-any"?new ry(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new X_(e,r):new Z_(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jr extends Hu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new jr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class Q_ extends ot{constructor(e,n,r){super(e,n,r),this.key=we.fromName(r.referenceValue)}matches(e){const n=we.comparator(e.key,this.key);return this.matchesComparison(n)}}class X_ extends ot{constructor(e,n){super(e,"in",n),this.keys=qu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z_ extends ot{constructor(e,n){super(e,"not-in",n),this.keys=qu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>we.fromName(r.referenceValue))}class ey extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ju(n)&&Or(n.arrayValue,this.value)}}class ty extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Or(this.value.arrayValue,n)}}class ny extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Or(this.value.arrayValue,n)}}class ry extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Or(this.value.arrayValue,r))}}/**
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
 */class fr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new qe(0,0))}static max(){return new de(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new Fs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Fs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new as(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new as(this.root,e,this.comparator,!1)}getReverseIterator(){return new as(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new as(this.root,e,this.comparator,!0)}}class as{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ie(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Us{constructor(e){this.comparator=e,this.data=new Fs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(e){return new kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Us(this.comparator);return n.data=e,n}}class kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new _n([])}unionWith(e){let n=new Us(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _n(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vu(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=Be.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=hr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(hr(this.value))}}/**
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
 */class ft{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,de.min(),de.min(),de.min(),je.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,de.min(),de.min(),je.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,de.min(),de.min(),je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sy{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Nc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sy(t,e,n,r,s,i,o)}/**
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
 */class li{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function jo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ui(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iy(t){return t.collectionGroup!==null}function Dc(t){const e=Vr(t);if(e.q===null){e.q=[];const n=ui(e),r=jo(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new fr(n)),e.q.push(new fr(Be.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new fr(Be.keyField(),i))}}}return e.q}function oy(t){const e=Vr(t);if(!e.O)if(e.limitType==="F")e.O=Nc(e.path,e.collectionGroup,Dc(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Dc(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new fr(i.field,o))}const r=e.endAt?new Oc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Oc(e.startAt.position,e.startAt.inclusive):null;e.O=Nc(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function oo(t,e){e.getFirstInequalityField(),ui(t);const n=t.filters.concat([e]);return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function ay(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(r)?"-0":r}}(t,e)}/**
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
 */class di{constructor(){this._=void 0}}class cy extends di{}class ly extends di{constructor(e){super(),this.elements=e}}class uy extends di{constructor(e){super(),this.elements=e}}class dy extends di{constructor(e,n){super(),this.serializer=e,this.k=n}}class mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class hi{}class zu extends hi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ho extends hi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Wu extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ku extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const hy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),py=(()=>({and:"AND",or:"OR"}))();class my{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ao(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _y(t,e){return ao(t,e.toTimestamp())}function pr(t){return He(!!t),de.fromTimestamp(function(e){const n=mn(e);return new qe(n.seconds,n.nanos)}(t))}function qo(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vs(t,e){return qo(t.databaseId,e.path)}function co(t,e){const n=function(s){const i=ge.fromString(s);return He(Yu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new P(F,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(F,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new we((He((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function xc(t,e){return qo(t.databaseId,e)}function Gu(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mc(t,e,n){return{name:Vs(t,e),fields:n.value.mapValue.fields}}function yy(t,e){return"found"in e?function(n,r){He(!!r.found),r.found.name,r.found.updateTime;const s=co(n,r.found.name),i=pr(r.found.updateTime),o=r.found.createTime?pr(r.found.createTime):de.min(),a=new je({mapValue:{fields:r.found.fields}});return ft.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){He(!!r.missing),He(!!r.readTime);const s=co(n,r.missing),i=pr(r.readTime);return ft.newNoDocument(s,i)}(t,e):ne()}function vy(t,e){let n;if(e instanceof zu)n={update:Mc(t,e.key,e.value)};else if(e instanceof Wu)n={delete:Vs(t,e.key)};else if(e instanceof Ho)n={update:Mc(t,e.key,e.data),updateMask:Ty(e.fieldMask)};else{if(!(e instanceof Ku))return ne();n={verify:Vs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof cy)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ly)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof uy)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dy)return{fieldPath:i.field.canonicalString(),increment:o.k};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:_y(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function wy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=xc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ju(jr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Sn(u.field),direction:by(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Uu(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function by(t){return hy[t]}function Ey(t){return fy[t]}function Iy(t){return py[t]}function Sn(t){return{fieldPath:t.canonicalString()}}function Ju(t){return t instanceof ot?function(e){if(e.op==="=="){if(Pc(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pc(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NOT_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sn(e.field),op:Ey(e.op),value:e.value}}}(t):t instanceof jr?function(e){const n=e.getFilters().map(r=>Ju(r));return n.length===1?n[0]:{compositeFilter:{op:Iy(e.op),filters:n}}}(t):ne()}function Ty(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function zo(t){return new my(t,!0)}/**
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
 */class Qu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=n,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const n=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,n-r);s>0&&fn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
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
 */class Sy extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new P(pn,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ds&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(kn,s.toString())})}R(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ds&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(kn,i.toString())})}terminate(){this.J=!0}}async function Xu(t,e){const n=Vr(t),r=Gu(n.serializer)+"/documents",s={writes:e.map(i=>vy(n.serializer,i))};await n.v("Commit",r,s)}async function Zu(t,e){const n=Vr(t),r=Gu(n.serializer)+"/documents",s={documents:e.map(c=>Vs(n.serializer,c))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const l=yy(n.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());He(!!l),a.push(l)}),a}async function Ay(t,e){const n=Vr(t),r=wy(n.serializer,oy(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=co(i,o.name),l=pr(o.updateTime),u=o.createTime?pr(o.createTime):de.min(),h=new je({mapValue:{fields:o.fields}}),p=ft.newFoundDocument(c,l,u,h);return a&&p.setHasCommittedMutations(),a?p.setHasCommittedMutations():p}(n.serializer,s.document,void 0))}/**
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
 */const mr=new Map;function fi(t){if(t._terminated)throw new P(pn,"The client has already been terminated.");if(!mr.has(t)){fn("ComponentProvider","Initializing Datastore");const i=function(c){return new W_(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new B_(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fu(s.experimentalLongPollingOptions),s.useFetchStreams))),o=zo(t._databaseId),a=function(c,l,u,h){return new Sy(c,l,u,h)}(t._authCredentials,t._appCheckCredentials,i,o);mr.set(t,a)}var e,n,r,s;/**
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
*/return mr.get(t)}class Lc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(F,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(F,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,a){if(i===!0&&a===!0)throw new P(F,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new P(F,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new P(F,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new P(F,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Hr{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(pn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(pn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new x_;switch(n.type){case"firstParty":return new U_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(F,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=mr.get(e);n&&(fn("ComponentProvider","Removing Datastore"),mr.delete(e),n.terminate())}(this),Promise.resolve()}}function Ry(t,e){const n=typeof t=="object"?t:Tu(),r=typeof t=="string"?t:e||"(default)",s=Lo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=lg("firestore");i&&Cy(s,...i)}return s}function Cy(t,e,n,r={}){var s;const i=(t=$r(t,Hr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ru("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=dg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new P(F,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(c)}t._authCredentials=new M_(new Mu(o,a))}}/**
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
 */class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class qt extends Gt{constructor(e,n,r){super(e,n,new li(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new we(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function _e(t,e,...n){if(t=Te(t),Lu("collection","path",e),t instanceof Hr){const r=ge.fromString(e,...n);return Ec(r),new qt(t,null,r)}{if(!(t instanceof Fe||t instanceof qt))throw new P(F,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Ec(r),new qt(t.firestore,null,r)}}function be(t,e,...n){if(t=Te(t),arguments.length===1&&(e=G_.N()),Lu("doc","path",e),t instanceof Hr){const r=ge.fromString(e,...n);return bc(r),new Fe(t,null,new we(r))}{if(!(t instanceof Fe||t instanceof qt))throw new P(F,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return bc(r),new Fe(t.firestore,t instanceof qt?t.converter:null,new we(r))}}/**
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
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(St.fromBase64String(e))}catch(n){throw new P(F,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jn(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(F,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wo{constructor(e){this._methodName=e}}/**
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
 */class Ko{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(F,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(F,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const Py=/^__.*__$/;class Oy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ho(e,this.data,this.fieldMask,n,this.fieldTransforms):new zu(e,this.data,n,this.fieldTransforms)}}class ed{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ho(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function td(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Go{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new Go(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return $s(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(td(this.et)&&Py.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class ky{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zo(e)}ft(e,n,r,s=!1){return new Go({et:e,methodName:n,lt:r,path:Be.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jo(t){const e=t._freezeSettings(),n=zo(t._databaseId);return new ky(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nd(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);Yo("Data must be an object, but it was:",o,r);const a=rd(r,o);let c,l;if(i.merge)c=new _n(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=lo(e,h,n);if(!o.contains(p))throw new P(F,`Field '${p}' is specified in your field mask but missing from your input data.`);id(u,p)||u.push(p)}c=new _n(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Oy(new je(a),c,l)}class mi extends Wo{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function Ny(t,e,n,r){const s=t.ft(1,e,n);Yo("Data must be an object, but it was:",s,r);const i=[],o=je.empty();Br(r,(c,l)=>{const u=Qo(e,c,n);l=Te(l);const h=s.ot(u);if(l instanceof mi)i.push(u);else{const p=qr(l,h);p!=null&&(i.push(u),o.set(u,p))}});const a=new _n(i);return new ed(o,a,s.fieldTransforms)}function Dy(t,e,n,r,s,i){const o=t.ft(1,e,n),a=[lo(e,r,n)],c=[s];if(i.length%2!=0)throw new P(F,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(lo(e,i[p])),c.push(i[p+1]);const l=[],u=je.empty();for(let p=a.length-1;p>=0;--p)if(!id(l,a[p])){const y=a[p];let S=c[p];S=Te(S);const N=o.ot(y);if(S instanceof mi)l.push(y);else{const V=qr(S,N);V!=null&&(l.push(y),u.set(y,V))}}const h=new _n(l);return new ed(u,h,o.fieldTransforms)}function xy(t,e,n,r=!1){return qr(n,t.ft(r?4:3,e))}function qr(t,e){if(sd(t=Te(t)))return Yo("Unsupported field value:",e,t),rd(t,e);if(t instanceof Wo)return function(n,r){if(!td(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=qr(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ay(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=qe.fromDate(n);return{timestampValue:ao(r.serializer,s)}}if(n instanceof qe){const s=new qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ao(r.serializer,s)}}if(n instanceof Ko)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:gy(r.serializer,n._byteString)};if(n instanceof Fe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${ci(n)}`)}(t,e)}function rd(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=qr(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Ko||t instanceof jn||t instanceof Fe||t instanceof Wo)}function Yo(t,e,n){if(!sd(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ci(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function lo(t,e,n){if((e=Te(e))instanceof pi)return e._internalPath;if(typeof e=="string")return Qo(t,e);throw $s("Field path arguments must be of type string or ",t,!1,void 0,n)}const My=new RegExp("[~\\*/\\[\\]]");function Qo(t,e,n){if(e.search(My)>=0)throw $s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw $s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $s(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(F,a+t+c)}function id(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Bs{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new od(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class od extends Bs{data(){return super.data()}}class Ly{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Xo(t,e){return typeof e=="string"?Qo(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
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
 */class Zo{}class ea extends Zo{}function zr(t,e,...n){let r=[];e instanceof Zo&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof ta).length,o=s.filter(a=>a instanceof gi).length;if(i>1||i>0&&o>0)throw new P(F,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class gi extends ea{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gi(e,n,r)}_apply(e){const n=this._parse(e);return ad(e._query,n),new Gt(e.firestore,e.converter,oo(e._query,n))}_parse(e){const n=Jo(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(F,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Uc(u,l);const p=[];for(const y of u)p.push(Fc(a,s,y));h={arrayValue:{values:p}}}else h=Fc(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Uc(u,l),h=xy(o,i,u,l==="in"||l==="not-in");return ot.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fy(t,e,n){const r=e,s=Xo("where",t);return gi._create(s,r,n)}class ta extends Zo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ta(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)ad(i,a),i=oo(i,a)}(e._query,n),new Gt(e.firestore,e.converter,oo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class na extends ea{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new na(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new P(F,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(F,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new fr(s,i);return function(a,c){if(jo(a)===null){const l=ui(a);l!==null&&cd(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new li(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function _i(t,e="asc"){const n=e,r=Xo("orderBy",t);return na._create(r,n)}class ra extends ea{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ra(e,n,r)}_apply(e){return new Gt(e.firestore,e.converter,function(n,r,s){return new li(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function sa(t){return H_("limit",t),ra._create("limit",t,"F")}function Fc(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new P(F,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iy(e)&&n.indexOf("/")!==-1)throw new P(F,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!we.isDocumentKey(r))throw new P(F,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rc(t,new we(r))}if(n instanceof Fe)return Rc(t,n._key);throw new P(F,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ci(n)}.`)}function Uc(t,e){if(!Array.isArray(t)||t.length===0)throw new P(F,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ad(t,e){if(e.isInequality()){const r=ui(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new P(F,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=jo(t);i!==null&&cd(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(F,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(F,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cd(t,e,n){if(!n.isEqual(e))throw new P(F,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function ld(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ia extends class{convertValue(e,n="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ko(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pr(e));default:return null}}convertTimestamp(e){const n=mn(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);He(Yu(r));const s=new Ar(r.get(1),r.get(3)),i=new we(r.popFirst(5));return s.isEqual(n)||ai(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function Kt(t){const e=fi((t=$r(t,Fe)).firestore),n=new ia(t.firestore);return Zu(e,[t._key]).then(r=>{He(r.length===1);const s=r[0];return new Bs(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Wr(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new P($o,"limitToLast() queries require specifying at least one orderBy() clause")})((t=$r(t,Gt))._query);const e=fi(t.firestore),n=new ia(t.firestore);return Ay(e,t._query).then(r=>{const s=r.map(i=>new od(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Ly(t,s)})}function vn(t,e,n){const r=ld((t=$r(t,Fe)).converter,e,n),s=nd(Jo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return Xu(fi(t.firestore),[s.toMutation(t._key,mt.none())])}function cs(t,e){if((t=Te(t)).firestore!==e)throw new P(F,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class Uy{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(F,"Firestore transactions require all reads to be executed before all writes.");const n=await Zu(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=we.fromPath(r);this.mutations.push(new Ku(s,this.precondition(s)))}),await Xu(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ne();n=de.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(Vo,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(de.min())?mt.exists(!1):mt.updateTime(n):mt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(de.min()))throw new P(F,"Can't update a document that doesn't exist.");return mt.updateTime(n)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */const Vy={maxAttempts:5};/**
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
 */class $y{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new Qu(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new Uy(this.datastore),n=this.vt(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const n=this.updateFunction(e);return!Uu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!function(r){switch(r){default:return ne();case Uo:case kn:case Cu:case ku:case Du:case xu:case Ds:return!1;case F:case Pu:case N_:case Ou:case pn:case Vo:case Nu:case $o:case D_:return!0}}(n)}return!1}}/**
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
 */function Li(){return typeof document<"u"?document:null}/**
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
 */class oa{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new oa(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(Uo,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class By{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new Qu(this,"async_queue_retry"),this.Dt=()=>{const n=Li();n&&fn("AsyncQueue","Visibility state changed to "+n.visibilityState),this.gt.H()};const e=Li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const n=Li();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const n=new Bo;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(n){return n.name==="IndexedDbTransactionError"}(e))throw e;fn("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const n=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ai("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=n,n}enqueueAfterDelay(e,n,r){this.Ft(),this.Nt.indexOf(e)>-1&&(n=0);const s=oa.createAndSchedule(this,e,n,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&ne()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const n of this.Rt)if(n.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Rt)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const n=this.Rt.indexOf(e);this.Rt.splice(n,1)}}class jy{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Jo(e)}get(e){const n=cs(e,this._firestore),r=new ia(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return ne();const i=s[0];if(i.isFoundDocument())return new Bs(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Bs(this._firestore,r,n._key,null,n.converter);throw ne()})}set(e,n,r){const s=cs(e,this._firestore),i=ld(s.converter,n,r),o=nd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=cs(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof pi?Dy(this._dataReader,"Transaction.update",i._key,n,r,s):Ny(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=cs(e,this._firestore);return this._transaction.delete(n._key),this}}function Hy(t,e,n){const r=fi(t=$r(t,Hr)),s=Object.assign(Object.assign({},Vy),n);(function(o){if(o.maxAttempts<1)throw new P(F,"Max attempts must be at least 1")})(s);const i=new Bo;return new $y(new By,r,s,o=>e(new jy(t,o)),i).run(),i.promise}(function(t){Gn=t})(`${Kn}_lite`),$n(new dn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Hr(new L_(t.getProvider("auth-internal")),new $_(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new P(F,'"projectId" not provided in firebase.initializeApp.');return new Ar(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Ht("firestore-lite","3.12.0",""),Ht("firestore-lite","3.12.0","esm2017");class Fi{}xe(Fi,"APPLICATION_SETTINGS","ApplicationSettings"),xe(Fi,"PRODUCT_SETTINGS","ProductSettings"),xe(Fi,"CUSTOMER_SETTINGS","CustomerSettings");class Vc{}xe(Vc,"SUCCESS","Success"),xe(Vc,"ERROR","Error");class Se{}xe(Se,"INVOICES","Invoices"),xe(Se,"SETTINGS","settings"),xe(Se,"RATES","Rates"),xe(Se,"CCUSTOMERS","Customers"),xe(Se,"PRODUCTS","Products"),xe(Se,"PAYMENTS","Payments"),xe(Se,"USERS","Users"),xe(Se,"AUDIT","Audit");function aa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ud(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qy=ud,dd=new Fr("auth","Firebase",ud());/**
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
 */const js=new xo("@firebase/auth");function zy(t,...e){js.logLevel<=X.WARN&&js.warn(`Auth (${Kn}): ${t}`,...e)}function gs(t,...e){js.logLevel<=X.ERROR&&js.error(`Auth (${Kn}): ${t}`,...e)}/**
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
 */function it(t,...e){throw ca(t,...e)}function gt(t,...e){return ca(t,...e)}function Wy(t,e,n){const r=Object.assign(Object.assign({},qy()),{[e]:n});return new Fr("auth","Firebase",r).create(e,{appName:t.name})}function ca(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dd.create(t,...e)}function $(t,e,...n){if(!t)throw ca(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gs(e),new Error(e)}function At(t,e){t||bt(e)}/**
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
 */function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ky(){return $c()==="http:"||$c()==="https:"}function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ky()||fg()||"connection"in navigator)?navigator.onLine:!0}function Jy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Kr{constructor(e,n){this.shortDelay=e,this.longDelay=n,At(n>e,"Short delay should be less than long delay!"),this.isMobile=hg()||pg()}get(){return Gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function la(t,e){At(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qy=new Kr(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return fd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ur(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),hd.fetch()(pd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function fd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yy),e);try{const s=new Xy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ls(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ls(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ls(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ls(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wy(t,u,l);it(t,u)}}catch(s){if(s instanceof Ct)throw s;it(t,"network-request-failed",{message:String(s)})}}async function yi(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&it(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?la(t.config,s):`${t.config.apiScheme}://${s}`}class Xy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Qy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ls(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Zy(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function ev(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tv(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=ua(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gr(Ui(s.auth_time)),issuedAtTime:gr(Ui(s.iat)),expirationTime:gr(Ui(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ui(t){return Number(t)*1e3}function ua(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const s=_u(n);return s?JSON.parse(s):(gs("Failed to decode base64 JWT payload"),null)}catch(s){return gs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nv(t){const e=ua(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&rv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await kr(t,ev(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?av(i.providerUserInfo):[],a=ov(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iv(t){const e=Te(t);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ov(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function av(t){return t.map(e=>{var{providerId:n}=e,r=aa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cv(t,e){const n=await fd(t,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=pd(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function Nt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tv(this,e)}reload(){return iv(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kr(this,Zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,B=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:Y,isAnonymous:pe,providerData:Ee,stsTokenManager:Ve}=n;$(D&&Ve,e,"internal-error");const Je=Nr.fromJSON(this.name,Ve);$(typeof D=="string",e,"internal-error"),Nt(h,e.name),Nt(p,e.name),$(typeof Y=="boolean",e,"internal-error"),$(typeof pe=="boolean",e,"internal-error"),Nt(y,e.name),Nt(S,e.name),Nt(N,e.name),Nt(V,e.name),Nt(O,e.name),Nt(B,e.name);const at=new un({uid:D,auth:e,email:p,emailVerified:Y,displayName:h,isAnonymous:pe,photoURL:S,phoneNumber:y,tenantId:N,stsTokenManager:Je,createdAt:O,lastLoginAt:B});return Ee&&Array.isArray(Ee)&&(at.providerData=Ee.map(ze=>Object.assign({},ze))),V&&(at._redirectEventId=V),at}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nr;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hs(i),i}}/**
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
 */const Bc=new Map;function Et(t){At(t instanceof Function,"Expected a class definition");let e=Bc.get(t);return e?(At(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bc.set(t,e),e)}/**
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
 */class gd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gd.type="NONE";const jc=gd;/**
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
 */function _s(t,e,n){return`firebase:${t}:${e}:${n}`}class Nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_s(this.userKey,s.apiKey,i),this.fullPersistenceKey=_s("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nn(Et(jc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Et(jc);const o=_s(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=un._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Nn(i,e,r))}}/**
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
 */function Hc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Ed(e))return"Webos";if(da(e))return"Safari";if((e.includes("chrome/")||yd(e))&&!e.includes("edge/"))return"Chrome";if(wd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _d(t=Pe()){return/firefox\//i.test(t)}function da(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yd(t=Pe()){return/crios\//i.test(t)}function vd(t=Pe()){return/iemobile/i.test(t)}function wd(t=Pe()){return/android/i.test(t)}function bd(t=Pe()){return/blackberry/i.test(t)}function Ed(t=Pe()){return/webos/i.test(t)}function vi(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lv(t=Pe()){var e;return vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uv(){return mg()&&document.documentMode===10}function Id(t=Pe()){return vi(t)||wd(t)||Ed(t)||bd(t)||/windows phone/i.test(t)||vd(t)}function dv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Td(t,e=[]){let n;switch(t){case"Browser":n=Hc(Pe());break;case"Worker":n=`${Hc(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kn}/${r}`}async function Sd(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Gr(t,e))}function qc(t){return t!==void 0&&t.enterprise!==void 0}class Ad{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function hv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",hv().appendChild(r)})}function fv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pv="https://www.google.com/recaptcha/enterprise.js?render=",mv="recaptcha-enterprise",gv="NO_RECAPTCHA";class Cd{constructor(e){this.type=mv,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Sd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ad(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;qc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&qc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rd(pv+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zc(t,e,n,r=!1){const s=new Cd(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class _v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Te(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}async initializeRecaptchaConfig(){const e=await Sd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ad(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Cd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return Te(t)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eg(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function vv(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ks(i,e??{}))return s;it(s,"already-initialized")}return n.initialize({options:e})}function wv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bv(t,e,n){const r=Jr(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Pd(e),{host:o,port:a}=Ev(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Iv()}function Pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ev(t){const e=Pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kc(o)}}}function Kc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Iv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function Tv(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Vi(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
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
 */async function Sv(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function Av(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
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
 */class Dr extends ha{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Dr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await zc(e,r,"signInWithPassword");return Vi(e,s)}else return Vi(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await zc(e,r,"signInWithPassword");return Vi(e,i)}else return Promise.reject(s)});case"emailLink":return Sv(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Tv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Av(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dn(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
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
 */const Rv="http://localhost";class yn extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=aa(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:Rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ur(n)}return e}}/**
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
 */function Cv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pv(t){const e=ir(or(t)).link,n=e?ir(or(e)).deep_link_id:null,r=ir(or(t)).deep_link_id;return(r?ir(or(r)).link:null)||r||n||e||t}class fa{constructor(e){var n,r,s,i,o,a;const c=ir(or(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Cv((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Pv(e);try{return new fa(n)}catch{return null}}}/**
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
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(e,n){return Dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fa.parseLink(n);return $(r,"argument-error"),Dr._fromEmailAndCode(e,r.code,r.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yr extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mt extends Yr{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class Ft extends Yr{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class Ut extends Yr{constructor(){super("twitter.com")}static credential(e,n){return yn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
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
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),o=Gc(r);return new Hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gc(r);return new Hn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qs extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qs(e,n,r,s)}}function kd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(t,i,e,r):i})}async function Ov(t,e,n=!1){const r=await kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hn._forOperation(t,"link",r)}/**
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
 */async function kv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await kr(t,kd(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=ua(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Hn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(r,"user-mismatch"),i}}/**
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
 */async function Nd(t,e,n=!1){const r="signIn",s=await kd(t,r,e),i=await Hn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nv(t,e){return Nd(Jr(t),e)}function Dv(t,e,n){return Nv(Te(t),Yn.credential(e,n))}function xv(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function Mv(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}const zs="__sak";/**
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
 */class Dd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zs,"1"),this.storage.removeItem(zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lv(){const t=Pe();return da(t)||vi(t)}const Fv=1e3,Uv=10;class xd extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lv()&&dv(),this.fallbackToPolling=Id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Uv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xd.type="LOCAL";const Vv=xd;/**
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
 */class Md extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Md.type="SESSION";const Ld=Md;/**
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
 */function $v(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new wi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $v(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
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
 */function pa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function jv(t){_t().location.href=t}/**
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
 */function Fd(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function Hv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zv(){return Fd()?self:null}/**
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
 */const Ud="firebaseLocalStorageDb",Wv=1,Ws="firebaseLocalStorage",Vd="fbase_key";class Qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bi(t,e){return t.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function Kv(){const t=indexedDB.deleteDatabase(Ud);return new Qr(t).toPromise()}function ho(){const t=indexedDB.open(Ud,Wv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ws,{keyPath:Vd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await Kv(),e(await ho()))})})}async function Jc(t,e,n){const r=bi(t,!0).put({[Vd]:e,value:n});return new Qr(r).toPromise()}async function Gv(t,e){const n=bi(t,!1).get(e),r=await new Qr(n).toPromise();return r===void 0?null:r.value}function Yc(t,e){const n=bi(t,!0).delete(e);return new Qr(n).toPromise()}const Jv=800,Yv=3;class $d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ho(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(zv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hv(),!this.activeServiceWorker)return;this.sender=new Bv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ho();return await Jc(e,zs,"1"),await Yc(e,zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bi(s,!1).getAll();return new Qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$d.type="LOCAL";const Qv=$d;new Kr(3e4,6e4);/**
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
 */function Xv(t,e){return e?Et(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ma extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zv(t){return Nd(t.auth,new ma(t),t.bypassAuthState)}function ew(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kv(n,new ma(t),t.bypassAuthState)}async function tw(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ov(n,new ma(t),t.bypassAuthState)}/**
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
 */class Bd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zv;case"linkViaPopup":case"linkViaRedirect":return tw;case"reauthViaPopup":case"reauthViaRedirect":return ew;default:it(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nw=new Kr(2e3,1e4);class An extends Bd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nw.get())};e()}}An.currentPopupAction=null;/**
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
 */const rw="pendingRedirect",ys=new Map;class sw extends Bd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iw(t,e){const n=cw(e),r=aw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ow(t,e){ys.set(t._key(),e)}function aw(t){return Et(t._redirectPersistence)}function cw(t){return _s(rw,t.config.apiKey,t.name)}async function lw(t,e,n=!1){const r=Jr(t),s=Xv(r,e),o=await new sw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uw=10*60*1e3;class dw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(t);default:return!1}}/**
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
 */async function fw(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
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
 */const pw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function gw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fw(t);for(const n of e)try{if(_w(n))return}catch{}it(t,"unauthorized-domain")}function _w(t){const e=uo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mw.test(n))return!1;if(pw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yw=new Kr(3e4,6e4);function Xc(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vw(t){return new Promise((e,n)=>{var r,s,i;function o(){Xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xc(),n(gt(t,"network-request-failed"))},timeout:yw.get()})}if(!((s=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_t().gapi)===null||i===void 0)&&i.load)o();else{const a=fv("iframefcb");return _t()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},Rd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vs=null,e})}let vs=null;function ww(t){return vs=vs||vw(t),vs}/**
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
 */const bw=new Kr(5e3,15e3),Ew="__/auth/iframe",Iw="emulator/auth/iframe",Tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Aw(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?la(e,Iw):`https://${t.config.authDomain}/${Ew}`,r={apiKey:e.apiKey,appName:t.name,v:Kn},s=Sw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ur(r).slice(1)}`}async function Rw(t){const e=await ww(t),n=_t().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Aw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=_t().setTimeout(()=>{i(o)},bw.get());function c(){_t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pw=500,Ow=600,kw="_blank",Nw="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dw(t,e,n,r=Pw,s=Ow){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cw),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=yd(l)?kw:n),_d(l)&&(e=e||Nw,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[y,S])=>`${p}${y}=${S},`,"");if(lv(l)&&a!=="_self")return xw(e||"",a),new Zc(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Zc(h)}function xw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mw="__/auth/handler",Lw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function el(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kn,eventId:s};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Fw}=${encodeURIComponent(c)}`:"";return`${Uw(t)}?${Ur(a).slice(1)}${l}`}function Uw({config:t}){return t.emulator?la(t,Lw):`https://${t.authDomain}/${Mw}`}/**
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
 */const $i="webStorageSupport";class Vw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=lw,this._overrideRedirectResult=ow}async _openPopup(e,n,r,s){var i;At((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await el(e,n,r,uo(),s);return Dw(e,o,pa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await el(e,n,r,uo(),s);return jv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(At(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rw(e),r=new dw(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($i,{type:$i},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$i];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Id()||da()||vi()}}const $w=Vw;var tl="@firebase/auth",nl="0.23.2";/**
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
 */class Bw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hw(t){$n(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Td(t)},l=new yv(r,s,i,c);return wv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new dn("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new Bw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(tl,nl,jw(t)),Ht(tl,nl,"esm2017")}/**
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
 */const qw=5*60,zw=wu("authIdTokenMaxAge")||qw;let rl=null;const Ww=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zw)return;const s=n==null?void 0:n.token;rl!==s&&(rl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ws(t=Tu()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vv(t,{popupRedirectResolver:$w,persistence:[Qv,Vv,Ld]}),r=wu("authTokenSyncURL");if(r){const i=Ww(r);Mv(n,i,()=>i(n.currentUser)),xv(n,o=>i(o))}const s=yu("auth");return s&&bv(n,`http://${s}`),n}Hw("Browser");const Kw={apiKey:"AIzaSyAET8eUrZHm1IrHhzl2FaWfW1Jr4Wqo7IA",authDomain:"gold-smith-aljihad.firebaseapp.com",projectId:"gold-smith-aljihad",storageBucket:"gold-smith-aljihad.appspot.com",messagingSenderId:"265121429939",appId:"1:265121429939:web:419003c9403699fd8273c6",measurementId:"G-4B9DDZDD8V"},Gw=Iu(Kw),fe=Ry(Gw);class Jw{constructor(){this.collectionName=Se.INVOICES}async addOrUpdate(e){const n=_e(fe,this.collectionName);var r=await Kt(be(n,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";Xn.fillUpdatedInfo(e),await vn(be(n,e.invoiceNumber),e),await ob.addOrUpdate({receiptNumber:"R"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalAmount,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),Qn.log(e,"Invoice","Created"+e.invoiceNumber)}async list(e,n,r){const s=_e(fe,this.collectionName),i=zr(s,_i("purchaseDate","desc"),sa(10)),a=(await Wr(i)).docs.map(l=>l.data());if(r){var c=r.toLowerCase().trim();return _.filter(a,function(l){return l.invoiceNumber.toLowerCase().includes(c)||l.customer.toLowerCase().includes(c)})}return a}async getById(e){const n=_e(fe,this.collectionName);var r=await Kt(be(n,e));if(r.exists())return r.data()}}class Yw{constructor(){this.collectionName=Se.SETTINGS}async addOrUpdate(e){const n=_e(fe,this.collectionName);Xn.fillUpdatedInfo(e),await vn(be(n,e.identifier),e),Qn.log(e,"Settings","Changed settings "+e.identifier)}async getById(e){const n=_e(fe,this.collectionName),r=await Kt(be(n,e));return r.exists()?r.data():{identifier:e}}}class Qw{constructor(){this.users=[],this.collectionName=Se.USERS}addOrUpdate(e){this.users=_.filter(this.users,function(n){return n.name!=e.name}),this.users.push(e)}async getById(e){if(!e)return;const n=_e(fe,this.collectionName);var r=await Kt(be(n,customerId));if(r.exists())return r.data()}async list(){const e=[],n=ws();return e.push(...n.users),e}setStatus(e,n){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=n)}}class Xw{constructor(){this.collectionName=Se.RATES}async addOrUpdate(e){let n=Vn.getTodayAsString();const r=_e(fe,this.collectionName);var s={rate:e.rate,date:n};Xn.fillUpdatedInfo(s),await vn(be(r,n),s),Qn.log(s,"Rate","Changed rate to "+s.rate)}async list(){const e=_e(fe,this.collectionName),n=zr(e,_i("date","desc"),sa(10));return(await Wr(n)).docs.map(i=>i.data())}async getTodaysRate(){let e=Vn.getTodayAsString();const n=_e(fe,this.collectionName);var r=await Kt(be(n,e));if(r.exists())return r.data().rate}}class Zw{constructor(){this.collectionName=Se.CCUSTOMERS}async list(e,n=!1){const r=_e(fe,this.collectionName);var s=null;n&&(s=Fy("status","==","Active"));const i=zr(r,s);var a=(await Wr(i)).docs.map(c=>c.data());if(e){const c=e.toLowerCase();a=_.filter(a,function(l){return l.Name.toLowerCase().includes(c)||l.Contact&&l.Contact.toString().toLowerCase().includes(c)})}return a=_.sortBy(a,function(c){return c.Name}),a}async addOrUpdate(e){const n=_e(fe,this.collectionName);var r="Updated";e.id||(e.id=be(n).id,r="Added"),Xn.fillUpdatedInfo(e),await vn(be(n,e.id),e),Qn.log(e,"Customer",r+":"+JSON.stringify(e))}async getById(e){const n=_e(fe,this.collectionName);var r=await Kt(be(n,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,n){const r=be(_e(fe,this.collectionName),e);try{await Hy(fe,async s=>{const i=await s.get(r);if(!i.exists())throw"Document does not exist!";const o=i.data();n<0?o.debit?o.debit+=n*-1:o.debit=n*-1:o.credit?o.credit+=n:o.credit=n,s.update(r,o)}),console.log("Transaction successfully committed!")}catch(s){console.log("Transaction failed: ",s)}}}class eb{constructor(){this.collectionName=Se.PRODUCTS}async list(e){const n=_e(fe,this.collectionName),r=zr(n,_i("Name"));var i=(await Wr(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const n=_e(fe,this.collectionName);var r="Updated";e.id||(e.id=be(n).id,r="Added"),Xn.fillUpdatedInfo(e),await vn(be(n,e.id),e),Qn.log(e,"Product",r+":"+JSON.stringify(e))}}class tb{constructor(){this.collectionName=Se.PAYMENTS}async addOrUpdate(e){const n=_e(fe,this.collectionName);var r=await Kt(be(n,e.receiptNumber));if(r.exists())throw"Payment cannot be updated";Xn.fillUpdatedInfo(e),await vn(be(n,e.receiptNumber),e),await ib.runDebitCreditTransaction(e.customerId,e.amount),Qn.log(e,"Payment","Added :"+e.receiptNumber)}async list(e,n){const r=_e(fe,this.collectionName),s=zr(r,_i("paymentDate","desc"),sa(10));return(await Wr(s)).docs.map(a=>a.data())}async getById(e){const n=_e(fe,this.collectionName);var r=await Kt(be(n,e));if(r.exists())return r.data()}}class nb{async tryLogin(e,n){const r=ws();return await Dv(r,e,n)}getCurrentUser(){return ws().currentUser}async signOut(){this.getCurrentUser()&&await ws().signOut()}}class rb{constructor(){this.collectionName=Se.AUDIT}async log(e,n,r){const s=_e(fe,this.collectionName);vn(be(s),{time:e.updatedOn,user:e.updatedByDisplayName,userId:e.updatedBy,module:n,action:r})}}class sb{fillUpdatedInfo(e){const n=Hd.getCurrentUser();e.updatedByDisplayName=n.displayName??n.email,e.updatedBy=n.uid,e.updatedOn=Vn.getNowAsMilliSeconds()}}const gb=new Jw,_b=new Qw,yb=new Xw,ib=new Zw,vb=new eb,wb=new Yw,ob=new tb,Hd=new nb,Qn=new rb,Xn=new sb,Jt=yp(Em);Jt.use(pu);Jt.mount("#app");Jt.config.globalProperties.$currentuser={};Jt.config.globalProperties.$appname="AL JIHAD JEWELLERY MAKERS";Jt.config.globalProperties.$appShortName="AL JIHAD";Jt.config.globalProperties.$basedomainname="/aljihad/";Jt.config.globalProperties.$statusLabelMapper={enabled:"Active",disabled:"Inactive"};Jt.config.globalProperties.$alertShowDuration=3e3;pu.beforeEach((t,e,n)=>{if(t.path.startsWith("/payments/")||t.path.startsWith("/invoices/")||t.path.startsWith("/login")){n();return}Hd.getCurrentUser()?n():n({path:"/login",query:{nextUrl:t.path}})});export{Vc as A,ob as B,Vn as C,ub as D,Ke as F,mb as I,Fi as S,Sm as _,db as a,W as b,Ff as c,mf as d,pb as e,oe as f,hb as g,ri as h,We as i,Ym as j,yb as k,gb as l,dt as m,ib as n,Lr as o,vb as p,yf as q,lb as r,wb as s,il as t,cn as u,fb as v,cb as w,Hd as x,mo as y,_b as z};
