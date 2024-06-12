let accordionBtn1 = document.querySelectorAll('#accordions-btn')
let accordionDropdown1 = document.querySelectorAll('#accordions-dropdown')
let downBtn = document.querySelectorAll('#down-btn')
accordionBtn1.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      accordionDropdown1[index].classList.toggle("max-h-[400px]");
      downBtn[index-1].classList.toggle("rotate-180");
    });
});
let dropDownHover = document.querySelectorAll(".dropdown-hover");
let dropDownMenu = document.querySelectorAll(".dropdown-menu");

dropDownHover.forEach((box, index) => {
  box.addEventListener("mouseenter", () => {
    dropDownMenu[index].classList.remove("max-h-[0px]");
    dropDownMenu[index].classList.add("max-h-[600px]");
  });
  box.addEventListener("mouseleave", () => {
    dropDownMenu[index].classList.remove("max-h-[600px]");
    dropDownMenu[index].classList.add("max-h-[0px]");
  });
});
