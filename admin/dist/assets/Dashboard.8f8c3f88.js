import{d as h,a as x,_ as b,r as i,o as f,c as m,b as o,e as a,w as s,t as d,F as y,f as p,p as w,g,h as N}from"./index.ef344630.js";const S=h({data(){return{total_all_post_count:{type:Number},all_publish_post_count:{type:Number},all_hide_post_count:{type:Number},add_today_post_count:{type:Number},favorite_anime_post_count:{type:Number},favorite_sexy_post_count:{type:Number},favorite_estetic_post_count:{type:Number},favorite_cats_post_count:{type:Number},favorite_sexy_tumblr_video_count:{type:Number},favorite_sexy_tumblr_photo_count:{type:Number},favorite_anime_tumblr_photo_count:{type:Number},items:[]}},methods:{filterExact(t){var _;return this.filter===""?!0:(console.log(this.filter),((_=t==null?void 0:t.toString)==null?void 0:_.call(t))===this.filter)},fetchData(){let t=this;x.get("/api/dashboard/index").then(function(_){t.total_all_post_count=_.data.total_all_post_count,t.all_publish_post_count=_.data.all_publish_post_count,t.all_hide_post_count=_.data.all_hide_post_count,t.add_today_post_count=_.data.add_today_post_count,t.favorite_anime_post_count=_.data.favorite_anime_post_count,t.favorite_sexy_post_count=_.data.favorite_sexy_post_count,t.favorite_estetic_post_count=_.data.favorite_estetic_post_count,t.favorite_cats_post_count=_.data.favorite_cats_post_count,t.favorite_sexy_tumblr_video_count=_.data.favorite_sexy_tumblr_video_count,t.favorite_sexy_tumblr_photo_count=_.data.favorite_sexy_tumblr_photo_count,t.favorite_anime_tumblr_photo_count=_.data.favorite_anime_tumblr_photo_count,console.log(_.data.all_hide_post_count)}).catch(function(_){console.error(_)})}},created(){this.fetchData()},computed:{}}),n=t=>(w("data-v-f81ea926"),t=t(),g(),t),V={class:"row row-equal"},B={class:"flex xl6 xs12 lg6"},D={class:"col-md-4 grid-margin stretch-card"},I=p("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C"),$={class:"flex xl6 xs12 lg6"},k={class:"row"},q={class:"flex xs12 sm6 md6"},C={class:"va-h2 ma-0"},F=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0411\u0414",-1)),K={class:"flex xs12 sm6 md6"},T={class:"va-h2 ma-0"},E=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),A={class:"flex xs12 sm6 md6"},O={class:"va-h2 ma-0"},P=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),U={class:"flex xs12 sm6 md6"},j={class:"va-h2 ma-0"},z=n(()=>o("p",{class:"no-wrap"},"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u043E\u0441\u0442\u043E\u0432",-1)),G={class:"row row-equal"},H={class:"flex xl8 xs12 lg8"},J=p("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"),L={class:"row row-equal"},M={class:"flex xl12 xs12 lg12"},Q={class:"row"},R={class:"flex xs12 sm3 md3"},W={class:"va-h2 ma-0"},X=n(()=>o("p",{class:"no-wrap"},"Anime from VK",-1)),Y={class:"flex xs12 sm3 md3"},Z={class:"va-h2 ma-0"},tt=n(()=>o("p",{class:"no-wrap"},"Sexy from VK",-1)),ot={class:"flex xs12 sm3 md3"},at={class:"va-h2 ma-0"},st=n(()=>o("p",{class:"no-wrap"},"Estetic from VK",-1)),_t={class:"flex xs12 sm3 md3"},et={class:"va-h2 ma-0"},lt=n(()=>o("p",{class:"no-wrap"},"Cats from VK",-1)),dt={class:"flex xs12 sm3 md3"},nt={class:"va-h2 ma-0"},it=n(()=>o("p",{class:"no-wrap"},"Sexy Tumblr Video",-1)),ct={class:"flex xs12 sm3 md3"},rt={class:"va-h2 ma-0"},ut=n(()=>o("p",{class:"no-wrap"}," Sexy Tumblr Photo",-1)),ht={class:"flex xs12 sm3 md3"},ft={class:"va-h2 ma-0"},mt=n(()=>o("p",{class:"no-wrap"}," Anime Tumblr Photo",-1));function pt(t,_,v,bt,yt,wt){const r=i("va-card-title"),u=i("va-data-table"),e=i("va-card-content"),l=i("va-card");return f(),m(y,null,[o("div",V,[o("div",B,[o("div",D,[a(l,null,{default:s(()=>[a(r,null,{default:s(()=>[I]),_:1}),a(e,null,{default:s(()=>[a(u,{items:t.all_category_stat},null,8,["items"])]),_:1})]),_:1})])]),o("div",$,[o("div",k,[o("div",q,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",C,d(t.total_all_post_count),1),F]),_:1})]),_:1})]),o("div",K,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",T,d(t.all_publish_post_count),1),E]),_:1})]),_:1})]),o("div",A,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",O,d(t.all_hide_post_count),1),P]),_:1})]),_:1})]),o("div",U,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",j,d(t.add_today_post_count),1),z]),_:1})]),_:1})])])])]),o("div",G,[o("div",H,[a(l,{square:"",outlined:""},{default:s(()=>[a(r,null,{default:s(()=>[J]),_:1}),a(e,null,{default:s(()=>[a(u,{items:t.items,columns:t.columns,"filter-method":t.customFilteringFn,"sort-by":t.sortBy,"onUpdate:sort-by":_[0]||(_[0]=c=>t.sortBy=c),"sorting-order":t.sortingOrder,"onUpdate:sorting-order":_[1]||(_[1]=c=>t.sortingOrder=c)},null,8,["items","columns","filter-method","sort-by","sorting-order"])]),_:1})]),_:1})])]),o("div",L,[o("div",M,[o("div",Q,[o("div",R,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",W,d(t.favorite_anime_post_count),1),X]),_:1})]),_:1})]),o("div",Y,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",Z,d(t.favorite_sexy_post_count),1),tt]),_:1})]),_:1})]),o("div",ot,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",at,d(t.favorite_estetic_post_count),1),st]),_:1})]),_:1})]),o("div",_t,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",et,d(t.favorite_cats_post_count),1),lt]),_:1})]),_:1})]),o("div",dt,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",nt,d(t.favorite_sexy_tumblr_video_count),1),it]),_:1})]),_:1})]),o("div",ct,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",rt,d(t.favorite_sexy_tumblr_photo_count),1),ut]),_:1})]),_:1})]),o("div",ht,[a(l,null,{default:s(()=>[a(e,null,{default:s(()=>[o("h2",ft,d(t.favorite_anime_tumblr_photo_count),1),mt]),_:1})]),_:1})])])])])],64)}var vt=b(S,[["render",pt],["__scopeId","data-v-f81ea926"]]);const xt={class:"dashboard"},Nt=h({__name:"Dashboard",setup(t){return N(),(_,v)=>(f(),m("div",xt,[a(vt)]))}});export{Nt as default};
