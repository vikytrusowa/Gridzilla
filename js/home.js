'use strict';
(function ($) {

    $('.menu__link').on('click', function (e) {
        e.preventDefault();
        var valueLink = $(this).attr('href');
        $('#main').load(valueLink);
    });

    $('.heading__button').on('click', function () {
        var search = $('.heading__input').val();
        console.log(search);
        if (search.length < 3) {
            alert('Для поиска ви должны ввести три или более символов!');
        } else if (search.length >= 3) {

            var xhr = new XMLHttpRequest;

            xhr.open('GET', 'blog.json', true);

            xhr.send();

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    var respon = JSON.parse(this.responseText);
                    var str = null;
                    var result = document.getElementById("main");
                    result.innerHTML = '';

                    for (var i = 0; i < respon.length; i++) {
                        str = respon[i];
                        var name = str.name;
                        var info = name.toLowerCase().match(search.toLowerCase());
                        if (info) {
                            var string =
                                '<div class=" col-md-3">\n' +
                                '<img src="' + str.image + '" >\n' +
                                '<div class="blog__container">\n' +
                                '<h3 class="blog__container--title">' + str.name + '</h3>\n' +
                                '<span class="blog__container--data">' + str.data + ' </span>\n' +
                                '<p class="blog__container--info">' +  str.text + ' </p>\n' +
                              '<a href="#" onclick="moreInfo(0)" class="blog__container--link">' + str.link + '</a>\n' +
                                '</div>\n' +
                            '</div>';
                            result.innerHTML = result.innerHTML + string;
                        }
                    }


                }
            }



        }


    });
    $('.menu__link').on('click', function () {
        $('.menu').find('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });

    $(document).ready(function () {

        $('#main').load('home.html');
    });
    $('#portfolio').load('blog.html');
})(jQuery);
