import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-8">
              <p><strong>Neuhaus-IT</strong><br />
              Inh. Till Neuhaus<br />
              [Adresse]<br />
              [PLZ Ort]</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
            <div className="mb-8">
              <p>Telefon: +49 (0) 2305 44 59 886<br />
              E-Mail: service@neuhaus-it.de</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h3>
            <div className="mb-8">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr.]</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <div className="mb-8">
              <p>Till Neuhaus<br />
              [Adresse]<br />
              [PLZ Ort]</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Geltungsbereich</h3>
            <div className="mb-8">
              <p>Dieses Impressum gilt für folgende Websites:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>neuhaus-it.de</li>
                <li>it-service-castrop-rauxel.de</li>
                <li>computerhilfe-castrop-rauxel.de</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Haftung für Inhalte</h3>
            <div className="mb-8">
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Haftung für Links</h3>
            <div className="mb-8">
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Urheberrecht</h3>
            <div className="mb-8">
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;