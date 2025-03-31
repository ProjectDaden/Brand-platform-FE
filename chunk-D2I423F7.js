import{a as h}from"./chunk-457JWEBI.js";import"./chunk-2HGNOL3V.js";import{a as g,b as u,c as b}from"./chunk-L2PXVBZ2.js";import{E as s,I as m,Wa as c,X as e,Xa as f,Y as t,Z as n,ba as p,ha as i,ia as l}from"./chunk-4N3ZHZ5D.js";var y=class r{problem="";solution="";selectedBenefit="";benefitOptions=["unmatched quality","endless joy","total convenience","game-changing innovation","timeless value","pure excitement","effortless solutions","trusted reliability","bold creativity","authentic connection"];constructor(){}ngOnInit(){this.problem="boring days",this.solution="exciting solutions",this.selectedBenefit="endless joy"}handleBenefitSelection(d){this.selectedBenefit=d}updateMessaging(){}getMessagingData(){return{problem:this.problem,solution:this.solution,benefit:this.selectedBenefit}}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=m({type:r,selectors:[["app-section-messaging"]],decls:30,vars:3,consts:[["id","messaging"],["title","Craft Your Messaging","subtitle","Fill in the blanks to create a concise brand message."],[1,"flex","flex-col","gap-6"],["label","What do you solve?"],["type","text","placeholder","e.g., boring days"],["text","Define the problem you address."],["label","How do you solve it?"],["type","text","placeholder","Define the solution your product offers.",3,"input"],["text","Define the problem you address and your solution."],["label","Why do you do it that way?"],["text","Choose what sets your brand apart."],["id","messaging-preview"],["title","Messaging Preview","subtitle","See how your message comes together."],[1,"p-4","bg-blue-50","rounded-lg"],[1,"text-base","leading-relaxed"],[1,"font-bold"]],template:function(o,a){o&1&&(n(0,"daden-header"),e(1,"section",0),n(2,"daden-group-header",1),e(3,"div",2)(4,"div"),n(5,"daden-label",3)(6,"daden-input",4)(7,"daden-detail",5),t(),e(8,"div"),n(9,"daden-label",6),e(10,"daden-input",7),p("input",function(){return a.updateMessaging()}),t(),n(11,"daden-detail",8),t(),e(12,"div"),n(13,"daden-label",9)(14,"daden-detail",10),t()()(),e(15,"section",11),n(16,"daden-group-header",12),e(17,"div",13)(18,"p",14),i(19," We solve "),e(20,"span",15),i(21),t(),i(22," with "),e(23,"span",15),i(24),t(),i(25,", delivering "),e(26,"span",15),i(27),t(),i(28,". "),t()()(),n(29,"daden-page-footer")),o&2&&(s(21),l(a.problem||"[problem]"),s(3),l(a.solution||"[solution]"),s(3),l(a.selectedBenefit||"[benefit]"))},dependencies:[c,f,u,b,g,h],styles:["input[type=text][_ngcontent-%COMP%]{transition:border-color .2s,box-shadow .2s}input[type=text][_ngcontent-%COMP%]:focus{border-color:#2563eb;box-shadow:0 0 0 2px #2563eb33}"]})};export{y as SectionMessagingComponent};
