const data = [
  { naam: "Appels", afbeelding: "appels.jpg" },
  { naam: "Brood", afbeelding: "brood.jpg" },
  { naam: "Melk", afbeelding: "melk.jpg" },
  { naam: "Kaas", afbeelding: "kaas.jpg" },
  { naam: "Vlees", afbeelding: "vlees.jpg" }
];

const container = document.getElementById("categorie-container");

data.forEach(categorie => {
  const div = document.createElement("div");
  div.classList.add("categorie");
  div.innerHTML = `
    <img src="images/${categorie.afbeelding}" alt="${categorie.naam}">
    <h3>${categorie.naam}</h3>
  `;
  container.appendChild(div);
});

updateCartCounter();
