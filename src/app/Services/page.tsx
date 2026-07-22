import HeroSection from "../components/HeroSection";
import ServicesBlogSection from "../components/ServicesBlogSection";
import ServicesShowcase from "../components/ServicesShowcase";
import VisionFormSection from "../components/VisionFormSection";

const services = [
  ["Truck Dispatching", "Our dispatch team sources loads, negotiates rates with brokers, and handles all communication so your truck stays loaded and your revenue stays consistent."],
  ["Trucking Accounting", "Our accounting team manages invoicing, collections, and payroll for trucking businesses, keeping your financials accurate and your cash flow uninterrupted."],
  ["IFTA Reporting", "Our team handles quarterly IFTA fuel tax calculations, multi-state mileage tracking, and filing submissions to keep your authority compliant and penalty-free."],
  ["Logbook Management", "Our specialists maintain accurate driver logbooks, coordinate ELD records, and ensure full HOS compliance so your drivers pass inspections without delays."],
  ["DOT Compliance", "Our compliance team manages safety audits, permit applications, and FMCSA regulation adherence to protect your operating authority from violations and downtime."],
  ["MC Setup", "Our team completes broker carrier packets, authority registration, and onboarding paperwork to get your MC number active and load-ready within 24 hours."],
  ["Driver Recruitment", "Our recruitment specialists source, screen, and place qualified CDL drivers for owner-operators and small fleets looking to scale their operations."],
].map(([title, description], index) => ({
  title,
  description,
  squareImage: `/Services/images/${4 + index * 2}_rectangle_${[1469, 1475, 1471, 1473, 1478, 1481, 1482][index]}.webp`,
  wideImage: `/Services/images/${5 + index * 2}_rectangle_${[1470, 1476, 1472, 1474, 1477, 1479, 1480][index]}.webp`,
}));

const blogs = [29, 30, 31, 32].map((number) => ({
  image: `/Services/images/${number}_professional_document_handling_made_simple.webp`,
  title: "Professional Document Handling Made Simple",
  description: "Manage files efficiently with a structured approach that improves accuracy and workflow speed.",
}));
const visionParagraphs = [
  "Fill out the form to connect with our expert dispatch team and start getting high-paying loads with full support and zero stress.",
];

const formFields = [
  ["First Name", "Enter First Name", "text"], 
  ["Last Name", "Enter Last Name", "text"], 
  ["Phone Number", "+1 (000) 123-1234", "tel"],
  ["Email Address", "email@gmail.com", "email"], 
  ["Truck Type", "Enter Truck Type", "text"], 
  ["MC Number", "Enter MC Number", "text"]
];
export default function ServicesPage() {
  return (
    <div className="bg-[#1c1c1c] text-white">
      
       <HeroSection
  h1={<>Providing Best Trucking Services in the USA</>}
  fixedTitle="Best Trucking Services"
  typingTitles={[
    "for Owner-Operators",
    "for Small Trucking Fleets",
    "Available Across 48 States",
    "Built for Reliable Freight Operations",
  ]}
  paragraphs={[
    "Our commitment to reliability, compliance, and 24/7 availability drives us to deliver the best truck dispatch services, tailored to meet the operational needs of owner-operators and small fleets across all 48 states in the USA.",
  ]}
  backgroundImage="/Services/images/1_rectangle_1450.webp"
  backgroundAlt="Trucks on the road"
/>
      

    
        <ServicesShowcase services={services} />
      
        <VisionFormSection
          heading="E Truck Dispatching"
          paragraphs={visionParagraphs}
          fields={formFields}
        />
      
        <ServicesBlogSection
          heading="Our Blog"
          introduction="Fill out the form to connect with our experienced dispatch team and get started with a system built for consistent growth. Access high-paying loads, professional rate negotiation, and full back-office support tailored to your operations."
          blogs={blogs}
        />
      

 
    </div>
  );
}
