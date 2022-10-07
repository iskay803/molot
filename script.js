$(function () {
    $('.mobile-burger').click(function () {
        $('.mobile-menu, .overlay').fadeIn();
    });
    $('.close-btn, .overlay').click(function () {
        $('.mobile-menu, .overlay').fadeOut();
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
