"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const playgroundItems = [
  {
    title: "Hangman",
    path: "/hanginman",
    description: "A fast-paced hangman game with modern UI and engaging gameplay.",
  },
];

const Playground = () => {
  return (
    <section className="mt-24 relative">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-8">
        Playground
      </h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {playgroundItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <Link href={item.path}>
              <div className="group relative p-6 rounded-lg border border-[#33353F] bg-[#181818] hover:border-transparent transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{
                       background: 'linear-gradient(45deg, #ef4444, #8b5cf6, #ef4444)',
                       backgroundSize: '200% 200%',
                       animation: 'gradientBorder 3s ease infinite',
                       zIndex: -10,
                       transform: 'scale(1.02)'
                     }} 
                />
                
                <div className="relative z-0">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary-400 group-hover:to-secondary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#ADB7BE] text-sm group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-secondary-400 to-secondary-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <section id="contact"></section>
    </section>
  );
};

export default Playground;