import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional home construction and remodeling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center min-h-screen">
          <div className="max-w-2xl py-20">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="h-4 w-4 mr-2" />
              Licensed & Insured Since 1995
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Transform Your
              <span className="block text-primary">Home Vision</span>
              Into Reality
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Expert craftsmanship meets innovative design. We specialize in complete home remodeling 
              and custom construction that exceeds expectations.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "25+ Years Experience",
                "Licensed Professionals",
                "Quality Guaranteed", 
                "On-Time Completion"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>
    </section>
  );
};

export default Hero;