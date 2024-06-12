"use strict";
// navbar hoverDrop menu
const newFeature = document.querySelector("#newFeature");
const men = document.querySelector("#men");
const women = document.querySelector("#women");
const kids = document.querySelector("#kids");
const access = document.querySelector("#access");
const sale = document.querySelector("#sale");
const bgBlur = document.querySelector("#background-blur");
console.log(bgBlur);
function hoverDrop(x) {
  if (x == 1) {
    newFeature.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  } else if (x == 2) {
    men.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  } else if (x == 3) {
    women.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  } else if (x == 4) {
    kids.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  } else if (x == 5) {
    access.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  } else if (x == 6) {
    sale.classList.add("max-h-[600px]");
    bgBlur.classList.remove("hidden");
  }
}
function hoverHide(x) {
  if (x == -1) {
    newFeature.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  } else if (x == -2) {
    men.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  } else if (x == -3) {
    women.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  } else if (x == -4) {
    kids.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  } else if (x == -5) {
    access.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  } else if (x == -6) {
    sale.classList.remove("max-h-[600px]");
    bgBlur.classList.add("hidden");
  }
}

// Hamburger responsive section
let accordionBtn = document.querySelectorAll(".accordions-btn-drop");
let accordionDropdown = document.querySelectorAll(".accordions-dropdown-menu");
let arrow = document.querySelectorAll("#arrow");
let body = document.querySelector("body");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerSection = document.querySelector("#hamburger-sidebar");
const xBtn = document.querySelector("#x-close");
accordionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accordionDropdown[index].classList.toggle("max-h-[400px]");
    arrow[index].classList.toggle("rotate-180");
  });
});
// open sidebar
hamburgerIcon.addEventListener("click", () => {
  hamburgerSection.classList.toggle("w-[330px]");
  hamburgerSection.classList.toggle("overflow-y-scroll");
  bgBlur.classList.toggle("hidden");
  body.classList.toggle('overflow-y-hidden')
});
// closing sidebar
xBtn.addEventListener('click', () =>{
  hamburgerSection.classList.toggle("w-[330px]");
  hamburgerSection.classList.toggle("overflow-y-scroll");
  bgBlur.classList.toggle("hidden");
  body.classList.toggle('overflow-y-hidden')
})

//carousel for multiple times in the same page
let currentSlide = [];

function slideShoes(carouselIndex, n) {
  const carousels = document.querySelectorAll(".slideShow");

  if (!currentSlide[carouselIndex]) {
    currentSlide[carouselIndex] = 0;
  }

  const carousel = carousels[carouselIndex];
  const images = carousel.querySelectorAll(".slide-item");
  const imageWidth = images[0].clientWidth;

  currentSlide[carouselIndex] = Math.max(0, Math.min(currentSlide[carouselIndex] + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide[carouselIndex] * imageWidth, behavior: "smooth" });
}


