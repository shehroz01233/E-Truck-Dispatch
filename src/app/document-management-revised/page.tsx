import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import BenefitsGridSection from "../components/BenefitsGridSection";
import BrokerNetworkSection from "../components/BrokerNetworkSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComparisonTableSection, {
  ComparisonColumn,
  ComparisonRow,
} from "../components/ComparisonTableSection";
import ComplianceDocumentsSection, {
  ComplianceDocumentItem,
} from "../components/ComplianceDocumentsSection";
import EquipmentShowcaseSection from "../components/EquipmentShowcaseSection";
import FAQs from "../components/FAQs";
import FreightBenefitsSection, {
  FreightBenefit,
} from "../components/FreightBenefitsSection";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import OurServices, { Service } from "../components/OurServices";
import QuestionStats from "../components/QuestionStats";
import RevenuePanelSection, {
  RevenueGroup,
} from "../components/RevenuePanelSection";
import VisionFormSection from "../components/VisionFormSection";
const services: Service[] = [
  {
    title: "Invoice Rejections from Documentation Errors",
    description:
      "Incorrect formatting or missing references trigger invoice rejections from brokers. Each rejection forces a correction and resubmission process, adding extra delays. These repeated cycles slow down revenue collection and impact operational efficiency.",
    image:
      "/Document Management Revised/images/14_payment_delays_from_missing_or_late_submissions.webp",
    imageAlt: "Woman checking payment information on a laptop",
  },
  {
    title: "Cash Flow Disruption from Processing Delays",
    description:
      "Incomplete or unverified documents slow down factoring approval processes. Delays in document validation prevent the timely release of funds from factoring companies. This results in unpredictable payment timelines and unstable cash flow management.",
    image:
      "/Document Management Revised/images/13_broker_disputes_from_rate___bol_mismatches.webp",
    imageAlt:
      "Freight professionals discussing rate confirmation and BOL documents",
  },
  {
    title: "Payment Delays from Missing or Late Submissions",
    description:
      "Missing PODs or incomplete invoices prevent brokers from approving payments on time. Late submissions move invoices into extended billing cycles, delaying expected cash inflow. This creates gaps in revenue timing and reduces overall financial predictability.",
    image:
      "/Document Management Revised/images/12_invoice_rejections_from_documentation_errors.webp",
    imageAlt: "Business owner reviewing rejected invoices and paperwork",
    accent: true,
  },
  {
    title: "Broker Disputes from Rate & BOL Mismatches",
    description:
      "Differences between rate confirmations and submitted documents create payout issues. Brokers may reduce payments when discrepancies are identified in the agreement terms. Inconsistent BOL details lead to disputes and extend the payment resolution timeline.",
    image:
      "/Document Management Revised/images/11_cash_flow_disruption_from_processing_delays.webp",
    imageAlt: "Hourglass and money representing delayed trucking payments",
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
const reasons = [
  {
    title: "Verifies Documents Before Submission",
    iconSrc: "/Document Management Revised/images/16_rectangle_1537.webp",
    iconAlt: "Document verification icon",
  },
  {
    title: "Eliminates Errors In BOL, POD, And Invoices",
    iconSrc: "/Document Management Revised/images/18_rectangle_1539.webp",
    iconAlt: "Document error prevention icon",
  },
  {
    title: "Ensures Timely Submission To Brokers And Factoring Companies",
    iconSrc: "/Document Management Revised/images/20_rectangle_1541.webp",
    iconAlt: "Timely document submission icon",
  },
  {
    title: "Centralizes All Records For Instant Access",
    iconSrc: "/Document Management Revised/images/17_rectangle_1545.webp",
    iconAlt: "Centralized records icon",
  },
  {
    title: "Tracks Document Lifecycle From Load Booking To Payment",
    iconSrc: "/Document Management Revised/images/19_rectangle_1546.webp",
    iconAlt: "Document lifecycle tracking icon",
  },
  {
    title: "Maintains Audit-Ready Documentation For Compliance",
    iconSrc: "/Document Management Revised/images/21_rectangle_1547.webp",
    iconAlt: "Audit-ready compliance documentation icon",
  },
];

const revenueGroups: RevenueGroup[] = [
  {
    title: "Carrier Setup & Authority Documents",
    intro: [
      "Covers all required MC/DOT, insurance, and carrier documents to ensure compliant and smooth onboarding.",
    ],
    items: [
      "MC Authority",
      "W-9 Forms",
      "Insurance Certificates (COI)",
      "Broker-Carrier Packets",
    ],
  },
  {
    title: "Load Lifecycle Documents",
    intro: ["Manages rate con, POD, and invoices with accuracy and speed."],
    items: [
      "Rate Confirmations",
      "Bills of Lading (BOL)",
      "Proof of Delivery (POD)",
      "Shipping Documents",
      "Lumper Receipts",
    ],
  },
  {
    title: "HOS & ELD Monitoring",
    intro: ["Manages invoices, payments, and factoring accurately."],
    items: [
      "Freight Invoices",
      "Factoring Documents",
      "Detention Records",
      "TONU (Truck Ordered Not Used)",
    ],
  },
];
const complianceDocuments: ComplianceDocumentItem[] = [
  {
    label: "Driver Logs (ELD)",
    icon: "/Document Management Revised/images/25_rectangle_1557.webp",
  },
  {
    label: "Maintenance Records",
    icon: "/Document Management Revised/images/24_rectangle_1557.webp",
  },
  {
    label: "Vehicle Compliance Files",
    icon: "/Document Management Revised/images/26_rectangle_1557.webp",
  },
  {
    label: "IFTA Reports",
    icon: "/Document Management Revised/images/28_rectangle_1557.webp",
  },
  {
    label: "Safety Documentation",
    icon: "/Document Management Revised/images/27_rectangle_1557.webp",
  },
  {
    label: "Inspection & DVIR Reports",
    icon: "/Document Management Revised/images/29_rectangle_1557.webp",
  },
];
const documentFlowColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Document",
  },
  {
    key: "source",
    label: "Source",
  },
  {
    key: "purpose",
    label: "Purpose",
  },
  {
    key: "trigger",
    label: "Trigger",
  },
];

const documentFlowRows: ComparisonRow[] = [
  {
    factor: "Rate Confirmation",
    source: "Broker",
    purpose: "Defines rates & agreement",
    trigger: "Load booking",
  },
  {
    factor: "Bill of Lading (BOL)",
    source: "Shipper",
    purpose: "Shipment validation",
    trigger: "Pickup",
  },
  {
    factor: "Proof of Delivery (POD)",
    source: "Consignee",
    purpose: "Delivery confirmation",
    trigger: "Drop",
  },
  {
    factor: "Carrier Packet",
    source: "Carrier",
    purpose: "Broker approval",
    trigger: "Onboarding",
  },
  {
    factor: "Insurance Certificate",
    source: "Provider",
    purpose: "Coverage validation",
    trigger: "Dispatch",
  },
  {
    factor: "Freight Invoice",
    source: "Carrier",
    purpose: "Payment request",
    trigger: "Submission",
  },
  {
    factor: "Detention Record",
    source: "Broker",
    purpose: "Delay compensation",
    trigger: "Waiting",
  },
  {
    factor: "TONU",
    source: "Broker",
    purpose: "Cancellation compensation",
    trigger: "Load cancel",
  },
];
const equipmentNames = [
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
  "/Document Management Revised/images/32_rectangle_1515.webp",
  "/Document Management Revised/images/33_rectangle_1515.webp",
  "/Document Management Revised/images/36_rectangle_1515.webp",
  "/Document Management Revised/images/37_rectangle_1515.webp",
  "/Document Management Revised/images/34_rectangle_1515.webp",
  "/Document Management Revised/images/35_rectangle_1515.webp",
  "/Document Management Revised/images/38_rectangle_1515.webp",
  "/Document Management Revised/images/39_rectangle_1515.webp",
];

const equipmentDescriptions = [
  "Our dry van dispatch service connects owner-operators with consistent, high-paying freight across all 48 states. Dispatchers...",
  "Our hotshot dispatch service secures high-paying, time-sensitive loads for CDL and non-CDL carriers. Dispatchers optimize short hauls...",
  "Our flatbed dispatch service secures premium freight for carriers handling oversized, heavy, and construction loads. Dispatchers manage load...",
  "Our power-only dispatch service connects carriers with shipper-provided trailers, eliminating trailer ownership costs. Dispatchers...",
  "Our step deck dispatch service focuses on over-height, overweight, and specialized freight that standard trailers cannot handle...",
  "Our box truck dispatch service books high-paying loads for 26ft+ carriers across last-mile, LTL, and regional freight networks...",
  "Our reefer dispatch service connects carriers with high-value, temperature-controlled freight requiring strict scheduling and...",
  "Our Conestoga dispatch service matches carriers with weather-sensitive and high-value freight requiring curtain-side protection...",
];

const equipmentImageHeights = [
  200, // Dry Van
  200, // Hotshot
  200, // Flatbed
  240, // Power Only
  200, // Step Deck
  230, // Box Truck
  240, // Reefer
  230, // Conestoga
];

const equipmentColumns = [
  [0, 1], // Dry Van, Hotshot
  [2, 3], // Flatbed, Power Only
  [4, 5], // Step Deck, Box Truck
  [6, 7], // Reefer, Conestoga
];

const comparisons: [string, string][] = [
  [
    "What They Require",
    "Factoring providers require verified invoices that match all supporting documents without discrepancies. BOL and POD details must align with rate confirmations and delivery records. Broker-approved documentation ensures the invoice meets contractual and compliance standards.",
  ],
  [
    "Impact Of Accuracy",
    "Accurate documentation eliminates repeated rejection and resubmission cycles. Approval timelines become faster because verification checks pass without issues. Consistent accuracy maintains predictable cash flow and improves financial stability.",
  ],
  [
    "Error Prevention And Faster Funding",
    "A structured documentation process reduces manual mistakes and missing details before submission. This minimizes back-and-forth with factoring companies and speeds up funding approvals. Fewer errors mean quicker payouts, improved trust with brokers, and smoother financial operations overall.",
  ],
];
const capabilityColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Capability",
  },
  {
    key: "function",
    label: "Function",
  },
  {
    key: "businessImpact",
    label: "Business Impact",
  },
];

const capabilityRows: ComparisonRow[] = [
  {
    factor: "Centralized Document Control",
    function: "Secure storage & access",
    businessImpact: "Organized, audit-ready records",
  },
  {
    factor: "Real-Time Tracking",
    function: "Instant retrieval & monitoring",
    businessImpact: "Faster decision-making",
  },
  {
    factor: "Dispatch Integration",
    function: "Sync with load workflows",
    businessImpact: "Eliminates data mismatch",
  },
  {
    factor: "OCR Automation",
    function: "Digital processing",
    businessImpact: "Reduces manual errors",
  },
  {
    factor: "Dedicated Support",
    function: "Back-office handling",
    businessImpact: "Saves time and effort",
  },
];
const businessBenefits = [
  "Faster payments with clean submissions",
  "Reduced invoice rejections",
  "Stable and predictable cash flow",
  "Lower compliance risk",
  "Improved operational efficiency",
];

const documentAudiences = [
  {
    title: "Owner operators",
    image: "/Conestoga Dispatch Service/images/22_rectangle_1623.webp",
  },
  {
    title: "Small trucking fleets",
    image: "/Conestoga Dispatch Service/images/23_rectangle_1624.webp",
  },
  {
    title: "New MC authorities",
    image: "/Conestoga Dispatch Service/images/24_rectangle_1625.webp",
  },
  {
    title: "Growing carriers",
    image: "/Box Truck/images/24_rectangle_1626.webp",
  },
];

const freightBenefits: FreightBenefit[] = [
  { text: "System-driven document management (not manual admin work)" },
  { text: "Revenue-focused documentation accuracy" },
  { text: "Full visibility without losing control" },
  {
    text: "Scalable for single trucks to fleets",
  },
];
const faqs = [
  {
    question: "How does document management reduce payment delays?",
    answer:
      "Accurate and timely submissions eliminate rejection cycles and speed up broker and factoring approvals.",
  },
  {
    question: "Why do factoring companies reject trucking invoices?",
    answer:
      "Invoices are rejected when PODs, BOLs, rate confirmations, delivery details, or required references are missing or inconsistent.",
  },
  {
    question: "Can this system improve cash flow stability?",
    answer:
      "Yes. Organized records, faster submissions, and fewer documentation errors create more predictable payment timelines.",
  },
  {
    question: "Do you handle detention and TONU documentation?",
    answer:
      "Yes. We collect, verify, organize, and submit detention records and TONU documents with the required supporting details.",
  },
  {
    question: "Do you maintain DOT and FMCSA compliance records?",
    answer:
      "Yes. We organize driver logs, maintenance records, inspection reports, insurance documents, and other compliance files.",
  },
  {
    question: "What documents are required for trucking compliance?",
    answer:
      "Common records include MC and DOT authority, insurance certificates, W-9 forms, ELD logs, maintenance files, DVIR reports, and IFTA records.",
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
export default function DocumentManagementPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
  h1={
    <>
      Document Management &amp; Paperwork Services for Owner Operators &amp;
      Trucking Companies
    </>
  }
  fixedTitle="Document Management & Paperwork Services"
  typingTitles={[
    "for Owner Operators",
    "for Trucking Companies",
    "Built for Faster Payments",
    "Designed for Accurate Compliance",
  ]}
  paragraphs={[
    "Trucking paperwork is not an administrative task, but it directly controls payments, compliance, and cash flow. Missing or inaccurate documents break the payment cycle, trigger broker disputes, and delay revenue.",
    "At E Truck Dispatching, document management is structured as a system. Every document from Rate Confirmation and Bill of Lading (BOL) to Proof of Delivery (POD) and Invoice is processed, validated, and submitted with precision.",
  ]}
  backgroundImage="/Document Management Revised/images/1_rectangle_1450.webp"
  backgroundAlt="Trucking document management and paperwork services"
/>

      <BrokerNetworkSection
        heading="What Trucking Document Management Services Include?"
        description={
          <p>
            Trucking document management is the controlled lifecycle handling of
            freight documents.
          </p>
        }
        image="/Document Management Revised/images/4_what_trucking_document_management_services_include_.webp"
        imageAlt="Truck document management services"
        features={[
          {
            title: "Document collection",
            iconSrc:
              "/Document Management Revised/images/6_rectangle_1557.webp",
            iconAlt: "",
          },
          {
            title: "Validation and accuracy checks",
            iconSrc:
              "/Document Management Revised/images/9_rectangle_1557.webp",
            iconAlt: "",
          },
          {
            title: "Timely submission",
            iconSrc:
              "/Document Management Revised/images/5_rectangle_1557.webp",
            iconAlt: "",
          },
          {
            title: "Secure storage and retrieval",
            iconSrc:
              "/Document Management Revised/images/8_rectangle_1557.webp",
            iconAlt: "",
          },
          {
            title: "Compliance tracking",
            iconSrc:
              "/Document Management Revised/images/7_rectangle_1557.webp",
            iconAlt: "",
          },
          {
            title: "Audit preparation and support",
            iconSrc:
              "/Document Management Revised/images/10_rectangle_1557.webp",
            iconAlt: "",
          },
        ]}
      />

      <OurServices
        heading="Why Trucking Businesses Lose Revenue Due to Poor Paperwork?"
        description="Documentation issues rarely show up instantly, but they directly reduce how fast and how much you get paid."
        services={services}
      />

      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />

      <BenefitsGridSection
        heading={
          <>
            <span className="block">How Our</span>
            <span className="block">Document</span>
            <span className="block">System Solves</span>
            <span className="block">These Issues</span>
          </>
        }
        description="At E Truck Dispatching, paperwork is handled through a controlled workflow system, not manual efforts."
        benefits={reasons}
      />

      <RevenuePanelSection
        heading="Complete Trucking Document Ecosystem We Manage"
        description="We manage every document involved in the freight lifecycle, ensuring accuracy and accessibility at all times."
        groups={revenueGroups}
        image="/Document Management Revised/images/22_rectangle_1558.webp"
        backgroundImage="/Vector 3.svg"
      />

      <ComplianceDocumentsSection
        heading="Compliance & Regulatory Documents"
        description="Maintained in alignment with Federal Motor Carrier Safety Administration requirements:"
        items={complianceDocuments}
        image="/Document Management Revised/images/23_rectangle_1556.webp"
        imageAlt="Truck driver standing in front of a commercial truck"
      />

      <HowWeWork
        heading={
          <>
            Step-by-Step Trucking
            <br />
            Paperwork Workflow
          </>
        }
        image="/Document Management Revised/images/31_vector_5.webp"
        imageAlt="New image alt"
        steps={[
          {
            number: "1",
            title: "Carrier Onboarding",
            description:
              "Collection of MC authority, W-9, insurance, and broker packets.",
          },
          {
            number: "2",
            title: "Document Verification",
            description:
              "BOL, POD, and rate confirmations are checked for accuracy before submission.",
          },
          {
            number: "3",
            title: "Digital Storage & Organization",
            description:
              "Documents are indexed and stored for instant retrieval.",
          },
        ]}
      />

      <ComparisonTableSection
        heading="Document Flow Matrix – How Paperwork Moves"
        tableTitle=""
        columns={documentFlowColumns}
        rows={documentFlowRows}
      />
      <EquipmentShowcaseSection
        heading="Truck-Type Based Documentation Issues We Manage"
        names={equipmentNames}
        images={equipmentImages}
        descriptions={equipmentDescriptions}
        imageHeights={equipmentImageHeights}
        columns={equipmentColumns}
      />

      <ComparisonCardsSection
        heading="How Clean Paperwork Improves Factoring Payments"
        description=""
        comparisons={comparisons}
        icons={[
          "/Document Management Revised/images/40_rectangle_1545.webp",
          "/Document Management Revised/images/41_rectangle_1539.webp",
          "/Document Management Revised/images/42_rectangle_1541.webp",
        ]}
      />

      <ComparisonTableSection
        heading="Core Capabilities of Our Document Management System"
        tableTitle=""
        columns={capabilityColumns}
        rows={capabilityRows}
        compactTop
      />
      <>
        <AudienceBenefitsSection
          heading="Business Impact of Structured Document Management Services"
          benefits={businessBenefits}
          showAudiences={false}
        />

        <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
          <h2 className="text-center text-4xl font-bold sm:text-5xl">
            Who Needs Trucking Document Management Services
          </h2>

          <AudienceBenefitsSection
            heading=""
            benefits={[]}
            audiences={documentAudiences}
          />
        </section>
      </>

      <FreightBenefitsSection
        heading={
          <>
            Why Choose E Truck <br />
            Dispatching
          </>
        }
        benefits={freightBenefits}
        defaultIconSrc="/Box Truck/images/25_tick_icon.webp"
        defaultIconAlt="Check icon"
      />

      <FAQs
        heading="Frequently Asked Questions"
        description="Get clear answers about trucking document processing, payment submissions, factoring requirements, and compliance record management."
        image="/Conestoga Dispatch Service/images/33_rectangle_1441.webp"
        imageAlt="Logistics employee managing trucking documents"
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
