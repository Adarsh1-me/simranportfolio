import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-light/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan-glow/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">SIMRAN</h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Healthcare Management Portfolio - Compassionate, Professional, Future-Focused in Healthcare Leadership.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-light text-navy rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Me", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Professional Development", path: "/development" },
                { name: "Reflective Learning", path: "/reflective" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-primary-foreground/70 hover:text-teal-light transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-4">
              <a
                href="mailto:simranasija1@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-teal-light transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary-foreground/5 group-hover:bg-teal-light/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                simranasija1@gmail.com
              </a>
              <a
                href="tel:0220622728"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-teal-light transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary-foreground/5 group-hover:bg-teal-light/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                022 062 2728
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-teal-light transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary-foreground/5 group-hover:bg-teal-light/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-primary-foreground/60 flex items-center justify-center gap-2"
          >
            © {currentYear} Only Simran – Healthcare Management Portfolio. Made with{" "}
            <Heart className="w-4 h-4 text-teal-light fill-current" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
