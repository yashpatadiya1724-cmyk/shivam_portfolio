import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-gray-200 font-sans selection:bg-purple-500/30">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
