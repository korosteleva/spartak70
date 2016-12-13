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
];
var lastScrollTop = 0;
var activeImageIndex = 0;
var deltaChangeImage = 20; // change image in every 16 pixels
window.addEventListener('scroll', function () {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (st % deltaChangeImage === 0) {
		if (st > lastScrollTop) {
			// scroll down
			if (activeImageIndex < galleryImages.length - 1) {
				activeImageIndex += 1;
			}
		} else {
			// scroll up
			if (activeImageIndex > 0) {
				activeImageIndex -= 1;
			}
		}
		gallery.style.backgroundImage = 'url(\'' + galleryImages[activeImageIndex] + '\')';
	}
	lastScrollTop = st;
});
