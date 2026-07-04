import Image from "next/image";
import type { ReactNode } from "react";
import DemoRequestForm from "./DemoRequestForm";

type HeroSectionProps = {
  h1: ReactNode;
  paragraphs: string[];
  backgroundImage: string;
  backgroundAlt?: string;
};

export default function HeroSection({
  h1,
  paragraphs,
  backgroundImage,
  backgroundAlt = "",
}: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-[37.5rem] overflow-hidden bg-neutral-900 text-white">
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-neutral-900/60" />

      <div className="mx-auto grid min-h-[37.5rem] w-[calc(100%-2rem)] max-w-[97.5rem] gap-8 pb-10 sm:w-[calc(100%-4rem)] sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,31.25rem)] lg:pb-0 2xl:grid-cols-[60rem_31.25rem] 2xl:gap-[6.25rem]">
        <div className="max-w-[49.0625rem] self-start pt-[9rem] sm:pt-[10.625rem] lg:pt-[12.4375rem]">
          <h1 className="text-[1.875rem] font-bold capitalize leading-tight min-[23.4375rem]:text-4xl sm:text-5xl">
            {h1}
          </h1>

          <div className="mt-6 max-w-[49.0625rem] space-y-4 text-[0.9375rem] leading-6 text-white/85 min-[23.4375rem]:text-base min-[23.4375rem]:leading-7 sm:mt-8 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="self-start pt-0 lg:pt-[8.9375rem]">
          <DemoRequestForm />
        </div>
      </div>
    </section>
  );
}
