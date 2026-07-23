import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type DispatchTechnologyCard = {
  title: string;
  description?: string;
  bullets?: string[];
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

type DispatchTechnologyGridSectionProps = {
  heading: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  cards: DispatchTechnologyCard[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const centerViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -65px 0px",
} as const;

const cardViewport = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -55px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Center technology panel
|--------------------------------------------------------------------------
*/

const centerPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delayChildren: 0.12,
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

const radialGlowVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const centerImageFrameVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: smoothEase,
      delayChildren: 0.06,
    },
  },
};

const centerImageVariants: Variants = {
  hidden: {
    opacity: 0.45,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
};

const imageShadeVariants: Variants = {
  hidden: {
    opacity: 0.8,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

const centerSweepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-130%",
  },
  visible: {
    opacity: [0, 0.32, 0],
    x: ["-130%", "0%", "130%"],
    transition: {
      delay: 0.25,
      duration: 1.05,
      ease: smoothEase,
      times: [0, 0.5, 1],
    },
  },
};

/*
|--------------------------------------------------------------------------
| Technology card content
|--------------------------------------------------------------------------
*/

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 17,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
  hover: {
    y: -3,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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

const bulletsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const bulletItemVariants: Variants = {
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

const bulletDotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
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

export default function DispatchTechnologyGridSection({
  heading,
  image,
  imageAlt,
  cards,
}: DispatchTechnologyGridSectionProps) {
  const positions = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-3 lg:row-start-1",
    "lg:col-start-1 lg:row-start-2",
    "lg:col-start-3 lg:row-start-2",
  ];

  return (
    <section className="bg-[#1c1c1c] px-5 py-12 text-white sm:px-8 lg:py-[3.125rem]">
      <div className="mx-auto grid max-w-[97.5rem] gap-5 md:grid-cols-2 lg:grid-cols-[minmax(0,23.08fr)_minmax(0,48.72fr)_minmax(0,23.08fr)] lg:grid-rows-[minmax(20rem,auto)_minmax(20rem,auto)] lg:gap-x-5 lg:gap-y-[3.4375rem]">
        {/* Center technology hub */}
        <motion.div
          variants={centerPanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={centerViewport}
          className="relative min-h-[36rem] overflow-hidden bg-[#161616] md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0"
        >
          <motion.div
            variants={radialGlowVariants}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_56%,rgba(179,75,12,0.22),transparent_56%)]"
          />

          <motion.h2
            variants={headingVariants}
            className="relative z-10 max-w-none px-7 pt-8 font-outfit text-3xl font-bold leading-[1.12] sm:px-12 sm:pt-12 sm:text-4xl lg:text-[2.75rem]"
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={centerImageFrameVariants}
            className="absolute inset-x-4 bottom-5 top-[9.5rem] overflow-hidden sm:inset-x-8 sm:bottom-8 sm:top-[10.5rem]"
          >
            <motion.div
              variants={centerImageVariants}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1280px) 48rem, 92vw"
                className="object-contain object-center"
              />
            </motion.div>

            {/* Image stays rendered; this overlay handles the reveal */}
            <motion.div
              variants={imageShadeVariants}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[#161616]"
            />

            <motion.div
              variants={centerSweepVariants}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[22%] skew-x-[-14deg] bg-[#b34b0c]"
            />
          </motion.div>
        </motion.div>

        {/* Surrounding technology cards */}
        {cards.map((card, index) => {
          const cardDirection = [
            { x: -44, y: -18 },
            { x: 44, y: -18 },
            { x: -44, y: 18 },
            { x: 44, y: 18 },
          ][index] ?? {
            x: index % 2 === 0 ? -32 : 32,
            y: 28,
          };

          const cardDelay = Math.min(index * 0.1, 0.3);

          const cardVariants: Variants = {
            hidden: {
              opacity: 0,
              x: cardDirection.x,
              y: cardDirection.y,
              scale: 0.965,
            },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                delay: cardDelay,
                duration: 0.68,
                ease: smoothEase,
                delayChildren: 0.13,
                staggerChildren: 0.09,
              },
            },
            hover: {
              y: -7,
              scale: 1.012,
              transition: {
                duration: 0.24,
                ease: smoothEase,
              },
            },
          };

          return (
            <motion.article
              key={`${card.title}-${index}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={cardViewport}
              className={`min-h-[20rem] overflow-hidden bg-[#161616] p-5 sm:p-6 lg:min-h-[20rem] ${
                positions[index] ?? ""
              }`}
            >
              <motion.span
                variants={iconVariants}
                className="flex h-16 w-16 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
              >
                {card.icon ? (
                  <span className="flex h-10 w-10 items-center justify-center [&_svg]:h-full [&_svg]:w-full">
                    {card.icon}
                  </span>
                ) : card.iconSrc ? (
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt ?? ""}
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                  />
                ) : (
                  <TechnologyIcon />
                )}
              </motion.span>

              <motion.h3
                variants={cardTitleVariants}
                className="mt-5 max-w-[18rem] font-outfit text-xl font-semibold leading-tight"
              >
                {card.title}
              </motion.h3>

              {card.bullets?.length ? (
                <motion.ul
                  variants={bulletsVariants}
                  className="mt-3 space-y-2 font-dm-sans text-sm leading-[1.3] text-white/85"
                >
                  {card.bullets.map((item, itemIndex) => (
                    <motion.li
                      key={`${item}-${itemIndex}`}
                      variants={bulletItemVariants}
                      className="flex gap-3"
                    >
                      <motion.span
                        variants={bulletDotVariants}
                        aria-hidden="true"
                        className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                      />

                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : card.description ? (
                <motion.p
                  variants={descriptionVariants}
                  className="mt-4 font-dm-sans text-sm leading-[1.45] text-white/85"
                >
                  {card.description}
                </motion.p>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function TechnologyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-10 w-10 fill-none stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="16" r="5" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" />
    </svg>
  );
}