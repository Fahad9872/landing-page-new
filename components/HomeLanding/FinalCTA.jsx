import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const FinalCTA = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-[#181818] border border-[#525252]/30 shadow-2xl shadow-black/70">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#BB86FC] to-[#9B51E0]">
        Stop Patching. Start Resolving.
      </h2>
      <p className="text-xl mb-10 text-[#E1E1E1]/90">
        Join the waitlist to secure your spot for early access and redefine your
        customer experience.
      </p>

      {/* Email Signup Form (Repeated for convenience) */}
      <form className="flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your work email"
          className="p-4 w-full md:w-96 rounded-xl bg-[#111111] border border-[#525252] text-[#E1E1E1] placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-[#9B51E0]"
        />
        <button
          type="submit"
          className="px-10 py-4 w-full md:w-auto rounded-xl font-bold text-xl flex items-center justify-center gap-2 bg-[#9B51E0] text-[#111111] transition duration-300 hover:bg-[#BB86FC] active:scale-95"
        >
          Join The Waitlist <AiOutlineArrowRight size={20} />
        </button>
      </form>
    </div>
  </section>
);
export default FinalCTA;
