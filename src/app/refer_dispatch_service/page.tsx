import HeroSection from "@/app/components/HeroSection";
import FeatureIntroSection from "@/app/components/FeatureIntroSection";
import RevenuePanelSection, {
  type RevenueGroup,
} from "@/app/components/RevenuePanelSection";
import ComparisonCardsSection from "@/app/components/ComparisonCardsSection";
import FreightTypesSection, {
  type FreightTypeCard,
} from "@/app/components/FreightTypesSection";
import DispatchTechnologyGridSection, {
  type DispatchTechnologyCard,
} from "@/app/components/DispatchTechnologyGridSection";
import OurServices, { type Service } from "@/app/components/OurServices";
import ComplianceMatrixSection, {
  type ComplianceCard,
} from "@/app/components/ComplianceMatrixSection";
import ServiceGuaranteesSection, {
  type ServiceGuaranteeCard,
} from "@/app/components/ServiceGuaranteesSection";
import DispatchAudienceSection, {
  type DispatchAudience,
} from "@/app/components/DispatchAudienceSection";
import SupportColumnsSection from "@/app/components/SupportColumnsSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import FreightBenefitsSection, {
  type FreightBenefit,
} from "@/app/components/FreightBenefitsSection";
import FAQSection from "../components/FAQs";
import QuestionStats from "../components/QuestionStats";
import VisionForm from "@/app/components/VisionFormSection";




const reeferDisruptionPreventionFeatures = [
  "Scheduling temperature-sensitive freight",
  "Managing delivery timing and appointment windows",
  "Coordinating broker communication and check calls",
  "Handling BOL, POD, and reefer paperwork",
  "Planning reloads for continuous reefer operations",
];

const reeferDispatchWorkGroups: RevenueGroup[] = [
  {
    title: "What Defines a Reefer Load in Trucking?",
    intro: [
      "A reefer load includes any shipment requiring controlled temperature during transit. Cargo categories include fresh produce, dairy, frozen goods, seafood, pharmaceuticals, and specialty chemicals. Each shipment operates within a defined temperature range, validated from pickup to delivery through logging systems.",
    ],
  },
  {
    title: "How Reefer Dispatch Differs from General Truck Dispatch",
    intro: [
      "Refrigerated freight operates under stricter timing and compliance conditions than dry freight. Delivery windows are fixed because delays increase spoilage risk. Temperature deviation creates immediate cargo rejection exposure and financial loss.",
    ],
  },
  {
    title: "What Does a Reefer Dispatcher Handle Daily?",
    intro: [],
    items: [
      "Load sourcing across broker networks and load boards",
      "Rate negotiation aligned with reefer market demand",
      "Temperature-aware scheduling and appointment coordination",
      "Continuous communication between driver, broker, and receiver",
    ],
  },
];

const reeferFreightRequirementCards: [string, string][] = [
  [
    "Food And Agricultural Freight",
    "Refrigerated trailers transport produce, dairy, meat, poultry, and frozen foods. Food supply chains depend on uninterrupted cold chain conditions to prevent spoilage.",
  ],
  [
    "High-Risk Temperature-Sensitive Cargo",
    "Seafood shipments requiring frozen conditions|Floral freight with freshness constraints|Ice cream and frozen packaged goods",
  ],
  [
    "Specialized Reefer Freight",
    "Pharmaceutical and medical shipments require tighter temperature tolerances and documented compliance. Multi-temperature shipments use divided trailer zones to maintain separate conditions within one unit.",
  ],
];

const reeferColdChainIntegrityCards: FreightTypeCard[] = [
  {
    title: "Temperature Control & Monitoring Awareness",
    description:
      "Reefer units maintain internal conditions regardless of external weather. Fresh freight typically moves between 34–38°F, while frozen cargo requires 0°F or below.",
    iconSrc: "/Refer Dispatch Service/images/9_rectangle_1607.webp",
    iconAlt: "Temperature control icon",
  },
  {
    title: "Transit-Time and Appointment Precision",
    description:
      "Perishable shipments require strict adherence to pickup and delivery schedules. Missed appointments lead to detention delays, cargo deterioration, and claim risk.",
    iconSrc: "/Refer Dispatch Service/images/10_rectangle_1643.webp",
    iconAlt: "Transit time icon",
  },
  {
    title: "Cargo Protection and Risk Prevention",
    description:
      "Pre-cooling and seal checks are completed before loading to maintain cargo protection and compliance. Temperature is monitored during transit, with immediate action taken for refrigeration issues or alarms.",
    iconSrc: "/Refer Dispatch Service/images/11_rectangle_1645.webp",
    iconAlt: "Cargo protection icon",
  },
];

const reeferDispatchIncludedServiceCards: DispatchTechnologyCard[] = [
  {
    title: "Load Sourcing and Booking",
    bullets: [
      "High-paying reefer load sourcing",
      "Broker relationship management",
      "Real-time load board scanning",
      "Dedicated lane planning",
      "Consistent freight availability",
    ],
    iconSrc: "/Refer Dispatch Service/images/11_rectangle_1645.webp",
    iconAlt: "Load sourcing icon",
  },
  {
    title: "Rate Negotiation and Profit Optimization",
    bullets: [
      "Market-based rate negotiation",
      "Seasonal demand analysis",
      "Broker leverage optimization",
      "Detention and layover recovery",
      "TONU and accessorial claims handling",
    ],
    iconSrc: "/Refer Dispatch Service/images/13_rectangle_1551.webp",
    iconAlt: "Rate negotiation icon",
  },
  {
    title: "Dispatch Operations and Driver Support",
    bullets: [
      "Real-time load instructions",
      "Check calls and shipment updates",
      "24/7 dispatcher communication",
      "Pickup and delivery coordination",
      "Continuous operational support",
    ],
    iconSrc: "/Refer Dispatch Service/images/15_rectangle_1555.webp",
    iconAlt: "Driver support icon",
  },
  {
    title: "Paperwork and Documentation Control",
    bullets: [
      "Rate confirmation handling",
      "Bill of lading (BOL) processing",
      "Proof of delivery (POD) management",
      "Invoice generation and tracking",
      "Factoring coordination support",
    ],
    iconSrc: "/Refer Dispatch Service/images/14_rectangle_1553.webp",
    iconAlt: "Documentation control icon",
  },
];

const reeferRevenuePerMileServices: Service[] = [
  {
    title: "Premium Freight Access",
    description:
      "Refrigerated freight generates higher rates because it requires specialized reefer equipment, temperature control, and strict delivery coordination. Dispatch systems focus on securing premium freight opportunities in sectors such as produce, frozen foods, dairy, pharmaceuticals, and temperature-sensitive retail goods.",
    image: "/Refer Dispatch Service/images/20_rectangle_1078.webp",
    imageAlt: "Dispatcher reviewing premium reefer freight opportunities",
  },
  {
    title: "Cold-Chain Delivery Stability",
    description:
      "Dispatch planning ensures temperature-sensitive freight moves without delays, refrigeration interruptions, or appointment failures. Route timing, delivery scheduling, and continuous shipment monitoring are coordinated to maintain cold-chain integrity throughout transit.",
    image: "/Refer Dispatch Service/images/19_rectangle_1076.webp",
    imageAlt: "Cold chain delivery planning for reefer freight",
  },
  {
    title: "Deadhead Reduction Strategy",
    description:
      "Backhaul loads are strategically pre-planned before delivery completion to minimize empty miles and maintain continuous reefer movement. Dispatchers align outbound and return routes based on lane demand, reload availability, and delivery timing.",
    image: "/Refer Dispatch Service/images/18_rectangle_1077.webp",
    imageAlt: "Driver managing reefer dispatch route planning",
    accent: true,
  },
  {
    title: "Market-Based Rate Optimization",
    description:
      "Dispatchers track seasonal produce cycles, pharmaceutical demand, weather conditions, and regional freight trends to negotiate stronger rates. Real-time market analysis helps identify high-demand lanes and time-sensitive shipments where reefer capacity is limited.",
    image: "/Refer Dispatch Service/images/17_rectangle_1074.webp",
    imageAlt: "Reefer freight delivery with fragile packages",
  },
];

const reeferOperationalChallengeCards: ComplianceCard[] = [
  {
    title: "Delay and Appointment Disruption Handling",
    intro:
      "Delays, appointment rescheduling, and delivery disruptions are managed through continuous broker and facility coordination. Dispatchers provide real-time communication updates, reroute when needed, and keep the receiver or shipper informed to reduce service failure risk.",
    items: [],
  },
  {
    title: "Reefer Unit and Fuel Management",
    intro:
      "Reefer unit operation is a separate decision point from general transport. This requires continued fuel and temperature monitoring. Dispatchers track reefer performance, fuel levels, and refrigeration stability to prevent temperature fluctuations and reduce cargo risk.",
    items: [],
  },
  {
    title: "Multi-Stop and Complex Load Coordination",
    intro:
      "Multi-stop reefer routes are controlled to maintain delivery timing, route efficiency, and temperature consistency across every stop. Dispatchers coordinate appointment scheduling, unloading sequences, and receiver planning to reduce delays and maintain smooth cold-chain operations.",
    items: [],
  },
  {
    title: "Cold-Chain Compliance Monitoring",
    intro:
      "Temperature-sensitive freight is continuously monitored to maintain cold-chain compliance throughout transit. Dispatchers track temperature logs, seal integrity, refrigeration performance, and delivery conditions to reduce rejection risk, spoilage, and claim exposure.",
    items: [],
  },
];

const reeferDispatchFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying reefer loads with full support and zero stress.",
];

const reeferDispatchFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];



const reeferComplianceStandardsCards: FreightTypeCard[] = [
  {
    title: "Transportation Compliance",
    description:
      "Reefer operations follow FMCSA regulations, Hours of Service requirements, and ELD-based route planning to maintain safe and compliant freight movement.",
    iconSrc: "/Refer Dispatch Service/images/24_rectangle_1651.webp",
    iconAlt: "Transportation compliance icon",
  },
  {
    title: "Food Safety Compliance",
    description:
      "FSMA requires temperature tracking, sanitation records, and shipment documentation to maintain cold-chain safety during transit.",
    iconSrc: "/Refer Dispatch Service/images/25_rectangle_1653.webp",
    iconAlt: "Food safety compliance icon",
  },
  {
    title: "Documentation and Risk Control",
    description:
      "Carrier packets, insurance verification, and shipment records are validated before dispatch to reduce cargo claims and compliance risks.",
    iconSrc: "/Refer Dispatch Service/images/26_rectangle_1655.webp",
    iconAlt: "Documentation and risk control icon",
  },
  {
    title: "Shipment Monitoring & Protection",
    description:
      "Dispatchers monitor load status, refrigeration conditions, and delivery timing to maintain stable and uninterrupted reefer operations.",
    iconSrc: "/Refer Dispatch Service/images/27_rectangle_1657.webp",
    iconAlt: "Shipment monitoring and protection icon",
  },
];

const reeferDispatchProcessCards: ServiceGuaranteeCard[] = [
  {
    title: "Carrier Onboarding and Setup",
    content:
      "MC authority, insurance, and W-9 are verified before activation.",
  },
  {
    title: "Dispatcher Assignment and Preference Mapping",
    content:
      "Carrier preferences including lanes, freight type, and rate targets are documented.",
  },
  {
    title: "Load Booking and Dispatch Execution",
    content:
      "Load offers are presented for approval before booking confirmation.",
  },
  {
    title: "Ongoing Support and Performance Optimization",
    content:
      "Dispatch tracks communication, delays, and revenue outcomes continuously.",
  },
];

const reeferDispatchAudienceCards: DispatchAudience[] = [
  {
    title: "Owner-Operators with Reefer Trailers",
    description:
      "Independent drivers need consistent refrigerated freight, broker communication, and improved access to high-paying reefer freight.",
  },
  {
    title: "Small and Growing Fleets",
    description:
      "Growing reefer fleets require efficient dispatch systems to manage scheduling, compliance, and continuous freight movement.",
  },
  {
    title: "Oversized Freight Specialists",
    description:
      "Profitable freight comes from cold-chain products, coordinated temperature control, delivery stability, and delivery accuracy.",
  },
];


const reeferWhyChooseCards = [
  {
    title: "Reefer-Specific Expertise",
    items: [
      "Commodity-based load planning",
      "Temperature-sensitive routing",
      "Transit timing coordination",
      "Cold-chain stability management",
      "Reefer compliance awareness",
      "Freight compatibility analysis",
    ],
  },
  {
    title: "Profit-Focused Dispatch System",
    items: [
      "RPM optimization strategy",
      "Market-based rate negotiation",
      "Deadhead mile reduction",
      "High-paying reefer load sourcing",
      "Lane profitability planning",
      "Revenue-focused dispatch decisions",
    ],
  },
  {
    title: "Operational Reliability",
    items: [
      "Consistent load coordination",
      "Real-time shipment updates",
      "Stable freight movement",
      "Appointment scheduling support",
      "Continuous reefer monitoring",
      "Reduced operational disruptions",
    ],
  },
  {
    title: "Dedicated Driver Support",
    items: [
      "Dedicated dispatcher assignment",
      "24/7 dispatcher communication",
      "No forced dispatch control",
      "Broker coordination assistance",
      "Paperwork handling support",
      "Ongoing operational guidance",
    ],
  },
   {
    title: "Dedicated Services",
    items: [
      "Dedicated dispatcher assignment",
      "24/7 dispatcher communication",
      "No forced dispatch control",
      "Broker coordination assistance",
      "Paperwork handling support",
      "Ongoing operational guidance",
    ],
  },
];
const reeferFinalFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying reefer loads with full support and zero stress.",
];

const reeferFinalFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const reeferComplexityBenefits: FreightBenefit[] = [
  {
    text: (
      <>
        Time Sensitivity and
        <br />
        Shelf-Life Risk
      </>
    ),
    iconSrc: "/Refer Dispatch Service/images/33_rectangle_33.webp",
    iconAlt: "Time sensitivity icon",
  },
  {
    text: (
      <>
        Temperature
        <br />
        Dependency
      </>
    ),
    iconSrc: "/Refer Dispatch Service/images/33_rectangle_33.webp",
    iconAlt: "Temperature dependency icon",
  },
  {
    text: (
      <>
        Higher Claim and
        <br />
        Rejection Risk
      </>
    ),
    iconSrc: "/Refer Dispatch Service/images/33_rectangle_33.webp",
    iconAlt: "Claim risk icon",
  },
  {
    text: (
      <>
        Continuous Reefer
        <br />
        Monitoring
      </>
    ),
    iconSrc: "/Refer Dispatch Service/images/33_rectangle_33.webp",
    iconAlt: "Reefer monitoring icon",
  },
];
const reeferDispatchBenefits = [
  "Reduced Administrative Workload — Dispatch handles broker communication, paperwork, and billing processes.",
  "Consistent Load Flow — Carriers maintain steady freight movement without downtime.",
  "Higher RPM through optimized loads",
  "Reduced empty miles",
  "Faster reload cycles",
];
const reeferDispatchFaqs = [
  {
    question: "What is a reefer dispatch service?",
    answer:
      "A service that manages refrigerated freight operations including load sourcing, compliance, and coordination.",
  },
  {
    question: "What does reefer mean in trucking?",
    answer:
      "Reefer refers to a refrigerated truck or trailer designed to transport temperature-sensitive freight such as produce, dairy, frozen food, meat, and pharmaceuticals.",
  },
  {
    question: "Do reefer loads pay more than dry van?",
    answer:
      "Reefer loads often offer higher rates because they require temperature control, stricter handling, additional fuel, and closer delivery monitoring.",
  },
  {
    question: "What is FSMA compliance?",
    answer:
      "FSMA compliance involves following food transportation requirements related to temperature control, sanitation, documentation, and safe handling procedures.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "You can start after submitting your carrier documents, equipment details, preferred lanes, and operating requirements.",
  },
  {
    question: "Who pays for reefer fuel?",
    answer:
      "The carrier normally covers reefer fuel costs, although dispatchers can negotiate rates and fuel-related accessorial charges when applicable.",
  },
];
const reeferDispatchStats = [
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


export default function ReferDispatchService() {
  return (
    <main>
    <HeroSection
  h1={
    <>
      Reefer Dispatch Services For
      <br />
      Temperature-Controlled Freight
    </>
  }
  fixedTitle="Reefer Dispatch Services"
  typingTitles={[
    "for Temperature-Controlled Freight",
    "Built for Perishable Cargo",
    "Focused on On-Time Delivery",
    "Designed for Cold Chain Protection",
  ]}
  paragraphs={[
    "Reefer dispatch services control how temperature-sensitive freight moves across lanes, schedules, and delivery windows. Perishable cargo requires precision in timing, compliance, and coordination. Our Reefer Dispatch Services converts refrigerated trucking into a structured revenue and protection system for carriers.",
  ]}
  backgroundImage="/Refer Dispatch Service/images/1_rectangle_1450.webp"
  backgroundAlt="Reefer truck for temperature-controlled freight dispatch"
/>
      <FeatureIntroSection
  heading={
    <>
      How Reefer Dispatch Prevents
      <br />
      Freight Disruptions
    </>
  }
  description="Reefer dispatch systems manage delivery timing, refrigeration coordination, and cold-chain stability for temperature-controlled freight. Dispatchers handle appointment scheduling, temperature-sensitive routing, and shipment monitoring to reduce spoilage risk and delivery disruptions."
  features={reeferDisruptionPreventionFeatures}
  image="/Refer Dispatch Service/images/4_rectangle_1557.webp"
  imageAlt="Reefer truck reference views for refrigerated dispatch"
/>

<RevenuePanelSection
  heading="What Are Reefer Dispatch Services and How Do They Work?"
  description="Reefer dispatch services manage temperature-controlled freight by coordinating load booking, compliance, routing, and real-time communication to maintain cold chain conditions and ensure on-time delivery."
  groups={reeferDispatchWorkGroups}
  image="/Refer Dispatch Service/images/5_rectangle_1558.webp"
  backgroundImage="/Vector 3.svg"
/>
<ComparisonCardsSection
  heading="What Types of Freight Require Reefer Dispatch Services?"
  description="Reefer dispatch services handle perishable and high-value cargo that requires stable temperature control and strict delivery timing."
  comparisons={reeferFreightRequirementCards}
  icons={[
    "/Refer Dispatch Service/images/6_rectangle_1545.webp",
    "/Refer Dispatch Service/images/7_rectangle_1539.webp",
    "/Refer Dispatch Service/images/8_rectangle_1541.webp",
  ]}
  iconAlts={[
    "Food and agricultural freight icon",
    "Temperature-sensitive cargo icon",
    "Specialized reefer freight icon",
  ]}
/>
<FreightTypesSection
  heading={
    <>
      How Does Reefer Dispatch
      <br />
      Protect Cold Chain Integrity?
    </>
  }
  description="Reefer dispatch protects cold chain integrity by controlling temperature settings, transit time, and delivery coordination to prevent cargo degradation."
  freightTypes={reeferColdChainIntegrityCards}
  columns={3}
/>

<DispatchTechnologyGridSection
  heading={
    <>
      What Is Included in Our Reefer
      <br />
      Dispatch Services?
    </>
  }
  image="/Refer Dispatch Service/images/16_rectangle_1565.webp"
  imageAlt="White reefer truck used for refrigerated freight dispatch"
  cards={reeferDispatchIncludedServiceCards}
/>
<OurServices
  heading={
    <>
      How Does Reefer Dispatch Improve
      <br />
      Revenue Per Mile (RPM)?
    </>
  }
  description="Reefer dispatch increases RPM by reducing empty miles, securing premium freight, and optimizing route efficiency."
  services={reeferRevenuePerMileServices}
/>

<ComplianceMatrixSection
  heading="How Do We Handle Reefer-Specific Operational Challenges?"
  description="Operational risks are controlled through proactive planning and rapid response systems."
  cards={reeferOperationalChallengeCards}
  image="/Refer Dispatch Service/images/21_rectangle_1560.webp"
  imageAlt="Warehouse workers checking reefer freight operational challenges"
/>

 <VisionFormSection
      heading={
        <>
          E Truck
          <br />
          Dispatching
        </>
      }
      paragraphs={[
        "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
      ]}
      fields={[
        ["First Name", "Enter First Name", "text"],
        ["Last Name", "Enter Last Name", "text"],
        ["Phone Number", "+1 (000) 123-1234", "tel"],
        ["Email Address", "email@gmail.com", "email"],
        ["Truck Type", "Enter Truck Type", "select"],
        ["MC Number", "Enter MC Number", "text"],
      ]}
    />


<FreightTypesSection
  heading={
    <>
      What Compliance Standards Apply
      <br />
      to Reefer Dispatch?
    </>
  }
  description="Reefer dispatch aligns with transportation safety, food safety, and documentation standards to prevent violations and cargo rejection."
  freightTypes={reeferComplianceStandardsCards}
  columns={4}
  variant="compact"
/>
<ServiceGuaranteesSection
  heading="Reefer Dispatch Process Work?"
  image="/Refer Dispatch Service/images/28_rectangle_1566.webp"
  imageAlt="Dispatcher managing reefer dispatch process with packages"
  cards={reeferDispatchProcessCards}
  variant="process"
/>
<DispatchAudienceSection
  heading={
    <>
      Who Should Use Reefer Dispatch
      <br />
      Services?
    </>
  }
  audiences={reeferDispatchAudienceCards}
/>
<SupportColumnsSection
  heading="Why Choose Our Reefer Dispatch Services?"
  intro="The service combines cold chain expertise, revenue optimization, and reliable operational support."
  image="/Refer Dispatch Service/images/29_rectangle_1426.webp"
  imageAlt="Reefer driver reviewing dispatch details with tablet"
  cards={reeferWhyChooseCards}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={reeferFinalFormParagraphs}
  fields={reeferFinalFormFields}
/>
<FreightBenefitsSection
  heading={
    <>
      What Makes Reefer Dispatch More
      <br />
      Complex Than Other Freight Types?
    </>
  }
  benefits={reeferComplexityBenefits}
/>
<FeatureIntroSection
  heading="What Are the Benefits of Outsourcing Reefer Dispatch?"
  description="Outsourcing reduces operational burden while improving revenue consistency and efficiency. Better revenue and efficiency come from optimized loads, fewer empty miles, and faster reload cycles."
  features={reeferDispatchBenefits}
  image="/Refer Dispatch Service/images/34_rectangle_1556.webp"
  imageAlt="Truck carrying secured freight with a worker beside the trailer"
/>
<FAQSection
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Refer Dispatch Service/images/41_rectangle_1441.webp"
  imageAlt="Dispatcher coordinating reefer freight operations from a warehouse office"
  faqs={reeferDispatchFaqs}
/>
<QuestionStats
  heading="Still Have Questions?"
  description="Our billing experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={reeferDispatchStats}
/>
</main>
  );
}