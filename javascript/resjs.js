burgar =document.querySelector('.burgar');
navbar =document.querySelector('.navbar');
navList =document.querySelector('.nav-list');
rightnav =document.querySelector('.rightnav');

burgar.addEventListener('click',()=>{
    // fat arrow function
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav')




})