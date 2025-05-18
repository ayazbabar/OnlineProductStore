window.onload =()=>{
    const section = document.getElementById("sc");
    const Item = JSON.parse(localStorage.getItem(cartItem));

    if(item){
        const div = document.createElement("div");
        div.innerHTML = item.html;
        div.className = item.className;

        sc.appendChild(div); 
    }
};

