"use strict";

// $(window).load(function(){
//     $('body').addClass('preloader-site');
// });

$(document).ready(function() {
    $('body').removeClass('preloader-site');
    $('.loader').hide();
    $('.top-menu').css('visibility', 'visible');
    initEventHandlers();
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
        $(this).find('.fa-chevron-down').toggleClass('active');
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
    });

    $('.car-item').click( function() {
        $(this).find('.modal').addClass('active');
    });

    $('.auctions-section .auctions-desc-btn').click(function() {
        $(this).parent().parent().find('.modal').addClass('active');
    });

    $('.close').click(function(event) {
        $(this).parent().parent().removeClass('active');

        event.stopPropagation()
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true
    });

    $('.modal-content .call-to-me-btn').click(function() {
        const modal = $(this).parents('.modal')[0];

        $(modal).removeClass('active');
        event.stopPropagation();
    });
}