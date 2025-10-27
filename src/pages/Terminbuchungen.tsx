import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Home, Monitor, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const Terminbuchungen = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT-Beratung Terminbuchung Neuhaus-IT",
    "description": "Buchen Sie Ihren IT-Beratungstermin - Kostenlose Erstberatung, Vor-Ort Service und Remote-Support",
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
      "name": "Kostenlose telefonische Erstberatung",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terminbuchung IT-Beratung - Neuhaus-IT</title>
        <meta 
          name="description" 
          content="Buchen Sie Ihren IT-Beratungstermin ✓ Kostenlose Erstberatung ✓ Vor-Ort & Remote-Service ✓ Flexible Terminvergabe in Castrop-Rauxel" 
        />
        <meta name="keywords" content="IT-Beratung Terminbuchung, IT-Support Termin, Computerhilfe Castrop-Rauxel, IT-Service buchen" />
        <link rel="canonical" href="https://neuhaus-it.de/terminbuchungen" />
        <meta property="og:title" content="Terminbuchung IT-Beratung - Neuhaus-IT" />
        <meta property="og:description" content="Buchen Sie Ihren IT-Beratungstermin ✓ Kostenlose Erstberatung ✓ Vor-Ort & Remote-Service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuhaus-it.de/terminbuchungen" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <BackToHomeButton />
      
      <SubpageHero 
        title="Terminbuchungen für IT-Beratung & -Service" 
        description="Flexible Beratungsoptionen für Ihre individuellen Bedürfnisse" 
        icon={<Calendar className="h-16 w-16 text-primary" />} 
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section aria-labelledby="booking-heading">
            <h2 id="booking-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
              Wählen Sie Ihre bevorzugte Beratungsform
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
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

              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => window.open('https://cloud.neuhaus-it.de/apps/appointments/pub/B19Dt7NrqtD5ttQM/form', '_blank')}
              >
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

          <section className="text-center bg-muted/50 rounded-lg p-8 mb-8" aria-labelledby="cta-heading">
            <h3 id="cta-heading" className="text-xl font-bold text-foreground mb-4">
              Bereit für eine Beratung?
            </h3>
            <p className="text-muted-foreground mb-6">
              Kontaktieren Sie mich für Ihre kostenlose Erstberatung oder vereinbaren Sie einen Termin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ActionButtonMenu size="lg" />
              <Button variant="outline" size="lg" asChild>
                <Link to="/preise">Preise ansehen</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terminbuchungen;
