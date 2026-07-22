import Image from "next/image";
import Link from "next/link";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type StateItem = {
  name: string;
  image: string;
  imageAlt: string;
};

type StatesCoverageProps = {
  heading?: string;
  description?: string;
  states?: StateItem[];
};

const defaultStates: StateItem[] = [
  {
    name: "Ohio",
    image: "/Home/images/15_ohio.webp",
    imageAlt: "Ohio flag",
  },
  {
    name: "Indiana",
    image: "/Home/images/16_indiana.webp",
    imageAlt: "Indiana flag",
  },
  {
    name: "Texas",
    image: "/Home/images/17_texas.webp",
    imageAlt: "Texas flag",
  },
  {
    name: "Florida",
    image: "/Home/images/18_florida.webp",
    imageAlt: "Florida flag",
  },
  {
    name: "New York",
    image: "/Home/images/19_new_york.webp",
    imageAlt: "New York flag",
  },
  {
    name: "California",
    image: "/Home/images/20_california.webp",
    imageAlt: "California flag",
  },
  {
    name: "Kentucky",
    image: "/Home/images/21_kentucky.webp",
    imageAlt: "Kentucky flag",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.16,
  margin: "0px 0px -70px 0px",
} as const;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

const headingBlockVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease,
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

function createCardVariants(index: number): Variants {
  return {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -22 : 22,
      y: 42,
      scale: 0.965,
      filter: "blur(7px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.68,
        delay: Math.min(index * 0.065, 0.4),
        ease,
        delayChildren: 0.08,
        staggerChildren: 0.08,
      },
    },
  };
}

const imageWrapperVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.88,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const stateNameVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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

const ctaCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.965,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease,
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const ctaContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export default function StatesCoverage({
  heading = "Truck Dispatch Services Across Key Freight States",
  description = "Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability.",
  states = defaultStates,
}: StatesCoverageProps) {
  const resolvedStates =
    Array.isArray(states) && states.length > 0
      ? states
      : defaultStates;

  const firstRowStates = resolvedStates.slice(0, 3);
  const secondRowStates = resolvedStates.slice(3, 7);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[97.5rem] grid-cols-1 gap-[0.9375rem] sm:grid-cols-2 xl:grid-cols-5">
        <motion.div
          variants={headingBlockVariants}
          className="flex min-h-[17.375rem] flex-col justify-start sm:col-span-2 xl:col-span-2"
        >
          <motion.h2
            variants={headingVariants}
            className="max-w-[35.125rem] break-words font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] tracking-[-0.02em] text-white [overflow-wrap:anywhere] sm:text-[2.5rem] xl:text-[3rem]"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="mt-5 max-w-[32rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/85 [overflow-wrap:anywhere] xl:text-[1.125rem]"
          >
            {description}
          </motion.p>
        </motion.div>

        {firstRowStates.map((state, index) => (
          <StateCard
            key={`${state.name}-${index}`}
            state={state}
            index={index}
          />
        ))}

        {secondRowStates.map((state, index) => {
          const absoluteIndex = index + firstRowStates.length;

          return (
            <StateCard
              key={`${state.name}-${absoluteIndex}`}
              state={state}
              index={absoluteIndex}
            />
          );
        })}

        {/* Orange text card */}
        <motion.article
          variants={ctaCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex min-h-[17.375rem] flex-col items-center  justify-center border border-[#B34B0C] bg-[#B34B0C] px-5 py-8 text-center"
        >
          <motion.h3
            variants={ctaContentVariants}
            className="break-words font-['Outfit'] text-[1.125rem] font-bold leading-tight text-white [overflow-wrap:anywhere] xl:text-[1.375rem]"
          >
            Selected States Coverage
          </motion.h3>

          <motion.p
            variants={ctaContentVariants}
            className="mt-5 max-w-[16rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.4] text-white/90 [overflow-wrap:anywhere] xl:text-[1rem]"
          >
            Explore dispatch services in selected high-demand states with strong
            lanes, load availability, and region-specific support.
          </motion.p>

          <motion.div
            variants={ctaContentVariants}
            className="mt-6 inline-flex"
          >
            <Link
              href="/states"
              className="inline-flex min-h-11 items-center hover:scale-105 duration-300 justify-center bg-[#161616] px-5 py-2 font-['Outfit'] text-[0.9375rem] font-medium text-white xl:text-[1.125rem]"
            >
              View All States
            </Link>
          </motion.div>
        </motion.article>
      </div>
    </motion.section>
  );
}

type StateCardProps = {
  state: StateItem;
  index: number;
};

function StateCard({
  state,
  index,
}: StateCardProps) {
  const stateCardVariants = createCardVariants(index);

  return (
    <motion.article
      variants={stateCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="group flex min-h-[17.375rem] flex-col items-center justify-center border border-[#3F3F3F] bg-[#161616] px-5 py-8 text-center"
    >
      <motion.div
        variants={imageWrapperVariants}
        className="relative h-[6.75rem] w-[11rem] overflow-hidden"
      >
        <Image
          src={state.image}
          alt={state.imageAlt}
          fill
          sizes="11rem"
          className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)]"
        />
      </motion.div>

      <motion.h3
        variants={stateNameVariants}
        className="mt-5 break-words font-['Outfit'] text-[1.125rem] font-bold text-white transition-colors duration-300 [overflow-wrap:anywhere] group-hover:text-[#B34B0C] group-focus-within:text-[#B34B0C] xl:text-[1.375rem]"
      >
        {state.name}
      </motion.h3>
    </motion.article>
  );
}