import React from 'react';

const About = () => {
  return (
    <div className="bg-[#141C2F] min-h-screen flex items-center justify-center px-4">
      <div className="text-center text-gray-300">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About</h2>
        <h3 className="text-xl md:text-2xl text-gray-400 mb-2">Version 18.6</h3>
        <p className="text-sm md:text-base text-gray-500">
          This is only information of GitHub Account.
        </p>
      </div>
    </div>
  );
};

export default About;
