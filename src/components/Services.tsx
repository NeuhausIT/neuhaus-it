import { Card } from "@/components/ui/card";
import { 
  Search, 
  Lightbulb, 
  Settings, 
  ShoppingCart, 
  Wrench, 
  Shield,
  Headphones,
  AlertTriangle,
  Globe,
  Cloud
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Analyse & Dokumentation",
      description: "Gründliche Analyse Ihrer IT-Infrastruktur und Identifizierung von Verbesserungspotentialen"
    },
    {
      icon: Lightbulb,
      title: "IT-Beratung",
      description: "Professionelle Beratung für maßgeschneiderte IT-Lösungen nach Ihren individuellen Anforderungen"
    },
    {
      icon: Settings,
      title: "IT-Projektmanagement",
      description: "Komplette Projektplanung von der Bedarfsermittlung bis zur erfolgreichen Inbetriebnahme"
    },
    {
      icon: ShoppingCart,
      title: "Beschaffung",
      description: "Anbieterunabhängige Beschaffung von Hardware und Software, auch refurbished Systeme"
    },
    {
      icon: Wrench,
      title: "Installation & Service",
      description: "Professionelle Installation und Wartung Ihrer IT-Systeme mit minimalen Ausfallzeiten"
    },
    {
      icon: Shield,
      title: "Managed Service",
      description: "Rundum-Sorglos-Pakete für Firmenkunden mit proaktiver Systemüberwachung"
    },
    {
      icon: Headphones,
      title: "IT-Support & Helpdesk",
      description: "Schneller und kompetenter Support für Sie und Ihre Mitarbeitenden"
    },
    {
      icon: AlertTriangle,
      title: "Notfall-Hilfe",
      description: "Kurzfristige Verfügbarkeit bei Störungen - schnelle Problemlösung garantiert"
    },
    {
      icon: Globe,
      title: "Webdesign & Apps",
      description: "Professionelle Webdesigns und App-Entwicklungen mit externen Kooperationspartnern"
    },
    {
      icon: Cloud,
      title: "Cloud-Dienste",
      description: "Planung, Umsetzung und Wartung von Cloud-Lösungen für moderne Arbeitsplätze"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meine Dienstleistungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein umfassendes Leistungsspektrum für Ihre erfolgreiche Digitalisierung - 
              von der Beratung bis zum kompletten Managed Service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 bg-card/70 backdrop-blur-sm hover:shadow-soft transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-accent rounded-full">
              <Shield className="h-5 w-5 text-accent-foreground mr-2" />
              <span className="text-accent-foreground font-medium">
                Informationssicherheit und Datenschutz haben höchste Priorität
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;