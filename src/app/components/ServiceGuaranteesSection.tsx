import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
export type ServiceGuaranteeCard = {
  title: ReactNode;
  content: ReactNode;
};
export type ServiceGuaranteesVariant = "guarantees" | "process";
type ServiceGuaranteesSectionProps = {
  heading: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  cards: ServiceGuaranteeCard[];
  variant?: ServiceGuaranteesVariant;
  className?: string;
};
export default function ServiceGuaranteesSection({
  heading,
  image,
  imageAlt,
  cards,
  variant = "guarantees",
  className = ""
}: ServiceGuaranteesSectionProps) {
  const isProcessVariant = variant === "process";
  return <section className={`bg-[#181818] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-[3.125rem] ${className}`}>
      <div className={`mx-auto grid max-w-[97.5rem] items-stretch gap-8 lg:grid-cols-[minmax(0,41.55fr)_minmax(0,54.8fr)] lg:gap-5 ${isProcessVariant ? "lg:min-h-[40.5rem]" : "lg:min-h-[33.5rem]"}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${isProcessVariant ? "min-h-[32rem] sm:min-h-[38rem]" : "min-h-[26rem] sm:min-h-[32rem]"} lg:min-h-0`}>
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col">
          <h2 className={`font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl ${isProcessVariant ? "max-w-none" : "max-w-[32.5625rem]"}`}>
            {heading}
          </h2>

          <div className={`mt-8 grid flex-1 auto-rows-fr ${isProcessVariant ? "gap-4 lg:mt-9 lg:gap-[0.9375rem]" : "gap-4 lg:mt-9 lg:gap-[0.9375rem]"}`}>
            {cards.map((card, index) => <article key={index} className="flex min-h-[9.5rem] flex-col justify-center border border-[#404040] bg-zinc-900 px-6 py-6 sm:px-[1.875rem] lg:min-h-0 lg:py-5">
                <h3 className="font-outfit text-lg font-semibold leading-tight text-[#b34b0c] sm:text-xl">
                  {card.title}
                </h3>

                <div className="mt-4 font-dm-sans text-sm font-normal leading-[1.45] text-white sm:text-base">
                  {card.content}
                </div>
              </article>)}
          </div>
        </div>
      </div>
    </section>;
}
