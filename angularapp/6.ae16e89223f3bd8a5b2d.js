(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Y71p:function(t,c,n){"use strict";n.r(c);var e=n("fXoL"),i=n("ofXK"),o=n("ByE3"),a=n("m6Lj"),s=n("tyNb"),r=n("kt0X"),p=n("o7am"),l=n("Xlwt"),d=n("XiUz"),u=n("Vgjw");function f(t,c){1&t&&(e.jc(0,"div"),e.jc(1,"p"),e.Pc(2,"This user no posts"),e.ic(),e.ic())}function g(t,c){if(1&t){const t=e.kc();e.jc(0,"li"),e.jc(1,"div",5),e.jc(2,"div"),e.jc(3,"span"),e.Pc(4),e.ic(),e.jc(5,"p"),e.Pc(6),e.wc(7,"date"),e.wc(8,"toDate"),e.ic(),e.ic(),e.jc(9,"button",6),e.rc("click",(function(){e.Ic(t);const n=c.$implicit;return e.vc().getDetails(n.id)})),e.Pc(10," Read "),e.ic(),e.ic(),e.ic()}if(2&t){const t=c.$implicit;e.Sb(4),e.Qc(t.title),e.Sb(2),e.Rc(" Created on: ",e.yc(7,2,e.xc(8,5,t.createdOn),"dd.MM.yyyy")," ")}}let m=(()=>{class t{constructor(t){this.router=t}getDetails(t){this.router.navigate(["post",t])}}return t.ɵfac=function(c){return new(c||t)(e.ec(s.b))},t.ɵcmp=e.Yb({type:t,selectors:[["app-user-posts"]],inputs:{posts:"posts"},decls:6,vars:2,consts:[[1,"post-section"],[1,"label"],[4,"ngIf"],["fxLayout","column","fxLayoutAlign","start","fxLayoutGap","20px"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayoutAlign","space-between","fxLayoutGap","10px"],["mat-fab","","color","primary",3,"click"]],template:function(t,c){1&t&&(e.jc(0,"div",0),e.jc(1,"p",1),e.Pc(2,"Posts:"),e.ic(),e.Oc(3,f,3,0,"div",2),e.jc(4,"ul",3),e.Oc(5,g,11,7,"li",4),e.ic(),e.ic()),2&t&&(e.Sb(3),e.Cc("ngIf",!c.posts.length),e.Sb(2),e.Cc("ngForOf",c.posts))},directives:[i.l,d.c,d.b,d.d,i.k,l.a],pipes:[i.e,u.a],styles:["ul[_ngcontent-%COMP%]{padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:5px 0}ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.post-section[_ngcontent-%COMP%]{font-size:20px}.post-section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}"]}),t})();function h(t,c){1&t&&e.fc(0,"app-loader")}function b(t,c){if(1&t){const t=e.kc();e.hc(0),e.jc(1,"div",1),e.jc(2,"div",2),e.jc(3,"div",3),e.jc(4,"div",4),e.fc(5,"img",5),e.ic(),e.jc(6,"div",6),e.jc(7,"p",7),e.Pc(8,"Name:"),e.ic(),e.jc(9,"span"),e.Pc(10),e.ic(),e.jc(11,"p",7),e.Pc(12,"Email:"),e.ic(),e.jc(13,"span"),e.Pc(14),e.ic(),e.jc(15,"div",8),e.jc(16,"button",9),e.rc("click",(function(){return e.Ic(t),e.vc().resetPassword()})),e.Pc(17," Reset password "),e.ic(),e.jc(18,"button",10),e.rc("click",(function(){e.Ic(t);const n=c.ngIf;return e.vc().deleteAccount(n.id)})),e.Pc(19," Delete account "),e.ic(),e.ic(),e.ic(),e.fc(20,"app-user-posts",11),e.ic(),e.ic(),e.ic(),e.gc()}if(2&t){const t=c.ngIf;e.Sb(5),e.Dc("src",t.avatar,e.Jc),e.Sb(5),e.Qc(t.name),e.Sb(4),e.Qc(t.email),e.Sb(6),e.Cc("posts",t.posts)}}let P=(()=>{class t{constructor(t,c,n){this.activateRoute=t,this.router=c,this.store=n}ngOnInit(){this.store.dispatch(new a.e(this.activateRoute.snapshot.params.id)),this.user$=this.store.select(o.d)}resetPassword(){this.router.navigate(["auth","forgot-password"])}deleteAccount(t){this.store.dispatch(new a.h({userId:t}))}}return t.ɵfac=function(c){return new(c||t)(e.ec(s.a),e.ec(s.b),e.ec(r.h))},t.ɵcmp=e.Yb({type:t,selectors:[["app-profile"]],decls:4,vars:6,consts:[[4,"ngIf"],[1,"wrapper"],[1,"card"],[1,"card-info"],[1,"img-section"],[1,"avatar",3,"src"],[1,"info-section"],[1,"label"],[1,"action"],["mat-flat-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],[3,"posts"]],template:function(t,c){1&t&&(e.Oc(0,h,1,0,"app-loader",0),e.wc(1,"async"),e.Oc(2,b,21,4,"ng-container",0),e.wc(3,"async")),2&t&&(e.Cc("ngIf",!e.xc(1,2,c.user$)),e.Sb(2),e.Cc("ngIf",e.xc(3,4,c.user$)))},directives:[i.l,p.a,l.a,m],pipes:[i.b],styles:[".wrapper[_ngcontent-%COMP%]{margin:0 auto;max-width:800px}.card-info[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.card[_ngcontent-%COMP%]{max-width:800px;margin:3% 0;border-radius:.5em;box-shadow:0 0 1em gray;padding:10px;background:#fff;opacity:.9}.avatar[_ngcontent-%COMP%]{width:200px;border-radius:50%}.info-section[_ngcontent-%COMP%]{font-size:20px}.info-section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}.action[_ngcontent-%COMP%]{display:flex;flex-direction:column}.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px;font-size:20px}@media (max-width:600px){.card-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px;font-size:18px}.wrapper[_ngcontent-%COMP%]{margin:0 20px}.avatar[_ngcontent-%COMP%]{width:80px;border-radius:50%}}"]}),t})();var x=n("quSY"),O=n("3Pt+"),C=n("IRfi"),v=n("A2Vd"),w=n("2+6u"),j=n("TY1r"),y=n("j14s");function M(t,c){if(1&t&&(e.jc(0,"mat-option",16),e.Pc(1),e.ic()),2&t){const t=c.$implicit;e.Cc("value",t.value),e.Sb(1),e.Rc(" ",t.text," ")}}function _(t,c){1&t&&(e.jc(0,"mat-error"),e.Pc(1,"Select searching by is required"),e.ic())}function S(t,c){1&t&&(e.hc(0),e.fc(1,"app-loader"),e.gc())}function I(t,c){if(1&t&&(e.jc(0,"div",0),e.jc(1,"div",17),e.jc(2,"div",18),e.jc(3,"div",19),e.fc(4,"img",20),e.ic(),e.jc(5,"div",21),e.jc(6,"p",22),e.Pc(7,"Name:"),e.ic(),e.jc(8,"span"),e.Pc(9),e.ic(),e.jc(10,"p",22),e.Pc(11,"Email:"),e.ic(),e.jc(12,"span"),e.Pc(13),e.ic(),e.ic(),e.fc(14,"app-user-posts",23),e.ic(),e.ic(),e.ic()),2&t){const t=c.$implicit;e.Sb(4),e.Dc("src",t.avatar,e.Jc),e.Sb(5),e.Qc(t.name),e.Sb(4),e.Qc(t.email),e.Sb(1),e.Cc("posts",t.posts)}}let k=(()=>{class t{constructor(t){this.store=t,this.options=[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Title",value:"title"}],this.subscription=new x.a}ngOnInit(){this.store.dispatch(new a.b),this.users$=this.store.select(o.b)}searchUser(t){this.subscription=this.store.select(o.b).subscribe(c=>{this.store.dispatch(new a.i({userList:c,value:t})),this.users$=this.store.select(o.e)})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.ɵfac=function(c){return new(c||t)(e.ec(r.h))},t.ɵcmp=e.Yb({type:t,selectors:[["app-users-list"]],decls:23,vars:9,consts:[[1,"wrapper"],[1,"card",3,"ngSubmit"],["searchForm","ngForm"],["fxLayoutAlign","center",1,"search-header"],[1,"search-from"],[1,"search-input"],["ngModel","","name","searchFor","matInput","","placeholder","Type here...",1,"search-input"],["searchInput",""],[1,"search-select"],["ngModel","","required","","name","searchBy","matInput",""],["selectInput","ngModel"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-button","",1,"search-btn",3,"disabled"],["aria-hidden","false","aria-label","Example home icon"],["class","wrapper",4,"ngFor","ngForOf"],[3,"value"],[1,"card"],[1,"card-info"],[1,"img-section"],[1,"avatar",3,"src"],[1,"info-section"],[1,"label"],[3,"posts"]],template:function(t,c){if(1&t){const t=e.kc();e.jc(0,"div",0),e.jc(1,"form",1,2),e.rc("ngSubmit",(function(){e.Ic(t);const n=e.Hc(2);return c.searchUser(n.value)})),e.jc(3,"h2",3),e.Pc(4," Search user by name, email or title of his post: "),e.ic(),e.jc(5,"div",4),e.jc(6,"mat-form-field",5),e.fc(7,"input",6,7),e.ic(),e.jc(9,"mat-form-field",8),e.jc(10,"mat-label"),e.Pc(11,"Search by"),e.ic(),e.jc(12,"mat-select",9,10),e.Oc(14,M,2,2,"mat-option",11),e.ic(),e.Oc(15,_,2,0,"mat-error",12),e.ic(),e.jc(16,"button",13),e.jc(17,"mat-icon",14),e.Pc(18,"search"),e.ic(),e.ic(),e.ic(),e.ic(),e.ic(),e.Oc(19,S,2,0,"ng-container",12),e.wc(20,"async"),e.Oc(21,I,15,4,"div",15),e.wc(22,"async")}if(2&t){const t=e.Hc(2),i=e.Hc(13);var n;const o=!(null!=(n=e.xc(20,5,c.users$))&&n.length);e.Sb(14),e.Cc("ngForOf",c.options),e.Sb(1),e.Cc("ngIf",i.hasError("required")),e.Sb(1),e.Cc("disabled",t.invalid),e.Sb(3),e.Cc("ngIf",o),e.Sb(2),e.Cc("ngForOf",e.xc(22,7,c.users$))}},directives:[O.p,O.k,O.l,d.b,C.b,O.a,v.a,O.j,O.m,C.f,w.a,O.o,i.k,i.l,l.a,j.a,y.i,C.a,p.a,m],pipes:[i.b],styles:[".wrapper[_ngcontent-%COMP%]{margin:0 auto;max-width:700px}.card-info[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.card[_ngcontent-%COMP%]{max-width:700px;margin:20px 0;padding:20px;border-radius:.5em;box-shadow:0 0 1em gray;width:100%;box-sizing:border-box;background:#fff;opacity:.9}.avatar[_ngcontent-%COMP%]{width:150px;border-radius:50%}.info-section[_ngcontent-%COMP%]{font-size:18px}.info-section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}.search-from[_ngcontent-%COMP%]{display:flex}.search-input[_ngcontent-%COMP%]{width:600px;margin-right:20px}.search-header[_ngcontent-%COMP%]{font-family:Pacifico,cursive;font-weight:700;color:#0a0967}@media (max-width:600px){.card-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.wrapper[_ngcontent-%COMP%]{margin:0 20px}.search-from[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;align-items:center}.search-input[_ngcontent-%COMP%], .search-select[_ngcontent-%COMP%]{width:250px}.avatar[_ngcontent-%COMP%]{width:80px;border-radius:50%}.info-section[_ngcontent-%COMP%], .post-section[_ngcontent-%COMP%]{font-size:16px}}"]}),t})();var F=n("YUcS"),L=n("hctd"),$=n("PCNd"),z=n("LjFu");const A=s.d.forChild([{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:k,canActivate:[z.a]},{path:":id",component:P,canActivate:[z.a]}]);n.d(c,"UserModule",(function(){return D}));let D=(()=>{class t{}return t.ɵmod=e.cc({type:t}),t.ɵinj=e.bc({factory:function(c){return new(c||t)},imports:[[i.c,L.a,F.a,$.a,s.d,A,O.d]]}),t})()}}]);