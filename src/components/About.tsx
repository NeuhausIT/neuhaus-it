import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Calendar } from "lucide-react";
import tillNeuhausPortrait from "@/assets/till-neuhaus-portrait.png";
const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Über Till Neuhaus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Seit 2017 unterstütze ich als IT-Dienstleister Unternehmen und Privathaushalte bei der digitalen Transformation mit einem besonderen Fokus auf freie Software und digitale Souveränität.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-subtle rounded-2xl shadow-strong overflow-hidden">
                <img src={tillNeuhausPortrait} alt="Till Neuhaus - IT-Berater und Geschäftsführer von Neuhaus-IT" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Mein Leitbild
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Als IT-Systempartner setze ich auf individuelle und zuverlässige Lösungen, 
                  um Ihre IT-Systeme optimal an die Anforderungen der Digitalisierung anzupassen. 
                  Mit einem starken Fokus auf freie Software (Open-Source-Software) unterstütze ich Sie dabei, 
                  digitale Souveränität und Unabhängigkeit zu erreichen.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-accent/20">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Datenschutz</h4>
                  <p className="text-sm text-muted-foreground">Höchste Sicherheit</p>
                </Card>

                <Card className="p-4 text-center bg-accent/20">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">Schnell</h4>
                  <p className="text-sm text-muted-foreground">Kurzfristig verfügbar</p>
                </Card>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;