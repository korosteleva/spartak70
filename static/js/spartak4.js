var spartak = document.querySelector('.spartak');

function parallax(){
    var scrollTop = Number(window.pageYOffset) * .3 + 30;
    spartak.style.top = scrollTop + 'px';
}

window.addEventListener('scroll', function(){
    parallax();
}, false);
