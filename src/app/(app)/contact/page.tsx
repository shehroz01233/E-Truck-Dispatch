import { Metadata } from "next";
import ChecklistHighlightSection from "../components/ChecklistHighlightSection";
import HeroSection from "../components/HeroSection";
import InformationFormSection from "../components/InformationFormSection";


export const metadata: Metadata = {
  title: "Contact Us | E-Truck Dispatching",
  description:
    "Contact E-Truck Dispatching for freight lanes, dispatch pricing, onboarding, and equipment-specific dispatch services.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
  h1={
    <>
      Contact Us – E-Truck Dispatching
      <span className="block">
        Let’s Move Your Trucking Business Forward
      </span>
    </>
  }
  fixedTitle="Contact E-Truck Dispatching"
  typingTitles={[
    "to Move Your Business Forward",
    "for Better Freight Opportunities",
    "for Dispatch Pricing and Onboarding",
    "for Equipment-Specific Support",
  ]}
  paragraphs={[
    "Whether you are an owner-operator or managing a growing fleet, E-Truck Dispatching is ready to help you secure better freight opportunities and improve operational efficiency.",
    "Our dispatch team is available to answer questions about freight lanes, dispatch pricing, onboarding, and equipment-specific dispatch services.",
  ]}
  backgroundImage="/Contact Us/images/1_rectangle_1450.webp"
  backgroundAlt="Truck traveling on the highway"
/>

      <InformationFormSection />
      <ChecklistHighlightSection />
    </main>
  );
}
