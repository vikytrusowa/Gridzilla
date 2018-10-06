'use strict';
(function ($) {
    $(document).ready(function () {



        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            var active = '';
            if(active!== filterValue){
                $('.card').filter('.' + filterValue).slideDown();
                $('.card').filter(':not(.' + filterValue + ')').slideUp();
            }
            });

        $('.button').on('click', function () {
            $('.filter-button-group').find('.button').removeClass('button__activ');
            $(this).addClass('button__activ');
        });
        $('.buttons').on('click', function () {
            $('.js-group').find('.buttons').removeClass('buttons__activ');
            $(this).addClass('buttons__activ');
        });
        renderItems(1)

    });

    function renderItems (page) {
        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'blog.json', true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);


                var  number = 12;
                var startItem = page * number - number;
                var counter = 0;
                var songs = document.getElementById("posts");
                songs.innerHTML = '';
                while (counter < number && response[startItem]) {

                    counter++;

                    var string =
                        '    <div class="col-md-3 card ' + response[startItem].class.join(' ') + ' ' + '">\n' +
                        '<div class="mask">\n' +
                        '            <img src="' + response[startItem].image + ' '  + '">\n' +
                        '<div class="mask__activ" >\n'+
                        '<a class="mask__activ--link"><i class="glyphicon glyphicon-plus"></i></a>\n' +
                        '     <div class="mask__activ--container">\n'+
                        '<div class="info">\n' +
                        '     <i class="glyphicon glyphicon-eye-open"></i>\n' +
                        '<span>' + response[startItem].number + ' ' + '</span>\n' +
                        ' </div>\n' +
                        '<div class="info">\n' +
                        '     <i class="glyphicon glyphicon-time"></i>\n' +
                        '<span>' + response[startItem].date + ' ' + '</span>\n' +
                        ' </div>\n' +
                        '<div class="info">\n' +
                        '     <i class="glyphicon glyphicon-heart"></i>\n' +
                        '<span>' + response[startItem].likes + ' ' + '</span>\n' +
                        ' </div>\n' +
                        ' </div>\n' +
                        ' </div>\n' +
                        ' </div>\n' +

                        '                <div class="blog__container">\n' +
                        '                    <h3 class="blog__container--title">' + response[startItem].name + ' ' + '</h3>\n' +
                        '                    <span class="blog__container--data">' + response[startItem].data + ' '  + '</span>\n' +
                        '                    <p class="blog__container--info">' + response[startItem].text + ' '  + '</p>\n' +
                        '                    <a href="view_post.html?post_name=' + response[startItem].link + '" class="blog__container--link">>> More</a>\n' +
                        '                </div>';
                    songs.innerHTML =  songs.innerHTML + string;
                    startItem++;






                }
            }
        };
    }


$('.js-group').on('click','button', function () {
    var value = $(this).attr('data-id');
    renderItems(value)
})








})(jQuery);