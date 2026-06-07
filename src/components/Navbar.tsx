import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0C0C0C]/80 backdrop-blur-md z-50 border-b border-gray-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-widest text-white">S.P.</a>
        <div className="hidden md:flex gap-6 text-sm tracking-widest font-light text-gray-300">
          <a href="#" className="hover:text-white transition">HOME</a>
          <a href="#about" className="hover:text-white transition">ABOUT</a>
          <a href="#experience" className="hover:text-white transition">PROCESS</a>
          <a href="#projects" className="hover:text-white transition">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
