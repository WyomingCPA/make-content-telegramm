<<<<<<<< HEAD:admin/dist/assets/TreeView.87beced8.js
import{e as s,o as m,f as V,d as C,r as P,c as g,g as r,b as e,w as a,i as p,_ as A,p as k,K as $,P as N,F as T,u as D,t as f,q as x}from"./index.c3f6c7e2.js";const B={__name:"TreeViewBasicPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=[1];return(o,n)=>{const i=s("va-tree-view");return m(),V(i,{expanded:l,"onUpdate:expanded":n[0]||(n[0]=d=>l=d),nodes:t})}}},K={__name:"TreeViewIconsPreview",setup(h){let t=0;const l=()=>t++,o=[{id:l(),label:"Images",icon:"images",children:[{id:l(),label:"sick_cats_cuddling.jpg",icon:"image"},{id:l(),label:"pins-and-needles.jpg",icon:"image"},{id:l(),label:"avatar_50x50.jpg",icon:"image"}]},{id:l(),label:"Music",icon:"star_outline",children:[{id:l(),label:"Taylor_swift_hello.mp3",icon:"musical_notes"},{id:l(),label:"straight_to_the_bank.wav",icon:"musical_notes"},{id:l(),label:"imagine_dragons_promo.mp3",icon:"musical_notes"}]},{id:l(),label:"Miscellaneous",icon:"list",children:[{id:l(),label:"Tdump.sql",icon:"grid"},{id:l(),label:"unknown-file",icon:"help"},{id:l(),label:"secure.key",icon:"key"}]}];return(n,i)=>{const d=s("va-tree-view");return m(),V(d,{nodes:o})}}},M=C({__name:"TreeViewSelectablePreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([]);return(o,n)=>{const i=s("va-tree-view");return m(),V(i,{checked:l.value,"onUpdate:checked":n[0]||(n[0]=d=>l.value=d),nodes:t,selectable:""},null,8,["checked"])}}});const I={class:"tree-view-advanced-preview"},L={class:"tree-view-advanced-preview__buttons"},S=p("EXPAND ALL"),U=p("COLLAPSE ALL"),j={class:"tree-view-advanced-preview__icon-square"},q={__name:"TreeViewAdvancedPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([1]),o=d=>{const u=[],c=v=>!!v.children,w=v=>{for(const _ of v)c(_)&&(u.push(_.id),w(_.children))};return w(d),u},n=()=>{l.value=o(t)},i=()=>{l.value=[]};return(d,u)=>{const c=s("va-button"),w=s("va-icon"),v=s("va-tree-view");return m(),g("div",I,[r("div",L,[e(c,{class:"mr-2",onClick:n},{default:a(()=>[S]),_:1}),e(c,{onClick:i},{default:a(()=>[U]),_:1})]),e(v,{ref:"treeView",expanded:l.value,"onUpdate:expanded":u[0]||(u[0]=_=>l.value=_),nodes:t},{"icon-toggle":a(({expanded:_})=>[r("div",j,[e(w,{color:"white",name:_?"remove":"add"},null,8,["name"])])]),_:1},8,["expanded"])])}}};const H={key:0,class:"tree-node-editable flex row align-center"},O=p(" Add new product "),J=C({__name:"TreeViewEditablePreview",setup(h){const t=k([1,2]),l=k([{id:3,label:"Cellphones"},{id:4,label:"Camera Body Kits"},{id:5,label:"External HDDs"}]);let o=k([{id:6,label:"Cables"},{id:7,label:"Monitors"},{id:8,label:"Keyboards"}]);const n=[{label:"Electronics",id:1,children:l},{label:"Products",id:2,children:o}];function i(){o.push({id:Math.floor(Math.random()*1e5),label:"New product"})}function d(u){o.splice(o.findIndex(c=>c.id===u.id),1)}return(u,c)=>{const w=s("va-input"),v=s("va-icon"),_=s("va-tree-view"),E=s("va-button");return m(),g(T,null,[e(_,{expanded:t,"onUpdate:expanded":c[0]||(c[0]=b=>N(t)?t.value=b:null),nodes:n},{content:a(b=>[b.hasChildren?$("",!0):(m(),g("div",H,[e(w,{modelValue:b.label,"onUpdate:modelValue":y=>b.label=y,class:"mb-0"},null,8,["modelValue","onUpdate:modelValue"]),e(v,{name:"md_close",color:"info",class:"ml-2 shrink",style:{cursor:"pointer"},onClick:y=>d(b)},null,8,["onClick"])]))]),_:1},8,["expanded"]),e(E,{class:"mb-2",onClick:c[1]||(c[1]=b=>i())},{default:a(()=>[O]),_:1})],64)}}});var F=A(J,[["__scopeId","data-v-6c51dad2"]]);const R={class:"tree-view sets-list row"},X={class:"flex md12 xs12"},z={class:"row"},G={class:"small-set flex lg6 xs12"},Q={class:"small-set flex lg6 xs12"},W={class:"row"},Y={class:"small-set flex lg6 xs12"},Z={class:"small-set flex lg6 xs12"},ee={class:"row"},le={class:"small-set flex lg6 xs12"},te=C({__name:"TreeView",setup(h){const{t}=D();return(l,o)=>{const n=s("va-card-title"),i=s("va-card-content"),d=s("va-card");return m(),g("div",R,[r("div",X,[r("div",z,[r("div",G,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.basic")),1)]),_:1}),e(i,null,{default:a(()=>[e(B)]),_:1})]),_:1})]),r("div",Q,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.icons")),1)]),_:1}),e(i,null,{default:a(()=>[e(K)]),_:1})]),_:1})])]),r("div",W,[r("div",Y,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.advanced")),1)]),_:1}),e(i,null,{default:a(()=>[e(q)]),_:1})]),_:1})]),r("div",Z,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.editable")),1)]),_:1}),e(i,null,{default:a(()=>[e(F)]),_:1})]),_:1})])]),r("div",ee,[r("div",le,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.selectable")),1)]),_:1}),e(i,null,{default:a(()=>[e(M)]),_:1})]),_:1})])])])])}}});export{te as default};
========
import{e as s,o as m,f as V,d as C,r as P,c as g,g as r,b as e,w as a,i as p,_ as A,p as k,K as $,P as N,F as T,u as D,t as f,q as x}from"./index.bd98a098.js";const B={__name:"TreeViewBasicPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=[1];return(o,n)=>{const i=s("va-tree-view");return m(),V(i,{expanded:l,"onUpdate:expanded":n[0]||(n[0]=d=>l=d),nodes:t})}}},K={__name:"TreeViewIconsPreview",setup(h){let t=0;const l=()=>t++,o=[{id:l(),label:"Images",icon:"images",children:[{id:l(),label:"sick_cats_cuddling.jpg",icon:"image"},{id:l(),label:"pins-and-needles.jpg",icon:"image"},{id:l(),label:"avatar_50x50.jpg",icon:"image"}]},{id:l(),label:"Music",icon:"star_outline",children:[{id:l(),label:"Taylor_swift_hello.mp3",icon:"musical_notes"},{id:l(),label:"straight_to_the_bank.wav",icon:"musical_notes"},{id:l(),label:"imagine_dragons_promo.mp3",icon:"musical_notes"}]},{id:l(),label:"Miscellaneous",icon:"list",children:[{id:l(),label:"Tdump.sql",icon:"grid"},{id:l(),label:"unknown-file",icon:"help"},{id:l(),label:"secure.key",icon:"key"}]}];return(n,i)=>{const d=s("va-tree-view");return m(),V(d,{nodes:o})}}},M=C({__name:"TreeViewSelectablePreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([]);return(o,n)=>{const i=s("va-tree-view");return m(),V(i,{checked:l.value,"onUpdate:checked":n[0]||(n[0]=d=>l.value=d),nodes:t,selectable:""},null,8,["checked"])}}});const I={class:"tree-view-advanced-preview"},L={class:"tree-view-advanced-preview__buttons"},S=p("EXPAND ALL"),U=p("COLLAPSE ALL"),j={class:"tree-view-advanced-preview__icon-square"},q={__name:"TreeViewAdvancedPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([1]),o=d=>{const u=[],c=v=>!!v.children,w=v=>{for(const _ of v)c(_)&&(u.push(_.id),w(_.children))};return w(d),u},n=()=>{l.value=o(t)},i=()=>{l.value=[]};return(d,u)=>{const c=s("va-button"),w=s("va-icon"),v=s("va-tree-view");return m(),g("div",I,[r("div",L,[e(c,{class:"mr-2",onClick:n},{default:a(()=>[S]),_:1}),e(c,{onClick:i},{default:a(()=>[U]),_:1})]),e(v,{ref:"treeView",expanded:l.value,"onUpdate:expanded":u[0]||(u[0]=_=>l.value=_),nodes:t},{"icon-toggle":a(({expanded:_})=>[r("div",j,[e(w,{color:"white",name:_?"remove":"add"},null,8,["name"])])]),_:1},8,["expanded"])])}}};const H={key:0,class:"tree-node-editable flex row align-center"},O=p(" Add new product "),J=C({__name:"TreeViewEditablePreview",setup(h){const t=k([1,2]),l=k([{id:3,label:"Cellphones"},{id:4,label:"Camera Body Kits"},{id:5,label:"External HDDs"}]);let o=k([{id:6,label:"Cables"},{id:7,label:"Monitors"},{id:8,label:"Keyboards"}]);const n=[{label:"Electronics",id:1,children:l},{label:"Products",id:2,children:o}];function i(){o.push({id:Math.floor(Math.random()*1e5),label:"New product"})}function d(u){o.splice(o.findIndex(c=>c.id===u.id),1)}return(u,c)=>{const w=s("va-input"),v=s("va-icon"),_=s("va-tree-view"),E=s("va-button");return m(),g(T,null,[e(_,{expanded:t,"onUpdate:expanded":c[0]||(c[0]=b=>N(t)?t.value=b:null),nodes:n},{content:a(b=>[b.hasChildren?$("",!0):(m(),g("div",H,[e(w,{modelValue:b.label,"onUpdate:modelValue":y=>b.label=y,class:"mb-0"},null,8,["modelValue","onUpdate:modelValue"]),e(v,{name:"md_close",color:"info",class:"ml-2 shrink",style:{cursor:"pointer"},onClick:y=>d(b)},null,8,["onClick"])]))]),_:1},8,["expanded"]),e(E,{class:"mb-2",onClick:c[1]||(c[1]=b=>i())},{default:a(()=>[O]),_:1})],64)}}});var F=A(J,[["__scopeId","data-v-6c51dad2"]]);const R={class:"tree-view sets-list row"},X={class:"flex md12 xs12"},z={class:"row"},G={class:"small-set flex lg6 xs12"},Q={class:"small-set flex lg6 xs12"},W={class:"row"},Y={class:"small-set flex lg6 xs12"},Z={class:"small-set flex lg6 xs12"},ee={class:"row"},le={class:"small-set flex lg6 xs12"},te=C({__name:"TreeView",setup(h){const{t}=D();return(l,o)=>{const n=s("va-card-title"),i=s("va-card-content"),d=s("va-card");return m(),g("div",R,[r("div",X,[r("div",z,[r("div",G,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.basic")),1)]),_:1}),e(i,null,{default:a(()=>[e(B)]),_:1})]),_:1})]),r("div",Q,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.icons")),1)]),_:1}),e(i,null,{default:a(()=>[e(K)]),_:1})]),_:1})])]),r("div",W,[r("div",Y,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.advanced")),1)]),_:1}),e(i,null,{default:a(()=>[e(q)]),_:1})]),_:1})]),r("div",Z,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.editable")),1)]),_:1}),e(i,null,{default:a(()=>[e(F)]),_:1})]),_:1})])]),r("div",ee,[r("div",le,[e(d,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.selectable")),1)]),_:1}),e(i,null,{default:a(()=>[e(M)]),_:1})]),_:1})])])])])}}});export{te as default};
>>>>>>>> e1f89499ee4ba49ff54d0c8c26d3741ab7a65127:admin/dist/assets/TreeView.5d179dc3.js
