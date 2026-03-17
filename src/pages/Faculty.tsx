import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";
import heroCampus from "@/assets/hero-campus.jpg";
import msdLakshmiNarayana from "@/assets/faculty/msd-lakshmi-narayana.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const } }),
};

interface FacultyMember {
  name: string;
  qualification: string;
  experience: string;
  subject: string;
  category: string;
  photo?: string;
  bio?: string;
}

const facultyData: FacultyMember[] = [
  // MPC
  { name: "Sri L. Narasimha Rao", category: "MPC", subject: "Mathematics", qualification: "M.Sc., B.Ed.", experience: "18 Years" },
  { name: "Sri M. Prakash", category: "MPC", subject: "Mathematics", qualification: "M.Sc., B.Ed.", experience: "15 Years" },
  { name: "Sri K. Venkatesh", category: "MPC", subject: "Physics", qualification: "M.Sc., B.Ed.", experience: "16 Years" },
  { name: "Sri P. Reddy", category: "MPC", subject: "Physics", qualification: "M.Sc., M.Phil.", experience: "14 Years" },
  { name: "Smt. S. Lakshmi", category: "MPC", subject: "Chemistry", qualification: "M.Sc., B.Ed.", experience: "12 Years" },
  { name: "Sri K. Krishna Murthy", category: "MPC", subject: "Chemistry", qualification: "M.Sc., Ph.D.", experience: "20 Years" },
  { name: "MSD Lakshmi Narayana", category: "MPC", subject: "Chemistry", qualification: "M.Sc.", experience: "19 Years", photo: msdLakshmiNarayana, bio: "MSD Lakshmi Narayana, our highly experienced Chemistry faculty, brings 19 years of dedicated teaching expertise in JEE and EAPCET coaching. Known for his in-depth subject knowledge and result-oriented approach, he has guided countless students toward top ranks in competitive exams." },
  // BiPC
  { name: "Dr. R. Prasad", category: "BiPC", subject: "Botany", qualification: "M.Sc., Ph.D.", experience: "17 Years" },
  { name: "Smt. V. Padmavathi", category: "BiPC", subject: "Botany", qualification: "M.Sc., B.Ed.", experience: "13 Years" },
  { name: "Sri Md. Fazil", category: "BiPC", subject: "Zoology", qualification: "M.Sc., B.Ed.", experience: "15 Years" },
  { name: "Smt. G. Sarojini", category: "BiPC", subject: "Zoology", qualification: "M.Sc., M.Phil.", experience: "11 Years" },
  { name: "Sri B. Ravi Kumar", category: "BiPC", subject: "Chemistry", qualification: "M.Sc., B.Ed.", experience: "14 Years" },
  { name: "MSD Lakshmi Narayana", category: "BiPC", subject: "Chemistry", qualification: "M.Sc.", experience: "19 Years", photo: msdLakshmiNarayana, bio: "MSD Lakshmi Narayana, our highly experienced Chemistry faculty, brings 19 years of dedicated teaching expertise in JEE and EAPCET coaching. Known for his in-depth subject knowledge and result-oriented approach, he has guided countless students toward top ranks in competitive exams." },
  // Arts & Commerce
  { name: "Sri D. Suresh", category: "Arts & Commerce", subject: "Civics", qualification: "M.A., B.Ed.", experience: "16 Years" },
  { name: "Smt. K. Padma", category: "Arts & Commerce", subject: "Economics", qualification: "M.A., M.Phil.", experience: "18 Years" },
  { name: "Sri M. Raju", category: "Arts & Commerce", subject: "Commerce", qualification: "M.Com., B.Ed.", experience: "15 Years" },
  { name: "Sri A. Myle", category: "Arts & Commerce", subject: "English", qualification: "M.A., B.Ed.", experience: "12 Years" },
  { name: "Smt. R. Vijaya", category: "Arts & Commerce", subject: "Telugu", qualification: "M.A., B.Ed.", experience: "19 Years" },
];

const categories = ["All", "MPC", "BiPC", "Arts & Commerce"];

const Faculty = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? facultyData.filter((f, i, arr) => arr.findIndex(x => x.name === f.name) === i)
    : facultyData.filter(f => f.category === activeCategory);

  return (
    <Layout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={heroCampus} alt="Faculty" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Faculty</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading label="Expert Educators" title="Meet Our Distinguished Faculty" subtitle="Dedicated teachers with decades of experience committed to student success" />

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-gold text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-gold/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((faculty, i) => (
              <motion.div
                key={faculty.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-card p-6 shadow-card hover:shadow-hover transition-all"
              >
                {faculty.photo ? (
                  <img src={faculty.photo} alt={faculty.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-gold">{faculty.name.charAt(faculty.name.indexOf(' ') + 1)}</span>
                  </div>
                )}
                <h3 className="text-center font-display font-bold text-foreground text-sm">{faculty.name}</h3>
                <p className="text-center text-gold font-medium text-xs uppercase tracking-wider mt-1">{faculty.subject}</p>
                <div className="mt-4 space-y-1 text-center">
                  <p className="text-muted-foreground text-xs">{faculty.qualification}</p>
                  <p className="text-muted-foreground text-xs">{faculty.experience} Experience</p>
                  {faculty.bio && <p className="text-muted-foreground text-xs mt-2 leading-relaxed font-semibold">{faculty.bio}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
