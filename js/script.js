const params = new URLSearchParams(window.location.search);
const categorie = params.get("categorie"); // leest de categorie uit de URL

fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
        const lijst = document.getElementById('productlijst');
        data.forEach(product => {
            // controleer of we filteren op categorie
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
                `;
                lijst.appendChild(div);
            }
        });
    })
    .catch(error => {
        console.error('Fout bij het laden van producten:', error);
    });
