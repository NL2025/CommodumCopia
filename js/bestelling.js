fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('winkelwagen-container');
    let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
    let uniekeIDs = [...new Set(winkelwagen)];
    let totaal = 0;

    if (winkelwagen.length === 0) {
      container.innerHTML = "Je winkelwagen is leeg.";
      updateCartCounter();
      return;
    }

    let html = '<ul>';
    uniekeIDs.forEach(id => {
      const product = data.find(p => p.product_id === id);
      const aantal = winkelwagen.filter(x => x === id).length;
      const prijs = parseFloat(product.prijs) * aantal;
      totaal += prijs;

      html += `
        <li>
          ${product.naam} - €${product.prijs} x ${aantal} = €${prijs.toFixed(2)}
          <button onclick="verwijderUitWinkelwagen(${id})">Verwijder</button>
        </li>
      `;
    });
    html += `</ul><p><strong>Totaal: €${totaal.toFixed(2)}</strong></p>`;
    container.innerHTML = html;

    const afronden = document.getElementById('afronden-container');
    afronden.innerHTML = `
      <button onclick="afrondenBestelling()">Bestelling Afronden</button>
    `;

    updateCartCounter();
  });

function verwijderUitWinkelwagen(id) {
  let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  const index = winkelwagen.indexOf(id);
  if (index !== -1) {
    winkelwagen.splice(index, 1);
    localStorage.setItem("winkelwagen", JSON.stringify(winkelwagen));
    location.reload();
  }
}

function afrondenBestelling() {
  localStorage.removeItem("winkelwagen");
  const afronden = document.getElementById('afronden-container');
  const container = document.getElementById('winkelwagen-container');
  afronden.innerHTML = "";
  container.innerHTML = "<p>Bedankt voor je bestelling!</p>";
  updateCartCounter();
}

function updateCartCounter() {
  const winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  const counter = document.getElementById("winkelwagen-counter");
  if (counter) counter.innerText = winkelwagen.length;
}
