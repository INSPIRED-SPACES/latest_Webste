
import React, { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';

const OfficeDetail: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      title: "Commercial Interior Fitouts",
      content: "Complete solutions for retail spaces, healthcare facilities, and specialized commercial environments."
    },
    {
      title: "Office Design & Build",
      content: "Full-service workspace strategy, interior design, and turnkey construction for modern offices."
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-2xl h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200" 
            alt="Office Brilliance" 
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Designing Your Office With Brilliance</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Elevate your spaces with bespoke interior designs that reflect 
            your unique style and aspirations, crafted with precision and 
            brilliance for an productivity filled outcome
          </p>

          <div className="space-y-4 mb-10">
            {accordions.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 text-left font-bold text-lg hover:text-[#9E7E38] transition-colors"
                >
                  {item.title}
                  {openAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openAccordion === index && (
                  <div className="pb-6 text-gray-600 animate-fadeIn">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-[#9E7E38] text-white px-8 py-3 rounded font-bold hover:bg-[#8A6D30] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeDetail;
