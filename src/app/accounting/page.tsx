import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import BenefitsGridSection from "../components/BenefitsGridSection";
import BrokerNetworkSection from "../components/BrokerNetworkSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComparisonTableSection, { ComparisonColumn, ComparisonRow } from "../components/ComparisonTableSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import DispatchAudienceSection, { DispatchAudience } from "../components/DispatchAudienceSection";
import DispatchTechnologyGridSection, { DispatchTechnologyCard} from "../components/DispatchTechnologyGridSection";
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
const truckingAccountingComparisons: [string, string][] = [
  [
    "Financial Management For Trucking Operations",
    "Trucking companies generate continuous financial activity through load bookings, broker payments, fuel purchases, maintenance expenses, toll charges, equipment financing, and payroll distribution. Specialized accounting systems help organize and track these transactions accurately across daily fleet operations.",
  ],
  [
    "Centralized Accounting And Operational Visibility",
    "When dispatch operations and accounting systems operate separately, carriers often lose visibility into profitability, cash flow, and operational expenses. Trucking accounting creates a centralized structure where invoicing, bookkeeping, expense tracking, and financial reporting work together within one system.",
  ],
  [
    "Improved Profitability And Administrative Efficiency",
    "Structured trucking accounting improves financial accuracy, operational reporting, and tax management while reducing administrative pressure on drivers, dispatchers, and fleet managers. Better financial visibility also supports stronger decision-making and long-term operational stability.",
  ],
];
const coreAccountingCards: [string, string[]][] = [
  [
    "Trucking Bookkeeping Services",
    [
      "Trucking bookkeeping requires more than basic transaction entry because every operational expense affects fleet profitability. Our bookkeeping system manages daily transactions, fuel expenses, maintenance costs, bank reconciliation, freight revenue tracking, and monthly financial reporting to improve financial visibility and operational control.",
    ],
  ],
  [
    "Freight Invoice & Payment Management",
    [
      "Our invoicing workflow manages the complete billing cycle from dispatched load to final payment reconciliation. We organize rate confirmations, proof of delivery documents, receivables tracking, broker payments, and factoring coordination to improve cash flow consistency and reduce payment delays.",
    ],
  ],
  [
    "Trucking Payroll & Driver Settlement Management",
    [
      "We manage driver settlements, payroll calculations, reimbursements, deductions, fuel advances, toll expenses, and tax reporting through structured payroll systems designed specifically for trucking operations and fleet payment structures.",
    ],
  ],
  [
    "Accounts Payable & Expense Monitoring",
    [
      "Our accounting workflow tracks fuel purchases, repairs, permits, insurance renewals, subscriptions, financing payments, and operational expenses to help carriers monitor spending patterns, control recurring costs, and improve overall financial management.",
    ],
  ],
];
const truckingFinancialChallengeGroups: RevenueGroup[] = [
  {
    title: "Cash Flow Instability in Trucking Operations",
    intro: [
      "Many trucking companies face financial pressure because expenses must be paid before broker settlements arrive. Fuel purchases, payroll obligations, maintenance costs, and insurance payments create continuous cash flow demands. Our accounting system improves receivable tracking, payment forecasting, and financial visibility.",
    ],
  },
  {
    title: "Revenue Leakage and Billing Inconsistencies",
    intro: [
      "Revenue loss often occurs through missing detention payments, inaccurate settlements, untracked accessorial charges, and billing inconsistencies. Our workflow monitors invoices, settlements, and operational expenses to reduce financial leakage across dispatch operations.",
    ],
  },
  {
    title: "Complex Financial Reporting and Compliance",
    intro: [
      "Trucking companies manage reporting requirements involving IFTA, payroll records, mileage tracking, and tax documentation. Our accounting systems maintain organized financial records that improve reporting accuracy and compliance stability.",
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
const accountingCarrierTypes: FreightTypeCard[] = [
  {
    title: "Accounting for Owner-Operators",
    description:
      "Our owner-operator accounting system helps independent drivers manage bookkeeping, tax deduction tracking, expense categorization, per diem management, quarterly reporting, and operational financial organization through structured accounting workflows designed specifically for trucking operations.",
    iconSrc: "/Accounting/images/10_rectangle_1607.webp",
    iconAlt: "Accounting services for owner-operators icon",
  },
  {
    title: "Small Fleet Accounting Services",
    description:
      "We provide centralized accounting systems for multi-truck operations, including bookkeeping, payroll management, maintenance tracking, operational expense monitoring, invoicing, and profitability reporting across daily fleet activities and dispatch operations.",
    iconSrc: "/Accounting/images/11_rectangle_1643.webp",
    iconAlt: "Small fleet accounting services icon",
  },
  {
    title: "Financial Support for Growing Carriers",
    description:
      "Our accounting systems support growing carriers through budgeting, asset tracking, profitability analysis, financial forecasting, working capital management, and long-term operational planning designed to support scalable fleet growth.",
    iconSrc: "/Accounting/images/12_rectangle_1645.webp",
    iconAlt: "Financial support for growing trucking carriers icon",
  },
];
const dispatchFinancialColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Dispatch Activity",
  },
  {
    key: "financialImpact",
    label: "Financial Impact",
  },
];

const dispatchFinancialRows: ComparisonRow[] = [
  {
    factor: "Load booking",
    financialImpact: "Revenue generation",
  },
  {
    factor: "Route planning",
    financialImpact: "Fuel expense control",
  },
  {
    factor: "Deadhead miles",
    financialImpact: "Profitability reduction",
  },
  {
    factor: "Driver assignments",
    financialImpact: "Payroll calculations",
  },
  {
    factor: "POD submission",
    financialImpact: "Invoice processing",
  },
  {
    factor: "Broker payments",
    financialImpact: "Cash flow movement",
  },
];
const truckingTaxComplianceCards = [
  {
    title: "IFTA Reporting & Fuel Tax Tracking",
    items: [
      "Mileage allocation tracking",
      "Fuel purchase documentation",
      "Multi-jurisdiction reporting",
      "Quarterly IFTA preparation",
      "Fuel tax compliance management",
      "Fuel record organization",
    ],
  },
  {
    title: "HVUT Form 2290 Filing Support",
    items: [
      "Form 2290 filing preparation",
      "Payment verification support",
      "Deadline monitoring systems",
      "IRS documentation management",
      "Compliance reporting accuracy",
      "Filing record maintenance",
    ],
  },
  {
    title: "Audit-Ready Financial Documentation",
    items: [
      "Organized financial recordkeeping",
      "Expense verification management",
      "Audit preparation support",
      "Operational reporting accuracy",
      "Compliance documentation storage",
      "Financial data organization",
    ],
  },
  {
    title: "Operational Compliance Record Management",
    items: [
      "Fuel purchase records",
      "Driver payroll documentation",
      "Mileage tracking reports",
      "Maintenance expense records",
      "Insurance documentation",
      "Tax filing records",
    ],
  },
];
const financialKpiServices: Service[] = [
  {
    title: "Cost Per Mile Tracking",
    description:
      "Cost per mile tracking helps identify operational expenses related to fuel, maintenance, payroll, tolls, insurance, permits, and equipment usage. Accurate CPM analysis allows carriers to control operating costs and improve long-term financial efficiency.",
    image: "/Accounting/images/18_rectangle_1078.webp",
    imageAlt:
      "Trucking accountant reviewing financial performance data on a tablet",
  },
  {
    title: "Deadhead and Payment Cycle Performance",
    description:
      "Deadhead percentage and broker payment cycles influence route efficiency, cash flow timing, and dispatch profitability. Tracking these metrics helps carriers improve freight planning, reduce non-revenue miles, and maintain more consistent financial operations.",
    image: "/Accounting/images/17_rectangle_1076.webp",
    imageAlt:
      "Accounting professional reviewing payment cycle and financial reports",
  },
  {
    title: "Revenue Per Mile Analysis",
    description:
      "Revenue per mile helps carriers measure freight profitability across different routes, customers, freight types, and operational lanes. Monitoring RPM consistently improves pricing strategies, dispatch planning, lane selection, and overall revenue optimization across trucking operations.",
    image: "/Accounting/images/16_rectangle_1077.webp",
    imageAlt:
      "Financial analyst monitoring trucking revenue performance on a computer",
    accent: true,
  },
  {
    title: "Fuel and Maintenance Expense Monitoring",
    description:
      "Fuel expense ratios and maintenance cost trends directly affect fleet profitability and operational stability. Monitoring these expenses helps carriers reduce unnecessary spending, improve equipment performance, and maintain stronger operational budgeting systems.",
    image: "/Accounting/images/15_rectangle_1074.webp",
    imageAlt:
      "Business professional reviewing trucking fuel and maintenance expenses",
  },
];
const accountingTechnologyCards = [
  {
    title: "Trucking Software Integration",
    description:
      "Modern trucking accounting depends on connected software systems that improve financial accuracy, operational visibility, reporting efficiency, and overall financial management across fleet operations.",
    iconSrc: "/Accounting/images/19_rectangle_1549.webp",
    iconAlt: "Trucking software integration icon",
  },
  {
    title: "Automated Financial Workflows",
    description:
      "Our accounting workflow integrates with trucking management systems, payroll platforms, fuel card providers, invoicing systems, and cloud-based accounting software to reduce manual bookkeeping delays, reporting errors, and administrative workload.",
    iconSrc: "/Accounting/images/20_rectangle_1551.webp",
    iconAlt: "Automated financial workflows icon",
  },
  {
    title: "ELD and Operational Data Synchronization",
    description:
      "Integration with ELD systems and operational platforms improves mileage tracking, fuel reporting, payroll coordination, expense monitoring, and financial record accuracy across dispatch and transportation operations.",
    iconSrc: "/Accounting/images/22_rectangle_1555.webp",
    iconAlt: "ELD and operational data synchronization icon",
  },
  {
    title: "Real-Time Financial Visibility",
    description:
      "Real-time reporting systems help carriers monitor revenue activity, operational expenses, payroll obligations, cash flow trends, and profitability performance without depending entirely on manual bookkeeping processes.",
    iconSrc: "/Accounting/images/21_rectangle_1553.webp",
    iconAlt: "Real-time trucking financial visibility icon",
  },
] satisfies DispatchTechnologyCard[];
const truckingAccountingProcess: DispatchAudience[] = [
  {
    title: "Financial Assessment & Workflow Analysis",
    description:
      "We review the carrier’s accounting structure, bookkeeping workflows, dispatch coordination, and compliance reporting systems to identify financial inefficiencies, reporting gaps, and operational weaknesses.",
  },
  {
    title: "System Setup & Operational Integration",
    description:
      "After assessment, we configure accounting workflows based on fleet operations and financial requirements. This includes payroll setup, invoicing workflows, expense tracking, and reporting systems aligned with dispatch operations.",
  },
  {
    title: "Ongoing Financial Management",
    description:
      "Once systems are established, our accounting workflow focuses on maintaining financial accuracy, improving reporting visibility, and supporting long-term operational profitability.",
  },
];
const monthlyAccountingColumns: ComparisonColumn[] = [
  {
    key: "factor",
    label: "Monthly Activity",
  },
  {
    key: "operationalBenefit",
    label: "Operational Benefit",
  },
];

const monthlyAccountingRows: ComparisonRow[] = [
  {
    factor: "Bookkeeping updates",
    operationalBenefit: "Accurate financial records",
  },
  {
    factor: "Invoice reconciliation",
    operationalBenefit: "Better cash flow visibility",
  },
  {
    factor: "Payroll processing",
    operationalBenefit: "Driver payment accuracy",
  },
  {
    factor: "Expense monitoring",
    operationalBenefit: "Improved cost control",
  },
  {
    factor: "Financial reporting",
    operationalBenefit: "Stronger decision-making",
  },
  {
    factor: "Tax preparation support",
    operationalBenefit: "Compliance stability",
  },
];
const truckingAccountingBenefits = [
  "Transportation-focused bookkeeping systems",
  "Dispatch-integrated accounting workflows",
  "Accurate freight invoicing management",
  "Compliance-ready reporting",
  "Long-term profitability visibility",
];
const professionalAccountingBenefits: [string, string[]][] = [
  [
    "Operational Efficiency Improvement",
    [
      "Organized accounting workflows",
      "Reduced administrative workload",
      "Faster financial processing",
      "Better dispatch coordination",
      "Improved operational structure",
    ],
  ],
  [
    "Financial Visibility and Reporting",
    [
      "Real-time financial tracking",
      "Revenue performance visibility",
      "Expense monitoring systems",
      "Profitability reporting accuracy",
      "Better financial decision-making",
    ],
  ],
  [
    "Compliance and Record Management",
    [
      "Organized compliance documentation",
      "Improved reporting accuracy",
      "Tax record management",
      "Audit-ready financial records",
      "Reduced compliance risk",
    ],
  ],
  [
    "Profitability and Cash Flow Control",
    [
      "Reduced revenue leakage",
      "Better invoice management",
      "Operational cost control",
      "Improved cash flow forecasting",
      "Stronger financial stability",
    ],
  ],
  [
    "Scalable Growth Support",
    [
      "Expansion-ready accounting systems",
      "Multi-truck financial management",
      "Structured operational reporting",
      "Long-term financial planning",
      "Improved business scalability",
    ],
  ],
];
const freightSegmentBenefits = [
  {
    title: "Dry Van Carrier Accounting",
    iconSrc: "/Accounting/images/25_rectangle_1537.webp",
    iconAlt: "Dry van carrier accounting icon",
  },
  {
    title: "Reefer Fleet Financial Management",
    iconSrc: "/Accounting/images/26_rectangle_1545.webp",
    iconAlt: "Reefer fleet financial management icon",
  },
  {
    title: "Flatbed Operation Bookkeeping",
    iconSrc: "/Accounting/images/27_rectangle_1539.webp",
    iconAlt: "Flatbed operation bookkeeping icon",
  },
  {
    title: "Power-Only Carrier Accounting",
    iconSrc: "/Accounting/images/28_rectangle_1546.webp",
    iconAlt: "Power-only carrier accounting icon",
  },
  {
    title: "Step Deck Trucking Support",
    iconSrc: "/Accounting/images/29_rectangle_1541.webp",
    iconAlt: "Step deck trucking accounting support icon",
  },
  {
    title: "Hotshot And Box Truck Accounting",
    iconSrc: "/Accounting/images/30_rectangle_1547.webp",
    iconAlt: "Hotshot and box truck accounting icon",
  },
];
const faqs: FAQItem[] = [
  {
    question: "What do trucking accounting services include?",
    answer:
      "Trucking accounting services include bookkeeping, freight invoicing, payroll and driver settlements, expense tracking, tax reporting, IFTA preparation, financial reporting, and cash flow monitoring.",
  },
  {
    question:
      "Why is trucking accounting different from regular bookkeeping?",
    answer:
      "Trucking accounting tracks industry-specific financial activity such as fuel purchases, broker payments, driver settlements, tolls, maintenance expenses, mileage records, IFTA reporting, and revenue per mile.",
  },
  {
    question: "Do owner-operators need professional accounting services?",
    answer:
      "Professional accounting support helps owner-operators organize income and expenses, track tax deductions, manage quarterly reporting, monitor profitability, and maintain accurate financial records.",
  },
  {
    question: "What financial reports should trucking companies monitor?",
    answer:
      "Trucking companies should monitor profit and loss statements, balance sheets, cash flow reports, accounts receivable, expense summaries, revenue per mile, cost per mile, and driver settlement reports.",
  },
  {
    question: "Can trucking accountants handle IFTA reporting?",
    answer:
      "Yes. Trucking accountants organize mileage and fuel-purchase records, calculate jurisdiction-based fuel tax activity, prepare quarterly IFTA reports, and maintain supporting documentation.",
  },
  {
    question: "What is HVUT Form 2290?",
    answer:
      "HVUT Form 2290 is an IRS form used to report and pay the federal Heavy Highway Vehicle Use Tax for qualifying heavy vehicles operated on public highways.",
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




export default function accountingPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>Trucking Accounting Services for Owner-Operators & Fleets</>}
        paragraphs={[
          "Running a trucking company involves more than moving freight from one location to another. Every dispatched load creates financial activity connected to fuel expenses, broker payments, payroll processing, maintenance costs, compliance reporting, and tax obligations. When these financial systems are not organized properly, trucking companies struggle with cash flow instability, delayed reporting, revenue leakage, and operational inefficiencies.",
          "Our trucking accounting services are designed specifically for owner-operators, independent carriers, small fleets, and growing trucking companies that need accurate bookkeeping, freight invoicing, tax management, payroll processing, and profitability tracking. Instead of using generic accounting methods, we build transportation-focused financial systems that align directly with dispatch operations and fleet management workflows.",
          "The objective is not only maintaining financial records. The objective is improving operational visibility, controlling expenses, increasing profitability, and supporting long-term fleet growth.",
        ]}
        backgroundImage="/Accounting/images/1_rectangle_1450.webp"
        backgroundAlt="Women in hero section reviewing documents"
      />
      <ComparisonCardsSection
        heading="What Are Trucking Accounting Services?"
        description="Trucking accounting services help carriers manage payroll, invoicing, fuel costs, taxes, and operational expenses more efficiently."
        comparisons={truckingAccountingComparisons}
        icons={[
          "/Accounting/images/4_rectangle_1545.webp",
          "/Accounting/images/5_rectangle_1539.webp",
          "/Accounting/images/6_rectangle_1541.webp",
        ]}
        iconAlts={[
          "Financial management for trucking operations icon",
          "Centralized accounting and operational visibility icon",
          "Improved profitability and administrative efficiency icon",
        ]}
      />
      <ComplianceMatrixSection
        heading="Core Trucking Accounting Services We Provide"
        description="Our trucking accounting services are designed to support daily fleet operations through organized financial management, expense tracking, invoicing, payroll handling, and operational reporting systems."
        cards={coreAccountingCards}
        image="/Accounting/images/7_rectangle_1560.webp"
        imageAlt="Warehouse worker handling freight during loading operations"
        cardContentVariant="paragraph"
      />
      <RevenuePanelSection
        heading="Trucking Financial Challenges We Help Solve"
        description="Our trucking accounting systems help carriers manage cash flow, reduce revenue leakage, improve financial reporting, and maintain organized operational records across fleet operations."
        groups={truckingFinancialChallengeGroups}
        image="/Accounting/images/8_rectangle_1558.webp"
        backgroundImage="/Vector 3.svg"
      />
      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
      <FreightTypesSection
        heading={
          <>
            Accounting Solutions for
            <br />
            Different Carrier Types
          </>
        }
        description=""
        freightTypes={accountingCarrierTypes}
        columns={3}
      />

      <BrokerNetworkSection
  imagePosition="left"
  heading={
    <>
      <span className="block lg:whitespace-nowrap">
        Dispatch-Integrated Trucking
      </span>
      <span className="block">Accounting</span>
    </>
  }
  description={
    <div className="space-y-2">
      <p>
        Dispatch operations and accounting systems directly affect one another.
        Every dispatched load influences revenue generation, fuel consumption,
        payroll calculations, toll expenses, and operational profitability.
      </p>

      <p>
        Our accounting workflow integrates financial reporting with dispatch
        activity to improve operational visibility across trucking operations.
      </p>

      <p>
        This integration allows carriers to understand which freight lanes,
        brokers, routes, and operational decisions generate the strongest
        financial performance.
      </p>
    </div>
  }
  image="/Accounting/images/13_rectangle_1556.webp"
  imageAlt="Orange commercial truck and driver representing dispatch-integrated trucking accounting"
/>
<ComparisonTableSection
  heading=""
  tableTitle=""
  columns={dispatchFinancialColumns}
  rows={dispatchFinancialRows}
  compactTop
/>
<SupportColumnsSection
  heading="Trucking Tax & Compliance Management"
  intro="Our trucking tax and compliance systems help carriers manage IFTA reporting, HVUT filings, payroll records, mileage tracking, and financial documentation through organized compliance-focused accounting workflows."
  image="/Accounting/images/14_rectangle_1426.webp"
  imageAlt="Accounting professionals reviewing trucking tax and compliance documents"
  cards={truckingTaxComplianceCards}
  contentPosition="left"
/>
<OurServices
  heading={
    <>
      Financial KPIs Every Trucking
      <br />
      Company Should Monitor
    </>
  }
  description="Strong trucking operations depend on financial KPIs that measure profitability, operational efficiency, and cost control. Monitoring these metrics helps carriers improve financial planning, dispatch decisions, and long-term fleet performance."
  services={financialKpiServices}
/>
<DispatchTechnologyGridSection
  heading={
    <>
      <span className="block">Technology &amp; Software Used</span>
      <span className="block">in Trucking Accounting</span>
    </>
  }
  image="/Accounting/images/23_rectangle_1565.webp"
  imageAlt="Blue commercial truck representing trucking accounting technology"
  cards={accountingTechnologyCards}
/>
 <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
<DispatchAudienceSection
  heading={
    <>
      How Our Trucking Accounting Process
      <br />
      Works
    </>
  }
  audiences={truckingAccountingProcess}
/>
<ComparisonTableSection
  heading=""
  tableTitle=""
  columns={monthlyAccountingColumns}
  rows={monthlyAccountingRows}
  compactTop
/>
<AudienceBenefitsSection
  heading="Why Choose Our Trucking Accounting Services?"
  benefits={truckingAccountingBenefits}
  showAudiences={false}
/>
<ProcessGridSection
  heading="Benefits of Professional Trucking Accounting Services"
  steps={professionalAccountingBenefits}
/>
<BenefitsGridSection
  heading={
    <>
      Freight
      <br />
      Segments We
      <br />
      Support
    </>
  }
  description="Our trucking accounting services support dry van, reefer, flatbed, power-only, step deck, hotshot, and box truck operations with workflows adjusted to different freight requirements."
  benefits={freightSegmentBenefits}
/>
<FAQSection
  heading="Frequently Asked Questions"
  description="Get answers about trucking bookkeeping, freight invoicing, payroll, IFTA reporting, tax preparation, and financial management."
  image="/Accounting/images/37_rectangle_1441.webp"
  imageAlt="Accounting professional managing trucking financial records"
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