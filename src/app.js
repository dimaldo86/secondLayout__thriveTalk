// burger menu
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__btn')
const body = document.querySelector('body');

burger.addEventListener('click',  () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    body.classList.toggle('lock');
});

  // scroll header
window.addEventListener('scroll', () =>  {
    const header = document.querySelector('.header'),
          windowScroll = window.pageYOffset;

    
    if (windowScroll > 80) {
        header.classList.add('header__fixed');
    }  else {
        header.classList.remove('header__fixed');
    }   
}) ;  

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());