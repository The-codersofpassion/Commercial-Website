document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        if (scroll_pos === 0) {
            $(".nav").css('background-color', "transparent");
            $(".nav").css("background-image","transparent");
            $(".nav").css('transition', "1s");
            $(".logo a img").css('max-width', '160px');
            $(".logo a img").css('transition', "1s");
            $(".nav ul li a").css('color', "white");  //this
            $(".nav ul li a:hover").css("background-color", "black");//this
        }
        else if (scroll_pos > 100) {
            $(".nav").css("background-image","linear-gradient(to right,white,rgba(241, 232, 230, 0.40),rgba(72, 77, 73,0.40))"); //this
            $(".nav").css('background-color', "transparent");
            $(".nav").css('transition', "1s");
            $(".logo a img").css('max-width', '100px');
            $(".logo a img").css('transition', "1s");
            $(".nav ul li a").css('color', "black");//this
            $(".nav ul li a:hover").css("background-color", "white");//this
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
