import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/HomeLanding/HeroSection";
import SimpleExplanation from "@/components/HomeLanding/SimpleExplanation";
import ProblemSection from "@/components/HomeLanding/ProblemSection";
import SolutionOverview from "@/components/HomeLanding/SolutionOverview";
import CoreFeatures from "@/components/HomeLanding/CoreFeatures";
import HowItWorksSection from "@/components/HomeLanding/HowItWorksSection";
import AIAgentCapabilities from "@/components/HomeLanding/AIAgentCapabilities";
import LiveChatExperience from "@/components/HomeLanding/LiveChatExperience";
import FlowBuilderSection from "@/components/HomeLanding/FlowBuilderSection";
import IntegrationsSection from "@/components/HomeLanding/IntegrationsSection";
import ValueProposition from "@/components/HomeLanding/ValueProposition";
import SocialProof from "@/components/HomeLanding/SocialProof";
import PricingPreview from "@/components/HomeLanding/PricingPreview";
import FAQSection from "@/components/HomeLanding/FAQSection";
import FinalCTA from "@/components/HomeLanding/FinalCTA";
import Footer from "@/components/HomeLanding/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} `}>
      <HeroSection />
      <SimpleExplanation />
      <ProblemSection />
      <SolutionOverview />
      <CoreFeatures />
      <HowItWorksSection />
      <AIAgentCapabilities />
      <LiveChatExperience />
      <FlowBuilderSection />
      <IntegrationsSection />
      <ValueProposition />
      <SocialProof />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
