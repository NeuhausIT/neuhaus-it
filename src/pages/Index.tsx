import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Neuhaus-IT</h1>
          <p className="text-xl text-muted-foreground">Inh. Till Neuhaus</p>
          <p className="text-lg mt-4">IT-Beratung & IT-Service seit 2017</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Für Privathaushalte</h2>
            <p className="text-muted-foreground mb-6">
              Computerhilfe und IT-Support für Privatpersonen und Haushalte im Raum Castrop-Rauxel.
            </p>
            <Button 
              className="w-full"
              onClick={() => window.open('https://computerhilfe-castrop-rauxel.de', '_blank')}
            >
              Zu Computerhilfe-Castrop-Rauxel.de
            </Button>
          </Card>

          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Für Unternehmen</h2>
            <p className="text-muted-foreground mb-6">
              IT-Service, Beratung und Managed Services für Unternehmen und Institutionen.
            </p>
            <Button 
              className="w-full"
              onClick={() => window.open('https://it-service-castrop-rauxel.de', '_blank')}
            >
              Zu IT-Service-Castrop-Rauxel.de
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Über Till Neuhaus</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seit 2017 unterstütze ich als Unternehmer kleine und mittlere Unternehmen bei der 
            digitalen Transformation mit einem besonderen Fokus auf freie Software und digitale Souveränität.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
