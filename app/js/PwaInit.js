import {urlBase64ToUnit8Array} from './Utils.js';
class Pwa {
	constructor({elAddTo}){
		this.registration = null;
		this.dfdPrompt = null;
		this.elAddTo = elAddTo;
	}
	initSW() {
		if('serviceWorker' in navigator){
			navigator.serviceWorker.register('/sw.js', {scope: '/'})
			.then(registration => {
				this.registration = registration;
				console.log('ServiceWorker登记成功，范围为', registration.scope);
			})
			.catch(function (err) {
				console.log('ServiceWorker登记失败：', err);
			});
		}else{
			alert('not support serviceWorker')
		}
	}
	initPush() {
		if('PushManager' in window){
			navigator.serviceWorker.ready.then(reg => this.subscribe(reg));
		}else{
			alert('not support PushManager')
		}
	}
	initNotification() {
		return new Promise(function (resolve, reject) {
			let permissionResult = Notification.requestPermission(function (result) {
				// 旧版本
				resolve(result);
			});
			if (permissionResult) {
				// 新版本
				permissionResult.then(resolve, reject);
			}
		})
		.then(permissionResult => {
			if (permissionResult === 'granted') {
				if(this.registration){
					this.registration.showNotification('ServiceWorker登记成功!', {
						icon: '/app/img/favicon.ico',
						body: 'can u see?'
					});
				}
			} else {
				console.log('no permission');
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
				console.log('用户取消安装应用');
				// 存储事件
				if(!this.dfdPrompt && e) this.dfdPrompt = e;
				button.style.display = 'block';
			}
			else {
				console.log('用户安装了应用');
				this.dfdPrompt = null;
				button.style.display = 'none';
			}
		}
	}
	subscribe(serviceWorkerReg) {
		serviceWorkerReg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUnit8Array('BEb2P46QjCQigSz8cpjj8I4s97tQrw-dxlh7MwUhdDQXEg-e11V7fzbye3xEysTcoDp2f6d-B-Q9QoEZdCOESPk')
		})
		.then(subscription => {
			console.log({subscription})
			// 3. 发送推送订阅对象到服务器，具体实现中发送请求到后端api
			// sendEndpointInSubscription(subscription);
		})
		.catch(e => {
			if (Notification.permission === 'denied') {
				// 用户拒绝了订阅请求
				console.log('用户拒绝了订阅请求')
			}
		});

		serviceWorkerReg.pushManager.getSubscription()
		.then(uns => {
			if(uns){
				uns.unsubscribe()
				.then(successful => {
					//
				})
				.catch(e => {
					//
				});
			}
		});
	}

}

export default Pwa;