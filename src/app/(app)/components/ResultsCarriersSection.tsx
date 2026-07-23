import Image from "next/image";
import type { ReactNode } from "react";
export type CarrierResultStep = {
  title: string;
  description: string;
  includes?: string[];
  footer?: string;
};
export type ResultsCarriersSectionProps = {
  heading: ReactNode;
  image: string;
  imageAlt?: string;
  steps: CarrierResultStep[];
};
export default function ResultsCarriersSection({
  heading,
  image,
  imageAlt = "Carrier ready to begin dispatch operations",
  steps
}: ResultsCarriersSectionProps) {
  return <section className="relative overflow-hidden bg-[#161616] px-4 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <Wave className="top-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-[97.5rem] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,37.5rem)] lg:items-center xl:gap-16">
        <div className="relative min-h-[24rem] sm:min-h-[30rem] lg:min-h-[34rem]">
          <Image src="/icons/4_vector_3.svg" alt="" fill sizes="(max-width: 63.9375rem) 100vw, 50vw" className="object-contain object-left-center opacity-60" unoptimized />
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 63.9375rem) 100vw, 48rem" className="z-10 object-contain object-center" />
        </div>

        <div className="min-w-0">
          <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[1.08] sm:text-[2.5rem] xl:text-[3rem]">
            {heading}
          </h2>

          <div className="relative mt-8 max-h-[28rem] overflow-y-auto pr-5 [scrollbar-color:#b34b0c_#3f3f3f] [scrollbar-width:thin]">
            <div className="space-y-4">
              {steps.map((step, index) => <article key={step.title} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border border-[#313131] bg-[#1c1c1c] p-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:p-5">
                  <div className="flex h-14 items-center justify-center bg-[#221a16] font-['Outfit'] text-[2.25rem] font-bold leading-none text-[#b34b0c] sm:h-16 sm:text-[2.75rem]">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Outfit'] text-base font-semibold text-[#b34b0c] sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-['DM_Sans'] text-xs leading-[1.45] text-white/85 sm:text-sm">
                      {step.description}
                    </p>
                    {step.includes?.length ? <>
                        <h4 className="mt-3 font-['Outfit'] text-xs font-semibold sm:text-sm">The application includes:</h4>
                        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                          {step.includes.map(item => <li key={item} className="flex items-start gap-2 font-['DM_Sans'] text-[0.6875rem] leading-[1.35] text-white/75 sm:text-xs">
                              <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-[#b34b0c]" />
                              {item}
                            </li>)}
                        </ul>
                      </> : null}
                    {step.footer ? <p className="mt-3 font-['DM_Sans'] text-xs leading-[1.4] text-white/80 sm:text-sm">{step.footer}</p> : null}
                  </div>
                </article>)}
            </div>
          </div>
        </div>
      </div>

      <Wave className="bottom-0 rotate-180" />
    </section>;
}
function Wave({
  className
}: {
  className: string;
}) {
  return <svg className={`absolute left-0 h-8 w-full ${className}`} viewBox="0 0 1440 32" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 18C122 2 202 29 330 14C470-2 574 30 716 15C858 0 962 28 1100 13C1230 0 1330 23 1440 12" fill="none" stroke="#b34b0c" strokeOpacity="0.25" strokeWidth="2" />
    </svg>;
}
