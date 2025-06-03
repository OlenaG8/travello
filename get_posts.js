import { postsArray } from './oferty.js'

const copyrightDate = document.getElementById("copyright-date")
const postsContainer = document.getElementById("posts-container")

const fullscreen = document.getElementById("fullscreen")

function getCurrentYear() {
const date = new Date()
copyrightDate.innerHTML = `Copyright ©${date.getFullYear()}`
}

function getPostHtml(card) {
    const iconsHtml = card.favicons.map(icon => {
    return `<i class="${icon.className} tooltip" data-tooltip="${icon.tooltip}"></i>`;
    }).join('');

    const bestsellerBadge = card.bestseller 
        ? `<span class="trip-badge">Bestseller</span>` 
        : '';
return `           
    <div class="gallery-cell">  
        <div class="trip-image-wrapper">
            <img class="article-img" id="mainImage${card.id}" src="./images/${card.coverImg}" alt="Post thumbnail">  
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

function getFullscreenHtml(card) {
    return `    
    <div id="overlay${card.id}" class="overlay">
        <img src="./images/${card.coverImg}" alt="Pełny ekran" class="fullscreenImage" />
    </div>
    `
}

function render() {
    postsContainer.innerHTML += postsArray.map(getPostHtml).join('')
}

function render2() {
    fullscreen.innerHTML += postsArray.map(getFullscreenHtml).join('')
}

render()
render2()

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i < 5; i++) {
    const img = document.getElementById(`mainImage${i}`);
    const overlay = document.getElementById(`overlay${i}`);

    if (img && overlay) {
      img.addEventListener('click', () => {
        overlay.style.display = 'flex';
      });

      overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
    }
  }
});
