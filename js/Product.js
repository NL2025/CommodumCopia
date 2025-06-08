const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.product_id === productId);
    const detailDiv = document.getElementById('product-detail');

    if (product) {
      detailDiv.innerHTML = `
        <div class="product-detail-box">
          <img src="images/${product.afbeelding}" alt="${product.naam}">
          <h2>${product.naam}</h2>
          <p>${product.beschrijving}</p>
          <strong>Prijs: € ${product.prijs}</strong><br><br>
          <a href="#" class="add-to-cart-btn">Voeg toe aan winkelwagen</a>
        </div>
      `;

      document.querySelector(".add-to-cart-btn").addEventListener("click", function(e) {
        e.preventDefault();
        let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
        winkelwagen.push(productId);
        localStorage.setItem("winkelwagen", JSON.stringify(winkelwagen));
        window.location.href = "bestelling.html";
      });
    } else {
      detailDiv.innerHTML = `<p>Product niet gevonden.</p>`;
    }
  })
  .catch(err => {
    console.error("Fout bij laden van product:", err);
  });
