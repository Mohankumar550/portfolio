import { motion } from "framer-motion";

interface Award {
  id: string;
  title: string;
  description: string;
  organization: string;
  year: string;
  icon: string;
  color: string;
}

const awards: Award[] = [
  {
    id: "hi5-award",
    title: "Hi5 Award",
    description: "Outstanding Performance Recognition",
    organization: "Ramco Systems",
    year: "2023",
    icon: "fa-trophy",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "certificate-appreciation",
    title: "Certificate of Appreciation",
    description: "Excellence in Software Development",
    organization: "Ramco Systems",
    year: "2024",
    icon: "fa-certificate",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "sih-finalist",
    title: "SIH Finalist",
    description: "Smart India Hackathon",
    organization: "Government of India",
    year: "2023",
    icon: "fa-medal",
    color: "from-orange-500 to-orange-700"
  },
  {
    id: "giac-python",
    title: "GIAC Python Coder",
    description: "Professional Certification",
    organization: "GUVI/IITM",
    year: "2023",
    icon: "fab fa-python",
    color: "from-green-500 to-green-700"
  }
];

const certifications = [
  { name: "Modern React Development", org: "Udemy", icon: "fab fa-react", color: "text-blue-400" },
  { name: "Python Programming", org: "SLA Institute", icon: "fab fa-python", color: "text-purple-400" },
  { name: "Advanced SQL & Database Design", org: "Professional", icon: "fas fa-database", color: "text-orange-400" }
];

export default function AwardsWall() {
  return (
    <section id="awards" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Awards & Recognition
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Celebrating achievements and milestones that recognize excellence in innovation, 
            performance, and technical expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="glass bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`fas ${award.icon} text-2xl`}></i>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-slate-300 text-sm mb-3">{award.description}</p>
              <p className="text-xs text-slate-400">{award.organization} • {award.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass bg-slate-800/20 px-4 py-2 rounded-lg border border-slate-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center">
                  <i className={`${cert.icon} ${cert.color} mr-2`}></i>
                  <span className="text-sm">{cert.name} - {cert.org}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
