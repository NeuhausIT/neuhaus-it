import { Card } from "@/components/ui/card";
import { Shield, Users, Heart, Lightbulb, Target, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";

const Leitbild = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackToHomeButton />

      <SubpageHero
        title="Leitbild Neuhaus-IT"
        description="Digitale Souveränität für Menschen und Unternehmen"
        icon={<Target className="h-16 w-16 text-primary" />}
        showActionButton={false}
      />

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ich unterstütze Privatkund:innen und kleine Unternehmen dabei, digitale Technologien sicher, 
              selbstbestimmt und nachhaltig zu nutzen. Ganz bewusst setze ich auf freie Software 
              (FLOSS – Free/Libre Open Source Software), weil digitale Souveränität nur möglich ist, 
              wenn Menschen und Organisationen die Kontrolle über ihre Daten und Systeme behalten.
            </p>
          </div>

          {/* Mein Anspruch */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Mein Anspruch</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ich verbinde moderne IT-Services mit transparenten Lösungen, die langfristig tragen. 
              Ich berate verständlich, handle fair und stärke meine Kundschaft darin, eigene digitale 
              Kompetenzen aufzubauen – statt Abhängigkeiten zu schaffen.
            </p>
          </div>

          {/* Mein Versprechen */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Mein Versprechen</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">Ich stehe für:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Beratung auf Augenhöhe</h3>
                    <p className="text-sm text-muted-foreground">statt Technik-Buzzword-Feuerwerk</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vertrauenswürdige Technologien</h3>
                    <p className="text-sm text-muted-foreground">statt proprietärer Blackbox-Abhängigkeiten</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Sicherheit und Datenschutz</h3>
                    <p className="text-sm text-muted-foreground">nach besten Standards und mit dem Blick fürs Wesentliche</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Regionale Nähe</h3>
                    <p className="text-sm text-muted-foreground">in Castrop-Rauxel und Umgebung – persönlich, erreichbar, zuverlässig</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Nachhaltigkeit</h3>
                    <p className="text-sm text-muted-foreground">durch den intelligenten Einsatz langlebiger Systeme und ressourcenschonender IT</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Praxisorientierte Schulungen</h3>
                    <p className="text-sm text-muted-foreground">zu Künstlicher Intelligenz und digitaler Selbstbestimmung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Meine Mission */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Meine Mission</h2>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Ich fördere digitale Souveränität:
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                durch freie Software, Selbsthosting-Optionen, professionellen IT-Service und Wissenstransfer.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Ich gebe Menschen die Kontrolle über ihre digitale Zukunft zurück.
              </p>
            </Card>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leitbild;
