function scrollto(div)
{
    if(div == 'home'){
        window.scrollTo(0);
    }
    else{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top
 },2000);
}
}
