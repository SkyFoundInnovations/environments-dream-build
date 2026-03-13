import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Bath, PlusSquare, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle warm accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm/5 blur-[100px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-warm font-medium mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Every project gets our full attention — from the first conversation to 
            the final walkthrough. Here's how we can help.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300 border-border bg-card h-full hover:border-warm/30">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-warm/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-warm/20 transition-colors"
                    >
                      <service.icon className="h-6 w-6 text-warm" />
                    </motion.div>
                    <CardTitle className="text-lg font-bold text-foreground font-body">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-body leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
