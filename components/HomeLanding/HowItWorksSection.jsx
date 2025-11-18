import React from "react";
import { FaDownload, FaPencilRuler, FaUsersCog } from "react-icons/fa";

const StepCard = ({ icon: Icon, step, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[#9B51E0] text-[#111111] font-bold text-2xl shadow-lg shadow-[#9B51E0]/30">
      <Icon className="w-8 h-8" />
    </div>
    <span className="text-sm font-bold text-[#525252] uppercase tracking-widest mb-2">
      Step {step}
    </span>
    <h4 className="text-xl font-semibold mb-3 text-[#E1E1E1]">{title}</h4>
    <p className="text-[#E1E1E1]/70">{description}</p>
  </div>
);

const HowItWorksSection = () => (
  <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest text-center mb-2">
        Onboarding
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Setup in Three Simple Steps
      </h2>

      <div className="relative grid lg:grid-cols-3 gap-12">
        {/* Connector line for large screens */}
        {/* <div className="hidden lg:block absolute top-1/4 left-1/2 w-1/3 h-0.5 transform -translate-x-[67%] bg-[#525252]/50"></div>
        <div className="hidden lg:block absolute top-1/4 left-1/2 w-1/3 h-0.5 transform translate-x-[33%] bg-[#525252]/50"></div> */}

        <StepCard
          icon={FaDownload}
          step={1}
          title="Install Widget on Your Site"
          description="A quick, single line of JavaScript installs our high-performance widget onto your web application."
        />
        <StepCard
          icon={FaPencilRuler}
          step={2}
          title="Create Your Auto Flows"
          description="Visually design automation flows for common questions and define your AI rules."
        />
        <StepCard
          icon={FaUsersCog}
          step={3}
          title="AI + Agents Take Over"
          description="The AI handles complexity, routing seamlessly to a human agent only when truly necessary."
        />
      </div>
    </div>
  </section>
);
export default HowItWorksSection;
