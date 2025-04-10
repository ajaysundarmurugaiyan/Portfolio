import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';

const WebProjects = () => {
  const projects = [
    {
      title: 'Nooks Project',
      description: 'A modern e-commerce platform for books with features like user authentication, shopping cart, and order management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/nooks-project',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFWm8Zh9NYRKtrLNozRj9RDv_sKSmVY48aQ&s',
    },
    {
      title: 'Swayz Construction',
      description: 'A professional construction company website showcasing services, projects, and contact information with a modern design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/swayz-construction',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkopq0kNAeClewHLChhjQ5N9hI-He_rDDHg&s',
    },
    {
      title: "Kavin's Photography",
      description: 'A portfolio website for a professional photographer featuring a gallery, booking system, and contact form.',
      technologies: ['React', 'Tailwind CSS', 'React Router', 'EmailJS'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/kavins-photography',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAkumVzBBfRYTDFbxtVzl-vZ_3R_4kkPvEw&s',
    },
    {
      title: 'Family Expense Tracker',
      description: 'A web application for tracking family expenses with features like expense categorization, monthly reports, and budget planning.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/family-expense-tracker',
      image: 'https://m.media-amazon.com/images/I/61hLLPoi+5L._AC_UF1000,1000_QL80_.jpg',
    },
  ];

  return (
    <Section id="web-projects" title="Web Development Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default WebProjects; 