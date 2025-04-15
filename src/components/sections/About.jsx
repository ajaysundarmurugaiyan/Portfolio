import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRobot, FaServer } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Android Development',
      icon: <FaMobileAlt />,
      items: ['Java', 'Kotlin', 'Android Studio', 'Firebase', 'REST APIs'],
    },
    {
      category: 'Web Development',
      icon: <FaCode />,
      items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
      category: 'AI Integration',
      icon: <FaRobot />,
      items: ['TensorFlow', 'ML Kit', 'AI/ML Integration', 'Computer Vision'],
    },
    {
      category: 'Backend Development',
      icon: <FaServer />,
      items: ['Node.js', 'Express', 'MongoDB', 'SQL', 'RESTful APIs'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-full bg-primary/20 rounded-full" />
          <motion.p 
            className="text-lg text-white/90 text-justify leading-relaxed pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am a passionate Full Stack Developer and Android Developer with expertise in creating modern, 
            responsive, and user-friendly applications. My journey in software development has equipped me 
            with a strong foundation in both mobile and web development.
          </motion.p>
          <motion.p 
            className="text-lg text-white/90 text-justify leading-relaxed pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I specialize in building Android applications using Kotlin and modern Android development practices, 
            as well as developing full-stack web applications using React and Node.js. My approach focuses on 
            writing clean, maintainable code and creating intuitive user experiences.
          </motion.p>
          <motion.p 
            className="text-lg text-white/90 text-justify leading-relaxed pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            With a strong work ethic and dedication to continuous learning, I consistently push myself to stay 
            updated with the latest technologies and best practices in software development.
          </motion.p>
          <motion.p 
            className="text-lg text-white/90 text-justify leading-relaxed pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I have experience in integrating AI and machine learning capabilities into applications, leveraging 
            technologies like TensorFlow and ML Kit to create intelligent features and smart recommendations 
            that enhance user experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="bg-background-dark/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-background-light/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="text-primary text-3xl mr-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-background-light/30 text-white rounded-full text-sm border border-transparent hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About; 