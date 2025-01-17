import React from 'react';
import Research from './Research';
import Projects from './Projects';
import Internship from './Internship';

const ExperienceSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto py-8 px-4">
      <Research />
      <Projects />
      <Internship />
    </div>
  );
};

export default ExperienceSection;