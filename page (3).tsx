import type { Metadata } from "next"
import products from "@/data/products"

export const metadata: Metadata = {
  title: "المنتجات | Commodum Copia",
  description: "تصفح منتجاتنا المتنوعة",
}

export default function Products() {
  return (
    <main>
      <h2>المنتجات</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>السعر: ${product.price}</p>
            <p>المخزون: {product.stock}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

