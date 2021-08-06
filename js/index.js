function scrollto(div) {
    if(div){
        
    $('html,body').animate(
        {
            scrollTop: $("#" + div).offset().top
        });
    }
}