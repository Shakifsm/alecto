$(document).ready(function(){
    $("#carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
    $("#carouselo").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
    new WOW().init();
})