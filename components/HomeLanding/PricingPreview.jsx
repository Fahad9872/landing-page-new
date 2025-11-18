import React from "react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";

const PricingPreview = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        Pricing Preview
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Fair, Transparent, and Cheaper
      </h2>

      <div className="p-8 bg-[#181818] rounded-2xl shadow-2xl border border-[#525252]/50">
        <h4 className="text-3xl font-bold mb-4">Launch Tier: Pay-As-You-Use</h4>
        <p className="text-5xl font-extrabold text-[#BB86FC] mb-4">
          $0<span className="text-xl text-[#525252]"> / Small Teams</span>
        </p>
        <p className="text-lg text-[#E1E1E1]/80 mb-6">
          Start free, then only pay for fully resolved, AI-agentic
          conversations.
        </p>
        <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
          <li className="flex items-center gap-3">
            <FaCheck className="text-[#9B51E0]" /> **Free Plan** for small teams
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="text-[#9B51E0]" /> Per-conversation billing
            model
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="text-[#9B51E0]" /> Significantly **lower cost**
            than Intercom/Freshdesk
          </li>
        </ul>
        <p className="flex items-center justify-center gap-2 text-sm text-[#525252]">
          <FaInfoCircle /> Full details and Enterprise pricing will be available
          at launch.
        </p>
      </div>
    </div>
  </section>
);
export default PricingPreview;
