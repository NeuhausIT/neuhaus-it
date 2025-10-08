import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        size="lg" 
        variant="action" 
        asChild
        className="shadow-2xl"
      >
        <Link to="/">
          <Home className="mr-2 h-5 w-5" />
          Zurück zur Startseite
        </Link>
      </Button>
    </div>
  );
};

export default BackToHomeButton;
