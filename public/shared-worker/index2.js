window.onload = init

function init() {
  let $ = document.querySelector.bind(document)
  let port = openSharedWorker()
  let callPage2 = $('#callPage2')

  port.onmessage = function(e) {
    console.log('received message:', e)
  }

  callPage2.addEventListener('click', () => {
    port.postMessage({method: 'close', args: '', to: 'page2'})
  })
}

function openSharedWorker() {
  if (!!window.SharedWorker) {
    return new SharedWorker('sharedWorker.js', {type: 'module', name: 'page1'}).port
  }
}
