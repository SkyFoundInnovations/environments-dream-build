import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.03] -skew-x-12 translate-x-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-primary font-medium font-body">
                Redesign · Restructure · Reconnect
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight">
                Your Home,
                <span className="block text-primary">Done Right.</span>
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Environments is a business built on real experience — rooted in 
                estimating, driven by a passion for design, and committed to doing 
                every job with care and integrity.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                See Our Work
              </Button>
            </div>
          </div>

          {/* Right side — logo */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
