import React from "react";
import {
  FaReact,
  FaWhatsapp,
  FaTelegram,
  FaJsSquare,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

const IntegrationsSection = () => (
  <section className="py-24 bg-[#181818] text-[#E1E1E1] px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-sm font-semibold text-[#9B51E0] uppercase tracking-widest mb-2">
        CONNECT EVERYTHING (BUT START SIMPLE)
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold ">
        Use It Where Your Customers Already Are
      </h2>
      <p className="mb-16">
        Start with web chat. Add more channels as you grow.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
        <div className="p-4 bg-[#111111] rounded-lg border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
          <AiOutlineApi className="w-10 h-10 mx-auto text-[#BB86FC] mb-2" />
          <p className="text-sm font-semibold">Web JS Widget</p>
        </div>
        <div className="p-4 bg-[#111111] rounded-lg border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
          <FaReact className="w-10 h-10 mx-auto text-[#BB86FC] mb-2" />
          <p className="text-sm font-semibold">React Component for apps</p>
        </div>
        <div className="p-4 bg-[#111111] rounded-lg border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
          <FaWhatsapp className="w-10 h-10 mx-auto text-[#BB86FC] mb-2" />
          <p className="text-sm font-semibold">
            WhatsApp & Telegram (optional add-ons)
          </p>
        </div>
        <div className="p-4 bg-[#111111] rounded-lg border border-[#525252]/30 hover:border-[#BB86FC] transition duration-300">
          <FaExternalLinkAlt className="w-10 h-10 mx-auto text-[#BB86FC] mb-2" />
          <p className="text-sm font-semibold">
            CRM / internal tools via API (future-friendly, not required on day
            one)
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default IntegrationsSection;
