import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
  story: string;
  position: { top: string; left: string };
  size: string;
}

const skills: Skill[] = [
  {
    id: "python",
    name: "Python",
    icon: "fab fa-python",
    color: "from-blue-500 to-blue-700",
    story: "Built 10+ automation tools and data pipelines, including the award-winning IPO data processing system with 95% performance improvement.",
    position: { top: "16px", left: "50%" },
    size: "w-16 h-16"
  },
  {
    id: "react",
    name: "React",
    icon: "fab fa-react",
    color: "from-cyan-500 to-cyan-700",
    story: "Developed responsive dashboards and SPAs, including real-time monitoring systems with seamless user experiences.",
    position: { top: "calc(100% - 80px)", left: "50%" },
    size: "w-16 h-16"
  },
  {
    id: "node",
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "from-green-500 to-green-700",
    story: "Built scalable backend services and APIs, handling enterprise-level data processing and real-time communications.",
    position: { top: "50%", left: "16px" },
    size: "w-16 h-16"
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fas fa-database",
    color: "from-orange-500 to-orange-700",
    story: "Optimized complex queries for enterprise databases, designed efficient schemas for quality management systems.",
    position: { top: "50%", left: "calc(100% - 80px)" },
    size: "w-16 h-16"
  },
  {
    id: "kafka",
    name: "Kafka",
    icon: "fas fa-stream",
    color: "from-purple-500 to-purple-700",
    story: "Implemented real-time data streaming for review dashboards, enabling instant data flow and processing.",
    position: { top: "32px", left: "32px" },
    size: "w-12 h-12"
  },
  {
    id: "docker",
    name: "Docker",
    icon: "fab fa-docker",
    color: "from-red-500 to-red-700",
    story: "Containerized applications for scalable deployment, ensuring consistent environments across development and production.",
    position: { top: "32px", left: "calc(100% - 80px)" },
    size: "w-12 h-12"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "fas fa-leaf",
    color: "from-indigo-500 to-indigo-700",
    story: "Designed NoSQL schemas for flexible data models, implemented efficient document storage for real-time applications.",
    position: { top: "calc(100% - 80px)", left: "32px" },
    size: "w-12 h-12"
  },
  {
    id: "flask",
    name: "Flask",
    icon: "fas fa-flask",
    color: "from-pink-500 to-pink-700",
    story: "Created RESTful APIs and web applications, built comprehensive quality management systems with workflow automation.",
    position: { top: "calc(100% - 80px)", left: "calc(100% - 80px)" },
    size: "w-12 h-12"
  },
  {
    id: "pyspark",
    name: "PySpark",
    icon: "fas fa-fire",
    color: "from-yellow-500 to-yellow-700",
    story: "Processed TB-scale datasets with 95% performance improvement, revolutionized financial data processing workflows.",
    position: { top: "64px", left: "50%" },
    size: "w-10 h-10"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "fas fa-wind",
    color: "from-teal-500 to-teal-700",
    story: "Crafted responsive, modern UI components with utility-first approach, created stunning user interfaces efficiently.",
    position: { top: "calc(100% - 104px)", left: "50%" },
    size: "w-10 h-10"
  }
];

export default function SkillsGalaxy() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const openSkillModal = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills Galaxy
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore my technical universe - hover over each skill to discover real-world applications 
            and the stories behind each technology.
          </motion.p>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 mx-auto">
            {/* Central Hub */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                MP
              </div>
            </motion.div>

            {/* Skill Orbits */}
            <motion.div 
              className="skill-galaxy absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className={`orbit-item absolute ${skill.size} bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
                  style={{ top: skill.position.top, left: skill.position.left }}
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    rotate: { duration: 1, ease: "easeOut" }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    zIndex: 20,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => openSkillModal(skill)}
                >
                  <i className={`${skill.icon} ${skill.size.includes('16') ? 'text-xl' : skill.size.includes('12') ? 'text-sm' : 'text-xs'}`}></i>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skill Detail Modal */}
        <Dialog open={!!selectedSkill} onOpenChange={closeSkillModal}>
          <DialogContent className="glass bg-slate-800/90 border border-slate-700/50">
            <DialogHeader>
              <div className="flex items-center mb-4">
                {selectedSkill && (
                  <>
                    <div className={`w-12 h-12 bg-gradient-to-br ${selectedSkill.color} rounded-lg flex items-center justify-center mr-3`}>
                      <i className={`${selectedSkill.icon} text-lg`}></i>
                    </div>
                    <div>
                      <DialogTitle className="text-xl font-bold">{selectedSkill.name}</DialogTitle>
                      <p className="text-sm text-slate-400">Technology</p>
                    </div>
                  </>
                )}
              </div>
            </DialogHeader>
            {selectedSkill && (
              <div>
                <p className="text-slate-300 mb-4">{selectedSkill.story}</p>
                <motion.button 
                  onClick={closeSkillModal}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
