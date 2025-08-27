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
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From custom builds to complete renovations, we offer comprehensive construction 
            and remodeling services backed by decades of experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border bg-gradient-to-b from-card to-card/80">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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