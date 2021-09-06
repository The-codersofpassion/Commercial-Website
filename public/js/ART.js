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
        $(".logo a img").css('max-width', '7px');
        $("nav ul").css("margin-top","1.3vh");
        $("nav ul li a").css("color","black");
        $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
    }
    else {
        $("nav").css("background-image","linear-gradient(to right,rgb(252, 252, 249,0),rgba(231, 231, 219,0))"); 
        $(".logo a img").css('max-width', '10px');
        $("nav ul").css("margin-top","2vh");
        $("nav ul li a").css("color","white");
        $("nav").css("box-shadow"," none");
    }
    // if(scroll_pos>3601){
    //   window.scrollTo(0,3601);
    // }
})
};

var slideIndex6 = 0;
showSlides6();

function showSlides6() {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides.length) {slideIndex6 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6-1].style.display = "block";  
  dots[slideIndex6-1].className += " active";
  setTimeout(showSlides6, 4000); // Change image every 4 seconds
}

var slideIndex7 = 0;
showSlides7();

function showSlides7() {
  var i;
  var slides = document.getElementsByClassName("mySlides7");
  var dots = document.getElementsByClassName("dot7");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex7++;
  if (slideIndex7 > slides.length) {slideIndex7 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex7-1].style.display = "block";  
  dots[slideIndex7-1].className += " active";
  setTimeout(showSlides7, 4000); // Change image every 4 seconds
}

var slideIndex8 = 0;
showSlides8();

function showSlides8() {
  var i;
  var slides = document.getElementsByClassName("mySlides8");
  var dots = document.getElementsByClassName("dot8");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex8++;
  if (slideIndex8 > slides.length) {slideIndex8 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex8-1].style.display = "block";  
  dots[slideIndex8-1].className += " active";
  setTimeout(showSlides8, 4000); // Change image every 4 seconds
}