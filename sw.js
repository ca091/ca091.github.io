importScripts('./app/js/swImport.js');
if(Swi){
    Swi.l('from swImport.js')
}

/**
 * test-v1: 初始化缓存
 * test-v2: 优先走缓存的缓存
 * test-v3: 优先走网络的缓存
 */

const v = '0.2';
const initCacheFiles = [
    '/',
    '/index.html',
    '/dist/index.js',
    '/dist/index.css',
    '/app/img/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        async function(){
            let cache = await caches.open('test-v1');
            await cache.addAll(initCacheFiles);
            console.log("SW installed");
            return self.skipWaiting();//强制当前处在 waiting 状态的 Service Worker 进入 activate 状态
        }()
    );
});

self.addEventListener('activate', event => {
    console.log("SW activated");
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
                        if (cacheName !== 'test-v1') {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

self.addEventListener('fetch', event => {
    let {destination, url} = event.request;
    let request = event.request.clone();
    console.log(`Caught a fetch: ${url} - ${destination}`);
    event.respondWith(
        async function () {
            if(!destination){
                if(url.match(/\/(sockjs-node|__webpack_hmr)/g)){
                    return onlyNetwork(request)
                }else if(url.match(/\/(api_|get)/g)){
                    return networkFirst(request)
                }else{
                    return cacheFirst(request)
                }
            }else{
                return cacheFirst(request)
            }
        }()
    )
});

//监听推送
self.addEventListener('push', event => {
    console.log('get push');
	if (event.data) {
		let promiseChain = Promise.resolve(event.data.json())
		.then(data => self.registration.showNotification(data.title, {
			icon: '/app/img/favicon.ico',
			body: data.body,
			tag: data.tag
        }));
		event.waitUntil(promiseChain);
	}
});

self.addEventListener('notificationclick', function(event) {
	console.log('notificationclick')
});

self.addEventListener('notificationclose', function(event) {
    console.log('notificationclose')
});

async function onlyNetwork(request){
    console.log('onlyNetwork');
    let httpRes = await fetch(request);
    if(!httpRes || httpRes.status !==200){
        return getResponseNot200()
    }
    return httpRes;
}

async function networkFirst(request) {
    console.log('networkFirst');
    let httpRes = await fetch(request);
    if(!httpRes || httpRes.status !==200){
        let response = await caches.match(request);
        if(response) return response;
        return getResponseNot200()
    }
    //请求成功, 则缓存
    await cacheResponse('test-v3', request, httpRes.clone());
    return httpRes;
}

async function cacheFirst(request) {
    console.log('cacheFirst');
    let response = await caches.match(request);
    if(response) return response;
    console.log(`${request.url} no cache, fetch request!`);
    let httpRes = await fetch(request);
    if(!httpRes || httpRes.status !==200){
        return getResponseNot200()
    }
    //请求成功, 再次缓存
    await cacheResponse('test-v2', request, httpRes.clone());
    return httpRes;
}

async function cacheResponse(storeName, httpReq, httpRes){
    let cache = await caches.open(storeName);
    return cache.put(httpReq, httpRes);
}

function getResponseNot200(){
    return new Response('{code: 200, data: []}', {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}