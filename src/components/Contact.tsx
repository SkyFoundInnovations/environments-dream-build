import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Let's Talk About Your Project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Have an idea for your home? We'd love to hear about it. Reach out for a 
            free consultation — no pressure, just a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground font-body">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-body">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-body">
                      Last Name
                    </label>
                    <Input placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(513) 555-1234" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    What are you looking for?
                  </label>
                  <Input placeholder="Kitchen remodel, bathroom renovation, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Tell us about your project
                  </label>
                  <Textarea
                    placeholder="Share any details — budget range, timeline, inspiration..."
                    rows={4}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:pt-8"
          >
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Prefer to talk?
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our team is always happy to chat over the phone. Give us a call or send a 
                text and we'll get back to you as soon as possible.
              </p>
            </div>

            <motion.div whileHover={{ x: 4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card className="border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm font-body">
                        Call or Text
                      </h4>
                      <p className="text-foreground font-medium text-sm font-body">
                        513 848 9034
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ x: 4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card className="border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm font-body">
                        Email
                      </h4>
                      <p className="text-foreground font-medium text-sm font-body">
                        info@environments.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mt-8"
            >
              <h4 className="font-display text-xl text-foreground mb-2">
                Free Consultations
              </h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Not sure where to start? That's okay. We'll come take a look, 
                listen to your ideas, and give you an honest assessment — no 
                obligation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
