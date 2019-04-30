document.body.onload = function () {
	setTimeout(function() {
		let preloader = document.querySelector('#preloader');
		if (!preloader.classList.contains('none') ){
			preloader.classList.add('none');
		}

	},1000);
}

