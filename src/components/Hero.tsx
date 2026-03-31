import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fullscreen video background */}
      <div className="absolute inset-0 z-0">
        <video
          key={heroVideoAsset.asset_id}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${heroVideoAsset.url}?v=${heroVideoAsset.asset_id}`} type="video/mp4" />
        </video>
        {/* Dark overlay with green tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-section-dark/95 via-section-dark/80 to-section-dark/50" />
        {/* Warm accent glow — bottom corner */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-warm/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl py-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm uppercase tracking-widest text-warm font-medium font-body"
              >
                Redesign · Restructure · Reconnect
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
              >
                Your Home,
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-warm"
                >
                  Done Right.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-body text-lg md:text-xl text-section-dark-foreground/80 leading-relaxed max-w-lg"
              >
                Environments is a business built on real experience — rooted in 
                integrity, driven by a passion for design, and committed to doing 
                every job with care and craftsmanship.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="lg" className="text-base px-8 bg-warm text-warm-foreground hover:bg-warm/90 border-none shadow-lg shadow-warm/20" asChild>
                  <a href="#contact">
                    Get a Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" className="text-base px-8 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <a href="#portfolio">See Our Work</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
