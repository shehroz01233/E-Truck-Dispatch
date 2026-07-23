import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type ComplianceDocumentItem = {
  label: string;
  icon: string;
  iconAlt?: string;
};

type Props = {
  heading: string;
  description?: string;
  items: ComplianceDocumentItem[];
  image: string;
  imageAlt?: string;
  className?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -55px 0px",
} as const;

const sectionVariants: Variants = {
  hidden: {
    opacity: 0.3,
    y: 24,
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

const imagePanelVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: -48,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.82,
      ease: smoothEase,
      delayChildren: 0.12,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    x: -16,
    y: 18,
    scale: 1.08,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.035,
    transition: {
      duration: 0.38,
      ease: smoothEase,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0.3,
    x: 46,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0.3,
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

const documentsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.085,
    },
  },
};

const documentVariants: Variants = {
  hidden: {
    opacity: 0.25,
    x: 22,
    y: 10,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.46,
      ease: smoothEase,
      delayChildren: 0.05,
    },
  },
  hover: {
    x: 6,
    y: -2,
    scale: 1.015,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0.3,
    scale: 0.52,
    rotate: -12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 17,
    },
  },
  hover: {
    scale: 1.12,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

export default function ComplianceDocumentsSection({
  heading,
  description,
  items,
  image,
  imageAlt = "Trucking compliance and regulatory documents",
  className = "",
}: Props) {
  const splitIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, splitIndex);
  const rightItems = items.slice(splitIndex);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={`mx-auto my-12 w-[calc(100%-2rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] text-white sm:w-[calc(100%-3rem)] md:relative md:h-[calc(27rem*var(--cds))] md:w-[calc(100%-4rem)] md:[--cds:min(calc((100vw-4rem)/97.5rem),1)] ${className}`}
    >
      {/* Tablet and desktop layout */}
      <div className="relative hidden h-[27rem] w-[97.5rem] origin-top-left scale-[var(--cds)] md:block">
        {/* Left image */}
        <motion.div
          variants={imagePanelVariants}
          className="group absolute left-0 top-0 h-full w-[50.5rem] overflow-hidden"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="50.5rem"
              className="object-cover"
            />
          </motion.div>

          {/* Permanent image tone */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#b34b0c]/10"
          />

          {/* Document verification scan */}
          <motion.span
            aria-hidden="true"
            initial={{
              opacity: 0,
              x: "-150%",
            }}
            whileInView={{
              opacity: [0, 0.32, 0],
              x: ["-150%", "0%", "150%"],
            }}
            viewport={viewportOptions}
            transition={{
              delay: 0.32,
              duration: 1.15,
              ease: smoothEase,
              times: [0, 0.5, 1],
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[18%] skew-x-[-16deg] bg-[#b34b0c]"
          />

          {/* Bottom verification line */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{
              delay: 0.3,
              duration: 0.75,
              ease: smoothEase,
            }}
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#b34b0c]"
          />
        </motion.div>

        {/* Right content */}
        <motion.div
          variants={contentVariants}
          className="absolute left-[53.5625rem] top-[1.25rem] h-[25.75rem] w-[43.9375rem]"
        >
          <motion.h2
            variants={contentItemVariants}
            className="absolute left-0 top-0 w-[43.9375rem] text-[3rem] font-bold leading-[1.02] tracking-[-0.02em]"
          >
            {heading}
          </motion.h2>

          {description ? (
            <motion.p
              variants={contentItemVariants}
              className="absolute left-0 top-[9.375rem] w-[40.5625rem] text-[1.125rem] font-medium leading-[1.45] text-white/90"
            >
              {description}
            </motion.p>
          ) : null}

          <motion.div
            variants={documentsVariants}
            className="absolute left-0 top-[14.125rem] grid w-full grid-cols-[20.1875rem_1fr]"
          >
            <DocumentColumn items={leftItems} desktop />
            <DocumentColumn items={rightItems} desktop />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <motion.div
          variants={imagePanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="group relative aspect-[808/384] w-full overflow-hidden"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#b34b0c]/10"
          />

          <motion.span
            aria-hidden="true"
            initial={{
              opacity: 0,
              x: "-150%",
            }}
            whileInView={{
              opacity: [0, 0.3, 0],
              x: ["-150%", "0%", "150%"],
            }}
            viewport={viewportOptions}
            transition={{
              delay: 0.28,
              duration: 1,
              ease: smoothEase,
              times: [0, 0.5, 1],
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[22%] skew-x-[-16deg] bg-[#b34b0c]"
          />

          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{
              delay: 0.28,
              duration: 0.7,
              ease: smoothEase,
            }}
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#b34b0c]"
          />
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="px-[1.5rem] pb-[2.75rem] pt-[2rem] sm:px-[2rem] sm:pb-[3rem] sm:pt-[2.5rem]"
        >
          <motion.h2
            variants={contentItemVariants}
            className="max-w-[43rem] text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[2.5rem]"
          >
            {heading}
          </motion.h2>

          {description ? (
            <motion.p
              variants={contentItemVariants}
              className="mt-[1.25rem] max-w-[40rem] text-[0.9375rem] font-medium leading-[1.55] text-white/85 sm:text-[1rem]"
            >
              {description}
            </motion.p>
          ) : null}

          <motion.div
            variants={documentsVariants}
            className="mt-[2rem] grid gap-[1.25rem] sm:grid-cols-2 sm:gap-x-[2rem]"
          >
            {items.map((item) => (
              <DocumentItem key={item.label} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function DocumentColumn({
  items,
  desktop = false,
}: {
  items: ComplianceDocumentItem[];
  desktop?: boolean;
}) {
  return (
    <motion.div
      variants={documentsVariants}
      className={desktop ? "space-y-[1.25rem]" : "space-y-[1rem]"}
    >
      {items.map((item) => (
        <DocumentItem
          key={item.label}
          item={item}
          desktop={desktop}
        />
      ))}
    </motion.div>
  );
}

function DocumentItem({
  item,
  desktop = false,
}: {
  item: ComplianceDocumentItem;
  desktop?: boolean;
}) {
  return (
    <motion.div
      variants={documentVariants}
      whileHover="hover"
      className={
        desktop
          ? "group flex h-[2.625rem] items-center gap-[0.625rem]"
          : "group flex min-w-0 items-center gap-[0.75rem]"
      }
    >
      <motion.div
        variants={iconVariants}
        className="relative size-[2.625rem] shrink-0"
      >
        <Image
          src={item.icon}
          alt={item.iconAlt ?? ""}
          fill
          sizes="2.625rem"
          className="object-contain"
        />
      </motion.div>

      <span
        className={
          desktop
            ? "text-[1rem] font-normal leading-[1.3] text-white transition-colors duration-200 group-hover:text-[#d76522]"
            : "text-[0.9375rem] font-normal leading-[1.4] text-white/90 transition-colors duration-200 group-hover:text-white"
        }
      >
        {item.label}
      </span>
    </motion.div>
  );
}