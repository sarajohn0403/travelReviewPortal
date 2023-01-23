var nameRequred = document.getElementById('name-requred');
var handledBy = document.getElementById('handled-requred');
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
function validateDetail() {
  console.log("inn")
  var handledBy = document.getElementById('handled-by').value;
  if (handledBy.length < 3) {
    if (handledBy.length < 1) {
      handledBy.innerHTML = 'Details is Requred';
      return false;
    } else {
      handledBy.innerHTML = 'Enter a Valid Detail';
    }
  } else if (!handledBy.match(/^[A-Za-z]*$/)) {
    handledBy.innerHTML = 'Enter a Valid Detail';
    return false
  } else {
    handledBy.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
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
  if (!validateName() || !validateDetail() ||  !validateMessage()) {
    submitRequred.style.display = 'flex';
    submitRequred.innerHTML = 'Please Fill all the Details';
    setTimeout(function () { submitRequred.style.display = 'none'; }, 2000)
    return false;
  }else{
      alert("Submitted Sucessfully!");
  }
}

