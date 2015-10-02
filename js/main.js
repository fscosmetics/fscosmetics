var fs = fs || {};
fs.fsMainFunction = function() {
    //fs.scrollRevealItems();
    //fs.jpushNavbar();
    fs.stickyNavbar();
    fs.iconAnimation();
};


fs.jpushNavbar = function(){
    $('.toggle-menu-push').jPushMenu({closeOnClickLink: false});
    $('.dropdown-toggle').dropdown();
}

fs.scrollRevealItems = function(){
    window.sr = new scrollReveal();
}

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