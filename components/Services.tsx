
import React from 'react';
import { Briefcase, Home, HardHat } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="text-[#9E7E38]" size={36} />,
    brand: "WorkSphere",
    title: "Transformations",
    description: "We craft performance-driven workplaces where design, culture, and productivity come together seamlessly."
  },
  {
    icon: <Home className="text-[#9E7E38]" size={36} />,
    brand: "HavenCraft",
    title: "Living",
    description: "We design homes as personalised sanctuaries shaped around comfort, emotion, and refined aesthetics."
  },
  {
    icon: <HardHat className="text-[#9E7E38]" size={36} />,
    brand: "BuildForma",
    title: "Projects",
    description: "We execute construction with engineering precision and architectural clarity for long-term strength."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50/50 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center lg:text-left">
          <span className="text-[#9E7E38] font-bold tracking-[0.3em] uppercase text-sm block mb-4">What we do</span>
          <h2 className="text-5xl font-bold tracking-tight">
            Our <span className="italic text-[#9E7E38] font-light">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-sm border border-gray-100 hover:border-[#9E7E38]/30 hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8 p-4 bg-gray-50 inline-block rounded-sm group-hover:bg-[#9E7E38]/10 transition-colors">
                {service.icon}
              </div>
              <div className="mb-6">
                <span className="block text-xs font-black uppercase tracking-[0.2em] text-gray-300 mb-1">{service.brand}</span>
                <h3 className="text-3xl font-bold leading-tight tracking-tighter">{service.title}</h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                {service.description}
              </p>
              <div className="w-12 h-[2px] bg-black group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
