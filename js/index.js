document.addEventListener("scroll", function1());

function function1() {
        var scroll_pos = 0;
        $(window).scroll(function () {
            window.scrollBy({ behavior: 'smooth' });
            scroll_pos = $(window).scrollTop();
            if(scroll_pos === 0){
                $("nav").css('background-color', "transparent");
                $("nav").css('transition', "2s");
                $(".logo a img").css('max-width', '160px');
                $(".logo a img").css('transition', "2s");
            }
            else if (scroll_pos > 100) {
                $("nav").css('background-color', "rgba(241, 232, 230, 0.40)");
                $("nav").css('transition', "2s");
                $(".logo a img").css('max-width', '100px');
                $(".logo a img").css('transition', "2s");
            }
        });
};


function scrollto(div) {
    if (div) {

        $('html,body').animate(
            {
                scrollTop: $("#" + div).offset().top
            });
    }
}
