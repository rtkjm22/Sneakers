"use strict";

$(function(){
    $('.slick_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        slidesToShow: 4,
        swipe: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                },
            }
        ],
    });
});

//ハンバーガーメニューのエフェクト
const ham = document.querySelector('.ham');
const header_nav = document.querySelector('.header_nav');

ham.addEventListener('click', () => {
    if (!ham.classList.contains('active')) {
        ham.classList.add('active');
        header_nav.classList.add('active');
    } else {
        ham.classList.remove('active');
        header_nav.classList.remove('active');
    }
});