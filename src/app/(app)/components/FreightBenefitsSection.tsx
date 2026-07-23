import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type FreightBenefit = {
  text: ReactNode;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

type FreightBenefitsSectionProps = {
  heading: ReactNode;
  benefits: FreightBenefit[];
  defaultIconSrc?: string | StaticImageData;
  defaultIconAlt?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -55px 0px",
} as const;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.08,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0.2,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.11,
    },
  },
};

const benefitVariants: Variants = {
  hidden: {
    opacity: 0.2,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
  hover: {
    y: -6,
    scale: 1.012,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0.25,
    scale: 0.5,
    rotate: -12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 17,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 4,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: 18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const iconOutlineVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0.25,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const iconCheckVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.18,
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export default function FreightBenefitsSection({
  heading,
  benefits,
  defaultIconSrc,
  defaultIconAlt = "",
}: FreightBenefitsSectionProps) {
  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-5 pb-16 pt-8 text-white sm:px-8 lg:pb-20 lg:pt-10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="mx-auto max-w-[97.5rem]"
      >
        <motion.h2
          variants={headingVariants}
          className="mx-auto max-w-[44rem] text-center font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]"
        >
          {heading}
        </motion.h2>

        <motion.ul
          variants={listVariants}
          className="relative mt-12 grid overflow-hidden gap-y-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-y-0"
        >
          {/* Subtle progress scan */}
          <motion.span
            aria-hidden="true"
            initial={{
              opacity: 0,
              x: "-140%",
            }}
            whileInView={{
              opacity: [0, 0.16, 0],
              x: ["-140%", "0%", "140%"],
            }}
            viewport={viewportOptions}
            transition={{
              delay: 0.35,
              duration: 1.15,
              ease: smoothEase,
              times: [0, 0.5, 1],
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[16%] skew-x-[-16deg] bg-[#b34b0c]"
          />

          {benefits.map((benefit, index) => {
            const iconSrc = benefit.iconSrc ?? defaultIconSrc;

            return (
              <motion.li
                key={index}
                variants={benefitVariants}
                whileHover="hover"
                className="relative z-10 flex min-h-20 items-center gap-5 px-2 sm:px-5 xl:border-l xl:border-white/20 xl:first:border-l-0"
              >
                <motion.span
                  variants={iconVariants}
                  className="shrink-0 text-[#c9520b]"
                >
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={benefit.iconAlt ?? defaultIconAlt}
                      width={70}
                      height={70}
                      className="size-16 object-contain"
                    />
                  ) : (
                    benefit.icon ?? <BenefitCheckIcon />
                  )}
                </motion.span>

                <motion.p
                  variants={textVariants}
                  className="font-dm-sans text-sm leading-5 text-white/90"
                >
                  {benefit.text}
                </motion.p>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function BenefitCheckIcon() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 38 38"
      className="size-16 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        variants={iconOutlineVariants}
        d="M34 17v17H4V7h19"
      />

      <motion.path
        variants={iconCheckVariants}
        d="m9 17 8 8L35 3"
      />
    </motion.svg>
  );
}