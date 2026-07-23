import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type MissionBannerProps = {
  heading: string;
  children: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const bannerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export default function MissionBanner({
  heading,
  children,
}: MissionBannerProps) {
  return (
    <motion.section
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
        margin: "0px 0px -70px 0px",
      }}
      className="mx-auto mt-[110px] min-h-96 w-[calc(100%-40px)] max-w-[1560px] rounded-[10px] bg-gradient-to-r from-[#b34b0c] to-[#8e3908] p-8 sm:w-[calc(100%-64px)] sm:p-12"
    >
      <motion.span
        variants={iconVariants}
        className="inline-block text-5xl"
        aria-hidden="true"
      >
        ◎
      </motion.span>

      <motion.h2
        variants={headingVariants}
        className="mt-4 text-4xl font-bold sm:text-5xl"
      >
        {heading}
      </motion.h2>

      <motion.p
        variants={paragraphVariants}
        className="mt-7 max-w-[1455px] text-lg leading-8 sm:text-xl"
      >
        {children}
      </motion.p>
    </motion.section>
  );
}