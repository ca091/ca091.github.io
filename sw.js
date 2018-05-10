self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('test-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/dist/index.js',
                '/dist/styles.css',
                '/app/img/favicon.ico'
            ])
        }).then(function () {
            self.skipWaiting();//强制当前处在 waiting 状态的 Service Worker 进入 activate 状态
            console.log("SW installed");
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
        caches.match(event.request).then(function (response) {
            // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
            if(response) return response;
            console.log(event.request.url, 'no cache, fetch request!')
            //请求真实服远程服务
            var request = event.request.clone();
            return fetch(request).then(function (httpRes) {
                //请求失败
                if(!httpRes || httpRes.status !==200) return response;
                //请求成功, 再次缓存
                var responseClone = httpRes.clone();
                caches.open('test-v1').then(function (cache) {
                    cache.put(event.request, responseClone)
                });
                return httpRes;
            })
        })
    )
});
