"use client";

import { useState, useEffect, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/LandingPageImages/arcLogo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const scrollThreshold = 300;
  const hideDelay = 50; 

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= scrollThreshold) {
      setVisible(true); 
    } else {
      setVisible(prevScrollPos > currentScrollPos); 
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScrollWithDelay = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, hideDelay);
    };

    window.addEventListener("scroll", handleScrollWithDelay);
    return () => {
      window.removeEventListener("scroll", handleScrollWithDelay);
      clearTimeout(window.scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`sticky top-0 z-[60] mb-3 bg-[#0A0A0E] text-white transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="h-8vh flex justify-between text-white lg:py-5 px-20 py-4">
        <Link href="/">
          <div className="flex flex-row items-center flex-1">
            <Image
              src={logo}
              alt="Arc Node Logo"
              height={50}
              width={50}
              className="pointer-events-none"
            />
            <h1 className="text-2xl font-bold font-sans px-4 pointer-events-none">
              Arc Node
            </h1>
          </div>
        </Link>
        <div className="hidden lg:flex flex-1 items-center justify-end font-normal">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link href="/about">
              <li className="hover:text-white transition text-xl border-b-2 border-black hover:border-white cursor-pointer">
                About
              </li>
            </Link>

            <Link href="/contact">
              <li className="hover:text-white transition text-xl border-b-2 border-black hover:border-white cursor-pointer">
                Contact
              </li>
            </Link>

            <a
              href="https://www.linkedin.com/in/luka-vlahovic-657162281/"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/luka-vlahovic-0"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a
              href="mailto:luka.vlahovic564@gmail.com"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
          </ul>
        </div>
        <button className="block lg:hidden transition" onClick={handleClick}>
          {isClicked ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div
        className={`lg:hidden ${
          isClicked ? "block" : "hidden"
        } absolute top-24 left-0 w-full bg-black text-white p-4`}
      >
        <ul className="flex flex-col items-center text-[18px] space-y-4">
          <Link href="/about">
            <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
              About
            </li>
          </Link>

          <Link href="/contact">
            <li className="hover:text-white transition border-b-2 border-black hover:border-white cursor-pointer">
              Contact
            </li>
          </Link>

          <div className="flex flex-row space-x-8">
            <a
              href="https://www.linkedin.com/in/luka-vlahovic-657162281/"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/luka-vlahovic-0"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a
              href="mailto:luka.vlahovic564@gmail.com"
              className="md:text-2xl text-xl hover:scale-125 duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;