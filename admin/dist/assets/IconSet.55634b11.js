import{d as L,v as A,u as q,r as x,n as C,f as l,o as i,c as _,b as s,w as n,F as I,j as S,q as t,i as a,t as u,y,k as j,h as D,K}from"./index.d1e12703.js";const T={class:"icon-set"},G={class:"flex md4 xs12 justify-center"},H={class:"flex md4 xs12 justify-center"},J={class:"flex md4 xs12 justify-center content icon-set__header__size"},M={key:0},O={class:"vuestic-icon mb-3 pt-3"},P={class:"icon-text"},R=L({__name:"IconSet",props:{name:null,sets:null},setup(w){const b=w,{colors:p}=A(),{t:v}=q(),d=x(""),m=x(30),g=x({formatter:e=>`${e}px`,min:20,max:40}),f=C(()=>{for(const e of b.sets)if(e.href===b.name)return e;return{name:"",href:"",prefix:"",lists:[],filteredLists:[]}}),N=C(()=>{if(!d.value)return f.value.lists;const e=[];return f.value.lists.forEach(c=>{c.icons.forEach(r=>{!r.toUpperCase().includes(d.value.toUpperCase())||e.includes(r)||e.push(r)})}),[{name:"Found Icons",icons:e}]}),B=e=>`${f.value.prefix}-${e}`;return(e,c)=>{const r=l("va-card-title"),U=l("va-button"),z=l("va-icon"),$=l("va-input"),E=l("va-slider"),k=l("va-card-content"),V=l("va-card");return i(),_("div",T,[s(V,{class:"icon-set__header mb-4 pb-3"},{default:n(()=>[s(r,null,{default:n(()=>[a("h2",{class:"my-0 ml-2",style:y({color:t(p).dark})},u(t(f).name),5)]),_:1}),s(k,{class:"row"},{default:n(()=>[a("div",G,[s(U,{preset:"outline","border-color":"primary",color:"primary",to:{name:"icon-sets"}},{default:n(()=>[j(u(t(v)("icons.back")),1)]),_:1})]),a("div",H,[s($,{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=o=>d.value=o),label:t(v)("icons.search"),clearable:""},{prependInner:n(()=>[s(z,{class:"icon-left input-icon",name:"search"})]),_:1},8,["modelValue","label"])]),a("div",J,[a("span",{class:"ma-2 pr-2 shrink icon-set__header__size--smaller",style:y({color:t(p).dark})},"A",4),s(E,{modelValue:m.value,"onUpdate:modelValue":c[1]||(c[1]=o=>m.value=o),"value-visible":"",style:{flex:"1"},"label-value":`${m.value}px`,min:g.value.min,max:g.value.max},null,8,["modelValue","label-value","min","max"]),a("span",{class:"ma-2 pl-2 shrink icon-set__header__size--bigger",style:y({color:t(p).dark})},"A",4)])]),_:1})]),_:1}),(i(!0),_(I,null,S(t(N),(o,F)=>(i(),D(V,{key:F,class:"flex md12"},{default:n(()=>[s(r,null,{default:n(()=>[j(u(o.name),1)]),_:2},1024),s(k,{class:"row"},{default:n(()=>[o.icons.length===0?(i(),_("span",M,u(t(v)("icons.none")),1)):K("",!0),(i(!0),_(I,null,S(o.icons,h=>(i(),_("div",{key:h,class:"flex justify-center xs3 md1 mb-2 icon-grid-container",style:{"flex-direction":"column"}},[a("div",O,[s(z,{name:B(h),size:m.value},null,8,["name","size"])]),a("div",P,u(h),1)]))),128))]),_:2},1024)]),_:2},1024))),128))])}}});export{R as default};
