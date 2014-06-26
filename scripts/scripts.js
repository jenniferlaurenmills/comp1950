
//changing the navigation on scroll
$(document).ready(function () {
    $('#secondnav').css("display", "none");

    $(window).scroll(function () {
        var sT = $(this).scrollTop();
        if (sT >= 220 &&$(window).width() > 686) {
            //$('#mainnav').addClass('hidenav');
            //$('#secondnav').css("display", "block");
            // $('#secondnav').css("display", "block").fadeIn("slow");
            $('#secondnav').show("slow").fadein("slow");
            

        } else {
            //$('#mainnav').removeClass('hidenav');
            //$('#secondnav').fadein(300);
            //$('#secondnav').css("display", "none").fadeOut("slow");
            $('#secondnav').hide("slow").fadeOut("slow");

        }
    })



    //show and hide nav
    $('#navmenu').mouseover(function () { $('#mainnav').fadeIn(); });
    // $('#navmenu').click(function () { $('nav').fadeOut(); });
    $('nav').mouseleave(function () { if ($(window).width() < 686) { $('#mainnav').fadeOut(); } });

    $('nav').mouseleave(function () { if ($(window).width() > 686) { $('#mainnav').fadeIn(); } });
    //$('nav').mouseout(function () { $('nav').hide(); });

})