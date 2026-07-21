import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

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

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -55px 0px",
} as const;

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0.45,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease,
    },
  },
  hover: {
    scale: 1.045,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

const locationTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
  hover: {
    x: 4,
    transition: {
      duration: 0.2,
      ease,
    },
  },
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
    <section className="w-full overflow-hidden bg-[#1c1c1c] py-16 text-white lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Cities */}
        <div className="grid grid-cols-1 gap-x-[27px] gap-y-5 md:grid-cols-2 xl:grid-cols-5 xl:gap-y-[5px]">
          <CoverageIntro
            heading={cityHeading}
            description={cityDescription}
            direction="left"
            className="md:col-span-2 xl:col-span-2 xl:min-h-[18rem]"
            descriptionClassName="max-w-[32rem]"
          />

          {cities.map((city, index) => (
            <LocationCard
              key={city.name}
              location={city}
              index={index}
              direction={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>

        {/* Counties */}
        <div className="mt-14 grid grid-cols-1 gap-x-[27px] gap-y-5 md:grid-cols-2 xl:mt-[70px] xl:grid-cols-5 xl:gap-y-[5px]">
          <CoverageIntro
            heading={countyHeading}
            description={countyDescription}
            direction="right"
            className="order-1 md:col-span-2 xl:col-span-2 xl:col-start-4 xl:row-start-1 xl:min-h-[18rem]"
            descriptionClassName="max-w-[38rem]"
          />

          {counties.map((county, index) => (
            <LocationCard
              key={county.name}
              location={county}
              index={index}
              direction={index % 2 === 0 ? "left" : "right"}
              className={`order-2 xl:order-none ${
                index < 3 ? "xl:row-start-1" : "xl:row-start-2"
              }`}
            />
          ))}
        </div>

        {showButton ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            viewport={viewport}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="mt-8 flex justify-center"
          >
            <Link
              href={buttonHref!}
              className="inline-flex min-h-11 items-center justify-center bg-[#b34b0c] px-5 py-2.5 font-['Outfit'] text-base font-medium uppercase text-white transition-colors hover:bg-[#cf5a13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-lg"
            >
              {buttonLabel}
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

function CoverageIntro({
  heading,
  description,
  direction,
  className = "",
  descriptionClassName = "",
}: {
  heading: ReactNode;
  description: string;
  direction: "left" | "right";
  className?: string;
  descriptionClassName?: string;
}) {
  const introVariants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -34 : 34,
      y: 22,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease,
        delayChildren: 0.08,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={introVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`min-w-0 self-start ${className}`}
    >
      <motion.h2
        variants={textVariants}
        className="max-w-[35.125rem] font-['Outfit'] text-3xl font-bold leading-[1.12] text-white sm:text-4xl xl:text-5xl xl:leading-[1.125]"
      >
        {heading}
      </motion.h2>

      <motion.p
        variants={textVariants}
        className={`mt-6 font-['DM_Sans'] text-sm font-normal leading-[1.5] text-white/90 sm:text-base xl:mt-8 xl:text-lg ${descriptionClassName}`}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

function LocationCard({
  location,
  index,
  direction,
  className = "",
}: {
  location: CoverageLocation;
  index: number;
  direction: "left" | "right";
  className?: string;
}) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -24 : 24,
      y: 26,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: Math.min((index % 5) * 0.06, 0.24),
        duration: 0.58,
        ease,
        delayChildren: 0.08,
      },
    },
    hover: {
      y: -6,
      scale: 1.012,
      transition: {
        duration: 0.24,
        ease,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={viewport}
      className={`flex aspect-square min-w-0 flex-col overflow-hidden border border-neutral-700 bg-[#171717] p-1 ${className}`}
    >
      <motion.div
        variants={imageVariants}
        className="relative h-[72%] w-full shrink-0 overflow-hidden"
      >
        <Image
          src={location.image}
          alt={location.imageAlt ?? location.name}
          width={580}
          height={410}
          sizes="(min-width: 1280px) 290px, (min-width: 768px) 50vw, calc(100vw - 40px)"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.h3
        variants={locationTitleVariants}
        className="flex min-h-0 flex-1 items-center px-4 py-3 font-['Outfit'] text-base font-bold leading-[1.25] text-white sm:text-lg xl:text-xl"
      >
        {location.name}
      </motion.h3>
    </motion.article>
  );
}