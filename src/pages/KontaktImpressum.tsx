import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Clock, MessageCircle } from "lucide-react";

const KontaktImpressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Kontakt Sektion */}
        <section id="contact" className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Kontakt & Standort
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lassen Sie uns gemeinsam durchstarten! Kontaktieren Sie mich für eine 
                unverbindliche Beratung oder vereinbaren Sie direkt einen Termin.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-8 bg-gradient-subtle">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Direkter Kontakt
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Till Neuhaus</h4>
                      <p className="text-muted-foreground mb-2">staatlich geprüfter Techniker</p>
                      <p className="text-muted-foreground text-sm italic">Bachelor Professional of Engineering</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Telefon</h4>
                          <p className="text-muted-foreground">+49 (0)2305 445988 6</p>
                          <p className="text-muted-foreground">+49 (0)162 3255518 (Mobil)</p>
                          <p className="text-muted-foreground text-sm">(auch für Signal-Messenger)</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">E-Mail</h4>
                          <p className="text-muted-foreground">hallo@neuhaus-it.de</p>
                          <p className="text-muted-foreground text-sm">(PGP/GPG verfügbar)</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Anschrift</h4>
                          <p className="text-muted-foreground">Gerther Straße 65</p>
                          <p className="text-muted-foreground">44577 Castrop-Rauxel</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mr-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      Termin online buchen
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      E-Mail schreiben
                    </Button>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Lokaler Fokus
                  </h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Servicegebiet</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Als IT-Systempartner aus Castrop-Rauxel bin ich schwerpunktmäßig im 
                        <strong> Kreis Recklinghausen</strong> sowie in den Städten 
                        <strong> Herne, Bochum und Dortmund</strong> tätig.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="p-6 text-center bg-accent/10">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Schnelle Hilfe
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Bei Notfällen und Störungen bin ich kurzfristig für Sie verfügbar.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Soforthilfe anfordern
                  </Button>
                </Card>

                <Card className="p-6 text-center bg-accent/10">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Fernwartung
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Remote-Support für Windows und Linux Systeme verfügbar.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Fernwartung starten
                  </Button>
                </Card>

                <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
                  <Calendar className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Kostenlose Erstberatung
                  </h3>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    Lernen Sie mich und meine Arbeitsweise unverbindlich kennen.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Jetzt Termin buchen
                  </Button>
                </Card>
              </div>
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
                Inh. Till Neuhaus<br />
                staatlich geprüfter Techniker<br />
                <em>Bachelor Professional of Engineering</em><br />
                Gerther Straße 65<br />
                44577 Castrop-Rauxel</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Kontakt</h4>
              <div className="mb-8">
                <p>Telefon: +49 (0) 2305 445988 6<br />
                Mobil: +49 (0) 162 3255518<br />
                E-Mail: hallo@neuhaus-it.de</p>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
              <div className="mb-8">
                <p>Till Neuhaus<br />
                Gerther Straße 65<br />
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
              <h3 className="text-2xl font-semibold mb-4">Vorwort</h3>
              <div className="mb-8">
                <p>Zum Schutz der Daten meiner Kundinnen, Kunden und Geschäftspartner:innen, erhebe ich grundsätzlich so wenige Daten wie nötig. Daten welche ich dennoch im Rahmen meiner Geschäftsprozesse erhebe, werden fast ausschließlich auf selbstgehosteten Diensten verarbeitet - dies betrifft insbesondere Adressbücher (Kontaktdaten), Terminkalender und Dateien. Ausnahme sind hier E-Mails, welche über meinen Webhostinganbieter „Uberspace" abgewickelt werden. Eine Weitergabe an unberechtigte Dritte findet nicht statt.</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Tipp: Selbstdatenschutz!</h3>
              <div className="mb-8">
                <p>Insbesondere für Privatkunden gilt: Sie bestimmen, welche Daten sie von sich preisgeben! Sie können mich beispielsweise unter einem Pseudonym kontaktieren und/ oder meine Leistungen datensparsam z.B. mit Bargeld oder Kryptowährungen begleichen. Selbstverständlich erhalten Sie in jedem Fall eine Rechnung oder Quittung mit ausgewiesener Umsatzsteuer.</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Zwecke, für welche personenbezogene Daten verarbeitet werden</h3>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2">
                  <li>Akquisition (nur bei Gewerbekunden, nicht bei Privatkunden)</li>
                  <li>Geschäftsabwicklung
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Korrespondenz (Mail, Anrufe, Chats, etc.)</li>
                      <li>Auftragsbearbeitung/ -abwicklung</li>
                      <li>Dokumentation</li>
                      <li>Buchhaltung</li>
                    </ul>
                  </li>
                  <li>Wiedervorlagen</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Rechtsgrundlage der Verarbeitung Personenbezogener Daten</h3>
              <div className="mb-8">
                <p>Die Verarbeitung personenbezogener Daten erfolgt durch:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>dokumentierte Einwilligung, oder</li>
                  <li>gesetzliche Vorschriften wie z.B. Abschluss eines Vertrages, oder</li>
                  <li>nur in Ausnahmefällen: nach Treu und Glauben gemäß Art. 5 Abs. 1 lit. a) DSGVO</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Ihre Rechte ("Betroffenenrechte")</h3>
              <div className="mb-8">
                <p>Sie haben das Recht auf Auskunft, Berichtigung und Löschung der durch mich verarbeiteten Daten, sofern sie gesetzlichen Aufbewahrungspflichten nicht zuwider laufen. Ferner haben Sie das Recht auf Vergessenwerden, das Recht auf Einschränkung oder Datenübertragbarkeit sowie Recht auf Widerspruch bei erteilten Einwilligungen.</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Beschwerderecht bei der Aufsichtsbehörde</h3>
              <div className="mb-8">
                <p>Wenn Sie als Betroffene oder Betroffener der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt, steht Ihnen das Beschwerderecht offen. Kontaktieren Sie hierzu den Landesbeauftragten oder die Landesbeauftragte des Landes Nordrhein-Westfalen.</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Datenerhebung</h3>
              
              <h4 className="text-xl font-semibold mb-3">Logging, Web Analytics, Cookies und "Social-Plugins"</h4>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2">
                  <li>Ich werte die Logdateien meiner Server ausschließlich im Fall technischer Störungen zur Ursachenforschung aus.</li>
                  <li>Eine Auswertung der Logdateien meiner Server zu sonstigen Zwecken (Statistiken, etc.) findet nicht statt.</li>
                  <li>Ich verwende ausschließlich technisch notwendige (Session-)Cookies. Third-Party Cookies oder gespeicherte Cookies werden nicht eingesetzt.</li>
                  <li>Ich verzichte auf den Einsatz von "Social-Plugins". Beim Besuch meiner Webseite werden daher keine Daten an Netzwerke wie Facebook, Twitter, Instagram, TikTok o.ä. übertragen.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Datenlöschung</h3>
              <div className="mb-8">
                <p>Sofern keine Kontaktinformationen zur Abwicklung offener Aufträge oder Wartungsverträge erforderlich sind, kann man jederzeit die Löschung der eigenen Daten bei mir beantragen. Ich werde dieser Bitte zeitnah nachkommen und die Löschung der Daten bestätigen.</p>
                <p className="mt-2">Daten welche im Rahmen der gesetzlichen Aufbewahrungspflichten für bestimmte Zeiten archiviert werden müssen (Rechnungen, etc.), sind hiervon ausgenommen.</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Datenverarbeitung durch Dritte</h3>
              
              <h4 className="text-xl font-semibold mb-3">Webhosting und Email</h4>
              <div className="mb-8">
                <p>Webhosting und Email wird durch meinen Partner Uberspace abgewickelt. Die entsprechenden Datenschutzerklärungen und technischen Schutzmaßnahmen können auf deren Website eingesehen werden.</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Änderungen und Aktualisierungen dieser Erklärung</h3>
              <div className="mb-8">
                <p>Ich arbeite sehr agil, insbesondere in Bezug auf den Einsatz von Tools (Software und Dienste). Meine Infrastruktur, Anwendungen, Dienste, Prozesse und Kontaktmöglichkeiten unterliegen daher stetigem und dynamischen Wandel. Gleiches gilt daher auch für diese Datenschutzerklärung.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KontaktImpressum;