let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

var headDispaly = document.getElementById('head_name');
     
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  navbar.classList.remove('active');
}
function vistPage(val){
    console.log("hhh",val)
    validAmount.innerHTML = 'Recomended places for visit' + val;
}