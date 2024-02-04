const navToggle = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".close-icon");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const nav = document.querySelector("nav");
const navShadow = document.querySelector(".nav-shadow");

navToggle.addEventListener("click", ()=> {
  closeIcon.classList.toggle("show");
  hamburgerIcon.classList.toggle("show");
  nav.classList.toggle("show");
  navShadow.classList.toggle("show");
})