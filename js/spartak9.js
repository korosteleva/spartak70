var diagonal = document.querySelector('.diagonal-wrapper');

function parallax(){
    var scrollTop = Number(window.pageYOffset) * .3;
    diagonal.style.transform = 'translateY(' + scrollTop + 'px)';
}

window.addEventListener('scroll', function(){
    parallax();
}, false);
