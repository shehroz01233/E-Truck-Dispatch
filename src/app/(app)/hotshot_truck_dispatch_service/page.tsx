import AudienceBenefitsSection from "../components/AudienceBenefitsSection";
import BenefitsGridSection, { Benefit } from "../components/BenefitsGridSection";
import DispatchAudienceSection, { DispatchAudience } from "../components/DispatchAudienceSection";
import DispatchTechnologyGridSection, { DispatchTechnologyCard } from "../components/DispatchTechnologyGridSection";
import FAQSection, { FAQItem } from "../components/FAQs";
import FeatureIntroSection from "../components/FeatureIntroSection";
import FreightBenefitsSection, { FreightBenefit } from "../components/FreightBenefitsSection";
import FreightTypesSection, { FreightTypeCard } from "../components/FreightTypesSection";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import OurServices, { Service } from "../components/OurServices";
import ProcessGridSection from "../components/ProcessGridSection";
import QuestionStats, { Stat } from "../components/QuestionStats";
import RevenuePanelSection, { RevenueGroup } from "../components/RevenuePanelSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";


const hotshotTurnaroundFeatures = [
  "Coordinating expedited and partial-load freight",
  "Managing broker communication and booking speed",
  "Structuring reloads for continuous movement",
  "Handling rate confirmation, BOL, and PODs",
  "Supporting payment processing and factoring workflows",
];

const hotshotDispatchServiceGroups: RevenueGroup[] = [
  {
    title: "Expedited Freight Coordination",
    intro: [
      "Hotshot dispatching manages expedited freight using medium-duty pickup trucks and specialized trailers. These operations handle time-sensitive shipments that require direct delivery without terminal stops or routing delays. Hotshot carriers commonly move urgent equipment and partial-freight across regional and short-haul routes.",
    ],
  },
  {
    title: "Regional and Short-Haul Load Planning",
    intro: [
      "Hotshot dispatch differs from traditional freight coordination by focusing on short-haul and regional movements with high-frequency load cycles. Instead of full truckload planning, dispatch aligns partial freight, urgent shipments, and equipment-specific loads with available capacity.",
    ],
  },
  {
    title: "What Does a Hotshot Dispatcher Handle Daily?",
    intro: [
      "This service supports independent operators, new authorities, and small fleets that require consistent freight access without managing broker communication, paperwork, and scheduling independently.",
    ],
  },
];

const hotshotOperationalWorkflowSteps: [string, string][] = [
  [
    "Carrier Onboarding and Setup",
    "Dispatch begins with verifying operating authority, insurance coverage, and equipment specifications. Load preferences, lane priorities, and revenue targets are defined to align future bookings with business goals.",
  ],
  [
    "Load Sourcing and Freight Matching",
    "Dispatchers source freight through broker networks and load boards, filtering shipments based on trailer type, weight limits, and urgency. Hotshot freight typically includes partial loads, expedited deliveries, and equipment transport.",
  ],
  [
    "Rate Negotiation and Booking",
    "Each shipment undergoes rate validation using current market conditions. Accessorials such as detention, layover, and TONU are confirmed before booking. Rate confirmation documents are reviewed to ensure accuracy.",
  ],
  [
    "Dispatch Coordination and Trip Execution",
    "Pickup scheduling, delivery appointments, and route planning are managed continuously. Real-time communication maintains alignment between driver, broker, and shipper throughout transit.",
  ],
  [
    "Documentation and Payment Processing",
    "Bills of lading, proof of delivery, and invoices are handled post-delivery. Factoring-ready documentation accelerates payment cycles and supports cash flow stability.",
  ],
];

const hotshotFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const hotshotFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const hotshotLoadTypeFeatures = [
  "Construction materials for jobsite delivery",
  "Machinery parts and industrial equipment",
  "Automotive and oilfield components",
  "Agricultural tools and farm equipment",
];

const hotshotDispatchProblemCards: Service[] = [
  {
    title: "Profitability Instability",
    description:
      "Low-paying shipments, excessive empty miles, and weak negotiation reduce earnings per trip.",
    image: "/Hotshot Truck Dispatching Service/images/11_rectangle_1078.webp",
    imageAlt: "Box truck in warehouse for hotshot dispatch profitability",
  },
  {
    title: "Administrative Burden",
    description:
      "Carrier packets, invoices, and compliance documentation consume driving hours and delay payments. A structured dispatch system addresses these challenges by controlling load flow, rate validation, and documentation accuracy.",
    image: "/Hotshot Truck Dispatching Service/images/10_rectangle_1076.webp",
    imageAlt: "Dispatcher tracking routes on a laptop",
  },
  {
    title: "Limited Load Access",
    description:
      "Independent carriers often rely on load boards without consistent broker relationships, reducing access to high-quality freight.",
    image: "/Hotshot Truck Dispatching Service/images/9_rectangle_1077.webp",
    imageAlt: "Growing revenue blocks for load access",
    accent: true,
  },
  {
    title: "Operational Gaps",
    description:
      "Missed reload opportunities and poor lane planning create idle time between deliveries.",
    image: "/Hotshot Truck Dispatching Service/images/8_rectangle_1074.webp",
    imageAlt: "Warehouse coordinator managing dispatch operations",
  },
];

const hotshotProfessionalFeatureSteps = [
  {
    number: "1",
    title: "Smart Load Filtering System",
    description:
      "Freight selection aligns with trailer configuration, payload limits, and delivery urgency. Each load is evaluated based on profitability and feasibility.",
  },
  {
    number: "2",
    title: "Revenue Control Through Negotiation",
    description:
      "Dispatchers negotiate rates using market tracking and broker relationships, ensuring optimal compensation per mile.",
  },
  {
    number: "3",
    title: "Route Planning and Reload Optimization",
    description:
      "Lane planning focuses on continuous movement, reducing empty miles and improving trip efficiency.",
  },
];

const hotshotDispatchAttributeCards: DispatchTechnologyCard[] = [
  {
    title: "Equipment and Trailer Compatibility",
    bullets: [
      "Capacity-to-trailer matching",
      "Trailer size compatibility",
      "Stable suspension setup",
      "Balanced equipment weight",
      "Better load access",
    ],
    iconSrc: "/Hotshot Truck Dispatching Service/images/14_rectangle_1549.webp",
    iconAlt: "Equipment and trailer compatibility icon",
  },
  {
    title: "Payload and Weight Management",
    bullets: [
      "DOT weight compliance",
      "Reduced tire wear",
      "Better fuel efficiency",
      "Secure cargo placement",
      "Stable load balance",
    ],
    iconSrc: "/Hotshot Truck Dispatching Service/images/16_rectangle_1553.webp",
    iconAlt: "Payload and weight management icon",
  },
  {
    title: "Time-Sensitive Freight Coordination",
    bullets: [
      "Faster broker response",
      "Timely pickup scheduling",
      "Reduced idle delays",
      "Better urgent load access",
      "Strong broker relations",
    ],
    iconSrc: "/Hotshot Truck Dispatching Service/images/15_rectangle_1551.webp",
    iconAlt: "Time-sensitive freight coordination icon",
  },
  {
    title: "Continuous Load Sequencing",
    bullets: [
      "Frequent reload planning",
      "Lower deadhead miles",
      "Efficient rural routing",
      "Reduced downtime",
      "Consistent weekly loads",
    ],
    iconSrc: "/Hotshot Truck Dispatching Service/images/17_rectangle_1555.webp",
    iconAlt: "Continuous load sequencing icon",
  },
];

const hotshotDispatchBenefits = [
  "Higher Revenue Per Trip",
  "Reduced Empty Miles",
  "Faster Broker Access",
  "Lower Administrative Load",
  "Stable Cash Flow",
];

const hotshotDispatchAudienceCards: DispatchAudience[] = [
  {
    title: "New Hotshot Businesses",
    description:
      "Dispatch support provides guidance on load selection, compliance, broker relationships, freight planning, and scheduling coordination.",
  },
  {
    title: "Independent Owner-Operators",
    description:
      "Drivers focus on hauling while dispatch manages operations, broker communication, scheduling, paperwork, and load coordination.",
  },
  {
    title: "Small Fleets",
    description:
      "Scaling operations require structured coordination across multiple trucks without increasing internal workload.",
  },
];

const hotshotPerformanceSystemCards = [
  {
    title: "Load Selection Control Layer",
    items: [
      "Rate evaluation",
      "Distance analysis",
      "RPM calculation",
      "Freight matching",
      "Lane optimization",
      "Profit-based booking",
    ],
  },
  {
    title: "Pre-Booking Verification",
    items: [
      "Broker credit checks",
      "Payment history review",
      "MC verification",
      "Insurance validation",
      "Rate confirmation review",
      "Fraud risk screening",
    ],
  },
  {
    title: "Execution Monitoring",
    items: [
      "Real-time trip tracking",
      "Pickup coordination",
      "Delivery updates",
      "Driver communication",
      "Route monitoring",
      "Delay management",
    ],
  },
  {
    title: "Revenue Cycle Management",
    items: [
      "POD collection",
      "Invoice processing",
      "Factoring support",
      "Payment tracking",
      "Documentation accuracy",
      "Faster payment cycles",
    ],
  },
];



const hotshotsDispatchBenefits: Benefit[] = [
  {
    title: "Dedicated Dispatcher Support",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/25_rectangle_1537.webp",
    iconAlt: "Dedicated hotshot dispatcher support icon",
  },
  {
    title: "No Forced Dispatch System",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/27_rectangle_1539.webp",
    iconAlt: "No forced dispatch system icon",
  },
  {
    title: "Hotshot-Specific Freight Expertise",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/29_rectangle_1541.webp",
    iconAlt: "Hotshot freight expertise icon",
  },
  {
    title: "Access To Strong Broker Network",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/26_rectangle_1545.webp",
    iconAlt: "Strong freight broker network icon",
  },
  {
    title: "Transparent Load Communication",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/28_rectangle_1546.webp",
    iconAlt: "Transparent load communication icon",
  },
  {
    title: "Consistent Freight Opportunities",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/30_rectangle_1547.webp",
    iconAlt: "Consistent hotshot freight opportunities icon",
  },
];



const hotshotConclusionParagraphs = [
  "Hotshot trucking operates on speed, flexibility, and precise execution. A structured dispatch system ensures continuous load flow, accurate rate control, and optimized routing. Consistent coordination across sourcing, booking, and documentation directly impacts profitability and operational stability.",
];

const hotshotDispatchFaqs: FAQItem[] = [
  {
    question: "What is a hotshot dispatch service?",
    answer:
      "A service that manages load sourcing, negotiation, and paperwork for expedited freight operations.",
  },
  {
    question: "How is hotshot dispatch different from standard dispatch?",
    answer:
      "Hotshot dispatch focuses on faster load cycles, smaller equipment, partial freight, and direct routing for time-sensitive shipments.",
  },
  {
    question: "Do hotshot drivers need a dispatcher?",
    answer:
      "A dispatcher helps drivers reduce administrative work, improve broker access, negotiate rates, and maintain consistent freight movement.",
  },
  {
    question: "What equipment is used in hotshot trucking?",
    answer:
      "Hotshot carriers commonly use medium-duty pickup trucks with flatbed, gooseneck, step deck, or specialized trailers depending on freight requirements.",
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

const hotshotQuestionStats: Stat[] = [
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
const hotshotPricingCards: FreightTypeCard[] = [
  {
    title: "What Pricing Covers",
    description:
      "Dispatch pricing commonly includes load sourcing, broker communication, rate negotiation, scheduling coordination, paperwork handling, and operational support for daily freight movement.",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/22_rectangle_1607.webp",
    iconAlt: "Hotshot dispatch pricing coverage icon",
  },
  {
    title: "Dispatch Cost Structure",
    description:
      "Most hotshot dispatch services use a percentage-per-load pricing model, allowing owner-operators and small fleets to pay based on completed freight activity instead of fixed contracts.",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/23_rectangle_1643.webp",
    iconAlt: "Hotshot dispatch cost structure icon",
  },
  {
    title: "Cost vs Revenue Impact",
    description:
      "Stronger rate negotiation, lower deadhead mileage, consistent load planning, and reduced operational delays help offset dispatch costs while improving overall revenue performance.",
    iconSrc:
      "/Hotshot Truck Dispatching Service/images/24_rectangle_1645.webp",
    iconAlt: "Hotshot dispatch revenue growth icon",
  },
];
const hotshotGettingStartedBenefits: FreightBenefit[] = [
  {
    text: "Provide MC authority, insurance, and W-9.",
  },
  {
    text: "Define trailer type, lanes, and revenue goals.",
  },
  {
    text: "A dedicated dispatcher manages operations.",
  },
  {
    text: "Load offers and dispatch coordination begin.",
  },
];
export default function HotshotTruckDispatchService() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">   
     <HeroSection
  h1={
    <>
      Hotshot Truck Dispatching Services
      <br />
      For Owner-Operators And
      <br />
      Trucking Companies
    </>
  }
  fixedTitle="Hotshot Truck Dispatching Services"
  typingTitles={[
    "for Owner-Operators",
    "for Trucking Companies",
    "Built for Faster Load Access",
    "Focused on Consistent Revenue",
  ]}
  paragraphs={[
    "Hotshot operations depend on rapid load access, precise scheduling, and continuous freight movement. Delays between loads, weak rate negotiation, and inconsistent routing reduce revenue per trip. A structured dispatch system controls load selection, broker coordination, and documentation flow to maintain consistent earnings and reduce operational gaps.",
  ]}
  backgroundImage="/Hotshot Truck Dispatching Service/images/1_rectangle_1450.webp"
  backgroundAlt="Hotshot truck dispatching service truck on the road"
/>
      <FeatureIntroSection
        heading={
          <>
            How Hotshot Dispatch Maintains
            <br />
            Fast Freight Turnaround
          </>
        }
        description="Hotshot dispatch systems are designed around rapid freight movement, short delivery cycles, and continuous truck utilization. Instead of relying on long-haul freight planning, dispatchers coordinate urgent shipments, partial loads, and direct-route deliveries that keep pickup trucks and trailers operating with minimal downtime."
        features={hotshotTurnaroundFeatures}
        image="/Hotshot Truck Dispatching Service/images/4_rectangle_1557.webp"
        imageAlt="Hotshot truck reference views"
      />
      <RevenuePanelSection
        heading="What Hotshot Truck Dispatching Services Include?"
        description="Hotshot truck dispatching services manage urgent freight using pickup trucks and specialized trailers. Dispatchers handle loads, scheduling, paperwork, and broker communication."
        groups={hotshotDispatchServiceGroups}
        image="/Hotshot Truck Dispatching Service/images/5_rectangle_1558.webp"
        backgroundImage="/Vector 3.svg"
      />
      <ProcessGridSection
        heading="How Hotshot Dispatching Operational Workflow"
        steps={hotshotOperationalWorkflowSteps}
      />
      <VisionFormSection
        heading={
          <>
            E Truck
            <br />
            Dispatching
          </>
        }
        paragraphs={hotshotFormParagraphs}
        fields={hotshotFormFields}
      />
      <FeatureIntroSection
        heading={
          <>
            What Types of Loads Do Hotshot
            <br />
            Dispatchers Handle?
          </>
        }
        description="Hotshot dispatch manages freight categories requiring flexibility, speed, and direct routing. These shipments are typically partial loads with strict delivery timelines. Direct routing reduces handling points and improves transit visibility compared to shared freight networks. Specialized opportunities include auction transport, dealer transfers, and emergency shipments requiring immediate dispatch coordination."
        features={hotshotLoadTypeFeatures}
        image="/Hotshot Truck Dispatching Service/images/7_rectangle_1556.webp"
        imageAlt="Hotshot truck hauling specialized freight"
      />
      <OurServices
        heading={
          <>
            What Problems Does Hotshot
            <br />
            Dispatching Solve?
          </>
        }
        services={hotshotDispatchProblemCards}
      />
 <HowWeWork
  blendBackgroundEdges
  heading={
    <>
      Key Features of a Professional
      <br />
      Hotshot Dispatch Service
    </>
  }
  backgroundImage="/background-earthquake.png"
  image="/Hotshot Truck Dispatching Service/images/13_vector_5.webp"
  imageAlt="Dispatcher holding freight boxes"
  steps={hotshotProfessionalFeatureSteps}
/>
      <DispatchTechnologyGridSection
        heading={
          <>
            Unique Hotshot Dispatch
            <br />
            Attributes That Impact Profit
          </>
        }
        image="/Hotshot Truck Dispatching Service/images/18_rectangle_1565.webp"
        imageAlt="Hotshot truck hauling pickup trucks on a trailer"
        cards={hotshotDispatchAttributeCards}
      />
      <AudienceBenefitsSection
        showAudiences={false}
        heading="Benefits of Using Hotshot Truck Dispatching Services"
        benefits={hotshotDispatchBenefits}
      />
      <VisionFormSection
        heading={
          <>
            E Truck
            <br />
            Dispatching
          </>
        }
        paragraphs={hotshotFormParagraphs}
        fields={hotshotFormFields}
      />
      <DispatchAudienceSection
        heading={
          <>
            Who Should Use Hotshot Dispatch
            <br />
            Services?
          </>
        }
        audiences={hotshotDispatchAudienceCards}
      />
      <SupportColumnsSection
        heading="What Makes a High-Performance Hotshot Dispatch System?"
        intro="A high-performance hotshot dispatch system improves load efficiency, scheduling, and profitability."
        image="/Hotshot Truck Dispatching Service/images/21_rectangle_1426.webp"
        imageAlt="Dispatcher monitoring hotshot freight operations"
        cards={hotshotPerformanceSystemCards}
      />
<FreightTypesSection
  heading={
    <>
      Pricing Structure for Hotshot
      <br />
      Dispatch Services
    </>
  }
  description="Hotshot dispatch typically operates on a percentage-based model, ranging between 5% to 10% per load."
  freightTypes={hotshotPricingCards}
  columns={3}
/>

      
     
      <BenefitsGridSection
  heading={
    <>
      Why Choose
      <br />
      Our Hotshot
      <br />
      Truck
      <br />
      Dispatching
      <br />
      Services?
    </>
  }
  benefits={hotshotsDispatchBenefits}
/>
  <FreightBenefitsSection
  heading={
    <>
      How to Get Started with Hotshot
      <br />
      Dispatching Services
    </>
  }
  benefits={hotshotGettingStartedBenefits}
  defaultIconSrc="/Hotshot Truck Dispatching Service/images/31_tick_icon.webp"
  defaultIconAlt="Hotshot dispatch setup step"
/>
      
      <VisionFormSection
        heading="Conclusion"
        paragraphs={hotshotConclusionParagraphs}
        fields={hotshotFormFields}
      />
      <FAQSection
        heading="Frequently Asked Questions"
        description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
        image="/Hotshot Truck Dispatching Service/images/41_rectangle_1441.webp"
        imageAlt="Dispatcher answering hotshot dispatch questions"
        faqs={hotshotDispatchFaqs}
      />
      <QuestionStats
        heading="Still Have Questions?"
        description="Our billing experts are here to help. Get in touch for a free consultation."
        buttonText="Talk to an Expert"
        buttonHref="/contact"
        stats={hotshotQuestionStats}
      />
    </main>
  );
}
