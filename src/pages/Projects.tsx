import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassModal from "@/components/ui/GlassModal";
import simranTeam from "@/assets/simran-team.jpeg";
import simranLab from "@/assets/simran-lab.jpeg";
import simranOutdoor from "@/assets/simran-outdoor.jpeg";
import { Calendar, MapPin, ArrowUpRight, Briefcase } from "lucide-react";

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
    location: "New Green Field School, Delhi",
    period: "Apr 2024 – Aug 2025",
    summary: "Led preventive healthcare awareness campaigns and health education initiatives for students.",
    fullContent: "This project involved promoting preventive healthcare through health and hygiene awareness campaigns. I coordinated classroom activities, led wellness discussions, and encouraged healthy lifestyle practices among students. The outcome was increased awareness, improved engagement, and the development of my leadership and organisational skills. I designed engaging educational materials, facilitated interactive workshops, and measured the impact of health interventions on student behaviour and knowledge.",
    image: simranTeam,
    skills: ["Health Education", "Campaign Coordination", "Leadership", "Student Engagement"]
  },
  {
    id: 2,
    title: "Biology Teacher & Lab Coordinator",
    role: "Educator & Safety Manager",
    location: "Dronacharya Senior Secondary School",
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
    location: "New Era World School",
    period: "Jul 2022 – Mar 2023",
    summary: "Developed engaging science modules incorporating wellness and hygiene education.",
    fullContent: "I developed engaging science modules incorporating wellness and hygiene. Working closely with students and families enhanced my communication, trust-building, and professional empathy. This role allowed me to create age-appropriate health education content, build strong relationships with parents and guardians, and develop my skills in patient-centred communication that will be valuable in healthcare settings.",
    image: simranOutdoor,
    skills: ["Curriculum Development", "Communication", "Trust Building", "Empathy"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              A showcase of my journey in healthcare education, coordination, and community wellness initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card3D 
                  onClick={() => setSelectedProject(project)}
                  className="h-full"
                >
                  <div className="cursor-pointer group">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden rounded-t-3xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Overlay icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 p-3 rounded-2xl bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
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
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-teal-light transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      
                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border flex items-center text-teal-light text-sm font-medium">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <GlassModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-teal-light" />
                {selectedProject.location}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-teal-light" />
                {selectedProject.period}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {selectedProject.fullContent}
            </p>
            
            <div>
              <h4 className="font-semibold mb-3">Key Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-xl bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </GlassModal>

      <Footer />
    </div>
  );
};

export default Projects;
