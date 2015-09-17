var fs = fs || {};
fs.fsMainFunction = function() {
    fs.stickyNavbar();
    fs.changeNavbarColor();
};

fs.changeNavbarColor = function(){
    var navbar = $('.navbar-default');
    if(navbar == $('#services-section').offset.top-100){
        navbar.addClass('test');
    }
}

fs.scrollReveal = function(){
    window.sr = new scrollReveal();
}
fs.stickyNavbar = function(){
    $(".category-nav-container").sticky({topSpacing:76});
}

$(function(){
    fs.fsMainFunction();
});