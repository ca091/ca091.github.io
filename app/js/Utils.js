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

export {urlBase64ToUnit8Array}