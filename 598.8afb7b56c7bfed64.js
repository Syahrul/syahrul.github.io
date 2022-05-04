"use strict";(self.webpackChunksyahrul=self.webpackChunksyahrul||[]).push([[598],{4598:(v,g,l)=>{l.r(g),l.d(g,{HomeModule:()=>h});var C=l(9808),s=l(2268),n=l(5e3),f=l(2313);const M=["knowledge"],_=[{path:"",component:(()=>{class t{constructor(e){this.titleService=e}ngOnInit(){this.titleService.setTitle("Syahrul - Homepage")}ngAfterViewInit(){this.calculateSkillPercentage()}calculateSkillPercentage(){Array.from(this.knowledge.nativeElement.querySelectorAll(".skills")).forEach(o=>{var r;const a=o.clientWidth,d=null===(r=o.querySelector(".skill-name"))||void 0===r?void 0:r.clientWidth,O=o.querySelector(".skill-percentage");let c;c=d>=a?d:a-d;const p=o.querySelector("[data-skill]");if(p instanceof HTMLElement){const u=+p.dataset.skill,x=o.querySelector(".skill-bar"),k=c/100*u;x instanceof HTMLElement&&(x.style.width=`${k}px`,O.textContent=`${u}%`)}})}scrollToSeeMoreSkills(){const e=this.knowledge.nativeElement.scrollTop;this.knowledge.nativeElement.querySelector("#chevron").style.opacity=e>0?0:1}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.Dx))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,o){if(1&e&&n.Gf(M,5),2&e){let r;n.iGM(r=n.CRH())&&(o.knowledge=r.first)}},hostBindings:function(e,o){1&e&&n.NdJ("resize",function(a){return o.calculateSkillPercentage(a)},!1,n.Jf7)},decls:70,vars:0,consts:[["id","wrapper"],["id","background-wrap"],[1,"x1"],[1,"cloud"],[1,"x2"],[1,"x3"],[1,"morecloud2"],[1,"x4"],[1,"x5"],[1,"morecloud"],["id","knowledge-info"],[1,"knowledge",3,"scroll"],["knowledge",""],["id","chevron"],[1,"skills"],[1,"skill-name"],["data-skill","90",1,"skill-bar"],[1,"skill-percentage"],["data-skill","85",1,"skill-bar"],["data-skill","80",1,"skill-bar"],["data-skill","75",1,"skill-bar"],["data-skill","55",1,"skill-bar"],["data-skill","65",1,"skill-bar"],["id","tree-section"],[1,"tree"],[1,"crown"],[1,"trunk"],[1,"tree","tree2"],[1,"crown","animate"],[1,"tree","tree3"],["id","ground-wrap"],[1,"ground"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"div",3),n.qZA(),n.TgZ(4,"div",4),n._UZ(5,"div",3),n.qZA(),n.TgZ(6,"div",5)(7,"div",3),n._UZ(8,"div",6),n.qZA()(),n.TgZ(9,"div",7),n._UZ(10,"div",3),n.qZA(),n.TgZ(11,"div",8)(12,"div",3),n._UZ(13,"div",9),n.qZA()()(),n.TgZ(14,"div",10)(15,"div",11,12),n.NdJ("scroll",function(){return o.scrollToSeeMoreSkills()}),n._UZ(17,"div",13),n.TgZ(18,"div",14)(19,"div",15),n._uU(20,"HTML"),n.qZA(),n._UZ(21,"div",16)(22,"span",17),n.qZA(),n.TgZ(23,"div",14)(24,"div",15),n._uU(25,"CSS"),n.qZA(),n._UZ(26,"div",16)(27,"span",17),n.qZA(),n.TgZ(28,"div",14)(29,"div",15),n._uU(30,"jQuery"),n.qZA(),n._UZ(31,"div",18)(32,"span",17),n.qZA(),n.TgZ(33,"div",14)(34,"div",15),n._uU(35,"Javascript"),n.qZA(),n._UZ(36,"div",19)(37,"span",17),n.qZA(),n.TgZ(38,"div",14)(39,"div",15),n._uU(40,"Drupal"),n.qZA(),n._UZ(41,"div",20)(42,"span",17),n.qZA(),n.TgZ(43,"div",14)(44,"div",15),n._uU(45,"Angular / Ionic"),n.qZA(),n._UZ(46,"div",19)(47,"span",17),n.qZA(),n.TgZ(48,"div",14)(49,"div",15),n._uU(50,"React Native"),n.qZA(),n._UZ(51,"div",21)(52,"span",17),n.qZA(),n.TgZ(53,"div",14)(54,"div",15),n._uU(55,"PHP"),n.qZA(),n._UZ(56,"div",22)(57,"span",17),n.qZA()()(),n.TgZ(58,"div",23)(59,"div",24),n._UZ(60,"div",25)(61,"div",26),n.qZA(),n.TgZ(62,"div",27),n._UZ(63,"div",28)(64,"div",26),n.qZA(),n.TgZ(65,"div",29),n._UZ(66,"div",25)(67,"div",26),n.qZA()(),n.TgZ(68,"div",30),n._UZ(69,"div",31),n.qZA()())},styles:['#wrapper[_ngcontent-%COMP%]{position:relative}#background-wrap[_ngcontent-%COMP%]{background:#00b4ff;z-index:-1;height:500px;position:relative;overflow-x:hidden}@keyframes animateCloud{0%{margin-left:-100vw}to{margin-left:100%}}.x1[_ngcontent-%COMP%]{animation:animateCloud 25s linear infinite;animation-delay:-5s;transform:scale(.25)}.x2[_ngcontent-%COMP%]{animation:animateCloud 40s linear infinite;animation-delay:-27s;transform:scale(.3)}.x3[_ngcontent-%COMP%]{animation:animateCloud 30s linear infinite;animation-delay:-23s;transform:scale(.3)}.x4[_ngcontent-%COMP%]{animation:animateCloud 28s linear infinite;animation-delay:-15s;transform:scale(.3)}.x5[_ngcontent-%COMP%]{animation:animateCloud 55s linear infinite;animation-delay:-20s;transform:scale(.35)}.cloud[_ngcontent-%COMP%]{background:#fff;border-radius:100px;box-shadow:0 8px 5px #0000001a;height:120px;position:absolute;width:350px}.cloud[_ngcontent-%COMP%]:after, .cloud.cloud[_ngcontent-%COMP%]:before{background:#fff;content:"";position:absolute;z-index:-1}.cloud[_ngcontent-%COMP%]:after{border-radius:100px;height:100px;left:50px;top:-50px;width:100px}.cloud[_ngcontent-%COMP%]:before{border-radius:200px;width:180px;height:180px;right:50px;top:-90px}.x1[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]:before, .x4[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]:before{left:50px;right:0}.x1[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]:after, .x4[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]:after{left:200px}.x1[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{top:120px}.x2[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{top:140px}.x3[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{top:180px}.x3[_ngcontent-%COMP%]   .morecloud2[_ngcontent-%COMP%]:before{background:white;content:"";position:absolute;z-index:-1;border-radius:100px;width:100px;height:100px;left:200px;top:50px;z-index:2}.x3[_ngcontent-%COMP%]   .morecloud2[_ngcontent-%COMP%]:after{background:white;content:"";position:absolute;z-index:-1;border-radius:100px;width:150px;height:150px;left:50px;top:0px;z-index:2}.x4[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{top:210px}.x5[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%]{top:250px}.x5[_ngcontent-%COMP%]   .morecloud[_ngcontent-%COMP%]:before{background:white;content:"";position:absolute;z-index:-1;border-radius:100px;width:100px;height:100px;left:50px;top:50px;z-index:2}.x5[_ngcontent-%COMP%]   .morecloud[_ngcontent-%COMP%]:after{background:white;content:"";position:absolute;z-index:-1;border-radius:100px;width:150px;height:150px;left:150px;top:20px;z-index:2}#tree-section[_ngcontent-%COMP%]{position:relative}@media (max-width: 767.98px){#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{display:none}}#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{position:absolute;left:80%}#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]{position:absolute;background:#32AB3A;width:150px;height:150px;bottom:20px;left:0;border-top-left-radius:50%;border-top-right-radius:50%;z-index:2}#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]   .crown.animate[_ngcontent-%COMP%]{animation:windtree 10s infinite}#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]:after{content:"";width:100%;height:50px;display:block;background:radial-gradient(ellipse at center,#32AB3A 0%,#32AB3A 68%,transparent 0%);background-size:15px 15px;bottom:-40px;left:0;background-repeat:repeat-x;position:absolute}#tree-section[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]   .trunk[_ngcontent-%COMP%]{position:absolute;bottom:0;left:62.5px;width:25px;height:50px;background-color:#956940}#tree-section[_ngcontent-%COMP%]   .tree2[_ngcontent-%COMP%]{left:72%;z-index:2}#tree-section[_ngcontent-%COMP%]   .tree2[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]{background:linear-gradient(180deg,#32ab3a 0%,#7cbe31 100%);height:200px;width:150px;bottom:80px}#tree-section[_ngcontent-%COMP%]   .tree2[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]:after{content:"";width:100%;height:50px;display:block;background:radial-gradient(ellipse at center,#7CBE31 0%,#7CBE31 68%,transparent 0%);background-size:15px 15px;bottom:-40px;left:0;background-repeat:repeat-x;position:absolute}#tree-section[_ngcontent-%COMP%]   .tree2[_ngcontent-%COMP%]   .trunk[_ngcontent-%COMP%]{height:100px;left:62.5px}#tree-section[_ngcontent-%COMP%]   .tree3[_ngcontent-%COMP%]{left:68%}#tree-section[_ngcontent-%COMP%]   .tree3[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]{width:100px;height:100px;bottom:50px}#tree-section[_ngcontent-%COMP%]   .tree3[_ngcontent-%COMP%]   .trunk[_ngcontent-%COMP%]{left:42.5px}@keyframes windtree{23%{border-top-left-radius:70%}35%{border-top-left-radius:90%}40%{border-top-left-radius:100%}50%{border-top-left-radius:150%}60%{border-top-left-radius:200%}70%{border-top-left-radius:40%}80%{border-top-left-radius:50%}}#ground-wrap[_ngcontent-%COMP%]{background-color:#7cbe31;height:40px;position:relative}#ground-wrap[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;height:10px;bottom:-10px;left:0;right:0;background-image:linear-gradient(135deg,#7CBE31 33%,transparent 37%),linear-gradient(45deg,transparent 66%,#7CBE31 67%);background-size:10px 100%;background-repeat:repeat-x}#knowledge-info[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#ec546a;top:80px;left:50%;transform:translate(-50%);width:50vw;z-index:3;font-family:var(--font-miso);font-size:20px;color:#fff}@media (max-width: 575.98px){#knowledge-info[_ngcontent-%COMP%]{width:65%}}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]{min-width:50vw;max-height:350px;overflow:auto}@media (max-width: 575.98px){#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]{min-width:100%}}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   #chevron[_ngcontent-%COMP%]{position:absolute;top:65%;left:calc(50% - 30px);border-style:solid;border-color:#f18066;border-width:10px 10px 0 0;content:"";display:block;height:50px;transform:rotate(135deg);vertical-align:top;width:50px;z-index:2;animation:chevron 1.5s infinite}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{position:relative;display:flex}@media (max-width: 767.98px){#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{flex-direction:column}}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{width:135px;padding:15px 20px;background-color:#cf184c;text-align:right}@media (max-width: 767.98px){#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{width:100%;text-align:left}}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%]{margin-bottom:1px;background:linear-gradient(270deg,#f38008 0%,#e9b02e 100%);width:0;transition:all 1s ease-in;height:50px}#knowledge-info[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill-percentage[_ngcontent-%COMP%]{position:absolute;right:10px;top:15px}@keyframes chevron{0%{top:65%}50%{top:85%}to{top:65%}}']}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),t})();var P=l(1279);let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[m,C.ez,P.Ps]]}),t})()}}]);