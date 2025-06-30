# Commodum Copia - Webwinkelproject

## Beschrijving
Commodum Copia is een moderne online supermarkt waar klanten producten kunnen bekijken, toevoegen aan hun winkelwagen, een bestelling kunnen afronden en kunnen inloggen. De website bestaat uit meerdere interactieve pagina’s met ondersteuning voor autorisatie en eenvoudige beveiliging via localStorage.

## Mappenstructuur

CommodumCopia/
│ 
├── index.html 
├── categorieen.html 
├── producten.html 
├── product.html 
├── bestelling.html 
├── inloggen.html 
│
├── css/ 
│   └── style.css 
│
├── js/ 
│   ├── script.js 
│   ├── producten.js 
│   ├── product.js 
│   ├── bestelling.js 
│   ├── categorieen.js 
│   └── login.js 
│ 
├── data/ 
│   └── products.json 
│ 
└── images/ 
    ├── appels.jpg 
    ├── brood.jpg
    ├── fruit.jpg
    ├── kaas.jpg
    ├── melk.jpg
    ├── rundergehakt.jpg
    └── vlees.jpg

## Pagina’s

| Pagina               | Beschrijving                                                       |
|----------------------|--------------------------------------------------------------------|
| index.html           | Startpagina met algemene informatie over Commodum Copia.           |
| categorieen.html     | Overzicht van alle productcategorieën met bijbehorende afbeeldingen.|
| producten.html       | Lijst van beschikbare producten met knop naar detailpagina.         |
| product.html         | Detailpagina van één product met knop “Toevoegen aan winkelwagen”.  |
| bestelling.html      | Winkelwagen met producten, aantallen, totaalprijs en afrekenen.     |
| inloggen.html        | Inloggen en uitloggen via localStorage.                             |

## Functionaliteiten

- Producten worden dynamisch geladen uit products.json.
- Winkelwagensysteem met toevoegen/verwijderen van producten en totaalberekening.
- Inloggen en uitloggen via localStorage (autorisatie).
- Responsieve navigatiebalk en toegankelijke opmaak met CSS.
- Afzonderlijke JavaScript-bestanden per functie.

## Beveiliging en privacy

- Alleen ingelogde gebruikers kunnen hun bestelling afronden.
- Gegevens worden opgeslagen in localStorage, zonder backend.
- Code is gestructureerd en leesbaar met aandacht voor veiligheid.
- Poging tot openen van bestelling.html zonder login leidt automatisch naar inloggen.html.

## ✅ Vereisten uit opdracht 3 die zijn geïmplementeerd

- Navigatiestructuur uitgebreid naar alle gevraagde pagina’s.
- Bestellingensysteem en winkelwagen zijn volledig functioneel.
- Autorisatiefunctie toegevoegd via inloggen.html.
- Productdetails worden correct weergegeven via product.html.
- Opdeling van JavaScript-functionaliteiten per bestand.
- Visuele verbetering van categorieën en productoverzichten.
- Automatische redirect naar inloggen als gebruiker niet is ingelogd bij bestelling.

## Demonstratievideo
Een korte demonstratievideo (maximaal 3 minuten) wordt apart meegestuurd. Deze toont het gebruik van de applicatie aan de voorkant (gebruikersinterface) en de structuur van de code aan de achterkant.

## Bronbestanden

Alle bronbestanden zijn aanwezig in de projectstructuur en kunnen worden geopend via een editor of in de browser.
