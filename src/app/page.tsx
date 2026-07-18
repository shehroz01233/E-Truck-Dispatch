import type { Metadata } from "next";
import Hero from "./components/landingPage";
import OurServices, { Service } from "./components/OurServices";
import WhoWeAre from "./components/WhoWeAre";
import OurTrucks from "./components/OurTruck";
import FrieghtStates from "./components/FrieghtStates";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import FAQs from "./components/FAQs";
import QuestionStats from "./components/QuestionStats";


export const metadata: Metadata = {
  title: {
    absolute: "E Truck Dispatching | Professional Truck Dispatch Services",
  },
  description:
    "Professional truck dispatching and back-office support for owner-operators and small fleets across the United States.",
  alternates: {
    canonical: "/",
  },
};

const faqs = [
  {
    question: "What is truck dispatching?",
    answer:
      "A service that manages load booking, rate negotiation, broker communication, and operational paperwork so carriers can focus on driving and revenue generation.",
  },
  {
    question: "How do dispatch services improve earnings?",
    answer:
      "Dispatchers search better lanes, negotiate rates, reduce empty miles, and help carriers avoid weak-paying loads.",
  },
  {
    question: "Do I have to accept every load presented?",
    answer:
      "No. You stay in control. Your dispatcher presents loads that match your rate, lane, and schedule preferences.",
  },
  {
    question: "How fast do payments come through?",
    answer:
      "Payment speed depends on the broker, factoring setup, paperwork accuracy, and payment terms on the rate confirmation.",
  },
  {
    question: "Is there a contract or upfront fee?",
    answer:
      "No upfront fee is required. Dispatch fees apply after broker payment is received.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most carriers can start after onboarding, document review, carrier packet setup, and lane preference confirmation.",
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

const whoWeAreParagraphs = [
  "E Truck Dispatching is a dedicated freight dispatch company built for owner-operators and small trucking companies operating across the continental United States. Our dispatchers carry hands-on experience in freight brokerage, carrier-side operations, and Federal Motor Carrier Safety Administration compliance standards.",
  "Each carrier is assigned a single point of contact who maintains full visibility into lane history, rate thresholds, equipment type, and broker interaction records. This continuity removes the inefficiency of rotating dispatchers and builds operational memory that improves load selection over time.",
];

const services: Service[] = [
  {
    title: "Trucking Accounting",
    description:
      "Revenue tracking, expense categorization, and financial reporting structured around each load cycle to maintain clear visibility into per-mile profitability and overall business performance.",
    image: "/Home/images/54_rectangle_1078.webp",
    imageAlt: "Worker loading freight into a truck",
  },
  {
    title: "MC/DOT Setup",
    description:
      "Motor Carrier authority registration, USDOT number application, BOC-3 process agent filing, and initial compliance documentation handled from start to activation.",
    image: "/Home/images/53_rectangle_1076.webp",
    imageAlt: "Logistics professional managing documents",
  },
  {
    title: "Truck Dispatching",
    description:
      "Load sourcing, rate negotiation, broker communication, appointment scheduling, and same-day invoice submission managed by a dedicated dispatcher aligned to your lanes, equipment type, and revenue targets.",
    image: "/Home/images/52_rectangle_1077.webp",
    imageAlt: "Warehouse worker reviewing freight information",
    accent: true,
  },
  {
    title: "Document Management",
    description:
      "Carrier packets, rate confirmations, BOL (Bill of Lading), POD (Proof of Delivery), insurance certificates, and compliance paperwork organized and maintained within a centralized workflow.",
    image: "/Home/images/51_rectangle_1074.webp",
    imageAlt: "Freight trucks traveling on a highway",
  },
];
export default function Home() {
  return (
    <>
      
        <Hero />
      
        <WhoWeAre
          heading="Who We Are"
          paragraphs={whoWeAreParagraphs}
          images={{
            meeting: "/Home/images/48_who_we_are.webp",
            presentation: "/Home/images/50_who_we_are.webp",
            team: "/Home/images/49_who_we_are.webp",
          }}
          imageAlts={{
            meeting: "E Truck Dispatching team collaborating around a table",
            presentation: "Dispatching team attending a presentation",
            team: "Members of the E Truck Dispatching team",
          }}
        />
      
        <OurServices
          heading="Our Services"
          description="E Truck Dispatching provides end-to-end operational support beyond load booking — covering financial management, regulatory setup, and documentation handling for owner-operators and small carriers."
          services={services}
        />
      
        <OurTrucks />
     
        <FrieghtStates />
      
        <WhyChooseUs />
      
        <HowWeWork />
     
        <FAQs
          heading="Frequently Asked Questions"
          description="Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability."
          image="/Home/images/33_rectangle_1441.webp"
          imageAlt="Dispatcher answering questions in warehouse"
          faqs={faqs}
        />
      
        <QuestionStats
          heading="Still Have Questions?"
          description="Our billing experts are here to help. Get in touch for a free consultation."
          buttonText="Talk to an Expert"
          buttonHref="/contact"
          stats={questionStats}
        />
    </>
  );
}
