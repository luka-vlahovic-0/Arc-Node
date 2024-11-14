"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { PiTargetLight, PiMegaphone, PiCursorClick, PiFireLight } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";

function PerkItem({ icon, title, description, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col sm:flex-row items-start justify-center z-50 gap-4 p-6 bg-gradient-to-br from-[#0e0e12] to-[#0A0A0E] rounded-2xl max-w-[100%] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[614px]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex-shrink-0 flex justify-center sm:justify-start">
        {icon}
      </div>
      <div className="flex flex-col justify-start gap-2 text-start md:text-center sm:text-left">
        <h1 className="text-white font-sans text-lg sm:text-2xl font-bold leading-6 sm:leading-8">
          {title}
        </h1>
        <h2 className="text-[#bcbfc4] font-sans text-sm sm:text-lg font-light leading-5 sm:leading-7">
          {description}
        </h2>
      </div>
    </motion.div>
  );
}

export default function LpPerks() {
  const perks = [
    {
      icon: <PiTargetLight color="white" className="h-16 w-16" />,
      title: "Absolute Ownership & Non-custodial Assurance",
      description: "At Arc Node, your autonomy is paramount. We provide a fully non-custodial multi-signature wallet that puts you in complete control. There is no reliance on third parties to hold or manage your keys; your assets remain exclusively yours."
    },
    {
      icon: <IoIosLink color="white" className="h-16 w-16" />,
      title: "Wallet Compatibility",
      description: "Our platform is engineered to be wallet-agnostic, offering you the flexibility to integrate with any key management system, whether it's MPC, EOA, HSM, or any security enclave of your preference. We emphasize ease without mandating the use of our native application."
    },
    {
      icon: <PiMegaphone color="white" className="h-16 w-16" />,
      title: "Configurable Governance & Control",
      description: "We set the standard for on-chain policy and control flexibility. Our advanced policy engine is meticulously built to accommodate a wide array of functions, granting you the most adaptable, comprehensive, and extensive control mechanisms available for any smart contract deployment."
    },
    {
      icon: <PiCursorClick color="white" className="h-16 w-16" />,
      title: "Zero Counterparty Risk",
      description: "Arc Node's infrastructure is an exemplar of on-chain autonomy, operating independently of any third-party servers or control. This ensures that all governance is conducted on-chain, in a fully non-custodial manner, removing counterparty risk."
    },
    {
      icon: <SiHiveBlockchain color="white" className="h-16 w-16" />,
      title: "Adaptable Blockchain Support",
      description: "Arc Node is designed to seamlessly integrate with multiple blockchain networks, allowing users to customize their experience according to evolving needs. Our adaptable infrastructure ensures compatibility and smooth transitions across diverse protocols."
    },
    {
      icon: <PiFireLight color="white" className="h-16 w-16" />,
      title: "High-Performance Infrastructure",
      description: "Arc Node's infrastructure is designed to maximize efficiency. With no reliance on a central server, our system operates at the speed of the blockchain itself, ensuring transaction processes are as swift as possible, eliminating all unnecessary delays."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16">
      {perks.map((perk, index) => (
        <PerkItem
          key={index}
          icon={perk.icon}
          title={perk.title}
          description={perk.description}
          index={index}
        />
      ))}
    </div>
  );
}
