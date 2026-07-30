/* =========================
   NAILS BY LOVE
   JavaScript Features
========================= */



// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});




// CLOSE MENU AFTER CLICKING LINK

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});






// SCROLL REVEAL ANIMATION


const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){


    const windowHeight = window.innerHeight;


    reveals.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        const revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }


    });


}



window.addEventListener("scroll", revealOnScroll);



revealOnScroll();







// NAVIGATION BACKGROUND CHANGE


const navbar = document.querySelector(".navbar");



window.addEventListener("scroll", () => {


    if(window.scrollY > 80){

        navbar.style.background = "rgba(250,249,247,0.95)";

    }

    else {

        navbar.style.background = "rgba(250,249,247,0.65)";

    }


});







// IMAGE LAZY LOADING EFFECT


const images = document.querySelectorAll("img");


images.forEach(image => {


    image.addEventListener("load", () => {

        image.style.opacity = "1";

    });


});







// BUTTON HOVER MICRO ANIMATION


const buttons = document.querySelectorAll(".btn, .btn-outline");


buttons.forEach(button => {


    button.addEventListener("mouseenter", () => {


        button.style.transform = "translateY(-4px)";


    });



    button.addEventListener("mouseleave", () => {


        button.style.transform = "translateY(0)";


    });



});