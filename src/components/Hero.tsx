import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-tech-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Bereich (falls verfügbar) */}
          <div className="mb-12">
            <div className="w-16 h-16 mx-auto mb-8 opacity-60">
              <div className="w-full h-full bg-primary rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded opacity-80"></div>
              </div>
            </div>
          </div>
          
          {/* Haupttitel - exakt wie auf der originalen Website */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-primary">Computer</span>
            <span className="text-accent">hilfe</span>
            <br />
            <span className="text-primary">Castrop-</span>
            <span className="text-accent">Rauxel</span>
          </h1>
          
          {/* Untertitel */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ihr zuverlässiger Partner für IT-Dienstleistungen in<br />
            Castrop-Rauxel, Dortmund, Bochum und Umgebung.<br />
            Professionelle Beratung, Handel und Service für<br />
            Privathaushalte.
          </p>
          
          {/* Call-to-Action Buttons - genau wie im Original */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg rounded-lg shadow-soft"
              onClick={() => window.open('tel:+4923054459886')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/30 bg-background/60 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 text-lg rounded-lg backdrop-blur-sm"
              onClick={() => window.open('mailto:service@neuhaus-it.de')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Kontakt aufnehmen
            </Button>
          </div>
          
          {/* Location und USP Info - genau wie im Original */}
          <div className="text-center text-muted-foreground space-y-4">
            <p className="text-sm opacity-60">
              📍 Castrop-Rauxel, Dortmund, Bochum & Umgebung
            </p>
            <p className="text-sm font-medium">
              Schnell • Zuverlässig • Kompetent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;