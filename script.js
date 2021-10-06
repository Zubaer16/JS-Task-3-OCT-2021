//Add to cart
let addToCart = document.getElementsByClassName('img-container')
for (let i = 0; i < addToCart.length; i++) {
  let clickCart = addToCart[i]
  clickCart.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
  clickCart = event.currentTarget
  let title = clickCart.getElementsByClassName('h1')[0].innerText
  let price = clickCart.getElementsByClassName('price')[0].innerText
  let img = clickCart.getElementsByClassName('choose-img')[0].src
  addItemToCart(title, price, img)
}

function addItemToCart(title, price, img) {
  let addToCartContainer = document.createElement('div')
  addToCartContainer.innerHTML = `<div class="product-container">
  <img class="add-img" src="${img}" alt="laptop">
  <div class="one-circle">1</div>
  <div class="description-full">Laptop - ${title} <span class="price-1">${price}</span></div>
  <i class="fas fa-trash-alt trash-icon"></i>
</div>
<hr class="hr2">`
  addToCartContainer.classList.add('group-of-product')
  let addToCartBox = document.getElementsByClassName(
    'main-container-product'
  )[0]

  addToCartBox.appendChild(addToCartContainer)
  removeCartItem()
  updateCartTotal()
}

//Remove cart

let removeCart = document.getElementsByClassName('trash-icon')
function removeCartItem() {
  for (let i = 0; i < removeCart.length; i++) {
    let trash = removeCart[i]
    trash.addEventListener('click', function (event) {
      trashClicked = event.target
      trashClicked.parentElement.parentElement.remove()
      updateCartTotal()
    })
  }
}

//Update cart total

function updateCartTotal() {
  let cartContainer = document.getElementsByClassName(
    'main-container-product'
  )[0]
  let cartRows = cartContainer.getElementsByClassName('product-container')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('price-1')[0]
    let price = parseInt(priceElement.innerText)
    total = total + price
  }
  document.getElementsByClassName('price-2')[0].innerText = total
  document.getElementsByClassName('price-3')[0].innerText = total
}
