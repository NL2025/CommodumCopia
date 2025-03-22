import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Commodum Copia</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/producten" className="text-muted-foreground hover:text-foreground">Producten</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Aanbiedingen</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Over ons</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Klantenservice</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Veelgestelde vragen</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Bezorging</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Retourneren</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informatie</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Algemene voorwaarden</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacybeleid</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Cookiebeleid</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Supermarktstraat 123</p>
              <p>1234 AB Amsterdam</p>
              <p className="mt-2">Tel: 020-1234567</p>
              <p>Email: info@commodumcopia.nl</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">© {new Date().getFullYear()} Commodum Copia B.V. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
