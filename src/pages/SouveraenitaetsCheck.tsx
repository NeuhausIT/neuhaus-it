import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Cloud, DatabaseBackup, FolderOpen, Link2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { canonicalUrl } from "@/lib/routes";

const title = "Kostenloser Souveränitäts-Check | Neuhaus-IT";
const description = "Wie souverän ist Ihre IT? Kostenloser Check für kleine und mittlere Unternehmen in Castrop-Rauxel und Umgebung – Nextcloud statt US-Cloud.";

const topics = [
  { icon: FolderOpen, title: "Dateien und Zusammenarbeit", text: "Wo liegen Ihre Daten, und wer hat darauf Zugriff?" },
  { icon: Mail, title: "E-Mail, Kalender und Kontakte", text: "Welche Anbieter nutzen Sie, und wo stehen deren Server?" },
  { icon: DatabaseBackup, title: "Datensicherung", text: "Gibt es eine aktuelle Sicherung außer Haus, und wurde die Wiederherstellung getestet?" },
  { icon: Link2, title: "Abhängigkeiten", text: "Von welchen Anbietern, Lizenzen und Abos hängt Ihr Arbeitsalltag ab?" },
];

const steps = [
  { title: "Termin buchen", text: "online oder telefonisch" },
  { title: "Gespräch, ca. 30 Minuten", text: "per Telefon, Video oder in unserem Büro in Castrop-Rauxel" },
  { title: "Ergebnis", text: "eine kurze Einschätzung mit konkreten Empfehlungen für Ihr Unternehmen" },
];

const BookButton = () => (
  <Button asChild variant="action" size="lg" className="gap-2 w-full sm:w-auto">
    <Link to="/terminbuchungen"><Calendar className="w-5 h-5" />Jetzt Termin buchen</Link>
  </Button>
);

const SouveraenitaetsCheck = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href={canonicalUrl("/souveraenitaets-check")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl("/souveraenitaets-check")} />
    </Helmet>

    <BackToHomeButton />
    <main>
      <SubpageHero
        title="Kostenloser Souveränitäts-Check für Ihr Unternehmen"
        description="Wie abhängig ist Ihr Unternehmen von US-Cloud-Diensten? In einem kostenlosen und unverbindlichen Gespräch schauen wir gemeinsam auf Ihre IT – danach wissen Sie, wo Sie stehen und was die nächsten sinnvollen Schritte sind."
        icon={<ShieldCheck className="w-16 h-16 text-primary" />}
        showActionButton={false}
      >
        <div className="flex flex-col items-center gap-3 w-full">
          <BookButton />
          <p className="text-sm text-muted-foreground">
            oder direkt anrufen: <a href="tel:+4923054459886" className="text-primary underline">02305 4459886</a>
          </p>
        </div>
      </SubpageHero>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Was wir uns gemeinsam ansehen</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {topics.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full"><CardContent className="flex gap-4 p-5">
                <Icon className="w-8 h-8 text-primary shrink-0" />
                <div><h3 className="font-semibold mb-1">{title}</h3><p className="text-muted-foreground">{text}</p></div>
              </CardContent></Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">So läuft der Check ab</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Card className="h-full"><CardContent className="p-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-3">{i + 1}</span>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </CardContent></Card>
            </li>
          ))}
        </ol>
        <p className="text-center text-muted-foreground mt-6">Für kleine und mittlere Unternehmen mit 1 bis 50 IT-Arbeitsplätzen.</p>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 md:p-8 text-center">
          <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Direkt ausprobieren: das Nextcloud-Testpaket</h2>
          <p className="text-muted-foreground mb-3">Testen Sie Nextcloud drei Monate lang mit bis zu fünf Personen: Dateien teilen, gemeinsame Kalender und Adressbücher, Nutzerverwaltung – gehostet in Deutschland.</p>
          <p className="mb-6"><strong>Pauschal 149 € zzgl. USt.</strong> Wechseln Sie danach zu einer dauerhaft betreuten Nextcloud, rechnen wir den Betrag auf die Einrichtung an.</p>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link to="/terminbuchungen">Beratungstermin vereinbaren</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Fragen? Sprechen Sie uns an.</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center justify-center gap-2"><Phone className="w-5 h-5 text-primary" /><a href="tel:+4923054459886" className="text-primary underline">02305 4459886</a></li>
          <li className="flex items-center justify-center gap-2"><Mail className="w-5 h-5 text-primary" /><a href="mailto:hallo@neuhaus-it.de" className="text-primary underline">hallo@neuhaus-it.de</a></li>
          <li className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-primary shrink-0" /><span>Neuhaus-IT, Erinstraße 7, 44575 Castrop-Rauxel</span></li>
        </ul>
        <BookButton />
      </section>
    </main>
    <Footer />
  </div>
);

export default SouveraenitaetsCheck;
