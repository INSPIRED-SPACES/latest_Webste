
import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl italic">IS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tighter leading-none">INSPIRED</span>
              <span className="text-xs tracking-widest text-gray-500 leading-none">SPACES</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-[#9E7E38] font-medium">Home</a>
            <a href="#" className="text-gray-900 hover:text-[#9E7E38] font-medium">Services</a>
            <a href="#" className="text-gray-900 hover:text-[#9E7E38] font-medium">Contact</a>
            <a href="#" className="text-gray-900 hover:text-[#9E7E38] font-medium">Support</a>
            <button className="flex items-center gap-2 border-2 border-black rounded-full px-5 py-2 font-bold hover:bg-black hover:text-white transition-all">
              <MessageCircle size={18} />
              Talk to us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-6 space-y-4 shadow-lg border-t border-gray-100">
          <a href="#" className="block py-2 text-gray-900 font-medium">Home</a>
          <a href="#" className="block py-2 text-gray-900 font-medium">Services</a>
          <a href="#" className="block py-2 text-gray-900 font-medium">Contact</a>
          <a href="#" className="block py-2 text-gray-900 font-medium">Support</a>
          <button className="w-full flex items-center justify-center gap-2 border-2 border-black rounded-full px-5 py-3 font-bold">
            <MessageCircle size={18} />
            Talk to us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
