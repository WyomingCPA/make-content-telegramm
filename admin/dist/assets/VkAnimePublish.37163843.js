import{_ as R,a as d,r as i,o as u,i as b,w as l,e as r,b as a,c as g,j as S,f as m,t as h,F as V}from"./index.162944fd.js";import{d as E}from"./debounce.ad991cd6.js";import{l as N}from"./index.d568859e.js";const U={name:"StockAll",components:{},data(){const e=[],t="";return{count:{type:Number},loading:!1,items:e,columns:[{key:"id",sortable:!0},{key:"attachments",sortable:!0},{key:"count_attachments",sortable:!0},{key:"text",sortable:!0},{key:"updated_at",sortable:!0}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["laravel","php"]}},methods:{getOneImage(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t[0]),t[0]},getCountAttachments(e){let t=e.toString().replace("[","").replace("]","").split(",").map(String);return console.log(t.length),t.length},addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:E(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,d.request({method:"post",url:"/api/post/vk-anime-release",params:this.serverParams,paramsSerializer:t=>N.stringify(t)}).then(t=>{e.items=t.data.posts,e.count=t.data.count,e.options=t.data.categories,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},hidden:function(e,t){let n=this;this.loading=!0,console.log(n.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(f=>{d.post("/api/post/post-hidden",{selRows:n.selectedItemsEmitted}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043A\u0440\u044B\u0442\u0430",color:"danger"}),this.fetchRows(),n.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),n.loading=!1)})})},publishAnimeTumbrl:function(e,t){let n=this;this.loading=!0,console.log(n.selectedItemsEmitted),d.get("/sanctum/csrf-cookie").then(f=>{d.post("/api/post/tumbrl-anime-publish",{selRows:n.selectedItemsEmitted}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 Tumbler",color:"success"}),this.fetchRows(),n.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),n.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},A={class:"grid md:grid-cols-2 gap-6 mb-6"},T={class:"grid md:grid-cols-2 gap-6 mb-6"},B={class:"row"},M={class:"col"},O=m(" \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 Tumblr "),j={class:"col"},z=m(" \u0421\u043A\u0440\u044B\u0442\u044C "),q={key:0},D=["href"],L={key:1},G=["href"],H={colspan:"6"},J={class:"flex justify-center mt-4"},K=m(" Number of filtered items: ");function Q(e,t,n,f,o,c){const k=i("va-input"),_=i("va-chip"),P=i("va-select"),v=i("va-button"),y=i("va-image"),C=i("va-pagination"),F=i("va-data-table"),w=i("va-alert"),x=i("va-card-content"),I=i("va-card");return u(),b(I,null,{default:l(()=>[r(x,null,{default:l(()=>[a("div",A,[r(k,{modelValue:o.input,"onUpdate:modelValue":t[0]||(t[0]=s=>o.input=s),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),a("div",T,[r(P,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),label:"Removable chips",options:o.options,onCreateNew:c.addNewOption,"track-by":s=>s,"allow-create":"unique",multiple:""},{content:l(({value:s})=>[(u(!0),g(V,null,S(s,p=>(u(),b(_,{key:p,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":W=>c.deleteChip(p)},{default:l(()=>[m(h(p),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),a("div",B,[a("div",M,[r(v,{onClick:e.publishTumbrl},{default:l(()=>[O]),_:1},8,["onClick"])]),a("div",j,[r(v,{color:"danger",onClick:c.hidden},{default:l(()=>[z]),_:1},8,["onClick"])])]),r(F,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":c.customFilteringFn,onFiltered:t[3]||(t[3]=s=>o.filteredCount=s.items.length),loading:o.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=s=>o.selectedItemsEmitted=s.currentSelectedItems)},{"cell(attachments)":l(({rowData:s})=>[r(y,{src:c.getOneImage(s.attachments),sizes:100},null,8,["src"])]),"cell(count_attachments)":l(({rowData:s})=>[a("span",null,h(c.getCountAttachments(s.attachments)),1)]),"cell(text)":l(({rowData:s})=>[s.text==""?(u(),g("div",q,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+s.link},"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",8,D)])):(u(),g("div",L,[a("a",{class:"link",target:"_blank",href:"https://vk.com/"+s.link},h(s.text),9,G)]))]),bodyAppend:l(()=>[a("tr",null,[a("td",H,[a("div",J,[r(C,{modelValue:o.currentPage,"onUpdate:modelValue":t[2]||(t[2]=s=>o.currentPage=s),pages:c.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),r(w,{class:"!mt-6",color:"info",outline:""},{default:l(()=>[K,r(_,null,{default:l(()=>[m(h(o.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var $=R(U,[["render",Q]]);export{$ as default};
