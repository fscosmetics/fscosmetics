var fs = fs || {};
fs.init = function() {
    fs.initQuotesRotator();
    fs.initChangeNavbar();
    fs.initMenuOnHover();
    fs.initProductOnHover();
    fs.initProductImageSlider();
    fs.initWhatsNewContentHover();
    fs.initNavbarScroll();
}

fs.initNavbarScroll = function(){
    $('#navbar-menu-container li a').on('click', function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        var top = target.offset().top;
        $('html, body').animate({scrollTop: top - 80 }, 'easeInOutExpo', function(){
            var adjustedTop = target.offset().top;
            $('html, body').animate({scrollTop: adjustedTop - 80});
        });
    });
};

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
fs.initWhatsNewContentHover = function(){
    $('.content-container').on('mouseenter', function(){
        $(this).find('.content-description').css('opacity','1');
    });
    $('.content-container').on('mouseleave', function(){
        $(this).find('.content-description').css('opacity','0');
    });
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
        var navLeft = $navbarMenu.position().left;
        var navRight = $navbarMenu.position().right;
        if($(window).scrollTop() > treshold){
            $navbarMenuContainer.addClass('navbar-inverse');
            $navbarMenu.addClass('extra');
            $brand.addClass('active');
            $navbarMenu.removeClass('slide-left');
            $brandImg.css('opacity','1');
            $navbarMenu.animate({
                right: 0,
                easing: 'easein'
            });
        }
        else if($(window).scrollTop() < treshold){
            $navbarMenuContainer.removeClass('navbar-inverse');
            $navbarMenu.removeClass('slide-right');
            $brand.removeClass('active');
            $brandImg.css('opacity','0');
            if($('#navbar-menu-container ul').hasClass('extra')){
                //$navbarMenu.removeClass('slide-left');
                $navbarMenu.animate({
                    right: auto,
                    easing: 'easein',

                });
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

