import React from "react";
import {
  MdOutlineBrokenImage,
  MdOutlineSmsFailed,
  MdOutlineAccessTime,
} from "react-icons/md";

const ProblemSection = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        Pain Points
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Why Customer Support Today Sucks 😩
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineBrokenImage className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Fragmented Data</h4>
          <p className="text-[#E1E1E1]/70">
            Agents waste time searching across CRM, chat, and helpdesk tools.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineSmsFailed className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">AI Hype, Zero Action</h4>
          <p className="text-[#E1E1E1]/70">
            Most bots can't perform multi-step actions or personalize responses.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineAccessTime className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">Slow Resolution</h4>
          <p className="text-[#E1E1E1]/70">
            High wait times and repetitive queries drown human agents.
          </p>
        </div>
      </div>

      {/* Placeholder for "broken UI collage" illustration */}
      <div className="mt-16 text-[#525252]">
        [Image of a dark-themed illustrations or “broken UI collage”]
      </div>
    </div>
  </section>
);
export default ProblemSection;
