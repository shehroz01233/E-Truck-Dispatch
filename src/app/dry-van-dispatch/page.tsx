import BrokerNetworkSection from "../components/BrokerNetworkSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import ComplianceMatrixSection from "../components/ComplianceMatrixSection";
import DispatchTechnologyGridSection, { DispatchTechnologyCard } from "../components/DispatchTechnologyGridSection";
import DryVanInfoSection from "../components/DryVanInfoSection";
import FAQs from "../components/FAQs";
import FeatureIntroSection from "../components/FeatureIntroSection";
import HeroSection from "../components/HeroSection";
import MutualTestimonialsSection from "../components/MutualTestimonialsSection";
import OurServices, { Service } from "../components/OurServices";
import QuestionStats from "../components/QuestionStats";
import RevenuePanelSection, { RevenueGroup } from "../components/RevenuePanelSection";
import ServiceGuaranteesSection from "../components/ServiceGuaranteesSection";
import SupportColumnsSection from "../components/SupportColumnsSection";
import VisionFormSection from "../components/VisionFormSection";

const services: Service[] = [
  {
    title: "Load Sourcing from Brokers and Direct Shippers",
    description:
      "Dispatchers access multiple load boards and broker networks simultaneously to identify dry van freight matching the carrier’s equipment type, preferred lanes, and schedule. Direct shippers are contacted alongside brokers to expand load options beyond standard load board listings. Each load is evaluated for rate, distance, pickup timing, and delivery conditions before it reaches the driver’s inbox.",
    image: "/Dry Van Dispatch/images/12_rectangle_1078.webp",
    imageAlt: "Carrier speaking with a broker or shipper",
    accent: true,
  },
  {
    title: "Rate Negotiation and Revenue Per Mile Optimization",
    description:
      "E Truck Dispatching negotiates directly with brokers and shippers to secure rates above the initial offer. Revenue per mile is the benchmark used for every negotiation — loads falling below the carrier’s target rate floor are declined and countered with market-backed pricing. Carriers with consistent freight volume and clean safety records receive stronger negotiating leverage across broker relationships.",
    image: "/Dry Van Dispatch/images/11_rectangle_1076.webp",
    imageAlt: "Dispatcher negotiating freight rates",
  },
  {
    title: "Route Planning to Minimize Deadhead Miles",
    description:
      "Dispatch routes are structured to reduce empty miles between delivery and the next pickup location. Regional and long-haul routes are evaluated for fuel costs, toll exposure, and backhaul availability before confirmation. Drivers are assigned routes that prioritize profitable return freight over short-term convenience.",
    image: "/Dry Van Dispatch/images/10_rectangle_1077.webp",
    imageAlt: "Route planning on a laptop map",
  },
  {
    title: "BOL, Carrier Packets, and Compliance Documentation",
    description:
      "E Truck Dispatching manages broker packets, rate confirmations, Bills of Lading (BOLs), and invoicing for every load. FMCSA compliance requirements are tracked per carrier to prevent regulatory violations that result in costly penalties. Insurance certificates and operating authority records are maintained and submitted to brokers as required.",
    image: "/Dry Van Dispatch/images/9_rectangle_1074.webp",
    imageAlt: "Dispatcher managing carrier documents",
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


const complianceCards: [string, string[]][] = [
  [
    "No Forced Dispatch — Full Load Approval Control",
    [
      "Every load offer reaches the driver before confirmation. E Truck Dispatching never books a load without explicit carrier authorization. Load preferences—including preferred lanes, avoided states, and minimum rate per mile—are documented at onboarding and applied to every search.",
    ],
  ],
  [
    "Dedicated Dispatcher Assigned to Your MC",
    [
      "Each carrier is assigned a single dispatcher who manages all load sourcing, communication, and paperwork for that MC number. The assigned dispatcher learns the carrier’s schedule constraints, equipment specifications, and rate expectations. Carriers communicate with one point of contact instead of rotating through a support queue.",
    ],
  ],
  [
    "Nationwide Lane Coverage Across USA",
    [
      "E Truck Dispatching covers all 48 contiguous states, sourcing dry van freight across regional short-haul corridors and coast-to-coast long-haul lanes. Carriers operating in any state access the same broker network coverage regardless of their home base or preferred operating region.",
    ],
  ],
  [
    "Round-the-Clock Availability for Urgent Loads",
    [
      "Freight disruptions—broker cancellations, shipper delays, and load falls—occur outside standard business hours. E Truck Dispatching operates 24/7 to handle unexpected situations on the road, rebook cancelled loads, and source replacement freight without leaving drivers stranded between routes.",
    ],
  ],
];

const freightTypeCards = [
  {
    title: "General Merchandise, Retail, and E-Commerce Goods",
    description:
      "Dry vans carry manufactured goods, consumer products, and retail merchandise for brick-and-mortar stores and e-commerce fulfillment centers. E-commerce logistics demand just-in-time deliveries with tight pickup and delivery windows—dry van carriers serving this freight type benefit from dispatchers who track broker communication and delivery confirmations in real time.",
  },
  {
    title: "Non-Perishable Food and Beverage Products",
    description:
      "Non-perishable food products including canned goods, packaged snacks, bottled beverages, and dry ingredients ship on pallets inside dry van trailers. This freight category requires standard enclosed transport without temperature monitoring, making dry vans the default equipment for food manufacturers shipping to distribution centers and retail warehouses.",
  },
  {
    title: "Building Materials, Electronics, and Packaged Consumer Goods",
    description:
      "Electronics, machinery, vehicle parts, industrial supplies, and building materials move regularly in dry van trailers across manufacturing-to-distribution and supplier-to-retailer routes. Packaged consumer goods destined for retail chain distribution centers represent a high-volume, consistent freight category for dry van carriers operating in major freight corridors.",
  },
  {
    title: "Dry Van Load Limits (Temp, Oversize, Hazmat)",
    description:
      "Dry vans are not insulated and lack refrigeration systems, making them unsuitable for perishable goods requiring temperature-controlled reefer transport. Oversized shipments exceeding 8'6\" in width or height require flatbed or step deck equipment. Hazmat cargo classified under DOT hazardous materials regulations requires specialized placarding, segregation, and equipment certification that standard dry van trailers do not support.",
  },
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

const dispatchProcessCards: DispatchTechnologyCard[] = [
  {
    title: "Documents You Need (MC Authority, Insurance, W9)",
    iconSrc: "/Dry Van Dispatch/images/19_rectangle_1549.webp",
    description:
      "Carriers need 3 documents to begin: an active MC authority number valid for at least 1 month, current liability and cargo insurance certificates, and a completed W9 form.",
  },
  {
    title: "Dispatcher Assignment and First Load Booking",
    iconSrc: "/Dry Van Dispatch/images/20_rectangle_1551.webp",
    description:
      "After document submission, a dedicated dispatcher is assigned to the carrier’s MC within 24 hours. The dispatcher reviews lane preferences, equipment specifications, and rate targets before sourcing the first load offer.",
  },
  {
    title: "Ongoing Communication Workflow",
    iconSrc: "/Dry Van Dispatch/images/22_rectangle_1555.webp",
    description:
      "The assigned dispatcher manages all broker and shipper communication on behalf of the carrier. Rate confirmations, pickup instructions, delivery updates, and detention notifications are relayed to the driver in real time through a direct communication channel.",
  },
  {
    title: "Rate Confirmation and Paperwork Processing",
    iconSrc: "/Dry Van Dispatch/images/21_rectangle_1553.webp",
    description:
      "Once a load is approved, the dispatcher secures the rate confirmation, verifies all terms (rate, detention, TONU, accessorials), and handles document flow including BOL and POD submission to ensure smooth payment and factoring processing.",
  },
];


const revenueGroups: RevenueGroup[] = [
  {
    title: "Owner-Operators Running Solo Authority",
    intro: [
      "Owner-operators holding their own MC authority handle every operational task independently — load searching, rate negotiation, paperwork, billing, and compliance — while also driving. E Truck Dispatching absorbs those administrative tasks, allowing solo operators to focus on driving hours and route execution. Carriers with a valid MC number active for at least 1 month, current insurance, and a W9 on file are eligible to start immediately.",
    ],
  },
  {
    title: "Small Fleets Scaling Without Back-Office Overhead",
    intro: [
      "Small fleets adding trucks face a disproportionate increase in back-office workload — each additional driver requires load coverage, documentation, and billing support. E Truck Dispatching scales dispatch capacity alongside fleet growth without requiring the carrier to hire internal administrative staff. Fleets gain consistent load coverage across all trucks without building an in-house operations team.",
    ],
  },
  {
    title: "Established Carriers Offloading Dispatch Operations",
    intro: [
      "Established carriers managing high freight volumes use E Truck Dispatching to redirect internal resources toward fleet maintenance, driver retention, and business development. Carriers with defined lane preferences, equipment specifications, and growth objectives receive a dispatching approach customized to existing operations.",
    ],
  },
];


const faqs = [
  {
    question: "Do you force dispatch?",
    answer:
      "No. You approve every load before booking and remain in full control of your operations. Your dispatcher follows your preferred lanes, minimum rate targets, excluded states, and schedule requirements.",
  },
  {
    question: "How quickly can I start?",
    answer:
      "Dispatch service can begin within 24 hours after we receive and verify your active MC authority, insurance certificates, W9 form, equipment details, and preferred operating lanes.",
  },
  {
    question: "Do you work with new MC authorities?",
    answer:
      "Yes. We work with newer carriers once their MC authority is active and meets broker and insurance requirements. Some brokers require an authority to be active for at least 30 to 90 days, so available loads may be more limited during the first few months.",
  },
  {
    question: "How do you find loads?",
    answer:
      "We source freight through premium load boards, verified broker networks, direct shipper opportunities, and established carrier relationships. Each load is filtered by lane, rate, equipment type, broker credit, deadhead distance, and delivery schedule.",
  },
  {
    question: "What do you charge for dispatching?",
    answer:
      "Dispatch pricing depends on your equipment type, operating model, and required services. You receive a clear rate before starting, with no hidden booking charges or surprise fees.",
  },
  {
    question: "How do you ensure I get high-paying loads?",
    answer:
      "We compare current lane rates, freight demand, broker history, fuel costs, tolls, deadhead miles, and backhaul availability before presenting a load. Your dispatcher also negotiates the rate and accessorial charges to protect your revenue per loaded mile.",
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
export default function dryvandispatchPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>Dry Van Dispatch Service</>}
        paragraphs={[
          "Dry Van Dispatch Service helps carriers secure consistent, high-paying loads without dealing with brokers or paperwork. Our dispatchers manage load sourcing, rate negotiation, and route planning to keep your truck moving on profitable lanes while reducing empty miles.",
          "We also handle documentation like rate confirmations and invoicing, so you stay focused on driving. You approve every load, while we ensure steady freight flow and better earnings with less stress.",
        ]}
        backgroundImage="/Dry Van Dispatch/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />
      <FeatureIntroSection
        heading="How Our Dry Van Dispatch Keeps Freight Moving Consistently"
        description="Dry van dispatch creates a structured freight flow system for enclosed trailer carriers by controlling load continuity, broker coordination, route efficiency, and operational paperwork. Instead of reacting to single load opportunities, dispatchers manage lane strategy and freight timing to keep trucks loaded across regional and long-haul routes."
        features={[
          "Identifying profitable dry van freight lanes",
          "Negotiating rates with verified brokers",
          "Planning reloads to reduce downtime",
          "Managing BOL, POD, and invoice processing",
          "Coordinating payment tracking and factoring support",
        ]}
        image="/Dry Van Dispatch/images/64_rectangle_1557.webp"
        imageAlt="Blue Box Truck on the Road"
      />
      <DryVanInfoSection
        heading={
          <>
            What Is a <br /> Dry Van?
          </>
        }
        description="A dry van is an enclosed semi-trailer that transports non-perishable, non-temperature-sensitive cargo across short and long distances. The enclosed structure protects freight from rain, snow, wind, dust, and road debris during transit. Dry vans carry the widest range of general freight among all trailer types, making them the most-used trailer in U.S. trucking operations."
        topBackgroundImage="/Dry Van Dispatch/images/4_rectangle_1140.webp"
        bottomBackgroundImage="/Dry Van Dispatch/images/5_rectangle_1140.webp"
        backgroundAlt="Dry van section decoration"
        cards={[
          {
            title: "Dry Van Trucking vs Other Trailer Types",
            image: "/Dry Van Dispatch/images/6_rectangle_1489.webp",
            imageAlt: "Dry van trucking vs other trailer types",
          },
          {
            title: "Standard Dry Van Dimensions, Weight Limits, and Sizes",
            image: "/Dry Van Dispatch/images/8_rectangle_1523.webp",
            imageAlt: "Standard dry van dimensions",
          },
          {
            title: "Industries and Goods That Rely on Dry Vans",
            image: "/Dry Van Dispatch/images/7_rectangle_1525.webp",
            imageAlt: "Industries and goods that rely on dry vans",
          },
        ]}
      />

      <OurServices
        heading="How a Dry Van Dispatch Service Works"
        description="A dry van dispatch service manages load sourcing, rate negotiation, route planning, and compliance documentation on behalf of carriers and owner-operators. E Truck Dispatching handles each operational step so drivers stay on the road instead of managing freight brokerage tasks from the cab."
        services={services}
      />

      <VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />

      <RevenuePanelSection
  heading="Who Benefits Most"
  description=""
  groups={revenueGroups}
  image="/Dry Van Dispatch/images/44_rectangle_1556.webp"
  backgroundImage="/Vector 3.svg"
/>

      <ComplianceMatrixSection
        heading="What Sets Our Dispatch Apart"
        description="What sets our dispatch apart is a system-driven approach that prioritizes high-paying loads, smart lane planning, and strict broker credit filtering. You get a dedicated dispatcher, transparent communication, and consistent revenue without forced dispatch."
        cards={complianceCards}
        image="/Dry Van Dispatch/images/14_rectangle_1560.webp"
      />

       <SupportColumnsSection
  heading="Freight Types Dry Vans Can Haul"
  intro="Dry vans handle a wide range of non-perishable freight, including retail goods, packaged food, electronics, and palletized shipments. They are ideal for secure, enclosed transport where weather protection and standard loading are required."
  image="/Dry Van Dispatch/images/15_rectangle_1426.webp"
  imageAlt="Dry van truck being dispatched for freight transportation"
  cards={freightTypeCards}
/>
<ComparisonCardsSection
  heading="Maximizing Load Efficiency and Revenue"
  description="Optimized load planning, backhaul alignment, and rate-focused negotiation increase revenue per mile while reducing empty miles and downtime."
  comparisons={comparisons}
  icons={[
   "/Dry Van Dispatch/images/16_rectangle_1545.webp",
    "/Dry Van Dispatch/images/17_rectangle_1539.webp",
    "/Dry Van Dispatch/images/18_rectangle_1541.webp",
  ]}
/>

<DispatchTechnologyGridSection
  heading={
    <>
      Getting Started
      <br />
      The Process
    </>
  }
  image="/Dry Van Dispatch/images/23_rectangle_1565.webp"
  imageAlt="Semi-truck used for dry van dispatching"
  cards={dispatchProcessCards}
/>
<ServiceGuaranteesSection
  heading="Service Guarantees"
  image="/Dry Van Dispatch/images/24_rectangle_1566.webp"
  imageAlt="Truck dispatch service guarantees"
  cards={[
    {
      title: "Trial Period with No Long-Term Contract Lock-In",
      content: (
        <p>
          E Truck Dispatching operates without long-term contracts. Carriers
          are not locked into minimum commitment periods, cancellation fees, or
          penalty clauses. Service continues on a load-by-load basis, and
          carriers can pause or discontinue at any point.
        </p>
      ),
    },
    {
      title: "Performance Benchmarks We Commit To",
      content: (
        <p>
          E Truck Dispatching commits to 3 performance standards: consistent
          load coverage across active operating days, on-time payment
          processing for completed loads, and response times under 1 hour for
          urgent compliance issues during operating hours.
        </p>
      ),
    },
    {
      title: "What We Don't Promise — Honest Expectations",
      content: (
        <p>
          Freight rates fluctuate based on lane demand, fuel indexes, and
          seasonal market conditions. Rate outcomes depend on current market
          pricing, carrier equipment availability, and lane competitiveness —
          factors outside dispatch control that no service can eliminate.
        </p>
      ),
    },
  ]}
/>
<BrokerNetworkSection
  heading="Load Board and Broker Network Affiliations"
  description={
    <p>
      E Truck Dispatching sources dry van freight through DAT load board,
      Truckstop.com, and direct broker relationships. Carrier relationships
      with established brokers provide access to freight not listed on open
      load boards, including dedicated lane opportunities and repeat shipper
      accounts.
    </p>
  }
  image="/Dry Van Dispatch/images/44_rectangle_1556.webp"
  imageAlt="Dispatcher searching load boards and broker networks"
  features={[
    {
      title: "Broker Credit Screening and Payment Security",
      iconSrc: "/Dry Van Dispatch/images/45_rectangle_1557.webp",
      iconAlt: "",
    },
    {
      title: "Dedicated Lane and Repeat Load Access",
      iconSrc: "/Dry Van Dispatch/images/47_rectangle_1557.webp",
      iconAlt: "",
    },
    {
      title: "Rate Negotiation Based on Market Data",
      iconSrc: "/Dry Van Dispatch/images/46_rectangle_1557.webp",
      iconAlt: "",
    },
    {
      title: "Real-Time Load Matching and Availability Monitoring",
      iconSrc: "/Dry Van Dispatch/images/48_rectangle_1557.webp",
      iconAlt: "",
    },
  ]}
/>


<MutualTestimonialsSection
  heading={
    <>
      The feeling is{" "}
      <span className="text-[#b34b0c]">mutual</span>
    </>
  }
  rating={4.9}
  reviewText="4.9 average star review on"
  starImages={[
    {
      image: "/Dry Van Dispatch/images/25_rectangle_1567.webp",
      imageAlt: "Rating star",
      width: 30,
      height: 30,
    },
    {
      image: "/Dry Van Dispatch/images/26_rectangle_1568.webp",
      imageAlt: "Rating star",
      width: 30,
      height: 30,
    },
    {
      image: "/Dry Van Dispatch/images/27_rectangle_1569.webp",
      imageAlt: "Rating star",
      width: 30,
      height: 30,
    },
    {
      image: "/Dry Van Dispatch/images/28_rectangle_1570.webp",
      imageAlt: "Rating star",
      width: 30,
      height: 30,
    },
    {
      image: "/Dry Van Dispatch/images/29_rectangle_1571.webp",
      imageAlt: "Rating star",
      width: 30,
      height: 30,
    },
  ]}
  reviewBadges={[
    {
      variant: "google",
      logo: "/Dry Van Dispatch/images/32_rectangle_1060.webp",
      logoAlt: "Google reviews",
      logoWidth: 46,
      logoHeight: 44,
      label: "E Truck Dispatching",
      ratingImages: [
        {
          image: "/Dry Van Dispatch/images/33_rectangle_1061.webp",
          imageAlt: "Google rating star",
          width: 10,
          height: 10,
        },
        {
          image: "/Dry Van Dispatch/images/34_rectangle_1062.webp",
          imageAlt: "Google rating star",
          width: 10,
          height: 10,
        },
        {
          image: "/Dry Van Dispatch/images/35_rectangle_1063.webp",
          imageAlt: "Google rating star",
          width: 10,
          height: 10,
        },
        {
          image: "/Dry Van Dispatch/images/36_rectangle_1064.webp",
          imageAlt: "Google rating star",
          width: 10,
          height: 10,
        },
        {
          image: "/Dry Van Dispatch/images/37_rectangle_1065.webp",
          imageAlt: "Half Google rating star",
          width: 5,
          height: 10,
        },
        {
          image: "/Dry Van Dispatch/images/38_rectangle_1066.webp",
          imageAlt: "",
          width: 5,
          height: 10,
        },
      ],
    },
    {
      variant: "trustpilot",
      logo: "/Dry Van Dispatch/images/30_rectangle_1067.webp",
      logoAlt: "Trustpilot reviews",
      logoWidth: 110,
      logoHeight: 35,
      ratingStrip: "/Dry Van Dispatch/images/31_rectangle_1068.webp",
      ratingStripAlt: "Trustpilot five-star rating",
      ratingStripWidth: 77,
      ratingStripHeight: 24,
    },
  ]}
  testimonials={[
    {
      name: "Donna Miller",
      avatar: "/Dry Van Dispatch/images/39_rectangle_1572.webp",
      avatarAlt: "Donna Miller",
      content: (
        <p>
          E Truck Dispatching helped us find consistent dry van loads without
          forcing us into lanes that did not fit our operation. Communication
          stayed clear, paperwork was handled quickly, and every load remained
          under our approval.
        </p>
      ),
    },
    {
      name: "Marcus Hill",
      avatar: "/Dry Van Dispatch/images/40_rectangle_1573.webp",
      avatarAlt: "Marcus Hill",
      content: (
        <p>
          Our dispatcher understands our preferred lanes and operating costs.
          Rate negotiations improved, deadhead dropped, and we stopped wasting
          hours searching multiple load boards every morning.
        </p>
      ),
    },
    {
      name: "James Carter",
      avatar: "/Dry Van Dispatch/images/41_rectangle_1574.webp",
      avatarAlt: "James Carter",
      content: (
        <p>
          The team keeps brokers updated, checks rate confirmations, and stays
          available when a pickup or delivery issue occurs. That support lets me
          focus on driving and managing my truck.
        </p>
      ),
    },
    {
      name: "Amanda Wilson",
      avatar: "/Dry Van Dispatch/images/42_rectangle_1575.webp",
      avatarAlt: "Amanda Wilson",
      content: (
        <p>
          We needed dispatch support for a growing fleet, not another call
          center. Each truck now receives lane-specific planning, broker
          communication, and clear load information before approval.
        </p>
      ),
    },
    {
      name: "Robert Davis",
      avatar: "/Dry Van Dispatch/images/43_rectangle_1576.webp",
      avatarAlt: "Robert Davis",
      content: (
        <p>
          There was no long-term contract or forced dispatch. We tested the
          service, reviewed the results, and continued because the loads and
          communication matched what had been promised.
        </p>
      ),
    },
  ]}
/>

<ComparisonCardsSection
  heading="How Clean Paperwork Improves Factoring Payments"
  description=""
  comparisons={comparisons}
  icons={[
    "/Document Management Revised/images/16_rectangle_1537.webp",
    "/Document Management Revised/images/18_rectangle_1539.webp",
    "/Document Management Revised/images/20_rectangle_1541.webp",
  ]}
/>


<FAQs
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Conestoga Dispatch Service/images/33_rectangle_1441.webp"
  imageAlt="Dispatcher answering carrier questions in a warehouse office"
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
