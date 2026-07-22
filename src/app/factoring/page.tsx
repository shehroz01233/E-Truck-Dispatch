import HeroSection from "@/app/components/HeroSection";
import RevenuePanelSection, {
  RevenueGroup,
} from "@/app/components/RevenuePanelSection";
import TechnologyOperationsSection, {
  TechnologyFeature,
} from "@/app/components/TechnologyOperationsSection";
import ComparisonTableSection, {
  ComparisonColumn,
  ComparisonRow,
} from "@/app/components/ComparisonTableSection";
import ComplianceMatrixSection, {
  ComplianceCard,
} from "@/app/components/ComplianceMatrixSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ProcessGridSection from "../components/ProcessGridSection";
import OurServices from "../components/OurServices";
import FreightTypesSection from "../components/FreightTypesSection";
import DispatchTechnologyGridSection, {
  type DispatchTechnologyCard,
} from "@/app/components/DispatchTechnologyGridSection";
import ActivationSystemSection, {
  type ActivationCard,
} from "@/app/components/ActivationSystemSection";
import BenefitsGridSection from "@/app/components/BenefitsGridSection";
import FreightBenefitsSection, {
  type FreightBenefit,
} from "@/app/components/FreightBenefitsSection";
import FAQSection, { type FAQItem } from "@/app/components/FAQs";
import QuestionStats, { type Stat } from "@/app/components/QuestionStats";





const mcDotGroups: RevenueGroup[] = [
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
    footer: "Accurate MC DOT setup ensures compliance and operations.",
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
    footer: "Each component must align before authority becomes active.",
  },
  {
    title: "Definition of MC DOT Services",
    intro: [
      "MC DOT services refer to the FMCSA-required setup and compliance process that allows carriers to legally operate and transport freight for hire.",
    ],
    footer:
      "This includes authority registration, insurance compliance, and regulatory validation required before operations begin.",
  },
];




const freightFeatures: TechnologyFeature[] = [
  {
    title: "Faster invoice processing",
    description: "",
  },
  {
    title: "Broker payment verification",
    description: "",
  },
  {
    title: "Reduced payment delays",
    description: "",
  },
  {
    title: "Continuous freight movement support",
    description: "",
  },
  {
    title: "Improved operational cash flow",
    description: "",
  },
  {
    title: "Lower financial pressure on carriers",
    description: "",
  },
];

const factoringColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Freight Factoring Workflow",
  },
  {
    key: "purpose",
    label: "Operational Purpose",
  },
];

const factoringRows: ComparisonRow[] = [
  {
    factor: "Load Delivery",
    purpose: "Confirms freight completion",
  },
  {
    factor: "Invoice Submission",
    purpose: "Begins payment process",
  },
  {
    factor: "Broker Verification",
    purpose: "Reduces payment risk",
  },
  {
    factor: "Advance Funding",
    purpose: "Improves cash flow",
  },
  {
    factor: "Broker Payment Collection",
    purpose: "Completes receivable cycle",
  },
  {
    factor: "Reserve Release",
    purpose: "Final settlement process",
  },
];


const factoringCards: ComplianceCard[] = [
  {
    title: "Fuel and Operational Expense Management",
    intro:
      "Fuel remains one of the largest operating expenses in trucking, especially during long-haul freight operations where diesel pricing changes frequently across different regions.",
    items: [],
    footer:
      "Freight factoring provides faster access to funds for fuel purchases, toll expenses, and daily operational costs without waiting through long payment cycles.",
  },
  {
    title: "Driver Payroll and Scheduling Stability",
    intro:
      "Driver payroll depends heavily on predictable cash flow and consistent payment processing across trucking operations.",
    items: [],
    footer:
      "Delayed settlements create scheduling instability, driver retention issues, and operational disruptions that affect dispatch coordination and freight movement efficiency.",
  },
  {
    title: "Maintenance and Emergency Repair Funding",
    intro:
      "Tire replacements, engine diagnostics, roadside repairs, preventive maintenance, and emergency breakdowns often require immediate financial access to avoid operational downtime.",
    items: [],
    footer:
      "Freight factoring helps carriers manage maintenance expenses faster while reducing delays caused by limited working capital.",
  },
  {
    title: "Operational Flexibility and Freight Continuity",
    intro:
      "Structured freight coordination through factoring improves operational flexibility by allowing carriers and dispatchers to accept profitable freight opportunities without worrying about short-term cash shortages.",
    items: [],
    footer:
      "Faster funding supports continuous freight movement, better load acceptance, and stable dispatch operations.",
  },
];

const freightFactoringCards: ComplianceCard[] = [
  {
    title: "Fuel and Operational Expense Management",
    intro:
      "Fuel remains one of the largest operating expenses in trucking, especially during long-haul freight operations where diesel pricing changes frequently across different regions.",
    items: [],
    footer:
      "Freight factoring provides faster access to funds for fuel purchases, toll expenses, and daily operational costs without waiting through long payment cycles.",
  },
  {
    title: "Driver Payroll and Scheduling Stability",
    intro:
      "Driver payroll depends heavily on predictable cash flow and consistent payment processing across trucking operations.",
    items: [],
    footer:
      "Delayed settlements create scheduling instability, driver retention issues, and operational disruptions that affect dispatch coordination and freight movement efficiency.",
  },
  {
    title: "Maintenance and Emergency Repair Funding",
    intro:
      "Tire replacements, engine diagnostics, roadside repairs, preventive maintenance, and emergency breakdowns often require immediate financial access to avoid operational downtime.",
    items: [],
    footer:
      "Freight factoring helps carriers manage maintenance expenses faster while reducing delays caused by limited working capital.",
  },
  {
    title: "Operational Flexibility and Freight Continuity",
    intro:
      "Structured freight coordination through factoring improves operational flexibility by allowing carriers and dispatchers to accept profitable freight opportunities without worrying about short-term cash shortages.",
    items: [],
    footer:
      "Faster funding supports continuous freight movement, better load acceptance, and stable dispatch operations.",
  },
];


const ownerOperatorCards = [
  {
    title: "Operational Cost Management",
    items: [
      "Fuel expense support",
      "Insurance payment stability",
      "Truck payment continuity",
      "Permit and compliance funding",
      "Maintenance cost coverage",
      "Operational overhead support",
    ],
  },
  {
    title: "Cash Flow and Dispatch Stability",
    items: [
      "Faster invoice funding",
      "Reduced dispatch interruptions",
      "Better weekly settlements",
      "Improved operational continuity",
      "Lower financial pressure",
      "Consistent freight movement",
    ],
  },
  {
    title: "Support for New MC Authorities",
    items: [
      "Reduced startup cash strain",
      "Faster working capital access",
      "Support during payment delays",
      "Improved freight sustainability",
      "Better broker relationship growth",
      "Stable early-stage operations",
    ],
  },
  {
    title: "Small Fleet Financial Support",
    items: [
      "Multi-truck expense management",
      "Payroll funding stability",
      "Higher fuel volume support",
      "Invoice management efficiency",
      "Improved fleet scalability",
      "Better operational flexibility",
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


const recourseFactoringComparisons: [string, string][] = [
  [
    "Recourse Freight Factoring",
    "Recourse factoring keeps the carrier financially responsible if a broker fails to pay the freight invoice. Because the factoring provider assumes lower financial risk, this structure usually offers lower factoring fees, reduced operating costs, and faster approval processes for carriers working with stable broker networks.",
  ],
  [
    "Non-Recourse Freight Factoring",
    "Non-recourse factoring provides additional payment protection if a broker becomes insolvent or files bankruptcy under covered agreement conditions. In this structure, the factoring provider assumes certain payment risks instead of transferring the financial responsibility back to the carrier, which creates stronger financial protection but usually higher factoring costs.",
  ],
  [
    "Choosing The Right Factoring Structure",
    "The difference between these structures affects factoring expenses, payment protection levels, operational risk exposure, and long-term financial stability. Choosing the correct factoring model depends on broker quality, freight volume, operational goals, risk tolerance, and the overall stability of the carrier’s freight network.",
  ],
];

const recourseVsNonRecourseColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Feature",
  },
  {
    key: "recourse",
    label: "Recourse Factoring",
  },
  {
    key: "nonRecourse",
    label: "Non-Recourse Factoring",
  },
];

const recourseVsNonRecourseRows: ComparisonRow[] = [
  {
    factor: "Factoring Cost",
    recourse: "Lower",
    nonRecourse: "Higher",
  },
  {
    factor: "Broker Bankruptcy Protection",
    recourse: "Limited",
    nonRecourse: "Included",
  },
  {
    factor: "Carrier Financial Risk",
    recourse: "Higher",
    nonRecourse: "Lower",
  },
  {
    factor: "Best For",
    recourse: "Stable broker networks",
    nonRecourse: "Higher-risk freight operations",
  },
];

const brokerCreditPaymentSteps: [string, string[]][] = [
  [
    "Broker Credit Analysis",
    [
      "Broker payment evaluation",
      "Financial stability review",
      "Credit history monitoring",
      "Invoice reliability analysis",
      "Payment risk reduction",
    ],
  ],
  [
    "Payment Reliability and Freight Risk",
    [
      "Delayed payment prevention",
      "Invoice dispute reduction",
      "Safer freight selection",
      "Reduced settlement risk",
      "Better cash flow stability",
    ],
  ],
  [
    "Transportation Credit Monitoring",
    [
      "Carrier411 verification",
      "RMIS monitoring systems",
      "Payment history tracking",
      "Freight credit analysis",
      "Broker behavior evaluation",
    ],
  ],
  [
    "Fraud Prevention and Broker Verification",
    [
      "Double brokering prevention",
      "Fraudulent load detection",
      "Non-paying broker screening",
      "Bankruptcy risk monitoring",
      "Invoice fraud reduction",
    ],
  ],
  [
    "Operational Stability and Financial Protection",
    [
      "Improved dispatch stability",
      "Stronger financial protection",
      "Reduced operational disruption",
      "Safer freight coordination",
      "Better long-term continuity",
    ],
  ],
];

const fuelAdvanceServices = [
  {
    title: "Fuel Card Integration Benefits",
    description:
      "Fuel card integration improves operational efficiency through fuel discounts, expense tracking, invoice-based cashflow structuring, and location-based fuel planning. It helps trucking operations manage access to fuel payments, control costs, and monitor utilization during freight movement.",
    image: "/Factoring/images/16_rectangle_1078.webp",
    imageAlt: "Driver using fuel card at fuel station",
  },
  {
    title: "Route Flexibility and Dispatch Continuity",
    description:
      "Reliable access to fuel funding improves route planning flexibility, reduces idle time, supports faster reload movement, and helps maintain route coordination during changing freight, regional demand, and traffic conditions.",
    image: "/Factoring/images/15_rectangle_1076.webp",
    imageAlt: "Fuel can with truck in background",
  },
  {
    title: "Fuel Advance Support",
    description:
      "Many freight factoring programs provide fuel advance options that release partial payment before broker payment is received. This funding helps carriers continue fuel purchases, reduce operational delays, and maintain same-day dispatch continuity during high-cost regional freight movement.",
    image: "/Factoring/images/14_rectangle_1077.webp",
    imageAlt: "Fuel pump station for truck fueling",
    accent: true,
  },
  {
    title: "Diesel Price and Margin Protection",
    description:
      "Fuel card programs become especially valuable during periods of diesel price volatility when carriers need predictable fueling terms. Better fuel purchasing strategies help reduce cost exposure and improve operational predictability across active freight schedules.",
    image: "/Factoring/images/13_rectangle_1074.webp",
    imageAlt: "Fuel card payment terminal",
  },
];

const dispatchFactoringIntegrationCards = [
  {
    title: "Cash Flow and Dispatch Continuity",
    description:
      "Freight factoring improves dispatch continuity by establishing operational funding between broker payment cycles.",
    iconSrc: "/Factoring/images/22_rectangle_1553.webp",
    iconAlt: "Cash flow icon",
  },
  {
    title: "Operational Flexibility and Load Acceptance",
    description:
      "When dispatch systems operate alongside factoring support, carriers gain faster load acceptance capability.",
    logoSrc: "/Factoring/images/18_rectangle_1643.webp",
    logoAlt: "Load acceptance icon",
  },
  {
    title: "Freight Coordination and Carrier Stability",
    description:
      "Dispatch planning becomes more effective when carriers maintain predictable access to working capital.",
    imageSrc: "/Factoring/images/19_rectangle_1645.webp",
    imageAlt: "Freight coordination icon",
  },
];

const powerOnlyTechnologyCards: DispatchTechnologyCard[] = [
  {
    title: "No Forced Dispatch",
    description:
      "Drivers maintain full authority over load approval decisions. Freight options are presented according to preferred lanes, operational goals, and profitability expectations instead of forced booking pressure.",
    iconSrc: "/Factoring/images/20_rectangle_1549.webp",
    iconAlt: "No forced dispatch icon",
  },
  {
    title: "Verified Broker Network",
    description:
      "Freight fraud and double brokering continue to create financial risks across the transportation industry. Our dispatch team performs broker screening and credit analysis before freight booking to reduce payment-related exposure.",
    iconSrc: "/Factoring/images/21_rectangle_1551.webp",
    iconAlt: "Verified broker network icon",
  },
  {
    title: "24/7 Dispatch Communication",
    description:
      "Freight operations continue beyond standard business hours. Our dispatch support remains active to assist with broker communication, appointment updates, freight tracking, and operational adjustments during active shipments.",
    iconSrc: "/Factoring/images/23_rectangle_1555.webp",
    iconAlt: "24/7 dispatch communication icon",
  },
  {
    title: "Back-Office Assistance",
    description:
      "Dispatching involves more than booking freight. Administrative coordination supports operational consistency through rate confirmations, BOL handling, invoicing coordination, detention documentation, and factoring communication.",
    iconSrc: "/Factoring/images/22_rectangle_1553.webp",
    iconAlt: "Back-office assistance icon",
  },
];



const factoringProblemCards: ActivationCard[] = [
  {
    title: "Delayed Broker Payments",
    items: [
      "Slower cash flow access",
      "Increased payment waiting periods",
      "Unstable revenue timing",
      "Delayed invoice settlements",
      "Reduced financial flexibility",
    ],
    description:
      "Delayed settlements reduce working capital availability across daily trucking operations.",
  },
  {
    title: "Fuel Purchase Difficulties",
    items: [
      "Limited diesel funding",
      "Reduced route flexibility",
      "Dispatch interruptions during trips",
      "Higher fuel cost pressure",
      "Restricted load movement",
    ],
    description:
      "Fuel shortages can slow freight movement and reduce dispatch efficiency.",
  },
  {
    title: "Maintenance and Repair Delays",
    items: [
      "Delayed truck repairs",
      "Slower preventive maintenance",
      "Higher operational downtime",
      "Emergency repair delays",
      "Increased breakdown risks",
    ],
    description: "Limited maintenance funding increases operational risk.",
  },
  {
    title: "Payroll and Driver Stability",
    items: [
      "Delayed driver settlements",
      "Scheduling instability risks",
      "Driver retention pressure",
      "Payroll timing disruptions",
    ],
    description:
      "Unstable payroll timing affects driver consistency and operational continuity.",
  },
  {
    title: "Market Volatility Pressure",
    items: [
      "Seasonal freight instability",
      "Changing fuel costs",
      "Inconsistent freight demand",
      "Regional pricing fluctuations",
      "Operational uncertainty risks",
    ],
    description:
      "Market fluctuations create additional financial pressure across trucking operations.",
  },
  {
    title: "Limited Fleet Growth",
    items: [
      "Slower fleet expansion",
      "Higher operational restrictions",
      "Reduced scalability potential",
      "Limited equipment upgrades",
      "Restricted hiring capability",
    ],
    description:
      "Limited cash flow slows operational growth and fleet development opportunities.",
  },
];

const factoringVisionParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const factoringFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const freightFactoringCompanyBenefits = [
  {
    title: "Fast Invoice Processing And Funding Speed",
    iconSrc: "/Factoring/images/27_rectangle_1537.webp",
    iconAlt: "Fast invoice processing icon",
  },
  {
    title: "Strong Broker Credit Verification Systems",
    iconSrc: "/Factoring/images/29_rectangle_1539.webp",
    iconAlt: "Broker credit verification icon",
  },
  {
    title: "Transparent Contracts Without Hidden Fees",
    iconSrc: "/Factoring/images/12_rectangle_1541.webp",
    iconAlt: "Transparent contracts icon",
  },
  {
    title: "Same-Day Funding Capabilities",
    iconSrc: "/Factoring/images/22_rectangle_1553.webp",
    iconAlt: "Same-day funding icon",
  },
  {
    title: "Real-Time Invoice Tracking Platforms",
    iconSrc: "/Factoring/images/30_rectangle_1546.webp",
    iconAlt: "Invoice tracking icon",
  },
  {
    title: "TMS And Dispatch Workflow Compatibility",
    iconSrc: "/Factoring/images/32_rectangle_1547.webp",
    iconAlt: "Dispatch workflow icon",
  },
];

const carrierChoiceBenefits: FreightBenefit[] = [
  {
    text: "Improved freight continuity across active freight lanes",
  },
  {
    text: "Reduced downtime through efficient dispatch coordination",
  },
  {
    text: "Better operational visibility and workflow stability",
  },
  {
    text: "Reliable support for owner-operators and growing fleets",
  },
];


const freightTypesSupportedColumns: ComparisonColumn[] = [
  {
    key: "freightType",
    label: "Freight Type",
  },
  {
    key: "supportFocus",
    label: "Operational Support Focus",
  },
];

const freightTypesSupportedRows: ComparisonRow[] = [
  {
    factor: "Dry Van",
    freightType: "Dry Van",
    supportFocus: "General freight coordination",
  },
  {
    factor: "Reefer",
    freightType: "Reefer",
    supportFocus: "Temperature-sensitive freight planning",
  },
  {
    factor: "Flatbed",
    freightType: "Flatbed",
    supportFocus: "Oversized freight workflow support",
  },
  {
    factor: "Step Deck",
    freightType: "Step Deck",
    supportFocus: "Height-sensitive load coordination",
  },
  {
    factor: "Box Truck",
    freightType: "Box Truck",
    supportFocus: "Local and regional freight support",
  },
  {
    factor: "Hotshot",
    freightType: "Hotshot",
    supportFocus: "Expedited dispatch operations",
  },
  {
    factor: "Power Only",
    freightType: "Power Only",
    supportFocus: "Trailer movement operations",
  },
];

const freightFactoringFaqs: FAQItem[] = [
  {
    question: "What is freight factoring?",
    answer:
      "Freight factoring converts unpaid freight invoices into immediate working capital for carriers.",
  },
  {
    question: "How fast do carriers receive payment?",
    answer:
      "Carriers may receive funding the same day or within 24 hours, depending on invoice approval, broker verification, and factoring provider terms.",
  },
  {
    question: "Can owner-operators use freight factoring?",
    answer:
      "Yes. Owner-operators use freight factoring to improve cash flow, cover fuel costs, manage repairs, and keep dispatch operations moving between broker payment cycles.",
  },
  {
    question: "Is freight factoring different from a business loan?",
    answer:
      "Yes. Freight factoring is based on unpaid invoices, while a business loan creates debt that must be repaid under lending terms.",
  },
  {
    question: "How does factoring help dispatch operations?",
    answer:
      "Factoring gives carriers faster access to working capital, which supports fuel purchases, route continuity, driver payments, and better load acceptance.",
  },
  {
    question: "Does factoring help with fuel expenses?",
    answer:
      "Yes. Many factoring programs support fuel advances or fuel card access, helping carriers manage diesel costs before broker payments arrive.",
  },
];

const factoringQuestionStats: Stat[] = [
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
const freightBenefits: FreightBenefit[] = [
  { text: "Faster load access through real-time freight monitoring" },
  { text: "Reduced deadhead miles with RPM-focused route planning" },
  { text: "Dedicated dispatch coordination and broker communication" },
  {
    text: "Improved revenue consistency with profitable freight opportunities",
  },
];

export default function Factoring() {
  return (
    <main className="bg-neutral-900 text-white">    
        <HeroSection
            h1="Fast Cash Flow Solutions for Owner-Operators and Trucking Fleets"
            paragraphs={[
                "Freight transportation operates on movement, timing, and continuity. Trucks continue moving across freight lanes every day, but broker and shipper payments often move much slower than operational expenses. Fuel purchases, truck repairs, insurance premiums, payroll obligations, toll charges, and maintenance costs continue long before freight invoices are paid.Freight transportation operates on movement, timing, and continuity. Trucks continue moving across freight lanes every day, but broker and shipper payments often move much slower than operational expenses. Fuel purchases, truck repairs, insurance premiums, payroll obligations, toll charges, and maintenance costs continue long before freight invoices are paid.Freight transportation operates on movement, timing, and continuity. Trucks continue moving across freight lanes every day, but broker and shipper payments often move much slower than operational expenses. Fuel purchases, truck repairs, insurance premiums, payroll obligations, toll charges, and maintenance costs continue long before freight invoices are paid.Freight transportation operates on movement, timing, and continuity. Trucks continue moving across freight lanes every day, but broker and shipper payments often move much slower than operational expenses. Fuel purchases, truck repairs, insurance premiums, payroll obligations, toll charges, and maintenance costs continue long before freight invoices are paid.Freight transportation operates on movement, timing, and continuity. Trucks continue moving across freight lanes every day, but broker and shipper payments often move much slower than operational expenses. Fuel purchases, truck repairs, insurance premiums, payroll obligations, toll charges, and maintenance costs continue long before freight invoices are paid.",
                "Many carriers complete multiple loads while waiting weeks for payment processing. This delay creates operational pressure that affects dispatch continuity, fuel management, and load acceptance capacity. Freight factoring helps carriers reduce these financial interruptions by converting unpaid freight invoices into immediate working capital.",
                "E-Truck Dispatching supports owner-operators and fleets with freight factoring solutions designed to improve cash flow stability, reduce payment delays, and support continuous dispatch operations across multiple freight types.",
            ]}
            backgroundImage="/factoring/images/1_rectangle_1450.webp"
            backgroundAlt="Truck driver using a tablet to manage invoices and payments"
        />
      
        <RevenuePanelSection
      heading=""
      description=""
      groups={mcDotGroups}
      image="/MC DOT Setup/images/4_rectangle_1558.webp"
      backgroundImage="/icons/4_vector_3.svg"
    />
     
        <TechnologyOperationsSection
      heading={
        <>
          How Freight Factoring Works <br />
          for Carriers
        </>
      }
      paragraphs={[
        "The freight factoring process begins immediately after freight delivery when the carrier submits documents such as the bill of lading, BOL, proof of delivery, POD, rate confirmation paperwork, and freight invoice details.",
        "The factoring provider verifies delivery status, broker payment reliability, invoice accuracy, and freight authorization before releasing funding through ACH transfer, wire payment, or same-day funding systems.",
      ]}
      features={freightFeatures}
      image="/Factoring/images/5_rectangle_1556.webp"
      imageAlt="Orange freight truck used for factoring service section"
    />
      
        <ComparisonTableSection
      heading=""
      tableTitle=""
      columns={factoringColumns}
      rows={factoringRows}
      compactTop
    />
      
        <ComplianceMatrixSection
      heading="Why Trucking Companies Use Freight Factoring Services"
      description="Freight factoring helps trucking companies maintain stable cash flow, improve operational continuity, and reduce financial pressure caused by delayed broker payments. Faster invoice funding supports smoother dispatch operations, stronger scheduling consistency, and reduced downtime across daily freight movement."
      cards={factoringCards}
      image="/Factoring/images/6_rectangle_1560.webp"
      imageAlt="Trucking company team near freight trailer"
    />
      
        <SupportColumnsSection
      heading="Freight Factoring for Owner-Operators and Small Fleets"
      intro="Freight factoring helps owner-operators and small fleets maintain stable cash flow, reduce operational pressure, and continue freight operations without waiting through delayed broker payment cycles."
      image="/Factoring/images/7_rectangle_1426.webp"
      imageAlt="Owner-operators discussing freight paperwork near a truck"
      cards={ownerOperatorCards}
    />
      
        <VisionFormSection
      heading="E Truck Dispatching"
      paragraphs={visionParagraphs}
      fields={formFields}
    />
      
        <ComparisonCardsSection
  heading="Recourse vs Non-Recourse Freight Factoring"
  description="Freight factoring programs operate under different financial risk structures that affect payment protection, operational risk exposure, and factoring costs. The two most common models used in trucking operations are recourse factoring and non-recourse factoring."
  comparisons={recourseFactoringComparisons}
   icons={[
    "/Factoring/images/10_rectangle_1545.webp",
    "/Factoring/images/11_rectangle_1539.webp",
    "/Factoring/images/12_rectangle_1541.webp",
  ]}
  iconAlts={[
    "Recourse freight factoring icon",
    "Non-recourse freight factoring icon",
    "Factoring structure icon",
  ]}
/>
    
        <ComparisonTableSection
  heading=""
  tableTitle=""
  columns={recourseVsNonRecourseColumns}
  rows={recourseVsNonRecourseRows}
  compactTop
/>
      
        <ProcessGridSection
      heading="Broker Credit Checks and Payment Protection"
      steps={brokerCreditPaymentSteps}
    />
     
        <OurServices
      heading="Fuel Advances and Fuel Card Benefits"
      description="Fuel expenses directly affect dispatch profitability and operational continuity across trucking operations. Freight factoring programs paired with fuel card systems help carriers maintain fuel access, improve cash flow flexibility, and support continuous freight movement."
      services={fuelAdvanceServices}
    />
      
        <FreightTypesSection
      heading="Dispatching and Freight Factoring Integration"
      description="Dispatch operations and cash flow management work together to support operational continuity, stable freight movement, and stronger load acceptance performance across modern trucking operations."
      freightTypes={dispatchFactoringIntegrationCards}
    />
      
        <DispatchTechnologyGridSection
      heading="Technology Used in Modern Power Only Dispatching"
      image="/Factoring/images/24_rectangle_1565.webp"
      imageAlt="Power only dispatching truck"
      cards={powerOnlyTechnologyCards}
    />
      
        <ActivationSystemSection
  heading="Problems Carriers Face Without Freight Factoring"
  description="Slow broker payment cycles create operational pressure across trucking businesses because daily expenses often increase faster than incoming revenue. Freight factoring helps carriers improve cash flow stability, reduce operational disruption, and maintain more consistent dispatch continuity."
  cards={factoringProblemCards}
  image="/Factoring/images/25_rectangle_1426.webp"
  imageAlt="Dispatch office team handling freight factoring problems"
/>
      
        <VisionFormSection
      heading="E Truck Dispatching"
      paragraphs={factoringVisionParagraphs}
      fields={factoringFormFields}
    />
      
        <BenefitsGridSection
      heading="How to Choose the Right Freight Factoring Company"
      description="Choosing The Right Freight Factoring Company Depends On Funding Speed, Contract Transparency, Broker Verification, And Operational Support."
      benefits={freightFactoringCompanyBenefits}
    />
     
        <FreightBenefitsSection
  heading={
    <>
      Getting Started (Simple <br />
      Process)
    </>
  }
  benefits={freightBenefits}
  defaultIconSrc="/Factoring/images/36_rectangle_33.webp"
  defaultIconAlt="Check icon"
/>
    
        <ComparisonTableSection
      heading="Freight Types Supported"
      description="E-Truck Dispatching supports multiple freight categories and equipment types across regional and long-haul operations."
      tableTitle=""
      columns={freightTypesSupportedColumns}
      rows={freightTypesSupportedRows}
      compactTop
      />
      
        <FAQSection
      heading="Frequently Asked Questions"
      description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
      image="/Factoring/images/43_rectangle_1441.webp"
      imageAlt="Carrier working on freight factoring documents in office"
      faqs={freightFactoringFaqs}
    />
      
        <QuestionStats
      heading="Still Have Questions?"
      description="Our billing experts are here to help. Get in touch for a free consultation."
      buttonText="Talk to an Expert"
      buttonHref="/contact"
      stats={factoringQuestionStats}
    />
    </main>
  );
}
