import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type ServicesGridSectionProps = {
  heading: string;
  eyebrow: string;
  services: string[][];
  tasks: string[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const eyebrowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const taskPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.18,
      staggerChildren: 0.07,
    },
  },
};

const taskItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

const checkIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

export default function ServicesGridSection({
  heading,
  eyebrow,
  services,
  tasks,
}: ServicesGridSectionProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -70px 0px",
      }}
      className="mx-auto w-[calc(100%-40px)] max-w-[1560px] py-16 sm:w-[calc(100%-64px)]"
    >
      <motion.div variants={sectionVariants} className="text-center">
        <motion.h2
          variants={headingVariants}
          className="text-4xl font-bold sm:text-6xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          variants={eyebrowVariants}
          className="mt-4 text-lg text-white/70"
        >
          {eyebrow}
        </motion.p>
      </motion.div>

      <motion.div
        variants={cardsContainerVariants}
        className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[42px] xl:gap-y-6"
      >
        {services.map(([title, text], index) => (
          <motion.article
            key={`${title}-${index}`}
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.2,
                ease: smoothEase,
              },
            }}
            className="min-h-60 rounded-[10px] border border-[#b34b0c]/10 bg-[#171717] p-10"
          >
            <motion.span
              variants={numberVariants}
              className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-[#b34b0c]/10 text-2xl font-bold text-[#b34b0c]"
            >
              {index + 1}
            </motion.span>

            <h3 className="mt-4 text-xl font-bold">{title}</h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/55">
              {text}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        variants={taskPanelVariants}
        className="mt-12 min-h-96 rounded-2xl bg-[#171717] p-8 sm:p-10"
      >
        <motion.h3
          variants={headingVariants}
          className="text-2xl font-bold sm:text-3xl"
        >
          Your Dedicated Dispatcher Handles:
        </motion.h3>

        <motion.div
          variants={cardsContainerVariants}
          className="mt-8 grid gap-x-20 gap-y-6 sm:grid-cols-2"
        >
          {tasks.map((task, index) => (
            <motion.p
              key={`${task}-${index}`}
              variants={taskItemVariants}
              className="flex min-h-9 items-center gap-4 text-base text-white/70"
            >
              <motion.span
                variants={checkIconVariants}
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b34b0c]/20 text-[#b34b0c]"
              >
                ✓
              </motion.span>

              <span>{task}</span>
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}