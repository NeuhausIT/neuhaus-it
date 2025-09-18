import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ihr Experte für die Digitalisierung von kleinen und mittleren Unternehmen 
                mit Fokus auf freie Software und digitale Souveränität.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Schnellzugriff</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    Über mich
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="https://cloud.neuhaus-it.de/apps/appointments/dir/7085d01d1268180a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Termin buchen
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Unsere Angebote</h4>
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
            <p>
              © 2025 Neuhaus-IT (Inh. Till Neuhaus). Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;