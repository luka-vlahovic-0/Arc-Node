"use client";

import React, { useState } from "react";
import faqImg from "../../assets/LandingPageImages/faqPlav.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
  { question: "What is Arc Node?", answer: "Arc Node is a self-custody platform designed for secure storage and management of digital assets with a multi-signature wallet solution." },
  { question: "How does Arc Node enhance asset security?", answer: "Arc Node offers multiple security standards, such as MPC, EOA, and HSM, ensuring your assets are protected through robust, customizable governance." },
  { question: "Can Arc Node support different blockchains?", answer: "Yes, Arc Node provides adaptable blockchain support, allowing you to manage assets across a range of blockchain networks seamlessly." },
  { question: "How user-friendly is Arc Node?", answer: "Arc Node is built with a simple setup process, customizable governance controls, and an SDK for easy integration with your existing wallet." },
];

export default function LpFaq() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const fromRight = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[350px] p-8">
      <div className="flex-col items-center justify-center">
        <motion.h1
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="text-white text-[28px] md:text-[36px] font-bold mt-10"
        >
          FAQs
        </motion.h1>
        <motion.hr
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="w-28 border-t-4 border-blue-500 mb-6"
        />
        <motion.h2
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fromLeft}
          className="text-white text-[16px] md:text-[18px] mb-20"
        >
          Everything you need to know about us
        </motion.h2>
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={fromLeft}
        >
          <Image src={faqImg} alt="FAQ" height={300} width={300} />
        </motion.div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-lg">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fromRight}
            className={`border border-gray-300 rounded-2xl p-6 bg-[#0A0A0E] cursor-pointer transition-shadow duration-300 ${
              openIndexes.includes(index) ? "shadow-[0_0_10px_2px_#3b82f6]" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-white text-[18px] font-bold">
              {faq.question}
            </h3>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndexes.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white text-[16px] mt-2">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
