function addToCart(button) {
     
    button.innerHTML = "✔ Added";

    
    alert("Item added to cart!");

    
    setTimeout(() => {
        if (button.classList.contains("cart")) {
            button.innerHTML = "Add to Cart";
        } else {
            button.innerHTML = "🛒";
        }
    }, 1500);
}

