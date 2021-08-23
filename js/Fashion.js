document.addEventListener("scroll", function1());

function scrollto(div) {
    if (div) {

        $('html,body').animate(
            {
                scrollTop: $("#" + div).offset().top
            });
    }
};

function function1() {
  var scroll_pos = 0;
  $(window).scroll(function () {
      window.scrollBy({ behavior: 'smooth' });
      scroll_pos = $(window).scrollTop();
      if (scroll_pos >= 100) {
        $("nav").css("background-image","linear-gradient(to right,rgba(252, 252, 245, 0.80),rgba(252, 252, 245, 0.80))"); 
        $(".logo a img").css('max-width', '80px');
        $("nav ul").css("margin-top","0.2vh");
        $("nav ul li a").css("color","black");
        $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
    }
    else {
        $("nav").css("background-image","linear-gradient(to right,rgb(252, 252, 249,0),rgba(231, 231, 219,0))"); 
        $(".logo a img").css('max-width', '160px');
        $("nav ul").css("margin-top","1vh");
        $("nav ul li a").css("color","white");
        $("nav").css("box-shadow"," none");
    }
    if(scroll_pos>3601){
      window.scrollTo(0,3601);
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
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// for PSB Section
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 4000); // Change image every 4 seconds
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 4000); // Change image every 4 seconds
}


