import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { FaRocket, FaStar, FaGlobe, FaGamepad, FaCamera } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-600" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-green-500" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3 size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-500" /> },
];

const interests = [
  { name: 'Space', icon: <FaRocket size={40} className="text-purple-600" /> },
  { name: 'Stars', icon: <FaStar size={40} className="text-yellow-600" /> },
  { name: 'Travel', icon: <FaGlobe size={40} className="text-green-600" /> },
  { name: 'Gaming', icon: <FaGamepad size={40} className="text-red-600" /> },
  { name: 'Photography', icon: <FaCamera size={40} className="text-blue-700" /> },
];

const About = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showInterests, setShowInterests] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
    setShowInterests(false); // Hide interests if showing skills
  };

  const toggleInterests = () => {
    setShowInterests(!showInterests);
    setShowSkills(false); // Hide skills if showing interests
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 p-4">
      <div className="text-center transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
          About Me
        </h1>
        <p className="text-lg leading-relaxed max-w-xl mx-auto text-gray-700 mb-12">
          Namaste! I'm <span className="font-semibold text-blue-600">Krishna</span>, a first-year Computer Science and Artificial Intelligence student passionate about technology, machine learning, web development, and building interactive experiences.
        </p>
      </div>

      <div className="flex space-x-8 mb-16">
        {/* Skills Button */}
        <motion.button
          onClick={toggleSkills}
          className="px-6 py-3 rounded-full flex items-center justify-center text-white bg-blue-600 shadow-lg transition-transform duration-300 hover:bg-green-500 focus:outline-none"
          whileHover={{ scale: 1.1 }}
        >
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </motion.button>

        {/* Interests Button */}
        <motion.button
          onClick={toggleInterests}
          className="px-6 py-3 rounded-full flex items-center justify-center text-white bg-blue-600 shadow-lg transition-transform duration-300 hover:bg-green-500 focus:outline-none"
          whileHover={{ scale: 1.1 }}
        >
          {showInterests ? 'Hide Interests' : 'Show Interests'}
        </motion.button>
      </div>

      {/* Display skill icons in a circular flex layout when 'Skills' is clicked */}
      {showSkills && (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="flex items-center justify-center bg-white p-4 rounded-full shadow-md"
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      )}

      {/* Display interest icons in a circular flex layout when 'Interests' is clicked */}
      {showInterests && (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 mb-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="flex items-center justify-center bg-white p-4 rounded-full shadow-md"
            >
              {interest.icon}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default About;
