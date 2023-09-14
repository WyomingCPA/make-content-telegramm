import{_ as U,a as u,r as c,o as h,i as b,w as n,e as a,b as d,c as _,j as M,t as f,F as I,g as p}from"./index.0bed29a4.js";import{d as L}from"./debounce.d22d6dc5.js";const B={name:"ProductAll",components:{},data(){const t=[],o="";return{infoModal:{id:"info-modal",title:"",content:""},value:!0,items:t,columns:[{key:"id",width:20},{key:"price",sortable:!0,width:20},{key:"name",sortable:!0,width:20},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:50},{key:"favorite",width:50}],input:o,filter:o,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:t.length,listPrice:Array}},methods:{filterExact(t){var o;return this.filter===""?!0:((o=t==null?void 0:t.toString)==null?void 0:o.call(t))===this.filter},updateFilter(t){this.filter=t},debouncedUpdateFilter:L(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,this.input=t},setLearn(t){this.loading=!0,this.idProduct=t,console.log(t);let o=this;u.get("/sanctum/csrf-cookie").then(l=>{u.post("/api/product/set-learn",{id_product:o.idProduct}).then(r=>{r.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(r.status),this.loading=!1)}).catch(function(r){console.log(l),console.error(r),this.loading=!1})})},setFavorite(t,o){this.loading=!0,this.idProduct=t,this.isFavor=o,console.log(t);let l=this;u.get("/sanctum/csrf-cookie").then(r=>{u.post("/api/product/set-favorite",{id_product:l.idProduct,is_favorite:l.isFavor}).then(i=>{i.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(i.status),this.loading=!1)}).catch(function(i){console.log(r),console.error(i),this.loading=!1})})},getWashProduct(){let t=this;u.get("/api/product/favorite").then(function(o){t.items=o.data.products,t.listPrice=o.data.price,console.log(o.data.groups)}).catch(function(o){console.error(o)})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;u.get("/sanctum/csrf-cookie").then(o=>{u.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(l=>{l.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(l.status))}).catch(function(l){console.log(o),console.error(l)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.getWashProduct()}},K={class:"grid md:grid-cols-2 gap-6 mb-6"},N={class:"flex flex-col gap-6"},S={class:"flex flex-wrap gap-6 mb-6"},W=["onClick"],D=["href"],T={key:1},A={class:"flex gap-2"},E=["innerHTML"],G=p("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),H=p(" Number of filtered items: ");function R(t,o,l,r,i,m){const F=c("va-input"),g=c("va-checkbox"),v=c("va-button"),k=c("va-switch"),y=c("va-data-table"),C=c("va-chip"),V=c("va-alert"),x=c("va-card-content"),P=c("va-card");return h(),b(P,null,{default:n(()=>[a(x,null,{default:n(()=>[d("div",K,[a(F,{modelValue:i.input,"onUpdate:modelValue":o[0]||(o[0]=e=>i.input=e),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),d("div",N,[a(g,{modelValue:i.isCustomFilteringFn,"onUpdate:modelValue":o[1]||(o[1]=e=>i.isCustomFilteringFn=e),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),a(g,{modelValue:i.isDebounceInput,"onUpdate:modelValue":o[2]||(o[2]=e=>i.isDebounceInput=e),label:"Debounce input"},null,8,["modelValue"])])]),d("div",S,[(h(!0),_(I,null,M(i.listPrice,(e,s)=>(h(),_("span",{key:s},[d("a",{href:"#",onClick:w=>m.filterPrice(s)},f(s)+"("+f(e)+") ",9,W)]))),128))]),a(y,{items:i.items,columns:i.columns,filter:i.filter,"filter-method":m.customFilteringFn,onFiltered:o[3]||(o[3]=e=>i.filteredCount=e.items.length)},{"cell(id)":n(({rowData:e})=>[d("a",{target:"_blank",href:"edit/"+e.id},f(e.id),9,D)]),"cell(name)":n(({row:e,isExpanded:s})=>[e.itemKey.description?(h(),b(v,{key:0,onClick:w=>e.toggleRowDetails(),icon:s?"va-arrow-up":"va-arrow-down",preset:"secondary",class:"w-full"},{default:n(()=>[p(f(e.itemKey.name),1)]),_:2},1032,["onClick","icon"])):(h(),_("p",T,f(e.itemKey.name),1))]),expandableRow:n(({rowData:e})=>[d("div",A,[d("div",{innerHTML:e.description},null,8,E)])]),"cell(actions)":n(({rowData:e})=>[a(v,{onClick:s=>m.setLearn(e.id)},{default:n(()=>[G]),_:2},1032,["onClick"])]),"cell(favorite)":n(({rowData:e})=>[a(k,{modelValue:e.isFavorite,"onUpdate:modelValue":s=>e.isFavorite=s,onClick:s=>m.setFavorite(e.id,e.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method"]),a(V,{class:"!mt-6",color:"info",outline:""},{default:n(()=>[H,a(C,null,{default:n(()=>[p(f(i.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var z=U(B,[["render",R]]);export{z as default};
