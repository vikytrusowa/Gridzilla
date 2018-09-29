'use strict';
(function ($) {
    $(document).ready(function () {

        var $grid = $('.grid').isotope({

            itemSelector: '.grid__item',
            layoutMode: 'packery',
            packery: {

            }
        });

        $grid.isotope({filter: '*'});

        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        $('.button').on('click', function () {
            $('.filter-button-group').find('.button').removeClass('button__activ');
            $(this).addClass('button__activ');
        })

    });
})(jQuery);