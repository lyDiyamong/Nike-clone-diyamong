import {HomePage, KidsPage} from '../data/absolute-cap-card.js';


const dataSources = {
    'home-page-cards': HomePage,
    'kids-page-cards': KidsPage,
    // 'card2-data': cardData2
};


const CreateAbsCard = (cards, display) =>{
    return `
        <ul class="${display}  gap-3 overflow-x-auto">
            ${cards.map((card) => `
                <li class="my-2">
                    <a href="#">
                        <figure class="relative ">
                            <img class="min-w-[300px] md:w-full" src="${card.img}" alt="">
                            <figcaption class="absolute bottom-10 left-8 text-white">
                                <p class="mb-2 capitalize">${card.subtitle}</p>
                                <h3 class="capitalize text-2xl font-roboto mb-4">${card.title}</h3>
                                <div class="mt-6 ">
                                    <a class="py-2 px-4 bg-white text-black rounded-full hover:opacity-50" href="">${card.btn}</a>
                                </div>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            `).join('')}
        </ul>   
    `
}

class AbsCard extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source');
        const display = this.getAttribute('display-style')
        const data = dataSources[dataSource] ; 
        this.innerHTML = CreateAbsCard(data, display)
    }
}
customElements.define('abs-card-container', AbsCard)