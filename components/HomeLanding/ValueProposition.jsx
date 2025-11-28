import React from "react";
import { FaTachometerAlt, FaDollarSign, FaRocket } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-[#181818] rounded-xl border-t-4 border-[#9B51E0] shadow-xl">
    <Icon className="w-10 h-10 text-[#BB86FC] mb-4" />
    <h4 className="text-2xl font-bold mb-3 text-[#E1E1E1]">{title}</h4>
    <p className="text-[#E1E1E1]/80">{description}</p>
  </div>
);

const ValueProposition = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto ">
      <h3 className="text-sm font-semibold text-center text-[#9B51E0] uppercase tracking-widest mb-2">
        VALUE PROP
      </h3>
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-16">
        Why Teams Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        <ValueCard
          icon={FaTachometerAlt}
          title="Simple From Day 1"
          description=" You don’t need a solutions architect to set us up. You can go live in the same afternoon."
        />
        <ValueCard
          icon={FaDollarSign}
          title="Less Context Switching"
          description="Your team stops jumping between tools. Everything they need is in one place."
        />
        <ValueCard
          icon={FaRocket}
          title="Automation That Doesn’t Break"
          description="We focus on a few automations that work reliably instead of 1,000 configurations nobody understands."
        />
        <ValueCard
          icon={FaUsers}
          title="Built for Growing Teams"
          description="Whether you’re a 2-person support team or a 50-agent operation, the product stays easy to use.
"
        />
      </div>
    </div>
  </section>
);
export default ValueProposition;
