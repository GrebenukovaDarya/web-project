$('.nav-link').click(function() {
    $('.nav-link').removeClass('underlined-link');
    $(this).addClass('underlined-link');
    return false;
 });