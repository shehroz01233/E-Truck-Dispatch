import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type WhyChooseBenefit = {
  title: string;
  description: string;
  icon: string | StaticImageData;
  iconAlt?: string;
};

type WhyChooseDispatchSectionProps = {
  heading: ReactNode;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  benefits: WhyChooseBenefit[];
  buttonLabel?: string;
  buttonHref?: string;
};

export default function WhyChooseDispatchSection({
  heading,
  description,
  image,
  imageAlt,
  benefits,
  buttonLabel,
  buttonHref,
}: WhyChooseDispatchSectionProps) {
  const showButton = Boolean(buttonLabel && buttonHref);

  return (
    <section className="w-full bg-[#1c1c1c] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Heading, description and banner image */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="max-w-[667px] font-['Outfit'] text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">
              {heading}
            </h2>

            <p className="mt-6 max-w-[649px] font-['Outfit'] text-sm font-medium leading-[1.5] text-white/90 sm:text-base lg:mt-8 lg:text-lg">
              {description}
            </p>
          </div>

          <div className="overflow-hidden bg-[#b34b0c]/20">
            <Image
              src={image}
              alt={imageAlt}
              width={1616}
              height={558}
              sizes="(min-width: 1024px) 52vw, calc(100vw - 40px)"
              className="aspect-[808/279] h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Benefit cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex min-h-[20rem] flex-col items-center justify-center bg-[#171717] px-5 py-8 text-center sm:px-6"
            >
              <Image
                src={benefit.icon}
                alt={benefit.iconAlt ?? benefit.title}
                width={152}
                height={152}
                className="size-28 object-contain sm:size-32 xl:size-[9.5rem]"
              />

              <h3 className="mt-7 font-['Outfit'] text-lg font-semibold leading-[1.25] sm:text-xl">
                {benefit.title}
              </h3>

              <p className="mt-3 font-['DM_Sans'] text-sm leading-[1.4] text-white/85 sm:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Optional CTA */}
        {showButton ? (
          <div className="mt-8 flex justify-center lg:mt-10">
            <Link
              href={buttonHref!}
              className="inline-flex min-h-11 items-center justify-center bg-[#b34b0c] px-6 py-3 font-['Outfit'] text-base font-medium capitalize text-white transition-colors hover:bg-[#cf5a13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-lg"
            >
              {buttonLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}