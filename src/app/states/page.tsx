import BenefitsGridSection from "../components/BenefitsGridSection";
import FeatureIntroSection from "../components/FeatureIntroSection";
import HeroSection from "../components/HeroSection";
import StatesCoverageSection from "../components/statesCoverageSection";

const eTruckStatesHeroParagraphs = [
  "E-Truck Dispatching provides professional truck dispatch services across major freight corridors in the United States.",
];
const primaryStates = [
  {
    name: "Ohio",
    description:"Strong Midwest freight hub with consistent demand across manufacturing and retail lanes. Ideal for dry van, reefer, and regional freight operations.",
    image: "/States/images/4_ohio.webp",
    imageAlt: "Ohio state flag",
    highlighted: true,
  },
  {
    name: "Indiana",
    description:"Strategic logistics corridor with access to major interstates and industrial freight. High load availability with balanced outbound and return lanes.",
    image: "/States/images/5_indiana.webp",
    imageAlt: "Indiana state flag",
  },
  {
    name: "Texas",
    description:"One of the largest freight markets in the U.S. with high-volume lanes in oil, construction, and general freight. Strong opportunities for all trailer types.",
    image: "/States/images/6_texas.webp",
    imageAlt: "Texas state flag",
  },
  {
    name: "Florida",
    description:"High inbound freight demand with seasonal variability. Requires smart backhaul planning to reduce deadhead and maximize profitability.",
    image: "/States/images/7_florida.webp",
    imageAlt: "Florida state flag",
  },
  {
    name: "New York",
    description:"Dense freight activity with premium-paying loads in urban and port regions. Best suited for experienced operators handling tight schedules and compliance.",
    image: "/States/images/8_new_york.webp",
    imageAlt: "New York state flag",
  },
  {
    name: "California",
    description:"Major port-driven economy with consistent freight flow. High-paying lanes but requires compliance awareness and route optimization.",
    image: "/States/images/9_california.webp",
    imageAlt: "California state flag",
  },
  {
    name: "Kentucky",
    description:"Growing logistics hub with strong connections to Midwest and Southeast freight markets. Ideal for consistent regional runs.",
    image: "/States/images/10_kentucky.webp",
    imageAlt: "Kentucky state flag",
  },
  {
    name: "Illinois",
    description:"Central freight powerhouse anchored by Chicago. High load-to-truck ratios with strong opportunities for optimized lane planning.",
    image: "/States/images/11_illionis.webp",
    imageAlt: "Illinois state flag",
  },
];

const stateDispatchBenefits = [
  {
    title: "Lane Intelligence:",
    description:
      "We Analyze High-Demand Corridors And Seasonal Trends",
    iconSrc: "/States/images/12_rectangle_1537.webp",
    iconAlt: "Lane intelligence icon",
  },
  {
    title: "Broker Network Access:",
    description:
      "Verified Brokers With Strong Payment History",
    iconSrc: "/States/images/14_rectangle_1539.webp",
    iconAlt: "Broker network access icon",
  },
  {
    title: "Rate Optimization:",
    description:
      "Negotiation Based On Real-Time Market Data",
    iconSrc: "/States/images/16_rectangle_1541.webp",
    iconAlt: "Rate optimization icon",
  },
  {
    title: "Backhaul Planning:",
    description:
      "Reduce Empty Miles With Strategic Reload Matching",
    iconSrc: "/States/images/13_rectangle_1545.webp",
    iconAlt: "Backhaul planning icon",
  },
  {
    title: "Compliance Alignment:",
    description:
      "State-Specific Regulations And Route Considerations",
    iconSrc: "/States/images/15_rectangle_1546.webp",
    iconAlt: "Compliance alignment icon",
  },
  {
    title: "Real-Time Tracking:",
    description:
      "Live Load Status And Location Updates",
    iconSrc: "/States/images/17_rectangle_1547.webp",
    iconAlt: "Real-time tracking icon",
  },
];
export default function States(){
    return (
       <main>
        <HeroSection
    h1={
      <>
        States We Serve – Nationwide E-Truck Dispatching Coverage
      </>
    }
    fixedTitle="Nationwide E-Truck Dispatching"
    typingTitles={[
      "Across All 48 States",
      "for Owner-Operators",
      "for Small Trucking Fleets",
      "Built for Nationwide Freight Coverage",
    ]}
    paragraphs={eTruckStatesHeroParagraphs}
    backgroundImage="/States/images/1_rectangle_1450.webp"
    backgroundAlt="American flag representing nationwide E-Truck Dispatching coverage"
  />
<StatesCoverageSection
  heading={
    <>
      Primary States We
      <br />
      Cover
    </>
  }
  states={primaryStates}
/>

<BenefitsGridSection
  heading={
    <>
      How We
      <br />
      Optimize
      <br />
      Dispatch Across
      <br />
      These States
    </>
  }
  benefits={stateDispatchBenefits}
/>
<FeatureIntroSection
  heading="Coverage Beyond These States"
  description="While these are our primary service areas, E-Truck Dispatching operates nationwide, supporting carriers across all 48 states with consistent load access and dispatch management."
  image="/States/images/18_rectangle_1562.webp"
  imageAlt="Map showing nationwide E-Truck Dispatching coverage across the United States"
/>
       </main>
    );
}