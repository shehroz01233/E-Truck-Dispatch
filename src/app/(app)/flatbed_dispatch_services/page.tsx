import BrokerNetworkSection from "../components/BrokerNetworkSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComplianceMatrixSection, { ComplianceCard } from "../components/ComplianceMatrixSection";
import FAQSection, { FAQItem } from "../components/FAQs";
import FeatureIntroSection from "../components/FeatureIntroSection";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import QuestionStats, { Stat } from "../components/QuestionStats";
import RevenuePanelSection, { RevenueGroup } from "../components/RevenuePanelSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";

const flatbedFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const flatbedDispatchChallenges: [string, string][] = [
  [
    "Cargo Securement, Tarping, And Weather Risks",
    "Cargo securement errors can result in violations or accidents if weight distribution and fastening methods are not properly validated. Tarping requirements add operational delays and require additional compensation negotiation. Weather exposure can impact delivery timelines and cargo condition.",
  ],
  [
    "Accessorial Losses And Deadhead Inefficiency",
    "Accessorial losses occur when detention, layover, or tarp pay is not properly negotiated or documented in the rate confirmation. Missing terms lead to unpaid time and reduced earnings. Deadhead miles further cut profitability when reload planning is not integrated into dispatch strategy.",
  ],
  [
    "System-Based Dispatch Optimization",
    "A structured dispatch system resolves these issues through load filtering, securement-aware selection, and route optimization before confirming any shipment. It ensures only profitable and compliant loads are selected. This approach reduces risks, improves efficiency, and increases overall revenue consistency.",
  ],
];

const flatbedComplianceGroups: RevenueGroup[] = [
  {
    title: "Securement & Load Protection",
    intro: [
      "We review every flatbed load against DOT cargo securement standards. From straps and chains to binders, edge protection, and load limits, each shipment is verified before dispatch.",
    ],
    footer:
      "For qualified freight, we confirm tarping requirements in advance to prevent damage and avoid costly delays.",
  },
  {
    title: "Oversize Load Compliance & Routing",
    intro: [
      "Flatbed freight often includes oversize, overweight, or permit-sensitive loads. Height, width, weight, and state routing limits are checked before booking.",
    ],
    footer:
      "This reduces violations and improves safe movement across regulated lanes.",
  },
  {
    title: "HOS & ELD Monitoring",
    intro: [
      "Your driver’s compliance is reviewed with FMCSA Hours of Service rules, ELD availability, and route timing before dispatch.",
    ],
    footer:
      "This keeps appointments realistic and reduces compliance exposure.",
  },
];

const flatbedPerformanceCards = [
  {
    title: "Revenue Optimization Through Smart Load Selection",
    description:
      "Higher revenue per mile is achieved through structured load selection and lane planning. Our dispatchers search loads around market rates, route efficiency, broker reliability, and reload coordination to reduce empty miles and increase profitability.",
  },
  {
    title: "Deadhead Reduction with Lane-Based Planning",
    description:
      "Deadhead miles are reduced through intelligent lane planning and reload coordination. Dispatchers match outbound and inbound freight options to improve loaded movement and reduce unnecessary empty miles.",
  },
  {
    title: "Accessorial Capture and Revenue Protection",
    description:
      "Accessorial pay such as detention, layover, and tarp pay is negotiated, tracked, and documented before dispatch. This protects carrier revenue and reduces unpaid operational work.",
  },
  {
    title: "Full Administrative and Compliance Management",
    description:
      "Administrative support includes broker communication, rate confirmations, paperwork handling, and compliance tracking. This keeps dispatch operations organized and reduces operational pressure.",
  },
];
const flatbedFinalFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const flatbedFinalFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const flatbedCarrierChoiceCards: ComplianceCard[] = [
  {
    title: "Dedicated Dispatcher Management",
    intro:
      "Each carrier is assigned a dedicated dispatcher who manages daily operations, ensuring consistent communication, load planning, and smooth execution. The dispatcher coordinates with brokers, schedules pickups and deliveries, and provides real-time updates to maintain efficiency and reduce operational delays.",
    items: [],
  },
  {
    title: "No Forced Dispatch Control",
    intro:
      "The no forced dispatch model gives you full control over your operations. Every load opportunity is presented for approval, allowing you to choose what fits your preferences, rates, and lanes. This ensures better decision-making, higher satisfaction, and complete operational flexibility.",
    items: [],
  },
  {
    title: "Transparent Pricing Structure",
    intro:
      "Pricing remains transparent at all times with a fixed percentage applied per load. There are no hidden charges or unexpected deductions, ensuring complete clarity in every transaction. This approach gives you full visibility into your earnings and helps maintain consistent financial planning and trust.",
    items: [],
  },
  {
    title: "Continuous Operational Support",
    intro:
      "Support continues beyond booking to ensure uninterrupted operations. Whether it’s a permit delay, broker cancellation, or a last-minute issue, our team responds immediately with quick solutions. This ensures minimal downtime, smooth coordination, and consistent load movement without disruptions.",
    items: [],
  },
];

const flatbedDispatchFaqs: FAQItem[] = [
  {
    question: "What is a flatbed dispatcher?",
    answer:
      "A dispatcher manages load sourcing, rate negotiation, permit coordination, and compliance documentation for open-deck freight operations.",
  },
  {
    question: "How are flatbed loads sourced?",
    answer:
      "Flatbed loads are sourced through load boards, broker networks, shipper relationships, and lane-based freight matching.",
  },
  {
    question: "What determines flatbed rates?",
    answer:
      "Flatbed rates depend on lane demand, load weight, tarp requirements, permits, deadhead miles, urgency, and broker payment reliability.",
  },
  {
    question: "Do flatbed loads require permits?",
    answer:
      "Some flatbed loads require permits when freight exceeds legal height, width, weight, or length limits. Permit needs are checked before dispatch.",
  },
  {
    question: "What is included in dispatch services?",
    answer:
      "Flatbed dispatch services include load sourcing, rate negotiation, broker communication, paperwork handling, route planning, and compliance support.",
  },
  {
    question: "Can carriers choose their loads?",
    answer:
      "Yes. Carriers review and approve loads before booking. No forced dispatch is used.",
  },
];

const flatbedQuestionStats: Stat[] = [
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

export default function FlatbedDispatchServices() {
  return (
        <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">   
     <HeroSection
  h1={
    <>
      Flatbed Dispatch Services For
      <br />
      Owner-Operators &amp; Small Fleets
    </>
  }
  fixedTitle="Flatbed Dispatch Services"
  typingTitles={[
    "for Owner-Operators",
    "for Small Trucking Fleets",
    "Built for Profitable Flatbed Loads",
    "Focused on Compliance and Revenue",
  ]}
  paragraphs={[
    "A structured flatbed dispatch system ensures that every load is matched, verified, and executed without compliance risk while maintaining profitability across each mile.",
    "Flatbed dispatch services provide carriers with complete operational control over load sourcing, rate negotiation, documentation handling, and regulatory alignment.",
  ]}
  backgroundImage="/Flatbed Dispatch Service/images/1_rectangle_1450.webp"
  backgroundAlt="Flatbed truck driving through mountains at sunset"
/>
      <FeatureIntroSection
        heading="What Flatbed Dispatch Services Include?"
        description="Flatbed dispatch services manage the full lifecycle of open-deck freight operations, including load sourcing, permit coordination, route planning, and compliance. E-Truck Dispatching offers flatbed dispatch service to independent owner-operators, small fleets, and carriers operating under their own MC authority who need a system to manage operational complexity without building an internal dispatch team."
        features={[]}
        image="/Flatbed Dispatch Service/images/4_rectangle_1557.webp"
        imageAlt="Flatbed truck reference views"
      />
      <HowWeWork
      blendBackgroundEdges
        heading={
          <>
            How Our Flatbed Dispatch
            <br />
            System Works?
          </>
        }
    backgroundImage="/background-earthquake.png"
        image="/Flatbed Dispatch Service/images/6_vector_5.webp"
        imageAlt="Dispatcher carrying packages for flatbed dispatch workflow"
        steps={[
          {
            number: "1",
            title: "Carrier Setup and Verification",
            description:
              "The process begins with MC authority validation, insurance confirmation, and W-9 documentation. Carrier packets are submitted to brokers to establish load eligibility.",
          },
          {
            number: "2",
            title: "Load Sourcing and Freight Matching",
            description:
              "Dispatchers identify loads using load boards and broker networks, filtering opportunities based on trailer type, cargo requirements, and preferred lanes. Freight selection is aligned with equipment capabilities such as flatbed, step deck, or double drop.",
          },
          {
            number: "3",
            title: "Rate Negotiation and Confirmation",
            description:
              "Rates are negotiated using market intelligence, with emphasis on securing compensation for tarp usage, detention time, layover, and cancellations. Rate confirmations are reviewed before approval to ensure accuracy and protection of carrier interests.",
          },
        ]}
      />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={[
          "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
        ]}
        fields={flatbedFormFields}
      />
<ComparisonCardsSection
  heading="What Flatbed Dispatch Challenges We Solve"
  description="Flatbed operations introduce risks that do not exist in enclosed freight."
  comparisons={flatbedDispatchChallenges}
  icons={[
    "/Flatbed Dispatch Service/images/9_rectangle_1545.webp",
    "/Flatbed Dispatch Service/images/10_rectangle_1539.webp",
    "/Flatbed Dispatch Service/images/11_rectangle_1541.webp",
  ]}
  iconAlts={[
    "Cargo securement icon",
    "Accessorial losses icon",
    "Dispatch optimization icon",
  ]}
/>
<RevenuePanelSection
  heading="Compliance and Safety in Flatbed Dispatch"
  description="At E Truck Dispatching, compliance is built into every load we move. Each dispatch decision is validated against DOT regulations, cargo requirements, and route-specific safety rules."
  groups={flatbedComplianceGroups}
  image="/Flatbed Dispatch Service/images/12_rectangle_1558.webp"
  backgroundImage="/Vector 3.svg"
/>
<BrokerNetworkSection
  heading="Back Office & Documentation Control"
  description={
    <>
      <p>
        At E Truck Dispatching, flatbed dispatch is not limited to load booking;
        it is a complete back-office system designed to keep your operations
        organized and cash flow consistent.
      </p>

      <p className="mt-4">
        We manage every document with precision. Rate confirmations, bills of
        lading (BOL), and proof of delivery (POD) are verified, tracked, and
        stored for seamless access. Invoice submission is handled without delays,
        while factoring coordination ensures faster payments without follow-ups
        from your side.
      </p>

      <p className="mt-4">
        Broker communication and appointment scheduling are executed in real
        time. Any issue, whether at pickup or delivery, is resolved directly,
        keeping drivers focused on the road instead of paperwork.
      </p>

      <p className="mt-4">
        When delays happen, we act immediately. Detention and layover claims are
        identified, documented, and processed so every minute of lost time is
        converted into recovered revenue.
      </p>
    </>
  }
  image="/Flatbed Dispatch Service/images/13_rectangle_1556.webp"
  imageAlt="Flatbed truck with driver during documentation and dispatch support"
  features={[]}
/>
<SupportColumnsSection
  heading="Performance Benefits of Our Flatbed Dispatch System"
  intro="System-driven flatbed dispatching is the foundation of improved revenue and efficiency at the same time."
  image="/Flatbed Dispatch Service/images/15_rectangle_1426.webp"
  imageAlt="Dispatcher reviewing flatbed dispatch performance documents"
  cards={flatbedPerformanceCards}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={flatbedFinalFormParagraphs}
  fields={flatbedFinalFormFields}
  
/>
<ComplianceMatrixSection
  heading="Why Carriers Choose E Truck Dispatching"
  description="Working with E Truck Dispatching means operating with a system, not just a dispatcher."
  cards={flatbedCarrierChoiceCards}
  image="/Flatbed Dispatch Service/images/15_rectangle_1426.webp"
  imageAlt="Dispatch team managing carrier operations"
/>
<FAQSection
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Flatbed Dispatch Service/images/22_rectangle_1441.webp"
  imageAlt="Dispatcher answering flatbed dispatch questions"
  faqs={flatbedDispatchFaqs}
/>
<QuestionStats
  heading="Still Have Questions?"
  description="Our billing experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={flatbedQuestionStats}
/>


</main>
  );
}
