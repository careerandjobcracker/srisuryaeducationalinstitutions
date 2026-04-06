import msdLakshmiNarayana from "@/assets/faculty/msd-lakshmi-narayana.jpg";
import boyiRamachandraReddy from "@/assets/faculty/boyi-ramachandra-reddy.jpg";
import sVenuGopal from "@/assets/faculty/s-venu-gopal.jpg";
import padavalaSatyanarayana from "@/assets/faculty/padavala-satyanarayana.png";
import naredlaPrakash from "@/assets/faculty/naredla-prakash.jpg";
import drMohammedFazil from "@/assets/faculty/dr-mohammed-fazil.jpg";
import tumpudiKrishnaGupta from "@/assets/faculty/tumpudi-krishna-gupta.png";
import pLeelaVenkatesh from "@/assets/faculty/p-leela-venkatesh.jpg";
import myleSrinivas from "@/assets/faculty/myle-srinivas.jpg";

export interface FacultyMember {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subject: string;
  category: string;
  photo?: string;
  bio?: string;
  detailedBio?: string;
  activities?: string[];
  achievements?: string[];
}

const facultyData: FacultyMember[] = [
  // MPC
  {
    id: "boyi-ramachandra-reddy",
    name: "Boyi. Ramachandra Reddy",
    category: "MPC",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "30 Years",
    photo: boyiRamachandraReddy,
    bio: "A veteran JEE Mathematics faculty with over 30 years of experience, renowned for his easy and effective teaching style.",
    detailedBio: "Boyi. Ramachandra Reddy is a veteran JEE Mathematics faculty member with over 30 years of teaching experience. Renowned for his easy and effective teaching style, he makes even the most complex concepts simple to understand. With a proven track record of mentoring thousands of students to top ranks in IIT-JEE, his clear explanations, deep subject knowledge, and student-friendly approach make him a highly sought-after mentor for JEE aspirants.",
    activities: [
      "Specialized IIT-JEE Mathematics coaching for over 30 years",
      "Conducted intensive crash courses and revision sessions for JEE aspirants",
      "Developed simplified study materials for complex Mathematics topics",
      "Mentored thousands of students individually for competitive exam preparation",
      "Conducted special problem-solving workshops on advanced Mathematics",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "30+ years of uninterrupted dedicated teaching service",
      "Mentored thousands of students to top ranks in IIT-JEE",
      "Renowned for making complex Mathematics concepts easy to understand",
      "Consistently produced top scorers in JEE Mathematics section",
      "Recognized as one of the most sought-after JEE Mathematics mentors in the region",
      "Awarded for outstanding contributions to Mathematics education",
    ],
  },
  {
    id: "s-venu-gopal",
    name: "Mr. S. Venu Gopal",
    category: "MPC",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "27 Years",
    photo: sVenuGopal,
    bio: "A highly experienced JEE Mathematics faculty with 27 years of excellence in teaching, renowned for his deep conceptual approach.",
    detailedBio: "Mr. Venu Gopal is a Highly Experienced JEE Mathematics Faculty with 27 years of excellence in Teaching. Renowned for his deep conceptual approach and problem-solving techniques, he has guided thousands of students toward success in JEE. His dedication, clarity in teaching and vast experience make him a pillar of support for Engineering aspirants.",
    activities: [
      "Specialized IIT-JEE Mathematics coaching for over 27 years",
      "Conducted intensive problem-solving workshops for JEE aspirants",
      "Developed comprehensive study materials focusing on conceptual clarity",
      "Mentored thousands of students individually for competitive exam preparation",
      "Conducted special revision and crash course sessions before JEE exams",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "27 years of uninterrupted dedicated teaching service",
      "Guided thousands of students toward success in JEE",
      "Renowned for deep conceptual approach and problem-solving techniques",
      "Consistently produced top scorers in JEE Mathematics section",
      "Recognized as a pillar of support for Engineering aspirants",
      "Awarded for outstanding contributions to Mathematics education",
    ],
  },
  {
    id: "msd-lakshmi-narayana",
    name: "Mr. KSD. Lakshmi Narayana",
    category: "MPC",
    subject: "Chemistry",
    qualification: "M.Sc.",
    experience: "19 Years",
    photo: msdLakshmiNarayana,
    bio: "Mr. KSD. Lakshmi Narayana, our highly experienced Chemistry faculty, brings 19 years of dedicated teaching expertise in JEE and EAPCET coaching.",
    detailedBio: "Mr. MSD. Lakshmi Narayana is one of the most highly experienced and respected Chemistry faculty members at Sri Surya Junior & Degree College, bringing 19 years of dedicated teaching expertise. Known for his in-depth subject knowledge and result-oriented approach, he has guided countless students toward top ranks in competitive exams like JEE, NEET and EAPCET. His teaching methodology combines conceptual clarity with extensive problem-solving practice, ensuring students develop a strong foundation in Chemistry.",
    activities: [
      "Specialized JEE, NEET and EAPCET Chemistry coaching for 19 years",
      "Conducted intensive crash courses before competitive exams",
      "Developed comprehensive Chemistry study materials and question banks",
      "Organized mock tests and performance analysis sessions",
      "Mentored students individually for competitive exam preparation",
      "Led Chemistry practical sessions with hands-on experiments",
      "Conducted special sessions on Physical, Organic, and Inorganic Chemistry",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "19 years of uninterrupted dedicated teaching service",
      "Guided countless students to top ranks in JEE and EAPCET",
      "Consistently produced 95%+ results in Chemistry board exams",
      "Multiple students secured seats in premier engineering and medical colleges",
      "Recognized as one of the most result-oriented Chemistry faculty in the region",
      "Awarded Best Chemistry Faculty for outstanding contributions",
      "Known for transforming weak students into top performers",
      "Developed innovative teaching methods adopted across departments",
    ],
  },
  // BiPC
  {
    id: "msd-lakshmi-narayana-bipc",
    name: "Mr. MSD. Lakshmi Narayana",
    category: "BiPC",
    subject: "Chemistry",
    qualification: "M.Sc.",
    experience: "19 Years",
    photo: msdLakshmiNarayana,
    bio: "Mr. MSD. Lakshmi Narayana, our highly experienced Chemistry faculty, brings 19 years of dedicated teaching expertise in JEE and EAPCET coaching.",
    detailedBio: "Mr. MSD. Lakshmi Narayana is one of the most highly experienced and respected Chemistry faculty members at Sri Surya Junior & Degree College, bringing 19 years of dedicated teaching expertise. Known for his in-depth subject knowledge and result-oriented approach, he has guided countless students toward top ranks in competitive exams like JEE and EAPCET.",
    activities: [
      "Specialized JEE and EAPCET Chemistry coaching for 19 years",
      "Conducted intensive crash courses before competitive exams",
      "Developed comprehensive Chemistry study materials and question banks",
      "Organized mock tests and performance analysis sessions",
      "Mentored students individually for competitive exam preparation",
    ],
    achievements: [
      "19 years of uninterrupted dedicated teaching service",
      "Guided countless students to top ranks in JEE and EAPCET",
      "Consistently produced 95%+ results in Chemistry board exams",
      "Multiple students secured seats in premier engineering and medical colleges",
      "Recognized as one of the most result-oriented Chemistry faculty in the region",
    ],
  },
  // Arts & Commerce
  {
    id: "padavala-satyanarayana",
    name: "Mr. Padavala Satyanarayana",
    qualification: "M.Sc., B.Ed.",
    experience: "13 Years",
    subject: "Mathematics",
    category: "MPC",
    photo: padavalaSatyanarayana,
    bio: "An accomplished JEE Mathematics faculty with 13 years of teaching experience, known for structured approach and clarity.",
    detailedBio:
      "Mr. Padavala Satyanarayana is an accomplished JEE Mathematics Faculty with 13 years of Teaching experience. Known for his structured approach and clarity in concepts, he helps students master problem-solving techniques essential for cracking JEE. His patient teaching style and consistent guidance make him a reliable mentor for aspiring Engineers.",
    activities: [
      "Specialized IIT-JEE Mathematics coaching with structured problem-solving techniques",
      "Developed comprehensive study materials for JEE Mathematics preparation",
      "Conducts regular doubt-clearing sessions and practice tests",
      "Mentors students individually to strengthen weak areas in Mathematics",
    ],
    achievements: [
      "13 years of dedicated teaching service in JEE Mathematics",
      "Guided numerous students toward success in competitive engineering entrance exams",
      "Recognized for patient teaching style and consistent student mentorship",
      "Known for clarity in concepts and structured approach to problem-solving",
    ],
  },
  {
    id: "naredla-prakash",
    name: "Mr. Naredla. Prakash",
    qualification: "M.Sc.",
    experience: "12 Years",
    subject: "Mathematics",
    category: "MPC",
    photo: naredlaPrakash,
    bio: "A highly experienced JEE Mathematics faculty with over 12 years of dedicated teaching expertise, known for clear explanations and strategic problem-solving.",
    detailedBio:
      "Mr. Naredla. Prakash is a highly experienced JEE Mathematics Faculty with over 12 years of dedicated teaching expertise. Known for his clear explanations and strategic approach to problem-solving, he has helped numerous students achieve top ranks in JEE. His deep subject knowledge and student-centric teaching style make him a trusted mentor for aspirants aiming for excellence.",
    activities: [
      "Specialized IIT-JEE Mathematics coaching with strategic problem-solving approach",
      "Developed comprehensive study materials for JEE Mathematics preparation",
      "Conducts regular doubt-clearing sessions and practice tests",
      "Mentors students individually to strengthen weak areas in Mathematics",
    ],
    achievements: [
      "12 years of dedicated teaching service in JEE Mathematics",
      "Helped numerous students achieve top ranks in JEE",
      "Recognized for clear explanations and student-centric teaching style",
      "Known for deep subject knowledge and strategic approach to problem-solving",
    ],
  },
  {
    id: "dr-mohammed-fazil-mpc",
    name: "Dr. Mohammed Fazil",
    qualification: "M.Sc., B.Ed., DMO, Ph.D.",
    experience: "30 Years",
    subject: "Chemistry",
    category: "MPC",
    photo: drMohammedFazil,
    bio: "A highly experienced JEE Chemistry faculty with over 30 years of teaching expertise, renowned for mastery in Organic, Inorganic and Physical Chemistry.",
    detailedBio:
      "Dr. Md. Fazil is a highly experienced JEE Chemistry Faculty with an impressive over 30 years of Teaching expertise. Renowned for his mastery in Organic, Inorganic and Physical Chemistry, he has guided countless students toward top ranks in JEE. His in-depth knowledge, conceptual clarity, and student-friendly teaching methods make him a pillar of support for serious aspirants aiming for success.",
    activities: [
      "Specialized JEE Chemistry coaching covering Organic, Inorganic and Physical Chemistry for over 30 years",
      "Conducted intensive crash courses and revision sessions for JEE aspirants",
      "Developed comprehensive Chemistry study materials and question banks",
      "Mentored countless students individually for competitive exam preparation",
      "Organized mock tests and performance analysis sessions",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "30+ years of uninterrupted dedicated teaching service in Chemistry",
      "Guided countless students toward top ranks in JEE",
      "Renowned for mastery in Organic, Inorganic and Physical Chemistry",
      "Consistently produced top scorers in JEE Chemistry section",
      "Recognized as a pillar of support for serious JEE aspirants",
      "Awarded for outstanding contributions to Chemistry education",
    ],
  },
  {
    id: "dr-mohammed-fazil-bipc",
    name: "Dr. Mohammed Fazil",
    qualification: "M.Sc., B.Ed., DMO, Ph.D.",
    experience: "30 Years",
    subject: "Chemistry",
    category: "BiPC",
    photo: drMohammedFazil,
    bio: "A highly experienced Chemistry faculty with over 30 years of teaching expertise, renowned for mastery in Organic, Inorganic and Physical Chemistry.",
    detailedBio:
      "Dr. Md. Fazil is a highly experienced Chemistry Faculty with an impressive over 30 years of Teaching expertise. Renowned for his mastery in Organic, Inorganic and Physical Chemistry, he has guided countless students toward top ranks in competitive exams. His in-depth knowledge, conceptual clarity, and student-friendly teaching methods make him a pillar of support for serious aspirants aiming for success.",
    activities: [
      "Specialized Chemistry coaching covering Organic, Inorganic and Physical Chemistry for over 30 years",
      "Conducted intensive crash courses and revision sessions for NEET and competitive exam aspirants",
      "Developed comprehensive Chemistry study materials and question banks",
      "Mentored countless students individually for competitive exam preparation",
      "Organized mock tests and performance analysis sessions",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "30+ years of uninterrupted dedicated teaching service in Chemistry",
      "Guided countless students toward top ranks in competitive exams",
      "Renowned for mastery in Organic, Inorganic and Physical Chemistry",
      "Consistently produced top scorers in Chemistry section",
      "Recognized as a pillar of support for serious aspirants",
      "Awarded for outstanding contributions to Chemistry education",
    ],
  },
  {
    id: "tumpudi-krishna-gupta-mpc",
    name: "Mr. Tumpudi Krishna Gupta",
    qualification: "M.Sc., B.Ed.",
    experience: "12 Years",
    subject: "Physics",
    category: "MPC",
    photo: tumpudiKrishnaGupta,
    bio: "A dedicated JEE Physics faculty with 12 years of teaching experience, known for making complex physics concepts easy to grasp.",
    detailedBio:
      "Mr. Tumpudi Krishna Gupta is a dedicated JEE Physics faculty with 12 years of teaching experience. His strength lies in making complex physics concepts easy to grasp through clear explanations and practical examples. With a focus on fundamentals and application-based learning, he has helped numerous students excel in JEE Physics.",
    activities: [
      "Specialized Physics coaching for JEE aspirants for over 12 years",
      "Developed clear and practical teaching methods for complex physics concepts",
      "Conducted intensive revision sessions and crash courses for JEE preparation",
      "Created comprehensive Physics study materials and problem sets",
      "Mentored students individually for application-based learning",
      "Active participation in academic planning and curriculum development",
    ],
    achievements: [
      "12 years of dedicated teaching service in Physics",
      "Helped numerous students excel in JEE Physics",
      "Recognized for making complex concepts easy to understand",
      "Consistently produced strong performers in Physics section",
      "Known for fundamentals-focused and application-based teaching approach",
      "Appreciated for clear explanations and practical examples",
    ],
  },
  {
    id: "tumpudi-krishna-gupta-bipc",
    name: "Mr. Tumpudi Krishna Gupta",
    qualification: "M.Sc., B.Ed.",
    experience: "12 Years",
    subject: "Physics",
    category: "BiPC",
    photo: tumpudiKrishnaGupta,
    bio: "A dedicated JEE Physics faculty with 12 years of teaching experience, known for making complex physics concepts easy to grasp.",
    detailedBio:
      "Mr. Tumpudi Krishna Gupta is a dedicated JEE Physics faculty with 12 years of teaching experience. His strength lies in making complex physics concepts easy to grasp through clear explanations and practical examples. With a focus on fundamentals and application-based learning, he has helped numerous students excel in JEE Physics.",
    activities: [
      "Specialized Physics coaching for JEE aspirants for over 12 years",
      "Developed clear and practical teaching methods for complex physics concepts",
      "Conducted intensive revision sessions and crash courses for competitive exam preparation",
      "Created comprehensive Physics study materials and problem sets",
      "Mentored students individually for application-based learning",
      "Active participation in academic planning and curriculum development",
    ],
    achievements: [
      "12 years of dedicated teaching service in Physics",
      "Helped numerous students excel in competitive Physics exams",
      "Recognized for making complex concepts easy to understand",
      "Consistently produced strong performers in Physics section",
      "Known for fundamentals-focused and application-based teaching approach",
      "Appreciated for clear explanations and practical examples",
    ],
  },
  {
    id: "p-leela-venkatesh-mpc",
    name: "Mr. P. Leela. Venkatesh",
    qualification: "M.Sc.",
    experience: "13 Years",
    subject: "Chemistry",
    category: "MPC",
    photo: pLeelaVenkatesh,
    bio: "An expert JEE Chemistry faculty with 13 years of teaching experience and strong command over all branches of Chemistry.",
    detailedBio:
      "Mr. P. Leela. Venkatesh is an expert JEE Chemistry faculty with 13 years of Teaching experience. His strong command over Physical, Organic, and Inorganic Chemistry, along with his clear and result-oriented teaching methods, has helped many students achieve top ranks in JEE. His passion for teaching and focus on conceptual clarity make him a valuable mentor for Engineering aspirants.",
    activities: [
      "Specialized JEE Chemistry coaching covering Physical, Organic, and Inorganic Chemistry",
      "Developed result-oriented study materials and question banks for JEE preparation",
      "Conducted intensive revision sessions and crash courses for competitive exams",
      "Mentored students individually with focus on conceptual clarity",
      "Organized mock tests and performance analysis sessions for JEE aspirants",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "13 years of dedicated teaching service in Chemistry",
      "Helped many students achieve top ranks in JEE",
      "Strong command over Physical, Organic, and Inorganic Chemistry",
      "Recognized for clear and result-oriented teaching methods",
      "Known as a valuable mentor for Engineering aspirants",
      "Appreciated for passion for teaching and focus on conceptual clarity",
    ],
  },
  {
    id: "p-leela-venkatesh-bipc",
    name: "Mr. P. Leela. Venkatesh",
    qualification: "M.Sc.",
    experience: "13 Years",
    subject: "Chemistry",
    category: "BiPC",
    photo: pLeelaVenkatesh,
    bio: "An expert JEE Chemistry faculty with 13 years of teaching experience and strong command over all branches of Chemistry.",
    detailedBio:
      "Mr. P. Leela. Venkatesh is an expert JEE Chemistry faculty with 13 years of Teaching experience. His strong command over Physical, Organic, and Inorganic Chemistry, along with his clear and result-oriented teaching methods, has helped many students achieve top ranks in JEE. His passion for teaching and focus on conceptual clarity make him a valuable mentor for Engineering aspirants.",
    activities: [
      "Specialized Chemistry coaching covering Physical, Organic, and Inorganic Chemistry",
      "Developed result-oriented study materials and question banks for competitive exams",
      "Conducted intensive revision sessions and crash courses for exam preparation",
      "Mentored students individually with focus on conceptual clarity",
      "Organized mock tests and performance analysis sessions",
      "Active participation in curriculum design and academic planning",
    ],
    achievements: [
      "13 years of dedicated teaching service in Chemistry",
      "Helped many students achieve top ranks in competitive exams",
      "Strong command over Physical, Organic, and Inorganic Chemistry",
      "Recognized for clear and result-oriented teaching methods",
      "Known as a valuable mentor for aspiring students",
      "Appreciated for passion for teaching and focus on conceptual clarity",
    ],
  },
  // BiPC - Botany
  {
    id: "myle-srinivas",
    name: "Mr. Myle. Srinivas",
    qualification: "M.Sc., B.Ed.",
    experience: "16 Years",
    subject: "Botany",
    category: "BiPC",
    photo: myleSrinivas,
    bio: "A highly experienced Botany faculty with over 16 years of dedicated teaching in NEET coaching.",
    detailedBio:
      "Mr. Myle. Srinivas is a highly experienced Botany Faculty member with over 16 years of dedicated teaching in NEET coaching. Known for his clear and engaging teaching style, he simplifies complex Botanical concepts, making them easy to understand and remember. His deep subject knowledge, combined with a student-centric approach and consistent mentoring, has helped countless students excel in NEET over the years. Mr. Srinivas's expertise and commitment make him a trusted guide for every serious NEET aspirant.",
    activities: [
      "Specialized Botany coaching for NEET aspirants",
      "Developed simplified study materials for complex Botanical concepts",
      "Consistent mentoring and guidance for NEET preparation",
      "Active participation in curriculum development for Biology programs",
    ],
    achievements: [
      "16 years of dedicated teaching service in Botany",
      "Helped countless students excel in NEET examinations",
      "Known for clear and engaging teaching style",
      "Recognized for simplifying complex Botanical concepts",
      "Trusted guide and mentor for serious NEET aspirants",
      "Deep subject knowledge with a student-centric approach",
    ],
  },
];

export const categories = ["All", "MPC", "BiPC", "Arts & Commerce"];

export default facultyData;
