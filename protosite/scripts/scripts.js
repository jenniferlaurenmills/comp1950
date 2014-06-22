

$(document).ready(function () {

    //////////////Menu//////////////
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

    $("#divextra2").mouseover(function () { $("#divextra2").css("border-color", "#00d0ff"); });
    $("#divextra2").mouseout(function () { $("#divextra2").css("border-color", "gray"); });



    //$("#imgd").click(function () { alert("Handler for .click() called."); })


    //for scroll through the page
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
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



//for sider navigation
$(document).ready(function () {
    $('#left-menu').sidr({
        name: 'sidr-left',
        side: 'left' // By default
    });
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right'
    });
 
});



//css('transform', 'rotate(90deg)');
//$(this).css('border', 'solid');