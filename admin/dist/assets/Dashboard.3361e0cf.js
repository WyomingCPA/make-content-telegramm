import{d as h,a as g,_ as b,r as _,o as p,c as m,b as a,e as o,w as e,t as n,F as x,f,p as y,g as w,h as B}from"./index.86a4a516.js";const D=h({data(){return{total_all_post_count:{type:Number},all_publish_post_count:{type:Number},all_hide_post_count:{type:Number},add_today_post_count:{type:Number},items:[]}},methods:{filterExact(t){var s;return this.filter===""?!0:(console.log(this.filter),((s=t==null?void 0:t.toString)==null?void 0:s.call(t))===this.filter)},fetchData(){let t=this;g.get("/api/dashboard/index").then(function(s){t.total_all_post_count=s.data.total_all_post_count,t.all_publish_post_count=s.data.all_publish_post_count,t.all_hide_post_count=s.data.all_hide_post_count,t.add_today_post_count=s.data.add_today_post_count,console.log(s.data.all_hide_post_count)}).catch(function(s){console.error(s)})}},created(){this.fetchData()},computed:{}}),c=t=>(y("data-v-09e40cd7"),t=t(),w(),t),N={class:"row row-equal"},I={class:"flex xl6 xs12 lg6"},$={class:"col-md-4 grid-margin stretch-card"},k=f("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C"),S={class:"flex xl6 xs12 lg6"},q={class:"row"},F={class:"flex xs12 sm6 md6"},C={class:"va-h2 ma-0"},V=c(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0411\u0414",-1)),E={class:"flex xs12 sm6 md6"},O={class:"va-h2 ma-0"},U=c(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),j={class:"flex xs12 sm6 md6"},T={class:"va-h2 ma-0"},z=c(()=>a("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),A={class:"flex xs12 sm6 md6"},G={class:"va-h2 ma-0"},H=c(()=>a("p",{class:"no-wrap"},"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u043E\u0441\u0442\u043E\u0432",-1)),J={class:"row row-equal"},K={class:"flex xl8 xs12 lg8"},L=f("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430");function M(t,s,v,R,W,X){const i=_("va-card-title"),u=_("va-data-table"),l=_("va-card-content"),d=_("va-card");return p(),m(x,null,[a("div",N,[a("div",I,[a("div",$,[o(d,null,{default:e(()=>[o(i,null,{default:e(()=>[k]),_:1}),o(l,null,{default:e(()=>[o(u,{items:t.all_category_stat},null,8,["items"])]),_:1})]),_:1})])]),a("div",S,[a("div",q,[a("div",F,[o(d,null,{default:e(()=>[o(l,null,{default:e(()=>[a("h2",C,n(t.total_all_post_count),1),V]),_:1})]),_:1})]),a("div",E,[o(d,null,{default:e(()=>[o(l,null,{default:e(()=>[a("h2",O,n(t.all_publish_post_count),1),U]),_:1})]),_:1})]),a("div",j,[o(d,null,{default:e(()=>[o(l,null,{default:e(()=>[a("h2",T,n(t.all_hide_post_count),1),z]),_:1})]),_:1})]),a("div",A,[o(d,null,{default:e(()=>[o(l,null,{default:e(()=>[a("h2",G,n(t.add_today_post_count),1),H]),_:1})]),_:1})])])])]),a("div",J,[a("div",K,[o(d,{square:"",outlined:""},{default:e(()=>[o(i,null,{default:e(()=>[L]),_:1}),o(l,null,{default:e(()=>[o(u,{items:t.items,columns:t.columns,"filter-method":t.customFilteringFn,"sort-by":t.sortBy,"onUpdate:sort-by":s[0]||(s[0]=r=>t.sortBy=r),"sorting-order":t.sortingOrder,"onUpdate:sorting-order":s[1]||(s[1]=r=>t.sortingOrder=r)},null,8,["items","columns","filter-method","sort-by","sorting-order"])]),_:1})]),_:1})])])],64)}var P=b(D,[["render",M],["__scopeId","data-v-09e40cd7"]]);const Q={class:"dashboard"},Z=h({__name:"Dashboard",setup(t){return B(),(s,v)=>(p(),m("div",Q,[o(P)]))}});export{Z as default};