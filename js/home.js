var fs = fs || {};
fs.init = function() {
    fs.pageScroll();
    fs.initMenuOnHover();
    fs.initProductImageSlider();
    fs.initWhatsNewContentHover();

}

fs.pageScroll = function(){
    $('.page-scroll a').on('click', function(e){
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500, 'easeInOutExpo');
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


$(function(){
    fs.init();
});

