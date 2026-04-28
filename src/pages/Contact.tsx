import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import heroCampus from "@/assets/hero-campus.jpg";

const RECIPIENT_EMAIL = "srisuryacollegensp@gmail.com";
const PHONE_PRIMARY = "8297881777";
const PHONE_SECONDARY = "08814-278364";
const ADDRESS_TEXT =
  "5-1-57, 1st Ward, Sriharipeta, Near APSRTC Bus Complex, Narsapuram - 534275, W.G.Dt, AP";
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_TEXT,
)}`;
const WHATSAPP_URL = `https://wa.me/91${PHONE_PRIMARY}`;

// WhatsApp icon (inline SVG)
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);
  const [providerMenuOpen, setProviderMenuOpen] = useState(false);

  const buildEmailContent = () => {
    const subjectLine =
      formData.subject
        ? `Enquiry: ${formData.subject}`
        : "Enquiry from Sri Surya website";
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "-"}\n` +
      `Subject: ${formData.subject || "-"}\n\n` +
      `Message:\n${formData.message}`;
    return { subject: subjectLine, body };
  };

  const openInProvider = (provider: "gmail" | "yahoo" | "outlook" | "default") => {
    const { subject, body } = buildEmailContent();
    const to = encodeURIComponent(RECIPIENT_EMAIL);
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    let url = "";
    switch (provider) {
      case "gmail":
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${s}&body=${b}`;
        break;
      case "yahoo":
        url = `https://compose.mail.yahoo.com/?to=${to}&subject=${s}&body=${b}`;
        break;
      case "outlook":
        url = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${s}&body=${b}`;
        break;
      default:
        url = `mailto:${RECIPIENT_EMAIL}?subject=${s}&body=${b}`;
    }
    if (provider === "default") {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setProviderMenuOpen((v) => !v);
  };

  const buildMailLinks = () => {
    const to = encodeURIComponent(RECIPIENT_EMAIL);
    const s = encodeURIComponent("Enquiry from Sri Surya website");
    return {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${s}`,
      yahoo: `https://compose.mail.yahoo.com/?to=${to}&subject=${s}`,
      outlook: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${s}`,
      mailto: `mailto:${RECIPIENT_EMAIL}`,
    };
  };

  const mailLinks = buildMailLinks();

  return (
    <Layout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={heroCampus} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-gold font-medium text-sm uppercase tracking-wider mb-2">Get in Touch</p>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mb-8">
                Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call, or simply submit the form here.
              </p>

              <div className="space-y-6">
                {/* Address with Google Maps */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">{ADDRESS_TEXT}</p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-sm text-gold hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" /> Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>

                {/* Phone with WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Phone</h4>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href={`tel:+91${PHONE_PRIMARY}`} className="hover:text-gold transition-colors">
                          +91 {PHONE_PRIMARY}
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat on WhatsApp"
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#25D366] text-white text-xs font-medium hover:opacity-90 transition-opacity"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
                        </a>
                      </div>
                      <a href={`tel:${PHONE_SECONDARY}`} className="block hover:text-gold transition-colors">
                        {PHONE_SECONDARY}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Email with provider options */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="relative">
                    <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                    <button
                      type="button"
                      onClick={() => setEmailMenuOpen((v) => !v)}
                      className="text-muted-foreground text-sm hover:text-gold transition-colors break-all text-left"
                    >
                      {RECIPIENT_EMAIL}
                    </button>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <a
                        href={mailLinks.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Gmail
                      </a>
                      <a
                        href={mailLinks.yahoo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Yahoo
                      </a>
                      <a
                        href={mailLinks.outlook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Outlook
                      </a>
                      <a
                        href={mailLinks.mailto}
                        className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Default Mail
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Office Timings */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Office Timings</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      Mon – Sat: 8:00 AM to 6:00 PM{"\n"}Sunday: 9:00 AM to 5:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card shadow-elevated"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select Subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academics</option>
                    <option value="fees">Fee Structure</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-lg text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-accent-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

                {providerMenuOpen && (
                  <div className="mt-2 p-4 rounded-lg border border-border bg-secondary/50 space-y-3">
                    <p className="text-sm text-foreground font-medium">
                      Choose your email provider to send this message:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => openInProvider("gmail")}
                        className="px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Gmail
                      </button>
                      <button
                        type="button"
                        onClick={() => openInProvider("yahoo")}
                        className="px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Yahoo
                      </button>
                      <button
                        type="button"
                        onClick={() => openInProvider("outlook")}
                        className="px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Outlook
                      </button>
                      <button
                        type="button"
                        onClick={() => openInProvider("default")}
                        className="px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium hover:bg-gold hover:text-accent-foreground transition-colors"
                      >
                        Default Mail
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your details will be pre-filled in the chosen email app, addressed to {RECIPIENT_EMAIL}.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
