
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OfficeDetail from './components/OfficeDetail';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OfficeDetail />
        <Steps />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
