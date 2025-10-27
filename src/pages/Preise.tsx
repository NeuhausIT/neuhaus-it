import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Euro } from "lucide-react";
import { Link } from "react-router-dom";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const Preise = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT-Beratung & Service Preise Neuhaus-IT",
    "description": "Transparente IT-Service Preise - Ab 40€/30min, faire Abrechnung ohne versteckte Kosten",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neuhaus-IT",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Erinstr. 7",
        "addressLocality": "Castrop-Rauxel",
        "postalCode": "44575",
        "addressCountry": "DE"
      },
      "telephone": "+49-2305-4499699"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.5432",
        "longitude": "7.3113"
      },
      "geoRadius": "50000"
    },
    "offers": {
      "@type": "Offer",
      "name": "IT-Beratung erste 30 Minuten",
      "price": "40",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "40",
        "priceCurrency": "EUR",
        "unitText": "30 Minuten"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Preise IT-Beratung & Service - Neuhaus-IT</title>
        <meta 
          name="description" 
          content="Transparente IT-Service Preise ✓ Ab 40€/30min ✓ Faire Abrechnung ✓ Keine versteckten Kosten ✓ IT-Beratung Castrop-Rauxel" 
        />
        <meta name="keywords" content="IT-Service Preise, IT-Beratung Kosten, Computerhilfe Preise Castrop-Rauxel, IT-Support Abrechnung" />
        <link rel="canonical" href="https://neuhaus-it.de/preise" />
        <meta property="og:title" content="Preise IT-Beratung & Service - Neuhaus-IT" />
        <meta property="og:description" content="Transparente IT-Service Preise ✓ Ab 40€/30min ✓ Faire Abrechnung ✓ Keine versteckten Kosten" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuhaus-it.de/preise" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <BackToHomeButton />
      
      <SubpageHero 
        title="Preise für IT-Beratung & -Service" 
        description="Transparente Abrechnung ohne versteckte Kosten" 
        icon={<Euro className="h-16 w-16 text-primary" />} 
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
              Faire Preisstruktur
            </h2>
            
            <div className="max-w-2xl mx-auto mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Stundenpreise</CardTitle>
                  <CardDescription>
                    Transparente Abrechnung nach tatsächlichem Zeitaufwand
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

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Service-Optionen</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <strong>Vor-Ort-Service:</strong> Persönliche Betreuung bei Ihnen zu Hause oder im Büro
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <strong>Remote-Support:</strong> Schnelle Hilfe per Fernwartung ohne Anfahrt
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <strong>Telefonberatung:</strong> Erste 30 Minuten kostenfrei für neue Kunden
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                  <div>
                    <strong>Büro-Termine:</strong> Besuchen Sie mich in Castrop-Rauxel
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-muted/50 rounded-lg p-8" aria-labelledby="cta-heading">
            <h3 id="cta-heading" className="text-xl font-bold text-foreground mb-4">
              Jetzt Termin buchen
            </h3>
            <p className="text-muted-foreground mb-6">
              Kontaktieren Sie mich für Ihre kostenlose Erstberatung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ActionButtonMenu size="lg" />
              <Button variant="outline" size="lg" asChild>
                <Link to="/terminbuchungen">Zur Terminbuchung</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Preise;
