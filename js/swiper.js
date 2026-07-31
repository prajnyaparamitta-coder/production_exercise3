const heroSwiper = new Swiper(".hero-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 1500,
});
