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
import stateRankMPC from "@/assets/state-rank-mpc.jpeg";
import stateRankBiPC from "@/assets/state-rank-bipc.jpeg";
import stateRankCEC from "@/assets/state-rank-cec.jpeg";
import sriSuryaHighSchool from "@/assets/sri-surya-high-school-building.jpeg";
import pomplate1 from "@/assets/pomplate-1.jpeg";
import pomplate2 from "@/assets/pomplate-2.jpeg";
import pomplate3 from "@/assets/pomplate-3.jpeg";
import pomplate4 from "@/assets/pomplate-4.jpeg";
import pomplate5 from "@/assets/pomplate-5.jpeg";
import talentTest1 from "@/assets/talent-test-1.jpeg";
import talentTest2 from "@/assets/talent-test-2.jpeg";
import mlaAppreciation1 from "@/assets/mla-appreciation-1.jpeg";
import mlaAppreciation2 from "@/assets/mla-appreciation-2.jpeg";
import mlaAppreciation3 from "@/assets/mla-appreciation-3.jpeg";
import pomplateSeniorJunior from "@/assets/pomplate-senior-junior-results.jpeg";
import pomplateState4th from "@/assets/pomplate-state-4th-town-1st.jpeg";
import ssc2026TopRank from "@/assets/ssc-2026-top-rank.jpeg";
import ssc2026TopRanksList from "@/assets/ssc-2026-top-ranks-list.jpeg";
import eapcet2025Results from "@/assets/eapcet-2025-results.jpeg";
import inter2025CollegeTopper from "@/assets/inter-2025-college-topper.jpeg";
import eapcet2025Results2 from "@/assets/eapcet-2025-results-2.jpeg";

const heroSlides = [
  { image: ssc2026TopRank, title: "2026 SSC Results - Sri Surya Top Rankers", subtitle: "Kollati Tejasri - 575/600 & Many More Achievers", centerImage: true, duration: 6000 },
  { image: ssc2026TopRanksList, title: "2026 SSC Top Ranks List", subtitle: "Sri Surya - Corporate-Level Results", centerImage: true, duration: 6000 },
  { image: stateRankMPC, title: "State Rank & Town First - MPC", subtitle: "Dwara Amruthamani - 466/470", centerImage: true, duration: 6000 },
  { image: stateRankBiPC, title: "State Rank & Town First - BiPC", subtitle: "Kodi Roshini - 441/455", centerImage: true, duration: 6000 },
  { image: stateRankCEC, title: "State Rank & Town First - CEC", subtitle: "Sankarapu Sandhya - 461/500", centerImage: true, duration: 6000 },
  { image: pomplateSeniorJunior, title: "Senior & Junior Inter Results", subtitle: "Sri Surya - Top Scores in MPC, MEC & BiPC", centerImage: true, duration: 6000 },
  { image: pomplateState4th, title: "State 4th Rank & Town 1st", subtitle: "Dwara Amruthamani - 466/470 - IIT JEE/NEET Academy", centerImage: true, duration: 6000 },
  { image: mlaAppreciation1, title: "MLA Appreciation - Student Felicitation", subtitle: "Sri Surya Top Rankers Appreciated by MLA", centerImage: true, duration: 6000 },
  { image: mlaAppreciation2, title: "MLA Appreciation - Student Achievement", subtitle: "Recognizing Excellence at Sri Surya", centerImage: true, duration: 6000 },
  { image: mlaAppreciation3, title: "MLA Appreciation - Address", subtitle: "MLA Addressing Sri Surya Achievers", centerImage: true, duration: 6000 },
  { image: logoNew, title: "Sri Surya Junior & Degree College", subtitle: "To Search For Bright - Narasapur", centerImage: true },
  { image: correspondentSir, title: "Gantsala Brahmajee", subtitle: "- Secretary and Correspondent", centerImage: true },
  { image: heroCampus, title: "Building Future Leaders", subtitle: "Sri Surya Educational Institutions: Empowering students in Narasapuram with a legacy of top ranks and holistic development." },
  { image: heroStudents, title: "Academic Excellence in West Godavari", subtitle: "Consistently producing top rankers in Board Exams, EAMCET, and NEET with dedicated faculty and modern facilities." },
  { image: heroLab, title: "World-Class Facilities", subtitle: "State-of-the-art laboratories, smart classrooms, and a supportive learning environment for every student." },
  { image: sriSuryaHighSchool, title: "Sri Surya High School", subtitle: "Narasapuram", duration: 6000 },
  { image: pomplate1, title: "EAPCET 2025 Top Rankers", subtitle: "Sri Surya - Always Number One in Narasapuram", centerImage: true, duration: 6000 },
  { image: pomplate2, title: "Board Exam Toppers - MPC", subtitle: "Sensational Results by Sri Surya Students", centerImage: true, duration: 6000 },
  { image: pomplate3, title: "Pratibha Award Winner", subtitle: "Andhra Pradesh State Government Recognition", centerImage: true, duration: 6000 },
  { image: pomplate4, title: "Sri Surya E.M. High School Toppers", subtitle: "SSC Results - Quality Education Leaders", centerImage: true, duration: 6000 },
  { image: pomplate5, title: "Sri Surya Degree College Rankers", subtitle: "Felicitation of Top Performers", centerImage: true, duration: 6000 },
  { image: talentTest1, title: "Merit Scholarship Test", subtitle: "Sri Surya E.M. High School - April 2026", centerImage: true, duration: 6000 },
  { image: talentTest2, title: "Merit Scholarship Test", subtitle: "Sri Surya IIT JEE/NEET Academy", centerImage: true, duration: 6000 },
  { image: eapcet2025Results, title: "2025 EAPCET Sensational Results", subtitle: "Sri Surya Junior College - Narasapuram Top Rankers", centerImage: true, duration: 6000 },
  { image: inter2025CollegeTopper, title: "2025 Inter Results - College Toppers", subtitle: "Sri Surya Junior College - No.1 in Narasapuram", centerImage: true, duration: 6000 },
  { image: eapcet2025Results2, title: "2025 EAPCET Top Rankers", subtitle: "Sri Surya Junior College - Narasapuram Sensational Results", centerImage: true, duration: 6000 },
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

      {/* Featured Video */}
      <section className="bg-secondary py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-6">
            <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Sri Surya With State Ranks - Addressing By MLA Sir
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-elevated aspect-video">
            <iframe
              src="https://www.youtube.com/embed/_cYQNrITrmY"
              title="Sri Surya With State Ranks - Addressing By MLA Sir"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Featured Video 2 */}
      <section className="bg-background py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-6">
            <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              State 4th Ranker - Thankfulness to Sri Surya Junior College and Chairman
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-elevated aspect-video">
            <iframe
              src="https://www.youtube.com/embed/VD0m4ba1nqc"
              title="State 4th Ranker - Thankfulness to Sri Surya Junior College and Chairman"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

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
