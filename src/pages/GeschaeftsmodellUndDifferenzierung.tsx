import { Helmet } from "react-helmet";
import { Briefcase, Target, Wrench, ShoppingCart, Cloud, GraduationCap, Sparkles, Shield, Lightbulb } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const GeschaeftsmodellUndDifferenzierung = () => {
  const revenueStreams = [{
    icon: <Wrench className="h-6 w-6 text-primary" />,
    title: "Dienstleistungen",
    description: "Beratung, Support, Reparaturen, Schulungen"
  }, {
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    title: "Verkauf",
    description: "Hard- und Software"
  }, {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "Infrastruktur",
    description: "Cloud-Dienste und Hosting"
  }, {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "KI-Services",
    description: "Beratung und Automationen"
  }, {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Wartungsverträge",
    description: "Service- und Wartungsverträge"
  }];
  const operationalAreas = [{
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Beratung & Strategie",
    description: "IT-Infrastrukturanalyse, Backup-Konzepte, Sicherheitsstrategie, Software-Stack, KI-Workflows, Nextcloud-Ökosystem, Datenschutz-Basics"
  }, {
    icon: <Wrench className="h-6 w-6 text-primary" />,
    title: "Service & Helpdesk",
    description: "Externe IT-Abteilung für Firmen ohne interne Fachkräfte – Remote oder vor Ort. Fehlerbehebung, Updates, Monitoring, Systemchecks"
  }, {
    icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    title: "Handel",
    description: "Verkauf von Hardware, Software, Domains und passenden Lizenzpaketen – immer mit Beratung, kein reiner Reseller"
  }, {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Umsetzung & Technik",
    description: "Hardware einrichten, Netzwerke stabilisieren, Backups konfigurieren, Nextcloud/Büro-Workflows bauen, Reparaturen, Datenrettungen"
  }, {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Digitalisierung & KI",
    description: "Automatisierungen, KI-Agenten, Prompt Engineering, Schulungen für Teams, KI-on-Demand für KMU, Produktisierung von KI-Workflows"
  }, {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Schulungen & Workshops",
    description: "Von \"Grundlagen für Privathaushalte\" bis \"KI-Kompetenzen für Büros\""
  }];
  const differentiators = [{
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Servicequalität",
    description: "Ich will Aufträge nicht nur erfolgreich abschließen, sondern Kund*innen nachhaltig begeistern"
  }, {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "Digitale Souveränität",
    description: "Fokus auf Nextcloud, Open Source, Datenschutz und Kontrolle über eigene Daten – keine Abhängigkeit von proprietären US-Clouds"
  }, {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Vollständige Unabhängigkeit",
    description: "Kein Systemhaus, kein Franchise, keine Marken- oder Ketten-Abhängigkeit. Flexibel und genau das, was sinnvoll ist"
  }, {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "KI als Zukunftshebel",
    description: "In Castrop-Rauxel eines der ersten Unternehmen, die KI wirklich praxisnah in Support-Prozesse integrieren"
  }];
  return <>
      <Helmet>
        <title>Geschäftsmodell & Differenzierung | Neuhaus-IT</title>
        <meta name="description" content="Erfahren Sie mehr über das Geschäftsmodell von Neuhaus-IT: Ein lokal verankerter IT-Dienstleister für digitale Souveränität im Ruhrgebiet." />
        <meta name="keywords" content="Geschäftsmodell, IT-Dienstleister, digitale Souveränität, KI-Beratung, Nextcloud, Open Source" />
        <link rel="canonical" href="https://neuhaus-it.de/geschaeftsmodell-und-differenzierung" />
      </Helmet>

      <BackToHomeButton />

      <SubpageHero title="Geschäftsmodell & Differenzierung" description="Neuhaus-IT ist ein lokal verankerter, unabhängiger IT-Dienstleister, der kleinen Unternehmen und Privathaushalten im Ruhrgebiet digitale Souveränität ermöglicht – durch Beratung, Service, Schulung und den gezielten Einsatz freier Software, Cloud-Dienste und KI-gestützter Workflows." icon={<Briefcase className="h-16 w-16 text-primary" />} />

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Intro */}
        

        {/* Umsatzquellen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Umsatzquellen</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {revenueStreams.map((stream, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {stream.icon}
                  </div>
                  <CardTitle className="text-lg">{stream.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stream.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Operative Struktur */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Operative Struktur</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalAreas.map((area, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Strategische Differenzierung */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Strategische Differenzierung</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((diff, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {diff.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{diff.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {diff.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>)}
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default GeschaeftsmodellUndDifferenzierung;