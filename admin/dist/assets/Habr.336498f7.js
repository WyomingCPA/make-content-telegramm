import{_ as x,a as p,e as o,o as m,f as g,w as l,b as i,g as n,c as R,h as I,i as d,t as h,F as N}from"./index.0d96e79f.js";import{d as V,l as S}from"./index.0291f59d.js";const U={name:"StockAll",components:{},data(){const e=[],t="";return{count:{type:Number},perPage:{type:Number},loading:!1,items:e,columns:[{key:"title",sortable:!0},{key:"created_at",sortable:!0}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["laravel","php"]}},methods:{addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:V(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,p.request({method:"post",url:"/api/post/rss-habr-all",params:this.serverParams,paramsSerializer:t=>S.stringify(t)}).then(t=>{e.items=t.data.posts,e.count=t.data.count,e.perPage=t.data.perPage,e.options=t.data.categories,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},publish:function(e,t){let r=this;this.loading=!0,console.log(r.selectedItemsEmitted),p.get("/sanctum/csrf-cookie").then(_=>{p.post("/api/post/rss-habr-publish",{selRows:r.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",color:"success"}),this.fetchRows(),r.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),r.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},E={class:"grid md:grid-cols-2 gap-6 mb-6"},B={class:"grid md:grid-cols-2 gap-6 mb-6"},M={class:"row"},A={class:"col"},D=d(" \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C "),j=["href"],q={colspan:"6"},z={class:"flex justify-center mt-4"},H=d(" Number of filtered items: ");function O(e,t,r,_,s,c){const v=o("va-input"),f=o("va-chip"),b=o("va-select"),P=o("va-button"),k=o("va-pagination"),y=o("va-data-table"),F=o("va-alert"),w=o("va-card-content"),C=o("va-card");return m(),g(C,null,{default:l(()=>[i(w,null,{default:l(()=>[n("div",E,[i(v,{modelValue:s.input,"onUpdate:modelValue":t[0]||(t[0]=a=>s.input=a),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),n("div",B,[i(b,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=a=>s.value=a),label:"Removable chips",options:s.options,onCreateNew:c.addNewOption,"track-by":a=>a,"allow-create":"unique",multiple:""},{content:l(({value:a})=>[(m(!0),R(N,null,I(a,u=>(m(),g(f,{key:u,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":T=>c.deleteChip(u)},{default:l(()=>[d(h(u),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),n("div",M,[n("div",A,[i(P,{onClick:c.publish},{default:l(()=>[D]),_:1},8,["onClick"])])]),i(y,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":c.customFilteringFn,onFiltered:t[3]||(t[3]=a=>s.filteredCount=a.items.length),loading:s.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=a=>s.selectedItemsEmitted=a.currentSelectedItems)},{"cell(title)":l(({rowData:a})=>[n("a",{class:"link",target:"_blank",href:a.link},h(a.title),9,j)]),bodyAppend:l(()=>[n("tr",null,[n("td",q,[n("div",z,[i(k,{modelValue:s.currentPage,"onUpdate:modelValue":t[2]||(t[2]=a=>s.currentPage=a),pages:c.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),i(F,{class:"!mt-6",color:"info",outline:""},{default:l(()=>[H,i(f,null,{default:l(()=>[d(h(s.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var J=x(U,[["render",O],["__scopeId","data-v-6a50b30f"]]);export{J as default};