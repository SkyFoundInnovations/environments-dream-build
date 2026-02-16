import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import heroVideo1 from "@/assets/hero-video-1.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";
import heroVideo3 from "@/assets/hero-video-3.mp4";

const videos = [heroVideo1, heroVideo2, heroVideo3];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const activeRef = useRef<HTMLVideoElement>(null);
  const nextRef = useRef<HTMLVideoElement>(null);

  // Preload the next video
  useEffect(() => {
    setNextVideo((currentVideo + 1) % videos.length);
  }, [currentVideo]);

  const handleVideoEnd = useCallback(() => {
    // Start crossfade
    setTransitioning(true);
    
    // After fade completes, swap videos
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setTransitioning(false);
    }, 800);
  }, []);

  // Auto-play next video when it becomes current
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.currentTime = 0;
      activeRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-secondary overflow-hidden">
      {/* Background Videos with Crossfade */}
      <div className="absolute inset-0">
        {/* Active video */}
        <video
          ref={activeRef}
          key={`active-${currentVideo}`}
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Next video (preloaded, fades in) */}
        <video
          ref={nextRef}
          key={`next-${nextVideo}`}
          src={videos[nextVideo]}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ${
            transitioning ? "opacity-100" : "opacity-0"
          }`}
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
