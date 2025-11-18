import React from "react";
import {
  FaUserCircle,
  FaClock,
  FaClipboardList,
  FaReplyAll,
} from "react-icons/fa";

// Mockup Image URL from previous response
const LIVE_CHAT_URL =
  "http://googleusercontent.com/image_collection/image_retrieval/2122209463438856988_0";

const LiveChatExperience = () => (
  <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
          Agent Dashboard
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Agent Experience, Reimagined.
        </h2>
        <p className="text-xl text-[#E1E1E1]/90 mb-8">
          Stop using clunky tools. Our unified dashboard is cleaner, faster, and
          built for agent productivity.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg">
            <FaUserCircle className="text-[#BB86FC] flex-shrink-0" size={24} />
            **Customer Profile Sidebar:** Instant access to customer history,
            status, and tickets.
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaClock className="text-[#BB86FC] flex-shrink-0" size={24} />
            **Real-Time Indicators:** See what the customer or AI is typing
            before it's sent.
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaClipboardList
              className="text-[#BB86FC] flex-shrink-0"
              size={24}
            />
            **Unified Timeline View:** Every interaction—chat, flow, email—in
            one place.
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FaReplyAll className="text-[#BB86FC] flex-shrink-0" size={24} />
            **Smart Canned Responses:** AI-suggested templates based on the
            conversation context.
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 rounded-2xl shadow-2xl overflow-hidden border border-[#525252]/50">
        <img
          src={
            "https://cdn.dribbble.com/userupload/9076867/file/original-3129373ef71d45882da34461d5aef703.png?resize=2048x1536&vertical=center"
          }
          alt="UI mock of the agent dashboard"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);
export default LiveChatExperience;
