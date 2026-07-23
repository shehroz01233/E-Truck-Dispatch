import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

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

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -55px 0px",
} as const;

const textPanelVariants: Variants = {
  hidden: {
    x: -38,
    y: 20,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.68,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    y: 18,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.48,
      ease,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    x: 42,
    y: 22,
    scale: 0.97,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease,
    },
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 28,
    scale: 0.97,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease,
    },
  },
  hover: {
    y: -6,
    scale: 1.012,
    transition: {
      duration: 0.22,
      ease,
    },
  },
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
    <section className="w-full overflow-hidden bg-[#1c1c1c] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Heading, description and banner */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <motion.div
            variants={textPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="min-w-0"
          >
            <motion.h2
              variants={textVariants}
              className="max-w-[667px] font-['Outfit'] text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-[649px] font-['Outfit'] text-sm font-medium leading-[1.5] text-white/90 sm:text-base lg:mt-8 lg:text-lg"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={viewport}
            className="overflow-hidden bg-[#b34b0c]/20"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={viewport}
              transition={{
                duration: 0.9,
                ease,
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                width={1616}
                height={558}
                sizes="(min-width: 1024px) 52vw, calc(100vw - 40px)"
                className="aspect-[808/279] h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Benefit cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              variants={cardVariants}
              initial={{
                x: index % 2 === 0 ? -22 : 22,
                y: 28,
                scale: 0.97,
              }}
              whileInView={{
                x: 0,
                y: 0,
                scale: 1,
              }}
              whileHover="hover"
              viewport={viewport}
              transition={{
                duration: 0.55,
                ease,
              }}
              className="group flex min-h-[20rem] flex-col items-center justify-center bg-[#171717] px-5 py-8 text-center sm:px-6"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Image
                  src={benefit.icon}
                  alt={benefit.iconAlt ?? benefit.title}
                  width={152}
                  height={152}
                  className="size-28 object-contain sm:size-32 xl:size-[9.5rem]"
                />
              </div>

              <h3 className="mt-7 font-['Outfit'] text-lg font-semibold leading-[1.25] transition-transform duration-300 group-hover:-translate-y-1 sm:text-xl">
                {benefit.title}
              </h3>

              <p className="mt-3 font-['DM_Sans'] text-sm leading-[1.4] text-white/85 sm:text-base">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Optional CTA */}
        {showButton ? (
          <motion.div
            initial={{
              y: 18,
              scale: 0.96,
            }}
            whileInView={{
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
            className="mt-8 flex justify-center lg:mt-10"
          >
            <Link
              href={buttonHref!}
              className="inline-flex min-h-11 items-center justify-center bg-[#b34b0c] px-6 py-3 font-['Outfit'] text-base font-medium capitalize text-white transition-colors hover:bg-[#cf5a13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-lg"
            >
              {buttonLabel}
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}