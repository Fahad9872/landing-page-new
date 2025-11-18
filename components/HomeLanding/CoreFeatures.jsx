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

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-[#181818] rounded-xl border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
    <Icon className="w-8 h-8 text-[#9B51E0] mb-3" />
    <h4 className="text-lg font-semibold mb-1 text-[#E1E1E1]">{title}</h4>
    <p className="text-sm text-[#E1E1E1]/70">{description}</p>
  </div>
);

const CoreFeatures = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        Depth and Power
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Features That Drive Real ROI
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={AiOutlineDeploymentUnit}
          title="Multi-Step Actions"
          description="AI agents can execute complex, multi-stage workflows automatically."
        />
        <FeatureCard
          icon={AiOutlineApi}
          title="External Data Lookups"
          description="Access CRM, order history, and custom APIs in real-time."
        />
        <FeatureCard
          icon={AiOutlineCode}
          title="Developer API"
          description="Integrate support functionality seamlessly into your proprietary systems."
        />
        <FeatureCard
          icon={AiOutlineHistory}
          title="Unified Timeline"
          description="A single, chronological view of every customer interaction across channels."
        />
        <FeatureCard
          icon={AiOutlineLock}
          title="Role-Based Security"
          description="Granular access controls for agents, admins, and supervisors."
        />
        <FeatureCard
          icon={AiOutlineBarChart}
          title="Advanced Analytics"
          description="Track resolution time, agent productivity, and automation success rates."
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
