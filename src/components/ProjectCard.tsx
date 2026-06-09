import React from 'react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="sticky top-24 w-full min-h-[400px] bg-[#1a1a1a] rounded-xl border border-gray-800 p-6 md:p-10 mb-20 shadow-2xl flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-5xl font-light text-gray-700 tracking-tighter">
              {String(index + 1).padStart(2, '0')}
            </span>
            {project.highlight && (
              <span className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase rounded-full tracking-wide">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <h4 className="text-lg text-gray-400 mb-6">{project.subtitle}</h4>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-black border border-gray-700 text-xs text-gray-300 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 uppercase tracking-widest">{project.role} · {project.year}</span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="accent-btn px-6 py-2 rounded-md font-semibold tracking-wide">
                LIVE PROJECT
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden relative bg-[#0a0a0a] border border-gray-800">
        {project.image ? (
          <video 
            src={project.image} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-600 font-bold uppercase tracking-widest">{project.title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
