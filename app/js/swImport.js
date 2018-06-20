//clients: 标签页
let sw_utils = {
	postMsg: async function(msg){
		let allClients = await clients.matchAll();
		allClients.forEach(client => client.postMessage(msg))
	},
    getResponseNot200: function () {
        return new Response('{code: 200, data: []}', {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }
};

/**
 * CACHE_INIT: 初始化缓存
 * CACHE_CACHE_FIRST: 优先走缓存的缓存
 * CACHE_NET_FIRST: 优先走网络的缓存
 */
const CACHE_INIT = 'test_init';
const CACHE_CACHE_FIRST = 'test_cf';
const CACHE_NET_FIRST = 'test_nf';

const InitCacheFiles = [
    '/',
    '/index.html',
    '/dist/index.js',
    '/dist/index.css',
    '/app/img/favicon.ico'
];