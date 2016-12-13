var diagonal = document.querySelector('.diagonal');
console.log(diagonal);

function parallax(){
    var scrollTop = Number(window.pageYOffset) * .3;
    diagonal.style.top = 'calc(33% + ' + scrollTop + 'px)';
}

window.addEventListener('scroll', function(){
    parallax();
}, false);
