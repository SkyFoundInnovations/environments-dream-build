import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">

      {/* Decorative green accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.04] -skew-x-12 translate-x-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
                We Build
                <span className="block text-primary">Environments</span>
                That Last
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Redesign · Restructure · Reconnect — transforming spaces with 
                over 25 years of expert craftsmanship and thoughtful design.
              </p>
            </div>


            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right side — large logo mark */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />
              <img 
                src={logo} 
                alt="Environments — Redesign, Restructure, Reconnect" 
                className="relative w-[420px] h-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
