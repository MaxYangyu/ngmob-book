var left = ($(window).width() - $('.hj').width()) / 2;
var scrollLeft = $(document).scrollLeft();
var flag = 0;

/*点击出现遮罩层*/
$('.selected').on('click', function () {
    showOverlay();
    $('.wrapper').removeClass('none');
    $('.ml').removeClass('none');
    $('body').css('overflow', 'hidden')
    loaded()
});

$('footer .left').on('click', function (e) {
    console.log(02)
    e.stopPropagation()
    showOverlay();
    $('.wrapper').removeClass('none');
    $('.ml').removeClass('none');
    $('body').css('overflow', 'hidden')
    loaded()
});

document.addEventListener('touchmove', function (event) { 　　 //监听滚动事件
    if (flag == 1) {　　　　　　　　　　　　　　　　　　　　　　　　　　　　//判断是遮罩显示时执行，禁止滚屏
        event.preventDefault();　　　　　　　　　　　　　　　　　　　//最关键的一句，禁止浏览器默认行为
    }
});

/*点击关闭遮罩层*/
$('#overlay').on('click', function () {
    hideOverlay()
    flag == 0
    $('.wrapper').addClass('none');
    $('.ml').addClass('none');
    $('body').css('overflow', 'auto');
    $('.buy-callback').css('display', 'none')
});


/* 显示遮罩层 */
function showOverlay() {
    $("#overlay").height($(document).height());
    $("#overlay").width(pageWidth());
    $('#overlay').css('display','block');
    // fadeTo第一个参数为速度，第二个为透明度
    $("#overlay").fadeTo(100, 0.8);

}

/* 隐藏覆盖层 */
function hideOverlay() {
    $("#overlay").fadeOut(100);

}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}

//浏览器视口的高度
function windowHeight() {
    var de = document.documentElement;

    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
}

//浏览器视口的宽度
function windowWidth() {
    var de = document.documentElement;

    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
}

/* 浏览器垂直滚动位置 */
function scrollY() {
    var de = document.documentElement;

    return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
}

/* 浏览器水平滚动位置 */
function scrollX() {
    var de = document.documentElement;

    return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
}