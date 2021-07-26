function openSharedWorker() {
  if (!!window.SharedWorker) {
    return new SharedWorker('sharedWorker.js', {type: 'module', name: 'page1'}).port
  }
}

function createLog(msg) {
  let fragment = document.createDocumentFragment()
  let text = document.createTextNode(msg)
  fragment.appendChild(text)
}
