console.log("checking js");
var F=true;
var S=false;
var A=false;

function Fa() {
    F=true;
    S=false;
    A=false;
}
function Sd() {
    F=true;
    S=false;
    A=false;
}
function Ar() {
    F=true;
    S=false;
    A=false;
}

if(F == true) {
    document.getElementsByClassName('slider')[0].setAttribute('src','img/DeepSiteBackground.jpg'); 
}

if(S == true) {
    document.getElementsByClassName('slider').setAttribute('src','img/atr.jpg'); 
}
if(A == true) {
    document.getElementsByClassName('slider').setAttribute('src','img/img1.jpg'); 
}
