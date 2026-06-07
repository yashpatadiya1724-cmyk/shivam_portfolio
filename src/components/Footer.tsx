import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';
import { Copy } from 'lucide-react';

const Footer: React.FC = () => {
  const { profile } = usePortfolio();

  const handleCopyEmail = () => {
    if (profile.social.email) {
      navigator.clipboard.writeText(profile.social.email);
    }
  };

  return (
    <footer id="contact" className="bg-[#050505] pt-20 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand Col */}
        <div>
          <h2 className="text-3xl font-bold mb-2 hero-heading uppercase tracking-wide">{profile.name}</h2>
          <p className="text-gray-400 mb-2">{profile.specialization}</p>
          <p className="text-gray-500 text-sm">{profile.location}</p>
        </div>

        {/* Navigate Col */}
        <div>
          <h3 className="text-gray-200 font-bold mb-6 uppercase tracking-widest">Navigate</h3>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#experience" className="hover:text-white transition">Process</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          </ul>
        </div>

        {/* Reach Out Col */}
        <div>
          <h3 className="text-gray-200 font-bold mb-6 uppercase tracking-widest">Reach Out</h3>
          <div className="mb-6">
            <button onClick={handleCopyEmail} className="flex items-center gap-3 text-gray-400 hover:text-white transition mb-3 group">
              <span>{profile.social.email}</span>
              <Copy size={16} className="text-gray-600 group-hover:text-white transition" />
            </button>
            <p className="text-gray-400">{profile.social.phone}</p>
          </div>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-gray-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
