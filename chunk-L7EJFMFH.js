import{a as Ce}from"./chunk-XX7O2HN4.js";import{a as ue,b as ce,e as ge,g as fe,h as he}from"./chunk-XDJY5CAQ.js";import{a as be}from"./chunk-DNL6S45D.js";import{d as se,h as me,i as de,j as pe,k as M}from"./chunk-74SSCY4P.js";import{a as ve}from"./chunk-ROQI7XKC.js";import{$ as y,$a as e,Ca as Y,Da as L,Eb as re,Fa as T,Ia as v,Na as C,Ta as d,Ua as V,Va as $,Wa as K,Xa as k,Ya as X,Za as x,_ as S,_a as _,aa as g,ab as t,ba as f,bb as s,cb as q,db as Q,eb as ee,fb as te,gb as h,h as z,hb as w,ib as H,ka as N,la as u,mb as ne,na as E,nb as l,ob as b,pb as ie,qb as ae,rb as D,sb as B,tb as j,va as F,vb as Z,wb as le,xb as oe,ya as r,z as J}from"./chunk-6AYAJPGA.js";var xe=(o,a)=>({$implicit:o,context:a});function _e(o,a){if(o&1&&(q(0),e(1,"th",1),l(2),t(),Q()),o&2){let i=a.$implicit;r(2),b(i)}}function we(o,a){o&1&&ee(0)}function Ee(o,a){if(o&1&&C(0,we,1,0,"ng-container",2),o&2){let i=a.$implicit,n=w();d("ngTemplateOutlet",n.rowTemplate())("ngTemplateOutletContext",le(2,xe,i,n.context()))}}var U=class o{data=u([]);columns=u([]);rowTemplate=u(null);context=u({});static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["app-daden-table"]],inputs:{data:[1,"data"],columns:[1,"columns"],rowTemplate:[1,"rowTemplate"],context:[1,"context"]},decls:8,vars:0,consts:[[1,"table-auto","w-full"],[1,"px-4","py-2"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(e(0,"table",0)(1,"thead")(2,"tr"),x(3,_e,3,1,"ng-container",null,k),t()(),e(5,"tbody"),x(6,Ee,1,5,"ng-container",null,k),t()()),i&2&&(r(3),_(n.columns()),r(3),_(n.data()))},dependencies:[M,pe],encapsulation:2})};function Te(o,a){if(o&1&&s(0,"img",6),o&2){let i=w();d("src",i.imageUrl(),F)}}function Me(o,a){if(o&1&&(e(0,"span",9),l(1),t()),o&2){let i=a.$implicit;r(),b(i)}}function Pe(o,a){if(o&1&&(e(0,"div",7),C(1,Me,2,1,"span",8),t()),o&2){let i=w();r(),d("ngForOf",i.tags())}}var A=class o{title=u("Default Title");description=u("Default description");imageUrl=u("");tags=u([]);constructor(){}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["app-daden-card"]],inputs:{title:[1,"title"],description:[1,"description"],imageUrl:[1,"imageUrl"],tags:[1,"tags"]},decls:8,vars:4,consts:[[1,"max-w-sm","rounded-md","overflow-hidden","shadow-md","hover:shadow-xl","transition-all","bg-white"],["class","w-full max-h-40 object-cover","alt","Card image",3,"src",4,"ngIf"],[1,"flex","flex-col","p-4"],[1,"font-bold","text-xl"],[1,"text-gray-700","text-base"],["class","flex flex-wrap gap-2 mt-4",4,"ngIf"],["alt","Card image",1,"w-full","max-h-40","object-cover",3,"src"],[1,"flex","flex-wrap","gap-2","mt-4"],["class","inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700",4,"ngFor","ngForOf"],[1,"inline-block","bg-blue-200","rounded-full","px-3","py-1","text-sm","font-semibold","text-blue-700"]],template:function(i,n){i&1&&(e(0,"div",0),C(1,Te,1,1,"img",1),e(2,"div",2)(3,"h3",3),l(4),t(),e(5,"p",4),l(6),t(),C(7,Pe,2,1,"div",5),t()()),i&2&&(r(),d("ngIf",n.imageUrl()),r(3),b(n.title()),r(2),b(n.description()),r(),d("ngIf",n.tags().length>0))},dependencies:[M,me,de],encapsulation:2})};var O=class o{inputValue=T("");inputSubject=new z;ngOnInit(){this.inputSubject.pipe(J(300)).subscribe(a=>{console.log(a),this.inputValue.set(a)})}onInputChange(a){let n=a.target.value;this.inputSubject.next(n)}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["app-daden-input"]],inputs:{inputValue:[1,"inputValue"]},outputs:{inputValue:"inputValueChange"},decls:1,vars:0,consts:[["type","text","placeholder","Type something...",1,"border","px-4","py-2","rounded",3,"input"]],template:function(i,n){i&1&&(e(0,"input",0),h("input",function(c){return n.onInputChange(c)}),t())},encapsulation:2})};var G=class o{totalItems=u(100);itemsPerPage=u(10);pageChange=N();currentPage=E(1);totalPages=re(()=>Math.ceil(this.totalItems()/this.itemsPerPage()));goToPage(a){a<1||a>this.totalPages()||(this.currentPage.set(a),this.pageChange.emit(this.currentPage()))}nextPage(){this.goToPage(this.currentPage()+1)}prevPage(){this.goToPage(this.currentPage()-1)}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["daden-pagination"]],inputs:{totalItems:[1,"totalItems"],itemsPerPage:[1,"itemsPerPage"]},outputs:{pageChange:"pageChange"},decls:7,vars:4,consts:[[1,"flex","justify-between","items-center","mt-4"],[1,"bg-gray-600","text-white","font-medium","py-2","px-4","rounded","hover:bg-gray-500","transition","duration-200",3,"click","disabled"],[1,"text-gray-700"]],template:function(i,n){i&1&&(e(0,"div",0)(1,"button",1),h("click",function(){return n.prevPage()}),l(2," Previous "),t(),e(3,"span",2),l(4),t(),e(5,"button",1),h("click",function(){return n.nextPage()}),l(6," Next "),t()()),i&2&&(r(),d("disabled",n.currentPage()===1),r(3),ae(" Page ",n.currentPage()," of ",n.totalPages()," "),r(),d("disabled",n.currentPage()===n.totalPages()))},encapsulation:2})};function Ie(o,a){if(o&1&&(e(0,"div",2),s(1,"img",8),t()),o&2){let i=a.$implicit;r(),d("src",i,F)}}var W=class o{slides=u([]);currentSlideIndex=0;nextSlide(){this.currentSlideIndex=(this.currentSlideIndex+1)%this.slides().length}prevSlide(){this.currentSlideIndex=(this.currentSlideIndex-1+this.slides().length)%this.slides().length}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["daden-slider"]],inputs:{slides:[1,"slides"]},decls:10,vars:2,consts:[[1,"relative","w-full","overflow-hidden"],[1,"flex","transition-transform","duration-500","ease-in-out"],[1,"mx-6","max-w-fit","flex-shrink-0"],[1,"absolute","left-0","top-1/2","transform","-translate-y-1/2","p-2","h-10","w-10","rounded-full","bg-white","text-blue-900","shadow-md","hover:bg-blue-300","transition-all",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"],[1,"absolute","right-0","top-1/2","transform","-translate-y-1/2","p-2","h-10","w-10","rounded-full","bg-white","text-blue-900","shadow-md","hover:bg-blue-300","transition-all",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"],["alt","Slide",1,"w-full","h-full","my-auto","object-contain",3,"src"]],template:function(i,n){i&1&&(e(0,"div",0)(1,"div",1),x(2,Ie,2,1,"div",2,k),t(),e(4,"button",3),h("click",function(){return n.prevSlide()}),g(),e(5,"svg",4),s(6,"path",5),t()(),f(),e(7,"button",6),h("click",function(){return n.nextSlide()}),g(),e(8,"svg",4),s(9,"path",7),t()()()),i&2&&(r(),V("transform","translateX(-"+n.currentSlideIndex*100+"%)"),r(),_(n.slides()))},encapsulation:2})};var R=class o{min=u(0);max=u(100);step=u(1);value=T(50);valueChange=N();onSliderChange(a){let i=a.target,n=parseFloat(i.value);this.value.set(n),this.valueChange.emit(this.value())}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["daden-value-slider"]],inputs:{min:[1,"min"],max:[1,"max"],step:[1,"step"],value:[1,"value"]},outputs:{value:"valueChange",valueChange:"valueChange"},decls:7,vars:5,consts:[[1,"flex","flex-row","items-baseline","gap-4"],["type","range",1,"w-full","h-2","rounded-lg","cursor-pointer","flex-1","text-blue-900","bg-blue-900","border-l-blue-900","outline-none",3,"input","min","max","step","value"],[1,"mt-2","text-blue-900","w-20"],[1,"font-semibold"],[1,""]],template:function(i,n){i&1&&(e(0,"div",0)(1,"input",1),h("input",function(c){return n.onSliderChange(c)}),t(),e(2,"div",2)(3,"span",3),l(4,"Value: "),t(),e(5,"span",4),l(6),t()()()),i&2&&(r(),H("min",n.min()),H("max",n.max()),H("step",n.step()),d("value",n.value()),r(5),b(n.value()))},encapsulation:2})};var Ve=()=>["added","tags","to","dynamic","Card","with","flex-wrap"],ke=()=>["Feature","Angular","Card"];function De(o,a){if(o&1&&(e(0,"td",62),l(1),t()),o&2){let i=w().$implicit;r(),b(i.age)}}function Be(o,a){if(o&1&&(e(0,"tr")(1,"td",62),l(2),t(),C(3,De,2,1,"td",62),e(4,"td",62),l(5),t(),e(6,"td",62),l(7),t()()),o&2){let i=a.$implicit,n=a.context;r(2),b(i.name),r(),K(n.showAge?3:-1),r(2),b(i.country),r(2),b(i.mijnKlets)}}function je(o,a){if(o&1&&(e(0,"li"),l(1),t()),o&2){let i=a.$implicit;r(),b(i)}}function Ne(o,a){o&1&&s(0,"daden-loading")}var Se=class o{constructor(a,i,n){this.renderer=a;this.document=i;this.brandColorThemeService=n}ngOnInit(){this.selectedPersonality=this.getPersonalityFromBrandValues(),this.loadSynonymsBasedOnPersonality(this.selectedPersonality)}personalityOptions=["Hero","Caregiver","Explorer","Creator","Innocent","Sage","Jester","Magician","Rebel","Ruler","Everyman","Lover"];selectedPersonality="";taglineUsed="no";tagline="";synonymOptions=[];selectedHeadingFont="";selectedBodyFont="";handlePersonalitySelection(a){this.selectedPersonality=a,this.loadSynonymsBasedOnPersonality(a)}loadSynonymsBasedOnPersonality(a){let i,n,p;switch(a){case"Jester":i=["Playful","Witty","Fun"],n=["Bangers","Fredoka One","Luckiest Guy"],p=["Comic Neue","Roboto","Open Sans"];break;case"Creator":i=["Innovative","Creative","Visionary"],n=["Montserrat","Playfair Display","Raleway"],p=["Lato","Source Sans Pro","Poppins"];break;default:i=["Versatile","Standard","Default"],n=["Roboto","Arial","Helvetica"],p=["Open Sans","Lora","Merriweather"]}this.synonymOptions=i,this.selectedHeadingFont=n[0],this.selectedBodyFont=p[0];let c=[...new Set([...n,...p])];this.loadGoogleFonts(c)}loadGoogleFonts(a){let i=this.document.getElementById("google-fonts-link");i&&this.renderer.removeChild(this.document.head,i);let p=`https://fonts.googleapis.com/css2?${a.map(m=>`family=${encodeURIComponent(m)}:wght@400;700`).join("&")}&display=swap`,c=this.renderer.createElement("link");this.renderer.setAttribute(c,"id","google-fonts-link"),this.renderer.setAttribute(c,"rel","stylesheet"),this.renderer.setAttribute(c,"href",p),this.renderer.appendChild(this.document.head,c)}getPersonalityFromBrandValues(){return"Jester"}get taglineOutput(){return{taglineUsed:this.taglineUsed==="yes",tagline:this.tagline}}sliderValue=50;onSliderChange(a){console.log("Slider Value:",a)}slides=["/assets/image1.jpg","/assets/image2.jpg","/assets/image3.jpg"];isLoading=!0;totalItems=100;itemsPerPage=10;tableData=E([{name:"John",age:25,country:"USA",mijnKlets:"Klets"},{name:"Anna",age:22,country:"Canada",mijnKlets:"Klets2"},{name:"Mike",age:30,country:"UK",mijnKlets:"Klets3"}]);inputValue=T("");onInputValueChange(a){let n=a.target.value;this.inputValue.set(n)}tableColumns=E(["Name","Age","Country","Mijn Klets"]);additionalContext=E({showAge:!0});get currentThemes(){return this.brandColorThemeService.colorPaletteCollection.genericSignalCollection()}onPageChange(a){console.log("Current Page:",a)}static \u0275fac=function(i){return new(i||o)(L(Y),L(se),L(be))};static \u0275cmp=v({type:o,selectors:[["app-brand-name-tagline"]],inputs:{inputValue:[1,"inputValue"]},outputs:{inputValue:"inputValueChange"},decls:161,vars:38,consts:[["rowTemplate",""],[1,"flex-grow","bg-blue-50","text-blue-950","max-h-screen","overflow-y-auto"],[1,"m-auto","max-w-screen-md","p-8"],[1,"text-center"],[1,"text-4xl","font-bold","text-blue-900"],[1,"text-lg","italic","mb-8","opacity-75"],[1,"py-6"],[1,"bg-white","p-6","rounded-xl","shadow-md"],[1,"text-xl","font-semibold","mb-4"],[1,"text-sm","opacity-75","mb-6"],[1,"grid","grid-cols-1","gap-6"],["for","personality",1,"block","text-sm","font-medium","mb-2"],["id","personality",1,"w-full",3,"selectedValue","items","placeholder"],[1,"text-sm","opacity-50","mt-1"],["for","synonyms",1,"block","text-sm","font-medium","mb-2"],["id","synonyms",1,"w-full",3,"items","placeholder"],[1,"block","text-sm","font-medium","mb-2"],[1,"flex","flex-col","gap-2","sm:flex-row","sm:gap-6"],[1,"flex","items-center"],["type","radio","name","taglineUsed","value","yes",1,"mr-2","focus:ring-blue-500",3,"ngModelChange","ngModel"],["type","radio","name","taglineUsed","value","no",1,"mr-2","focus:ring-blue-500",3,"ngModelChange","ngModel"],["for","tagline",1,"block","text-sm","font-medium","mb-2"],["id","tagline","type","text","placeholder","Enter your tagline...",1,"w-full","p-2","border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"ngModelChange","ngModel","disabled"],[1,"text-sm","opacity-75","mb-4"],[1,"p-4","bg-blue-50","rounded-lg","text-center"],[1,"text-4xl","font-bold","mb-2"],[1,"text-lg","italic"],[1,"pb-8","flex","justify-end"],[1,"bg-blue-600","text-white","px-6","py-2","rounded","hover:bg-blue-700","transition-all","focus:outline-none","focus:ring-2","focus:ring-blue-500"],[1,"text-3xl","font-bold"],[1,"text-m","italic","mb-8","opacity-75"],[3,"data","columns","rowTemplate","context"],[3,"valueChange"],[3,"title","description","tags"],[3,"title","description","imageUrl","tags"],[3,"title","description"],[2,"margin","30px"],[1,"bg-blue-50"],[3,"pageChange","totalItems","itemsPerPage"],[3,"slides"],[3,"valueChange","min","max","step","value"],[1,"flex","flex-wrap","gap-4","items-center","justify-start","p-6"],[1,"flex","flex-col","items-center","justify-center","rounded-full","hover:bg-blue-100","w-16","h-16"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6","text-blue-900"],["stroke-linecap","round","stroke-linejoin","round","d","m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"],[1,"mt-2","text-xs","text-blue-900","select-none"],["stroke-linecap","round","stroke-linejoin","round","d","M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["stroke-linecap","round","stroke-linejoin","round","d","M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["stroke-linecap","round","stroke-linejoin","round","d","M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"],["stroke-linecap","round","stroke-linejoin","round","d","M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"],[1,"flex","flex-col","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],[1,"mt-2","text-gray-700"],["stroke-linecap","round","stroke-linejoin","round","d","m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"],["stroke-linecap","round","stroke-linejoin","round","d","M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"],["stroke-linecap","round","stroke-linejoin","round","d","M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 0 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"],["stroke-linecap","round","stroke-linejoin","round","d","M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"],["stroke-linecap","round","stroke-linejoin","round","d","M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"],["stroke-linecap","round","stroke-linejoin","round","d","M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"],["stroke-linecap","round","stroke-linejoin","round","d","M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"],["stroke-linecap","round","stroke-linejoin","round","d","M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"],[1,"border","px-4","py-2"]],template:function(i,n){if(i&1){let p=te();e(0,"div",1)(1,"div",2)(2,"header",3)(3,"h1",4),l(4,"Brand Name & Tagline"),t(),e(5,"p",5),l(6,"Define Your Brand\u2019s Identity"),t()(),e(7,"section",6)(8,"div",7)(9,"h2",8),l(10,"Set Your Tagline"),t(),e(11,"p",9),l(12,"Craft a tagline that reflects your brand\u2019s essence."),t(),e(13,"div",10)(14,"div")(15,"label",11),l(16,"Personality"),t(),e(17,"daden-dropdown",12),h("selectedValue",function(m){return S(p),y(n.handlePersonalitySelection(m))}),t(),e(18,"p",13),l(19,"Choose a personality to align your tagline synonyms."),t()(),e(20,"div")(21,"label",14),l(22,"Thesaurus"),t(),s(23,"daden-dropdown",15),e(24,"p",13),l(25,"Pick a keyword to inspire your tagline."),t()(),e(26,"div")(27,"label",16),l(28,"Use a Tagline?"),t(),e(29,"div",17)(30,"label",18)(31,"input",19),j("ngModelChange",function(m){return S(p),B(n.taglineUsed,m)||(n.taglineUsed=m),y(m)}),t(),l(32," Yes "),t(),e(33,"label",18)(34,"input",20),j("ngModelChange",function(m){return S(p),B(n.taglineUsed,m)||(n.taglineUsed=m),y(m)}),t(),l(35," No "),t()(),e(36,"p",13),l(37,"Decide if your brand will use a tagline."),t()(),e(38,"div")(39,"label",21),l(40,"Tagline"),t(),e(41,"input",22),j("ngModelChange",function(m){return S(p),B(n.tagline,m)||(n.tagline=m),y(m)}),t(),e(42,"p",13),l(43,"Write a concise phrase that sums up your brand."),t()()()()(),e(44,"section",6)(45,"div",7)(46,"h2",8),l(47,"Tagline Preview"),t(),e(48,"p",23),l(49,"See how your tagline looks in action."),t(),e(50,"div",24)(51,"h1",25),l(52," Your Brand Name "),t(),e(53,"p",26),l(54),t()()()(),e(55,"div",27)(56,"button",28),l(57," Save & Continue "),t()(),e(58,"div",6)(59,"h1",29),l(60,"Brand name & tagline (Test Components)"),t(),e(61,"p",30),l(62,"Brand Identity and Tagline"),t(),s(63,"app-daden-table",31)(64,"br"),e(65,"app-daden-input",32),h("valueChange",function(m){return S(p),y(n.onInputValueChange(m))}),t(),s(66,"br"),C(67,Be,8,4,"ng-template",null,0,oe),s(69,"br")(70,"app-daden-card",33)(71,"br")(72,"app-daden-card",34)(73,"br")(74,"app-daden-card",35)(75,"br"),e(76,"div")(77,"h3"),l(78,"Current Color Themes:"),t(),e(79,"ul"),x(80,je,2,1,"li",null,X),t()(),e(82,"div",36),C(83,Ne,1,0,"daden-loading"),t(),e(84,"div",37)(85,"daden-pagination",38),h("pageChange",function(m){return S(p),y(n.onPageChange(m))}),t()(),e(86,"div",36),s(87,"daden-slider",39),t(),e(88,"daden-value-slider",40),j("valueChange",function(m){return S(p),B(n.sliderValue,m)||(n.sliderValue=m),y(m)}),h("valueChange",function(m){return S(p),y(n.onSliderChange(m))}),t(),e(89,"div",41)(90,"div",42),g(),e(91,"svg",43),s(92,"path",44),t(),f(),e(93,"span",45),l(94,"Home"),t()(),e(95,"div",42),g(),e(96,"svg",43),s(97,"path",46),t(),f(),e(98,"span",45),l(99,"User"),t()(),e(100,"div",42),g(),e(101,"svg",43),s(102,"path",47)(103,"path",48),t(),f(),e(104,"span",45),l(105,"Settings"),t()(),e(106,"div",42),g(),e(107,"svg",43),s(108,"path",49),t(),f(),e(109,"span",45),l(110,"Logout"),t()(),e(111,"div",42),g(),e(112,"svg",43),s(113,"path",50),t(),f(),e(114,"span",45),l(115,"Login"),t()(),e(116,"div",51),g(),e(117,"svg",52),s(118,"path",50),t(),f(),e(119,"span",53),l(120,"Login"),t()(),e(121,"div",42),g(),e(122,"svg",43),s(123,"path",54),t(),f(),e(124,"span",45),l(125,"Search"),t()(),e(126,"div",42),g(),e(127,"svg",43),s(128,"path",55),t(),f(),e(129,"span",45),l(130,"Filter"),t()(),e(131,"div",42),g(),e(132,"svg",43),s(133,"path",56),t(),f(),e(134,"span",45),l(135,"Adjust"),t()(),e(136,"div",42),g(),e(137,"svg",43),s(138,"path",57),t(),f(),e(139,"span",45),l(140,"Code"),t()(),e(141,"div",42),g(),e(142,"svg",43),s(143,"path",58),t(),f(),e(144,"span",45),l(145,"Cat. 1"),t()(),e(146,"div",42),g(),e(147,"svg",43),s(148,"path",59),t(),f(),e(149,"span",45),l(150,"Cat. 2"),t()(),e(151,"div",42),g(),e(152,"svg",43),s(153,"path",60),t(),f(),e(154,"span",45),l(155,"Cat. 3"),t()(),e(156,"div",42),g(),e(157,"svg",43),s(158,"path",61),t(),f(),e(159,"span",45),l(160,"Cat. 4"),t()()()()()()}if(i&2){let p=ne(68);r(17),d("items",n.personalityOptions)("placeholder","Select a personality..."),r(6),d("items",n.synonymOptions)("placeholder","Select a synonym..."),r(8),D("ngModel",n.taglineUsed),r(3),D("ngModel",n.taglineUsed),r(7),D("ngModel",n.tagline),d("disabled",n.taglineUsed==="no"),r(10),V("font-family",n.selectedHeadingFont+", sans-serif"),r(2),V("font-family",n.selectedBodyFont+", sans-serif"),$("opacity-50",n.taglineUsed==="no"||!n.tagline),r(),ie(" ",n.taglineUsed==="yes"&&n.tagline?n.tagline:"No tagline set"," "),r(9),d("data",n.tableData())("columns",n.tableColumns())("rowTemplate",p)("context",n.additionalContext()),r(7),d("title","Dynamic Card Title")("description","This is a dynamic description for the card.")("tags",Z(36,Ve)),r(2),d("title","Card with Image")("description","Made a boolean option to show image or not.")("imageUrl","/assets/black.png")("tags",Z(37,ke)),r(2),d("title","Card without image and tags")("description","This card has no image and tags."),r(6),_(n.currentThemes.industries),r(3),K(n.isLoading?83:-1),r(2),d("totalItems",n.totalItems)("itemsPerPage",n.itemsPerPage),r(2),d("slides",n.slides),r(),d("min",0)("max",100)("step",1),D("value",n.sliderValue)}},dependencies:[ve,he,ue,fe,ce,ge,M,U,A,O,Ce,G,W,R],encapsulation:2})};export{Se as BrandNameComponent};
