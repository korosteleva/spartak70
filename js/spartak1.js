if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	var gallery = document.querySelector('.gallery');
	var galleryImages = gallery.querySelectorAll('.gallery-element');

	var activeImageIndex = 0;

	window.addEventListener('scroll', throttle(function () {
		activeImageIndex++;
		if (!galleryImages[activeImageIndex]) {
			activeImageIndex = 0;
		}

		[].forEach.call(galleryImages, (function(element) {
			element.classList.remove('active');
		}).bind(this));

		galleryImages[activeImageIndex].classList.add('active');

	}, 600));

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