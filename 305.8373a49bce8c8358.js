"use strict";(self.webpackChunksyahrul=self.webpackChunksyahrul||[]).push([[305],{4305:(T,g,c)=>{c.r(g),c.d(g,{SpriteModule:()=>B});var f=c(6895),d=c(3994);const u=(()=>{class s{constructor(t,i,n,r,a,h){this.x=t,this.y=i,this.w=n,this.h=r,this.context=a,this.myCanvas=h,this.rect={x:this.x,y:this.y,w:this.w,h:this.h}}static setBgColor(t){s._bgData=t}pixelsEquivalent(t,i,n,r){if(0===t[i+3]&&0===n[r+3])return!0;for(var a=4;a--;)if(t[i+a]!==n[r+a])return!1;return!0}allArrayOrTrue(t,i){for(var n=t.length;n--;)if(!t[n]&&!i[n])return!1;return!0}allArrayFalse(t){for(var i=t.length;i--;)if(t[i])return!1;return!0}trimBg(){var t;if(this.rect=this._restrictRectToBoundry(),this.rect.w&&this.rect.h)do{t=this._edgesAreBg(),this.rect=this._contractRect(t)}while(this.rect.h&&this.rect.w&&!this.allArrayFalse(t));return this.rect}_restrictRectToBoundry(){var t=this.rect,i=this.myCanvas.nativeElement,n=Math.min(Math.max(t.x,0),i.width),r=Math.min(Math.max(t.y,0),i.height);return n!==t.x&&(t.w-=n-t.x,t.x=n),r!==t.y&&(t.h-=r-t.y,t.y=r),t.w=Math.min(t.w,i.width-t.x),t.h=Math.min(t.h,i.height-t.y),t}expandToSpriteBoundry(){for(var i=this._edgesAreBg(),n=this._edgesAtBounds();!this.allArrayOrTrue(i,n);)this._expandRect(i,n),i=this._edgesAreBg(),n=this._edgesAtBounds();return this._contractRect(i)}_edgesAreBg(){var t=this.rect,n=this.context,r=n?.getImageData(t.x,t.y,t.w,1).data,a=n?.getImageData(t.x+t.w-1,t.y,1,t.h).data,h=n?.getImageData(t.x,t.y+t.h-1,t.w,1).data,p=n?.getImageData(t.x,t.y,1,t.h).data;return[this._pixelsContainOnlyBg(r),this._pixelsContainOnlyBg(a),this._pixelsContainOnlyBg(h),this._pixelsContainOnlyBg(p)]}_edgesAtBounds(){var t=this.rect,i=this.myCanvas.nativeElement;return[0===t.y,t.x+t.w===i.width,t.y+t.h===i.height,0===t.x]}_pixelsContainOnlyBg(t){for(var i=s._bgData,n=0,r=t?.length;n<r;n+=4)if(!this.pixelsEquivalent(i,0,t,n))return!1;return!0}_expandRect(t,i){var n=this.rect;return!t[0]&&!i[0]&&(n.y--,n.h++),!t[1]&&!i[1]&&n.w++,!t[2]&&!i[2]&&n.h++,!t[3]&&!i[3]&&(n.x--,n.w++),n}_contractRect(t){var i=this.rect;return t[0]&&i.h&&(i.y++,i.h--),t[1]&&i.w&&i.w--,t[2]&&i.h&&i.h--,t[3]&&i.w&&(i.x++,i.w--),i}}return s._bgData=[0,0,0,0],s})();var e=c(4650);let m=(()=>{var o;class s{constructor(){this.fileDropped=new e.vpe,this.isOver=!1}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.isOver=!0}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.isOver=!1}onDrop(t){t.preventDefault(),t.stopPropagation(),this.isOver=!1;const i=t.dataTransfer.files;i.length&&this.fileDropped.emit(i)}}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275dir=e.lG2({type:o,selectors:[["","appDragNdrop",""]],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("dragover",function(r){return i.onDragOver(r)})("dragleave",function(r){return i.onDragLeave(r)})("drop",function(r){return i.onDrop(r)}),2&t&&e.ekj("dragNdrop",i.isOver)},outputs:{fileDropped:"fileDropped"}}),s})();const v=["canvas"],C=["highlight"],_=["spriteContainer"],b=["spriteContentContainer"],x=["colorInfo"],y=["colorText"],w=["spriteAlert"],k=["toolbarBottom"],M=["file"],P=[{path:"",component:(()=>{var o;class s{constructor(t){this.renderer=t,this.dragging=!1,this.positionX=0,this.positionY=0,this.startPositionX=0,this.startPositionY=0,this.rect={x:0,y:0,w:0,h:0},this.isBgTransparent=!0,this.isPickingBgColor=!1,this.cssXPos=0,this.cssYPos=0,this.cssWidth=0,this.cssHeight=0,this.imageReader=new Image,this.spriteFilename=""}ngOnInit(){this.loadExampleImg()}onMouseMove(t){this.isPickingBgColor||this.dragging&&(this.renderer.addClass(this.toolbarBottom.nativeElement,"disable-select"),this.rect.x=this.startPositionX+Math.min(t.pageX-this.positionX,0),this.rect.y=this.startPositionY+Math.min(t.pageY-this.positionY,0),this.rect.w=Math.abs(t.pageX-this.positionX)||1,this.rect.h=Math.abs(t.pageY-this.positionY)||1,this.displayHighlight(this.rect,!1))}onMouseUp(){if(this.isPickingBgColor)return;this.dragging=!1,this.renderer.removeClass(this.toolbarBottom.nativeElement,"disable-select");const t=new u(this.rect.x,this.rect.y,this.rect.w,this.rect.h,this.context,this.myCanvas);var i=t.trimBg();i.w&&i.h?((i=t.expandToSpriteBoundry()).w===this.myCanvas.nativeElement.width&&i.h===this.myCanvas.nativeElement.height?this.renderer.addClass(this.spriteAlert.nativeElement,"show"):this.renderer.removeClass(this.spriteAlert.nativeElement,"show"),this.displayHighlight({x:i.x,y:i.y,w:i.w,h:i.h},!0),this.updateCSSInfo(i.x,i.y,i.w,i.h)):this.renderer.setAttribute(this.highlight.nativeElement,"style",`\n          top: ${this.rect.y}px;\n          left: ${this.rect.x}px;\n          width: ${this.rect.w}px;\n          height: ${this.rect.h}px;\n          opacity: 1;\n          transition: 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);\n          transform: scale(0);\n          transform-origin: center center;\n        `)}spriteSelect(t){this.isPickingBgColor||(this.dragging=!0,this.positionX=t.pageX,this.positionY=t.pageY,this.startPositionX=Math.floor(t.pageX-this.spriteContainer.nativeElement.offsetLeft+this.spriteContainer.nativeElement.scrollLeft),this.startPositionY=Math.floor(t.pageY-this.spriteContainer.nativeElement.offsetTop+this.spriteContainer.nativeElement.scrollTop),this.hideHighlight())}spriteClick(t){if(this.isPickingBgColor){const r=this.context?.getImageData(t.offsetX,t.offsetY,1,1).data,a="rgba("+r[0]+", "+r[1]+", "+r[2]+", "+String(r[3]/255).slice(0,5)+")";u.setBgColor([r[0],r[1],r[2],r[3]]),0===r[3]?(this.renderer.addClass(this.colorInfo.nativeElement,"transparent"),this.renderer.setAttribute(this.colorInfo.nativeElement,"style","\n          background-color: 'transparent'\n        "),this.renderer.setProperty(this.colorText.nativeElement,"textContent","transparent")):(this.renderer.removeClass(this.colorInfo.nativeElement,"transparent"),this.renderer.setAttribute(this.colorInfo.nativeElement,"style",`\n          background-color: ${a}\n        `),this.renderer.setProperty(this.colorText.nativeElement,"textContent",a))}}displayHighlight(t,i){const{x:n,y:r,w:a,h}=t;let p=0;i&&(p=.2),this.renderer.setAttribute(this.highlight.nativeElement,"style",`\n      top: ${r}px;\n      left: ${n}px;\n      width: ${a}px;\n      height: ${h}px;\n      opacity: 1;\n      transition: ${p}s cubic-bezier(0.55, 0.085, 0.68, 0.53);\n    `)}hideHighlight(){this.renderer.setAttribute(this.highlight.nativeElement,"style",`\n          top: ${this.rect.y}px;\n          left: ${this.rect.x}px;\n          width: 0px;\n          height: 0px;\n          opacity: 0;\n    `)}toggleBackgroundColor(){this.isBgTransparent=!this.isBgTransparent,this.renderer.setAttribute(this.contentContainer.nativeElement,"style",`\n      background-color: ${this.isBgTransparent?"":"rgb(0,0,0)"}\n    `),this.isBgTransparent?this.renderer.removeClass(this.highlight.nativeElement,"dark-mode"):this.renderer.addClass(this.highlight.nativeElement,"dark-mode")}pickBackgroundColor(){this.isPickingBgColor=!this.isPickingBgColor}updateCSSInfo(t,i,n,r){this.cssXPos=0==t?0:-t,this.cssYPos=0==i?0:-i,this.cssWidth=n,this.cssHeight=r}openFile(){this.file.nativeElement.click()}uploadFile(t){let i=t;t.target&&(i=t.target.files),i.length&&(this.fileReader=new FileReader,this.fileReader.readAsDataURL(i[0]),this.fileReader.onload=n=>{this.imageReader.src=String(n.target.result),this.imageReader.onload=()=>{this.spriteFilename=i[0].name,this.myCanvas.nativeElement.width=this.imageReader.width,this.myCanvas.nativeElement.height=this.imageReader.height,this.cssWidth=this.imageReader.width,this.cssHeight=this.imageReader.height,this.context=this.myCanvas.nativeElement.getContext("2d"),this.context?.drawImage(this.imageReader,0,0)}})}loadExampleImg(){const t=new Image;t.src="assets/sprite/sprite-example2.png",t.onload=()=>{this.spriteFilename="sprite-example2.png",this.myCanvas.nativeElement.width=t.width,this.myCanvas.nativeElement.height=t.height,this.cssWidth=t.width,this.cssHeight=t.height,this.context=this.myCanvas.nativeElement.getContext("2d"),this.context?.drawImage(t,0,0)}}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sprite"]],viewQuery:function(t,i){if(1&t&&(e.Gf(v,5),e.Gf(C,5),e.Gf(_,5),e.Gf(b,5),e.Gf(x,5),e.Gf(y,5),e.Gf(w,5),e.Gf(k,5),e.Gf(M,5)),2&t){let n;e.iGM(n=e.CRH())&&(i.myCanvas=n.first),e.iGM(n=e.CRH())&&(i.highlight=n.first),e.iGM(n=e.CRH())&&(i.spriteContainer=n.first),e.iGM(n=e.CRH())&&(i.contentContainer=n.first),e.iGM(n=e.CRH())&&(i.colorInfo=n.first),e.iGM(n=e.CRH())&&(i.colorText=n.first),e.iGM(n=e.CRH())&&(i.spriteAlert=n.first),e.iGM(n=e.CRH())&&(i.toolbarBottom=n.first),e.iGM(n=e.CRH())&&(i.file=n.first)}},hostBindings:function(t,i){1&t&&e.NdJ("mousemove",function(r){return i.onMouseMove(r)},!1,e.evT)("mousedown",function(r){return i.onMouseMove(r)},!1,e.evT)("mouseup",function(r){return i.onMouseUp(r)},!1,e.evT)},decls:57,vars:10,consts:[[1,"container"],[1,"content-container"],[1,"page-title"],[1,"content"],["href","https://github.com/jakearchibald/sprite-cow","target","_blank"],[1,"sprite-toolbar-top"],[1,"button","open-file",3,"click"],[1,"button","pick-background",3,"click"],["title","Toggle Dark Background",1,"button","toggle-background",3,"click"],[1,"toolbar-info"],[1,"color-info","transparent"],["colorInfo",""],[1,"color-text"],["colorText",""],[1,"toolbar-alert"],["spriteAlert",""],[1,"sprite-content-container"],["spriteContentContainer",""],["appDragNdrop","",1,"sprite-container",3,"mousedown","click","fileDropped"],["spriteContainer",""],["width","100","height","100"],["canvas",""],[1,"highlight"],["highlight",""],[1,"drop-indicator"],[1,"sprite-toolbar-bottom"],["toolbarBottom",""],["ng-non-bindable",""],["type","file","accept","image/*",1,"file",2,"top","-5000px","left","0px","opacity","0","position","absolute",3,"change"],["file",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"CSS Sprite Selector"),e.qZA(),e.TgZ(4,"div",3)(5,"h1"),e._uU(6,"Introduction"),e.qZA(),e.TgZ(7,"p"),e._uU(8," This was a fun and challenging project, converting from jQuery code base to Angular. You can get the original code "),e.TgZ(9,"a",4),e._uU(10,"here"),e.qZA(),e._uU(11,". Only the logic part on how to calculate the pixels was ported. "),e.qZA(),e.TgZ(12,"h1"),e._uU(13,"How to use"),e.qZA(),e.TgZ(14,"p"),e._uU(15," To use this app, click Open or drag & drop sprite image from your computer. After that you can click or select an image using your mouse and the CSS background position will be display at the bottom. "),e.qZA(),e.TgZ(16,"div",5)(17,"div",6),e.NdJ("click",function(){return i.openFile()}),e._uU(18,"Open"),e.qZA(),e.TgZ(19,"div",7),e.NdJ("click",function(){return i.pickBackgroundColor()}),e._uU(20," Pick Background "),e.qZA(),e.TgZ(21,"div",8),e.NdJ("click",function(){return i.toggleBackgroundColor()}),e.qZA(),e.TgZ(22,"div",9)(23,"p"),e._uU(24," Background color is set to "),e._UZ(25,"span",10,11),e.TgZ(27,"span",12,13),e._uU(29,"transparent"),e.qZA()()(),e.TgZ(30,"div",14,15)(32,"p"),e._uU(33,"Incorrect background color set?"),e.qZA()()(),e.TgZ(34,"div",16,17)(36,"div",18,19),e.NdJ("mousedown",function(r){return i.spriteSelect(r)})("click",function(r){return i.spriteClick(r)})("fileDropped",function(r){return i.uploadFile(r)}),e._UZ(38,"canvas",20,21)(40,"div",22,23)(42,"div",24),e.qZA()(),e.TgZ(43,"div",25,26)(45,"code",27)(46,"span"),e._uU(47),e.qZA(),e._uU(48),e._UZ(49,"br"),e._uU(50),e._UZ(51,"br"),e._uU(52),e._UZ(53,"br"),e._uU(54,"} "),e.qZA()(),e.TgZ(55,"input",28,29),e.NdJ("change",function(r){return i.uploadFile(r)}),e.qZA()()()()),2&t&&(e.xp6(19),e.ekj("active",i.isPickingBgColor),e.xp6(2),e.ekj("active",!i.isBgTransparent),e.xp6(26),e.hij(".sprite ","{",""),e.xp6(1),e.lnq("\xa0\xa0background: url('",i.spriteFilename,"') no-repeat ",i.cssXPos,"px ",i.cssYPos,"px;"),e.xp6(2),e.hij("\xa0\xa0width: ",i.cssWidth,"px;"),e.xp6(2),e.hij("\xa0\xa0height: ",i.cssHeight,"px;"))},dependencies:[m],styles:['.sprite-content-container[_ngcontent-%COMP%]{transition:background-color .2s ease-in}.sprite-container[_ngcontent-%COMP%]{position:relative;background:url(/assets/sprite/trans.png) repeat center center;overflow:auto;width:100%;height:50vh;max-height:50vh}.sprite-container.dragNdrop[_ngcontent-%COMP%]   .drop-indicator[_ngcontent-%COMP%]{display:block}.drop-indicator[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(37,207,28,.2);box-shadow:inset 0 0 18px #175a00;display:none;pointer-events:none}.highlight[_ngcontent-%COMP%]{display:block;background-color:#005aff40;border:1px solid rgba(0,114,255,.5);position:absolute;opacity:0;pointer-events:none;width:0px;height:0px}.highlight.dark-mode[_ngcontent-%COMP%]{background-color:#00ff3040;border-color:#00ff3380}.sprite-toolbar-top[_ngcontent-%COMP%]{padding:5px 6px;color:#333;min-height:30px;background:linear-gradient(90deg,#d0d0d0,#a7a7a7);overflow:hidden;border-top-left-radius:10px;border-top-right-radius:10px;-webkit-user-select:none;user-select:none;display:flex;align-items:center;flex-wrap:wrap}.button[_ngcontent-%COMP%]{margin:0 5px 0 0;border:1px solid #888;border-radius:4px;cursor:pointer;padding:4px 10px;position:relative;background-image:linear-gradient(180deg,#fefefe,#b8b8b8);color:#303030}.button[_ngcontent-%COMP%]:before{content:"";display:inline-block;vertical-align:text-top;background:url(/assets/sprite/sprite.png) no-repeat;width:16px;height:16px;margin-right:5px}.button.open-file[_ngcontent-%COMP%]:before{background-position:-23px -1px}.button.pick-background[_ngcontent-%COMP%]:before{background-position:-47px -2px}.button.toggle-background[_ngcontent-%COMP%]{padding:4px 5px}.button.toggle-background[_ngcontent-%COMP%]:before{background-position:-96px -1px;margin-right:0}.button.active[_ngcontent-%COMP%]{background:#707070;box-shadow:inset 0 3px 7px #0009;color:#fff}.toolbar-info[_ngcontent-%COMP%]{vertical-align:middle;margin:10px 0}.toolbar-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;height:15px;line-height:15px}.toolbar-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .color-info[_ngcontent-%COMP%]{width:15px;height:15px;background-color:transparent;display:inline-block;vertical-align:middle}.toolbar-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .color-info.transparent[_ngcontent-%COMP%]{background:url(/assets/sprite/trans.png) repeat center center}.toolbar-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .color-text[_ngcontent-%COMP%]{margin-left:5px}.toolbar-alert[_ngcontent-%COMP%]{margin:10px 10px 10px auto;opacity:0;transition:opacity .5 ease-in}.toolbar-alert.show[_ngcontent-%COMP%]{opacity:1}.toolbar-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:red;font-weight:700}.sprite-toolbar-bottom[_ngcontent-%COMP%]{padding:25px;margin-bottom:40px;color:#333;min-height:30px;background:linear-gradient(90deg,#d0d0d0,#a7a7a7)}.sprite-toolbar-bottom.disable-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.sprite-toolbar-bottom[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:monospace,serif;white-space:pre;color:#303030;font-size:1.2em;white-space:pre-wrap}.sprite-toolbar-bottom[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}']}),s})(),title:"Syahrul - CSS Sprite Selector"}];let O=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(P),d.Bz]}),s})(),B=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,O]}),s})()}}]);