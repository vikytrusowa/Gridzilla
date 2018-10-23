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
        $('#firstName').on('click', function () {
            $('#firstName').val('');
        });




        $('#lastName').on('click', function () {
            $('#lastName').val('');
        });

        $('#email').on('click', function () {
            $('#email').val('');
        });
        $('.form__element--message').on('click', function () {
            $('.form__element--message').val('');
        });
        $.validator.setDefaults({
            errorPlacement: function(error, element) {
                error.appendTo('.js__form--eror');
            }
        });
        $('.form__button').click(function (e) {
            e.preventDefault();

            var reg_exp =/^[А-Яа-яЁё]+$/i;
            if(!reg_exp.test($('#firstName').val())){
                alert("Разрешены только русские буквы");
            };
            if(!reg_exp.test($('#lastName').val())){
                alert("Разрешены только русские буквы");
            };
            var form =$(this).closest('form');

            if($(form).valid()){
                var str = $(form).serialize();
                console.log(str);

            } else{
                $(form).validate();
            }
            $('#firstName').val('');
            $('#lastName').val('');
            $('#email').val('');
            $('.form__element--message').val('');
        })


    });



})(jQuery);