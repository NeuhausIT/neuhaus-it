import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              <span className="text-primary">Computerhilfe</span>{" "}
              <span className="text-accent">Castrop-Rauxel</span>
            </h1>
            <p className="text-xs text-muted-foreground">Inh. Till Neuhaus</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Über mich
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Leistungen
          </a>
          <a href="/terminbuchungen-preise" className="text-foreground hover:text-primary transition-colors">
            Terminbuchungen & Preise
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </nav>

        <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Termin buchen
        </Button>
      </div>
    </header>
  );
};

export default Header;