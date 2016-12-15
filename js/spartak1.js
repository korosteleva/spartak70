var gallery = document.querySelector('.gallery');
var galleryImages = [
	'./static/images/1/gallery/01.png',
	'./static/images/1/gallery/02.png',
	'./static/images/1/gallery/03.png',
	'./static/images/1/gallery/04.png',
	'./static/images/1/gallery/05.png',
	'./static/images/1/gallery/06.png',
	'./static/images/1/gallery/07.png',
	'./static/images/1/gallery/08.png',
	'./static/images/1/gallery/09.png',
	'./static/images/1/gallery/10.png',
	'./static/images/1/gallery/11.png',
	'./static/images/1/gallery/12.png',
	'./static/images/1/gallery/13.png',
	'./static/images/1/gallery/14.png',
	'./static/images/1/gallery/15.png',
	'./static/images/1/gallery/16.png',
];
var activeImageIndex = 0;

window.addEventListener('scroll', throttle(function() {
		activeImageIndex++;
		if (!galleryImages[activeImageIndex]) {
			activeImageIndex = 0;
		}
		gallery.style.backgroundImage = 'url(\'' + galleryImages[activeImageIndex] + '\')';
}, 1000));

function throttle(fn, wait) {
	var timeout, args, immediate, context;

	return function() {
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