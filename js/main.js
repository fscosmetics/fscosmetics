var fs = fs || {};
fs.fsMainFunction = function() {
    fs.stickyNavbar();
    fs.navbarScroll();
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

fs.scrollReveal = function(){
    window.sr = new scrollReveal();
}
fs.stickyNavbar = function(){
    $(".category-nav-container").sticky({topSpacing:76});
}

$(function(){
    fs.fsMainFunction();
});