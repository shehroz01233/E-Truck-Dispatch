import type { ReactNode } from "react";

export type DispatchAudience = {
  title: string;
  description: string;
};

type DispatchAudienceSectionProps = {
  heading: ReactNode;
  audiences: DispatchAudience[];
};

export default function DispatchAudienceSection({
  heading,
  audiences,
}: DispatchAudienceSectionProps) {
  const remainder = audiences.length % 3;

  const lastRowStartIndex =
    remainder === 0 ? audiences.length : audiences.length - remainder;

  const getCardPosition = (index: number) => {
    if (index !== lastRowStartIndex) {
      return "";
    }

    // Center one card in the final row
    if (remainder === 1) {
      return "md:col-start-3";
    }

    // Center two cards in the final row
    if (remainder === 2) {
      return "md:col-start-2";
    }

    return "";
  };

  return (
    <section className="w-full bg-[#1c1c1c] py-16 text-white">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        <h2 className="mx-auto w-full max-w-[855px] text-center font-['Outfit'] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
          {heading}
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-6 lg:mt-16 lg:gap-[30px]">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className={`flex min-h-52 flex-col items-start justify-start gap-5 bg-[#b34b0c] px-6 pb-8 pt-8 md:col-span-2 lg:px-10 lg:pt-10 ${getCardPosition(
                index,
              )}`}
            >
              <h3 className="w-full font-['Outfit'] text-lg font-semibold leading-[1.4] text-white lg:text-xl lg:leading-10">
                {audience.title}
              </h3>

              <p className="w-full font-['DM_Sans'] text-sm font-normal leading-6 text-white lg:text-base">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}