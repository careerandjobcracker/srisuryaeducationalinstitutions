import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const programs = [
  {
    title: "MPC – Mathematics, Physics & Chemistry",
    stream: "Junior College",
    description: "The MPC stream is designed for students who aspire to build strong careers in engineering, technology, architecture, defence services, and scientific research. The program focuses on strengthening analytical thinking, logical reasoning, and problem-solving abilities through a well-structured curriculum and experienced faculty guidance.",
    exams: ["JEE Main & Advanced", "AP EAMCET", "NDA", "Polytechnic", "Merchant Navy"],
    icon: "🔬",
  },
  {
    title: "BiPC – Biology, Physics & Chemistry",
    stream: "Junior College",
    description: "BiPC is the ideal stream for students aspiring to enter medical, dental, pharmacy, or life sciences careers. It builds a strong foundation in biology while reinforcing physics and chemistry concepts essential for competitive medical exams.",
    exams: ["NEET", "AP EAMCET (Medical)", "AIIMS", "Pharmacy Entrances", "Veterinary Sciences"],
    icon: "🧬",
  },
  {
    title: "CEC – Civics, Economics & Commerce",
    stream: "Junior College",
    description: "CEC is the ideal stream for students aiming for careers in law, business, public administration, and social sciences. It develops analytical, logical, and social understanding while building a strong foundation in commerce and economics.",
    exams: ["CLAT", "CA Foundation", "CS Foundation", "Banking Exams", "Civil Services"],
    icon: "📊",
  },
  {
    title: "MEC – Mathematics, Economics & Commerce",
    stream: "Junior College",
    description: "MEC combines quantitative skills with an understanding of commerce and economic principles, building a strong foundation for professional courses in business, finance, management, and economics.",
    exams: ["CA Foundation", "CMA", "MBA Entrance", "Banking & Insurance", "Actuarial Science"],
    icon: "💼",
  },
  {
    title: "B.Com – Bachelor of Commerce",
    stream: "Degree College",
    description: "Our B.Com program provides comprehensive knowledge of accounting, finance, taxation, and business management, preparing students for careers in commerce and industry.",
    exams: ["CA", "CMA", "MBA", "Banking", "Corporate Jobs"],
    icon: "🎓",
  },
  {
    title: "B.Sc – Bachelor of Science",
    stream: "Degree College",
    description: "The B.Sc program offers specializations in Mathematics, Physics, Chemistry, and Computer Science, providing a strong scientific foundation for higher studies and research.",
    exams: ["M.Sc", "Research", "Teaching", "IT Industry", "Government Jobs"],
    icon: "🔭",
  },
];

const Academics = () => (
  <Layout>
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroLab} alt="Laboratory" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Academics</h1>
        <p className="text-primary-foreground/70 text-lg">Programs designed for success</p>
      </div>
    </div>

    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Our Programs" title="Academic Streams" subtitle="Comprehensive programs with expert faculty, modern facilities, and proven results" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -4 }} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{p.icon}</span>
                <div>
                  <span className="text-gold text-xs font-medium uppercase tracking-wider">{p.stream}</span>
                  <h3 className="font-display font-bold text-xl text-foreground">{p.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div>
                <p className="text-xs font-medium text-foreground mb-2">Competitive Exams Preparation:</p>
                <div className="flex flex-wrap gap-2">
                  {p.exams.map((exam) => (
                    <span key={exam} className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">{exam}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Activities */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading label="Co-curricular" title="Beyond Academics" subtitle="Holistic development through sports, arts, and extracurricular activities" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Athletics & Sports", desc: "Students are passionate about sports and have the freedom to choose their discipline. We participate in inter-school, district, state, and national level competitions." },
            { title: "Performing Arts & Music", desc: "We take pride in training students in dance, drama, painting, and more. We organize exhibitions, concerts, and musical events to encourage talent." },
            { title: "In-house Publications", desc: "We have several writers who are encouraged to come up with creations regularly published in our in-house magazines. We host book sales to promote our writers." },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-card shadow-card">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Academics;
