(()=>{function e(e,t,a,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&((a=void 0===a?document.getElementById(e):a).innerHTML=r.responseText,void 0!==n&&n[0](n[1]))},r.open("GET",t,!0),r.send()}var t,a,n,r=Object.freeze({AuthRegGameServer:0,authorize:1,register:2,login:3,msg:4,list:5,trade:6,mail:7,server_queue:8,game:9,game_menu:10,dCmd:11,可忽略:16}),s=(Object.freeze({訪客:0,七戲:1,旁門:2}),Object.freeze({authorize:0,授權GameLobby:0,授權AppGame:1,register:1,login:2,message:3,list:4,trans:5,mail:6,server_queue:7,ui_menu:8,logic:9,eCmds_dCmd:10,eCmd_可忽略:16})),o=(Object.freeze({GameLobby:0,Main:1,TopBoard:2,Options:3,Store:4,Help:5,GamePicking:6,Game:7}),Object.freeze({bl:0,c1:1,sa:2,sr:3,s1:4,s2:5,s3:6,sm:7,bt:8,i1:9,u1:10,i2:11,u2:12,i4:13,u4:14,i8:15,u8:16,db:17,fl:18,de:19,i1n:20,u1n:21,i2n:22,u2n:23,i4n:24,u4n:25,i8n:26,u8n:27,dbn:28,fln:29,den:30,ato:31,u1c:32,pu:33,pi:34,ps:35,pf:36,count:37}));function i(e,r,s,o,i,c,u){var h=[];h.push(e,r);for(var _=0;_<s.length;_++)h.push(2+o[_].length),h.push(s[_]),h=h.concat(o[_]);void 0!==c&&(c.disableInteractive(),(n=c.getChildByID("lstate")).innerHTML="等待伺服器回應…",a=setInterval(l,100,[u,100])),t.send(new Uint8Array(h)),h=[]}function l(e){e[0]=e[0]-e[1],"等待伺服器回應…"!=n.innerHTML?clearInterval(a):0==e[0]&&(clearInterval(a),n.innerHTML="伺服器沒有回應，請稍後再試…")}var c=void 0===document.pp?decodeURIComponent(window.location.search).substring(1).split("&"):document.pp;function u(){}function h(e){e.forEach((function(e){e.visible=!1}),this),e.reverse();var t=e.getAt(0),a=e.getAt(1);this._字身=Math.round(Math.max(t.centerX-a.centerX,a.centerY-t.centerY)),this._字句=e,this._橫數=Math.ceil(e.j_h/this._字身),this._豎數=Math.ceil(e.j_w/this._字身),this._字句寬=this._豎數*this._字身,this._可見豎數=Math.round(e.parent.j_w/this._字身),this._可見字數=this._可見豎數*this._橫數}console.log(c),u.prototype.Is_夾住限制=function(){var e=!1,t=.2*this.unit_travel,a=Phaser.Math.RoundTo(this.pnl_btnGroup.p);return is_水平模式?this.pnl_btnGroup.x=a.x>0?(e=a.x>max行程_夾住模式.x)?a.x>max行程_夾住模式.x+t?max行程_夾住模式+t:a.x-1:a.x:(e=a.x<-max行程_夾住模式.x)?a.x<-max行程_夾住模式.x-t?-max行程_夾住模式+t:a.x+1:a.x:this.pnl_btnGroup.y=a.y>0?(e=a.y>max行程_夾住模式.y)?a.y>max行程_夾住模式.y+t?max行程_夾住模式+t:a.y-1:a.y:(e=a.y<-max行程_夾住模式.y)?a.y<-max行程_夾住模式.y-t?-max行程_夾住模式+t:a.y+1:a.y,this.scene.input.setDraggable(this.pnl_btnGroup,!e),e},u.prototype.GetSnapedTravel=function(){return Phaser.Math.RoundTo(this.pnl_btnGroup.p/this.unit_travel)},u.prototype.UpdatePosSide=function(e){return e*this.unit_travel},u.prototype.SetPos=function(e,t){this.is_水平模式?e.x=t:e.y=t},u.prototype.ResetItemData=function(e,t,a,n,r,s){if(data_目前選中類別的章關=e,void 0===a)a=g;else for(var o=a.length-(a.length-g.length);o<a.length;o++)g[o]=g[0];if(null!=sp_供主類別前景項目)for(r=new Sprite[data_目前選中類別的章關[0].length],o=0;o<data_目前選中類別的章關[0].length;o++)r[o]=sp_供主類別前景項目[">"];sp_前景項目=void 0===r?sp_前景項目:r,sp_背景框=void 0===n?sp_背景框:n,data_目前選中類別的章關[0].length,id_獨特.length,id_獨特=data_目前選中類別的章關[0],iLable=data_目前選中類別的章關[1];var i="s格_"+name_IO溝通;if(CcLoader.app_cfg.ContainsKey(i))for(o=0;o<iLable.length;o++)iLable[o]=string.Format(CcLoader.app_cfg[i],iLable[o]);is_Srolling||(is_Srolling=!0,StartCoroutine(SrollingResetItems(t,a,s)))},h._目前步=0,h._目前步已讀完td=0,h._每字讀秒=490,h.prototype._跑字句=function(){this.travels=0,this.runtext=A.time.events.loop(142,(function(){this._字句.getAt(this.travels).visible=!0,this.travels++,this.travels>=this._可見字數&&1==this.travels%this._橫數&&(this._字句.x=this._字句.x+this._字身),this.travels>=this._字句.length&&(h._目前步已讀完td+=1,A.time.events.remove(this.runtext),console.log(h._目前步已讀完td,"this.目前步已讀完成字句框數"))}),this)},h.prototype.歸零=function(){this._字句.foreach((function(e){e.visible=!1}),this),this.pos_文字偏移量=0};var _,d,p,g=[16711680,16737792,16776960,65280,255,1539248,10027212,4509429,7402239,16751052],m=Object.freeze({初始化:0,房桌訊:1,進入遊戲:2,押注開獎:3,即時訊息:4,放棄投降:5,每手計時:6}),f=[],v=[];function b(){_=A.cache.getJSON("j_共用_話圖資源頁").textures,console.log("================ j_共用_話圖資源頁 =====================",_);for(var e=A.cache.getJSON("j_共用_話圖資源頁").BMD,t=0;t<e.length;t++)M(e[t])}function y(e){d=A.cache.getJSON("j_lp"),_=d.textures.concat(A.cache.getJSON("j_共用_話圖資源頁").textures),f=d.BMD,p=d.GB,d.steps;for(var t=0;t<d.textures.length;t++){var a=_[t];console.log("j_切圖塊資訊.image, j_切圖塊資訊.url",a.image,a.url),A.load.image(a.image,a.url)}console.log("===========================================",_),A.load.onLoadComplete.add(E),A.load.start()}function E(){for(var e=0;e<f.length;e++)M(f[e]);var t=Object.getOwnPropertyNames(p);for(e=0;e<t.length;e++)p.name=t[e];!function(){for(var e=d.steps,t=0;t<e.length;t++){var a=JSON.parse(JSON.stringify(e[t])),n=A.add.group(A.world,a.name);n.tn=[],n.td=[],n.ts=[];for(var r=0;r<a.parts.length;r++){var s=S(a.parts[r],n);x(s,a.parts[r]),s.alpha=0,s.visible=!1,/^group_p\d+_step\d+_td\d+/.test(s.name)?(n.add(s),n.td.push(s),s.forEach((function(e){0==e.name.indexOf("group_話引箭號")&&(e.alpha=0,s._話引箭號=e)}))):/^group_p\d+step\d+準切塊的點陣圖\d+/.test(s.name)?(n.addAt(s,0),s.alpha=1,s.visible=!0):/^group_p\d+_step\d+_tn\d+/.test(s.name)?(n.addAt(s,1),n.tn.push(s),s.alpha=0,s.visible=!0):(n.addAt(s,1),n.ts.push(s),s.alpha=1,s.visible=!0)}n.json=a,v.push(n),n.alpha=0,n.visible=!1}setTimeout(C,1e3)}()}function M(e){for(var t=A.make.bitmapData(Math.ceil(e.w),Math.ceil(e.h),e.name,!0),a=e.parts,n=(e.name.indexOf("準切塊"),0);n<a.length;n++){var r=a[n],s=I(r.name),o=A.cache.getBitmapData(r.name);if(null!=s){var i=T(s,r,!0);t.copy(i,0,0,i.width,i.height,r.x,r.y,i.width,i.height,r.rot/180*-Math.PI,.5,.5)}else if(o)t.copy(o,0,0,o.width,o.height,r.x,r.y,o.width,o.height,r.rot/180*-Math.PI,.5,.5,r.sW,r.sH);else if("draw_circle"===r.name){var l=Math.ceil(.5*r.w);r.sH>r.sW&&(l=Math.ceil(l*r.sH),r.sW=r.sW/r.sH,r.sH=1);var c=Math.ceil(2*l),u=A.make.bitmapData(c,c);u.circle(l,l,l,"#"+w(r.R,r.G,r.B)),t.copy(u,0,0,c,c,r.x,r.y,c*r.sW,c*r.sH,r.rot/180*-Math.PI,.5,.5)}else if("draw_rect"===r.name){var h=A.make.bitmapData(r.w,r.h);h.fill(Math.max(16,r.R),Math.max(16,r.G),Math.max(16,r.B)),t.copy(h,0,0,r.w,r.h,r.x,r.y,r.w,r.h,r.rot/180*-Math.PI,.5,.5)}}return t}function w(e,t,a){return Math.max(16,e).toString(16)+Math.max(16,t).toString(16)+Math.max(16,a).toString(16)}function x(e,t){if(t.name,null!=e.length){var a=[];e.forEach((function(e){a.push(e)}),this),e.removeAll(),e.x=e.j_x-.5*t.w,e.y=e.j_y-.5*t.h;for(var n=0;n<a.length;n++){var r=a[n];e.add(r),r.x=r.j_x,r.y=r.j_y}}}function S(e,t){var a={},n=e.name,r=I(n),s=A.cache.getBitmapData(n);return r?a=T(r,e):s?(a=A.add.image(e.x,e.y,s)).anchor.set(.5,.5):a=function(e,t){var a,n=e.name,r=p[n],s=A.add.group(A.world,n);if(0===n.indexOf("mask_group_")&&(s.j_w=r.w,s.j_h=r.h,a=function(e,t){var a=e.name,n=(p[a],A.add.graphics(0,0,t));return n.beginFill(16717334),n.drawRect(.5*-e.w,.5*-e.h,e.w,e.h),n.endFill(),n}(e,s)),r.hasOwnProperty("parts"))for(var o=0;o<r.parts.length;o++){var i=r.parts[o],l=(i.name,S(i,s));P(l,i),s.add(l),null!=a&&(l.centerX=l.centerX-.5*a.width,l.centerY=l.centerY-.5*a.height,l.mask=a,l.j_w=i.w,l.j_h=i.h,/mask_group_字塊_p\d+_step\d+_td\d+/.test(n)&&(t._讀字機=new h(l)))}return P(s,e),s}(e,t),a.name=n,a.j_x=e.x,a.j_y=e.y,a._動畫=e["_動畫"],a}function I(e){for(var t=0;t<_.length;t++)for(var a=_[t].frames,n=0;n<a.length;n++){var r=a[n];if(e===r.filename)return{key_txr:_[t].image,_切圖塊:r}}return null}function T(e,t,a){var n=e["_切圖塊"],r=90==n.angle,s=(t.rot,Math.PI,r&&Math.PI,r?n.frame.h:n.frame.w),o=r?n.frame.w:n.frame.h,i=(s=Math.ceil(Math.abs(s*t.sW)),o=Math.ceil(Math.abs(o*t.sH)),A.make.bitmapData(s,o));i.copy(e.key_txr,n.frame.x,n.frame.y,n.frame.w,n.frame.h,.5*s,.5*o,n.frame.w,n.frame.h,r?.5*-Math.PI:0,.5,.5,t.sW,t.sH);var l=A.make.image(0,0,i);return t.hasOwnProperty("R")&&(l.tint="0x"+w(t.R,t.G,t.B)),l.anchor.setTo(.5),!0===a||(l.position.setTo(t.x,t.y),l.scale.setTo(t.sW,t.sH),l.angle=-t.rot),l}function P(e,t){e.scale.setTo(t.sW,t.sH),e.centerX=t.x,e.centerY=t.y,e.angle=-t.rot}var k,A=new Phaser.Game(800,600,Phaser.CANVAS,"comic",{preload,create});function L(){document.body.addEventListener("click",m),console.log("歡迎進入",document.baseURI," S話圖瀏覽器！！！\n",c);for(var e=new Phaser.Loader(A),t=A.cache.getJSON("j_共用_話圖資源頁").textures,a=0;a<t.length;a++){var n=t[a];e.image(n.image,n.url)}e.onLoadComplete.add(b),e.start()}function m(t){switch(console.log(t,t.target),t.target.id){case"btn MenuMain Help":menu_in=menu[param_lobby.Menu_Help.id],e(void 0,R.Menu_Help,menu_in,[SetMenuIO,[menu[param_lobby.Menu_Main.id],"777px","DownBack"]]);break;case"btn MenuMain Option":menu_in=menu[param_lobby.Menu_Options.id],e(void 0,R.Menu_Options,menu_in,[SetMenuIO,[menu[param_lobby.Menu_Main.id],"777px","DownBack"]]);break;case"btn MenuGamePicking Play":var a=document.getElementById("scrl 篇集索引").id_選中鈕,n=document.getElementById("scrl 章回索引").id_選中鈕,s=k.content[a][n].key;switch(s){case"":alert("本章回"+e品項狀態[s]+"可選擇其他已經開放的。");break;case"0":Go_觀遊聆戲(a,n);break;case"1":if(confirm("本回內容需要收一張觀聆票卷\n確定支付？"))if(uData.av_ticket){var l=new Date,c=(""+l.getFullYear()+(l.getMonth()+1)).substring(2);uData.id_篇集=a,uData.id_章回=n,i(r.game_menu,eCS.進入聆遊觀戲,[o.sr,o.sr],[EncodeUtf8(c),EncodeUtf8(k.content[a][n].date_time)])}else alert("目前您沒有觀聆票卷")}break;case"btn MenuGamePicking Back":default:break;case"pop_m機台有人":t.target.classList.toggle("show")}"scrl 話頁"===t.target.parentNode.id&&(v.forEach((function(e,t,a){a[t].destroy(!0)})),v=[],h._目前步=0,h._目前步已讀完td=0,t.target.parentNode.id_選中鈕=t.target.id,document.getElementById("sel 選頁").innerHTML="目前選擇第"+(parseInt(t.target.id)+1)+" 話頁：",function(e){var t=new Phaser.Loader(A);t.json("j_lp","assets/CcTextAssets/Level_Chapter/act0/page"+e+".json"),t.onLoadComplete.add(y,this,0,e),t.start()}(parseInt(t.target.id)))}function C(){var e;(e=v[h._目前步]).visible=!0,e.alpha=1,e.getAt(0).visible=!0,e.getAt(0).alpha=1,function(e){A.add.tween(e).from({alpha:0},490,Phaser.Easing.Circular.InOut,!0).onComplete.add(B,null,null,e)}(e=v[h._目前步])}function B(e,t){if(0===e.tn.length)O(e.td.length>0?e:void 0);else{var a=e.tn[0];for(A.add.tween(a).to({alpha:1},490,Phaser.Easing.Circular.InOut,!0),A.add.tween(a).from({x:a._動畫.fX,y:a._動畫.fY,width:0,height:0,angle:a.angle-90},490,Phaser.Easing.Circular.InOut,!0).onComplete.add((function(){O(e.td.length>0?e:void 0)}));1<e.tn.length;index++)a=e.tn[1],A.add.tween(a).to({alpha:1},490,Phaser.Easing.Circular.InOut,!0),A.add.tween(a).from({x:a._動畫.fX,y:a._動畫.fY,alpha:0,width:0,height:0,angle:a.angle-90},490,Phaser.Easing.Circular.InOut,!0)}}function O(e,t){if(void 0!==e){var a=0,n=e.td[a];n.visible=!0,n.alpha=1,console.log(n.name,"_目前td字句框._讀字機.",n),A.add.tween(n).from({x:n._動畫.fX,y:n._動畫.fY,alpha:0,width:0,height:0},777,Phaser.Easing.Circular.InOut,!0).onComplete.add(j,null,null,n);var r=A.time.events.loop(280,(function(){1==n._讀字機.travels/n._讀字機._字句.length&&(h._目前步已讀完td>=e.td.length?(console.log("目前步已經讀完，換讀下步"),e.visible=!1,h._目前步++,h._目前步已讀完td=0,h._目前步>=v.length?h._目前步=0:setTimeout(C,490),A.time.events.remove(r)):(a+=1,(n=e.td[a]).visible=!0,n.alpha=1,A.add.tween(n).from({x:n._動畫.fX,y:n._動畫.fY,alpha:0,width:0,height:0},777,Phaser.Easing.Circular.InOut,!0).onComplete.add(j,null,null,n))),console.log(h._目前步已讀完td,"_目前td文具框讀字進度",e.td.length)}))}}function j(e,t){void 0===e._話引箭號?e._讀字機._跑字句():A.add.tween(e._話引箭號).to({alpha:1},490,Phaser.Easing.Power1,!0).onComplete.add(e._讀字機._跑字句,e._讀字機)}c[7],document.init=function(){e("content",R.Menu_Main,void 0,[L,void 0]),A.stage.backgroundColor="#4488AA",console.log("歡迎進入",document.baseURI," 皮飛比的世界"),A.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,A.scale.pageAlignHorizontally=!0,A.scale.pageAlignVertically=!0,A.stage.disableVisibilityChange=!0,A.load.baseURL=R.baseURL,A.load.json("j_共用_話圖資源頁","../Game_Comics/Assets/CcTextAssets/_共用_話圖資源頁.json")},c[0]="debug","debug"!=c[0]&&function(e){try{var a=new Array("正在連線","已建立連線","正在關閉連線","已關閉連線");console.log("ws.connect 場次內容：",uData.gWS),(t=new WebSocket(uData.gWS)).binaryType="arraybuffer",document.getElementById("message"),console.log("Socket狀態：",a[t.readyState]),t.onopen=function(){!function(){console.log("cfg Rules _票auth_code：",c[3]);var e=parseInt(c[3],10);票碼=NaN===e?new Uint8Array([231,71,68,66]):new Uint8Array([255&e,e>>8&255,e>>16&255,e>>24&255]),t.send(new Uint8Array([r.authorize,0])),i(r.authorize,s.授權AppGame,[o.u4,o.sr],[[255&e,e>>8&255,e>>16&255,e>>24&255],EncodeUtf8(c[2])])}()},t.onerror=function(e){alert("目前網路忙線，與伺服器連線已經中斷\n請稍後再試。")},t.onmessage=function(e){var t=new Uint8Array(e.data);console.log("Server的原生回傳(Raw FDBK) : ",t," 資料{Array}長度：",t.length),SCB[t[0]][t[1]](function(e){for(var t=[],a=2;a<e.length;){var n=e[a],r=e[a+1],s=0,i=a+2;if(!n)return alert(a+"< 料- 長度 >:"+n),void console.log(a,"< 料- 長度 >:"+e[a],"  < 類型 >:"+r);switch(r){case o.bl:case o.c1:break;case o.sa:for(var l,c=[],u=2,h=0;h<n;h++)l=e[d=a+u],c.push(DecodeUtf8(e.slice(d+1,d+l))),u+=l;n=u,t.push(c),s++;break;case o.sr:t.push(DecodeUtf8(e.slice(i,i+n))),n+=2;break;case o.s1:var _=DecodeUtf8(e.slice(i,i+n)).split(",");t.push(_),n+=2;break;case o.s2:case o.s3:case o.sm:break;case o.bt:for(c=[],u=2,h=0;h<n;h++){for(var d=a+u,p=0;p<8;p++)c.push(1&e[d]>>p);u+=1}n=u,t.push(c),s++;break;case o.i1:for(c=new Int8Array(n),u=2,h=0;h<n;h++)d=a+u,c[h]=e[d],u+=Int8Array.BYTES_PER_ELEMENT;n=u,t.push(c);break;case o.u1:for(c=new Uint8Array(n),u=2,h=0;h<n;h++)d=a+u,c[h]=e[d],u+=Uint8Array.BYTES_PER_ELEMENT;n=u,t.push(c);break;case o.i2:for(c=[],u=2,h=0;h<n;h++){d=a+u;var g=0;for(p=0;p<Int16Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),u+=Int16Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.u2:for(c=[],u=2,h=0;h<n;h++){for(d=a+u,g=0,p=0;p<Uint16Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),u+=Uint16Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.i4:for(c=[],u=2,h=0;h<n;h++){for(d=a+u,g=0,p=0;p<Int32Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),u+=Int32Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.u4:for(c=[],u=2,h=0;h<n;h++){for(d=a+u,g=0,p=0;p<Uint32Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),u+=Uint32Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.i8:case o.u8:case o.db:case o.fl:case o.de:case o.i1n:case o.u1n:case o.i2n:case o.u2n:case o.i4n:case o.u4n:case o.i8n:case o.u8n:case o.dbn:case o.fln:case o.den:case o.u1c:break;case o.pu:for(c=[],u=2,h=0;h<n;h++){for(d=a+u,g=0,p=0;p<Uint32Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),localStorage.setItem(uData.gID+"_pu"+r.toString()+s,g),console.log("pu:::>",g),s++,u+=Uint32Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.pi:for(c=[],u=2,h=0;h<n;h++){for(d=a+u,g=0,p=0;p<Int32Array.BYTES_PER_ELEMENT;p++)g|=e[d+p]<<8*p;c.push(g),localStorage.setItem(uData.gID+"_pi"+r.toString()+s,g),console.log("pi:::>",g),s++,u+=Int32Array.BYTES_PER_ELEMENT}n=u,t.push(c);break;case o.ps:console.log("pos_本type料頭:::>",e.length,i,n),g=DecodeUtf8(e.subarray(i,i+n)),t.push(g),localStorage.setItem(uData.gID+"_ps",g),n+=2;case o.pf:case o.count:}a+=n}return console.log("Server回傳(FDBK)的萃取：",t),t}(t))},t.onclose=function(){console.log("網路狀態：",a[t.readyState])}}catch(e){alert("網路連線狀態發生錯誤\n"+e)}}();var R={baseURL:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/",Menu_Main:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/Menu_Main",Menu_TopBoard:"",Menu_Options:"",Menu_Store:"",Menu_Help:"",Menu_GamePicking:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/Menu_GamePicking",Menu_Game:""}})();