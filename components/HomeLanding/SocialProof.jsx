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
        TRUST & TRACTION
      </h3>
      <h2 className="text-4xl font-bold mb-12">
        Already Trusted by Fast-Moving Teams
      </h2>

      <div className="">
        <div className="flex justify-center items-center gap-4 text-xl font-medium text-left text-[#525252]">
          <AiFillSafetyCertificate className="text-[#BB86FC]" size={30} />
          <p>
            Early users from SaaS, D2C, and iGaming are using our system to:
          </p>
        </div>

        <ul className="list-disc list-inside space-y-1 mb-3 text-left max-w-[800px] mx-auto">
          <li className="">cut response time</li>
          <li className="">reduce repetitive tickets</li>
          <li className="">
            get support under control without hiring a huge team
          </li>
        </ul>
      </div>

      {/* <div className="flex justify-center flex-wrap gap-12">
        
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillApi className="text-[#9B51E0]" size={30} />
        </div>

       
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillCloud className="text-[#9B51E0]" size={30} />
        </div>

       
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillDollarCircle className="text-[#9B51E0]" size={30} />
        </div>

        
        <div className="w-32 h-12 bg-[#111111] rounded flex flex-col items-center justify-center border border-[#525252]/30 transition hover:border-[#BB86FC]">
          <AiFillCrown className="text-[#9B51E0]" size={30} />
        </div>
      </div> */}
    </div>
  </section>
);
export default SocialProof;
