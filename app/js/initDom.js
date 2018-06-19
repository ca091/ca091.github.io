import {notification} from './Utils.js'
import {api_request} from './xhr.js'

export function initDom() {
	let t_notification = document.querySelector('.t-notification');
	let t_api = document.querySelector('.t-api');
	let t_api_no = document.querySelector('.t-api-no');

	t_notification.addEventListener('click', e => {
		notification({title: 'test...', useNative: true})
	});
	t_api.addEventListener('click', e => {
		api_request('/api_report', 'POST', {type: 0, code: 1, content: 'tte'}).then(data => console.log(data))
	});
	t_api_no.addEventListener('click', e => {
		api_request('/list', 'POST', {type: 0}).then(data => console.log(data))
	});
}

export function initDomWithPwa(pwa) {
    let re_subscribe = document.querySelector('.re-subscribe');

    re_subscribe.addEventListener('click', e => {
        pwa.cancelPush().then(() => {
        	pwa.initPush()
		})
    })
}