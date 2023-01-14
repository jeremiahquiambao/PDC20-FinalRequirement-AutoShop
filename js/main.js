let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active'); //when click search then it will hide menu
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active'); //when click menu then it will hide search 
    search.classList.remove('active');
}
//Hide Menu and Search Box when Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//Header 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});