import{d as C,r as l,o as e,c as t,F as _,j as d,e as o,w as u,b as s,f as N,t as b,K as m,D as V}from"./index.8a8bd594.js";const j={class:"row"},B={class:"sets-list__set__content"},S={class:"sets-list__set__content__overlay pa-3 fill-height"},$={class:"vuestic-icon"},z={class:"sets-list__icon flex xs2"},D={class:"vuestic-icon"},F=s("div",{class:"flex xs8"},null,-1),E={class:"sets-list__icon flex xs2"},K={class:"vuestic-icon"},U=C({__name:"SetsList",props:{sets:null},setup(x){const i=(v,p)=>`${v.prefix}-${p}`;return(v,p)=>{const h=l("va-button"),c=l("va-icon"),f=l("router-link"),y=l("va-card");return e(),t("div",j,[(e(!0),t(_,null,d(x.sets,(n,g)=>(e(),t("div",{key:g,class:"va-card-wrapper flex lg6 xs12"},[o(y,null,{default:u(()=>[o(f,{to:{path:`icons/${n.href}`},append:"",style:{color:"inherit"}},{default:u(()=>[s("div",B,[s("div",S,[o(h,null,{default:u(()=>[N(b(n.name.toUpperCase()),1)]),_:2},1024)]),(e(!0),t(_,null,d(n.filteredLists,(a,r)=>(e(),t(_,null,[a.length!==2?(e(),t("div",{key:r,class:"row pa-3"},[(e(!0),t(_,null,d(a,(k,w)=>(e(),t("div",{key:w,class:"sets-list__icon flex xs2"},[s("div",$,[o(c,{name:i(n,k)},null,8,["name"])])]))),128))])):m("",!0),a.length===2?(e(),t("div",{key:r,class:V(["row pa-3",r===1?"sets-list__set__content--middle":""])},[s("div",z,[s("div",D,[o(c,{name:i(n,a[0])},null,8,["name"])])]),F,s("div",E,[s("div",K,[o(c,{name:i(n,a[1])},null,8,["name"])])])],2)):m("",!0)],64))),256))])]),_:2},1032,["to"])]),_:2},1024)]))),128))])}}});export{U as default};