import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Server, Users, User, Home, Building2, Cloud, Shield, Clock, TrendingUp, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
const ManagedNodes = () => {
  const adminModels = [{
    title: "Managed-Hosts",
    icon: Shield,
    description: "Neuhaus-IT übernimmt alle administrativen Aufgaben",
    features: ["Vollständige Wartung und Updates", "Professionelles Monitoring", "Automatische Backups", "Keine Adminrechte für Kunden", "Haftung durch Neuhaus-IT", "Maximale Sicherheit"],
    highlight: true
  }, {
    title: "Co-Managed-Hosts",
    icon: Users,
    description: "Gemeinsame Administration mit flexibler Aufteilung",
    features: ["Beide Seiten haben Adminrechte", "Flexible Aufgabenteilung", "Mehr Kontrolle für Kunden", "Gemeinsame Verantwortung", "Keine Haftung durch Neuhaus-IT", "Ideal für IT-affine Nutzer"],
    highlight: false
  }, {
    title: "Self-Managed-Hosts",
    icon: User,
    description: "Komplette Eigenverwaltung durch den Kunden",
    features: ["Volle administrative Kontrolle", "Eigenverantwortliche Verwaltung", "Infrastruktur durch Neuhaus-IT", "Keine Haftung durch Neuhaus-IT", "Maximale Flexibilität", "Für erfahrene Administratoren"],
    highlight: false
  }];
  const useCases = [{
    category: "Privatkunden",
    icon: Home,
    examples: ["NAS-System (Synology, QNAP)", "Nextcloud-Server für private Cloud", "Smart-Home-Controller", "Heimserver für Medien und Backups", "VPN-Server für sicheren Zugriff"]
  }, {
    category: "Kleinunternehmen",
    icon: Building2,
    examples: ["Datei- und Backup-Server", "Mail-Server und Groupware", "Webhosting und CMS", "Virtuelle Maschinen für Anwendungen", "ERP- und CRM-Systeme"]
  }];
  const benefits = [{
    icon: Shield,
    title: "Rundum-Sorglos-Betrieb",
    description: "Keine Ausfälle durch proaktives Monitoring und schnelle Reaktionszeiten"
  }, {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Konzentrieren Sie sich auf Ihr Kerngeschäft, nicht auf IT-Probleme"
  }, {
    icon: TrendingUp,
    title: "Professionelles Monitoring",
    description: "Fehler werden erkannt und behoben, bevor sie kritisch werden"
  }, {
    icon: Cloud,
    title: "Transparente Kosten",
    description: "Klare Zuständigkeiten und kalkulierbare monatliche Ausgaben"
  }];
  return <>
      <Helmet>
        <title>Managed Nodes - Professionelle Serveradministration | Neuhaus-IT</title>
        <meta name="description" content="Neuhaus-IT betreut Ihre Systeme professionell: von vollständig gemanagten Hosts über Co-Managed-Lösungen bis zu Self-Managed-Systemen. Sicher, flexibel und transparent." />
        <meta name="keywords" content="Managed Nodes, Serveradministration, IT-Betreuung, Co-Managed-Hosting, Self-Managed-Hosting, Server-Management für KMU, Server-Monitoring" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <SubpageHero title="Managed Nodes" description="Mit Managed Nodes kümmert sich Neuhaus-IT um die reibungslose Funktion Ihrer Systeme – damit Sie sich auf Ihr Geschäft konzentrieren können." icon={<Server className="h-16 w-16 text-primary" />} />
        
        <BackToHomeButton />
        
        <main className="flex-1">

          {/* Was ist eine Managed Node? */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Was ist eine Managed Node?</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Eine <strong>Node</strong> ist ein einzelner Host, Server, Container oder Computer, der durch Neuhaus-IT überwacht und administriert wird.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Das Konzept ist skalierbar und modular: Von einem einzelnen Rechner bis zu einer kompletten Serverlandschaft – jedes System wird professionell betreut und auf Ihre individuellen Bedürfnisse angepasst.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Administrationsmodelle */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Meine Administrationsmodelle</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {adminModels.map((model, index) => {
                const Icon = model.icon;
                return <Card key={index} className={model.highlight ? "border-primary shadow-lg" : ""}>
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <Icon className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="text-center">{model.title}</CardTitle>
                        <CardDescription className="text-center">{model.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {model.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>)}
                        </ul>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </section>

          {/* Kundenvorteile */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Ihre Vorteile</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Icon className="h-10 w-10 text-primary shrink-0" />
                          <div>
                            <CardTitle className="mb-2">{benefit.title}</CardTitle>
                            <CardDescription>{benefit.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>;
              })}
              </div>
            </div>
          </section>

          {/* Einsatzszenarien */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Beispielhafte Einsatzszenarien</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                          <CardTitle>{useCase.category}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {useCase.examples.map((example, idx) => <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{example}</span>
                            </li>)}
                        </ul>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">Bereit für professionelle IT-Betreuung?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Vereinbaren Sie jetzt ein kostenloses Erstgespräch und finden Sie die passende Lösung für Ihre Systeme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ActionButtonMenu size="lg" />
                
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
};
export default ManagedNodes;