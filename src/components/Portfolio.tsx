import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

import kitchenBefore from "@/assets/portfolio/kitchen-before.jpg";
import kitchenAfter from "@/assets/portfolio/kitchen-after.jpg";
import bathroomBefore from "@/assets/portfolio/bathroom-before.jpg";
import bathroomAfter from "@/assets/portfolio/bathroom-after.jpg";
import livingBefore from "@/assets/portfolio/living-before.jpg";
import livingAfter from "@/assets/portfolio/living-after.jpg";
import basementBefore from "@/assets/portfolio/basement-before.jpg";
import basementAfter from "@/assets/portfolio/basement-after.jpg";
import exteriorBefore from "@/assets/portfolio/exterior-before.jpg";
import exteriorAfter from "@/assets/portfolio/exterior-after.jpg";
import masterBefore from "@/assets/portfolio/master-before.jpg";
import masterAfter from "@/assets/portfolio/master-after.jpg";

const Portfolio = () => {
  const comparisons = [
    { id: 1, title: "Kitchen Remodel", before: kitchenBefore, after: kitchenAfter },
    { id: 2, title: "Bathroom Renovation", before: bathroomBefore, after: bathroomAfter },
    { id: 3, title: "Living Room Redesign", before: livingBefore, after: livingAfter },
    { id: 4, title: "Basement Finishing", before: basementBefore, after: basementAfter },
    { id: 5, title: "Exterior Update", before: exteriorBefore, after: exteriorAfter },
    { id: 6, title: "Master Suite", before: masterBefore, after: masterAfter },
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-section-dark relative overflow-hidden">
      {/* Accent glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-warm/5 blur-[100px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3" />

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
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-section-dark-foreground mb-6">
            Before & After
          </h2>
          <p className="text-lg text-section-dark-muted leading-relaxed font-body">
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
                <h3 className="font-display text-lg text-section-dark-foreground">{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
