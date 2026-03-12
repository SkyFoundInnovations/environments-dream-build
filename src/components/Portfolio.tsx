import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const comparisons = [
    { id: 1, title: "Kitchen Remodel", before: null, after: null },
    { id: 2, title: "Bathroom Renovation", before: null, after: null },
    { id: 3, title: "Living Room Redesign", before: null, after: null },
    { id: 4, title: "Basement Finishing", before: null, after: null },
    { id: 5, title: "Exterior Update", before: null, after: null },
    { id: 6, title: "Master Suite", before: null, after: null },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Before & After
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Drag the slider to see the transformation. Every project is handled 
              with care, from structural changes to the final finishes.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, index) => (
            <FadeInOnScroll key={item.id} delay={index * 100}>
              <div className="space-y-3">
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                />
                <h3 className="font-display text-lg text-foreground">{item.title}</h3>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
