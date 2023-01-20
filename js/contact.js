var nameRequred = document.getElementById('name-requred');
var phoneRequred = document.getElementById('phone-requred');
var emailRequred = document.getElementById('email-requred');
var messageRequred = document.getElementById('message-requred');
var captchaRequired = document.getElementById('captcha-requred');
var submitRequred = document.getElementById('submit-requred');

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


     
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  navbar.classList.remove('active');
}


function validateName() {
  var yourName = document.getElementById('your-name').value;
  if (yourName.length < 3) {
    if (yourName.length < 1) {
      nameRequred.innerHTML = 'Name is Requred';
      return false;
    } else {
      nameRequred.innerHTML = 'Enter a Valid Name';
    }
  } else if (!yourName.match(/^[A-Za-z]*$/)) {
    nameRequred.innerHTML = 'Enter a Valid Name';
    return false
  } else {
    nameRequred.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
    return true;
  }
}

function validatePhone() {
  var yourPhone = document.getElementById('your-phone').value;
  if (yourPhone.length == 0) {
    phoneRequred.innerHTML = 'Phone no is Requred';
    return false;
  } else if (yourPhone.length == 9) {
    phoneRequred.innerHTML = 'Phone no should be 10 degits';
    return false;
  } else if (!yourPhone.match(/^\d{10}$/)) {
    phoneRequred.innerHTML = 'Invalid Phone Number';
    return false;
  } else {
    phoneRequred.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateEmail() {
  var yourEmail = document.getElementById('your-email').value;
  if (yourEmail.length == 0) {
    emailRequred.innerHTML = 'Email is Required';
    return false;
  } else if (!yourEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailRequred.innerHTML = 'Email invalid';
    return false;
  } else {
    emailRequred.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateSubject() {
  var subject = document.getElementById('your-subject').value;
  if (subject.length < 3) {
    if (subject.length < 1) {
      subjectRequred.innerHTML = 'Subject is Requred';
      return false;
    } else {
      subjectRequred.innerHTML = 'Enter a Valid Subject';
    }
  } else if (!subject.match(/^[A-Za-z]*$/)) {
    subjectRequred.innerHTML = 'Enter a Valid Subject';
    return false
  } else {
    subjectRequred.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
    return true;
  }
}

function validateMessage() {
  var yourMessage = document.getElementById('your-message').value;
  if(yourMessage.length>500){
    messageRequred.innerHTML = 'Message should be less than 500 words';
    messageRequred.classList.remove("wordCount");
    return false;
  }else if(yourMessage.length>0){
    messageRequred.innerHTML = yourMessage.length + ' ' + 'words' + '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    messageRequred.classList.add("wordCount");
    return true;
  }else{
  messageRequred.innerHTML = 'Message is Required';  
  messageRequred.classList.remove("wordCount");
      return false;
}
}


function validateSubmit() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateSubject()|| !validateMessage()) {
    submitRequred.style.display = 'flex';
    submitRequred.innerHTML = 'Please Fill all the Details';
    setTimeout(function () { submitRequred.style.display = 'none'; }, 2000)
    return false;
  }else{
      alert("Submitted Sucessfully!");
  }
}

