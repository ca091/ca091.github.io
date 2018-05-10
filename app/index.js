import './style/index.less';

import consts from './js/consts';

if(consts.env=='dev'){
    var btn = document.createElement('button');
    btn.textContent = 'start serviceWorker';
    btn.addEventListener('click', startSW);
    document.body.appendChild(btn)
}else{
    window.addEventListener('load', startSW)
}

function startSW() {
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js', {scope: '/'})
            .then(function (registration) {
                console.log('ServiceWorker登记成功，范围为', registration.scope);
            })
            .catch(function (err) {
                console.log('ServiceWorker登记失败：', err);
            })
    }else{
        alert('not support serviceWorker')
    }
}