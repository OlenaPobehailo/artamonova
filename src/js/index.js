import "./../scss/main.scss";

const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burgerMenu.classList.remove("open");
  });
});

console.log("script");
