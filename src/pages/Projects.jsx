import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Storytelling App",
    description: "An interactive app that lets users experience stories through engaging narratives and media.",
    tech: "React, Animation, Storytelling",
  },
  {
    title: "Exoplanets Exploration",
    description: "An app that provides information about exoplanets and their characteristics.",
    tech: "React, APIs, Astronomy",
  },
  {
    title: "Origami Website",
    description: "A creative website focused on the art of origami, with step-by-step guides and tutorials.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Space Thieves Remake",
    description: "A 3D space-themed game being developed in Unity 3D, taking players through exciting space adventures.",
    tech: "Unity 3D, Game Development",
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-8 bg-gradient-to-r from-blue-100 to-green-100 text-black">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-70 z-[-1]" />
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,255,255,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {project.title}
              </h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <span className="text-sm text-blue-500 font-semibold">
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
