import {urlBase64ToUnit8Array, appendMsgDom} from './Utils.js';
import {api_request} from "./xhr";

const serverApi = 'http://47.93.35.239/net_set';
// const serverApi = 'http://localhost:8000/net_set';
// const serverApi = 'http://localhost:8083/net_set';
const publicKey = 'BKmzm3addDa0_hQNkJ0Readn9V2-mIhtdNvfq_yOzYpY14hGhSGJ5ZD4flqSCBDEwlwxjiaLHparbg2n0h0gxOU';

class Pwa {
	constructor({elAddTo}){
		this.dfdPrompt = null;
		this.elAddTo = elAddTo;
	}
	initSW() {
		if('serviceWorker' in navigator){
			navigator.serviceWorker.register('/sw.js', {scope: '/'})
				.then(registration => {
                    appendMsgDom(`ServiceWorker登记成功，范围为${registration.scope}`);
				})
				.catch(function (err) {
                    appendMsgDom('ServiceWorker登记失败：');
                    appendMsgDom(err);
				});
			//监听sw消息
            navigator.serviceWorker.addEventListener("message", event => {
                appendMsgDom(`msg received from sw : ${event.data}`);
            });
        }else{
			alert('not support serviceWorker')
		}
	}
	initPush() {
		if('PushManager' in window){
			navigator.serviceWorker.ready.then(reg => {
                reg.pushManager.getSubscription().then(subscription => {
                	//未订阅
					if(!subscription){
                        appendMsgDom('begin subscribe...');
						this.subscribe(reg)
					}else{
                        appendMsgDom('already subscribed!!!');
					}
                });
			});
		}else{
			alert('not support PushManager')
		}
	}
	cancelPush(){
		return new Promise((resolve, reject) => {
            navigator.serviceWorker.ready.then(reg => {
                reg.pushManager.getSubscription().then(subscription => {
                    if(subscription){
                        subscription.unsubscribe().then(data => {
                            appendMsgDom('cancel subscribe success');
                            resolve()
                        })
						.catch(e => {
							appendMsgDom('cancel subscribe fail');
							appendMsgDom(e);
                            reject(e)
						});
                    }else{
                        resolve()
					}
                });
            });
		})
	}
	initNotification() {
		// return new Promise(function (resolve, reject) {
		// 	let permissionResult = Notification.requestPermission(function (result) {
		// 		// 旧版本
		// 		resolve(result);
		// 	});
		// 	if (permissionResult) {
		// 		// 新版本
		// 		permissionResult.then(resolve, reject);
		// 	}
		// })
        Notification.requestPermission().then(permissionResult => {
			if (permissionResult === 'granted') {
                appendMsgDom('Notification is supported');
			} else {
                alert('not support Notification')
			}
		});
	}
	initAddToScreen(){
		let button = document.querySelector(this.elAddTo);

		window.addEventListener('beforeinstallprompt', e => {
			e.userChoice.then(choiceResult => handleResult(choiceResult, e));
			// 阻止默认事件
			// e.preventDefault();
			// return false;
		});

		button.addEventListener('click', () => {
			if (this.dfdPrompt == null) return;
			// 通过按钮点击事件触发横幅显示
			this.dfdPrompt.prompt();
			// 监控用户的安装行为
			this.dfdPrompt.userChoice.then(choiceResult => handleResult(choiceResult));
		});

		function handleResult(choiceResult, e){
			if (choiceResult.outcome === 'dismissed') {
                appendMsgDom('用户取消安装应用');
				// 存储事件
				if(!this.dfdPrompt && e) this.dfdPrompt = e;
				button.style.display = 'block';
			}
			else {
                appendMsgDom('用户安装了应用');
				this.dfdPrompt = null;
				button.style.display = 'none';
			}
		}
	}
	subscribe(serviceWorkerReg) {
		//浏览器向FCM服务(火狐不同)请求生成subscription
		serviceWorkerReg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUnit8Array(publicKey)
		})
		.then(subscription => {
			// console.log(subscription.endpoint);
            // console.log(subscription.getKey('p256dh'));
            // console.log(subscription.getKey('auth'));
            // console.log(subscription.toJSON());
            // console.log(subscription.toJSON().keys.p256dh);
            // console.log(subscription.toJSON().keys.auth);
            // 3. 发送推送订阅对象到服务器，具体实现中发送请求到后端api
            appendMsgDom('browser subscribe success, send subscription to server');
            return api_request(serverApi, 'post', {
				endpoint: subscription.endpoint,
				p256dh: subscription.toJSON().keys.p256dh,
				auth: subscription.toJSON().keys.auth,
            })
		})
		.catch(e => {
            appendMsgDom('browser subscribe fail');
            appendMsgDom(e);
			console.warn(e);
			if (Notification.permission === 'denied') {
				// 用户拒绝了订阅请求
                appendMsgDom('用户拒绝了订阅请求')
			}
		});
	}

}

export default Pwa;