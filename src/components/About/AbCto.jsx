"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AbCto() {
  return (
    <div className='flex flex-col items-center justify-center my-20 px-6'>
      <motion.h1
        className='text-4xl md:text-4xl font-bold text-white font-sans mb-2 text-center'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}  
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        So what are you waiting for?
      </motion.h1>
      
      <motion.h2
        className='text-[#8d929c] font-sans text-base sm:text-lg md:text-xl font-semibold mb-8 text-center'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}  
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Take Full Control of Your Digital Assets – Get Started with Arc Node Today!
      </motion.h2>
      
      <motion.button
        className='bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold py-2 px-4 rounded-xl transform transition hover:scale-105'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}  
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}
