"use strict";(self.webpackChunksyahrul=self.webpackChunksyahrul||[]).push([[878],{9666:(Y,v,l)=>{l.r(v),l.d(v,{GradientModule:()=>Q});var d=l(9808),m=l(2268);function C(i,r){const n=(r.nativeElement.clientWidth-11)/100;let t=i-11-r.nativeElement.offsetLeft;return Math.ceil(t/n)>100?{x:r.nativeElement.clientWidth-11,value:100}:{x:t,value:Math.ceil(t/n)}}function _(i,r){let n,t;return window.TouchEvent?(n=i.targetTouches[0].pageX,t=i.targetTouches[0].pageY):(n=i.pageX,t=i.pageY),{x:(n-r.nativeElement.offsetLeft)/(r.nativeElement.clientWidth/100),y:(t-r.nativeElement.offsetTop)/(r.nativeElement.clientHeight/100)}}function f(i,r){[...r.nativeElement.querySelectorAll(i)].forEach(t=>{t.classList.remove("active")})}function y(i,r,n){const t=n.nativeElement.clientWidth;let o=[];if(r.find((c,a)=>i.x<=c[0]&&(o=a-1<0?[0,1]:[a-1,a],!0)),o[0]>=0){const s=t*(r[o[0]][0]/100);return k(r[o[1]][1],r[o[0]][1],(t*(i.x/100)-s)/(t*(r[o[1]][0]/100)-s))}return null}function P(i){return 1-i/100}function k(i,r,n){var c=((2*n-1)/1+1)/2,a=1-c,s=[Math.round(i[0]*c+r[0]*a),Math.round(i[1]*c+r[1]*a),Math.round(i[2]*c+r[2]*a)];return`#${x(s[0])}${x(s[1])}${x(s[2])}`}function x(i){var r=i.toString(16);return 1==r.length?"0"+r:r}function u(i){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function S(i,r){return"#"+i.replace(/^#/,"").replace(/../g,n=>("0"+Math.min(255,Math.max(0,parseInt(n,16)+r)).toString(16)).slice(-2))}const w=[[0,[255,0,0]],[17,[255,255,0]],[33,[0,255,0]],[50,[0,255,255]],[66,[0,0,255]],[83,[255,0,255]],[100,[255,0,0]]];var e=l(5e3),q=l(2313),Z=l(1279);const B=["gradientContainer"],D=["colorSelectionContainer"],I=["opacitySelectionContainer"],J=["pickerSelectionContainer"],T=function(i){return{transform:i}},h=function(i){return{active:i}},G=function(i){return{backgroundColor:i}};function R(i,r){if(1&i&&(e.TgZ(0,"div",80)(1,"div",81),e._UZ(2,"div",82),e.TgZ(3,"div",83),e._UZ(4,"input",84),e.qZA()()()),2&i){const n=r.$implicit;e.Q6J("ngStyle",e.VKq(5,T,"translateX("+n.x+"px)"))("ngClass",e.VKq(7,h,n.isActive)),e.uIk("data-id",n.id),e.xp6(2),e.Q6J("ngStyle",e.VKq(9,G,n.color)),e.xp6(2),e.s9C("value",n.value)}}function z(i,r){if(1&i){const n=e.EpF();e.TgZ(0,"div",85)(1,"div",86)(2,"div",87)(3,"div",88),e._UZ(4,"div",89),e.qZA()(),e.TgZ(5,"input",90),e.NdJ("change",function(o){return e.CHM(n),e.oxw().updateDegrees(o)}),e.qZA()()()}if(2&i){const n=e.oxw();e.xp6(3),e.Q6J("ngStyle",e.VKq(2,T,"translateZ(0px) rotate("+n.linearDegree+"deg)")),e.xp6(2),e.MGl("value","",n.linearDegree,"\xb0")}}function E(i,r){if(1&i){const n=e.EpF();e.TgZ(0,"div",91),e.NdJ("click",function(){const c=e.CHM(n).$implicit;return e.oxw().selectHandler(c.id)}),e.TgZ(1,"div",65)(2,"div",92),e._UZ(3,"div",93),e.qZA()(),e.TgZ(4,"div",66)(5,"div",94),e._UZ(6,"input",95),e.qZA()(),e.TgZ(7,"div",65)(8,"div",96),e._UZ(9,"input",95),e.qZA()(),e.TgZ(10,"div",97)(11,"div",98)(12,"button",78),e.NdJ("click",function(){const c=e.CHM(n).$implicit;return e.oxw().deleteHandler(c.id)}),e._uU(13,"\xd7"),e.qZA()()()()}if(2&i){const n=r.$implicit;e.Q6J("ngClass",e.VKq(5,h,n.isActive)),e.uIk("data-id",n.id),e.xp6(3),e.Q6J("ngStyle",e.VKq(7,G,n.color)),e.xp6(3),e.s9C("value",n.color),e.xp6(3),e.s9C("value",n.value)}}const g=function(i){return{background:i}},F=function(i,r){return{left:i,top:r}},A=function(i){return{left:i}},V=[{path:"",component:(()=>{class i{constructor(n,t,o,c){this.renderer=n,this.elem=t,this.detectChanges=o,this.titleService=c,this.userBaseColor="#0010ff",this.userSelectedColor="#0010ff",this.userSelectedColorPicker="#0010ff",this.userSelectedOpacityColor="#0010ff",this.userSelectedOpacityColorRGB={r:0,g:16,b:255},this.userSelectedColorPickerRGB={r:0,g:16,b:255},this.userSelectedOpacityValue=100,this.colorPosition=65,this.colorPickerPosition={x:100,y:0},this.opacityPosition=0,this.handlers=[],this.linearOptionActive=!0,this.linearDegree=90}ngOnInit(){this.titleService.setTitle("Syahrul - CSS Gradient Generator")}ngAfterViewInit(){this.initDefaultHandler()}initDefaultHandler(){const n=this.gradientContainer.nativeElement.clientWidth-11;f(".gradient-selector-wrapper",this.elem),this.handlers.push({id:0,x:-10,value:0,isActive:!1,opacity:0,baseColor:"#0010ff",color:"#000000",position:65.0124,pickerPosition:{x:100,y:100}},{id:1,x:n/2,value:50,isActive:!0,opacity:0,baseColor:"#0010ff",color:"#0010ff",position:65.0124,pickerPosition:{x:100,y:0}},{id:2,x:n,value:100,isActive:!1,opacity:0,baseColor:"#00ddff",color:"#00ddff",position:52.1092,pickerPosition:{x:100,y:0}});const a=y({x:65,y:0},w,this.colorSelectionContainer);this.userSelectedColor=a,this.userBaseColor=a,this.createGradient()}onMouseDown(n){var t;let o=Array.from(null===(t=null==n?void 0:n.target)||void 0===t?void 0:t.classList);o.includes("gradient-selector-wrapper")&&(this.handler=n.target,f(".gradient-selector-wrapper",this.elem),this.handler.classList.add("active"),this.handlerSelected=!0,this.updateActiveHandlers()),(o.includes("color-handler")||o.includes("color-selection-background"))&&(this.colorSelectionSelected=!0),(o.includes("opacity-handler")||o.includes("opacity-selection-background_"))&&(this.opacitySelectionSelected=!0),(o.includes("picker-handler")||o.includes("color-picker-bg"))&&(this.pickerSelectionSelected=!0),o.includes("angle")&&(this.linearDegreeSelected=!0)}onMouseMove(n){this.handlerSelected&&this.moveHandler(n),this.colorSelectionSelected&&this.moveColorSelectionHandler(n),this.opacitySelectionSelected&&this.moveOpacitySelectionHandler(n),this.pickerSelectionSelected&&this.movePickerSelectionHandler(n),this.linearDegreeSelected&&this.getDegrees(n)}onMouseUp(n){this.handlerSelected&&(this.handlerSelected=!1),this.colorSelectionSelected&&(this.colorSelectionSelected=!1),this.opacitySelectionSelected&&(this.opacitySelectionSelected=!1),this.pickerSelectionSelected&&(this.pickerSelectionSelected=!1),this.linearDegreeSelected&&(this.linearDegreeSelected=!1)}addHandler(n){const t=C(n.pageX,this.gradientContainer),o={id:this.handlers.length,x:t.x,value:t.value,isActive:!0,opacity:this.opacityPosition,baseColor:this.userBaseColor,color:this.userSelectedColor,position:this.colorPosition,pickerPosition:{x:this.colorPickerPosition.x,y:this.colorPickerPosition.y}};f(".gradient-selector-wrapper",this.elem),this.handlers.push(o),this.updateActiveHandlers()}deleteHandler(n){if(this.handlers.length>2){const t=this.handlers.findIndex(a=>a.id===n);this.handlers=this.handlers.filter(a=>a.id!==n);const o=this.handlers.length;let c=!1;this.handlers.forEach((a,s)=>{a.id=s,a.isActive&&(c=!0)}),c||(this.handlers[0==t?t:t==o?t-1:t].isActive=!0)}this.updateActiveHandlers()}selectHandler(n){this.handlers.forEach(t=>{t.isActive=t.id===n}),this.updateActiveHandlers()}sortHandlers(){this.handlers.sort(function(n,t){return n.value-t.value})}moveHandler(n){let t;t=window.TouchEvent?C(n.targetTouches[0].pageX,this.gradientContainer):C(n.pageX,this.gradientContainer),t.value>=0?(this.handler.style.transform=`translateX(${t.x}px)`,this.updateHandlersPositionValue(t.value)):(this.handler.style.transform="translateX(-10px)",this.updateHandlersPositionValue(0)),this.sortHandlers(),this.createGradient()}createGradient(){const n=[];this.handlers.forEach((t,o)=>{const c=u(t.color);0==o&&(this.userSelectedRGB=`rgb(${c[0]},${c[1]},${c[2]})`),n.push(`rgba(${c[0]}, ${c[1]}, ${c[2]}, ${P(t.opacity)}) ${t.value}%`)}),this.userSelectedGradient=`linear-gradient(90deg, ${n.join(", ")})`,this.userSelectedGradientWithDegrees=this.linearOptionActive?`linear-gradient(${this.linearDegree}deg, ${n.join(", ")})`:`radial-gradient(circle, ${n.join(", ")})`,this.detectChanges.detectChanges()}moveColorSelectionHandler(n){const t=_(n,this.colorSelectionContainer);t.x>=0&&t.x<=100?(this.colorPosition=t.x,this.updateMoveColorDisplay(t),this.setColorPicker(this.colorPickerPosition)):t.x>100?(this.colorPosition=100,this.updateMoveColorDisplay({x:100,y:0}),this.setColorPicker(this.colorPickerPosition)):(this.updateMoveColorDisplay({x:0,y:0}),this.colorPosition=0,this.setColorPicker(this.colorPickerPosition)),this.updateUI()}updateMoveColorDisplay(n){const t=y(n,w,this.colorSelectionContainer);this.userSelectedColor=t,this.userBaseColor=t,this.updateUserBaseColor(t),this.updateUI()}moveOpacitySelectionHandler(n){const t=_(n,this.opacitySelectionContainer);t.x>=0&&t.x<=100?(this.opacityPosition=t.x,P(t.x)):this.opacityPosition=t.x>100?100:0,this.updateDisplayInfo(this.userSelectedColorPicker),this.updateUI()}movePickerSelectionHandler(n){const t=_(n,this.pickerSelectionContainer);t.x>=0&&t.x<=100&&(this.colorPickerPosition.x=t.x),t.y>=0&&t.y<=100&&(this.colorPickerPosition.y=t.y),t.x>100&&(this.colorPickerPosition.x=100),t.x<0&&(this.colorPickerPosition.x=0),t.y>100&&(this.colorPickerPosition.y=100),t.y<0&&(this.colorPickerPosition.y=0),this.setColorPicker(t),this.updateUI()}setColorPicker(n){if(void 0===this.userBaseColor)return;const t=function H(i,r,n){const t=[];for(let o=0;o<=100;o++)t[o]=[[0,u(S("#FFFFFF",Math.round(-2.6*o)))],[100,u(S(n,Math.round(-2.6*o)))]];return function b(i,r,n){const t=n.nativeElement.clientWidth,s=t*(r[0][0]/100);return k(r[1][1],r[0][1],(t*((i.x>100?100:i.x<0?0:i.x)/100)-s)/(t*(r[1][0]/100)-s))}(i,i.y>100?t[100]:i.y<0?t[0]:t[Math.round(i.y)],r)}(n,this.pickerSelectionContainer,this.userBaseColor);this.userSelectedColorPicker=t,this.updateDisplayInfo(t)}updateDisplayInfo(n){const t=this.getHandlerId(),o=this.handlers.filter(a=>a.id==t);o[0].color=n,o[0].position=this.colorPosition,o[0].pickerPosition=this.colorPickerPosition,o[0].opacity=this.opacityPosition,this.userSelectedColor=n,this.userSelectedOpacityColor=n,this.userSelectedColorPicker=n;const c=u(o[0].color);this.userSelectedColorPickerRGB=this.userSelectedOpacityColorRGB={r:c[0],g:c[1],b:c[2]},this.userSelectedOpacityValue=Math.round(100*P(this.opacityPosition)),this.updateUI()}updateActiveHandlers(){this.updateUI(),this.detectChanges.detectChanges(),this.sortHandlers();const n=this.getHandlerId();this.handlers.forEach(t=>{t.id===n?(t.isActive=!0,this.opacityPosition=t.opacity,this.colorPosition=t.position,this.colorPickerPosition=t.pickerPosition,this.userBaseColor=t.baseColor,this.updateDisplayInfo(t.color)):t.isActive=!1})}updateHandlersPositionValue(n){const t=this.getHandlerId(),o=this.handlers.find(c=>c.id===t);void 0!==o&&(o.value=n)}updateUserBaseColor(n){const t=this.getHandlerId(),o=this.handlers.find(c=>c.id===t);void 0!==o&&(this.userBaseColor=n,o.baseColor=n)}updateUI(){this.createGradient()}setGradientOption(){this.linearOptionActive=!this.linearOptionActive,this.updateUI()}getHandlerId(){return+this.elem.nativeElement.querySelector(".gradient-selector-wrapper.active").dataset.id}getDegrees(n){const t=n.target.getBoundingClientRect(),o=function U(i,r){let n,t;window.TouchEvent?(n=i.targetTouches[0].clientX,t=i.targetTouches[0].clientY):(n=i.clientX,t=i.clientY);const s=Math.atan2(n-(r.left+r.width/2),t-(r.top+r.height/2))*(180/Math.PI)*-1+180;return Math.abs(Math.round(s))}(n,t);this.linearDegree=o,this.createGradient()}updateDegrees(n){const t=n.target.value.replace(/[^0-9]/g,"");this.linearDegree=t,this.createGradient()}copyToClipboard(){const n=this.elem.nativeElement.querySelector(".copy-clipboard .copy-clipboard-hover");n.style.transform="translateY(0px) scaleX(0.02) scaleY(0.5)",n.style.opacity=1,setTimeout(()=>{n.style.opacity=0},100),setTimeout(()=>{n.style.transform="translateY(100%)"},300),setTimeout(()=>{n.style.transform="",n.style.opacity=1},500),navigator.clipboard.writeText(`background: ${this.userSelectedRGB};\r\nbackground: ${this.userSelectedGradientWithDegrees};`)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(q.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-gradient"]],viewQuery:function(n,t){if(1&n&&(e.Gf(B,5),e.Gf(D,5),e.Gf(I,5),e.Gf(J,5)),2&n){let o;e.iGM(o=e.CRH())&&(t.gradientContainer=o.first),e.iGM(o=e.CRH())&&(t.colorSelectionContainer=o.first),e.iGM(o=e.CRH())&&(t.opacitySelectionContainer=o.first),e.iGM(o=e.CRH())&&(t.pickerSelectionContainer=o.first)}},hostBindings:function(n,t){1&n&&e.NdJ("mousedown",function(c){return t.onMouseDown(c)},!1,e.evT)("touchstart",function(c){return t.onMouseDown(c)},!1,e.evT)("mousemove",function(c){return t.onMouseMove(c)},!1,e.evT)("touchmove",function(c){return t.onMouseMove(c)},!1,e.evT)("mouseup",function(c){return t.onMouseUp(c)},!1,e.evT)("touchend",function(c){return t.onMouseUp(c)},!1,e.evT)},decls:127,vars:41,consts:[[1,"container"],[1,"content-container"],[1,"page-title"],[1,"content"],["href","https://cssgradient.io/","target","_blank"],["id","gradient-generator"],[1,"gradient-preview"],[1,"gradient-preview-transparent-bg"],[1,"gradient-preview-bg",3,"ngStyle"],[1,"gradient-selector-container"],["gradientContainer",""],[1,"gradient-selector-background",3,"ngStyle","click"],["class","gradient-selector-wrapper",3,"ngStyle","ngClass",4,"ngFor","ngForOf"],["id","gradient-settings",1,"row","gx-5"],[1,"col-xl-8","mb-4"],[1,"row","gx-5"],[1,"col-xl-6","mb-4"],[1,"color-picker-container"],["pickerSelectionContainer",""],[1,"color-picker",3,"ngStyle","mousedown"],[1,"picker",3,"ngStyle"],[1,"picker-handler","picker-1"],[1,"picker-handler","picker-2"],[1,"color-picker-bg","bg1"],[1,"color-picker-bg","bg2"],[1,"col-xl-6","mb-4","ps-xl-1"],[1,"title"],[1,"rgb-hex-info","row"],[1,"col-4","text-start"],["readonly","","type","text","maxlength","7","id","hexinput",1,"hexinput",3,"value"],["for","hexinput",1,"label"],[1,"col-1"],[1,"col-7"],[1,"row","g-0"],[1,"col-3","p-1","py-0","ps-0"],["readonly","","type","text","maxlength","3",1,"hexinput",3,"value"],["for","Rinput",1,"label"],[1,"col-3","p-1","py-0"],["for","Ginput",1,"label"],["for","Binput",1,"label"],[1,"col-3","p-1","py-0","pe-0"],["for","Alphainput",1,"label"],[1,"color-selection-container"],["colorSelectionContainer",""],[1,"color-selection"],[1,"color-handler",3,"ngStyle"],[1,"color-selection-background",3,"mousedown"],[1,"opacity-selection-container"],["opacitySelectionContainer",""],[1,"opacity-selection"],[1,"opacity-handler",3,"ngStyle"],[1,"opacity-selection-background",3,"mousedown"],[1,"opacity-selection-background_","bg",3,"ngStyle"],[1,"col","mb-4"],[1,"row"],[1,"col-xs-12","col-md-4","pe-4"],[1,"gradient-options"],[1,"button-linear",3,"ngClass","click"],[1,"button-linear-icon"],[1,"button-radial",3,"ngClass","click"],[1,"button-radial-icon"],["class","col-xs-12 col-md-4 mt-md-0 mt-3",4,"ngIf"],[1,"col-xl-4","mb-4","handler-controller-container"],[1,"handler-controller"],[1,"handler-contoller-title","row","p-2","pt-0","pb-0"],[1,"col-3"],[1,"col-4"],[1,"col-2"],["class","handler-controller-list row p-2",3,"ngClass","click",4,"ngFor","ngForOf"],["id","css-code",1,"row"],[1,"col-12"],[1,"code-editor-container"],[1,"code-editor"],[1,"code-editor-tab"],[1,"editor-tab"],[1,"code-preview"],[1,"code-bg"],[1,"copy-clipboard"],[3,"click"],[1,"copy-clipboard-hover",3,"ngStyle"],[1,"gradient-selector-wrapper",3,"ngStyle","ngClass"],[1,"gradient-selector"],[1,"gradient-handler",3,"ngStyle"],[1,"input"],["type","text","readonly","",3,"value"],[1,"col-xs-12","col-md-4","mt-md-0","mt-3"],[1,"angles-container"],[1,"angle"],[1,"pointer-container",3,"ngStyle"],[1,"pointer"],[1,"angle-input",3,"value","change"],[1,"handler-controller-list","row","p-2",3,"ngClass","click"],[1,"handler-controller-container-background"],[1,"handler-controller-background",3,"ngStyle"],[1,"handler-controller-hex"],["readonly","","type","text",3,"value"],[1,"handler-controller-stop"],[1,"col-2","align-self-center"],[1,"handler-controller-delete"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"CSS Gradient Generator"),e.qZA(),e.TgZ(4,"div",3)(5,"h1"),e._uU(6,"Introduction"),e.qZA(),e.TgZ(7,"p"),e._uU(8," Another fun and challenging project! But this one I need to built from scratch. Thanks to the good people on the internet who share the code on how to calculate rgb & hex value. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," The look and feel for this app is inspired from "),e.TgZ(11,"a",4),e._uU(12,"cssgradient.io"),e.qZA(),e._uU(13," (This site is very popular for css gradient generator). "),e.qZA(),e.TgZ(14,"h1"),e._uU(15,"How to use"),e.qZA(),e.TgZ(16,"p"),e._uU(17," Currently you can't enter the hex or rgb value like on the original site, you can only enter the linear degrees value. Everything else should be done via mouse. "),e.qZA(),e.TgZ(18,"p"),e._uU(19," Maybe some day when I have the time I'll update it to allow user to enter the hex/rgb value. "),e.qZA(),e.TgZ(20,"div",5)(21,"div",6),e._UZ(22,"div",7)(23,"div",8),e.qZA(),e.TgZ(24,"div",9,10)(26,"div",11),e.NdJ("click",function(c){return t.addHandler(c)}),e.qZA(),e.YNc(27,R,5,11,"div",12),e.qZA(),e.TgZ(28,"div",13)(29,"div",14)(30,"div",15)(31,"div",16)(32,"div",17,18)(34,"div",19),e.NdJ("mousedown",function(c){return t.movePickerSelectionHandler(c)}),e.TgZ(35,"div",20),e._UZ(36,"div",21)(37,"div",22),e.qZA(),e._UZ(38,"div",23)(39,"div",24),e.qZA()()(),e.TgZ(40,"div",25)(41,"div")(42,"h3",26),e._uU(43,"Color Code"),e.qZA()(),e.TgZ(44,"div",27)(45,"div",28),e._UZ(46,"input",29),e.TgZ(47,"label",30),e._uU(48,"hex"),e.qZA()(),e._UZ(49,"div",31),e.TgZ(50,"div",32)(51,"div",33)(52,"div",34),e._UZ(53,"input",35),e.TgZ(54,"label",36),e._uU(55,"R"),e.qZA()(),e.TgZ(56,"div",37),e._UZ(57,"input",35),e.TgZ(58,"label",38),e._uU(59,"G"),e.qZA()(),e.TgZ(60,"div",37),e._UZ(61,"input",35),e.TgZ(62,"label",39),e._uU(63,"B"),e.qZA()(),e.TgZ(64,"div",40),e._UZ(65,"input",35),e.TgZ(66,"label",41),e._uU(67,"A"),e.qZA()()()()(),e.TgZ(68,"div",42,43)(70,"div",44),e._UZ(71,"div",45),e.qZA(),e.TgZ(72,"div",46),e.NdJ("mousedown",function(c){return t.moveColorSelectionHandler(c)}),e.qZA()(),e.TgZ(73,"div",47,48)(75,"div",49),e._UZ(76,"div",50),e.qZA(),e.TgZ(77,"div",51),e.NdJ("mousedown",function(c){return t.moveOpacitySelectionHandler(c)}),e._UZ(78,"div",52),e.qZA()()(),e.TgZ(79,"div",53)(80,"div",54)(81,"div",55)(82,"div",56)(83,"button",57),e.NdJ("click",function(){return t.setGradientOption()}),e._UZ(84,"span",58),e._uU(85," Linear "),e.qZA(),e.TgZ(86,"button",59),e.NdJ("click",function(){return t.setGradientOption()}),e._UZ(87,"span",60),e._uU(88," Radial "),e.qZA()()(),e.YNc(89,z,6,4,"div",61),e.qZA()()()(),e.TgZ(90,"div",62)(91,"div",63)(92,"div",64),e._UZ(93,"div",65),e.TgZ(94,"div",66)(95,"h3",26),e._uU(96,"HEX"),e.qZA()(),e.TgZ(97,"div",65)(98,"h3",26),e._uU(99,"STOP"),e.qZA()(),e.TgZ(100,"div",67)(101,"h3",26),e._uU(102,"\u2295"),e.qZA()()(),e.YNc(103,E,14,9,"div",68),e.qZA()()(),e.TgZ(104,"div",69)(105,"div",70)(106,"div",71)(107,"div",72)(108,"div",73)(109,"div",74),e._uU(110,"CSS"),e.qZA()()(),e.TgZ(111,"div",75)(112,"code")(113,"span",76),e._uU(114,"background"),e.qZA(),e._uU(115),e._UZ(116,"br"),e.TgZ(117,"span",76),e._uU(118,"background"),e.qZA(),e._uU(119),e.qZA()()(),e.TgZ(120,"div",77)(121,"button",78),e.NdJ("click",function(){return t.copyToClipboard()}),e.TgZ(122,"mat-icon"),e._uU(123,"content_copy"),e.qZA(),e._UZ(124,"div",79),e.TgZ(125,"span"),e._uU(126,"Copy to Clipboard"),e.qZA()()()()()()()()()),2&n&&(e.xp6(23),e.Q6J("ngStyle",e.VKq(20,g,t.userSelectedGradientWithDegrees)),e.xp6(3),e.Q6J("ngStyle",e.VKq(22,g,t.userSelectedGradient)),e.xp6(1),e.Q6J("ngForOf",t.handlers),e.xp6(7),e.Q6J("ngStyle",e.VKq(24,g,t.userBaseColor)),e.xp6(1),e.Q6J("ngStyle",e.WLB(26,F,t.colorPickerPosition.x+"%",t.colorPickerPosition.y+"%")),e.xp6(11),e.s9C("value",t.userSelectedColor),e.xp6(7),e.s9C("value",t.userSelectedColorPickerRGB.r),e.xp6(4),e.s9C("value",t.userSelectedColorPickerRGB.g),e.xp6(4),e.s9C("value",t.userSelectedColorPickerRGB.b),e.xp6(4),e.s9C("value",t.userSelectedOpacityValue),e.xp6(6),e.Q6J("ngStyle",e.VKq(29,A,t.colorPosition+"%")),e.xp6(5),e.Q6J("ngStyle",e.VKq(31,A,t.opacityPosition+"%")),e.xp6(2),e.Q6J("ngStyle",e.VKq(33,g,"linear-gradient(to right, rgb("+t.userSelectedOpacityColorRGB.r+", "+t.userSelectedOpacityColorRGB.g+", "+t.userSelectedOpacityColorRGB.b+") 0%, rgba("+t.userSelectedOpacityColorRGB.r+", "+t.userSelectedOpacityColorRGB.g+", "+t.userSelectedOpacityColorRGB.b+", 0) 100%)")),e.xp6(5),e.Q6J("ngClass",e.VKq(35,h,t.linearOptionActive)),e.xp6(3),e.Q6J("ngClass",e.VKq(37,h,!t.linearOptionActive)),e.xp6(3),e.Q6J("ngIf",t.linearOptionActive),e.xp6(14),e.Q6J("ngForOf",t.handlers),e.xp6(12),e.hij(": ",t.userSelectedRGB,";"),e.xp6(4),e.hij(": ",t.userSelectedGradientWithDegrees,"; "),e.xp6(5),e.Q6J("ngStyle",e.VKq(39,g,t.userSelectedGradientWithDegrees)))},directives:[d.PC,d.sg,d.mk,d.O5,Z.Hw],styles:['#gradient-generator[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%]{margin:0 0 12px;font-weight:700;font-size:12px;color:#bbbfc5;letter-spacing:.2em;text-transform:uppercase;line-height:16px}#gradient-generator[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:42px;width:100%;padding:0 8px;border:1px solid #bbbfc5;border-radius:6px;transition:all 175ms ease-out;text-align:center;color:#1f2667;font-weight:600;line-height:normal;font-size:16px}#gradient-generator[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:1px solid #1F2667;box-shadow:0 0 0 1.5px #1f2667}#gradient-generator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-top:.5em;font-weight:700;font-size:12px;color:#bbbfc5;letter-spacing:.2em;text-transform:uppercase;display:block;text-align:center}#gradient-generator[_ngcontent-%COMP%]   .rgb-hex-info[_ngcontent-%COMP%]{text-align:center;margin-bottom:18px}#gradient-generator[_ngcontent-%COMP%]   .gradient-preview[_ngcontent-%COMP%]{width:100%;height:280px;position:relative;-webkit-user-select:none;user-select:none}#gradient-generator[_ngcontent-%COMP%]   .gradient-preview[_ngcontent-%COMP%]   .gradient-preview-transparent-bg[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:20px 20px;background-position:0 0,0 10px,10px -10px,-10px 0px;z-index:1;width:100%;height:100%;position:absolute;top:0;left:0}#gradient-generator[_ngcontent-%COMP%]   .gradient-preview[_ngcontent-%COMP%]   .gradient-preview-bg[_ngcontent-%COMP%]{z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]{margin:10px 0;border:2px solid #1F2667;width:100%;height:44px;padding:2px;border-radius:6px;position:relative;-webkit-user-select:none;user-select:none}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-background[_ngcontent-%COMP%]{border-radius:4px;width:100%;height:100%;cursor:copy}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper[_ngcontent-%COMP%]{position:absolute;width:22px;height:60px;top:-12px;left:0px;transform:translate(-10px);border-radius:8px;cursor:move}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0px;width:22px;height:62px;border-radius:14px;background:#333;box-shadow:0 1px 2px #00000080;opacity:0}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper[_ngcontent-%COMP%]:hover:before{transition:all 175ms ease-out;opacity:.3}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper.active[_ngcontent-%COMP%]{z-index:5}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper.active[_ngcontent-%COMP%]:before{opacity:1;background-color:#fff}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector-wrapper.active[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:2px solid #1F2667;transition:all .1s ease-out}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector[_ngcontent-%COMP%]{position:absolute;top:1.5px;left:3px;width:16px;height:56px;background-color:#fff;border-radius:8px;box-shadow:0 1px 2px #00000080;border:2px solid #333;padding:3px;pointer-events:none}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector[_ngcontent-%COMP%]   .gradient-handler[_ngcontent-%COMP%]{position:absolute;top:3px;width:6px;height:45px;border-radius:4px;pointer-events:none}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{position:absolute;top:64px;left:-18px;width:48px;height:32px;border-radius:8px;box-shadow:0 1px 2px #00000080;z-index:1;background-color:#fff;border:1px solid #cacaca}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border:none;width:100%;height:100%;text-align:center;z-index:1;color:#1f2667;font-weight:600;pointer-events:all}#gradient-generator[_ngcontent-%COMP%]   .gradient-selector-container[_ngcontent-%COMP%]   .gradient-selector[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}#gradient-settings[_ngcontent-%COMP%]{padding-top:40px;border-top:1px solid #dfe1e6;margin-top:30px;-webkit-user-select:none;user-select:none}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]{position:relative}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]{background:blue;position:relative;width:100%;height:200px;border-radius:8px;left:0;top:0}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .color-picker-bg[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:0;height:200px;border-radius:6px}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .bg1[_ngcontent-%COMP%]{z-index:0;background:linear-gradient(to right,#fff 0%,rgba(255,255,255,0) 100%)}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .bg2[_ngcontent-%COMP%]{z-index:1;background:linear-gradient(to bottom,transparent 0%,#000 100%)}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .picker[_ngcontent-%COMP%]{position:relative;z-index:2;width:8px;top:0%;left:0%}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .picker[_ngcontent-%COMP%]   .picker-handler[_ngcontent-%COMP%]{position:absolute}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .picker[_ngcontent-%COMP%]   .picker-handler.picker-1[_ngcontent-%COMP%]{transform:translate(-50%,-50%);width:20px;height:20px;border:3px solid black;border-radius:10px}#gradient-settings[_ngcontent-%COMP%]   .color-picker-container[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   .picker[_ngcontent-%COMP%]   .picker-handler.picker-2[_ngcontent-%COMP%]{transform:translate(-50%,-50%);width:14px;height:14px;border:3px solid white;border-radius:8px}#gradient-settings[_ngcontent-%COMP%]   .color-selection-container[_ngcontent-%COMP%]{height:32px;width:100%}#gradient-settings[_ngcontent-%COMP%]   .color-selection-container[_ngcontent-%COMP%]   .color-selection-background[_ngcontent-%COMP%]{background:linear-gradient(to right,red 0%,#ff0 17%,lime 33%,cyan 50%,blue 66%,#f0f 83%,red 100%);border-radius:4px;height:32px;width:100%}#gradient-settings[_ngcontent-%COMP%]   .color-selection-container[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]{position:relative;z-index:2;left:0%;cursor:move}#gradient-settings[_ngcontent-%COMP%]   .color-selection-container[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-handler[_ngcontent-%COMP%]{position:absolute;width:12px;margin-left:-6px;margin-top:-4px;height:40px;border:3px solid black;border-radius:6px}#gradient-settings[_ngcontent-%COMP%]   .color-selection-container[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-handler[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:6px;height:34px;border:2px solid #fff;border-radius:2px}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]{margin-top:20px;height:32px;width:100%}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]   .opacity-selection-background[_ngcontent-%COMP%]{background:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]   .opacity-selection-background[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{border-radius:4px;height:32px;width:100%}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]   .opacity-selection[_ngcontent-%COMP%]{position:relative;z-index:2;left:0%;cursor:move}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]   .opacity-selection[_ngcontent-%COMP%]   .opacity-handler[_ngcontent-%COMP%]{position:absolute;width:12px;margin-left:-6px;margin-top:-4px;height:40px;border:3px solid black;border-radius:6px}#gradient-settings[_ngcontent-%COMP%]   .opacity-selection-container[_ngcontent-%COMP%]   .opacity-selection[_ngcontent-%COMP%]   .opacity-handler[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:6px;height:34px;border:2px solid #fff;border-radius:2px}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]{border-left:1px solid #dfe1e6}@media (max-width: 1199.98px){#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]{border-left:none}}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller[_ngcontent-%COMP%]{width:90%;margin:0 auto}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-contoller-title[_ngcontent-%COMP%], #gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-list[_ngcontent-%COMP%]{text-align:center}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-list[_ngcontent-%COMP%]{cursor:pointer}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-list.active[_ngcontent-%COMP%]{background:#f0f1f2;border:1px solid #d9dcdf;border-radius:6px}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-list.active[_ngcontent-%COMP%]   .handler-controller-container-background[_ngcontent-%COMP%]{border:2px solid #1F2667;box-shadow:0 1px 2px #00000080;background:rgba(255,255,255,0)}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:32px;margin-top:2px;color:#dfe1e6;border:none;background:none;transition:all 175ms ease-out}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#1f2668}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-container-background[_ngcontent-%COMP%]{background:white;border:2px solid transparent;width:48px;height:100%;background:rgba(255,255,255,0);border-radius:10px;padding:3px;margin:0 auto}#gradient-settings[_ngcontent-%COMP%]   .handler-controller-container[_ngcontent-%COMP%]   .handler-controller-container-background[_ngcontent-%COMP%]   .handler-controller-background[_ngcontent-%COMP%]{width:100%;height:100%;background:#090979;border-radius:6px;margin:0 auto;position:relative}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]{display:flex;border-right:1px solid #dfe1e6}@media (max-width: 767.98px){#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]{border-right:none}}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1;padding:0 16px 0 40px;display:flex;align-items:center;line-height:40px;height:40px;background-color:#fff;color:#bbbfc5;font-weight:700;border:1px solid #bbbfc5;transition:all 175ms ease-out;cursor:pointer;font-size:16px;position:relative}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#1F2667;border-color:#1f2667;color:#fff}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-linear[_ngcontent-%COMP%]{border-top-left-radius:6px;border-bottom-left-radius:6px}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-linear.active[_ngcontent-%COMP%]   .button-linear-icon[_ngcontent-%COMP%]{border-color:#fff}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-linear[_ngcontent-%COMP%]   .button-linear-icon[_ngcontent-%COMP%]{left:12px;position:absolute;display:inline-block;width:16px;height:16px;margin-right:8px;border:2px solid #bbbfc5}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-linear[_ngcontent-%COMP%]   .button-linear-icon[_ngcontent-%COMP%]:after{content:"";position:absolute;top:5px;left:0;width:12px;height:2px;background:#bbbfc5}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-radial[_ngcontent-%COMP%]{border-top-right-radius:6px;border-bottom-right-radius:6px;margin-left:-1px}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-radial.active[_ngcontent-%COMP%]   .button-radial-icon[_ngcontent-%COMP%]{border-color:#fff}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-radial[_ngcontent-%COMP%]   .button-radial-icon[_ngcontent-%COMP%]{margin-top:-1px;width:18px;height:18px;border-radius:9px;left:12px;position:absolute;display:inline-block;margin-right:8px;border:2px solid #bbbfc5}#gradient-settings[_ngcontent-%COMP%]   .gradient-options[_ngcontent-%COMP%]   button.button-radial[_ngcontent-%COMP%]   .button-radial-icon[_ngcontent-%COMP%]:after{content:"";position:absolute;top:2px;left:2px;width:10px;height:10px;border-radius:5px;border:2px solid #bbbfc5}#gradient-settings[_ngcontent-%COMP%]   .angles-container[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:flex-start}#gradient-settings[_ngcontent-%COMP%]   .angles-container[_ngcontent-%COMP%]   .angle[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:36px;height:36px;border:3px solid #1F2667;border-radius:18px;position:relative}#gradient-settings[_ngcontent-%COMP%]   .angles-container[_ngcontent-%COMP%]   .angle[_ngcontent-%COMP%]   .pointer-container[_ngcontent-%COMP%]{position:relative;width:6px;height:30px;pointer-events:none}#gradient-settings[_ngcontent-%COMP%]   .angles-container[_ngcontent-%COMP%]   .angle[_ngcontent-%COMP%]   .pointer-container[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{position:absolute;width:6px;height:6px;top:2px;border-radius:3px;background:#1F2667}#gradient-settings[_ngcontent-%COMP%]   .angles-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:54px;height:42px;padding:0 8px;margin-left:12px;border:1px solid #bbbfc5;border-radius:6px;transition:all 175ms ease-out;text-align:center}#css-code[_ngcontent-%COMP%]   .code-editor-container[_ngcontent-%COMP%]{background:#161a42;border-top-left-radius:4px;border-top-right-radius:4px}#css-code[_ngcontent-%COMP%]   .code-editor-container[_ngcontent-%COMP%]   .code-editor[_ngcontent-%COMP%]{height:48px;line-height:48px;font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:0;color:#ffffff59}#css-code[_ngcontent-%COMP%]   .code-editor-container[_ngcontent-%COMP%]   .code-editor[_ngcontent-%COMP%]   .code-editor-tab[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:48px;border-top-left-radius:4px;border-top-right-radius:4px;background:black}#css-code[_ngcontent-%COMP%]   .code-editor-container[_ngcontent-%COMP%]   .code-editor[_ngcontent-%COMP%]   .code-editor-tab[_ngcontent-%COMP%]   .editor-tab[_ngcontent-%COMP%]{height:48px;line-height:48px;font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:0 24px;background:#161a42;color:#fff;border-top-left-radius:4px}#css-code[_ngcontent-%COMP%]   .code-preview[_ngcontent-%COMP%]{color:#fffc;font-weight:700;padding:16px 24px;line-height:1.5;min-height:150px}#css-code[_ngcontent-%COMP%]   .code-preview[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#fffc;font-size:1em;font-weight:400}#css-code[_ngcontent-%COMP%]   .code-preview[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   .code-bg[_ngcontent-%COMP%]{color:#00d4f0;font-weight:700}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]{display:flex;justify-content:center;height:56px;background:#45496d;border-bottom-left-radius:4px;border-bottom-right-radius:4px}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative;background:#45496d;border:none;border-bottom-left-radius:4px;border-bottom-right-radius:4px;width:100%;font-weight:700;color:#fffc;transition:all 175ms ease-out;overflow:hidden;display:flex;justify-content:center;align-items:center}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:5px;opacity:.6;z-index:2;position:relative}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], #css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%]{color:#fff}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .copy-clipboard-hover[_ngcontent-%COMP%]{transform:translateY(0)}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;color:#fffc;font-size:16px;z-index:2;position:relative}#css-code[_ngcontent-%COMP%]   .copy-clipboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .copy-clipboard-hover[_ngcontent-%COMP%]{opacity:1;background:red;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;transform:translateY(100%);transition:all .15s ease-in-out}']}),i})()}];let $=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.Bz.forChild(V)],m.Bz]}),i})(),Q=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez,$,Z.Ps]]}),i})()}}]);