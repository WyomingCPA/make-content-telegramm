import{d as f,a as I,_ as V,r as l,o as v,c as b,b as o,e as a,w as e,t as n,f as c,F as L,p as N,g as B,h as D}from"./index.13553127.js";const S=f({data(){return{total_all_post_count:{type:Number},all_publish_post_count:{type:Number},all_hide_post_count:{type:Number},add_today_post_count:{type:Number},favorite_anime_post_count:{type:Number},items:[]}},methods:{filterExact(t){var s;return this.filter===""?!0:(console.log(this.filter),((s=t==null?void 0:t.toString)==null?void 0:s.call(t))===this.filter)},fetchData(){let t=this;I.get("/api/dashboard/index").then(function(s){t.total_all_post_count=s.data.total_all_post_count,t.all_publish_post_count=s.data.all_publish_post_count,t.all_hide_post_count=s.data.all_hide_post_count,t.add_today_post_count=s.data.add_today_post_count,t.favorite_anime_post_count=s.data.favorite_anime_post_count,console.log(s.data.all_hide_post_count)}).catch(function(s){console.error(s)})}},created(){this.fetchData()},computed:{}}),i=t=>(N("data-v-d59edc6e"),t=t(),B(),t),k={class:"row row-equal"},q={class:"flex xl6 xs12 lg6"},$={class:"col-md-4 grid-margin stretch-card"},F=c("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C"),C={class:"flex xl6 xs12 lg6"},E={class:"row"},O={class:"flex xs12 sm6 md6"},U={class:"va-h2 ma-0"},j=i(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0411\u0414",-1)),A={class:"flex xs12 sm6 md6"},T={class:"va-h2 ma-0"},z=i(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),G={class:"flex xs12 sm6 md6"},H={class:"va-h2 ma-0"},J=i(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),K={class:"flex xs12 sm6 md6"},M={class:"va-h2 ma-0"},P=i(()=>o("p",{class:"no-wrap"},"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u043E\u0441\u0442\u043E\u0432",-1)),Q={class:"row row-equal"},R={class:"flex xl8 xs12 lg8"},W=c("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"),X={class:"row row-equal"},Y={class:"flex xl8 xs12 lg8"},Z=c("\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"),tt=c(" Anime ");function at(t,s,g,st,lt,_t){const r=l("va-card-title"),p=l("va-data-table"),_=l("va-card-content"),d=l("va-card"),h=l("VaListItemLabel"),m=l("VaListItemSection"),x=l("VaIcon"),y=l("VaListItem"),w=l("VaList");return v(),b(L,null,[o("div",k,[o("div",q,[o("div",$,[a(d,null,{default:e(()=>[a(r,null,{default:e(()=>[F]),_:1}),a(_,null,{default:e(()=>[a(p,{items:t.all_category_stat},null,8,["items"])]),_:1})]),_:1})])]),o("div",C,[o("div",E,[o("div",O,[a(d,null,{default:e(()=>[a(_,null,{default:e(()=>[o("h2",U,n(t.total_all_post_count),1),j]),_:1})]),_:1})]),o("div",A,[a(d,null,{default:e(()=>[a(_,null,{default:e(()=>[o("h2",T,n(t.all_publish_post_count),1),z]),_:1})]),_:1})]),o("div",G,[a(d,null,{default:e(()=>[a(_,null,{default:e(()=>[o("h2",H,n(t.all_hide_post_count),1),J]),_:1})]),_:1})]),o("div",K,[a(d,null,{default:e(()=>[a(_,null,{default:e(()=>[o("h2",M,n(t.add_today_post_count),1),P]),_:1})]),_:1})])])])]),o("div",Q,[o("div",R,[a(d,{square:"",outlined:""},{default:e(()=>[a(r,null,{default:e(()=>[W]),_:1}),a(_,null,{default:e(()=>[a(p,{items:t.items,columns:t.columns,"filter-method":t.customFilteringFn,"sort-by":t.sortBy,"onUpdate:sort-by":s[0]||(s[0]=u=>t.sortBy=u),"sorting-order":t.sortingOrder,"onUpdate:sorting-order":s[1]||(s[1]=u=>t.sortingOrder=u)},null,8,["items","columns","filter-method","sort-by","sorting-order"])]),_:1})]),_:1})])]),o("div",X,[o("div",Y,[a(d,{square:"",outlined:""},{default:e(()=>[a(r,null,{default:e(()=>[Z]),_:1}),a(_,null,{default:e(()=>[a(w,null,{default:e(()=>[a(y,{class:"list__item"},{default:e(()=>[a(m,null,{default:e(()=>[a(h,null,{default:e(()=>[tt]),_:1}),a(h,{caption:""},{default:e(()=>[c(n(t.favorite_anime_post_count),1)]),_:1})]),_:1}),a(m,{icon:""},{default:e(()=>[a(x,{name:"remove_red_eye",color:"background-element"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])],64)}var et=V(S,[["render",at],["__scopeId","data-v-d59edc6e"]]);const ot={class:"dashboard"},nt=f({__name:"Dashboard",setup(t){return D(),(s,g)=>(v(),b("div",ot,[a(et)]))}});export{nt as default};