import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Calendar, Shield } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years in Business",
      description: "Trusted experience"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied homeowners"
    },
    {
      icon: Award,
      number: "95%",
      label: "Projects On Time",
      description: "Reliable delivery"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Licensed & Insured",
      description: "Full protection"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Trust Through
              <span className="block text-primary">Quality Craftsmanship</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                For over 25 years, Environments has been the trusted choice for homeowners 
                seeking exceptional construction and remodeling services. Our commitment to 
                quality craftsmanship and customer satisfaction has made us a leader in the industry.
              </p>
              
              <p>
                We believe that every home tells a story, and our role is to help you write 
                the next chapter. Whether you're building from scratch or transforming your 
                existing space, our experienced team brings your vision to life with precision 
                and care.
              </p>
              
              <p>
                Our licensed professionals use only the finest materials and latest techniques 
                to ensure your project exceeds expectations and stands the test of time.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="professional" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-card to-card/90">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on materials or workmanship, ensuring every project meets our high standards."
              },
              {
                title: "Transparent Communication",
                description: "Clear, honest communication throughout your project keeps you informed every step of the way."
              },
              {
                title: "Timely Delivery",
                description: "We respect your time and schedule, delivering projects on time and within budget."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-b from-card to-card/80 p-8 rounded-lg border border-border">
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;