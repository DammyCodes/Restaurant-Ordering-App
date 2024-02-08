import { menuArray } from './data.js'

const addBtn = document.getElementById('add-btn')

document.addEventListener('click', function(e) {
    getMyOrder(e.target.dataset.add)
    // updateOrderList(e.target.dataset.add)
    
    
})

// function updateOrderList(itemId) {
//     const targetMenuObj = menuArray.filter(function(menu) {
//         if (itemId === menu.id) {
//             targetMenuObj.push(menu)
//         }
        
//     })
   
//     console.log(targetMenuObj)
// }

let orderHtml = ``

function getMyOrder(itemId) {
    menuArray.map(function(menu) {
       if (itemId === menu.id) {
            orderHtml =  ` 
        <div class="order-wrapper">
        <h2>Your order</h2>
        <div class="order-item underline" id="order-item">
            <h2>${menu.name}<span class="remove">remove</span></h2>
            <div class="order-price">$${menu.price}</div>
        </div>

            <div class="order-item total-price">
                <h2>Total price:</h2>
                <div class="order-price">$${menu.price}</div>
            </div>
            <button class="order-btn">Complete order</button>
        </div>
     `
        }
        
    })
   
   document.querySelector('.order-container').innerHTML = orderHtml
}




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
            
            <div id="add-btn" data-add="${menu.id}">+</div>
        </div>  
        `
    })
    return menuHtml
}


function render() {
    document.querySelector('.menu-container').innerHTML = getMenuArray()
}

render()
