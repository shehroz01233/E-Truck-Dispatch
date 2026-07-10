import HeroSection from "@/app/components/HeroSection";
import FeatureIntroSection from "@/app/components/FeatureIntroSection";
import ProcessGridSection from "@/app/components/ProcessGridSection";
import FreightTypesSection, {
  type FreightTypeCard,
} from "@/app/components/FreightTypesSection";
import VisionFormSection from "@/app/components/VisionFormSection";

const stepDeckIntroFeatures = [
  "Load sourcing based on step deck trailer dimensions",
  "Broker communication and rate negotiation",
  "Clearance-aware route planning and scheduling",
  "Documentation handling including BOL, POD, rate confirmations",
  "Backhaul coordination and payment support",
];
const stepDeckDispatchOperationSteps: [string, string][] = [
  [
    "Load Sourcing and Market Access",
    "Freight is sourced through platforms like DAT Solutions and Truckstop.com, combined with direct relationships with brokers. Load selection is filtered by trailer compatibility, freight height, and lane demand.",
  ],
  [
    "Clearance and Compatibility Validation",
    "Freight dimensions are checked against trailer deck height capacity, loading method, and route limits before booking. This helps reduce clearance issues and rejected freight movement.",
  ],
  [
    "Rate Structuring and Negotiation",
    "Rates include compensation for load complexity, securement needs, extra mileage, accessorials, and route sensitivity. Negotiation focuses on protecting carrier revenue before dispatch confirmation.",
  ],
  [
    "Dispatch Execution and Coordination",
    "After booking, the dispatcher coordinates pickup timing, delivery scheduling, broker communication, tracking updates, and route changes during active shipment movement.",
  ],
  [
    "Documentation and Compliance Control",
    "Rate confirmations, BOLs, PODs, permit details, and accessorial records are reviewed and organized to support cleaner dispatch operations and faster payment processing.",
  ],
];
const stepDeckBestLoadCards: FreightTypeCard[] = [
  {
    title: "Height-Sensitive Freight",
    description:
      "Cargo exceeding 8'6'' flatbed limits, such as industrial machines, tanks, and generators, fits within step deck lower deck clearance.",
    iconSrc: "/Step Deck Dispatch/images/4_rectangle_1607.webp",
    iconAlt: "Height-sensitive freight icon",
  },
  {
    title: "Equipment and Machinery Transport",
    description:
      "Construction units like excavators, skid steers, and agricultural tractors use ramp-based loading instead of cranes.",
    iconSrc: "/Step Deck Dispatch/images/5_rectangle_1643.webp",
    iconAlt: "Equipment and machinery transport icon",
  },
  {
    title: "Multi-Level Freight Utilization",
    description:
      "Partial loads combine cargo across both deck levels, increasing revenue efficiency per trip without exceeding limits.",
    iconSrc: "/Step Deck Dispatch/images/6_rectangle_1645.webp",
    iconAlt: "Multi-level freight utilization icon",
  },
];
const stepDeckFormParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying step deck loads with full support and zero stress.",
];

const stepDeckFormFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const stepDeckFlatbedDifferenceFeatures = [
  {
    text: "Lower deck enables additional height margin (~1 ft 6 in advantage)",
    iconSrc: "/Step Deck Dispatch/images/11_rectangle_1545.webp",
    iconAlt: "Lower deck icon",
  },
  {
    text: "Ramp access supports ground-level equipment loading",
    iconSrc: "/Step Deck Dispatch/images/12_rectangle_1557.webp",
    iconAlt: "Ramp access icon",
  },
  {
    text: "Permit avoidance is possible for loads under 10 ft height",
    iconSrc: "/Step Deck Dispatch/images/13_rectangle_1558.webp",
    iconAlt: "Permit avoidance icon",
  },
];

export default function StepDeckDispatch(){
    return(
        <main>
           <HeroSection
  h1={
    <>
      Step Deck Dispatch Services By
      <br />
      E-Truck Dispatching
    </>
  }
  paragraphs={[
    "A step deck dispatch service manages freight operations for two-level open-deck trailers designed for height-sensitive cargo. The trailer structure includes an upper platform behind the cab and a lower rear deck positioned closer to ground level, allowing taller freight to move within legal height limits without triggering permits.",
    "This dispatch model focuses on equipment-specific load matching, clearance validation, and operational control. Unlike general freight coordination, it applies structured decision logic based on cargo height, loading method, and route feasibility.",
  ]}
  backgroundImage="/Step Deck Dispatch/images/1_rectangle_1450.webp"
  backgroundAlt="Step deck dispatch truck moving on highway"
/>
<FeatureIntroSection
  heading="What a Step Deck Dispatch Service Include?"
  description="A step deck dispatch service manages load sourcing, broker communication, rate negotiation, route planning, and paperwork coordination for carriers operating step deck trailers. Instead of manually searching for compatible freight, dispatchers handle equipment-specific load matching based on cargo height, deck configuration, loading method, and route restrictions."
  features={stepDeckIntroFeatures}
  image="/Step Deck Dispatch/images/47_rectangle_1557.webp"
  imageAlt="Step deck truck reference views"
/>
<ProcessGridSection
  heading="How Step Deck Dispatch Operates"
  steps={stepDeckDispatchOperationSteps}
/>

<FreightTypesSection
  heading={
    <>
      What Loads Are Best for Step
      <br />
      Deck Trailers?
    </>
  }
  description="Step deck equipment is used when height, loading method, or jobsite conditions restrict standard trailers."
  freightTypes={stepDeckBestLoadCards}
/>
<VisionFormSection
  heading={
    <>
      E Truck
      <br />
      Dispatching
    </>
  }
  paragraphs={stepDeckFormParagraphs}
  fields={stepDeckFormFields}
  compactBottom
/>
<FeatureIntroSection
  heading={
    <>
      Step Deck vs Flatbed Dispatch:
      <br />
      Strategic Difference
    </>
  }
  description="Step deck dispatch introduces clearance-based logistics control absent in flatbed operations."
  features={stepDeckFlatbedDifferenceFeatures}
   image="/Step Deck Dispatch/images/10_rectangle_1556.webp"
  imageAlt="Step deck truck carrying tall cargo"
/>
</main>

    );
}