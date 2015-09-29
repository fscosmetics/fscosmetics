var fs = fs || {};
fs.fsMainFunction = function() {
    fs.stickyNavbar();
    fs.iconAnimation();
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