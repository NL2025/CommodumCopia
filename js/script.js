// js/script.js

const params = new URLSearchParams(window.location.search);
const categorie = params.get("categorie"); // Lees de categorie uit de URL

fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
        const lijst = document.getElementById('productlijst');
        data.forEach(product => {
            // Toon alleen producten die bij de gekozen categorie horen of toon alles als geen categorie is gekozen
            if (!categorie || product.categorie === categorie) {
                const div = document.createElement('div');
                div.classList.add('product');
                div.innerHTML = `
                    <a href="product.html?id=${product.product_id}">
                        <img src="images/${product.afbeelding}" alt="${product.naam}">
                        <h3>${product.naam}</h3>
                        <p>${product.beschrijving}</p>
                        <strong>€ ${product.prijs}</strong>
                    </a>
                    <br>
                    <a href="bestelling.html?product=${encodeURIComponent(product.naam)}">
                        <button>Bestellen</button>
                    </a>
                `;
                lijst.appendChild(div);
            }
        });
    })
    .catch(error => {
        console.error('Fout bij het laden van producten:', error);
    });
