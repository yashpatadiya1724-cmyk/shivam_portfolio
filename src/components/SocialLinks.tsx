import React from 'react';
import { Link as LinkIcon, Mail, Phone, Globe } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const SocialLinks: React.FC = () => {
  const { profile } = usePortfolio();
  const { social } = profile;

  return (
    <div className="flex flex-wrap gap-3">
      {social.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <LinkIcon size={16} />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <LinkIcon size={16} />
        </a>
      )}
      {social.linkedin && (
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <LinkIcon size={16} />
        </a>
      )}
      {social.email && (
        <a href={`mailto:${social.email}`} className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <Mail size={16} />
        </a>
      )}
      {social.phone && (
        <a href={`tel:${social.phone}`} className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <Phone size={16} />
        </a>
      )}
      {social.website && (
        <a href={social.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition shadow-lg shadow-purple-500/30">
          <Globe size={16} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
