function isScrolledIntoView(t){var n=t.getBoundingClientRect().top,i=t.getBoundingClientRect().bottom;return n>=0&&i<=window.innerHeight}function throttle(t,n){var i,e,a,s;return function(){e=arguments,a=!0,s=this,i||!function o(){a?(t.apply(s,e),a=!1,i=setTimeout(o,n)):i=null}()}}var highlights=document.querySelectorAll(".highlight"),animateClass="animate",noAnimateClass="no-animate";window.addEventListener("scroll",throttle(function(){[].forEach.call(highlights,function(t){!isScrolledIntoView(t)||t.classList.contains(animateClass)||t.classList.contains(noAnimateClass)||t.classList.add(animateClass)}.bind(this))},100));