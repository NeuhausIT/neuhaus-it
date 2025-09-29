import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
              <span className="text-accent-foreground font-medium">
                IT-Beratung & IT-Service seit 2017
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-snug">
              Digitalisierung für
              <span className="text-primary block">kleine und mittlere Unternehmen</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Als Ihr IT-Systempartner aus Castrop-Rauxel unterstütze ich Sie mit verständlicher Beratung 
              und exzellentem Service bei der digitalen Transformation Ihres Unternehmens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Mehr erfahren
              </Button>
            </div>
          </div>

          {/* Two Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-strong transition-all duration-300 group flex">
              <div className="text-center flex flex-col justify-between w-full">
                <div>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Für Privathaushalte
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Computerhilfe und IT-Support für Privatpersonen und Haushalte im Raum Castrop-Rauxel.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://computerhilfe-castrop-rauxel.de', '_blank')}
                >
                  Zu Computerhilfe-Castrop-Rauxel.de
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:shadow-strong transition-all duration-300 group flex">
              <div className="text-center flex flex-col justify-between w-full">
                <div>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Für Unternehmen
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    IT-Service, Beratung und Managed Services für Unternehmen und Institutionen.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://it-service-castrop-rauxel.de', '_blank')}
                >
                  Zu IT-Service-Castrop-Rauxel.de
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;