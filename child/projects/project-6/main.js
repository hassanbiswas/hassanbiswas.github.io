const VERSION = 19;
const body = document.body;

let header = document.getElementById("header"),
    menu = document.getElementById("menu");
menu.addEventListener('click', () => {
  header.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  if(window.scrollY >= 40){
    header.classList.add("sticky");
  }else{header.classList.remove("sticky")}
})