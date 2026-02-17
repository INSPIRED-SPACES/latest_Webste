
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#9E7E38] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded">
                <span className="text-[#9E7E38] font-bold text-xl italic">IS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tighter leading-none">INSPIRED</span>
                <span className="text-xs tracking-widest text-white/80 leading-none">SPACES</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Inspired Spaces, your destination for premium Commercial and Residential fitouts. 
              Transforming visions since 2021.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/80">
              <li><a href="#" className="hover:text-white">Commercial Fitouts</a></li>
              <li><a href="#" className="hover:text-white">Residential Fitouts</a></li>
              <li><a href="#" className="hover:text-white">Construction</a></li>
              <li><a href="#" className="hover:text-white">Design & Build</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Help us grow</h4>
            <ul className="space-y-4 text-white/80">
              <li><a href="#" className="hover:text-white">Google Review</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Talk to us</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0" />
                <span>inspiredspaces522@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0" />
                <span>#86, 41st Cross Road, 8th Block Jayanagar, Bengaluru - 560070</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+91 9483613084</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Inspired Spaces. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
