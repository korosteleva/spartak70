var highlights = document.querySelectorAll('.highlight');
var animateClass = 'animate';
var noAnimateClass = 'no-animate';
window.addEventListener('scroll', function () {
    [].forEach.call(highlights, (function(element) {
        if (isScrolledIntoView(element) && !element.classList.contains(animateClass) && !element.classList.contains(noAnimateClass)) {
            element.classList.add(animateClass);
        }
    }).bind(this));
});

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}
