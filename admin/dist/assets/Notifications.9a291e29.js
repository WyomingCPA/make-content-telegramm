import{_ as N,d as T,G as S,B as D,o as U,c as $,b as e,L as g,I as x,D as a,y as I,h as V,r as p,e as t,w as l,g as c,t as u}from"./index.0bed29a4.js";import{u as L}from"./useToast-28d879a9.6d7d868b.js";const q={class:"toast-position-picker mr-4"},z={class:"position-boxes-row d-flex"},A={class:"position-boxes-row d-flex"},E=T({__name:"ToastPositionPicker",props:{modelValue:{default:"bottom-center"}},emits:["update:modelValue"],setup(y,{emit:s}){const P=y,{colors:n}=S(),r=D(()=>({backgroundColor:n.primary}));function m(_){s("update:modelValue",_)}function v(_){return P.modelValue===_}return(_,d)=>(U(),$("div",q,[e("div",z,[e("div",{class:g(["position-box",{selected:v("top-left")}]),style:x(a(r)),onClick:d[0]||(d[0]=o=>m("top-left"))},null,6),e("div",{class:g(["position-box",{selected:v("top-right")}]),style:x(a(r)),onClick:d[1]||(d[1]=o=>m("top-right"))},null,6)]),e("div",A,[e("div",{class:g(["position-box",{selected:v("bottom-left")}]),style:x(a(r)),onClick:d[2]||(d[2]=o=>m("bottom-left"))},null,6),e("div",{class:g(["position-box",{selected:v("bottom-right")}]),style:x(a(r)),onClick:d[3]||(d[3]=o=>m("bottom-right"))},null,6)])]))}});var G=N(E,[["__scopeId","data-v-09ab1d42"]]);const j={class:"notifications"},F={class:"row"},H={class:"flex xs12"},J={class:"mb-3"},K={class:"mb-3"},O={class:"mb-3"},Q={class:"mb-3"},R={class:"mb-3"},W={class:"mb-3"},X={class:"mb-3"},Y={class:"row"},Z={class:"flex xs12"},oo={class:"flex xs12 md6"},to={class:"flex xs12 md6"},eo={class:"row"},ao={class:"flex xs12"},so={class:"flex xs12"},no=T({__name:"Notifications",setup(y){const{t:s}=I(),{init:P}=L(),n=V(!0),r=V("This toast is awesome!"),m=V(2500),v=V("bottom-right");function _(){P({message:r.value,position:v.value,duration:Number(m.value)})}return(d,o)=>{const w=p("va-card-title"),M=p("va-checkbox"),f=p("va-badge"),b=p("va-alert"),k=p("va-card-content"),h=p("va-card"),C=p("va-input"),B=p("va-button");return U(),$("div",j,[e("div",F,[e("div",H,[t(h,null,{default:l(()=>[t(w,null,{default:l(()=>[c(u(a(s)("notificationsPage.notifications.title")),1)]),_:1}),t(k,null,{default:l(()=>[e("div",J,[t(M,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value=i),label:"Toggle visibility"},null,8,["modelValue"])]),e("div",K,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=i=>n.value=i),closeable:""},{icon:l(()=>[t(f,{text:a(s)("notificationsPage.notifications.success")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.successMessage")),1)]),_:1},8,["modelValue"])]),e("div",O,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=i=>n.value=i),color:"info",closeable:""},{icon:l(()=>[t(f,{color:"info",text:a(s)("notificationsPage.notifications.info")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.infoMessage")),1)]),_:1},8,["modelValue"])]),e("div",Q,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=i=>n.value=i),color:"warning",closeable:""},{icon:l(()=>[t(f,{color:"warning",text:a(s)("notificationsPage.notifications.warning")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"])]),e("div",R,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=i=>n.value=i),color:"danger",closeable:""},{icon:l(()=>[t(f,{color:"danger",text:a(s)("notificationsPage.notifications.danger")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])]),e("div",W,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[5]||(o[5]=i=>n.value=i),color:"gray",closeable:""},{icon:l(()=>[t(f,{color:"gray",text:a(s)("notificationsPage.notifications.gray")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"])]),e("div",X,[t(b,{modelValue:n.value,"onUpdate:modelValue":o[6]||(o[6]=i=>n.value=i),color:"dark",closeable:""},{icon:l(()=>[t(f,{color:"dark",text:a(s)("notificationsPage.notifications.dark")},null,8,["text"])]),default:l(()=>[c(" "+u(a(s)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1})])]),e("div",Y,[e("div",Z,[t(h,null,{default:l(()=>[t(w,null,{default:l(()=>[c(u(a(s)("notificationsPage.toasts.title")),1)]),_:1}),t(k,{class:"row"},{default:l(()=>[e("div",oo,[t(C,{modelValue:r.value,"onUpdate:modelValue":o[7]||(o[7]=i=>r.value=i),label:a(s)("notificationsPage.toasts.textLabel"),class:"control-input mb-3",required:""},null,8,["modelValue","label"]),t(C,{modelValue:m.value,"onUpdate:modelValue":o[8]||(o[8]=i=>m.value=i),type:"number",label:a(s)("notificationsPage.toasts.durationLabel"),class:"control-input mb-3",required:""},null,8,["modelValue","label"])]),e("div",to,[e("div",eo,[e("div",ao,[t(G,{modelValue:v.value,"onUpdate:modelValue":o[9]||(o[9]=i=>v.value=i)},null,8,["modelValue"])])])]),e("div",so,[t(B,{class:"ma-0",color:"primary",onClick:_},{default:l(()=>[c(u(a(s)("notificationsPage.toasts.launchToast")),1)]),_:1})])]),_:1})]),_:1})])])])}}});export{no as default};