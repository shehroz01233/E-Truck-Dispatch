import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
export type FreightBenefit = {
  text: ReactNode;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};
type FreightBenefitsSectionProps = {
  heading: ReactNode;
  benefits: FreightBenefit[];
  defaultIconSrc?: string | StaticImageData;
  defaultIconAlt?: string;
};
export default function FreightBenefitsSection({
  heading,
  benefits,
  defaultIconSrc,
  defaultIconAlt = ""
}: FreightBenefitsSectionProps) {
  return <section className="bg-[#1c1c1c] px-5 pb-16 pt-8 text-white sm:px-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[97.5rem]">
        <h2 className="mx-auto max-w-[44rem] text-center font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>

        <ul className="mt-12 grid gap-y-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-y-0">
          {benefits.map((benefit, index) => {
          const iconSrc = benefit.iconSrc ?? defaultIconSrc;
          return <li key={index} className="flex min-h-20 items-center gap-5 px-2 sm:px-5 xl:border-l xl:border-white/20 xl:first:border-l-0">
                <span className="shrink-0 text-[#c9520b]">
  {iconSrc ? <Image src={iconSrc} alt={benefit.iconAlt ?? defaultIconAlt} width={70} height={70} className="size-16 object-contain" /> : benefit.icon ?? <BenefitCheckIcon />}
</span>

                <p className="font-dm-sans text-sm leading-5 text-white/90">
                  {benefit.text}
                </p>
              </li>;
        })}
        </ul>
      </div>
    </section>;
}
function BenefitCheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 38 38" className="size-16 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M34 17v17H4V7h19" />
      <path d="m9 17 8 8L35 3" />
    </svg>;
}
