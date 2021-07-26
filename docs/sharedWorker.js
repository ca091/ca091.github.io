let cachePorts = {}
let account = 0

onconnect = function(e) {
  let port = e.ports[0];
  let name = this.name
  ++ account

  if (cachePorts[name] === undefined) {
    cachePorts[name] = port
  }

  port.onmessage = function(e) {
    if (Array.isArray(e.data)) {
      let workerResult = 'Result: ' + (e.data[0] * e.data[1])
      port.postMessage(workerResult)
    } else {
      let {method, args, to} = e.data
      let portTo = cachePorts[to]
      if (portTo) {
        portTo.postMessage({
          method,
          args
        })
      }
    }
  }

}
