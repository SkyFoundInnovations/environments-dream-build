import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Calendar, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, number: "25+", label: "Years in Business" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "95%", label: "Projects On Time" },
    { icon: Shield, number: "100%", label: "Licensed & Insured" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Building Trust Through
              <span className="block text-primary">Quality Craftsmanship</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                For over 25 years, Environments has been the trusted choice for homeowners 
                seeking exceptional construction and remodeling services.
              </p>
              <p>
                We believe every home tells a story. Our role is to help you write 
                the next chapter — whether building from scratch or transforming your 
                existing space with precision and care.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-all duration-300 border-border">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-display text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground font-body">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3 text-center">Our Values</p>
          <h3 className="font-display text-3xl text-foreground mb-12 text-center">What Drives Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                description: "We never compromise on materials or workmanship, ensuring every project meets our high standards."
              },
              {
                title: "Transparent Communication",
                description: "Clear, honest communication keeps you informed every step of the way."
              },
              {
                title: "Timely Delivery",
                description: "We respect your time and schedule, delivering projects on time and within budget."
              }
            ].map((value, index) => (
              <div key={index} className="bg-secondary/50 p-8 rounded-lg border border-border">
                <h4 className="text-lg font-bold text-foreground mb-3 font-body">{value.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
