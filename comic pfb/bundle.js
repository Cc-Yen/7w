(()=>{var e,t,a,n=Object.freeze({AuthRegGameServer:0,authorize:1,register:2,login:3,msg:4,list:5,trade:6,mail:7,server_queue:8,game:9,game_menu:10,dCmd:11,可忽略:16}),r=(Object.freeze({訪客:0,七戲:1,旁門:2}),Object.freeze({authorize:0,授權GameLobby:0,授權AppGame:1,register:1,login:2,message:3,list:4,trans:5,mail:6,server_queue:7,ui_menu:8,logic:9,eCmds_dCmd:10,eCmd_可忽略:16})),s=(Object.freeze({GameLobby:0,Main:1,TopBoard:2,Options:3,Store:4,Help:5,GamePicking:6,Game:7}),Object.freeze({bl:0,c1:1,sa:2,sr:3,s1:4,s2:5,s3:6,sm:7,bt:8,i1:9,u1:10,i2:11,u2:12,i4:13,u4:14,i8:15,u8:16,db:17,fl:18,de:19,i1n:20,u1n:21,i2n:22,u2n:23,i4n:24,u4n:25,i8n:26,u8n:27,dbn:28,fln:29,den:30,ato:31,u1c:32,pu:33,pi:34,ps:35,pf:36,count:37}));function o(e){e[0]=e[0]-e[1],"等待伺服器回應…"!=a.innerHTML?clearInterval(t):0==e[0]&&(clearInterval(t),a.innerHTML="伺服器沒有回應，請稍後再試…")}var i=void 0===document.pp?decodeURIComponent(window.location.search).substring(1).split("&"):document.pp;function c(){}function l(e){e.forEach((function(e){e.visible=!1}),this),e.reverse();var t=e.getAt(0),a=e.getAt(1);this._字身=Math.round(Math.max(t.centerX-a.centerX,a.centerY-t.centerY)),this._字句=e,this._橫數=Math.ceil(e.j_h/this._字身),this._豎數=Math.ceil(e.j_w/this._字身),this._字句寬=this._豎數*this._字身,this._可見豎數=Math.round(e.parent.j_w/this._字身),this._可見字數=this._可見豎數*this._橫數}function h(){console.log("CCCCcccCcaaaa!!!")}console.log(i),c.prototype.Is_夾住限制=function(){var e=!1,t=.2*this.unit_travel,a=Phaser.Math.RoundTo(this.pnl_btnGroup.p);return is_水平模式?this.pnl_btnGroup.x=a.x>0?(e=a.x>max行程_夾住模式.x)?a.x>max行程_夾住模式.x+t?max行程_夾住模式+t:a.x-1:a.x:(e=a.x<-max行程_夾住模式.x)?a.x<-max行程_夾住模式.x-t?-max行程_夾住模式+t:a.x+1:a.x:this.pnl_btnGroup.y=a.y>0?(e=a.y>max行程_夾住模式.y)?a.y>max行程_夾住模式.y+t?max行程_夾住模式+t:a.y-1:a.y:(e=a.y<-max行程_夾住模式.y)?a.y<-max行程_夾住模式.y-t?-max行程_夾住模式+t:a.y+1:a.y,this.scene.input.setDraggable(this.pnl_btnGroup,!e),e},c.prototype.GetSnapedTravel=function(){return Phaser.Math.RoundTo(this.pnl_btnGroup.p/this.unit_travel)},c.prototype.UpdatePosSide=function(e){return e*this.unit_travel},c.prototype.SetPos=function(e,t){this.is_水平模式?e.x=t:e.y=t},c.prototype.ResetItemData=function(e,t,a,n,r,s){if(data_目前選中類別的章關=e,void 0===a)a=_;else for(var o=a.length-(a.length-_.length);o<a.length;o++)_[o]=_[0];if(null!=sp_供主類別前景項目)for(r=new Sprite[data_目前選中類別的章關[0].length],o=0;o<data_目前選中類別的章關[0].length;o++)r[o]=sp_供主類別前景項目[">"];sp_前景項目=void 0===r?sp_前景項目:r,sp_背景框=void 0===n?sp_背景框:n,data_目前選中類別的章關[0].length,id_獨特.length,id_獨特=data_目前選中類別的章關[0],iLable=data_目前選中類別的章關[1];var i="s格_"+name_IO溝通;if(CcLoader.app_cfg.ContainsKey(i))for(o=0;o<iLable.length;o++)iLable[o]=string.Format(CcLoader.app_cfg[i],iLable[o]);is_Srolling||(is_Srolling=!0,StartCoroutine(SrollingResetItems(t,a,s)))},l._目前步=0,l._目前步已讀完td=0,l._每字讀秒=490,l.prototype._跑字句=function(){this.travels=0,this.runtext=y.time.events.loop(142,(function(){this._字句.getAt(this.travels).visible=!0,this.travels++,this.travels>=this._可見字數&&1==this.travels%this._橫數&&(this._字句.x=this._字句.x+this._字身),this.travels>=this._字句.length&&(l._目前步已讀完td+=1,y.time.events.remove(this.runtext),console.log(l._目前步已讀完td,"this.目前步已讀完成字句框數"))}),this)},l.prototype.歸零=function(){this._字句.foreach((function(e){e.visible=!1}),this),this.pos_文字偏移量=0};var u,_=[16711680,16737792,16776960,65280,255,1539248,10027212,4509429,7402239,16751052];function p(){u=y.cache.getJSON("j_共用_話圖資源頁").textures,console.log("================ j_共用_話圖資源頁 =====================",u);for(var e=y.cache.getJSON("j_共用_話圖資源頁").BMD,t=0;t<e.length;t++)m(e[t])}function m(e){for(var t=y.make.bitmapData(Math.ceil(e.w),Math.ceil(e.h),e.name,!0),a=e.parts,n=(e.name.indexOf("準切塊"),0);n<a.length;n++){var r=a[n],s=f(r.name),o=y.cache.getBitmapData(r.name);if(null!=s){var i=d(s,r,!0);t.copy(i,0,0,i.width,i.height,r.x,r.y,i.width,i.height,r.rot/180*-Math.PI,.5,.5)}else if(o)t.copy(o,0,0,o.width,o.height,r.x,r.y,o.width,o.height,r.rot/180*-Math.PI,.5,.5,r.sW,r.sH);else if("draw_circle"===r.name){var c=Math.ceil(.5*r.w);r.sH>r.sW&&(c=Math.ceil(c*r.sH),r.sW=r.sW/r.sH,r.sH=1);var l=Math.ceil(2*c),h=y.make.bitmapData(l,l);h.circle(c,c,c,"#"+g(r.R,r.G,r.B)),t.copy(h,0,0,l,l,r.x,r.y,l*r.sW,l*r.sH,r.rot/180*-Math.PI,.5,.5)}else if("draw_rect"===r.name){var u=y.make.bitmapData(r.w,r.h);u.fill(Math.max(16,r.R),Math.max(16,r.G),Math.max(16,r.B)),t.copy(u,0,0,r.w,r.h,r.x,r.y,r.w,r.h,r.rot/180*-Math.PI,.5,.5)}}return t}function g(e,t,a){return Math.max(16,e).toString(16)+Math.max(16,t).toString(16)+Math.max(16,a).toString(16)}function f(e){for(var t=0;t<u.length;t++)for(var a=u[t].frames,n=0;n<a.length;n++){var r=a[n];if(e===r.filename)return{key_txr:u[t].image,_切圖塊:r}}return null}function d(e,t,a){var n=e["_切圖塊"],r=90==n.angle,s=(t.rot,Math.PI,r&&Math.PI,r?n.frame.h:n.frame.w),o=r?n.frame.w:n.frame.h,i=(s=Math.ceil(Math.abs(s*t.sW)),o=Math.ceil(Math.abs(o*t.sH)),y.make.bitmapData(s,o));i.copy(e.key_txr,n.frame.x,n.frame.y,n.frame.w,n.frame.h,.5*s,.5*o,n.frame.w,n.frame.h,r?.5*-Math.PI:0,.5,.5,t.sW,t.sH);var c=y.make.image(0,0,i);return t.hasOwnProperty("R")&&(c.tint="0x"+g(t.R,t.G,t.B)),c.anchor.setTo(.5),!0===a||(c.position.setTo(t.x,t.y),c.scale.setTo(t.sW,t.sH),c.angle=-t.rot),c}Object.freeze({初始化:0,房桌訊:1,進入遊戲:2,押注開獎:3,即時訊息:4,放棄投降:5,每手計時:6});var y=new Phaser.Game(800,600,Phaser.CANVAS,"comic",{preload:function(){y.stage.backgroundColor="#4488AA",console.log("歡迎進入",document.baseURI," 皮飛比的世界"),y.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,y.scale.pageAlignHorizontally=!0,y.scale.pageAlignVertically=!0,y.stage.disableVisibilityChange=!0,y.load.baseURL=E.baseURL,y.load.json("j_共用_話圖資源頁","../Game_Comics/Assets/CcTextAssets/_共用_話圖資源頁.json")},create:function(){for(var e=new Phaser.Loader(y),t=y.cache.getJSON("j_共用_話圖資源頁").textures,a=0;a<t.length;a++){var n=t[a];e.image(n.image,n.url)}e.onLoadComplete.add(p),e.start()}});i[7],document.init=function(){document.getElementById("1").addEventListener("click",h),console.log(" <>>>> >",document.getElementById("scrl 話頁"),"\n歡迎進入",document.baseURI," S話圖瀏覽器！！！\n",i)},i[0]="debug","debug"!=i[0]&&function(c){try{var l=new Array("正在連線","已建立連線","正在關閉連線","已關閉連線");console.log("ws.connect 場次內容：",uData.gWS),(e=new WebSocket(uData.gWS)).binaryType="arraybuffer",document.getElementById("message"),console.log("Socket狀態：",l[e.readyState]),e.onopen=function(){!function(){console.log("cfg Rules _票auth_code：",i[3]);var c=parseInt(i[3],10);票碼=NaN===c?new Uint8Array([231,71,68,66]):new Uint8Array([255&c,c>>8&255,c>>16&255,c>>24&255]),e.send(new Uint8Array([n.authorize,0])),function(n,r,s,i,c,l,h){var u=[];u.push(n,r);for(var _=0;_<s.length;_++)u.push(2+i[_].length),u.push(s[_]),u=u.concat(i[_]);void 0!==l&&(l.disableInteractive(),(a=l.getChildByID("lstate")).innerHTML="等待伺服器回應…",t=setInterval(o,100,[h,100])),e.send(new Uint8Array(u)),u=[]}(n.authorize,r.授權AppGame,[s.u4,s.sr],[[255&c,c>>8&255,c>>16&255,c>>24&255],EncodeUtf8(i[2])])}()},e.onerror=function(e){alert("目前網路忙線，與伺服器連線已經中斷\n請稍後再試。")},e.onmessage=function(e){var t=new Uint8Array(e.data);console.log("Server的原生回傳(Raw FDBK) : ",t," 資料{Array}長度：",t.length),SCB[t[0]][t[1]](function(e){for(var t=[],a=2;a<e.length;){var n=e[a],r=e[a+1],o=0,i=a+2;if(!n)return alert(a+"< 料- 長度 >:"+n),void console.log(a,"< 料- 長度 >:"+e[a],"  < 類型 >:"+r);switch(r){case s.bl:case s.c1:break;case s.sa:for(var c,l=[],h=2,u=0;u<n;u++)c=e[p=a+h],l.push(DecodeUtf8(e.slice(p+1,p+c))),h+=c;n=h,t.push(l),o++;break;case s.sr:t.push(DecodeUtf8(e.slice(i,i+n))),n+=2;break;case s.s1:var _=DecodeUtf8(e.slice(i,i+n)).split(",");t.push(_),n+=2;break;case s.s2:case s.s3:case s.sm:break;case s.bt:for(l=[],h=2,u=0;u<n;u++){for(var p=a+h,m=0;m<8;m++)l.push(1&e[p]>>m);h+=1}n=h,t.push(l),o++;break;case s.i1:for(l=new Int8Array(n),h=2,u=0;u<n;u++)p=a+h,l[u]=e[p],h+=Int8Array.BYTES_PER_ELEMENT;n=h,t.push(l);break;case s.u1:for(l=new Uint8Array(n),h=2,u=0;u<n;u++)p=a+h,l[u]=e[p],h+=Uint8Array.BYTES_PER_ELEMENT;n=h,t.push(l);break;case s.i2:for(l=[],h=2,u=0;u<n;u++){p=a+h;var g=0;for(m=0;m<Int16Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),h+=Int16Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.u2:for(l=[],h=2,u=0;u<n;u++){for(p=a+h,g=0,m=0;m<Uint16Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),h+=Uint16Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.i4:for(l=[],h=2,u=0;u<n;u++){for(p=a+h,g=0,m=0;m<Int32Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),h+=Int32Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.u4:for(l=[],h=2,u=0;u<n;u++){for(p=a+h,g=0,m=0;m<Uint32Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),h+=Uint32Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.i8:case s.u8:case s.db:case s.fl:case s.de:case s.i1n:case s.u1n:case s.i2n:case s.u2n:case s.i4n:case s.u4n:case s.i8n:case s.u8n:case s.dbn:case s.fln:case s.den:case s.u1c:break;case s.pu:for(l=[],h=2,u=0;u<n;u++){for(p=a+h,g=0,m=0;m<Uint32Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),localStorage.setItem(uData.gID+"_pu"+r.toString()+o,g),console.log("pu:::>",g),o++,h+=Uint32Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.pi:for(l=[],h=2,u=0;u<n;u++){for(p=a+h,g=0,m=0;m<Int32Array.BYTES_PER_ELEMENT;m++)g|=e[p+m]<<8*m;l.push(g),localStorage.setItem(uData.gID+"_pi"+r.toString()+o,g),console.log("pi:::>",g),o++,h+=Int32Array.BYTES_PER_ELEMENT}n=h,t.push(l);break;case s.ps:console.log("pos_本type料頭:::>",e.length,i,n),g=DecodeUtf8(e.subarray(i,i+n)),t.push(g),localStorage.setItem(uData.gID+"_ps",g),n+=2;case s.pf:case s.count:}a+=n}return console.log("Server回傳(FDBK)的萃取：",t),t}(t))},e.onclose=function(){console.log("網路狀態：",l[e.readyState])}}catch(e){alert("網路連線狀態發生錯誤\n"+e)}}();var E={baseURL:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/",Menu_Main:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/Menu_Main",Menu_TopBoard:"",Menu_Options:"",Menu_Store:"",Menu_Help:"",Menu_GamePicking:"https://raw.githubusercontent.com/Cc-Yen/7w/main/comic pfb/Menu_GamePicking",Menu_Game:""}})();