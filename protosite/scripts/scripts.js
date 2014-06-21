
//////////////Menu//////////////
$(document).ready(function () {
    $('.listMenu > li').bind('mouseover', openSubMenu);
    $('.listMenu > li').bind('mouseout', closeSubMenu);

    /////////for change color of border on transparent buttons///////////
    $("#lnk1").mouseover(function () { $("#btn1").css("border-color", "#00d0ff"); });
    $("#lnk1").mouseout(function () { $("#btn1").css("border-color", "#fff"); });
    $("#lnk2").mouseover(function () { $("#btn2").css("border-color", "#00d0ff"); });
    $("#lnk2").mouseout(function () { $("#btn2").css("border-color", "#fff"); });
    $("#lnk3").mouseover(function () { $("#btn3").css("border-color", "#00d0ff"); });
    $("#lnk3").mouseout(function () { $("#btn3").css("border-color", "#fff"); });
    $("#lnk4").mouseover(function () { $("#btn4").css("border-color", "#00d0ff"); });
    $("#lnk4").mouseout(function () { $("#btn4").css("border-color", "#fff"); });

});

function openSubMenu() {
    $(this).find('ul').css('visibility', 'visible');
};

function closeSubMenu() {
    $(this).find('ul').css('visibility', 'hidden');
};

//////////////for Footer Slide///////////////////
$(window).scroll(function () {
    if ($(this).scrollTop() < 50) {

        $("footer").slideUp();

    } else {

        $("footer").slideDown();

    }
});

//////////////for Carousel ///////////////////
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});




