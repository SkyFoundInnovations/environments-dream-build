import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Ready to transform your home? Contact us for a free consultation and detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground font-body">
                Get Your Free Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">Last Name</label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Project Type</label>
                <Input placeholder="Kitchen Remodel, New Construction, etc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Details</label>
                <Textarea placeholder="Tell us about your project..." rows={4} />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: Phone, title: "Call Us", details: "(555) 123-4567", sub: "Mon-Fri 7AM-6PM" },
              { icon: Mail, title: "Email Us", details: "info@environments.com", sub: "We respond within 24 hours" },
              { icon: MapPin, title: "Visit Us", details: "123 Construction Way, Builder City", sub: "By appointment" },
              { icon: Clock, title: "Hours", details: "Mon-Fri: 7AM-6PM", sub: "Sat: 8AM-4PM" },
            ].map((c, i) => (
              <Card key={i} className="border-border hover:shadow-md transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm font-body">{c.title}</h3>
                      <p className="text-foreground font-medium text-sm font-body">{c.details}</p>
                      <p className="text-xs text-muted-foreground font-body">{c.sub}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary/5 border-primary/15">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2 font-body">Emergency Services</h3>
                <p className="text-sm text-muted-foreground mb-4 font-body">24/7 emergency repairs available</p>
                <Button variant="default" size="lg">
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
