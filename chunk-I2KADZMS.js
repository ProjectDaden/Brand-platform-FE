import{a as v,b}from"./chunk-HO533T42.js";import{M as r,Q as h,Sa as y,Y as l,ea as e,fa as t,ga as u,ia as p,ma as n,na as f,oa as m}from"./chunk-M7O4YHAS.js";var g=class c{formality=50;playfulness=50;respect=50;emotion=50;constructor(){}ngOnInit(){this.setInitialToneFromPersonality()}handleSliderChange(i,s){let a=i.target.valueAsNumber;switch(s){case"formality":this.formality=a;break;case"playfulness":this.playfulness=a;break;case"respect":this.respect=a;break;case"emotion":this.emotion=a;break}}setInitialToneFromPersonality(){switch(this.getPersonalityFromBrandValues()){case"Jester":this.formality=20,this.playfulness=80,this.respect=40,this.emotion=60;break;case"Sage":this.formality=80,this.playfulness=20,this.respect=90,this.emotion=40;break;case"Creator":this.formality=50,this.playfulness=60,this.respect=70,this.emotion=70;break;default:break}}getTonePreview(){let i="Welcome to our brand! ";return this.formality<30?i+="Hey, we\u2019re super chill and laid-back. ":this.formality>70?i+="We are delighted to present our professional services. ":i+="We\u2019re glad you\u2019re here with us. ",this.playfulness>70?i+="Ready for some fun and wacky adventures? ":this.playfulness<30?i+="Let\u2019s get straight to the point. ":i+="Let\u2019s dive in and see what\u2019s up! ",this.respect<30?i+="Rules? Who needs \u2018em! ":this.respect>70?i+="We honor your presence with the utmost respect. ":i+="We\u2019re cool with you, no worries. ",this.emotion>70?i+="OMG, we\u2019re SO excited to meet you!!!":this.emotion<30?i+="Here\u2019s the info you need.":i+="We\u2019re happy to share this with you!",i}getPersonalityFromBrandValues(){return"Jester"}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=h({type:c,selectors:[["app-voice-and-tone"]],decls:68,vars:9,consts:[[1,"flex-grow","bg-blue-50","text-blue-950","max-h-screen","overflow-y-auto"],[1,"m-auto","max-w-screen-md","p-8"],[1,"py-6"],[1,"bg-white","p-6","rounded-xl","shadow-md"],[1,"text-xl","font-semibold"],[1,"text-sm","opacity-75","mb-4"],[1,"grid","grid-cols-1","gap-6"],[1,"block","text-sm","font-medium","mb-2"],["type","range","min","0","max","100",1,"w-full","h-2","bg-blue-200","rounded-lg","appearance-none","cursor-pointer",3,"input","value"],[1,"flex","justify-between","text-sm","opacity-50","mt-1"],[1,"text-sm","opacity-50","mt-1"],[1,"text-sm","opacity-50","mt-4"],[1,"p-4","bg-blue-50","rounded-lg"],[1,"text-base","leading-relaxed"],[1,"pb-8","flex","justify-end","gap-2"]],template:function(s,a){s&1&&(e(0,"div",0)(1,"div",1),u(2,"daden-header"),e(3,"section",2)(4,"div",3)(5,"h2",4),n(6,"Set Your Tone"),t(),e(7,"p",5),n(8,"Adjust the sliders to craft your brand\u2019s unique voice."),t(),e(9,"div",6)(10,"div")(11,"label",7),n(12,"Formality (Casual to Professional)"),t(),e(13,"input",8),p("input",function(o){return a.handleSliderChange(o,"formality")}),t(),e(14,"div",9)(15,"span"),n(16,"Casual"),t(),e(17,"span"),n(18,"Professional"),t()(),e(19,"p",10),n(20),t()(),e(21,"div")(22,"label",7),n(23,"Playfulness (Serious to Playful)"),t(),e(24,"input",8),p("input",function(o){return a.handleSliderChange(o,"playfulness")}),t(),e(25,"div",9)(26,"span"),n(27,"Serious"),t(),e(28,"span"),n(29,"Playful"),t()(),e(30,"p",10),n(31),t()(),e(32,"div")(33,"label",7),n(34,"Respect (Respectful to Irreverent)"),t(),e(35,"input",8),p("input",function(o){return a.handleSliderChange(o,"respect")}),t(),e(36,"div",9)(37,"span"),n(38,"Respectful"),t(),e(39,"span"),n(40,"Irreverent"),t()(),e(41,"p",10),n(42),t()(),e(43,"div")(44,"label",7),n(45,"Emotion (Matter-of-Fact to Enthusiastic)"),t(),e(46,"input",8),p("input",function(o){return a.handleSliderChange(o,"emotion")}),t(),e(47,"div",9)(48,"span"),n(49,"Matter-of-Fact"),t(),e(50,"span"),n(51,"Enthusiastic"),t()(),e(52,"p",10),n(53),t()()(),e(54,"p",11),n(55,"These settings will influence your brand\u2019s copywriting and style guide."),t()()(),e(56,"section",2)(57,"div",3)(58,"h2",4),n(59,"Tone Preview"),t(),e(60,"p",5),n(61,"See how your tone settings adjust the way your brand communicates."),t(),e(62,"div",12)(63,"p",13),n(64),t()()()(),e(65,"div",14),u(66,"daden-reset-button")(67,"daden-save-button"),t()()()),s&2&&(r(13),l("value",a.formality),r(7),m("Current: ",a.formality,"%"),r(4),l("value",a.playfulness),r(7),m("Current: ",a.playfulness,"%"),r(4),l("value",a.respect),r(7),m("Current: ",a.respect,"%"),r(4),l("value",a.emotion),r(7),m("Current: ",a.emotion,"%"),r(11),f(a.getTonePreview()))},dependencies:[y,v,b],styles:["input[type=range][_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;width:100%;height:8px;background:#dbeafe;border-radius:5px;outline:none;opacity:.7;transition:opacity .2s}input[type=range][_ngcontent-%COMP%]:hover{opacity:1}input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#2563eb;border-radius:50%;cursor:pointer}input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{width:20px;height:20px;background:#2563eb;border-radius:50%;cursor:pointer}"]})};export{g as VoiceAndToneComponent};
