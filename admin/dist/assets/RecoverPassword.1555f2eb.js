import{d,u as p,r as o,e as r,o as _,c as v,b as n,q as l,g as f,w as b,s as h,l as g,i as V,t as w}from"./index.bd98a098.js";const x=["onSubmit"],y={class:"d-flex justify-center mt-3"},N=d({__name:"RecoverPassword",setup(B){const{t}=p(),e=o(""),s=o([]);function u(){e.value?g().push("/"):s.value=["Email is required"]}return(C,a)=>{const i=r("va-input"),m=r("va-button");return _(),v("form",{class:"login",onSubmit:h(u,["prevent"])},[n(i,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),class:"mb-3",type:"email",label:l(t)("auth.email"),error:!!s.value.length,"error-messages":s.value},null,8,["modelValue","label","error","error-messages"]),f("div",y,[n(m,{type:"submit",class:"my-0"},{default:b(()=>[V(w(l(t)("auth.reset_password")),1)]),_:1})])],40,x)}}});export{N as default};
