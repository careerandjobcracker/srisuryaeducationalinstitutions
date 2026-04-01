import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube, Instagram, Facebook, Twitter, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Vision", path: "/vision" },
  { label: "Achievements", path: "/achievements" },
  { label: "Academics", path: "/academics" },
  { label: "Events", path: "/events" },
  { label: "Faculty", path: "/faculty" },
  { label: "Community", path: "/community" },
  { label: "Contact Us", path: "/contact" },
];

const socialLinks = [
  { icon: Youtube, url: "https://www.youtube.com/@SriSuryaJuniorandDegreeCollege", label: "YouTube" },
  { icon: Instagram, url: "https://www.instagram.com/srisuryajuniorcollegenarasapur/", label: "Instagram" },
  { icon: Facebook, url: "https://www.facebook.com/srisuryaeducationalinstitutions", label: "Facebook" },
  { icon: Twitter, url: "https://twitter.com/SriSuryaEdu", label: "Twitter" },
];

export const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {socialLinks.map(({ icon: Icon, url, label }) => (
      <a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-primary-foreground/80 hover:text-gold transition-colors duration-150"
      >
        <Icon className="w-4 h-4" />
      </a>
    ))}
    <a
      href="https://wa.me/918297881777"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="text-primary-foreground/80 hover:text-gold transition-colors duration-150"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  </div>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <SocialLinks />
          <div className="hidden md:flex items-center gap-4">
            <span className="text-gold font-medium">Admissions Open 2025-26</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +91 8297881777
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background shadow-elevated">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sri Surya Educational Institutions" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-display font-bold text-primary text-lg sm:text-2xl leading-tight">Sri Surya</p>
              <p className="text-muted-foreground text-[10px] sm:text-sm">Educational Institutions</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  location.pathname === item.path
                    ? "text-gold bg-secondary"
                    : "text-foreground hover:text-gold hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 bg-gold text-accent-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity duration-150"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-gold bg-secondary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-3 bg-gold text-accent-foreground rounded-md text-sm font-semibold text-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
