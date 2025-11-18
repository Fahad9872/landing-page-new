import React from "react";
import { FaRobot, FaComments, FaSitemap } from "react-icons/fa";

const SolutionOverview = () => (
  <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        One Simple System for <span className="text-[#9B51E0]">Everything</span>
      </h2>
      <p className="text-center text-lg mb-16 text-[#525252] max-w-3xl mx-auto">
        Consolidate your stack. Deliver faster, smarter, and more personalized
        support through three core pillars.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Pillar A: Auto-Responder System */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-[#525252]/30 transition duration-300 hover:border-[#9B51E0] transform hover:scale-[1.02]">
          <FaSitemap className="w-10 h-10 p-2 bg-[#9B51E0]/20 rounded-lg text-[#9B51E0] mb-5" />
          <h3 className="text-2xl font-semibold mb-3">
            A. Auto-Responder System
          </h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Build complex, no-code flows. Handle repetitive queries instantly.
          </p>
          <ul className="space-y-2 text-[#E1E1E1]">
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Node-based
              flow editor
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Instant
              answers for FAQs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Automatic
              ticket routing
            </li>
          </ul>
        </div>

        {/* Pillar B: Live Chat */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-[#525252]/30 transition duration-300 hover:border-[#9B51E0] transform hover:scale-[1.02]">
          <FaComments className="w-10 h-10 p-2 bg-[#9B51E0]/20 rounded-lg text-[#9B51E0] mb-5" />
          <h3 className="text-2xl font-semibold mb-3">B. Live Chat</h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Empower human agents with the context and tools they need for faster
            resolution.
          </p>
          <ul className="space-y-2 text-[#E1E1E1]">
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Real-time
              customer profile
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Seamless
              AI-to-agent handoff
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Canned
              responses & suggested replies
            </li>
          </ul>
        </div>

        {/* Pillar C: AI Agentic Chat */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-[#525252]/30 transition duration-300 hover:border-[#9B51E0] transform hover:scale-[1.02]">
          <FaRobot className="w-10 h-10 p-2 bg-[#9B51E0]/20 rounded-lg text-[#9B51E0] mb-5" />
          <h3 className="text-2xl font-semibold mb-3">C. AI Agentic Chat</h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Autonomous AI agents perform multi-step actions and data lookups,
            truly solving issues.
          </p>
          <ul className="space-y-2 text-[#E1E1E1]">
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Multi-step
              task completion
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Real-time data
              lookups
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Personalized
              responses
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default SolutionOverview;
