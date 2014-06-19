
//changing the navigation on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        var sT = $(this).scrollTop();
        if (sT >= 220) {
            $('#mainnav').addClass('hidenav');
            $('#secondnav').css("display", "block");

        } else {
            $('#mainnav').removeClass('hidenav');
            //$('#secondnav').removeClass('shownav');
            $('#secondnav').css("display", "none");
        }
    })
})