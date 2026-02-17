
import React from 'react';
import { Send, Layout, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Send className="text-white" size={24} />,
    title: "Start Project Enquiry",
    description: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience."
  },
  {
    icon: <Layout className="text-white" size={24} />,
    title: "Design & Build",
    description: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space."
  },
  {
    icon: <CheckCircle className="text-white" size={24} />,
    title: "Execute & Handover",
    description: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your transformed space."
  }
];

const Steps: React.FC = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div className="sticky top-32">
          <span className="text-[#9E7E38] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Process</span>
          <h2 className="text-5xl lg:text-7xl font-bold mb-16 leading-tight tracking-tighter">
            Designing Your <br />
            <span className="italic text-[#9E7E38] font-light">Dream</span> in <br />
            Three Simple Steps
          </h2>

          <div className="relative space-y-20">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gray-100 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="flex gap-10 relative z-10 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#9E7E38] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#9E7E38] transition-colors">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-sm overflow-hidden h-[800px] shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Living Space Design" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            
            {/* Design Callout Card */}
            <div className="absolute bottom-10 left-10 right-10 bg-white p-8 shadow-2xl rounded-sm">
              <p className="text-black font-bold text-xl italic mb-2">"Architecture should speak of its time and place, but yearn for timelessness."</p>
              <div className="w-12 h-1 bg-[#9E7E38]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
