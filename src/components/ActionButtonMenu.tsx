import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Mail, Calendar, ChevronDown } from "lucide-react";

interface ActionButtonMenuProps {
  size?: "default" | "sm" | "lg";
  className?: string;
}

const ActionButtonMenu = ({ size = "lg", className = "" }: ActionButtonMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="action" size={size} className={className}>
          Jetzt Kontakt aufnehmen
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56 bg-card border-border">
        <DropdownMenuItem 
          className="cursor-pointer py-3"
          onClick={() => window.location.href = 'tel:+4923054459886'}
        >
          <Phone className="mr-3 h-5 w-5 text-primary" />
          <span className="text-base">Anrufen</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer py-3"
          onClick={() => window.location.href = 'mailto:service@neuhaus-it.de'}
        >
          <Mail className="mr-3 h-5 w-5 text-primary" />
          <span className="text-base">E-Mail schreiben</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer py-3"
          onClick={() => window.location.href = '/terminbuchungen-preise'}
        >
          <Calendar className="mr-3 h-5 w-5 text-primary" />
          <span className="text-base">Termin buchen</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionButtonMenu;
