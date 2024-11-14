import Image from "next/image";
import React from "react";
import arcLogo from "../../assets/LandingPageImages/arcLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0A0A0E] pt-10 mt-20 relative z-[60] px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
        <div className="flex flex-col items-center sm:items-start">
          <Link href={"/"}>
            <div className="flex flex-row items-center mb-4">
              <Image
                src={arcLogo}
                alt="Arc Node Logo"
                className="h-10 w-10 mr-2"
                priority={true}
              />
              <h1 className="text-3xl text-white font-sans font-bold">
                Arc Node
              </h1>
            </div>
          </Link>
          <h1 className="text-white font-sans text-xl font-semibold max-w-xl text-center sm:text-left md:mr-80">
            Arc Node is a secure, self-custody platform with multi-signature
            support. Apply rules and policies to any wallet, offering
            flexibility and control over your digital assets.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center sm:items-start">
          <h1 className="text-white font-sans text-2xl font-semibold hover:scale-105 cursor-pointer mt-16 sm:mt-0 mb-6 md:mb-0">
            Contact
          </h1>
          <h1 className="text-white font-sans text-2xl font-semibold hover:scale-105 cursor-pointer mt-0 md:ml-6">
            About
          </h1>
        </div>
      </div>

      <hr className="w-5/6 mt-8 text-white" />

      <div className="flex flex-row justify-center gap-4 mt-8">
        <Link href="https://www.linkedin.com/in/luka-vlahovic-657162281/">
          <div className="rounded-full border border-white p-4 flex items-center justify-center hover:scale-105">
            <FaLinkedinIn color="white" size={20} />
          </div>
        </Link>

        <Link href="https://github.com/luka-vlahovic-0">
          <div className="rounded-full border border-white p-4 flex items-center justify-center hover:scale-105">
            <FiGithub color="white" size={20} />
          </div>
        </Link>

        <Link href="https://lukavlahovic.com/" passHref>
          <div className="rounded-full border border-white p-4 flex items-center justify-center hover:scale-105">
            <SlGlobe color="white" size={20} />
          </div>
        </Link>
      </div>

      <h1 className="text-white font-sans text-xl font-semibold max-w-xl mt-12 mb-2 text-center">
        © 2024 Arc Node. All Rights Reserved
      </h1>
    </div>
  );
}
