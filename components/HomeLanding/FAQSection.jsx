import React from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";

// Simple dummy data for FAQs
const faqs = [
  {
    q: "When will it launch?",
    a: "We are targeting a Beta launch for waitlist members in Q1 2025, with General Availability later that year.",
  },
  {
    q: "How does the AI work?",
    a: "Our AI uses large language models combined with a proprietary agentic framework, allowing it to perform multi-step tasks using integrated external data.",
  },
  {
    q: "Will it replace my human agents?",
    a: "No. Our system is designed to remove repetitive tier-1 tasks, allowing human agents to focus exclusively on complex, high-value customer issues.",
  },
  {
    q: "Is there API access?",
    a: "Yes, we provide comprehensive REST API access for deep customization and integration with your systems.",
  },
  {
    q: "Is it secure and does it support multi-tenancy?",
    a: "Yes, we adhere to enterprise-grade security standards (e.g., SOC 2 type 2 compliant) and fully support multi-tenancy.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest text-center mb-2">
          Q & A
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#525252]/50 rounded-xl overflow-hidden bg-[#111111]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-5 text-xl font-semibold hover:bg-[#181818] transition duration-200"
              >
                <span className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#BB86FC]" />
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-[#9B51E0]" />
                ) : (
                  <FaPlus className="text-[#9B51E0]" />
                )}
              </button>
              {openIndex === index && (
                <p className="p-5 pt-0 text-[#E1E1E1]/80 border-t border-[#525252]/30">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
