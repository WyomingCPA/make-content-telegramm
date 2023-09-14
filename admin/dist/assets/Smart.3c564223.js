import{_ as B,h as v,a,r as i,o as p,i as U,w as u,e as r,b as f,c as b,j as S,t as h,F as w,g}from"./index.0bed29a4.js";import{d as O}from"./debounce.d22d6dc5.js";const I={name:"ProductAll",components:{},data(){const t=["samsung","realme","Xiaomi","Tecno","BQ"],e=v(""),l=v([]),n=[],o="",d=[{key:"price",sortable:!0},{key:"name",sortable:!0},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:80},{key:"isFavorite",width:50,sortable:!0}],m=[{text:"asc",value:"asc"},{text:"desc",value:"desc"},{text:"no sorting",value:null}];return{loading:!1,options:t,singleSelect:e,multiSelect:l,items:n,columns:d,input:o,filter:o,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:n.length,listPrice:Array,sortBy:"isFavorite",sortingOrder:"desc",sortingOrderOptions:m}},methods:{filterExact(t){var e;return this.filter===""?!0:(console.log(filter),((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter)},updateFilter(t){this.filter=t},debouncedUpdateFilter:O(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,this.input=t},setLearn(t){this.loading=!0,this.idProduct=t,console.log(t);let e=this;a.get("/sanctum/csrf-cookie").then(l=>{a.post("/api/product/set-learn",{id_product:e.idProduct}).then(n=>{n.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(n.status),this.loading=!1)}).catch(function(n){console.log(l),console.error(n),this.loading=!1})})},getWashProduct(){let t=this;a.get("/api/product/smart").then(function(e){t.items=e.data.products,t.listPrice=e.data.price,console.log(e.data.groups),t.loading=!1}).catch(function(e){console.error(e)})},setFavorite(t,e){this.loading=!0,this.idProduct=t,this.isFavor=e,console.log(t);let l=this;a.get("/sanctum/csrf-cookie").then(n=>{a.post("/api/product/set-favorite",{id_product:l.idProduct,is_favorite:l.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(n),console.error(o),this.loading=!1})})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;a.get("/sanctum/csrf-cookie").then(e=>{a.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(l=>{l.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(l.status))}).catch(function(l){console.log(e),console.error(l)})})},sortByOptions(){return this.columns.map(({name:t,key:e,sortable:l})=>l&&(t||e)).filter(Boolean)}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.getWashProduct()}},N={class:"grid md:grid-cols-2 gap-6 mb-6"},W={class:"flex flex-col gap-6"},D={class:"flex flex-wrap gap-6 mb-6"},E=["onClick"],L=g("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),M=g(" Number of filtered items: ");function A(t,e,l,n,o,d){const m=i("va-input"),_=i("va-checkbox"),F=i("va-button"),k=i("va-switch"),y=i("va-data-table"),x=i("va-chip"),C=i("va-alert"),V=i("va-card-content"),P=i("va-card");return p(),U(P,null,{default:u(()=>[r(V,null,{default:u(()=>[f("div",N,[r(m,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=s=>o.input=s),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),f("div",W,[r(_,{modelValue:o.isCustomFilteringFn,"onUpdate:modelValue":e[1]||(e[1]=s=>o.isCustomFilteringFn=s),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),r(_,{modelValue:o.isDebounceInput,"onUpdate:modelValue":e[2]||(e[2]=s=>o.isDebounceInput=s),label:"Debounce input"},null,8,["modelValue"])])]),f("div",D,[(p(!0),b(w,null,S(o.listPrice,(s,c)=>(p(),b("span",{key:c},[f("a",{href:"#",onClick:G=>d.filterPrice(c)},h(c)+"("+h(s)+") ",9,E)]))),128))]),r(y,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":d.customFilteringFn,"sort-by":o.sortBy,"onUpdate:sort-by":e[3]||(e[3]=s=>o.sortBy=s),"sorting-order":o.sortingOrder,"onUpdate:sorting-order":e[4]||(e[4]=s=>o.sortingOrder=s),onFiltered:e[5]||(e[5]=s=>o.filteredCount=s.items.length)},{"cell(actions)":u(({rowData:s})=>[r(F,{onClick:c=>d.setLearn(s.id)},{default:u(()=>[L]),_:2},1032,["onClick"])]),"cell(isFavorite)":u(({rowData:s})=>[r(k,{modelValue:s.isFavorite,"onUpdate:modelValue":c=>s.isFavorite=c,onClick:c=>d.setFavorite(s.id,s.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method","sort-by","sorting-order"]),r(C,{class:"!mt-6",color:"info",outline:""},{default:u(()=>[M,r(x,null,{default:u(()=>[g(h(o.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var Q=B(I,[["render",A]]);export{Q as default};
