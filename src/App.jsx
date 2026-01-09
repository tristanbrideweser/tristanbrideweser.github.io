import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
      <div className={`transition-all duration-1000 ease-out ${isNavbarOpen ? 'md:mr-[25vw]' : ''}`}>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default App;