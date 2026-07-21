import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type Benefit = {
  title: string;
  description?: string;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

type Props = {
  heading: ReactNode;
  description?: string;
  benefits: (string | Benefit)[];
  variant?: "grid" | "steps" | "text-grid";

  // Optional CTA button
  buttonLabel?: string;
  buttonHref?: string;
};

export default function BenefitsGridSection({
  heading,
  description,
  benefits,
  buttonLabel,
  buttonHref,
  variant = "grid",
}: Props) {
  if (variant === "steps") {
    return (
      <section className="bg-[#1c1c1c] px-5 pb-16 pt-8 text-white sm:px-8 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-[97.5rem]">
          <h2 className="mx-auto max-w-[44rem] text-center font-['Outfit'] text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-[48rem] text-center font-['DM_Sans'] text-base leading-7 text-white/75">
              {description}
            </p>
          ) : null}
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const title = typeof benefit === "string" ? benefit : benefit.title;
              const detail = typeof benefit === "string" ? "" : benefit.description;
              const iconSrc = typeof benefit === "string" ? null : benefit.iconSrc;
              const iconAlt = typeof benefit === "string" ? "" : benefit.iconAlt || "";
              return (
                <article key={`${title}-${index}`} className="bg-[#171717] p-6">
                  <span className="font-['Outfit'] text-3xl font-bold text-[#b34b0c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {iconSrc ? (
                    <Image src={iconSrc} alt={iconAlt} width={34} height={34} className="mt-5 h-8 w-8 object-contain" />
                  ) : null}
                  <h3 className="mt-5 text-lg font-medium leading-snug">{title}</h3>
                  {detail ? <p className="mt-3 text-sm leading-6 text-white/70">{detail}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "text-grid") {
    return (
      <section className="py-12 text-white">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-3">
          <div className="flex min-h-60 flex-col justify-center bg-[#b34b0c] p-7 xl:p-8">
            <h2 className="text-[clamp(1.65rem,2vw,2rem)] font-bold leading-[1.18]">{heading}</h2>
            {description ? <p className="mt-7 text-sm leading-6 text-white/90">{description}</p> : null}
          </div>
          {benefits.map((benefit, index) => {
            const title = typeof benefit === "string" ? benefit : benefit.title;
            const detail = typeof benefit === "string" ? "" : benefit.description;
            return (
              <article key={`${title}-${index}`} className="min-h-60 bg-[#171717] p-7">
                <h3 className="text-lg font-medium leading-snug">{title}</h3>
                {detail ? <p className="mt-4 text-sm leading-6 text-white/70">{detail}</p> : null}
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 text-white">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
        {/* Heading card */}
       <div className="flex min-h-96 flex-col justify-center overflow-hidden bg-[#b34b0c] p-7 xl:row-span-2 xl:p-8">
  <h2 className="text-[clamp(1.65rem,2vw,2rem)] font-bold leading-[1.18]">
    {heading}
  </h2>

  {description ? (
    <p className="mt-7 max-w-[18rem] text-[0.875rem] font-medium leading-5 text-white/90">
      {description}
    </p>
  ) : null}

  {buttonLabel && buttonHref ? (
    <Link
      href={buttonHref}
      className="mt-6 inline-flex w-fit items-center justify-center bg-[#171717] px-5 py-3 font-['DM_Sans'] text-sm font-medium leading-none text-white transition-colors hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      {buttonLabel}
    </Link>
  ) : null}
</div>

        {/* Benefit cards */}
        {benefits.map((benefit, index) => {
          const isString = typeof benefit === "string";

          const title = isString ? benefit : benefit.title;
          const benefitDescription = isString ? "" : benefit.description;
          const icon = isString ? null : benefit.icon;
          const iconSrc = isString ? null : benefit.iconSrc;
          const iconAlt = isString ? "" : benefit.iconAlt || "";

          return (
            <article
              key={`${title}-${index}`}
              className="min-h-48 bg-[#171717] p-5"
            >
              <span className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]">
                {iconSrc ? (
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                  />
                ) : icon ? (
                  <span className="flex h-8 w-8 items-center justify-center [&_svg]:h-8 [&_svg]:w-8">
                    {icon}
                  </span>
                ) : (
                  <span className="text-2xl">✓</span>
                )}
              </span>

              <h3 className="mt-6 text-lg font-medium leading-snug">
                {title}
              </h3>

              {benefitDescription ? (
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {benefitDescription}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
