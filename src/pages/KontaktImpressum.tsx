import { useState } from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, QrCode } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import vcardQrCode from "@/assets/vcard-qr-code.svg";

const KontaktImpressum = () => {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);

  return <div className="min-h-screen bg-background">
      <BackToHomeButton />
      
      <SubpageHero title="Kontakt & Impressum" description="Lassen Sie uns gemeinsam durchstarten! Kontaktieren Sie mich für eine unverbindliche Beratung oder vereinbaren Sie direkt einen Termin." icon={<FileText className="h-16 w-16 text-primary" />} />
      
      <main className="container mx-auto px-4 py-16">
        {/* Digitale Visitenkarte Sektion */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <QrCode className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Digitale Visitenkarte</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Scannen Sie den QR-Code oder laden Sie meine Kontaktdaten direkt herunter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button 
                  onClick={() => setQrDialogOpen(true)}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-border"
                  aria-label="QR-Code vergrößern"
                >
                  <img 
                    src={vcardQrCode} 
                    alt="vCard QR-Code für Neuhaus-IT" 
                    className="w-48 h-48"
                  />
                </button>
                <div className="flex flex-col gap-4">
                  <Button asChild size="lg">
                    <a href="/vcard-neuhaus-it.vcf" download="Neuhaus-IT.vcf">
                      <Download className="mr-2 h-5 w-5" />
                      vCard herunterladen
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Klicken Sie auf den QR-Code<br />für die Vollbildansicht
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* QR-Code Vollbild Dialog */}
        <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
          <DialogContent className="max-w-lg p-8">
            <DialogTitle className="sr-only">vCard QR-Code</DialogTitle>
            <div className="flex justify-center">
              <img 
                src={vcardQrCode} 
                alt="vCard QR-Code für Neuhaus-IT" 
                className="w-full max-w-md"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Kontakt Sektion */}
        <section id="contact" className="mb-20">
          <div className="max-w-6xl mx-auto">
            

            {/* Google Maps */}
            <div className="mt-12">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Mein Standort</h3>
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.1864566554996!2d7.305588100000001!3d51.5464799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91f85fe81c465%3A0xc454d478e58407ac!2sNeuhaus-IT%20(Inh.%20Till%20Neuhaus)!5e0!3m2!1sde!2sde!4v1759911949501!5m2!1sde!2sde" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Neuhaus-IT Standort auf Google Maps" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Impressum Sektion */}
        <section id="impressum" className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Impressum</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">{"\n"}</h3>
              
              <div className="mb-8">
                <p><strong>Neuhaus-IT</strong><br />
                Inh. Till Neuhaus</p>
                
                <p className="mt-4"><strong>Unternehmenssitz (Postanschrift):</strong><br />
                Gerther Str. 65<br />
                44577 Castrop-Rauxel</p>
                
                <p className="mt-4"><strong>Geschäftsstelle (für Kundentermine):</strong><br />
                Erinstr. 7<br />
                44575 Castrop-Rauxel</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Kontakt</h4>
              <div className="mb-8">
                <p>Telefon: +49 (0) 2305 44 59 886<br />
                E-Mail: service@neuhaus-it.de</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h4>
              <div className="mb-8">
                <p>Umsatzsteuer-Identifikationsnummer:&nbsp;<br />
                DE320473148</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt</h4>
              <div className="mb-8">
                <p>Till Neuhaus<br />
                Gerther Str. 65<br />
                44577 Castrop-Rauxel</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Geltungsbereich</h4>
              <div className="mb-8">
                <p>Dieses Impressum gilt für folgende Websites:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>neuhaus-it.de</li>
                  <li>it-service-castrop-rauxel.de</li>
                  <li>computerhilfe-castrop-rauxel.de</li>
                </ul>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Haftung für Inhalte</h4>
              <div className="mb-8">
                <p>Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Haftung für Links</h4>
              <div className="mb-8">
                <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Urheberrecht</h4>
              <div className="mb-8">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>;
};
export default KontaktImpressum;