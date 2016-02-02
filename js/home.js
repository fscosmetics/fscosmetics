var fs = fs || {};
fs.init = function() {
    fs.navbarScroll();
    fs.pageScroll();
    fs.initMenuOnHover();
    fs.initWhatsNewContentHover();
    fs.initMenuOnHover();
    fs.initProductImgSlider();
    fs.scrollDown();
};

fs.initProductImgSlider = function(){
    var owl = $('#productImgSlider').owlCarousel({
        lazyLoad:true,
        loop:true,
        autoplay: true,
        mouseDrag:false,
        items:1
    });
    owl.on('changed.owl.carousel',function(property){
        var current = property.item.index;
        var title = $(property.target).find(".owl-item").eq(current).find('li').data('name');
        var description = $(property.target).find(".owl-item").eq(current).find('li').data('description');
        var colors = $(property.target).find(".owl-item").eq(current).find('li').data('colors');

        var colorSwatches = $('<div/>').addClass("swatches");
        $.each(colors, function(){
            if(this.color_name != "N/A" && this.hex){
                var swatch = $('<div/>')
                    .addClass('swatch')
                    .attr("data-toggle", "tooltip")
                    .attr("data-placement", "top")
                    .attr("title", this.color_name)
                    .attr("style", "background-color: #" + this.hex.toString())
                    .tooltip();
                colorSwatches.append(swatch);
            }
        });

        var swatches = colorSwatches.find('.swatch');
        if(swatches.length > 0){
            $(".color-swatch").fadeOut(function() {
                $(this).html(colorSwatches).fadeIn();
            });
        }

        $(".best-seller-title").fadeOut(function() {
            $(this).text(title).fadeIn();
        });

        $(".best-seller-description").fadeOut(function() {
            $(this).text(description).fadeIn();
        });
    });
};


fs.navbarScroll = function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50 && $(document).width() >= 992) {
            $('nav').addClass('navbar-shrink');
        } else {
            $('nav').removeClass('navbar-shrink');
        }
    });
};

fs.pageScroll = function(){
    $('.page-scroll a').on('click', function(e){
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
    });
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

fs.scrollDown = function(){
    var target = $(".intro-arrow");

    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $(target).addClass("hidden");
        }
        if($(window).scrollTop() < 300){
            $(target).removeClass("hidden");
        }
    });

    target.find("a").click(function(e){
        e.preventDefault();
        var anchor = $(this).attr("href");
        scrollTo(anchor);
    });

    function scrollTo(x){
        $("html,body").animate({scrollTop: $(x).offset().top},'slow');
    }
};


$(function(){
    fs.init();
});


//$(document).ready(function(){
//    var getProductTitle = $('#best-seller-section .best-seller-container .left-container #productImgSlider .owl-stage-outer .owl-item.active .product-item').data("name");
//    var appendProductTitle = $('#best-seller-section .best-seller-container .right-corner .content-container .best-seller-title');
//    appendProductTitle.append(getProductTitle);
//});