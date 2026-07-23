import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type ServiceGuaranteeCard = {
  title: ReactNode;
  content: ReactNode;
};

export type ServiceGuaranteesVariant = "guarantees" | "process";

type ServiceGuaranteesSectionProps = {
  heading: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  cards: ServiceGuaranteeCard[];
  variant?: ServiceGuaranteesVariant;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -60px 0px",
} as const;

const imagePanelVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: -54,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.82,
      ease,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.1,
    x: -18,
    y: 18,
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
  hover: {
    scale: 1.045,
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: 48,
    y: 22,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease,
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0.3,
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

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const accentVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0.35,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

export default function ServiceGuaranteesSection({
  heading,
  image,
  imageAlt,
  cards,
  variant = "guarantees",
  className = "",
}: ServiceGuaranteesSectionProps) {
  const isProcessVariant = variant === "process";

  return (
    <section
      className={`overflow-hidden bg-[#181818] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-[3.125rem] ${className}`}
    >
      <div
        className={`mx-auto grid max-w-[97.5rem] items-stretch gap-8 lg:grid-cols-[minmax(0,41.55fr)_minmax(0,54.8fr)] lg:gap-5 ${
          isProcessVariant
            ? "lg:min-h-[40.5rem]"
            : "lg:min-h-[33.5rem]"
        }`}
      >
        {/* Image */}
        <motion.div
          variants={imagePanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={`group relative overflow-hidden ${
            isProcessVariant
              ? "min-h-[32rem] sm:min-h-[38rem]"
              : "min-h-[26rem] sm:min-h-[32rem]"
          } lg:min-h-0`}
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Dark reveal curtain */}
          <motion.div
            initial={{
              x: 0,
              opacity: 0.72,
            }}
            whileInView={{
              x: "105%",
              opacity: 0.12,
            }}
            viewport={viewport}
            transition={{
              delay: 0.12,
              duration: 0.9,
              ease,
            }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#181818]"
          />

          {/* Orange image scan */}
          <motion.div
            initial={{
              opacity: 0,
              x: "-150%",
            }}
            whileInView={{
              opacity: [0, 0.35, 0],
              x: ["-150%", "0%", "150%"],
            }}
            viewport={viewport}
            transition={{
              delay: 0.38,
              duration: 1.15,
              ease,
              times: [0, 0.5, 1],
            }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[22%] skew-x-[-16deg] bg-[#b34b0c]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#b34b0c]/20 via-transparent to-black/10"
          />

          {/* Bottom accent line */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{
              delay: 0.35,
              duration: 0.72,
              ease,
            }}
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#b34b0c]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex min-w-0 flex-col"
        >
          <motion.h2
            variants={itemVariants}
            className={`font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl ${
              isProcessVariant ? "max-w-none" : "max-w-[32.5625rem]"
            }`}
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={cardsVariants}
            className="mt-8 grid flex-1 auto-rows-fr gap-4 lg:mt-9 lg:gap-[0.9375rem]"
          >
            {cards.map((card, index) => {
              const direction = isProcessVariant
                ? index % 2 === 0
                  ? 36
                  : -36
                : 44 + index * 8;

              const cardVariants: Variants = {
                hidden: {
                  opacity: 0.22,
                  x: direction,
                  y: 24,
                  scale: 0.97,
                  rotate: isProcessVariant
                    ? index % 2 === 0
                      ? 0.6
                      : -0.6
                    : 0,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.62,
                    ease,
                    delayChildren: 0.08,
                    staggerChildren: 0.08,
                  },
                },
                hover: {
                  x: 6,
                  y: -5,
                  scale: 1.01,
                  borderColor: "rgba(179, 75, 12, 0.85)",
                  backgroundColor: "rgb(29, 29, 29)",
                  boxShadow: "0 16px 35px rgba(0, 0, 0, 0.3)",
                  transition: {
                    duration: 0.23,
                    ease,
                  },
                },
              };

              return (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative flex min-h-[9.5rem] flex-col justify-center overflow-hidden border border-[#404040] bg-zinc-900 px-6 py-6 sm:px-[1.875rem] lg:min-h-0 lg:py-5"
                >
                  {/* Orange verification rail */}
                  <motion.span
                    variants={accentVariants}
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-top bg-[#b34b0c]"
                  />

                  {/* Card scan */}
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: "-140%",
                    }}
                    whileInView={{
                      opacity: [0, 0.12, 0],
                      x: ["-140%", "0%", "140%"],
                    }}
                    viewport={viewport}
                    transition={{
                      delay: 0.3 + index * 0.12,
                      duration: 0.85,
                      ease,
                      times: [0, 0.5, 1],
                    }}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-[18%] skew-x-[-16deg] bg-[#b34b0c]"
                  />

                  <motion.h3
                    variants={itemVariants}
                    className="relative z-10 font-outfit text-lg font-semibold leading-tight text-[#b34b0c] sm:text-xl"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.div
                    variants={itemVariants}
                    className="relative z-10 mt-4 font-dm-sans text-sm font-normal leading-[1.45] text-white sm:text-base"
                  >
                    {card.content}
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}