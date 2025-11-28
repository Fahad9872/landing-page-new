import React from "react";
import {
  AiOutlineApi,
  AiOutlineDeploymentUnit,
  AiOutlineCode,
  AiOutlineHistory,
  AiOutlineLock,
  AiOutlineBarChart,
  AiOutlineDashboard,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

// Reusable component to handle the dynamic description
const DynamicDescription = ({ items, closingStatement }) => (
  <>
    <ul className="list-disc list-inside space-y-1 mb-3 text-left">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p>{closingStatement}</p>
  </>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isDynamic = false,
  dynamicData,
}) => (
  <div className="p-6 bg-[#181818] rounded-xl border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
    <Icon className="w-8 h-8 text-[#9B51E0] mb-3" />
    <h4 className="text-lg font-semibold mb-1 text-[#E1E1E1]">{title}</h4>
    <div className="text-sm text-[#E1E1E1]/70">
      {isDynamic ? (
        <DynamicDescription
          items={dynamicData.items}
          closingStatement={dynamicData.closingStatement}
        />
      ) : (
        <p>{description}</p>
      )}
    </div>
  </div>
);

const CoreFeatures = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto ">
      <h3 className="text-sm font-semibold text-center text-[#9B51E0] uppercase tracking-widest mb-2">
        FEATURES – FOCUSED ON SIMPLICITY
      </h3>
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-16">
        Features That Actually Get Used
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={AiOutlineDeploymentUnit}
          title="Simple Automations"
          description="Set “if this, then that” rules without touching code. Close tickets, tag customers, notify teams — all from one place."
        />
        <FeatureCard
          icon={AiOutlineApi}
          title="Unified Timeline"
          description="One clean timeline per customer: chats, previous conversations, notes, and tickets in one place."
        />
        <FeatureCard
          icon={AiOutlineCode}
          title="Roles That Make Sense"
          description="Admins, agents, and managers – that’s it. Minimal roles, clear permissions. No 50-role RBAC puzzle."
        />

        {/* LIGHTWEIGHT ANALYTICS - NOW DYNAMIC */}
        <FeatureCard
          icon={AiOutlineHistory}
          title="Lightweight Analytics"
          isDynamic={true}
          dynamicData={{
            items: [
              "Response time",
              "Resolution time",
              "How many chats automation solves",
            ],
            closingStatement:
              "No 20-page report. Just the context that helps you serve.",
          }}
        />

        <FeatureCard
          icon={AiOutlineLock}
          title="Developer-Friendly API (When You’re Ready)"
          description="Need custom stuff later? We’ve got APIs so you can plug us into your existing systems — but it’s optional, not required to get started."
        />

        {/* ADVANCED ANALYTICS - DYNAMIC STRUCTURE APPLIED */}
        <FeatureCard
          icon={AiOutlineBarChart}
          title="Advanced Analytics"
          isDynamic={true}
          dynamicData={{
            items: [
              "Response time",
              "Resolution time",
              "How many chats automation solves",
            ],
            closingStatement:
              "No 20-page report. Just the numbers that help you improve.",
          }}
        />

        <FeatureCard
          icon={AiOutlineDashboard}
          title="Custom Dashboards"
          description="Build tailored views to monitor the metrics that matter most to your team."
        />
        <FeatureCard
          icon={AiOutlineUsergroupAdd}
          title="Multi-Tenancy Support"
          description="Securely manage support for multiple brands or large organizational structures."
        />
      </div>
    </div>
  </section>
);
export default CoreFeatures;
