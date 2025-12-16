import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import simranHero from "@/assets/simran-hero.jpeg";
import { useState } from "react";
const Home = () => {
  const [introExpanded, setIntroExpanded] = useState(false);
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl" />
          <motion.div animate={{
          x: [0, -80, 0],
          y: [0, 80, 0]
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-glow/10 blur-3xl" />
          <motion.div animate={{
          rotate: 360
        }} transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5" />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center lg:text-left">
              
              
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
                SIMRAN
              </motion.h1>
              
              <motion.p initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Compassionate. Professional. Future-Focused in Healthcare Leadership."
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7
            }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projects">
                  <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="btn-hero group">
                    View My Work
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <motion.a href="#" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="btn-hero-outline flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-light/30 to-cyan-glow/30 blur-3xl scale-110" />
                
                {/* Image container with 3D effect */}
                <motion.div animate={{
                y: [0, -15, 0]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-3d border-2 border-primary-foreground/20">
                    <img src={simranHero} alt="Simran - Healthcare Management Professional" className="w-full h-auto object-cover aspect-[3/4]" />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} className="absolute -top-6 -right-6 w-24 h-24 border-2 border-teal-light/30 rounded-2xl" />
                  <motion.div animate={{
                  rotate: -360
                }} transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }} className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-glow/20 rounded-full blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Card Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <Card3D onClick={() => setIntroExpanded(!introExpanded)}>
              <div className="p-8 md:p-12 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-sm font-medium text-teal-light mb-2 block">About My Journey</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Who I Am</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "I am a healthcare management student committed to improving elderly care, 
                      community wellness, and ethical healthcare coordination through knowledge, 
                      compassion, and leadership."
                    </p>
                    
                    <motion.div initial={false} animate={{
                    height: introExpanded ? "auto" : 0,
                    opacity: introExpanded ? 1 : 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden">
                      <div className="pt-6 border-t border-border mt-6">
                        <p className="text-muted-foreground leading-relaxed">
                          With a strong academic foundation in Medical Biotechnology and hands-on experience 
                          in health education, team coordination, and awareness campaigns, I am driven to 
                          support quality care delivery and community well-being. My professional goal is 
                          to work as a Care Coordinator Support Worker or Retirement Village Support Staff, 
                          where I can combine healthcare knowledge, management principles, and interpersonal 
                          skills to enhance residents' quality of life.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div animate={{
                  rotate: introExpanded ? 180 : 0
                }} transition={{
                  duration: 0.3
                }} className="p-2 rounded-full bg-secondary shrink-0">
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-teal-light">
                  <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
                  Click to {introExpanded ? "collapse" : "expand"}
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Discover my professional journey, projects, and development in healthcare management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: "About Me",
            description: "Learn about my background, aspirations, and strengths",
            path: "/about",
            icon: "👤"
          }, {
            title: "Projects",
            description: "View my experience in healthcare education and coordination",
            path: "/projects",
            icon: "📋"
          }, {
            title: "Professional Development",
            description: "See my career goals and learning objectives",
            path: "/development",
            icon: "📈"
          }, {
            title: "Reflective Learning",
            description: "Read my reflections on key learning experiences",
            path: "/reflective",
            icon: "📝"
          }, {
            title: "Contact",
            description: "Get in touch for opportunities and collaboration",
            path: "/contact",
            icon: "✉️"
          }].map((item, index) => <motion.div key={item.path} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Link to={item.path} className="block h-full">
                  <motion.div whileHover={{
                scale: 1.03,
                y: -5
              }} className="h-full p-8 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 transition-all duration-300 group">
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-teal-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm">{item.description}</p>
                    <div className="mt-4 flex items-center text-teal-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;