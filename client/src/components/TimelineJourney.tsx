import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface Milestone {
  id: string;
  year: string;
  period: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  color: string;
  stats?: { label: string; value: string }[];
}

const milestones: Milestone[] = [
  {
    id: "education",
    year: "2020",
    period: "Graduation",
    title: "Computer Science Graduate",
    description: "Completed B.Tech in Computer Science with 7.22 CGPA. Built strong foundations in algorithms, data structures, and software engineering principles.",
    skills: ["Data Structures", "Algorithms", "Software Engineering"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "freelance",
    year: "2020-2022",
    period: "Freelance Era",
    title: "Independent Developer",
    description: "Honed my skills as a freelance developer, specializing in Python automation and web development. Built solutions for various clients while mastering new technologies.",
    skills: ["Python", "Automation", "Web Development"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "ramco",
    year: "2022-Present",
    period: "Corporate Journey",
    title: "Software Engineer at Ramco Systems",
    description: "Joined as a Software Engineer and quickly made impact with innovative solutions. Built enterprise-grade applications and received recognition for outstanding contributions.",
    skills: ["PySpark", "React", "Flask", "Kafka"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "from-orange-500 to-orange-700",
    stats: [
      { label: "Major Projects", value: "3+" },
      { label: "Awards Won", value: "2" }
    ]
  },
  {
    id: "recognition",
    year: "2023-2024",
    period: "Recognition",
    title: "Awards & Recognition",
    description: "Recognized for exceptional performance with Hi5 Award and Certificate of Appreciation. Also achieved Smart India Hackathon Finalist status.",
    skills: ["Leadership", "Innovation", "Excellence"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    color: "from-green-500 to-green-700"
  }
];

export default function TimelineJourney() {
  const scrollY = useScrollPosition();
  const [visibleMilestones, setVisibleMilestones] = useState<string[]>([]);
  const [characterPosition, setCharacterPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneId = entry.target.getAttribute('data-milestone');
            if (milestoneId && !visibleMilestones.includes(milestoneId)) {
              setVisibleMilestones(prev => [...prev, milestoneId]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-milestone]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleMilestones]);

  useEffect(() => {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      const journeyTop = journeySection.offsetTop;
      const journeyHeight = journeySection.offsetHeight;
      
      if (scrollY >= journeyTop && scrollY <= journeyTop + journeyHeight) {
        const progress = (scrollY - journeyTop) / journeyHeight;
        const maxPosition = journeyHeight - 100;
        setCharacterPosition(progress * maxPosition);
      }
    }
  }, [scrollY]);

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Follow along as I evolved from a curious computer science student to an award-winning software engineer, 
            one milestone at a time.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 timeline-line"></div>
          
          {/* Walking Character */}
          <motion.div 
            className="character-silhouette absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-20"
            style={{ top: `${characterPosition}px` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          {/* Timeline Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.id}
                data-milestone={milestone.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ 
                  opacity: visibleMilestones.includes(milestone.id) ? 1 : 0,
                  x: visibleMilestones.includes(milestone.id) ? 0 : (index % 2 === 0 ? -50 : 50)
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass bg-slate-800/20 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'} mb-4`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center mr-3`}>
                        <i className={`fas ${milestone.id === 'education' ? 'fa-graduation-cap' : milestone.id === 'freelance' ? 'fa-laptop-code' : milestone.id === 'ramco' ? 'fa-building' : 'fa-trophy'} text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-400">{milestone.year}</h3>
                        <p className="text-sm text-slate-400">{milestone.period}</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{milestone.title}</h4>
                    <p className="text-slate-300 mb-4">{milestone.description}</p>
                    
                    {milestone.stats && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {milestone.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                            <div className="text-xs text-slate-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                      {milestone.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full items-center justify-center z-10 relative">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.img 
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
