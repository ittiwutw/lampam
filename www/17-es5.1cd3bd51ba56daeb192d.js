(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),r=u("ZZ/e"),s=u("Ip0R"),c=u("tnAE"),b=u("Z4OH"),a=function(){function l(l,n,u){this.rest=l,this.streamingMedia=n,this.router=u,this.productCats=[],this.isEnableChicken=!1,this.slideBandOpts={slidesPerView:1,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},speed:400,autoplay:!0},this.slideOpts={slidesPerView:1.8,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},speed:400,autoplay:!1},this.slideProdOpts={slidesPerView:1.5,spaceBetween:0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},speed:400,autoplay:!1},this.loadBanner(),this.loadSteam(),this.loadNews(),this.loadGallery(),this.loadChickens(),this.loadProducts()}return l.prototype.loadBanner=function(){var l=this;this.rest.getBanners().then((function(n){n?(n.data.forEach((function(l){l.banner_url="https://lampam.co/"+l.banner_url})),l.banners=n.data,console.log(l.banners)):console.log("wrong")}))},l.prototype.loadSteam=function(){var l=this;this.rest.getStreaming().then((function(n){n?(l.steams=n.data,console.log(l.steams)):console.log("wrong")}))},l.prototype.loadNews=function(){var l=this;this.rest.getNews().then((function(n){n?(n.data.forEach((function(l){l.image="https://lampam.co/"+l.image})),l.news=n.data,console.log(l.news)):console.log("wrong")}))},l.prototype.onClickNews=function(l){this.router.navigate(["/news-detail",l])},l.prototype.onClickGallery=function(l){console.log(l),JSON.stringify(l),this.router.navigate(["/galleries",l])},l.prototype.loadGallery=function(){var l=this;this.rest.getGallery().then((function(n){n?(n.data.forEach((function(l){l.cover="https://lampam.co/"+l.cover})),l.galleries=n.data,console.log(l.galleries)):console.log("wrong")}))},l.prototype.loadChickens=function(){var l=this,n=this;this.rest.getChickens().then((function(u){u?(u.data.lenght>0&&(l.isEnableChicken=!0),u.data.forEach((function(l){l.productcockimage[0].file_url="https://lampam.co/"+l.productcockimage[0].file_url})),n.chickens=u.data):console.log("wrong")}))},l.prototype.loadProducts=function(){var l=this;this.rest.getProducts().then((function(n){n?n.data.forEach((function(n){n.productimage[0].file_url="https://lampam.co/"+n.productimage[0].file_url,2===n.category_id&&l.productCats.push(n)})):console.log("wrong")}))},l.prototype.onClickSteam=function(l,n){this.router.navigate(["/live-detail",{url:l,title:n}])},l.prototype.clickProduct=function(){this.router.navigate(["/tabs/products"])},l.prototype.onClickProduct=function(l,n){l.imgUrl=n,l.prodStatus=l.productstatus.status_name_th,this.router.navigate(["/products-detail",l])},l}(),p=u("ZYCi"),d=t.rb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}hr[_ngcontent-%COMP%]{border:.5px solid #1c1c1c!important;visibility:visible!important}h1[_ngcontent-%COMP%], ion-card-content[_ngcontent-%COMP%], p[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{color:#731212}.container[_ngcontent-%COMP%]{background-color:green;overflow:hidden;white-space:nowrap}.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.container[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{overflow:auto}"]],data:{}});function h(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,2,"ion-slide",[["background-size",""]],null,null,null,e.nb,e.C)),t.sb(1,49152,null,0,r.rb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,0,"img",[["style","width: -webkit-fill-available; height: -webkit-fill-available;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.banner_url)}))}function g(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,3,"ion-slides",[["pager","true"],["style","height: 200px; margin-top: -5px;"]],null,null,null,e.ob,e.D)),t.sb(1,49152,null,0,r.sb,[t.h,t.k,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.ib(16777216,null,0,1,null,h)),t.sb(3,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.slideBandOpts,"true"),l(n,3,0,u.banners)}),null)}function f(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,10,"ion-card",[["style","height: 100px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickNews(l.context.$implicit)&&t),t}),e.U,e.f)),t.sb(1,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-row",[],null,null,null,e.kb,e.z)),t.sb(3,49152,null,0,r.kb,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,2,"ion-col",[["size","6"]],null,null,null,e.V,e.k)),t.sb(5,49152,null,0,r.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(7,0,null,0,3,"ion-col",[["size","6"]],null,null,null,e.V,e.k)),t.sb(8,49152,null,0,r.u,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(9,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(10,null,["",""]))],(function(l,n){l(n,5,0,"6"),l(n,8,0,"6")}),(function(l,n){l(n,6,0,n.context.$implicit.image),l(n,10,0,n.context.$implicit.title)}))}function m(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,6,"ion-slide",[["background-size",""]],null,null,null,e.nb,e.C)),t.sb(1,49152,null,0,r.rb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,4,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickSteam(l.context.$implicit.url,l.context.$implicit.title)&&t),t}),e.U,e.f)),t.sb(3,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[["src","../../assets/imgs/live.jpg"],["style","border: solid;"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""]))],null,(function(l,n){l(n,6,0,n.context.$implicit.title)}))}function k(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,8,"ion-slide",[["background-size",""]],null,null,null,e.nb,e.C)),t.sb(1,49152,null,0,r.rb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,6,"ion-card",[],null,null,null,e.U,e.f)),t.sb(3,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(5,0,null,0,2,"ion-card-content",[],null,null,null,e.Q,e.g)),t.sb(6,49152,null,0,r.o,[t.h,t.k,t.z],null,null),(l()(),t.Kb(7,0,["",""])),(l()(),t.tb(8,0,null,0,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,4,0,n.context.$implicit.cover),l(n,7,0,n.context.$implicit.title)}))}function v(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,0,"hr",[],null,null,null,null,null))],null,null)}function z(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["padding-horizontal",""]],null,null,null,null,null)),t.sb(1,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u0e41\u0e19\u0e30\u0e19\u0e33\u0e44\u0e01\u0e48\u0e0a\u0e19"]))],null,null)}function w(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,10,"ion-slide",[["background-size",""]],null,null,null,e.nb,e.C)),t.sb(1,49152,null,0,r.rb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-card",[["style","padding: 5px"]],null,null,null,e.U,e.f)),t.sb(3,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,1,"img",[["padding",""]],[[8,"src",4]],null,null,null,null)),t.sb(5,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(6,0,null,0,3,"h2",[["text-center",""]],null,null,null,null,null)),t.sb(7,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(9,null,["",""])),(l()(),t.tb(10,0,null,0,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,4,0,n.context.$implicit.productcockimage[0].file_url),l(n,9,0,n.context.$implicit.product_name_th)}))}function O(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,9,"ion-slide",[["background-size",""]],null,null,null,e.nb,e.C)),t.sb(1,49152,null,0,r.rb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,6,"ion-card",[["style","text-align: center"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickProduct(l.context.$implicit,l.context.$implicit.productimage[0].file_url)&&t),t}),e.U,e.f)),t.sb(3,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,0,"img",[["style","height: 250px"]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(5,0,null,0,1,"p",[["style","color: #731212;"]],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""])),(l()(),t.tb(7,0,null,0,1,"strong",[["style","color: red;"]],null,null,null,null,null)),(l()(),t.Kb(8,null,["",""])),(l()(),t.tb(9,0,null,0,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,4,0,n.context.$implicit.productimage[0].file_url),l(n,6,0,n.context.$implicit.product_name_th),l(n,8,0,n.context.$implicit.price)}))}function y(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,15,"ion-header",[],null,null,null,e.Z,e.o)),t.sb(1,49152,null,0,r.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,13,"ion-toolbar",[],null,null,null,e.vb,e.K)),t.sb(3,49152,null,0,r.Db,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,e.P,e.e)),t.sb(5,49152,null,0,r.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,e.fb,e.v)),t.sb(7,49152,null,0,r.S,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(8,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,e.ub,e.J)),t.sb(9,49152,null,0,r.Bb,[t.h,t.k,t.z],null,null),t.sb(10,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(11,0,null,0,0,"img",[["src","/assets/icon/logo_3.png"],["style","height: 30px; width : 30px;  "]],null,null,null,null,null)),(l()(),t.tb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,e.P,e.e)),t.sb(13,49152,null,0,r.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,1,"ion-icon",[["color","light"],["name","notifications"],["style","width: 30px; height: 30px;"]],null,null,null,e.ab,e.p)),t.sb(15,49152,null,0,r.D,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(16,0,null,null,71,"ion-content",[],null,null,null,e.W,e.l)),t.sb(17,49152,null,0,r.v,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,g)),t.sb(19,16384,null,0,s.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(21,0,null,0,12,"div",[["style","padding-left: 10%; padding-right: 10%;"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,3,"b",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,['"\u0e15\u0e49\u0e19\u0e15\u0e33\u0e23\u0e31\u0e1a\u0e22\u0e32\u0e25\u0e33\u0e1b\u0e33 '])),(l()(),t.tb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[' \u0e40\u0e08\u0e49\u0e32\u0e41\u0e23\u0e01\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e44\u0e01\u0e48\u0e0a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e22\u0e0a\u0e19\u0e30"'])),(l()(),t.tb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[' \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e01\u0e32\u0e23\u0e04\u0e49\u0e32 \u0e25\u0e33\u0e1b\u0e33 \u0e08\u0e31\u0e19\u0e17\u0e23\u0e32 "\u0e44\u0e01\u0e48\u0e0a\u0e19\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2b\u0e31\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e0a\u0e19\u0e01\u0e31\u0e19" \u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c\u0e17\u0e35\u0e48\u0e1a\u0e48\u0e07\u0e1a\u0e2d\u0e01\u0e16\u0e36\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19 "\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e25\u0e33\u0e1b\u0e33" \u0e02\u0e2d\u0e07\u0e41\u0e17\u0e49 \u0e41\u0e25\u0e30\u0e14\u0e31\u0e49\u0e07\u0e40\u0e14\u0e34\u0e21 \u0e0b\u0e36\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e04\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e44\u0e01\u0e48\u0e0a\u0e19\u0e44\u0e17\u0e22\u0e21\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e22\u0e32\u0e27\u0e19\u0e32\u0e19\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 20 \u0e1b\u0e35 \u0e08\u0e31\u0e14\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22\u0e42\u0e14\u0e22 \u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e25\u0e33\u0e1b\u0e33\u0e1f\u0e32\u0e23\u0e4c\u0e21 \u0e08\u0e33\u0e01\u0e31\u0e14 \u0e04\u0e07\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e \u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19 \u0e40\u0e0a\u0e48\u0e19\u0e40\u0e14\u0e34\u0e21 \u0e41\u0e25\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c\u0e17\u0e35\u0e48\u0e1a\u0e48\u0e07\u0e1a\u0e2d\u0e01\u0e16\u0e36\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19 "\u0e25\u0e33\u0e1b\u0e33" '])),(l()(),t.tb(29,0,null,null,4,"div",[["text-center",""]],null,null,null,null,null)),t.sb(30,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(31,0,null,null,2,"ion-button",[["color","danger"],["fill","outline"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.clickProduct()&&t),t}),e.O,e.d)),t.sb(32,49152,null,0,r.l,[t.h,t.k,t.z],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),t.Kb(-1,0,["\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0b\u0e37\u0e49\u0e2d\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c"])),(l()(),t.tb(34,0,null,0,3,"div",[["padding-horizontal",""]],null,null,null,null,null)),t.sb(35,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(36,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u0e02\u0e48\u0e32\u0e27\u0e2a\u0e32\u0e23"])),(l()(),t.tb(38,0,null,0,4,"ion-content",[["style","height:550px;"]],null,null,null,e.W,e.l)),t.sb(39,49152,null,0,r.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(40,0,null,0,2,"div",[["id","myFixZone"],["scrollY","true"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,f)),t.sb(42,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(44,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(45,0,null,0,11,"div",[],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,4,"div",[["padding-horizontal",""]],null,null,null,null,null)),t.sb(47,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(48,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u0e16\u0e48\u0e32\u0e22\u0e17\u0e2d\u0e14\u0e2a\u0e14 "])),(l()(),t.tb(50,0,null,null,0,"img",[["src","https://lampam.co/public/images/icon_live.png"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),t.tb(51,0,null,null,5,"ion-grid",[],null,null,null,e.Y,e.n)),t.sb(52,49152,null,0,r.B,[t.h,t.k,t.z],null,null),(l()(),t.tb(53,0,null,0,3,"ion-slides",[["pager","false"]],null,null,null,e.ob,e.D)),t.sb(54,49152,null,0,r.sb,[t.h,t.k,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.ib(16777216,null,0,1,null,m)),t.sb(56,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(57,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(58,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(59,0,null,0,3,"div",[["padding-horizontal",""]],null,null,null,null,null)),t.sb(60,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(61,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u0e20\u0e32\u0e1e\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21"])),(l()(),t.tb(63,0,null,0,3,"ion-slides",[["pager","false"]],null,null,null,e.ob,e.D)),t.sb(64,49152,null,0,r.sb,[t.h,t.k,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(66,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(67,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(68,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,0,1,null,v)),t.sb(70,16384,null,0,s.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(72,16384,null,0,s.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(73,0,null,0,3,"ion-slides",[["pager","true"]],null,null,null,e.ob,e.D)),t.sb(74,49152,null,0,r.sb,[t.h,t.k,t.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.ib(16777216,null,0,1,null,w)),t.sb(76,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(77,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(79,0,null,0,3,"div",[["padding-horizontal",""]],null,null,null,null,null)),t.sb(80,16384,null,0,r.e,[t.k],null,null),(l()(),t.tb(81,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\u0e41\u0e19\u0e30\u0e19\u0e33\u0e0a\u0e38\u0e14\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c"])),(l()(),t.tb(83,0,null,0,3,"ion-slides",[],null,null,null,e.ob,e.D)),t.sb(84,49152,null,0,r.sb,[t.h,t.k,t.z],{options:[0,"options"]},null),(l()(),t.ib(16777216,null,0,1,null,O)),t.sb(86,278528,null,0,s.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(87,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,7,0,"light"),l(n,15,0,"light","notifications"),l(n,19,0,u.banners),l(n,32,0,"danger","outline","round"),l(n,42,0,u.news),l(n,54,0,u.slideOpts,"false"),l(n,56,0,u.steams),l(n,64,0,u.slideOpts,"false"),l(n,66,0,u.galleries),l(n,70,0,u.isEnableChicken),l(n,72,0,u.isEnableChicken),l(n,74,0,u.slideOpts,"true"),l(n,76,0,u.chickens),l(n,84,0,u.slideProdOpts),l(n,86,0,u.productCats)}),null)}function C(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"app-home",[],null,null,null,y,d)),t.sb(1,49152,null,0,a,[c.a,b.a,p.m],null,null)],null,null)}var x=t.pb("app-home",a,C,{},{},[]),_=u("gIcY");u.d(n,"HomePageModuleNgFactory",(function(){return P}));var P=t.qb(o,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[i.a,x]],[3,t.j],t.x]),t.Db(4608,s.k,s.j,[t.u,[2,s.q]]),t.Db(4608,_.i,_.i,[]),t.Db(4608,r.c,r.c,[t.z,t.g]),t.Db(4608,r.Hb,r.Hb,[r.c,t.j,t.q]),t.Db(4608,r.Kb,r.Kb,[r.c,t.j,t.q]),t.Db(1073742336,s.b,s.b,[]),t.Db(1073742336,_.h,_.h,[]),t.Db(1073742336,_.a,_.a,[]),t.Db(1073742336,r.Fb,r.Fb,[]),t.Db(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Db(1073742336,o,o,[]),t.Db(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);