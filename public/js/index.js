document.addEventListener("scroll", function1());

function function1() {
    var scroll_pos = 0;
    $(window).scroll(function () {
        window.scrollBy({ behavior: 'smooth' });
        scroll_pos = $(window).scrollTop();
        if (scroll_pos >= 193 && scroll_pos <= 2665.5) {
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
            $(".img1").css("animation","img11 3s ease-in-out 0s 1");
            $(".worktext2 h1").css("animation","typing 8s steps(34, end) 1s 1 normal both, blink 900ms steps(34) infinite normal");
            $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
        }
        else if(scroll_pos >= 1831 && scroll_pos <= 3925.5){
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))");
            $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
            $(".img1").css("animation","img11 3s ease-in-out 0s 1");
            $(".worktext2 h1").css("animation","none");
            $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
        }
        else if(scroll_pos >= 100 && window.matchMedia('(max-width: 800px)').matches){
            $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))"); 
            $(".logo a img").css('max-width', '12vw');
            $("nav ul").css("margin-top","1.3vh");
            $("nav ul li a").css("color","white");
            $(".img1").css("animation","none");
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
  setTimeout(showSlides, 8000); 
}

function menu() {
  var menu = document.getElementsByClassName("navmenu");
  if(menu[0].style.display=="none"){
    menu[0].style.display="block";
  }
  else{
    menu[0].style.display = "none";
    j=0;
  }
};


function scrollto(div) {
    if (div) {

        $('html,body').animate(
            {
                scrollTop: $("#" + div).offset().top
            });
    }
};

let i = 0;

        let box1 = document.getElementById("image1");
        let box2 = document.getElementById("image2");
        let box3 = document.getElementById("image3");
        let a1 = document.querySelector(".a1");
        let a2 = document.querySelector(".a2");
        let a3 = document.querySelector(".a3");
        let info = document.getElementsByClassName("info");

        a1.onclick = function () {
            box1.style.opacity = 1;
            box2.style.opacity = 0;
            box3.style.opacity = 0;
            $('#image1').css("transform","unset");
            $('#image2').css("transform","unset");
            $('#image3').css("transform","unset");
            info.innerHTML = "Image 1"
            i = 0;
        }

        a2.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 1;
            box3.style.opacity = 0;
            $('#image1').css("transform","unset");
            $('#image2').css("transform","translateX(-100vw)");
            $('#image3').css("transform","unset");
            info.innerHTML = "Image 2"
            i = 1;
        }

        a3.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 0;
            box3.style.opacity = 1;
            $('#image1').css("transform","unset");
            $('#image2').css("transform","unset");
            $('#image3').css("transform","translateX(-200vw)");
            info.innerHTML = "Image 3"
            i = 2;
        }

        
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 37) {
                right();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 39 ) {
                right();
            }
        });

        function right() {
            if (i == 0) {
                box1.style.opacity = 1;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {  
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                info.innerHTML = "Image 3"
                i = 0;
            }
        }

        function left() {
            if (i == 0) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
                info.innerHTML = "Image 3"
                i = 0;
            }
        }

        