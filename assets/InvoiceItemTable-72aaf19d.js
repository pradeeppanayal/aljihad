import{o as a,c as u,b as t,t as l,w as n,e as i,F as d,r as h,a as r,u as m,C as g}from"./index-10b0ee7c.js";const p={class:"table"},_=t("th",{scope:"col"},"Sl. No",-1),A=t("th",{scope:"col"},"Item",-1),f=t("th",{scope:"col"},"Weight",-1),F=t("th",{scope:"col"},"Purity",-1),b=t("th",{scope:"col"},"Pure Weight",-1),k=t("th",{scope:"col"},"Making Rate",-1),v=t("th",{scope:"col"},"Making Amount",-1),C=t("th",{scope:"col"},"Metal Amount",-1),y=t("th",{scope:"col"},"Taxable Amount",-1),w={scope:"col"},W=t("th",{scope:"col"},"Total Amount",-1),T={scope:"col"},M={key:0},I=["onClick"],D=t("th",{scope:"col"},"Total",-1),x=t("th",{scope:"col"},null,-1),V={scope:"col"},B=t("th",{scope:"col"},null,-1),P={scope:"col"},S=t("th",{scope:"col"},null,-1),N={scope:"col"},$={scope:"col"},L={scope:"col"},U={scope:"col"},j={scope:"col"},O={scope:"col"},R={class:"table",style:{"text-align":"end"}},q={style:{border:"1px solid #ccc"}},z=t("td",null,null,-1),G=t("th",null,"Total Amount of Making Charge ",-1),H={style:{border:"1px solid #ccc"}},J={style:{border:"1px solid #ccc"}},K=t("td",null,null,-1),Q={style:{border:"1px solid #ccc"}},X={style:{border:"1px solid #ccc"}},Y=t("td",null,null,-1),Z=t("th",null,"Total Making Charge",-1),E={style:{border:"1px solid #ccc"}},tt={style:{border:"1px solid #ccc"}},ot=t("td",null,null,-1),et=t("th",null,"Metal Charge",-1),lt={style:{border:"1px solid #ccc"}},st={style:{border:"1px solid #ccc"}},nt=t("td",null,null,-1),it=t("th",null,"Total Amount",-1),at={style:{border:"1px solid #ccc"}},ut=t("td",{style:{border:"1px solid #ccc"}},"Total Amount in Words ",-1),dt={style:{border:"1px solid #ccc"},colspan:"2"},ct={props:["invoiceinfo","allowdelete","fraction_digits","updatecount"],emits:["rowdelete","totals"],data:function(){return{default_fraction_digits:3,rowNo:0,itemsWithCalculatedFields:[],totals:[]}},watch:{updatecount:function(){this.populateDynamicFields()}},mounted:function(){this.populateDynamicFields()},methods:{populateDynamicFields:function(){this.populateCalculatedFields(),this.populateTotals()},asFixed:function(o){return o&&o.toLocaleString("en-US",{minimumFractionDigits:this.default_fraction_digits,maximumFractionDigits:this.default_fraction_digits})},populateCalculatedFields:function(){if(this.itemsWithCalculatedFields=[],!(!this.invoiceinfo||!this.invoiceinfo.items||this.invoiceinfo.items.length==0))for(let e of this.invoiceinfo.items){var o={...e};o.actualItme=e,this.populateCalculatedFieldsByItem(o),this.itemsWithCalculatedFields.push(o)}},populateCalculatedFieldsByItem:function(o){o.pureWeight=o.purity/1e3*o.weight,o.makingAmount=o.making*o.weight,o.metalAmount=this.invoiceinfo.rate*o.pureWeight,o.taxableAmount=o.making*o.weight,o.vatAmount=this.invoiceinfo.vat/100*o.taxableAmount,o.totalAmount=o.metalAmount+o.makingAmount+o.vatAmount},populateTotals:function(){var o={weight:0,pureWeight:0,makingAmount:0,taxableAmount:0,metalAmount:0,vatAmount:0,totalMakingCharge:0,totalAmount:0};if(!(!this.itemsWithCalculatedFields||this.itemsWithCalculatedFields.length==0)){for(let e of this.itemsWithCalculatedFields)o.weight+=e.weight,o.pureWeight+=e.pureWeight,o.makingAmount+=e.makingAmount,o.taxableAmount+=e.taxableAmount,o.metalAmount+=e.metalAmount,o.vatAmount+=e.vatAmount,o.totalAmount+=e.totalAmount;o.totalMakingCharge=o.vatAmount+o.makingAmount,this.totals=o,this.$emit("totals",o)}},getPureWeight:function(o){return o.purity/1e3*o.weight},getMakingAmount:function(o){return o.making*o.weight},getMetalAmount:function(o){return this.invoiceinfo.rate*this.getPureWeight(o)},getTaxableAmount:function(o){return o.making*o.weight},getVATAmount:function(o){return this.invoiceinfo.vat/100*this.getTaxableAmount(o)},getTotalAmountPerItem:function(o){return this.getMetalAmount(o)+this.getMakingAmount(o)+this.getVATAmount(o)}}},gt=Object.assign(ct,{__name:"InvoiceItemTable",setup(o){return(e,ht)=>(a(),u(d,null,[t("table",p,[t("thead",null,[t("tr",null,[_,A,f,F,b,k,v,C,y,t("th",w,"VAT Amount ("+l(o.invoiceinfo.vat)+"%)",1),W,n(t("th",T,"Actions",512),[[i,o.allowdelete]])])]),e.itemsWithCalculatedFields&&e.itemsWithCalculatedFields.length>0?(a(),u("tbody",M,[(a(!0),u(d,null,h(e.itemsWithCalculatedFields,(s,c)=>(a(),u("tr",null,[t("td",null,l(c+1),1),t("td",null,l(s.name),1),t("td",null,l(e.asFixed(s.weight)),1),t("td",null,l(e.asFixed(s.purity)),1),t("td",null,l(e.asFixed(s.pureWeight)),1),t("td",null,l(e.asFixed(s.making)),1),t("td",null,l(e.asFixed(s.makingAmount)),1),t("td",null,l(e.asFixed(s.metalAmount)),1),t("td",null,l(e.asFixed(s.taxableAmount)),1),t("td",null,l(e.asFixed(s.vatAmount)),1),t("td",null,l(e.asFixed(s.totalAmount)),1),n(t("td",null,[n(t("button",{class:"btn btn-outline-danger material-icons",onClick:rt=>e.$emit("rowdelete",s.actualItme)},"delete",8,I),[[i,o.allowdelete]])],512),[[i,o.allowdelete]])]))),256)),n(t("tr",null,[D,x,t("th",V,l(e.asFixed(e.totals.weight)),1),B,t("th",P,l(e.asFixed(e.totals.pureWeight)),1),S,t("th",N,l(e.asFixed(e.totals.makingAmount)),1),t("th",$,l(e.asFixed(e.totals.metalAmount)),1),t("th",L,l(e.asFixed(e.totals.taxableAmount)),1),t("th",U,l(e.asFixed(e.totals.vatAmount)),1),t("th",j,l(e.asFixed(e.totals.totalAmount)),1),n(t("th",O,null,512),[[i,o.allowdelete]])],512),[[i,e.totals]])])):r("",!0)]),n(t("table",R,[t("tr",q,[z,G,t("th",H,l(e.asFixed(e.totals.makingAmount)),1)]),t("tr",J,[K,t("th",null,"Total VAT on Making Charge @"+l(o.invoiceinfo.vat)+"%",1),t("th",Q,l(e.asFixed(e.totals.vatAmount)),1)]),t("tr",X,[Y,Z,t("th",E,l(e.asFixed(e.totals.totalMakingCharge)),1)]),t("tr",tt,[ot,et,t("th",lt,l(e.asFixed(e.totals.metalAmount)),1)]),t("tr",st,[nt,it,t("th",at,l(e.asFixed(e.totals.totalAmount)),1)]),t("tr",null,[ut,t("td",dt,[t("b",null,l(m(g).doConvert(e.totals.totalAmount)),1)])])],512),[[i,e.totals&&e.itemsWithCalculatedFields&&e.itemsWithCalculatedFields.length>0]])],64))}});export{gt as _};