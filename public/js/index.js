document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        if (scroll_pos >= 1294 && scroll_pos <= 1894) {
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","typing 8s steps(34, end) 1s 1 normal both, blink 900ms steps(34) infinite normal");
            $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
        }
        else if(scroll_pos >= 1687 && scroll_pos <= 2607){
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","img11 3s ease-in-out 0s 1");
            $(".worktext2 h1").css("animation","none");
            $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
        }
        else if (scroll_pos >= 100) {
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))"); 
            $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
            $("nav ul li a").css("color","black");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","none");
            $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
        }
        else {
            $("nav").css("background-image","linear-gradient(to right,rgb(252, 252, 249,0),rgba(231, 231, 219,0))"); 
            $(".logo a img").css('max-width', '10vw');
            $("nav ul").css("margin-top","2vh");
            $("nav ul li a").css("color","white");
            $(".img1").css("animation","none");
            $(".worktext2 h1").css("animation","none");
            $("nav").css("box-shadow"," none");
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

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 4 seconds
}
