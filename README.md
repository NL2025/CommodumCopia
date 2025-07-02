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

| Pagina           | Beschrijving                                                                 |
|------------------|------------------------------------------------------------------------------|
| index.html       | Startpagina met algemene informatie over Commodum Copia.                    |
| categorieen.html | Overzicht van alle productcategorieën met bijbehorende afbeeldingen.        |
| producten.html   | Lijst van beschikbare producten met knop naar detailpagina.                 |
| product.html     | Detailpagina van één product met knop “Toevoegen aan winkelwagen”.          |
| bestelling.html  | Winkelwagen met producten, aantallen, totaalprijs en afrekenen.             |
| inloggen.html    | Inloggen en uitloggen via localStorage.                                     |

## Functionaliteiten

- Producten worden dynamisch geladen uit products.json.  
- Winkelwagensysteem met toevoegen/verwijderen van producten en totaalberekening.  
- Inloggen en uitloggen via localStorage (autorisatie).  
- Responsieve navigatiebalk en toegankelijke opmaak met CSS.  
- Afzonderlijke JavaScript-bestanden per functie.  

## Beveiliging en privacy

- Alleen ingelogde gebruikers kunnen hun bestelling afronden.  
- Pagina `bestelling.html` is beveiligd tegen ongeautoriseerde toegang.  
- Gegevens worden opgeslagen in localStorage, zonder backend.  
- Code is gestructureerd en leesbaar met aandacht voor veiligheid.

## Vereisten uit opdracht (inzendcode: 32760FA2) die zijn geïmplementeerd


- Navigatiestructuur uitgebreid naar alle gevraagde pagina’s.  
- Bestellingensysteem en winkelwagen zijn volledig functioneel.  
- Autorisatiefunctie toegevoegd via inloggen.html.  
- Productdetails worden correct weergegeven via product.html.  
- Opdeling van JavaScript-functionaliteiten per bestand.  
- Visuele verbetering van categorieën en productoverzichten.  
- Toevoegen van beveiliging op bestelling.html zodat alleen ingelogde gebruikers toegang hebben.

## Demonstratie

Een korte demonstratievideo (maximaal 3 minuten) wordt als apart bestand bijgevoegd. Deze toont de werking van de applicatie vanbinnen en vanbuiten.

## Bronbestanden

Alle bronbestanden zijn aanwezig in de projectstructuur en kunnen worden geopend via een editor of in de browser.


## Verwerkte feedback uit opdracht 1

Tijdens opdracht 1 heb ik de volgende feedback ontvangen van de docent:

1- **Afbeeldingen op de productpagina’s werkten niet.**  
  >Ik heb het afbeeldingspad gecorrigeerd en ervoor gezorgd dat alle producten zichtbaar zijn op zowel producten.html als product.html.

2- **Geen aparte productdetailpagina.**  
  > Ik heb product.html en product.js toegevoegd die per product een detailweergave tonen.

3- **Geen autorisatie of beveiliging.**  
  > Ik heb een inlogsysteem geïmplementeerd via inloggen.html en login.js. Alleen ingelogde gebruikers kunnen een bestelling plaatsen.

4- **Structuur en navigatie incompleet.**  
  > Ik heb de navigatiestructuur uitgebreid naar alle gevraagde pagina’s en alles netjes georganiseerd in mappen.

Deze feedback is volledig verwerkt in deze opdracht.
