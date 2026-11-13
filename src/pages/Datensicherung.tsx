import { Helmet } from "react-helmet-async";
import { Calendar, Check, Database, FileX2, Globe2, HardDrive, KeyRound, MapPin, Phone, Server, ShieldCheck, ShieldOff, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { backupCheck, backupFaq, backupPackages } from "@/lib/datensicherung";

const title = "Datensicherung nach der 3-2-1-Regel für Unternehmen | Neuhaus-IT Castrop-Rauxel";
const description = "Datensicherung und Backup nach der 3-2-1-Regel für Unternehmen in Castrop-Rauxel und im Ruhrgebiet. Jetzt kostenlosen Backup-Check buchen.";

const BackupActions = () => (
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
    <Button size="lg" asChild className="h-auto min-h-12 whitespace-normal text-base py-3">
      <a href={backupCheck.bookingUrl}><Calendar className="mr-2 h-5 w-5 shrink-0" />Kostenlosen Backup-Check buchen</a>
    </Button>
    <Button variant="outline" size="lg" asChild className="min-h-12 text-base">
      <a href={`tel:${backupCheck.telephone}`}><Phone className="mr-2 h-5 w-5" />Jetzt anrufen</a>
    </Button>
  </div>
);

const scenarios = [
  { icon: HardDrive, title: "Festplatte defekt", text: "Mit einer unabhängigen Sicherung können Ihre Daten auf ein Ersatzgerät zurück – statt von der defekten Festplatte abhängig zu sein." },
  { icon: ShieldOff, title: "Daten verschlüsselt", text: "Bei einem Verschlüsselungstrojaner (Ransomware) hilft eine saubere, getrennte Sicherung, wieder arbeitsfähig zu werden." },
  { icon: FileX2, title: "Datei versehentlich gelöscht", text: "Ein früherer Sicherungsstand bringt gelöschte oder überschriebene Dateien zurück, ohne die gesamte IT zurückzusetzen." },
];

const services = [
  "Analyse: Welche Daten sind geschäftskritisch – und wie lange darf ein Ausfall dauern?",
  "Einrichtung Ihrer lokalen Sicherung auf einem NAS (Netzwerkspeicher) oder Backup-Server.",
  "Verschlüsselte Sicherung außer Haus in deutschen Rechenzentren: Ende-zu-Ende-verschlüsselt, der Schlüssel bleibt bei Ihnen. Die Umsetzung wird auf Ihre DSGVO-Anforderungen abgestimmt.",
  "Bewährte Open-Source-Werkzeuge wie BorgBackup oder Proxmox Backup Server: freie Software ohne Lizenzfalle und unnötige Anbieterabhängigkeit.",
  "Automatische Überwachung: Bei einer fehlgeschlagenen Sicherung werde ich sofort benachrichtigt.",
  "Regelmäßige Wiederherstellungstests mit Protokoll – damit nicht nur die Sicherung, sondern auch das Zurückspielen funktioniert.",
  "Verständliche Dokumentation und ein Notfallplan für Ihr Unternehmen.",
  "Ein fester Ansprechpartner statt einer anonymen Hotline.",
];

const steps = [
  { title: "Backup-Check", text: `${backupCheck.durationMinutes} Minuten, kostenlos – ${backupCheck.formats.join(" oder ")}. Ich prüfe mit Ihnen die aktuelle Sicherung.` },
  { title: "Konzept & Angebot", text: "Sie erhalten ein passendes Konzept und ein transparentes Festpreisangebot." },
  { title: "Einrichtung & Test", text: "Ich richte die Sicherung ein und prüfe die erste Wiederherstellung." },
  { title: "Laufende Betreuung", text: "Nach dem vereinbarten Paket überwache und teste ich Ihre Sicherung regelmäßig." },
];

const reasons = [
  { icon: MapPin, title: "Persönlich im Ruhrgebiet", text: "Ich bin Ihr fester Ansprechpartner in Castrop-Rauxel – vor Ort und direkt erreichbar." },
  { icon: KeyRound, title: "Ihre Daten bleiben Ihre Daten", text: "Open Source, selbst betriebene Systeme und Rechenzentren in Deutschland stärken Ihre digitale Souveränität." },
  { icon: UserRound, title: "Ehrliche Beratung", text: "Sie erhalten verständliche Empfehlungen und transparente Festpreise statt eines Pakets von der Stange." },
  { icon: ShieldCheck, title: "Ich denke mit", text: "Im betreuten Betrieb wird jede Sicherung überwacht; regelmäßige Tests prüfen, ob Ihre Daten zurückkommen." },
];

const Datensicherung = () => (
  <div className="min-h-screen bg-background pb-24 md:pb-0">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://neuhaus-it.de/datensicherung" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://neuhaus-it.de/datensicherung" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "LocalBusiness", "@id": "https://neuhaus-it.de/#business", name: "Neuhaus-IT (Inh. Till Neuhaus)", description: "IT-Service, der mitdenkt.", url: "https://neuhaus-it.de", telephone: backupCheck.telephone, foundingDate: "2017", address: { "@type": "PostalAddress", streetAddress: "Erinstraße 7", postalCode: "44575", addressLocality: "Castrop-Rauxel", addressRegion: "NRW", addressCountry: "DE" }, areaServed: "Ruhrgebiet" },
          { "@type": "Service", name: "Datensicherung nach der 3-2-1-Regel", serviceType: "ITService", provider: { "@id": "https://neuhaus-it.de/#business" }, url: "https://neuhaus-it.de/datensicherung" },
          { "@type": "FAQPage", mainEntity: backupFaq.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
        ],
      })}</script>
    </Helmet>
    <BackToHomeButton />
    <main>
      <section className="px-4 pt-6 pb-16 md:pb-20" aria-labelledby="backup-title">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="border border-dashed border-border rounded-md h-12 w-12 flex items-center justify-center text-foreground text-xs" role="img" aria-label="Platzhalter für das Neuhaus-IT-Logo">Logo</div>
            <div><p className="font-semibold">Neuhaus-IT <span className="font-normal">(Inh. Till Neuhaus)</span></p><p className="text-base">IT-Service, der mitdenkt.</p></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="h-14 w-14 text-accent mx-auto mb-5" aria-hidden="true" />
            <p className="text-base font-semibold mb-4">Datensicherung für Unternehmen im Ruhrgebiet</p>
            <h1 id="backup-title" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Ihre Daten. Dreifach gesichert.</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">Datensicherung nach der 3-2-1-Regel – eingerichtet, überwacht und regelmäßig getestet von Ihrem IT-Partner aus Castrop-Rauxel.</p>
            <BackupActions />
            <p className="text-base mt-5">30 Minuten · kostenlos · vor Ort oder per Video</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16" aria-labelledby="scenarios-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="scenarios-title" className="text-2xl md:text-3xl font-bold text-center mb-8">Wenn etwas schiefgeht, haben Sie eine Sicherung.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map(({ icon: Icon, title, text }) => <article key={title} className="bg-card border border-border rounded-lg p-6"><Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" /><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-base leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16" aria-labelledby="rule-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="rule-title" className="text-3xl font-bold text-center mb-4">Die 3-2-1-Regel. Einfach erklärt.</h2>
          <p className="text-lg text-center mb-10">Nicht alles an einem Ort. Nicht alles auf einem Gerät.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "3", icon: Database, title: "Kopien Ihrer Daten", text: "Das Original und zwei unabhängige Sicherungen. So bleibt eine weitere Kopie, wenn eine ausfällt." },
              { number: "2", icon: Server, title: "Verschiedene Speichermedien", text: "Zum Beispiel Ihr Server oder NAS und ein externer Datenträger – nicht nur zwei Ordner auf derselben Festplatte." },
              { number: "1", icon: Globe2, title: "Kopie außer Haus", text: "Verschlüsselt in einem Rechenzentrum in Deutschland. Getrennt von Ihrem Standort, falls dort etwas passiert." },
            ].map(({ number, icon: Icon, title, text }) => <div key={number} className="border-t-2 border-accent pt-5"><div className="flex items-center justify-between mb-4"><span className="text-6xl font-bold">{number}</span><Icon className="h-10 w-10 text-foreground" aria-hidden="true" /></div><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-base leading-relaxed">{text}</p></div>)}
          </div>
          <p className="text-base leading-relaxed border-t border-border pt-6 mt-10"><strong>Noch robuster: 3-2-1-1-0.</strong> Eine weitere Kopie bleibt offline oder unveränderbar (auch „immutable“ genannt). Null Fehler bei der Wiederherstellungsprüfung heißt: Das Zurückspielen wurde geprüft, nicht nur das Kopieren.</p>
        </div>
      </section>

      <section className="px-4 py-16" aria-labelledby="services-title"><div className="max-w-4xl mx-auto">
        <h2 id="services-title" className="text-3xl font-bold mb-4">Eine Sicherung, die zu Ihrem Betrieb passt.</h2>
        <p className="text-lg leading-relaxed mb-8">Für Arztpraxen, Kanzleien, Handwerksbetriebe und Dienstleister mit 1–50 Mitarbeitenden. Ich kümmere mich um die Technik – Sie behalten den Überblick.</p>
        <ul className="grid md:grid-cols-2 gap-6">{services.map(service => <li key={service} className="flex gap-3 text-base leading-relaxed"><Check className="h-5 w-5 shrink-0 text-foreground mt-1" aria-hidden="true" /><span>{service}</span></li>)}</ul>
        <p className="text-base mt-8">Den Umfang von Überwachung, Tests und Notfallplanung lege ich mit Ihnen im gewählten Paket fest.</p>
      </div></section>

      <section className="px-4 py-16 bg-secondary" aria-labelledby="steps-title"><div className="max-w-6xl mx-auto">
        <h2 id="steps-title" className="text-3xl font-bold text-center mb-10">In vier Schritten zu einem geprüften Backup</h2>
        <ol className="grid md:grid-cols-4 gap-8">{steps.map((step, index) => <li key={step.title} className="border-l-2 md:border-l-0 md:border-t-2 border-accent pl-5 md:pl-0 md:pt-5"><span className="text-2xl font-bold block mb-3">0{index + 1}</span><h3 className="text-xl font-semibold mb-3">{step.title}</h3><p className="text-base leading-relaxed">{step.text}</p></li>)}</ol>
      </div></section>

      <section className="px-4 py-16" aria-labelledby="packages-title"><div className="max-w-6xl mx-auto">
        <h2 id="packages-title" className="text-3xl font-bold text-center mb-4">So viel Betreuung, wie Sie brauchen.</h2>
        <p className="text-lg text-center mb-10">Einmal einrichten oder dauerhaft begleiten – Sie entscheiden.</p>
        <div className="grid md:grid-cols-3 gap-6">{backupPackages.map(pkg => <article key={pkg.name} className={`rounded-lg border p-6 flex flex-col bg-card ${pkg.recommended ? "border-accent border-2" : "border-border"}`}>
          <div className="min-h-8 mb-3">{pkg.recommended && <p className="text-sm font-bold flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden="true" />Meine Empfehlung</p>}</div>
          <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3><p className="text-3xl font-bold mb-2">{pkg.price}</p><p className="text-base min-h-12 mb-6">{pkg.billing}</p>
          <ul className="space-y-3 mb-8 flex-1">{pkg.items.map(item => <li key={item} className="flex gap-2 text-base"><Check className="h-5 w-5 shrink-0" aria-hidden="true" /><span>{item}</span></li>)}</ul>
          <Button variant={pkg.recommended ? "default" : "outline"} asChild className="text-base min-h-11"><a href={backupCheck.bookingUrl}>Backup-Check buchen</a></Button>
        </article>)}</div>
        <p className="text-base text-center mt-6">Alle Preise netto zzgl. MwSt. Individuelles Angebot nach dem Backup-Check.</p>
      </div></section>

      <section className="px-4 py-16 bg-secondary" aria-labelledby="why-title"><div className="max-w-6xl mx-auto">
        <h2 id="why-title" className="text-3xl font-bold mb-4">Warum Neuhaus-IT?</h2><p className="text-lg mb-10">Till Neuhaus · IT-Freelancer seit 2017 · IT-Service, der mitdenkt.</p>
        <div className="grid md:grid-cols-2 gap-8">{reasons.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon className="h-7 w-7 shrink-0" aria-hidden="true" /><div><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-base leading-relaxed">{text}</p></div></div>)}</div>
      </div></section>

      <section className="px-4 py-12 text-center" aria-labelledby="reviews-title"><h2 id="reviews-title" className="text-2xl font-bold mb-3">Kundenstimmen</h2><p className="text-base">Kundenstimmen folgen</p></section>

      <section className="px-4 py-16 border-t border-border" aria-labelledby="faq-title"><div className="max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-3xl font-bold mb-8">Ihre Fragen zur Datensicherung</h2>
        <Accordion type="single" collapsible>{backupFaq.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><h3><AccordionTrigger className="text-base md:text-lg text-left gap-4">{faq.question}</AccordionTrigger></h3><AccordionContent className="text-base leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion>
      </div></section>

      <section className="px-4 py-16 bg-secondary text-center" aria-labelledby="final-title"><div className="max-w-4xl mx-auto">
        <h2 id="final-title" className="text-3xl md:text-4xl font-bold mb-5">Wann haben Sie Ihr Backup zuletzt getestet?</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8">Im kostenlosen Backup-Check prüfe ich Ihre aktuelle Datensicherung und zeige Ihnen, wo es Lücken gibt.</p><BackupActions />
        <address className="not-italic text-base leading-relaxed mt-10">Neuhaus-IT (Inh. Till Neuhaus)<br />Erinstraße 7 · 44575 Castrop-Rauxel<br /><a href={`tel:${backupCheck.telephone}`} className="underline underline-offset-4">02305 4459886</a> · <a href="mailto:service@neuhaus-it.de" className="underline underline-offset-4">service@neuhaus-it.de</a></address>
        <p className="text-base font-semibold mt-4">IT-Service, der mitdenkt.</p>
      </div></section>
    </main>
    <Footer />
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background border-t border-border px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Button asChild size="lg" className="w-full text-base"><a href={backupCheck.bookingUrl}><Calendar className="h-5 w-5 mr-2" />Backup-Check buchen</a></Button>
    </div>
  </div>
);

export default Datensicherung;