export interface Order {
  id: number
  productId: number
  quantity: number
  total: number
  status: string
}

const orders: Order[] = [
  { id: 1, productId: 1, quantity: 2, total: 20.0, status: "Pending" },
  { id: 2, productId: 2, quantity: 1, total: 20.0, status: "Shipped" },
]

export default orders

