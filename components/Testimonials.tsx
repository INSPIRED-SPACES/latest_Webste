
import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-32">
          <span className="text-[#9E7E38] font-bold tracking-[0.3em] uppercase text-sm block mb-4">Feedback</span>
          <h2 className="text-5xl font-bold mb-10 tracking-tight leading-[1.1]">
            What Our <br />
            <span className="italic text-[#9E7E38] font-light">Customers</span> <br />
            Say About Us
          </h2>
          <div className="flex gap-6">
            <button className="group w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300">
              <ArrowLeft size={24} />
            </button>
            <button className="group w-14 h-14 bg-[#9E7E38] text-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 shadow-xl shadow-[#9E7E38]/20">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div className="bg-black text-white p-16 rounded-sm relative overflow-hidden group shadow-2xl">
            <Quote className="text-white/5 absolute -top-4 -right-4 rotate-12" size={180} />
            <div className="relative z-10">
              <div className="flex gap-1 mb-8 text-[#9E7E38]">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-2xl mb-12 font-medium leading-[1.6] italic tracking-tight">
                "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#9E7E38]"></div>
                <div>
                  <p className="font-bold text-xl tracking-tight uppercase">Skanda</p>
                  <p className="text-[#9E7E38] text-sm font-bold tracking-widest uppercase">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 text-black p-16 rounded-sm relative overflow-hidden group border border-gray-100">
            <div className="relative z-10">
              <div className="flex gap-1 mb-8 text-[#9E7E38]">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-2xl mb-12 font-medium leading-[1.6] italic tracking-tight text-gray-700">
                "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <div>
                  <p className="font-bold text-xl tracking-tight uppercase">Divija</p>
                  <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-[#9E7E38]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
