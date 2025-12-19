import { Helmet } from "react-helmet";
import { Download, Shield } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import Footer from "@/components/Footer";
import BackToHomeButton from "@/components/BackToHomeButton";
import { Button } from "@/components/ui/button";

const Tresor = () => {
  const downloadUrl = "https://cloud.kryptopraxis.de/index.php/s/iFTkNk9ggXLoCbW#download";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tresor - Neuhaus-IT</title>
        <meta name="description" content="Sicherer Datentresor von Neuhaus-IT - Zugriff auf verschlüsselte Dateien und Downloads." />
      </Helmet>

      <SubpageHero
        title="Tresor"
        description="Sicherer Zugriff auf Ihre Dateien"
        icon={<Shield className="w-16 h-16 text-primary" />}
        showActionButton={false}
      >
        <Button asChild size="lg" className="gap-2">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="w-5 h-5" />
            Download starten
          </a>
        </Button>
      </SubpageHero>

      <Footer />
      <BackToHomeButton />
    </div>
  );
};

export default Tresor;
