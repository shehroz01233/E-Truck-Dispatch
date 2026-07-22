import HeroSection from "@/app/components/HeroSection";
import EquipmentShowcaseSection from "@/app/components/EquipmentShowcaseSection";
import VisionFormSection from "@/app/components/VisionFormSection";
import TrustDeliverySection, {
  type TrustDeliveryCard,
} from "@/app/components/TrustDeliverySection";

import BenefitsGridSection from "@/app/components/BenefitsGridSection";
import RevenueSystemSection, {
  type RevenueSystemCard,
} from "@/app/components/RevenueSystemSection";
import HowWeWork from "@/app/components/HowWeWork";
import BrokerNetworkSection, {
  type BrokerNetworkFeature,
} from "@/app/components/BrokerNetworkSection";
import FAQs, { type FAQItem } from "@/app/components/FAQs";
import QuestionStats, { type Stat } from "@/app/components/QuestionStats";


const truckTypeNames = [
  "Dry Van",
  "Flatbed",
  "Step Deck",
  "Reefer",
  "Hotshot",
  "Power Only",
  "Box Truck",
  "Conestoga",
];

const truckTypeImages = [
  "/Truck Types/images/4_rectangle_1515.webp",
  "/Truck Types/images/8_rectangle_1515.webp",
  "/Truck Types/images/6_rectangle_1515.webp",
  "/Truck Types/images/10_rectangle_1515.webp",
  "/Truck Types/images/5_rectangle_1515.webp",
  "/Truck Types/images/9_rectangle_1515.webp",
  "/Truck Types/images/7_rectangle_1515.webp",
  "/Truck Types/images/11_rectangle_1515.webp",
];

const truckTypeDescriptions = [
  "Our dry van dispatch service connects owner-operators with consistent, high-paying freight across all 48 states. Dispatchers...",
  "Our flatbed dispatch service secures premium freight for carriers handling oversized, heavy, and construction loads. Dispatchers manage load...",
  "Our step deck dispatch service focuses on over-height, overweight, and specialized freight that standard trailers cannot handle...",
  "Our reefer dispatch service connects carriers with high-value, temperature-controlled freight requiring strict scheduling and...",
  "Our hotshot dispatch service secures high-paying, time-sensitive loads for CDL and non-CDL carriers. Dispatchers optimize short hauls...",
  "Our power-only dispatch service connects carriers with shipper-provided trailers, eliminating trailer ownership costs. Dispatchers...",
  "Our box truck dispatch service books high-paying loads for 26ft+ carriers across last-mile, LTL, and regional freight networks...",
  "Our Conestoga dispatch service matches carriers with weather-sensitive and high-value freight requiring curtain-side protection...",
];

const truckTypeImageHeights = [
  170, // Dry Van
  210, // Flatbed
  165, // Step Deck
  220, // Reefer
  170, // Hotshot
  220, // Power Only
  175, // Box Truck
  210, // Conestoga
];

const truckTypeColumns = [
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];
const dispatchVisionParagraphs = [
  "Get a dedicated dispatcher who handles load coordination while you stay focused on running your truck.",
  "• You approve every load before booking",
  "• Stay only if the results make sense",
  "• Built for carriers who want control without the workload",
];

const dispatchFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];


const trustDeliveryCards: TrustDeliveryCard[] = [
  {
    text: "Start without risk. Stay only if the results make sense.",
    image: "/Truck Types/images/13_rectangle_1489.webp",
    imageAlt: "Dispatcher reviewing freight operations in warehouse",
  },
  {
    text: "Problems don’t reach you — they get resolved.",
    image: "/Truck Types/images/15_rectangle_1523.webp",
    imageAlt: "Warehouse workers handling freight coordination",
  },
  {
    text: "Higher rates for you = better performance for us.",
    image: "/Truck Types/images/14_rectangle_1525.webp",
    imageAlt: "Business professional holding cash",
  },
  {
    text: "Real data, not promises we can’t control.",
    image: "/Truck Types/images/16_rectangle_1526.webp",
    imageAlt: "Truck and logistics data screen",
  },
];


const getStartedDispatchBenefits = [
  {
    title: "Sign The Dispatcher–Carrier Agreement To Begin Service",
    iconSrc: "/Truck Types/images/17_rectangle_1537.webp",
    iconAlt: "Dispatcher carrier agreement icon",
  },
  {
    title: "Add Our Company To Your Insurance Certificate For Compliance",
    iconSrc: "/Truck Types/images/19_rectangle_1539.webp",
    iconAlt: "Insurance certificate icon",
  },
  {
    title: "Submit Your MC Authority Documentation For Verification",
    iconSrc: "/Truck Types/images/21_rectangle_1541.webp",
    iconAlt: "MC authority verification icon",
  },
  {
    title: "Share Your Preferred Lanes And Equipment Details For Load Matching",
    iconSrc: "/Truck Types/images/18_rectangle_1545.webp",
    iconAlt: "Load matching icon",
  },
  {
    title: "Confirm Your Rate Floor And Load Preferences With Your Dispatcher",
    iconSrc: "/Truck Types/images/20_rectangle_1546.webp",
    iconAlt: "Rate floor preferences icon",
  },
  {
    title: "Dispatcher Activates Your Account Load Search Begins Immediately",
    iconSrc: "/Truck Types/images/22_rectangle_1547.webp",
    iconAlt: "Load search icon",
  },
];


const revenueSystemCards: RevenueSystemCard[] = [
  {
    title: "Smart Load Selection Based on Your Lanes",
    description:
      "Loads are filtered based on your equipment, lane preferences, rate floor, and delivery schedule so every load supports your profitability goals.",
    iconSrc: "/Truck Types/images/45_rectangle_1549.webp",
    iconAlt: "Smart load selection icon",
  },
  {
    title: "Rate Negotiation That Increases Your Earnings",
    description:
      "Each load is evaluated against market data, lane demand, and broker behavior before rate negotiation begins.",
    iconSrc: "/Truck Types/images/46_rectangle_1551.webp",
    iconAlt: "Rate negotiation icon",
  },
  {
    title: "Lane Consistency and Route Optimization",
    description:
      "Reliable lane planning supports predictable routes, stronger freight flow, and reduced empty miles.",
    iconSrc: "/Truck Types/images/47_rectangle_1553.webp",
    iconAlt: "Route optimization icon",
  },
  {
    title: "Full Back-Office Support",
    description:
      "Scale work is managed through paperwork, rate confirmations, broker communication, and document handling.",
    iconSrc: "/Truck Types/images/48_rectangle_1555.webp",
    iconAlt: "Back-office support icon",
  },
];

const carrierResultSteps = [
  {
    title: "More Consistent Earnings Across Preferred Lanes",
    description:
      "Carriers maintain stable revenue by running optimized, repeatable lanes instead of random low-paying loads.",
  },
  {
    title: "Reduced Empty Miles Through Better Load Planning",
    description:
      "Strategic load matching minimizes deadhead and keeps trucks moving with paying freight.",
  },
  {
    title: "Faster Payments With Clean and Accurate Documentation",
    description:
      "Error-free paperwork and complete submissions accelerate broker payments and reduce delays.",
  },
  {
    title: "Stronger Rate Negotiation on Every Load",
    description:
      "Dispatchers compare lane demand, broker behavior, and market timing before negotiating so carriers avoid weak-paying freight.",
  },
  {
    title: "Better Route Planning With Fewer Delays",
    description:
      "Pickup windows, delivery appointments, and reload options are reviewed early to keep trucks moving through cleaner routes.",
  },
  {
    title: "More Time for Drivers to Focus on the Road",
    description:
      "Broker calls, load updates, rate confirmations, and document follow-up are handled by dispatch support during active operations.",
  },
];

const brokerNetworkFeatures: BrokerNetworkFeature[] = [
  {
    title: "Owner-operators running under their own MC authority",
    iconSrc: "/Truck Types/images/26_rectangle_1557.webp",
    iconAlt: "Owner operator icon",
  },
  {
    title: "Small fleets looking to increase revenue without hiring in-house dispatchers",
    iconSrc: "/Truck Types/images/27_rectangle_1557.webp",
    iconAlt: "Small fleet revenue icon",
  },
  {
    title: "New authorities needing load consistency and lane strategy",
    iconSrc: "/Truck Types/images/28_rectangle_1557.webp",
    iconAlt: "New authority lane strategy icon",
  },
  {
    title: "Experienced carriers aiming to improve rate per mile and reduce empty miles",
    iconSrc: "/Truck Types/images/29_rectangle_1557.webp",
    iconAlt: "Rate per mile improvement icon",
  },
];

const truckTypesFaqs: FAQItem[] = [
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

const truckTypesStats: Stat[] = [
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

export default function TruckTypes() {
return (
<main>
    <HeroSection
  h1={
    <>
      Types Of Trucks
      <br />
      We Dispatch
    </>
  }
  fixedTitle="Types Of Trucks We Dispatch"
  typingTitles={[
    "for Different Freight Types",
    "Built for Profitable Load Planning",
    "Focused on Reducing Empty Miles",
    "for Owner-Operators and Fleets",
  ]}
  paragraphs={[
    "We dispatch different truck types based on freight, routes, and load conditions. Each equipment follows a tailored strategy to increase revenue per mile, reduce empty runs, and ensure compliance. From dry vans to flatbeds and step decks, every plan matches load type and delivery needs for efficient operations.",
  ]}
  backgroundImage="/Truck Types/images/1_rectangle_1450.webp"
  backgroundAlt="Types of trucks we dispatch"
/>

<EquipmentShowcaseSection
  heading="Types of Trucks We Dispatch"
  names={truckTypeNames}
  images={truckTypeImages}
  descriptions={truckTypeDescriptions}
  imageHeights={truckTypeImageHeights}
  columns={truckTypeColumns}
/>
 
<VisionFormSection
  heading={
    <>
      Stop Managing
      <br />
      Dispatch. Focus on
      <br />
      Driving and Earning
    </>
  }
  paragraphs={dispatchVisionParagraphs}
  fields={dispatchFormFields}
/>
 
<TrustDeliverySection
  heading={
    <>
      We Don’t Just Dispatch We
      <br />
      Deliver on Our Word
    </>
  }
  cards={trustDeliveryCards}
/>

<BenefitsGridSection
  heading="Get Started in Minutes"
  description="Start dispatching with a dedicated dispatcher in a structured, step-by-step onboarding process designed for speed and zero confusion."
  benefits={getStartedDispatchBenefits}
   buttonLabel="Start Trucking Dispatch"
  buttonHref="/contact"
/>

<RevenueSystemSection
  cards={revenueSystemCards}
  cta={{
    heading: "How Our Dispatching System Maximizes Your Revenue",
    description:
      "This system focuses on decision-making, not just load booking. Our dispatching is built around structured load selection, rate negotiation, and lane consistency.",
    buttonText: "Start Trucking Dispatch",
    buttonHref: "/contact",
    backgroundImage: "/Vector 4.svg",
    backgroundAlt: "Revenue optimization background shape",
  }}
/>

<HowWeWork
  heading={
    <>
      Results Carriers Achieve
      <br />
      With Our Dispatching
    </>
  }
  image="/Truck Types/images/24_vector_5.webp"
  imageAlt="Carrier checking packages after dispatch setup"
  steps={carrierResultSteps}
/>

<div className="bg-[#1c1c1c]">
  <BrokerNetworkSection
    heading={
      <>
        Who Our Dispatching Service
        <br />
        Is Built For
      </>
    }
    description={
      <p>
        This system focuses on decision-making, not just load booking. Our
        dispatching is built around structured load selection, rate negotiation,
        and lane consistency, not random load booking. Every decision is focused
        on increasing your revenue per mile while reducing empty miles and
        operational friction.
      </p>
    }
    image="/Truck Types/images/25_rectangle_1556.webp"
    imageAlt="Orange delivery truck with dispatcher standing beside it"
    features={brokerNetworkFeatures}
  />
</div>
 
<FAQs
  heading="Frequently Asked Questions"
  description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
  image="/Truck Types/images/36_rectangle_1441.webp"
  imageAlt="Dispatcher answering carrier questions in a warehouse"
  faqs={truckTypesFaqs}
/>

<QuestionStats
  heading="Still Have Questions?"
  description="Our billing experts are here to help. Get in touch for a free consultation."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
  stats={truckTypesStats}
/>

</main>
);    
}
