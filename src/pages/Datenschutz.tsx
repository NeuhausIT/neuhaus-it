import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
            <div className="mb-8">
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Geltungsbereich</h3>
            <div className="mb-8">
              <p>Diese Datenschutzerklärung gilt für folgende Websites:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>neuhaus-it.de</li>
                <li>it-service-castrop-rauxel.de</li>
                <li>computerhilfe-castrop-rauxel.de</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-12">2. Verantwortliche Stelle</h2>
            <div className="mb-8">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p><strong>Neuhaus-IT</strong><br />
              Inh. Till Neuhaus<br />
              [Adresse]<br />
              [PLZ Ort]<br />
              Telefon: +49 (0) 2305 44 59 886<br />
              E-Mail: service@neuhaus-it.de</p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-12">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mb-3">Cookies</h3>
            <div className="mb-8">
              <p>Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die in Ihrem Webbrowser gespeichert werden. Sie richten keinen Schaden an und enthalten keine Viren.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Server-Log-Dateien</h3>
            <div className="mb-8">
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
            <div className="mb-8">
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-12">4. Ihre Rechte</h2>
            <div className="mb-8">
              <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-12">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <div className="mb-8">
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;