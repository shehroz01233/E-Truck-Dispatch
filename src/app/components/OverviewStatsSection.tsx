import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type OverviewStatsSectionProps = {
  heading: string;
  paragraphs: string[];
  stats: string[][];
  asideHeading: string;
  challenges: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Main overview section
|--------------------------------------------------------------------------
*/

const overviewSectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Heading
|--------------------------------------------------------------------------
*/

const headingVariants: Variants = {
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
    },
  },
};

/*
|--------------------------------------------------------------------------
| Paragraphs
|--------------------------------------------------------------------------
*/

const paragraphsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const paragraphVariants: Variants = {
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
| Statistics
|--------------------------------------------------------------------------
*/

const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Challenges card
|--------------------------------------------------------------------------
*/

const asideVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.12,
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.25,
      staggerChildren: 0.07,
    },
  },
};

const challengeItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 18,
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

/*
|--------------------------------------------------------------------------
| Gallery
|--------------------------------------------------------------------------
*/

const galleryContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const galleryItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const galleryImageVariants: Variants = {
  hidden: {
    scale: 1.08,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

export default function OverviewStatsSection({
  heading,
  paragraphs,
  stats,
  asideHeading,
  challenges,
  gallery,
}: OverviewStatsSectionProps) {
  return (
    <>
      <motion.section
        variants={overviewSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-14 py-20 sm:w-[calc(100%-64px)] xl:grid-cols-[1fr_548px]"
      >
        {/* Overview content */}
        <motion.div variants={overviewSectionVariants}>
          <motion.h2
            variants={headingVariants}
            className="text-4xl font-bold leading-tight sm:text-6xl"
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={paragraphsContainerVariants}
            className="mt-7 max-w-[738px] space-y-5 text-lg leading-7 text-white/65"
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={`${index}-${paragraph}`}
                variants={paragraphVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={statsContainerVariants}
            className="mt-10 grid max-w-[570px] grid-cols-3 gap-4 text-center"
          >
            {stats.map(([value, label], index) => (
              <motion.div
                key={`${label}-${index}`}
                variants={statVariants}
              >
                <p className="text-3xl font-bold text-[#b34b0c] sm:text-5xl">
                  {value}
                </p>

                <p className="mt-2 text-xs text-white/55 sm:text-sm">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Challenges card */}
        <motion.aside
          variants={asideVariants}
          className="self-center rounded-[10px] bg-[#171717] p-8"
        >
          <motion.h2
            variants={challengeItemVariants}
            className="text-2xl font-bold text-[#b34b0c]"
          >
            {asideHeading}
          </motion.h2>

          <motion.ul
            variants={overviewSectionVariants}
            className="mt-6 space-y-3"
          >
            {challenges.map((item, index) => (
              <motion.li
                key={`${item}-${index}`}
                variants={challengeItemVariants}
                className="flex gap-3 text-sm leading-6 text-white/75"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                />

                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </motion.section>

      {/* Gallery */}
      <motion.section
        variants={galleryContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
          margin: "0px 0px -60px 0px",
        }}
        className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-8 sm:w-[calc(100%-64px)] md:grid-cols-3"
      >
        {gallery.map(({ src, alt }, index) => (
          <motion.div
            key={`${src}-${index}`}
            variants={galleryItemVariants}
            className="relative h-72 overflow-hidden rounded-[10px]"
          >
            <motion.div
              variants={galleryImageVariants}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-l from-[#171717]/80 to-transparent" />
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}