import{a as b}from"./chunk-PQKK374U.js";import"./chunk-7RB63EPK.js";import{d as f,e as h,f as v}from"./chunk-7ZW4HTZP.js";import{M as l,Q as p,Va as c,Xa as g,Y as u,ea as e,fa as t,ga as n,ia as d,na as i,oa as a}from"./chunk-3CJ2HAFY.js";var y=class m{problem="";solution="";selectedBenefit="";benefitOptions=["unmatched quality","endless joy","total convenience","game-changing innovation","timeless value","pure excitement","effortless solutions","trusted reliability","bold creativity","authentic connection"];constructor(){}ngOnInit(){this.problem="boring days",this.solution="exciting solutions",this.selectedBenefit="endless joy"}handleBenefitSelection(r){this.selectedBenefit=r}updateMessaging(){}getMessagingData(){return{problem:this.problem,solution:this.solution,benefit:this.selectedBenefit}}static \u0275fac=function(s){return new(s||m)};static \u0275cmp=p({type:m,selectors:[["app-section-messaging"]],decls:31,vars:5,consts:[["id","messaging"],["title","Craft Your Messaging","subtitle","Fill in the blanks to create a concise brand message."],[1,"flex","flex-col","gap-6"],["label","What do you solve?"],["type","text","placeholder","e.g., boring days",1,"w-full","p-3","border","border-blue-200","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-blue-500"],["text","Define the problem you address."],["label","How do you solve it?"],["type","text","placeholder","Define the solution your product offers.",1,"w-full","p-3","border","border-blue-200","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-blue-500",3,"input"],["text","Define the problem you address and your solution."],["label","Differentiator (Benefit)"],[1,"w-full",3,"selectedValue","items","placeholder"],["text","Choose what sets your brand apart."],["id","messaging-preview"],["title","Messaging Preview","subtitle","See how your message comes together."],[1,"p-4","bg-blue-50","rounded-lg"],[1,"text-base","leading-relaxed"],[1,"font-bold"]],template:function(s,o){s&1&&(n(0,"daden-header"),e(1,"section",0),n(2,"daden-group-header",1),e(3,"div",2)(4,"div"),n(5,"daden-label",3)(6,"input",4)(7,"daden-detail",5),t(),e(8,"div"),n(9,"daden-label",6),e(10,"input",7),d("input",function(){return o.updateMessaging()}),t(),n(11,"daden-detail",8),t(),e(12,"div"),n(13,"daden-label",9),e(14,"daden-dropdown",10),d("selectedValue",function(S){return o.handleBenefitSelection(S)}),t(),n(15,"daden-detail",11),t()()(),e(16,"section",12),n(17,"daden-group-header",13),e(18,"div",14)(19,"p",15),i(20," We solve "),e(21,"span",16),i(22),t(),i(23," with "),e(24,"span",16),i(25),t(),i(26,", delivering "),e(27,"span",16),i(28),t(),i(29,". "),t()()(),n(30,"daden-page-footer")),s&2&&(l(14),u("items",o.benefitOptions)("placeholder","Select a benefit..."),l(8),a(o.problem||"[problem]"),l(3),a(o.solution||"[solution]"),l(3),a(o.selectedBenefit||"[benefit]"))},dependencies:[c,g,b,f,h,v],styles:["input[type=text][_ngcontent-%COMP%]{transition:border-color .2s,box-shadow .2s}input[type=text][_ngcontent-%COMP%]:focus{border-color:#2563eb;box-shadow:0 0 0 2px #2563eb33}"]})};export{y as SectionMessagingComponent};
