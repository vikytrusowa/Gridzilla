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
        })

    });



    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'blog.json', true);

    xhr.send();

xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        var response = JSON.parse(this.responseText);



        for (var i = 0; i < response.length; i++) {


            var songs = document.getElementById("posts");


                var string =
                    '    <div class="col-md-3 card ' + response[i].class + ' ' + '">\n' +
                    '<div class="mask">\n' +
                    '            <img src="' + response[i].image + ' '  + '">\n' +
                    '<div class="mask__activ" >\n'+
                    '<a class="mask__activ--link"><i class="glyphicon glyphicon-plus"></i></a>\n' +
                    '     <div class="mask__activ--container">\n'+
                    '<div class="info">\n' +
                    '     <i class="glyphicon glyphicon-eye-open"></i>\n' +
                    '<span>' + response[i].number + ' ' + '</span>\n' +
                    ' </div>\n' +
                    '<div class="info">\n' +
                    '     <i class="glyphicon glyphicon-time"></i>\n' +
                    '<span>' + response[i].datas + ' ' + '</span>\n' +
                    ' </div>\n' +
                    '<div class="info">\n' +
                    '     <i class="glyphicon glyphicon-heart"></i>\n' +
                    '<span>' + response[i].likes + ' ' + '</span>\n' +
                    ' </div>\n' +
                    ' </div>\n' +
                    ' </div>\n' +
                    ' </div>\n' +

                    '                <div class="blog__container">\n' +
                    '                    <h3 class="blog__container--title">' + response[i].name + ' ' + '</h3>\n' +
                    '                    <span class="blog__container--data">' + response[i].data + ' '  + '</span>\n' +
                    '                    <p class="blog__container--info">' + response[i].text + ' '  + '</p>\n' +
                    '                    <a href="#" class="blog__container--link">' + response[i].link + ' '  + '</a>\n' +
                    '                </div>';
                songs.innerHTML =  songs.innerHTML + string;

        }
    }
};









})(jQuery);