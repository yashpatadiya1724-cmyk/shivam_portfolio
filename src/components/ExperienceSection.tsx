import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

const ExperienceSection: React.FC = () => {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-gray-200">Experience</h2>
      <div className="flex flex-col">
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 py-10 border-t border-gray-800 last:border-b">
            <div className="md:w-1/4">
              <span className="text-4xl font-light text-gray-700 tracking-tighter">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-2xl font-semibold">{exp.company} — {exp.role}</h3>
                <span className="font-mono text-sm px-3 py-1 bg-gray-800 rounded-full mt-2 sm:mt-0 whitespace-nowrap text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-lg">{exp.summary}</p>
              <ul className="space-y-3">
                {exp.highlights.slice(0, 3).map((highlight, i) => (
                  <li key={i} className="flex items-start text-gray-500">
                    <span className="mr-3 text-[#FF5C00] mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
