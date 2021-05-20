// import './less/index.less';
import Pwa from './js/PwaInit.js';
import {initDom, initDomWithPwa} from './js/initDom.js';
// import {test} from './js/test.js';

// console.log(process.env)
console.log(import.meta.env)

if (import.meta.env.DEV) {
  let btn = document.createElement('button');
  btn.textContent = 'start serviceWorker';
  btn.addEventListener('click', init);
  document.body.appendChild(btn);
  initDom();
} else {
  window.addEventListener('load', () => {
    init();
    initDom();
  })
}

function init() {
  let pwa = new Pwa({elAddTo: '#btn-add'});
  pwa.initSW();
  pwa.initPush();
  pwa.initNotification();
  pwa.initAddToScreen();
  initDomWithPwa(pwa)
}
