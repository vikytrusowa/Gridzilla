'use strict';
(function ($) {
    $(document).ready(function () {
        $('.form__name').on('click', function () {
            $('.form__name').val('');
        });
        $('.form__comment').on('click', function () {
            $('.form__comment').val('');
        });
        $.validator.setDefaults({
            errorPlacement: function (error, element) {
                error.appendTo('.js__form--eror');
            }
        });
        $('.form__button').on('click', function (e) {

            e.preventDefault();

            $('.form__comment').val('');
            $('.form__name').val('');
            var form = $(this).closest('form');

            if ($(form).valid()) {
                var str = $(form).serialize();


            } else {
                $(form).validate();


            };

            var input = $('.form__name');
            var name = input.val();
            var text = $('.form__comment');
            var comment = text.val();
            var liText = '<span>' + name + '</span> \n'
                + '<span>' + comment + '</span>';

            var li = document.createElement('li');
            li.innerHTML = liText;

            var ul = $('.comment__list');
            ul.append(li);

        });


    });


})(jQuery);