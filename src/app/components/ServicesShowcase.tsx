"use client";

import Image from "next/image";
import Link from "next/link";
export type ServiceShowcaseItem = {
  title: string;
  description: string;
  squareImage: string;
  wideImage: string;
};
export default function ServicesShowcase({
  services
}: {
  services: ServiceShowcaseItem[];
}) {
  return <>
    
      <section className="bg-[#1a1a1a] px-4 py-[0.6875rem] text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex w-full max-w-[22.875rem] flex-col gap-[clamp(0.25rem,1.282vw,1.25rem)] lg:max-w-[97.5rem]">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return <article key={service.title} className={`grid aspect-[1560/350] gap-x-[1.282%] ${reversed ? "grid-cols-[51.795%_23.205%_22.436%]" : "grid-cols-[22.436%_23.205%_51.795%]"}`}>
              
              <ServiceImage src={service.squareImage} alt={`${service.title} specialist`} className={reversed ? "order-3" : "order-1"} sizes="22.436vw" />
              

              <div className="order-2 flex flex-col justify-center bg-[#161616] bg-[radial-gradient(ellipse_at_center,#272727_0%,#161616_80%)] px-[clamp(0.5rem,3.205vw,3.125rem)] py-[clamp(0.25rem,2.5vw,2.4375rem)]">
                
                <h2 className="font-['Outfit'] text-[clamp(0.275rem,1.41vw,1.375rem)] font-semibold leading-tight">
                  {service.title}
                </h2>
                <p className="mt-[clamp(0.2rem,1.282vw,1.25rem)] max-w-[16.5625rem] font-['DM_Sans'] text-[clamp(0.2rem,1.026vw,1rem)] leading-[1.45] text-white/90">
                  {service.description}
                </p>
                <Link href="#contact" className="mt-[clamp(0.2rem,1.538vw,1.5rem)] inline-flex min-h-[clamp(0.5rem,2.821vw,2.75rem)] w-fit items-center bg-[#b34b0c] px-[clamp(0.3rem,1.282vw,1.25rem)] py-1 font-['Outfit'] text-[clamp(0.2rem,1.154vw,1.125rem)] font-medium  hover:bg-[#d45c13]">
                  
                  Read More
                </Link>
              </div>

              <ServiceImage src={service.wideImage} alt={`${service.title} truck`} className={reversed ? "order-1" : "order-3"} sizes="51.795vw" />
              
            </article>;
        })}
        </div>
      </section>
    </>;
}
function ServiceImage({
  src,
  alt,
  className,
  sizes
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
}) {
  return <div className={`relative min-h-0 overflow-hidden bg-[#161616] ${className}`}>
      
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
      
    </div>;
}
