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

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((tab) => tab.classList.remove("active"));

    this.classList.add("active");
    document.getElementById(this.dataset.tab).classList.add("active");
  });
});

// document.getElementById("openSlider").addEventListener("click", function () {
//   document.getElementById("sliderOverlay").style.display = "flex";
// });
// document.getElementById("closeSlider").addEventListener("click", function () {
//   document.getElementById("sliderOverlay").style.display = "none";
// });

// var swiper = new Swiper(".swiper-container", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

document.querySelectorAll(".openSlider").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById(this.dataset.slider).style.display = "flex";
  });
});

document.querySelectorAll(".close-slider").forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
});

new Swiper(".swiper1", {
  loop: true,
  navigation: {
    nextEl: ".swiper1 .swiper-button-next",
    prevEl: ".swiper1 .swiper-button-prev",
  },
  pagination: {
    el: ".swiper1 .swiper-pagination",
    clickable: true,
  },
});

new Swiper(".swiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
  },
  pagination: {
    el: ".swiper2 .swiper-pagination",
    clickable: true,
  },
});

console.log("script");
