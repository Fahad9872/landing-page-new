import React from "react";
import { FaPuzzlePiece, FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

// Mockup Image URL from previous response
const FLOW_BUILDER_URL =
  "http://googleusercontent.com/image_collection/image_retrieval/7158519703796593443_0";

const FlowBuilderSection = () => (
  <section className="py-24 bg-[#111111] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2">
        <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
          No-Code Automation
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Build Flows Without Bugging Your Dev Team
        </h2>
        <p className="text-xl text-[#E1E1E1]/90 mb-8">
          Our node-based editor puts the power of complex logic into the hands
          of your support team, not just developers.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 text-lg">
            <FaPuzzlePiece
              className="text-[#BB86FC] flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <p className="font-bold">Simple Visual Editor</p>
              <p>
                Drag and connect blocks like “Ask Question”, “Send Reply”,
                “Create Ticket”, “Assign to Agent”.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-lg">
            <FaCheckCircle
              className="text-[#BB86FC] flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <p className="font-bold">Triggers & Conditions</p>
              <p>Create basic conditions like:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-left">
                <li>“If user is new”</li>
                <li>“If country is X”</li>
                <li>“If VIP tag is present”</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-4 text-lg">
            <FaExchangeAlt
              className="text-[#BB86FC] flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <p className="font-bold">Human Handoff Built-In</p>
              <p>
                If the automation gets stuck, it hands over to a human with the
                entire context visible — no cold transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 rounded-2xl shadow-2xl overflow-hidden border border-[#525252]/50">
        <img
          src={
            "https://webkid.io/static/92618ced06fad4a2e513cb1d9c87e602/aed6e/datablocks-teaser.jpg"
          }
          alt="Node-based editor screenshot"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);
export default FlowBuilderSection;
