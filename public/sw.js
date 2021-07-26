importScripts('/swImport.js')

const V = '0.2'

self.addEventListener('install', event => {
  event.waitUntil(
      async function () {
        let cache = await caches.open(CACHE_INIT)
        await cache.addAll(InitCacheFiles)
        console.log('SW installed')
        return self.skipWaiting() //强制当前处在 waiting 状态的 Service Worker 进入 activate 状态
      }(),
  )
})

self.addEventListener('activate', event => {
  console.log('SW activated')
  event.waitUntil(
      Promise.all([
        // 更新客户端
        self.clients.claim(),
        // 清理旧版本
        caches.keys().then(function (cacheList) {
          // console.log('caches', caches)
          // console.log('cacheList', cacheList)
          return Promise.all(
              cacheList.map(function (cacheName) {
                if (cacheName !== CACHE_INIT) {
                  return caches.delete(cacheName)
                }
              }),
          )
        }),
      ]),
  )
})

self.addEventListener('fetch', event => {
  let {destination, url, method} = event.request
  let request = event.request.clone()
  sw_utils.postMsg(`Caught a fetch: ${url} - ${destination}`)
  event.respondWith(
      function () {
        if (!destination) {
          if (method !== 'GET' || url.match(/\/(sockjs-node|__webpack_hmr)/g)) {
            return onlyNetwork(request)
          } else if (url.match(/\/(api_|get)/g)) {
            return networkFirst(request)
          } else {
            return cacheFirst(request)
          }
        } else {
          return cacheFirst(request)
        }
      }(),
  )
})

//监听推送
self.addEventListener('push', event => {
  console.log('get push')
  if (event.data) {
    let promiseChain = Promise.resolve(event.data.json()).then(data => self.registration.showNotification(data.title, {
      icon: '/app/img/favicon.ico',
      body: data.body,
      tag: data.tag,
    }))
    event.waitUntil(promiseChain)
  }
})

//监听页面消息
self.addEventListener('message', event => {
  let msg = event.data
  console.log(`msg received from dom : ${msg}`)
})

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.')
  let notification = event.notification
  notification.close()
  event.waitUntil(
      clients.openWindow(notification.data.url),
  )
})

self.addEventListener('notificationclose', event => {
  console.log('notificationclose')
})

async function onlyNetwork(request) {
  console.log('onlyNetwork', request.url)
  let httpRes = await fetch(request)
  if (!httpRes || httpRes.status !== 200) {
    return sw_utils.getResponseNot200()
  }
  return httpRes
}

async function networkFirst(request) {
  console.log('networkFirst', request.url)
  let httpRes = await fetch(request)
  if (!httpRes || httpRes.status !== 200) {
    let response = await caches.match(request)
    if (response) return response
    return sw_utils.getResponseNot200()
  }
  //请求成功, 则缓存
  await cacheResponse(CACHE_NET_FIRST, request, httpRes.clone())
  return httpRes
}

async function cacheFirst(request) {
  console.log('cacheFirst', request.url)
  let response = await caches.match(request)
  if (response) return response
  console.log(`${request.url} no cache, fetch request!`)
  let httpRes = await fetch(request)
  if (!httpRes || httpRes.status !== 200) {
    // return sw_utils.getResponseNot200()
    // v0.2 请求失败 则直接返回结果
    return httpRes
  }
  //请求成功, 再次缓存
  await cacheResponse(CACHE_CACHE_FIRST, request, httpRes.clone())
  return httpRes
}

async function cacheResponse(storeName, httpReq, httpRes) {
  let cache = await caches.open(storeName)
  return cache.put(httpReq, httpRes)
}
