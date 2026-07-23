import Link from "next/link";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type Stat = {
  value: string;
  title: string;
  text: string;
};

export type QuestionStatsProps = {
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  stats: Stat[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -42,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: smoothEase,
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const statsVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 38,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.68,
      ease: smoothEase,
      delayChildren: 0.18,
      staggerChildren: 0.1,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: smoothEase,
      delayChildren: 0.08,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

const valueVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export default function QuestionStats({
  heading,
  description,
  buttonText,
  buttonHref,
  stats,
}: QuestionStatsProps) {
  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-[1rem] pb-[2.75rem] pt-[3.75rem] text-white min-[30rem]:px-[1.5rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:pb-[3.25rem]">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
          margin: "0px 0px -55px 0px",
        }}
        className="mx-auto flex w-full max-w-[97.5rem] flex-col bg-[#111111] min-[64rem]:flex-row min-[64rem]:items-stretch min-[80rem]:h-[11.875rem] min-[80rem]:items-center min-[80rem]:pl-[4.375rem]"
      >
        {/* CTA panel */}
        <motion.div
          variants={ctaVariants}
          className="flex min-h-[14rem] w-full flex-col justify-center bg-[#b34b0c] px-[1.5rem] py-[2rem] min-[30rem]:min-h-[15.5rem] min-[30rem]:px-[1.875rem] min-[64rem]:w-[19rem] min-[80rem]:-mt-[3.75rem] min-[80rem]:h-[15.5rem] min-[80rem]:shrink-0 min-[80rem]:py-0"
        >
          <motion.h2
            variants={contentVariants}
            className="max-w-[12.5rem] font-['Outfit'] text-[1.625rem] font-semibold leading-[1.12] text-white min-[30rem]:text-[1.875rem]"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={contentVariants}
            className="mt-[1.25rem] max-w-[13.75rem] font-['DM_Sans'] text-[0.75rem] leading-[1.45] text-white/95 min-[30rem]:mt-[1.625rem]"
          >
            {description}
          </motion.p>

          <motion.div
            variants={contentVariants}
            whileHover={{
              x: 4,
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: smoothEase,
            }}
            className="mt-[1.125rem] w-fit"
          >
            <Link
              href={buttonHref}
              className="inline-flex h-[2rem] w-fit items-center justify-center bg-[#111111] px-[0.875rem] font-['Outfit'] text-[0.75rem] font-medium text-white transition-colors duration-200 hover:bg-[#1c1c1c]"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={statsVariants}
          className="grid w-full bg-[#111111] px-[1.5rem] py-[2rem] min-[48rem]:grid-cols-3 min-[48rem]:items-center min-[64rem]:px-[1.75rem] min-[80rem]:ml-[4.5rem] min-[80rem]:h-full min-[80rem]:flex-1 min-[80rem]:px-0 min-[80rem]:py-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.title}-${index}`}
              variants={statVariants}
              whileHover="hover"
              className={`flex w-full flex-col justify-center py-[1.35rem] first:pt-0 last:pb-0 min-[48rem]:py-0 min-[80rem]:h-full min-[80rem]:items-center ${
                index !== stats.length - 1
                  ? "border-b border-[#2b2b2b] min-[48rem]:border-b-0 min-[48rem]:border-r"
                  : ""
              }`}
            >
              <div className="w-full min-[80rem]:w-[8.875rem]">
                <div className="overflow-hidden pb-[0.125rem]">
                  <motion.h3
                    variants={valueVariants}
                    className="font-['Outfit'] text-[1.75rem] font-bold leading-none text-white min-[30rem]:text-[2rem]"
                  >
                    {stat.value}
                  </motion.h3>
                </div>

                <p className="mt-[0.875rem] font-['DM_Sans'] text-[0.8125rem] font-bold leading-[1.15] text-white">
                  {stat.title}
                </p>

                <p className="mt-[0.75rem] font-['DM_Sans'] text-[0.75rem] leading-[1.2] text-white/90">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}