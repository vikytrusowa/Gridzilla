'use strict';
(function ($) {



        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            var active = '';
            if (active !== filterValue) {
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
    $(document).ready(function () {
        renderItems(1)

    });

    function renderItems(page) {
        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'blog.json', true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);


                var number = 12;
                var startItem = page * number - number;
                var counter = 0;
                var songs = document.getElementById("posts");
                songs.innerHTML = '';
                while (counter < number && response[startItem]) {

                    counter++;

                    var string =
                        '    <div class="col-md-3 card ' + response[startItem].class.join(' ') + ' ' + '">\n' +
                        '<div class="mask">\n' +
                        '            <img src="' + response[startItem].image + ' ' + '">\n' +
                        '<div class="mask__activ" >\n' +
                        '<a class="mask__activ--link" onclick="moreInfo(' + response[startItem].id + ')"><i class="glyphicon glyphicon-plus"></i></a>\n' +
                        '     <div class="mask__activ--container">\n' +
                        '<div class="blog__info">\n' +
                        '     <i class="glyphicon glyphicon-eye-open"></i>\n' +
                        '<span>' + response[startItem].number + ' ' + '</span>\n' +
                        ' </div>\n' +
                        '<div class="blog__info">\n' +
                        '     <i class="glyphicon glyphicon-time"></i>\n' +
                        '<span>' + response[startItem].date + ' ' + '</span>\n' +
                        ' </div>\n' +
                        '<div class="blog__info">\n' +
                        '     <i class="glyphicon glyphicon-heart"></i>\n' +
                        '<span>' + response[startItem].likes + ' ' + '</span>\n' +
                        ' </div>\n' +
                        ' </div>\n' +
                        ' </div>\n' +
                        ' </div>\n' +

                        '                <div class="blog__container">\n' +
                        '                    <h3 class="blog__container--title">' + response[startItem].name + ' ' + '</h3>\n' +
                        '                    <span class="blog__container--data">' + response[startItem].data + ' ' + '</span>\n' +
                        '                    <p class="blog__container--info">' + response[startItem].text + ' ' + '</p>\n' +
                        '                    <a href="#" onclick="moreInfo(' + response[startItem].id + ')"  class="blog__container--link"><i class="creep glyphicon glyphicon-chevron-right"></i>\n' +
                        '                <i class="glyphicon glyphicon-chevron-right"></i> ' + response[startItem].link + ' ' + '</a>\n' +
                        '                </div>';
                    songs.innerHTML = songs.innerHTML + string;
                    startItem++;


                }
            }
        };
    }


    $('.js-group').on('click', 'button', function () {
        var value = $(this).attr('data-id');
        renderItems(value)
    });

})(jQuery);

function moreInfo(postId) {

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'blog.json', true);


    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {

            var posts = JSON.parse(this.responseText);

            var info = document.getElementById("more");


            var post = null;
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id == postId) {
                    post = posts[i]
                }
            }


            var infoText =
                '    <h2 class=" blog__item--name">' + post.name + ' ' + '. Best Place For Your Sticker Needs!</h2>\n' +
                '<div class="blog__item col-md-12">\n' +
                '<div class="col-md-7">\n' +
                '            <img class="blog__image"  src="' + post.image + ' ' + '">\n' +
                '            <img class="blog__image"  src="' + post.images + ' ' + '">\n' +
                ' </div>\n' +
                '<div class="col-md-5">\n' +
                '<div class="blog__item">\n' +
                '<div class="blog__item--element">\n' +
                ' <span class="names">Date</span>\n' +
                '  <span class="names__info">' + post.data + ' ' + '</span>\n' +
                ' </div>\n' +
                '<div class="blog__item--element">\n' +
                '<span class="names">Tags</span>\n' +
                '<span class="names__info">Website | Design </span>\n' +
                ' </div>\n' +
                '<div class="blog__item--element">\n' +
                '<span class="names">Author</span>\n' +
                '<span class="names__info">Michaei Reimer</span>\n' +
                ' </div>\n' +
                ' </div>\n' +
                '<p class="blog__item--paragraph">Lorem ipsum dolor sit amet, mollis epicuri pri ei, perpetua honestatis ad vix.\n' +
                '                    Ne duo ludus putent, cu causae tamquam voluptua duo. Agam officiis no duo, ut reque decore sea.\n' +
                '                    Cu eripuit accusam vix. Facete blandit detraxit pri cu, sea soluta doming civibus ea.</p>\n' +
                '      <p  class="blog__item--paragraph">Eum eu tale clita iuvaret, cu est saperet forensibus interesset, cum ne case iusto oportere.\n' +
                '                    Id idque indoctum eum, menandri mediocrem has ei. At usu modo quaerendum. Sit ei dicunt tacimates,\n' +
                '                    mea ea enim eirmod suscipiantur, amet dicit ancillae vel in. Ex mea augue eloquentiam, his postea\n' +
                '                    dolorem suavitate ea. Mel hendrerit accommodare concludaturque ex.</p>\n' +
                '<a href="index.html" class="blog__item--link"><i class="creep glyphicon glyphicon-chevron-right"></i>\n' +
                '                <i class="glyphicon glyphicon-chevron-right"></i> Visit Website</a>\n' +
                ' </div>\n' +
                ' </div>\n' +
                '<h3 class="blog__item--name">Similar Posts. Check Them Out!</h3>\n' +
                '  <div class="gallery blog__gallery">\n' +
                '    <div>\n' +
                '<img src="' +  post.similar_posts[0].image + ' ' + '">\n' +
                '  <div class="blog__container blog__item--container">\n' +
                ' <h3 class="blog__container--title">' + post.similar_posts[0].name + ' ' + '</h3>\n' +
                '<span class="blog__container--data">' + post.similar_posts[0].data + ' ' + '</span>\n' +
                '    </div>\n' +
                '    </div>\n' +
                '    <div>\n' +
                '<img src="' + post.similar_posts[1].image + ' ' + '">\n' +
                '  <div class="blog__container blog__item--container">\n' +
                ' <h3 class="blog__container--title">' + post.similar_posts[1].name + ' ' + '</h3>\n' +
                '<span class="blog__container--data">' + post.similar_posts[1].data + ' ' + '</span>\n' +
                '    </div>\n' +
                '    </div>\n' +
                '    <div>\n' +
                '<img src="' + post.similar_posts[2].image + ' ' + '">\n' +
                '  <div class="blog__container blog__item--container">\n' +
                ' <h3 class="blog__container--title">' + post.similar_posts[2].name + ' ' + '</h3>\n' +
                '<span class="blog__container--data">' + post.similar_posts[2].data + ' ' + '</span>\n' +
                '    </div>' +
                '    </div>\n' +
                '    </div>';


            info.innerHTML = infoText;


        }
    }
}



