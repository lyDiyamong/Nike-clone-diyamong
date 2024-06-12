// dropdown hovering for wall header
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