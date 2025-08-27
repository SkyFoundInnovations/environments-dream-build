import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your home? Contact us today for a free consultation 
            and detailed project quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-b from-card to-card/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Get Your Free Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <Input placeholder="Kitchen Remodel, New Construction, etc." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  details: "(555) 123-4567",
                  description: "Mon-Fri 7AM-6PM, Sat 8AM-4PM"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  details: "info@environments.com",
                  description: "We'll respond within 24 hours"
                },
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  details: "123 Construction Way, Builder City, BC 12345",
                  description: "Schedule an appointment"
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  details: "Monday - Friday: 7:00 AM - 6:00 PM",
                  description: "Saturday: 8:00 AM - 4:00 PM"
                }
              ].map((contact, index) => (
                <Card key={index} className="bg-gradient-to-b from-card to-card/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {contact.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Emergency Services Available
                </h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency repairs and urgent construction needs
                </p>
                <Button variant="professional" size="lg">
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;