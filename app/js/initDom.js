import {notification} from './Utils.js'

export function initDom() {
    var t_notification = document.querySelector('.t-notification');
    t_notification.addEventListener('click', e => {
        notification({title: 'test...', useNative: true})
    })
}
