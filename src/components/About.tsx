import { Button } from "@/components/ui/button";
import { Heart, Eye, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
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
  ];

  return (
    <section id="about" className="py-24 bg-section-dark relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-warm/8 blur-[80px] rounded-full translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm uppercase tracking-widest text-warm font-medium mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-section-dark-foreground mb-8 leading-tight">
              Built on
              <span className="block text-warm">Real Experience.</span>
            </h2>

            <div className="space-y-5 text-section-dark-muted font-body leading-relaxed">
              <p>
                Environments was founded on a genuine passion for building and 
                designing homes. It's more than a business — it's a commitment 
                to creating spaces that people love to live in.
              </p>
              <p>
                With years of hands-on experience in construction, 
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

            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="hero" size="lg" className="bg-warm text-warm-foreground hover:bg-warm/90 shadow-lg shadow-warm/20" asChild>
                <a href="#contact">Let's Talk About Your Project</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Values */}
          <div className="space-y-6 lg:pt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-section-dark-foreground/5 backdrop-blur-sm p-8 rounded-lg border border-section-dark-foreground/10 flex gap-5 hover:border-warm/30 transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-warm/15 p-3 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0"
                  >
                    <value.icon className="h-6 w-6 text-warm" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-section-dark-foreground mb-2 font-body">
                      {value.title}
                    </h4>
                    <p className="text-section-dark-muted font-body text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
