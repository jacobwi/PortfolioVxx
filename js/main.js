$('body').scrollspy({ target: '#navbar' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});
// AOS initialization
$(function() {
    AOS.init();
});

$(window).on('load', function() {
    AOS.refresh();
});

