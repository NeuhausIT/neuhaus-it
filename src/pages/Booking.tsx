import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Home, Monitor, Calendar } from "lucide-react";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
const Booking = () => {
  return <div className="min-h-screen bg-background">
      <SubpageHero
        title="Terminbuchungen & Preise"
        description="Flexible Beratungsoptionen für Ihre individuellen Bedürfnisse"
        icon={<Calendar className="h-16 w-16 text-primary" />}
      >
        <ActionButtonMenu size="lg" />
      </SubpageHero>
      
      <BackToHomeButton />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Meine Angebote</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="h-7 w-7 text-primary" />
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
                      <Home className="h-7 w-7 text-primary" />
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
                      <MapPin className="h-7 w-7 text-primary" />
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
                      <Monitor className="h-7 w-7 text-primary" />
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
              <div className="flex justify-center">
                <ActionButtonMenu size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Booking;