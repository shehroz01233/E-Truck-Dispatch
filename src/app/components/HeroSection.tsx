"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import DemoRequestForm from "./DemoRequestForm";
type HeroSectionProps = {
  h1: ReactNode;
  paragraphs: ReactNode[];
  backgroundImage: string;
  backgroundAlt?: string;
};
export default function HeroSection({
  h1,
  paragraphs,
  backgroundImage,
  backgroundAlt = ""
}: HeroSectionProps) {
  return <>
    
      <section className="relative isolate h-auto min-h-[560px] overflow-hidden bg-neutral-900 text-white lg:min-h-[305px] 2xl:min-h-[600px]">
        
        <div className="absolute inset-0 -z-20">
        
          <Image src={backgroundImage} alt={backgroundAlt} fill priority sizes="100vw" className="object-cover object-center" />
        
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-neutral-900/58" />

        {/* Content container */}
        <div className="mx-auto grid h-auto min-h-[560px] w-[calc(100%-40px)] max-w-[792px] auto-rows-max items-start gap-8 sm:w-[calc(100%-64px)] lg:min-h-[305px] lg:w-full lg:grid-cols-[minmax(0,430px)_minmax(0,245px)] lg:justify-between lg:gap-0 2xl:min-h-[600px] 2xl:max-w-[1560px] 2xl:grid-cols-[minmax(0,785px)_minmax(360px,500px)] 2xl:gap-12">
          {/* Hero content */}
          <div className="flex min-w-0 flex-col self-start pb-[50px] pt-[100px] lg:pb-[40px] 2xl:pb-[70px] 2xl:pt-[200px]">
            {/* Heading fade-in */}
            <h1 className="min-w-0 max-w-[390px] break-words text-[24px] font-bold capitalize leading-[1.22] [overflow-wrap:anywhere] 2xl:max-w-[680px] 2xl:text-[48px]">
            
              {h1}
            </h1>

            {paragraphs.length > 0 && <div className="mt-[14px] flex min-w-0 max-w-[430px] flex-col space-y-[3px] break-words text-[9px] leading-[11px] text-white/90 [overflow-wrap:anywhere] 2xl:mt-8 2xl:max-w-[785px] 2xl:space-y-4 2xl:text-[16px] 2xl:leading-[22px]">
            
                {paragraphs.map((paragraph, index) => <p key={index} className="min-w-0 break-words [overflow-wrap:anywhere]">
                    {paragraph}
                  </p>)}
              </div>}
          </div>

          
          <div className="flex min-w-0 flex-col self-start pb-[50px] pt-[90px] lg:w-[245px] lg:pb-[40px] 2xl:w-auto 2xl:pb-[70px] 2xl:pt-[155px]">
          
            <DemoRequestForm />
          </div>
        </div>
      </section>
    </>;
}
