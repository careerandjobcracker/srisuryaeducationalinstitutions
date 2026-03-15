import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import heroCampus from "@/assets/hero-campus.jpg";
import heroStudents from "@/assets/hero-students.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }),
};

const About = () => (
  <Layout>
    {/* Hero */}
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">About Us</h1>
      </div>
    </div>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Sri Surya Educational Institutions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Sri Surya Educational Institutions – a premier co-educational institution established in 2005 in the heart of Narasapuram, West Godavari District, Andhra Pradesh. This institution was founded by Founder Chairman with the vision to establish a center of academic excellence in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over two decades of experience, we offer Junior College programs (MPC, BiPC, CEC, MEC) and Degree programs, providing comprehensive education that prepares students for competitive exams like EAMCET, NEET, JEE, and more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our campus is located at 5-1-57, 1st Ward, Sriharipeta, Near APSRTC Bus Complex, Narsapuram. We take pride in our state-of-the-art laboratories, smart classrooms, library, and supportive learning environment.
            </p>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} src={heroStudents} alt="Students" className="rounded-2xl shadow-elevated w-full h-80 object-cover" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading label="Our Story" title="A Legacy of Excellence" subtitle="From humble beginnings to becoming one of the most respected educational institutions in West Godavari" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mission Statement", text: "Our mission is to develop the unique abilities and potential of each student by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens." },
            { title: "Core Values", text: "We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions. Integrity, discipline, and compassion form the foundation of everything we do." },
            { title: "Our Philosophy", text: "We follow a child-centered educational approach based on scientific observations from birth to adulthood. We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment." },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-card shadow-card">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
