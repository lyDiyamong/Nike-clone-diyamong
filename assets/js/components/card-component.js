import {CardDataNew, CardDataBest} from '../data/new-feature-data.js';
// import { cardData2 } from './card2-data.js';

const dataSources = {
    'card-1-data': CardDataNew,
    'card-2-data': CardDataBest,
    // 'card2-data': cardData2
};

const CreateCard = (cards) => {
    return `
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-2">
            ${cards.map((item) => `
                <figure class="mb-2">
                    <a href="">
                        <img class="max-w-full" src="${item.img}" alt="Air jordan 1 shoes">
                        <figcaption class="px-3 pt-3 lg:px-0">
                            <h3 class="text-[#A23E11]">${item.status}</h3>
                            <h4>${item.name}</h4>
                            <p class="text-[#7E7E80]">${item.subtitle}</p>
                            <p class="text-[#7E7E80]">${item.color}</p>
                            <h5>${item.price}</h5>
                        </figcaption>
                    </a>
                </figure>
            `).join('')}
        </div>
    `;
};

class Card extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || card1Data; // Default to cardData if no attribute is found
        this.innerHTML = CreateCard(data);
    }
}

customElements.define('card-component', Card);
