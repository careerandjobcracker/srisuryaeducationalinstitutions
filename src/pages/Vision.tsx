import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Vision = () => (
  <Layout>
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Vision</h1>
      </div>
    </div>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Guiding Principles</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Shaping Tomorrow's Leaders Today</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Sri Surya Educational Institutions, our vision is to be the beacon of educational excellence in Andhra Pradesh, nurturing young minds to become responsible global citizens equipped with knowledge, character, and the skills to make a positive impact on society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Vision", text: "To be the most trusted and sought-after educational institution in Andhra Pradesh, known for academic excellence, character building, and holistic development of students." },
            { icon: Target, title: "Mission", text: "To provide quality education that empowers students to achieve their full potential, excel in competitive examinations, and become responsible citizens of tomorrow." },
            { icon: Heart, title: "Values", text: "Integrity, Discipline, Compassion, Innovation, and Excellence form the pillars of our educational philosophy. We believe in nurturing not just minds, but hearts and character." },
            { icon: Lightbulb, title: "Innovation", text: "We continuously evolve our teaching methodologies, incorporating modern technology, experiential learning, and personalized mentoring to ensure every student reaches their potential." },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-shadow">
              <item.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Vision;
