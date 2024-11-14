"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import dashboardImg from "../../assets/LandingPageImages/arcDashboard.png";
import Link from "next/link";

export default function LpHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-5 gap-10 md:gap-20 mt-20 md:mt-12 z-50">
      <motion.div
        className="flex flex-col items-center md:items-start justify-center max-w-full md:max-w-2xl z-50 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-sans mb-4 leading-tight">
          Redefining Secure Storage for{" "}
          <span className="text-[#d6ad31] inline-block mt-1">
            Digital Assets
          </span>
        </h1>
        <h2 className="text-[#8d929c] font-sans text-base sm:text-lg md:text-xl font-semibold mb-4">
          Arc Node delivers advanced security and control to future-proof your
          digital asset operations, featuring a smart contract multi-signature
          wallet that overcomes traditional limitations and bottlenecks.
        </h2>
        <div className="flex flex-row gap-4 mt-4">
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transform transition hover:scale-105">
              Get Access
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white font-bold py-2 px-4 hover:text-blue-400">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="z-50"
      >
        <Image
          src={dashboardImg}
          alt="Arc Node's beautiful dashboard"
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] rounded-3xl pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
