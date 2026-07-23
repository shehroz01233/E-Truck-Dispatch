import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

const defaultDocuments = [
  "Active MC Authority",
  "Certificate of Insurance",
  "W9 Form",
  "Signed Dispatch Agreement",
];

const defaultReasons = [
  "Dedicated dispatch support",
  "Strong broker communication",
  "RPM-focused dispatch strategy",
  "Reduced deadhead planning",
  "Transparent pricing structure",
  "Nationwide freight coverage",
  "Fast onboarding process",
];

type ChecklistHighlightSectionProps = {
  documents?: string[];
  reasons?: string[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -55px 0px",
} as const;

const leftVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: -44,
    y: 22,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const panelVariants: Variants = {
  hidden: {
    opacity: 0.2,
    x: 48,
    y: 26,
    scale: 0.965,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delayChildren: 0.16,
      staggerChildren: 0.075,
    },
  },
  hover: {
    y: -5,
    scale: 1.008,
    transition: {
      duration: 0.24,
      ease: smoothEase,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0.2,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const documentVariants: Variants = {
  hidden: {
    opacity: 0.15,
    x: -34,
    scaleX: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
      delayChildren: 0.08,
    },
  },
  hover: {
    x: 7,
    borderColor: "rgba(179, 75, 12, 0.8)",
    backgroundColor: "rgba(179, 75, 12, 0.16)",
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -45,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.4,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

export default function ChecklistHighlightSection({
  documents = defaultDocuments,
  reasons = defaultReasons,
}: ChecklistHighlightSectionProps) {
  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-10 overflow-hidden pb-20 sm:w-[calc(100%-64px)] lg:grid-cols-2 2xl:grid-cols-[730px_730px] 2xl:gap-[100px]">
      {/* Required documents */}
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold leading-10 sm:text-4xl"
        >
          Required Carrier Documents
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-[19px] font-medium leading-6 text-white/80"
        >
          To start dispatching with us, carriers typically provide:
        </motion.p>

        <motion.ul
          variants={listVariants}
          className="mt-[30px] space-y-4"
        >
          {documents.map((document) => (
            <motion.li
              key={document}
              variants={documentVariants}
              whileHover="hover"
              className="flex min-h-14 origin-left items-center gap-4 border border-[#b34b0c]/30 bg-[#b34b0c]/10 px-4"
            >
              <motion.span
                variants={dotVariants}
                className="h-2 w-2 shrink-0 rounded-full bg-[#b34b0c]"
              />

              <span>{document}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Reasons panel */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={viewport}
        className="relative min-h-96 overflow-hidden bg-[#b34b0c] p-7 sm:p-10"
      >
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
              x: "-140%",
            },
            visible: {
              opacity: [0, 0.22, 0],
              x: ["-140%", "0%", "140%"],
              transition: {
                delay: 0.35,
                duration: 1.1,
                ease: smoothEase,
                times: [0, 0.5, 1],
              },
            },
          }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[24%] skew-x-[-15deg] bg-white"
        />

        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: {
                duration: 0.7,
                ease: smoothEase,
              },
            },
          }}
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] w-full origin-left bg-white/80"
        />

        <motion.h2
          variants={itemVariants}
          className="relative z-10 text-2xl font-bold sm:text-3xl"
        >
          Why Contact E-Truck Dispatching?
        </motion.h2>

        <motion.ul
          variants={listVariants}
          className="relative z-10 mt-7 space-y-4"
        >
          {reasons.map((reason) => (
            <motion.li
              key={reason}
              variants={itemVariants}
              whileHover={{
                x: 7,
                transition: {
                  duration: 0.2,
                  ease: smoothEase,
                },
              }}
              className="flex items-center gap-4"
            >
              <motion.span
                variants={dotVariants}
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-white"
              />

              <span className="text-base">{reason}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}