import { Metadata } from "next";
import BenefitsGridSection from "../components/BenefitsGridSection";
import EquipmentShowcaseSection from "../components/EquipmentShowcaseSection";
import HeroSection from "../components/HeroSection";
import MissionBanner from "../components/MissionBanner";
import OverviewStatsSection from "../components/OverviewStatsSection";
import ProcessGridSection from "../components/ProcessGridSection";
import ServicesGridSection from "../components/ServicesGridSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";


export const metadata: Metadata = {
  title: "About Us | E-Truck Dispatching",
  description:
    "Learn how E-Truck Dispatching helps owner-operators and fleets improve freight operations and profitability.",
};

const overviewParagraphs = [
  "E-Truck Dispatching is a US-based truck dispatch company focused on supporting independent owner-operators, small fleets, and growing carriers. We combine freight market analysis, broker relationship management, and real-time dispatch coordination to help carriers secure profitable loads and maintain operational consistency.",
  "Our team understands the daily operational challenges trucking businesses face and we built our dispatch system to solve these operational gaps through dedicated carrier support and market-driven dispatch strategies.",
];
const stats = [
  ["500+", "Active Carriers"],
  ["24/7", "Support Available"],
  ["98%", "Client Satisfaction"],
];
const challenges = [
  "Empty miles reducing profitability",
  "Low-paying freight",
  "Unreliable brokers",
  "Delayed paperwork",
  "Poor route planning",
  "Compliance pressure",
  "Unstable freight availability",
];
const services = [
  [
    "Load Sourcing",
    "We identify profitable freight opportunities across all major lanes",
  ],
  [
    "Broker Communication",
    "Direct communication with trusted brokers and shippers",
  ],
  ["Rate Negotiation", "Expert negotiation to maximize your revenue per mile"],
  [
    "Route Coordination",
    "Strategic planning to reduce deadhead and improve efficiency",
  ],
  ["Documentation", "Complete paperwork handling from BOL to POD"],
  ["24/7 Support", "Round-the-clock operational support for your fleet"],
];
const dispatcherTasks = [
  "Load sourcing",
  "Broker communication",
  "Rate negotiation",
  "Route coordination",
  "Freight scheduling",
  "Appointment management",
  "Broker packet setup",
  "Rate confirmations",
  "BOL and POD handling",
  "Detention and layover support",
];
const equipment = [
  "Dry Van",
  "Hotshot",
  "Flatbed",
  "Power Only",
  "Step Deck",
  "Box Truck",
  "Reefer",
  "Conestoga",
];
const equipmentImages = [
  "10_rectangle_1515.webp",
  "11_rectangle_1515.webp",
  "12_rectangle_1515.webp",
  "13_rectangle_1515.webp",
  "14_rectangle_1515.webp",
  "7_rectangle_1515.webp",
  "8_rectangle_1515.webp",
  "9_rectangle_1515.webp",
].map((file) => `/About US/images/${file}`);
const equipmentDescriptions = [
  "Our dry van dispatch service connects owner-operators with consistent, high-paying freight across all 48 states.",
  "Our hotshot dispatch service secures high-paying, time-sensitive loads for CDL and non-CDL carriers.",
  "Our flatbed dispatch service secures premium freight for carriers handling oversized, heavy, and construction loads.",
  "Our power-only dispatch service connects carriers with shipper-provided trailers, eliminating trailer ownership costs.",
  "Our step deck dispatch service focuses on over-height, overweight, and specialized freight that standard trailers cannot handle.",
  "Our box truck dispatch service books high-paying loads for 26ft+ carriers across last-mile, LTL, and regional freight networks.",
  "Our reefer dispatch service connects carriers with high-value, temperature-controlled freight requiring strict scheduling.",
  "Our Conestoga dispatch service matches carriers with weather-sensitive and high-value freight requiring curtain-side protection.",
];
// const process = [
//   ["Carrier Onboarding", "The onboarding process begins with collecting and verifying carrier documents such as MC authority, W-9 forms, insurance certificates, and driver information to ensure compliance and operational readiness before dispatch operations begin."],
//   ["Dedicated Dispatcher Assignment", "Each carrier is assigned a dedicated dispatcher based on equipment type, preferred freight lanes, operational goals, hauling preferences, and scheduling requirements."],
//   ["Load Planning and Negotiation", "We identify profitable freight opportunities, analyze market conditions, review lane demand, and negotiate rates directly with brokers and shippers."],
//   ["Route and Reload Optimization", "Dispatch routes and reload schedules are strategically planned to reduce deadhead miles, improve trailer utilization, and maintain continuous freight movement."],
//   ["Documentation and Support", "Our team manages paperwork coordination, broker communication, invoicing support, POD handling, factoring paperwork, and ongoing dispatch assistance."],
// ];
const dispatchProcess = [
  [
    "Carrier Onboarding",
    "The onboarding process begins with collecting and verifying carrier documents such as MC authority, W-9 forms, insurance certificates, and driver information to ensure compliance and operational readiness before dispatch operations begin.",
  ],
  [
    "Dedicated Dispatcher Assignment",
    "Each carrier is assigned a dedicated dispatcher based on equipment type, preferred freight lanes, operational goals, hauling preferences, and scheduling requirements to improve communication, load consistency, and overall dispatch efficiency across daily operations.",
  ],
  [
    "Load Planning and Negotiation",
    "We identify profitable freight opportunities, analyze market conditions, review lane demand, and negotiate rates directly with brokers and shippers to improve revenue potential, freight quality, and overall operational profitability for carriers.",
  ],
  [
    "Route and Reload Optimization",
    "Dispatch routes and reload schedules are strategically planned to reduce deadhead miles, improve trailer utilization, maintain continuous freight movement, and support consistent reload opportunities across active regional and long-haul freight lanes.",
  ],
  [
    "Documentation and Support",
    "Our team manages paperwork coordination, broker communication, invoicing support, POD handling, factoring paperwork, and ongoing dispatch assistance throughout the entire load cycle to reduce administrative workload for carriers.",
  ],
] satisfies [string, string][];

const reasons = [
  {
    title: "No Forced Dispatch: You approve every load.",
    iconSrc: "/About US/images/15_rectangle_1537.webp",
    iconAlt: "Dispatch approval icon",
  },
  {
    title: "Dedicated Personal Dispatcher: One dispatcher manages operations.",
    iconSrc: "/About US/images/17_rectangle_1539.webp",
    iconAlt: "Personal dispatcher icon",
  },
  {
    title: "Strong Broker Network: Access to verified freight brokers.",
    iconSrc: "/About US/images/19_rectangle_1541.webp",
    iconAlt: "Broker network icon",
  },
  {
    title: "Route Optimization: Reduced empty miles and fuel costs.",
    iconSrc: "/About US/images/16_rectangle_1545.webp",
    iconAlt: "Route optimization icon",
  },
  {
    title: "Transparent Pricing: No hidden dispatch fees.",
    iconSrc: "/About US/images/18_rectangle_1546.webp",
    iconAlt: "Pricing icon",
  },
  {
    title:
      "24/7 Operational Support: Continuous dispatch assistance available.",
    iconSrc: "/About US/images/20_rectangle_1547.webp",
    iconAlt: "Support icon",
  },
];

// const industries = ["Retail Distribution", "Food and Beverage", "Automotive Freight", "Construction Materials", "Manufacturing Equipment", "Medical Supplies", "Agricultural Freight", "Industrial Machinery", "Temperature-Controlled Freight"];
// const compliance = ["FMCSA-aware dispatch coordination", "Appointment scheduling management", "Driver communication support", "Route planning assistance", "Documentation accuracy", "Detention tracking", "Load requirement verification"];
const visionParagraphs = [
  "We aim to become a trusted nationwide dispatching partner known for operational transparency, consistent freight support, and carrier-focused dispatch solutions.",
  "Our long-term goal is to help independent carriers and small fleets scale sustainably without sacrificing operational control.",
];
const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];
const industries = [
  "Retail Distribution",
  "Food and Beverage",
  "Automotive Freight",
  "Construction Materials",
  "Manufacturing Equipment",
  "Medical Supplies",
  "Agricultural Freight",
  "Industrial Machinery",
  "Temperature-Controlled Freight",
];

const compliance = [
  "FMCSA-aware dispatch coordination",
  "Appointment scheduling management",
  "Driver communication support",
  "Route planning assistance",
  "Documentation accuracy",
  "Detention tracking",
  "Load requirement verification",
];

const supportCards = [
  {
    title: "Industries We Support",
    intro: "We help carriers move freight across multiple industries:",
    items: industries,
    footer:
      "We support freight movement across retail, food and beverage, automotive, construction, manufacturing, medical, agricultural, industrial, and temperature-controlled transportation operations.",
  },
  {
    title: "Compliance and Operational Support",
    intro: "Our dispatch operations support carrier compliance through:",
    items: compliance,
    footer:
      "We provide dispatch coordination, scheduling management, route planning, driver communication, documentation support, detention tracking, and load verification to improve operational accuracy and freight efficiency.",
  },
];
export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
  h1={
    <>
      Reliable Truck Dispatching Built Around Carrier Profitability
    </>
  }
  fixedTitle="Reliable Truck Dispatching"
  typingTitles={[
    "Built Around Carrier Profitability",
    "Focused on Better Rates and Higher RPM",
    "Designed for Owner-Operators and Fleets",
    "Built to Reduce Deadhead Miles",
  ]}
  paragraphs={[
    "At E-Truck Dispatching, we help owner-operators and trucking fleets move freight with better rates, lower deadhead miles, and stronger operational support. Our dispatch system is built for carriers that want consistent freight opportunities without dealing with the daily pressure of load searching, broker communication, paperwork handling, and route planning.",
    "We operate as a dedicated dispatching partner focused on maximizing RPM, improving route efficiency, and reducing operational downtime for carriers across the United States.",
    "Our dispatch team works with dry vans, reefers, flatbeds, step decks, power only units, box trucks, hotshots, and specialized freight operations.",
  ]}
  backgroundImage="/About US/images/1_rectangle_1450.webp"
  backgroundAlt="Truck traveling on the highway"
/>
      <OverviewStatsSection
        heading="Who We Are"
        paragraphs={overviewParagraphs}
        stats={stats}
        asideHeading="Operational Challenges We Solve"
        challenges={challenges}
        gallery={[
          {
            src: "/About US/images/4_container.webp",
            alt: "Dispatch coordination",
          },
          { src: "/About US/images/5_container.webp", alt: "Freight planning" },
          { src: "/About US/images/6_container.webp", alt: "Carrier support" },
        ]}
      />
      <MissionBanner heading="Our Mission">
        Our mission is to help trucking carriers increase profitability through
        intelligent dispatch planning, reliable freight sourcing, operational
        transparency, and efficient load coordination. We focus on building
        long-term partnerships where carriers maintain full control over their
        business while we manage the backend dispatch workload, broker
        communication, scheduling, paperwork handling, and daily freight
        operations.
      </MissionBanner>
      
      <ServicesGridSection
        heading="What We Do"
        eyebrow="Dedicated Truck Dispatch Services"
        services={services}
        tasks={dispatcherTasks}
      />
      <EquipmentShowcaseSection
        heading="Freight Equipment We Dispatch"
        names={equipment}
        images={equipmentImages}
        descriptions={equipmentDescriptions}
        imageHeights={[200, 200, 200, 231, 200, 239, 241, 200]}
        columns={[
          [0, 1],
          [2, 3],
          [4, 5],
          [6, 7],
        ]}
      />
      <ProcessGridSection
        heading="Our Dispatching Process"
        steps={dispatchProcess}
      />
      <BenefitsGridSection
        heading="Why Carriers Choose E-Truck Dispatching"
        benefits={reasons}
      />
      {/* <SupportColumnsSection
  heading="Freight Load Sourcing and Market Coordination"
  intro="Freight load sourcing requires market analysis, broker coordination, reload planning, and operational evaluation before freight booking decisions are made."
  image="/About US/images/your-image.webp"
  cards={[
    {
      title: "Freight Market Analysis",
      items: [
        "Freight quality evaluation",
        "Lane profitability analysis",
        "Reload availability checks",
        "Regional demand tracking",
        "Freight density analysis",
        "Seasonal trend monitoring",
      ],
    },
    {
      title: "Load Board and Freight Platforms",
      items: [
        "DAT load coordination",
        "Truckstop.com monitoring",
        "Live freight tracking",
        "Nationwide load sourcing",
        "Regional freight access",
        "Broker freight visibility",
      ],
    },
    {
      title: "Broker and Lane Coordination",
      items: [
        "Broker relationship management",
        "Rate negotiation support",
        "Dedicated lane planning",
        "Delivery schedule coordination",
        "Reload sequencing",
        "Freight continuity planning",
      ],
    },
    {
      title: "Equipment-Specific Dispatch Planning",
      items: [
        "Dry van freight planning",
        "Reefer appointment coordination",
        "Flatbed route planning",
        "Oversized freight support",
        "Trailer-specific dispatching",
        "Operational workflow adaptation",
      ],
    },
  ]}
/>     */}
      <SupportColumnsSection
        heading="Industries, Compliance, and Operational Support"
        intro="We support multiple freight industries with dispatch coordination, compliance guidance, operational planning, and continuous support to improve efficiency, safety, and load consistency."
        image="/About US/images/21_rectangle_1426.webp"
        cards={supportCards}
      />
      ;
      <VisionFormSection
        heading="Our Vision"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
    </main>
  );
}
