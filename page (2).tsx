import { Metadata } from 'next'
import ProductList from '@/components/product-list'
import ProductFilters from '@/components/product-filters'

export const metadata: Metadata = {
  title: 'Producten | Commodum Copia',
  description: 'Bekijk ons uitgebreide assortiment aan producten',
}

export default function ProductsPage({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  // In a real app, we would use these params to filter products
  const category = typeof searchParams.categorie === 'string' ? searchParams.categorie : undefined
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-64 shrink-0">
        <ProductFilters activeCategory={category} />
      </aside>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Producten</h1>
        {category && (
          <p className="mb-4 text-muted-foreground">
            Categorie: <span className="font-medium text-foreground capitalize">{category.replace(/-/g, ' ')}</span>
          </p>
        )}
        <ProductList category={category} />
      </div>
    </div>
  )
}
