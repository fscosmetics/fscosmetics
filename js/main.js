var fs = fs || {};
fs.fsMainFunction = function() {
    fs.stickyNavbar();
    fs.navbarScroll();
    fs.iconAnimation();
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

fs.iconAnimation = function() {
    $('#icon-transition').click(function () {
        $(this).toggleClass('open');
    });
}

fs.stickyNavbar = function(){
    $(".category-nav-container").sticky({topSpacing:100});
}

$(function(){
    fs.fsMainFunction();
});