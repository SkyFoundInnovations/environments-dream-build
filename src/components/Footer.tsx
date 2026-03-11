import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 py-16">
          {/* Logo & Info */}
          <div>
            <img src={logo} alt="Environments" className="h-14 w-auto brightness-0 invert mb-6" />
            <p className="text-background/80 leading-relaxed mb-6 font-body text-sm">
              A new business built on real experience — redesigning, restructuring, 
              and reconnecting homes with care and craftsmanship.
            </p>
            <div className="space-y-2 text-sm font-body">
              <div className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>513 848 9034</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@environments.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-background/80 font-body">
              <li><a href="#services" className="hover:text-background transition-colors">Custom Home Building</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Bathroom Renovation</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Room Additions</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Interior Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/80 font-body">
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 py-8">
          <div className="text-center text-sm text-background/60 font-body">
            © {new Date().getFullYear()} Environments. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
