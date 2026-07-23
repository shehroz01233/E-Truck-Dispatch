import BenefitsGridSection from "../components/BenefitsGridSection";
import BrokerNetworkSection from "../components/BrokerNetworkSection";
import ComparisonTableSection, {
  ComparisonColumn,
  ComparisonRow,
} from "../components/ComparisonTableSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import DispatchTechnologyGridSection, {
  DispatchTechnologyCard,
} from "../components/DispatchTechnologyGridSection";
import FAQSection, { FAQItem } from "../components/FAQs";
import FreightTypesSection, {
  FreightTypeCard,
} from "../components/FreightTypesSection";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import ProcessGridSection from "../components/ProcessGridSection";
import QuestionStats from "../components/QuestionStats";
import RevenuePanelSection, {
  RevenueGroup,
} from "../components/RevenuePanelSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";
const driverHiringCards = [
  {
    title: "Compliance Verification Systems",
    items: [
      "CDL verification",
      "DOT compliance checks",
      "Drug testing coordination",
      "Safety history review",
      "Medical certificate validation",
      "Driver file management",
    ],
  },
  {
    title: "Freight-Specific Driver Matching",
    items: [
      "Trailer-type matching",
      "Experience-based assignments",
      "Route familiarity checks",
      "Specialized freight evaluation",
      "Oversize load qualification",
      "Regional driver allocation",
    ],
  },
  {
    title: "Dispatch and Fleet Coordination",
    items: [
      "Driver availability tracking",
      "Dispatch onboarding support",
      "Load scheduling alignment",
      "Route planning assistance",
      "Communication coordination",
      "Deadhead reduction planning",
    ],
  },
  {
    title: "Driver Retention and Stability",
    items: [
      "Turnover reduction",
      "Fleet continuity support",
      "Consistent freight movement",
      "Performance monitoring",
      "Workload management",
      "Long-term workforce planning",
    ],
  },
];
const driverRecruitmentCards = [
  {
    title: "Freight-Specific Driver Matching",
    description:
      "Different freight operations require different driver skill sets, operational experience, and safety awareness. Matching drivers with the correct freight type helps reduce cargo risk, delivery delays, compliance violations, and operational disruptions.",
    iconSrc: "/Driver Recruiting/images/5_rectangle_1549.webp",
    iconAlt: "Freight-specific driver matching icon",
  },
  {
    title: "Multi-Equipment Hiring Support",
    description:
      "Our recruitment process supports multiple trucking sectors, including dry van, reefer, flatbed, step deck, power-only, and dedicated freight operations. Drivers are evaluated based on equipment familiarity, freight handling experience, and operational consistency.",
    iconSrc: "/Driver Recruiting/images/6_rectangle_1551.webp",
    iconAlt: "Multi-equipment driver hiring support icon",
  },
  {
    title: "Long-Haul and Regional Experience Evaluation",
    description:
      "Long-haul drivers require experience with Hours of Service management, ELD compliance, fuel planning, and multi-state coordination. Regional and local drivers require stronger lane familiarity, appointment scheduling awareness, and route optimization knowledge.",
    iconSrc: "/Driver Recruiting/images/8_rectangle_1555.webp",
    iconAlt: "Driver experience evaluation icon",
  },
  {
    title: "Performance and Retention Optimization",
    description:
      "Proper driver-to-freight alignment improves operational stability, dispatch efficiency, delivery performance, and long-term driver retention. Structured matching systems also support safer operations and more consistent fleet productivity.",
    iconSrc: "/Driver Recruiting/images/7_rectangle_1553.webp",
    iconAlt: "Driver performance and retention optimization icon",
  },
] satisfies DispatchTechnologyCard[];
const verificationColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Verification Process",
  },
  {
    key: "purpose",
    label: "Purpose",
  },
];

const verificationRows: ComparisonRow[] = [
  {
    factor: "CDL Validation",
    purpose: "Confirms commercial driving eligibility",
  },
  {
    factor: "MVR Review",
    purpose: "Evaluates driving behavior and violations",
  },
  {
    factor: "PSP Reports",
    purpose: "Reviews previous safety performance",
  },
  {
    factor: "Clearinghouse Verification",
    purpose: "Checks DOT drug and alcohol compliance",
  },
  {
    factor: "Medical Certificate Review",
    purpose: "Confirms DOT physical qualification",
  },
  {
    factor: "Employment Verification",
    purpose: "Validates operational experience",
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
type ProcessStep = [title: string, content: string[]];

const dispatchIntegratedHiringSteps = [
  [
    "Dispatch-Integrated Driver Recruitment",
    [
      "Recruitment aligned with dispatch operations",
      "Freight and lane-based hiring support",
      "Equipment compatibility evaluation",
      "Scheduling coordination systems",
      "Operational workflow integration",
    ],
  ],
  [
    "Freight and Equipment Compatibility",
    [
      "Trailer-specific driver matching",
      "Freight handling experience validation",
      "Reefer, flatbed, and dry van alignment",
      "Specialized load familiarity checks",
      "Equipment operation assessment",
    ],
  ],
  [
    "Lane and Route Optimization",
    [
      "Lane-specific driver assignment",
      "Route familiarity evaluation",
      "Regional and long-haul coordination",
      "Delivery schedule optimization",
      "Route consistency improvement",
    ],
  ],
  [
    "Operational Efficiency Improvement",
    [
      "Fuel efficiency support",
      "Deadhead reduction planning",
      "Better dispatch coordination",
      "Improved delivery timing",
      "Higher driver productivity",
    ],
  ],
  [
    "Long-Term Fleet Stability",
    [
      "Reduced operational mismatches",
      "Lower driver turnover risk",
      "Consistent freight movement",
      "Stronger RPM performance",
      "Improved fleet reliability",
    ],
  ],
] satisfies ProcessStep[];
const driverShortageGroups: RevenueGroup[] = [
  {
    title: "Growing Pressure on Modern Carriers",
    intro: [
      "Modern trucking operations require faster and more structured hiring systems capable of supporting freight continuity, dispatch coordination, compliance management, delivery performance, and overall fleet productivity without creating onboarding delays.",
    ],
  },
  {
    title: "Limitations of Traditional Recruitment Systems",
    intro: [
      "Traditional recruiting methods often rely on slow manual processes that create screening delays, incomplete driver verification, weak qualification filtering, and operational mismatches between drivers, freight lanes, and equipment requirements.",
    ],
  },
  {
    title: "Increased Demand for Specialized Drivers",
    intro: [
      "Reefer, flatbed, step deck, and specialized freight operations require experienced drivers with equipment-specific knowledge, cargo handling expertise, route familiarity, and stronger operational safety awareness to maintain reliable transportation performance.",
    ],
  },
];
const driverOnboardingCards = [
  {
    title: "Dispatch Communication Integration",
    items: [
      "Dispatcher communication procedures",
      "Load update coordination",
      "Route communication standards",
      "Emergency contact workflows",
      "Delivery status reporting",
      "Broker communication guidelines",
      "Scheduling coordination support",
    ],
  },
  {
    title: "ELD and System Coordination",
    items: [
      "ELD system familiarization",
      "Logbook management guidance",
      "Hours of Service coordination",
      "Device setup assistance",
      "Tracking system integration",
      "Compliance monitoring support",
      "Technical workflow guidance",
    ],
  },
  {
    title: "Safety and Compliance Preparation",
    items: [
      "Safety policy orientation",
      "DOT compliance review",
      "Drug and alcohol policy guidance",
      "Driver qualification verification",
      "Medical certificate review",
      "Insurance documentation checks",
      "Regulatory compliance coordination",
    ],
  },
  {
    title: "Workflow Familiarization and Training",
    items: [
      "Dispatch workflow introduction",
      "Freight handling procedures",
      "Route planning coordination",
      "Appointment scheduling awareness",
      "Documentation handling processes",
      "Carrier operation standards",
      "Daily workflow adaptation",
    ],
  },
  {
    title: "Carrier Setup and Documentation",
    items: [
      "Insurance verification support",
      "Carrier profile setup",
      "Compliance documentation review",
      "Agreement and policy verification",
      "Driver record management",
      "Freight operation requirements",
      "Dispatch access configuration",
    ],
  },
  {
    title: "Operational Readiness and Performance",
    items: [
      "Faster onboarding transition",
      "Improved dispatch responsiveness",
      "Reduced operational confusion",
      "Better communication efficiency",
      "Stronger delivery coordination",
      "Increased workflow consistency",
      "Improved fleet integration",
    ],
  },
];

export const safetyFocusedHiringCards: FreightTypeCard[] = [
  {
    title: "Safety History and Compliance Evaluation",
    description:
      "Drivers are evaluated through detailed MVR analysis, accident history reviews, employment verification, compliance checks, and operational behavior assessments. This process helps identify drivers with stronger safety awareness, stable work history, and better long-term operational reliability for active freight operations.",
    iconSrc: "/Driver Recruiting/images/16_rectangle_1607.webp",
    iconAlt: "Safety history and compliance evaluation",
  },
  {
    title: "Risk Reduction and Operational Stability",
    description:
      "Safety-focused recruitment helps reduce accident exposure, cargo damage risk, insurance complications, and dispatch disruptions. Proper screening also improves operational consistency by ensuring drivers understand safety procedures, compliance expectations, and responsible freight handling practices.",
    iconSrc: "/Driver Recruiting/images/17_rectangle_1643.webp",
    iconAlt: "Risk reduction and operational stability",
  },
  {
    title: "Long-Term Fleet Reliability and Growth",
    description:
      "A stable fleet depends heavily on disciplined drivers with strong operational consistency and professional driving habits. Hiring safety-conscious drivers supports long-term business continuity, improves fleet reliability, and creates stronger operational performance across daily transportation activities.",
    iconSrc: "/Driver Recruiting/images/18_rectangle_1645.webp",
    iconAlt: "Long-term fleet reliability and growth",
  },
];
const imagePath = "/Driver%20Recruiting/images";

const driverRetentionBenefits = [
  {
    title: "Poor Dispatch Communication",
    iconSrc: `${imagePath}/19_rectangle_1537.webp`,
    iconAlt: "Poor dispatch communication icon",
  },
  {
    title: "Unrealistic Scheduling Expectations",
    iconSrc: `${imagePath}/21_rectangle_1539.webp`,
    iconAlt: "Unrealistic scheduling expectations icon",
  },
  {
    title: "Inconsistent Freight Availability",
    iconSrc: `${imagePath}/23_rectangle_1541.webp`,
    iconAlt: "Inconsistent freight availability icon",
  },
  {
    title: "Lane Dissatisfaction Issues",
    iconSrc: `${imagePath}/20_rectangle_1545.webp`,
    iconAlt: "Lane dissatisfaction issues icon",
  },
  {
    title: "Operational Confusion During Workflows",
    iconSrc: `${imagePath}/22_rectangle_1546.webp`,
    iconAlt: "Operational confusion during workflows icon",
  },
  {
    title: "Weak Onboarding Systems",
    iconSrc: `${imagePath}/24_rectangle_1547.webp`,
    iconAlt: "Weak onboarding systems icon",
  },
];
const freightOperationsColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Freight Segment",
  },
  {
    key: "operationalFocus",
    label: "Operational Focus",
  },
];

const freightOperationsRows: ComparisonRow[] = [
  {
    factor: "Dry Van",
    operationalFocus: "General freight transportation",
  },
  {
    factor: "Reefer",
    operationalFocus: "Temperature-sensitive cargo",
  },
  {
    factor: "Flatbed",
    operationalFocus: "Securement and open-deck hauling",
  },
  {
    factor: "Step Deck",
    operationalFocus: "Oversized freight operations",
  },
  {
    factor: "Power Only",
    operationalFocus: "Trailer transportation support",
  },
  {
    factor: "Dedicated Freight",
    operationalFocus: "Long-term route consistency",
  },
];
const whyChooseDispatchCards: [string, string[]][] = [
  [
    "Dispatch-Integrated Recruitment Systems",
    [
      "Our recruitment process is designed around real trucking operations rather than generic staffing methods. Drivers are hired based on dispatch coordination requirements, freight schedules, operational compatibility, and lane structure to support smoother daily operations and better freight continuity.",
    ],
  ],
  [
    "FMCSA-Aware Compliance Support",
    [
      "We use compliance-focused hiring systems that support FMCSA regulations, driver qualification verification, safety history evaluation, documentation accuracy, and operational readiness. This helps carriers reduce compliance risks while maintaining safer fleet operations.",
    ],
  ],
  [
    "Freight-Focused Driver Matching",
    [
      "Drivers are matched based on freight type, trailer familiarity, route structure, operational experience, and scheduling expectations. Proper driver-to-freight alignment improves dispatch efficiency, delivery performance, operational consistency, and long-term driver retention.",
    ],
  ],
  [
    "Scalable Hiring and Onboarding Support",
    [
      "Our onboarding and hiring systems support fleet growth through organized driver integration, dispatch communication setup, compliance coordination, workflow familiarization, and operational readiness planning for expanding trucking operations.",
    ],
  ],
];
const driverHiringWorkflowSteps = [
  {
    number: "1",
    title: "Fleet Requirement Assessment",
    description:
      "Operational needs, freight types, equipment categories, and lane structures are analyzed before recruitment begins.",
  },
  {
    number: "2",
    title: "Driver Sourcing and Screening",
    description:
      "Qualified CDL candidates are identified through recruiting channels and operational filtering systems.",
  },
  {
    number: "3",
    title: "Compliance Verification",
    description:
      "CDL validation, MVR reviews, PSP checks, and Clearinghouse verification are completed before onboarding.",
  },
];
const driverRecruitingFaqs: FAQItem[] = [
  {
    question: "What do driver hiring services include?",
    answer:
      "Driver hiring services include candidate sourcing, CDL screening, driving-record review, compliance verification, qualification checks, onboarding support, and coordination with dispatch operations.",
  },
  {
    question: "How long does it take to recruit a CDL driver?",
    answer:
      "Recruitment time depends on the required license, freight type, equipment experience, operating region, and driver availability. A structured screening process helps reduce delays while maintaining qualification standards.",
  },
  {
    question: "Do you recruit owner-operators?",
    answer:
      "Yes. We support owner-operator recruitment by reviewing operating authority, insurance, equipment type, preferred lanes, freight experience, and operational readiness.",
  },
  {
    question: "Can small fleets use driver hiring services?",
    answer:
      "Yes. Small fleets use driver hiring services to reduce administrative workload, improve candidate screening, fill open positions faster, and build a more dependable driver workforce.",
  },
  {
    question: "Why is FMCSA compliance important during hiring?",
    answer:
      "FMCSA-focused screening helps confirm that drivers meet commercial driving, safety, medical, drug and alcohol, and documentation requirements before entering active fleet operations.",
  },
  {
    question: "What is checked during driver verification?",
    answer:
      "Driver verification commonly includes CDL status, Motor Vehicle Records, PSP reports, Clearinghouse records, medical certification, employment history, safety performance, and equipment experience.",
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

export default function driverRecruitingPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>Driver Hiring Services for Trucking Companies</>}
        fixedTitle="Driver Hiring Services"
        typingTitles={[
          "for Trucking Companies",
          "for Qualified CDL Drivers",
          "Built Around FMCSA Compliance",
          "Designed for Stable Fleet Growth",
        ]}
        paragraphs={[
          "The trucking industry continues facing one of its biggest operational challenges: finding qualified CDL drivers fast enough to support freight demand. Carriers often lose profitable loads because hiring delays interrupt dispatch operations, reduce fleet availability, and increase delivery pressure. Driver shortages, FMCSA regulations, insurance restrictions, and safety expectations have transformed recruitment into a complex operational system rather than a simple staffing process.",
          "E-Truck Dispatching provides driver hiring services designed specifically for trucking operations. Our recruitment system focuses on CDL driver sourcing, FMCSA-compliant screening, dispatch-integrated onboarding, and operational alignment to help carriers build stable and scalable fleets. Instead of simply filling positions, we focus on connecting qualified drivers with the right freight operations, equipment types, and dispatch workflows.",
        ]}
        backgroundImage="/Driver Recruiting/images/1_rectangle_1450.webp"
        backgroundAlt="CDL driver hiring and recruitment services for trucking companies"
      />
      <SupportColumnsSection
        heading="Why Modern Driver Hiring Is Critical for Dispatch Operations"
        intro="Driver hiring now supports both recruitment and dispatch operations. Qualified drivers help carriers maintain freight continuity, reduce delays, and improve operational stability."
        image="/Driver Recruiting/images/4_rectangle_1426.webp"
        imageAlt="Commercial driver reviewing dispatch information inside a truck"
        cards={driverHiringCards}
        contentPosition="left"
      />
      <DispatchTechnologyGridSection
        heading={
          <>
            CDL Driver Recruitment Built
            <br />
            Around Freight Operations
          </>
        }
        image="/Driver Recruiting/images/9_rectangle_1565.webp"
        imageAlt="White box truck used for CDL driver recruitment"
        cards={driverRecruitmentCards}
      />
      <BrokerNetworkSection
        imagePosition="left"
        heading={
          <>
            <span className="block">FMCSA-Compliant Driver</span>
            <span className="block">Hiring Process</span>
          </>
        }
        description={
          <div className="space-y-2">
            <p>
              Hiring drivers without proper verification creates serious
              operational and financial risks. Insurance violations, safety
              issues, audit failures, and compliance penalties often originate
              from weak recruitment systems. Modern carriers need structured
              qualification processes before drivers enter active dispatch
              operations.
            </p>

            <p>
              Our hiring workflow focuses heavily on compliance verification and
              operational screening.
            </p>

            <p>
              This process helps reduce compliance exposure while improving
              fleet safety and operational reliability.
            </p>
          </div>
        }
        image="/Driver Recruiting/images/10_rectangle_1556.webp"
        imageAlt="Commercial truck and CDL driver representing an FMCSA-compliant hiring process"
      />
      <ComparisonTableSection
        heading=""
        tableTitle=""
        columns={verificationColumns}
        rows={verificationRows}
        compactTop
      />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      <ProcessGridSection
        heading="Dispatch-Integrated Hiring Creates Better Fleet Stability"
        steps={dispatchIntegratedHiringSteps}
      />
      <RevenuePanelSection
        heading="Driver Shortages Continue Reshaping the Trucking Industry"
        description="The CDL driver shortage continues creating pressure across the trucking industry. Carriers compete for experienced drivers while freight demand keeps increasing. Insurance restrictions, safety requirements, retirement rates, and driver burnout have reduced the availability of qualified drivers."
        groups={driverShortageGroups}
        image="/Driver Recruiting/images/14_rectangle_1558.webp"
        backgroundImage="/Vector 3.svg"
      />
      <SupportColumnsSection
        heading="Driver Onboarding and Dispatch Coordination"
        intro="Driver recruitment alone does not solve operational challenges. Many carriers experience workflow disruptions when drivers enter dispatch systems without proper onboarding, communication training, or operational alignment. Structured onboarding improves dispatch coordination, operational readiness, and overall freight continuity."
        image="/Driver Recruiting/images/15_rectangle_1426.webp"
        imageAlt="Truck driver reviewing dispatch information on a tablet"
        cards={driverOnboardingCards}
        contentPosition="right"
        layoutVariant="driver-onboarding"
      />
      <FreightTypesSection
        heading={
          <>
            Safety-Focused Hiring Supports
            <br />
            Long-Term Fleet Growth
          </>
        }
        description="Unsafe hiring practices increase operational risk, insurance problems, and fleet instability. Modern trucking companies require recruitment systems that prioritize safety, compliance, and driver reliability."
        freightTypes={safetyFocusedHiringCards}
      />
      <BenefitsGridSection
        heading={
          <>
            Driver Retention
            <br />
            Impacts
            <br />
            Operational
            <br />
            Profitability
          </>
        }
        description="High Driver Turnover Increases Costs And Affects Fleet Stability. Better Recruitment And Dispatch Coordination Improve Driver Retention And Operational Continuity."
        benefits={driverRetentionBenefits}
      />
      <ComparisonTableSection
        heading="Freight Operations We Support"
        description="Our driver hiring services support multiple freight sectors across the trucking industry. Each operation requires different driver qualifications, operational awareness, and equipment familiarity."
        tableTitle=""
        columns={freightOperationsColumns}
        rows={freightOperationsRows}
      />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      <ComplianceMatrixSection
        heading="Why Trucking Companies Choose E-Truck Dispatching"
        description="E-Truck Dispatching combines driver recruitment with dispatch coordination, compliance support, and operational planning to improve fleet efficiency and long-term stability."
        cards={whyChooseDispatchCards}
        image="/Driver Recruiting/images/25_rectangle_1560.webp"
        imageAlt="Warehouse employee moving freight during loading operations"
        cardContentVariant="paragraph"
      />
      <HowWeWork
        blendBackgroundEdges
        heading={
          <>
            Our Driver Hiring
            <br />
            Workflow
          </>
        }
        backgroundImage="/background-earthquake.png"
        image="/Driver Recruiting/images/27_vector_5.webp"
        imageAlt="Delivery driver holding a package and reviewing a clipboard"
        steps={driverHiringWorkflowSteps}
      />
      <FAQSection
        heading="Frequently Asked Questions"
        description="Get answers about CDL driver recruitment, compliance verification, owner-operator hiring, onboarding, and small-fleet support."
        image="/Driver Recruiting/images/34_rectangle_1441.webp"
        imageAlt="Recruitment specialist working on CDL driver hiring and onboarding"
        faqs={driverRecruitingFaqs}
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
