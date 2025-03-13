document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = 0;

    cart.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<p>${item.name} - €${item.price.toFixed(2)}</p>`;
        cartItems.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
});
