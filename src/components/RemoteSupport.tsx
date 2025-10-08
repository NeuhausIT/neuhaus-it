import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RemoteSupport = () => {
  return (
    <section id="remote-support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
    </section>
  );
};

export default RemoteSupport;
