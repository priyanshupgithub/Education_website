
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightnav');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visibility-resp');
    navlist.classList.toggle('visibility-resp');
    navbar.classList.toggle('h-nav-resp');

})