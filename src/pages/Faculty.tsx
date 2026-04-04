import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";
import facultyData, { categories } from "@/data/facultyData";
import idVasu from "@/assets/faculty-id-vasu.jpeg";
import idKesava from "@/assets/faculty-id-kesava.jpeg";
import idPrakash from "@/assets/faculty-id-prakash.jpeg";
import idLakshmiNarayana from "@/assets/faculty-id-lakshmi-narayana.jpeg";
import idSivaji from "@/assets/faculty-id-sivaji.jpeg";
import idRamachandraReddy from "@/assets/faculty-id-ramachandra-reddy.jpeg";
import idVenuGopal from "@/assets/faculty-id-venu-gopal.jpeg";
import idNagaMani from "@/assets/faculty-id-naga-mani.jpeg";
import idVasanthi from "@/assets/faculty-id-vasanthi.jpeg";
import idMounika from "@/assets/faculty-id-mounika.jpeg";

const facultyIdSlides = [
  { image: idVasu, title: "K. Vasu", subtitle: "Lecturer in Mathematics", centerImage: true, duration: 8000 },
  { image: idKesava, title: "A. Kesava", subtitle: "Lecturer in Computer Science", centerImage: true, duration: 8000 },
  { image: idPrakash, title: "N. Prakash", subtitle: "Lecturer in Mathematics", centerImage: true, duration: 8000 },
  { image: idLakshmiNarayana, title: "K.S.D. Lakshminarayana", subtitle: "Lecturer in Chemistry", centerImage: true, duration: 8000 },
  { image: idSivaji, title: "A. Sivaji", subtitle: "Lecturer in Biology", centerImage: true, duration: 8000 },
  { image: idRamachandraReddy, title: "B. Ramachandra Reddy", subtitle: "Lecturer in Mathematics", centerImage: true, duration: 8000 },
  { image: idVenuGopal, title: "S. Venu Gopal", subtitle: "Lecturer in Mathematics", centerImage: true, duration: 8000 },
  { image: idNagaMani, title: "V. Nagamani", subtitle: "Lecturer in Physics", centerImage: true, duration: 8000 },
  { image: idVasanthi, title: "G. Vasanthi", subtitle: "Lecturer in Mathematics", centerImage: true, duration: 8000 },
  { image: idMounika, title: "M. Mounika", subtitle: "Lecturer in Chemistry", centerImage: true, duration: 8000 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const } }),
};

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

      {/* Faculty ID Card Slider */}
      <section className="py-12 bg-background">
        <div className="container">
          <SectionHeading label="Our Team" title="Faculty Identity Cards" subtitle="" />
        </div>
        <ImageSlider slides={facultyIdSlides} />
      </section>

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
                key={faculty.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-card p-6 shadow-card hover:shadow-hover transition-all flex flex-col"
              >
                {faculty.photo ? (
                  <img src={faculty.photo} alt={faculty.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover object-top shadow-sm" />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-gold">{faculty.name.charAt(faculty.name.indexOf(' ') + 1)}</span>
                  </div>
                )}
                <h3 className="text-center font-display font-bold text-foreground text-sm">{faculty.name}</h3>
                <p className="text-center text-gold font-medium text-xs uppercase tracking-wider mt-1">{faculty.subject}</p>
                <div className="mt-4 space-y-1 text-center">
                  <p className="text-muted-foreground text-xs">{faculty.qualification}</p>
                  <p className="text-muted-foreground text-xs">{faculty.experience} Experience</p>
                </div>
                <Link
                  to={`/faculty/${faculty.id}`}
                  className="mt-4 mx-auto inline-block text-gold hover:text-gold/80 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
