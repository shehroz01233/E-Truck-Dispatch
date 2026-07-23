import HeroSection from "@/app/components/HeroSection";
import FeatureIntroSection from "@/app/components/FeatureIntroSection";
import ProcessGridSection from "@/app/components/ProcessGridSection";
import FreightTypesSection, {
  type FreightTypeCard,
} from "@/app/components/FreightTypesSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import OurServices, { type Service } from "@/app/components/OurServices";
import SupportColumnsSection from "@/app/components/SupportColumnsSection";
import ComparisonCardsSection from "@/app/components/ComparisonCardsSection";
import DispatchAudienceSection, {
  type DispatchAudience,
} from "@/app/components/DispatchAudienceSection";
import FreightBenefitsSection, {
  type FreightBenefit,
} from "@/app/components/FreightBenefitsSection";
import ServiceGuaranteesSection, {
  type ServiceGuaranteeCard,
} from "@/app/components/ServiceGuaranteesSection";
import ComplianceMatrixSection, {
  type ComplianceCard,
} from "@/app/components/ComplianceMatrixSection";
import FAQSection, { type FAQItem } from "@/app/components/FAQs";
import QuestionStats, { type Stat } from "@/app/components/QuestionStats";


const stepDeckIntroFeatures = [
  "Load sourcing based on step deck trailer dimensions",
  "Broker communication and rate negotiation",
  "Clearance-aware route planning and scheduling",
  "Documentation handling including BOL, POD, rate confirmations",
  "Backhaul coordination and payment support",
];
const stepDeckDispatchOperationSteps: [string, string][] = [
  [
    "Load Sourcing and Market Access",
    "Freight is sourced through platforms like DAT Solutions and Truckstop.com, combined with direct relationships with brokers. Load selection is filtered by trailer compatibility, freight height, and lane demand.",
  ],
  [
    "Clearance and Compatibility Validation",
    "Freight dimensions are checked against trailer deck height capacity, loading method, and route limits before booking. This helps reduce clearance issues and rejected freight movement.",
  ],
  [
    "Rate Structuring and Negotiation",
    "Rates include compensation for load complexity, securement needs, extra mileage, accessorials, and route sensitivity. Negotiation focuses on protecting carrier revenue before dispatch confirmation.",
  ],
  [
    "Dispatch Execution and Coordination",
    "After booking, the dispatcher coordinates pickup timing, delivery scheduling, broker communication, tracking updates, and route changes during active shipment movement.",
  ],
  [
    "Documentation and Compliance Control",
    "Rate confirmations, BOLs, PODs, permit details, and accessorial records are reviewed and organized to support cleaner dispatch operations and faster payment processing.",
  ],
];

const stepDeckFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying step deck loads with full support and zero stress.",
];

const stepDeckFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const stepDeckFlatbedDifferenceFeatures = [
  {
    text: "Lower deck enables additional height margin (~1 ft 6 in advantage)",
    iconSrc: "/Step Deck Dispatch/images/11_rectangle_1545.webp",
    iconAlt: "Lower deck icon",
  },
  {
    text: "Ramp access supports ground-level equipment loading",
    iconSrc: "/Step Deck Dispatch/images/12_rectangle_1557.webp",
    iconAlt: "Ramp access icon",
  },
  {
    text: "Permit avoidance is possible for loads under 10 ft height",
    iconSrc: "/Step Deck Dispatch/images/13_rectangle_1558.webp",
    iconAlt: "Permit avoidance icon",
  },
];

const stepDeckLoadPlanningServices: Service[] = [
  {
    title: "Weight Distribution Control",
    description:
      "Axle balance is carefully calculated to prevent DOT weight violations and maintain load stability during transit. Proper weight distribution reduces safety risks, improves handling performance, and ensures compliance with federal and state transportation regulations throughout the route.",
    image: "/Step Deck Dispatch/images/17_rectangle_1078.webp",
    imageAlt: "Dispatch team discussing step deck load planning",
  },
  {
    title: "Continuous Movement Strategy",
    description:
      "Backhaul loads are strategically pre-arranged to minimize empty miles and maintain continuous operational flow. This reduces fuel waste, improves route efficiency, and helps carriers maintain revenue per mile across both outbound and return trips.",
    image: "/Step Deck Dispatch/images/16_rectangle_1076.webp",
    imageAlt: "Route planning map for step deck dispatch",
  },
  {
    title: "Height Compliance Routing",
    description:
      "Routes are scanned and validated for bridge clearance, overpass limits, and legal height restrictions before any load assignment. Every route is analyzed to ensure cargo can move safely without clearance violations or permit conflicts.",
    image: "/Step Deck Dispatch/images/15_rectangle_1077.webp",
    imageAlt: "Dispatcher supporting step deck load planning",
    accent: true,
  },
  {
    title: "Securement-Based Booking",
    description:
      "Freight type determines the securement methods and equipment required for safe transport, including chains, straps, binders, and tarps. Proper securement selection ensures cargo stability, regulatory compliance, and reduced risk of damage or roadside violations during transit.",
    image: "/Step Deck Dispatch/images/14_rectangle_1074.webp",
    imageAlt: "Dispatcher managing securement-based step deck booking",
  },
];
const stepDeckRevenueCards = [
  {
    title: "High-Value Freight Targeting",
    items: [
      "Oversized freight access",
      "Specialized cargo opportunities",
      "Higher per-mile revenue",
      "Premium lane selection",
      "Limited competition advantage",
      "Increased load profitability",
    ],
  },
  {
    title: "Deadhead Reduction with Lane-Based Planning",
    items: [
      "Pre-arranged return loads",
      "Reduced empty mileage",
      "Continuous truck movement",
      "Backhaul route alignment",
      "Lower fuel waste",
      "Improved route efficiency",
    ],
  },
  {
    title: "Accessorial Revenue Capture",
    items: [
      "Detention pay recovery",
      "Layover compensation handling",
      "TONU claim management",
      "Delay charge negotiation",
      "Extended wait-time billing",
      "Additional revenue protection",
    ],
  },
  {
    title: "Market-Driven Rate Control",
    items: [
      "Lane demand analysis",
      "Equipment scarcity pricing",
      "Real-time market tracking",
      "Competitive rate negotiation",
      "Yield optimization strategy",
      "Revenue-focused load selection",
    ],
  },
];
const stepDeckCommonChallengeCards: FreightTypeCard[] = [
  {
    title: "Height Miscalculation Risk",
    description:
      "Incorrect measurement leads to violations or route failure. Pre-dispatch validation prevents this.",
    iconSrc: "/Step Deck Dispatch/images/19_rectangle_1651.webp",
    iconAlt: "Height miscalculation icon",
  },
  {
    title: "Route Restriction Conflicts",
    description:
      "Bridge limits and restricted corridors require clearance-aware routing systems.",
    iconSrc: "/Step Deck Dispatch/images/20_rectangle_1653.webp",
    iconAlt: "Route restriction icon",
  },
  {
    title: "Securement Failures",
    description:
      "Improper load handling increases damage risk. Equipment-specific protocols are applied.",
    iconSrc: "/Step Deck Dispatch/images/21_rectangle_1655.webp",
    iconAlt: "Securement failures icon",
  },
  {
    title: "Broker Payment Risk",
    description:
      "Credit verification systems filter unreliable brokers before load confirmation.",
    iconSrc: "/Step Deck Dispatch/images/22_rectangle_1657.webp",
    iconAlt: "Broker payment risk icon",
  },
];

const stepDeckComplianceDocumentationCards: [string, string][] = [
  [
    "Regulatory Compliance",
    "Operations follow Federal Motor Carrier Safety Administration (FMCSA) regulations to ensure cargo securement, transport legality, and operational safety. Every dispatch must meet required compliance standards before dispatch to reduce violations, delays, and regulatory risks during transit.",
  ],
  [
    "Required Documentation",
    "Rate confirmations, bills of lading (BOL), proof of delivery (POD), insurance certificates, and carrier packets are organized and verified before load movement. Proper documentation removes broker confusion, payment delays, and compliance issues.",
  ],
  [
    "Audit-Ready System",
    "All operational and shipment records are maintained in a centralized format for inspections, compliance reviews, and audits. This system improves document accessibility, reduces missing paperwork issues, and keeps compliance control organized.",
  ],
];

const stepDeckOwnerOperatorAudiences: DispatchAudience[] = [
  {
    title: "Owner-Operators",
    description:
      "Drivers operating under their own MC authority eliminate administrative workload by outsourcing load sourcing, negotiation, and compliance tasks.",
  },
  {
    title: "Small Fleets",
    description:
      "Multi-truck operations scale dispatch capacity without hiring internal staff. Each truck operates under consistent load planning logic.",
  },
  {
    title: "Oversized Freight Specialists",
    description:
      "Carriers focused on heavy or over-dimensional freight gain access to specialized broker networks and consistent high-value lanes.",
  },
];

const stepDeckTechnologyBenefits: FreightBenefit[] = [
  {
    text: "Load Boards: DAT Solutions, Truckstop.com",
    iconSrc: "/Step Deck Dispatch/images/26_tick_icon.webp",
    iconAlt: "Load boards icon",
  },
  {
    text: "Route Planning Tools: GPS-based clearance and restriction mapping",
    iconSrc: "/Step Deck Dispatch/images/26_tick_icon.webp",
    iconAlt: "Route planning icon",
  },
  {
    text: "Broker Verification: Credit screening platforms",
    iconSrc: "/Step Deck Dispatch/images/26_tick_icon.webp",
    iconAlt: "Broker verification icon",
  },
  {
    text: "Communication Systems: Real-time updates and digital paperwork",
    iconSrc: "/Step Deck Dispatch/images/26_tick_icon.webp",
    iconAlt: "Communication systems icon",
  },
];
const stepDeckFinalCtaParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying step deck loads with full support and zero stress.",
];

const stepDeckFinalCtaFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const stepDeckDispatchProcessCards: ServiceGuaranteeCard[] = [
  {
    title: "Carrier Onboarding",
    content: "MC authority, insurance, and W-9 are verified before activation.",
  },
  {
    title: "Dispatcher Assignment",
    content:
      "A dedicated dispatcher configures lane preferences, freight type, and rate targets.",
  },
  {
    title: "Load Booking and Execution",
    content:
      "Loads are negotiated, confirmed, and dispatched after carrier approval.",
  },
  {
    title: "Delivery and Payment Cycle",
    content:
      "POD submission triggers invoicing and payment processing, often integrated with factoring systems.",
  },
];

const stepDeckSpecializedServiceCards: ComplianceCard[] = [
  {
    title: "Equipment-Specific Expertise",
    intro:
      "Dispatch decisions are based on trailer configuration, cargo dimensions, and freight compatibility rather than generic load assumptions. Each shipment is matched according to deck height, weight distribution, loading requirements, and clearance limitations. This equipment-focused approach improves load accuracy, operational safety, and freight profitability.",
    items: [],
  },
  {
    title: "Profit-Focused Strategy",
    intro:
      "Load selection is driven by revenue per mile, lane consistency, and long-term profitability instead of load volume alone. Dispatchers analyze market demand, broker rates, and operational costs before booking freight. This strategy helps carriers maintain stronger margins, stable weekly earnings, and more efficient route utilization.",
    items: [],
  },
  {
    title: "Operational Efficiency",
    intro:
      "Administrative and dispatch-related tasks are centralized to reduce driver workload and improve operational control. Paperwork handling, broker communication, compliance tracking, and scheduling are managed through a structured system. This allows drivers and fleet owners to focus on transportation and delivery performance without unnecessary operational strain.",
    items: [],
  },
  {
    title: "Continuous Load Flow",
    intro:
      "Structured dispatch planning ensures consistent freight movement without long operational gaps between loads. Return freight and outbound routes are coordinated in advance to maintain continuous truck utilization. This reduces downtime, minimizes empty miles, and supports stable cash flow throughout operations.",
    items: [],
  },
];

const stepDeckDispatchServiceFaqs: FAQItem[] = [
  {
    question: "What is a step deck dispatch service?",
    answer:
      "A system that manages load sourcing, negotiation, compliance, and documentation for step deck carriers.",
  },
  {
    question: "Is a step deck the same as a drop deck?",
    answer:
      "Yes. Step deck and drop deck usually refer to the same trailer type with an upper deck and a lower rear deck for taller freight.",
  },
  {
    question: "Do step deck loads require permits?",
    answer:
      "Some step deck loads require permits when cargo exceeds legal height, width, length, or weight limits. Dispatchers review load dimensions before booking.",
  },
  {
    question: "What is the maximum freight height?",
    answer:
      "Maximum freight height depends on trailer deck height, cargo dimensions, and state route limits. Step decks allow taller freight than standard flatbeds.",
  },
  {
    question: "Can dispatch reduce empty miles?",
    answer:
      "Yes. Dispatchers reduce empty miles through reload planning, backhaul coordination, and lane-based freight matching.",
  },
  {
    question: "What documents are required?",
    answer:
      "Common documents include MC authority, insurance certificate, W-9, rate confirmation, bill of lading, proof of delivery, and carrier packets.",
  },
];

const stepDeckFinalQuestionStats: Stat[] = [
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
const stepDeckBestLoadTypes: FreightTypeCard[] = [
  {
    title: "Height-Sensitive Freight",
    description:
      "Cargo exceeding 8’6” flatbed limits—such as industrial machines, tanks, and generators—fits within step deck lower deck clearance.",
    iconSrc: "/Step Deck Dispatch/images/4_rectangle_1607.webp",
    iconAlt: "Height-sensitive step deck freight icon",
  },
  {
    title: "Equipment and Machinery Transport",
    description:
      "Construction units like excavators, skid steers, and agricultural tractors use ramp-based loading instead of cranes.",
    iconSrc: "/Step Deck Dispatch/images/5_rectangle_1643.webp",
    iconAlt: "Equipment and machinery transport icon",
  },
  {
    title: "Multi-Level Freight Utilization",
    description:
      "Partial loads combine cargo across both deck levels, increasing revenue efficiency per trip without exceeding limits.",
    iconSrc: "/Step Deck Dispatch/images/6_rectangle_1645.webp",
    iconAlt: "Multi-level step deck freight icon",
  },
];
export default function StepDeckDispatch(){
    return(
        <main>
      <HeroSection
  h1={
    <>
      Step Deck Dispatch Services By
      <br />
      E-Truck Dispatching
    </>
  }
  fixedTitle="Step Deck Dispatch Services"
  typingTitles={[
    "for Height-Sensitive Freight",
    "Built for Specialized Open-Deck Loads",
    "Focused on Clearance and Route Control",
    "for Owner-Operators and Fleets",
  ]}
  paragraphs={[
    "A step deck dispatch service manages freight operations for two-level open-deck trailers designed for height-sensitive cargo. The trailer structure includes an upper platform behind the cab and a lower rear deck positioned closer to ground level, allowing taller freight to move within legal height limits without triggering permits.",
    "This dispatch model focuses on equipment-specific load matching, clearance validation, and operational control. Unlike general freight coordination, it applies structured decision logic based on cargo height, loading method, and route feasibility.",
  ]}
  backgroundImage="/Step Deck Dispatch/images/1_rectangle_1450.webp"
  backgroundAlt="Step deck dispatch truck moving on highway"
/>
<FeatureIntroSection
  heading="What a Step Deck Dispatch Service Include?"
  description="A step deck dispatch service manages load sourcing, broker communication, rate negotiation, route planning, and paperwork coordination for carriers operating step deck trailers. Instead of manually searching for compatible freight, dispatchers handle equipment-specific load matching based on cargo height, deck configuration, loading method, and route restrictions."
  features={stepDeckIntroFeatures}
  image="/Step Deck Dispatch/images/47_rectangle_1557.webp"
  imageAlt="Step deck truck reference views"
/>
<ProcessGridSection
  heading="How Step Deck Dispatch Operates"
  steps={stepDeckDispatchOperationSteps}
/>

<FreightTypesSection
  heading={
    <>
      What Loads Are Best for Step
      <br />
      Deck Trailers?
    </>
  }
  description="Step deck equipment is used when height, loading method, or jobsite conditions restrict standard trailers."
  freightTypes={stepDeckBestLoadTypes}
  columns={3}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={stepDeckFormParagraphs}
  fields={stepDeckFormFields}

/>
<FeatureIntroSection
  heading={
    <>
      Step Deck vs Flatbed Dispatch:
      <br />
      Strategic Difference
    </>
  }
  description="Step deck dispatch introduces clearance-based logistics control absent in flatbed operations."
  features={stepDeckFlatbedDifferenceFeatures}
   image="/Step Deck Dispatch/images/10_rectangle_1556.webp"
  imageAlt="Step deck truck carrying tall cargo"
/>

<OurServices
  heading={
    <>
      Step Deck Load Planning and
      <br />
      Optimization System
    </>
  }
  description="Load planning operates as a pre-dispatch engineering layer, not a reactive stop."
  services={stepDeckLoadPlanningServices}
/>
<SupportColumnsSection
  heading="How Step Deck Dispatch Increases Revenue Per Mile (RPM)"
  intro="Revenue growth is driven through precision-based load selection and route continuity."
  image="/Step Deck Dispatch/images/18_rectangle_1426.webp"
  imageAlt="Driver reviewing step deck dispatch revenue planning"
  cards={stepDeckRevenueCards}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={stepDeckFormParagraphs}
  fields={stepDeckFormFields}
 
/>
<FreightTypesSection
  heading={
    <>
      Common Challenges in Step Deck
      <br />
      Dispatch
    </>
  }
  description="Step deck operations introduce risk variables that require structured control mechanisms."
  freightTypes={stepDeckCommonChallengeCards}
  columns={4}
  variant="compact"
/>
<ComparisonCardsSection
  heading="Compliance and Documentation Control"
  description="Every dispatch decision must align with federal safety and transport regulations."
  comparisons={stepDeckComplianceDocumentationCards}
  icons={[
    "/Step Deck Dispatch/images/23_rectangle_1545.webp",
    "/Step Deck Dispatch/images/24_rectangle_1539.webp",
    "/Step Deck Dispatch/images/25_rectangle_1541.webp",
  ]}
  iconAlts={[
    "Regulatory compliance icon",
    "Required documentation icon",
    "Audit-ready system icon",
  ]}
/>

<DispatchAudienceSection
  heading={
    <>
      Step Deck Dispatch for Owner-Operators
      <br />
      and Small Fleets
    </>
  }
  audiences={stepDeckOwnerOperatorAudiences}
/>
<FreightBenefitsSection
  heading={
    <>
      Technology and Tools Used
      <br />
      in Step Deck Dispatch
    </>
  }
  benefits={stepDeckTechnologyBenefits}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={stepDeckFinalCtaParagraphs}
  fields={stepDeckFinalCtaFields}

/>

<ServiceGuaranteesSection
  heading="Our Step Deck Dispatch Process"
  image="/Step Deck Dispatch/images/30_rectangle_1566.webp"
  imageAlt="Dispatcher managing step deck dispatch process with packages"
  cards={stepDeckDispatchProcessCards}
  variant="process"
/>

<ComplianceMatrixSection
  heading="Why Choose a Specialized Step Deck Dispatch Service?"
  description="A specialized step deck dispatch service manages oversized and height-sensitive freight through proper load selection, route planning, permit coordination, and revenue-focused dispatching."
  cards={stepDeckSpecializedServiceCards}
  image="/Step Deck Dispatch/images/31_rectangle_1560.webp"
  imageAlt="Dispatcher managing step deck dispatch operations"
/>
<FAQSection
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Step Deck Dispatch/images/38_rectangle_1441.webp"
  imageAlt="Dispatcher answering step deck dispatch questions"
  faqs={stepDeckDispatchServiceFaqs}
/>
<QuestionStats
  heading="Still Have Questions?"
  description="Our billing experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={stepDeckFinalQuestionStats}
/>
</main>

    );
}
