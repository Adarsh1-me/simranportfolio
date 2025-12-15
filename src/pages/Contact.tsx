import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import { Mail, Phone, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "simranasija1@gmail.com", href: "mailto:simranasija1@gmail.com" },
    { icon: Phone, label: "Phone", value: "022 062 2728", href: "tel:0220622728" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
    { icon: MapPin, label: "Location", value: "Auckland, New Zealand", href: "#" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-dark relative overflow-hidden min-h-screen flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-light/5 blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-glow/5 blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-noise opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 border border-primary-foreground/20">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's <span className="text-teal-light">Connect</span>
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-12 leading-relaxed">
                I'm always open to discussing healthcare opportunities, collaborations, 
                or just having a conversation about the future of eldercare in New Zealand.
              </p>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-teal-light/20 group-hover:bg-teal-light/30 transition-colors">
                        <item.icon className="w-5 h-5 text-teal-light" />
                      </div>
                      <div>
                        <span className="text-sm text-primary-foreground/50 block mb-1">
                          {item.label}
                        </span>
                        <span className="text-primary-foreground font-medium group-hover:text-teal-light transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-3 text-primary-foreground/60"
              >
                <Clock className="w-5 h-5 text-teal-light" />
                <span>Usually responds within 24 hours</span>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-dark rounded-3xl p-8 shadow-3d">
                <h2 className="text-2xl font-bold text-primary-foreground mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-5 py-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-teal-light/50 focus:ring-2 focus:ring-teal-light/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      className="w-full px-5 py-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-teal-light/50 focus:ring-2 focus:ring-teal-light/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={5}
                      className="w-full px-5 py-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-teal-light/50 focus:ring-2 focus:ring-teal-light/20 transition-all resize-none"
                      placeholder="Tell me about your inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-light to-primary text-primary-foreground rounded-2xl font-semibold text-lg shadow-card hover:shadow-glow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
