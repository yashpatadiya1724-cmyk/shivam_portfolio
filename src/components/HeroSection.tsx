import React, { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

const HeroSection: React.FC = () => {
  const { profile } = usePortfolio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Background is pure black (#000000) so the image's black background blends perfectly, creating a 3D cutout illusion.
    <section className="min-h-screen relative flex flex-col justify-between bg-[#000000] overflow-hidden px-6 pt-6 pb-0">
      
      {/* Top Navigation Row (Pill Elements) */}
      <div className="w-full flex justify-between items-center z-40 relative">
        <div className="pill-badge cursor-pointer hover:bg-[#333] transition border border-gray-800">
          <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center overflow-hidden">
            <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
          </div>
          <span className="font-semibold text-sm tracking-wide ml-2">{profile.shortName}</span>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 bg-[#2a2a2a] rounded-full flex flex-col items-center justify-center gap-[4px] hover:bg-[#333] transition border border-gray-800 z-50 relative"
          >
            <div className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-[#1a1a1a] border border-gray-800 rounded-3xl p-6 flex flex-col gap-5 shadow-2xl z-40 min-w-[200px] animate-in fade-in slide-in-from-top-4 duration-200">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white font-medium transition text-lg">About</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white font-medium transition text-lg">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white font-medium transition text-lg">Projects</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white font-medium transition text-lg">Testimonials</a>
            </div>
          )}
        </div>
      </div>

      {/* Main Hero Content (Middle) */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between z-30 mt-8 md:mt-0 relative max-w-7xl mx-auto gap-8 md:gap-0">
        
        {/* Left Column Text */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-4 md:gap-6 md:-mt-32 z-30 relative">
          <div className="pill-badge text-xs font-semibold tracking-wide text-gray-300 shadow-xl border border-gray-800">
            <div className="pill-badge-dot"></div>
            Available for Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight drop-shadow-lg">
            Director of Photography & Creative Video Editor based in {profile.location.split(',')[0]}
          </h2>
        </div>

        {/* Center Image Container (Behind all content) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[50vh] md:h-[80vh] w-full max-w-[600px] z-0 flex justify-center items-end pointer-events-none">
          <img 
            src="/assets/hero-bg.png" 
            alt={profile.name} 
            className="h-full w-auto object-cover object-bottom opacity-80"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        {/* Right Column Text */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:items-start text-left gap-6 md:-mt-32 z-30 mt-0 relative pl-0 md:pl-12">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm drop-shadow-md">
            Hi, I'm {profile.name} – a creative video editor and DP passionate about crafting visually compelling stories that connect and convert.
          </p>
          
          <a href="#projects" className="accent-btn flex items-center gap-4 px-6 py-2 pr-2 font-semibold text-sm shadow-lg shadow-white/20">
            See my works
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">→</span>
          </a>
        </div>

      </div>

      {/* Giant Overlapping Text (Foreground z-20 so it overlaps the photo) */}
      <div className="w-full absolute bottom-0 left-0 flex justify-center items-end z-20 pointer-events-none pb-4 opacity-100">
        <h1 
          className="font-bold text-white leading-none text-center w-full"
          style={{ fontSize: '13vw', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
        >
          {profile.shortName.toUpperCase()}
        </h1>
      </div>
      
    </section>
  );
};

export default HeroSection;
