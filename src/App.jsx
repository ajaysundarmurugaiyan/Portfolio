import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import WebProjects from './components/sections/WebProjects';
import Contact from './components/sections/Contact';
import Chatbot from './components/ui/Chatbot';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <WebProjects />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
