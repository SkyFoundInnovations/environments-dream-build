import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Portfolio = () => {
  // Placeholder slots — replace with real photos when uploaded
  const projectPhotos = [
    { id: 1, label: "Before", src: null },
    { id: 2, label: "During", src: null },
    { id: 3, label: "After", src: null },
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
            First Project — Full Home Remodel
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            This was my first project as Environments — a complete home remodel 
            from start to finish. Every detail was handled with care, from 
            structural changes to the final finishes. Photos coming soon.
          </p>
        </div>

        {/* Photo Grid — placeholders for now */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projectPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden border-border">
              <CardContent className="p-0">
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="w-full h-72 bg-muted flex flex-col items-center justify-center gap-3">
                    <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                    <span className="text-sm text-muted-foreground font-body">
                      {photo.label} — Photo coming soon
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects note */}
        <div className="text-center bg-primary/5 border border-primary/10 rounded-2xl p-10">
          <h3 className="font-display text-2xl text-foreground mb-3">
            More Projects on the Way
          </h3>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every new project will be documented here. I'm just getting started, 
            and I plan to let the work speak for itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
