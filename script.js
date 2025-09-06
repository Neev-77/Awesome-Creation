let cart = [];
let subtotal = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  subtotal += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  subtotalEl.textContent = subtotal;

  let shipping = subtotal >= 499 ? 0 : (subtotal > 0 ? 50 : 0);
  shippingEl.textContent = shipping;

  totalEl.textContent = subtotal + shipping;
}

function clearCart() {
  cart = [];
  subtotal = 0;
  updateCart();
  alert("Cart has been cleared 🙏");
}
function toggleViewMore(button) {
  const section = button.closest(".product-section");
  const hiddenProducts = section.querySelectorAll(".product.hidden");

  hiddenProducts.forEach(product => {
    product.style.display = product.style.display === "none" || product.style.display === "" ? "block" : "none";
  });

  button.textContent = button.textContent === "View More" ? "View Less" : "View More";
}

