import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

import DemoRequestForm from "./DemoRequestForm";

type HeroSectionProps = {
  h1: ReactNode;
  paragraphs: string[];
  backgroundImage: string;
  backgroundAlt?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

/*
|--------------------------------------------------------------------------
| Main hero animation controller
|--------------------------------------------------------------------------
|
| The parent only controls the animation state.
| Child Motion components receive "hidden" and "visible" automatically.
|
*/
const heroVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Background image
|--------------------------------------------------------------------------
|
| Starts slightly zoomed and dark.
| Slowly settles into its final position.
|
*/
const backgroundVariants: Variants = {
  hidden: {
    opacity: 0.45,
    scale: 1.06,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Left content sequence
|--------------------------------------------------------------------------
|
| Heading appears first.
| Paragraph group starts immediately after it.
|
*/
const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.14,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Paragraph stagger
|--------------------------------------------------------------------------
|
| Each paragraph appears individually instead of the whole block
| appearing at once.
|
*/
const paragraphsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Form entrance
|--------------------------------------------------------------------------
|
| The form enters separately from the right side.
| The movement is kept small to avoid an aggressive effect on mobile.
|
*/
const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.32,
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

export default function HeroSection({
  h1,
  paragraphs,
  backgroundImage,
  backgroundAlt = "",
}: HeroSectionProps) {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative isolate min-h-[600px] overflow-hidden bg-neutral-900 text-white"
    >
      {/* Background image reveal */}
      <motion.div
        variants={backgroundVariants}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Static overlay prevents unnecessary background animation work */}
      <div className="absolute inset-0 -z-10 bg-neutral-900/60" />

      <div className="mx-auto grid min-h-[600px] w-[calc(100%-40px)] max-w-[1560px] gap-10 pb-10 sm:w-[calc(100%-64px)] lg:grid-cols-[minmax(0,1fr)_minmax(400px,500px)] 2xl:grid-cols-[960px_500px] 2xl:gap-[100px]">
        {/* Heading and paragraphs */}
        <motion.div
          variants={contentVariants}
          className="max-w-[785px] self-start pt-[150px] lg:pt-[190px]"
        >
          <motion.h1
            variants={headingVariants}
            className="text-4xl font-bold capitalize leading-tight sm:text-5xl"
          >
            {h1}
          </motion.h1>

          <motion.div
            variants={paragraphsContainerVariants}
            className="mt-8 max-w-[785px] space-y-4 text-base leading-7 text-white/85 sm:text-lg"
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={`${index}-${paragraph}`}
                variants={paragraphVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Demo request form */}
        <motion.div
          variants={formVariants}
          className="self-start pt-[90px] lg:pt-[110px] xl:pt-[120px]"
        >
          <DemoRequestForm />
        </motion.div>
      </div>
    </motion.section>
  );
}