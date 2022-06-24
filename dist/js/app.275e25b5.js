(function(){"use strict";var e={915:function(e,t){t["Z"]=[{id:1,name:"AirPods",brand:"Apple",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:1e4,cost:1288,color:"白色"},{id:2,name:"BeatsX 入耳式耳机",brand:"Beats",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:11e3,cost:1188,color:"白色"},{id:3,name:"Beats Solo3 Wireless 头戴式式耳机",brand:"Beats",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:5e3,cost:2288,color:"金色"},{id:4,name:"Beats Pill+ 便携式扬声器",brand:"Beats",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:3e3,cost:1888,color:"红色"},{id:5,name:"Sonos PLAY:1 无线扬声器",brand:"Sonos",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:8e3,cost:1578,color:"白色"},{id:6,name:"Powerbeats3 by Dr. Dre Wireless 入耳式耳机",brand:"Beats",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:12e3,cost:1488,color:"金色"},{id:7,name:"Beats EP 头戴式耳机",brand:"Beats",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:25e3,cost:788,color:"蓝色"},{id:8,name:"B&O PLAY BeoPlay A1 便携式蓝牙扬声器",brand:"B&O",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:15e3,cost:1898,color:"金色"},{id:9,name:"Bose® QuietComfort® 35 无线耳机",brand:"Bose",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:14e3,cost:2878,color:"蓝色"},{id:10,name:"B&O PLAY Beoplay H4 无线头戴式耳机",brand:"B&O",image:"https://www.apple.com.cn/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png",sales:9e3,cost:2298,color:"金色"}]},6059:function(e,t,r){var n=r(8935),o=r(2809);n.Z.use(o.Z);var a=new o.Z({mode:"history",routes:[{path:"/list",meta:{title:"商品列表"},component:e=>r.e(868).then(function(){var t=[r(3868)];e.apply(null,t)}.bind(this))["catch"](r.oe)},{path:"/product/:id",meta:{title:"商品详情"},component:e=>r.e(96).then(function(){var t=[r(4096)];e.apply(null,t)}.bind(this))["catch"](r.oe)},{path:"/cart",meta:{title:"购物车"},component:e=>r.e(845).then(function(){var t=[r(2845)];e.apply(null,t)}.bind(this))["catch"](r.oe)},{path:"*",redirect:"/list"}]}),i=r(4665),s=r(915);function c(e){const t=[],r={};for(let n=0;n<e.length;n++){const o=e[n];r[o]||(t.push(o),r[o]=1)}return t}n.Z.use(i.ZP);var p=new i.ZP.Store({state:{productList:[],cartList:[]},getters:{brands:e=>{const t=e.productList.map((e=>e.brand));return c(t)},colors:e=>{const t=e.productList.map((e=>e.color));return c(t)}},mutations:{setProductList(e,t){e.productList=t},addCart(e,t){const r=e.cartList.find((e=>e.id===t));r?r.count++:e.cartList.push({id:t,count:1})},editCartCount(e,t){const r=e.cartList.find((e=>e.id===t.id));r.count+=t.count},deleteCart(e,t){const r=e.cartList.findIndex((e=>e.id===t));e.cartList.splice(r,1)},emptyCart(e){e.cartList=[]}},actions:{getProductList(e){setTimeout((()=>{e.commit("setProductList",s.Z)}),500)},buy(e){return new Promise((t=>{setTimeout((()=>{e.commit("emptyCart"),t()}),500)}))}}}),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("router-link",{staticClass:"header-title",attrs:{to:"/list"}},[e._v("电商网站示例")]),r("div",{staticClass:"header-menu"},[r("router-link",{staticClass:"header-menu-cart",attrs:{to:"/cart"}},[e._v(" 购物车 "),e.cartList.length?r("span",[e._v(e._s(e.cartList.length))]):e._e()])],1)],1),r("router-view")],1)},d=[],l={name:"App",computed:{cartList(){return this.$store.state.cartList}}},m=l,f=r(1001),g=(0,f.Z)(m,u,d,!1,null,null,null),h=g.exports;n.Z.config.productionTip=!1,a.beforeEach(((e,t,r)=>{window.document.title=e.meta.title,r()})),a.afterEach(((e,t,r)=>{window.scrollTo(0,0)})),new n.Z({render:e=>e(h),el:"#app",store:p,router:a}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var p=o();void 0!==p&&(t=p)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{96:"39d47a42",845:"2c716db7",868:"62de2a75"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{96:"eb5bcaf2",845:"6cf5362b",868:"954202d5"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shoppingdemo:";r.l=function(n,o,a,i){if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var d=p[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var l=function(t,r){s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var e=function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=function(n){return new Promise((function(o,a){var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)}))},o={143:0};r.f.miniCss=function(e,t){var r={96:1,845:1,868:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],c=n[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);p<i.length;p++)a=i[p],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkshoppingdemo"]=self["webpackChunkshoppingdemo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6059)}));n=r.O(n)})();
//# sourceMappingURL=app.275e25b5.js.map