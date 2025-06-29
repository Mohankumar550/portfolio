import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-800/30 py-12 border-t border-slate-700/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.div 
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohankumar Palanisamy
            </div>
          </motion.div>
          
          <motion.p 
            className="text-slate-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Software Engineer • Creative Technologist • Problem Solver
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope text-xl"></i>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="pt-8 border-t border-slate-700/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-slate-500">
              © 2024 Mohankumar Palanisamy. Designed & Developed with ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
