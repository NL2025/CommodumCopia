export interface Product {
  id: string
  name: string
  description: string
  price: number
  oldPrice?: number
  discount?: number
  category: string
  brand: string
  content: string
  origin: string
  inStock: boolean
}

// Sample product data
const productData: Product[] = [
  {
    id: '1',
    name: 'Biologische Bananen',
    description: 'Heerlijke biologische bananen uit Ecuador. Perfect als gezonde snack of in een smoothie.',
    price: 1.99,
    category: 'Groente & Fruit',
    brand: 'Eigen Merk',
    content: '5 stuks',
    origin: 'Ecuador',
    inStock: true
  },
  {
    id: '2',
    name: 'Halfvolle Melk',
    description: 'Verse halfvolle melk van Nederlandse koeien. Rijk aan calcium en vitamine D.',
    price: 1.29,
    category: 'Zuivel & Eieren',
    brand: 'Campina',
    content: '1 liter',
    origin: 'Nederland',
    inStock: true
  },
  {
    id: '3',
    name: 'Volkoren Brood',
    description: 'Vers gebakken volkoren brood. Rijk aan vezels en voedzame ingrediënten.',
    price: 2.49,
    category: 'Brood & Banket',
    brand: 'Eigen Merk',
    content: '800g',
    origin: 'Nederland',
    inStock: true
  },
  {
    id: '4',
    name: 'Kipfilet',
    description: 'Malse kipfilet van kippen met 1 ster Beter Leven keurmerk.',
    price: 6.99,
    oldPrice: 8.49,
    discount: 15,
    category: 'Vlees & Vis',
    brand: 'Eigen Merk',
    content: '500g',
    origin: 'Nederland',
    inStock: true
  },
  {
    id: '5',
    name: 'Coca-Cola Zero',
    description: 'Verfrissende cola zonder suiker.',
    price: 1.89,
    category: 'Dranken',
    brand: 'Coca-Cola',
    content: '1.5 liter',
    origin: 'België',
    inStock: true
  },
  {
    id: '6',
    name: 'Diepvries Pizza Margherita',
    description: 'Authentieke Italiaanse pizza met tomatensaus en mozzarella.',
    price: 3.49,
    oldPrice: 4.29,
    discount: 20,
    category: 'Diepvries',
    brand: 'Dr. Oetker',
    content: '350g',
    origin: 'Duitsland',
    inStock: true
  },
  {
    id: '7',
    name: 'Aardbeien',
    description: 'Zoete, sappige aardbeien. Perfect als snack of in desserts.',
    price: 3.99,
    category: 'Groente & Fruit',
    brand: 'Eigen Merk',
    content: '400g',
    origin: 'Nederland',
    inStock: true
  },
  {
    id: '8',
    name: 'Griekse Yoghurt',
    description: 'Romige, volle Griekse yoghurt. Lekker met honing en noten.',
    price: 2.29,
    category: 'Zuivel & Eieren',
    brand: 'Campina',
    content: '500g',
    origin: 'Nederland',
    inStock: true
  }
];

// Get all products, optionally filtered by category
export function getProducts(category?: string): Product[] {
  if (!category) return productData;
  
  return productData.filter(
    product => product.category.toLowerCase().replace(/\s+/g, '-') === category
  );
}

// Get a single product by ID
export function getProductById(id: string): Product | undefined {
  return productData.find(product => product.id === id);
}
