import { menuArray } from './data.js'

let orderArr = []
const orderBtn = document.querySelector('.order-btn')
const pay = document.getElementById('submit')
const cardDetails = document.querySelector('.card-details')
const formData = document.getElementById('form-data')
const orderWrapper = document.querySelector('.order-wrapper')


// this is a function used to render other functions when an element is clicked
document.addEventListener('click', function(e) {
    if (e.target.dataset.add) {
       orderWrapper.style.display = 'flex';
        getArr(e.target.dataset.add);
        getOrderArray();
    }
    else if (e.target.dataset.remove) {
        getArr(e.target.dataset.add)
        deleteArr(e.target.dataset.remove)
    }
})


orderBtn.addEventListener('click', function() {
    cardDetails.style.display = 'flex'
}) 

pay.addEventListener('click', function(e) {
        payforOrder(e)
})
   

// function to render the items on the menu
document.getElementById('menu-container').innerHTML = menuArray.map(function(menu) {
    const {emoji, name, ingredients, price, id} = menu

    return(
    `
    <div class="menu-list">
        <div class="menu-item">
            <img src="${emoji}">
            <div class="menu-info">
                <h2>${name}</h2>
                <p>${ingredients}</p>
                <h2>$${price}</h2>
            </div>
        </div>
        
        <div id="add-btn" data-add="${id}">+</div>
    </div>  
    `
    )
})

// function that stores item from the displayed menu
function getArr(itemId) {
    menuArray.forEach(function(menu) {
        if (Number(itemId) === menu.id) {
            orderArr.push(menu)
        }
    })
   
}

// function that renders the items ordered
function getOrderArray() {
    let arrayHtml = ''
    let totalPrice = 0

    orderArr.forEach(function(menu) {
        const {name, price, id} = menu
        arrayHtml +=  `
        <div class="ordered-array">
            <h2>${name} 
            <span class="remove" data-remove="${id}">remove</span></h2>
            <p class="order-price">$${price}</p>
        </div>
        `
        totalPrice += menu.price
       
    })
  
    document.getElementById('total-amount').textContent = `$${totalPrice.toFixed(2)}`
    document.getElementById('order-item').innerHTML = arrayHtml

       
}

function deleteArr(itemId) {
    let newOrderArr = orderArr.filter(function(menu) {
          return Number(itemId) !== menu.id
     })
     orderArr = newOrderArr
    getOrderArray()
    
  }
  
  let newDisplay = ``

function payforOrder(e) {
    e.preventDefault()
    cardDetails.style.display = 'none'
    const cardDetailsData = new FormData(formData)
    const fullName = cardDetailsData.get('fullName')
    newDisplay += 
    ` <div class="my-order">
        Hi ${fullName}, your order is on the way!
    </div>
    `
    orderWrapper.style.display = 'flex'
    orderWrapper.innerHTML = newDisplay 
    console.log(newDisplay)
    
   
}
   


