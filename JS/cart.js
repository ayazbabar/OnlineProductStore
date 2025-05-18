window.onload = () => {
  const section = document.getElementById("sc");
  const checkoutBtn = document.getElementById("checkout-btn");
  const totalPriceEl = document.getElementById("total-price");

  const items = JSON.parse(localStorage.getItem("cartItems")) || [];

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded-lg shadow-md mb-4";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-contain mb-2" />
      <h3 class="text-lg font-semibold">${item.name}</h3>
      <p class="text-indigo-600">${item.price}</p>
    `;

    section.appendChild(div);
  });


  function calculateTotal() {
    let total = 0;
    items.forEach(item => {
      const priceText = item.price.replace("Rs.", "").replace(/,/g, "").trim();
      const priceValue = parseFloat(priceText);
      if (!isNaN(priceValue)) {
        total += priceValue;
      }
    });
    return total;
  }

  totalPriceEl.textContent = "Total: Rs. " + calculateTotal().toLocaleString();

  checkoutBtn.addEventListener("click", () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Thank you for your purchase! Total: Rs. " + calculateTotal().toLocaleString());

    localStorage.removeItem("cartItems");

    section.innerHTML = "";
    totalPriceEl.textContent = "";
    checkoutBtn.disabled = true;
  });
};
