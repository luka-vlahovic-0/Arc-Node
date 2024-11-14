"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import dashboardImg from "../../assets/LandingPageImages/arcDashboard.png";

export default function LpSubHeader() {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-28">
      <motion.h1
        className="text-white font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Where speed meets security, and scalability meets sovereignty
      </motion.h1>

      <motion.h2
        className="text-[#8d929c] font-sans text-base sm:text-lg md:text-xl font-semibold max-w-4xl text-center mt-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Enhance scalability and efficiency by seamlessly creating controls and
        engaging with new assets. Boost your opportunities through rapid
        operational processes and the introduction of new digital assets.
      </motion.h2>

      <motion.div
        className="relative mt-6 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1280px]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={dashboardImg}
          alt="Arc Node's beautiful dashboard"
          className="w-full h-auto rounded-3xl border-2 border-blue-500 border-opacity-20 pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#0A0A0E] rounded-b-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
}
