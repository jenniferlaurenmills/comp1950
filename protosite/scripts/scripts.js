

$(document).ready(function () {


    //show and hide nav
    $('#navmenu').mouseover(function () { $('#menu').fadeIn(); });
    // $('#navmenu').click(function () { $('nav').fadeOut(); });
    $('#navmenu').mouseleave(function () { if ($(window).width() < 710) { $('#menu').fadeOut(); } });

    $('#navmenu').mouseleave(function () { if ($(window).width() > 710) { $('#menu').fadeIn(); } });
    //$('nav').mouseout(function () { $('nav').hide(); });

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


    //for scroll on click
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

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

    $('#callback-menu').sidr({
        name: 'Contents',
        source: function (name) {
            return '<h1 style="font-size:120% ;">' + name + ' Comp 1950</h1><p><a href="lectures.shtml">Home</a></p><p><a href="week1.shtml">01| Introduction</a><p style="padding-left:25px;">Web Space</p><p style="padding-left:25px;">The Net Setup</p><p style="padding-left:25px;">FTP Setup</p></p><p><a href="week2.shtml">02| Tools & Standards</a><p style="padding-left:25px;">Reminders</p><p style="padding-left:25px;">Browser Tools</p><p style="padding-left:25px;">Why Firefox!</p><p style="padding-left:25px;">FireBug</p></p><p><a href="week3.shtml">03| HTML 5 & SEO</a></p><p>04| CSS Concepts</p><p>05| More CSS</p><p>06| CSS & SSI</p><p>07| Template Development</p><p>08| Methodology</p><p>09| Alistair!</p><p>10| JQUERY/Git</p>';
        }
    });


});


