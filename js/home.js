var fs = fs || {};
fs.init = function() {
    fs.initQuotesRotator();
}

fs.initQuotesRotator = function(){
    $( '#cbp-qtrotator' ).cbpQTRotator();
};

$(function(){
    fs.init();
});

