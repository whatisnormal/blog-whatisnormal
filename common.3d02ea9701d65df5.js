"use strict";(self.webpackChunkblog_whatisnormal=self.webpackChunkblog_whatisnormal||[]).push([[592],{3164:(f,h,r)=>{r.d(h,{g:()=>l});var t=r(6895),e=r(8256),d=r(22),_=r(1481);function m(s,c){if(1&s&&(e.TgZ(0,"li")(1,"a",6),e._uU(2),e.qZA()()),2&s){const i=c.$implicit;e.xp6(2),e.Oqu(i)}}class l{constructor(c,i){this.route=c,this.meta=i}ngOnInit(){this.articleData=this.route.snapshot.data.articleContent,this.meta.addTag({name:"keywords",content:this.articleData.article.tags.join(",")})}}l.\u0275fac=function(c){return new(c||l)(e.Y36(d.gz),e.Y36(_.h_))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-article-details"]],standalone:!0,features:[e.jDz],decls:9,vars:5,consts:[[1,"title"],[1,"center-childs"],["alt","",3,"src"],[1,"content",3,"innerHtml"],[1,"tags"],[4,"ngFor","ngForOf"],["href","#",1,"tag"]],template:function(c,i){1&c&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.TgZ(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"div",1),e._UZ(5,"img",2),e.qZA(),e._UZ(6,"div",3),e.TgZ(7,"ul",4),e.YNc(8,m,3,1,"li",5),e.qZA()),2&c&&(e.xp6(1),e.Oqu(i.articleData.article.title),e.xp6(2),e.Oqu(i.articleData.article.publishedDate),e.xp6(2),e.Q6J("src",i.articleData.article.coverImgPath,e.LSH),e.xp6(1),e.Q6J("innerHtml",i.articleData.content,e.oJD),e.xp6(2),e.Q6J("ngForOf",i.articleData.article.tags))},dependencies:[t.ez,t.sg],styles:['p[_ngcontent-%COMP%]{color:green}.title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{margin-bottom:2rem}.center-childs[_ngcontent-%COMP%]{display:flex;justify-content:center}.tags[_ngcontent-%COMP%]{list-style:none;margin:0;overflow:hidden;padding:0}.tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left}.tag[_ngcontent-%COMP%]{background:#eee;border-radius:3px 0 0 3px;color:#999;display:inline-block;height:26px;line-height:26px;padding:0 20px 0 23px;position:relative;margin:0 10px 10px 0;text-decoration:none;-webkit-transition:color .2s}.tag[_ngcontent-%COMP%]:before{background:#fff;border-radius:10px;box-shadow:inset 0 1px #00000040;content:"";height:6px;left:10px;position:absolute;width:6px;top:10px}.tag[_ngcontent-%COMP%]:after{background:#fff;border-bottom:13px solid transparent;border-left:10px solid #eee;border-top:13px solid transparent;content:"";position:absolute;right:0;top:0}.tag[_ngcontent-%COMP%]:hover{background-color:#dc143c;color:#fff}.tag[_ngcontent-%COMP%]:hover:after{border-left-color:#dc143c}']})},8909:(f,h,r)=>{r.d(h,{P:()=>p});var t=r(8256),e=r(6895),d=r(1481),_=r(22),m=r(1135);const l=function(o){return["/reflections",o]},s=function(o,a){return[o,a]};function c(o,a){if(1&o&&(t.TgZ(0,"div",1)(1,"a",2)(2,"div",3)(3,"a",4),t._UZ(4,"img",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div",7)(7,"span",8)(8,"time",9),t._UZ(9,"i",10),t._uU(10),t.qZA()()(),t.TgZ(11,"div",11)(12,"h5",12),t._uU(13),t.qZA()()(),t.TgZ(14,"div",13)(15,"h2"),t._uU(16),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA()(),t._UZ(19,"div",14),t.qZA()()),2&o){const n=a.ngIf;t.xp6(1),t.Q6J("routerLink",t.VKq(7,l,n.fileName)),t.xp6(2),t.Q6J("routerLink",t.WLB(9,s,n.articleType,n.fileName)),t.xp6(1),t.Q6J("src",n.coverImgPath,t.LSH),t.xp6(6),t.hij(" ",n.publishedDate," "),t.xp6(3),t.Oqu(n.title),t.xp6(3),t.Oqu(n.title),t.xp6(2),t.Oqu(n.intro)}}class i{constructor(){this.artSubj=new m.X(void 0),this.article$=this.artSubj.asObservable()}set article(a){this.artSubj.next(a)}}i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-article-preview-card"]],inputs:{article:"article"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"u-url",3,"routerLink"],[1,"card-image"],[3,"routerLink"],["alt","",2,"width","100%","height","30%",3,"src"],[1,"card-header"],[1,"card-subtitle","text-gray"],[1,"blog-date"],[1,"dt-published"],[1,"fa","fa-calendar"],[1,"card-title"],[1,"p-name","mt-1"],[1,"card-body"],[1,"card-footer"]],template:function(a,n){1&a&&(t.YNc(0,c,20,12,"div",0),t.ALo(1,"async")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,n.article$))},dependencies:[e.ez,e.O5,e.Ov,_.rH],styles:[".card[_ngcontent-%COMP%]{flex:1 1 150px;inline-size:300px;margin-inline:10px;margin-bottom:20px;box-shadow:0 10px 45px -9px #0000001a;border:.05rem solid #e7e9ed;border-radius:1rem}a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#126bd9}.card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]:first-child{padding-top:0}.card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{border-top-left-radius:.1rem;border-top-right-radius:.1rem}.text-gray[_ngcontent-%COMP%]{color:#acb3c2!important}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{flex:1 1 auto}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:.8rem;padding-bottom:0}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:last-child, .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]:last-child, .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:last-child{padding-bottom:.8rem}.card-footer[_ngcontent-%COMP%]{text-align:right}"]});var g=r(1398);function u(o,a){if(1&o&&(t.ynx(0),t._UZ(1,"app-article-preview-card",10),t.BQk()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("article",n)}}class p{constructor(a,n,O){this.baseUrl=a,this.articles=n,this.route=O,this.sanitizer=(0,t.f3M)(d.H7),this.publicArticles=[],this.articleType="",this.title="",this.intro=""}ngOnInit(){this.title=this.route.snapshot.data.title,this.intro=this.route.snapshot.data.intro,this.articleType=this.route.snapshot.data.articleType,this.publicArticles=this.articles.filter(a=>a.articleType===this.articleType)}}p.\u0275fac=function(a){return new(a||p)(t.Y36(g._n),t.Y36(g.wX),t.Y36(_.gz))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-article-list"]],standalone:!0,features:[t.jDz],decls:21,vars:9,consts:[[1,"hero"],[1,"container","grid-lg",2,"text-align","center"],[2,"text-align","center","margin-top","10px"],[1,"blog-header"],["target","_blank","type","application/rss+xml",3,"href"],["target","_blank","type","application/atom+xml",3,"href"],["target","_blank","type","application/json",3,"href"],["id","to-start",1,"pulse","fa","fa-angle-down"],[1,"cards-list"],[4,"ngFor","ngForOf"],[3,"article"]],template:function(a,n){1&a&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h1",3),t._uU(4),t.qZA(),t._uU(5," (Feeds: "),t.TgZ(6,"a",4),t._uU(7,"RSS"),t.qZA(),t._uU(8," | "),t.TgZ(9,"a",5),t._uU(10,"Atom"),t.qZA(),t._uU(11," | "),t.TgZ(12,"a",6),t._uU(13,"JSON"),t.qZA(),t._uU(14," ) "),t.TgZ(15,"p"),t._UZ(16,"br"),t._uU(17),t.qZA()()(),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"div",8),t.YNc(20,u,2,1,"ng-container",9),t.qZA()),2&a&&(t.xp6(4),t.hij(" ",n.title," "),t.xp6(2),t.hYB("href","https://",n.baseUrl,"/",n.articleType,".rss",t.LSH),t.xp6(3),t.hYB("href","https://",n.baseUrl,"/",n.articleType,".atom",t.LSH),t.xp6(3),t.hYB("href","https://",n.baseUrl,"/",n.articleType,".json",t.LSH),t.xp6(5),t.hij(" ",n.intro,""),t.xp6(3),t.Q6J("ngForOf",n.publicArticles))},dependencies:[e.ez,e.sg,i],styles:[".hero[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-position:center;background-size:cover;padding-bottom:7rem}.container.grid-lg[_ngcontent-%COMP%]{max-width:976px;text-align:left!important}.container[_ngcontent-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:.4rem;padding-left:.4rem}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}.blog-header[_ngcontent-%COMP%]{line-height:1.1!important;margin-top:0;margin-bottom:0;color:#3a414e!important;text-align:center;font-size:3rem!important}.bricklayer[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;margin-left:5px;margin-right:5px;align-items:flex-start}a.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#126bd9}.cards-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}@media (width >= 768px){.hero[_ngcontent-%COMP%]{flex-direction:row}.bricklayer[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-around;gap:1rem}}"]})},9617:(f,h,r)=>{r.d(h,{u:()=>l});var t=r(4004),e=r(1398),d=r(8256),_=r(529),m=r(1481);class l{constructor(c,i,g){this.httpClient=c,this.sanitizer=i,this.articles=g}resolve(c,i){const g=c.paramMap.get("fileName"),u=this.articles.find(o=>o.fileName===g);return this.httpClient.get(`../assets/${u.articleType}/${g}.html`,{responseType:"text"}).pipe((0,t.U)(o=>({article:u,content:this.sanitizer.bypassSecurityTrustHtml(o)})))}}l.\u0275fac=function(c){return new(c||l)(d.LFG(_.eN),d.LFG(m.H7),d.LFG(e.wX))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}}]);