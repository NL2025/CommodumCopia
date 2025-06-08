# Commodum Copia – Webontwikkeling Vraag 3

## Inhoudsopgave

1. index.html – Startpagina  
2. categorieen.html – Overzicht van categorieën  
3. producten.html – Lijst van producten  
4. product.html – Detailpagina van één product  
5. bestelling.html – Winkelwagen en bestelformulier  
6. inloggen.html – Inlog- en uitlogfunctionaliteit  
7. css/style.css – Stijlen voor de website  
8. js/* – JavaScript-functionaliteit  
9. data/products.json – Productgegevens  
10. images/* – Afbeeldingen van producten  
11. README.md – Projectoverzicht  
12. Video (optioneel) – Korte demonstratie van de app

---

## Bestanden en Beschrijvingen

### index.html  
- Startpagina met algemene informatie over de winkel.

### categorieen.html  
- Toon categorieën zoals "Fruit", "Brood" met links naar bijbehorende producten.

### producten.html  
- Dynamisch geladen lijst met producten. Elk product bevat afbeelding, naam, beschrijving, prijs en knop naar `product.html`.

### product.html  
- Detailweergave van één product met knop "Voeg toe aan winkelwagen" die het item opslaat in `localStorage`.

### bestelling.html  
- Toont de producten uit `localStorage`, berekent totaalprijs en bevat formulier voor klantgegevens.

### inloggen.html  
- Inloggen met gebruikersnaam/wachtwoord ("admin" / "1234") + uitloggen via `localStorage`.

---

## JavaScript

- `script.js` – Laadt producten in producten.html  
- `product.js` – Toont details van geselecteerd product en voegt toe aan winkelwagen  
- `bestelling.js` – Toont inhoud van winkelwagen en verwerkt bestelling  
- `login.js` – Handelt login en logout af

---

## Afbeeldingen

- `images/appels.jpg`  
- `images/brood.jpg`  
- `images/fruit.jpg`

---

## Veiligheid & Privacy

- Geen gevoelige data opgeslagen
- Alles wordt lokaal opgeslagen via `localStorage`
- Formulieren hebben verplichte invoervelden

---

## Opmerking

Deze versie bevat alle verbeteringen op basis van feedback uit Vraag 1:
- Toevoegen van productdetailpagina
- Functionele winkelwagen + bestelling
- Inlogfunctionaliteit
- Volledige documentatie + duidelijke structuur

---
