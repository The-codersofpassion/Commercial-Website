document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        if(scroll_pos >= 986 && scroll_pos <= 1843){
            $("nav").css("background-image","linear-gradient(to right,rgba(255, 255, 251, 0.80),rgba(255, 255, 251, 0.80))"); 
            $(".logo a img").css('max-width', '80px');
            $("nav ul").css("margin-top","0.2vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","img11 3s ease-in-out 0s 1");
           
        }
        else if (scroll_pos >= 100) {
            $("nav").css("background-image","linear-gradient(to right,rgba(255, 255, 251, 0.80),rgba(255, 255, 251, 0.80))"); 
            $(".logo a img").css('max-width', '80px');
            $("nav ul").css("margin-top","0.2vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","none");
            
        }
        else {
            $("nav").css("background-image","linear-gradient(to right,rgba(72, 77, 73,0),rgba(241, 232, 230,0),rgba(72, 77, 73,0))"); 
            $(".logo a img").css('max-width', '160px');
            $("nav ul").css("margin-top","1vh");
            $("nav ul li a").css("color","white");
            $(".img1").css("animation","none");
            
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
