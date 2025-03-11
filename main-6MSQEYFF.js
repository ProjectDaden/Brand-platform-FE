import{a as me}from"./chunk-CAOV3F7O.js";import{a as de,b as y}from"./chunk-G3IKMXVL.js";import{a as ie,b as ne,c as oe,d as re,e as ae,f as le,h as se}from"./chunk-ERNXXV3D.js";import"./chunk-PHHIOSPF.js";import"./chunk-HRINCXPA.js";import{B as w,C as a,Da as q,E as W,Fa as Q,G as u,Ga as X,Ha as v,Ia as $,Ja as ee,K as f,Ka as te,La as pe,N as m,P as G,Q as d,R as g,S as D,U as R,V as F,W as i,X as o,Y as l,aa as U,ba as b,ca as x,fa as s,ga as K,ha as Y,j as E,ja as P,ka as j,la as O,m as _,n as C,oa as Z,p as B,q as z,qa as H,r as I,s as N,ta as J}from"./chunk-ZPOYKYHR.js";var c=class e{constructor(n){this.router=n}LOCAL_STORAGE_KEY="login-app";users=[{username:"danny_karouw",password:"password1"},{username:"dennis_ulijn",password:"password2"}];login(n,t){return this.users.find(p=>p.username===n&&p.password===t)?(localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify({username:n})),!0):!1}logout(){localStorage.removeItem(this.LOCAL_STORAGE_KEY),this.router.navigate(["/login"])}isLoggedIn(){return localStorage.getItem(this.LOCAL_STORAGE_KEY)!==null}static \u0275fac=function(t){return new(t||e)(_(v))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})},S=class e{constructor(n,t){this.authService=n;this.router=t}canActivate(n,t){return this.authService.isLoggedIn()?!0:(this.router.navigate(["/login"]),!1)}static \u0275fac=function(t){return new(t||e)(_(c),_(v))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})};var M=class e{constructor(n,t){this.authService=n;this.router=t}username="";password="";login(){this.authService.login(this.username,this.password)?this.router.navigate(["/color-picker"]):alert("Login failed")}static \u0275fac=function(t){return new(t||e)(W(c),W(v))};static \u0275cmp=u({type:e,selectors:[["app-daden-login"]],decls:15,vars:2,consts:[[1,"min-h-screen","flex","items-center","justify-center","bg-gray-100"],[1,"bg-white","p-8","rounded-lg","shadow-lg","w-full","max-w-sm"],[1,"text-2xl","font-semibold","mb-6","text-center"],[3,"ngSubmit"],[1,"mb-4"],["for","username",1,"block","text-sm","font-medium","text-gray-700"],["type","text","id","username","name","username",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModelChange","ngModel"],[1,"mb-6"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","password","name","password",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","py-2","px-4","bg-indigo-600","text-white","rounded-md","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500"]],template:function(t,r){t&1&&(i(0,"div",0)(1,"div",1)(2,"h2",2),s(3,"Login"),o(),i(4,"form",3),b("ngSubmit",function(){return r.login()}),i(5,"div",4)(6,"label",5),s(7,"Username"),o(),i(8,"input",6),O("ngModelChange",function(h){return j(r.username,h)||(r.username=h),h}),o()(),i(9,"div",7)(10,"label",8),s(11,"Password"),o(),i(12,"input",9),O("ngModelChange",function(h){return j(r.password,h)||(r.password=h),h}),o()(),i(13,"button",10),s(14,"Login"),o()()()()),t&2&&(a(8),P("ngModel",r.username),a(4),P("ngModel",r.password))},dependencies:[se,le,ie,ne,oe,ae,re],encapsulation:2})};var ce=[{path:"login",component:M},{path:"color-picker",component:me,canActivate:[S]},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"color-picker",loadComponent:()=>import("./chunk-X5OUNE2U.js").then(e=>e.ToolColorPickerComponent)},{path:"v1",children:[{path:"core-brand-identity",children:[{path:"name",loadComponent:()=>import("./chunk-HFESJJ42.js").then(e=>e.BrandNameComponent)},{path:"mission",loadComponent:()=>import("./chunk-ZUKW3WK5.js").then(e=>e.MissionVisionComponent)},{path:"values",loadComponent:()=>import("./chunk-5XIJ54MD.js").then(e=>e.BrandValuePersonalityComponent)},{path:"audience",loadComponent:()=>import("./chunk-W5HROV33.js").then(e=>e.TargetAudienceComponent)}]},{path:"brand-voice-and-tone",children:[{path:"messaging",loadComponent:()=>import("./chunk-BFU7H5XH.js").then(e=>e.SectionMessagingComponent)},{path:"voice-tone",loadComponent:()=>import("./chunk-HPK4VIQO.js").then(e=>e.VoiceAndToneComponent)},{path:"copywriting",loadComponent:()=>import("./chunk-SW53SIXD.js").then(e=>e.SectionCopywrightComponent)}]},{path:"visual-identity",children:[{path:"logo",loadComponent:()=>import("./chunk-2SXBNNQB.js").then(e=>e.SectionLogoComponent)},{path:"color",loadComponent:()=>import("./chunk-X5OUNE2U.js").then(e=>e.ToolColorPickerComponent)},{path:"typography",loadComponent:()=>import("./chunk-JEZ5PFEB.js").then(e=>e.SectionTypographyComponent)},{path:"imagery",loadComponent:()=>import("./chunk-AMLZT66L.js").then(e=>e.SectionImageryComponent)}]},{path:"application-and-implementation",children:[{path:"web-and-guidelines",loadComponent:()=>import("./chunk-MJRAI2QP.js").then(e=>e.WebAndGuidelinesComponent)},{path:"socialmedia-styleguide",loadComponent:()=>import("./chunk-UQGCMQQM.js").then(e=>e.SocialmediaStyleguideComponent)},{path:"print-offline-material",loadComponent:()=>import("./chunk-6SVYT7FM.js").then(e=>e.PrintOfflineMaterialComponent)}]}]},{path:"**",redirectTo:"/color-picker"}];var ue={providers:[H({eventCoalescing:!0}),te(ce),q()]};var he=(e,n)=>["/v1",e,n];function ve(e,n){e&1&&l(0,"daden-icon",25),e&2&&(d("size-4"),m("strokeWidth",1.5))}function Ce(e,n){e&1&&l(0,"daden-icon",26),e&2&&(d("size-4"),m("strokeWidth",1.5))}function be(e,n){e&1&&l(0,"daden-icon",27),e&2&&(d("size-4"),m("strokeWidth",1.5))}function _e(e,n){e&1&&l(0,"daden-icon",28),e&2&&(d("size-4"),m("strokeWidth",1.5))}function we(e,n){e&1&&l(0,"daden-icon",33),e&2&&(d("size-6 bg-green-500 rounded-full p-1"),m("strokeWidth",1.5))}function xe(e,n){e&1&&(i(0,"div",32)(1,"div",34),s(2,"coming soon"),o()())}function ye(e,n){if(e&1){let t=U();i(0,"li")(1,"a",29),b("click",function(){B(t);let p=x(2);return z(p.closeMenu())}),i(2,"div",30)(3,"span"),s(4),o(),f(5,we,1,3,"daden-icon",31),o(),f(6,xe,3,0,"div",32),o()()}if(e&2){let t=n.$implicit,r=x().$implicit;a(),m("routerLink",Z(4,he,r[0],t.key)),a(3),K(t.value),a(),g(t.key==="logo"?5:-1),a(),g(t.key==="typography"?6:-1)}}function Se(e,n){if(e&1&&(i(0,"li",14)(1,"div",19),f(2,ve,1,3,"daden-icon",20)(3,Ce,1,3,"daden-icon",21)(4,be,1,3,"daden-icon",22)(5,_e,1,3,"daden-icon",23),s(6),o(),i(7,"ul",24),R(8,ye,7,7,"li",null,D),o()()),e&2){let t,r=n.$implicit,p=x();a(2),g((t=r[0])==="core-brand-identity"?2:t==="brand-voice-and-tone"?3:t==="visual-identity"?4:t==="application-and-implementation"?5:-1),a(4),Y(" ",p.formatTitle(r[0])," "),a(2),F(p.getMenuItems(r[1]))}}var L=class e{navigationService=C(pe);authService=C(c);router=C(v);categories=J(()=>Object.entries(this.navigationService.navigation()));isMenuOpen=!1;ngOnInit(){this.navigationService.loadNavigation()}formatTitle(n){return n.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}getMenuItems(n){return Object.entries(n).map(([t,r])=>({key:t,value:r}))}logout(){this.authService.logout(),this.router.navigate(["/login"])}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}closeMenu(){this.isMenuOpen=!1}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["nav-sidebar"]],decls:24,vars:8,consts:[[1,"bg-blue-950","text-white","p-6","pb-6","flex","flex-col","w-full","lg:h-full","min-h-screen"],[1,"flex","flex-row","justify-between","items-center"],[1,"flex","items-center"],["viewBox","0 0 360 360","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6","ml-2","mr-2",2,"fill","white"],["d","M197.802 229.09L156.175 240.173L123.445 118.802L165.072 107.719C178.198 104.225 190.221 103.721 201.141 106.209C212.199 108.46 221.584 113.455 229.298 121.193C237.149 128.694 242.759 138.69 246.127 151.181C249.446 163.486 249.618 174.93 246.643 185.514C243.857 196.047 238.267 205.128 229.874 212.758C221.618 220.152 210.927 225.596 197.802 229.09Z",1,"bg-white"],["fill-rule","evenodd","clip-rule","evenodd","d","M123.886 339.499L218.716 314.251C250.511 305.786 276.936 292.371 297.991 274.007C318.971 255.366 333.383 233.43 341.227 208.198C348.996 182.69 348.924 155.264 341.011 125.919C333.023 96.2984 319.284 72.5108 299.795 54.5565C280.306 36.6022 256.823 24.9034 229.348 19.46C201.799 13.7397 172.126 15.1123 140.331 23.5776L45.5008 48.8254C32.1265 52.3862 25.4393 54.1667 21.0284 58.113C17.1485 61.5842 14.4741 66.1869 13.3886 71.2612C12.1546 77.03 13.9464 83.6746 17.5301 96.9638L75.4388 311.706C79.0225 324.995 80.8143 331.64 84.7859 336.023C88.2794 339.878 92.9115 342.535 98.0184 343.614C103.824 344.84 110.511 343.06 123.886 339.499ZM67.8505 93.7391L120.64 289.499L210.082 265.686C231.458 259.994 249.222 250.969 263.373 238.609C277.474 226.062 287.158 211.295 292.424 194.306C297.64 177.131 297.584 158.663 292.254 138.9C286.875 118.952 277.63 102.929 264.521 90.8332C251.412 78.7373 235.619 70.8526 217.144 67.179C198.619 63.3191 178.668 64.2347 157.292 69.9259L67.8505 93.7391Z"],[1,"text-xl","font-bold"],[1,"lg:hidden","p-2","rounded","h-min","hover:bg-blue-900","opacity-75","hover:opacity-100","transition-all",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6","text-white"],["stroke-linecap","round","stroke-linejoin","round","d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"],[1,"hidden","lg:block","-m-1","p-2","rounded","h-min","hover:bg-blue-900","opacity-75","hover:opacity-100","transition-all",3,"click"],["icon","logout",3,"strokeWidth"],[1,"lg:flex","flex-col","overflow-y-auto","pt-6","h-full"],[1,"my-0"],[1,"mb-4"],[1,"flex","flex-col","gap-1","mt-auto"],[1,"border-t-2","opacity-25"],[1,"flex","items-center","gap-2","p-1","rounded","w-full","opacity-75","select-none","hover:bg-blue-900","hover:opacity-100","transition-all"],["icon","settings",3,"strokeWidth"],[1,"flex","items-center","gap-3","p-2","rounded","w-full","opacity-75","select-none"],["icon","coreBrand",3,"strokeWidth","class"],["icon","brandVoice",3,"strokeWidth","class"],["icon","visualIdentity",3,"strokeWidth","class"],["icon","appImpl",3,"strokeWidth","class"],[1,"pl-7","mt-0"],["icon","coreBrand",3,"strokeWidth"],["icon","brandVoice",3,"strokeWidth"],["icon","visualIdentity",3,"strokeWidth"],["icon","appImpl",3,"strokeWidth"],["routerLinkActive","font-bold",1,"flex","items-center","p-2","rounded","w-full","text-sm","opacity-50","select-none","hover:bg-blue-900","hover:opacity-100","transition-all",3,"click","routerLink"],[1,"flex","w-full","align-middle","justify-between"],["icon","check",3,"strokeWidth","class"],[1,"-m-1","font-medium","py-2","px-2","rounded-full","text-white","border","border-white","opacity-50","w-36"],["icon","check",3,"strokeWidth"],[1,"text-xs","font-normal","leading-none","flex-initial"]],template:function(t,r){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),I(),i(3,"svg",3),l(4,"path",4)(5,"path",5),o(),N(),i(6,"span",6),s(7,"Daden Platform"),o()(),i(8,"button",7),b("click",function(){return r.toggleMenu()}),I(),i(9,"svg",8),l(10,"path",9),o()(),N(),i(11,"button",10),b("click",function(){return r.logout()}),l(12,"daden-icon",11),o()(),i(13,"div",12)(14,"nav")(15,"ul",13),R(16,Se,10,2,"li",14,D),o()(),i(18,"div",15),l(19,"div",16),i(20,"button",17),l(21,"daden-icon",18),i(22,"p"),s(23,"Settings"),o()()()()()),t&2&&(a(12),d("size-6 text-white"),m("strokeWidth",1.5),a(),G("hidden",!r.isMenuOpen),a(3),F(r.categories()),a(5),d("size-4 mx-1"),m("strokeWidth",1.5))},dependencies:[$,ee,y],encapsulation:2})};var A=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["aside-previews"]],decls:26,vars:3,consts:[[1,"bg-blue-950","text-white","p-6","w-full"],[1,"flex","items-start","justify-between","mb-8"],[1,"flex","flex-col","justify-between"],[1,"text-lg","font-bold"],[1,"text-sm"],[1,"hidden","lg:block","-m-1","p-2","rounded","h-min","hover:bg-blue-900","opacity-75","hover:opacity-100","transition-all"],["icon","filter",3,"strokeWidth"],[1,"space-y-4"],[1,"bg-white","text-black","p-4","rounded-lg","shadow"],[1,"font-bold","mb-2"],[1,"w-full","bg-gray-200","rounded","overflow-hidden","relative",2,"padding-top","56.25%"],["src",w`/assets/preview-blog.html`,"frameborder","0",1,"absolute","top-0","left-0",2,"width","960px","height","540px","transform","scale(0.3)","transform-origin","top left"],["src",w`/assets/preview-webshop.html`,"frameborder","0",1,"absolute","top-0","left-0",2,"width","960px","height","540px","transform","scale(0.3)","transform-origin","top left"],["src",w`/assets/preview-print.html`,"frameborder","0",1,"absolute","top-0","left-0",2,"width","960px","height","1920px","transform","scale(0.1)","transform-origin","top left"]],template:function(t,r){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),s(4,"Live Previews"),o(),i(5,"p",4),s(6,"Preview your design in different contexts."),o()(),i(7,"div")(8,"button",5),l(9,"daden-icon",6),o()()(),i(10,"div",7)(11,"div",8)(12,"h4",9),s(13,"Blog"),o(),i(14,"div",10),l(15,"iframe",11),o()(),i(16,"div",8)(17,"h4",9),s(18,"Webshop"),o(),i(19,"div",10),l(20,"iframe",12),o()(),i(21,"div",8)(22,"h4",9),s(23,"Print"),o(),i(24,"div",10),l(25,"iframe",13),o()()()()),t&2&&(a(9),d("size-6 text-white"),m("strokeWidth",1.5))},dependencies:[y],encapsulation:2})};function ke(e,n){e&1&&l(0,"nav-sidebar",1)}function Me(e,n){e&1&&l(0,"daden-loading")}function Le(e,n){e&1&&l(0,"router-outlet")}function Ae(e,n){e&1&&l(0,"aside-previews",1)}var T=class e{authService=C(c);title="ProjectDaden";isLoading=!1;isLoggedIn(){return this.authService.isLoggedIn()}loadData(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},2e3)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=u({type:e,selectors:[["app-root"]],decls:7,vars:3,consts:[[1,"flex","flex-col","lg:flex-row","lg:max-h-screen"],[1,"flex"],[1,"flex-1","min-h-screen","bg-blue-50","overflow-y-auto"],[1,""]],template:function(t,r){t&1&&(i(0,"div",0),f(1,ke,1,0,"nav-sidebar",1),i(2,"div",2)(3,"div",3),f(4,Me,1,0,"daden-loading")(5,Le,1,0,"router-outlet"),o()(),f(6,Ae,1,0,"aside-previews",1),o()),t&2&&(a(),g(r.isLoggedIn()?1:-1),a(3),g(r.isLoading?4:5),a(2),g(r.isLoggedIn()?6:-1))},dependencies:[X,L,A,de],encapsulation:2})};Q(T,ue).catch(e=>console.error(e));
