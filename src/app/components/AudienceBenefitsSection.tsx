import Image from "next/image";
import type { ReactNode } from "react";

export type Audience = {
  title: string;
  image: string;
};

type Props = {
  audiences?: Audience[];
  heading: ReactNode;
  benefits?: string[];
  showAudiences?: boolean;
  variant?: "default" | "audiences-only";
};

export default function AudienceBenefitsSection({
  audiences = [],
  heading,
  benefits = [],
  showAudiences = true,
  variant = "default",
}: Props) {
  const hasAudiences = showAudiences && audiences.length > 0;
  const isAudiencesOnly = variant === "audiences-only";

  if (isAudiencesOnly) {
    return (
      <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-16 text-white sm:w-[calc(100%-64px)] lg:py-20">
        <h2 className="mx-auto max-w-[30rem] text-center font-['Outfit'] text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>

        {hasAudiences ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map(({ title, image }) => (
              <article
                key={title}
                className="overflow-hidden bg-[#171717]"
              >
                <div className="relative h-[13rem] sm:h-[14rem]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>

                <h3 className="px-5 pb-5 pt-2 font-['Outfit'] text-base font-semibold leading-[1.3] text-white sm:text-lg">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    );
  }

  // Existing layout remains unchanged
  return (
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-20 sm:w-[calc(100%-64px)]">
      {hasAudiences ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {audiences.map(({ title, image }) => (
            <article
              key={title}
              className="overflow-hidden bg-[#171717] pt-4"
            >
              <div className="relative h-56">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </div>

              <h3 className="p-5 pt-3 text-xl font-semibold">
                {title}
              </h3>
            </article>
          ))}
        </div>
      ) : null}

      <h2
        className={`${
          hasAudiences ? "mt-20" : ""
        } mx-auto max-w-[42rem] text-center font-['Outfit'] text-4xl font-bold leading-[1.15] text-white sm:text-5xl`}
      >
        {heading}
      </h2>

      {benefits.length > 0 ? (
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((reason) => (
            <p
              key={reason}
              className="flex min-h-36 items-center justify-center bg-[#171717] p-6 text-center text-lg"
            >
              {reason}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  );
}