import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <img src={logo} alt="Environments" className="h-14 w-auto brightness-0 invert mb-6" />
            <p className="text-background/80 leading-relaxed mb-6 max-w-md font-body text-sm">
              Transform your home with professional construction and remodeling services. 
              Over 25 years of trusted craftsmanship.
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
              <li><a href="#" className="hover:text-background transition-colors">Custom Home Building</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Bathroom Renovation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Room Additions</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Interior Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-background/80 font-body">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60 font-body">
              © 2024 Environments. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-background/60 font-body">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
