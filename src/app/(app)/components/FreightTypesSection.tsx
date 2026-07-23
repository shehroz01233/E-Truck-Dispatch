import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type FreightTypeCard = {
  title: string;
  description: string;
  items?: string[];
  footer?: string;
  icon?: ReactNode;

  iconSrc?: string;
  imageSrc?: string;
  logoSrc?: string;

  iconAlt?: string;
  imageAlt?: string;
  logoAlt?: string;
};

type FreightTypesSectionProps = {
  heading: ReactNode;
  description: string;
  freightTypes: FreightTypeCard[];
  columns?: 3 | 4;
  variant?: "default" | "compact";
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headingViewport = {
  once: true,
  amount: 0.6,
  margin: "0px 0px -50px 0px",
} as const;

const cardViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Section heading
|--------------------------------------------------------------------------
*/

const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: smoothEase,
    },
  },
};

const sectionDescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Shared card content
|--------------------------------------------------------------------------
*/

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
};

const cardDescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
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
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.36,
      ease: smoothEase,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.35,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: smoothEase,
    },
  },
};

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: smoothEase,
    },
  },
};

export default function FreightTypesSection({
  heading,
  description,
  freightTypes,
  columns,
  variant = "default",
}: FreightTypesSectionProps) {
  const resolvedColumns = columns ?? (freightTypes.length === 4 ? 4 : 3);
  const isCompact = variant === "compact" || resolvedColumns === 4;

  const gridColumns =
    resolvedColumns === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3";

  return (
    <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[97.5rem]">
        {/* Section heading */}
        <motion.div
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="mx-auto max-w-[46rem] text-center"
        >
          <motion.h2
            variants={headingVariants}
            className="font-outfit text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={sectionDescriptionVariants}
            className="mx-auto mt-5 max-w-[34rem] font-dm-sans text-sm leading-6 text-white/80 sm:text-base"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Freight cards */}
        <div className={`mt-12 grid gap-5 md:grid-cols-2 ${gridColumns}`}>
          {freightTypes.map((freightType, index) => {
            const iconPath =
              freightType.iconSrc ||
              freightType.imageSrc ||
              freightType.logoSrc ||
              "";

            const iconAlt =
              freightType.iconAlt ||
              freightType.imageAlt ||
              freightType.logoAlt ||
              freightType.title;

            /*
             * Cards enter according to their grid position.
             *
             * Three-column layout:
             * left card  -> enters slightly from left
             * middle card -> enters vertically
             * right card -> enters slightly from right
             *
             * Four-column layout follows the same spread.
             */
            const columnIndex = index % resolvedColumns;
            const centerColumn = (resolvedColumns - 1) / 2;
            const columnDistance = columnIndex - centerColumn;

            const horizontalOffset = isCompact
              ? columnDistance * 14
              : columnDistance * 20;

            const iconRotation =
              columnDistance < 0 ? -10 : columnDistance > 0 ? 10 : -6;

            const cardVariants: Variants = {
              hidden: {
                opacity: 0,
                x: horizontalOffset,
                y: isCompact ? 38 : 44,
                scale: isCompact ? 0.94 : 0.97,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  delay: columnIndex * 0.08,
                  duration: 0.68,
                  ease: smoothEase,
                  delayChildren: 0.15,
                  staggerChildren: isCompact ? 0.1 : 0.085,
                },
              },
              hover: {
                y: isCompact ? -6 : -8,
                scale: 1.01,
                transition: {
                  duration: 0.22,
                  ease: smoothEase,
                },
              },
            };

            const iconVariants: Variants = {
              hidden: {
                opacity: 0,
                scale: 0.5,
                rotate: iconRotation,
                y: 10,
              },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
                transition: {
                  duration: 0.52,
                  ease: smoothEase,
                },
              },
              hover: {
                scale: 1.08,
                rotate: columnDistance < 0 ? -4 : 4,
                transition: {
                  duration: 0.22,
                  ease: smoothEase,
                },
              },
            };

            return (
              <motion.article
                key={`${freightType.title}-${index}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={cardViewport}
                className={`flex flex-col overflow-hidden bg-[#161616] ${
                  isCompact
                    ? "h-[17.125rem] items-center justify-center px-6 py-7 text-center"
                    : "min-h-[27rem] p-6 text-left sm:p-7 lg:p-8"
                }`}
              >
                {/* Icon */}
                <motion.span
                  variants={iconVariants}
                  className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
                >
                  {iconPath ? (
                    <Image
                      src={iconPath}
                      alt={iconAlt}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : freightType.icon ? (
                    <span className="flex h-8 w-8 items-center justify-center [&_svg]:h-full [&_svg]:w-full">
                      {freightType.icon}
                    </span>
                  ) : (
                    <FreightTruckIcon />
                  )}
                </motion.span>

                {/* Title */}
                <motion.h3
                  variants={cardTitleVariants}
                  className={`font-outfit text-xl font-semibold leading-tight ${
                    isCompact ? "mt-6" : "mt-7"
                  }`}
                >
                  {freightType.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={cardDescriptionVariants}
                  className={`font-dm-sans text-sm leading-6 text-white/85 ${
                    isCompact ? "mt-4 max-w-[19rem]" : "mt-6"
                  }`}
                >
                  {freightType.description}
                </motion.p>

                {/* Detailed-card bullet list */}
                {!isCompact && freightType.items?.length ? (
                  <motion.ul
                    variants={listVariants}
                    className="mt-5 space-y-2 text-left"
                  >
                    {freightType.items.map((item, itemIndex) => (
                      <motion.li
                        key={`${item}-${itemIndex}`}
                        variants={listItemVariants}
                        className="flex gap-3 font-dm-sans text-sm leading-5 text-white/85"
                      >
                        <motion.span
                          variants={bulletVariants}
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                        />

                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}

                {/* Detailed-card footer */}
                {!isCompact && freightType.footer ? (
                  <motion.p
                    variants={footerVariants}
                    className="mt-auto pt-6 font-dm-sans text-sm leading-6 text-white/85"
                  >
                    {freightType.footer}
                  </motion.p>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FreightTruckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 24"
      className="h-7 w-8 fill-none stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h18v13H2zM20 9h5l5 5v3H20z" />
      <path d="M5 7h12M5 10h12M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM25 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}