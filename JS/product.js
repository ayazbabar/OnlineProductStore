AddtoCart = (productid)=>{
    Product = document.getElementById(productid);

    const productData = {
        id: productid,
        html: Product.html,
        classname: Product.classname
    };

    localStorage.setItem("cartItem",JSON.stringify(productData));
    window.location.href="Cart.html";



};