import React from "react";
import { FaRobot, FaComments, FaSitemap } from "react-icons/fa";

const SolutionOverview = () => (
  <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        One Simple System for
        <span className="text-[#9B51E0]"> All Your Conversations</span>
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
            Auto-Responder That Takes Care of the Obvious
          </h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Set up answers for common questions once — and let the system handle
            them forever.
          </p>
          <ul className="space-y-2 text-[#E1E1E1] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> No-code
              question–answer flows
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Instant
              replies for FAQs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Simple rules
              for routing (sales, support, billing, VIP, etc.)
            </li>
          </ul>
          <p>
            No “AI degree” needed. If you can write a WhatsApp message, you can
            create a flow.
          </p>
        </div>

        {/* Pillar B: Live Chat */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-[#525252]/30 transition duration-300 hover:border-[#9B51E0] transform hover:scale-[1.02]">
          <FaComments className="w-10 h-10 p-2 bg-[#9B51E0]/20 rounded-lg text-[#9B51E0] mb-5" />
          <h3 className="text-2xl font-semibold mb-3">
            A Clean Live Chat Your Team Will Actually Like
          </h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Give your agents one simple screen to manage all customer chats.
          </p>
          <ul className="space-y-2 text-[#E1E1E1] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> See who you’re
              talking to and what they did before
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Reply fast
              with saved replies and suggestions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Seamless move
              from auto-reply to human agent
            </li>
          </ul>
        </div>

        {/* Pillar C: AI Agentic Chat */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-[#525252]/30 transition duration-300 hover:border-[#9B51E0] transform hover:scale-[1.02]">
          <FaRobot className="w-10 h-10 p-2 bg-[#9B51E0]/20 rounded-lg text-[#9B51E0] mb-5" />
          <h3 className="text-2xl font-semibold mb-3">
            Smart Assist That Helps, Not Replaces
          </h3>
          <p className="text-[#E1E1E1]/80 mb-6">
            Our AI doesn’t try to act like your CEO. It just helps your team
            work faster.
          </p>
          <ul className="space-y-2 text-[#E1E1E1] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Suggests
              replies your team can approve/edit
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Looks up basic
              info (orders, status, plan, etc.)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9B51E0] font-bold">→</span> Creates
              tickets automatically when something needs follow-up
            </li>
          </ul>
          <p>
            You stay in control. AI is there to remove friction, not create it.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default SolutionOverview;
