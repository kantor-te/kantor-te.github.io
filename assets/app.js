"use strict";

$(document).ready(function() {
    $('body').removeClass('preloader-site');
    $('.loader').hide();
    $('.top-menu').css('visibility', 'visible');
    initEventHandlers();
});

$(window).load(function(){
    $('body').addClass('preloader-site');
});

function initEventHandlers() {
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

    $('#call-form input').change((event) => (event.target.value !== '') ?
        ($(event.target).next().css('display', 'none')) :
        ($(event.target).next().css('display', 'block'))
    );

    $('a[href^="#"]').click((event) => {
        event.preventDefault();;
        
        const id  = $(event.target).attr('href');
        const top = $(id).offset().top;
        
        
        $('body,html').animate({scrollTop: top}, 1500);
    })
}