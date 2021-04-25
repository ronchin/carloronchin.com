/*--------------------------
 	Init Parallax.js
-----------------------------*/
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    hoverOnly: true
});

/*--------------------------
Init Swiper.js
-----------------------------*/
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
    // when window width is >= 320px
        350: {
        slidesPerView: 1,
        spaceBetween: 80
        },

    // when window width is >= 640px
        1000: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    },  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
});