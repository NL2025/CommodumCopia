<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Producten - Commodum Copia</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Onze Producten</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="categorieen.html">Categorieën</a></li>
                <li><a href="producten.html">Producten</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="productlijst">
            <!-- Producten worden hieronder automatisch geladen via JavaScript -->
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Commodum Copia</p>
    </footer>
    <script>
        const params = new URLSearchParams(window.location.search);
        const categorie = params.get("categorie");

        fetch('data/products.json')
            .then(response => response.json())
            .then(data => {
                const lijst = document.getElementById('productlijst');
                data.forEach(product => {
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
    </script>
</body>
</html>
