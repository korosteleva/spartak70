if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var spartak = document.querySelector('.spartak');

    function parallax() {
        var scrollTop = Number(window.pageYOffset) * .3;
        spartak.style.transform = 'translateY(' + scrollTop + 'px)';
    }

    window.addEventListener('scroll', function () {
        parallax();
    }, false);
}