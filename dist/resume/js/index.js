var $ = document.querySelector.bind(document);
var dom_left = $('.left');
var dom_arrow_up = $('.arrow-up');
var dom_right = $('.right');
var dom_show_left = $('.show-left');
var dom_left_height = dom_left.clientHeight;
var dom_right_height = dom_right.clientHeight;
var window_height = window.innerHeight;

function initLeftHight() {
	if(getComputedStyle(dom_left).position === 'absolute'){
		dom_left.style.height = dom_left_height + 'px';
	}else{
		if(dom_right_height>window_height){
			dom_left.style.height = dom_right_height + 'px';
		}else{
			dom_left.style.minHeight = window_height + 'px';
		}
	}
}

initLeftHight();

//回到顶部
dom_arrow_up.addEventListener('click', function () {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
});
//mob顶部动画
dom_show_left.addEventListener('click', function () {
	dom_left.style.transform = 'translateY(0)'
});
var pullStartPoint = {};
var pullEndPoint = {};
dom_right.addEventListener('touchstart', function (e) {
	pullStartPoint.x = e.touches[0].clientX;
	pullStartPoint.y = e.touches[0].clientY;
	pullStartPoint.t = e.timeStamp;
	pullStartPoint.l = document.documentElement.scrollTop || document.body.scrollTop;
});
dom_right.addEventListener('touchmove', function (e) {
	pullEndPoint.x = e.touches[0].clientX;
	pullEndPoint.y = e.touches[0].clientY;
});
dom_right.addEventListener('touchend', function () {
	if(pullStartPoint.l === 0 && pullEndPoint.y !== undefined && (pullStartPoint.y - pullEndPoint.y < 0)){
		dom_left.style.transform = 'translateY(0)'
	}
	pullEndPoint = {}
});

var startPoint = {};
var endPoint = {};
dom_left.addEventListener('touchstart', function (e) {
	startPoint.x = e.touches[0].clientX;
	startPoint.y = e.touches[0].clientY;
	startPoint.t = e.timeStamp;
});
dom_left.addEventListener('touchmove', function (e) {
	endPoint.x = e.touches[0].clientX;
	endPoint.y = e.touches[0].clientY;
});
dom_left.addEventListener('touchend', function (e) {
	if(startPoint.y - endPoint.y > 0){
		dom_left.style.transform = 'translateY(-100%)'
	}else if(endPoint.y === undefined && (e.timeStamp - startPoint.t < 300)){
		dom_left.style.transform = 'translateY(-100%)'
	}
	endPoint = {}
});


window.addEventListener('resize', function () {
	setTimeout(initLeftHight, 100);
});
window.addEventListener('scroll', function () {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t>200){
		dom_arrow_up.style.display = 'block';
	}else{
		dom_arrow_up.style.display = 'none';
	}
});