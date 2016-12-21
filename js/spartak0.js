if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var spartak = document.querySelector('.spartak-index-bottom');
    var spartakTop = document.querySelector('.spartak-index-top');
    var spartakPuck = document.querySelector('.spartak-index-puck');

    function parallax() {
        var scrollTop = Number(window.pageYOffset);
        spartak.style.transform = 'translateY(' + scrollTop * -.03 + 'px)';
        spartakTop.style.transform = 'translateY(' + scrollTop * -.07 + 'px)';
        spartakPuck.style.transform = 'translateY(' + scrollTop * -.12 + 'px)';
    }

    window.addEventListener('scroll', function () {
        parallax();
    }, false);
}