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

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-white text-justify">
            I am a passionate Full Stack Developer and Android Developer with expertise in creating modern, 
            responsive, and user-friendly applications. My journey in software development has equipped me 
            with a strong foundation in both mobile and web development.
          </p>
          <p className="text-lg text-white text-justify">
            I specialize in building Android applications using Kotlin and modern Android development practices, 
            as well as developing full-stack web applications using React and Node.js. My approach focuses on 
            writing clean, maintainable code and creating intuitive user experiences.
          </p>
          <p className="text-lg text-white text-justify">
            With a strong work ethic and dedication to continuous learning, I consistently push myself to stay 
            updated with the latest technologies and best practices in software development.
          </p>
          <p className="text-lg text-white text-justify">
            I believe in delivering high-quality solutions through meticulous attention to detail and a 
            commitment to excellence in every project I undertake.
          </p>
          <p className="text-lg text-white text-justify">
            I have experience in integrating AI and machine learning capabilities into applications, leveraging 
            technologies like TensorFlow and ML Kit to create intelligent features and smart recommendations 
            that enhance user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-dark p-6 rounded-lg shadow-md border hover:scale-105 transition duration-300 border-background-light"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-background-light text-white rounded-full text-sm hover:text-primary hover:border-primary transition-colors"
                  >
                    {item}
                  </span>
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