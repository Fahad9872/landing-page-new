import React from "react";
import { AiOutlineMail, AiFillStar } from "react-icons/ai";
import heroImage from "@/assets/HomeLanding/Images/hero.png";
// Mockup Image URL from previous response
const HERO_MOCKUP_URL =
  "http://googleusercontent.com/image_collection/image_retrieval/7968386097838327840_0";

const HeroSection = () => (
  <section className="relative min-h-screen pt-20 pb-16 bg-[#111111] text-[#E1E1E1] flex flex-col items-center justify-center px-4 overflow-hidden">
    <div className="max-w-[1400px] text-center z-10">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#BB86FC] to-[#9B51E0]">
        Agentic AI Support.
        <br />
        Built for <span className="text-[#E1E1E1]">Scale.</span>
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-[#E1E1E1]/90 max-w-3xl mx-auto">
        The **next-gen system** that resolves 80% of issues automatically,
        freeing your team to focus on complex resolutions.
      </p>

      {/* Email Signup Form & CTA */}
      <form className="flex flex-col md:flex-row gap-4 justify-center mb-16">
        <div className="relative w-full md:w-96">
          <AiOutlineMail
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#525252]"
            size={20}
          />
          <input
            type="email"
            placeholder="Enter your work email"
            className="p-4 pl-12 w-full rounded-xl bg-[#181818] border border-[#525252] text-[#E1E1E1] placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-[#9B51E0] transition duration-200"
          />
        </div>
        <button
          type="submit"
          className="px-10 py-4 w-full md:w-auto rounded-xl font-bold text-lg bg-[#9B51E0] text-[#111111] transition duration-300 hover:bg-[#BB86FC] hover:shadow-xl hover:shadow-[#9B51E0]/50 active:scale-95"
        >
          Join Waitlist
        </button>
      </form>

      {/* Mockup Image */}
      <div className="mx-auto max-w-6xl rounded-2xl shadow-[0_0_80px_rgba(155,81,224,0.4)] overflow-hidden border-2 border-[#525252]/50">
        <img
          src={heroImage.src}
          alt="Dark themed AI chat interface mockup"
          className="w-full h-full ovject-contain"
        />
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-[#525252] tracking-wider uppercase">
        <p className="flex items-center gap-2">✅ Beta Q1 2025</p>
        <p className="flex items-center gap-2">
          <AiFillStar className="text-[#BB86FC]" /> Early Tester Program
        </p>
        <p className="flex items-center gap-2">🔒 Secure & Compliant</p>
      </div>
    </div>
  </section>
);
export default HeroSection;
