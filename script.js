const hamburgerElement = document.querySelector('.hamburger');
const navigationBarMobile = document.querySelector('.navbar-mobile');
const navigationMenu = document.querySelector('.nav-menu');
const navigationClose = document.querySelector('.nav-close');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.getElementsByClassName("slide");
const slideTwo = document.querySelector('.slide-two');
const slideThree = document.querySelector('.slide-three');
const headerCover = document.querySelector('.header-first');


hamburgerElement.addEventListener('click', () => {
        navigationMenu.style.display = "flex";
        navigationBarMobile.style.display = "none";
})

navigationClose.addEventListener('click', () => {  
    navigationBarMobile.style.display = "flex";
    navigationMenu.style.display = "none";
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;  
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";

    if (window.matchMedia("(min-width: 768px)").matches) {
        if (slideTwo.style.display == "block") {
            headerCover.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')"
        } else if (slideThree.style.display == "block") {
            headerCover.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')"
        } else {
            headerCover.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')"
        }  
    }

    else {
        if (slideTwo.style.display == "block") {
            headerCover.style.backgroundImage = "url('./images/mobile-image-hero-2.jpg')"
        } else if (slideThree.style.display == "block") {
            headerCover.style.backgroundImage = "url('./images/mobile-image-hero-3.jpg')"
        } else {
            headerCover.style.backgroundImage = "url('./images/mobile-image-hero-1.jpg')"
        }  
    }
}

arrowLeft.addEventListener('click', () => {
    plusSlides(1)
})

arrowRight.addEventListener('click', () => {
    plusSlides(1)
})