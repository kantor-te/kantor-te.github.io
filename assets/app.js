"use strict";

$(window).scroll(e => {
    const { scrollY } = e.delegateTarget
    const isTop = $('.top-menu').hasClass('small-top-menu');

    if(scrollY < 158 && isTop) {
        $('.top-menu').removeClass('small-top-menu');
    }
    if(scrollY > 158 && !isTop) {
        $('.top-menu').addClass('small-top-menu');
    }
});

$('#mobile-contacts-btn').click(() => {
    $(".mobile-contacts-block").toggleClass('active');
    $('#mobile-contacts-btn i').toggleClass('active');
});

$('.top-menu .fa-bars').click(() => {
    $(".clouse-mobile-menu-icon").css('display', 'block');
    $('main').css('filter', 'grayscale(70%) blur(3px)');
    $('.mobile-menu').addClass('open');
});

$('.clouse-mobile-menu-icon').click(() => {
    $(".clouse-mobile-menu-icon").css('display', 'none');
    $('main').css('filter', 'none');
    $('.mobile-menu').removeClass('open');
});

$('.read-more-btn').click((e) => {
    const element = $(e.target).closest('.read-more-btn')[0];
    $(element).toggleClass('active');
});

$('.accordion div').hide().prev().click(function () {
    $('.accordion div').not(this).slideUp();
    $(this).next().not(':visible').slideDown();
});