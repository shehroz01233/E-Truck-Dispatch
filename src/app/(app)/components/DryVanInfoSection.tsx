import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

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

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -60px 0px",
} as const;

const introVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: -46,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: 48,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

const dividerVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0.3,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      delay: 0.18,
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.12,
    y: 24,
  },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.065,
    transition: {
      duration: 0.38,
      ease: smoothEase,
    },
  },
};

const shadeVariants: Variants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 0,
    transition: {
      delay: 0.15,
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 22,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.24,
      duration: 0.5,
      ease: smoothEase,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

export default function DryVanInfoSection({
  heading,
  description,
  cards,
  topBackgroundImage,
  bottomBackgroundImage,
  backgroundAlt = "",
}: DryVanInfoSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a1a1a] text-white">
      {topBackgroundImage ? (
        <motion.div
          initial={{
            opacity: 0.2,
            x: -90,
            scaleY: 0.75,
          }}
          whileInView={{
            opacity: 0.7,
            x: 0,
            scaleY: 1,
          }}
          viewport={viewportOptions}
          transition={{
            duration: 1,
            ease: smoothEase,
          }}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-20 w-[1920px] max-w-none origin-top -translate-x-1/2 mix-blend-multiply"
        >
          <Image
            src={topBackgroundImage}
            alt={backgroundAlt}
            fill
            sizes="1920px"
            className="object-fill"
          />
        </motion.div>
      ) : null}

      {bottomBackgroundImage ? (
        <motion.div
          initial={{
            opacity: 0.2,
            x: 90,
            scaleY: 0.75,
          }}
          whileInView={{
            opacity: 0.7,
            x: 0,
            scaleY: 1,
          }}
          viewport={viewportOptions}
          transition={{
            duration: 1,
            ease: smoothEase,
          }}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-20 w-[1920px] max-w-none origin-bottom -translate-x-1/2 mix-blend-multiply"
        >
          <Image
            src={bottomBackgroundImage}
            alt={backgroundAlt}
            fill
            sizes="1920px"
            className="object-fill"
          />
        </motion.div>
      ) : null}

      <div className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1560px] pb-[100px] pt-[100px] sm:w-[calc(100%-64px)]">
        {/* Introduction */}
        <motion.div
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-8 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-[506px]"
        >
          <motion.h2
            variants={headingVariants}
            className="max-w-60 font-['Outfit'] text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={descriptionVariants}
            className="relative max-w-[742px] pl-4 font-['DM_Sans'] text-base font-normal leading-7 text-white sm:text-lg"
          >
            <motion.span
              variants={dividerVariants}
              aria-hidden="true"
              className="absolute left-0 top-0 h-28 w-0.5 origin-top bg-amber-700"
            />

            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </motion.div>
        </motion.div>

        {/* Freight cards */}
        <div className="mt-[80px] grid gap-[30px] md:grid-cols-3">
          {cards.map((card, index) => {
            const horizontalDirection =
              index === 0 ? -44 : index === 2 ? 44 : 0;

            const rotation =
              index === 0 ? -1.5 : index === 2 ? 1.5 : 0;

            return (
              <motion.article
                key={index}
                initial={{
                  opacity: 0.15,
                  x: horizontalDirection,
                  y: index === 1 ? 52 : 34,
                  scale: 0.95,
                  rotate: rotation,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.012,
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35)",
                }}
                viewport={{
                  once: true,
                  amount: 0.32,
                  margin: "0px 0px -45px 0px",
                }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.1,
                  ease: smoothEase,
                }}
                className="group relative h-96 overflow-hidden bg-neutral-800"
              >
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{
                    once: true,
                    amount: 0.32,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt || ""}
                    fill
                    sizes="(min-width: 1280px) 500px, (min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={shadeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.32,
                  }}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#171717]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-700/0 from-28% to-amber-700/40 transition-colors duration-300 group-hover:to-amber-700/55"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    x: "-140%",
                  }}
                  whileInView={{
                    opacity: [0, 0.3, 0],
                    x: ["-140%", "0%", "140%"],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.32,
                  }}
                  transition={{
                    delay: 0.32 + index * 0.1,
                    duration: 1,
                    ease: smoothEase,
                    times: [0, 0.5, 1],
                  }}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-[22%] skew-x-[-16deg] bg-[#b34b0c]"
                />

                <motion.h3
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{
                    once: true,
                    amount: 0.32,
                  }}
                  className="absolute bottom-8 left-1/2 z-10 w-80 max-w-[calc(100%-2rem)] -translate-x-1/2 text-center font-['Outfit'] text-xl font-semibold leading-tight text-white"
                >
                  {card.title}
                </motion.h3>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#b34b0c] transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}