import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import ImageLightbox from "@/components/ui/ImageLightbox";
import simranLibrary from "@/assets/simran-library.jpeg";
import { Target, Lightbulb, TrendingUp, Users, Heart, Shield, ChevronDown } from "lucide-react";

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [expandedStrength, setExpandedStrength] = useState<number | null>(null);
  const [expandedDev, setExpandedDev] = useState<number | null>(null);

  const strengths = [
    { icon: Users, title: "Leadership through coordination", desc: "Effectively organizing teams and resources to achieve healthcare goals", detail: "Throughout my career in India, I have demonstrated the ability to lead by coordinating teams, delegating tasks effectively, and ensuring collaborative success in health education initiatives." },
    { icon: Heart, title: "Strong interpersonal communication", desc: "Building trust and rapport with patients, families, and colleagues", detail: "My experience working with students, parents, and colleagues in educational settings has honed my ability to communicate with empathy and build lasting professional relationships." },
    { icon: Target, title: "Patient-centred mindset", desc: "Always prioritizing the well-being and dignity of those in care", detail: "I believe in putting people first, whether they are students, patients, or elderly residents. This mindset guides every professional decision I make." },
    { icon: Shield, title: "Organised and compliance-aware", desc: "Maintaining standards and regulatory requirements in healthcare settings", detail: "As a lab coordinator, I developed strong skills in maintaining compliance, following protocols, and ensuring safety standards are consistently met." },
  ];

  const development = [
    { icon: TrendingUp, title: "Advanced healthcare project management", desc: "Developing skills in coordinating complex healthcare initiatives", detail: "I am actively building expertise in project management methodologies specific to healthcare environments, preparing for roles that require oversight of complex care programs." },
    { icon: Lightbulb, title: "Digital healthcare systems", desc: "Learning modern healthcare technology and data management", detail: "As healthcare increasingly relies on technology, I am dedicating time to understanding electronic health records, telehealth platforms, and digital care coordination tools used in New Zealand." },
    { icon: Target, title: "Strategic leadership exposure", desc: "Gaining experience in healthcare administration and decision-making", detail: "Through my studies at ICL Graduate Business School, Auckland and practical experiences, I am developing strategic thinking skills essential for healthcare leadership roles." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/30 pointer-events-none" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border border-primary/5 rounded-full"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 rounded-3xl blur-2xl" />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-3d border border-border cursor-pointer"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={simranLibrary}
                      alt="Simran in professional setting"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Stats badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-card"
                  >
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">3+</span>
                      <span className="text-sm text-muted-foreground">Years Experience</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                Healthcare Professional
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Simran</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a compassionate and motivated healthcare management student at 
                ICL Graduate Business School, Auckland, New Zealand. With a strong academic foundation 
                in Medical Biotechnology from India and hands-on experience in health education, 
                team coordination, and awareness campaigns, I am driven to support 
                quality care delivery and community well-being.
              </p>
              
              <Card3D className="mb-6">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-teal-light" />
                    Career Aspiration
                  </h3>
                  <p className="text-muted-foreground">
                    My professional goal is to work as a Care Coordinator Support Worker or 
                    Retirement Village Support Staff in New Zealand, where I can combine healthcare knowledge, 
                    management principles, and interpersonal skills to enhance residents' 
                    quality of life.
                  </p>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="My Strengths"
            subtitle="Core competencies aligned with Whetten & Cameron's self-assessment framework"
            light
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-teal-light/20">
                      <item.icon className="w-6 h-6 text-teal-light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                      
                      {/* Expandable detail */}
                      <motion.div
                        initial={false}
                        animate={{ height: expandedStrength === index ? "auto" : 0, opacity: expandedStrength === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pt-4 border-t border-primary-foreground/10 text-primary-foreground/70 text-sm">
                          {item.detail}
                        </p>
                      </motion.div>
                      
                      <button
                        onClick={() => setExpandedStrength(expandedStrength === index ? null : index)}
                        className="mt-3 flex items-center gap-1 text-teal-light text-xs font-medium hover:underline"
                      >
                        {expandedStrength === index ? "Show less" : "Read more"}
                        <motion.div animate={{ rotate: expandedStrength === index ? 180 : 0 }}>
                          <ChevronDown className="w-3 h-3" />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Areas Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="Development Areas"
            subtitle="Continuously growing and expanding my healthcare management capabilities"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {development.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="h-full">
                  <div className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-teal-light" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{item.desc}</p>
                    
                    {/* Expandable detail */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedDev === index ? "auto" : 0, opacity: expandedDev === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-border text-muted-foreground text-sm text-left">
                        {item.detail}
                      </p>
                    </motion.div>
                    
                    <button
                      onClick={() => setExpandedDev(expandedDev === index ? null : index)}
                      className="mt-4 flex items-center gap-1 text-teal-light text-xs font-medium hover:underline mx-auto"
                    >
                      {expandedDev === index ? "Show less" : "Read more"}
                      <motion.div animate={{ rotate: expandedDev === index ? 180 : 0 }}>
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={simranLibrary}
        alt="Simran in professional setting"
      />
    </div>
  );
};

export default About;
