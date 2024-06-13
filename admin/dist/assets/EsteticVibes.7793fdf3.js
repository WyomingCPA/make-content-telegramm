import{_ as x,a as d,r as i,o as u,i as b,w as n,e as c,b as a,c as f,j as E,f as m,t as h,F as S}from"./index.162944fd.js";import{d as V}from"./debounce.ad991cd6.js";import{l as N}from"./index.d568859e.js";const U={name:"StockAll",components:{},data(){const e=[],t="";return{count:{type:Number},loading:!1,items:e,columns:[{key:"id",sortable:!0},{key:"attachments",sortable:!0},{key:"count_attachments",sortable:!0},{key:"text",sortable:!0},{key:"created_at",sortable:!0}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["laravel","php"]}},methods:{getOneImage(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t[0]),t[0]},getCountAttachments(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t.length),t.length},addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:V(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,d.request({method:"post",url:"/api/queue/vk-estetic-vibes",params:this.serverParams,paramsSerializer:t=>N.stringify(t)}).then(t=>{e.items=t.data.posts,e.count=t.data.count,e.options=t.data.categories,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},hidden:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/post/post-hidden",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043A\u0440\u044B\u0442\u0430",color:"danger"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},publish:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/post/vk-anime-publish",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},deleteQueue:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/queue/unset",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0438\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0438",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},A={class:"grid md:grid-cols-2 gap-6 mb-6"},q={class:"grid md:grid-cols-2 gap-6 mb-6"},B={class:"row"},M={class:"col"},O=m(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 "),T={class:"col"},j=m(" \u0421\u043A\u0440\u044B\u0442\u044C "),z={key:0},Q=["href"],D={key:1},L=["href"],G={colspan:"6"},H={class:"flex justify-center mt-4"},J=m(" Number of filtered items: ");function K(e,t,l,g,s,r){const k=i("va-input"),_=i("va-chip"),P=i("va-select"),v=i("va-button"),y=i("va-image"),w=i("va-pagination"),C=i("va-data-table"),F=i("va-alert"),I=i("va-card-content"),R=i("va-card");return u(),b(R,null,{default:n(()=>[c(I,null,{default:n(()=>[a("div",A,[c(k,{modelValue:s.input,"onUpdate:modelValue":t[0]||(t[0]=o=>s.input=o),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),a("div",q,[c(P,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),label:"Removable chips",options:s.options,onCreateNew:r.addNewOption,"track-by":o=>o,"allow-create":"unique",multiple:""},{content:n(({value:o})=>[(u(!0),f(S,null,E(o,p=>(u(),b(_,{key:p,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":W=>r.deleteChip(p)},{default:n(()=>[m(h(p),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),a("div",B,[a("div",M,[c(v,{onClick:r.deleteQueue},{default:n(()=>[O]),_:1},8,["onClick"])]),a("div",T,[c(v,{color:"danger",onClick:r.hidden},{default:n(()=>[j]),_:1},8,["onClick"])])]),c(C,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":r.customFilteringFn,onFiltered:t[3]||(t[3]=o=>s.filteredCount=o.items.length),loading:s.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=o=>s.selectedItemsEmitted=o.currentSelectedItems)},{"cell(attachments)":n(({rowData:o})=>[c(y,{src:r.getOneImage(o.attachments),sizes:100},null,8,["src"])]),"cell(count_attachments)":n(({rowData:o})=>[a("span",null,h(r.getCountAttachments(o.attachments)),1)]),"cell(text)":n(({rowData:o})=>[o.text==""?(u(),f("div",z,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",8,Q)])):(u(),f("div",D,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},h(o.text),9,L)]))]),bodyAppend:n(()=>[a("tr",null,[a("td",G,[a("div",H,[c(w,{modelValue:s.currentPage,"onUpdate:modelValue":t[2]||(t[2]=o=>s.currentPage=o),pages:r.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),c(F,{class:"!mt-6",color:"info",outline:""},{default:n(()=>[J,c(_,null,{default:n(()=>[m(h(s.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var $=x(U,[["render",K]]);export{$ as default};
