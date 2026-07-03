import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | E-Truck Dispatching",
  description: "Learn how E-Truck Dispatching helps owner-operators and fleets improve freight operations and profitability.",
};

const challenges = ["Empty miles reducing profitability", "Low-paying freight", "Unreliable brokers", "Delayed paperwork", "Poor route planning", "Compliance pressure", "Unstable freight availability"];
const services = [
  ["Load Sourcing", "We identify profitable freight opportunities across all major lanes"],
  ["Broker Communication", "Direct communication with trusted brokers and shippers"],
  ["Rate Negotiation", "Expert negotiation to maximize your revenue per mile"],
  ["Route Coordination", "Strategic planning to reduce deadhead and improve efficiency"],
  ["Documentation", "Complete paperwork handling from BOL to POD"],
  ["24/7 Support", "Round-the-clock operational support for your fleet"],
];
const dispatcherTasks = ["Load sourcing", "Broker communication", "Rate negotiation", "Route coordination", "Freight scheduling", "Appointment management", "Broker packet setup", "Rate confirmations", "BOL and POD handling", "Detention and layover support"];
const equipment = ["Dry Van", "Hotshot", "Flatbed", "Power Only", "Step Deck", "Box Truck", "Reefer", "Conestoga"];
const equipmentImages = [
  "10_rectangle_1515.webp", "11_rectangle_1515.webp", "12_rectangle_1515.webp", "13_rectangle_1515.webp",
  "14_rectangle_1515.webp", "15_rectangle_1537.webp", "16_rectangle_1545.webp", "17_rectangle_1539.webp",
];
const equipmentDescriptions = [
  "Consistent, high-paying freight across all 48 states.",
  "High-paying, time-sensitive loads for CDL and non-CDL carriers.",
  "Premium freight for oversized, heavy, and construction loads.",
  "Reliable trailer-moving opportunities with optimized routing.",
  "Specialized freight that standard trailers cannot handle.",
  "Last-mile, LTL, and regional freight opportunities.",
  "High-value, temperature-controlled freight with strict scheduling.",
  "Weather-sensitive and high-value curtain-side freight.",
];
const process = [
  ["Carrier Onboarding", "The onboarding process begins with collecting and verifying carrier documents such as MC authority, W-9 forms, insurance certificates, and driver information to ensure compliance and operational readiness before dispatch operations begin."],
  ["Dedicated Dispatcher Assignment", "Each carrier is assigned a dedicated dispatcher based on equipment type, preferred freight lanes, operational goals, hauling preferences, and scheduling requirements."],
  ["Load Planning and Negotiation", "We identify profitable freight opportunities, analyze market conditions, review lane demand, and negotiate rates directly with brokers and shippers."],
  ["Route and Reload Optimization", "Dispatch routes and reload schedules are strategically planned to reduce deadhead miles, improve trailer utilization, and maintain continuous freight movement."],
  ["Documentation and Support", "Our team manages paperwork coordination, broker communication, invoicing support, POD handling, factoring paperwork, and ongoing dispatch assistance."],
];
const reasons = ["No Forced Dispatch: You approve every load.", "Dedicated Personal Dispatcher: One dispatcher manages operations.", "Strong Broker Network: Access to verified freight brokers.", "Route Optimization: Reduced empty miles and fuel costs.", "Transparent Pricing: No hidden dispatch fees.", "24/7 Operational Support: Continuous dispatch assistance available."];
const industries = ["Retail Distribution", "Food and Beverage", "Automotive Freight", "Construction Materials", "Manufacturing Equipment", "Medical Supplies", "Agricultural Freight", "Industrial Machinery", "Temperature-Controlled Freight"];
const compliance = ["FMCSA-aware dispatch coordination", "Appointment scheduling management", "Driver communication support", "Route planning assistance", "Documentation accuracy", "Detention tracking", "Load requirement verification"];

const inputClass = "h-11 w-full bg-[#1c1c1c] px-5 text-sm text-white outline-none placeholder:text-white/50 focus:ring-1 focus:ring-[#b34b0c]";

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />{item}</li>)}</ul>;
}

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#1c1c1c] text-white">
      <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-14 py-20 sm:w-[calc(100%-64px)] xl:grid-cols-[1fr_548px]">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Who We Are</h1>
          <div className="mt-7 max-w-[738px] space-y-5 text-lg leading-7 text-white/65">
            <p>E-Truck Dispatching is a US-based truck dispatch company focused on supporting independent owner-operators, small fleets, and growing carriers. We combine freight market analysis, broker relationship management, and real-time dispatch coordination to help carriers secure profitable loads and maintain operational consistency.</p>
            <p>Our team understands the daily operational challenges trucking businesses face and we built our dispatch system to solve these operational gaps through dedicated carrier support and market-driven dispatch strategies.</p>
          </div>
          <div className="mt-10 grid max-w-[570px] grid-cols-3 gap-4 text-center">
            {[["500+", "Active Carriers"], ["24/7", "Support Available"], ["98%", "Client Satisfaction"]].map(([value, label]) => <div key={label}><p className="text-3xl font-bold text-[#b34b0c] sm:text-5xl">{value}</p><p className="mt-2 text-xs text-white/55 sm:text-sm">{label}</p></div>)}
          </div>
        </div>
        <aside className="self-center rounded-[10px] bg-[#171717] p-8">
          <h2 className="text-2xl font-bold text-[#b34b0c]">Operational Challenges We Solve</h2>
          <div className="mt-6"><BulletList items={challenges} /></div>
        </aside>
      </section>

      <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-8 sm:w-[calc(100%-64px)] md:grid-cols-3">
        {[4, 5, 6].map((image, index) => <div key={image} className="relative h-72 overflow-hidden rounded-[10px]"><Image src={`/About US/images/${image}_container.webp`} alt={["Dispatch coordination", "Freight planning", "Carrier support"][index]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-l from-[#171717]/80 to-transparent" /></div>)}
      </section>

      <section className="mx-auto mt-[110px] min-h-96 w-[calc(100%-40px)] max-w-[1560px] rounded-[10px] bg-gradient-to-r from-[#b34b0c] to-[#8e3908] p-8 sm:w-[calc(100%-64px)] sm:p-12">
        <span className="text-5xl" aria-hidden="true">◎</span><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Our Mission</h2>
        <p className="mt-7 max-w-[1455px] text-lg leading-8 sm:text-xl">Our mission is to help trucking carriers increase profitability through intelligent dispatch planning, reliable freight sourcing, operational transparency, and efficient load coordination. We focus on building long-term partnerships where carriers maintain full control over their business while we manage the backend dispatch workload, broker communication, scheduling, paperwork handling, and daily freight operations.</p>
      </section>

      <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-28 sm:w-[calc(100%-64px)]">
        <div className="text-center"><h2 className="text-4xl font-bold sm:text-6xl">What We Do</h2><p className="mt-4 text-lg text-white/70">Dedicated Truck Dispatch Services</p></div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[42px] xl:gap-y-6">{services.map(([title, text], index) => <article key={title} className="min-h-60 rounded-[10px] border border-[#b34b0c]/10 bg-[#171717] p-10"><span className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-[#b34b0c]/10 text-2xl font-bold text-[#b34b0c]">{index + 1}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-white/55">{text}</p></article>)}</div>
        <div className="mt-12 min-h-96 rounded-2xl bg-[#171717] p-8 sm:p-10"><h3 className="text-2xl font-bold sm:text-3xl">Your Dedicated Dispatcher Handles:</h3><div className="mt-8 grid gap-x-20 gap-y-6 sm:grid-cols-2">{dispatcherTasks.map((task) => <p key={task} className="flex h-9 items-center gap-4 text-base text-white/70"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b34b0c]/20 text-[#b34b0c]">✓</span>{task}</p>)}</div></div>
      </section>

      <section className="py-24 xl:pb-[266px]">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]"><h2 className="mx-auto max-w-[456px] text-center text-4xl font-bold sm:text-5xl">Freight Equipment We Dispatch</h2><div className="mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{equipment.map((name, index) => <article key={name} className={`overflow-hidden bg-[#171717] ${index % 4 === 0 || index % 4 === 2 ? "xl:translate-y-[170px]" : ""}`}><div className="relative h-48"><Image src={`/About US/images/${equipmentImages[index]}`} alt={`${name} dispatch`} fill sizes="(min-width: 1280px) 375px, 50vw" className="object-cover" /></div><div className="min-h-[260px] p-7"><h3 className="text-xl font-semibold">{name} Dispatch</h3><p className="mt-5 text-base leading-6 text-white/70">{equipmentDescriptions[index]}</p><p className="mt-7 text-sm font-medium text-[#c95816]">Explore More</p></div></article>)}</div></div>
      </section>

      <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] pb-16 pt-28 sm:w-[calc(100%-64px)]"><div className="grid gap-x-[143px] gap-y-16 lg:grid-cols-3"><h2 className="max-w-80 text-4xl font-bold sm:text-5xl">Our Dispatching Process</h2>{process.map(([title, text], index) => <article key={title}><span className="text-sm font-semibold text-[#b34b0c]">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-5 text-base leading-6 text-white/70">{text}</p></article>)}</div></section>

      <section className="py-12"><div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2"><div className="flex min-h-96 items-center bg-[#b34b0c] p-[42px] xl:row-span-2"><h2 className="text-4xl font-bold leading-tight sm:text-5xl">Why Carriers Choose E-Truck Dispatching</h2></div>{reasons.map((reason) => <div key={reason} className="min-h-48 bg-[#171717] p-5"><span className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-2xl text-[#b34b0c]">✓</span><p className="mt-6 text-lg font-medium capitalize">{reason}</p></div>)}</div></section>

      <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 py-20 sm:w-[calc(100%-64px)] xl:grid-cols-[600px_460px_460px]">
        <div><h2 className="text-4xl font-bold leading-tight sm:text-5xl">Industries, Compliance, and Operational Support</h2><p className="mt-7 max-w-lg text-lg text-white/70">We support multiple freight industries with dispatch coordination, compliance guidance, operational planning, and continuous support to improve efficiency, safety, and load consistency.</p><div className="relative mt-10 h-72"><Image src="/About US/images/22_rectangle_1510.webp" alt="Freight industry operations" fill sizes="600px" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/20 to-[#b34b0c]/10" /></div></div>
        <article className="bg-[#171717] p-6"><h3 className="text-xl font-semibold">Industries We Support</h3><p className="my-7 text-base text-white/75">We help carriers move freight across multiple industries:</p><BulletList items={industries} /><p className="mt-8 text-base leading-6 text-white/70">We support freight movement across retail, food and beverage, automotive, construction, manufacturing, medical, agricultural, industrial, and temperature-controlled transportation operations.</p></article>
        <article className="bg-[#171717] p-6"><h3 className="text-xl font-semibold">Compliance and Operational Support</h3><p className="my-7 text-base text-white/75">Our dispatch operations support carrier compliance through:</p><BulletList items={compliance} /><p className="mt-8 text-base leading-6 text-white/70">We provide dispatch coordination, scheduling management, route planning, driver communication, documentation support, detention tracking, and load verification to improve operational accuracy and freight efficiency.</p></article>
      </section>

      <section className="mx-auto mb-20 grid min-h-[535px] w-[calc(100%-40px)] max-w-[1560px] items-center gap-14 bg-[#171717] p-7 sm:w-[calc(100%-64px)] sm:p-12 xl:grid-cols-[489px_771px] xl:gap-[100px] xl:px-[100px] xl:py-[50px]">
        <div><h2 className="text-4xl font-bold sm:text-5xl">Our Vision</h2><p className="mt-8 text-lg text-white/70">We aim to become a trusted nationwide dispatching partner known for operational transparency, consistent freight support, and carrier-focused dispatch solutions.</p><p className="mt-6 text-lg text-white/70">Our long-term goal is to help independent carriers and small fleets scale sustainably without sacrificing operational control.</p></div>
        <form className="grid gap-x-8 gap-y-6 bg-[#1c1c1c] p-6 sm:grid-cols-2 sm:p-10" action="#">{[["First Name", "Enter First Name", "text"], ["Last Name", "Enter Last Name", "text"], ["Phone Number", "+1 (000) 123-1234", "tel"], ["Email Address", "email@gmail.com", "email"], ["Truck Type", "Enter Truck Type", "text"], ["MC Number", "Enter MC Number", "text"]].map(([label, placeholder, type]) => <label key={label}><span className="mb-3 block text-base font-medium">{label}</span><input className={inputClass} type={type} placeholder={placeholder} /></label>)}<button className="h-11 bg-[#b34b0c] text-lg font-medium capitalize hover:bg-[#cf5a13] sm:col-span-2" type="submit">Get Started Now</button></form>
      </section>
    </main>
  );
}
