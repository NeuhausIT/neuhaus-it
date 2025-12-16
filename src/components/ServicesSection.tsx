import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShoppingCart, Wrench, Monitor, Shield, Settings, ArrowRight, Server } from "lucide-react";
import { Link } from "react-router-dom";
const ServicesSection = () => {
  const mainServices = [{
    icon: Lightbulb,
    title: "Beratung",
    description: "Kompetente Beratung für Ihre IT-Anschaffungen und technischen Fragen",
    features: ["Hardware-Empfehlungen", "Software-Beratung", "Netzwerk-Planung", "Sicherheitskonzepte"],
    link: "https://computerhilfe-castrop-rauxel.de/beratung"
  }, {
    icon: ShoppingCart,
    title: "Handel",
    description: "Hochwertige IT-Produkte zu fairen Preisen direkt vom Fachmann",
    features: ["Computer & Laptops", "Drucker & Scanner", "Netzwerk-Hardware", "Software-Lizenzen"],
    link: "https://computerhilfe-castrop-rauxel.de/handel"
  }, {
    icon: Wrench,
    title: "Service",
    description: "Professioneller Service und Reparaturen für all Ihre IT-Geräte",
    features: ["Computer-Reparatur", "Datenrettung", "System-Installation", "Wartung & Updates"],
    link: "https://computerhilfe-castrop-rauxel.de/service"
  }];
  const additionalServices = [{
    icon: Monitor,
    title: "PC-Einrichtung",
    description: "Komplette Einrichtung Ihres neuen Computers"
  }, {
    icon: Settings,
    title: "Netzwerk-Setup",
    description: "WLAN und Netzwerk-Konfiguration"
  }, {
    icon: Shield,
    title: "Sicherheit",
    description: "Schutz vor Viren und Malware"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Haupttitel */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meine Dienstleistungen für Sie
            </h2>
            <p className="text-xl text-muted-foreground">
              Drei Kernbereiche für Ihre komplette IT-Betreuung
            </p>
          </div>

          {/* Hauptdienstleistungen */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => <Card key={index} className="p-6 hover:shadow-strong transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          {/* Hervorgehobene Services */}
          

          {/* Weitere Services */}
          
        </div>
      </div>
    </section>;
};
export default ServicesSection;