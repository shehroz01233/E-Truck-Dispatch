import HeroSection from "@/app/components/HeroSection";
import FeatureIntroSection from "@/app/components/FeatureIntroSection";
import ComplianceMatrixSection, {
  type ComplianceCard,
} from "@/app/components/ComplianceMatrixSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import SupportColumnsSection from "@/app/components/SupportColumnsSection";
import BenefitsGridSection from "@/app/components/BenefitsGridSection";
import ComparisonTableSection, {
  type ComparisonColumn,
  type ComparisonRow,
} from "@/app/components/ComparisonTableSection";
import DispatchTechnologyGridSection, {
  type DispatchTechnologyCard,
} from "@/app/components/DispatchTechnologyGridSection";
import OurServices, { type Service } from "@/app/components/OurServices";
import AudienceBenefitsSection from "@/app/components/AudienceBenefitsSection";
import ProcessGridSection from "@/app/components/ProcessGridSection";
import DispatchAudienceSection from "../components/DispatchAudienceSection";
import FAQSection from "../components/FAQs";
import QuestionStats from "../components/QuestionStats";

const powerOnlyHeroParagraphs = [
  "Power only trucking is built for carriers that want to keep their tractor moving without investing in trailer ownership. Instead of hauling your own trailer, you pull shipper-owned, broker-owned, or rental trailers across dedicated lanes, drop-and-hook routes, intermodal terminals, warehouse routes, and distribution networks.",
  "At E-Truck Dispatching, our power only dispatch service is designed for owner-operators and small fleets that want consistent freight, faster reloads, lower deadhead miles, and higher weekly revenue. We manage the operational side of dispatching so drivers can stay focused on hauling profitable loads.",
  "From trailer assignment and broker negotiation to route optimization and factoring paperwork, our dispatch system handles the complete dispatch-to-delivery workflow for power only operations.",
];

const powerOnlyTrailerUtilizationFeatures = [
  "Matching tractors with available trailer freight",
  "Negotiating power only load rates with brokers",
  "Planning reloads and trailer repositioning",
  "Managing dispatch paperwork and POD handling",
  "Coordinating factoring and payment follow-up",
];

const powerOnlyIncludedServiceCards: ComplianceCard[] = [
  {
    title: "Drop-and-Hook Freight",
    intro:
      "Drop-and-hook freight operations improve efficiency by allowing drivers to exchange preloaded trailers without waiting for live loading. These operations reduce detention time, increase trailer utilization, and support faster freight movement between warehouses, distribution centers, and shipping facilities.",
    items: [],
  },
  {
    title: "Trailer Repositioning",
    intro:
      "Trailer repositioning helps fleets balance trailer availability across terminals, warehouses, and customer facilities. Dispatch coordination ensures empty and loaded trailers are moved efficiently to reduce operational delays and improve equipment utilization.",
    items: [],
  },
  {
    title: "Intermodal and Port Operations",
    intro:
      "Intermodal and port operations coordinate container movement between ports, rail terminals, warehouses, and trucking routes. These operations support continuous cargo flow, scheduled freight transfers, and efficient regional distribution planning.",
    items: [],
  },
  {
    title: "Dedicated Retail and Warehouse Lanes",
    intro:
      "Dedicated retail lanes and warehouse trailer pools support recurring freight movement for distribution centers and supply chain networks. Consistent scheduling and trailer availability improve delivery efficiency and reduce loading disruptions.",
    items: [],
  },
];

const powerOnlyFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const powerOnlyFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const powerOnlyPerformanceSystemCards = [
  {
    title: "Trailer Assignment and Freight Matching",
    items: [
      "Trailer compatibility checks",
      "Weight distribution review",
      "Pickup deadline coordination",
      "Hook requirement verification",
      "Delivery schedule planning",
      "Freight lane evaluation",
    ],
  },
  {
    title: "Trailer Types We Coordinate",
    items: [
      "Dry van trailers",
      "Reefer trailers",
      "Flatbed trailers",
      "Step deck trailers",
      "Conestoga trailers",
      "Intermodal chassis",
    ],
  },
  {
    title: "Market and Freight Analysis",
    items: [
      "Load-to-truck ratio tracking",
      "Seasonal freight demand review",
      "Fuel cost analysis",
      "Lane density evaluation",
      "Regional freight imbalance checks",
      "Trailer repositioning planning",
    ],
  },
  {
    title: "Broker Negotiation and Rate Optimization",
    items: [
      "Base rate negotiation",
      "Detention pay handling",
      "Layover compensation",
      "TONU charge negotiation",
      "Fuel surcharge management",
      "Trailer relocation fees",
    ],
  },
];

const powerOnlyDeadheadReductionBenefits = [
  {
    title: "Backhaul Matching",
    description:
      "Our dispatchers secure return freight before delivery whenever possible to reduce empty miles and improve operational continuity. This strategy helps carriers maintain consistent revenue flow, reduce fuel waste, and avoid unnecessary repositioning between freight assignments.",
  },
  {
    title: "Reload Sequencing",
    description:
      "Loads are planned based on reload availability, freight timing, and nearby market demand instead of isolated trip movement. Strategic sequencing improves equipment utilization, reduces downtime, and supports continuous trailer movement across active freight lanes.",
  },
  {
    title: "Regional Freight Planning",
    description:
      "We prioritize freight corridors with stable outbound and inbound demand to improve scheduling consistency and reduce empty travel distance. Regional planning helps carriers stay within profitable markets with stronger freight availability and balanced load opportunities.",
  },
  {
    title: "Trailer Repositioning Opportunities",
    description:
      "Empty trailer moves are coordinated to reposition equipment toward active freight zones instead of allowing tractors to run empty. This improves trailer utilization, supports faster reload access, and reduces non-revenue mileage across operations.",
  },
  {
    title: "Lane and Freight Density Analysis",
    description:
      "Dispatch planning uses lane analysis and freight density mapping to identify stronger reload markets and more profitable freight corridors. These insights improve route planning, reduce unnecessary detours, and support long-term operational efficiency.",
  },
];

const powerOnlyOwnerOperatorBenefits = [
  {
    title: "Lower Maintenance Costs",
    iconSrc: "/Power only Dispatch Service/images/11_rectangle_1537.webp",
    iconAlt: "Lower maintenance costs icon",
  },
  {
    title: "Reduced Tire Expenses",
    iconSrc: "/Power only Dispatch Service/images/12_rectangle_1545.webp",
    iconAlt: "Reduced tire expenses icon",
  },
  {
    title: "Fewer Registration Fees",
    iconSrc: "/Power only Dispatch Service/images/13_rectangle_1539.webp",
    iconAlt: "Fewer registration fees icon",
  },
  {
    title: "Lower Insurance Costs",
    iconSrc: "/Power only Dispatch Service/images/14_rectangle_1546.webp",
    iconAlt: "Lower insurance costs icon",
  },
  {
    title: "No Trailer Financing Burden",
    iconSrc: "/Power only Dispatch Service/images/15_rectangle_1541.webp",
    iconAlt: "No trailer financing burden icon",
  },
  {
    title: "Higher Tractor Productivity",
    iconSrc: "/Power only Dispatch Service/images/16_rectangle_1547.webp",
    iconAlt: "Higher tractor productivity icon",
  },
];

const powerOnlyOwnerOperatorColumns: ComparisonColumn[] = [
  {
    key: "advantage",
    label: "Operational Advantage",
  },
  {
    key: "impact",
    label: "Business Impact",
  },
];

const powerOnlyOwnerOperatorRows: ComparisonRow[] = [
  {
    factor: "No trailer ownership",
    advantage: "No trailer ownership",
    impact: "Lower startup cost",
  },
  {
    factor: "Faster reload cycles",
    advantage: "Faster reload cycles",
    impact: "Higher weekly revenue",
  },
  {
    factor: "Drop-and-hook operations",
    advantage: "Drop-and-hook operations",
    impact: "Less waiting time",
  },
  {
    factor: "Flexible trailer access",
    advantage: "Flexible trailer access",
    impact: "More freight opportunities",
  },
  {
    factor: "Dedicated dispatching",
    advantage: "Dedicated dispatching",
    impact: "Better load consistency",
  },
  {
    factor: "Reduced downtime",
    advantage: "Reduced downtime",
    impact: "Higher tractor utilization",
  },
];

const powerOnlyComplianceFeatures = [
  "MC authority status",
  "USDOT verification",
  "Insurance validation",
  "ELD compliance",
  "Hours of Service availability",
  "Weight restrictions",
  "Trailer inspection requirements",
  "Route legality",
  "Broker setup verification",
];

const powerOnlyDocumentationColumns: ComparisonColumn[] = [
  {
    key: "document",
    label: "Document",
  },
  {
    key: "purpose",
    label: "Operational Purpose",
  },
];

const powerOnlyDocumentationRows: ComparisonRow[] = [
  {
    factor: "Rate Confirmation",
    document: "Rate Confirmation",
    purpose: "Load agreement",
  },
  {
    factor: "Bill of Lading (BOL)",
    document: "Bill of Lading (BOL)",
    purpose: "Freight verification",
  },
  {
    factor: "Proof of Delivery (POD)",
    document: "Proof of Delivery (POD)",
    purpose: "Delivery confirmation",
  },
  {
    factor: "Carrier Packet",
    document: "Carrier Packet",
    purpose: "Broker onboarding",
  },
  {
    factor: "Insurance Certificate",
    document: "Insurance Certificate",
    purpose: "Compliance proof",
  },
  {
    factor: "Dispatch Sheet",
    document: "Dispatch Sheet",
    purpose: "Route instructions",
  },
];

const powerOnlyTechnologyCards: DispatchTechnologyCard[] = [
  {
    title: "Load Board Platforms",
    bullets: [
      "DAT Freight & Analytics",
      "Truckstop.com access",
      "Broker freight marketplaces",
      "Load matching systems",
      "Freight availability tracking",
    ],
    iconSrc: "/Power only Dispatch Service/images/18_rectangle_1549.webp",
    iconAlt: "Load board platforms icon",
  },
  {
    title: "Operational Systems",
    bullets: [
      "Transportation Management Systems",
      "Automated dispatch workflow",
      "Digital paperwork handling",
      "Driver communication systems",
      "Load scheduling coordination",
    ],
    iconSrc: "/Power only Dispatch Service/images/20_rectangle_1553.webp",
    iconAlt: "Operational systems icon",
  },
  {
    title: "Visibility Tools",
    bullets: [
      "GPS tracking systems",
      "Geofencing technology",
      "Live route monitoring",
      "Delivery status tracking",
      "Real-time freight visibility",
    ],
    iconSrc: "/Power only Dispatch Service/images/19_rectangle_1551.webp",
    iconAlt: "Visibility tools icon",
  },
  {
    title: "Operational Improvements",
    bullets: [
      "Faster dispatch speed",
      "Better trailer coordination",
      "Improved freight visibility",
      "Higher delivery accuracy",
      "Smarter reload planning",
    ],
    iconSrc: "/Power only Dispatch Service/images/21_rectangle_1555.webp",
    iconAlt: "Operational improvements icon",
  },
];

const powerOnlyDispatchProblemCards: Service[] = [
  {
    title: "Idle Tractor Time",
    description:
      "Drivers lose valuable revenue when tractors remain inactive during live loading, unloading delays, or trailer availability issues. Excessive idle time increases fuel waste, lowers productivity, and reduces overall operational efficiency for carriers.",
    image: "/Power only Dispatch Service/images/26_rectangle_1078.webp",
    imageAlt: "Driver beside power only tractor experiencing idle time",
  },
  {
    title: "Seasonal Freight Volatility",
    description:
      "Retail, agriculture, and construction seasons create fluctuating trailer demand across regional freight markets. Dispatch planning and trailer repositioning help carriers manage unstable freight volume, reduce operational disruptions, and maintain load consistency.",
    image: "/Power only Dispatch Service/images/25_rectangle_1076.webp",
    imageAlt: "Warehouse workers managing seasonal freight volume",
  },
  {
    title: "Trailer Pool Imbalance",
    description:
      "Trailer pool imbalance occurs when some facilities accumulate excess trailers while other locations experience equipment shortages. This imbalance disrupts freight scheduling, delays pickups, reduces trailer utilization, and increases repositioning costs across freight networks.",
    image: "/Power only Dispatch Service/images/24_rectangle_1077.webp",
    imageAlt: "Dispatch support handling trailer pool imbalance",
    accent: true,
  },
  {
    title: "Warehouse Congestion",
    description:
      "Warehouse congestion creates dock delays that slow freight throughput and increase detention time for drivers and carriers. Poor dock coordination affects trailer movement, scheduling accuracy, and delivery timelines across distribution operations.",
    image: "/Power only Dispatch Service/images/23_rectangle_1074.webp",
    imageAlt: "Warehouse team coordinating freight congestion",
  },
];

const powerOnlyGetStartedBenefits = [
  {
    title:
      "Reduced empty miles through strategic reload planning and lane optimization",
    iconSrc: "/Power only Dispatch Service/images/27_tick_icon.webp",
    iconAlt: "Power only dispatch benefit check icon",
  },
  {
    title:
      "Better freight rates through market analysis and broker rate negotiation",
    iconSrc: "/Power only Dispatch Service/images/27_tick_icon.webp",
    iconAlt: "Power only dispatch benefit check icon",
  },
  {
    title:
      "Improved reload timing to maintain continuous freight movement and reduce downtime",
    iconSrc: "/Power only Dispatch Service/images/27_tick_icon.webp",
    iconAlt: "Power only dispatch benefit check icon",
  },
  {
    title:
      "Strong operational control with broker verification, payment tracking, and dispatch coordination",
    iconSrc: "/Power only Dispatch Service/images/27_tick_icon.webp",
    iconAlt: "Power only dispatch benefit check icon",
  },
];

const powerOnlyDispatchServiceBenefits = [
  "Dedicated Dispatcher: One dispatcher manages your operations and lanes.",
  "No Forced Dispatch: Drivers approve every load before dispatch.",
  "24/7 Communication: Support stays active during all freight stages.",
  "Broker Negotiation Support: We negotiate better freight rates and pay.",
  "Back-Office Assistance: We handle paperwork, invoicing, and PODs.",
];

const powerOnlyDispatchProcessSteps: [
  string,
  { bullets: string[] },
][] = [
  [
    "Carrier Setup",
    {
      bullets: [
        "MC authority",
        "Insurance documents",
        "W-9",
        "ELD setup",
        "Dispatch agreement",
      ],
    },
  ],
  [
    "Lane Planning",
    {
      bullets: [
        "Preferred regions",
        "Freight preferences",
        "Trailer compatibility",
        "Weekly revenue targets",
        "Deadhead limitations",
      ],
    },
  ],
  [
    "Freight Sourcing & Negotiation",
    {
      bullets: [
        "High-paying power only loads",
        "Trailer repositioning opportunities",
        "Dedicated freight lanes",
        "Backhaul freight",
        "Reload opportunities",
      ],
    },
  ],
  [
    "Dispatch Coordination",
    {
      bullets: [
        "Pickup scheduling",
        "Broker communication",
        "Route planning",
        "Driver updates",
        "Delivery coordination",
      ],
    },
  ],
  [
    "Paperwork & Payment Support",
    {
      bullets: [
        "PODs are submitted",
        "Invoices are organized",
        "Factoring paperwork is prepared",
        "Broker follow-ups are managed",
      ],
    },
  ],
];
const powerOnlyDispatchAudiences = [
  {
    title: "Owner Operators",
    description:
      "Independent carriers looking for consistent freight opportunities, reduced downtime, stronger reload planning, and operational support without managing broker communication and paperwork independently.",
  },
  {
    title: "Small Fleets",
    description:
      "Small fleets needing structured dispatch coordination, load management, route planning, and ongoing operational support to improve equipment utilization and freight consistency.",
  },
  {
    title: "New MC Authorities",
    description:
      "New carriers requiring broker setup assistance, compliance coordination, lane planning, and dispatch guidance to establish stable freight operations and build broker relationships.",
  },
  {
    title: "Intermodal Operators",
    description:
      "Drivers hauling chassis and container freight from ports, rail yards, and terminals while requiring efficient scheduling, container coordination, and regional freight planning support.",
  },
  {
    title: "Dedicated Lane Carriers",
    description:
      "Operators focused on stable freight corridors, recurring delivery routes, predictable reload opportunities, and consistent freight movement across regional and long-haul operations.",
  },
];
const eTruckComparisonColumns = [
  {
    key: "eTruck",
    label: "E-Truck Dispatching",
  },
  {
    key: "generic",
    label: "Generic Dispatch Companies",
  },
];

const eTruckComparisonRows = [
  {
    factor: "Deadhead optimization",
    eTruck: "Deadhead optimization",
    generic: "Random load booking",
  },
  {
    factor: "Dedicated dispatcher",
    eTruck: "Dedicated dispatcher",
    generic: "Shared dispatch pool",
  },
  {
    factor: "Power only specialization",
    eTruck: "Power only specialization",
    generic: "General freight focus",
  },
  {
    factor: "Reload planning",
    eTruck: "Reload planning",
    generic: "One-load approach",
  },
  {
    factor: "Broker rate negotiation",
    eTruck: "Broker rate negotiation",
    generic: "Minimal negotiation",
  },
  {
    factor: "Trailer repositioning support",
    eTruck: "Trailer repositioning support",
    generic: "Limited operational coordination",
  },
  {
    factor: "Back-office support",
    eTruck: "Back-office support",
    generic: "Basic dispatch only",
  },
];

const powerOnlyDispatchFaqs = [
  {
    question: "What is power only dispatch service?",
    answer:
      "Power only dispatch service helps carriers find and manage loads where the trailer is provided by the shipper or broker.",
  },
  {
    question: "Do I need my own trailer for power only trucking?",
    answer:
      "No. Power only carriers provide the tractor, while the shipper, broker, or customer provides the loaded or empty trailer.",
  },
  {
    question: "What types of trailers can power only trucks haul?",
    answer:
      "Power only trucks can haul dry van, refrigerated, flatbed, container chassis, and other compatible trailers provided by shippers or brokers.",
  },
  {
    question: "How does power only dispatch reduce deadhead miles?",
    answer:
      "Dispatchers coordinate reloads, trailer locations, delivery schedules, and preferred lanes to reduce empty travel between loads.",
  },
  {
    question: "Is power only trucking profitable for owner-operators?",
    answer:
      "Power only trucking can be profitable when carriers secure consistent loads, limit deadhead miles, negotiate strong rates, and control operating costs.",
  },
  {
    question: "What documents are required for power only freight?",
    answer:
      "Carriers generally need active MC and DOT authority, insurance documents, a W-9, a carrier packet, equipment details, and required compliance records.",
  },
];
const powerOnlyDispatchStats = [
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
export default function PowerOnlyDisptachService() {
  return (
    <main>
    <HeroSection
  h1={
    <>
      Power Only Dispatch Service For
      <br />
      Owner Operators &amp; Small Fleets
    </>
  }
  fixedTitle="Power Only Dispatch Service"
  typingTitles={[
    "for Owner-Operators",
    "for Small Trucking Fleets",
    "Built for Trailer Flexibility",
    "Focused on Consistent Load Movement",
  ]}
  paragraphs={powerOnlyHeroParagraphs}
  backgroundImage="/Power only Dispatch Service/images/1_rectangle_1450.webp"
  backgroundAlt="Power only dispatch service truck yard"
/>
      <FeatureIntroSection
        heading={
          <>
            How Power Only Dispatch
            <br />
            Improves Trailer Utilization
          </>
        }
        description="Power Only Dispatch Is Designed To Keep Tractor Units Moving Continuously Without The Operational Burden Of Trailer Ownership. Instead Of Managing Trailer Maintenance, Storage, And Equipment Costs, Carriers Focus Entirely On Hauling Broker-Owned, Shipper-Owned, And Warehouse-Assigned Trailers Across High-Demand Freight Lanes."
        features={powerOnlyTrailerUtilizationFeatures}
        image="/Power only Dispatch Service/images/4_rectangle_1557.webp"
        imageAlt="Power only truck reference views"
      />
      <ComplianceMatrixSection
        heading="What Our Power Only Dispatch Services Includes?"
        description="A power-only dispatch service manages freight operations where the carrier provides only the tractor unit while the trailer is supplied by the shipper, broker, warehouse, or logistics provider."
        cards={powerOnlyIncludedServiceCards}
        image="/Power only Dispatch Service/images/5_rectangle_1560.webp"
        imageAlt="Warehouse worker loading power only freight"
      />
      <FeatureIntroSection
        heading="How Power Only Trucking Works"
        description="Power only trucking operates when a carrier provides the tractor unit while the broker, shipper, or customer provides the trailer. Dispatchers coordinate trailer pickup, compliance verification, scheduling, and delivery operations to keep freight moving efficiently."
        image="/Power only Dispatch Service/images/6_rectangle_1558.webp"
        imageAlt="Black power only tractor with orange background"
      />
      <VisionFormSection
        heading={
          <>
            E Truck
            <br />
            Dispatching
          </>
        }
        paragraphs={powerOnlyFormParagraphs}
        fields={powerOnlyFormFields}
      />
      <SupportColumnsSection
        heading="What Makes a High-Performance Power Only Dispatch System?"
        intro="A high-performance power only dispatch system improves load efficiency, scheduling, and profitability."
        image="/Power only Dispatch Service/images/10_rectangle_1426.webp"
        imageAlt="Dispatcher coordinating power only freight"
        cards={powerOnlyPerformanceSystemCards}
      />
      <BenefitsGridSection
        heading={
          <>
            How E-Truck
            <br />
            Dispatching Reduces
            <br />
            Deadhead Miles
          </>
        }
        benefits={powerOnlyDeadheadReductionBenefits}
      />
      <BenefitsGridSection
        heading={
          <>
            Power Only
            <br />
            Dispatch for
            <br />
            Owner
            <br />
            Operators
          </>
        }
        description="Many Owner-Operators Choose Power Only Freight Because It Removes The Financial Burden Of Trailer Ownership."
        benefits={powerOnlyOwnerOperatorBenefits}
      />
      <ComparisonTableSection
        heading=""
        tableTitle="Benefits for Owner Operators"
        columns={powerOnlyOwnerOperatorColumns}
        rows={powerOnlyOwnerOperatorRows}
        compactTop
      />
      <VisionFormSection
        heading={
          <>
            E Truck
            <br />
            Dispatching
          </>
        }
        paragraphs={powerOnlyFormParagraphs}
        fields={powerOnlyFormFields}
      />
      <FeatureIntroSection
        heading={
          <>
            Compliance System Behind Our
            <br />
            Dispatch Operations
          </>
        }
        description={[
          "Power Only Trucking Still Requires Strict FMCSA Compliance And Operational Control.",
          "A Profitable Load Means Nothing If Compliance Failures Create Violations, Shutdowns, Or Insurance Problems.",
          "Our Dispatch Process Includes Compliance Coordination Before Every Load Is Assigned.",
          <span key="compliance-heading" className="font-bold text-white">
            Compliance Areas We Monitor
          </span>,
        ]}
        features={powerOnlyComplianceFeatures}
        image="/Power only Dispatch Service/images/17_rectangle_1556.webp"
        imageAlt="White power only tractor for compliance dispatch operations"
      />
      <ComparisonTableSection
        heading=""
        tableTitle="Documentation Managed by Our Dispatch Team"
        columns={powerOnlyDocumentationColumns}
        rows={powerOnlyDocumentationRows}
        compactTop
      />
      <DispatchTechnologyGridSection
        heading={
          <>
            Technology Used in Modern
            <br />
            Power Only Dispatching
          </>
        }
        image="/Power only Dispatch Service/images/22_rectangle_1565.webp"
        imageAlt="Purple power only tractor used for dispatch technology"
        cards={powerOnlyTechnologyCards}
      />
      <OurServices
        heading={
          <>
            Problems Power Only Dispatch
            <br />
            Solves
          </>
        }
        services={powerOnlyDispatchProblemCards}
      />
      <VisionFormSection
        heading={
          <>
            E Truck
            <br />
            Dispatching
          </>
        }
        paragraphs={powerOnlyFormParagraphs}
        fields={powerOnlyFormFields}
      />
      <BenefitsGridSection
        heading={
          <>
            How to Get Started with Power Only
            <br />
            Dispatching Services
          </>
        }
        benefits={powerOnlyGetStartedBenefits}
      />
      <AudienceBenefitsSection
        showAudiences={false}
        heading="What Drivers Get With Our Dispatch Service"
        benefits={powerOnlyDispatchServiceBenefits}
      />
      <ProcessGridSection
        heading="Our Power Only Dispatch Process"
        steps={powerOnlyDispatchProcessSteps}
      />
      <DispatchAudienceSection
  heading={
    <>
      Who Our Power Only Dispatch Service Is
      <br />
      Built For
    </>
  }
  audiences={powerOnlyDispatchAudiences}
/>
    <ComparisonTableSection
  heading="Why E-Truck Dispatching Is Different"
  tableTitle="Many dispatch companies focus only on booking freight. Our dispatch model focuses on operational profitability."
  columns={eTruckComparisonColumns}
  rows={eTruckComparisonRows}
  compactTop
/>  
     <FAQSection
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Power Only Dispatch Service/images/37_rectangle_1441.webp"
  imageAlt="Dispatcher coordinating power only freight operations from a warehouse office"
  faqs={powerOnlyDispatchFaqs}
    />
    <QuestionStats
  heading="Still Have Questions?"
  description="Our billing experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={powerOnlyDispatchStats}
/>

     
    </main>
  );
}
