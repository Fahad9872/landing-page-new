import React from "react";
import {
  FaBrain,
  FaDatabase,
  FaRegIdBadge,
  FaTicketAlt,
  FaRegHandshake,
} from "react-icons/fa";

const CapabilityItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg bg-[#181818] border border-[#525252]/30 transition duration-300 hover:border-[#BB86FC]">
    <Icon className="w-6 h-6 text-[#9B51E0] flex-shrink-0 mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-[#E1E1E1]">{title}</h4>
      <p className="text-sm text-[#E1E1E1]/70">{description}</p>
    </div>
  </div>
);

const AIAgentCapabilities = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
          The Agentic Advantage
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Truly Autonomous AI That Gets Results
        </h2>
        <p className="text-xl text-[#E1E1E1]/90 mb-8">
          Our AI isn't just a chatbot—it's a **smart worker** capable of running
          diagnostics, processing refunds, and updating user profiles.
        </p>

        <div className="space-y-4">
          <CapabilityItem
            icon={FaBrain}
            title="Multi-Step Action Chains"
            description="Executes a sequence of API calls and logic based on the user's intent, not just keywords."
          />
          <CapabilityItem
            icon={FaDatabase}
            title="Real-Time Data Lookups"
            description="Pulls live customer data (e.g., subscription status) for personalized, accurate replies."
          />
          <CapabilityItem
            icon={FaRegIdBadge}
            title="Personalized Responses"
            description="Generates custom answers tailored to the user's context and history."
          />
          <CapabilityItem
            icon={FaTicketAlt}
            title="Automatic Ticket Creation"
            description="Recognizes when human intervention is needed and automatically logs and routes tickets."
          />
          <CapabilityItem
            icon={FaRegHandshake}
            title="Human Fallback Smoothly"
            description="Intelligently transfers the conversation to a human agent with the full chat transcript and summary."
          />
        </div>
      </div>
      {/* Visual: AI chat bubble / bot avatar. */}
      <div className="h-96 w-full bg-[#181818] rounded-2xl flex items-center justify-center border border-[#525252]/50 text-[#525252]">
        <img
          className="rounded-md"
          src="https://img.freepik.com/premium-vector/3d-chat-bot-robot_685294-11.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </section>
);
export default AIAgentCapabilities;
