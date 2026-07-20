import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import FeatureIntroSection from "../components/FeatureIntroSection";
import DispatchTechnologyGridSection, {
  DispatchTechnologyCard,
} from "../components/DispatchTechnologyGridSection";
import HowWeWork from "../components/HowWeWork";
import SupportColumnsSection from "../components/SupportColumnsSection";
import BenefitsGridSection from "../components/BenefitsGridSection";
import VisionFormSection from "../components/VisionFormSection";
import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import FreightBenefitsSection, {
  FreightBenefit,
} from "@/app/components/FreightBenefitsSection";
import QuestionStats from "../components/QuestionStats";
import FAQs from "../components/FAQs";
import TechnologyOperationsSection from "../components/TechnologyOperationsSection";

export const metadata: Metadata = {
  title: "Box Truck | E-Truck Dispatching",
  description:
    "Learn about our box truck dispatch services and how we can help you secure better freight opportunities.",
};

const dispatchProcessCards: DispatchTechnologyCard[] = [
  {
    title: "Load Sourcing",
    iconSrc: "/Box Truck/images/14_rectangle_1537.webp",
    bullets: [
      "Load boards access",
      "Broker network connections",
      "Direct shipper contracts",
      "Dedicated lane opportunities",
      "High-demand freight selection",
    ],
  },
  {
    title: "Rate Negotiation",
    iconSrc: "/Box Truck/images/16_rectangle_1539.webp",
    bullets: [
      "Market rate data analysis",
      "Load urgency evaluation",
      "Lane demand assessment",
      "Broker rate comparison",
      "Accessorial charge negotiation",
    ],
  },
  {
    title: "Route Planning (Most Critical Step)",
    iconSrc: "/Box Truck/images/10_rectangle_1555.webp",
    bullets: [
      "Multi-stop delivery sequencing",
      "Deadhead mile reduction",
      "Pickup and delivery alignment",
      "Traffic and route optimization",
      "Time window management",
    ],
  },
  {
    title: "Paperwork & Payment Flow",
    iconSrc: "/Box Truck/images/9_rectangle_1553.webp",
    bullets: [
      "Bill of Lading (BOL) processing",
      "Delivery completion confirmation",
      "Proof of Delivery (POD) handling",
      "Invoice generation and submission",
      "Payment tracking and follow-up",
    ],
  },
];
const revenueCards = [
  {
    title: "Revenue Per Stop (RPS)",
    description:
      "Revenue per stop focuses on increasing total earnings within a single route by maximizing the number of delivery points. Instead of relying on one long-haul load, multi-stop routes allow carriers to generate higher cumulative revenue.",
  },
  {
    title: "Load Density Optimization",
    description:
      "Load density optimization ensures that every inch of available cargo space is used effectively. By selecting freight based on volume compatibility and stacking efficiency, dispatchers increase vehicle value on each trip.",
  },
  {
    title: "Deadhead Reduction Strategy",
    description:
      "Deadhead reduction focuses on eliminating empty miles that reduce profitability. Dispatchers strategically plan backhauls and align outbound and inbound routes to maintain continuous truck movement.",
  },
  {
    title: "Contract vs Spot Freight Strategy",
    description:
      "A balanced strategy between contract and spot freight ensures both revenue stability and flexibility. Spot freight provides higher rates during peak demand, while contract freight ensures consistent load availability.",
  },
];
const complianceCards = [
  {
    title: "Compliance & Operational Control System",
    intro:
      "Box truck operations must align with regulatory requirements set by FMCSA and USDOT.",
    sections: [
      {
        title: "Key Compliance Areas",
        items: [
          "CDL vs Non-CDL classification",
          "MC authority maintenance",
          "Cargo insurance requirements",
          "DOT inspections",
        ],
      },
      {
        title: "Failure in compliance leads to:",
        items: ["Load rejection", "Fines", "Operational shutdowns"],
      },
    ],
    footer:
      "Dispatchers ensure every load matches legal and operational limits.",
  },
  {
    title: "Real Problems Box Truck Operators Face",
    intro:
      "Most drivers don’t fail due to lack of loads—they fail due to bad decisions and poor planning.",
    sections: [
      {
        title: "Common Issues",
        items: [
          "Accepting low-paying loads",
          "Running empty miles between deliveries",
          "Poor route sequencing",
          "Payment delays from brokers",
        ],
      },
      {
        title: "Urban-Specific Challenges",
        items: [
          "Delivery time window penalties",
          "Parking restrictions",
          "Failed delivery attempts",
          "Liftgate requirements mismatch",
        ],
      },
    ],
    footer:
      "A dispatch system exists to solve these operational failures before they happen.",
  },
];
const reasons = [
  {
    title: "Load sourcing (FTL, LTL, last-mile)",
    iconSrc: "/Box Truck/images/7_rectangle_1549.webp",
    iconAlt: "Dispatch approval icon",
  },
  {
    title: "Rate negotiation using market data",
    iconSrc: "/Box Truck/images/8_rectangle_1551.webp",
    iconAlt: "Personal dispatcher icon",
  },
  {
    title: "Broker setup and paperwork handling",
    iconSrc: "/Box Truck/images/18_rectangle_1541.webp",
    iconAlt: "Broker network icon",
  },
  {
    title: "Route optimization for multi-stop deliveries",
    iconSrc: "/Box Truck/images/15_rectangle_1545.webp",
    iconAlt: "Route optimization icon",
  },
  {
    title: "Compliance monitoring and documentation",
    iconSrc: "/Box Truck/images/17_rectangle_1546.webp",
    iconAlt: "Pricing icon",
  },
  {
    title: "Invoicing, payment tracking, and factoring support",
    iconSrc: "/Box Truck/images/19_rectangle_1547.webp",
    iconAlt: "Support icon",
  },
];

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
const freightBenefits: FreightBenefit[] = [
  { text: "Faster load access through real-time freight monitoring" },
  { text: "Reduced deadhead miles with RPM-focused route planning" },
  { text: "Dedicated dispatch coordination and broker communication" },
  {
    text: "Improved revenue consistency with profitable freight opportunities",
  },
];

const faqs = [
  {
    question: "How do dispatchers choose the right loads for my truck?",
    answer:
      "Loads are filtered based on GVWR, cargo space, route feasibility, and profitability—not just availability.",
  },
  {
    question: "Can I reject loads offered by the dispatcher?",
    answer: "No forced dispatch; you approve every load.",
  },
  {
    question: "How are multi-stop deliveries planned?",
    answer:
      "Multi-stop deliveries are planned through route optimization, delivery sequencing, pickup and delivery alignment, traffic and route optimization, and time window management.",
  },
  {
    question: "Do dispatchers handle communication with brokers?",
    answer:
      "Yes. Dispatchers handle broker communication, broker setup, paperwork handling, and rate negotiation using market data.",
  },
  {
    question: "Is per-mile rate the best way to evaluate box truck loads?",
    answer:
      "No. Box truck loads are evaluated through stop density, route efficiency, daily gross optimization, revenue per stop, load density, and deadhead reduction—not just per-mile rates.",
  },
  {
    question: "How do dispatchers help increase earnings?",
    answer:
      "A structured dispatch system improves load quality, route efficiency, and time utilization. These factors compound into higher weekly gross, more consistent revenue, and lower operational stress.",
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
export default function BoxTruckPage() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Box Truck Dispatch Services
            <span className="block">
              Let’s Move Your Trucking Business Forward
            </span>
          </>
        }
        paragraphs={[
          "Box truck dispatch is not just about finding loads. It is a daily revenue system built on load selection, route sequencing, rate negotiation, and compliance control.",
          "A box truck operates in a completely different freight environment compared to semi-trucks. Urban delivery constraints, multi-stop routes, and time-sensitive freight require a dispatch strategy focused on stop density, route efficiency, and daily gross optimization—not just per-mile rates.",
        ]}
        backgroundImage="/Box Truck/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />
      <FeatureIntroSection
        heading="What Is a Box Truck Dispatch Service?"
        description="A box truck dispatch service manages load sourcing, rate negotiation, route planning, paperwork, and payment processing for straight truck carriers. Instead of drivers spending hours searching load boards and negotiating rates, dispatchers handle:"
        features={[
          "Load identification based on truck size and GVWR",
          "Broker communication and rate negotiation",
          "Route planning for multi-stop deliveries",
          "Documentation (BOL, POD, invoices)",
          "Payment tracking and factoring coordination",
        ]}
        image="/Conestoga Dispatch Service/images/46_rectangle_1557.webp"
        imageAlt="Blue Box Truck on the Road"
      />
        <HowWeWork
          heading={
            <>
              Box Truck Equipment System & 
              <br />
              Dispatch Decision Framework
            </>
          }
          image="/Box Truck/images/6_vector_5.webp"
          imageAlt="New image alt"
          steps={[
            {
              number: "1",
              title: "New Step One",
              description: "New step one description.",
            },
            {
              number: "2",
              title: "New Step Two",
              description: "New step two description.",
            },
            {
              number: "3",
              title: "New Step Three",
              description: "New step three description.",
            },
          ]}
        />
      <DispatchTechnologyGridSection
        heading={
          <>
            How Box Truck Dispatch
            <br />
            Actually Works
          </>
        }
        image="/Box Truck/images/11_rectangle_1565.webp"
        imageAlt="White box truck used for dispatching"
        cards={dispatchProcessCards}
      />

      <SupportColumnsSection
        heading="Box Truck Revenue Optimization System"
        intro="Real profitability in box truck dispatch is not just about finding high-paying loads. It comes from a structured system that maximizes revenue across every route, stop, and mile."
        image="/Box Truck/images/12_rectangle_1426.webp"
        cards={revenueCards}
      />
      <SupportColumnsSection
        contentPosition="right"
        heading="Compliance, Control & Operational Failures in Box Truck Dispatch Systems"
        intro=""
        image="/Box Truck/images/13_rectangle_1426.webp"
        cards={complianceCards}
      />

      <BenefitsGridSection
        heading={
          <>
            <span className="block">What Our Box</span>
            <span className="block">Truck Dispatch</span>
            <span className="block whitespace-nowrap">Service Includes</span>
          </>
        }
        description="We manage your entire dispatch process—from load sourcing to payment—ensuring efficiency, compliance, and consistent revenue."
        benefits={reasons}
      />

      <VisionFormSection
        heading={
          <>
            <span className="block whitespace-nowrap">
              Start Hauling With a
            </span>
            <span className="block whitespace-nowrap">Structured Dispatch</span>
            <span className="block">System</span>
          </>
        }
        paragraphs={[
          "Submit your details, get a dedicated dispatcher, and start running optimized, revenue-focused routes but not random loads. No contracts. No forced dispatch. Just controlled growth.",
        ]}
        fields={formFields}
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
            title: "Urban delivery",
            image: "/Conestoga Dispatch Service/images/25_rectangle_1626.webp",
          },
          {
            title: "Growing trucking companies",
            image: "/Box Truck/images/24_rectangle_1626.webp",
          },
        ]}
        heading="Why Carriers Choose Our Dispatch"
        benefits={[
          "No forced dispatch; you approve every load",
          "Dedicated dispatcher (no call center confusion)",
          "Revenue-focused planning, but not just load booking",
          "Transparent pricing with no hidden fees",
          "24/7 operational support",
        ]}
      />

      <TechnologyOperationsSection
        layout="wide"
        featureStyle="icon"
        featureColumns={3}
        heading={
          <>
            How Dispatch Increases Weekly <br />
            Earnings
          </>
        }
        paragraphs={["A Structured Dispatch System Improves:"]}
        featureGroups={[
          {
            features: [
              {
                title: "Load quality",
                iconSrc: "/Box Truck/images/7_rectangle_1549.webp",
                iconAlt: "Load quality icon",
              },
              {
                title: "Route efficiency",
                iconSrc: "/Box Truck/images/34_rectangle_1557.webp",
                iconAlt: "Route efficiency icon",
              },
              {
                title: "Time utilization",
                iconSrc: "/Box Truck/images/30_rectangle_1557.webp",
                iconAlt: "Time utilization icon",
              },
            ],
          },
          {
            title: "These Factors Compound Into:",
            features: [
              {
                title: "Higher weekly gross",
                iconSrc: "/Box Truck/images/33_rectangle_1557.webp",
                iconAlt: "Higher weekly gross icon",
              },
              {
                title: "More consistent revenue",
                iconSrc: "/Box Truck/images/35_rectangle_1557.webp",
                iconAlt: "Consistent revenue icon",
              },
              {
                title: "Lower operational stress",
                iconSrc: "/Box Truck/images/31_rectangle_1557.webp",
                iconAlt: "Lower operational stress icon",
              },
            ],
          },
        ]}
        image="/Box Truck/images/29_rectangle_1556.webp"
        imageAlt="White box truck showing dispatch earning improvement"
      />
      <FreightBenefitsSection
  heading={
    <>
      Getting Started (Simple <br />
      Process)
    </>
  }
  benefits={freightBenefits}
  defaultIconSrc="/Box Truck/images/25_tick_icon.webp"
  defaultIconAlt="Check icon"
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
