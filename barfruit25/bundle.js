(()=>{function e(e){const t=encodeURIComponent(e),n=[];for(var i=0;i<t.length;i++){const e=t.charAt(i);if("%"===e){const e=t.charAt(i+1)+t.charAt(i+2),o=parseInt(e,16);n.push(o),i+=2}else n.push(e.charCodeAt(0))}return n}function t(e){for(var t="",n=0;n<e.length;n++)t+="%"+e[n].toString(16);return decodeURIComponent(t)}function n(){}function i(e){return new RegExp("({)?\\{"+e+"\\}(?!})","gm")}function o(e){return null==e?"":e.replace(i("\\d+"),"")}function e(e){for(var t=encodeURIComponent(e),n=[],i=0;i<t.length;i++){var o=t.charAt(i);if("%"===o){var a=t.charAt(i+1)+t.charAt(i+2),s=parseInt(a,16);n.push(s),i+=2}else n.push(o.charCodeAt(0))}return n}function t(e){for(var t="",n=0;n<e.length;n++)t+="%"+e[n].toString(16);return decodeURIComponent(t)}n.Load_MultiAtlas=function(e){},n.Set_七戲類別_單字串陣列=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),i={},o=1;o<t.length;o++)i[n[o]]=t[o].replace("\r","").split("\n");return i},n.Set_七戲類別_毎筆陣列結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),i={},o=1;o<t.length;o++)i[n[o]]=this.Set_毎筆2D型格式資料(t[o]);return i},n.Set_七戲類別資料結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),i={},o=1;o<t.length;o++)i[n[o]]=this.Set_欄首2D型格式資料(t[o]);return i},n.Set_欄首2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var i=e.replace("\r","").split(n),o=[];const a=i[0].split(",").length;for(var s=0;s<a;s++)o[s]=[];for(var r=0;r<i.length;r++){var l=i[r].split(",");for(s=0;s<l.length;s++)o[s][r]=l[s]}return o},n.Set_毎筆2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var i=e.replace("\r","").split(n);ret=[[]];for(var o=0;o<i.length;o++){var a=i[o].split(",");ret[o]=[];for(var s=0;s<a.length;s++)ret[o][s]=a[s]}return ret},n.sSplit=function(e,t){return e.split(t)},n.Set_數字前置補零=function(e,t){for(var n=t-e.toString(10).length,i="",o=0;o<n;o++)i="0"+i;return i},n.Set_數字千位標點符號=function(e){for(var t=e.toString(),n="",i=1,o=t.length-1;o>-1;o--)n=(i%3==0&&t.length>i?",":"")+t[o]+n,i++;return n},n.Set_文字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=h.between(0,e.length-1),i=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,i);break;case 1:e.push(i);break;case 2:e.splice(h.between(0,e.length-1),0,i-1)}}},n.Set_數字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=h.between(0,e.length-1),i=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,i);break;case 1:e.push(i);break;case 2:e.splice(h.between(0,e.length-1),0,i-1)}}},n._抽取機率箱=function(e,t){if(t=null==t?0:t,0==e.length)return-1;var n=h.between(_啟始碼,e.length-1),i=e[n];return delete e[n],i},n._抽取機率箱=function(e,t){if(啟始碼=null==啟始碼?0:啟始碼,0==e.length)return null;var n=h.between(t,e.length-1),i=e[n];return delete e[n],i},n.IP_FromINT=function(e){return(255&e)+"."+(e>>8&255)+"."+(e>>16&255)+"."+(e>>24&255)},n.Get_現在時刻=function(e){e=void 0===e;var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+(e?"."+t.getMilliseconds()%1e3:"")},n.Get_TimeFrom整數=function(e,t){var n=new Date(1970,0,1,8,0,0);return n.setSeconds(e),n.toISOString().replace("T"," ").replace("Z","").split(".")[0]+(void 0===t?"":"."+t)},n.Get_整數FromTime=function(e){return new Date(e).getTime()},n.Clamp=function(e,t,n){return Math.min(Math.max(e,n),t)},n.Get_詞嵌入文=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments[1].length;t++){var n=i(t);e=e.replace(n,null==arguments[1][t]?"":arguments[1][t])}return o(e)},String.format=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments.length-1;t++){var n=i(t);e=e.replace(n,null==arguments[t+1]?"":arguments[t+1])}return o(e)},String.prototype.format=function(){for(var e=this.toString(),t=0;t<arguments.length;t++){var n=i(t);arguments[t]=String(arguments[t]).replace(/\$/gm,"♒☯◈∭"),e=(e=e.replace(n,null==arguments[t]?"":arguments[t])).replace(/♒☯◈∭/gm,"$")}return o(e)};var a,s=void 0===document.pp?decodeURIComponent(window.location.search).substring(1).split("&"):document.pp;console.log(s);var r,l,h,c=Object.freeze({AuthRegGameServer:0,authorize:1,register:2,login:3,msg:4,list:5,trade:6,mail:7,server_queue:8,game:9,game_menu:10,dCmd:11,可忽略:16}),u=(Object.freeze({訪客:0,七戲:1,旁門:2}),Object.freeze({authorize:0,授權GameLobby:0,授權AppGame:1,register:1,login:2,message:3,list:4,trans:5,mail:6,server_queue:7,ui_menu:8,logic:9,eCmds_dCmd:10,eCmd_可忽略:16})),d=Object.freeze({GameLobby:0,Main:1,TopBoard:2,Options:3,Store:4,Help:5,GamePicking:6,Game:7}),p=Object.freeze({bl:0,c1:1,sa:2,sr:3,s1:4,s2:5,s3:6,sm:7,bt:8,i1:9,u1:10,i2:11,u2:12,i4:13,u4:14,i8:15,u8:16,db:17,fl:18,de:19,i1n:20,u1n:21,i2n:22,u2n:23,i4n:24,u4n:25,i8n:26,u8n:27,dbn:28,fln:29,den:30,ato:31,u1c:32,pu:33,pi:34,ps:35,pf:36,count:37});function f(e,t,n,i,o,s,h){var c=[];c.push(e,t);for(var u=0;u<n.length;u++)c.push(2+i[u].length),c.push(n[u]),c=c.concat(i[u]);void 0!==s&&(s.disableInteractive(),(l=s.getChildByID("lstate")).innerHTML="等待伺服器回應…",r=setInterval(g,100,[h,100])),a.send(new Uint8Array(c)),c=[]}function g(e){e[0]=e[0]-e[1],"等待伺服器回應…"!=l.innerHTML?clearInterval(r):0==e[0]&&(clearInterval(r),l.innerHTML="伺服器沒有回應，請稍後再試…")}function v(e,t,n){n=void 0===n?-1:n;var i=Math.round(Number.MAX_SAFE_INTEGER*Math.random());switch(n){case-1:return i%(t-e)+e;case 0:return i%(t-e+1)+e;case 1:return i%(t-e)+e+1}}var m,y,_,b,S,w,E,B,T,x,M,O,A,P,k,I,D=40,G=[16711680,16737792,16776960,65280,255,1539248,10027212,4509429,7402239,16751052],L=56,C=[],N=[],j=[],R=null,U=null,F=null,z=[],Y=Object.freeze({初始化:0,房桌訊:1,進入遊戲:2,押注開獎:3,即時訊息:4,放棄投降:5,每手計時:6}),H=[],J={gID:"barfruit25",gWS:s[5]},W=(Number.MAX_SAFE_INTEGER,Object.freeze([[1,4,7,10,13],[2,5,8,11,14],[0,3,6,9,12],[2,4,6,10,14],[0,4,8,10,12],[1,5,8,11,13],[1,3,6,9,13],[2,5,7,11,14],[0,3,7,9,12],[2,3,7,9,14],[0,5,7,11,12],[2,4,7,10,14],[0,4,7,10,12],[2,4,8,10,14],[0,4,6,10,12],[1,4,8,10,13],[1,4,6,10,13],[2,5,6,11,14],[0,3,8,9,12],[2,3,6,9,14],[0,5,8,11,12],[2,3,8,9,14],[0,5,6,11,12],[1,5,6,11,13],[1,3,8,9,13]])),V=(Object.freeze([[[0,3,6,9,12],[0,3,7,9,12],[0,3,8,9,12],[0,4,8,10,12],[0,4,7,10,12],[0,4,6,10,12],[0,5,7,11,12],[0,5,8,11,12],[0,5,6,11,12]],[[1,3,6,9,13],[1,3,8,9,13],[1,4,7,10,13],[1,4,8,10,13],[1,4,6,10,13],[1,5,8,11,13],[1,5,6,11,13]],[[2,5,8,11,14],[2,4,6,10,14],[2,5,7,11,14],[2,3,7,9,14],[2,4,7,10,14],[2,4,8,10,14],[2,5,6,11,14],[2,3,6,9,14],[2,3,8,9,14]]]),Object.freeze({無:0,JP獎:1,收集獎:2,總賠率:3,連線獎:4,巨多線:5})),K=Object.freeze({無:V.無,JP獎:V.JP獎,收集獎:V.收集獎,收集獎_集滿三個燈_一般:10*V.收集獎+1,收集獎_集滿三個燈_大贏:10*V.收集獎+2,bonus:V.總賠率,bonus_big:10*V.總賠率+1,bonus_itemGain:10*V.總賠率+2,win:V.連線獎,Mega獎:V.巨多線,count:12}),X=[[0,0,2,20,200],[0,0,3,30,300],[0,0,5,50,500],[0,0,8,80,800],[0,0,12,120,1200],[0,0,20,200,2e3],[0,0,30,300,3e3],[0,0,60,600,6e3]],q={ref:!1},$=[[]],Z=Object.freeze([[[1],[6666,2777],[0,0,0,7,v(3,5,0)]]]),Q=Object.freeze({0:[],1:[function(e){console.log(" 弭平之ping(騙)到了 !",e)},function(e){console.log(" 完成身份確認 ! !",e),1===e[0][0]?console.log(" 正式 進行遊戲 ! !",e):console.log(" 無法授權確認 以訪客身進行遊戲。",e)}],2:[function(e){for(var t=0;t<e.length;++t)console.log(t,"> ：",e[t])},function(e){for(var t=0;t<e.length;++t)console.log(t,"> ：",e[t])}],3:[function(e){for(var t=0;t<e.length;++t)console.log(t,"> ：",e[t])},function(e){}],10:{7:function(e){console.log("遊戲伺服器開獎回應",e),m.Trig_Slot(e)}}});function ee(e,t){for(var n=e[t],i=[],o=0;o<e.length;o++){for(var a=e[o],s=!0,r=0;r<5;r++)if(a[r]===n[r]){s=!1;break}s&&i.push(o)}return i}var te=function(e,t,n,i){"use strict";Phaser.Sprite.call(this,e.game,t.x,t.y,"choices"),this.anchor.setTo(.5,.5),this.width=84,this.height=L,this.gameState=e,this.type=i,n&&this.gameState.groups[n].add(this),this.frame=i,this.inputEnable=!0,this.events.onInputOver.add(this.Light,this),this.events.onInputOut.add(this.unLight,this),this.ID=i,this.fliping=!1,this.retain=!1,this.yellowMask=ze.add.graphics(t.x,t.y),this.yellowMask.anchor.setTo(.5,.5),this.yellowMask.beginFill(16777215),this.yellowMask.drawRect(-42,-28,84,L),this.yellowMask.endFill(),this.yellowMask.alpha=0,this.lightTween=ze.add.tween(this)};(te.prototype=Object.create(Phaser.Sprite.prototype)).constructor=te,te.prototype.Light=function(e){this.yellowMask.tint=e,this.yellowMask.position=this.position,this.lightTween=ze.add.tween(this.yellowMask).to({alpha:.28},280,Phaser.Easing.Linear.None,!0,0,-1,!0)},te.prototype.unLight=function(){this.lightTween.stop(!0),ze.add.tween(this.yellowMask).to({alpha:0},400,Phaser.Easing.Linear.None,!0)},te.prototype.runFrameAnim=function(){this.frameAnim.alpha=1,this.frameAnim.animations.play("run",8,!0),ze.time.events.add(8*Phaser.Timer.SECOND,(function(){this.frameAnim.animations.stop("run"),this.frameAnim.alpha=0}),this)};var ne=function(e,t,n,i,o){"use strict";Phaser.Sprite.call(this,e.game,t.x,t.y,n),this.anchor.setTo(.5,.5),this.gameState=e,this.properties=o,i&&this.gameState.groups[i].add(this)};(ne.prototype=Object.create(Phaser.Sprite.prototype)).constructor=ne;var ie,oe,ae=function(e,t,n,i,o){"use strict";Phaser.Sprite.call(this,e.game,t.x,t.y,n),this.anchor.setTo(.5,.5),this.gameState=e,this.properties=o,i&&this.gameState.groups[i].add(this),this.adjustPos(),this.animations.add("swim"),ze.physics.enable(this,Phaser.Physics.ARCADE),this.startSwim=!1,this.speed=0,this.count=0};(ae.prototype=Object.create(Phaser.Sprite.prototype)).constructor=ae,ae.prototype.adjustPos=function(){"left"==this.properties.initSide?(this.reset(-this.width-100,ze.height/2),this.angle=0):"right"==this.properties.initSide?(this.reset(ze.width+this.width+100,ze.height/2),this.angle=-180):"up"==this.properties.initSide?(this.reset(ze.width/2,ze.height+this.height+100),this.angle=-90):"down"==this.properties.initSide&&(this.reset(ze.width/2,-this.height-100),this.angle=90)},ae.prototype.swim=function(){this.animations.play("swim",8,!0),this.startSwim=!0,ze.time.events.loop(Phaser.Timer.SECOND,this.updateDirOrSpeed,this)},ae.prototype.updateDirOrSpeed=function(){this.count++,this.count%3==0&&(this.speed=ze.rnd.pick([60,80,100,120])),this.count%4==0&&(this.body.angularVelocity=ze.rnd.pick([20,-20,0,10,-10]))},ae.prototype.outBack=function(){this.x>ze.width+this.width+100?this.x=-this.width-100:this.x<-this.width-100&&(this.x=ze.width+this.width+100),this.y>ze.height+this.height+100?this.y=-this.height-100:this.y<-this.height-100&&(this.y=ze.height+this.height+100)},ae.prototype.update=function(){this.startSwim&&this.body.velocity.copyFrom(ze.physics.arcade.velocityFromAngle(this.angle,this.speed)),this.outBack()};var se,re=[];function le(){Ae(),k.frame=0,Ee(k,"debug"===s[0]||E.value>=5),_.value>0?(Me(_,m.BnBet["num_自動轉數"].減注),Oe()):(ze.sound.stopAll(),ie.play())}function he(){ze.sound.stopAll(),ze.sound.play("msc"+se,1,!0);var e=0,t=[{x:ze.width/2,y:100},{x:ze.width/2,y:ze.height-100},{x:ze.width-150,y:ze.height/2},{x:150,y:ze.height/2}];switch(se){case K.win:console.log("e演繹類型.win"),parseInt(j[1][1])<8*S.value?(re=[!1],ve(e=168),z.length):(re=[!1,!1,!1],ve(e=168),ce(4900,t),fe(1e3,777,28),ue("水果多\n贏很大",1e3,1e3,2e3,Phaser.Easing.Cubic.InOut));break;case K.Mega獎:re=[!1,!1,!1],ve(e=77);var n=25*e*4;ce(4900,t),fe(n,2100,28),ue("超級果盤\n巨贏滿滿",n,1e3,3e3,Phaser.Easing.Exponential.InOut);break;case K.收集獎:console.log("e演繹類型.收集獎"),z=[F],e=490,re=[!1,!0,!1];var i=F.cnt_中獎圖-2,o="彩燈全亮\n滿贏獎金";switch(i){case 1:t=[{x:ze.width/2,y:ze.height/2}];break;case 2:t=[{x:ze.width/3,y:ze.height/2},{x:2*ze.width/3,y:ze.height/2}];break;case 3:t=[{x:ze.width/4,y:ze.height/2},{x:ze.width/2,y:ze.height/2},{x:.75*ze.width,y:ze.height/2}]}ce(4900,t,{x:396,y:488},{x:.2,y:.2}),1===F.cnt_本機彩燈終亮結果?(o="恭喜點亮\n一個彩燈",ve(e,void 0,void 0,!1)):2===F.cnt_本機彩燈終亮結果?(o="恭喜點亮\n二個彩燈",ve(e,void 0,void 0,!1)):ve(e);var a=ze.time.events.add(4900,(function(){if(Be(0===F.cnt_本機彩燈終亮結果?3:F.cnt_本機彩燈終亮結果),ue(o,n,1e3,3e3,Phaser.Easing.Exponential.InOut),0===F.cnt_本機彩燈終亮結果)var e=ze.time.events.add(4900,(function(){Be(0),ze.time.events.remove(e)}));ze.time.events.remove(a)}));break;case K.bonus:console.log("e演繹類型.bonus"),z=[U],re=[!1,!1,!1],ve(e=168),ce(4900,t),fe(1e3,777,28),ue("恭喜\n金亮",1e3,1e3,2e3,Phaser.Easing.Cubic.InOut);break;case K.bonus_big:console.log(" e演繹類型.bonus_big");break;case K.bonus_itemGain:console.log("e演繹類型.bonus_itemGain");break;case K.JP獎:console.log("e演繹類型.JP獎"),z=[R],re=[!1,!1,!1],ve(e=1680),ce(4900,[{x:ze.width/2,y:ze.height/2}]),fe(1e3,777,28),ue("金恭喜\n金亮喜",1e3,1e3,2e3,Phaser.Easing.Cubic.InOut)}for(var s=[],r=0;r<C.length;r++)for(var l=3;l>0;l--)s.push(C[r].getAt(l));for(r=0;r<z.length;r++){var h=W[z[r].id_獎線];for(l=0;l<h.length;l++){var c=h[l];s[c].frame===z[r].id_獎圖&&s[c].Light(G[z[r].id_獎圖])}}}function ce(e,t,n,i,o){for(var a="anm"+se,s=[],r=0;r<t.length;r++){var l=ze.add.sprite(t[r].x,t[r].y,a);l.anchor.setTo(.5,.5),l.animations.add(a),l.animations.play(a,8,!0),null!=n&&(ze.add.tween(l).to(n,.1*e,Phaser.Easing.Linear.None,!0),ze.add.tween(l.scale).to(i,.1*e,Phaser.Easing.Linear.None,!0),ze.add.tween(l).to({alpha:0},.1*e,Phaser.Easing.Linear.None,!0)),s.push(l)}ze.time.events.add(e,(function(){for(var e=0;e<s.length;e++)s[e].animations.stop(a),s[e].destroy();re[0]=!0}),this)}function ue(e,t,n,i,o){var a=ze.add.bitmapText(256,168,"中獎標字",e,42);a.anchor.setTo(.5,.5),ze.add.tween(a).from({x:256,y:320,fontSize:28,alpha:0},n,o,!0,t).onComplete.add(de,void 0,void 0,i)}function de(e,t,n){ze.add.tween(e).to({alpha:0},n,Phaser.Easing.Linear.None,!0).onComplete.add(pe)}function pe(e){re[2]=!0,e.destroy()}function fe(e,t,n){var i=0,o=ze.add.emitter(ze.world.centerX,ze.world.centerY,n);o.makeParticles("balls",[0,1,2,3,4,5],200,!0,!0),o.minParticleSpeed.setTo(-210,-210),o.maxParticleSpeed.setTo(210,210),o.gravity=777;var a=ze.time.events.loop(100,(function(){o.forEach((function(e){e.frame=(e.frame+1)%6})),(i+=100)===e&&(o.start(!1,4e3,7),ze.sound.play("sfx金幣流",4)),i>=e+t&&(re[1]=!0,ze.sound.removeByKey("sfx金幣流"),ze.time.events.remove(a),o.destroy(!0,!0))}))}var ge=0;function ve(e,t,n,i){ze.sound.play("sfx連線",1),e=void 0===e?420:e,n=void 0===n?e:n,t=void 0===t?0:t,i=void 0===i||i;var o=z[ge].id_獎線;i&&Se(T,z[ge].cnt_獎額);var a=ze.add.graphics(0,0);a.alpha=0;for(var s=W[o],r=[],l=0;l<s.length;l++)r.push(H[s[l]]);for(var h in a.lifespan=777,a.lineStyle(7,16711680,.49),a.moveTo(r[0].x,r[0].y),r)a.lineTo(r[h].x,r[h].y),a.moveTo(r[h].x,r[h].y);for(var h in a.lineStyle(4.9,16711680,.49),r)a.beginFill(65535),a.drawCircle(r[h].x,r[h].y,10),a.endFill();var c=e,u=D/e,d=ze.time.events.loop(D,(function(){a.alpha+=a.alpha>=1?-u:u,(c-=D)<=0&&(a.destroy(),i?function(e,t){e.visible=!0,e.fontSize=12;var n=t[2],i=e.x,o=e.y,a=(36-e.fontSize)*D/n,s=(i-256)*D/n,r=(o-320)*D/n;e.x=256,e.y=320;var l=ze.time.events.loop(D,(function(){e.fontSize+=a,e.x+=s,e.y+=r,(n-=D)<=0&&(e.x=i,e.y=o,function(e,t){ge<z.length?ve(t[0],t[1]):(ge=0,re[0]=!0,e.visible=!1)}(T,t),ze.time.events.remove(l))}));_e(B,e.value,n)}(T,[e,t,n]):(re[0]=!0,ge=0,Se(w,parseInt(j[1][0]))),ze.time.events.remove(d))}));ge++}var me=Object.freeze({前補零:0,千位點:1});function ye(e,t,n,i,o){var a=void 0===o?77:o,s=Math.floor(i/a),r=Math.floor((n-t)/s),l=ze.time.events.loop(a,(function(){be(e,r),0==--s&&(Se(e,n),le(),ze.time.events.remove(l))}),this)}function _e(e,t,n,i){e.value;var o=void 0===i?77:i,a=Math.floor(n/o),s=Math.floor(t/a),r=ze.time.events.loop(o,(function(){be(e,s),0==--a&&ze.time.events.remove(r)}),this)}function be(e,t){e.value=Math.max(0,e.value+t),we(e)}function Se(e,t){e.value=t,we(e)}function we(e){if(e.text=e.value,void 0!==e._格式)for(var t=0;t<e._格式.length;t++)switch(e._格式[t]){case me.前補零:e.text=n.Set_數字前置補零(e.value,e.digits);break;case me.千位點:e.text=n.Set_數字千位標點符號(e.text)}}function Ee(e,t){t=void 0===t||t,e.tint=t?16777215:7829367,e.inputEnabled=t}function Be(e){for(var t=0;t<N.length;t++)N[t].visible=!0;for(t=0;t<e;t++)N[t].visible=!1}function Te(e){Object.call(this),this.gameState=e,this.lastPos=0,this.Mask=ze.add.graphics(0,0),this.Mask.anchor.setTo(0,0),this.Mask.beginFill(16711680),this.Mask.drawRect(0,252,512,168),this.Mask.endFill(),this.Mask.alpha=.77;for(var t=0;t<5;t++){C.push(ze.add.group(ze.world,"Runner"+t));for(var n=0;n<4;n++){var i={x:65.52000000000001+95.24*t,y:224+L*n};n>0&&H.unshift(i);var o=new te(this.gameState,i,"item",Math.floor(10*Math.random()));o.mask=this.Mask,C[t].add(o)}}}function xe(e){var t;Object.call(this),this.gameState=e,Ee(k=ze.add.button(409.6,528,"BnOP",Oe,this),!1),k.getBounds().height,(y=ze.add.text(113.4,.95*L,s[0],{fill:"white",font:"bold 21pt Arial"})).anchor.setTo(.5,.5),y._格式=[me.前補零],y.digits=3,y.value=parseInt(s[0]),(O=ze.add.bitmapText(455.72,L,"Digit_GoldE","234,567,890",18)).anchor.setTo(1,.5),O._格式=[me.千位點],O.value=234567890,(M=ze.add.bitmapText(461.6,2.2*L,"Digit_GoldE","77,490,000",16)).anchor.setTo(1,.5),M._格式=[me.千位點],M.value=7749e4,(x=ze.add.bitmapText(197.4,2.3*L,"Digit_GoldE","4,567,890",14)).anchor.setTo(1,.5),x._格式=[me.千位點],x.value=4567890,_e(O,1e7,2e3),_e(M,1e6,2e3),_e(x,1e5,2e3),ze.time.events.loop(3e3,(function(){_e(O,1e7*(Math.round(10*Math.random())%2==0?-1:1),3e4),_e(M,1e6*(Math.round(10*Math.random())%2==0?-1:1),3e4),_e(x,1e5*(Math.round(10*Math.random())%2==0?-1:1),3e4)})),(B=ze.add.text(308.28,3.2*L,"0",{fill:"white",font:"bold 21pt Arial"})).anchor.setTo(1,.5),B.value=0,B.tint=7817545,(S=ze.add.text(430.08,3.55*L,"0",{fill:"white",font:"bold 21pt Arial"})).anchor.setTo(.5,.5),S.value=0,S.tint=13408563,console.log("小低低",s),(E=ze.add.text(325.92,8.9*L,s[4],{fill:"white",font:"bold 21pt Arial"})).anchor.setTo(1,.5),E.value=parseInt(s[4]),E.tint=7817545,(w=ze.add.text(325.92,6.9*L,s[6],{fill:"white",font:"bold 21pt Arial"})).anchor.setTo(1,.5),w.value=parseInt(s[6]),w.tint=7817545,(T=ze.add.bitmapText(B.x,224,"Digit_GoldD","0,000,000,000",42)).anchor.setTo(.5,.5),T.value=0,T.visible=!1,console.log("老低低",s),t=[1.8*84,344.4],this.BnBet={};for(var n=["num_自動轉數","num_注額"],i=0;i<n.length;i++){var o=n[i];this.BnBet[o]={},this.BnBet[o].減注=ze.add.button(t[i],646.4,"BnBet",this.On注,this,0,0,1),this.BnBet[o].減注.onInputDown.add(this.On注,this),this.BnBet[o].減注.onInputUp.add(this.On注,this),this.BnBet[o].減注.anchor.setTo(.5,1),this.BnBet[o].減注.iID=o,this.BnBet[o].減注.value=-1,P=this.BnBet[o].減注,this.BnBet[o].io=ze.add.text(t[i]-84,618.4,"0",{fill:"white",font:"bold 21pt Arial"}),this.BnBet[o].io.anchor.setTo(.5,1),this.BnBet[o].io.value=0,this.BnBet[o].io.tint=13408563,"num_自動轉數"===o?(this.BnBet[o].io._單位量=1,_=this.BnBet[o].io):"num_注額"===o&&(this.BnBet[o].io._單位量=5,b=this.BnBet[o].io),this.BnBet[o].加注=ze.add.button(t[i],this.BnBet[o].減注.y-1.2*this.BnBet[o].減注.getBounds().height,"BnBet",this.On注,this,0,0,1),this.BnBet[o].加注.onInputDown.add(this.On注,this),this.BnBet[o].加注.onInputUp.add(this.On注,this),this.BnBet[o].加注.anchor.setTo(.5,.5),this.BnBet[o].加注.angle=180,this.BnBet[o].加注.iID=o,this.BnBet[o].加注.value=1,A=this.BnBet[o].加注}}function Me(e,t,n,i){i=void 0===i?65535:i,n=t.value*(void 0===n?e._單位量:n),Se(e,Math.abs(e.value+n+i)%i),ze.sound.play("sfx壓鈕",3),"num_注額"===t.iID?(Se(S,e.value),Ee(k,S.value>0)):t.iID}function Oe(){var e,t;e=E,t=-b.value,e.value=e.value+t<0?e.value:e.value+t,we(e),"debug"===s[0]?m.Trig_Slot(Array.from(Z[v(0,Z.length)])):f(c.game_menu,d.Game,[p.u1,p.u2],[[Y.押注開獎],[b.value]])}function Ae(e,t){t=t||!1}Te.prototype=Object.create(Object.prototype),Te.prototype.constructor=Te,xe.prototype=Object.create(Object.prototype),xe.prototype.constructor=xe,xe.prototype.On注=function(e,t,n){var i=e.iID;if(void 0===n){var o=0;e.e壓著=ze.time.events.loop(210,(function(){console.log(e.e壓著.elapsed);var t=this.BnBet[i].io._單位量*Math.pow(2,Math.floor(o/1e3));Me(this.BnBet[i].io,e,t),o+=210}),this)}else n&&Me(this.BnBet[i].io,e),ze.time.events.remove(e.e壓著)},xe.prototype.On領獎=function(e,t,n){n&&(Ee(undefined,!1),Ee(A,!0),Ee(P,!0))},xe.prototype.On自動跑燈=function(e,t,n){console.log("On自動跑燈"),n&&ze.time.events.loop(60*Phaser.Timer.SECOND,(function(){Ge(ze.rnd.pick(PHASER_NUM))}),this)},xe.prototype.On倍金押大=function(e,t,n){n&&console.log("On倍金押大")},xe.prototype.On倍金押小=function(e,t,n){n&&console.log("On倍金押小")},xe.prototype.Trig_Slot=function(e){if(0!==e.length&&k.inputEnabled)if(1!==k.frame){ze.sound.stopAll(),j=e,k.frame=1,Ae(),I=[],R=null,F=null,U=null,z=[];for(var t=[],n=0;n<12;n++)t.push(n);var i=[];for(n=0;n<15;n++)i.push(n),I[n]=void 0;console.log("_回傳結果 ",j);for(var o=j[1][1],a=0,s=0;s<j[0].length;s++)a+=j[0][s]==V.連線獎?j[s+2].length/2:1;var r=function(e,t,n){t=void 0===t?1:t;var i=v(0,e.length);if(1===t)return[i];var o=ee(e,i);if(2===t)return[i,o[v(0,o.length)]];for(var a=[],s=0;s<o.length;s++)a.push(e[o[s]]);for(s=0;s<o.length;s++){var r=ee(a,s);if(r.length>0)return[i,o[s],o[r[0]]]}}(W,a);for(console.log("_不干涉線>>>>> ",r),s=0;s<j[0].length;s++){var l=j[s+2];switch(console.log("回傳結果[0][b]>>>>> ",j[0][s]),j[0][s]){case V.收集獎:var h=l[0];for(F={id_獎線:r[s],id_獎圖:10,cnt_中獎圖:l[1],cnt_本機彩燈終亮結果:h,cnt_獎額:0===h?16800:0},t.splice(t.indexOf(10),1),n=0;n<F.cnt_中獎圖;n++){var c=W[F.id_獎線][n];I[c]=10,i.splice(i.indexOf(c),1)}break;case V.總賠率:var u=0,d=(p=l[0])-1;for(n=0;n<X.length;n++)u+=b.value*X[n][d];for(U={id_獎線:r[s],id_獎圖:9,cnt_中獎圖:p,cnt_獎額:u},t.splice(t.indexOf(9),1),n=0;n<p;n++)c=W[U.id_獎線][n],I[c]=9,i.splice(i.indexOf(c),1);break;case V.JP獎:u=0;var p=l[4];for(n=0;n<4;n++)u|=l[n]<<8*n;for(R={id_獎線:r[s],id_獎圖:11,cnt_中獎圖:l[4],cnt_獎額:u},t.splice(t.indexOf(11),1),n=0;n<R.cnt_中獎圖;n++)c=W[R.id_獎線][n],I[c]=11,i.splice(i.indexOf(c),1);break;case V.連線獎:for(n=0;n<l.length;n+=2){var f=l[n+0],g=(p=l[n+1],n/2);z[g]={id_獎線:r[g],id_獎圖:f,cnt_中獎圖:p,cnt_獎額:null!=X[f]&&0!=b.value?b.value*X[f][p-1]:o},t.splice(t.indexOf(z[g].id_獎圖),1);for(var m=0;m<z[g].cnt_中獎圖;m++)c=W[z[g].id_獎線][m],I[c]=z[g].id_獎圖,i.splice(i.indexOf(c),1)}break;case V.巨多線:for(n=0;n<6;n++)I[n]=8,i.splice(i.indexOf(n),1);for(n=0;n<l.length;n++)I[c=n+6]=l[n],i.splice(i.indexOf(c),1),t.splice(t.indexOf(l[n]),1);const e=3;for(n=0;n<W.length;n++){var y=I[W[n][2]];z[n]={id_獎線:n,id_獎圖:y,cnt_中獎圖:e,cnt_獎額:b.value*X[y][e-1]}}}}var _=t.slice();for(n=0;n<i.length;n++){var S=i[n];if(S<3){for(var w=8;8===w;)w=t[v(0,t.length)];_.indexOf(w)>-1&&_.splice(_.indexOf(w),1),I[S]=w}else if(S<6)for(I[S]=8;8===I[S];)I[S]=_[v(0,_.length)];else I[S]=t[v(0,t.length)]}for(var E=0;E<5;E++){$[E]=[];for(var B=0;B<3;B++)$[E].push(I[3*E+B])}console.log($),q.ref=!1,Ge()}else Ee(k,!1)};var Pe,ke=Object.freeze([0,250,500,750,1e3]),Ie=Object.freeze([0,11,21,36,21,7,0]),De=Object.freeze({起步延遲:0,第一段速:1,第二段速:2,第三段速:3,第四段速:4,第五段速:5,結束段速:6});function Ge(){for(var e=0;e<C.length;e++){C[e].state=De.起步延遲;for(var t=0;t<C[e].length;t++)C[e].getAt(t).unLight()}ie.stop(),oe.play();var n=[0,0,0,0,0];Pe=ze.time.events.loop(D,(function(){for(var e=0;e<C.length;e++)if(C[e].state!==De.結束段速){C[e].y+=Ie[C[e].state];var t=Math.floor(C[e].y/L);n[e]<=ke[e]?C[e].state=De.起步延遲:C[e].state=t<1?De.第一段速:t<2?De.第二段速:t<66?De.第三段速:t<77?De.第四段速:t<82?De.第五段速:De.結束段速,Le(e),n[e]+=D}}),this)}function Le(e){var t=C[e],n=t.getTop();if(t.y+n.y>=448&&(n.y-=224,t.sendToBack(n),t.y>=4424&&(n.frame=$[e].shift(),t.y>=4592))){t.y=4592,t.state=De.結束段速;var i=t.y;t.y=0,n=t.getTop();for(var o=0;o<t.length;o++)t.getAt(o).y=t.getAt(o).y+i;t===C[C.length-1]&&(function(){if(0!==j[0].length){var e=!1,t=0;se=j[0][t],he();var n=ze.time.events.loop(490,(function(){for(var i,o,a=!0,s=0;s<re.length;s++)if(!1===re[s]){a=!1;break}a&&(console.log("is單項演繹結束!!!!!!!!!!!!!!!!!!!"),(t+=1)<j[0].length?(se=j[0][t],he()):e=!0),e&&(console.log("is所有演繹結束    is所有演繹結束 !!!!!!!!!!!!!!!!!!!"),i=777,o=ze.time.events.loop(D,(function(){B.tint=B.tint<11259391?B.tint+28:B.tint-28,(i-=D)<0&&(ye(B,parseInt(j[1][1]),0,777),ye(w,0,parseInt(j[1][0]),777),ze.time.events.remove(o))})),ze.time.events.remove(n))}))}else le()}(),ze.time.events.remove(Pe))}}var Ce=function(){Phaser.State.call(this)};(Ce.prototype=Object.create(Phaser.State.prototype)).constructor=Ce,Ce.prototype.create=function(){};var Ne=function(){Phaser.State.call(this)};(Ne.prototype=Object.create(Phaser.State.prototype)).constructor=Ne,Ne.prototype.preload=function(){this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,ze.stage.disableVisibilityChange=!0},Ne.prototype.create=function(){ze.state.start("PreloadState")};var je=function(){Phaser.State.call(this)};function Re(){}(je.prototype=Object.create(Phaser.State.prototype)).constructor=je,je.prototype.preload=function(){ze.load.baseURL="https://raw.githubusercontent.com/Cc-Yen/7w/main//barfruit25/",ze.load.bitmapFont("中獎標字","assets/font/BarFruit25中獎標字.png","assets/font/BarFruit25中獎標字.html"),ze.load.bitmapFont("DeskNum","assets/font/DeskNum.png","assets/font/DeskNum.html"),ze.load.bitmapFont("Digit_GoldA","assets/font/Digit_GoldA.png","assets/font/Digit_GoldA.html"),ze.load.bitmapFont("Digit_GoldB","assets/font/Digit_GoldB.png","assets/font/Digit_GoldB.html"),ze.load.bitmapFont("Digit_GoldC","assets/font/Digit_GoldC.png","assets/font/Digit_GoldC.html"),ze.load.bitmapFont("Digit_GoldD","assets/font/Digit_GoldD.png","assets/font/Digit_GoldD.html"),ze.load.bitmapFont("Digit_GoldE","assets/font/Digit_GoldE.png","assets/font/Digit_GoldE.html"),ze.load.image("bg","assets/bg.jpg"),ze.load.spritesheet("balls","assets/coin.png",32,32,6),ze.load.spritesheet("gems","assets/gems.png",32,32,8),ze.load.spritesheet("choices","assets/choices.png",84,L,12),ze.load.spritesheet("anm"+K.bonus,"assets/anim_gem.png",64,48,8),ze.load.spritesheet("anm"+K.收集獎,"assets/anim_light.png",64,64,7),ze.load.spritesheet("anm"+K.Mega獎,"assets/deco1.png",70,70,3),ze.load.spritesheet("anm"+K.JP獎,"assets/anim_JP.png",128,96,8),ze.load.spritesheet("deco1","assets/deco1.png",70,70,3),ze.load.spritesheet("deco2","assets/deco2.png",16,16,4),ze.load.spritesheet("deco3","assets/deco3.png",16,16,4),ze.load.spritesheet("BnOP","assets/bn_OP.png",86,86,2),ze.load.spritesheet("BnBet","assets/bn_bet.png",62,62,7),ze.load.audio("msc"+K.win,"assets/mp3/MUSIC_Speed02.mp3"),ze.load.audio("msc"+K.Mega獎,"assets/mp3/MUSIC_Speed01.mp3"),ze.load.audio("msc"+K.收集獎,"assets/mp3/MUSIC_SortDu00.mp3"),ze.load.audio("msc"+K.bonus,"assets/mp3/MUSIC_SortDu01.mp3"),ze.load.audio("msc"+K.JP獎,"assets/mp3/MUSIC_Happy.mp3"),ze.load.audio("sfx壓鈕","assets/mp3/bet.mp3"),ze.load.audio("sfx金幣流","assets/mp3/sfx金幣流.mp3"),ze.load.audio("sfx連線","assets/mp3/sfx連線.mp3"),ze.load.audio("sound-bg-silent","assets/bg_silent.mp3"),ze.load.audio("sound-bg-play","assets/bg_play.mp3"),ze.load.onLoadComplete.add(Re,this)},je.prototype.create=function(){(ie=ze.add.audio("sound-bg-silent")).loop=!0,ie.play(),(oe=ze.add.sound("sound-bg-play")).loop=!0,ze.state.start("StartState")},je.prototype.loadUpdate=function(){};var Ue=function(){Phaser.State.call(this)};(Ue.prototype=Object.create(Phaser.State.prototype)).constructor=Ue,Ue.prototype.create=function(){ze.add.image(0,0,"bg").anchor.setTo(0,0);for(var e=0;e<3;e++)N.push(ze.add.image(396+22*e,488,"BnBet",6)),N[e].anchor.setTo(.5,.5);Be("debug"===s[0]?v(0,3):parseInt(s[1])),this.groups=[];var t=ze.add.group(),n=ze.add.group();this.groups.blackMask=t,this.groups.item=n,new Te(this),m=new xe(this);var i=ze.add.group();this.groups.deco=i;var o=[];for(o.push(new ae(this,{x:0,y:0},"deco1","deco",{initSide:"left",frames:3})),o.push(new ae(this,{x:0,y:0},"deco1","deco",{initSide:"right",frames:3})),o.push(new ae(this,{x:0,y:0},"deco2","deco",{initSide:"up",frames:2})),o.push(new ae(this,{x:0,y:0},"deco2","deco",{initSide:"down",frames:2})),o.push(new ae(this,{x:0,y:0},"deco3","deco",{initSide:"left",frames:2})),o.push(new ae(this,{x:0,y:0},"deco3","deco",{initSide:"down",frames:2})),e=0;e<o.length;e++)o[e].swim()};var Fe={forceSetTimeOut:!0,renderer:Phaser.CANVAS,width:512,height:640},ze=new Phaser.Game(Fe);s[7],ze.state.add("BootState",new Ne),ze.state.add("PreloadState",new je),ze.state.add("StartState",new Ue),ze.state.start("BootState"),document.init=function(){console.log("歡迎進入",document.baseURI," 經典25線水果盤！！！")},"debug"!=s[0]&&function(n){try{var i=new Array("正在連線","已建立連線","正在關閉連線","已關閉連線");console.log("ws.connect 場次內容：",J.gWS),(a=new WebSocket(J.gWS)).binaryType="arraybuffer",document.getElementById("message"),console.log("Socket狀態：",i[a.readyState]),a.onopen=function(){!function(){console.log("cfg Rules _票auth_code：",s[3]);var t=parseInt(s[3],10);票碼=NaN===t?new Uint8Array([231,71,68,66]):new Uint8Array([255&t,t>>8&255,t>>16&255,t>>24&255]),a.send(new Uint8Array([c.authorize,0])),f(c.authorize,u.授權AppGame,[p.u4,p.sr],[[255&t,t>>8&255,t>>16&255,t>>24&255],e(s[2])])}()},a.onerror=function(e){alert("目前網路忙線，與伺服器連線已經中斷\n請稍後再試。")},a.onmessage=function(e){var n=new Uint8Array(e.data);console.log("Server的原生回傳(Raw FDBK) : ",n," 資料{Array}長度：",n.length),Q[n[0]][n[1]](function(e){for(var n=[],i=2;i<e.length;){var o=e[i],a=e[i+1],s=0,r=i+2;if(!o)return alert(i+"< 料- 長度 >:"+o),void console.log(i,"< 料- 長度 >:"+e[i],"  < 類型 >:"+a);switch(a){case p.bl:case p.c1:break;case p.sa:for(var l,h=[],c=2,u=0;u<o;u++)l=e[f=i+c],h.push(t(e.slice(f+1,f+l))),c+=l;o=c,n.push(h),s++;break;case p.sr:n.push(t(e.slice(r,r+o))),o+=2;break;case p.s1:var d=t(e.slice(r,r+o)).split(",");n.push(d),o+=2;break;case p.s2:case p.s3:case p.sm:break;case p.bt:for(h=[],c=2,u=0;u<o;u++){for(var f=i+c,g=0;g<8;g++)h.push(1&e[f]>>g);c+=1}o=c,n.push(h),s++;break;case p.i1:for(h=new Int8Array(o),c=2,u=0;u<o;u++)f=i+c,h[u]=e[f],c+=Int8Array.BYTES_PER_ELEMENT;o=c,n.push(h);break;case p.u1:for(h=new Uint8Array(o),c=2,u=0;u<o;u++)f=i+c,h[u]=e[f],c+=Uint8Array.BYTES_PER_ELEMENT;o=c,n.push(h);break;case p.i2:for(h=[],c=2,u=0;u<o;u++){f=i+c;var v=0;for(g=0;g<Int16Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),c+=Int16Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.u2:for(h=[],c=2,u=0;u<o;u++){for(f=i+c,v=0,g=0;g<Uint16Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),c+=Uint16Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.i4:for(h=[],c=2,u=0;u<o;u++){for(f=i+c,v=0,g=0;g<Int32Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),c+=Int32Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.u4:for(h=[],c=2,u=0;u<o;u++){for(f=i+c,v=0,g=0;g<Uint32Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),c+=Uint32Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.i8:case p.u8:case p.db:case p.fl:case p.de:case p.i1n:case p.u1n:case p.i2n:case p.u2n:case p.i4n:case p.u4n:case p.i8n:case p.u8n:case p.dbn:case p.fln:case p.den:case p.u1c:break;case p.pu:for(h=[],c=2,u=0;u<o;u++){for(f=i+c,v=0,g=0;g<Uint32Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),localStorage.setItem(J.gID+"_pu"+a.toString()+s,v),console.log("pu:::>",v),s++,c+=Uint32Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.pi:for(h=[],c=2,u=0;u<o;u++){for(f=i+c,v=0,g=0;g<Int32Array.BYTES_PER_ELEMENT;g++)v|=e[f+g]<<8*g;h.push(v),localStorage.setItem(J.gID+"_pi"+a.toString()+s,v),console.log("pi:::>",v),s++,c+=Int32Array.BYTES_PER_ELEMENT}o=c,n.push(h);break;case p.ps:console.log("pos_本type料頭:::>",e.length,r,o),v=t(e.subarray(r,r+o)),n.push(v),localStorage.setItem(J.gID+"_ps",v),o+=2;case p.pf:case p.count:}i+=o}return console.log("Server回傳(FDBK)的萃取：",n),n}(n))},a.onclose=function(){console.log("網路狀態：",i[a.readyState])}}catch(e){alert("網路連線狀態發生錯誤\n"+e)}}()})();