import { Helmet } from "react-helmet-async";
import { MessageCircle, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import BackToHomeButton from "@/components/BackToHomeButton";
import { Button } from "@/components/ui/button";
import signalQrCode from "@/assets/signal-qr-code.png";

const Signal = () => {
  const signalLink = "https://signal.me/#eu/sVufS5cPYmlv2a97wx-9sjlv4BI7zkaJyVvafvMRY9v7MZCf1oRGvJDEu28Vyk19";

  return (
    <>
      <Helmet>
        <title>Kontakt per Signal | Neuhaus-IT</title>
        <meta name="description" content="Schreiben Sie mir sicher und Ende-zu-Ende-verschlüsselt per Signal Messenger: QR-Code scannen oder Link öffnen – datenschutzfreundlich und kostenlos." />
        <link rel="canonical" href="https://neuhaus-it.de/signal" />
        <meta property="og:title" content="Kontakt per Signal | Neuhaus-IT" />
        <meta property="og:description" content="Schreiben Sie mir sicher und Ende-zu-Ende-verschlüsselt per Signal Messenger: QR-Code scannen oder Link öffnen – datenschutzfreundlich und kostenlos." />
        <meta property="og:url" content="https://neuhaus-it.de/signal" />
      </Helmet>
      
      <BackToHomeButton />
      
      <main>
        {/* Hero Section mit QR-Code */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Signal Kontakt
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Kontaktieren Sie mich sicher und datenschutzfreundlich über Signal Messenger.
            </p>
            
            {/* QR-Code prominent */}
            <div className="flex justify-center mb-8">
              <img 
                src={signalQrCode} 
                alt="Signal QR-Code für NeuhausIT.42" 
                className="max-w-80 rounded-2xl shadow-lg"
              />
            </div>
            
            <p className="text-muted-foreground mb-6">
              Scannen Sie den QR-Code mit Ihrem Smartphone oder klicken Sie auf den Button:
            </p>
            
            {/* Signal Link Button */}
            <Button 
              variant="action" 
              size="lg"
              onClick={() => window.open(signalLink, '_blank')}
              className="gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Signal-Link öffnen
            </Button>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Warum Signal?</h2>
              <p className="text-muted-foreground">
                Signal ist ein sicherer, verschlüsselter Messenger, der Ihre Privatsphäre schützt. 
                Alle Nachrichten sind Ende-zu-Ende verschlüsselt – niemand außer Ihnen und mir kann sie lesen.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Signal;