import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, I'm{' '}
            <span className="text-primary">Ajay Sundar</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl text-white">
              Full Stack Developer & Android Developer
            </p>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
              Passionate about crafting seamless digital experiences, I blend creativity with precision in web and app development. From responsive websites to dynamic software solutions, I turn ideas into reality with code, ensuring efficiency and user satisfaction.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ajaysundarmurugaiyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ajay-sundar-0a26bb249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="#projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 