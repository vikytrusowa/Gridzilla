'use strick';
(function ($) {
    var map = $('.map')[0];
    var uluru = {lat: 52.1315605, lng: -106.6284434};
    var uluruMarker = {lat: 52.1341258, lng: -106.6357552};
    var map1 = new google.maps.Map(map,
        {
            center: uluru,
            zoom: 14
        });
    var marker = new google.maps.Marker({
        position: uluruMarker,
        map: map1,
        title: '',

    });



})(jQuery);