const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

fetch("data/products.json")
  .then(response => response.json())
  .then(data => {
    const product = data.find(p => p.product_id === productId);
    if (!product) return;

    const section = document.getElementById("product-detail");
    const div = document.createElement("div");
    div.classList.add("product-detail");
    div.innerHTML = `
      <img src="images/${product.afbeelding}" alt="${product.naam}">
      <h2>${product.naam}</h2>
      <p>${product.beschrijving}</p>
      <strong>€ ${product.prijs}</strong><br>
      <button onclick="voegToeAanWinkelwagen(${product.product_id})">Toevoegen aan winkelwagen</button>
    `;
    section.appendChild(div);
  });

function voegToeAanWinkelwagen(id) {
  let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  winkelwagen.push(id);
  localStorage.setItem("winkelwagen", JSON.stringify(winkelwagen));
  updateCartCounter();
  window.location.href = "bestelling.html";
}

function updateCartCounter() {
  const winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  const counter = document.getElementById("winkelwagen-counter");
  if (counter) counter.innerText = winkelwagen.length;
}

updateCartCounter();
