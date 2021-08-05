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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

//ハンバーガーメニューのエフェクト
const ham = document.querySelector('.ham');
const header_nav = document.querySelector('.header_nav');
const overlay = document.querySelector('.overlay');
const inside_link = document.querySelectorAll('.inside_link');

ham.addEventListener('click', () => {
    if (!ham.classList.contains('active')) {
        ham.classList.add('active');
        header_nav.classList.add('active');
        overlay.classList.add('active');
    } else {
        ham.classList.remove('active');
        header_nav.classList.remove('active');
        overlay.classList.remove('active');
    }

    for (let i=0;i<inside_link.length;i++) {
        inside_link[i].addEventListener('click', () => {
            ham.classList.remove('active');
            header_nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});

overlay.addEventListener('click', () => {
    if (ham.classList.contains('active')) {
        ham.classList.remove('active');
        header_nav.classList.remove('active');
        overlay.classList.remove('active');
    }
});

//feature 画像のエフェクト追加

const f_item = document.querySelectorAll('.f_item');
const f_item_img = document.querySelectorAll('.f_item img');
// console.log(f_item_img[5]);

window.addEventListener('scroll', () => {   
    for (let i=0;i<f_item.length;i++) {
        const rect = f_item_img[i].getBoundingClientRect().top;
        const gap  = f_item_img[i].clientHeight * .3;

        if (window.innerHeight > rect + gap) {
            f_item_img[i].classList.add('active');
        }
    }
});