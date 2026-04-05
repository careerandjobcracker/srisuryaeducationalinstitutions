import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import logoNew from "@/assets/logo-new.jpg";
import correspondentSir from "@/assets/correspondent-sir.jpeg";
import sriSuryaSchool from "@/assets/Sri_Surya_High_School.jpeg";
import sriSuryaHighSchool from "@/assets/sri-surya-high-school-building.jpeg";
import pomplate1 from "@/assets/pomplate-1.jpeg";
import pomplate2 from "@/assets/pomplate-2.jpeg";
import pomplate3 from "@/assets/pomplate-3.jpeg";
import pomplate4 from "@/assets/pomplate-4.jpeg";
import pomplate5 from "@/assets/pomplate-5.jpeg";

const heroSlides = [
  { image: logoNew, title: "Sri Surya Junior & Degree College", subtitle: "To Search For Bright - Narasapur", centerImage: true },
  { image: correspondentSir, title: "Gantsala Brahmajee", subtitle: "- Secretary and Correspondent", centerImage: true },
  { image: heroCampus, title: "Building Future Leaders", subtitle: "Sri Surya Educational Institutions: Empowering students in Narasapuram with a legacy of top ranks and holistic development." },
  { image: heroStudents, title: "Academic Excellence in West Godavari", subtitle: "Consistently producing top rankers in Board Exams, EAMCET, and NEET with dedicated faculty and modern facilities." },
  { image: heroLab, title: "World-Class Facilities", subtitle: "State-of-the-art laboratories, smart classrooms, and a supportive learning environment for every student." },
  { image: sriSuryaHighSchool, title: "Sri Surya High School", subtitle: "Narasapuram", duration: 8000 },
  { image: pomplate1, title: "EAPCET 2025 Top Rankers", subtitle: "Sri Surya - Always Number One in Narasapuram", centerImage: true, duration: 8000 },
  { image: pomplate2, title: "Board Exam Toppers - MPC", subtitle: "Sensational Results by Sri Surya Students", centerImage: true, duration: 8000 },
  { image: pomplate3, title: "Pratibha Award Winner", subtitle: "Andhra Pradesh State Government Recognition", centerImage: true, duration: 8000 },
  { image: pomplate4, title: "Sri Surya E.M. High School Toppers", subtitle: "SSC Results - Quality Education Leaders", centerImage: true, duration: 8000 },
  { image: pomplate5, title: "Sri Surya Degree College Rankers", subtitle: "Felicitation of Top Performers", centerImage: true, duration: 8000 },
];

const campusVideos = [
  { id: "qHXVrlLsUho", key: "campus-tour", title: "Sri Surya Educational Institutions" },
  { id: "hrwNSjsjcgg", key: "annual-day", title: "Students Feedback" },
  { id: "CJirjwK5GUU", key: "lab-facilities", title: "Sri Surya Educational Institutions" },
];

const stats = [
  { icon: GraduationCap, value: "20000+", label: "Students Enrolled" },
  { icon: Users, value: "80+", label: "Expert Faculty" },
  { icon: Trophy, value: "500+", label: "Top Rankers" },
  { icon: BookOpen, value: "20+", label: "Years of Excellence" },
];

const courses = [
  { title: "IIT Foundation", desc: "Early foundation program for 8th & 9th class students aspiring for IIT-JEE", icon: "🚀" },
  { title: "NEET", desc: "Dedicated coaching for National Eligibility cum Entrance Test with expert faculty and regular mock tests", icon: "🩺" },
  { title: "JEE", desc: "Intensive preparation for Joint Entrance Examination with advanced problem-solving and top-rank strategies", icon: "⚙️" },
  { title: "MPC", desc: "Mathematics, Physics & Chemistry – Gateway to Engineering & Technology", icon: "🔬" },
  { title: "BiPC", desc: "Biology, Physics & Chemistry – Foundation for Medical & Life Sciences", icon: "🧬" },
  { title: "CEC", desc: "Civics, Economics & Commerce – Path to Law, Business & Administration", icon: "📊" },
  { title: "MEC", desc: "Mathematics, Economics & Commerce – Bridge to Finance & Management", icon: "💼" },
  { title: "HEC", desc: "History, Economics & Civics – Path to Civil Services & Humanities", icon: "📜" },
  { title: "B.Com Honours", desc: "Bachelor of Commerce with Computer Applications specialization", icon: "💻" },
  { title: "B.Sc Honours", desc: "Multiple specializations: Computer Science, Mathematics, Data Science, Agriculture, BioTechnology & Chemistry", icon: "🖥️" },
  { title: "Vocational", desc: "Job-oriented courses – MPHW (Female) & Computer Science Engineering", icon: "🛠️" },
];

const testimonials = [
  { name: "Harsha Reddy", role: "MPC Student", text: "Sri Surya Junior College has been a turning point in my academic life. The faculty here not only teach but truly guide us toward our goals. I cleared my EAMCET with great confidence thanks to their support." },
  { name: "Mrs. Shalini", role: "Parent of BiPC Student", text: "We are very happy with our daughter's performance. The teachers truly care about students' success. The college's guidance helped her get into her desired medical course." },
  { name: "Dr. R. Prasad", role: "Biology Lecturer", text: "The college environment encourages both teachers and students to grow. It's not just about marks — it's about developing strong, confident individuals." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <ImageSlider slides={heroSlides} />

      {/* Video Slider */}
      <VideoSlider videos={campusVideos} />

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center space-y-2"
              >
                <stat.icon className="w-10 h-10 mx-auto text-gold" />
                <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Where Ambition Meets Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sri Surya Educational Institutions, established in 2005, is a premier co-educational institution in Narasapuram, West Godavari District, Andhra Pradesh. We are committed to developing the unique abilities and potential of each student through an enriched educational program.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is to strive for excellence through a hands-on approach, where rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-2xl overflow-hidden shadow-elevated"
            >
              <img src={sriSuryaSchool} alt="Sri Surya Campus" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            label="Academics"
            title="Programs We Offer"
            subtitle="Comprehensive intermediate and degree programs designed to prepare students for competitive exams and successful careers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-shadow duration-300"
              >
                <span className="text-4xl">{course.icon}</span>
                <h3 className="font-display font-bold text-xl text-foreground mt-4 mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.desc}</p>
                <Link to="/academics" className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4 hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary">
        <div className="container">
          <SectionHeading
            label="Testimonials"
            title="What Our Community Says"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
                  <p className="text-gold text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-accent-foreground/80 text-sm sm:text-lg mb-8 max-w-xl mx-auto px-4">
            Join Sri Surya Educational Institutions and become part of a legacy of excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
