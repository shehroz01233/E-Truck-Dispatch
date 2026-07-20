import AudienceBenefitsSection, { Audience } from "../components/AudienceBenefitsSection";
import BenefitsGridSection from "../components/BenefitsGridSection";
import CaliforniaCoverageSection, { CoverageLocation } from "../components/CaliforniaCoverageSection";
import ComparisonCardsSection from "../components/ComparisonCardsSection";
import DispatchTechnologyGridSection, { DispatchTechnologyCard } from "../components/DispatchTechnologyGridSection";
import EquipmentShowcaseSection from "../components/EquipmentShowcaseSection";
import FAQSection, { FAQItem } from "../components/FAQs";
import FeatureIntroSection from "../components/FeatureIntroSection";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import QuestionStats from "../components/QuestionStats";
import SpecificationsFormSection from "../components/SpecificationsFormSection";
import VisionFormSection from "../components/VisionFormSection";
import WhyChooseDispatchSection, { WhyChooseBenefit } from "../components/WhyChooseDispatchSection";
const californiaDispatchServiceCards = [
  {
    title: "Load Search & Booking",
    description:
      "We use DAT Freight & Analytics, Truckstop.com, and private broker networks to find high-paying freight. Every load is verified through broker reliability checks before booking.",
    iconSrc: "/California/images/4_rectangle_1549.webp",
    iconAlt: "Load search and booking icon",
  },
  {
    title: "Rate Negotiation",
    description:
      "Most carriers lose profit during rate negotiation. But at E-Truck Dispatching, we focus on per-mile rate optimization, confirming detention and layover, and securing all accessorial charges through direct broker negotiation.",
    iconSrc: "/California/images/5_rectangle_1551.webp",
    iconAlt: "Freight rate negotiation icon",
  },
  {
    title: "Route Planning",
    description:
      "Routing is based on profitability, not just distance. We analyze deadhead miles, lane performance, and fuel consumption patterns to maximize revenue per trip.",
    iconSrc: "/California/images/7_rectangle_1555.webp",
    iconAlt: "Truck route planning icon",
  },
  {
    title: "Paperwork & Compliance",
    description:
      "Back-office tasks reduce driver efficiency. We manage BOL and POD documentation, broker packets, and invoice submission to keep operations smooth and compliant.",
    iconSrc: "/California/images/6_rectangle_1553.webp",
    iconAlt: "Trucking paperwork and compliance icon",
  },
] satisfies DispatchTechnologyCard[];
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
const dispatchSetupBenefits = [
  {
    title: "Carrier Profile Setup, Truck Type, And Lane Preferences",
    iconSrc: "/California/images/10_rectangle_1537.webp",
    iconAlt: "Carrier profile setup icon",
  },
  {
    title: "Load Sourcing With Smart Filtering",
    iconSrc: "/California/images/12_rectangle_1539.webp",
    iconAlt: "Load sourcing and filtering icon",
  },
  {
    title: "Rate Negotiation With Brokers",
    iconSrc: "/California/images/14_rectangle_1541.webp",
    iconAlt: "Broker rate negotiation icon",
  },
  {
    title: "Load Booking And Confirmation",
    iconSrc: "/California/images/7_rectangle_1555.webp",
    iconAlt: "Load booking and confirmation icon",
  },
  {
    title: "Documentation And Compliance Handling",
    iconSrc: "/California/images/6_rectangle_1553.webp",
    iconAlt: "Documentation and compliance icon",
  },
  {
    title: "Payment Follow-Up And Tracking",
    iconSrc: "/California/images/15_rectangle_1547.webp",
    iconAlt: "Payment follow-up and tracking icon",
  },
];
const californiaTruckTypeNames = [
  "Dry Van",
  "Flatbed",
  "Step Deck",
  "Reefer",
  "Hotshot",
  "Power Only",
  "Box Truck",
  "Conestoga",
];

const californiaTruckTypeImages = [
  "/California/images/16_rectangle_1515.webp", // Dry Van
  "/California/images/18_rectangle_1515.webp", // Flatbed
  "/California/images/20_rectangle_1515.webp", // Step Deck
  "/California/images/22_rectangle_1515.webp", // Reefer
  "/California/images/17_rectangle_1515.webp", // Hotshot
  "/California/images/21_rectangle_1515.webp", // Power Only
  "/California/images/19_rectangle_1515.webp", // Box Truck
  "/California/images/23_rectangle_1515.webp", // Conestoga
];

const californiaTruckTypeDescriptions = [
  "Our dry van dispatch service connects owner-operators with consistent, high-paying freight across all 48 states. Dispatchers manage load sourcing, rate negotiation, and route coordination.",

  "Our flatbed dispatch service secures premium freight for carriers handling oversized, heavy, and construction loads. Dispatchers manage load requirements, rates, and scheduling.",

  "Our step deck dispatch service focuses on over-height, overweight, and specialized freight that standard trailers cannot handle efficiently.",

  "Our reefer dispatch service connects carriers with high-value, temperature-controlled freight requiring strict scheduling and continuous coordination.",

  "Our hotshot dispatch service secures high-paying, time-sensitive loads for CDL and non-CDL carriers. Dispatchers optimize short-haul and regional routes.",

  "Our power-only dispatch service connects carriers with shipper-provided trailers, eliminating trailer ownership costs and expanding freight opportunities.",

  "Our box truck dispatch service books high-paying loads for 26ft+ carriers across last-mile, LTL, and regional freight networks.",

  "Our Conestoga dispatch service matches carriers with weather-sensitive and high-value freight requiring curtain-side protection and flexible loading.",
];

const californiaTruckTypeImageHeights = [
  220, // Dry Van
  205, // Flatbed
  215, // Step Deck
  210, // Reefer
  190, // Hotshot
  215, // Power Only
  205, // Box Truck
  195, // Conestoga
];

const californiaTruckTypeColumns = [
  [0, 4], // Dry Van, Hotshot
  [1, 5], // Flatbed, Power Only
  [2, 6], // Step Deck, Box Truck
  [3, 7], // Reefer, Conestoga
];
const dispatchPerformanceComparisons = [
  {
    title: "Basic Dispatching",
    items: [
      "Random load selection",
      "Minimal negotiation",
      "High deadhead miles",
    ],
    footer: "Result: inconsistent income",
  },
  {
    title: "Optimized Dispatching",
    items: [
      "Lane-based load selection",
      "Negotiation based on market rates",
      "Reduced empty miles",
    ],
    footer: "Result: stable weekly revenue",
  },
  {
    title: "Advanced Dispatch System",
    items: [
      "Data-driven lane analysis",
      "Broker relationship management",
      "Full operational planning",
    ],
    footer: "Result: maximum RPM and long-term growth",
  },
];
const completeTruckingServiceSteps = [
  {
    number: "1",
    title: "Truck Dispatching",
    description:
      "Find high-paying loads, negotiate rates, plan routes, and manage paperwork to keep trucks moving with reduced deadhead and consistent cash flow.",
  },
  {
    number: "2",
    title: "Trucking Accounting",
    description:
      "Track revenue, expenses, and profits with structured reports, tax-ready records, and financial insights tailored for owner-operators and fleets.",
  },
  {
    number: "3",
    title: "IFTA Reporting",
    description:
      "Accurate fuel tax calculation, mileage tracking by state, and timely quarterly filing to avoid penalties and ensure full IFTA compliance.",
  },
];
const californiaPermitSpecifications: [string, string][] = [
  ["53 ft", "Length"],
  ["8’6”", "Width"],
  ["14 ft", "Height"],
  ["80k lbs", "Weight"],
];

const californiaPermitInformation: [string, string | string[]][] = [
  [
    "Permit Thresholds",
    [
      "Width beyond 8’6” requires permits",
      "Height above 14 ft requires clearance planning",
      "Extended length loads require routing approval",
    ],
  ],
  [
    "Operational Restrictions",
    [
      "Escort vehicles required for oversized loads",
      "City-specific restrictions in Los Angeles, San Francisco, and San Diego",
      "Weekday-only movement for wider loads",
    ],
  ],
  [
    "Dispatch Impact",
    [
      "Route planning must align with permit rules",
      "Non-compliance leads to fines and delays",
      "Broker reliability depends on execution accuracy",
    ],
  ],
];
const californiaWhyChooseBenefits: WhyChooseBenefit[] = [
  {
    title: "Dedicated",
    description: "personal dispatcher",
    icon: "/California/images/31_rectangle_1607.webp",
    iconAlt: "Dedicated personal dispatcher support icon",
  },
  {
    title: "No forced",
    description: "dispatch model",
    icon: "/California/images/32_rectangle_1616.webp",
    iconAlt: "No forced dispatch model icon",
  },
  {
    title: "24/7",
    description: "operational support",
    icon: "/California/images/33_rectangle_1618.webp",
    iconAlt: "24 hours and 7 days operational support icon",
  },
  {
    title: "RPM focused",
    description: "load strategy",
    icon: "/California/images/34_rectangle_1620.webp",
    iconAlt: "RPM-focused dispatch strategy icon",
  },
  {
    title: "Strong broker",
    description: "network access",
    icon: "/California/images/35_rectangle_1622.webp",
    iconAlt: "Strong freight broker network icon",
  },
];
const californiaDispatchAudiences: Audience[] = [
  {
    title: "Owner operators",
    image: "/California/images/36_rectangle_1623.webp",
  },
  {
    title: "Small trucking fleets",
    image: "/California/images/37_rectangle_1624.webp",
  },
  {
    title: "New MC authorities",
    image: "/California/images/38_rectangle_1625.webp",
  },
  {
    title: "Growing carriers",
    image: "/California/images/39_rectangle_1626.webp",
  },
];
const californiaCities = [
  {
    name: "Los Angeles",
    image: "/California/images/40_rectangle_1375.webp",
    imageAlt: "Los Angeles skyline",
  },
  {
    name: "San Diego",
    image: "/California/images/43_rectangle_1532.webp",
    imageAlt: "San Diego waterfront and skyline",
  },
  {
    name: "San Jose",
    image: "/California/images/46_rectangle_1533.webp",
    imageAlt: "San Jose city landscape",
  },
  {
    name: "San Francisco",
    image: "/California/images/42_rectangle_1537.webp",
    imageAlt: "San Francisco city street and skyline",
  },
  {
    name: "Fresno",
    image: "/California/images/45_rectangle_1538.webp",
    imageAlt: "Fresno city landscape",
  },
  {
    name: "Sacramento",
    image: "/California/images/41_rectangle_1534.webp",
    imageAlt: "Sacramento city skyline",
  },
  {
    name: "Long Beach",
    image: "/California/images/44_rectangle_1535.webp",
    imageAlt: "Long Beach waterfront",
  },
  {
    name: "Oakland",
    image: "/California/images/47_rectangle_1536.webp",
    imageAlt: "Oakland waterfront and city skyline",
  },
] satisfies CoverageLocation[];

const californiaCounties = [
  {
    name: "Los Angeles County",
    image: "/California/images/48_rectangle_1375.webp",
    imageAlt: "Los Angeles County skyline",
  },
  {
    name: "San Diego County",
    image: "/California/images/51_rectangle_1532.webp",
    imageAlt: "San Diego County coastline",
  },
  {
    name: "Orange County",
    image: "/California/images/54_rectangle_1533.webp",
    imageAlt: "Orange County coastline",
  },
  {
    name: "Riverside County",
    image: "/California/images/50_rectangle_1537.webp",
    imageAlt: "Riverside County city and mountain landscape",
  },
  {
    name: "San Bernardino County",
    image: "/California/images/53_rectangle_1538.webp",
    imageAlt: "San Bernardino County landscape",
  },
  {
    name: "Santa Clara County",
    image: "/California/images/49_rectangle_1534.webp",
    imageAlt: "Santa Clara County city landscape",
  },
  {
    name: "Alameda County",
    image: "/California/images/52_rectangle_1535.webp",
    imageAlt: "Alameda County city skyline",
  },
  {
    name: "Sacramento County",
    image: "/California/images/55_rectangle_1536.webp",
    imageAlt: "Sacramento County bridge and waterfront",
  },
] satisfies CoverageLocation[];
const faqs: FAQItem[] = [
  {
    question: "What percentage do truck dispatchers charge in California?",
    answer:
      "Most truck dispatch services charge between 5% and 10% per booked load. The exact percentage depends on the equipment type, service level, fleet size, and dispatch support included.",
  },
  {
    question: "Do you charge upfront fees?",
    answer:
      "No upfront fee is required for standard dispatch services. Charges are generally based on successfully booked and completed loads, according to the agreed dispatch plan.",
  },
  {
    question: "Is there a contract required?",
    answer:
      "A long-term contract is not required. Carriers can use the dispatch service based on the agreed terms, notice period, and operational requirements.",
  },
  {
    question: "What services are included in the dispatch fee?",
    answer:
      "The dispatch fee includes load sourcing, rate negotiation, broker communication, route coordination, paperwork handling, load confirmation, compliance support, and payment follow-up.",
  },
  {
    question: "How do you find high-paying loads in California?",
    answer:
      "We use trusted load boards, private broker networks, lane data, freight demand, deadhead distance, and market rates to identify profitable California loads that match your equipment and operating preferences.",
  },
  {
    question: "Do you work with new MC authorities?",
    answer:
      "Yes. We support new MC authorities with broker setup packets, load sourcing, compliance guidance, lane planning, rate negotiation, and organized dispatch coordination.",
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




export default function californiaPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <HeroSection
        h1={<>Truck Dispatch Services in California</>}
        paragraphs={[
          "California operates as a major West Coast freight hub driven by ports, agriculture, and retail distribution.",
          "At E Truck Dispatching, we focus on higher RPM, reduced deadhead miles, and consistent load flow for carriers operating across California.",
        ]}
        backgroundImage="/California/images/1_rectangle_1450.webp"
        backgroundAlt="Women in hero section reviewing documents"
      />

      <FeatureIntroSection
        heading="Why Truck Dispatch Services Matter in California?"
        description={[
          "E-Truck Dispatching has worked with carriers across different states, but California stands out. Freight volume is high, but so is competition.",
          "California functions as a West Coast logistics hub, powered by the Ports of Los Angeles and Long Beach, large retail distribution centers, and Central Valley agriculture. Freight moves fast here, and brokers expect efficiency.",
        ]}
        features={[
          "Load availability stays high, but rate competition increases",
          "Brokers prioritize carriers with consistent performance",
          "Missed opportunities quickly reduce weekly revenue",
        ]}
        image="/California/images/71_rectangle_1557.webp"
        imageAlt="California state map featuring the California bear and location label"
      />
<DispatchTechnologyGridSection
  heading={
    <>
      <span className="block">What Do Our Truck</span>
      <span className="block">Dispatch Services</span>
      <span className="block">Include?</span>
    </>
  }
  image="/California/images/8_rectangle_1565.webp"
  imageAlt="Orange commercial truck representing California dispatch services"
  cards={californiaDispatchServiceCards}
/>
<VisionFormSection
        heading="E Truck Dispatching"
        paragraphs={visionParagraphs}
        fields={formFields}
      />
<BenefitsGridSection
  heading={
    <>
      Get Started in
      <br />
      Minutes
    </>
  }
  description="From carrier setup to final payment, each step is handled through a streamlined system designed to maximize load quality, ensure compliance, and maintain consistent cash flow."
  benefits={dispatchSetupBenefits}
  buttonLabel="Start Trucking Dispatch"
  buttonHref="/contact"
/>
<EquipmentShowcaseSection
  heading="Truck Types We Dispatch in California"
  names={californiaTruckTypeNames}
  images={californiaTruckTypeImages}
  descriptions={californiaTruckTypeDescriptions}
  imageHeights={californiaTruckTypeImageHeights}
  columns={californiaTruckTypeColumns}
/>
<ComparisonCardsSection
  variant="dispatch-performance"
  heading="Dispatch Performance Levels: What Carriers Don’t Realize"
  comparisons={dispatchPerformanceComparisons}
  icons={[
    "/California/images/24_rectangle_1545.webp",
    "/California/images/25_rectangle_1539.webp",
    "/California/images/26_rectangle_1541.webp",
  ]}
  iconAlts={[
    "Basic dispatching icon",
    "Optimized dispatching icon",
    "Advanced dispatch system icon",
  ]}
/>
<HowWeWork
  heading={
    <>
      <span className="block">A Complete Trucking</span>
      <span className="block">Services Package We Offer</span>
    </>
  }
  image="/California/images/28_vector_5.webp"
  imageAlt="Delivery professional holding packages and a clipboard"
  steps={completeTruckingServiceSteps}
/>
<SpecificationsFormSection
  heading="California Compliance & Oversize Permit System"
  description="California enforces strict compliance regulations through California Department of Transportation."
  backgroundImage="/California/images/29_rectangle_1600.webp"
  imageAlt="Oversized commercial freight operations in California"
  specificationsHeading=""
  specifications={californiaPermitSpecifications}
  trailerTypes={californiaPermitInformation}
/>
<WhyChooseDispatchSection
  heading={
    <>
      Why Choose E Truck
      <br />
      Dispatching in California?
    </>
  }
  description="We deliver consistent, high-paying loads with a dedicated dispatcher, no forced dispatch, and 24/7 support—focused on maximizing your RPM and keeping your truck moving."
  image="/California/images/30_rectangle_1556.webp"
  imageAlt="California truck driver reviewing dispatch information inside a truck"
  benefits={californiaWhyChooseBenefits}
  buttonLabel="Get Started Today"
  buttonHref="/contact"
/>
<AudienceBenefitsSection
  variant="audiences-only"
  heading={
    <>
      Who We Work
      <br />
      With
    </>
  }
  audiences={californiaDispatchAudiences}
/>
<CaliforniaCoverageSection
  cityHeading="All the Cities in California Covered"
  cityDescription="We provide dispatch services across all major and regional cities in California, ensuring consistent load availability and strong lane coverage. From high-demand freight hubs to local delivery routes, our network keeps your truck moving efficiently statewide."
  cities={californiaCities}
  countyHeading="Counties We Serve in California"
  countyDescription="We provide dispatch services across all major and regional cities in California, ensuring consistent load availability and strong lane coverage. From high-demand freight hubs to local delivery routes, our network keeps your truck moving efficiently statewide."
  counties={californiaCounties}
  buttonLabel="View More"
  buttonHref="/california/locations"
/>
<FAQSection
  heading="Frequently Asked Questions"
  description="Get answers about California dispatch pricing, contracts, included services, high-paying load sourcing, and support for new MC authorities."
  image="/California/images/62_rectangle_1441.webp"
  imageAlt="Dispatch specialist coordinating California freight operations"
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
