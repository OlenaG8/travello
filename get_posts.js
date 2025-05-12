import { postsArray } from './oferty.js'

const copyrightDate = document.getElementById("copyright-date")
const postsContainer = document.getElementById("posts-container")

function getCurrentYear() {
const date = new Date()
copyrightDate.innerHTML = `Copyright ©${date.getFullYear()}`
}

function getPostHtml(card) {
    const iconsHtml = card.favicons.map(iconClass => {
        return `<i class="${iconClass}" title=""></i>`;
    }).join('');

    const bestsellerBadge = card.bestseller 
        ? `<span class="trip-badge">Bestseller</span>` 
        : '';
return `           
    <div class="gallery-cell">  
        <div class="trip-image-wrapper">
            <img class="article-img" src="./images/${card.coverImg}" alt="Post thumbnail">  
        </div> 
        

        <div class="trip-icons">
            ${iconsHtml}
        </div> 

        <div class="trip-meta">
            <span class="article-info">${card.date}</span>
            <p>${card.availability}</p>
        </div>

        <div class="trip-content">
            <div class="trip-header">
                <div class="trip-opinions">
                    <h2 class="article-title">${card.location}</h2>
                    <div>
                        <span class="trip-rating">${card.rating.toFixed(1)}</span>
                        ${bestsellerBadge}
                    </div>
                </div>
                <div class="trip-desc">
                    <a href="${card.googleMaps}" class="trip-map-link" target="_blank">Zobacz na mapie</a>
                    <div class="trip-price">${card.price} zł <span>/os</span></div>
                </div>
            <p class="article-preview">${card.description}</p>
            </div>
        </div>
      
    </div>
    `
}

function render() {
postsContainer.innerHTML += postsArray.map(getPostHtml).join('')
}

render()
