if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	var gallery = document.querySelector('.gallery');
	var galleryImages = [
		'./static/images/1/gallery/01.jpg',
		'./static/images/1/gallery/02.jpg',
		'./static/images/1/gallery/03.jpg',
		'./static/images/1/gallery/04.jpg',
		'./static/images/1/gallery/05.jpg',
		'./static/images/1/gallery/06.jpg',
		'./static/images/1/gallery/07.jpg',
		'./static/images/1/gallery/08.jpg',
	];
	var activeImageIndex = 0;

	window.addEventListener('scroll', throttle(function () {
		activeImageIndex++;
		if (!galleryImages[activeImageIndex]) {
			activeImageIndex = 0;
		}
		gallery.style.backgroundImage = 'url(\'' + galleryImages[activeImageIndex] + '\')';
	}, 1000));

	function throttle(fn, wait) {
		var timeout, args, immediate, context;

		return function () {
			args = arguments;
			immediate = true;
			context = this;

			if (!timeout) {
				(function callback() {
					if (immediate) {
						fn.apply(context, args);

						immediate = false;
						timeout = setTimeout(callback, wait);
					} else {
						timeout = null;
					}
				})();
			}
		};
	}
}