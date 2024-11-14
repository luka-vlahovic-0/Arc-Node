import React from "react";

export default function CoHeader() {
  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-lg mx-auto px-6 md:px-0 mt-16 md:mt-0 mb-12 md:mb-0">
      <p className="text-lg text-blue-500 font-semibold">Contact us</p>
        <h1 className="text-4xl text-white font-bold mb-4 text-start">
          Get in Touch with Arc Node
        </h1>
        <h2 className="text-xl text-[#bcbfc4] font-normal">
          Whether you have questions about Arc Node’s multi-signature wallet,
          need support with self-custody solutions, or want to explore
          partnership opportunities, we’re here to help. Reach out to our team,
          and let’s discuss how Arc Node can support your digital asset needs.
          Your security and success are our top priorities.
        </h2>
      </div>
    </>
  );
}
