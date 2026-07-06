import type { Metadata } from "next";
import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import CategoryMatrixSection from "../components/CategoryMatrixSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import FeatureIntroSection from "../components/FeatureIntroSection";
import RevenuePanelSection from "../components/RevenuePanelSection";
import SpecificationsFormSection from "../components/SpecificationsFormSection";
import HeroSection from "../components/HeroSection";
import ProcessGridSection from "../components/ProcessGridSection";
import VisionFormSection from "../components/VisionFormSection";

export const metadata: Metadata = {
  title: "Conestoga Dispatch Services | E-Truck Dispatching",
  description:
    "Specialized Conestoga trailer dispatch, load sourcing, rate negotiation, routing, compliance, and paperwork support.",
};

const freightGroups: [string, string[]][] = [
  [
    "Industrial & Construction Freight",
    [
      "Steel beams",
      "Lumber",
      "Concrete materials",
      "Machinery",
      "Construction equipment",
    ],
  ],
  [
    "Precision & Sensitive Equipment",
    [
      "CNC machines",
      "Industrial electronics",
      "Healthcare equipment",
      "Laboratory instruments",
      "Measurement and calibration devices",
    ],
  ],
  [
    "Oversized & Irregular Loads",
    [
      "Equipment exceeding dry van dimensions",
      "Crane-loaded cargo",
      "Job-site deliveries",
      "Wide and over-height freight",
    ],
  ],
  [
    "Automotive & Specialty Cargo",
    [
      "Vehicle parts",
      "ATVs, boats",
      "Metal products",
      "Heavy-duty tires",
      "Engine and transmission units",
    ],
  ],
];
const revenueGroups: [string, string[]][] = [
  [
    "Revenue Drivers",
    [
      "Access to premium freight",
      "Higher RPM due to limited equipment competition",
      "Reduced deadhead through lane planning",
      "Accessorial revenue from detention, layover, and tarp pay",
    ],
  ],
  [
    "Cost Reduction",
    [
      "No manual tarping labor",
      "Lower cargo damage claims",
      "Faster loading → more weekly loads",
    ],
  ],
  [
    "Operational Efficiency",
    [
      "Multi-access loading reduces downtime",
      "Better route planning avoids violations",
      "Faster loading and unloading improves turnaround time",
    ],
  ],
];
const comparisons = [
  [
    "Conestoga vs Flatbed",
    "Flatbeds handle heavy freight but expose cargo to weather and require manual tarping. Conestoga adds protection without losing flexibility.",
  ],
  [
    "Conestoga vs Dry Van",
    "Dry vans protect cargo but restrict loading access. Conestoga allows oversized freight with similar protection.",
  ],
  [
    "When NOT to Use Conestoga",
    "Palletized dock freight → use dry van|Extreme height loads → use double drop|Last-mile urban deliveries → use box truck|Temperature-sensitive freight → use reefer",
  ],
];
const complianceCards: [string, string[]][] = [
  [
    "Regulatory & Safety Alignment",
    [
      "FMCSA operational regulations",
      "OSHA safety requirements",
      "DOT weight and dimension limits",
      "State-specific transport rules",
      "Oversize and overweight permits",
    ],
  ],
  [
    "What We Handle",
    [
      "Cargo securement verification",
      "Documentation accuracy and validation",
      "IFTA mileage and fuel tracking",
    ],
  ],
  [
    "Risk Prevention & Protection",
    [
      "Eliminates roadside violations",
      "Reduces load rejections",
      "Protects against insurance risks",
      "Ensures audit-ready documentation",
    ],
  ],
  [
    "Real-Time Compliance Monitoring",
    [
      "Live status tracking during transit",
      "Instant issue detection and alerts",
      "Ongoing documentation checks",
      "Proactive resolution before violations occur",
    ],
  ],
];
const process = [
  [
    "Carrier Onboarding",
    "The onboarding process begins with collecting and verifying carrier documents such as MC authority, W-9 forms, insurance certificates, and driver information to ensure compliance and operational readiness before dispatch operations begin.",
  ],
  [
    "Dedicated Dispatcher Assignment",
    "Each carrier is assigned a dedicated dispatcher based on equipment type, preferred freight lanes, operational goals, hauling preferences, and scheduling requirements.",
  ],
  [
    "Load Planning and Negotiation",
    "We identify profitable freight opportunities, analyze market conditions, review lane demand, and negotiate rates directly with brokers and shippers.",
  ],
  [
    "Route and Reload Optimization",
    "Dispatch routes and reload schedules are strategically planned to reduce deadhead miles, improve trailer utilization, and maintain continuous freight movement.",
  ],
  [
    "Documentation and Support",
    "Our team manages paperwork coordination, broker communication, invoicing support, POD handling, factoring paperwork, and ongoing dispatch assistance.",
  ],
];
const visionParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];
const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];
export default function ConestogaDispatchServicesPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>Conestoga Dispatch Services</>}
        paragraphs={[
          "Conestoga freight does not operate like standard trucking. It sits between flatbed flexibility and dry van protection, requiring a dispatch system that understands equipment limitations, cargo sensitivity, and rate behavior at the lane level.",
          "Our Conestoga dispatch service is designed to handle that complexity—so you don’t waste time chasing loads that don’t match your trailer or leave money on the table due to poor negotiation.",
        ]}
        backgroundImage="/Conestoga Dispatch Service/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />
      <FeatureIntroSection
        heading="What Is Conestoga Dispatch Service?"
        description="Conestoga dispatch is a specialized freight coordination system for carriers operating curtain-side trailers. It includes load sourcing, rate negotiation, routing, compliance handling, and paperwork execution tailored specifically to rolling tarp equipment."
        features={[
          "Trailer configuration (flatbed, step deck, double drop)",
          "Cargo height and access requirements",
          "Weather-sensitive freight compatibility",
          "Crane/forklift loading conditions",
        ]}
        image="/Conestoga Dispatch Service/images/46_rectangle_1557.webp"
        imageAlt="Blue Conestoga trailer"
      />
      <SpecificationsFormSection
        heading="Understanding Conestoga Trailers"
        description="A Conestoga trailer is a flatbed fitted with a rolling tarp system that slides along tracks, allowing full access from the side, top, and rear while protecting cargo during transit."
        backgroundImage="/Conestoga Dispatch Service/images/4_rectangle_1600.webp"
        specifications={[
          ["48–53 ft", "Length (up to 60 ft extended)"],
          ["8.5 ft", "Width"],
          ["44,000–45,000 lbs", "Capacity"],
          ["8 ft", "Max Cargo Height"],
        ]}
        trailerTypes={[
          ["Flatbed Conestoga", "Standard machinery, construction freight"],
          [
            "Step Deck Conestoga",
            "Taller cargo requiring lower deck clearance",
          ],
          ["Double Drop Conestoga", "Extreme height loads with well section"],
        ]}
      />
      <ProcessGridSection heading="Our Dispatching Process" steps={process} />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />

      <CategoryMatrixSection groups={freightGroups} />
      <RevenuePanelSection
  heading="Why Conestoga Dispatch Increases Revenue (Not Just Convenience)"
  description="This is where most pages stay shallow. The real value comes from operational advantages translated into money."
  groups={revenueGroups}
  image="/Conestoga Dispatch Service/images/11_rectangle_1558.webp"
  backgroundImage="/Vector 3.svg"
/>
      <ComparisonCardsSection
        heading="Conestoga vs Other Trailer Dispatch"
        comparisons={comparisons}
      />
      <ComplianceMatrixSection
        heading="Compliance System Behind Every Load"
        description="Every load moves through a structured compliance system aligned with federal regulations and operational safety standards. This ensures every shipment is legally compliant, audit-ready, and risk-controlled before dispatch."
        cards={complianceCards}
        image="/Conestoga Dispatch Service/images/33_rectangle_1441.webp"
      />
      <AudienceBenefitsSection
        audiences={[
          {
            title: "Owner operators",
            image: "/Conestoga Dispatch Service/images/22_rectangle_1623.webp",
          },
          {
            title: "Small trucking fleets",
            image: "/Conestoga Dispatch Service/images/23_rectangle_1624.webp",
          },
          {
            title: "Specialized Carriers",
            image: "/Conestoga Dispatch Service/images/24_rectangle_1625.webp",
          },
          {
            title: "Urban Operators",
            image: "/Conestoga Dispatch Service/images/25_rectangle_1626.webp",
          },
        ]}
        heading="Why Carriers Choose Our Dispatch"
        benefits={[
          "No forced dispatch — full control stays with you",
          "Dedicated dispatcher — not a rotating call center",
          "Transparent pricing — no hidden deductions",
          "Real-time load tracking and support",
          "Lane-based strategy — not random load booking",
        ]}
      />
    </main>
  );
}
