
import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Subscribe to Our <span className="italic text-[#9E7E38]">Newsletter</span> for Project Insights
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
        Be the first to discover trends, inspirations, and special offers as 
        we bring the world of design directly to your inbox
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <div className="relative flex-grow">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 rounded border-2 border-gray-100 focus:border-[#9E7E38] outline-none transition-colors"
          />
        </div>
        <button className="bg-[#9E7E38] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#8A6D30] transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
