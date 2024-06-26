import{_ as R,a as d,r,o as m,i as b,w as n,e as i,b as a,c as _,j as E,f as h,t as g,F as V}from"./index.5beef962.js";import{d as N}from"./debounce.da947213.js";import{l as S}from"./index.01db23a6.js";const U={name:"StockAll",components:{},data(){const e=[],t="";return{count:{type:Number},loading:!1,items:e,columns:[{key:"id",sortable:!0},{key:"attachments",sortable:!0},{key:"count_attachments",sortable:!0},{key:"text",sortable:!0},{key:"created_at",sortable:!0}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["laravel","php"]}},methods:{getOneImage(e){return Array.from(Object.entries(e),([l,u])=>u)[0]},getCountAttachments(e){var l=Array.from(Object.entries(e),([u,s])=>s).filter(function(){return!0}).length;return l},addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:N(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,d.request({method:"post",url:"/api/post/vk-sexy-all",params:this.serverParams,paramsSerializer:t=>S.stringify(t)}).then(t=>{e.items=t.data.posts,e.count=t.data.count,e.options=t.data.categories,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},hidden:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(u=>{d.post("/api/post/post-hidden",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043A\u0440\u044B\u0442\u0430",color:"danger"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},publish:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(u=>{d.post("/api/post/vk-sexy-publish",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},addQueue:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(u=>{d.post("/api/queue/set",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},A={class:"grid md:grid-cols-2 gap-6 mb-6"},O={class:"grid md:grid-cols-2 gap-6 mb-6"},j={class:"row"},B={class:"col"},M=h(" \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C "),T={class:"col"},q=h(" \u0421\u043A\u0440\u044B\u0442\u044C "),z={class:"col"},Q=h(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C "),D={key:0},L=["href"],G={key:1},H=["href"],J={colspan:"6"},K={class:"flex justify-center mt-4"},W=h(" Number of filtered items: ");function X(e,t,l,u,s,c){const k=r("va-input"),v=r("va-chip"),P=r("va-select"),p=r("va-button"),y=r("va-image"),C=r("va-pagination"),w=r("va-data-table"),F=r("va-alert"),x=r("va-card-content"),I=r("va-card");return m(),b(I,null,{default:n(()=>[i(x,null,{default:n(()=>[a("div",A,[i(k,{modelValue:s.input,"onUpdate:modelValue":t[0]||(t[0]=o=>s.input=o),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),a("div",O,[i(P,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),label:"Removable chips",options:s.options,onCreateNew:c.addNewOption,"track-by":o=>o,"allow-create":"unique",multiple:""},{content:n(({value:o})=>[(m(!0),_(V,null,E(o,f=>(m(),b(v,{key:f,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":Y=>c.deleteChip(f)},{default:n(()=>[h(g(f),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),a("div",j,[a("div",B,[i(p,{onClick:c.publish},{default:n(()=>[M]),_:1},8,["onClick"])]),a("div",T,[i(p,{color:"danger",onClick:c.hidden},{default:n(()=>[q]),_:1},8,["onClick"])]),a("div",z,[i(p,{onClick:c.addQueue},{default:n(()=>[Q]),_:1},8,["onClick"])])]),i(w,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":c.customFilteringFn,onFiltered:t[3]||(t[3]=o=>s.filteredCount=o.items.length),loading:s.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=o=>s.selectedItemsEmitted=o.currentSelectedItems)},{"cell(attachments)":n(({rowData:o})=>[i(y,{src:c.getOneImage(o.attachments),sizes:150},null,8,["src"])]),"cell(count_attachments)":n(({rowData:o})=>[a("span",null,g(c.getCountAttachments(o.attachments)),1)]),"cell(text)":n(({rowData:o})=>[o.text==""?(m(),_("div",D,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",8,L)])):(m(),_("div",G,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},g(o.text),9,H)]))]),bodyAppend:n(()=>[a("tr",null,[a("td",J,[a("div",K,[i(C,{modelValue:s.currentPage,"onUpdate:modelValue":t[2]||(t[2]=o=>s.currentPage=o),pages:c.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),i(F,{class:"!mt-6",color:"info",outline:""},{default:n(()=>[W,i(v,null,{default:n(()=>[h(g(s.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var te=R(U,[["render",X]]);export{te as default};
