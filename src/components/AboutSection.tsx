import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

const AboutSection: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-24 px-6 bg-[#111111] border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-200">About</h2>
        <p className="text-xl leading-relaxed text-gray-400" style={{ overflowWrap: 'normal', wordBreak: 'normal' }}>
          {profile.bio}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
