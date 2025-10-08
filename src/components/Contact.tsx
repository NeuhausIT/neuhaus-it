import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ActionButtonMenu from "@/components/ActionButtonMenu";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Standort</h2>
            
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 bg-gradient-subtle">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Direkter Kontakt
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefon</h4>
                      <p className="text-muted-foreground">+49 (0)2305 4459886</p>
                      <p className="text-muted-foreground">+49 (0)162 3255518</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">E-Mail</h4>
                      <p className="text-muted-foreground">hallo@neuhaus-it.de</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <ActionButtonMenu />
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Lokaler Fokus
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Servicegebiet</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Als IT-Systempartner aus Castrop-Rauxel bin ich schwerpunktmäßig im 
                      <strong> Kreis Recklinghausen</strong> sowie in den Städten 
                      <strong> Herne, Bochum und Dortmund</strong> tätig.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="p-6 text-center bg-accent/10">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Schnelle Hilfe
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Bei Notfällen und Störungen bin ich kurzfristig für Sie verfügbar.
                </p>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = 'tel:+4923054459886'}>
                  Jetzt anrufen
                </Button>
              </Card>
            </div>
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
        </div>
      </div>
    </section>;
};
export default Contact;