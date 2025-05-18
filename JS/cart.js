window.onload = () => {
  const section = document.getElementById("sc");
  const checkoutBtn = document.getElementById("checkout-btn");
  const totalPriceEl = document.getElementById("total-price");


  const items = JSON.parse(localStorage.getItem("cartItems")) || [];


  items.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = item.html;
    div.className = item.className || ""; 
    section.appendChild(div);
  });

 
 function calculateTotal() {
  let total = 0;
  items.forEach(item => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = item.html;
    const priceSpan = tempDiv.querySelector(".text-indigo-600");
    if (priceSpan) {
      let priceText = priceSpan.textContent.replace("Rs.", "").replace(/,/g, "").trim();
      const priceValue = parseFloat(priceText);
      if (!isNaN(priceValue)) {
        total += priceValue;
      }
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
