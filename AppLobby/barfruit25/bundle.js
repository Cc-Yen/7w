(()=>{var e,t,n,r,o=Object.freeze({AuthRegGameServer:0,authorize:1,register:2,login:3,msg:4,list:5,trade:6,mail:7,server_queue:8,game:9,game_menu:10,dCmd:11,可忽略:16}),a=(Object.freeze({訪客:0,七戲:1,旁門:2}),Object.freeze({authorize:0,授權GameLobby:0,授權AppGame:1,register:1,login:2,message:3,list:4,trans:5,mail:6,server_queue:7,ui_menu:8,logic:9,eCmds_dCmd:10,eCmd_可忽略:16})),i=(Object.freeze({GameLobby:0,Main:1,TopBoard:2,Options:3,Store:4,Help:5,GamePicking:6,Game:7}),Object.freeze({bl:0,c1:1,sa:2,sr:3,s1:4,s2:5,s3:6,sm:7,bt:8,i1:9,u1:10,i2:11,u2:12,i4:13,u4:14,i8:15,u8:16,db:17,fl:18,de:19,i1n:20,u1n:21,i2n:22,u2n:23,i4n:24,u4n:25,i8n:26,u8n:27,dbn:28,fln:29,den:30,ato:31,u1c:32,pu:33,pi:34,ps:35,pf:36,count:37}));function s(r,o,a,i,s,c,u){var d=[];d.push(r,o);for(var g=0;g<a.length;g++)d.push(2+i[g].length),d.push(a[g]),d=d.concat(i[g]);void 0!==c&&(c.disableInteractive(),(n=c.getChildByID("lstate")).innerHTML="等待伺服器回應…",t=setInterval(l,100,[u,100])),e.send(new Uint8Array(d)),d=[]}function l(e){e[0]=e[0]-e[1],"等待伺服器回應…"!=n.innerHTML?clearInterval(t):0==e[0]&&(clearInterval(t),n.innerHTML="伺服器沒有回應，請稍後再試…")}function c(e,t,n,r){var o=new XMLHttpRequest;o.onreadystatechange=function(){4==o.readyState&&200==o.status&&((n=void 0===n?document.getElementById(e):n).innerHTML=o.responseText,void 0!==r&&r[0](r[1]))},o.open("GET",t,!0),o.send()}var u,d,g=[],p=(o.game_menu,{});function m(e){d=e[0];var t=e[1],n=e[2],r=document.getElementById("mbd");r.classList.remove("sheet"),r.classList.add("sheet"),document.querySelector(".sheet").style.setProperty("--from_H",t),document.querySelector(".sheet").style.setProperty("--anm",n),r.onclick=null,r.addEventListener("animationend",void 0===e[3]?function(){_()}:e[3],!1)}function _(){r=void 0===r?document.body:r,d.classList.remove("sheet"),d.removeEventListener("animationend",_,!1),d.onclick=null,null===u?r.removeChild(d):(r.appendChild(u),r.replaceChild(u,d))}Object.freeze({_向上出:0,xRot:10,closeOut:20});var h=void 0===document.pp?decodeURIComponent(window.location.search).substring(1).split("&"):document.pp;function f(e,t){for(var n=[],r=0;r<t;r++)n.push(e>>8*r&255);return n}function v(e){const t=encodeURIComponent(e),n=[];for(var r=0;r<t.length;r++){const e=t.charAt(r);if("%"===e){const e=t.charAt(r+1)+t.charAt(r+2),o=parseInt(e,16);n.push(o),r+=2}else n.push(e.charCodeAt(0))}return n}function b(e){for(var t="",n=0;n<e.length;n++)t+="%"+e[n].toString(16);return decodeURIComponent(t)}function y(){}function E(e){return new RegExp("({)?\\{"+e+"\\}(?!})","gm")}function S(e){return null==e?"":e.replace(E("\\d+"),"")}console.log(h),document.Reg=Object.freeze({帳號:/[^\w_]/gi,密碼:/[^\w]/gi,名稱:/[^\w_\u4E00-\u9FA5]/gi,電郵格式:/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,電郵:/[^\w.@_]/gi,電話:/^([0-9]|[\-]) $/g}),document._校輸入=function(e,t,n){var r=function(e,t){for(var n=0,r=0;r<e.length;r++){if((n+=Math.ceil(e.charCodeAt(r).toString(2).length/8))==t)return r+1;if(n>t)return r}return e.length}(t,n);return r===t.length?t.replace(e,""):t.substr(0,r).replace(e,"")},y.Load_MultiAtlas=function(e){},y.Set_七戲類別_單字串陣列=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),r={},o=1;o<t.length;o++)r[n[o]]=t[o].replace("\r","").split("\n");return r},y.Set_七戲類別_毎筆陣列結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),r={},o=1;o<t.length;o++)r[n[o]]=this.Set_毎筆2D型格式資料(t[o]);return r},y.Set_七戲類別資料結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),r={},o=1;o<t.length;o++)r[n[o]]=this.Set_欄首2D型格式資料(t[o]);return r},y.Set_欄首2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var r=e.replace("\r","").split(n),o=[];const a=r[0].split(",").length;for(var i=0;i<a;i++)o[i]=[];for(var s=0;s<r.length;s++){var l=r[s].split(",");for(i=0;i<l.length;i++)o[i][s]=l[i]}return o},y.Set_毎筆2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var r=e.replace("\r","").split(n);ret=[[]];for(var o=0;o<r.length;o++){var a=r[o].split(",");ret[o]=[];for(var i=0;i<a.length;i++)ret[o][i]=a[i]}return ret},y.sSplit=function(e,t){return e.split(t)},y.Set_數字前置補零=function(e,t){for(var n=t-e.toString(10).length,r="",o=0;o<n;o++)r="0"+r;return r},y.Set_數字千位標點符號=function(e){for(var t=e.toString(),n="",r=1,o=t.length-1;o>-1;o--)n=(r%3==0&&t.length>r?",":"")+t[o]+n,r++;return n},y.Set_文字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=random.between(0,e.length-1),r=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,r);break;case 1:e.push(r);break;case 2:e.splice(random.between(0,e.length-1),0,r-1)}}},y.Set_數字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=random.between(0,e.length-1),r=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,r);break;case 1:e.push(r);break;case 2:e.splice(random.between(0,e.length-1),0,r-1)}}},y._抽取機率箱=function(e,t){if(t=null==t?0:t,0==e.length)return-1;var n=random.between(_啟始碼,e.length-1),r=e[n];return delete e[n],r},y._抽取機率箱=function(e,t){if(啟始碼=null==啟始碼?0:啟始碼,0==e.length)return null;var n=random.between(t,e.length-1),r=e[n];return delete e[n],r},y.IP_FromINT=function(e){return(255&e)+"."+(e>>8&255)+"."+(e>>16&255)+"."+(e>>24&255)},y.Get_現在時刻=function(e){e=void 0===e;var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+(e?"."+t.getMilliseconds()%1e3:"")},y.Get_TimeFrom整數=function(e,t){var n=new Date(1970,0,1,8,0,0);return n.setSeconds(e),n.toISOString().replace("T"," ").replace("Z","").split(".")[0]+(void 0===t?"":"."+t)},y.Get_整數FromTime=function(e){return new Date(e).getTime()},y.Clamp=function(e,t,n){return Math.min(Math.max(e,n),t)},y.Get_詞嵌入文=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments[1].length;t++){var n=E(t);e=e.replace(n,null==arguments[1][t]?"":arguments[1][t])}return S(e)},String.format=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments.length-1;t++){var n=E(t);e=e.replace(n,null==arguments[t+1]?"":arguments[t+1])}return S(e)},String.prototype.format=function(){for(var e=this.toString(),t=0;t<arguments.length;t++){var n=E(t);arguments[t]=String(arguments[t]).replace(/\$/gm,"♒☯◈∭"),e=(e=e.replace(n,null==arguments[t]?"":arguments[t])).replace(/♒☯◈∭/gm,"$")}return S(e)};const w=Object.freeze({1:[function(e){console.log("AppGate SCB 弭平之ping(騙)到了 !")},function(e){1===e[0][0]?console.log("AppGate SCB 完成身份確認，恭喜您進入大廳 ! !"):console.log("AppGate SCB 無法登入身份 以訪客身份進入大廳。")}],10:{6:function(e){!function(e){switch(console.log("InitMenuFunc uData 在遊戲大廳選單伺服器回應",I),e[0][0]){case x.初始化:var t=p["遊樂區"];t._項目標題文='第 <b style="text-align: center; color:red;">{0}</b> 區';for(var n=0;n<e[4][0];n++)t.btnDATA.push({_標題變數值:[]}),t.btnDATA[n]._標題變數值.push(n+1);t.Reset_BtnDATA(),M(e);break;case x.房桌訊:M(e);break;case x.進入遊戲:e[0][1]?document.getElementById("pop_m機台有人").classList.toggle("show"):function(e){var t="<script>  document.pp=['"+e[0][2]+"','"+e[0][3]+"','"+I.uid+"','"+I.授權碼+"','"+I.GP+"','"+I.gWS+"','"+I.gold+"','"+C+"'];  <\/script>",n="<base href='https://"+C+"/barfruit25' />",r=new XMLHttpRequest;r.open("GET","https://raw.githubusercontent.com/Cc-Yen/7w/main/barfruit25/index"),r.responseType="",r.onload=function(){var e=new Blob([n,r.responseText,t],{type:"text/html"}),o=URL.createObjectURL(e);location.replace(o)},r.send()}(e)}}(e)}}});function M(e){for(var t=document.getElementById("machine_zone").getElementsByClassName("iBn"),n=0;n<t.length;n++){t.item(n).firstElementChild.textContent="第"+e[1][n]+"台",t.item(n).id=e[1][n];for(var r=t.item(n).getElementsByClassName("GemSlot")[0].getElementsByClassName("Gem"),o=0;o<r.length;o++)r.item(o).style.visibility=0==(e[2][n]>>o&1)?"hidden":"visible";t.item(n).classList.remove("State"),t.item(n).classList.add("State"),t.item(n).getElementsByClassName("State")[0].textContent=1===e[3][n]?"遊戲中":"請入座"}}function T(e){var t=e.currentTarget;switch(e.type){case"mousemove":t.isMouseDown&&(t.isMouseUP||(t.scrollBy(t.限速(-e.movementX),t.限速(-e.movementY)),t.lastMovement={x:-e.movementX,y:-e.movementY}));break;case"mouseup":t.isMouseUP=!0,t.On拖力漸緩衰退();break;case"mousedown":t.isMouseDown=!0,t.isMouseUP=!1;break;case"mouseenter":t.isMouseDown=t.isMouseUP=!1;break;case"mouseleave":t.isMouseDown&&!t.isMouseUP&&(t.isMouseUP=!0,t.On拖力漸緩衰退())}}function L(){}L.prototype.Is_夾住限制=function(){var e=!1,t=.2*this.unit_travel,n=Phaser.Math.RoundTo(this.pnl_btnGroup.p);return is_水平模式?this.pnl_btnGroup.x=n.x>0?(e=n.x>max行程_夾住模式.x)?n.x>max行程_夾住模式.x+t?max行程_夾住模式+t:n.x-1:n.x:(e=n.x<-max行程_夾住模式.x)?n.x<-max行程_夾住模式.x-t?-max行程_夾住模式+t:n.x+1:n.x:this.pnl_btnGroup.y=n.y>0?(e=n.y>max行程_夾住模式.y)?n.y>max行程_夾住模式.y+t?max行程_夾住模式+t:n.y-1:n.y:(e=n.y<-max行程_夾住模式.y)?n.y<-max行程_夾住模式.y-t?-max行程_夾住模式+t:n.y+1:n.y,this.scene.input.setDraggable(this.pnl_btnGroup,!e),e},L.prototype.GetSnapedTravel=function(){return Phaser.Math.RoundTo(this.pnl_btnGroup.p/this.unit_travel)},L.prototype.UpdatePosSide=function(e){return e*this.unit_travel},L.prototype.SetPos=function(e,t){this.is_水平模式?e.x=t:e.y=t},L.prototype.ResetItemData=function(e,t,n,r,o,a){if(data_目前選中類別的章關=e,void 0===n)n=iColor;else for(var i=n.length-(n.length-iColor.length);i<n.length;i++)iColor[i]=iColor[0];if(null!=sp_供主類別前景項目)for(o=new Sprite[data_目前選中類別的章關[0].length],i=0;i<data_目前選中類別的章關[0].length;i++)o[i]=sp_供主類別前景項目[">"];sp_前景項目=void 0===o?sp_前景項目:o,sp_背景框=void 0===r?sp_背景框:r,data_目前選中類別的章關[0].length,id_獨特.length,id_獨特=data_目前選中類別的章關[0],iLable=data_目前選中類別的章關[1];var s="s格_"+name_IO溝通;if(CcLoader.app_cfg.ContainsKey(s))for(i=0;i<iLable.length;i++)iLable[i]=string.Format(CcLoader.app_cfg[s],iLable[i]);is_Srolling||(is_Srolling=!0,StartCoroutine(SrollingResetItems(t,n,a)))},window.onorientationchange=function(){document.body.style.scale=window.innerHeight>window.innerWidth?B.bodyScale直式:B.bodyScale橫式};var A={GameLobby:{},Menu_Main:{},Menu_TopBoard:{},Menu_Options:{},Menu_Store:{},Menu_Help:{},Menu_GamePicking:{},Menu_Game:{}},B=new function(e,t,n){n=void 0===n;const r=window.innerHeight>window.innerWidth;var o=0;window.innerWidth?o=r?window.innerWidth:window.innerHeight:document.body&&document.body.offsetWidth&&(o=document.body.offsetWidth);var a=0;window.innerHeight?a=r?window.innerHeight:window.innerWidth:document.body&&document.body.offsetHeight&&(a=document.body.offsetHeight),this.bodyScale直式=n?Math.min(o/777,a/490):o/777,this.bodyScale橫式=n?Math.min(o/490,a/777):a/490,document.querySelector('meta[name="viewport"]').setAttribute("content","initial-scale="+this.bodyScale直式+", user-scalable=no")}(777,490),I={uid:h[0],授權碼:h[1],GP:h[2],gold:h[3],gID:h[4],gIP:h[5],gPort:h[6],gWS:"wss://7w.com.tw:"+h[6]},C=document.location.hostname;console.log("_元",h,"<->",I);var x=Object.freeze({初始化:0,房桌訊:1,進入遊戲:2,押注開獎:3,即時訊息:4,放棄投降:5,每手計時:6});function k(e){switch(console.log(e,e.target),e.target.id){case"bStart":c(void 0,"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppLobby/barfruit25/Menu_GamePicking",u=g[A.Menu_GamePicking.id],[m,[g[A.Menu_Main.id],"777px","DownBack",R]]);break;case"bHelp":c(void 0,"",u=g[A.Menu_Help.id],[m,[g[A.Menu_Main.id],"777px","DownBack"]]);break;case"bOption":c(void 0,"",u=g[A.Menu_Options.id],[m,[g[A.Menu_Main.id],"777px","DownBack"]]);break;case"ssib2":console.log("ssib2",e.target.textContent),console.log(e.target.left,e.target.top),console.log(e.target.style.left,e.target.style.top),console.log(e.target.getBoundingClientRect().left,e.target.getBoundingClientRect().width),e.target.style.left=10;break;case"ssib0":console.log("ssib0",e.target.textContent),console.log(e.target.getBoundingClientRect().left,e.target.getBoundingClientRect().width);break;case"play":s(o.game_menu,A.Menu_GamePicking.id,[i.u1],[[x.進入遊戲,document.getElementById("所選機台").mechineID]])}switch(e.target.parentNode.id){case"遊樂區":console.log(e.target.id,"parseInt(e.target.id)",parseInt(e.target.id)),s(o.game_menu,A.Menu_GamePicking.id,[i.u1],[[x.房桌訊,parseInt(e.target.id)]]);break;case"machine_zone":document.getElementById("所選機台").mechineID=+e.target.id,document.getElementById("所選機台").textContent="目前選取機台："+e.target.id+"號機"}}function R(){_(),u.id===Object.keys(A)[A.Menu_GamePicking.id]&&s(o.game_menu,A.Menu_GamePicking.id,[i.u1],[[x.初始化]]);var e=document.getElementById("遊樂區");p[e.id]=function(e,t,n,r){e.meta={},e.btnDATA=void 0===t?[]:t,e.id_選中鈕=0,e.max行程_夾住模式={x:0,y:0},e.max行程_滾動項目堆={x:0,y:0},e.pos原點_滾動項目堆={x:0,y:0},e.dir={x:1,y:0},e._項目標題文=n._項目標題文,e.sp_背景框=n.sp_背景框,e.sp_前景項目=n.sp_前景項目,e.iColor=n.color,e.name_IO溝通,e.data_由文件內容={},e.key_類別資料,e.data_目前選中類別的章關,e.sp_供主類別前景項目;var o,a,i=e.getElementsByClassName("iBn");e.Init=function(){var t=i[0],n=i[i.length-1];t.getBoundingClientRect().left==n.getBoundingClientRect().left&&t.getBoundingClientRect().top==n.getBoundingClientRect().top||(clearInterval(a),console.log("scrl.id ",e.id),e.is_水平模式=t.getBoundingClientRect().top==n.getBoundingClientRect().top,console.log("scrl.is_水平模式 ",e.is_水平模式),e.unit_travel=e.is_水平模式?i[0].getBoundingClientRect().width:i[0].getBoundingClientRect().height,console.log("scrl.unit_travel  ",e.unit_travel),o=.5*e.unit_travel,e.is_水平模式?e.scrollLeft+=e.unit_travel:e.scrollTop+=e.unit_travel)},a=setInterval(e.Init,49),e.Set_項目=function(t,n){var r=e.btnDATA[t.id];t.innerHTML=r?y.Get_詞嵌入文(e._項目標題文,void 0===n?r._標題變數值:n):t.id};for(var s=0;s<i.length;s++)e.Set_項目(i[s],[s+1]);return e.Reset_BtnDATA=function(){for(var t=0;t<i.length;t++)e.Set_項目(i[t])},e.限速=function(){return e.Update_ScrollView(),y.Clamp(arguments[0],o,-o)},e.releaseTime=n.releaseTime,e.力衰退intervalTime=n.力衰退intervalTime,e.On拖力漸緩衰退=function(){var t=this,n=t.releaseTime,r=setInterval((function(){t.scrollBy(e.限速(t.lastMovement.x),e.限速(t.lastMovement.y)),(n-=t.力衰退intervalTime)<=0&&clearInterval(r)}),t.力衰退intervalTime)},e.Update_ScrollView=function(){var t=e.btnDATA.length,n=this.is_水平模式?e.scrollLeft:e.scrollTop;n>1.5*this.unit_travel?(i[0].id=(parseInt(i[i.length-1].id)+1)%t,e.Set_項目(i[0]),e.insertAdjacentElement("beforeend",i[0]),e.scrollLeft-=this.unit_travel):n<.5*this.unit_travel&&(i[i.length-1].id=(parseInt(i[0].id)+t-1)%t,e.Set_項目(i[i.length-1]),e.insertAdjacentElement("afterbegin",i[i.length-1]),e.scrollLeft+=this.unit_travel)},e.isMouseDown=!1,e.isMouseUP=!1,e.mouseMoveDelta=0,e.addEventListener("mouseup",T),e.addEventListener("mousedown",T),e.addEventListener("mousemove",T),e.addEventListener("mouseenter",T),e.addEventListener("mouseleave",T),e.addEventListener("scroll",e.Update_ScrollView),e}(e,[],{releaseTime:490,力衰退intervalTime:49})}!function(t){try{var n=new Array("正在連線","已建立連線","正在關閉連線","已關閉連線");console.log("ws.connect 場次內容：",I.gWS),(e=new WebSocket(I.gWS)).binaryType="arraybuffer",document.getElementById("message"),console.log("Socket狀態：",n[e.readyState]),e.onopen=function(){var t;e.send("Ready To 7Ws Entertenment !!!!"),t=parseInt(I.授權碼,10),票碼=NaN===t?new Uint8Array([231,71,68,66]):new Uint8Array([255&t,t>>8&255,t>>16&255,t>>24&255]),console.log(" App  Lobby -StartAppLobby-_授權code",I.授權碼,"byte碼：",票碼),s(o.authorize,a.授權GameLobby,[i.u4,i.sr],[f(t,4),v(I.uid)])},e.onerror=function(e){alert("目前網路忙線，與伺服器連線已經中斷\n請稍後再試。"),console.log("Socket狀態：",e.code,"onerror:",e)},e.onmessage=function(e){var t=new Uint8Array(e.data);console.log("Server的原生回傳(Raw FDBK) : ",t," 資料{Array}長度：",t.length),w[t[0]][t[1]](function(e){for(var t=[],n=2;n<e.length;){var r=e[n],o=e[n+1],a=0,s=n+2;if(!r)return alert(n+"< 料- 長度 >:"+r),void console.log(n,"< 料- 長度 >:"+e[n],"  < 類型 >:"+o);switch(o){case i.bl:case i.c1:break;case i.sa:for(var l,c=[],u=2,d=0;d<r;d++)l=e[p=n+u],c.push(b(e.slice(p+1,p+l))),u+=l;r=u,t.push(c),a++;break;case i.sr:t.push(b(e.slice(s,s+r))),r+=2;break;case i.s1:var g=b(e.slice(s,s+r)).split(",");t.push(g),r+=2;break;case i.s2:case i.s3:case i.sm:break;case i.bt:for(c=[],u=2,d=0;d<r;d++){for(var p=n+u,m=0;m<8;m++)c.push(1&e[p]>>m);u+=1}r=u,t.push(c),a++;break;case i.i1:for(c=new Int8Array(r),u=2,d=0;d<r;d++)p=n+u,c[d]=e[p],u+=Int8Array.BYTES_PER_ELEMENT;r=u,t.push(c);break;case i.u1:for(c=new Uint8Array(r),u=2,d=0;d<r;d++)p=n+u,c[d]=e[p],u+=Uint8Array.BYTES_PER_ELEMENT;r=u,t.push(c);break;case i.i2:for(c=[],u=2,d=0;d<r;d++){p=n+u;var _=0;for(m=0;m<Int16Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),u+=Int16Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.u2:for(c=[],u=2,d=0;d<r;d++){for(p=n+u,_=0,m=0;m<Uint16Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),u+=Uint16Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.i4:for(c=[],u=2,d=0;d<r;d++){for(p=n+u,_=0,m=0;m<Int32Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),u+=Int32Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.u4:for(c=[],u=2,d=0;d<r;d++){for(p=n+u,_=0,m=0;m<Uint32Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),u+=Uint32Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.i8:case i.u8:case i.db:case i.fl:case i.de:case i.i1n:case i.u1n:case i.i2n:case i.u2n:case i.i4n:case i.u4n:case i.i8n:case i.u8n:case i.dbn:case i.fln:case i.den:case i.u1c:break;case i.pu:for(c=[],u=2,d=0;d<r;d++){for(p=n+u,_=0,m=0;m<Uint32Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),localStorage.setItem(I.gID+"_pu"+o.toString()+a,_),console.log("pu:::>",_),a++,u+=Uint32Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.pi:for(c=[],u=2,d=0;d<r;d++){for(p=n+u,_=0,m=0;m<Int32Array.BYTES_PER_ELEMENT;m++)_|=e[p+m]<<8*m;c.push(_),localStorage.setItem(I.gID+"_pi"+o.toString()+a,_),console.log("pi:::>",_),a++,u+=Int32Array.BYTES_PER_ELEMENT}r=u,t.push(c);break;case i.ps:console.log("pos_本type料頭:::>",e.length,s,r),_=b(e.subarray(s,s+r)),t.push(_),localStorage.setItem(I.gID+"_ps",_),r+=2;case i.pf:case i.count:}n+=r}return console.log("Server回傳(FDBK)的萃取：",t),t}(t))},e.onclose=function(){console.log("網路狀態：",n[e.readyState])}}catch(e){alert("網路連線狀態發生錯誤\n"+e)}}(),document.init=function(){if(!(g.length>0)){document.body.addEventListener("click",k);for(var e=Object.getOwnPropertyNames(A),t=e.length,n=0;n<t;n++){var r=e[n];0===r.indexOf("Menu_")&&(g[n]=document.createElement("div"),g[n].id=r,A[r].id=n)}u=g[A.Menu_Main.id],document.body.appendChild(u),c(void 0,"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppLobby/barfruit25/Menu_Main",u)}},document.addEventListener("DOMContentLoaded",document.init)})();