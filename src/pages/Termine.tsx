import { Helmet } from "react-helmet";
import BackToHomeButton from "@/components/BackToHomeButton";
import SubpageHero from "@/components/SubpageHero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Termine = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termine - Neuhaus-IT",
    "description": "Vereinbaren Sie einen Termin für IT-Beratung und Computerhilfe in Duisburg und Umgebung.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Termine - IT-Beratung vereinbaren | Neuhaus-IT</title>
        <meta
          name="description"
          content="Vereinbaren Sie einen Termin für professionelle IT-Beratung und Computerhilfe in Duisburg und Umgebung. Flexible Terminbuchung für Unternehmen und Privatkunden."
        />
        <meta
          name="keywords"
          content="IT Termin, Beratungstermin, Computerhilfe Termin, IT Service Duisburg, Terminbuchung"
        />
        <link rel="canonical" href="https://neuhaus-it.de/termine" />
        <meta property="og:title" content="Termine - IT-Beratung vereinbaren | Neuhaus-IT" />
        <meta
          property="og:description"
          content="Vereinbaren Sie einen Termin für professionelle IT-Beratung und Computerhilfe in Duisburg und Umgebung."
        />
        <meta property="og:url" content="https://neuhaus-it.de/termine" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <BackToHomeButton />
      
      <SubpageHero
        title="Termine"
        description="Vereinbaren Sie einen Termin für Ihre IT-Anliegen"
        icon={<Calendar className="h-12 w-12 text-primary" />}
      />

      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Buchen Sie Ihren Termin</h2>
            <p className="text-lg text-muted-foreground">
              Wir bieten flexible Terminmöglichkeiten für Ihre IT-Beratung und Computerhilfe.
              Wählen Sie aus verschiedenen Optionen: Telefonberatung, Vor-Ort-Service oder
              Bürobesuch.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Jetzt Termin buchen</h3>
              <p className="text-muted-foreground">
                Klicken Sie auf den Button unten, um zur Terminbuchung zu gelangen und einen
                passenden Termin auszuwählen.
              </p>
            </div>

            <Link to="/terminbuchungen">
              <Button size="lg" className="gap-2">
                Zur Terminbuchung
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="space-y-2">
              <h4 className="font-semibold">Telefonberatung</h4>
              <p className="text-sm text-muted-foreground">
                Schnelle Hilfe per Telefon für dringende Fragen
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Vor-Ort-Service</h4>
              <p className="text-sm text-muted-foreground">
                Persönlicher Service bei Ihnen vor Ort
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Bürobesuch</h4>
              <p className="text-sm text-muted-foreground">
                Besuchen Sie uns in unserem Büro in Duisburg
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Termine;
