import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type DispatchAudience = {
  title: string;
  description: string;
};

type DispatchAudienceSectionProps = {
  heading: ReactNode;
  audiences: DispatchAudience[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headingViewport = {
  once: true,
  amount: 0.6,
  margin: "0px 0px -50px 0px",
} as const;

const cardViewport = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -55px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Heading animation
|--------------------------------------------------------------------------
*/

const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.1,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

const headingLineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.2,
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Card-content animations
|--------------------------------------------------------------------------
*/

const cardTopLineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: smoothEase,
    },
  },
  hover: {
    y: -3,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const cardDescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const cardSweepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-140%",
  },
  visible: {
    opacity: [0, 0.28, 0],
    x: ["-140%", "0%", "140%"],
    transition: {
      delay: 0.22,
      duration: 1,
      ease: smoothEase,
      times: [0, 0.5, 1],
    },
  },
};

export default function DispatchAudienceSection({
  heading,
  audiences,
}: DispatchAudienceSectionProps) {
  const remainder = audiences.length % 3;

  const lastRowStartIndex =
    remainder === 0 ? audiences.length : audiences.length - remainder;

  const getCardPosition = (index: number) => {
    if (index !== lastRowStartIndex) {
      return "";
    }

    // Center one card in the final row
    if (remainder === 1) {
      return "md:col-start-3";
    }

    // Center two cards in the final row
    if (remainder === 2) {
      return "md:col-start-2";
    }

    return "";
  };

  return (
    <section className="w-full overflow-hidden bg-[#1c1c1c] py-16 text-white">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        {/* Heading */}
        <motion.div
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="mx-auto max-w-[855px]"
        >
          <motion.h2
            variants={headingVariants}
            className="mx-auto w-full text-center font-['Outfit'] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.span
            variants={headingLineVariants}
            aria-hidden="true"
            className="mx-auto mt-6 block h-[0.125rem] w-20 origin-center bg-[#b34b0c]"
          />
        </motion.div>

        {/* Process cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-6 lg:mt-16 lg:gap-[30px]">
          {audiences.map((audience, index) => {
            const currentRowStart = Math.floor(index / 3) * 3;
            const cardsInCurrentRow = Math.min(
              3,
              audiences.length - currentRowStart,
            );

            const positionInRow = index - currentRowStart;

            /*
             * Visual card positions:
             *
             * Three cards: left, center, right
             * Two cards: centered left and centered right
             * One card: exact center
             */
            const visualSlot =
              cardsInCurrentRow === 1
                ? 1
                : cardsInCurrentRow === 2
                  ? positionInRow === 0
                    ? 0.35
                    : 1.65
                  : positionInRow;

            const distanceFromCenter = visualSlot - 1;

            const horizontalOffset = distanceFromCenter * 42;
            const rotation = distanceFromCenter * 1.8;
            const rowIndex = Math.floor(index / 3);
            const delay = Math.min(
              rowIndex * 0.1 + positionInRow * 0.1,
              0.4,
            );

            /*
             * Plain serializable Motion object.
             * No callback variant is passed to a Client Component.
             */
            const cardVariants: Variants = {
              hidden: {
                opacity: 0,
                x: horizontalOffset,
                y: 42,
                scale: 0.95,
                rotate: rotation,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  delay,
                  duration: 0.7,
                  ease: smoothEase,
                  delayChildren: 0.14,
                  staggerChildren: 0.1,
                },
              },
              hover: {
                y: -8,
                scale: 1.012,
                transition: {
                  duration: 0.24,
                  ease: smoothEase,
                },
              },
            };

            return (
              <motion.article
                key={`${audience.title}-${index}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={cardViewport}
                className={`relative flex min-h-52 flex-col items-start justify-start gap-5 overflow-hidden bg-[#b34b0c] px-6 pb-8 pt-8 md:col-span-2 lg:px-10 lg:pt-10 ${getCardPosition(
                  index,
                )}`}
              >
                {/* Top-line reveal */}
                <motion.span
                  variants={cardTopLineVariants}
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[0.1875rem] w-full origin-left bg-white/55"
                />

                {/* Soft lighting sweep */}
                <motion.span
                  variants={cardSweepVariants}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-[32%] skew-x-[-15deg] bg-white"
                />

                <motion.h3
                  variants={cardTitleVariants}
                  className="relative z-10 w-full font-['Outfit'] text-lg font-semibold leading-[1.4] text-white lg:text-xl lg:leading-10"
                >
                  {audience.title}
                </motion.h3>

                <motion.p
                  variants={cardDescriptionVariants}
                  className="relative z-10 w-full font-['DM_Sans'] text-sm font-normal leading-6 text-white lg:text-base"
                >
                  {audience.description}
                </motion.p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}