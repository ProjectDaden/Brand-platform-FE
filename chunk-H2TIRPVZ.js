import{a as g}from"./chunk-AFEQCEXE.js";import{B as n,H as l,I as s,Wa as m,Xa as u,Z as r,n as i}from"./chunk-SANATFKZ.js";var p=class a{brandColorThemeService=i(g);sliderValue=50;onSliderChange(e){console.log("Slider Value:",e)}slides=["/assets/image1.jpg","/assets/image2.jpg","/assets/image3.jpg"];isLoading=!0;totalItems=100;itemsPerPage=10;tableData=n([{name:"John",age:25,country:"USA",mijnKlets:"Klets"},{name:"Anna",age:22,country:"Canada",mijnKlets:"Klets2"},{name:"Mike",age:30,country:"UK",mijnKlets:"Klets3"}]);inputValue=l("");onInputValueChange(e){let o=e.target.value;this.inputValue.set(o)}tableColumns=n(["Name","Age","Country","Mijn Klets"]);additionalContext=n({showAge:!0});get currentThemes(){return this.brandColorThemeService.colorPaletteCollection.genericSignalCollection()}onPageChange(e){console.log("Current Page:",e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=s({type:a,selectors:[["app-socialmedia-styleguide"]],inputs:{inputValue:[1,"inputValue"]},outputs:{inputValue:"inputValueChange"},decls:2,vars:0,template:function(t,o){t&1&&r(0,"daden-header")(1,"daden-page-footer")},dependencies:[m,u],encapsulation:2})};export{p as SocialmediaStyleguideComponent};
