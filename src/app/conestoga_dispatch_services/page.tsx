import type { Metadata } from "next";
import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import FeatureIntroSection from "../components/FeatureIntroSection";
import RevenuePanelSection, { RevenueGroup } from "../components/RevenuePanelSection";
import SpecificationsFormSection from "../components/SpecificationsFormSection";
import HeroSection from "../components/HeroSection";
import ProcessGridSection from "../components/ProcessGridSection";
import VisionFormSection from "../components/VisionFormSection";
import FAQs from "../components/FAQs";
import QuestionStats from "../components/QuestionStats";
import DispatchTechnologyGridSection, {
  DispatchTechnologyCard,
} from "../components/DispatchTechnologyGridSection";
import BenefitsGridSection from "../components/BenefitsGridSection";

export const metadata: Metadata = {
  title: "Conestoga Dispatch Services | E-Truck Dispatching",
  description:
    "Specialized Conestoga trailer dispatch, load sourcing, rate negotiation, routing, compliance, and paperwork support.",
};

const revenueGroups: RevenueGroup[] = [
  {
    title: "Revenue Drivers",
    intro: [],
    items: [
      "Access to premium freight",
      "Higher RPM due to limited equipment competition",
      "Reduced deadhead through lane planning",
      "Accessorial revenue from detention, layover, and tarp pay",
    ],
  },
  {
    title: "Cost Reduction",
    intro: [],
    items: [
      "No manual tarping labor",
      "Lower cargo damage claims",
      "Faster loading → more weekly loads",
    ],
  },
  {
    title: "Operational Efficiency",
    intro: [],
    items: [
      "Multi-access loading reduces downtime",
      "Better route planning avoids violations",
      "Faster loading and unloading improves turnaround time",
    ],
  },
];
const comparisons : [string, string][] = [
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
const conestogaDispatchSystem = [
  [
    "Equipment & Lane Profiling",
    {
      intro: "We map:",
      bullets: [
        "Trailer type",
        "Preferred lanes",
        "Rate floor",
        "Cargo preferences",
      ],
    },
  ],
  [
    "Load Sourcing with Equipment Filters",
    {
      intro: "Loads are sourced using:",
      bullets: [
        "Load boards",
        "Broker networks",
        "Direct shipper lanes",
      ],
    },
  ],
  [
    "Rate Negotiation (Not Passive Booking)",
    {
      intro: "Rates are negotiated using:",
      bullets: [
        "Lane demand data",
        "Broker behavior patterns",
        "Equipment scarcity (Conestoga advantage)",
      ],
    },
  ],
  [
    "Routing + Compliance Check",
    {
      intro: "Before booking:",
      bullets: [
        "Height clearance verified",
        "Bridge restrictions checked",
        "Permit requirements validated",
      ],
    },
  ],
  [
    "Execution + Back-Office Handling",
    {
      intro: "You drive. We handle:",
      bullets: [
        "Rate confirmations",
        "BOL / POD",
        "Invoicing",
        "Factoring",
      ],
    },
  ],
] satisfies [string, { intro: string; bullets: string[] }][];




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
const faqs = [
  {
    question: "What is truck dispatching?",
    answer:
      "A service that manages load booking, rate negotiation, broker communication, and operational paperwork so carriers can focus on driving and revenue generation.",
  },
  {
    question: "How do dispatch services improve earnings?",
    answer:
      "Dispatchers search better lanes, negotiate rates, reduce empty miles, and help carriers avoid weak-paying loads.",
  },
  {
    question: "Do I have to accept every load presented?",
    answer:
      "No. You stay in control. Your dispatcher presents loads that match your rate, lane, and schedule preferences.",
  },
  {
    question: "How fast do payments come through?",
    answer:
      "Payment speed depends on the broker, factoring setup, paperwork accuracy, and payment terms on the rate confirmation.",
  },
  {
    question: "Is there a contract or upfront fee?",
    answer:
      "No upfront fee is required. Dispatch fees apply after broker payment is received.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most carriers can start after onboarding, document review, carrier packet setup, and lane preference confirmation.",
  },
];

const questionStats = [
  {
    value: "300+",
    title: "Active Trucks",
    text: "Trucks we dispatch",
  },
  {
    value: "60+",
    title: "Team Members",
    text: "Experienced dispatchers",
  },
  {
    value: "150+",
    title: "MC Clients",
    text: "Actively working with us.",
  },
];

const dispatchTechnologyCards: DispatchTechnologyCard[] = [
  {
    title: "No Forced Dispatch",
    iconSrc: "/Power Only Dispatching/icons/no-forced-dispatch.svg",
    description:
      "Drivers maintain full authority over load approval decisions. Freight options are presented according to preferred lanes, operational goals, and profitability expectations instead of forced booking pressure.",
  },
  {
    title: "Verified Broker Network",
    iconSrc: "/Power Only Dispatching/icons/broker-network.svg",
    description:
      "Freight fraud and double brokering continue to create financial risks across the transportation industry. Our dispatch team performs broker screening and credit analysis before freight booking.",
  },
  {
    title: "24/7 Dispatch Communication",
    iconSrc: "/Power Only Dispatching/icons/dispatch-communication.svg",
    description:
      "Freight operations continue beyond standard business hours. Our dispatch support remains active to assist with broker communication, appointment updates, freight tracking, and operational adjustments.",
  },
  {
    title: "Back-Office Assistance",
    iconSrc: "/Power Only Dispatching/icons/back-office.svg",
    description:
      "Dispatching involves more than booking freight. Administrative coordination supports operational consistency through rate confirmations, BOL handling, invoicing coordination, detention documentation, and factoring communication.",
  },
];

const reasons = [
  {
    title: "High-paying load sourcing aligned with trailer specs",
    iconSrc: "/Conestoga Dispatch Service/images/16_rectangle_1537.webp",
    iconAlt: "Dispatch approval icon",
  },
  {
    title: "Aggressive rate negotiation based on lane intelligence",
    iconSrc: "/Conestoga Dispatch Service/images/18_rectangle_1539.webp",
    iconAlt: "Personal dispatcher icon",
  },
  {
    title: "Route planning with clearance validation",
    iconSrc: "/Conestoga Dispatch Service/images/20_rectangle_1541.webp",
    iconAlt: "Broker network icon",
  },
  {
    title: "Permit and compliance coordination",
    iconSrc: "/Conestoga Dispatch Service/images/17_rectangle_1545.webp",
    iconAlt: "Route optimization icon",
  },
  {
    title: "Full paperwork lifecycle (Rate Con → POD → Invoice)",
    iconSrc: "/Conestoga Dispatch Service/images/19_rectangle_1546.webp",
    iconAlt: "Pricing icon",
  },
  {
    title: "Detention, TONU, and accessorial recovery",
    iconSrc: "/Conestoga Dispatch Service/images/21_rectangle_1547.webp",
    iconAlt: "Support icon",
  },
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
        <ProcessGridSection
        heading="How Our Conestoga Dispatch System Works"
        steps={conestogaDispatchSystem}
      />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />

      <DispatchTechnologyGridSection
        heading={
          <>
            Technology Used in Modern
            <br />
            Power Only Dispatching
          </>
        }
        image="/Conestoga Dispatch Service/images/10_rectangle_1565.webp"
        imageAlt="Modern semi-truck used for power-only dispatching"
        cards={dispatchTechnologyCards}
      />

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
         icons={[
    "/load booking/images/4_rectangle_1545.webp",
    "/load booking/images/5_rectangle_1539.webp",
    "/load booking/images/6_rectangle_1541.webp",
  ]}
  />
      
      <ComplianceMatrixSection
        heading="Compliance System Behind Every Load"
        description="Every load moves through a structured compliance system aligned with federal regulations and operational safety standards. This ensures every shipment is legally compliant, audit-ready, and risk-controlled before dispatch."
        cards={complianceCards}
        image="/Conestoga Dispatch Service/images/15_rectangle_1560.webp"
      />
      <BenefitsGridSection
  heading={
    <>
      <span className="block">What Our</span>
      <span className="block">Conestoga</span>
      <span className="block">Dispatch</span>
      <span className="block whitespace-nowrap">Service Includes</span>
    </>
  }
  description="Instead of listing features, here’s what actually gets executed daily."
  benefits={reasons}
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
      <VisionFormSection
        heading="Getting Started"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      <FAQs
        heading="Frequently Asked Questions"
        description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
        image="/Conestoga Dispatch Service/images/33_rectangle_1441.webp"
        imageAlt="Dispatcher answering questions in warehouse"
        faqs={faqs}
      />
      <QuestionStats
        heading="Still Have Questions?"
        description="Our billing experts are here to help. Get in touch for a free consultation."
        buttonText="Talk to an Expert"
        buttonHref="/contact"
        stats={questionStats}
      />
    </main>
  );
}
