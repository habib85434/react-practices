/* ========================================== 
 scrollTop() >= 300
 Should be equal the the height of the header
 ========================================== */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.site_menu').addClass('fixed-header');
    } else {
        $('.site_menu').removeClass('fixed-header');
    }
});



/*===Back to Top===*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').show();
    } else {
        $('.scrollup').hide();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;

});

$(function () {
    $(".mob_site_menu").on("click", function () {
        //alert('test');
        $("body").toggleClass("current", 1000);
    });
});

//$(".menushow").click(function () {
//    alert('test');
//    //$("body").toggleClass("main");
//});