var highlights = document.querySelectorAll('.highlight');
var animateClass = 'animate';
var noAnimateClass = 'no-animate';
window.addEventListener('scroll', throttle(function () {
    [].forEach.call(highlights, (function(element) {
        if (isScrolledIntoView(element) && !element.classList.contains(animateClass) && !element.classList.contains(noAnimateClass)) {
            element.classList.add(animateClass);
        }
    }).bind(this));
}, 100));

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

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