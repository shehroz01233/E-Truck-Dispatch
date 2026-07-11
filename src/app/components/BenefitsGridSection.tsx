import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type Benefit = {
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
};

export default function BenefitsGridSection({
  heading,
  description,
  benefits,
  variant = "grid",
}: Props) {
  if (variant === "steps") {
    return (
      <section className="bg-[#1c1c1c] px-5 pb-16 pt-8 text-white sm:px-8 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-[97.5rem]">
          <h2 className="mx-auto max-w-[44rem] text-center font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-[38rem] text-center text-sm leading-6 text-white/75">
              {description}
            </p>
          )}

          <ul className="mt-12 grid gap-y-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-y-0">
            {benefits.map((benefit, index) => {
              const isString = typeof benefit === "string";
              const title = isString ? benefit : benefit.title;
              const icon = isString ? null : benefit.icon;
              const iconSrc = isString ? null : benefit.iconSrc;
              const iconAlt = isString ? "" : benefit.iconAlt || "";

              return (
                <li
                  key={`${title}-${index}`}
                  className="flex min-h-20 items-center gap-5 px-2 sm:px-5 xl:border-l xl:border-white/20 xl:first:border-l-0"
                >
                  <span className="shrink-0 text-[#c9520b]">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={70}
                        height={70}
                        className="size-16 object-contain"
                      />
                    ) : icon ? (
                      <span className="flex size-16 items-center justify-center [&_svg]:size-16">
                        {icon}
                      </span>
                    ) : (
                      <span className="flex size-16 items-center justify-center text-2xl">
                        ✓
                      </span>
                    )}
                  </span>

                  <p className="font-dm-sans text-sm leading-5 text-white/90">
                    {title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  if (variant === "text-grid") {
    return (
      <section className="py-12 text-white">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-3">
          <div className="flex min-h-60 flex-col justify-center bg-[#b34b0c] p-7 xl:p-8">
            <h2 className="text-[clamp(1.75rem,2.4vw,3rem)] font-bold leading-[1.16]">
              {heading}
            </h2>

            {description && (
              <p className="mt-7 max-w-[22rem] text-[0.875rem] font-medium leading-6 text-white/90">
                {description}
              </p>
            )}
          </div>

          {benefits.map((benefit, index) => {
            const isString = typeof benefit === "string";
            const title = isString ? benefit : benefit.title;
            const benefitDescription = isString ? "" : benefit.description;

            return (
              <article
                key={`${title}-${index}`}
                className="min-h-60 bg-[#171717] p-7 xl:p-8"
              >
                <h3 className="font-outfit text-xl font-semibold leading-tight">
                  {title}
                </h3>

                {benefitDescription && (
                  <p className="mt-6 font-dm-sans text-sm leading-6 text-white/75">
                    {benefitDescription}
                  </p>
                )}
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
        <div className="flex min-h-96 flex-col justify-center overflow-hidden bg-[#b34b0c] p-7 xl:row-span-2 xl:p-8">
          <h2 className="text-[clamp(1.65rem,2vw,2rem)] font-bold leading-[1.18]">
            {heading}
          </h2>

          {description && (
            <p className="mt-7 max-w-[18rem] text-[0.875rem] font-medium leading-5 text-white/90">
              {description}
            </p>
          )}
        </div>

        {benefits.map((benefit, index) => {
          const isString = typeof benefit === "string";

          const title = isString ? benefit : benefit.title;
          const benefitDescription = isString ? "" : benefit.description;
          const icon = isString ? null : benefit.icon;
          const iconSrc = isString ? null : benefit.iconSrc;
          const iconAlt = isString ? "" : benefit.iconAlt || "";

          return (
            <div
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

              <p className="mt-6 text-lg font-medium leading-snug">
                {title}
              </p>

              {benefitDescription && (
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {benefitDescription}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
