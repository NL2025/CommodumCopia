const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('./data/products.json')
  .then(response => response.json())
  .then(data => {
    const product = data.find(p => p.product_id == id);
    const container = document.getElementById('product-detail');

    if (product) {
      container.innerHTML = `
        <div class="product">
          <img src="images/${product.afbeelding}" alt="${product.naam}">
          <h3>${product.naam}</h3>
          <p>${product.beschrijving}</p>
          <strong>€ ${product.prijs}</strong><br>
          <button onclick="addToCart(${product.product_id})">Voeg toe aan winkelwagen</button>
        </div>
      `;
    } else {
      container.innerHTML = "<p>Product niet gevonden.</p>";
    }
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  cart.push(id);
  localStorage.setItem("winkelwagen", JSON.stringify(cart));
  alert("Product toegevoegd aan winkelwagen!");
}
