import HeroSection from "@/app/components/HeroSection";
import VisionFormSection from "@/app/components/VisionFormSection";

const visionParagraphs = [
  "Submit your details, get a dedicated dispatcher, and start running optimized, revenue-focused routes but not random loads. No contracts. No forced dispatch. Just controlled growth.",
];
const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];


export default function BoxTruckPage() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Guides & Dispatch
            <span className="block">Insights</span>
          </>
        }
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog Single Page/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

     

      <VisionFormSection
        heading={
          <>
            <span className="block whitespace-nowrap">Get Real Dispatch</span>
            <span className="block whitespace-nowrap">
              Support That Drives{" "}
            </span>
            <span className="block">Revenue</span>
          </>
        }
        paragraphs={[
          "From load booking to paperwork and compliance, we handle everything so you can focus on driving and scaling your business.",
        ]}
        fields={formFields}
      />
    </main>
  );
}
