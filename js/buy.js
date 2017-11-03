$(function () {
    $('.pay .ten').click(function () {
        $('.pay span').removeClass('active')
        $(this).addClass('active')
    });
    $('.pay .fifty').click(function () {
        $('.pay span').removeClass('active')
        $(this).addClass('active')
    });
    $('.pay .hundred').click(function () {
        $('.pay span').removeClass('active')
        $(this).addClass('active')
    });
    $('.pay .custom').click(function () {
        $('.pay span').removeClass('active')
        $(this).addClass('active')
    });
    $('.left .val').click(function () {
        if ($('.left #wrapper').css('display') != 'none') {
            $('.left #wrapper').css('display', 'none');
            loaded()
        } else {
            $('.left #wrapper').css('display', 'block');
            loaded()
        }

    });
    $('.right .val').click(function () {
        if ($('.right #wrapper1').css('display') != 'none') {
            $('.right #wrapper1').css('display', 'none');
            loaded1()
        } else {
            $('.right #wrapper1').css('display', 'block');
            loaded1()
        }
    });
    $('.btn').click(function () {
        showOverlay();
        $('html body').css('overflow', 'hidden');
        $('.buy-callback').css('display', 'block')
    })
    $('.back').click(function () {
        hideOverlay()
        $('html body').css('overflow', 'auto');
        $('.buy-callback').css('display', 'none')
    })
    $('.left #wrapper ul li').on('click', function () {
        $('.left .val').text($(this).find('a').eq(0).text())
        $('#wrapper').css('display', 'none')
    });
    $('.right #wrapper1 ul li').on('click', function () {
        $('.right .val').text($(this).find('a').eq(0).text())
        $('#wrapper1').css('display', 'none')
    });
})