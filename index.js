import { menuArray } from './data.js'

let orderArr = []
const orderBtn = document.querySelector('.order-btn')
const pay = document.querySelector('.submit')
const formData = document.getElementById('form-data')
const orderSummary = document.getElementById('order-summary')
const orderArrCont = document.querySelector('.order-array-cont')



// this is a function used to render other functions when an element is clicked
document.addEventListener('click', function(e) {
    if (e.target.dataset.add) {
        document.querySelector('.order-wrapper').style.display = 'flex';
        getArr(e.target.dataset.add);
        getOrderArray();
    }
    if (e.target.dataset.remove) {
        getArr(e.target.dataset.add)
        deleteArr(e.target.dataset.remove)
    }
})


orderBtn.addEventListener('click', function() {
    document.querySelector('.card-details').style.display = 'flex'
}) 
  
pay.addEventListener('click', function() {
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
  
    document.getElementById('total-amount').textContent = `$${totalPrice}`
    document.getElementById('order-item').innerHTML = arrayHtml

       
}

function deleteArr(itemId) {
    let newOrderArr = orderArr.filter(function(menu) {
          return Number(itemId) !== menu.id
     })
     orderArr = newOrderArr
    getOrderArray()
    
  }
  

function payforOrder(e) {
    e.preventDefault()
    const cardDetailsData = new FormData(formData)
    const fullName = cardDetailsData.get('fullName')
    document.querySelector('.card-details').style.display = 'none'
    orderSummary.style.display = 'flex'
    let newDisplay = ``
    newDisplay += 
    ` <div class="my-order">
        Hi ${fullName}, your order is on the way!
    </div>
    `
    orderArrCont.innerHTML = newDisplay 
    console.log(orderArrCont)
}
   


