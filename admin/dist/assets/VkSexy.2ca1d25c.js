import{_ as R,a as d,r as c,o as h,i as b,w as n,e as i,b as a,c as _,j as S,f as u,t as m,F as E}from"./index.019bcdb0.js";import{d as V,l as N}from"./index.f00aa4f0.js";const U={name:"StockAll",components:{},data(){const e=[],t="";return{count:{type:Number},loading:!1,items:e,columns:[{key:"id",sortable:!0},{key:"attachments",sortable:!0},{key:"count_attachments",sortable:!0},{key:"text",sortable:!0},{key:"created_at",sortable:!0}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["laravel","php"]}},methods:{getOneImage(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t[0]),t[0]},getCountAttachments(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t.length),t.length},addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:V(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,d.request({method:"post",url:"/api/post/vk-sexy-all",params:this.serverParams,paramsSerializer:t=>N.stringify(t)}).then(t=>{e.items=t.data.posts,e.count=t.data.count,e.options=t.data.categories,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},hidden:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/post/post-hidden",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043A\u0440\u044B\u0442\u0430",color:"danger"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},publish:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/post/vk-sexy-publish",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})},addQueue:function(e,t){let l=this;this.loading=!0,console.log(l.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(g=>{d.post("/api/queue/vk-sexy-set-queue",{selRows:l.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C",color:"success"}),this.fetchRows(),l.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),l.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},A={class:"grid md:grid-cols-2 gap-6 mb-6"},q={class:"grid md:grid-cols-2 gap-6 mb-6"},B={class:"row"},M={class:"col"},O=u(" \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C "),T={class:"col"},j=u(" \u0421\u043A\u0440\u044B\u0442\u044C "),z={class:"col"},Q=u(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C "),D={key:0},L=["href"],G={key:1},H=["href"],J={colspan:"6"},K={class:"flex justify-center mt-4"},W=u(" Number of filtered items: ");function X(e,t,l,g,s,r){const k=c("va-input"),v=c("va-chip"),P=c("va-select"),p=c("va-button"),y=c("va-image"),C=c("va-pagination"),w=c("va-data-table"),x=c("va-alert"),F=c("va-card-content"),I=c("va-card");return h(),b(I,null,{default:n(()=>[i(F,null,{default:n(()=>[a("div",A,[i(k,{modelValue:s.input,"onUpdate:modelValue":t[0]||(t[0]=o=>s.input=o),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),a("div",q,[i(P,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),label:"Removable chips",options:s.options,onCreateNew:r.addNewOption,"track-by":o=>o,"allow-create":"unique",multiple:""},{content:n(({value:o})=>[(h(!0),_(E,null,S(o,f=>(h(),b(v,{key:f,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":Y=>r.deleteChip(f)},{default:n(()=>[u(m(f),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),a("div",B,[a("div",M,[i(p,{onClick:r.publish},{default:n(()=>[O]),_:1},8,["onClick"])]),a("div",T,[i(p,{color:"danger",onClick:r.hidden},{default:n(()=>[j]),_:1},8,["onClick"])]),a("div",z,[i(p,{onClick:r.addQueue},{default:n(()=>[Q]),_:1},8,["onClick"])])]),i(w,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":r.customFilteringFn,onFiltered:t[3]||(t[3]=o=>s.filteredCount=o.items.length),loading:s.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=o=>s.selectedItemsEmitted=o.currentSelectedItems)},{"cell(attachments)":n(({rowData:o})=>[i(y,{src:r.getOneImage(o.attachments),sizes:100},null,8,["src"])]),"cell(count_attachments)":n(({rowData:o})=>[a("span",null,m(r.getCountAttachments(o.attachments)),1)]),"cell(text)":n(({rowData:o})=>[o.text==""?(h(),_("div",D,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",8,L)])):(h(),_("div",G,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+o.link},m(o.text),9,H)]))]),bodyAppend:n(()=>[a("tr",null,[a("td",J,[a("div",K,[i(C,{modelValue:s.currentPage,"onUpdate:modelValue":t[2]||(t[2]=o=>s.currentPage=o),pages:r.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),i(x,{class:"!mt-6",color:"info",outline:""},{default:n(()=>[W,i(v,null,{default:n(()=>[u(m(s.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var ee=R(U,[["render",X]]);export{ee as default};
