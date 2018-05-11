// 将base64的applicationServerKey转换成UInt8Array
function urlBase64ToUnit8Array(base64String) {
	var padding = '='.repeat((4 - base64String.length % 4) % 4);
	var base64 = (base64String + padding)
	.replace(/\-/g, '+')
	.replace(/_/g, '/');
	var rawData = window.atob(base64);
	var outputArray = new Uint8Array(rawData.length);
	for (var i = 0, max = rawData.length; i < max; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

function notification({title, useNative}) {
	if(useNative){
        var n = new Notification(title, {
            tag: 'normal',
            icon: '/app/img/favicon.ico',
            body: 'native!'
        });
        n.addEventListener('click', function(e){
            console.log(e)
        });
        setTimeout(n.close.bind(n), 3000);
	}else{
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, {
                icon: '/app/img/favicon.ico',
                body: 'can u see?'
            });
        });
	}
}

export {urlBase64ToUnit8Array, notification}