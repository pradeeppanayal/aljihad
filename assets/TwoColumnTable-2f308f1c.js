import{o as e,c as s,b as t,F as o,r as c,t as a}from"./index-b1bcbb78.js";const i={key:0,class:"table"},r=t("thead",null,null,-1),_={key:1},d=t("div",{class:"text-center display-10"},"No data to show",-1),u=[d],m={props:["items"],emits:[],methods:{}},k=Object.assign(m,{__name:"TwoColumnTable",setup(l){return(h,b)=>l.items&&l.items.length>0?(e(),s("table",i,[r,t("tbody",null,[(e(!0),s(o,null,c(l.items,n=>(e(),s("tr",null,[t("th",null,a(n.key),1),t("td",null,a(n.value),1)]))),256))])])):(e(),s("div",_,u))}});export{k as _};