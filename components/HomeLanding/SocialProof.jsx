import React from "react";
// Importing new icons to represent different industries/authorities
import {
  AiFillSafetyCertificate,
  AiFillApi,
  AiFillCloud,
  AiFillDollarCircle,
  AiFillCrown,
} from "react-icons/ai";

const SocialProof = () => (
  <section className="py-20 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        Trust & Traction
      </h3>
      <h2 className="text-4xl font-bold mb-12">
        Validated by Industry Leaders
      </h2>

      <div className="flex justify-center items-center gap-4 text-xl font-medium text-[#525252] mb-12">
        <AiFillSafetyCertificate className="text-[#BB86FC]" size={30} />
        <p>
          Early testers from **major SaaS** and **iGaming** platforms are
          already seeing results.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-12">
        {/* Actualized Logo Blocks using React Icons */}

        {/* Logo 1: Represents Enterprise/SaaS (API/Platform) */}
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillApi className="text-[#9B51E0]" size={30} />
        </div>

        {/* Logo 2: Represents Cloud/Big Tech */}
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillCloud className="text-[#9B51E0]" size={30} />
        </div>

        {/* Logo 3: Represents iGaming/Fintech (Financial/Transaction focus) */}
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillDollarCircle className="text-[#9B51E0]" size={30} />
        </div>

        {/* Logo 4: Represents Authority/Major Player (Crown/Leader) */}
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillCrown className="text-[#9B51E0]" size={30} />
        </div>
      </div>
    </div>
  </section>
);
export default SocialProof;
