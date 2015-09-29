var fs = fs || {};
fs.init = function() {
    fs.pageScroll();
    fs.initMenuOnHover();
    //fs.initProductImageSlider();
    fs.initWhatsNewContentHover();
    fs.initMenuOnHover();

}

fs.pageScroll = function(){
    $('.page-scroll a').on('click', function(e){
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
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
    $('.zoom-images').on('mouseenter', function(){
        $(this).find('.content-description').css('opacity','1');
    });
    $('.zoom-images').on('mouseleave', function(){
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


//zoom-images
!function($){

    var defaults = {
        zoom: 1,
        initZoom: 1.15,
        animationTime: 2000,
        easing: "ease",
        onZoom: null,
        beforeZoom: null,
        afterZoom: null,
        offsetTop: 0,
        offsetBottom: 200,
    };


    $.fn.zoomScroller = function(options){
        return this.each(function(){
            var settings = $.extend({}, defaults, options),
                el = $(this),
                originY = 0,
                bg = el.find("> img");

            // Wrap all list items in a scroller to be used to scroll
            el.addClass("zs-wrapper").css("overflow", "hidden").prepend("<div class='zs-img'></div>");
            bg.remove();
            var img = el.find("> .zs-img");

            img.css({
                background: "url(" + bg.attr("src") + ") center center no-repeat",
                "background-size": "cover",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                position: "absolute",
                "-webkit-transform": "scale(" + settings.initZoom + ")",
                "-moz-transform": "scale(" + settings.initZoom + ")",
                "-o-transform": "scale(" + settings.initZoom + ")",
                "transform": "scale(" + settings.initZoom + ")",
                "transition": "transform " + settings.animationTime + "ms " + settings.easing,
                "-webkit-transition": "-webkit-transform " + settings.animationTime + "ms " + settings.easing,
                "-moz-transition": "-moz-transform " + settings.animationTime + "ms " + settings.easing,
                "-ms-transition": "-o-transform " + settings.animationTime + "ms " + settings.easing

            });

            // Swipe Support
            var debut,
                isTouching = false;
            $("body").on('touchstart', function() {
                if (event.touches.length == 1) {
                    debut = event.touches[0].pageY;
                    isTouching = true;
                }
            });

            $("body").on('touchend', function() {
                isTouching = false;
                debut = null;
            })

            // bind on scroll to create zoom effect on the background
            $(document).on('touchmove mousewheel DOMMouseScroll', function(e, delta) {
                originY = $(document).scrollTop();

                // Zoom startes/stops only when object is on screen
                if (el.is_on_screen($(document).scrollTop())) {
                    if (typeof settings.beforeZoom == 'function') settings.beforeZoom(img.parent(), "in");
                    img.css({
                        "-webkit-transform": "scale(" + settings.zoom + ")",
                        "-moz-transform": "scale(" + settings.zoom + ")",
                        "-o-transform": "scale(" + settings.zoom + ")",
                        "transform": "scale(" + settings.zoom + ")"
                    }).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                        if (typeof settings.afterZoom == 'function') settings.afterZoom(img.parent(), "in");
                    });
                    if (typeof settings.onZoom == 'function') settings.onZoom(img.parent(), "in");
                } else {
                    if (typeof settings.beforeZoom == 'function') settings.beforeZoom(img.parent(), "out");
                    img.css({
                        "-webkit-transform": "scale(" + settings.initZoom + ")",
                        "-moz-transform": "scale(" + settings.initZoom + ")",
                        "-o-transform": "scale(" + settings.initZoom + ")",
                        "transform": "scale(" + settings.initZoom + ")"
                    }).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                        if (typeof settings.afterZoom == 'function') settings.afterZoom(img.parent(), "in");
                    });
                    if (typeof settings.onZoom == 'function') settings.onZoom(img.parent(), "out");
                }

            });

            // Function Check if the when the element appears on the screen

            $.fn.is_on_screen = function(originY){
                var win = el;
                var viewport = {
                    top : originY
                };

                viewport.bottom = viewport.top + $(window).height() ;

                var bounds = this.offset();


                bounds.top = this.offset().top;
                bounds.bottom = this.offset().top + this.height();
                return (!(viewport.bottom - settings.offsetBottom < bounds.top || viewport.top - settings.offsetTop > bounds.bottom ));
            };


        });

    }


}(window.jQuery);


