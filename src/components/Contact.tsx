import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ActionButtonMenu from "@/components/ActionButtonMenu";
import { Link } from "react-router-dom";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Standort</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Besuchen Sie mich in meinem Büro am ERIN-Förderturm
(Erinstraße 7, 44575 Castrop-Rauxel)</p>
          </div>

          

          {/* Google Maps */}
          <div className="mt-12">
            <Card className="p-6">
              
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.1864566554996!2d7.305588100000001!3d51.5464799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91f85fe81c465%3A0xc454d478e58407ac!2sNeuhaus-IT%20(Inh.%20Till%20Neuhaus)!5e0!3m2!1sde!2sde!4v1759911949501!5m2!1sde!2sde" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Neuhaus-IT Standort auf Google Maps" />
              </div>
            </Card>
          </div>

          {/* Fernwartung CTA - Separates Element */}
          <div className="mt-8">
            <Card className="p-8 text-center bg-destructive/5 border-destructive/20">
              <MessageCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Fernwartung
              </h3>
              <p className="text-muted-foreground mb-6">
                Schnelle Hilfe per Remote-Zugriff
              </p>
              <Button variant="destructive" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/fernwartung">
                  Fernwartung starten
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;