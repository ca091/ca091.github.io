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
    console.log('Caught a fetch!', event.request.url);
    event.respondWith(
        async function () {
            let {destination, url} = event.request;
            if(!destination && url.match(/\/(reportlog|sockjs-node|api_)/g)){
                console.log('request api');
                //api networkFirst
                var request = event.request.clone();
                return fetch(request).then(function (httpRes) {
                    if(!httpRes || httpRes.status !==200){
                        return new Response('{code: 200, data: []}', {
                            headers: {
                                'Accept': '*/*',
                                'Content-Type': 'application/json; charset=utf-8'
                            }
                        })
                    }
                    return httpRes;
                })
            }else{
                return caches.match(event.request).then(response => {
                    // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
                    if(response) return response;
                    console.log(event.request.url, 'no cache, fetch request!')
                    //请求真实服远程服务
                    var request = event.request.clone();
                    return fetch(request).then(function (httpRes) {
                        //请求失败
                        if(!httpRes || httpRes.status !==200){
                            return new Response('404!!', {
                                headers: {
                                    'content-type': 'text/plain; charset=utf-8'
                                }
                            })
                        };
                        //请求成功, 再次缓存
                        var responseClone = httpRes.clone();
                        caches.open('test-v1').then(cache => {
                            return cache.put(event.request, responseClone)
                        });
                        return httpRes;
                    })
                })
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