import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ShoppingCart, Truck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commodum Copia | Home',
  description: 'Welkom bij Commodum Copia - Uw online supermarkt voor verse producten en dagelijkse boodschappen',
}

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10" />
        <Image 
          src="/placeholder.svg?height=500&width=1200" 
          alt="Verse producten" 
          width={1200} 
          height={500} 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welkom bij Commodum Copia</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Uw online supermarkt voor verse producten en dagelijkse boodschappen</p>
          <div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/producten">
                Bekijk onze producten <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Waarom Commodum Copia?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ruim Assortiment</h3>
              <p className="text-muted-foreground">Meer dan 10.000 producten om uit te kiezen, van verse groenten tot huishoudelijke artikelen.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Snelle Bezorging</h3>
              <p className="text-muted-foreground">Bezorging op dezelfde dag mogelijk bij bestellingen vóór 12:00 uur.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tijdsloten Kiezen</h3>
              <p className="text-muted-foreground">Kies zelf wanneer uw boodschappen worden bezorgd, met tijdsloten van 1 uur.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Categorieën</h2>
          <Button asChild variant="outline">
            <Link href="/producten">
              Alle categorieën <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Groente & Fruit', 'Vlees & Vis', 'Zuivel & Eieren', 'Brood & Banket'].map((category) => (
            <Link href={`/producten?categorie=${category.toLowerCase().replace(/\s+/g, '-')}`} key={category} className="group">
              <div className="bg-muted rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src="/placeholder.svg?height=300&width=300" 
                    alt={category} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{category}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
