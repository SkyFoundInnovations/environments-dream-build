import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

const Portfolio = () => {
  const comparisons = [
    { id: 1, title: "Kitchen Remodel", before: null, after: null },
    { id: 2, title: "Bathroom Renovation", before: null, after: null },
    { id: 3, title: "Living Room Redesign", before: null, after: null },
    { id: 4, title: "Basement Finishing", before: null, after: null },
    { id: 5, title: "Exterior Update", before: null, after: null },
    { id: 6, title: "Master Suite", before: null, after: null },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Before & After
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Drag the slider to see the transformation. Every project is handled 
            with care, from structural changes to the final finishes.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {comparisons.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="space-y-3"
              >
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                />
                <h3 className="font-display text-lg text-foreground">{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
