import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card3D from "@/components/ui/Card3D";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassModal from "@/components/ui/GlassModal";
import { BookOpen, MessageSquare, ChevronRight, Users, Layers, FileText, Shield, Heart } from "lucide-react";

interface Journal {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  fullContent: string;
  keyLearning: string;
}

const journals: Journal[] = [
  {
    id: 1,
    title: "Team Coordination in Health Campaigns",
    icon: Users,
    summary: "Structured communication and delegation improve teamwork effectiveness.",
    fullContent: "I learned how structured communication and delegation improve teamwork. This skill helped me coordinate campaigns effectively and manage group tasks with clarity and confidence. Through organizing health awareness initiatives, I discovered the importance of clear role assignments, regular check-ins, and open communication channels. This experience taught me that effective team coordination requires both planning and flexibility to adapt to changing circumstances.",
    keyLearning: "Clear communication frameworks and defined responsibilities enhance team productivity and campaign success."
  },
  {
    id: 2,
    title: "Integrating Health Education",
    icon: BookOpen,
    summary: "Theoretical knowledge becomes impactful when connected to real-world outcomes.",
    fullContent: "I learned how theoretical knowledge becomes impactful when connected to real-world health outcomes. This shaped my teaching and health promotion approach. By linking classroom concepts to practical health applications, students showed greater engagement and retention. This experience reinforced my belief that education should be purpose-driven and connected to tangible benefits for individuals and communities.",
    keyLearning: "Connecting theory to practice enhances learning outcomes and student engagement in health education."
  },
  {
    id: 3,
    title: "Lab Safety & Compliance",
    icon: Shield,
    summary: "Responsibility, risk awareness, and adherence to ethical standards.",
    fullContent: "This experience taught me responsibility, risk awareness, and adherence to ethical standards in healthcare-related environments. Managing laboratory safety protocols required me to develop systematic approaches to risk assessment, establish clear safety procedures, and ensure consistent compliance. These skills directly translate to healthcare settings where patient safety and regulatory compliance are paramount.",
    keyLearning: "Safety protocols and compliance are foundational to professional healthcare practice."
  },
  {
    id: 4,
    title: "Administrative & Documentation Skills",
    icon: FileText,
    summary: "Accurate record-keeping strengthens organisational discipline.",
    fullContent: "Maintaining accurate records strengthened my organisational discipline and reliability. Through systematic documentation practices, I developed attention to detail and consistency in record-keeping. These skills are essential in healthcare settings where accurate patient records, compliance documentation, and administrative efficiency directly impact care quality and organizational effectiveness.",
    keyLearning: "Meticulous documentation supports quality care delivery and professional accountability."
  },
  {
    id: 5,
    title: "Communication & Interpersonal Skills",
    icon: Heart,
    summary: "Empathy-driven communication builds trust with all stakeholders.",
    fullContent: "I developed empathy-driven communication that builds trust with students, parents, and colleagues. Learning to listen actively, respond with understanding, and adapt communication styles to different audiences enhanced my effectiveness as an educator and team member. These interpersonal skills form the foundation of patient-centred care in healthcare settings.",
    keyLearning: "Empathetic communication is central to building trust and delivering person-centred care."
  }
];

const peerFeedback = {
  title: "Peer Evaluation Feedback",
  content: "A peer highlighted my ability to collaborate effectively and communicate clearly during group activities. This feedback encouraged me to further improve clarity in task delegation and proactive teamwork. The recognition of my collaborative approach validated my efforts while also providing constructive direction for continued growth in team leadership."
};

const Reflective = () => {
  const [selectedJournal, setSelectedJournal] = useState<Journal | null>(null);
  const [peerModalOpen, setPeerModalOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
              <BookOpen className="w-4 h-4 inline-block mr-2" />
              Learning Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Reflective <span className="gradient-text">Learning</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights and growth from key experiences in healthcare education and coordination
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journals Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Reflective Journals"
            subtitle="Key learnings from my professional experiences"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {journals.map((journal, index) => (
              <motion.div
                key={journal.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3D onClick={() => setSelectedJournal(journal)}>
                  <div className="p-6 cursor-pointer group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 shrink-0 group-hover:shadow-glow transition-shadow">
                        <journal.icon className="w-6 h-6 text-teal-light" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-light transition-colors">
                          {journal.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{journal.summary}</p>
                        <div className="flex items-center text-teal-light text-sm font-medium">
                          Read Full Reflection
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peer Evaluation Section */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="Peer Evaluation"
            subtitle="Feedback and insights from colleagues"
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setPeerModalOpen(true)}
              className="cursor-pointer p-8 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-teal-light/30 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-teal-light/20 shrink-0">
                  <MessageSquare className="w-8 h-8 text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3 group-hover:text-teal-light transition-colors">
                    {peerFeedback.title}
                  </h3>
                  <p className="text-primary-foreground/70 line-clamp-2">
                    {peerFeedback.content}
                  </p>
                  <div className="mt-4 flex items-center text-teal-light text-sm font-medium">
                    View Full Feedback
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings Summary */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionTitle
            title="Key Takeaways"
            subtitle="Essential lessons that guide my professional practice"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {journals.map((journal, index) => (
              <motion.div
                key={journal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card3D className="h-full">
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-light/20 to-cyan-glow/20 flex items-center justify-center mb-4">
                      <journal.icon className="w-5 h-5 text-teal-light" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "{journal.keyLearning}"
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Modal */}
      <GlassModal
        isOpen={!!selectedJournal}
        onClose={() => setSelectedJournal(null)}
        title={selectedJournal?.title}
      >
        {selectedJournal && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary">
              <selectedJournal.icon className="w-6 h-6 text-teal-light" />
              <span className="font-medium">Reflective Journal Entry</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {selectedJournal.fullContent}
            </p>
            
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-light/10 to-cyan-glow/10 border border-teal-light/20">
              <h4 className="font-semibold mb-2 text-teal-light">Key Learning</h4>
              <p className="text-muted-foreground">
                {selectedJournal.keyLearning}
              </p>
            </div>
          </div>
        )}
      </GlassModal>

      {/* Peer Feedback Modal */}
      <GlassModal
        isOpen={peerModalOpen}
        onClose={() => setPeerModalOpen(false)}
        title={peerFeedback.title}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary">
            <MessageSquare className="w-6 h-6 text-teal-light" />
            <span className="font-medium">Colleague Feedback</span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg italic">
            "{peerFeedback.content}"
          </p>
          
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-light/10 to-cyan-glow/10 border border-teal-light/20">
            <h4 className="font-semibold mb-2 text-teal-light">My Response</h4>
            <p className="text-muted-foreground">
              This feedback motivates me to continue developing my collaborative and communication skills, 
              ensuring I can effectively support teams and contribute to positive healthcare outcomes.
            </p>
          </div>
        </div>
      </GlassModal>

      <Footer />
    </div>
  );
};

export default Reflective;
