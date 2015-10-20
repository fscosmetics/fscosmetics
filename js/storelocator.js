var fs = fs || {};
fs.init = function() {
    fs.loadStoreLocatorMap();
    fs.mobileAddressScroller();
    fs.resetMap();
};

fs.loadStoreLocatorMap = function(){
    var isDraggable = $(document).width() > 480 ? true : false;
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#3f3f3f"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

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
            },
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "styles": styles
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