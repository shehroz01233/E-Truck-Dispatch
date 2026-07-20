import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type DryVanInfoCard = {
  title: ReactNode;
  image: string | StaticImageData;
  imageAlt?: string;
};

type DryVanInfoSectionProps = {
  heading: ReactNode;
  description: ReactNode;
  cards: DryVanInfoCard[];

  topBackgroundImage?: string | StaticImageData;
  bottomBackgroundImage?: string | StaticImageData;
  backgroundAlt?: string;
};

export default function DryVanInfoSection({
  heading,
  description,
  cards,
  topBackgroundImage,
  bottomBackgroundImage,
  backgroundAlt = "",
}: DryVanInfoSectionProps) {
  const waveImageClass =
    "pointer-events-none absolute left-1/2 z-0 h-20 w-[1920px] max-w-none -translate-x-1/2 object-fill opacity-70 mix-blend-multiply";

  return (
    <section className="relative isolate overflow-hidden bg-[#1a1a1a] text-white">
      {topBackgroundImage && (
        <Image
          src={topBackgroundImage}
          alt={backgroundAlt}
          width={1920}
          height={85}
          sizes="1920px"
          className={`${waveImageClass} top-0`}
        />
      )}

      {bottomBackgroundImage && (
        <Image
          src={bottomBackgroundImage}
          alt={backgroundAlt}
          width={1920}
          height={85}
          sizes="1920px"
          className={`${waveImageClass} bottom-0`}
        />
      )}

      <div className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1560px] pb-[100px] pt-[100px] sm:w-[calc(100%-64px)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-[506px]">
          <h2 className="max-w-60 font-['Outfit'] text-4xl font-bold leading-tight text-white sm:text-5xl">
            {heading}
          </h2>

          <div className="relative max-w-[742px] pl-4 font-['DM_Sans'] text-base font-normal leading-7 text-white sm:text-lg">
            <span className="absolute left-0 top-0 h-28 w-0.5 bg-amber-700" />

            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>

        <div className="mt-[80px] grid gap-[30px] md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden bg-neutral-800"
            >
              <Image
                src={card.image}
                alt={card.imageAlt || ""}
                fill
                sizes="(min-width: 1280px) 500px, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-amber-700/0 from-28% to-amber-700/40" />

              <h3 className="absolute bottom-8 left-1/2 w-80 -translate-x-1/2 text-center font-['Outfit'] text-xl font-semibold leading-tight text-white">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}