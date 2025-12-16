import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import ImageLightbox from "@/components/ui/ImageLightbox";
import timeline2022 from "@/assets/timeline-2022.jpeg";
import timeline2023 from "@/assets/timeline-2023.jpeg";
import timeline2024 from "@/assets/timeline-2024.jpeg";
import simranHero from "@/assets/simran-hero.jpeg";
import { Download, Target, Briefcase, Users, Lightbulb, Network, Heart, Check } from "lucide-react";

const CV_LINK = "https://drive.google.com/file/d/1nznwL_hpF8gwimhPLY8aGol5U3gmh3c7/view?usp=drivesdk";

const Development = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const personalGoals = [
    { icon: Target, title: "Strengthen leadership capability", desc: "Developing stronger leadership skills in healthcare environments through hands-on experience and training" },
    { icon: Briefcase, title: "Improve coordination skills", desc: "Enhancing organisational and project coordination abilities for healthcare settings" },
    { icon: Lightbulb, title: "Digital healthcare proficiency", desc: "Building confidence using digital healthcare tools and modern technology systems" },
  ];

  const professionalGoals = [
    { icon: Heart, title: "Secure a Healthcare Role", desc: "Obtain a position as Care Coordinator or Retirement Village Support Staff in New Zealand" },
    { icon: Network, title: "Build Professional Network", desc: "Establish strong connections within New Zealand healthcare sector" },
    { icon: Users, title: "Community Contribution", desc: "Contribute meaningfully to community health and elderly wellbeing initiatives" },
  ];

  const milestones = [
    { year: "2022", title: "Started Teaching Career", desc: "Began as Primary Science Teacher at New Era World School, India, incorporating health education", image: timeline2022 },
    { year: "2023", title: "Lab Coordinator Role", desc: "Promoted to Biology Teacher & Lab Coordinator at Dronacharya Senior Secondary School, India with safety responsibilities", image: timeline2023 },
    { year: "2024", title: "Health Education Lead", desc: "Led health awareness campaigns as Science Educator at New Green Field School, Delhi, India", image: timeline2024 },
    { year: "2025", title: "Healthcare Management Studies", desc: "Pursuing Healthcare Management at ICL Graduate Business School, Auckland, New Zealand", image: simranHero },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/30 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Career Planning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Development</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              My journey of continuous learning and growth from India to New Zealand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="My Journey"
            subtitle="Key milestones in my professional development"
          />

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-light via-primary to-cyan-glow transform md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    className="w-6 h-6 rounded-full bg-teal-light border-4 border-background shadow-glow"
                  />
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <Card3D>
                    <div className="p-6">
                      {/* Timeline Image */}
                      <div 
                        className="mb-4 rounded-xl overflow-hidden cursor-pointer group h-40"
                        onClick={() => setLightboxImage({ src: milestone.image, alt: milestone.title })}
                      >
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-teal-light/20 text-teal-light text-sm font-semibold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </Card3D>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Goals Section */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="Personal Learning Goals"
            subtitle="Building capabilities for healthcare excellence"
            light
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personalGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="h-full p-8 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 transition-all duration-300 group text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <goal.icon className="w-8 h-8 text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-teal-light transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-primary-foreground/60">{goal.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Goals Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="Professional Goals"
            subtitle="Career objectives for making an impact in healthcare"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {professionalGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="h-full">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 flex items-center justify-center">
                      <goal.icon className="w-8 h-8 text-teal-light" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.desc}</p>
                    <div className="mt-4 flex items-center justify-center text-teal-light">
                      <Check className="w-4 h-4 mr-2" />
                      <span className="text-sm">In Progress</span>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-light/10 via-background to-cyan-glow/10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card3D>
              <div className="p-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-teal-light to-cyan-glow flex items-center justify-center shadow-glow">
                  <Download className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Download My CV</h2>
                <p className="text-muted-foreground mb-8">
                  Get my complete curriculum vitae in New Zealand format with full details of my qualifications, 
                  experience, and professional development.
                </p>
                <motion.a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-light to-primary text-primary-foreground rounded-2xl font-semibold text-lg shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV (NZ Format)
                </motion.a>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
      />
    </div>
  );
};

export default Development;
