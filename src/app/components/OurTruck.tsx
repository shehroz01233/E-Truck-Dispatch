"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type TruckType = {
  title: string;
  description: string;
  image?: string;
  active?: boolean;
};
type OurTrucksProps = {
  backgroundImage?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  trucks?: TruckType[];
};
const defaultTrucks: TruckType[] = [{
  title: "Dry Van Dispatch",
  description: "Standard 48 to 53 foot enclosed trailers moving retail goods, consumer products, and packaged freight through high-volume distribution corridors nationwide.",
  active: true
}, {
  title: "Flatbed Dispatch",
  image: "/Home/images/Flatbed Dispatch Services.webp",
  description: "Open-deck trailers transporting construction materials, steel, lumber, and heavy machinery with tarping, strapping, and load securement compliance built into every booking."
}, {
  title: "Step Deck Dispatch",
  image: "/Home/images/Step Deck Dispatch.webp",
  description: "Designed for 8.5 to 10 foot tall cargo including industrial machinery and construction equipment, with multi-state permit coordination and oversized load documentation."
}, {
  title: "Reefer Dispatch",
  image: "/Home/images/Reefer Dispatch Services.webp",
  description: "Temperature-controlled trailers for food, pharmaceuticals, and perishables requiring cold chain integrity and direct relationships with food-grade brokers."
}, {
  title: "Hotshot Dispatch",
  image: "/Home/images/Hotshot Truck Dispatching Services.webp",
  description: "Time-sensitive freight for oil fields, perishable cargo, and construction industries using 40-foot-plus trucks with same-day or next-day delivery turnaround."
}, {
  title: "Box Truck Dispatch",
  image: "/Home/images/Box Truck.webp",
  description: "Straight trucks handling local and regional retail, household, and final-mile freight with careful route planning for dock access, liftgate needs, and appointment windows."
}, {
  title: "Power Only Dispatch",
  image: "/Home/images/Power Only Dispatch Service.webp",
  description: "Tractor-only carriers pulling customer, broker, or leased trailers with drop-and-hook planning, trailer compatibility checks, and efficient empty-mile management."
}, {
  title: "Conestoga Dispatch",
  image: "/Home/images/Conestoga Dispatch Services.webp",
  description: "Retractable-tarp trailers protecting steel, machinery, and specialized freight while preserving fast side-loading access and open-deck securement flexibility."
}];
export default function OurTrucks({
  backgroundImage = "/Home/images/22_rectangle_1424.webp",
  heading = "Our Trucks",
  description = "E Truck Dispatching covers 8 equipment categories, each requiring distinct load board strategies, broker relationships, and securement knowledge.",
  buttonText = "View All States",
  buttonHref = "/states",
  trucks = defaultTrucks
}: OurTrucksProps) {
  const defaultActiveIndex = Math.max(trucks.findIndex(truck => truck.active), 0);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const visibleActiveIndex = hoveredIndex ?? activeIndex;
  const visibleBackgroundImage = trucks[visibleActiveIndex]?.image ?? backgroundImage;
  const visibleTruckTitle = trucks[visibleActiveIndex]?.title ?? heading;
  const desktopTruckCount = Math.min(trucks.length, 5);
  const desktopStartIndex = Math.min(Math.max(activeIndex - desktopTruckCount + 1, 0), Math.max(trucks.length - desktopTruckCount, 0));
  const desktopTrucks = trucks.slice(desktopStartIndex, desktopStartIndex + desktopTruckCount);
  const showPreviousTruck = () => {
    if (trucks.length === 0) return;
    setActiveIndex(currentIndex => currentIndex === 0 ? trucks.length - 1 : currentIndex - 1);
  };
  const showNextTruck = () => {
    if (trucks.length === 0) return;
    setActiveIndex(currentIndex => currentIndex === trucks.length - 1 ? 0 : currentIndex + 1);
  };
  return <section className="group/section relative w-full overflow-hidden bg-[#1C1C1C] text-white">
      {/* Background */}
      <Image src={backgroundImage} alt={visibleBackgroundImage === backgroundImage ? `${visibleTruckTitle} truck` : ""} fill sizes="100vw" className={`object-cover object-center transition-[opacity,transform] duration-1000 ease-in-out motion-reduce:transition-none group-hover/section:scale-[1.015] ${visibleBackgroundImage === backgroundImage ? "opacity-100" : "opacity-0"}`} />
      {trucks.map((truck, index) => truck.image && <Image key={`${truck.image}-${index}`} src={truck.image} alt={visibleActiveIndex === index ? `${truck.title} truck` : ""} fill sizes="100vw" className={`object-cover object-center transition-[opacity,transform] duration-1000 ease-in-out motion-reduce:transition-none group-hover/section:scale-[1.015] ${visibleActiveIndex === index ? "opacity-100" : "opacity-0"}`} />)}

      {/* Desktop */}
      <div className="relative z-10 mx-auto hidden min-h-[clamp(42rem,41.6667vw,50rem)] w-full max-w-[120rem] flex-col xl:flex">
        {/* Heading content */}
        <div className="w-full px-[9.375%] pt-[clamp(4.75rem,4.6875vw,5.625rem)]">
          <div className="w-[25.2%] min-w-[18rem] max-w-[24rem]">
            <h2 className="break-words font-['Outfit'] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.2] [overflow-wrap:anywhere]">
              {heading}
            </h2>

            {description && <p className="mt-[6%] break-words font-['DM_Sans'] text-[clamp(0.75rem,0.94vw,1.125rem)] leading-[1.5] [overflow-wrap:anywhere]">
                {description}
              </p>}

            <Link href={buttonHref} className="group/button mt-[8%] inline-flex min-h-[clamp(2.125rem,2.3vw,2.75rem)] items-center overflow-hidden bg-[#B34B0C] px-5 py-1 font-['Outfit'] text-[clamp(0.8125rem,0.94vw,1.125rem)] font-medium capitalize transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-[#c6530d] hover:shadow-[0_0.75rem_2rem_rgba(179,75,12,0.25)] active:translate-y-0">
              <span className="transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/button:translate-x-0.5">
                {buttonText}
              </span>
            </Link>
          </div>
        </div>

        {/* Controls and truck cards */}
        <div className="mt-auto grid w-full grid-cols-[9.375%_3.65%_1.0375%_78.125%_7.8125%] items-end">
          <div />

          <div className="flex h-full min-h-[clamp(16rem,16.3vw,19.5625rem)] flex-col justify-end gap-[clamp(0.5rem,0.55vw,0.6875rem)] pb-[2.5%]">
            <button type="button" aria-label="Previous truck type" onClick={showPreviousTruck} className="group/arrow flex aspect-square w-full items-center justify-center bg-[#161616] transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-[#242424] hover:shadow-lg active:scale-95">
              <span className="flex h-full w-full items-center justify-center transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/arrow:-translate-x-1">
                <Arrow direction="left" />
              </span>
            </button>

            <button type="button" aria-label="Next truck type" onClick={showNextTruck} className="group/arrow flex aspect-square w-full items-center justify-center bg-[#B34B0C] transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-[#c6530d] hover:shadow-[0_0.75rem_2rem_rgba(179,75,12,0.25)] active:scale-95">
              <span className="flex h-full w-full items-center justify-center transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/arrow:translate-x-1">
                <Arrow direction="right" />
              </span>
            </button>
          </div>

          <div />

          <div className="grid min-h-[clamp(16rem,16.3vw,19.5625rem)] items-stretch gap-x-[2.667%] gap-y-4" style={{
          gridTemplateColumns: `repeat(${Math.min(Math.max(desktopTrucks.length, 1), 5)}, minmax(0, 1fr))`
        }}>
            {desktopTrucks.map((truck, desktopIndex) => {
            const index = desktopStartIndex + desktopIndex;
            const isActive = visibleActiveIndex === index;
            return <article key={`${truck.title}-${index}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onFocus={() => setHoveredIndex(index)} onBlur={() => setHoveredIndex(null)} tabIndex={0} className={`truck-future-card group/card relative isolate flex min-h-[clamp(16rem,16.3vw,19.5625rem)] min-w-0 cursor-default flex-col overflow-hidden px-[11.2%] pb-[12%] pt-[18.65%] outline-none transition-[transform,background-color,box-shadow] duration-700 ease-in-out motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#B34B0C] focus-visible:ring-inset ${isActive ? "truck-future-card--active bg-[#B34B0C]/80 shadow-[0_1.25rem_3rem_rgba(0,0,0,0.16)]" : "bg-transparent hover:-translate-y-1 hover:bg-[#161616]/45 hover:shadow-[0_1.25rem_3rem_rgba(0,0,0,0.14)]"}`}>
                  <h3 className="relative z-10 max-w-[9.75rem] break-words font-['Outfit'] text-[clamp(0.875rem,1.15vw,1.375rem)] font-semibold leading-[1.27] transition-transform duration-300 ease-out motion-reduce:transition-none [overflow-wrap:anywhere] group-hover/card:-translate-y-0.5">
                    {truck.title}
                  </h3>

                  <p className="relative z-10 mt-[14%] max-w-[13rem] break-words font-['DM_Sans'] text-[clamp(0.625rem,0.84vw,1rem)] leading-[1.38] [overflow-wrap:anywhere]">
                    {truck.description}
                  </p>
                </article>;
          })}
          </div>

          <div />
        </div>
      </div>

      {/* Mobile and tablet */}
      <div className="relative z-10 px-5 py-12 sm:px-8 xl:hidden">
        <div className="max-w-[26.875rem]">
          <h2 className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-tight [overflow-wrap:anywhere]">
            {heading}
          </h2>

          {description && <p className="mt-5 break-words font-['DM_Sans'] text-[0.8125rem] leading-[1.5] text-white/90 [overflow-wrap:anywhere]">
              {description}
            </p>}

          <Link href={buttonHref} className="group/button mt-6 inline-flex min-h-10 items-center bg-[#B34B0C] px-5 py-2 font-['Outfit'] text-[0.8125rem] font-medium transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-[#c6530d] hover:shadow-[0_0.75rem_2rem_rgba(179,75,12,0.25)] active:translate-y-0">
            <span className="transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/button:translate-x-0.5">
              {buttonText}
            </span>
          </Link>
        </div>

        <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trucks.map((truck, index) => {
          const isActive = visibleActiveIndex === index;
          return <article key={`${truck.title}-${index}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onFocus={() => setHoveredIndex(index)} onBlur={() => setHoveredIndex(null)} onClick={() => setActiveIndex(index)} tabIndex={0} className={`truck-future-card group/card relative isolate min-h-[13.75rem] cursor-pointer overflow-hidden p-6 outline-none transition-[transform,background-color,box-shadow] duration-700 ease-in-out motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#B34B0C] focus-visible:ring-inset ${isActive ? "truck-future-card--active bg-[#B34B0C]/80 shadow-[0_1rem_2.5rem_rgba(0,0,0,0.16)]" : "bg-[#161616]/80 backdrop-blur-sm hover:-translate-y-1 hover:bg-[#202020]/90 hover:shadow-[0_1rem_2.5rem_rgba(0,0,0,0.2)]"}`}>
                <h3 className="relative z-10 break-words font-['Outfit'] text-[1.125rem] font-semibold leading-snug transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/card:-translate-y-0.5 [overflow-wrap:anywhere]">
                  {truck.title}
                </h3>

                <p className="relative z-10 mt-5 break-words font-['DM_Sans'] text-[0.75rem] leading-[1.5] [overflow-wrap:anywhere]">
                  {truck.description}
                </p>
              </article>;
        })}
        </div>
      </div>
    </section>;
}
function Arrow({
  direction
}: {
  direction: "left" | "right";
}) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-1/2 w-1/2 fill-none stroke-current stroke-2 ${direction === "left" ? "rotate-180" : ""}`}>
      <path d="m8 4 8 8-8 8" />
    </svg>;
}
