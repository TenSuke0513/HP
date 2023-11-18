$(document).ready(function() {
    $("#nav-toggle").click(function() {
        $("#nav-toggle, #nav-overlay, #nav-fullscreen, #toggle-wrapper, #img_wrapper").toggleClass("open");
    });
    $('main').click(function(){
        $("#nav-toggle, #nav-overlay, #nav-fullscreen, #toggle-wrapper, #img_wrapper").removeClass('open');
        });
});
