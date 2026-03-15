import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const achievements = [
  { year: "2024", title: "100% Pass Rate in Board Exams", desc: "All students cleared Intermediate board examinations with flying colors." },
  { year: "2023", title: "District Toppers in EAMCET", desc: "Multiple students from MPC stream secured top ranks in AP EAMCET." },
  { year: "2023", title: "NEET Qualifiers", desc: "Record number of BiPC students qualified NEET for medical admissions." },
  { year: "2022", title: "State-level Science Olympiad Winners", desc: "Students won gold and silver medals in AP State Science Olympiad." },
  { year: "2022", title: "Best College Award", desc: "Recognized as one of the best junior colleges in West Godavari District." },
  { year: "2021", title: "Sports Excellence", desc: "District champions in athletics and inter-college sports competitions." },
];

const Achievements = () => (
  <Layout>
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroStudents} alt="Students" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Achievements</h1>
      </div>
    </div>

    {/* Stats */}
    <section className="py-16 bg-gold">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Trophy, value: "500+", label: "Top Rankers" },
            { icon: Award, value: "100%", label: "Pass Rate" },
            { icon: Star, value: "50+", label: "Awards Won" },
            { icon: TrendingUp, value: "95%", label: "Higher Education" },
          ].map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-2">
              <stat.icon className="w-8 h-8 mx-auto text-accent-foreground" />
              <p className="text-3xl font-display font-bold text-accent-foreground">{stat.value}</p>
              <p className="text-accent-foreground/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading label="Our Track Record" title="A History of Excellence" />
        <div className="space-y-6">
          {achievements.map((a, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6 p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-shadow">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <span className="font-display font-bold text-gold text-sm">{a.year}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{a.title}</h3>
                <p className="text-muted-foreground text-sm">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Achievements;
