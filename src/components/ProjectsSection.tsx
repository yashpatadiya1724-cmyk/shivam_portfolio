import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolio();
  
  // Sort highlighted projects first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-gray-200">Selected Works</h2>
      <div className="relative">
        {sortedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
