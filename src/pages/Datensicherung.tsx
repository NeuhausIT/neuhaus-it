import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Check, Clock, Database, FileCheck2, Globe2, HardDrive, House, LockKeyhole, Phone, Radio, ShieldCheck, UserRound, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { backupContact, backupAreas, backupFaq, privateBackup, businessBackup } from "@/lib/datensicherung";

const title = "Datensicherung & Backup – eingerichtet, überwacht, getestet | Neuhaus-IT";
const description = "Automatische, verschlüsselte Datensicherung für Privathaushalte und Unternehmen. Mit Überwachung und Wiederherstellungstest. Neuhaus-IT aus Castrop-Rauxel – vor Ort im Ruhrgebiet und per Fernwartung.";
const url = "https://neuhaus-it.de/datensicherung";
const steps = [
  { icon: Clock, title: "Automatisch sichern", text: "Die Sicherung läuft im Hintergrund, ohne dass Sie daran denken müssen. Ich richte die Zeiten passend zu Ihrem Alltag ein." },
  { icon: Radio, title: "Überwachen", text: "Jede Sicherung meldet sich. Bleibt die Meldung aus, kümmere ich mich." },
  { icon: FileCheck2, title: "Wiederherstellung testen", text: "Ich stelle regelmäßig Probedateien wieder her und dokumentiere das Ergebnis. So prüfe ich, ob Ihre Daten im Ernstfall wieder verfügbar sind." },
];

const Datensicherung = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "LocalBusiness", "@id": "https://neuhaus-it.de/#business", name: "Neuhaus-IT (Inh. Till Neuhaus)", url: "https://neuhaus-it.de", telephone: backupContact.telephone, address: { "@type": "PostalAddress", streetAddress: "Erinstraße 7", postalCode: "44575", addressLocality: "Castrop-Rauxel", addressCountry: "DE" }, areaServed: backupAreas },
          { "@type": "Service", "@id": `${url}#service`, name: "Datensicherung und Backup", description, provider: { "@id": "https://neuhaus-it.de/#business" }, areaServed: backupAreas, url },
          { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: backupFaq.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
        ],
      })}</script>
    </Helmet>
    <BackToHomeButton />
    <Header />
    <main>
      <section className="px-4 py-12 md:py-16" aria-labelledby="backup-title">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-5" aria-hidden="true" />
          <p className="text-base font-semibold mb-4">Neuhaus-IT · Inh. Till Neuhaus · Castrop-Rauxel</p>
          <h1 id="backup-title" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Datensicherung, auf die Sie sich verlassen können</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">Ich richte Ihre Datensicherung ein, überwache sie und teste regelmäßig die Wiederherstellung – für Ihr Zuhause und Ihr Unternehmen.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="h-auto min-h-12 py-3 whitespace-normal text-base"><a href="#privat"><House className="h-5 w-5 mr-2 shrink-0" />Für Privathaushalte</a></Button>
            <Button size="lg" variant="outline" asChild className="h-auto min-h-12 py-3 whitespace-normal text-base"><a href="#unternehmen"><Building2 className="h-5 w-5 mr-2 shrink-0" />Für Unternehmen & Institutionen</a></Button>
          </div>
          <a href={`tel:${backupContact.telephone}`} className="inline-flex items-center gap-2 text-lg font-semibold underline underline-offset-4 py-3 mt-4"><Phone className="h-5 w-5" aria-hidden="true" />{backupContact.displayTelephone}</a>
        </div>
      </section>

      <section className="px-4 pb-12" aria-label="Datensicherung kurz erklärt">
        <div className="max-w-4xl mx-auto border-l-4 border-accent bg-secondary p-6">
          <p className="text-lg leading-relaxed">Eine gute Datensicherung läuft automatisch, liegt an mindestens zwei getrennten Orten, ist verschlüsselt und wird regelmäßig auf Wiederherstellbarkeit getestet. Neuhaus-IT aus Castrop-Rauxel richtet genau das ein und behält es im Blick.</p>
        </div>
      </section>

      <section className="px-4 py-12" aria-labelledby="steps-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="steps-title" className="text-3xl font-bold text-center mb-10">Einrichten. Überwachen. Testen.</h2>
          <div className="grid md:grid-cols-3 gap-8">{steps.map(({ icon: Icon, title, text }) => <div key={title} className="border-t-2 border-accent pt-6"><Icon className="h-8 w-8 text-accent mb-4" aria-hidden="true" /><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-base leading-relaxed">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="px-4 py-12 bg-secondary" aria-labelledby="rule-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="rule-title" className="text-3xl font-bold text-center mb-4">Die 3-2-1-Regel – einfach erklärt</h2>
          <p className="text-lg text-center mb-8">3 Kopien Ihrer Daten, auf 2 verschiedenen Speichermedien, 1 davon außer Haus.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { number: "3", icon: Database, title: "Kopien Ihrer Daten", text: "Ihr Original und zwei unabhängige Sicherungen." },
            { number: "2", icon: HardDrive, title: "Verschiedene Speichermedien", text: "Zum Beispiel Computer und externe Festplatte – nicht zwei Ordner auf derselben Festplatte." },
            { number: "1", icon: Globe2, title: "Kopie außer Haus", text: "Zum Beispiel verschlüsselt in einem Rechenzentrum in Deutschland." },
          ].map(({ number, icon: Icon, title, text }) => <article key={number} className="bg-card border border-border rounded-lg p-6"><div className="flex items-center justify-between mb-4"><span className="text-5xl font-bold text-primary">{number}</span><Icon className="h-8 w-8 text-accent" aria-hidden="true" /></div><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-base leading-relaxed">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="px-4 py-12" aria-labelledby="experience-title">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-8 border-l-4 border-primary pl-6">
          <div className="w-32 h-40 shrink-0 bg-muted border border-dashed border-border rounded-md flex flex-col items-center justify-center gap-3 text-muted-foreground" role="img" aria-label="Platzhalter für ein zukünftiges Foto von Till Neuhaus"><UserRound className="h-12 w-12" aria-hidden="true" /><span className="text-sm">Foto folgt</span></div>
          <div><h2 id="experience-title" className="text-3xl font-bold mb-5">Aus eigener Erfahrung</h2><blockquote className="text-lg leading-relaxed"><p>Auch bei mir lief ein Backup einmal wochenlang ins Leere – ohne Fehlermeldung. Seitdem meldet jede Sicherung ihren Status an ein Überwachungssystem. Genau das richte ich auch für Sie ein.</p><footer className="mt-4 text-base font-semibold">– Till Neuhaus</footer></blockquote></div>
        </div>
      </section>

      <section className="px-4 py-12 bg-secondary" aria-labelledby="offers-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="offers-title" className="text-3xl font-bold text-center mb-4">Datensicherung für Ihren Alltag</h2>
          <p className="text-lg text-center mb-10">Für Privathaushalte und kleine Unternehmen, Praxen, Kanzleien, Vereine und Institutionen.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <article id="privat" className="scroll-mt-24 bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col">
              <House className="h-8 w-8 text-primary mb-4" aria-hidden="true" /><h3 className="text-2xl font-bold mb-6">Für Privathaushalte</h3>
              <ul className="space-y-4 mb-8">{privateBackup.items.map(item => <li key={item} className="flex gap-3 text-base leading-relaxed"><Check className="h-5 w-5 mt-1 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul>
              <div className="mt-auto border-t border-border pt-6 mb-6"><p className="text-xl">Ab {privateBackup.price} € inkl. USt.</p><p className="text-base mt-2">Für die Einrichtung, bis max. {privateBackup.durationMinutes} Minuten. Vor Ort zzgl. Anfahrt.</p></div>
              <Button asChild variant="outline" className="h-auto min-h-12 py-3 whitespace-normal text-base"><a href={privateBackup.url}>Datensicherung für Privathaushalte</a></Button>
            </article>
            <article id="unternehmen" className="scroll-mt-24 bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col">
              <Building2 className="h-8 w-8 text-accent mb-4" aria-hidden="true" /><h3 className="text-2xl font-bold mb-6">Für Unternehmen & Institutionen</h3>
              <ul className="space-y-4 mb-8">{businessBackup.items.map(item => <li key={item} className="flex gap-3 text-base leading-relaxed"><Check className="h-5 w-5 mt-1 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul>
              <div className="mt-auto border-t border-border pt-6 mb-6 space-y-3 text-base"><p>Nach Aufwand: <strong>{businessBackup.hourlyRate} € netto/Std.</strong></p><p>Backup-Schnellcheck: <strong>{businessBackup.quickCheckPrice} € netto</strong> – wird bei Beauftragung angerechnet.</p><p>Betreute Datensicherung: <strong>ab {businessBackup.monthlyPricePerWorkplace} € netto pro Arbeitsplatz und Monat</strong></p><p>Alle Nettopreise zzgl. gesetzlicher Umsatzsteuer.</p></div>
              <Button asChild className="h-auto min-h-12 py-3 whitespace-normal text-base"><a href={businessBackup.url}>Datensicherung für Unternehmen</a></Button>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-12" aria-labelledby="privacy-title">
        <div className="max-w-4xl mx-auto"><LockKeyhole className="h-8 w-8 text-accent mb-4" aria-hidden="true" /><h2 id="privacy-title" className="text-3xl font-bold mb-6">Ihre Daten bleiben Ihre Daten</h2><div className="grid md:grid-cols-2 gap-6 text-base leading-relaxed"><p>Ihre Daten werden vor dem Hochladen verschlüsselt. Für die Sicherung außer Haus nutze ich Speicherorte in Deutschland.</p><p>Ich setze bewährte Open-Source-Werkzeuge ein – freie Software ohne Lizenzbindung. Sie behalten die Schlüssel zu Ihren Daten.</p></div></div>
      </section>

      <section className="px-4 py-12 border-t border-border" aria-labelledby="faq-title">
        <div className="max-w-4xl mx-auto"><h2 id="faq-title" className="text-3xl font-bold mb-8">Häufige Fragen zur Datensicherung</h2><Accordion type="single" collapsible>{backupFaq.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-base md:text-lg text-left gap-4">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>

      <section className="px-4 py-12 bg-secondary text-center" aria-labelledby="contact-title">
        <div className="max-w-4xl mx-auto"><h2 id="contact-title" className="text-3xl font-bold mb-5">Lassen Sie uns Ihre Daten absichern</h2><p className="text-lg mb-8">Ein kurzes Gespräch genügt, um zu klären, was Sie brauchen.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Button size="lg" asChild className="text-base"><a href={`tel:${backupContact.telephone}`}><Phone className="h-5 w-5 mr-2" />Jetzt anrufen</a></Button><Button variant="outline" size="lg" asChild className="text-base"><Link to={backupContact.bookingUrl}><Calendar className="h-5 w-5 mr-2" />Termin buchen</Link></Button></div></div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Datensicherung;
