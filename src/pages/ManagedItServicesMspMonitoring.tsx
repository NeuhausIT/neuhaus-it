import { Helmet } from "react-helmet";
import { Shield, RefreshCw, Package, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

/**
 * ManagedItServicesMspMonitoring Page
 * 
 * Landingpage für Managed IT-Services (MSP) mit Monitoring
 * Zielgruppe: Geschäftskunden, die Wert auf Zuverlässigkeit, Zeitersparnis und Sicherheit legen
 */
const ManagedItServicesMspMonitoring = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Managed IT Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neuhaus-IT",
      "url": "https://neuhaus-it.de",
      "telephone": "+49-2305-4459886",
      "email": "service@neuhaus-it.de",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Castrop-Rauxel",
        "addressRegion": "NRW",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Castrop-Rauxel und Umgebung"
    },
    "description": "Verlässliche Managed IT-Services (MSP) mit automatischem Monitoring, sicheren Updates und professioneller Systemadministration für Unternehmen in Castrop-Rauxel."
  };

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Monitoring & Alarme",
      benefit: "Keine Überraschungen.",
      description: "24/7 Überwachung Ihrer Systeme. Wir wissen von Problemen, bevor Sie diese bemerken, und reagieren sofort."
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-primary" />,
      title: "Betriebssystem-Aktualisierungen",
      benefit: "Immer sicher und aktuell.",
      description: "Automatisierte, zeitgesteuerte Updates, um Sicherheitslücken zu schließen und die Compliance zu gewährleisten."
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Anwendungs-Aktualisierungen",
      benefit: "Reibungslose Arbeit.",
      description: "Katalog-Updates plus individuelle Pflege Ihrer Fachanwendungen, um Kompatibilität und Performance zu sichern."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Managed IT Services für Ihr Unternehmen in Castrop-Rauxel – Neuhaus-IT</title>
        <meta 
          name="description" 
          content="Verlässliche Managed IT-Services (MSP): Von automatischem Monitoring bis zu sicheren Updates – damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Professionelle IT-Betreuung für Unternehmen in Castrop-Rauxel." 
        />
        <meta 
          name="keywords" 
          content="Managed IT Services, MSP, IT Monitoring, Systemadministration, IT Betreuung, Castrop-Rauxel, Neuhaus-IT, automatische Updates, IT Sicherheit" 
        />
        <link rel="canonical" href="https://neuhaus-it.de/managed-it-services-msp-monitoring" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuhaus-it.de/managed-it-services-msp-monitoring" />
        <meta property="og:title" content="Managed IT Services für Ihr Unternehmen in Castrop-Rauxel – Neuhaus-IT" />
        <meta property="og:description" content="Verlässliche Managed IT-Services (MSP): 24/7 Monitoring, automatische Updates und professionelle IT-Betreuung für Ihr Unternehmen." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <BackToHomeButton />

      <SubpageHero
        title="Ihre IT läuft einfach. Wir kümmern uns um alles."
        description="Verlässliche Managed IT-Services (MSP): Von automatischem Monitoring bis zu sicheren Updates – damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
        icon={<Shield className="w-16 h-16 text-primary" />}
      />

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Was wir für Sie tun
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere Managed IT-Services sorgen dafür, dass Ihre IT-Infrastruktur 
              zuverlässig, sicher und auf dem neuesten Stand bleibt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-3 text-center">
                    {feature.benefit}
                  </p>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fazit Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planbare Kosten, verlässliche IT
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mit unseren Managed IT-Services erhalten Sie feste, planbare Kosten 
              für IT-Sicherheit und -Betrieb. Das gibt Ihnen Kalkulationssicherheit 
              und ermöglicht es Ihnen, sich voll auf Ihr Kerngeschäft zu konzentrieren – 
              während wir uns um Ihre IT kümmern.
            </p>
            <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-4">Ihre Vorteile auf einen Blick</h3>
              <ul className="text-left space-y-3 text-muted-foreground max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Keine ungeplanten Ausfälle oder teure Notfall-Interventionen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Proaktive Wartung statt reaktive Fehlerbehebung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Transparente Monatsraten für bessere Budgetplanung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>Mehr Zeit für Ihr Geschäft, weniger Stress mit der IT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Individuelle Preisgestaltung für Ihre Anforderungen
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jedes Unternehmen hat unterschiedliche IT-Anforderungen. 
            Deshalb erstellen wir Ihnen ein maßgeschneidertes Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/preise">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-strong">
                Preise ansehen
              </button>
            </Link>
            <ActionButtonMenu size="lg" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für eine zuverlässige IT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Lassen Sie uns gemeinsam die beste Lösung für Ihr Unternehmen finden. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <ActionButtonMenu size="lg" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ManagedItServicesMspMonitoring;
