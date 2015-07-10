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
        var $navbarMenu = $('#navbar-menu-container');
        var treshold = ($('#home').outerHeight()-190);
        if($(window).scrollTop() > treshold){
            $navbarMenu.css('position', 'fixed');
        }
        else if($(window).scrollTop() < treshold){
            $navbarMenu.css('position', 'absolute');
        }
    });

};
$(function(){
    fs.init();
});

