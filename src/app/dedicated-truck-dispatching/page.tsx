import BenefitsGridSection from "../components/BenefitsGridSection";
import BrokerNetworkSection, {
  BrokerNetworkFeature,
} from "../components/BrokerNetworkSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComparisonTableSection, { ComparisonColumn, ComparisonRow } from "../components/ComparisonTableSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import DispatchAudienceSection, {
  DispatchAudience,
} from "../components/DispatchAudienceSection";
import DispatchTechnologyGridSection, { DispatchTechnologyCard } from "../components/DispatchTechnologyGridSection";
import FAQSection, { FAQItem } from "../components/FAQs";
import FreightTypesSection, {
  FreightTypeCard,
} from "../components/FreightTypesSection";
import HeroSection from "../components/HeroSection";
import OurServices, { Service } from "../components/OurServices";
import ProcessGridSection from "../components/ProcessGridSection";
import QuestionStats from "../components/QuestionStats";
import RevenuePanelSection, {
  RevenueGroup,
} from "../components/RevenuePanelSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";

type ProcessStep = [string, string[]];
const dedicatedDispatchCards: [string, string[]][] = [
  [
    "Dedicated Dispatcher Management",
    [
      "A dedicated dispatcher handles daily freight operations, broker coordination, scheduling updates, and load planning based on the carrier’s equipment type and operational preferences. This creates stronger communication consistency and faster dispatch response times.",
    ],
  ],
  [
    "Long-Term Operational Planning",
    [
      "Unlike standard dispatch models focused only on booking available freight, dedicated dispatching supports long-term operational performance through structured route planning, load selection, and freight consistency. Dispatchers gradually understand the carrier’s preferred lanes, revenue goals, and scheduling patterns.",
    ],
  ],
  [
    "Improved Load Selection and Profitability",
    [
      "Dedicated dispatching improves freight selection by analyzing lane demand, reload opportunities, RPM performance, fuel impact, and operational efficiency before load booking decisions are made. This reduces operational inefficiencies that negatively affect profitability.",
    ],
  ],
  [
    "Structured Freight Coordination",
    [
      "Modern trucking operations depend heavily on dispatch responsiveness, freight visibility, and operational planning. Dedicated dispatching creates a structured workflow that supports consistent freight movement, better reload planning, and reduced downtime instead of reactive load searching.",
    ],
  ],
];
const dedicatedDispatchGroups: RevenueGroup[] = [
  {
    title: "Operational Setup and Freight Planning",
    intro: [
      "Before dispatch operations begin, the dispatcher analyzes carrier requirements, equipment type, freight preferences, operating regions, scheduling goals, and freight priorities to create a structured load planning strategy. This process improves freight targeting, operational consistency, route efficiency, and coordination across daily trucking operations.",
    ],
  },
  {
    title: "Daily Dispatch Coordination",
    intro: [
      "After onboarding, the dedicated dispatcher manages load searching, broker negotiation, appointment scheduling, paperwork coordination, driver communication, and reload planning to maintain consistent freight movement and operational efficiency throughout daily dispatch operations.",
    ],
  },
  {
    title: "Continuous Reload and Route Optimization",
    intro: [
      "Dispatch planning focuses on reload timing, fuel efficiency, lane demand, freight continuity, route profitability, and reduced downtime to improve weekly RPM performance and maintain stronger operational flow across active freight routes.",
    ],
  },
];

const freightMarketCards = [
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
const smallFleetBenefits: FreightTypeCard[] = [
  {
    title: "Centralized Freight Coordination",
    description:
      "Dedicated fleet dispatching organizes freight distribution, broker communication, route balancing, and load scheduling across multiple trucks simultaneously. This reduces communication breakdowns and improves operational consistency throughout daily freight movement.",
    iconSrc: "/Dedicated Truck Dispatching/images/22_rectangle_1607.webp",
    iconAlt: "Centralized freight coordination icon",
  },
  {
    title: "Structured Workflow Management",
    description:
      "Instead of drivers independently searching for freight, dispatch operations are managed under one structured workflow with coordinated scheduling, reload planning, and route optimization. This improves freight visibility and reduces operational inefficiencies.",
    iconSrc: "/Dedicated Truck Dispatching/images/23_rectangle_1643.webp",
    iconAlt: "Structured dispatch workflow icon",
  },
  {
    title: "Scalable Operational Support",
    description:
      "Small fleets benefit from dedicated dispatching because it creates operational scalability without requiring an internal dispatch department. Dedicated support improves load consistency, communication management, and long-term fleet efficiency as trucking operations expand.",
    iconSrc: "/Dedicated Truck Dispatching/images/18_rectangle_1553.webp",
    iconAlt: "Scalable fleet support icon",
  },
];
const ownerOperatorBenefits: DispatchAudience[] = [
  {
    title: "Reduced Administrative Workload",
    description:
      "Dedicated dispatching reduces time spent on broker calls, load searching, appointment scheduling, paperwork handling, and operational coordination. This allows owner-operators to focus more on driving and freight execution.",
  },
  {
    title: "Personalized Freight Planning",
    description:
      "Over time, the dispatcher becomes familiar with the carrier’s operating style, preferred lanes, scheduling preferences, and revenue goals. This improves load selection and creates more stable freight planning strategies.",
  },
  {
    title: "Improved Freight Consistency",
    description:
      "Long-term dispatch coordination helps carriers avoid unstable freight cycles caused by random dispatch decisions. Load planning and route coordination improve operational consistency and weekly revenue performance.",
  },
];
const whyChooseBenefits = [
  {
    title: "Dedicated Dispatcher Assignment",
    iconSrc: "/Dedicated Truck Dispatching/images/25_rectangle_1537.webp",
    iconAlt: "Dedicated dispatcher assignment icon",
  },
  {
    title: "No Forced Dispatch Policy",
    iconSrc: "/Dedicated Truck Dispatching/images/27_rectangle_1539.webp",
    iconAlt: "No forced dispatch icon",
  },
  {
    title: "24/7 Operational Communication",
    iconSrc: "/Dedicated Truck Dispatching/images/29_rectangle_1541.webp",
    iconAlt: "24-hour operational communication icon",
  },
  {
    title: "RPM-Focused Dispatch Strategy",
    iconSrc: "/Dedicated Truck Dispatching/images/26_rectangle_1545.webp",
    iconAlt: "RPM-focused dispatch strategy icon",
  },
  {
    title: "Broker Verification Systems",
    iconSrc: "/Dedicated Truck Dispatching/images/18_rectangle_1553.webp",
    iconAlt: "Broker verification system icon",
  },
  {
    title: "Reload Planning And Documentation Support",
    iconSrc: "/Dedicated Truck Dispatching/images/17_rectangle_1551.webp",
    iconAlt: "Reload planning and documentation support icon",
  },
];
const industryFeatures: BrokerNetworkFeature[] = [];
const faqs: FAQItem[] = [
  {
    question: "What does a dedicated truck dispatcher do?",
    answer:
      "A dedicated dispatcher manages freight booking, broker communication, route planning, scheduling, paperwork, reload coordination, and daily operational support for carriers.",
  },
  {
    question:
      "How is dedicated dispatching different from regular dispatching?",
    answer:
      "Dedicated dispatching assigns one dispatcher to understand your equipment, preferred lanes, schedule, revenue goals, and operating preferences instead of rotating your freight across multiple dispatchers.",
  },
  {
    question: "Is dedicated dispatching good for owner-operators?",
    answer:
      "Yes. It reduces time spent searching for loads, negotiating rates, handling paperwork, scheduling appointments, and communicating with brokers.",
  },
  {
    question: "Can small fleets use dedicated dispatch services?",
    answer:
      "Yes. A dedicated dispatcher coordinates freight across multiple trucks, balances routes, plans reloads, and centralizes communication for the fleet.",
  },
  {
    question: "How do dispatchers find loads?",
    answer:
      "Dispatchers use load boards, broker networks, lane data, freight demand, reload availability, and equipment requirements to identify suitable loads.",
  },
  {
    question: "Do dispatchers negotiate freight rates?",
    answer:
      "Yes. Dispatchers negotiate rates using lane demand, mileage, deadhead, equipment type, market conditions, and the carrier’s revenue targets.",
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
const rateOptimizationComparisons: [string, string][] = [
  [
    "Strategic Freight Rate Negotiation",
    "Dispatchers evaluate freight demand, lane conditions, fuel impact, deadhead exposure, reload opportunities, and current market activity before negotiating rates with brokers and shippers. This process helps carriers avoid weak freight decisions, improve rate quality, and maintain stronger operational efficiency across active freight lanes.",
  ],
  [
    "RPM And Reload Performance",
    "A higher rate per mile does not always create stronger profitability if the load increases empty miles, limits reload access, or creates scheduling inefficiencies after delivery. Dispatch planning on freight continuity, reload timing, route efficiency, and operational balance improves RPM consistency and weekly revenue performance.",
  ],
  [
    "Market Monitoring And Lane Analysis",
    "Dispatch operations continuously monitor freight market activity, seasonal lane demand, regional pricing fluctuations, broker trends, and freight availability to position carriers in stronger and more profitable freight markets. This ongoing market analysis supports better load selection and long-term operational stability.",
  ],
];
const routePlanningFeatures: BrokerNetworkFeature[] = [
  {
    title: "Reload coordination for faster freight continuation",
  },
  {
    title: "Freight density planning for stronger regional opportunities",
  },
  {
    title: "Fuel corridor routing to lower operational costs",
  },
  {
    title: "Backhaul management to reduce empty miles",
  },
  {
    title: "Lane optimization to improve weekly RPM",
  },
  {
    title: "Delivery timing alignment for better route efficiency",
  },
];
const operationalStrategyColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Operational Strategy",
  },
  {
    key: "objective",
    label: "Dispatch Objective",
  },
];

const operationalStrategyRows: ComparisonRow[] = [
  {
    factor: "Reload Coordination",
    objective: "Faster freight continuation",
  },
  {
    factor: "Freight Density Planning",
    objective: "Better regional opportunities",
  },
  {
    factor: "Fuel Corridor Routing",
    objective: "Lower operational cost",
  },
  {
    factor: "Backhaul Management",
    objective: "Reduced empty miles",
  },
  {
    factor: "Lane Optimization",
    objective: "Improved weekly RPM",
  },
];
const brokerProtectionServices: Service[] = [
  {
    title: "Accessorial Negotiation and Issue Resolution",
    description:
      "Dispatch operations include detention negotiation, layover coordination, TONU handling, and operational issue resolution throughout the shipment lifecycle. Faster communication improves scheduling consistency and reduces freight disruptions.",
    image:
      "/Dedicated Truck Dispatching/images/15_rectangle_1078.webp",
    imageAlt:
      "Dispatcher coordinating shipment paperwork with a truck driver",
  },
  {
    title: "Operational Verification Systems",
    description:
      "E-Truck Dispatching uses systems such as Carrier411, SaferWatch, and MC verification monitoring to evaluate broker reliability and reduce exposure to payment disputes, fraud risks, and unstable freight operations.",
    image:
      "/Dedicated Truck Dispatching/images/14_rectangle_1076.webp",
    imageAlt: "Freight professionals reviewing verification records",
  },
  {
    title: "Rate Confirmation and Pickup Coordination",
    description:
      "Dedicated dispatchers manage rate confirmations, pickup instructions, appointment scheduling, and delivery coordination directly with brokers to maintain smoother freight movement and reduce operational delays during transportation.",
    image:
      "/Dedicated Truck Dispatching/images/13_rectangle_1077.webp",
    imageAlt: "Business team coordinating freight agreements",
    accent: true,
  },
  {
    title: "Broker Verification and Fraud Prevention",
    description:
      "Modern dispatching must protect carriers from freight fraud, double brokering, unreliable payment practices, and operational risks that continue increasing across the trucking industry. Broker verification is completed before freight confirmation begins.",
    image:
      "/Dedicated Truck Dispatching/images/12_rectangle_1074.webp",
    imageAlt: "Operations team monitoring broker verification systems",
  },
];
const driverCommunicationSteps = [
  [
    "Real-Time Dispatch Communication",
    [
      "Live operational updates",
      "Continuous driver coordination",
      "Faster response handling",
      "Active dispatch monitoring",
      "Improved workflow communication",
    ],
  ],
  [
    "Appointment and Delivery Coordination",
    [
      "Pickup appointment updates",
      "Delivery schedule coordination",
      "Route adjustment support",
      "Timing change communication",
      "Freight status updates",
    ],
  ],
  [
    "Check-Call and Delay Management",
    [
      "Check-call monitoring",
      "Delay resolution support",
      "Transit communication handling",
      "Scheduling issue coordination",
      "Operational disruption management",
    ],
  ],
  [
    "Reload Planning Support",
    [
      "Reload timing coordination",
      "Freight continuation planning",
      "Backhaul communication",
      "Lane continuity support",
      "Reduced downtime planning",
    ],
  ],
  [
    "Emergency and Operational Assistance",
    [
      "Emergency dispatch support",
      "Urgent communication handling",
      "Driver assistance coordination",
      "Operational issue resolution",
      "Continuous dispatch availability",
    ],
  ],
] satisfies ProcessStep[];

const complianceDispatchCards = [
  {
    title: "FMCSA and Hours of Service Coordination",
    description:
      "Dedicated dispatchers plan freight movement around legal driving availability, Hours of Service limitations, rest requirements, and operational safety regulations to reduce compliance-related disruptions and scheduling conflicts.",
    iconSrc:
      "/Dedicated Truck Dispatching/images/16_rectangle_1549.webp",
    iconAlt: "FMCSA and Hours of Service coordination icon",
  },
  {
    title: "Dispatch Timing and Route Planning",
    description:
      "Dispatch timing, delivery scheduling, and route planning are coordinated based on operational limitations, traffic conditions, freight deadlines, and driver availability to maintain safer and more efficient transportation flow.",
    iconSrc:
      "/Dedicated Truck Dispatching/images/17_rectangle_1551.webp",
    iconAlt: "Dispatch timing and route planning icon",
  },
  {
    title: "Documentation Accuracy and Management",
    description:
      "Rate confirmations, carrier packets, insurance documents, Bills of Lading, and Proofs of Delivery must remain accurate throughout freight operations to reduce administrative delays and operational interruptions.",
    iconSrc:
      "/Dedicated Truck Dispatching/images/19_rectangle_1555.webp",
    iconAlt: "Freight documentation management icon",
  },
  {
    title: "Operational Stability and Compliance Support",
    description:
      "Compliance-aware dispatching improves workflow stability, reduces paperwork issues, prevents scheduling conflicts, and supports smoother freight coordination across regional and long-haul operations.",
    iconSrc:
      "/Dedicated Truck Dispatching/images/28_rectangle_1546.webp",
    iconAlt: "Operational stability and compliance support icon",
  },
] satisfies DispatchTechnologyCard[];
export default function dedicatedTruckDispatchingPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Dedicated Truck Dispatching Services for Owner-Operators and Fleets
          </>
        }
        paragraphs={[
          "Freight operations move faster when dispatching is organized around consistency instead of random load booking. Many carriers lose revenue because of poor route planning, delayed broker communication, weak reload coordination, and excessive deadhead miles. A dedicated dispatching structure solves these operational gaps by creating a centralized freight management system focused on profitability and operational continuity.",
          "E-Truck Dispatching provides dedicated truck dispatching services for owner-operators and growing fleets that need stable freight coordination, direct dispatcher communication, better RPM management, and long-term operational support. Instead of working with rotating dispatchers who do not understand your business model, equipment type, or preferred lanes, our system assigns a dedicated dispatcher who manages your operations daily.",
          "This structure improves booking speed, communication accuracy, lane consistency, and freight planning efficiency across dry van, reefer, flatbed, power-only, hotshot, step deck, and box truck operations.",
        ]}
        backgroundImage="/Dedicated Truck Dispatching/images/1_rectangle_1450.webp"
        backgroundAlt="Women in hero section reviewing documents"
      />

      <ComplianceMatrixSection
        heading="What Are Dedicated Truck Dispatching Services?"
        description="Dedicated truck dispatching services assign one dispatcher specifically to a carrier or fleet instead of splitting responsibilities across multiple operations. The dispatcher manages freight coordination, broker communication, scheduling, paperwork, route planning, and daily load management while maintaining direct communication with the carrier."
        cards={dedicatedDispatchCards}
        image="/Dedicated Truck Dispatching/images/4_rectangle_1560.webp"
      />
      <RevenuePanelSection
        heading="How Dedicated Dispatching Works"
        description="Dedicated dispatching begins with operational setup, freight planning, and carrier onboarding before load booking starts. Dispatchers review MC authority, insurance documents, trailer type, preferred regions, and freight goals to build a structured dispatch workflow based on the carrier’s operations."
        groups={dedicatedDispatchGroups}
        image="/Dedicated Truck Dispatching/images/5_rectangle_1558.webp"
        backgroundImage="/Vector 3.svg"
      />
      <SupportColumnsSection
        heading="Freight Load Sourcing and Market Coordination"
        intro="Freight load sourcing requires market analysis, broker coordination, reload planning, and operational evaluation before freight booking decisions are made. Efficient dispatching improves freight quality, lane profitability, and long-term operational consistency."
        image="/Dedicated Truck Dispatching/images/6_rectangle_1426.webp"
        imageAlt="Warehouse employees coordinating freight using a laptop"
        cards={freightMarketCards}
        contentPosition="left"
      />

      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      <ComparisonCardsSection
  heading="Rate Negotiation and RPM Optimization"
  description="Dedicated dispatching improves profitability through strategic rate negotiation, lane analysis, reload planning, and RPM-focused freight selection. Dispatch decisions are based on overall operational performance instead of simply booking available freight."
  comparisons={rateOptimizationComparisons}
  icons={[
    "/Dedicated Truck Dispatching/images/8_rectangle_1545.webp",
    "/Dedicated Truck Dispatching/images/26_rectangle_1545.webp",
    "/Dedicated Truck Dispatching/images/23_rectangle_1643.webp",
  ]}
  iconAlts={[
    "Strategic freight rate negotiation icon",
    "RPM and reload performance icon",
    "Market monitoring and lane analysis icon",
  ]}
/>
    <BrokerNetworkSection
  imagePosition="left"
  featureVariant="bullet"
  heading={
    <>
      Route Planning and Deadhead
      <br />
      Reduction
    </>
  }
  description={
    <p>
      Deadhead Miles Remain One Of The Biggest Profitability Challenges In
      Trucking Operations Because Poor Route Planning Increases Fuel Expenses,
      Delays Reload Opportunities, And Reduces Weekly Revenue Potential.
      Dedicated Dispatching Reduces These Operational Gaps Through Planned
      Freight Sequencing, Reload Synchronization, And Route Optimization To
      Improve Operational Continuity Across Regional And Long-Haul Freight
      Movement.
    </p>
  }
  image="/Dedicated Truck Dispatching/images/31_rectangle_1556.webp"
  imageAlt="Orange freight truck and driver"
  features={routePlanningFeatures}
/>  
  <ComparisonTableSection
  heading=""
  tableTitle=""
  columns={operationalStrategyColumns}
  rows={operationalStrategyRows}
  compactTop
/>    
   <OurServices
  heading={
    <>
      Broker Communication and Carrier
      <br />
      Protection
    </>
  }
  description="Broker communication affects freight movement, scheduling accuracy, payment processing, and operational stability throughout dispatch operations. Dedicated dispatching improves communication flow while reducing delays, disputes, and operational risks."
  services={brokerProtectionServices}
/>   
       <ProcessGridSection
        heading="Driver Communication and Operational Support"
        steps={driverCommunicationSteps}
      />
      
      <DispatchTechnologyGridSection
  heading={
    <>
      Compliance-Aware Dispatch
      <br />
      Coordination
    </>
  }
  image="/Dedicated Truck Dispatching/images/20_rectangle_1565.webp"
  imageAlt="Orange commercial truck used for compliance-aware dispatch coordination"
  cards={complianceDispatchCards}
/>
      
      
      
      
      
        <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      
      
      <FreightTypesSection
        heading={
          <>
            Dedicated Dispatching for
            <br />
            Small Fleets
          </>
        }
        description="Dedicated dispatching helps small fleets manage freight coordination, scheduling, reload planning, and operational communication through a centralized workflow."
        freightTypes={smallFleetBenefits}
        columns={3}
      />
      <DispatchAudienceSection
        heading={
          <>
            Why Owner-Operators Prefer
            <br />
            Dedicated Dispatchers
          </>
        }
        audiences={ownerOperatorBenefits}
      />
      <BenefitsGridSection
        heading={
          <>
            Why Choose
            <br />
            E-Truck
            <br />
            Dispatching
          </>
        }
        description="E-Truck Dispatching operates as a long-term operational partner focused on communication consistency, profitability-driven freight planning, and efficient dispatch coordination for owner-operators and growing fleets."
        benefits={whyChooseBenefits}
      />
      <BrokerNetworkSection
        heading={
          <>
            Industries and Freight Segments
            <br />
            We Support
          </>
        }
        description={
          <div className="space-y-3">
            <p>
              E-Truck Dispatching coordinates freight movement across multiple
              freight sectors including retail distribution, manufacturing,
              construction materials, agriculture, food logistics, automotive
              freight, industrial equipment, and medical supply transportation.
            </p>

            <p>
              Different industries require different operational approaches.
              Construction freight often requires flatbed coordination and route
              analysis, while reefer freight depends heavily on timing precision
              and appointment scheduling.
            </p>

            <p>
              Our dispatch operations adapt based on freight sensitivity,
              delivery urgency, regional demand patterns, and trailer
              requirements to improve operational efficiency across different
              freight segments.
            </p>
          </div>
        }
        image="/Dedicated Truck Dispatching/images/31_rectangle_1556.webp"
        imageAlt="E-Truck Dispatching truck and driver"
        features={industryFeatures}
      />
      <FAQSection
        heading="Frequently Asked Questions"
        description="Get answers about dedicated truck dispatching, load sourcing, rate negotiation, owner-operator support, and small-fleet coordination."
        image="/Conestoga Dispatch Service/images/33_rectangle_1441.webp"
        imageAlt="Dispatcher coordinating freight operations"
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
