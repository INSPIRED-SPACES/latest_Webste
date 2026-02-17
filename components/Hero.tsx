
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute -top-10 -left-10 text-[20rem] font-bold text-gray-50 opacity-40 select-none -z-10 italic">
        IS
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="w-20 h-1 bg-[#9E7E38] mb-8"></div>
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-10 tracking-tighter">
            Walk with us <br />
            into your <br />
            <span className="italic text-[#9E7E38] font-light">Dreams</span>
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-lg mb-12 font-medium">
            INSPIRED SPACES transforms your vision into reality, blending vernacular, 
            contemporary and futuristic designs. Since 2021, we've grown from contractors 
            to a leading design firm.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-[#9E7E38] transition-all duration-300 shadow-xl hover:shadow-[#9E7E38]/20">
              Start Project
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              Scroll for more
            </div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[700px]">
          {/* Main big image */}
          <div className="absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden rounded-sm shadow-2xl z-0 group">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
               alt="Modern Office Space" 
               className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
          {/* Overlapping smaller image */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden rounded-sm shadow-2xl z-20 border-[12px] border-white group">
             <img 
               src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
               alt="Design Meeting" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
             />
          </div>
          {/* Scroll down indicator - floating style */}
          <div className="absolute bottom-10 -right-4 bg-[#9E7E38] text-white p-8 rounded-full z-30 hidden lg:flex items-center justify-center shadow-2xl animate-bounce">
            <ArrowDown size={32} strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 pt-16 border-t border-gray-100 relative">
        <div className="group">
          <span className="text-5xl lg:text-7xl font-bold block mb-3 tabular-nums group-hover:text-[#9E7E38] transition-colors">65,000+</span>
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-[#9E7E38]"></span>
            <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold">Sqft. Space Executed</span>
          </div>
        </div>
        <div className="group">
          <span className="text-5xl lg:text-7xl font-bold block mb-3 tabular-nums group-hover:text-[#9E7E38] transition-colors">55+</span>
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-[#9E7E38]"></span>
            <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold">Satisfied Clients</span>
          </div>
        </div>
        <div className="group">
          <span className="text-5xl lg:text-7xl font-bold block mb-3 tabular-nums group-hover:text-[#9E7E38] transition-colors">1500+</span>
          <div className="flex items-center gap-3">
            <span className="w-4 h-[2px] bg-[#9E7E38]"></span>
            <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold">Unique Styles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
