import { Helmet } from "react-helmet";
import { Download } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";
import SubpageHero from "@/components/SubpageHero";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const KundenZahnarztAmMarkt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zahnarzt am Markt – Kundenbereich | Neuhaus-IT</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <BackToHomeButton />

      <SubpageHero
        title="Zahnarzt am Markt"
        description="Kundenbereich – Software-Download"
        showActionButton={false}
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">NinjaOne Agent</h2>
            <p className="text-muted-foreground mb-6">
              Bitte laden Sie den NinjaOne Agent herunter und führen Sie die Installation aus.
            </p>
            <Button variant="action" size="lg" asChild>
              <a href="https://eu.ninjarmm.com/agent/installer/bf4ddef4-3e4f-4f0d-87dc-a090d02508e7/12.0.6844/NinjaOne-Agent-ZahnarztamMarkt-Hauptsitz-WINDOWSSERVER-x86-64.msi">
                <Download className="h-5 w-5" />
                Agent herunterladen
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KundenZahnarztAmMarkt;
