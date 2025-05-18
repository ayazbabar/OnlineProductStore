function AddtoCart(productId) {
  const product = document.getElementById(productId);
  const name = product.querySelector("h3").textContent.trim();
  const price = product.querySelector(".text-indigo-600").textContent.trim();
  const image = product.querySelector("img").getAttribute("src");

  const productData = { id: productId, name, price, image };

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(productData);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  alert("Item has been added to the cart. Go to the cart page to checkout.");
}