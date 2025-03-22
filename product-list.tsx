"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { ShoppingCart, Heart } from 'lucide-react'
import { getProducts } from '@/lib/products'

export default function ProductList({ category }: { category?: string }) {
  const [sortOrder, setSortOrder] = useState("recommended")
  const products = getProducts(category)
  
  // Sort products based on selected order
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        // For "recommended", we'll use the default order
        return 0
    }
  })
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">{products.length} producten</p>
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sorteren op" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Aanbevolen</SelectItem>
            <SelectItem value="price-low">Prijs (laag-hoog)</SelectItem>
            <SelectItem value="price-high">Prijs (hoog-laag)</SelectItem>
            <SelectItem value="name">Naam (A-Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <Link href={`/producten/${product.id}`} className="block">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <Image 
                  src="/placeholder.svg?height=300&width=300" 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {product.discount && (
                  <Badge className="absolute top-2 left-2 bg-destructive">
                    {product.discount}% korting
                  </Badge>
                )}
              </div>
            </Link>
            <CardContent className="p-4">
              <Link href={`/producten/${product.id}`} className="block">
                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{product.content}</p>
                <div className="mt-2 flex items-center">
                  <span className="font-bold">€{product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      €{product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </Link>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button variant="default" size="sm" className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Toevoegen
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
