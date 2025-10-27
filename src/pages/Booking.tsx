import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Home, Monitor, Calendar } from "lucide-react";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
const Booking = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT-Beratung & Support Neuhaus-IT",
    "description": "Professionelle IT-Beratung und Support-Services für Privat- und Geschäftskunden",
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
    "offers": [
      {
        "@type": "Offer",
        "name": "Kostenlose telefonische Erstberatung",
        "price": "0",
        "priceCurrency": "EUR"
      },
      {
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
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terminbuchung & Preise - IT-Beratung Neuhaus-IT</title>
        <meta 
          name="description" 
          content="IT-Beratung Terminbuchung & transparente Preise ✓ Kostenlose Erstberatung ✓ Ab 40€/30min ✓ Vor-Ort & Remote-Service in Castrop-Rauxel" 
        />
        <meta name="keywords" content="IT-Beratung Terminbuchung, IT-Service Preise, Computerhilfe Castrop-Rauxel, IT-Support Kosten" />
        <link rel="canonical" href="https://neuhaus-it.de/terminbuchungen-preise" />
        <meta property="og:title" content="Terminbuchung & Preise - IT-Beratung Neuhaus-IT" />
        <meta property="og:description" content="IT-Beratung Terminbuchung & transparente Preise ✓ Kostenlose Erstberatung ✓ Ab 40€/30min ✓ Vor-Ort & Remote-Service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuhaus-it.de/terminbuchungen-preise" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <BackToHomeButton />
      
      <SubpageHero title="Terminbuchung & Preise für IT-Beratung & -Service" description="Flexible Beratungsoptionen für Ihre individuellen Bedürfnisse" icon={<Calendar className="h-16 w-16 text-primary" />} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <section aria-labelledby="booking-heading">
              <h2 id="booking-heading" className="text-2xl font-bold text-foreground mb-6 text-center">Terminbuchungen online</h2>
              <div className="space-y-4">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => window.open('https://cloud.neuhaus-it.de/apps/appointments/pub/zq9Y7Z4qtDQGrN7c/form', '_blank')}
                >
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
            </section>

            <section aria-labelledby="pricing-heading">
              <h2 id="pricing-heading" className="text-2xl font-bold text-foreground mb-6 text-center">Preisstruktur</h2>
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
            </section>
          </div>

          <section className="text-center" aria-labelledby="cta-heading">
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 id="cta-heading" className="text-xl font-bold text-foreground mb-4">
                Bereit für eine Beratung?
              </h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie mich für Ihre kostenlose Erstberatung oder vereinbaren Sie einen Termin
              </p>
              <div className="flex justify-center">
                <ActionButtonMenu size="lg" />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default Booking;