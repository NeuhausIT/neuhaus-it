import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, FileText } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
const KontaktImpressum = () => {
  return <div className="min-h-screen bg-background">
      <SubpageHero title="Kontakt, Impressum & Datenschutz" description="Lassen Sie uns gemeinsam durchstarten! Kontaktieren Sie mich für eine unverbindliche Beratung oder vereinbaren Sie direkt einen Termin." icon={<FileText className="h-16 w-16 text-primary" />} />
      
      <BackToHomeButton />
      
      <main className="container mx-auto px-4 py-16">
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
              <h3 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h3>
              
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
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE320473148</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
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
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Haftung für Links</h4>
              <div className="mb-8">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Urheberrecht</h4>
              <div className="mb-8">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Datenschutz Sektion */}
        <section id="datenschutz">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Datenschutzerklärung</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h3>
              
              <h4 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h4>
              <div className="mb-8">
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">2. Verantwortliche Stelle</h3>
              <div className="mb-8">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p><strong>Neuhaus-IT</strong><br />
                Inh. Till Neuhaus<br />
                Gerther Str. 65<br />
                44577 Castrop-Rauxel<br />
                Telefon: +49 (0) 2305 44 59 886<br />
                E-Mail: service@neuhaus-it.de</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h3>
              
              <h4 className="text-xl font-semibold mb-3">Cookies</h4>
              <div className="mb-8">
                <p>Diese Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Server-Log-Dateien</h4>
              <div className="mb-8">
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Kontaktformular</h4>
              <div className="mb-8">
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h3>
              <div className="mb-8">
                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">5. SSL- bzw. TLS-Verschlüsselung</h3>
              <div className="mb-8">
                <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default KontaktImpressum;