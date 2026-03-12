import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Bath, PlusSquare, Paintbrush } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description:
        "From the ground up, we work with you to plan and build a home that fits your life — designed thoughtfully and built with quality materials.",
    },
    {
      icon: Wrench,
      title: "Kitchen Remodeling",
      description:
        "The kitchen is the heart of the home. Our team helps you reimagine the layout, finishes, and flow to create a space you actually enjoy using.",
    },
    {
      icon: Bath,
      title: "Bathroom Renovation",
      description:
        "Whether it's a simple refresh or a full gut renovation, we bring an eye for design and attention to the details that matter most.",
    },
    {
      icon: PlusSquare,
      title: "Room Additions",
      description:
        "Need more space? We help you expand your home seamlessly — matching the existing structure and adding real value.",
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description:
        "Good design isn't just about looks — it's about how a space feels. We help you choose materials, colors, and layouts that work together.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Every project gets my full attention — from the first conversation to 
            the final walkthrough. Here's how I can help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardHeader className="pb-4">
                <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground font-body">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
