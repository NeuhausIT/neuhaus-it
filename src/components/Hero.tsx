import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-medium">
                IT-Dienstleistungen seit 2017
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-snug">
              <span className="text-primary">Computer</span>
              <span className="text-accent">hilfe</span>{" "}
              <span className="text-primary">Castrop-</span>
              <span className="text-accent">Rauxel</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Ihr zuverlässiger Partner für IT-Dienstleistungen in Castrop-Rauxel, Dortmund, Bochum und Umgebung. 
              Professionelle Beratung, Handel und Service für Privathaushalte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Kontakt aufnehmen
              </Button>
            </div>

            <div className="text-center text-muted-foreground mb-12">
              <p className="text-sm mb-2">📍 Castrop-Rauxel, Dortmund, Bochum & Umgebung</p>
              <p className="text-sm font-medium">Schnell • Zuverlässig • Kompetent</p>
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