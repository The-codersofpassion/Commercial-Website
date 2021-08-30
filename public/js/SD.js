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
        $(".logo a img").css('max-width', '7vw');
            $("nav ul").css("margin-top","1.3vh");
        $("nav ul li a").css("color","black");
        $("nav").css("box-shadow"," 0px 0px 10px #0000001c");
    }
    else {
        $("nav").css("background-image","linear-gradient(to right,rgb(252, 252, 249,0),rgba(231, 231, 219,0))"); 
        $(".logo a img").css('max-width', '10vw');
        $("nav ul").css("margin-top","2vh");
        $("nav ul li a").css("color","white");
        $("nav").css("box-shadow"," none");
    }
    
})
};

var slideIndex3 = 0;
showSlides3();

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 4000); // Change image every 4 seconds
}


var slideIndex4 = 0;
showSlides4();

function showSlides4() {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {slideIndex4 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4-1].style.display = "block";  
  dots[slideIndex4-1].className += " active";
  setTimeout(showSlides4, 4000); // Change image every 4 seconds
}

var slideIndex5 = 0;
showSlides5();

function showSlides5() {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot5");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides.length) {slideIndex5 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5-1].style.display = "block";  
  dots[slideIndex5-1].className += " active";
  setTimeout(showSlides5, 4000); // Change image every 4 seconds
}
