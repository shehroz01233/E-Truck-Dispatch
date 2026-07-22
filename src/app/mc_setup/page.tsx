
import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import RevenuePanelSection from "../components/RevenuePanelSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import ComparisonTableSection, {
  type ComparisonColumn,
  type ComparisonRow,
} from "../components/ComparisonTableSection";
import VisionFormSection from "../components/VisionFormSection";
import ActivationSystemSection, {
  type ActivationCard,
} from "../components/ActivationSystemSection";
import ComplianceMatrixSection, {
  type ComplianceCard,
} from "../components/ComplianceMatrixSection";
import {
  type CarrierResultStep,
} from "../components/ResultsCarriersSection";
import HowWeWork from "../components/HowWeWork";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import FAQs, { type FAQItem } from "../components/FAQs";
import QuestionStats, { type Stat } from "../components/QuestionStats";


export const metadata: Metadata = {
  title: "MC DOT Setup Services",
  description:
    "Complete MC authority, USDOT registration, BOC-3 filing, UCR registration, insurance compliance, and FMCSA setup for carriers.",
};

const cmvCards = [
  {
    title: "CMV Definition (FMCSA Criteria)",
    intro:
      "A Commercial Motor Vehicle (CMV) is any vehicle that meets FMCSA thresholds requiring federal registration and compliance.",
    items: [
      "10,001+ lbs GVWR/GCWR",
      "16+ passengers including driver",
      "Hazardous materials requiring placards",
    ],
    footer:
      "These thresholds are regulatory triggers, not optional classifications. Once classified as a CMV, USDOT registration and compliance become mandatory before operation.",
  },
  {
    title: "When Compliance Becomes Mandatory",
    intro:
      "Once a vehicle meets CMV criteria, FMCSA compliance becomes mandatory before operation.",
    items: [
      "USDOT registration",
      "Safety compliance including ELD, HOS, and inspections",
      "Driver qualification requirements",
      "Immediate out-of-service orders for non-compliance",
      "Fines and enforcement penalties",
      "Loss of operating authority and load access",
    ],
    footer:
      "CMV classification is the starting point of MC DOT compliance, determining applicable regulations, safety standards, and operational requirements before a carrier can operate.",
  },
];

const mcDotColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Factor",
  },
  {
    key: "usdot",
    label: "USDOT Number",
  },
  {
    key: "mcAuthority",
    label: "MC Authority",
  },
];

const mcDotRows: ComparisonRow[] = [
  {
    factor: "Purpose",
    usdot: "Safety tracking and compliance monitoring",
    mcAuthority: "Legal authority to operate for hire",
  },
  {
    factor: "Issued By",
    usdot: "Federal Motor Carrier Safety Administration (FMCSA)",
    mcAuthority: "Federal Motor Carrier Safety Administration (FMCSA)",
  },
  {
    factor: "Required For",
    usdot: "All CMVs meeting federal thresholds",
    mcAuthority: "For-hire carriers transporting freight",
  },
  {
    factor: "Tracks",
    usdot: "Inspections, violations, crash history, audits",
    mcAuthority: "Operating authority and business activity",
  },
  {
    factor: "Revenue Activity",
    usdot: "Not required for revenue",
    mcAuthority: "Required to earn from freight",
  },
  {
    factor: "Interstate Operations",
    usdot: "Required",
    mcAuthority: "Required for for-hire carriers",
  },
  {
    factor: "Interstate Operations",
    usdot: "required (state-dependent)",
    mcAuthority: "Not always required",
  },
  {
    factor: "Broker Requirement",
    usdot: "Not sufficient alone",
    mcAuthority: "Required to work with brokers",
  },
];
const visionParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const formFields = [["First Name", "Enter First Name", "text"], ["Last Name", "Enter Last Name", "text"], ["Phone Number", "+1 (000) 123-1234", "tel"], ["Email Address", "email@gmail.com", "email"], ["Truck Type", "Enter Truck Type", "text"], ["MC Number", "Enter MC Number", "text"]];

const activationCards: ActivationCard[] = [
  {
    title: "Complete Setup",
    items: [
      "USDOT number registration",
      "MC authority application",
      "BOC-3 filing",
      "insurance coordination",
      "UCR registration",
    ],
    description:
      "All filings are handled in sequence through FMCSA systems, eliminating setup complexity.",
  },
  {
    title: "Built for Every Carrier Stage",
    items: [
      {
        highlight: "New carriers:",
        text: " full setup from scratch",
      },
      {
        highlight: "Owner-operators:",
        text: "  to independent authority",
      },
      {
        highlight: "Existing carriers:",
        text: " updates, reinstatement, and compliance fixes",
      },
    ],
    description:
      "Each setup is aligned with your operation type and business structure.",
  },
  {
    title: "Faster Authority Activation",
    items: [
      "priority document processing",
      "immediate insurance coordination",
      "early BOC-3 submission",
    ],
    description: "This reduces delays and helps you start hauling sooner.",
  },
  {
    title: "Ongoing Compliance Control",
    items: [
      "MCS-150 updates",
      "UCR renewals",
      "insurance tracking",
      "document and deadline monitoring",
    ],
    description:
      "This ensures your authority stays active and audit-ready.",
  },
  {
    title: "Dedicated Compliance Support",
    items: [
      "assigned compliance coordinator",
      "real-time status tracking",
      "continuous support",
    ],
    description:
      "You get a single point of contact managing your entire compliance process.",
  },
  {
    title: "Operational Readiness Built-In",
    items: [
      "authority verification before load booking",
      "insurance validation for brokers",
      "driver and vehicle compliance checks",
    ],
    description:
      "This keeps your operations smooth and uninterrupted.",
  },
];

const setupRequirementCards: ComplianceCard[] = [
  {
    title: "Business and Legal Requirements",
    intro: "A registered business entity is required before applying for authority.",
    items: [
      "LLC or Corporation is preferred for liability protection",
      "The business name and address must match all filings",
      "Mismatches in business details cause application delays or rejection",
    ],
    footer:
      "FMCSA verifies entity information during the registration process.",
  },
  {
    title: "EIN and Company Setup",
    intro:
      "An Employer Identification Number (EIN) is required for tax reporting and federal registration.",
    items: [
      "EIN is used to identify the business in FMCSA records",
      "Required for opening business bank accounts and insurance policies",
      "Incorrect EIN or missing records can block application approval",
    ],
  },
  {
    title: "Vehicle and Cargo Classification",
    intro:
      "Accurate classification determines the type of authority and compliance requirements.",
    items: [
      "Cargo type defines authority category",
      "Vehicle weight and operation type determine regulatory scope",
      "Incorrect classification leads to authority mismatch",
      "Compliance violations",
      "Insurance rejection",
    ],
  },
  {
    title: "Insurance Readiness",
    intro:
      "Insurance must be active and filed before authority can be approved.",
    items: [
      "Minimum liability coverage required by FMCSA",
      "Insurance must match cargo and operation type",
      "Filing must be submitted through BMC-91 or BMC-91X forms",
    ],
    footer:
      "Without insurance filing, MC authority remains inactive even if approved.",
  },
];


const setupRequirementColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Step",
  },
  {
    key: "whatHappens",
    label: "What Happens",
  },
  {
    key: "whyItMatters",
    label: "Why It Matters",
  },
  {
    key: "delayRisk",
    label: "Common Delay Risk",
  },
];

const setupRequirementRows: ComparisonRow[] = [
  {
    factor: "USDOT Registration",
    whatHappens: "Business and operation entered into FMCSA system",
    whyItMatters: "Creates federal safety identity",
    delayRisk: "Wrong business or cargo details",
  },
  {
    factor: "MC Authority Application",
    whatHappens: "For-hire authority requested",
    whyItMatters: "Grants legal operating authority",
    delayRisk: "Wrong authority type",
  },
  {
    factor: "BOC-3 Filing",
    whatHappens: "Process agents assigned in all states",
    whyItMatters: "Required for legal compliance",
    delayRisk: "Missing filing",
  },
  {
    factor: "Insurance Filing",
    whatHappens: "BMC-91/BMC-91X submitted by insurer",
    whyItMatters: "Required for activation",
    delayRisk: "Coverage mismatch or filing delay",
  },
  {
    factor: "Authority Activation",
    whatHappens: "FMCSA verifies all filings",
    whyItMatters: "Allows legal operation",
    delayRisk: "Incomplete or inconsistent submissions",
  },
];

const carrierResultSteps: CarrierResultStep[] = [
  {
    title: "USDOT Registration Process",
    description: "The first step is obtaining a USDOT number through the FMCSA URS portal. This establishes the carrier’s federal safety profile used for inspections, audits, and compliance tracking.",
    includes: ["Business structure", "Operating classification", "Fleet details", "Cargo type", "Interstate or intrastate operation"],
    footer: "Accurate data entry ensures consistency across all subsequent filings.",
  },
  {
    title: "MC Authority Application",
    description: "After USDOT registration, the carrier applies for MC authority when operating as a for-hire entity in interstate commerce.",
    includes: ["Authority classification", "Operation type", "Cargo classification"],
    footer: "Correct authority selection prevents approval delays and compliance mismatches.",
  },
  {
    title: "BOC-3 Filing",
    description: "A process agent filing is submitted to designate legal representation in every state where the carrier operates.",
  },
  {
    title: "Insurance Filing",
    description: "The insurance provider submits the required BMC-91 or BMC-91X filing directly to FMCSA to activate authority.",
  },
  {
    title: "UCR Registration",
    description: "Unified Carrier Registration is completed for interstate operations and renewed annually to maintain compliance.",
  },
  {
    title: "Authority Activation and Verification",
    description: "All filings are reviewed and verified before the carrier begins booking loads and operating under active authority.",
  },
];

const mcSetupFaqs: FAQItem[] = [
  {
    question: "Do you force dispatch?",
    answer:
      "No. You approve every load before booking. You stay in full control of your operations.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "Most carriers can begin after onboarding, document review, and confirmation of their preferred lanes and rates.",
  },
  {
    question: "Do you work with new MC authorities?",
    answer:
      "Yes. We help new authorities establish compliant operations and begin building reliable broker relationships.",
  },
  {
    question: "How do you find loads?",
    answer:
      "Our dispatchers use trusted load boards, broker networks, lane data, and current market conditions to source freight.",
  },
  {
    question: "What do you charge for dispatching?",
    answer:
      "Dispatch fees are agreed during onboarding and apply only after a load is booked and completed.",
  },
  {
    question: "How do you ensure I get high-paying loads?",
    answer:
      "We compare rates, negotiate with brokers, and filter loads against your approved lanes, schedule, and minimum rate.",
  },
];

const mcDotApprovalComparisons = [
  [
    "Standard FMCSA Timeline",
    "MC authority approval takes 14–21 days, depending on filing accuracy and insurance submission. The timeline includes a mandatory FMCSA 21-day waiting (protest) period, during which the application is publicly posted and reviewed before activation. Activation depends on completing all required steps within this timeframe.",
  ] as [string, string],
  {
    title: "Factors That Delay Approval",
    intro: "Several issues can extend the timeline beyond 21 days:",
    items: [
      "Incorrect or incomplete application data",
      "Insurance not filed on time (BMC-91/BMC-91X)",
      "BOC-3 not submitted",
      "Business name or authority mismatch",
      "Errors in cargo classification or operation type",
    ],
    footer:
      "Even small inconsistencies between filings can delay activation.",
  },
  {
    title: "How to Speed Up Activation",
    intro:
      "Approval speed depends on accuracy, not shortcuts. For this:",
    items: [
      "Submit complete and correct application on first attempt",
      "Ensure insurance is filed immediately after MC application",
      "Confirm business details match across all filings",
      "Complete BOC-3 filing early in the process",
    ],
    footer:
      "Faster activation occurs when all required filings are aligned and submitted within the FMCSA timeline.",
  },
];

const mcSetupStats: Stat[] = [
  {
    value: "300+",
    title: "Active Trucks",
    text: "Trucks we dispatch",
  },
  {
    value: "50+",
    title: "Team Members",
    text: "Experienced dispatchers",
  },
  {
    value: "150+",
    title: "MC Clients",
    text: "Actively working with us.",
  },
];

export default function McSetupPage() {
  return (
    <main className="bg-[#1c1c1c]">
      
        <HeroSection
          h1={
            <>
              MC DOT Services: Complete
              <br />
              Setup &amp; Compliance
            </>
          }
          paragraphs={[
            "MC DOT services include USDOT registration, MC authority activation, BOC-3 filing, UCR registration, insurance compliance, and FMCSA regulatory setup required to legally operate a trucking business in the United States.",
            "Without complete MC DOT setup, carriers cannot activate authority, book loads, or receive payments.",
            "E Truck Dispatching uses a proprietary MC DOT Activation System to manage registration, compliance validation, and authority activation, ensuring faster approval, zero filing errors, and uninterrupted operations.",
          ]}
          backgroundImage="/MC DOT Setup/images/1_rectangle_1450.webp"
          backgroundAlt="Dispatch specialists completing MC DOT setup and compliance paperwork"
        />
     
        <div className="bg-[#1c1c1c] py-12 lg:py-20">
          <RevenuePanelSection
          heading="What Are MC DOT Services"
          description=""
          groups={[
            {
              title: "Why MC DOT Compliance Matters",
              intro: [
                "MC DOT compliance affects a carrier’s ability to operate and generate revenue.",
                "Non-compliance results in:",
              ],
              items: [
                "Authority rejection or deactivation",
                "Inability to book loads through brokers",
                "FMCSA penalties and enforcement actions",
                "Increased audit risk and operational shutdown",
              ],
              footer:
                "Accurate MC DOT setup ensures compliance and operations.",
            },
            {
              title: "What MC DOT Includes",
              intro: ["MC DOT services cover all required components:"],
              items: [
                "USDOT number registration",
                "MC authority application",
                "BOC-3 filing",
                "UCR registration",
                "Insurance filing (BMC-91/BMC-91X)",
                "Compliance setup",
              ],
              footer:
                "Each component must align before authority becomes active.",
            },
            {
              title: "Definition of MC DOT Services",
              intro: [
                "MC DOT services refer to the FMCSA-required setup and compliance process that allows carriers to legally operate and transport freight for hire.",
                "This includes authority registration, insurance compliance, and regulatory validation required before operations begin.",
              ],
            },
          ]}
          image="/MC DOT Setup/images/4_rectangle_1558.webp"
          backgroundImage="/icons/4_vector_3.svg"
          />
        </div>
     
     <SupportColumnsSection
  heading="What Is a Commercial Motor Vehicle (CMV)"
  intro="A Commercial Motor Vehicle (CMV) is a truck or vehicle used to transport goods or passengers for business purposes, typically defined by the Federal Motor Carrier Safety Administration as weighing over 10,001 lbs, carrying hazardous materials, or transporting multiple passengers."
  image="/MC DOT Setup/images/5_rectangle_1426.webp"
  imageAlt="Driver checking commercial motor vehicle paperwork"
  cards={cmvCards}
/>
     
       <ComparisonTableSection
        heading="MC vs DOT - Key Differences"
        tableTitle="USDOT vs MC Authority Comparison"
        columns={mcDotColumns}
        rows={mcDotRows}
      />
      
       <ActivationSystemSection
      heading={
        <>
          How the MC DOT
          <br />
          Activation System Works
        </>
      }
      description="E Truck Dispatching uses a structured MC DOT Activation System to manage registration, compliance alignment, and authority activation; ensuring faster approval and error-free setup."
      cards={activationCards}
      image="/MC DOT Setup/images/6_rectangle_1426.webp"
      imageAlt="Carrier standing beside a truck during MC DOT activation setup"
    />
     
      
      <ComplianceMatrixSection
      heading="MC DOT Setup Requirements"
      description="Before applying for MC DOT authority, carriers must meet specific legal, operational, and compliance prerequisites defined by FMCSA. Missing any requirement delays approval or results in application rejection."
      cards={setupRequirementCards}
      image="/MC DOT Setup/images/7_rectangle_1560.webp"
      imageAlt="Two trucking professionals completing MC DOT setup requirements"
    />
     
      <HowWeWork
        heading={
          <>
            Results Carriers Achieve
            <br />
            With Our Dispatching
          </>
        }
        image="/MC DOT Setup/images/9_vector_5.webp"
        imageAlt="Carrier holding a package after completing dispatch setup"
        steps={carrierResultSteps}
      />
      
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
     
      <ComparisonTableSection
        heading=""
        tableTitle="MC DOT Registration Process Summary"
        columns={setupRequirementColumns}
        rows={setupRequirementRows}
        compactTop
      />

      <ComparisonCardsSection
        heading="How Long Does MC DOT Approval Take?"
        description="MC DOT Approval Typically Takes 20–25 Days, Including The FMCSA Waiting Period After Filing Authority And Completing Insurance And BOC-3 Requirements."
        comparisons={mcDotApprovalComparisons}
      />
      
      <FAQs
        heading="Frequently Asked Questions"
        description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
        image="/Home/images/33_rectangle_1441.webp"
        imageAlt="Dispatcher answering carrier questions in a warehouse"
        faqs={mcSetupFaqs}
      />
      
      <QuestionStats
        heading="Still Have Questions?"
        description="Our billing experts are here to help. Get in touch for a free consultation."
        buttonText="Talk to an Expert"
        buttonHref="/contact"
        stats={mcSetupStats}
      />
      
    </main>
  );
}
