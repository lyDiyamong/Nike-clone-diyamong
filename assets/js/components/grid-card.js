import { Home } from "../data/grid-card-data.js";
const dataSources = {
    'home-card': Home,
};
const GridCards = (cards) => {
    return `
    <div class="grid grid-cols-1 md:grid-cols-2">
        ${cards.map((card) => `
            <figure class="relative">
                <img class="object-cover w-full"  src="${card.img}" alt="">
                <figcaption class="absolute bottom-10 left-8 text-white">
                    <p class="mb-2">${card.status}</p>
                    <h3 class="capitalize text-2xl font-roboto mb-4">${card.title} <span class="block capitalize">${card.span}</span></h3>
                    <div class="mt-6 ">
                        <a class="py-2 px-4 bg-white text-black rounded-full hover:opacity-50" href="">${card.btn}</a>
                    </div>
                </figcaption>
            </figure>
        `).join('')}
        
    </div>
    `
}
class Grid extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource];
        this.innerHTML  = GridCards(data)
    }
}

customElements.define('grid-card',Grid)