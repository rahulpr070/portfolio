import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ScrollingText from './Scolling/ScrollingText';
import Work from './WorkExperience/Work';
import SelectProjects from './selectProjects';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <div className="bg-[#1C1C22] dark:bg-[#F0F2F5]">
      <Header />
      <Hero />
      <ScrollingText />
      
      {/* <Work /> */}
      <SelectProjects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
