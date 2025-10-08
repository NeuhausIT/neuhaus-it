import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroBackground from "@/assets/hero-tech-background.jpg";
import ActionButtonMenu from "@/components/ActionButtonMenu";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Bereich (falls verfügbar) */}
          
          
          {/* Haupttitel */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Neuhaus-IT
          </h1>
          
          {/* Untertitel */}
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experte für IT-Beratung, Handel und Service<br />
            Inh. Till Neuhaus
          </p>
          
          {/* Tochterprojekte - prominent verlinkt */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/90 transition-all">
              <h3 className="text-xl font-semibold mb-3">IT-Service-Castrop-Rauxel.de</h3>
              <p className="text-muted-foreground mb-4">Professionelle IT-Lösungen für lokale Kleinunternehmen und Institutionen</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://it-service-castrop-rauxel.de', '_blank')}>
                Für Unternehmen →
              </Button>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/90 transition-all">
              <h3 className="text-xl font-semibold mb-3">Computerhilfe-Castrop-Rauxel.de</h3>
              <p className="text-muted-foreground mb-4">Individuelle Computerhilfe und Support für Privathaushalte</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://computerhilfe-castrop-rauxel.de', '_blank')}>
                Für Privatkunden →
              </Button>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <ActionButtonMenu size="lg" className="px-8 py-3 text-lg rounded-lg" />
            
          </div>
          
          {/* Location und USP Info - genau wie im Original */}
          <div className="text-center text-muted-foreground space-y-4">
            <p className="text-sm opacity-80">
              📍 Castrop-Rauxel, Dortmund, Bochum & Umgebung
            </p>
            <p className="text-sm font-medium">
              Schnell • Zuverlässig • Kompetent
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;