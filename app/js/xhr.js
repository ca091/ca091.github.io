export function pulldata(url, params) {
  let p = formatParams(params || {})
  let client = new XMLHttpRequest()
  client.open('GET', url + '?' + p)
  client.onreadystatechange = handler
  client.responseType = 'json'
  client.setRequestHeader('Accept', 'application/json')
// client.setRequestHeader('Content-type', 'multipart/form-data');
// client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// client.send(p) if method is POST
  client.send(null)
}

export function pulldataPost(url, data) {
  let client = new XMLHttpRequest()
  client.open('POST', url, true)
  client.onreadystatechange = handler
  // client.responseType = 'json';
  // client.setRequestHeader('Accept', 'application/json');
  // client.setRequestHeader('Content-type', 'multipart/form-data');
  client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  client.send(data)
}

export function api_request(url, method, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      return response.text()
    }
  })
}


function handler() {
  if (this.readyState !== 4) {
    return
  }
  if (this.status === 200) {
    console.log(this.response)
  } else {
    console.log(this.statusText)
  }
}

//格式化参数
function formatParams(data) {
  let arr = []
  for (let name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  arr.push(('v=' + Math.random()).replace('.', ''))
  return arr.join('&')
}
