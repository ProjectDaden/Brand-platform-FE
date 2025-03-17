import{a as T}from"./chunk-XGVV4JAY.js";import{k as E}from"./chunk-UVUV5ZFF.js";import{a as I,b as O}from"./chunk-HO533T42.js";import{Da as v,Ga as h,Ha as L,K as _,M as s,N as S,O as b,Q as C,Sa as w,V as p,Y as a,ea as t,fa as e,ga as u,ha as x,ia as d,ja as g,ma as n,x as y,y as f}from"./chunk-M7O4YHAS.js";function V(o,l){if(o&1){let i=x();t(0,"button",29),d("click",function(){y(i);let m=g();return f(m.clearLogo("primary"))}),n(1," Clear "),e()}}function k(o,l){if(o&1){let i=x();t(0,"button",29),d("click",function(){y(i);let m=g();return f(m.clearLogo("secondary"))}),n(1," Clear "),e()}}function M(o,l){if(o&1){let i=x();t(0,"button",29),d("click",function(){y(i);let m=g();return f(m.clearLogo("iconOnly"))}),n(1," Clear "),e()}}function D(o,l){if(o&1&&u(0,"img",30),o&2){let i=g();a("src",i.logos.primary,_)}}function j(o,l){o&1&&(t(0,"p",31),n(1,"No primary logo uploaded"),e())}function F(o,l){if(o&1&&u(0,"img",32),o&2){let i=g();a("src",i.logos.secondary,_)}}function R(o,l){o&1&&(t(0,"p",31),n(1,"No secondary logo uploaded"),e())}function N(o,l){if(o&1&&u(0,"img",33),o&2){let i=g();a("src",i.logos.iconOnly,_)}}function U(o,l){o&1&&(t(0,"p",31),n(1,"No icon-only logo uploaded"),e())}var P=class o{constructor(l,i){this.renderer=l;this.document=i}ngOnInit(){this.selectedPersonality=this.getPersonalityFromBrandValues()}personalityOptions=["Hero","Caregiver","Explorer","Creator","Innocent","Sage","Jester","Magician","Rebel","Ruler","Everyman","Lover"];selectedPersonality="";logos={primary:null,secondary:null,iconOnly:null};handlePersonalitySelection(l){this.selectedPersonality=l}onFileChange(l,i){let r=l.target;if(r.files&&r.files[0]){let m=r.files[0],c=new FileReader;c.onload=()=>{this.logos[i]=c.result},c.readAsDataURL(m)}}clearLogo(l){this.logos[l]=null;let i=this.document.getElementById(`${l}-upload`);i&&(i.value="")}getPersonalityFromBrandValues(){return"Jester"}get logoOutput(){return{primary:this.logos.primary,secondary:this.logos.secondary,iconOnly:this.logos.iconOnly}}static \u0275fac=function(i){return new(i||o)(b(S),b(v))};static \u0275cmp=C({type:o,selectors:[["app-section-logo"]],decls:67,vars:11,consts:[[1,"flex-grow","bg-blue-50","text-blue-950","max-h-screen","overflow-y-auto"],[1,"m-auto","max-w-screen-md","p-8"],[1,"py-6"],[1,"bg-white","p-6","rounded-xl","shadow-md"],[1,"text-xl","font-semibold","mb-4"],[1,"text-sm","opacity-75","mb-6"],[1,"grid","grid-cols-1","gap-6"],["for","personality",1,"block","text-sm","font-medium","mb-2"],["id","personality",1,"w-full",3,"selectedValue","items","placeholder"],[1,"text-sm","opacity-50","mt-1"],["for","primary-upload",1,"block","text-sm","font-medium","mb-2"],["id","primary-upload","type","file","accept","image/*",1,"w-full","p-2","border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"change"],["class","mt-2 text-sm text-red-600 hover:underline",3,"click",4,"ngIf"],["for","secondary-upload",1,"block","text-sm","font-medium","mb-2"],["id","secondary-upload","type","file","accept","image/*",1,"w-full","p-2","border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"change"],["for","icon-only-upload",1,"block","text-sm","font-medium","mb-2"],["id","icon-only-upload","type","file","accept","image/*",1,"w-full","p-2","border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"change"],[1,"mt-6"],[1,"text-lg","font-semibold","mb-2"],[1,"text-sm","opacity-75"],[1,"text-sm","opacity-75","mb-4"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-4"],[1,"text-center"],[1,"text-sm","font-medium","mb-2"],["alt","Primary Logo","class","w-full max-h-32 object-contain mx-auto",3,"src",4,"ngIf"],["class","text-sm opacity-50",4,"ngIf"],["alt","Secondary Logo","class","w-full max-h-32 object-contain mx-auto",3,"src",4,"ngIf"],["alt","Icon-Only Logo","class","w-full max-h-32 object-contain mx-auto",3,"src",4,"ngIf"],[1,"pb-8","flex","justify-end","gap-2"],[1,"mt-2","text-sm","text-red-600","hover:underline",3,"click"],["alt","Primary Logo",1,"w-full","max-h-32","object-contain","mx-auto",3,"src"],[1,"text-sm","opacity-50"],["alt","Secondary Logo",1,"w-full","max-h-32","object-contain","mx-auto",3,"src"],["alt","Icon-Only Logo",1,"w-full","max-h-32","object-contain","mx-auto",3,"src"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1),u(2,"daden-header"),t(3,"section",2)(4,"div",3)(5,"h2",4),n(6,"Upload Logo Variations"),e(),t(7,"p",5),n(8,"Add your primary, secondary, and icon-only logos."),e(),t(9,"div",6)(10,"div")(11,"label",7),n(12,"Personality"),e(),t(13,"daden-dropdown",8),d("selectedValue",function(c){return r.handlePersonalitySelection(c)}),e(),t(14,"p",9),n(15,"Provides context for your logo design."),e()(),t(16,"div")(17,"label",10),n(18,"Primary Logo"),e(),t(19,"input",11),d("change",function(c){return r.onFileChange(c,"primary")}),e(),p(20,V,2,0,"button",12),t(21,"p",9),n(22,"Your main brand logo."),e()(),t(23,"div")(24,"label",13),n(25,"Secondary Logo"),e(),t(26,"input",14),d("change",function(c){return r.onFileChange(c,"secondary")}),e(),p(27,k,2,0,"button",12),t(28,"p",9),n(29,"An alternative logo variation."),e()(),t(30,"div")(31,"label",15),n(32,"Icon-Only Logo"),e(),t(33,"input",16),d("change",function(c){return r.onFileChange(c,"iconOnly")}),e(),p(34,M,2,0,"button",12),t(35,"p",9),n(36,"A simplified icon version of your logo."),e()()(),t(37,"div",17)(38,"h3",18),n(39,"Logo Maker (Coming Soon)"),e(),t(40,"p",19),n(41,"Generate a logo based on your brand personality (feature not yet implemented)."),e()()()(),t(42,"section",2)(43,"div",3)(44,"h2",4),n(45,"Logo Preview"),e(),t(46,"p",20),n(47,"See how your logos look in context."),e(),t(48,"div",21)(49,"div",22)(50,"h3",23),n(51,"Primary"),e(),p(52,D,1,1,"img",24)(53,j,2,0,"p",25),e(),t(54,"div",22)(55,"h3",23),n(56,"Secondary"),e(),p(57,F,1,1,"img",26)(58,R,2,0,"p",25),e(),t(59,"div",22)(60,"h3",23),n(61,"Icon-Only"),e(),p(62,N,1,1,"img",27)(63,U,2,0,"p",25),e()()()(),t(64,"div",28),u(65,"daden-reset-button")(66,"daden-save-button"),e()()()),i&2&&(s(13),a("items",r.personalityOptions)("placeholder","Select a personality..."),s(7),a("ngIf",r.logos.primary),s(7),a("ngIf",r.logos.secondary),s(7),a("ngIf",r.logos.iconOnly),s(18),a("ngIf",r.logos.primary),s(),a("ngIf",!r.logos.primary),s(4),a("ngIf",r.logos.secondary),s(),a("ngIf",!r.logos.secondary),s(4),a("ngIf",r.logos.iconOnly),s(),a("ngIf",!r.logos.iconOnly))},dependencies:[w,I,O,T,E,L,h],styles:["img[_ngcontent-%COMP%]{transition:opacity .3s ease}img[_ngcontent-%COMP%]:hover{opacity:.9}input[type=file][_ngcontent-%COMP%]{display:block;width:100%}"]})};export{P as SectionLogoComponent};
