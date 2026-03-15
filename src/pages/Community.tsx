import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, Users, Send, ThumbsUp } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const studentPosts = [
  { author: "Ravi Kumar", role: "MPC Student", time: "2 hours ago", content: "Can anyone share the best reference books for EAMCET preparation in Physics? I need recommendations for 2nd year concepts.", likes: 12, replies: 5 },
  { author: "Priya Sharma", role: "BiPC Student", time: "5 hours ago", content: "The new biology lab equipment is amazing! We had a great practical session today on plant cell structure.", likes: 24, replies: 8 },
  { author: "Sri K. Venkatesh", role: "Physics Faculty", time: "1 day ago", content: "Reminder: Extra classes for EAMCET preparation will start from next Monday. Timings will be 4:00 PM to 6:00 PM.", likes: 45, replies: 15 },
];

const parentPosts = [
  { author: "Mrs. Lakshmi Devi", role: "Parent", time: "3 hours ago", content: "Very happy with the regular progress reports shared by the college. My daughter's performance has significantly improved this semester.", likes: 18, replies: 4 },
  { author: "Sri Ramesh Babu", role: "Parent", time: "1 day ago", content: "When is the next Parent-Teacher meeting scheduled? Would like to discuss my son's EAMCET preparation strategy.", likes: 8, replies: 3 },
  { author: "Smt. K. Padma", role: "Economics Faculty", time: "2 days ago", content: "Dear parents, mid-term exam results are now available. Please visit the college office to collect the progress cards.", likes: 32, replies: 12 },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState<"student" | "parent">("student");
  const posts = activeTab === "student" ? studentPosts : parentPosts;

  return (
    <Layout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={heroCampus} alt="Community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Community Forum</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <SectionHeading label="Connect & Engage" title="Community Forum" subtitle="A space for students, faculty, and parents to connect, share, and grow together" />

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("student")}
              className={`flex-1 py-4 rounded-xl font-display font-semibold text-sm transition-all ${
                activeTab === "student" ? "bg-gold text-accent-foreground shadow-elevated" : "bg-secondary text-foreground"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Student – Faculty
              </div>
            </button>
            <button
              onClick={() => setActiveTab("parent")}
              className={`flex-1 py-4 rounded-xl font-display font-semibold text-sm transition-all ${
                activeTab === "parent" ? "bg-gold text-accent-foreground shadow-elevated" : "bg-secondary text-foreground"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Parent – Faculty
              </div>
            </button>
          </div>

          {/* Post Input */}
          <div className="p-4 rounded-2xl bg-card shadow-card mb-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Share your thoughts, questions, or resources..."
                  className="w-full bg-secondary rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none h-20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <div className="flex justify-end mt-2">
                  <button className="px-5 py-2 bg-gold text-accent-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Send className="w-3 h-3" /> Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 rounded-2xl bg-card shadow-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-gold font-display font-bold text-sm">{post.author[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-foreground text-sm">{post.author}</span>
                      <span className="text-gold text-xs uppercase tracking-wider">{post.role}</span>
                      <span className="text-muted-foreground text-xs ml-auto">{post.time}</span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-3">{post.content}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-gold transition-colors">
                        <ThumbsUp className="w-3 h-3" /> {post.likes} Likes
                      </button>
                      <button className="flex items-center gap-1 hover:text-gold transition-colors">
                        <MessageSquare className="w-3 h-3" /> {post.replies} Replies
                      </button>
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
};

export default Community;
