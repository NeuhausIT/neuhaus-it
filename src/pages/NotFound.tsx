import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SubpageHero
        title="404 - Seite nicht gefunden"
        description="Die von Ihnen gesuchte Seite existiert leider nicht."
        icon={<AlertCircle className="h-16 w-16 text-destructive" />}
      >
        <Button size="lg" variant="action" asChild>
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Zurück zur Startseite
          </Link>
        </Button>
      </SubpageHero>
      
      <div className="flex-1"></div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
