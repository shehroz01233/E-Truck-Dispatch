import HeroSection from "@/app/components/HeroSection";
import BenefitsGridSection from "@/app/components/BenefitsGridSection";
import ComparisonTableSection, {
  type ComparisonColumn,
  type ComparisonRow,
} from "@/app/components/ComparisonTableSection";
import ProcessGridSection from "@/app/components/ProcessGridSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import HowWeWork from "@/app/components/HowWeWork";
import TechnologyOperationsSection, {
  type TechnologyFeatureGroup,
} from "@/app/components/TechnologyOperationsSection";
import AudienceBenefitsSection from "@/app/components/AudienceBenefitsSection";
import FAQSection, { type FAQItem } from "@/app/components/FAQs";
import LeaseOnRevealSection from "@/app/components/LeaseOnRevealSection";
import QuestionStats, { type Stat } from "@/app/components/QuestionStats";


const leaseOnSupportBenefits = [
  {
    title: "Lease-On Trucking Companies",
    iconSrc: "/Lease On Companies/images/4_rectangle_1537.webp",
    iconAlt: "Lease-on trucking companies icon",
  },
  {
    title: "Independent Owner Operators",
    iconSrc: "/Lease On Companies/images/6_rectangle_1539.webp",
    iconAlt: "Independent owner operators icon",
  },
  {
    title: "Small Trucking Fleets",
    iconSrc: "/Lease On Companies/images/8_rectangle_1541.webp",
    iconAlt: "Small trucking fleets icon",
  },
  {
    title: "New MC Authorities",
    iconSrc: "/Lease On Companies/images/5_rectangle_1545.webp",
    iconAlt: "New MC authorities icon",
  },
  {
    title: "Company Drivers Transitioning Into Owner Operators",
    iconSrc: "/Lease On Companies/images/7_rectangle_1546.webp",
    iconAlt: "Company drivers transitioning into owner operators icon",
  },
  {
    title: "Lease Purchase Trucking Operators",
    iconSrc: "/Lease On Companies/images/9_rectangle_1547.webp",
    iconAlt: "Lease purchase trucking operators icon",
  },
];

const leaseOnDispatchColumns: ComparisonColumn[] = [
  {
    key: "benefit",
    label: "Lease-On Dispatch Benefits",
  },
  {
    key: "advantage",
    label: "Operational Advantage",
  },
];

const leaseOnDispatchRows: ComparisonRow[] = [
  {
    factor: "Established Broker Network",
    benefit: "Established Broker Network",
    advantage: "Faster load access",
  },
  {
    factor: "Company Authority",
    benefit: "Company Authority",
    advantage: "No personal MC required",
  },
  {
    factor: "Insurance Support",
    benefit: "Insurance Support",
    advantage: "Simplified operations",
  },
  {
    factor: "Dedicated Dispatching",
    benefit: "Dedicated Dispatching",
    advantage: "Better freight coordination",
  },
  {
    factor: "Compliance Assistance",
    benefit: "Compliance Assistance",
    advantage: "Reduced administrative burden",
  },
  {
    factor: "Settlement Management",
    benefit: "Settlement Management",
    advantage: "Organized payment workflow",
  },
];

const leaseOnCarrierSupportColumns: ComparisonColumn[] = [
  {
    key: "need",
    label: "Lease-On Carrier Needs",
  },
  {
    key: "solution",
    label: "E Truck Dispatching Solution",
  },
];

const leaseOnCarrierSupportRows: ComparisonRow[] = [
  {
    factor: "Multi-driver coordination",
    need: "Multi-driver coordination",
    solution: "Centralized dispatch operations",
  },
  {
    factor: "Broker communication",
    need: "Broker communication",
    solution: "Dedicated freight coordination",
  },
  {
    factor: "Compliance monitoring",
    need: "Compliance monitoring",
    solution: "DOT-focused dispatch workflow",
  },
  {
    factor: "Load planning",
    need: "Load planning",
    solution: "RPM-based lane strategy",
  },
  {
    factor: "Driver utilization",
    need: "Driver utilization",
    solution: "Reduced downtime planning",
  },
  {
    factor: "Settlement support",
    need: "Settlement support",
    solution: "Organized paperwork management",
  },
];

const ownerOperatorChoiceSteps: [string, string][] = [
  [
    "No Forced Dispatch",
    "You stay fully in control of every load decision and approve each shipment before booking. Our dispatchers work according to your preferred lanes, freight type, operating schedule, and business goals without forcing unwanted loads on your trucks. This gives owner-operators and fleet owners more flexibility, better operational control, and freight choices that align with profitability targets.",
  ],
  [
    "Strong Broker Network",
    "We communicate with reliable freight brokers and verified shippers to help reduce payment delays, cancellations, and operational risks. Strong broker relationships also improve access to consistent freight opportunities, better communication, and stronger rate negotiation support. This helps carriers maintain smoother operations and more dependable load availability across different freight markets.",
  ],
  [
    "Better Freight Planning",
    "Our dispatch strategy focuses on reducing empty miles and improving loaded movement consistency across profitable freight lanes. Smarter planning helps minimize downtime, improve fuel efficiency, and support more stable trucking operations. Instead of random load booking, we focus on building stronger freight flow and more efficient route coordination.",
  ],
  [
    "Dedicated Back Office Assistance",
    "We manage broker packets, dispatch paperwork, rate confirmations, and communication with brokers and shippers throughout the load process. Our back-office support helps reduce administrative pressure and keeps important dispatch documents organized. This allows drivers and fleet owners to stay focused on transportation, scheduling, and daily freight operations.",
  ],
  [
    "24/7 Dispatch Communication",
    "Freight operations continue beyond regular office hours, which is why our dispatch team remains available around the clock. We assist with load updates, scheduling coordination, operational changes, and dispatch support whenever needed. Continuous communication helps drivers stay informed and respond faster during active freight movement.",
  ],
];
const leaseOnVisionParagraphs = [
  "Fill out the form to connect with our dispatch team and get support for lease-on trucking operations, owner-operator dispatching, load planning, and back-office coordination.",
];

const leaseOnFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const leaseOnDispatchProcessSteps = [
  {
    number: "1",
    title: "Setup & Carrier Onboarding",
    description:
      "We collect:",
    includes: [
      "MC/DOT information",
      "Insurance certificate",
      "W9",
      "Equipment details",
      "Driver preferences",
    ],
  },
  {
    number: "2",
    title: "Freight Planning",
    description:
      "Our dispatchers begin sourcing freight based on:",
    includes: [
      "Trailer type",
      "Preferred lanes",
      "RPM goals",
      "Operational schedule",
    ],
  },
  {
    number: "3",
    title: "Load Search & Broker Check",
    description:
      "We search load boards, review broker details, check freight fit, and filter loads before sending options for approval.",
  },
  {
    number: "4",
    title: "Rate Negotiation",
    description:
      "Our team negotiates rates, confirms pickup and delivery details, and reviews dispatch terms before booking.",
  },
  {
    number: "5",
    title: "Dispatch Coordination",
    description:
      "We manage appointment updates, broker communication, driver check-ins, route details, and load movement support.",
  },
  {
    number: "6",
    title: "Paperwork & Settlement Support",
    description:
      "We organize rate confirmations, BOLs, PODs, invoices, and supporting documents for cleaner back-office workflow.",
  },
];

const leaseOnRevenueOptimizationColumns: ComparisonColumn[] = [
  {
    key: "area",
    label: "Revenue Optimization Area",
  },
  {
    key: "goal",
    label: "Operational Goal",
  },
];

const leaseOnRevenueOptimizationRows: ComparisonRow[] = [
  {
    factor: "Reduced deadhead",
    area: "Reduced deadhead",
    goal: "Lower fuel waste",
  },
  {
    factor: "Higher-paying lanes",
    area: "Higher-paying lanes",
    goal: "Better RPM",
  },
  {
    factor: "Reload planning",
    area: "Reload planning",
    goal: "Continuous freight movement",
  },
  {
    factor: "Accessorial management",
    area: "Accessorial management",
    goal: "Additional revenue",
  },
  {
    factor: "Fuel-aware routing",
    area: "Fuel-aware routing",
    goal: "Lower operational cost",
  },
  {
    factor: "Broker screening",
    area: "Broker screening",
    goal: "Reduced payment delays",
  },
];

const leaseOnProfessionalDispatchingGroups: TechnologyFeatureGroup[] = [
  {
    title: "Without Organized Dispatch Systems",
    features: [
      {
        title: "Long downtime between loads",
      },
      {
        title: "Poor communication with brokers",
      },
      {
        title: "Delayed paperwork submission",
      },
    ],
  },
  {
    title: "Many Trucking Operations Face",
    features: [
      {
        title: "Weak rate negotiation",
      },
      {
        title: "Missed accessorial revenue",
      },
      {
        title: "Inconsistent weekly settlements",
      },
    ],
  },
  {
    title: "",
    features: [
      {
        title: "Excessive empty miles",
      },
      {
        title: "Compliance-related operational risks",
      },
      {
        title: "Limited access to high-paying freight opportunities",
      },
    ],
  },
];


const benefits = [
  "Profit-focused freight planning",
  "Dedicated dispatcher communication",
  "FMCSA-aware operations",
  "Better rate negotiation",
  "Long-term operational support",
];

const leaseOnFaqs: FAQItem[] = [
  {
    question: "What is a lease-on trucking company?",
    answer:
      "A lease-on trucking company allows owner operators to work under the carrier’s MC authority while receiving dispatch, compliance, and operational support.",
  },
  {
    question: "Do owner operators need their own MC authority when leased on?",
    answer:
      "No. Lease-on owner operators run under the motor carrier’s authority, so they do not need their own active MC authority.",
  },
  {
    question: "Can leased owner operators choose their own loads?",
    answer:
      "Yes. With no forced dispatch, leased owner operators can review load options and approve freight before booking.",
  },
  {
    question: "What types of trailers do you dispatch for?",
    answer:
      "We dispatch dry van, reefer, flatbed, step deck, box truck, hotshot, and power only freight depending on carrier setup and lane preference.",
  },
  {
    question: "How do truck dispatchers find loads?",
    answer:
      "Dispatchers use load boards, broker networks, lane data, rate trends, and carrier preferences to find suitable freight opportunities.",
  },
  {
    question: "Do dispatchers negotiate freight rates?",
    answer:
      "Yes. Dispatchers negotiate rates, review freight details, confirm pickup and delivery terms, and help carriers secure better-paying loads.",
  },
];

const leaseOnQuestionStats: Stat[] = [
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

export default function LeaseOnCompanyPage() {
  return (
    <main>
    <HeroSection
      h1="Truck Dispatching Services For Lease-On Companies & Owner Operators"
      paragraphs={[
        "Professional truck dispatching services for lease-on companies and owner operators focused on high-paying loads, better freight rates, reduced deadhead, and full back-office support. E Truck Dispatching helps carriers, leased owner operators, and small trucking businesses maximize revenue while staying compliant with FMCSA and DOT requirements.",
      ]}
      backgroundImage="/Lease on Companies/images/1_rectangle_1450.webp"
      backgroundAlt="Truck dispatching services for lease-on companies and owner operators"
    />
   <LeaseOnRevealSection index={0} direction="left">
   <BenefitsGridSection
  heading="Reliable Dispatch Support for Lease-On Companies & Independent Owner Operators"
  benefits={leaseOnSupportBenefits}
/>
   </LeaseOnRevealSection>

<LeaseOnRevealSection index={1} direction="right">
<ComparisonTableSection
  heading="What Is Truck Dispatching for Lease-On Companies?"
  tableTitle=""
  columns={leaseOnDispatchColumns}
  rows={leaseOnDispatchRows}
  compactTop
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={2} direction="left">
<ComparisonTableSection
  heading="Dispatching Support for Lease-On Companies"
  tableTitle=""
  columns={leaseOnCarrierSupportColumns}
  rows={leaseOnCarrierSupportRows}
  compactTop
/>
 </LeaseOnRevealSection>
<LeaseOnRevealSection index={3} direction="right">
<ProcessGridSection
  heading="Why Owner Operators Choose E Truck Dispatching"
  steps={ownerOperatorChoiceSteps}
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={4}>
<VisionFormSection
  heading="E Truck Dispatching"
  paragraphs={leaseOnVisionParagraphs}
  fields={leaseOnFormFields}
  compactBottom
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={5} direction="left">
<HowWeWork
  heading={
    <>
      How Our Dispatching Process
      <br />
      Works
    </>
  }
  image="/Lease On Companies/images/12_vector_5.webp"
  imageAlt="Dispatcher holding boxes during lease-on dispatching process"
  steps={leaseOnDispatchProcessSteps}
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={6} direction="right">
<ComparisonTableSection
  heading="Revenue Optimization for Lease-On Owner Operators"
  tableTitle=""
  columns={leaseOnRevenueOptimizationColumns}
  rows={leaseOnRevenueOptimizationRows}
  compactTop
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={7} direction="left">
<TechnologyOperationsSection
  heading="Why Professional Dispatching Matters for Lease-On Trucking Operations"
  paragraphs={[]}
  featureGroups={leaseOnProfessionalDispatchingGroups}
  image="/Lease On Companies/images/13_rectangle_1556.webp"
  imageAlt="Orange truck used for lease-on dispatching operations"
  featureColumns={3}
/>
 </LeaseOnRevealSection>
<LeaseOnRevealSection index={8}>
<VisionFormSection
  heading="E Truck Dispatching"
  paragraphs={leaseOnVisionParagraphs}
  fields={leaseOnFormFields}
  compactBottom
/>
 </LeaseOnRevealSection>
<LeaseOnRevealSection index={9} direction="right">
<AudienceBenefitsSection
  showAudiences={false}
  heading="Work With E Truck Dispatching"
  benefits={benefits}
/>
 </LeaseOnRevealSection>
<LeaseOnRevealSection index={10} direction="left">
<FAQSection
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Lease On Companies/images/21_rectangle_1441.webp"
  imageAlt="Lease-on trucking FAQ support"
  faqs={leaseOnFaqs}
/>
 </LeaseOnRevealSection>

<LeaseOnRevealSection index={11}>
<QuestionStats
  heading="Still Have Questions?"
  description="Our dispatch experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={leaseOnQuestionStats}
/>
 </LeaseOnRevealSection>

</main>
  );
}
