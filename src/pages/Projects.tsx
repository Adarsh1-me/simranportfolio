import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import ImageLightbox from "@/components/ui/ImageLightbox";
import aug2024 from "@/assets/aug2024.jpeg";
import simranLab from "@/assets/simran-lab.jpeg";
import july2023 from "@/assets/july2023.jpeg";
import { Calendar, MapPin, Briefcase, ChevronDown } from "lucide-react";

interface Project {
  id: number;
  title: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  fullContent: string;
  image: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Science Educator & Health Awareness Facilitator",
    role: "Health Education Lead",
    location: "New Green Field School, Delhi, India",
    period: "Apr 2024 – Aug 2025",
    summary: "Led preventive healthcare awareness campaigns and health education initiatives for students.",
    fullContent: "This project involved promoting preventive healthcare through health and hygiene awareness campaigns. I coordinated classroom activities, led wellness discussions, and encouraged healthy lifestyle practices among students. The outcome was increased awareness, improved engagement, and the development of my leadership and organisational skills. I designed engaging educational materials, facilitated interactive workshops, and measured the impact of health interventions on student behaviour and knowledge.",
    image: aug2024,
    skills: ["Health Education", "Campaign Coordination", "Leadership", "Student Engagement"]
  },
  {
    id: 2,
    title: "Biology Teacher & Lab Coordinator",
    role: "Educator & Safety Manager",
    location: "Dronacharya Senior Secondary School, India",
    period: "Apr 2023 – Feb 2024",
    summary: "Integrated health education into biology lessons while managing laboratory safety and compliance.",
    fullContent: "I integrated health education into biology lessons while managing laboratory safety and compliance. This role strengthened my ability to balance educational delivery with regulatory responsibility and care-focused practices. I developed comprehensive safety protocols, trained students on proper lab procedures, and ensured all activities met health and safety standards. This experience enhanced my understanding of compliance requirements in healthcare-related environments.",
    image: simranLab,
    skills: ["Lab Safety", "Compliance", "Health Integration", "Training"]
  },
  {
    id: 3,
    title: "Primary Science Teacher",
    role: "Science Educator",
    location: "New Era World School, India",
    period: "Jul 2022 – Mar 2023",
    summary: "Developed engaging science modules incorporating wellness and hygiene education.",
    fullContent: "I developed engaging science modules incorporating wellness and hygiene. Working closely with students and families enhanced my communication, trust-building, and professional empathy. This role allowed me to create age-appropriate health education content, build strong relationships with parents and guardians, and develop my skills in patient-centred communication that will be valuable in healthcare settings.",
    image: july2023,
    skills: ["Curriculum Development", "Communication", "Trust Building", "Empathy"]
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/30 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 inline-block mr-2" />
              Professional Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Projects & <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my journey in healthcare education and coordination across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card3D className="overflow-hidden">
                  <div className="md:flex">
                    {/* Image */}
                    <div 
                      className="md:w-1/3 h-64 md:h-auto relative cursor-pointer group"
                      onClick={() => setLightboxImage({ src: project.image, alt: project.title })}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent md:bg-gradient-to-r" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/30">
                        <span className="text-primary-foreground text-sm font-medium px-4 py-2 bg-navy/50 rounded-lg">Click to view</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-teal-light mb-3">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.summary}</p>
                      
                      {/* Expandable content */}
                      <motion.div
                        initial={false}
                        animate={{ height: expandedProject === project.id ? "auto" : 0, opacity: expandedProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed mb-4">{project.fullContent}</p>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-sm">Key Skills Developed</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Expand button */}
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="mt-4 flex items-center gap-2 text-teal-light text-sm font-medium hover:underline"
                      >
                        {expandedProject === project.id ? "Show less" : "Read more"}
                        <motion.div
                          animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                    </div>
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
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
      />
    </div>
  );
};

export default Projects;
