"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

const categories = [
  { name: 'Groente & Fruit', value: 'groente-fruit' },
  { name: 'Vlees & Vis', value: 'vlees-vis' },
  { name: 'Zuivel & Eieren', value: 'zuivel-eieren' },
  { name: 'Brood & Banket', value: 'brood-banket' },
  { name: 'Dranken', value: 'dranken' },
  { name: 'Diepvries', value: 'diepvries' },
]

const brands = [
  { name: 'Eigen Merk', value: 'eigen-merk' },
  { name: 'Campina', value: 'campina' },
  { name: 'Unilever', value: 'unilever' },
  { name: 'Coca-Cola', value: 'coca-cola' },
  { name: 'Nestlé', value: 'nestle' },
]

export default function ProductFilters({ activeCategory }: { activeCategory?: string }) {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categorieën</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link 
              key={category.value}
              href={`/producten?categorie=${category.value}`}
              className={cn(
                "block py-1 hover:text-primary transition-colors",
                activeCategory === category.value ? "text-primary font-medium" : "text-foreground"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <Accordion type="multiple" defaultValue={["price", "brands"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Prijs</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div>
                  <Label htmlFor="price-min">Van</Label>
                  <div className="flex items-center mt-1">
                    <span className="mr-1">€</span>
                    <Input
                      id="price-min"
                      type="number"
                      placeholder="0"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="price-max">Tot</Label>
                  <div className="flex items-center mt-1">
                    <span className="mr-1">€</span>
                    <Input
                      id="price-max"
                      type="number"
                      placeholder="100"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  const params = new URLSearchParams()
                  if (activeCategory) params.set('categorie', activeCategory)
                  if (priceRange.min) params.set('min', priceRange.min)
                  if (priceRange.max) params.set('max', priceRange.max)
                  router.push(`/producten?${params.toString()}`)
                }}
              >
                Toepassen
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brands">
          <AccordionTrigger>Merken</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.value} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand.value}`} />
                  <Label htmlFor={`brand-${brand.value}`} className="text-sm font-normal cursor-pointer">
                    {brand.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="discount">
          <AccordionTrigger>Aanbiedingen</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="discount-only" />
                <Label htmlFor="discount-only" className="text-sm font-normal cursor-pointer">
                  Alleen aanbiedingen
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
