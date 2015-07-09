var fs = fs || {};
fs.init = function() {
    fs.initQuotesRotator();
    //fs.initChangeNavbar();
    fs.initMenuOnHover();
}
fs.initMenuOnHover = function(){
    $('#navbar-menu-container li').on('mouseenter', function(){
        $(this).css({opacity:1});
        $(this).find('a').css({opacity:1});
    });
    $('#navbar-menu-container li').on('mouseleave', function(){
        $(this).css({opacity:1});
        $(this).find('a').css({opacity:0.4});
    });
};

fs.initQuotesRotator = function(){
    $( '#cbp-qtrotator' ).cbpQTRotator();
};

fs.initChangeNavbar = function(){
    $(window).scroll(function() {


    });
};

//$(document).ready(function(){
//    $(window).scroll(function(){
//        var $brand = $('.navbar-brand');
//        var $logo = $brand.find('.nav-logo');
//        var treshold = ($('#cover').outerHeight()-34);
//        if(window.innerWidth >= 768){
//            if ($(window).scrollTop() > treshold ) {
//                if (!$brand.hasClass('nav-scrolled')){
//
//                    $brand.addClass('nav-scrolled');
//                    $logo.attr('src', '/img/crux-logo-inverse.png');
//                    $('.navbar').addClass('navbar-crux-default');
//                }
//            }
//            else if ($(window).scrollTop() < treshold) {
//                $logo.attr('src', '/img/crux-brand-inverse.png');
//                $brand.removeClass('nav-scrolled');
//                $('.navbar').removeClass('navbar-crux-default');
//            }
//        }
//    });
//});
$(function(){
    fs.init();
});

