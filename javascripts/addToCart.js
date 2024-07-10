let listProduct = [{
     id: "1",
     name: "Item 1"
}, {
     id: "2",
     name: "Item 2"
}]
let cart = []
const addBtn = document.querySelectorAll('.addToCart')
// render cart
function renderCart() {
     const listCart = document.querySelector('.listCart')
     let html = ''

     cart.map((item, index) => {
          html += `<li>
        <div>
          <h5>${item.name}</h5>
          <h6>so luong: ${item.soluong}</h6>
        </div>
        <button onClick="removeCart(${item.id});">remove</button>
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
               renderCart()
          })
     })
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
