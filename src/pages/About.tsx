import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassModal from "@/components/ui/GlassModal";
import simranLibrary from "@/assets/simran-library.jpeg";
import { Target, Lightbulb, TrendingUp, Users, Heart, Shield, Check } from "lucide-react";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const strengths = [
    { icon: Users, title: "Leadership through coordination", desc: "Effectively organizing teams and resources to achieve healthcare goals" },
    { icon: Heart, title: "Strong interpersonal communication", desc: "Building trust and rapport with patients, families, and colleagues" },
    { icon: Target, title: "Patient-centred mindset", desc: "Always prioritizing the well-being and dignity of those in care" },
    { icon: Shield, title: "Organised and compliance-aware", desc: "Maintaining standards and regulatory requirements in healthcare settings" },
  ];

  const development = [
    { icon: TrendingUp, title: "Advanced healthcare project management", desc: "Developing skills in coordinating complex healthcare initiatives" },
    { icon: Lightbulb, title: "Digital healthcare systems", desc: "Learning modern healthcare technology and data management" },
    { icon: Target, title: "Strategic leadership exposure", desc: "Gaining experience in healthcare administration and decision-making" },
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
                  <div className="relative rounded-3xl overflow-hidden shadow-3d border border-border">
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
                ICL Graduate Business School, Auckland. With a strong academic foundation 
                in Medical Biotechnology and hands-on experience in health education, 
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
                    Retirement Village Support Staff, where I can combine healthcare knowledge, 
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
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => openModal(item.title, item.desc)}
                  className="cursor-pointer p-6 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 hover:shadow-glow transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-teal-light/20 group-hover:bg-teal-light/30 transition-colors">
                      <item.icon className="w-6 h-6 text-teal-light" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-teal-light transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-teal-light text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-4 h-4 mr-1" /> Click for details
                  </div>
                </motion.div>
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
                <Card3D onClick={() => openModal(item.title, item.desc)}>
                  <div className="p-6 text-center cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-teal-light" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlassModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        <p className="text-muted-foreground leading-relaxed">{modalContent.content}</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          This competency is essential for my career in healthcare management and contributes to 
          my effectiveness as a future Care Coordinator or Retirement Village Support Staff member.
          I continue to develop and refine this skill through practical experience and continuous learning.
        </p>
      </GlassModal>

      <Footer />
    </div>
  );
};

export default About;
