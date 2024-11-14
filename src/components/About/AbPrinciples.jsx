"use client";

import { BadgeCheck, Handshake, Medal, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); 
      }
    }, options);

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [options]);

  return [ref, isInView];
};

export default function AbPrinciples() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const observerOptions = {
    root: null, 
    threshold: 0.1, 
  };

  const [ref1, inView1] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);
  const [ref4, inView4] = useInView(observerOptions);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div id="startedHeader" className="mt-[120px] mb-4 md:mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center mx-8">
            <h1 className="text-white text-[28px] md:text-[34px] font-extrabold mb-4 font-sans text-center">
              Our Core Principles and Beliefs
            </h1>
            <p className="text-lg md:text-[22px] font-sans font-bold text-[#8d929c] text-center">
              We believe that integrity, collaboration, excellence, and respect
              form the foundation of successful partnerships.
            </p>
          </div>
        </div>
      </div>

      <div id="principles" className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          ref={ref1}
          className="flex flex-col rounded-3xl max-w-[500px] p-6"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start gap-4">
            <Shield size={40} color="#0ea5e9" className="self-start" />
            <p className="text-[20px] md:text-[18px] text-white">
              <span className="font-extrabold">
                Integrity in Every Interaction:
              </span>{" "}
              At Arc Node, transparency and trust are foundational to our
              mission. We prioritize honest communication and ethical practices
              in all interactions, ensuring you have a clear, informed, and
              secure experience. Every decision we make is driven by our
              commitment to empowering you with the tools and information needed
              for safe, confident asset management.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          className="flex flex-col rounded-3xl max-w-[500px] p-6"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-start gap-4">
            <Users size={40} color="#0ea5e9" className="self-start" />
            <p className="text-[20px] md:text-[18px] text-white">
              <span className="font-extrabold">
                Collaboration Beyond Custody:
              </span>{" "}
              We view our users as partners in innovation, not just customers.
              Working closely with you allows us to create a flexible, powerful
              platform that meets your specific needs. Your feedback is vital,
              shaping every stage of development to ensure Arc Node aligns with
              your vision of secure, self-custodial control.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          className="flex flex-col rounded-3xl max-w-[500px] p-6"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-start gap-4">
            <Medal size={40} color="#0ea5e9" className="self-start" />
            <p className="text-[20px] md:text-[18px] text-white">
              <span className="font-extrabold">
                Commitment to Security and Excellence:
              </span>{" "}
              Security and quality aren’t just goals—they’re our standards. Arc
              Node is designed to uphold the highest levels of protection and
              functionality, continuously evolving to meet new challenges and
              opportunities. We are dedicated to delivering robust, efficient
              solutions that enable you to safely maximize the potential of your
              digital assets.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          className="flex flex-col rounded-3xl max-w-[500px] p-6 mb-10"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-start gap-4">
            <Handshake size={40} color="#0ea5e9" className="self-start" />
            <p className="text-[20px] md:text-[18px] text-white">
              <span className="font-extrabold">
                Respect for Your Autonomy and Vision:
              </span>{" "}
              Your control and independence are essential to our approach. We
              respect the unique needs of each user and every process, ensuring
              that each interaction is collaborative and focused on achieving
              your goals. By prioritizing both security and adaptability, Arc
              Node builds long-lasting trust and empowers you with full
              custodial control over your assets.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
