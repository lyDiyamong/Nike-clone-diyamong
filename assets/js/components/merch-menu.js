import { MerchMenu } from "../data/merch-menu-data.js";
// obj for storing data & for html to get data
const dataSources = {
    'merch-menu': MerchMenu,
};
// function for create section of merchMenu
const CreateMenu = (menu) => {
    return `
    <div class="w-[calc(100%_-_68px)] mx-5 md:flex md:justify-between">
        ${menu.map((items)=>`
            <div class="flex flex-col">
                <h4 class="accordions-btn cursor-pointer mb-6 text-2xl">${items.menuTitle} </h4>
                <ul class="accordions-dropdown text-slate-500 max-h-[0px] overflow-y-hidden duration-500 md:max-h-[200px]">
                    ${items.menuItems.map((item) =>`
                        <li class="hover:text-black py-1"><a href="">${item}</a></li>
                    `).join('')}
                    
                </ul>
        </div>
        `).join('')}
        
    </div>
    `
}
class Menu extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource];
        this.innerHTML  = CreateMenu(data)
    }
}

customElements.define('merch-menu-wrapper',Menu)

// accordionDropdown for merchMenu
let accordionBtn = document.querySelectorAll(".accordions-btn");
let accordionDropdown = document.querySelectorAll(".accordions-dropdown");
accordionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accordionDropdown[index].classList.toggle("max-h-[400px]");
  });
});