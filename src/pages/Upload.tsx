import { Helmet } from "react-helmet-async";
import { Upload as UploadIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { Button } from "@/components/ui/button";
import { canonicalUrl, externalRedirects } from "@/lib/routes";

const Upload = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Dateien an Neuhaus-IT übermitteln | Neuhaus-IT</title>
      <meta name="description" content="Übermitteln Sie mir Dateien sicher über die eigene Nextcloud von Neuhaus-IT, gehostet in Deutschland. Nur Neuhaus-IT kann Ihre Dateien sehen." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={canonicalUrl("/upload")} />
      <meta property="og:title" content="Dateien an Neuhaus-IT übermitteln | Neuhaus-IT" />
      <meta property="og:description" content="Übermitteln Sie mir Dateien sicher über die eigene Nextcloud von Neuhaus-IT, gehostet in Deutschland. Nur Neuhaus-IT kann Ihre Dateien sehen." />
      <meta property="og:url" content={canonicalUrl("/upload")} />
    </Helmet>

    <BackToHomeButton />
    <main>
      <SubpageHero
        title="Dateien an Neuhaus-IT übermitteln"
        description="Übermitteln Sie mir Ihre Dateien sicher und DSGVO-konform über meine eigene Nextcloud, gehostet in Deutschland. Nur ich als Inhaber von Neuhaus-IT kann Ihre Dateien sehen."
        icon={<UploadIcon className="w-16 h-16 text-primary" />}
        showActionButton={false}
      >
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Nach dem Klick öffnet sich die Upload-Seite. Dort können Sie Ihre Dateien per Drag &amp; Drop oder über die Dateiauswahl hochladen.
          </p>
          <Button asChild variant="action" size="lg" className="gap-2 max-w-full">
            <a href={externalRedirects["/uploads"]} rel="noopener">
              <UploadIcon className="w-5 h-5 shrink-0" />
              Dateien hochladen
            </a>
          </Button>
          <p className="text-muted-foreground">
            Bei Fragen oder sehr großen Dateien melden Sie sich bitte kurz bei mir:{" "}
            <Link to="/kontakt-und-impressum" className="text-primary underline">Kontakt aufnehmen</Link>.
          </p>
        </div>
      </SubpageHero>
    </main>
    <Footer />
  </div>
);

export default Upload;