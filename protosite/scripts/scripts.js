
$(document).ready(function () {
    $('.listMenu > li').bind('mouseover', openSubMenu);
    $('.listMenu > li').bind('mouseout', closeSubMenu);

});

function openSubMenu() {
    $(this).find('ul').css('visibility', 'visible');
};

function closeSubMenu() {
    $(this).find('ul').css('visibility', 'hidden');
};


$(window).scroll(function () {
    if ($(this).scrollTop() < 50) {

        $("footer").slideUp();

    } else {

        $("footer").slideDown();

    }
});



$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});