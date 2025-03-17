import{E as r,Ea as g,Ha as b,Na as f,O as d,Q as a,Ra as h,Y as s,ea as u,fa as l,ia as p,ka as C,la as v,ma as m}from"./chunk-M7O4YHAS.js";var _=["*"],c=class n{bgColor="bg-blue-600";textColor="text-white";hoverBgColor="hover:bg-blue-700";buttonClick=new r;get buttonClasses(){return`${this.bgColor} ${this.textColor} ${this.hoverBgColor}`}onClick(){this.buttonClick.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=a({type:n,selectors:[["daden-button"]],inputs:{bgColor:"bgColor",textColor:"textColor",hoverBgColor:"hoverBgColor"},outputs:{buttonClick:"buttonClick"},ngContentSelectors:_,decls:2,vars:1,consts:[[1,"px-6","py-2","rounded","transition-all",3,"click","ngClass"]],template:function(t,e){t&1&&(C(),u(0,"button",0),p("click",function(){return e.onClick()}),v(1),l()),t&2&&s("ngClass",e.buttonClasses)},dependencies:[b,g],encapsulation:2})};var x=class n{reset=new r;onReset(){this.reset.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=a({type:n,selectors:[["daden-reset-button"]],outputs:{reset:"reset"},decls:2,vars:3,consts:[[3,"buttonClick","bgColor","textColor","hoverBgColor"]],template:function(t,e){t&1&&(u(0,"daden-button",0),p("buttonClick",function(){return e.onReset()}),m(1,` Reset
`),l()),t&2&&s("bgColor","transparent")("textColor","text-red-500")("hoverBgColor","hover:bg-red-200")},dependencies:[c],encapsulation:2})};var R=class n{constructor(o,t){this.navigationService=o;this.router=t}currentRoute="";save=new r;onSaveAndContinue(){this.save.emit(),this.navigateToNext()}navigateToNext(){let o=this.navigationService.navigation(),t=this.getAllRoutes(o),e=t.indexOf(this.currentRoute);if(e!==-1&&e<t.length-1){let i=t[e+1];this.router.navigate([i])}}getAllRoutes(o){return Object.entries(o).flatMap(([t,e])=>Object.entries(e).map(([i])=>`/v1/${t}/${i}`))}static \u0275fac=function(t){return new(t||n)(d(h),d(f))};static \u0275cmp=a({type:n,selectors:[["daden-save-button"]],inputs:{currentRoute:"currentRoute"},outputs:{save:"save"},decls:2,vars:3,consts:[[3,"buttonClick","bgColor","textColor","hoverBgColor"]],template:function(t,e){t&1&&(u(0,"daden-button",0),p("buttonClick",function(){return e.onSaveAndContinue()}),m(1,` Save & Continue
`),l()),t&2&&s("bgColor","bg-blue-600")("textColor","text-white")("hoverBgColor","hover:bg-blue-700")},dependencies:[c],encapsulation:2})};export{x as a,R as b};
