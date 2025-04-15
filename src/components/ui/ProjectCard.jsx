import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-background-dark/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-background-light/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden group">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-4">
          {githubUrl && (
            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors p-2 rounded-full bg-background-dark/50 backdrop-blur-sm"
            >
              <FaGithub size={24} />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors p-2 rounded-full bg-background-dark/50 backdrop-blur-sm"
            >
              <FaExternalLinkAlt size={24} />
            </motion.a>
          )}
        </div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-semibold text-center text-white mb-3 group-hover:text-primary transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        <p className="text-white/80 mb-6 text-justify leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-3 py-1 bg-background-light/30 text-white rounded-full text-sm border border-transparent hover:border-primary hover:text-primary transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 