// Add to cart function

let clickImageContainer = document.getElementsByClassName('img-container')

for (i = 0; i < clickImageContainer.length; i++) {
  let clickImageContainers = clickImageContainer[i]
  clickImageContainers.addEventListener('click', cartAdded)
}

function cartAdded(event) {
  let targetImageContainer = event.currentTarget
  let title = targetImageContainer.getElementsByClassName('h1')[0].innerText
  let price = targetImageContainer.getElementsByClassName('price')[0].innerText
  let img = targetImageContainer.getElementsByClassName('choose-img')[0].src
  finallyAdded(title, price, img)
}

function finallyAdded(title, price, img) {
  let createDiv = document.createElement('div')
  createDiv.innerHTML = `<div class="product-container">
  <img class="add-img" src="${img}" alt="laptop">
  <div class="one-circle">1</div>
  <div class="description-full">Laptop - ${title} <span class="price-1">${price}</span></div>
  <i class="fas fa-trash-alt trash-icon"></i>
</div>
<hr class="hr2">`
  createDiv.classList.add('group-of-product')
  let mainContainerProduct = document.getElementsByClassName(
    'main-container-product'
  )[0]
  mainContainerProduct.appendChild(createDiv)
  updateCartTotal()
  removeCart()
}

//Update the total when product added

function updateCartTotal() {
  let cartRows = document.getElementsByClassName('product-container')
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

// Remove cart item

function removeCart() {
  let trashIcon = document.getElementsByClassName('trash-icon')
  for (i = 0; i < trashIcon.length; i++) {
    let trash = trashIcon[i]
    trash.addEventListener('click', function (event) {
      let trashClicked = event.target
      trashClicked.parentElement.parentElement.remove()
      updateCartTotal()
    })
  }
}
