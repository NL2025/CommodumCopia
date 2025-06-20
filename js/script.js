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
        <a href="product.html?id=${product.product_id}">
          <button>Bekijk product</button>
        </a>
      `;
      lijst.appendChild(div);
    });
    updateCartCounter();
  });

function updateCartCounter() {
  const winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  const counter = document.getElementById("winkelwagen-counter");
  if (counter) counter.innerText = winkelwagen.length;
}
