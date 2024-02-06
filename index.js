import { menuArray } from './data.js'

function getMenuArray() {
    let menuHtml = ``
    menuArray.forEach(function(menu) {

        menuHtml += `
        <div class="menu-list">
            <div class="menu-item">
                <img src="${menu.emoji}">
                <div class="menu-info">
                    <h2>${menu.name}</h2>
                    <p>${menu.ingredients}</p>
                    <h2>${menu.price}</h2>
                </div>
            </div>
            
            <div id="add-btn">+</div>
        </div>
        `
    })
    return menuHtml
}

function render() {
    document.querySelector('.menu-container').innerHTML = getMenuArray()
}

render()

