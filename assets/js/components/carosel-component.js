import { CarouselHome,CarouselKids } from "../data/carousel-image-data.js"

const dataSources = {
    'carousel-home': CarouselHome,
    'carousel-kids': CarouselKids
}

const CreateCarousel = (contents) =>{
    return `
    <ul class="slideShow flex overflow-x-auto gap-3 mx-12">
        ${contents[0].shoes.map((shoe) => `
            <li class="slide-item">
                <img class="min-w-[300px] h-auto 2xl:max-w-[500px]" src="${shoe}" alt="jordan1">
            </li>
        `).join('')}
    </ul>
    `
}

class Carousel extends HTMLElement{
    connectedCallback(){
        const dataSource = this.getAttribute('data-source')
        const data = dataSources[dataSource]
        this.innerHTML = CreateCarousel(data)
    }
}
customElements.define('carousel-image', Carousel)