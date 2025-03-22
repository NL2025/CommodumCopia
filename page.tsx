import type { Metadata } from "next"
import orders from "@/data/orders"

export const metadata: Metadata = {
  title: "الطلبات | Commodum Copia",
  description: "عرض وإدارة طلباتك",
}

export default function Orders() {
  return (
    <main>
      <h2>الطلبات</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>رقم الطلب: {order.id}</p>
            <p>رقم المنتج: {order.productId}</p>
            <p>الكمية: {order.quantity}</p>
            <p>المجموع: ${order.total}</p>
            <p>الحالة: {order.status}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

