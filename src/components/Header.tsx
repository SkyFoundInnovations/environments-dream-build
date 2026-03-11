import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Environments" className="h-12 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">
              Portfolio
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>513 848 9034</span>
            </div>
            <Button variant="default" size="default">
              <Mail className="h-4 w-4" />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
