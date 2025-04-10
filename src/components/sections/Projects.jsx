import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Firebase Storage App',
      description: 'Android application for managing and uploading files to Firebase Storage with real-time updates.',
      technologies: ['Kotlin', 'Firebase', 'Android'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/firebaseStorage',
      image: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png',
    },
    {
      title: 'CameraX App',
      description: 'Modern Android camera application using CameraX API with advanced features.',
      technologies: ['Kotlin', 'CameraX', 'Android'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/cameraX',
      image: 'https://cdn.mos.cms.futurecdn.net/LkCZKBYEMLcVxHc4u6iVDJ.jpg',
    },
    {
      title: 'QR Scanner',
      description: 'QR code scanner application with real-time scanning capabilities.',
      technologies: ['Kotlin', 'ML Kit', 'Android'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/QR_Scanner',
      image: 'https://img.freepik.com/free-vector/qr-code-mobile-phone_78370-5881.jpg',
    },
    {
      title: 'Google Maps Integration',
      description: 'Android application showcasing Google Maps integration with custom markers and location tracking.',
      technologies: ['Kotlin', 'Google Maps', 'Android'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/googleMaps1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9n5jJ6_kQK6aElQtOFBj_tkXWosupAJVKg&s',
    },
    {
      title: 'Dashboard App',
      description: 'Modern dashboard application with real-time data visualization.',
      technologies: ['Kotlin', 'Android', 'Charts'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/dashboard',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqF1OPu_v7bTRFR6ih67ql_CrAO0kL59ADw&s',
    },
    {
      title: 'Jetpack CameraX',
      description: 'Advanced camera application using Jetpack CameraX with modern architecture.',
      technologies: ['Kotlin', 'CameraX', 'Jetpack'],
      githubUrl: 'https://github.com/ajaysundarmurugaiyan/jetpack_cameraX',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb5wXl7Gvos4A0XWQtN5mu92w9hWdl65PYg&s',
    },
  ];

  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects; 