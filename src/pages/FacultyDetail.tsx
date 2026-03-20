import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, BookOpen, GraduationCap, Briefcase } from "lucide-react";
import facultyData from "@/data/facultyData";
import heroCampus from "@/assets/hero-campus.jpg";

const FacultyDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Find faculty, also check BiPC duplicate by base id
  const faculty = facultyData.find((f) => f.id === id);

  if (!faculty) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Faculty Not Found</h1>
          <Link to="/faculty" className="text-gold underline">← Back to Faculty</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={heroCampus} alt="Faculty" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{faculty.name}</h1>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Link to="/faculty" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Faculty
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Photo / Avatar */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              {faculty.photo ? (
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover object-top shadow-card"
                />
              ) : (
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-secondary flex items-center justify-center shadow-card">
                  <span className="text-6xl font-display font-bold text-gold">
                    {faculty.name.charAt(faculty.name.indexOf(" ") + 1)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">{faculty.name}</h2>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mt-1">{faculty.subject}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-secondary text-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <GraduationCap className="w-3.5 h-3.5" /> {faculty.qualification}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary text-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <Briefcase className="w-3.5 h-3.5" /> {faculty.experience} Experience
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {faculty.detailedBio || faculty.bio}
              </p>
            </div>
          </motion.div>

          {/* Activities */}
          {faculty.activities && faculty.activities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-display font-bold text-foreground">Activities & Contributions</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {faculty.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm border border-border"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <p className="text-foreground text-sm">{activity}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {faculty.achievements && faculty.achievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-display font-bold text-foreground">Achievements</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {faculty.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm border border-border"
                  >
                    <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FacultyDetail;
