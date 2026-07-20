import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type CoverageLocation = {
  name: string;
  image: string | StaticImageData;
  imageAlt?: string;
};

type CaliforniaCoverageSectionProps = {
  cityHeading: ReactNode;
  cityDescription: string;
  cities: CoverageLocation[];

  countyHeading: ReactNode;
  countyDescription: string;
  counties: CoverageLocation[];

  buttonLabel?: string;
  buttonHref?: string;
};

export default function CaliforniaCoverageSection({
  cityHeading,
  cityDescription,
  cities,
  countyHeading,
  countyDescription,
  counties,
  buttonLabel,
  buttonHref,
}: CaliforniaCoverageSectionProps) {
  const showButton = Boolean(buttonLabel && buttonHref);

  return (
    <section className="w-full bg-[#1c1c1c] py-16 text-white lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Cities */}
        <div className="grid grid-cols-1 gap-x-[27px] gap-y-5 md:grid-cols-2 xl:grid-cols-5 xl:gap-y-[5px]">
          <CoverageIntro
            heading={cityHeading}
            description={cityDescription}
            className="md:col-span-2 xl:col-span-2 xl:min-h-[18rem]"
            descriptionClassName="max-w-[32rem]"
          />

          {cities.map((city) => (
            <LocationCard key={city.name} location={city} />
          ))}
        </div>

        {/* Counties */}
        <div className="mt-14 grid grid-cols-1 gap-x-[27px] gap-y-5 md:grid-cols-2 xl:mt-[70px] xl:grid-cols-5 xl:gap-y-[5px]">
          <CoverageIntro
            heading={countyHeading}
            description={countyDescription}
            className="order-1 md:col-span-2 xl:col-span-2 xl:col-start-4 xl:row-start-1 xl:min-h-[18rem]"
            descriptionClassName="max-w-[38rem]"
          />

          {counties.map((county, index) => (
            <LocationCard
              key={county.name}
              location={county}
              className={`order-2 xl:order-none ${
                index < 3 ? "xl:row-start-1" : "xl:row-start-2"
              }`}
            />
          ))}
        </div>

        {showButton ? (
          <div className="mt-8 flex justify-center">
            <Link
              href={buttonHref!}
              className="inline-flex min-h-11 items-center justify-center bg-[#b34b0c] px-5 py-2.5 font-['Outfit'] text-base font-medium uppercase text-white transition-colors hover:bg-[#cf5a13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-lg"
            >
              {buttonLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CoverageIntro({
  heading,
  description,
  className = "",
  descriptionClassName = "",
}: {
  heading: ReactNode;
  description: string;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`min-w-0 self-start ${className}`}>
      <h2 className="max-w-[35.125rem] font-['Outfit'] text-3xl font-bold leading-[1.12] text-white sm:text-4xl xl:text-5xl xl:leading-[1.125]">
        {heading}
      </h2>

      <p
        className={`mt-6 font-['DM_Sans'] text-sm font-normal leading-[1.5] text-white/90 sm:text-base xl:mt-8 xl:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}

function LocationCard({
  location,
  className = "",
}: {
  location: CoverageLocation;
  className?: string;
}) {
  return (
    <article
      className={`flex aspect-square min-w-0 flex-col overflow-hidden border border-neutral-700 bg-[#171717] p-1 ${className}`}
    >
      <Image
        src={location.image}
        alt={location.imageAlt ?? location.name}
        width={580}
        height={410}
        sizes="(min-width: 1280px) 290px, (min-width: 768px) 50vw, calc(100vw - 40px)"
        className="h-[72%] w-full shrink-0 object-cover"
      />

      <h3 className="flex min-h-0 flex-1 items-center px-4 py-3 font-['Outfit'] text-base font-bold leading-[1.25] text-white sm:text-lg xl:text-xl">
        {location.name}
      </h3>
    </article>
  );
}