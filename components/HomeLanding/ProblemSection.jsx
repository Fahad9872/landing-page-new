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
        Pain Points - Why Support Today Sucks
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Why Customer Support Feels So Hard 😩
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineBrokenImage className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Too Many Tabs, Too Much Chaos
          </h4>
          <p className="text-[#E1E1E1]/70">
            Your team is juggling chat, email, WhatsApp, CRM, and a helpdesk —
            all in different places. Half the day is spent just finding context.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineSmsFailed className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Tools That Need a Full-Time Admin
          </h4>
          <p className="text-[#E1E1E1]/70">
            Most “modern” tools are built like enterprise ERPs. 20 settings
            pages, 100 integrations, 0 clarity on what to do first.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-[#525252]/30 bg-[#181818]">
          <MdOutlineAccessTime className="w-10 h-10 mx-auto text-[#BB86FC] mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Dumb Bots, Frustrated Customers
          </h4>
          <p className="text-[#E1E1E1]/70">
            You add a bot, and it either replies with generic nonsense or traps
            users in an endless menu loop. Nobody wins.
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
