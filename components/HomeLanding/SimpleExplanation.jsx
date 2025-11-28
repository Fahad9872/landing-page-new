import React from "react";
import { FaBolt, FaMagic, FaUsers } from "react-icons/fa";

const SimpleExplanation = () => (
  <section className="py-20 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-3xl md:text-4xl font-semibold mb-12">
        We built a support system that
        <span className="text-[#BB86FC] ml-3">
          your team can start using in minutes
        </span>
        , not weeks. Add a widget, set a few rules, and you’re live. We built a
        support system that
      </p>
      <div className="flex justify-center gap-8 md:gap-16">
        <div className="text-center">
          <FaBolt className="w-10 h-10 mx-auto text-[#9B51E0] mb-2" />
          <p className="text-sm text-[#525252] uppercase font-bold">
            Fast Resolution
          </p>
        </div>
        <div className="text-center">
          <FaMagic className="w-10 h-10 mx-auto text-[#9B51E0] mb-2" />
          <p className="text-sm text-[#525252] uppercase font-bold">
            Agentic AI
          </p>
        </div>
        <div className="text-center">
          <FaUsers className="w-10 h-10 mx-auto text-[#9B51E0] mb-2" />
          <p className="text-sm text-[#525252] uppercase font-bold">
            Unified Teams
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default SimpleExplanation;
