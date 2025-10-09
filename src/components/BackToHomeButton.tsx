import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <Button 
          size="sm" 
          variant="outline" 
          asChild
          className="gap-2"
        >
          <Link to="/">
            <Home className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BackToHomeButton;
