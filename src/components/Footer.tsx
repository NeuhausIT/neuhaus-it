import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Neuhaus-IT</h3>
                  <p className="text-sm text-muted-foreground">Inh. Till Neuhaus</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Experte für die Digitalisierung von kleinen und mittleren Unternehmen 
                mit Fokus auf freie Software und digitale Souveränität.
              </p>
              
              {/* Servicegebiete */}
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Servicegebiete</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Castrop-Rauxel, Dortmund, Bochum, Herne, Recklinghausen, Waltrop, 
                  Herten, Oer-Erkenschwick, Datteln, Lünen, Schwerte, Witten, Hattingen, 
                  Gelsenkirchen, Essen und Umgebung
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Seiten</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Startseite
                  </a>
                </li>
                <li>
                  <a href="/leitbild" className="text-muted-foreground hover:text-primary transition-colors">
                    Leitbild
                  </a>
                </li>
                <li>
                  <a href="/managed-nodes" className="text-muted-foreground hover:text-primary transition-colors">
                    Managed Nodes
                  </a>
                </li>
                <li>
                  <a href="/fernwartung" className="text-muted-foreground hover:text-primary transition-colors">
                    Fernwartung
                  </a>
                </li>
                <li>
                  <a href="/terminbuchungen" className="text-muted-foreground hover:text-primary transition-colors">
                    Terminbuchung
                  </a>
                </li>
                <li>
                  <a href="/preise" className="text-muted-foreground hover:text-primary transition-colors">
                    Preise
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt, Impressum & Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Meine Angebote</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://computerhilfe-castrop-rauxel.de" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Computerhilfe für Privat
                  </a>
                </li>
                <li>
                  <a href="https://it-service-castrop-rauxel.de" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    IT-Service für Unternehmen
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>CC BY-NC-SA 4.0 or later by Neuhaus-IT (Inh. Till Neuhaus)</p>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;