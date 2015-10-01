var fs = fs || {};
fs.init = function() {
    fs.loadStoreLocatorMap();
    fs.mobileAddressScroller();
    fs.resetMap();
};

fs.loadStoreLocatorMap = function(){
    var isDraggable = $(document).width() > 480 ? true : false;
    $('#map-container').storeLocator({
        'fullMapStart': true,
        'storeLimit': 100,
        'dataType': 'json',
        'dataLocation': '/feeds/locations.json',
        'mapSettings' : {
            draggable: isDraggable,
            zoom : 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDoubleClickZoom: true,
            scrollwheel: false,
            navigationControl: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        }
    });
};

fs.resetMap = function(){
    $("#reset-map").click(function(){
        $("#bh-sl-address").val("");
    });
};

fs.mobileAddressScroller = function(){
    if ($('#auto-scroll-mobile').is(':hidden')) {
        $(".bh-sl-loc-list").on('click', 'ul', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $("#bh-sl-map").offset().top - 98
            },'slow');
        });
    }
};

$(function(){
    fs.init();
});