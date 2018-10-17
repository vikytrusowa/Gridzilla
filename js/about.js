'use strict';
(function ($) {
    $(document).ready(function () {

        $('.form__button').on('click', function () {
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


        $.validator.setDefaults({
            errorPlacement: function (error, element) {
                error.appendTo('.js__form--eror');
            }
        });
        $('.form__button').click(function (e) {
            e.preventDefault();

            var form = $(this).closest('form');

            if ($(form).valid()) {
                var str = $(form).serialize();


            } else {
                $(form).validate();

            }

        })

    });


})(jQuery);