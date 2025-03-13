document.addEventListener("DOMContentLoaded", function() {
    fetch('producten.json')
        .then(response => response.json())
        .then(data => {
            let productList = document.getElementById("product-list");
            data.forEach(product => {
                let productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <img src="${product.afbeelding}" alt="${product.naam}">
                    <h2>${product.naam}</h2>
                    <p>${product.beschrijving}</p>
                    <p><strong>Prijs: €${product.prijs}</strong></p>
                    <button onclick="addToCart(${product.product_id}, '${product.naam}', ${product.prijs})">Toevoegen aan winkelwagen</button>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " is toegevoegd aan de winkelwagen!");
}
