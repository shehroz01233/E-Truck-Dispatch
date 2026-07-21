import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type LegacyComparison = [title: string, body: string];

type StructuredComparison = {
  title: string;
  items: string[];
  footer?: string;
};

type Comparison = LegacyComparison | StructuredComparison;

type ComparisonCardsSectionProps = {
  heading: string;
  description?: string;
  comparisons: Comparison[];
  icons?: string[];
  logos?: string[];
  iconAlts?: string[];
  logoAlts?: string[];

  /**
   * default:
   * Keeps the existing layout unchanged.
   *
   * dispatch-performance:
   * Places the result directly below the bullet list.
   */
  variant?: "default" | "dispatch-performance";
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Heading card
|--------------------------------------------------------------------------
*/

const headingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const headingContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

/*
|--------------------------------------------------------------------------
| Comparison card content
|--------------------------------------------------------------------------
*/

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.68,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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

const bodyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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
      staggerChildren: 0.06,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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

export default function ComparisonCardsSection({
  heading,
  description,
  comparisons,
  icons = [],
  logos = [],
  iconAlts = [],
  logoAlts = [],
  variant = "default",
}: ComparisonCardsSectionProps) {
  const isDispatchPerformance = variant === "dispatch-performance";

  return (
    <section className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 py-20 text-white sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4">
      {/* Heading card */}
      <motion.div
        variants={headingCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="flex min-h-80 flex-col bg-[#b34b0c] p-8"
      >
        <motion.h2
          variants={headingContentVariants}
          className="font-['Outfit'] text-4xl font-bold leading-tight sm:text-5xl"
        >
          {heading}
        </motion.h2>

        {description ? (
          <motion.p
            variants={headingContentVariants}
            className="mt-auto pt-8 font-['DM_Sans'] text-base leading-6 text-white/90"
          >
            {description}
          </motion.p>
        ) : null}
      </motion.div>

      {/* Comparison cards */}
      {comparisons.map((comparison, index) => {
        const isLegacy = Array.isArray(comparison);

        const title = isLegacy ? comparison[0] : comparison.title;
        const legacyBody = isLegacy ? comparison[1] : "";

        const items = isLegacy
          ? legacyBody.includes("|")
            ? legacyBody
                .split("|")
                .map((item) => item.trim())
                .filter(Boolean)
            : []
          : comparison.items;

        const footer = isLegacy ? "" : comparison.footer;

        const iconPath = icons[index] || logos[index] || "";
        const iconAlt =
          iconAlts[index] || logoAlts[index] || `${title} icon`;

        /*
         * Plain object created on the server.
         * No function-based Motion variant is passed.
         */
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
              delay: Math.min((index % 4) * 0.07, 0.21),
              duration: 0.58,
              ease: smoothEase,
              delayChildren: 0.1,
              staggerChildren: 0.08,
            },
          },
        };

        return (
          <motion.article
            key={`${title}-${index}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.2,
                ease: smoothEase,
              },
            }}
            className="flex min-h-80 flex-col bg-[#171717] p-5"
          >
            <motion.span
              variants={iconVariants}
              className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
            >
              {iconPath ? (
                <Image
                  src={iconPath}
                  alt={iconAlt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              ) : (
                <span className="text-2xl" aria-hidden="true">
                  ✓
                </span>
              )}
            </motion.span>

            <motion.h3
              variants={titleVariants}
              className="mt-6 font-['Outfit'] text-lg font-medium leading-snug"
            >
              {title}
            </motion.h3>

            {items.length > 0 ? (
              <motion.ul
                variants={listVariants}
                className="mt-6 space-y-3"
              >
                {items.map((item, itemIndex) => (
                  <motion.li
                    key={`${item}-${itemIndex}`}
                    variants={listItemVariants}
                    className="flex items-start gap-3 font-['DM_Sans'] text-sm leading-6 text-white/75"
                  >
                    <motion.span
                      variants={bulletVariants}
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                    />

                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            ) : legacyBody ? (
              <motion.p
                variants={bodyVariants}
                className="mt-6 font-['DM_Sans'] text-base leading-6 text-white/75"
              >
                {legacyBody}
              </motion.p>
            ) : null}

            {footer ? (
              <motion.p
                variants={footerVariants}
                className={`font-['DM_Sans'] text-sm leading-5 text-white/90 ${
                  isDispatchPerformance
                    ? "mt-5 max-w-[15rem]"
                    : "mt-auto pt-6 text-base leading-6"
                }`}
              >
                {footer}
              </motion.p>
            ) : null}
          </motion.article>
        );
      })}
    </section>
  );
}