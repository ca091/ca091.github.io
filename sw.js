importScripts('./app/js/swImport.js');
if(Swi){
    Swi.l('from swImport.js')
}

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('test-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/dist/index.js',
                '/dist/index.css',
                '/app/img/favicon.ico'
            ])
        }).then(function () {
            console.log("SW installed");
            return self.skipWaiting();//强制当前处在 waiting 状态的 Service Worker 进入 activate 状态
        })
    );
});

self.addEventListener('activate', function(event) {
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

self.addEventListener('fetch', function(event) {
    let {destination, url} = event.request;
    let request = event.request.clone();
    console.log(`Caught a fetch: ${url} - ${destination}`);
    event.respondWith(
        async function () {
            if(!destination && url.match(/\/(api_|sockjs-node|__webpack_hmr)/g)){
                return networkFirst(request);
            }else{
                return cacheFirst(request)
            }
        }()
    )
});

//监听推送
self.addEventListener('push', function (event) {
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

async function networkFirst(request) {
    console.log('networkFirst');
    let httpRes = await fetch(request);
    if(!httpRes || httpRes.status !==200){
        return new Response('{code: 200, data: []}', {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }
    return httpRes;
}

async function cacheFirst(request) {
    console.log('cacheFirst');
    let response = await caches.match(request);
    if(response) return response;
    console.log(`${request.url} no cache, fetch request!`);
    //请求真实服远程服务
    let httpRes = await fetch(request);
    if(!httpRes || httpRes.status !==200){
        return new Response('404!!', {
            headers: {
                'content-type': 'text/plain; charset=utf-8'
            }
        })
    }
    //请求成功, 再次缓存
    let cache = await caches.open('test-v1');
    await cache.put(request, httpRes.clone());
    return httpRes;
}