import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Home, Monitor } from "lucide-react";
const Booking = () => {
  return <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terminbuchungen & Preise
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible Beratungsoptionen für Ihre individuellen Bedürfnisse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Meine Angebote</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      Kostenlose telefonische Erstberatung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Unverbindliche Beratung zu Ihren IT-Fragen am Telefon
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-primary" />
                      Persönlicher Termin bei Ihnen vor Ort
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Direkter Service bei Ihnen zu Hause oder in Ihrem Büro</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      Persönlicher Termin bei Neuhaus-IT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Besuchen Sie mich in meinem Büro (Erinstr. 7, 44575 Castrop-Rauxel)</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-primary" />
                      Unterstützung per Telefon und/ oder Fernwartung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Schnelle Hilfe per Remote-Zugriff oder telefonischer Anleitung
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Preisstruktur</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Transparente Abrechnung</CardTitle>
                  <CardDescription>
                    Faire Preise ohne versteckte Kosten
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold text-foreground">Erste 30 Minuten voll</div>
                    <div className="text-2xl font-bold text-primary">40,- €</div>
                  </div>
                  
                  <div className="border-l-4 border-muted pl-4">
                    <div className="font-semibold text-foreground">Danach je angebrochene 15 Minuten</div>
                    <div className="text-xl font-bold text-foreground">20,- €</div>
                  </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold text-foreground mb-3">Reisekosten</h3>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="text-muted-foreground text-left flex-1">Bis 15 km Radius:</span>
                          <span className="font-semibold text-right">pauschal 30,- €</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground text-left flex-1">Ab 15 km Radius:</span>
                          <span className="font-semibold text-right">1,- € je Kilometer (Hin- und Rückfahrt)</span>
                        </div>
                      </div>
                    </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground italic text-center">
                      Alle Preise netto zzgl. gesetzlicher Umsatzsteuer
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Bereit für eine Beratung?
              </h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie uns für Ihre kostenlose Erstberatung oder vereinbaren Sie einen Termin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </Button>
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-4 w-4" />
                  Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Booking;