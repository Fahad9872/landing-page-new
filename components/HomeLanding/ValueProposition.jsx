import React from "react";
import { FaTachometerAlt, FaDollarSign, FaRocket } from "react-icons/fa";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-[#181818] rounded-xl border-t-4 border-[#9B51E0] shadow-xl">
    <Icon className="w-10 h-10 text-[#BB86FC] mb-4" />
    <h4 className="text-2xl font-bold mb-3 text-[#E1E1E1]">{title}</h4>
    <p className="text-[#E1E1E1]/80">{description}</p>
  </div>
);

const ValueProposition = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        Our Edge
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        The Value Proposition
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <ValueCard
          icon={FaTachometerAlt}
          title="80% Automation Rate"
          description="Our agentic AI resolves complex issues, drastically reducing your human agent load and accelerating resolution time."
        />
        <ValueCard
          icon={FaDollarSign}
          title="Lower TCO, Fair Pricing"
          description="Pay-as-you-use pricing based on conversations, not seats, making us significantly cheaper than legacy platforms."
        />
        <ValueCard
          icon={FaRocket}
          title="Built for Hypergrowth"
          description="Designed from the ground up for massive scale and speed, ready to handle millions of interactions daily."
        />
      </div>
    </div>
  </section>
);
export default ValueProposition;
