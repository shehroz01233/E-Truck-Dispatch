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
};

export default function BenefitsGridSection({
  heading,
  description,
  benefits,
}: Props) {
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