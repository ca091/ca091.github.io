function e(e){let t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(t),n=new Uint8Array(i.length);for(let o=0,r=i.length;o<r;++o)n[o]=i.charCodeAt(o);return n}function t(e){let t=document.createElement("p");t.textContent=e,document.querySelector("#infos").appendChild(t)}function i(e,t,i){return fetch(e,{method:t,body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>{if(e.ok)return e.text()}))}class n{constructor({elAddTo:e}){this.dfdPrompt=null,this.elAddTo=e}initSW(){"serviceWorker"in navigator?(navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((e=>{t(`ServiceWorker登记成功，范围为${e.scope}`)})).catch((function(e){t("ServiceWorker登记失败："),t(e)})),navigator.serviceWorker.addEventListener("message",(e=>{t(`msg received from sw : ${e.data}`)}))):alert("not support serviceWorker")}initPush(){"PushManager"in window?navigator.serviceWorker.ready.then((e=>{e.pushManager.getSubscription().then((i=>{i?t("already subscribed!!!"):(t("begin subscribe..."),this.subscribe(e))}))})):alert("not support PushManager")}cancelPush(){return new Promise(((e,i)=>{navigator.serviceWorker.ready.then((n=>{n.pushManager.getSubscription().then((n=>{n?n.unsubscribe().then((i=>{t("cancel subscribe success"),e()})).catch((e=>{t("cancel subscribe fail"),t(e),i(e)})):e()}))}))}))}initNotification(){Notification.requestPermission().then((e=>{"granted"===e?t("Notification is supported"):alert("not support Notification")}))}initAddToScreen(){let e=document.querySelector(this.elAddTo);function i(i,n){"dismissed"===i.outcome?(t("用户取消安装应用"),!this.dfdPrompt&&n&&(this.dfdPrompt=n),e.style.display="block"):(t("用户安装了应用"),this.dfdPrompt=null,e.style.display="none")}window.addEventListener("beforeinstallprompt",(e=>{e.userChoice.then((t=>i(t,e)))})),e.addEventListener("click",(()=>{null!=this.dfdPrompt&&(this.dfdPrompt.prompt(),this.dfdPrompt.userChoice.then((e=>i(e))))}))}subscribe(n){n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e("BKmzm3addDa0_hQNkJ0Readn9V2-mIhtdNvfq_yOzYpY14hGhSGJ5ZD4flqSCBDEwlwxjiaLHparbg2n0h0gxOU")}).then((e=>(t("browser subscribe success, send subscription to server"),i("http://47.93.35.239/net_set","post",{endpoint:e.endpoint,p256dh:e.toJSON().keys.p256dh,auth:e.toJSON().keys.auth})))).catch((e=>{t("browser subscribe fail"),t(e),console.warn(e),"denied"===Notification.permission&&t("用户拒绝了订阅请求")}))}}function o(){let e=document.querySelector(".t-notification"),t=document.querySelector(".t-api"),n=document.querySelector(".t-api-no");e.addEventListener("click",(e=>{!function({title:e,useNative:t}){if(t){let t=new Notification(e,{tag:"normal",icon:"/app/img/favicon.ico",body:"native!"});t.addEventListener("click",(function(e){console.log(e)})),setTimeout(t.close.bind(t),3e3)}else navigator.serviceWorker.ready.then((t=>{t.showNotification(e,{icon:"/app/img/favicon.ico",body:"can u see?"})}))}({title:"test...",useNative:!0})})),t.addEventListener("click",(e=>{i("/api_report","POST",{type:0,code:1,content:"tte"}).then((e=>console.log(e)))})),n.addEventListener("click",(e=>{i("/list","POST",{type:0}).then((e=>console.log(e)))}))}console.log({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),window.addEventListener("load",(()=>{!function(){let e=new n({elAddTo:"#btn-add"});e.initSW(),e.initPush(),e.initNotification(),e.initAddToScreen(),function(e){document.querySelector(".re-subscribe").addEventListener("click",(t=>{e.cancelPush().then((()=>{e.initPush()}))}))}(e)}(),o()}));