import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Before & After
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Drag the slider to see the transformation. Every project is handled 
            with care, from structural changes to the final finishes.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <div key={item.id} className="space-y-3">
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
              />
              <h3 className="font-display text-lg text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
