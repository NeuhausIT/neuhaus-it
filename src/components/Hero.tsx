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
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Bereich (falls verfügbar) */}
          
          
          {/* Haupttitel */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent" style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
          }}>
            Neuhaus-IT
          </h1>
          
          {/* Untertitel */}
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Inh. Till Neuhaus<br />
            Ihr Systempartner für Unternehmen und Privathaushalte aus Castrop-Rauxel und Umgebung seit 2017 – persönlich, schnell, zuverlässig und kompetent.
          </p>
          
          {/* Tochterprojekte - prominent verlinkt */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/90 transition-all">
              <h3 className="text-xl font-semibold mb-3">Für Unternehmen</h3>
              <p className="text-muted-foreground mb-4">Professionelle IT-Lösungen für lokale Kleinunternehmen und Institutionen</p>
              <Button variant="destructive" className="w-full">
                In Kürze mehr
              </Button>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/90 transition-all">
              <h3 className="text-xl font-semibold mb-3">Für Privatkunden</h3>
              <p className="text-muted-foreground mb-4">Individuelle Computerhilfe und Support für Privathaushalte</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://computerhilfe-castrop-rauxel.de', '_blank')}>
                Computerhilfe-Castrop-Rauxel.de
              </Button>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/90 transition-all">
              <h3 className="text-xl font-semibold mb-3">Künstliche Intelligenz</h3>
              <p className="text-muted-foreground mb-4">Webinare, Workshops, Schulungen & Entwicklung von KI-Lösungen</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://ki-castrop-rauxel.de', '_blank')}>
                KI-Castrop-Rauxel.de
              </Button>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <ActionButtonMenu size="lg" className="px-8 py-3 text-lg rounded-lg" />
            
          </div>
          
          {/* Location und USP Info - genau wie im Original */}
          
        </div>
      </div>
    </section>;
};
export default Hero;