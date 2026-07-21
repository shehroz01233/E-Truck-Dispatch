import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type Benefit = {
  title: string;
  description?: string;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

type Props = {
  heading: ReactNode;
  description?: string;
  benefits: (string | Benefit)[];

  // Optional CTA button
  buttonLabel?: string;
  buttonHref?: string;
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
    y: 18,
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

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Benefit card children
|--------------------------------------------------------------------------
*/

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
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

const descriptionVariants: Variants = {
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

export default function BenefitsGridSection({
  heading,
  description,
  benefits,
  buttonLabel,
  buttonHref,
}: Props) {
  const showButton = Boolean(buttonLabel && buttonHref);

  return (
    <section className="py-12 text-white">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] gap-3 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
        {/* Heading card */}
        <motion.div
          variants={headingCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex min-h-96 flex-col justify-center overflow-hidden bg-[#b34b0c] p-7 xl:row-span-2 xl:p-8"
        >
          <motion.h2
            variants={headingContentVariants}
            className="text-[clamp(1.65rem,2vw,2rem)] font-bold leading-[1.18]"
          >
            {heading}
          </motion.h2>

          {description ? (
            <motion.p
              variants={headingContentVariants}
              className="mt-7 max-w-[18rem] text-[0.875rem] font-medium leading-5 text-white/90"
            >
              {description}
            </motion.p>
          ) : null}

          {showButton ? (
            <motion.div variants={buttonVariants} className="w-fit">
              <Link
                href={buttonHref!}
                className="mt-6 inline-flex w-fit items-center justify-center bg-[#171717] px-5 py-3 font-['DM_Sans'] text-sm font-medium leading-none text-white transition-colors hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                {buttonLabel}
              </Link>
            </motion.div>
          ) : null}
        </motion.div>

        {/* Benefit cards */}
        {benefits.map((benefit, index) => {
          const isString = typeof benefit === "string";

          const title = isString ? benefit : benefit.title;
          const benefitDescription = isString
            ? undefined
            : benefit.description;
          const icon = isString ? null : benefit.icon;
          const iconSrc = isString ? null : benefit.iconSrc;
          const iconAlt = isString ? "" : benefit.iconAlt || "";

          /*
           * The delay is calculated on the server.
           * Only a plain serializable object is passed to Motion.
           */
          const cardVariants: Variants = {
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
                delay: (index % 3) * 0.08,
                duration: 0.55,
                ease: smoothEase,
                delayChildren: 0.12,
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
              className="min-h-48 bg-[#171717] p-5"
            >
              <motion.span
                variants={iconVariants}
                className="flex h-14 w-14 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
              >
                {iconSrc ? (
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                  />
                ) : icon ? (
                  <span className="flex h-8 w-8 items-center justify-center [&_svg]:h-8 [&_svg]:w-8">
                    {icon}
                  </span>
                ) : (
                  <span className="text-2xl" aria-hidden="true">
                    ✓
                  </span>
                )}
              </motion.span>

              <motion.h3
                variants={titleVariants}
                className="mt-6 text-lg font-medium leading-snug"
              >
                {title}
              </motion.h3>

              {benefitDescription ? (
                <motion.p
                  variants={descriptionVariants}
                  className="mt-3 text-sm leading-6 text-white/70"
                >
                  {benefitDescription}
                </motion.p>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}