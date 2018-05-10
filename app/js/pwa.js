var dfdPrompt = null;
var button = document.getElementById('btn-add');

window.addEventListener('beforeinstallprompt', function (e) {
	e.userChoice.then(choiceResult => {handleResult(choiceResult, e)});
	// 阻止默认事件
	// e.preventDefault();
	// return false;
});

button.addEventListener('click', function (e) {
	if (dfdPrompt == null) return;
	// 通过按钮点击事件触发横幅显示
	dfdPrompt.prompt();
	// 监控用户的安装行为
	dfdPrompt.userChoice.then(choiceResult => {handleResult(choiceResult)});
});

function handleResult(choiceResult, e){
	if (choiceResult.outcome === 'dismissed') {
		console.log('用户取消安装应用');
		// 存储事件
		if(!dfdPrompt && e) dfdPrompt = e;
		button.style.display = 'block';
	}
	else {
		console.log('用户安装了应用');
		dfdPrompt = null;
		button.style.display = 'none';
	}
}