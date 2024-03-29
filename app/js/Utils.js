// 将base64的applicationServerKey转换成UInt8Array
function urlBase64ToUnit8Array(base64String) {
  let padding = '='.repeat((4 - base64String.length % 4) % 4)
  let base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')
  let rawData = window.atob(base64)
  let outputArray = new Uint8Array(rawData.length)
  for (let i = 0, max = rawData.length; i < max; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function ab2str(buf) {
  // let enc = new TextDecoder('utf-8');
  let enc = new TextDecoder('iso-8859-2')
  let arr = new Uint8Array(buf)
  console.log(enc.decode(arr))
  // return enc.decode(arr);
  // return String.fromCharCode.apply(null, new Uint16Array(toUint8Array));
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

function notification({title, useNative}) {
  if (useNative) {
    let n = new Notification(title, {
      tag: 'normal',
      icon: '/app/img/favicon.ico',
      body: 'native!',
    })
    n.addEventListener('click', function (e) {
      console.log(e)
    })
    setTimeout(n.close.bind(n), 3000)
  } else {
    navigator.serviceWorker.ready.then(reg => {
      reg.showNotification(title, {
        icon: '/app/img/favicon.ico',
        body: 'can u see?',
      })
    })
  }
}

function appendMsgDom(info) {
  let p = document.createElement('p')
  p.textContent = info
  document.querySelector('#infos').appendChild(p)
}

export {urlBase64ToUnit8Array, ab2str, notification, appendMsgDom}
