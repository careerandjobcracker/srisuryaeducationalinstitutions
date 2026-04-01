import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SocialLinks } from "./Header";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sri Surya" className="h-14 w-14 object-contain" />
              <div>
                <p className="font-display font-bold text-lg">Sri Surya</p>
                <p className="text-primary-foreground/60 text-xs">Educational Institutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering students in Narasapuram with a legacy of top ranks, holistic development, and a commitment to academic excellence since 2005.
            </p>
            <SocialLinks />
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Academics", path: "/academics" },
                { label: "Achievements", path: "/achievements" },
                { label: "Vision", path: "/vision" },
                { label: "Faculty", path: "/faculty" },
                { label: "Events", path: "/events" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-gold">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <p className="break-words">5-1-57, 1st Ward, Sriharipeta, Near APSRTC Bus Complex, Narsapuram - 534275, W.G.Dt, AP</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p>+91 8297881777</p>
                  <p>08814-278364</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <p>srisuryacollegensp@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p>Mon–Sat: 8:00 AM – 6:00 PM</p>
                  <p>Sunday: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Admissions */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-gold">Admissions 2025-26</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Applications are now open for Junior College (MPC, BiPC, CEC, MEC) and Degree programs. Join the legacy of academic excellence.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-gold text-accent-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-12">
          <h3 className="font-display font-bold text-xl text-center mb-8 text-gold">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-display font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Sri Surya High School
              </h4>
              <iframe
                title="Sri Surya High School Location"
                className="w-full h-64 rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5!2d81.69!3d16.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI2JzI0LjAiTiA4McKwNDEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Sri Surya Junior & Degree College
              </h4>
              <iframe
                title="Sri Surya Junior & Degree College Location"
                className="w-full h-64 rounded-lg transition-all duration-500"
                src="https://maps.google.com/maps?q=16.4426119%2C81.7021307&z=17&hl=en&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/maps?q=16.4426119%2C81.7021307&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Sri Surya Educational Institutions. All rights reserved.</p>
          <p>Narasapuram, West Godavari Dt, Andhra Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
