import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type BulletContent = {
  intro?: string;
  bullets: string[];
};

type ProcessStep = [
  title: string,
  content: string | string[] | BulletContent,
];

type ProcessGridSectionProps = {
  heading: string;
  steps: ProcessStep[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -60px 0px",
} as const;

const headingCardVariants: Variants = {
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
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.14,
    },
  },
};

const headingVariants: Variants = {
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

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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

const bulletListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const bulletVariants: Variants = {
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

export default function ProcessGridSection({
  heading,
  steps,
}: ProcessGridSectionProps) {
  return (
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1560px] pb-16 pt-28 sm:w-[calc(100%-64px)]">
      <div className="grid gap-x-5 gap-y-[17px] md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          variants={headingCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex min-h-64 items-start bg-[#b34b0c] px-[30px] py-8"
        >
          <motion.h2
            variants={headingVariants}
            className="max-w-[461px] font-['Outfit'] text-3xl font-bold leading-[1.2] text-white sm:text-4xl xl:text-[2.5rem]"
          >
            {heading}
          </motion.h2>
        </motion.div>

        {steps.map(([title, content], index) => {
          const isSimpleBulletList = Array.isArray(content);

          const isBulletObject =
            typeof content === "object" &&
            content !== null &&
            !Array.isArray(content);

          const bullets = isSimpleBulletList
            ? content
            : isBulletObject
              ? content.bullets
              : [];

          /*
           * Plain serializable object.
           * No function-based variant is passed to Motion.
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
                delay: Math.min(index * 0.05, 0.25),
                duration: 0.6,
                ease: smoothEase,
                delayChildren: 0.12,
                staggerChildren: 0.1,
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
              className="min-h-64 bg-[#171717] px-[30px] py-8"
            >
              <motion.h3
                variants={cardTitleVariants}
                className="font-['Outfit'] text-xl font-semibold leading-tight text-white"
              >
                {title}
              </motion.h3>

              {typeof content === "string" ? (
                <motion.p
                  variants={contentVariants}
                  className="mt-5 font-['DM_Sans'] text-base leading-6 text-white"
                >
                  {content}
                </motion.p>
              ) : (
                <>
                  {isBulletObject && content.intro ? (
                    <motion.p
                      variants={contentVariants}
                      className="mt-5 font-['DM_Sans'] text-base leading-6 text-white"
                    >
                      {content.intro}
                    </motion.p>
                  ) : null}

                  <motion.ul
                    variants={bulletListVariants}
                    className={`space-y-[9px] font-['DM_Sans'] text-sm leading-[1.25] text-white ${
                      isBulletObject && content.intro
                        ? "mt-[17px]"
                        : "mt-5"
                    }`}
                  >
                    {bullets.map((item, bulletIndex) => (
                      <motion.li
                        key={`${item}-${bulletIndex}`}
                        variants={bulletVariants}
                        className="flex items-start gap-2"
                      >
                        <motion.span
                          variants={bulletDotVariants}
                          aria-hidden="true"
                          className="mt-[6px] size-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                        />

                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}