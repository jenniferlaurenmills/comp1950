
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
