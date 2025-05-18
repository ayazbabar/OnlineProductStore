AddtoCart = (productid)=>{
    Product = document.getElementById(productid);
    Product.querySelector('button').remove();

    const productData = {
        id: productid,
        html: Product.innerHTML,
        className: Product.className
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push(productData);

    localStorage.setItem("cartItems",JSON.stringify(cartItems));

    window.location.href="Cart.html";



};