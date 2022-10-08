$(function () {
    $('.mobile-burger').click(function () {
        $('.mobile-menu, .overlay').fadeIn();
    });
    $('.close-btn, .overlay').click(function () {
        $('.mobile-menu, .overlay').fadeOut();
    });

    $('.menu-more.catalog').click(function () {
        $('.catalog-popup.range').fadeOut();
        $('.catalog-popup.catalog').fadeIn();
    });

    $('.menu-more.range').click(function () {
        $('.catalog-popup.catalog').fadeOut();
        $('.catalog-popup.range').fadeIn();
    });

    $('body').click(function (e) {
        const element = $(e.target);
        if (element.parents('.catalog-popup').length !== 0) {
            return;
        }
        if (element.is('.menu-more')) {
            return;
        }
        $('.catalog-popup').fadeOut();
    });

    $(window).resize(function () {
        if ($(document).width() > 992) {
            $('.filter-list').collapse('show');
        } else {
            $('.filter-list').collapse('hide');
        }
    });
    $(window).trigger('resize');


    var swiper = new Swiper(".swiperMini", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,

        breakpoints: {
            576: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }

    });
    var swiper2 = new Swiper(".swiperMax", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
