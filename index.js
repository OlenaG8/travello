import { postsArray } from './oferty.js'

const copyrightDate = document.getElementById("copyright-date")
const postsContainer = document.getElementById("posts-container")

function getCurrentYear() {
const date = new Date()
copyrightDate.innerHTML = `Copyright ©${date.getFullYear()}`
}

function getPostHtml(card) {
return `           
    <div class="gallery-cell">             
        <img class="article-img" src="./images/${card.coverImg}" alt="Post thumbnail">             
        <span class="article-info">${card.date}</span>             
        <h2 class="article-title">${card.location}</h2>             
        <p class="article-preview">${card.description}</p>                       
    </div>
    `
}

function render() {
postsContainer.innerHTML += postsArray.map(getPostHtml).join('')
}

render()
