import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Paintbrush, Hammer, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "Build your dream home from the ground up with our expert team and premium materials.",
      features: ["Architectural Design", "Permit Handling", "Quality Materials", "Timeline Guarantee"]
    },
    {
      icon: Wrench,
      title: "Complete Remodeling",
      description: "Transform your existing space with comprehensive renovation solutions.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing", "Room Additions"]
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Professional interior design services to create beautiful, functional spaces.",
      features: ["Space Planning", "Color Consultation", "Fixture Selection", "Project Management"]
    },
    {
      icon: Hammer,
      title: "Repair & Maintenance",
      description: "Keep your home in perfect condition with our maintenance and repair services.",
      features: ["Emergency Repairs", "Preventive Maintenance", "Inspection Services", "Warranty Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            From custom builds to complete renovations, we deliver comprehensive 
            construction and remodeling services with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader className="pb-4">
                <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground font-body">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 border border-primary/10 rounded-2xl p-12">
          <h3 className="font-display text-3xl text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Get a free consultation and detailed quote for your construction or remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
