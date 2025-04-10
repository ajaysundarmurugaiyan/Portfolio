import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Android ', to: 'projects' },
    { name: 'Web ', to: 'web-projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              {/* Profile Image */}
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGn19dtiELUOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702960205533?e=1748476800&v=beta&t=t58zwFxt4J3Dk2UHomWgSTc9Pd02YduufTfRHo37DG4"
                  alt="Ajay Sundar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl sm:text-2xl font-bold text-primary">Ajay Sundar</span>
              </div>
              <div className="sm:hidden">
                <span className="text-xl font-bold text-primary">AS</span>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-primary cursor-pointer transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ajaysundarmurugaiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-sundar-7a85312a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-gray-800"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-white hover:text-primary cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            <a
              href="https://github.com/ajaysundarmurugaiyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-sundar-0a26bb249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 