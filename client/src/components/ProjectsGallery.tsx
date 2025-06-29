import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  metrics: string;
  icon: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "data-pipeline",
    title: "IPO Data Pipeline",
    description: "High-performance ETL pipeline built with PySpark and Parquet format, processing large datasets with optimized performance for financial data analysis.",
    technologies: ["PySpark", "Parquet", "ETL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    metrics: "95% Performance Improvement",
    icon: "fa-database",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "quality-management",
    title: "Quality Management System",
    description: "Comprehensive quality management platform built with Flask and SQL, featuring workflow automation, reporting, and real-time monitoring capabilities.",
    technologies: ["Flask", "REST API", "SQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    metrics: "Enterprise Solution",
    icon: "fa-check-circle",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "realtime-dashboard",
    title: "Real-time Review Dashboard",
    description: "Interactive dashboard built with React and Express, featuring Kafka integration for real-time data streaming and MongoDB for scalable data storage.",
    technologies: ["React", "Express", "Kafka", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    metrics: "Real-time Processing",
    icon: "fa-tachometer-alt",
    color: "from-orange-500 to-orange-700"
  }
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover the innovative solutions I've built, from data pipelines to real-time dashboards, 
            each designed to solve real-world problems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mr-3`}>
                  <i className={`fas ${project.icon} text-sm`}></i>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              
              <p className="text-slate-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-400">
                  <i className="fas fa-chart-line mr-1"></i>
                  {project.metrics}
                </div>
                <motion.button 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <i className="fas fa-arrow-right"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <i className="fas fa-external-link-alt ml-2"></i>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
