import{d,y as p,h as o,r,o as _,c as v,e as n,D as l,b as f,w as b,E as h,z as g,g as y,t as V}from"./index.0bed29a4.js";const w=["onSubmit"],x={class:"d-flex justify-center mt-3"},N=d({__name:"RecoverPassword",setup(E){const{t}=p(),e=o(""),s=o([]);function u(){e.value?g().push("/"):s.value=["Email is required"]}return(B,a)=>{const i=r("va-input"),m=r("va-button");return _(),v("form",{class:"login",onSubmit:h(u,["prevent"])},[n(i,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),class:"mb-3",type:"email",label:l(t)("auth.email"),error:!!s.value.length,"error-messages":s.value},null,8,["modelValue","label","error","error-messages"]),f("div",x,[n(m,{type:"submit",class:"my-0"},{default:b(()=>[y(V(l(t)("auth.reset_password")),1)]),_:1})])],40,w)}}});export{N as default};