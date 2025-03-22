export interface Product {
  id: number
  name: string
  description: string
  price: number
  stock: number
}

const products: Product[] = [
  { id: 1, name: "Product 1", description: "Description for product 1", price: 10.0, stock: 100 },
  { id: 2, name: "Product 2", description: "Description for product 2", price: 20.0, stock: 50 },
]

export default products

