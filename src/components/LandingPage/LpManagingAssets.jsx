"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import gridPic1 from "../../assets/LandingPageImages/arcGridPic1.png";
import gridPic2 from "../../assets/LandingPageImages/arcGridPic2.png";
import gridPic3 from "../../assets/LandingPageImages/arcGridPic3.png";
import gridPic4 from "../../assets/LandingPageImages/arcGridPic4.png";
import gridPic5 from "../../assets/LandingPageImages/arcGridPic5.png";
import gridPic6 from "../../assets/LandingPageImages/arcGridPic6.png";

export default function LpManagingAssets() {
  return (
    <>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white font-sans z-50 mb-6 text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Ultimate Destination for Anyone Managing Digital Assets
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-[1320px] mx-auto mt-6">
        <motion.div
          className="md:col-span-2 bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">Single Signing with Multisig</h1>
          <h2 className="text-sm mt-2">
            Seamlessly conduct transactions with pre-set permissions...
          </h2>
          <Image
            src={gridPic1}
            alt="Single Signing with Multisig"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">Full Ownership</h1>
          <h2 className="text-sm mt-2">
            Exclusively control, own, and manage your assets...
          </h2>
          <Image
            src={gridPic2}
            alt="Full Ownership"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">High Performance</h1>
          <h2 className="text-sm mt-2">
            Vault is architected with maximum efficiency...
          </h2>
          <Image
            src={gridPic3}
            alt="High Performance"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          className="md:col-span-2 bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">Automate with our SDK</h1>
          <h2 className="text-sm mt-2">
            Programmatically operate and control your digital assets...
          </h2>
          <Image
            src={gridPic4}
            alt="Automate with our SDK"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          className="md:col-span-2 bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">Open Standard Signing</h1>
          <h2 className="text-sm mt-2">
            Engineered to be wallet-independent, providing versatility...
          </h2>
          <Image
            src={gridPic5}
            alt="Open Standard Signing"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white z-40"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-bold">Fully Auditable</h1>
          <h2 className="text-sm mt-2">
            Easily see the full transaction history and actions...
          </h2>
          <Image
            src={gridPic6}
            alt="Fully Auditable"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </>
  );
}
