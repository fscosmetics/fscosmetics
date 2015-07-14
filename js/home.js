var fs = fs || {};
fs.init = function() {
    fs.initQuotesRotator();
    fs.initChangeNavbar();
    fs.initMenuOnHover();
    fs.initProductOnHover();
    fs.initProductImageSlider();
}

fs.initProductImageSlider = function(){
    $('#product-img-slider').lightSlider({
        item:1,
        slideMargin:0,
        auto: true,
        loop:true,
        enableDrag:true,
    });
    //$('#product-img-slider').parent().on('mouseenter', function () {
    //    autoplaySlider.pause();
    //});
    //$('#autoplay').parent().on('mouseleave', function () {
    //    autoplaySlider.play();
    //});
};

fs.initMenuOnHover = function(){
    $('#navbar-menu-container li').on('mouseenter', function(){
        $(this).css({opacity:1});
    });
    $('#navbar-menu-container li').on('mouseleave', function(){
        $(this).css({opacity:1});
    });
};

fs.initQuotesRotator = function(){
    $( '#cbp-qtrotator' ).cbpQTRotator();
};

fs.initChangeNavbar = function(){
    $(window).scroll(function() {
        var $navbarMenuContainer = $('#navbar-menu-container');
        var $navbarMenu = $('#navbar-menu-container ul');
        var $brand = $('.brand-logo-container');
        var $brandImg = $('.brand-logo-container img');
        var treshold = ($('#home').outerHeight()-90);
        if($(window).scrollTop() > treshold){
            $navbarMenuContainer.addClass('navbar-inverse');
            $navbarMenu.addClass('slide-right extra');
            $brand.addClass('active');
            $navbarMenu.removeClass('slide-left');
            $brandImg.css('opacity','1');
        }
        else if($(window).scrollTop() < treshold){
            $navbarMenuContainer.removeClass('navbar-inverse');
            $navbarMenu.removeClass('slide-right');
            $brand.removeClass('active');
            $brandImg.css('opacity','0');
            if($('#navbar-menu-container ul').hasClass('extra')){
                $navbarMenu.addClass('slide-left');
            }
        }
    });
};
fs.initProductOnHover = function(){
    $('.product-category li').on('mouseenter', function(){
        $(this).find('a').css({opacity:1});
    });
    $('.product-category li').on('mouseleave', function(){
        $(this).find('a').css({opacity:0.4});
    });
};
$(function(){
    fs.init();
});

