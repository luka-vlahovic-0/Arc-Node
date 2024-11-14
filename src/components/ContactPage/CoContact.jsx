import React from "react";
import CoHeader from "./CoHeader";

export default function CoContact() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mb-20 mt-12">
        <CoHeader />
        <form className="flex-grow w-11/12 md:w-3/5 flex flex-col items-center justify-center max-w-xl mx-auto rounded-3xl border-1 border-[#000000] bg-gradient-to-br from-[#17171e] to-[#0A0A0E] p-10">
          <h1 className="text-3xl text-white font-bold">Contact Our Team</h1>

          <input
            type="text"
            placeholder="Name"
            className="w-11/12 md:w-3/4 rounded-2xl p-4 mb-4 mt-8"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-11/12 md:w-3/4 rounded-2xl p-4 mb-4"
            required
          />

          <textarea
            type="text"
            placeholder="Message"
            className="w-11/12 md:w-3/4 rounded-2xl p-4"
            required
          />

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-[27px] font-normal mt-8 py-2 px-12 rounded-xl transform transition hover:scale-105">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
