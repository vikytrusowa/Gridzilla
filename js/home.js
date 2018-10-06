'use strict';
(function ($) {

    $('.menu__link').on('click', function (e) {
        e.preventDefault();
        var valueLink = $(this).attr('href');
        $('#main').load(valueLink);
    });

$('.heading__button').on('click', function () {
   var search =  $('.heading__input').val();
   console.log(search);

});

    /*
    $('#about').on('click', function () {
            $('#homes').css('display', 'none');
        $('#blogs').css('display', 'none');
        $('#contacts').css('display', 'none');

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    document.getElementById("abouts").innerHTML = xhr.responseText;
                }
            };
            xhr.open('GET', 'about.html');

            xhr.send();

        });
        $('#blog').on('click', function () {
            $('#homes').css('display', 'none');
            $('#abouts').css('display', 'none');
            $('#contacts').css('display', 'none');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    document.getElementById("blogs").innerHTML = xhr.responseText;
                }
            };
            xhr.open('GET', 'blog.html');

            xhr.send();

        });
        $('#contact').on('click', function () {
            $('#homes').css('display', 'none');
            $('#blogs').css('display', 'none');
            $('#abouts').css('display', 'none');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    document.getElementById("contacts").innerHTML = xhr.responseText;
                }
            };
            xhr.open('GET', 'contact.html');

            xhr.send();

        });
        $('#home').on('click', function () {
            $('#contacts').css('display', 'none');
            $('#blogs').css('display', 'none');
            $('#abouts').css('display', 'none');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    document.getElementById("homes").innerHTML = xhr.responseText;
                }
            };
            xhr.open('GET', 'index.html');

            xhr.send();

        })

    */

})(jQuery);
