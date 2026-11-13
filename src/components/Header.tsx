import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => (
  <header className="bg-background border-b border-border">
    <nav aria-label="Hauptmenü" className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <Link to="/" className="font-bold text-lg text-foreground">Neuhaus-IT</Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">Leistungen<ChevronDown className="h-4 w-4" aria-hidden="true" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild><Link to="/datensicherung">Datensicherung</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
);

export default Header;
