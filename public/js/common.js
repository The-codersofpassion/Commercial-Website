const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let text = document.getElementById('textC');

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    let FormData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        text: text.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert("Message sent!");
            name.value='';
            phone.value = '';
            email.value = '';
            text.value = '';
        }
        else {
            alert("something went wrong!");
        }
      }

    xhr.send(JSON.stringify(FormData));
})