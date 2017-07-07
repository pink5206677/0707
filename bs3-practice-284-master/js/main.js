$(function () {

    new WOW().init();


    // 設定點擊連結後的動畫
    $('nav a, #goBack').bind('click', function (event) {
        var anchor = $(this);
        var navHeight = 50;
        var animateTime = 1000;
        var target = anchor.attr('href');
        var timingFunction = 'easeInOutCubic';

        // console.log(target);
        $('html,body').stop().animate({
            scrollTop: ($(target).offset().top - navHeight)
        }, animateTime, timingFunction);

        event.preventDefault();
    });
    // 設定點擊連結後的動畫 設定結束

    // note google map api設定
    function initMap() {
        var myLocation = {
            lat: 51.5287336,
            lng: -0.3824955
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            zoom: 11,
            scrollwheel: false,
            draggable: false,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
            },
                        {
                            "color": "#333333"
            },
                        {
                            "lightness": 40
            }
        ]
    },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "lightness": 16
            }
        ]
    },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
            },
                        {
                            "lightness": 20
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
            },
                        {
                            "lightness": 17
            },
                        {
                            "weight": 1.2
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
            },
                        {
                            "lightness": 20
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
            },
                        {
                            "lightness": 21
            }
        ]
    },
                {
                    "featureType": "poi.attraction",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi.attraction",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
            },
                        {
                            "lightness": 21
            }
        ]
    },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#e9f4e8"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            },
                        {
                            "lightness": 17
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
            },
                        {
                            "lightness": 29
            },
                        {
                            "weight": 0.2
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
            },
                        {
                            "lightness": 18
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
            },
                        {
                            "lightness": 16
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
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
            },
                        {
                            "lightness": 19
            }
        ]
    },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
            },
                        {
                            "lightness": 17
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#e0f2ff"
            }
        ]
    }
]
        });

        var marker = new google.maps.Marker({
            position: myLocation,
            map: map
        });


    }


    google.maps.event.addDomListener(window, 'load', initMap);


});
