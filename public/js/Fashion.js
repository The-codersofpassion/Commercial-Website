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
    // if(scroll_pos>3601){
    //   window.scrollTo(0,3601);
    // }
})
};



