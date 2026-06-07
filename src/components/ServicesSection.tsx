import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

const ServicesSection: React.FC = () => {
  const { services } = usePortfolio();

  return (
    <section id="services" className="py-24 px-6 bg-[#111111] border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-gray-200">Services</h2>
        {/* TODO: move to JSON later */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 py-10 border-t border-gray-800 last:border-b">
              <div className="md:w-1/4">
                <span className="text-4xl font-light text-gray-700 tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-lg">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
