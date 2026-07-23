import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type Props = {
  heading: string;
  description?: string;
  groups: RevenueGroup[];
  image: string;
  backgroundImage: string;
};

export type RevenueGroup = {
  title: string;
  intro: string[];
  items?: string[];
  footer?: string;
};

const desktopCardLayout = [
  "h-[27.375rem] w-[18.75rem]",
  "mt-[1.8125rem] h-[25.625rem] w-[18.75rem]",
  "mt-[3.9375rem] h-[23.75rem] w-[18.75rem]",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -70px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Desktop scene
|--------------------------------------------------------------------------
*/

const desktopSceneVariants: Variants = {
  hidden: {},
  visible: {},
};

const decorativeBackgroundVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

const foregroundImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 85,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.18,
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const desktopContentVariants: Variants = {
  hidden: {},
  visible: {},
};

const headingBlockVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -38,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08,
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.14,
      staggerChildren: 0.11,
    },
  },
};

const headingItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const desktopCardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.14,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Card animations
|--------------------------------------------------------------------------
*/

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.16,
      staggerChildren: 0.09,
    },
  },
};

const cardTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
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

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
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
    scale: 0.4,
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

/*
|--------------------------------------------------------------------------
| Mobile scene
|--------------------------------------------------------------------------
*/

const mobileHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const mobileImageSceneVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
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

const mobileBackgroundVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.93,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

const mobileForegroundVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 55,
    y: 16,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.12,
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export default function RevenuePanelSection({
  heading,
  description,
  groups,
  image,
  backgroundImage,
}: Props) {
  return (
    <section className="mx-auto my-6 w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] text-white sm:w-[calc(100%-4rem)] md:relative md:h-[calc(var(--rp-height)*var(--rp))] md:[--rp:min(calc((100vw-4rem)/97.5rem),1)] md:[--rp-height:49rem]">
      {/* Desktop scaled layout */}
      <motion.div
        variants={desktopSceneVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="relative hidden h-[var(--rp-height)] w-[97.5rem] origin-top-left scale-[var(--rp)] md:block"
      >
        {/* Decorative background artwork */}
        <motion.div
          variants={decorativeBackgroundVariants}
          className="absolute left-[50.875rem] top-[3.75rem] z-[1] h-[33.6875rem] w-[46.652rem]"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="46.652rem"
            className="object-contain object-right-top"
            unoptimized
          />
        </motion.div>

        {/* Foreground visual */}
        <motion.div
          variants={foregroundImageVariants}
          className="absolute left-[61.875rem] top-[10.625rem] z-[2] h-[23.125rem] w-[46.75rem]"
        >
          <Image
            src={image}
            alt="Dispatch revenue planning"
            fill
            sizes="46.75rem"
            className="object-contain object-left-bottom"
          />
        </motion.div>

        {/* Desktop content */}
        <motion.div
          variants={desktopContentVariants}
          className="absolute left-[3.125rem] top-[3.125rem] z-[4] w-[58.75rem]"
        >
          <motion.div
            variants={headingBlockVariants}
            className="min-h-[7.75rem]"
          >
            <motion.h2
              variants={headingItemVariants}
              className="w-[56.4375rem] text-[3rem] font-bold leading-[1.02] tracking-[-0.02em]"
            >
              {heading}
            </motion.h2>

            {description ? (
              <motion.p
                variants={headingItemVariants}
                className="mt-[0.875rem] w-[49.0625rem] text-[1.125rem] leading-[1.55] text-white/85"
              >
                {description}
              </motion.p>
            ) : null}
          </motion.div>

          <motion.div
            variants={desktopCardsVariants}
            className="mt-[1.75rem] flex items-start gap-[1.25rem]"
          >
            {groups.map((group, index) => (
              <motion.article
                key={`${group.title}-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.22,
                    ease: smoothEase,
                  },
                }}
                className={`shrink-0 overflow-hidden border-[0.0625rem] border-neutral-700 bg-[#171717] px-[1.25rem] pb-[1.5rem] pt-[1.875rem] ${
                  desktopCardLayout[index] ?? ""
                }`}
              >
                <RevenueCardContent group={group} desktop />
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile stacked layout */}
      <div className="px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] md:hidden">
        <motion.div
          variants={mobileHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.h2
            variants={headingItemVariants}
            className="text-[2.125rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]"
          >
            {heading}
          </motion.h2>

          {description ? (
            <motion.p
              variants={headingItemVariants}
              className="mt-[1.75rem] max-w-[49rem] text-[1rem] leading-[1.55] text-white/85 sm:text-[1.125rem]"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>

        <div className="mt-[2.5rem] grid gap-[1.25rem]">
          {groups.map((group, index) => (
            <motion.article
              key={`${group.title}-${index}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
                margin: "0px 0px -55px 0px",
              }}
              className="border-[0.0625rem] border-neutral-700 bg-[#171717] p-[1.5rem]"
            >
              <RevenueCardContent group={group} />
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={mobileImageSceneVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
            margin: "0px 0px -50px 0px",
          }}
          className="relative mt-[2.5rem] h-[18rem] w-full"
        >
          <motion.div
            variants={mobileBackgroundVariants}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-contain object-right-bottom"
              unoptimized
            />
          </motion.div>

          <motion.div
            variants={mobileForegroundVariants}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt="Dispatch revenue planning"
              fill
              sizes="100vw"
              className="object-contain object-right-bottom"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RevenueCardContent({
  group,
  desktop = false,
}: {
  group: RevenueGroup;
  desktop?: boolean;
}) {
  return (
    <>
      <motion.h3
        variants={cardTitleVariants}
        className={
          desktop
            ? "text-[1.375rem] font-semibold leading-[1.15]"
            : "text-[1.25rem] font-semibold leading-[1.3]"
        }
      >
        {group.title}
      </motion.h3>

      <motion.div
        variants={introContainerVariants}
        className={
          desktop
            ? "mt-[1.25rem] space-y-[0.5rem] text-[1rem] leading-[1.25] text-white/80"
            : "mt-[1.25rem] space-y-[0.5rem] text-[0.875rem] leading-[1.45] text-white/80"
        }
      >
        {group.intro.map((paragraph, index) => (
          <motion.p
            key={`${paragraph}-${index}`}
            variants={paragraphVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {group.items?.length ? (
        <motion.ul
          variants={listVariants}
          className={
            desktop
              ? "mt-[0.875rem] space-y-[0.625rem]"
              : "mt-[1rem] space-y-[0.75rem]"
          }
        >
          {group.items.map((item, index) => (
            <motion.li
              key={`${item}-${index}`}
              variants={listItemVariants}
              className={
                desktop
                  ? "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.3] text-white/80"
                  : "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80"
              }
            >
              <motion.span
                variants={bulletVariants}
                aria-hidden="true"
                className="mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]"
              />

              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}

      {group.footer ? (
        <motion.p
          variants={footerVariants}
          className={
            desktop
              ? "mt-[1.25rem] text-[1rem] leading-[1.25] text-white/80"
              : "mt-[1rem] text-[0.875rem] leading-[1.45] text-white/80"
          }
        >
          {group.footer}
        </motion.p>
      ) : null}
    </>
  );
}