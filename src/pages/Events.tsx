import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import EventVideoSlider from "@/components/EventVideoSlider";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import event1 from "@/assets/event-1.jpeg";
import event2 from "@/assets/event-2.jpeg";
import event3 from "@/assets/event-3.jpeg";
import event4 from "@/assets/event-4.jpeg";
import event5 from "@/assets/event-5.jpeg";
import event6 from "@/assets/event-6.jpeg";

const eventImageSlides = [
  { image: event1, title: "Mega Job Mela", subtitle: "Sri Surya Degree College, Narasapuram", duration: 8000 },
  { image: event2, title: "Award Ceremony", subtitle: "Recognizing Student Achievements", duration: 8000 },
  { image: event3, title: "Cultural Event Inauguration", subtitle: "Lamp Lighting Ceremony", duration: 8000 },
  { image: event4, title: "Teachers' Day Celebrations", subtitle: "Honoring Our Educators", duration: 8000 },
  { image: event5, title: "Classical Dance Performance", subtitle: "Teachers' Day Cultural Program", duration: 8000 },
  { image: event6, title: "Festive Celebrations", subtitle: "Students & Faculty Together", duration: 8000 },
];

const liveVideo = [
  { id: "GEym_3dPh40", title: "LIVE - Sri Surya Educational Institutions Annual Day Celebrations 2026" },
];

const eventVideos = [
  { id: "brVFoPNVo5o", title: "Teachers Day Celebrations in 2026" },
  { id: "ExAitf3kXtA", title: "Sankranti Festival Celebrations in 2024" },
  { id: "YirgIOo3Opg", title: "Teachers Day Celebrations in 2023" },
  { id: "0Ld9qPRx1XY", title: "Farewell Party 2022" },
  { id: "bb06Bl5mz64", title: "Educational Seminar" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const events = [
  { title: "Annual Day Celebrations 2025", date: "March 15, 2025", time: "10:00 AM – 4:00 PM", location: "Main Auditorium", desc: "A grand celebration of student achievements, cultural performances, and award ceremonies. Parents and community members are warmly invited.", type: "Annual" },
  { title: "Science Exhibition", date: "February 20, 2025", time: "9:00 AM – 3:00 PM", location: "Science Block", desc: "Students showcase innovative science projects and experiments. Open to all schools in West Godavari District.", type: "Academic" },
  { title: "Inter-College Sports Meet", date: "January 25, 2025", time: "8:00 AM – 5:00 PM", location: "Sports Ground", desc: "Annual sports competition featuring athletics, cricket, volleyball, and other sporting events.", type: "Sports" },
  { title: "Career Guidance Seminar", date: "December 10, 2024", time: "10:00 AM – 1:00 PM", location: "Conference Hall", desc: "Expert professionals guide students on career paths after intermediate education including engineering, medical, and management streams.", type: "Academic" },
  { title: "Republic Day Celebrations", date: "January 26, 2025", time: "9:00 AM – 12:00 PM", location: "Main Campus", desc: "Flag hoisting ceremony followed by patriotic performances and cultural programs by students.", type: "National" },
  { title: "Parent-Teacher Meet", date: "November 15, 2024", time: "10:00 AM – 2:00 PM", location: "Classrooms", desc: "Regular interaction between parents and teachers to discuss student progress and academic performance.", type: "Meeting" },
];

const Events = () => (
  <Layout>
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img src={heroStudents} alt="Events" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Events</h1>
      </div>
    </div>

    <EventVideoSlider videos={liveVideo} title="LIVE - Sri Surya Educational Institutions Annual Day Celebrations 2026" />
    <EventVideoSlider videos={eventVideos} title="Sri Surya Educational Institutions  Events" />

    <section className="py-12 bg-background">
      <div className="container">
        <SectionHeading label="Photo Gallery" title="Sri Surya Educational Institutions Events" subtitle="Glimpses from our college events and celebrations" />
        <ImageSlider slides={eventImageSlides} />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading label="What's Happening" title="Events & Activities" subtitle="Stay updated with the latest events, celebrations, and academic activities" />
        <div className="space-y-6">
          {events.map((e, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0 w-20 h-20 rounded-xl bg-gold/10 flex flex-col items-center justify-center">
                  <span className="text-gold text-xs font-medium uppercase">{e.type}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{e.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gold" />{e.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gold" />{e.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gold" />{e.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
