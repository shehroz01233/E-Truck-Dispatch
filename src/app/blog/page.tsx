import HeroSection from "../components/HeroSection";
import LearningResourcesSection, {
  LearningResource,
  ResourceCategory,
} from "../components/LearningResourcesSection";
import VisionFormSection from "../components/VisionFormSection";
const visionParagraphs = [
  "Submit your details, get a dedicated dispatcher, and start running optimized, revenue-focused routes but not random loads. No contracts. No forced dispatch. Just controlled growth.",
];
const formFields = [
  ["First Name", "Enter First Name", "text"],
  ["Last Name", "Enter Last Name", "text"],
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"],
  ["Truck Type", "Enter Truck Type", "text"],
  ["MC Number", "Enter MC Number", "text"],
];

const resourceCategories: ResourceCategory[] = [
  {
    label: "All Resources",
    href: "/blog",
    active: true,
  },
  {
    label: "Dispatching",
    href: "/blog?category=dispatching",
  },
  {
    label: "Accounting",
    href: "/blog?category=accounting",
  },
  {
    label: "Compliance",
    href: "/blog?category=compliance",
  },
  {
    label: "Carrier Growth",
    href: "/blog?category=carrier-growth",
  },
];

const learningResources: LearningResource[] = [
  {
    title: "How to Find High-Paying Truck Loads",
    description:
      "Learn how lane demand, deadhead distance, equipment type, and market timing influence load profitability.",
    date: "Feb 4, 2026",
    image: "/Blog/images/4_rectangle_249.webp",
    imageAlt: "White commercial truck travelling on a highway",
    href: "/blog/how-to-find-high-paying-truck-loads",
  },
  {
    title: "Truck Dispatching Strategies That Improve RPM",
    description:
      "Explore dispatch planning methods that reduce empty miles and improve revenue per loaded mile.",
    date: "Feb 3, 2026",
    image: "/Blog/images/8_rectangle_250.webp",
    imageAlt: "Commercial freight truck driving under a bright sky",
    href: "/blog/truck-dispatching-strategies-improve-rpm",
  },
  {
    title: "How Route Planning Reduces Operating Costs",
    description:
      "See how stronger route selection helps carriers control fuel use, delays, tolls, and unnecessary mileage.",
    date: "Feb 2, 2026",
    image: "/Blog/images/9_rectangle_251.webp",
    imageAlt: "Red freight truck travelling through green hills",
    href: "/blog/route-planning-reduces-operating-costs",
  },
  {
    title: "Truck Dispatch Services for Owner-Operators",
    description:
      "Understand how professional dispatch support manages loads, brokers, rates, routes, and paperwork.",
    date: "Jan 30, 2026",
    image: "/Blog/images/10_rectangle_249.webp",
    imageAlt: "White truck operating on an open road",
    href: "/blog/truck-dispatch-services-owner-operators",
  },
  {
    title: "How Dispatchers Negotiate Better Freight Rates",
    description:
      "Learn how lane data, equipment demand, accessorial charges, and broker communication affect negotiations.",
    date: "Jan 28, 2026",
    image: "/Blog/images/14_rectangle_250.webp",
    imageAlt: "Freight truck travelling on a sunny highway",
    href: "/blog/how-dispatchers-negotiate-freight-rates",
  },
  {
    title: "Deadhead Miles: Causes, Costs, and Solutions",
    description:
      "Discover how reload planning and freight-lane analysis reduce unpaid miles between completed loads.",
    date: "Jan 26, 2026",
    image: "/Blog/images/15_rectangle_251.webp",
    imageAlt: "Red box truck driving through a rural landscape",
    href: "/blog/deadhead-miles-causes-costs-solutions",
  },
  {
    title: "New MC Authority Dispatching Guide",
    description:
      "Review the dispatch, broker setup, insurance, compliance, and freight-planning needs of new authorities.",
    date: "Jan 23, 2026",
    image: "/Blog/images/16_rectangle_249.webp",
    imageAlt: "White commercial truck moving along a highway",
    href: "/blog/new-mc-authority-dispatching-guide",
  },
  {
    title: "What Documents Do Truck Dispatchers Manage?",
    description:
      "Learn how dispatchers organize rate confirmations, BOLs, PODs, broker packets, and invoice documents.",
    date: "Jan 21, 2026",
    image: "/Blog/images/20_rectangle_250.webp",
    imageAlt: "Truck travelling on a modern highway",
    href: "/blog/documents-truck-dispatchers-manage",
  },
  {
    title: "How to Build Strong Broker Relationships",
    description:
      "Consistent communication, reliable delivery, and accurate paperwork help carriers earn repeat freight.",
    date: "Jan 19, 2026",
    image: "/Blog/images/21_rectangle_251.webp",
    imageAlt: "Red commercial truck driving through green countryside",
    href: "/blog/build-strong-freight-broker-relationships",
  },
  {
    title: "Truck Dispatching for Small Fleets",
    description:
      "See how centralized load planning and communication improve coordination across multiple trucks.",
    date: "Jan 16, 2026",
    image: "/Blog/images/22_rectangle_249.webp",
    imageAlt: "White freight truck operating on an open road",
    href: "/blog/truck-dispatching-small-fleets",
  },
  {
    title: "Understanding Freight Accessorial Charges",
    description:
      "Review detention, layover, TONU, lumper, stop-off, and other charges that affect load revenue.",
    date: "Jan 14, 2026",
    image: "/Blog/images/26_rectangle_250.webp",
    imageAlt: "Commercial truck moving through a bright highway corridor",
    href: "/blog/freight-accessorial-charges",
  },
  {
    title: "How Dispatch Planning Improves Weekly Revenue",
    description:
      "Learn how load timing, lane continuity, reload availability, and rate floors support stable earnings.",
    date: "Jan 12, 2026",
    image: "/Blog/images/27_rectangle_251.webp",
    imageAlt: "Red freight truck driving along a country road",
    href: "/blog/dispatch-planning-improves-weekly-revenue",
  },
];
export default function BoxTruckPage() {
  return (
    <main className="flex-1 bg-[#1c1c1c] text-white">
      <HeroSection
        h1={
          <>
            Guides & Dispatch
            <span className="block">Insights</span>
          </>
        }
        paragraphs={[
          "Step-by-step resources designed to help owner-operators and fleets improve load selection, increase revenue per mile, and stay compliant on every run.",
        ]}
        backgroundImage="/Blog/images/1_rectangle_1450.webp"
        backgroundAlt="Truck traveling on the highway"
      />

      <LearningResourcesSection
        heading={
          <>
            Our Learning
            <br />
            Resources
          </>
        }
        categories={resourceCategories}
        resources={learningResources}
        pagination={{
          currentPage: 1,
          totalPages: 9,
          basePath: "/blog",
          nextLabel: "Next",
        }}
      />

      <VisionFormSection
        heading={
          <>
            <span className="block whitespace-nowrap">Get Real Dispatch</span>
            <span className="block whitespace-nowrap">
              Support That Drives{" "}
            </span>
            <span className="block">Revenue</span>
          </>
        }
        paragraphs={[
          "From load booking to paperwork and compliance, we handle everything so you can focus on driving and scaling your business.",
        ]}
        fields={formFields}
      />
    </main>
  );
}
