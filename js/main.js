'use strick';

(function ($) {
    $(document).ready(function () {
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

        $.validator.setDefaults({
            errorPlacement: function(error, element) {
                error.appendTo('.js__form--eror');
            }
        });
        $('.form__button').click(function (e) {
            e.preventDefault();

            var form =$(this).closest('form');

            if($(form).valid()){
                var str = $(form).serialize();
                console.log(str);

            } else{
                $(form).validate();

            }

        })

    });


})(jQuery);