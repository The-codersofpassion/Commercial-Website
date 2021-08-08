document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        // if(scroll_pos >= 1400 && scroll_pos <= 2028){
        //     $("nav").css("background-image","linear-gradient(to right,rgba(241, 232, 230, 0),rgba(72, 77, 73,0))");
        //     // $("nav ul li a").css("color","black");
        //     $(".logo a img").css('max-width', '100px');
        //     $("nav").css("transition","2s");
        // }
        // else 
        if (scroll_pos >= 100) {
            $("nav").css("background-image","linear-gradient(to right,rgba(241, 232, 230, 0.40),rgba(72, 77, 73,0.60))"); 
            $(".logo a img").css('max-width', '100px');
            // $("nav ul li a").css("color","white");
        }
        else {
            $("nav").css("background-image","linear-gradient(to right,rgba(72, 77, 73,0),rgba(241, 232, 230,0),rgba(72, 77, 73,0))"); 
            $(".logo a img").css('max-width', '160px');
            // $("nav ul li a").css("color","white");
        }
})
};


function scrollto(div) {
    if (div) {

        $('html,body').animate(
            {
                scrollTop: $("#" + div).offset().top
            });
    }
};
