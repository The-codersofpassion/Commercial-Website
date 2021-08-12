document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        if (scroll_pos >= 1294 && scroll_pos <= 1894) {
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '80px');
            $("nav ul").css("margin-top","0.2vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","typing 8s steps(34, end) 1s 1 normal both, blink 900ms steps(34) infinite normal");
        }
        else if(scroll_pos >= 993 && scroll_pos <= 1484){
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '80px');
            $("nav ul").css("margin-top","0.2vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","img11 3s ease-in-out 0s 1");
            $(".worktext2 h1").css("animation","none");
        }
        else if (scroll_pos >= 100) {
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))"); 
            $(".logo a img").css('max-width', '80px');
            $("nav ul").css("margin-top","0.2vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","none");
        }
        else {
            $("nav").css("background-image","linear-gradient(to right,rgb(252, 252, 249,0),rgba(231, 231, 219,0))"); 
            $(".logo a img").css('max-width', '160px');
            $("nav ul").css("margin-top","1vh");
            $("nav ul li a").css("color","white");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","none");
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


// var typed = new Typed(".workchangetext", {
//     strings: ["Collobarations", "Decoration", "Efficiency"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });