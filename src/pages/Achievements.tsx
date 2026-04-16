import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import stateRankCec2 from "@/assets/state-rank-cec-2.jpeg";
import stateRankBipc2 from "@/assets/state-rank-bipc-2.jpeg";
import stateRankMpc2 from "@/assets/state-rank-mpc-2.jpeg";
import mlaAppreciation1 from "@/assets/mla-appreciation-1-2.jpeg";
import mlaAppreciation2 from "@/assets/mla-appreciation-2-2.jpeg";
import mlaAppreciation3 from "@/assets/mla-appreciation-3-2.jpeg";
import pomplateSeniorJunior2 from "@/assets/pomplate-senior-junior-results-2.jpeg";
import pomplateState4th2 from "@/assets/pomplate-state-4th-town-1st-2.jpeg";

const rankSlides = [
  { image: stateRankMpc2, title: "Dwara Amruthamani - MPC State Rank & Town First - 466/470", centerImage: true, duration: 6000 },
  { image: stateRankBipc2, title: "Kodi Roshini - BiPC State Rank & Town First - 441/455", centerImage: true, duration: 6000 },
  { image: stateRankCec2, title: "Sankarapu Sandhya - CEC State Rank & Town First - 461/500", centerImage: true, duration: 6000 },
  { image: pomplateSeniorJunior2, title: "Senior & Junior Inter Results - Top Scores", centerImage: true, duration: 6000 },
  { image: pomplateState4th2, title: "State 4th Rank & Town 1st - Dwara Amruthamani - 466/470", centerImage: true, duration: 6000 },
  { image: mlaAppreciation1, title: "MLA Appreciation - State Ranker Felicitation", centerImage: true, duration: 6000 },
  { image: mlaAppreciation2, title: "MLA Appreciation - State Ranker Felicitation", centerImage: true, duration: 6000 },
  { image: mlaAppreciation3, title: "MLA Appreciation - Addressing the Gathering", centerImage: true, duration: 6000 },
];

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

    {/* State Ranks Slider */}
    <section className="py-12 bg-background">
      <div className="container">
        <SectionHeading label="Top Performers" title="Sri Surya Students - State and District Ranks #2026" />
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <ImageSlider slides={rankSlides} />
        </div>
      </div>
    </section>

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
