import React from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { MessageSquareQuote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { testimonials } = usePortfolio();

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 flex items-center justify-center gap-4">
        <MessageSquareQuote size={32} className="text-white" />
        <h2 className="text-3xl font-bold uppercase tracking-widest text-gray-200">Testimonials</h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* CSS Marquee */}
        <div className="flex w-max animate-marquee hover:animation-paused">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`} 
              className="w-[280px] md:w-[450px] bg-[#111] border border-gray-800 rounded-xl p-6 md:p-8 mx-3 md:mx-4 flex-shrink-0"
            >
              <p className="italic text-gray-300 mb-6 text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: testimonial.avatarColor }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="uppercase font-bold tracking-wide">{testimonial.name}</h4>
                  <span className="text-gray-500 text-sm">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
