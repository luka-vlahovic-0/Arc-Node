"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AbHeader() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-2 md:mt-24 mb-44 md:mb-0">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white font-sans z-50 mb-6 text-center md:mt-20 mt-[150px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What is Arc Node, and what do we do?
        </motion.h1>
        
        <motion.h2
          className="text-[#8d929c] font-sans text-base sm:text-lg md:text-xl font-semibold mb-4 max-w-4xl text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Arc Node is a non-custodial, multi-signature wallet platform that
          offers high-level security, customizable governance, and seamless
          blockchain integration for enhanced autonomy and counterparty risk
          elimination.
        </motion.h2>
        
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white text-2xl mt-6 font-bold py-2 px-4 rounded-xl transform transition hover:scale-105"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Get Access
        </motion.button>
      </div>
    </>
  );
}
