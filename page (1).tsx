import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react'
import { getProductById } from '@/lib/products'

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const product = getProductById(params.id)
  
  if (!product) {
    return {
      title: 'Product niet gevonden | Commodum Copia',
    }
  }
  
  return {
    title: `${product.name} | Commodum Copia`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }
  
  return (
    <div>
      <Link href="/producten" className="flex items-center text-muted-foreground mb-6 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Terug naar producten
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden">
          <Image 
            src="/placeholder.svg?height=600&width=600" 
            alt={product.name} 
            width={600} 
            height={600} 
            className="w-full object-contain aspect-square"
          />
        </div>
        
        <div>
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <p className="text-2xl font-bold">€{product.price.toFixed(2)}</p>
              {product.oldPrice && (
                <p className="ml-2 text-muted-foreground line-through">€{product.oldPrice.toFixed(2)}</p>
              )}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Productinformatie</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <dt className="text-muted-foreground">Merk</dt>
                <dd>{product.brand}</dd>
                <dt className="text-muted-foreground">Inhoud</dt>
                <dd>{product.content}</dd>
                <dt className="text-muted-foreground">Herkomst</dt>
                <dd>{product.origin}</dd>
              </dl>
            </CardContent>
          </Card>
          
          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              In winkelwagen
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
