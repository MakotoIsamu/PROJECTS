
const quantity = 1; // Initial quantity

    // Decrease quantity
document.querySelector("#decrease").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity(quantity);
  }
});

    // Increase quantity
document.querySelector("#increase").addEventListener("click", () => {
  quantity++;
  updateQuantity(quantity);
});

function updateQuantity(quantity) {
  document.querySelector("#quantity").innerHTML = quantity;
}

