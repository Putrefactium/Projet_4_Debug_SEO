const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nina Carducci - Photographe",
  "image": "./assets/images/nina.jpg",
  "description": "Photographe professionnelle à Bordeaux, spécialisée dans les portraits, mariages, concerts et événements d'entreprise. Services de shooting photo et retouches.",
  "@id": "https://nina-carducci.github.io",
  "url": "https://nina-carducci.github.io",
  "priceRange": "€€",
  "telephone": "+33556677889", 
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33556677889", 
    "contactType": "customer service",
    "availableLanguage": ["French"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "68 avenue Alsace Lorraine",
    "addressLocality": "Bordeaux",
    "postalCode": "33200",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "44.8378",
    "longitude": "-0.5792"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.instagram.com/ninacarducci.photo/?hl=fr"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Shooting photo",
      "price": "350",
      "priceCurrency": "EUR",
      "description": "Shooting photo demi-journée, matériel et déplacement inclus, déplacement possible en Île-de-France"
    },
    {
      "@type": "Offer",
      "name": "Retouches photo",
      "price": "50",
      "priceCurrency": "EUR",
      "description": "Retouches photo professionnelle, 2 allers-retours par photoinclus"
    },
    {
      "@type": "Offer",
      "name": "Album photos",
      "price": "400",
      "priceCurrency": "EUR",
      "description": "Album photo A4 personnalisé, 30 pages recto/verso"
    }
  ]
};

// Crée et injecte la balise script avec les données structurées
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script); 