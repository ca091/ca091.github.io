import './style/index.less';
import Pwa from './js/PwaInit.js';
import {initDom} from './js/initDom.js';

if(env=='dev'){
	var btn = document.createElement('button');
	btn.textContent = 'start serviceWorker';
	btn.addEventListener('click', init);
	document.body.appendChild(btn)
}else{
	window.addEventListener('load', init)
}

function init() {
	let pwa = new Pwa({elAddTo: '#btn-add'});
	pwa.initSW();
	pwa.initPush();
	pwa.initNotification();
	pwa.initAddToScreen();
    initDom();
}