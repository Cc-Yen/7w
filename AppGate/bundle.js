(()=>{var e,t,n,o,r=Object.freeze({客端申購:0,業務入賬:1,業務申補:2,兌銷完成:3}),a=Object.freeze({當日結算:0,每月結算:1,每季結算:2,業務申購日兌點數:8,客端龍紋幣出售:16,客端觀聆卷出售:17}),i=Object.freeze({AuthRegGameServer:0,authorize:1,register:2,login:3,msg:4,list:5,trade:6,mail:7,server_queue:8,game:9,game_menu:10,dCmd:11,可忽略:16}),l=(Object.freeze({訪客:0,七戲:1,旁門:2}),Object.freeze({authorize:0,授權GameLobby:0,授權AppGame:1,register:1,login:2,message:3,list:4,trans:5,mail:6,server_queue:7,ui_menu:8,logic:9,eCmds_dCmd:10,eCmd_可忽略:16}),Object.freeze({GameLobby:0,Main:1,TopBoard:2,Options:3,Store:4,Help:5,GamePicking:6,Game:7}),Object.freeze({bl:0,c1:1,sa:2,sr:3,s1:4,s2:5,s3:6,sm:7,bt:8,i1:9,u1:10,i2:11,u2:12,i4:13,u4:14,i8:15,u8:16,db:17,fl:18,de:19,i1n:20,u1n:21,i2n:22,u2n:23,i4n:24,u4n:25,i8n:26,u8n:27,dbn:28,fln:29,den:30,ato:31,u1c:32,pu:33,pi:34,ps:35,pf:36,count:37}));function s(o,r,a,i,l,s,u){var d=[];d.push(o,r);for(var m=0;m<a.length;m++)d.push(2+i[m].length),d.push(a[m]),d=d.concat(i[m]);void 0!==s&&(s.disableInteractive(),(n=s.getChildByID("lstate")).innerHTML="等待伺服器回應…",t=setInterval(c,100,[u,100])),e.send(new Uint8Array(d)),d=[]}function c(e){e[0]=e[0]-e[1],"等待伺服器回應…"!=n.innerHTML?clearInterval(t):0==e[0]&&(clearInterval(t),n.innerHTML="伺服器沒有回應，請稍後再試…")}function u(e,t,n,o){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&((n=void 0===n?document.getElementById(e):n).innerHTML=r.responseText,void 0!==o&&o[0](o[1]))},r.open("GET",t,!0),r.send()}var d,m,g=[];function p(e){m=e[0];var t=e[1],n=e[2],o=document.getElementById("mbd");o.classList.remove("sheet"),o.classList.add("sheet"),document.querySelector(".sheet").style.setProperty("--from_H",t),document.querySelector(".sheet").style.setProperty("--anm",n),o.onclick=null,o.addEventListener("animationend",void 0===e[3]?function(){h()}:e[3],!1)}function h(){o=void 0===o?document.body:o,m.classList.remove("sheet"),m.removeEventListener("animationend",h,!1),m.onclick=null,null===d?o.removeChild(m):(o.appendChild(d),o.replaceChild(d,m))}function v(e){0===e[1]?(m=document.getElementsByClassName("popup")[0],d=null,m.remove(),clearInterval(e[0])):(e[1]-=1,e[2].textContent="倒數剩餘："+(e[1]+1)+e[3],console.log("param[2])",e[2]))}function f(e,t){var n=Object.getOwnPropertyNames(e);void 0===t?h():t[0]=setInterval(v,1e3,t);for(var o=0;o<n.length;o++){var r=n[o];console.log("->>>>",n.length,"Set_新進選單參數",r,e[n[o]]),document.getElementById(r).innerText=e[r]}}i.game_menu,Object.freeze({_向上出:0,xRot:10,closeOut:20});var _=void 0===document.pp?decodeURIComponent(window.location.search).substring(1).split("&"):document.pp;function y(e){for(var t=0,n=0,o=0;o<e.length;o++)t+=o%2==0?0:e.charCodeAt(o),n+=o%2==0?e.charCodeAt(o):0;return $.uid=String.fromCharCode(97+t%26,97+n%26)+e}function b(e){for(var t=0,n=0;n<e.length;n++)t+=Math.ceil(e.charCodeAt(n).toString(2).length/8);return t}console.log(_);var E=document.Reg=Object.freeze({帳號:/[^\w_]/gi,密碼:/[^\w]/gi,名稱:/[^\w_\u4E00-\u9FA5]/gi,電郵格式:/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,電郵:/[^\w.@_]/gi,電話:/^([0-9]|[\-]) $/g});function I(e){const t=encodeURIComponent(e),n=[];for(var o=0;o<t.length;o++){const e=t.charAt(o);if("%"===e){const e=t.charAt(o+1)+t.charAt(o+2),r=parseInt(e,16);n.push(r),o+=2}else n.push(e.charCodeAt(0))}return n}function S(e){for(var t="",n=0;n<e.length;n++)t+="%"+e[n].toString(16);return decodeURIComponent(t)}function x(){}function B(e){return new RegExp("({)?\\{"+e+"\\}(?!})","gm")}function w(e){return null==e?"":e.replace(B("\\d+"),"")}document._校輸入=function(e,t,n){var o=function(e,t){for(var n=0,o=0;o<e.length;o++){if((n+=Math.ceil(e.charCodeAt(o).toString(2).length/8))==t)return o+1;if(n>t)return o}return e.length}(t,n);return o===t.length?t.replace(e,""):t.substr(0,o).replace(e,"")},x.Load_MultiAtlas=function(e){},x.Set_七戲類別_單字串陣列=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),o={},r=1;r<t.length;r++)o[n[r]]=t[r].replace("\r","").split("\n");return o},x.Set_七戲類別_毎筆陣列結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),o={},r=1;r<t.length;r++)o[n[r]]=this.Set_毎筆2D型格式資料(t[r]);return o},x.Set_七戲類別資料結構=function(e){for(var t=e.split(/\n?\r?\n?\r?;/),n=t[0].split(","),o={},r=1;r<t.length;r++)o[n[r]]=this.Set_欄首2D型格式資料(t[r]);return o},x.Set_欄首2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var o=e.replace("\r","").split(n),r=[];const a=o[0].split(",").length;for(var i=0;i<a;i++)r[i]=[];for(var l=0;l<o.length;l++){var s=o[l].split(",");for(i=0;i<s.length;i++)r[i][l]=s[i]}return r},x.Set_毎筆2D型格式資料=function(e,t,n){t=null==t?",":t,n=null==n?"\n":n;var o=e.replace("\r","").split(n);ret=[[]];for(var r=0;r<o.length;r++){var a=o[r].split(",");ret[r]=[];for(var i=0;i<a.length;i++)ret[r][i]=a[i]}return ret},x.sSplit=function(e,t){return e.split(t)},x.Set_數字前置補零=function(e,t){for(var n=t-e.toString(10).length,o="",r=0;r<n;r++)o="0"+o;return o},x.Set_數字千位標點符號=function(e){for(var t=e.toString(),n="",o=1,r=t.length-1;r>-1;r--)n=(o%3==0&&t.length>o?",":"")+t[r]+n,o++;return n},x.Set_文字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=random.between(0,e.length-1),o=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,o);break;case 1:e.push(o);break;case 2:e.splice(random.between(0,e.length-1),0,o-1)}}},x.Set_數字機率箱攪拌=function(e){for(var t=0;t<e.length;t++){var n=random.between(0,e.length-1),o=e[n];switch(delete e[n],t%3){case 0:e.splice(0,0,o);break;case 1:e.push(o);break;case 2:e.splice(random.between(0,e.length-1),0,o-1)}}},x._抽取機率箱=function(e,t){if(t=null==t?0:t,0==e.length)return-1;var n=random.between(_啟始碼,e.length-1),o=e[n];return delete e[n],o},x._抽取機率箱=function(e,t){if(啟始碼=null==啟始碼?0:啟始碼,0==e.length)return null;var n=random.between(t,e.length-1),o=e[n];return delete e[n],o},x.IP_FromINT=function(e){return(255&e)+"."+(e>>8&255)+"."+(e>>16&255)+"."+(e>>24&255)},x.Get_現在時刻=function(e){e=void 0===e;var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+(e?"."+t.getMilliseconds()%1e3:"")},x.Get_TimeFrom整數=function(e,t){var n=new Date(1970,0,1,8,0,0);return n.setSeconds(e),n.toISOString().replace("T"," ").replace("Z","").split(".")[0]+(void 0===t?"":"."+t)},x.Get_整數FromTime=function(e){return new Date(e).getTime()},x.Clamp=function(e,t,n){return Math.min(Math.max(e,n),t)},x.Get_詞嵌入文=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments[1].length;t++){var n=B(t);e=e.replace(n,null==arguments[1][t]?"":arguments[1][t])}return w(e)},String.format=function(){var e=arguments[0];if(null==e)return"";for(var t=0;t<arguments.length-1;t++){var n=B(t);e=e.replace(n,null==arguments[t+1]?"":arguments[t+1])}return w(e)},String.prototype.format=function(){for(var e=this.toString(),t=0;t<arguments.length;t++){var n=B(t);arguments[t]=String(arguments[t]).replace(/\$/gm,"♒☯◈∭"),e=(e=e.replace(n,null==arguments[t]?"":arguments[t])).replace(/♒☯◈∭/gm,"$")}return w(e)};var T,M=[],A=[],L=[];function k(e){M=[],A=[],L=[];for(var t=new Date,n=0;n<e;n++){var o=(t.getMonth()-n)%12+1;o>0?M.push(o):A.push(o+12)}var r=t.getDate();for(n=0;n<r;n++)L.push(r-n);return t.getFullYear()}function C(e,t,n,o,r){o=void 0===o?12:o,T=void 0===r?k(o):k(o)-r;for(var a=0;a<e.length;a++){var i=document.getElementById(e[a]);G(i.options),i.appendChild(document.createElement("option")).text=T,A>0&&(i.appendChild(document.createElement("option")).text=T-1)}for(var l=0;l<t.length;l++){var s=document.getElementById(t[l]);for(G(s.options),a=0;a<M.length;a++)s.appendChild(document.createElement("option")).text=M[a]}if(n)for(l=0;l<n.length;l++){var c=document.getElementById(n[l]);for(G(c.options),a=0;a<L.length;a++)c.appendChild(document.createElement("option")).text=L[a]}}function D(e,t){G(e);for(var n=0;n<t.length;n++)e.appendChild(document.createElement("option")).text=t[n]}function G(e){for(var t=e.length-1;t>=0;t--)e[t].remove()}var P=[["中華郵政"],["中央信託","交通銀行","台灣銀行","土地銀行","合庫商銀","第一銀行","華南銀行","彰化銀行","華僑銀行","上海銀行","台北富邦","國泰世華","高雄銀行","兆豐商銀","農業金庫","花旗銀行","運通銀行","首都銀行","荷蘭銀行","中華開發","臺灣企銀","台北商銀","新竹商銀","台中商銀","京城商銀","花蓮企銀","台東企銀","東亞銀行","匯豐銀行","渣打銀行","標旗銀行","華泰銀行","臺灣新光商銀","陽信銀行","板信銀行","三信銀行","第七商銀","聯邦銀行","中華銀行","遠東銀行","復華銀行","建華銀行","玉山銀行","萬泰銀行","寶華銀行","台新銀行","大眾銀行","日盛銀行","安泰銀行","中國信託","慶豐銀行"],["台北一信","台北五信","台北九信","基隆一信","基隆二信","淡水一信","淡水信合社","宜蘭信合社","桃園信合社","新竹一信","新竹三信","竹南信合社","台中二信","彰化一信","彰化五信","彰化六信","彰化十信","鹿港信合社","嘉義三信","嘉義四信","台南三信","高雄二信","高雄三信","花蓮一信","花蓮二信","澎湖一信","澎湖二信","金門信合社"],["高雄市","名間","永靖","二林","員林","竹塘","秀水","埔心","埤頭鄉","崙背鄉","四湖","口湖","斗六","台西","大埤","莿桐","西螺","古坑","二崙","褒忠","虎尾","斗南","六腳","水上鄉","布袋鎮","梅山","朴子","民雄","東石","嘉義","太保","溪口","新港","番路","鹿草","竹崎","大林","義竹","大埔","善化鎮","佳里鎮","新營","歸仁","西港","永康","將軍","六甲","北門","鹽水","玉井","鳳山市","梓官","永安","杉林","阿蓮","林園","湖內","旗山","仁武","大寮","路竹","岡山","大社","橋頭","彌陀","茄萣","田寮","燕巢","甲仙","美濃","鳥松","新埤","里港鄉","麟洛","恒春","枋山","南州","琉球","滿州","東港鎮","崁頂鄉","九如鄉","富里鄉","壽豐","吉安","新秀","太麻里","台東","關山","鹿野","東河","成功","池上","長濱","澎湖","台中市","連江縣"],["雲林","嘉義","南市區","南縣","永安","興達港","林園區","彌陀","東港","琉球區","林邊區","新港","澎湖區"]],O=["金融機構","戶名","匯款時間","賣方名稱"],R=["金融機構","戶名","買方名稱"];function H(e){switch(e.target.id){case"iSel 金融機構":console.log("iSel 金融機構"),O[0]=e.target.options[e.target.selectedIndex].text,N();break;case"_匯款戶名":O[1]=e.target.value,N();break;case"iSel 年":case"iSel 月":case"iSel 日":O[2]=function(e){var t=document.getElementById("iSel 年"),n=document.getElementById("iSel 月"),o=document.getElementById("iSel 日"),r=parseInt(t.options[t.selectedIndex].text),a=parseInt(n.options[n.selectedIndex].text);switch(e.target.id){case"iSel 年":D(n,r==T?M:A);break;case"iSel 月":var i=new Date(r<1911?r+1911:r,a,0).getDate(),l=[];for(let e=0;e<i;e++)l.push(i-e);D(o,l)}return t.options[t.selectedIndex].text+"-"+n.options[n.selectedIndex].text+"-"+o.options[o.selectedIndex].text}(e),N();break;case"_款項金額":e.target.value=50*Math.ceil(parseInt(e.target.value)/50)+(void 0===e.target._最小額度?0:e.target._最小額度);break;case"iSel 業務賣方":document.getElementById("t 點數賣方金融帳號資訊").textContent=e.target.options[e.target.selectedIndex].value;break;case"iSel 金融機構 出":R[0]=e.target.options[e.target.selectedIndex].text,U();break;case"_收款戶名":R[1]=e.target.value,U();break;case"c_虛寶":e.target.value=1e3*Math.ceil(parseInt(e.target.value)/1e3);break;case"iSel 虛寶買方":document.getElementById("t 虛寶買方購入匯率告示").textContent="一千枚收入價＝"+e.target.options[e.target.selectedIndex].value;break;case"list 已交客戶":document.getElementById("買點客戶名稱").value=e.target.options[e.target.selectedIndex].text;break;case"list 預設發配點數":document.getElementById("選中的發配點數").value=e.target.options[e.target.selectedIndex].text;break;case"List 申領點數":document.getElementById("選中的申領點數").value=e.target.options[e.target.selectedIndex].text}switch(e.target.name){case"_金融機構選項":if(e.target.checked){for(var t=(n=document.getElementById("iSel 金融機構")).length-1;t>=0;t--)n[t].remove();for(t=0;t<P[e.target.value].length;t++)n.options.add(new Option(P[e.target.value][t]));n.selectedIndex=0}break;case"sell_金融機構選項":if(e.target.checked){var n;for(t=(n=document.getElementById("iSel 金融機構 出")).length-1;t>=0;t--)n[t].remove();for(t=0;t<P[e.target.value].length;t++)n.options.add(new Option(P[e.target.value][t]));n.selectedIndex=0}}}function N(){document.getElementById("_點數賣家收款資訊").textContent=O[0]+" "+O[1]+" "+O[2]}function U(){document.getElementById("_虛寶賣家收款資訊").textContent=R[0]+" "+R[1]}var Y=Object.freeze({客端_初化帳單資訊:32,客端_新增提交點數匯款資訊:33,客端_送出虛寶交易單:34,客端_刪除所選擇的交易單:35,客端_:36});function z(t){switch(t.target.id){case"btn 導入有值登入選單":console.log("btn 導入有值登入選單"),d=g[i.login],u(void 0,q.Menu_Login,d,[p,[g[i.authorize],"560px","DownBack"]]);break;case"btn 訪客身份試玩":s(i.login,LOGIN_訪客,[l.sr,l.sr,l.sr],[I(y("Guest")),I("Guest"),I(_[0])]);break;case"btn 導入簽名註冊選單":"簽名字（成為有名玩家）",d=g[i.register],u(void 0,q.Menu_Register,d,[p,[g[i.authorize],"560px","DownBack",function(){f({"Menu Title":"簽名字（成為有名玩家）"})}]]);break;case"btn 愛玩登入":r=document.getElementById("hostName"),a=document.getElementById("lHostName"),c=document.getElementById("password"),m=document.getElementById("lPassword"),h=!0,b(r.value)<4?(a.innerHTML="請填入至少4個字元",h=!1):a.innerHTML="請填入4～16位英數字元",b(c.value)<4?(m.innerHTML="請填入至少4個字元",h=!1):m.innerHTML="請填入4～16位英數字元",h&&s(i.login,1,[l.sr,l.sr,l.sr],[I(y(r.value)),I(c.value),I($.gServerID)]);break;case"btn 取消愛玩登入":d=g[i.authorize],u(void 0,q.Menu_Gate,d,[p,[g[i.login],"-560px","UpBack"]]);break;case"btn 註冊簽名":!function(){var e=document.getElementById("hostName"),t=document.getElementById("lHostName"),n=document.getElementById("nickName"),o=document.getElementById("lNickName"),r=document.getElementById("eMail"),a=document.getElementById("lEMail"),c=document.getElementById("password"),u=document.getElementById("lPassword"),d=document.getElementById("verify"),m=document.getElementById("lVerify"),g=document.getElementById("agree"),p=(document.getElementById("lAgree"),g.checked);if(b(e.value)<4?(t.innerHTML="請填入至少4個字元",p=!1):t.innerHTML="請填入4～16位英數字元",b(n.value)<4?(o.innerHTML="請填入至少4個字元",p=!1):o.innerHTML="請填入4～16位英數字元",b(r.value)<12&&(a.innerHTML="電郵信箱長度過短",p=!1),b(c.value)<4?(u.innerHTML="請填入至少4個字元",p=!1):u.innerHTML="請填入4～16位英數字元",d.value!=c.value?(m.innerHTML="與所輸入密碼不符合",p=!1):m.innerHTML="",console.log(p,"~~~~ isPass ~~~~~註冊規則~~~~~~~"),p){if(!E.電郵格式.test(r.value))return void(a.innerHTML="電郵信箱格式不對");if(0===n.value.indexOf("SalesCoperationPartner"))return;s(i.register,0,[l.sr,l.sr,l.sr],[I(y(e.value)),I(c.value),I(n.name+n.value)])}}();break;case"btn 取消註冊簽名":d=g[i.authorize],u(void 0,q.Menu_Gate,d,[p,[g[i.register],"-560px","UpBack"]]);break;case"btn 進入遊戲大廳":e.close(),e.onclose=function(t){var n,o,r,a;console.log("-e進入遊戲大廳>  Socket狀態：",e.readyState,t.wasClean),t.code,t.reason,t.wasClean,n="<script>  document.pp=['"+$.uid+"','"+$.授權碼+"','"+$.GP+"','"+$.gold+"','"+$.gID+"','"+$.gIP+"','"+$.gPort+"','"+Z+"','"+$.av_ticket+"'];  <\/script>",o="https://raw.githubusercontent.com/Cc-Yen/7w/main/AppLobby/"+$.gID+"/index",r="<base href='https://"+Z+"/AppLobby/"+$.gID+"' />",(a=new XMLHttpRequest).open("GET",o),a.responseType="",a.onload=function(){var e=new Blob([r,a.responseText,n],{type:"text/html"}),t=URL.createObjectURL(e);location.replace(t)},a.send()};break;case"btn 逛交易廣場":s(i.trade,Y.客端_初化帳單資訊,[l.u1],[[1]]);break;case"btn 返回遊戲大廳入口":document.getElementById("交易廣場").classList.toggle("show");break;case"btn 查閱客端交易紀錄明細":W();break;case"btn 送出虛寶交易單":if(confirm("確定向買家送出交易訊息以售出龍紋幣嗎？")){var n=document.getElementById("iSel 虛寶買方");s(i.trade,Y.客端_送出虛寶交易單,[l.sr,l.sr,l.sr],[I(n.options[n.selectedIndex].text),I(document.getElementById("c_虛寶").value),I(document.getElementById("_虛寶賣家收款資訊").textContent)]),alert("交易已經送出，請等帶回訊")}else alert("售出龍紋幣的交易訊息已經取消。");break;case"btn 新增提交點數匯款資訊":confirm("確定向賣家送出交易訊息，購入遊戲幣嗎？")?(n=document.getElementById("iSel 業務賣方"),console.log(n.options[n.selectedIndex].text,document.getElementById("_款項金額").value,document.getElementById("_點數賣家收款資訊").textContent),s(i.trade,Y.客端_新增提交點數匯款資訊,[l.sr,l.sr,l.sr],[I(n.options[n.selectedIndex].text),I(document.getElementById("_款項金額").value),I(document.getElementById("_點數賣家收款資訊").textContent)]),alert("交易已經送出，請等帶回訊")):alert("購入遊戲幣的交易訊息已經取消。");break;case"btn 刪除本筆交易單":if(confirm("確定刪除所選擇的交易單？")){var o=document.getElementById("scrl 兌銷補點");s(i.trade,Y.客端_刪除所選擇的交易單,[l.sr],[I(o.btnDATA[o.id_選中鈕]._標題變數值[3])])}else alert("已經取消刪除本筆交易單。")}var r,a,c,m,h;"scrl 兌銷補點"===t.target.parentNode.id&&(t.target.parentNode.id_選中鈕=parseInt(t.target.id),document.getElementById("目前所選資料").innerHTML=t.target.innerHTML)}function j(e){e.target.id}var F=Object.freeze({0:[],1:[function(e){console.log("AppGate SCB 弭平之ping(騙)到了 !",e)},function(e){1===e[0][0]?console.log("AppGate SCB 完成身份確認，恭喜您進入大廳 ! !",e):console.log("AppGate SCB 無法登入身份 以訪客身份進入大廳。",e)}],2:[function(e){document.getElementById("lstate").innerHTML="帳號申請成功，歡迎加入"},function(e){document.getElementById("lstate").innerHTML="此帳號已有人使用，請試其他帳號"}],3:[function(e){console.log("d",e),m=g[Object.keys(q).indexOf(d.id)],d=g[i.server_queue],u(void 0,q.Menu_OKMenu,d,[p,[m,"-560px","UpBack",function(){$.遊戲俗名=_[1],$.GP=e[2][0],$.上次登入IP=e[2][1],$.上次登入時間=e[2][2],$.gold=e[2][3],$.av_ticket=e[2][4],$.授權碼=e[3][0],$.gIP=e[4][0],$.gPort=e[5][0],console.log("玩家遊戲資訊：",$),f({"app name":$.遊戲俗名,"nick name":"您好！  "+e[1]});var t=document.getElementById("上次登入資訊");t.setAttribute("style","white-space: pre; text-align: center; color: rgb(0, 0, 0);"),t.textContent="上次從IP："+x.IP_FromINT($.上次登入IP)+"\r\n時間："+x.Get_TimeFrom整數($.上次登入時間),function(e,t,n,o){e.meta={},e.btnDATA=void 0===t?[]:t,e.id_選中鈕=0,e.max行程_夾住模式={x:0,y:0},e.max行程_滾動項目堆={x:0,y:0},e.pos原點_滾動項目堆={x:0,y:0},e.dir={x:1,y:0},e._項目標題文=n._項目標題文,e.sp_背景框=n.sp_背景框,e.sp_前景項目=n.sp_前景項目,e.iColor=n.color,e.name_IO溝通,e.data_由文件內容={},e.key_類別資料,e.data_目前選中類別的章關,e.sp_供主類別前景項目;var r,a,i=e.getElementsByClassName("iBn");e.Init=function(){var t=i[0],n=i[i.length-1];t.getBoundingClientRect().left==n.getBoundingClientRect().left&&t.getBoundingClientRect().top==n.getBoundingClientRect().top||(clearInterval(a),console.log("scrl.id ",e.id),e.is_水平模式=t.getBoundingClientRect().top==n.getBoundingClientRect().top,console.log("scrl.is_水平模式 ",e.is_水平模式),e.unit_travel=e.is_水平模式?i[0].getBoundingClientRect().width:i[0].getBoundingClientRect().height,console.log("scrl.unit_travel  ",e.unit_travel),r=.5*e.unit_travel,e.is_水平模式?e.scrollLeft+=e.unit_travel:e.scrollTop+=e.unit_travel)},a=setInterval(e.Init,49),e.Set_項目=function(t,n){var o=e.btnDATA[t.id];t.innerHTML=o?x.Get_詞嵌入文(e._項目標題文,void 0===n?o._標題變數值:n):t.id};for(var l=0;l<i.length;l++)e.Set_項目(i[l],[l+1]);e.Reset_BtnDATA=function(){for(var t=0;t<i.length;t++)e.Set_項目(i[t])},e.限速=function(){return e.Update_ScrollView(),x.Clamp(arguments[0],r,-r)},e.releaseTime=n.releaseTime,e.力衰退intervalTime=n.力衰退intervalTime,e.On拖力漸緩衰退=function(){var t=this,n=t.releaseTime,o=setInterval((function(){t.scrollBy(e.限速(t.lastMovement.x),e.限速(t.lastMovement.y)),(n-=t.力衰退intervalTime)<=0&&clearInterval(o)}),t.力衰退intervalTime)},e.Update_ScrollView=function(){var t=e.btnDATA.length,n=this.is_水平模式?e.scrollLeft:e.scrollTop;n>1.5*this.unit_travel?(i[0].id=(parseInt(i[i.length-1].id)+1)%t,e.Set_項目(i[0]),e.insertAdjacentElement("beforeend",i[0]),e.scrollLeft-=this.unit_travel):n<.5*this.unit_travel&&(i[i.length-1].id=(parseInt(i[0].id)+t-1)%t,e.Set_項目(i[i.length-1]),e.insertAdjacentElement("afterbegin",i[i.length-1]),e.scrollLeft+=this.unit_travel)},e.isMouseDown=!1,e.isMouseUP=!1,e.mouseMoveDelta=0,e.addEventListener("mouseup",K),e.addEventListener("mousedown",K),e.addEventListener("mousemove",K),e.addEventListener("mouseenter",K),e.addEventListener("mouseleave",K),e.addEventListener("scroll",e.Update_ScrollView)}(document.getElementById("scrl 兌銷補點"),[],{_項目標題文:'<b style="text-align: center; color:red;">{0}.</b>{1} <b style="text-align: center; color:green;">{2}點</b> {4}<br>{3}',releaseTime:490,力衰退intervalTime:49})}]])},function(e){document.getElementById("lstate").innerHTML="帳號或密碼 - 錯誤或格式不符"},function(e){document.getElementById("lstate").innerHTML="帳號或密碼 - 錯誤或格式不符"}],4:[function(e){for(var t=0;t<e.length;++t)console.log(t,"> ：",e[t])},function(e){console.log("d",e),document.getElementById("交易廣場").classList.toggle("show")}],6:{32:function(e){C(["iSel 從年","iSel 至年"],["iSel 從月","iSel 至月"]),C(["iSel 年"],["iSel 月"],["iSel 日"]),Object.freeze(["\n查詢有未完成的交易資料。","\n資料庫忙線請稍後再試。","\n查詢無未完成的交易資料"]),console.log("玩發配家 遊戲點數 e結果狀態 d[0][0]：",e),document.getElementById("state 兌銷資料表").textContent="您目前尚無交易資料",document._業務名冊=e[1];for(var t=document.getElementById("iSel 已交客戶"),n=document.getElementById("iSel 業務賣方"),o=document.getElementById("iSel 虛寶買方"),a=0;a<document._業務名冊.length;a++)t.options[a]=new Option(e[1][a]),n.options.add(new Option(e[1][a],e[2][a])),o.options.add(new Option(e[1][a],e[3][a]));var i=document.getElementById("scrl 兌銷補點");if(0==e[0][0]){for(document.getElementById("遊戲點").textContent=$.GP,document.getElementById("龍紋幣").textContent=$.gold,document.getElementById("觀聆卷").textContent=$.av_ticket,document.getElementById("state 兌銷資料表").textContent="交易資料"+e[4].length+"筆",i.meta.客戶名單=e[1],i.meta.名稱代號=e[4],i.meta.帳單狀態=[],i.meta.帳單額度=e[5],i.meta.帳單整數時間=e[6],i.meta.帳單時間=[],a=0;a<e[6].length;a++)i.meta.帳單時間.push(x.Get_TimeFrom整數(e[6][a],e[7][a])),i.meta.帳單狀態.push(r.客端申購);i.meta.客端交易帳戶=e[8],i.meta.帳單方式=e[9],W()}document.getElementById("交易廣場").classList.toggle("show")},33:function(e){alert(["新增交易單成功","查無賣家，交易未成功","本筆交易未成功紀錄"][e[0][0]])},34:function(e){alert(["更新交易單成功","本筆交易未成功更新"][e[0][0]])},35:function(e){alert(["刪除交易單成功","本筆交易未成功刪除"][e[0][0]])}}}),q={AuthRegGameServer:"",Menu_Gate:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Gate",Menu_Register:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Register",Menu_Login:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Login",msg:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Gate",list:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Gate",trade:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Gate",mail:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_Gate",Menu_OKMenu:"https://raw.githubusercontent.com/Cc-Yen/7w/main/AppGate/Menu_OKMenu"};function W(e){var t=document.getElementById("iSel 從年"),n=document.getElementById("iSel 從月"),o=document.getElementById("iSel 至年"),i=document.getElementById("iSel 至月"),l=parseInt(t.options[t.selectedIndex].text),s=parseInt(o.options[o.selectedIndex].text),c=parseInt(n.options[n.selectedIndex].text),u=parseInt(i.options[i.selectedIndex].text),d=document.getElementById("iSel 已交客戶");e=void 0===e?document.getElementById("scrl 兌銷補點"):e;var m=parseInt(document.querySelector('input[name="r 兌銷方式"]:checked').id),g=parseInt(document.querySelector('input[name="r 交易兌帳單狀態"]:checked').id),p="r 交易兌帳單全部狀態"!=document.querySelector('input[name="r 交易兌帳單狀態"]:checked').id,h=x.Get_整數FromTime(l+"-"+c)/1e3,v=x.Get_整數FromTime(s+"-"+(u+1))/1e3,f=e.meta;e.btnDATA=[],console.log("_meta.名稱代號",f.名稱代號,"sel_兌銷方式",m,"sel_交易兌帳單state",g);for(var _=0;_<f.名稱代號.length;_++)if(f.帳單方式[_]==m)if(p&&f.帳單狀態[_]!=g)console.log("is_使用條件過濾");else{var y=f.客戶名單[f.名稱代號[_]];if(d.selectedIndex&&y!=d.options[d.selectedIndex].text)console.log("_meta.iSel_已交客戶",y,"<>",d.options[d.selectedIndex].text);else if(f.帳單整數時間[_]<h)console.log("t_從");else if(f.帳單整數時間[_]>v)console.log("t_到");else{e.btnDATA.push({_標題變數值:[]});var b=e.btnDATA.length-1;e.btnDATA[b]._標題變數值.push(b),e.btnDATA[b]._標題變數值.iid=_,e.btnDATA[b]._標題變數值.push(y),e.btnDATA[b]._標題變數值.push(Object.getOwnPropertyNames(a)[f.帳單方式[_]]),e.btnDATA[b]._標題變數值.push(f.帳單額度[_]),e.btnDATA[b]._標題變數值.push(f.帳單時間[_]),e.btnDATA[b]._標題變數值.push(Object.getOwnPropertyNames(r)[f.帳單狀態[_]]),e.btnDATA[b]._標題變數值.push(f.客端交易帳戶[_])}}else console.log("sel_兌銷方式",f.帳單方式[_],"vs",m);document.getElementById("state 兌銷資料表").textContent="("+document.querySelector('input[name="r 兌銷方式"]:checked').parentElement.textContent+")("+document.querySelector('input[name="r 交易兌帳單狀態"]:checked').parentElement.textContent+") 資料共"+e.btnDATA.length+"筆";var E=e.getElementsByClassName("iBn");for(_=e.btnDATA.length;_<E.length;_++)e.btnDATA.push(null);e.Reset_BtnDATA()}function K(e){var t=e.currentTarget;switch(e.type){case"mousemove":t.isMouseDown&&(t.isMouseUP||(t.scrollBy(t.限速(-e.movementX),t.限速(-e.movementY)),t.lastMovement={x:-e.movementX,y:-e.movementY}));break;case"mouseup":t.isMouseUP=!0,t.On拖力漸緩衰退();break;case"mousedown":t.isMouseDown=!0,t.isMouseUP=!1;break;case"mouseenter":t.isMouseDown=t.isMouseUP=!1;break;case"mouseleave":t.isMouseDown&&!t.isMouseUP&&(t.isMouseUP=!0,t.On拖力漸緩衰退())}}function V(){}V.prototype.Is_夾住限制=function(){var e=!1,t=.2*this.unit_travel,n=Phaser.Math.RoundTo(this.pnl_btnGroup.p);return is_水平模式?this.pnl_btnGroup.x=n.x>0?(e=n.x>max行程_夾住模式.x)?n.x>max行程_夾住模式.x+t?max行程_夾住模式+t:n.x-1:n.x:(e=n.x<-max行程_夾住模式.x)?n.x<-max行程_夾住模式.x-t?-max行程_夾住模式+t:n.x+1:n.x:this.pnl_btnGroup.y=n.y>0?(e=n.y>max行程_夾住模式.y)?n.y>max行程_夾住模式.y+t?max行程_夾住模式+t:n.y-1:n.y:(e=n.y<-max行程_夾住模式.y)?n.y<-max行程_夾住模式.y-t?-max行程_夾住模式+t:n.y+1:n.y,this.scene.input.setDraggable(this.pnl_btnGroup,!e),e},V.prototype.GetSnapedTravel=function(){return Phaser.Math.RoundTo(this.pnl_btnGroup.p/this.unit_travel)},V.prototype.UpdatePosSide=function(e){return e*this.unit_travel},V.prototype.SetPos=function(e,t){this.is_水平模式?e.x=t:e.y=t},V.prototype.ResetItemData=function(e,t,n,o,r,a){if(data_目前選中類別的章關=e,void 0===n)n=iColor;else for(var i=n.length-(n.length-iColor.length);i<n.length;i++)iColor[i]=iColor[0];if(null!=sp_供主類別前景項目)for(r=new Sprite[data_目前選中類別的章關[0].length],i=0;i<data_目前選中類別的章關[0].length;i++)r[i]=sp_供主類別前景項目[">"];sp_前景項目=void 0===r?sp_前景項目:r,sp_背景框=void 0===o?sp_背景框:o,data_目前選中類別的章關[0].length,id_獨特.length,id_獨特=data_目前選中類別的章關[0],iLable=data_目前選中類別的章關[1];var l="s格_"+name_IO溝通;if(CcLoader.app_cfg.ContainsKey(l))for(i=0;i<iLable.length;i++)iLable[i]=string.Format(CcLoader.app_cfg[l],iLable[i]);is_Srolling||(is_Srolling=!0,StartCoroutine(SrollingResetItems(t,n,a)))},window.onorientationchange=function(){document.body.style.scale=window.innerHeight>window.innerWidth?X.bodyScale直式:X.bodyScale橫式};var X=new function(e,t,n){n=void 0===n;const o=window.innerHeight>window.innerWidth;var r=0;window.innerWidth?r=o?window.innerWidth:window.innerHeight:document.body&&document.body.offsetWidth&&(r=document.body.offsetWidth);var a=0;window.innerHeight?a=o?window.innerHeight:window.innerWidth:document.body&&document.body.offsetHeight&&(a=document.body.offsetHeight),this.bodyScale直式=n?Math.min(r/777,a/490):r/777,this.bodyScale橫式=n?Math.min(r/490,a/777):a/490,document.querySelector('meta[name="viewport"]').setAttribute("content","initial-scale="+this.bodyScale直式+", user-scalable=no")}(777,490),Z=_[2],$={gID:_[0],gServerID:_[3],gWS:"wss://"+Z+":20038"};!function(t){try{var n=new Array("正在連線","已建立連線","正在關閉連線","已關閉連線");console.log("ws.connect 場次內容：",$.gWS),(e=new WebSocket($.gWS)).binaryType="arraybuffer",document.getElementById("message"),console.log("Socket狀態：",n[e.readyState]),e.onopen=function(){console.log("幹幹幹幹幹按安！！!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),e.send(new Uint8Array([i.authorize,0]))},e.onerror=function(e){alert("目前網路忙線，與伺服器連線已經中斷\n請稍後再試。"),console.log("Socket狀態：","onerror:",e)},e.onmessage=function(e){var t=new Uint8Array(e.data);console.log("Server的原生回傳(Raw FDBK) : ",t," 資料{Array}長度：",t.length),F[t[0]][t[1]](function(e){for(var t=[],n=2;n<e.length;){var o=e[n],r=e[n+1],a=0,i=n+2;if(!o)return alert(n+"< 料- 長度 >:"+o),void console.log(n,"< 料- 長度 >:"+e[n],"  < 類型 >:"+r);switch(r){case l.bl:case l.c1:break;case l.sa:for(var s,c=[],u=2,d=0;d<o;d++)s=e[g=n+u],c.push(S(e.slice(g+1,g+s))),u+=s;o=u,t.push(c),a++;break;case l.sr:t.push(S(e.slice(i,i+o))),o+=2;break;case l.s1:var m=S(e.slice(i,i+o)).split(",");t.push(m),o+=2;break;case l.s2:case l.s3:case l.sm:break;case l.bt:for(c=[],u=2,d=0;d<o;d++){for(var g=n+u,p=0;p<8;p++)c.push(1&e[g]>>p);u+=1}o=u,t.push(c),a++;break;case l.i1:for(c=new Int8Array(o),u=2,d=0;d<o;d++)g=n+u,c[d]=e[g],u+=Int8Array.BYTES_PER_ELEMENT;o=u,t.push(c);break;case l.u1:for(c=new Uint8Array(o),u=2,d=0;d<o;d++)g=n+u,c[d]=e[g],u+=Uint8Array.BYTES_PER_ELEMENT;o=u,t.push(c);break;case l.i2:for(c=[],u=2,d=0;d<o;d++){g=n+u;var h=0;for(p=0;p<Int16Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),u+=Int16Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.u2:for(c=[],u=2,d=0;d<o;d++){for(g=n+u,h=0,p=0;p<Uint16Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),u+=Uint16Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.i4:for(c=[],u=2,d=0;d<o;d++){for(g=n+u,h=0,p=0;p<Int32Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),u+=Int32Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.u4:for(c=[],u=2,d=0;d<o;d++){for(g=n+u,h=0,p=0;p<Uint32Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),u+=Uint32Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.i8:case l.u8:case l.db:case l.fl:case l.de:case l.i1n:case l.u1n:case l.i2n:case l.u2n:case l.i4n:case l.u4n:case l.i8n:case l.u8n:case l.dbn:case l.fln:case l.den:case l.u1c:break;case l.pu:for(c=[],u=2,d=0;d<o;d++){for(g=n+u,h=0,p=0;p<Uint32Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),localStorage.setItem($.gID+"_pu"+r.toString()+a,h),console.log("pu:::>",h),a++,u+=Uint32Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.pi:for(c=[],u=2,d=0;d<o;d++){for(g=n+u,h=0,p=0;p<Int32Array.BYTES_PER_ELEMENT;p++)h|=e[g+p]<<8*p;c.push(h),localStorage.setItem($.gID+"_pi"+r.toString()+a,h),console.log("pi:::>",h),a++,u+=Int32Array.BYTES_PER_ELEMENT}o=u,t.push(c);break;case l.ps:console.log("pos_本type料頭:::>",e.length,i,o),h=S(e.subarray(i,i+o)),t.push(h),localStorage.setItem($.gID+"_ps",h),o+=2;case l.pf:case l.count:}n+=o}return console.log("Server回傳(FDBK)的萃取：",t),t}(t))},e.onclose=function(){console.log("網路狀態：",n[e.readyState])}}catch(e){alert("網路連線狀態發生錯誤\n"+e)}}(),Object.freeze(["","","","","","","","","登入成功！",""]),document.init=function(){for(var e=Object.keys(q).length,t=0;t<e;t++){var n=Object.keys(q)[t];0===n.indexOf("Menu_")&&(g[t]=document.createElement("div"),g[t].id=n)}document.body.addEventListener("click",z),document.body.addEventListener("change",j),document.body.addEventListener("change",H),u(g[i.authorize].id,q.Menu_Gate),d=g[i.authorize],document.body.appendChild(g[i.authorize])},document.addEventListener("DOMContentLoaded",document.init)})();