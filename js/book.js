$(function () {
    $('.Book').on('click',function () {
        var div = $('footer');
        if (div.css('display') != 'none') {
            div.css('display', 'none')
            $('.A').css('display', 'none');
            $('.background').css('display', 'none');
        } else {
            div.css('display', 'block')
            $('.black').css('display', 'block')
            $('.A').css('display', 'none');
            $('.background').css('display', 'none');
        }
    })
    $('.center').click(function (e) {
        e.stopPropagation()
        $('.A').css('display', 'block');
        $('.black').css('display', 'none')
    });
    $('.right').click(function (e) {
        e.stopPropagation()
        $('.background').css('display', 'block');
        $('.black').css('display', 'none')
    });
    $('.add').click(function (e) {
        e.stopPropagation();
        var font = $('.A .number span').text();
        var thisEle = $(".Book .info p").css("font-size");
        var unit = thisEle.slice(-2); //获取单位
        var wz = parseInt(font) + 1;
        var textFontSize = parseFloat(wz, 10);
        $('.Book .info p').css('font-size', textFontSize + unit);
        $('.A .number span').text(wz)
    });
    $('.remove').click(function (e) {
        e.stopPropagation();
        var font1 = $('.A .number span').text() - 1;
        var thisEle = $(".Book .info p").css("font-size");
        var unit = thisEle.slice(-2); //获取单位
        var textFontSize = parseFloat(font1, 10);
        $('.Book .info p').css('font-size', textFontSize + unit);
        $('.A .number span').text(font1)
    });
    $('.background .white').click(function (e) {
        e.stopPropagation();
        $('.background div').removeClass('active');
        $('.background .white div').addClass('active');
        $('.Book h1').css('color', '#1f1f25');
        $('.Book .info p').css('color', '#1f1f25');
        $('html body .Book').css('background', '#fff');
    });
    $('.background .green').click(function (e) {
        e.stopPropagation();
        $('.background div').removeClass('active');
        $('.background .green div').addClass('active');
        $('.Book h1').css('color', '#1f1f25');
        $('.Book .info p').css('color', '#1f1f25');
        $('html body .Book').css('background', '#DAF1C6');
    });
    $('.background .yellow').click(function (e) {
        e.stopPropagation();
        $('.background div').removeClass('active');
        $('.background .yellow div').addClass('active');
        $('.Book h1').css('color', '#1f1f25');
        $('.Book .info p').css('color', '#1f1f25');
        $('html body .Book').css('background', 'url("img/yellow.png")no-repeat').css('background-size', 'cover');
    });
    $('.background .black-1').click(function (e) {
        e.stopPropagation();
        $('.background div').removeClass('active');
        $('.background .black-1 div').addClass('active');
        $('.Book h1').css('color', '#788297');
        $('.Book .info p').css('color', '#788297');
        $('html body .Book').css('background', '#191B21');

    });
    $('.select .next').click(function (e) {
        e.stopPropagation()
        window.location.href = "Buy.html"
    })
    $('.select .last').click(function (e) {
        e.stopPropagation()
        window.location.href = "Buy.html"
    })
})