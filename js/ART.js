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