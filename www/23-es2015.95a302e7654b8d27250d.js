(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/nME":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class r{constructor(l,n){this.storage=l,this.router=n,this.storage.get("payment_cart").then(l=>{null!=l&&(console.log(l),this.cart=l)}),this.storage.get("payment_address").then(l=>{null!=l&&(console.log(l),this.address=l)}),this.storage.get("payment_summary").then(l=>{null!=l&&(console.log(l),this.paymentSummary=l)})}ngOnInit(){}onClickPay(){this.onClickBankPay()}onClickBankPay(){this.router.navigate(["/shopping-bank-transfer"])}}class b{}var o=u("pMnS"),e=u("oBZk"),i=u("ZZ/e"),s=u("SVse"),c=u("xgBC"),a=u("iInd"),g=t.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,23,"ion-col",[["size","12"]],null,null,null,e.V,e.k)),t.qb(1,49152,null,0,i.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(2,0,null,0,21,"ion-row",[],null,null,null,e.kb,e.z)),t.qb(3,49152,null,0,i.kb,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-col",[["size","4"],["style","max-height: 100px ; max-width: 100px;"]],null,null,null,e.V,e.k)),t.qb(5,49152,null,0,i.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(7,0,null,0,16,"ion-col",[["size","8"]],null,null,null,e.V,e.k)),t.qb(8,49152,null,0,i.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(9,0,null,0,14,"div",[],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,3,"div",[["style","text-align: left ;"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(13,null,["",""])),(l()(),t.rb(14,0,null,null,2,"div",[["style","text-align: left ;"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(16,null,["",""])),(l()(),t.rb(17,0,null,null,3,"div",[["style"," margin-top:0px"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,2,"h2",[["style","color: red"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(20,null,[" "," \u0e1a\u0e32\u0e17"])),(l()(),t.rb(21,0,null,null,2,"div",[["style"," margin-top: 0px"]],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,1,"p",[["style","color: rgba(136, 132, 128, 0.897)"]],null,null,null,null,null)),(l()(),t.Ib(23,null,[" \u0e08\u0e33\u0e19\u0e27\u0e19 "," \u0e0a\u0e34\u0e49\u0e19 "]))],(function(l,n){l(n,1,0,"12"),l(n,5,0,"4"),l(n,8,0,"8")}),(function(l,n){l(n,6,0,n.context.$implicit.imgUrl),l(n,13,0,n.context.$implicit.product_name_th),l(n,16,0,n.context.$implicit.title),l(n,20,0,n.context.$implicit.price),l(n,23,0,n.context.$implicit.amt)}))}function k(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,17,"ion-item",[["no-lines",""]],null,null,null,e.cb,e.r)),t.qb(1,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,15,"ion-grid",[],null,null,null,e.Y,e.n)),t.qb(3,49152,null,0,i.B,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,13,"ion-row",[],null,null,null,e.kb,e.z)),t.qb(5,49152,null,0,i.kb,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,5,"ion-col",[["size","7"],["style","text-align: left;"]],null,null,null,e.V,e.k)),t.qb(7,49152,null,0,i.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(8,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"])),(l()(),t.rb(12,0,null,0,5,"ion-col",[["size","5"],["style","text-align: right; color: red"]],null,null,null,e.V,e.k)),t.qb(13,49152,null,0,i.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(14,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(17,null,[""," \u0e1a\u0e32\u0e17"]))],(function(l,n){l(n,7,0,"7"),l(n,13,0,"5")}),(function(l,n){l(n,17,0,n.component.paymentSummary.total)}))}function h(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"strong",[["style","color: rgba(136, 132, 128, 0.897)"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23"]))],null,null)}function d(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"strong",[["style","color: rgba(136, 132, 128, 0.897)"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15/\u0e40\u0e14\u0e1a\u0e34\u0e15"]))],null,null)}function m(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"strong",[["style","color: rgba(136, 132, 128, 0.897)"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e01\u0e25\u0e31\u0e1a"]))],null,null)}function f(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,7,"ion-item",[["no-lines",""],["style","background-color: #ffffff ;"]],null,null,null,e.cb,e.r)),t.qb(1,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.qb(3,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,d)),t.qb(5,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,m)),t.qb(7,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"bank"==u.paymentSummary.method),l(n,5,0,"visa"==u.paymentSummary.method),l(n,7,0,"self"==u.paymentSummary.method)}),null)}function x(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,5,"ion-item",[["no-lines",""],["style","background-color: #ffffff;"],["text-wrap",""]],null,null,null,e.cb,e.r)),t.qb(1,49152,null,0,i.I,[t.h,t.k,t.x],null,null),t.qb(2,16384,null,0,i.e,[t.k],null,null),(l()(),t.rb(3,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,1,"strong",[["style","color: rgba(136, 132, 128, 0.897)"]],null,null,null,null,null)),(l()(),t.Ib(5,null,[""," "," "," "," "," ",""]))],null,(function(l,n){var u=n.component;l(n,5,0,u.address.name,u.address.address,u.address.subdistrict,u.address.district,u.address.province,u.address.postal)}))}function y(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,12,"ion-header",[],null,null,null,e.Z,e.o)),t.qb(1,49152,null,0,i.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,10,"ion-toolbar",[],null,null,null,e.vb,e.K)),t.qb(3,49152,null,0,i.Db,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.P,e.e)),t.qb(5,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["color","light"]],null,[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==t.Db(l,8).onClick(u)&&r),r}),e.N,e.c)),t.qb(7,49152,null,0,i.h,[t.h,t.k,t.x],{color:[0,"color"]},null),t.qb(8,16384,null,0,i.i,[[2,i.jb],i.Ib],null,null),(l()(),t.rb(9,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,e.ub,e.J)),t.qb(10,49152,null,0,i.Bb,[t.h,t.k,t.x],null,null),t.qb(11,16384,null,0,i.e,[t.k],null,null),(l()(),t.rb(12,0,null,0,0,"img",[["src","/assets/icon/logo_3.png"],["style","height: 40px; width : 40px;   "]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,35,"ion-content",[],null,null,null,e.W,e.l)),t.qb(14,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(15,0,null,0,0,"img",[["alt",""],["src","/assets/pays/step-pay3.png"],["width","100%"]],null,null,null,null,null)),(l()(),t.rb(16,0,null,0,32,"ion-list",[],null,null,null,e.eb,e.t)),t.qb(17,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.rb(18,0,null,0,3,"ion-item",[["no-lines",""],["style","background-color: #e7e7e7 ;"]],null,null,null,e.cb,e.r)),t.qb(19,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(20,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d"])),(l()(),t.rb(22,0,null,0,8,"ion-item",[["no-padding",""]],null,null,null,e.cb,e.r)),t.qb(23,49152,null,0,i.I,[t.h,t.k,t.x],null,null),t.qb(24,16384,null,0,i.e,[t.k],null,null),(l()(),t.rb(25,0,null,0,5,"ion-grid",[["style","background-color: #ffffff ;"]],null,null,null,e.Y,e.n)),t.qb(26,49152,null,0,i.B,[t.h,t.k,t.x],null,null),(l()(),t.rb(27,0,null,0,3,"ion-row",[],null,null,null,e.kb,e.z)),t.qb(28,49152,null,0,i.kb,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,p)),t.qb(30,278528,null,0,s.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(32,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(33,0,null,0,3,"ion-item",[["no-lines",""],["style","background-color: #e7e7e7 ;"]],null,null,null,e.cb,e.r)),t.qb(34,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(35,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"])),(l()(),t.gb(16777216,null,0,1,null,f)),t.qb(38,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(39,0,null,0,3,"ion-item",[["no-lines",""],["style","background-color: #e7e7e7 ;"]],null,null,null,e.cb,e.r)),t.qb(40,49152,null,0,i.I,[t.h,t.k,t.x],null,null),(l()(),t.rb(41,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"])),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(44,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(45,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(46,0,null,0,2,"ion-button",[["color","danger"],["expand","block"],["size","large"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickPay()&&t),t}),e.O,e.d)),t.qb(47,49152,null,0,i.l,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),t.Ib(-1,0,["\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d"]))],(function(l,n){var u=n.component;l(n,7,0,"light"),l(n,30,0,u.cart),l(n,32,0,u.paymentSummary),l(n,38,0,u.paymentSummary),l(n,44,0,u.address),l(n,47,0,"danger","block","large","submit")}),null)}function q(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"app-shopping-step-check",[],null,null,null,y,g)),t.qb(1,114688,null,0,r,[c.b,a.m],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t.nb("app-shopping-step-check",r,q,{},{},[]),v=u("s7LF");u.d(n,"ShoppingStepCheckPageModuleNgFactory",(function(){return z}));var z=t.ob(b,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,I]],[3,t.j],t.v]),t.Bb(4608,s.k,s.j,[t.s,[2,s.q]]),t.Bb(4608,v.i,v.i,[]),t.Bb(4608,i.c,i.c,[t.x,t.g]),t.Bb(4608,i.Hb,i.Hb,[i.c,t.j,t.p]),t.Bb(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,v.h,v.h,[]),t.Bb(1073742336,v.a,v.a,[]),t.Bb(1073742336,i.Fb,i.Fb,[]),t.Bb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,a.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);