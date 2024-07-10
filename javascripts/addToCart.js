let listProduct = [{
     id: "1",
     name: "Item 1",
     price: 200
}, {
     id: "2",
     name: "Item 2",
     price: 150
}]
let cart = []
var addBtn = document.querySelectorAll('.addToCart')
var minar_overlay = document.querySelector('.minar-overlay')
var navCart = document.querySelector('.nav-shop-cart')
// handle show and close nav cart
function handleShowCloseNavCart() {
     minar_overlay.classList.toggle("active-overlay")
     navCart.classList.toggle("active-cart")
}
// render cart
function renderCart() {
     const listCart = document.querySelector('.nav-shop-cart__list')
     let html = ''

     cart.map((item, index) => {
          html += `<li key="${index}" class="nav-shop-cart__item">
              <div class="img">img</div>
              <div class="title">${item.name}</div>
              <div class="wrap-remove">
                <button class="wrap-remove__btn" onclick="removeCart(${item.id})">remove</button>
                <span class="quantity">
                  ${item.soluong} x
                  <span class="price">${item.price} $</span>
                </span>
              </div>
            </li>`
     })

     listCart.innerHTML = html
}
renderCart()
// add cart
function handleAddProduct() {
     Array.from(addBtn).forEach((element, index) => {
          element.addEventListener('click', (e) => {
               const id = e.target.id;
               let checkExistProductInCart = false;
               const product = listProduct.find(item => item.id === id);

               cart.forEach(item => {
                    if (item.id === product.id) {
                         checkExistProductInCart = true;
                         item.soluong += 1;
                    }
               });

               if (!checkExistProductInCart) {
                    cart.push({ ...product, soluong: 1 });
               }
               handleShowCloseNavCart()//show close nav cart
               renderCart() //render cart

          })
     })
     console.log(minar_overlay);
}
handleAddProduct()
// remove cart
function removeCart(id) {
     const index = cart.findIndex(item => Number(item.id) === Number(id));
     if (index !== -1) {
          if (cart[index].soluong > 1) {
               cart[index].soluong -= 1;
          } else {
               cart.splice(index, 1)
          }
     }
     renderCart();
}
