// ITERATION 1
removeButtons = document.querySelectorAll('.btn-remove')
console.log(removeButtons)

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  console.log('clicked')
  let price = product.querySelector('.price').innerText
  price = Number(price.replace(/[^0-9.-]+/g, ""))
  let quantity = (product.querySelector('input'))
  quantity = Number(quantity.value)
  const subTotalVal = price * quantity
  let subTotal = product.querySelector('.subtotal')
  return subTotal.innerText = `$${subTotalVal}`


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')
  let subTotals = document.querySelectorAll('.subtotal')
  let total = 0
  products.forEach(element => {
    updateSubtotal(element)
  });
  subTotals.forEach((element) => {
    el = element.innerText
    el = Number(el.replace(/[^0-9\.]+/g, ""))
    // console.log(el)
    // console.log(typeof (el))
    total += el
  })
  totalCalc = document.getElementById('total-value')
  return totalCalc.innerText = `Total: $${total}`

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  let parent = target.parentNode.parentNode.parentNode
  let child = target.parentNode.parentNode
  parent.removeChild(child)
  calculateAll()

}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })
});
