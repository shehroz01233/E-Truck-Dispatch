import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type Props = {
  heading: string;
  description: string;
  cards: [string, string[]][];
  image: string;
  imageAlt?: string;
  cardContentVariant?: "list" | "paragraph";
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Heading card animations
|--------------------------------------------------------------------------
*/

const headingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.985,
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
| Content card animations
|--------------------------------------------------------------------------
*/

const cardTitleVariants: Variants = {
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

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
    },
  },
};

const paragraphVariants: Variants = {
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

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
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

/*
|--------------------------------------------------------------------------
| Image animations
|--------------------------------------------------------------------------
*/

const imageContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: smoothEase,
      delayChildren: 0.06,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.06,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export default function ComplianceMatrixSection({
  heading,
  description,
  cards,
  image,
  imageAlt = "Real-time compliance monitoring",
  cardContentVariant = "list",
}: Props) {
  const isParagraphVariant = cardContentVariant === "paragraph";

  return (
    <section className="py-16">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4">
        {/* Heading card */}
        <motion.div
          variants={headingCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="min-h-80 bg-[#b34b0c] p-[50px] md:col-span-2"
        >
          <motion.h2
            variants={headingContentVariants}
            className="max-w-[700px] font-['Outfit'] text-4xl font-bold leading-[1.15] text-white sm:text-5xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={headingContentVariants}
            className="mt-8 max-w-[670px] font-['DM_Sans'] text-base leading-[1.4] text-white sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Content cards */}
        {cards.map(([title, items], index) => {
          /*
           * Plain serializable object created on the server.
           * No function is passed to a Motion component.
           */
          const cardVariants: Variants = {
            hidden: {
              opacity: 0,
              y: 28,
              scale: 0.985,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: (index % 2) * 0.08,
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
              className={`min-h-80 bg-[#171717] p-5 ${
                index > 1 ? "xl:row-start-2" : ""
              }`}
            >
              <motion.h3
                variants={cardTitleVariants}
                className="font-['Outfit'] text-xl font-semibold leading-[1.2] text-white"
              >
                {title}
              </motion.h3>

              {isParagraphVariant ? (
                <motion.div
                  variants={contentContainerVariants}
                  className="mt-8 space-y-4"
                >
                  {items.map((item, itemIndex) => (
                    <motion.p
                      key={`${item}-${itemIndex}`}
                      variants={paragraphVariants}
                      className="font-['DM_Sans'] text-sm leading-[1.4] text-white/85"
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              ) : (
                <motion.ul
                  variants={contentContainerVariants}
                  className="mt-8 space-y-3"
                >
                  {items.map((item, itemIndex) => (
                    <motion.li
                      key={`${item}-${itemIndex}`}
                      variants={listItemVariants}
                      className="flex items-start gap-3 font-['DM_Sans'] text-sm leading-[1.4] text-white/75"
                    >
                      <motion.span
                        variants={bulletVariants}
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                      />

                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.article>
          );
        })}

        {/* Image */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative min-h-80 overflow-hidden md:col-span-2 xl:col-start-3 xl:row-start-2"
        >
          <motion.div
            variants={imageVariants}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={overlayVariants}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b34b0c]/35 to-[#b34b0c]/15"
          />
        </motion.div>
      </div>
    </section>
  );
}