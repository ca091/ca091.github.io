import './less/index.less';
import Pwa from './js/PwaInit.js';
import {initDom, initDomWithoutPush} from './js/initDom.js';
// import {test} from './js/test.js';

if(env==='dev'){
	let btn = document.createElement('button');
	btn.textContent = 'start serviceWorker';
	btn.addEventListener('click', init);
	document.body.appendChild(btn);
	initDomWithoutPush();
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