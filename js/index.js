$(() => {
    if ($(window).width() < 768) {
        $('.g-recaptcha').appendTo('#lower-row');
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.g-recaptcha').appendTo('#lower-row');
        } else {
            $('.g-recaptcha').appendTo('.upper-row');
        }
    });
    
});
