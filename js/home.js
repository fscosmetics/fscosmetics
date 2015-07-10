var fs = fs || {};
fs.init = function() {
    fs.initQuotesRotator();
    fs.initChangeNavbar();
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
        var $navbarMenuContainer = $('#navbar-menu-container');
        var $navbarMenu = $('#navbar-menu-container ul');
        var $brand = $('.brand-logo');
        var treshold = ($('#home').outerHeight()-90);
        if($(window).scrollTop() > treshold){
            $navbarMenuContainer.addClass('navbar-inverse');
            $navbarMenu.addClass('slide-right extra');
            $brand.addClass('active');
            //$brand.addClass('fadeInImage');
            $navbarMenu.removeClass('slide-left extra');
            //$brand.removeClass('fadeOutImage');

        }
        else if($(window).scrollTop() < treshold){
            $navbarMenuContainer.removeClass('navbar-inverse');
            $navbarMenu.removeClass('slide-right');
            $brand.removeClass('active');
            if($('#navbar-menu-container ul').hasClass('extra')){
                $navbarMenu.addClass('slide-left');
            }
            //if($('.brand-logo').hasClass('extra')){
            //    $brand.addClass('fadeOutImage');
            //}
        }
    });

};
$(function(){
    fs.init();
});

