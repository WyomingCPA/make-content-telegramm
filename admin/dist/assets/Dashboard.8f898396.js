import{d as h,a as g,_ as b,r as _,o as p,c as m,b as a,e as s,w as o,t as r,F as x,f,p as w,g as y,h as B}from"./index.6f126ae6.js";const D=h({data(){return{total_all_post_count:{type:Number},all_publish_post_count:{type:Number},all_hide_post_count:{type:Number},items:[]}},methods:{filterExact(t){var e;return this.filter===""?!0:(console.log(this.filter),((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter)},fetchData(){let t=this;g.get("/api/dashboard/index").then(function(e){t.total_all_post_count=e.data.total_all_post_count,t.all_publish_post_count=e.data.all_publish_post_count,t.all_hide_post_count=e.data.all_hide_post_count,console.log(e.data.all_hide_post_count)}).catch(function(e){console.error(e)})}},created(){this.fetchData()},computed:{}}),i=t=>(w("data-v-699780e7"),t=t(),y(),t),I={class:"row row-equal"},N={class:"flex xl6 xs12 lg6"},$={class:"col-md-4 grid-margin stretch-card"},k=f("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C"),S={class:"flex xl6 xs12 lg6"},q={class:"row"},F={class:"flex xs12 sm6 md6"},C={class:"va-h2 ma-0"},V=i(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0411\u0414",-1)),E={class:"flex xs12 sm6 md6"},O={class:"va-h2 ma-0"},U=i(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),j={class:"flex xs12 sm6 md6"},T={class:"va-h2 ma-0"},z=i(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),A={class:"row row-equal"},G={class:"flex xl8 xs12 lg8"},H=f("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430");function J(t,e,v,M,P,Q){const c=_("va-card-title"),u=_("va-data-table"),l=_("va-card-content"),d=_("va-card");return p(),m(x,null,[a("div",I,[a("div",N,[a("div",$,[s(d,null,{default:o(()=>[s(c,null,{default:o(()=>[k]),_:1}),s(l,null,{default:o(()=>[s(u,{items:t.all_category_stat},null,8,["items"])]),_:1})]),_:1})])]),a("div",S,[a("div",q,[a("div",F,[s(d,null,{default:o(()=>[s(l,null,{default:o(()=>[a("h2",C,r(t.total_all_post_count),1),V]),_:1})]),_:1})]),a("div",E,[s(d,null,{default:o(()=>[s(l,null,{default:o(()=>[a("h2",O,r(t.all_publish_post_count),1),U]),_:1})]),_:1})]),a("div",j,[s(d,null,{default:o(()=>[s(l,null,{default:o(()=>[a("h2",T,r(t.all_hide_post_count),1),z]),_:1})]),_:1})])])])]),a("div",A,[a("div",G,[s(d,{square:"",outlined:""},{default:o(()=>[s(c,null,{default:o(()=>[H]),_:1}),s(l,null,{default:o(()=>[s(u,{items:t.items,columns:t.columns,"filter-method":t.customFilteringFn,"sort-by":t.sortBy,"onUpdate:sort-by":e[0]||(e[0]=n=>t.sortBy=n),"sorting-order":t.sortingOrder,"onUpdate:sorting-order":e[1]||(e[1]=n=>t.sortingOrder=n)},null,8,["items","columns","filter-method","sort-by","sorting-order"])]),_:1})]),_:1})])])],64)}var K=b(D,[["render",J],["__scopeId","data-v-699780e7"]]);const L={class:"dashboard"},W=h({__name:"Dashboard",setup(t){return B(),(e,v)=>(p(),m("div",L,[s(K)]))}});export{W as default};
