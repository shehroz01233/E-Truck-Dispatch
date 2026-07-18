import TechnologyOperationsSection, {
  type TechnologyFeature,
} from "../components/TechnologyOperationsSection";
import FreightTypesSection, {
  type FreightTypeCard,
} from "../components/FreightTypesSection";
import DispatchAudienceSection, {
  type DispatchAudience,
} from "../components/DispatchAudienceSection";
import FreightBenefitsSection, {
  type FreightBenefit,
} from "../components/FreightBenefitsSection";
import HeroSection from "../components/HeroSection";
import ComparisonCardsSection from "../components/ComparisonCardSection";
import ComparisonTableSection, {
  type ComparisonColumn,
  type ComparisonRow,
} from "../components/ComparisonTableSection";
import RevenuePanelSection, { type RevenueGroup } from "../components/RevenuePanelSection";
import VisionFormSection from "../components/VisionFormSection";
import FAQs, { type FAQItem } from "../components/FAQs";
import QuestionStats, { type Stat } from "../components/QuestionStats";
import OurServices, { type Service } from "../components/OurServices";
import ComplianceMatrixSection, {
  type ComplianceCard,
} from "../components/ComplianceMatrixSection";
import DispatchTechnologyGridSection, {
  type DispatchTechnologyCard,
} from "../components/DispatchTechnologyGridSection";

const bookingProblems: [string, string][] = [
  [
    "Impact of Freight Continuity on Trucking Profitability",
    "Modern trucking operations depend heavily on freight continuity. A truck without a load becomes an operational expense instead of a revenue-generating asset. Delays between loads reduce rate-per-mile performance, increase empty mileage, and create scheduling instability.",
  ],
  [
    "Problems Caused by Manual Freight Searching",
    "Manual freight searching slows dispatch operations because carriers often check multiple load boards, negotiate rates individually, verify brokers manually, and search for reload opportunities after deliveries are completed.",
  ],
  [
    "How E-Truck Dispatching Reduces Load Delays",
    "E-Truck Dispatching reduces delays by monitoring freight activity continuously throughout the day, giving carriers access to active opportunities as soon as they enter the market.",
  ],
];
const problemColumns: ComparisonColumn[] = [
  { key: "factor", label: "Operational Problem" },
  { key: "impact", label: "Impact on Carrier Revenue" },
];

const problemRows: ComparisonRow[] = [
  { factor: "Deadhead miles", impact: "Increased fuel costs" },
  { factor: "Delayed reloads", impact: "Reduced weekly revenue" },
  { factor: "Manual broker calling", impact: "Slower load booking" },
  { factor: "Poor route planning", impact: "Lower RPM performance" },
  { factor: "Inconsistent freight flow", impact: "Unstable cash flow" },
];

const fasterLoadServices: Service[] = [
  {
    title: "Faster Freight Access",
    description: "Instead of waiting for random freight opportunities, carriers gain immediate access to available loads, faster broker communication, live market-based rate negotiation, and more consistent reload planning opportunities.",
    image: "/load booking/images/7_rectangle_1074.webp",
    imageAlt: "Freight management computer in a warehouse",
  },
  {
    title: "Complete Dispatch Support",
    description: "Dedicated dispatch support includes route coordination, broker negotiation, appointment scheduling, freight tracking, paperwork handling, and load management.",
    image: "/load booking/images/8_rectangle_1077.webp",
    imageAlt: "Dedicated freight dispatcher providing support",
  },
  {
    title: "Real-Time Freight Monitoring",
    description: "Our dispatchers continuously monitor load boards, broker networks, and freight demand throughout the day to identify profitable freight opportunities quickly.",
    image: "/load booking/images/9_rectangle_1076.webp",
    imageAlt: "Freight worker monitoring shipments with a tablet",
    accent: true,
  },
  {
    title: "Dedicated Dispatcher Coordination",
    description: "Every carrier works directly with a dedicated dispatcher who understands their trailer type, preferred lanes, operational schedule, and revenue goals.",
    image: "/load booking/images/10_rectangle_1078.webp",
    imageAlt: "Dispatcher coordinating freight in a warehouse",
  },
];

const processGroups: RevenueGroup[] = [
  { title: "Carrier Setup and Compliance Review", intro: ["Before dispatching begins, our team verifies the carrier's operational setup to reduce delays during freight booking."], footer: "A properly organized onboarding process improves load approvals." },
  { title: "Equipment-Based Freight Matching", intro: ["Different trailer types require different freight strategies. Our team analyzes freight demand, lane profitability, and equipment compatibility before booking loads."] },
  { title: "Rate Negotiation and Broker Coordination", intro: ["Our dispatchers evaluate lane demand, fuel costs, and freight activity to secure better RPM and stronger freight opportunities."] },
];

const equipmentColumns: ComparisonColumn[] = [
  { key: "factor", label: "Equipment Type" },
  { key: "category", label: "Common Freight Category" },
];

const equipmentRows: ComparisonRow[] = [
  { factor: "Dry Van", category: "Retail and general freight" },
  { factor: "Reefer", category: "Food and refrigerated freight" },
  { factor: "Flatbed", category: "Steel and construction freight" },
  { factor: "Step Deck", category: "Oversized equipment" },
  { factor: "Box Truck", category: "Local and regional freight" },
  { factor: "Hotshot", category: "Expedited shipments" },
  { factor: "Power Only", category: "Trailer relocation" },
];

const formFields = [
  ["First Name", "Enter First Name", "text"], ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"], ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"], ["MC Number", "Enter MC Number", "text"],
];

const profitabilityCards: ComplianceCard[] = [
  {
    title: "RPM-Focused Load Selection",
    intro: "Dispatch decisions are based on rate-per-mile performance, fuel impact, lane profitability, reload availability, and overall operational efficiency.",
    items: [],
  },
  {
    title: "Deadhead Reduction Planning",
    intro: "Deadhead miles increase fuel costs, reduce profitability, and create operational inefficiencies. Route planning improves truck movement and freight flow.",
    items: [],
  },
  {
    title: "Backhaul and Reload Coordination",
    intro: "Backhaul coordination, reload sequencing, and lane continuity planning help carriers maintain consistent freight movement over longer distances.",
    items: [],
  },
  {
    title: "Seasonal Freight Analysis",
    intro: "Freight demand changes throughout the year based on regional market conditions, shipping trends, and industry activity. Seasonal analysis helps position carriers in stronger freight markets.",
    items: [],
  },
];

const loadBookingFaqs: FAQItem[] = [
  { question: "How fast can E-Truck Dispatching book a load?", answer: "Load booking speed depends on market conditions, equipment type, and freight availability." },
  { question: "What load boards do your dispatchers use?", answer: "Our team uses established load boards, broker networks, and current lane data to source suitable freight." },
  { question: "Do dispatchers negotiate freight rates?", answer: "Yes. Dispatchers negotiate rates and review load details before presenting an opportunity." },
  { question: "Can dispatchers help reduce deadhead miles?", answer: "Yes. Route and reload planning reduce unnecessary empty movement whenever market conditions allow." },
  { question: "Do you work with owner-operators?", answer: "Yes. Our service is built for independent owner-operators and small trucking fleets." },
  { question: "Is there forced dispatch?", answer: "No. The carrier keeps final approval over every load." },
];

const loadBookingStats: Stat[] = [
  { value: "300+", title: "Active Trucks", text: "Trucks we dispatch" },
  { value: "60+", title: "Team Members", text: "Experienced dispatchers" },
  { value: "150+", title: "MC Clients", text: "Actively working with us." },
];

const dispatchTechnologyCards: DispatchTechnologyCard[] = [
  {
    title: "No Forced Dispatch",
    description:
      "Drivers maintain full authority over load approval decisions. Freight options are presented according to preferred lanes, operational goals, and profitability expectations instead of forced booking pressure.",
  },
  {
    title: "Verified Broker Network",
    description:
      "Freight fraud and double brokering continue to create financial risks across the transportation industry. Our dispatch team performs broker screening and credit analysis before freight booking.",
  },
  {
    title: "24/7 Dispatch Communication",
    description:
      "Freight operations continue beyond standard business hours. Our dispatch support remains active to assist with broker communication, appointment updates, freight tracking, and operational adjustments.",
  },
  {
    title: "Back-Office Assistance",
    description:
      "Dispatching involves more than booking freight. Administrative coordination supports operational consistency through rate confirmations, BOL handling, invoicing coordination, detention documentation, and factoring communication.",
  },
];

const technologyFeatures: TechnologyFeature[] = [
  {
    title: "Real-time freight visibility",
    description: "across every active load",
  },
  {
    title: "Driver availability tracking",
    description: "for faster load matching",
  },
  {
    title: "Route coordination",
    description: "from pickup through delivery",
  },
  {
    title: "Broker verification",
    description: "before each load is booked",
  },
  {
    title: "Appointment management",
    description: "for reliable scheduling",
  },
  {
    title: "Dispatch communication efficiency",
    description: "between every party",
  },
];

const freightTypes: FreightTypeCard[] = [
  {
    title: "Dry Van Freight",
    description:
      "Dry van freight remains one of the most active and high-volume freight categories in the transportation industry due to its flexibility and widespread shipping demand. Common shipments include consumer goods, retail distribution freight, packaged products, manufacturing materials, warehouse transfers, e-commerce freight, paper products, automotive parts, and other non-temperature-sensitive cargo. These operations provide strong nationwide freight coverage, stable year-round demand, flexible route availability, and continuous reload opportunities across regional and long-haul transportation networks.",
  },
  {
    title: "Reefer Freight",
    description:
      "Reefer dispatching requires stricter coordination because temperature-sensitive freight depends heavily on timing, equipment reliability, and operational precision. Our dispatchers help reefer carriers secure profitable refrigerated freight while minimizing delays, reducing empty trailer movement, and maintaining consistent load scheduling across active freight lanes. Typical reefer freight includes produce, frozen foods, dairy products, pharmaceuticals, beverage shipments, and other temperature-controlled cargo requiring continuous monitoring during transportation.",
  },
  {
    title: "Flatbed and Step Deck Freight",
    description:
      "Flatbed and step deck operations require specialized dispatch planning because oversized cargo often involves route restrictions, securement requirements, and scheduling coordination.",
    items: [
      "Steel loads",
      "Industrial machinery",
      "Construction materials",
      "Heavy equipment",
      "Oversized freight shipments",
    ],
    footer:
      "Specialized freight often produces stronger RPM opportunities when managed correctly.",
  },
];

const dispatchAudiences: DispatchAudience[] = [
  {
    title: "Independent Owner-Operators",
    description:
      "Solo drivers often struggle with balancing freight searching, paperwork handling, and operational coordination while driving. Dedicated dispatch support improves freight consistency and reduces administrative pressure.",
  },
  {
    title: "Small Trucking Fleets",
    description:
      "Growing fleets require stronger operational coordination across multiple trucks. Our dispatch team helps fleets improve load continuity, route planning, and truck utilization.",
  },
  {
    title: "New MC Authorities",
    description:
      "New carriers frequently experience difficulty securing freight due to limited broker relationships and setup challenges. Our dispatch process helps new authorities improve operational stability while building freight access.",
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

export default function LoadBookingPage() {
  return (
    <main className="bg-[#1c1c1c]">
      <HeroSection
        h1={
          <>
            Get A Load Fast With Professional Truck
            <br />
            Dispatching Services
          </>
        }
        paragraphs={[
          "Finding profitable freight quickly has become one of the biggest operational challenges for owner-operators and trucking companies. Trucks that remain parked between deliveries reduce weekly revenue, increase fuel-related losses, and create operational delays across the entire dispatch cycle.",
          "E-Truck Dispatching helps drivers and fleets secure freight faster through real-time load monitoring, dedicated dispatch coordination, broker communication, and profitability-focused load planning.",
          "Whether you operate a dry van, reefer, flatbed, step deck, hotshot, box truck, or power-only setup, our dispatch team works to keep your equipment loaded with consistent freight opportunities.",
        ]}
        backgroundImage="/load booking/images/1_rectangle_1450.webp"
        backgroundAlt="Freight packages being prepared for truck dispatch"
      />

      <ComparisonCardsSection
        heading="Why Fast Load Booking Matters in Modern Trucking"
        comparisons={bookingProblems}
         icons={[
    "/load booking/images/4_rectangle_1545.webp",
    "/load booking/images/5_rectangle_1539.webp",
    "/load booking/images/6_rectangle_1541.webp",
  ]}
      />

      <ComparisonTableSection
        heading=""
        tableTitle=""
        columns={problemColumns}
        rows={problemRows}
        compactTop
      />

      <OurServices
        heading={
          <>
            How E-Truck Dispatching Helps Drivers
            <br />
            Get Loads Faster
          </>
        }
        description="Our dispatch process focuses on speed, communication efficiency, freight visibility, and profitability. The objective is not only to book loads quickly but to secure freight that aligns with the carrier's operational goals and preferred lanes."
        services={fasterLoadServices}
      />

      <div className="bg-[#1c1c1c] py-16">
        <RevenuePanelSection
          heading="Our Process for Finding and Booking Freight"
          description="E-Truck Dispatching follows a structured dispatch workflow designed to improve operational speed and freight consistency."
          groups={processGroups}
          image="/load booking/images/18_rectangle_1556.webp"
          backgroundImage="/load booking/icons/34_vector_3.svg"
        />
      </div>

      <ComparisonTableSection
        heading=""
        tableTitle=""
        columns={equipmentColumns}
        rows={equipmentRows}
        compactTop
      />

      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={[
          "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
        ]}
        fields={formFields}
      />

      <FreightTypesSection
        heading={
          <>
            Freight Types We Help Drivers
            <br />
            Book
          </>
        }
        description="Freight markets operate differently depending on trailer type, regional demand, seasonal activity, and cargo requirements. E Truck Dispatching works across multiple freight categories to help carriers maintain consistent operations throughout the year."
        freightTypes={freightTypes}
      />

      <ComplianceMatrixSection
        heading="How We Improve Carrier Profitability"
        description="Getting loads quickly only matters when those loads support operational profitability. E-Truck Dispatching focuses on freight quality, route efficiency, and revenue optimization instead of random load volume."
        cards={profitabilityCards}
        image="/load booking/images/11_rectangle_1558.webp"
        imageAlt="Dispatch team reviewing carrier profitability"
      />

      <TechnologyOperationsSection
        heading={
          <>
            Technology Behind Our
            <br />
            Dispatch Operations
          </>
        }
        paragraphs={[
          "Modern dispatching depends heavily on operational visibility, freight tracking, and communication systems. E Truck Dispatching uses industry-standard dispatch technology to improve coordination speed and freight management efficiency.",
          "Our dispatch operations utilize DAT load boards, Truckstop freight systems, transportation management systems (TMS), GPS tracking platforms, ELD coordination tools, and broker verification systems such as Carrier411.",
        ]}
        features={technologyFeatures}
        closingText="Technology integration allows dispatchers to respond faster to freight opportunities while maintaining stronger communication between brokers, carriers, and drivers."
        image="/load booking/images/18_rectangle_1556.webp"
        imageAlt="E Truck Dispatching driver standing in front of an orange semi-truck"
      />

      <DispatchTechnologyGridSection
        heading={
          <>
            Technology Used in Modern
            <br />
            Power Only Dispatching
          </>
        }
        image="/load booking/images/23_rectangle_1565.webp"
        imageAlt="Modern semi-truck used for power-only dispatching"
        cards={dispatchTechnologyCards}
      />

      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={[
          "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
        ]}
        fields={formFields}
        compactBottom
      />

      <DispatchAudienceSection
        heading={
          <>
            Who Our Dispatch Services Are Built
            <br />
            For
          </>
        }
        audiences={dispatchAudiences}
      />
      <FreightBenefitsSection
        heading={
          <>
            Get Consistent Freight with
            <br />
            E-Truck Dispatching
          </>
        }
        benefits={freightBenefits}
        defaultIconSrc="/load booking/images/24_tick_icon.webp"
        defaultIconAlt="Orange tick icon"
      />

      <FAQs
        heading="Frequently Asked Questions"
        description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
        image="/load booking/images/34_rectangle_1441.webp"
        imageAlt="Dispatcher answering questions while working with packages"
        faqs={loadBookingFaqs}
      />

      <QuestionStats
        heading="Still Have Questions?"
        description="Our billing experts are here to help. Get in touch for a free consultation."
        buttonText="Talk to an Expert"
        buttonHref="/contact"
        stats={loadBookingStats}
      />
    </main>
  );
}
