$(function () {
    'use strict'
    var is_toggle = false;
    var is_small = false;
    var screen_change = false;

    var screensize = function () {
        if ($(window).width() < 768) {
            screen_change = false;
            if ((!is_small && is_toggle) || !is_toggle) {
                screen_change = true;
            }
            if (screen_change) {
                $("#wrapper").removeClass('active');
            }
            is_small = true;
        } else {
            screen_change = false;
            if ((is_small && is_toggle) || !is_toggle) {
                screen_change = true;
            }
            if (screen_change) {
                $('.toggleable').removeClass('search-toggle');
                $('#toggleable').removeClass('toggled');
                $("#wrapper").addClass('active');
            }
            is_small = false;
        }
    }
    $(window).resize(function () {
        screensize();
    });
    $(document).ready(function () {
        screensize();

        $('.snapshot').tooltip();
    });

    $("#menu-toggle").click(function (e) {
        is_toggle = true;
        $("#wrapper").toggleClass('active');
    });
    $(".search-toggle-button").click(function () {
        $('.toggleable').toggleClass('search-toggle');
        $('#toggleable').toggleClass('toggled');
    });

});
