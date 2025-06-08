// js/script.js
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const lijst = document.getElementById('productlijst');
    data.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
        <img src="images/${product.afbeelding}" alt="${product.naam}">
        <h3>${product.naam}</h3>
        <p>${product.beschrijving}</p>
        <strong>€ ${product.prijs}</strong><br>
        <a href="product.html?id=${product.product_id}" class="add-to-cart-btn">Bekijk product</a>
      `;
      lijst.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Fout bij het laden van producten:', error);
  });
