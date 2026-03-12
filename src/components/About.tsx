import { Button } from "@/components/ui/button";
import { Heart, Eye, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Built on
              <span className="block text-primary">Real Experience.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Environments was founded on a genuine passion for building and 
                designing homes. It's more than a business — it's a commitment 
                to creating spaces that people love to live in.
              </p>
              <p>
                With years of hands-on experience in construction estimating, 
                our team brings deep knowledge of project costs, materials, 
                timelines, and execution. That expertise ensures every project 
                is planned with precision — no surprises, no guesswork.
              </p>
              <p>
                From full home remodels to targeted renovations, Environments 
                delivers the same level of care, craftsmanship, and attention 
                to detail on every project, regardless of size or scope.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="default" size="lg">
                Let's Talk About Your Project
              </Button>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 lg:pt-16">
            {[
              {
                icon: Heart,
                title: "Passion for the Craft",
                description:
                  "No corners cut. Every detail matters — from the framing behind the walls to the trim you see every day.",
              },
              {
                icon: Eye,
                title: "An Eye for Design",
                description:
                  "Good design is what turns a house into a home. Our team helps you choose layouts, materials, and finishes that all work together.",
              },
              {
                icon: Handshake,
                title: "Honest & Transparent",
                description:
                  "We're always upfront about costs, timelines, and what to expect. No sales pitch — just straight talk.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border flex gap-5"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 font-body">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
