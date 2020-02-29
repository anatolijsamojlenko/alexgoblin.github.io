$(function () {

    $('.header__slider').slick({
        dots: true,
        arrows: false,
        speed: 1000
    });

    var linkNav = document.querySelectorAll('[href^="#"]'), 
        V = .8;  
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { 
            e.preventDefault(); 
            var w = window.pageYOffset,  
                hash = this.href.replace(/[^#]*(.*)/, '$1'); 
            t = document.querySelector(hash).getBoundingClientRect().top,  
                start = null;
            requestAnimationFrame(step);  
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash 
                }
            }
        }, false);
    }

    const btn = document.getElementById("menu-toggle");
    const lines = btn.querySelectorAll(".line");
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;

    btn.addEventListener("click", () => {
        if (btn.classList.contains(cls.open)) {
            btn.classList.remove(btnClass);
            btnClass = cls.close;
        } else if (btn.classList.contains(cls.close)) {
            btn.classList.remove(btnClass);
            btnClass = cls.open;
        }

        void btn.offsetWidth;
        btn.classList.add(btnClass);
    });

    $('.btn-toggle').on('click', function () {
        $('.header__menu>nav').slideToggle();
    });

    new WOW().init();

    var mixer = mixitup('.works__inner-box');
});