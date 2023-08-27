const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const projectHideBtn = document.getElementById('project-btn')

burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    projectHideBtn.classList.toggle('hide-project-btn');


});