"use client";

import Image from "next/image";
import paragraf1Img from "../../assets/AboutPageImages/arcControl.png";
import paragraf2Img from "../../assets/AboutPageImages/arcSpeed.png";
import paragraf3Img from "../../assets/AboutPageImages/arcIntegration.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function AbSubHeader() {
  const isMediumOrAbove = useMediaQuery("(min-width: 768px)");

  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const headingVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggeredVariant = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div
        id="frst-info"
        ref={firstRef}
        className="flex flex-col lg:flex-row items-center justify-center mt-20 md:mt-48 gap-10 px-4 lg:px-0"
      >
        <motion.div
          className="flex flex-col max-w-3xl"
          variants={staggeredVariant}
          initial="hidden"
          animate={firstInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-white text-[26px] md:text-[34px] font-bold mb-6 font-sans"
            variants={headingVariant}
          >
            Empowering Self-Custody and Control
          </motion.h2>
          <motion.h3
            className="text-[#d2d5db] font-semibold text-[20px] mb-4 font-sans"
            variants={headingVariant}
          >
            Arc Node is reshaping the landscape of digital asset security and
            self-custody. Our mission is to equip individuals and organizations
            with the freedom to manage digital assets autonomously, without
            third-party intervention. With Arc Node, you get a powerful,
            wallet-agnostic multi-signature solution that offers comprehensive
            security while preserving your independence. We believe that your
            assets should be fully under your control, safeguarded by advanced
            cryptographic systems that allow you to manage assets seamlessly and
            securely.
          </motion.h3>

          <motion.h4
            className="text-[#8d929c] font-normal text-[18px] font-sans"
            variants={headingVariant}
          >
            By integrating user feedback, leveraging the latest technologies,
            and adhering to industry best practices, we create solutions that
            align with your unique requirements. With Arc Node, you gain a
            seamless, intuitive experience that combines robust security with
            the flexibility to scale, ensuring you’re always in control of your
            digital asset journey.
          </motion.h4>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={firstInView ? "visible" : "hidden"}
          className="flex-shrink-0 mt-6 lg:mt-0"
        >
          <Image
            src={paragraf1Img}
            alt="Optimize Image"
            className="h-[300px] w-[350px] md:h-[300px] md:w-[400px] z-50"
          />
        </motion.div>
      </div>

      <div
        id="scnd-info"
        ref={secondRef}
        className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-10 px-4 lg:px-0 mb-20"
      >
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={secondInView ? "visible" : "hidden"}
          className="flex-shrink-0 mt-6 lg:mt-0 order-2 lg:order-1"
        >
          <Image
            src={paragraf2Img}
            alt="Maintain Image"
            className="h-[300px] w-[350px] md:h-[300px] md:w-[400px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col max-w-3xl order-1 lg:order-2 lg:flex-grow"
          variants={staggeredVariant}
          initial="hidden"
          animate={secondInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-white text-[26px] md:text-[34px] font-bold mb-6 font-sans"
            variants={headingVariant}
          >
            Speed, Scalability, and Seamless Transactions
          </motion.h2>
          <motion.h3
            className="text-[#d2d5db] font-semibold text-[20px] mb-4 font-sans"
            variants={headingVariant}
          >
            Our platform combines speed with security, built to support rapid
            operations without sacrificing trust or scalability. By removing
            traditional bottlenecks in asset transactions, Arc Node lets you
            engage with new assets and operational processes in real-time. This
            infrastructure empowers you to create customized controls and
            policies for each transaction, aligning your digital asset
            management with the needs of a fast-evolving industry.
          </motion.h3>

          <motion.h4
            className="text-[#8d929c] font-normal text-[18px] font-sans"
            variants={headingVariant}
          >
            With a commitment to precision and adaptability, we ensure our
            platform reflects the needs of modern digital asset management.
            Through innovative design, robust functionality, and efficient
            scaling capabilities, Arc Node delivers a user experience that not
            only meets your operational demands but enhances engagement and
            effectiveness across every transaction.
          </motion.h4>
        </motion.div>
      </div>

      <div
        id="thrd-info"
        ref={thirdRef} 
        className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-10 px-4 lg:px-0"
      >
        <motion.div
          className="flex flex-col max-w-3xl"
          variants={staggeredVariant}
          initial="hidden"
          animate={thirdInView ? "visible" : "hidden"} 
        >
          <motion.h2
            className="text-white text-[26px] md:text-[34px] font-bold mb-6 font-sans"
            variants={headingVariant}
          >
            Flexible Integration Across Blockchains
          </motion.h2>
          <motion.h3
            className="text-[#d2d5db] font-semibold text-[20px] mb-4 font-sans"
            variants={headingVariant}
          >
            At Arc Node, we prioritize flexibility. Our platform seamlessly
            integrates with multiple blockchain networks and key management
            systems, from MPC to HSM and beyond, providing compatibility and
            adaptability across different protocols. We offer extensive
            governance options, letting you define and enforce on-chain policies
            without limitations. This focus on customizability ensures that your
            setup remains efficient and future-proof, regardless of changes in
            the blockchain landscape.
          </motion.h3>

          <motion.h4
            className="text-[#8d929c] font-normal text-[18px] font-sans"
            variants={headingVariant}
          >
            With Arc Node, you gain a solution that’s tailored to your needs,
            enhancing your control over assets while ensuring that your digital
            infrastructure remains agile and resilient in an ever-evolving
            ecosystem.
          </motion.h4>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={thirdInView ? "visible" : "hidden"}
          className="flex-shrink-0 mt-6 lg:mt-0"
        >
          <Image
            src={paragraf3Img}
            alt="Optimize Image"
            className="h-[300px] w-[350px] md:h-[300px] md:w-[400px]"
          />
        </motion.div>
      </div>
    </>
  );
}
