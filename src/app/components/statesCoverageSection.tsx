import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
export type CoveredState = {
  name: ReactNode;
  description: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  highlighted?: boolean;
};
export type StatesCoverageSectionProps = {
  heading: ReactNode;
  states: CoveredState[];
  className?: string;
};
export default function StatesCoverageSection({
  heading,
  states,
  className = ""
}: StatesCoverageSectionProps) {
  return <section className={`bg-[#1c1c1c] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[97.5rem]">
        <h2 className="mx-auto max-w-[28rem] text-center font-['Outfit'] text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem]">
          {heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4 xl:gap-7">
          {states.map((state, index) => <article key={index} className={`flex min-h-[23rem] flex-col rounded-[0.75rem] bg-[#161616] p-4   hover:-translate-y-1 sm:min-h-[21rem] lg:p-5 ${state.highlighted ? "border border-[#b34b0c]" : "border border-transparent"}`}>
              <div className="relative aspect-[16/8.4] w-full overflow-hidden rounded-[0.5rem] bg-[#111111]">
                <Image src={state.image} alt={state.imageAlt} fill sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1279px) 45vw, 22vw" className="object-cover" />
              </div>

              <h3 className={`mt-5 font-['Outfit'] text-[1.125rem] font-semibold leading-tight ${state.highlighted ? "text-[#c6520c]" : "text-white"}`}>
                {state.name}
              </h3>

              <div className="mt-4 font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/85">
                {state.description}
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}
