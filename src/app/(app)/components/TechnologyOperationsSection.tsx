import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type TechnologyFeature = {
  title: string;
  description?: string;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
  icon?: ReactNode;
};

export type TechnologyFeatureGroup = {
  title?: ReactNode;
  features: TechnologyFeature[];
};

type TechnologyOperationsSectionProps = {
  heading: ReactNode;
  paragraphs?: ReactNode[];
  features?: TechnologyFeature[];
  featureGroups?: TechnologyFeatureGroup[];
  closingText?: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;

  layout?: "default" | "wide";
  imageSide?: "left" | "right";
  featureStyle?: "dot" | "icon";
  featureColumns?: 2 | 3;

  sectionClassName?: string;
  containerClassName?: string;
  imageWrapClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  headingClassName?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -60px 0px",
} as const;

const textVariants: Variants = {
  hidden: {
    y: 18,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const stackVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const groupVariants: Variants = {
  hidden: {
    y: 20,
    scale: 0.985,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    x: 20,
    y: 8,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
  hover: {
    x: 5,
    y: -2,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    scale: 0.58,
    rotate: -12,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
  hover: {
    scale: 1.12,
    rotate: 5,
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
};

const glowVariants: Variants = {
  hidden: {
    opacity: 0.25,
    scale: 0.72,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const imageInnerVariants: Variants = {
  hidden: {
    y: 24,
    scale: 1.08,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
  hover: {
    y: -5,
    scale: 1.025,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

const sweepVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-140%",
  },
  visible: {
    opacity: [0, 0.3, 0],
    x: ["-140%", "0%", "140%"],
    transition: {
      delay: 0.38,
      duration: 1.1,
      ease: smoothEase,
      times: [0, 0.5, 1],
    },
  },
};

export default function TechnologyOperationsSection({
  heading,
  paragraphs = [],
  features = [],
  featureGroups,
  closingText,
  image,
  imageAlt,
  layout = "default",
  imageSide = "left",
  featureStyle = "dot",
  featureColumns = 2,
  sectionClassName,
  containerClassName,
  imageWrapClassName,
  imageClassName,
  contentClassName,
  headingClassName,
}: TechnologyOperationsSectionProps) {
  const groups =
    featureGroups && featureGroups.length > 0
      ? featureGroups
      : features.length > 0
        ? [{ features }]
        : [];

  const containerLayout =
    layout === "wide"
      ? "py-16 lg:min-h-[31.25rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(30rem,0.95fr)] lg:gap-16 lg:py-20 xl:gap-24"
      : "py-14 lg:min-h-[31.25rem] lg:grid-cols-[minmax(0,1.08fr)_minmax(27rem,0.92fr)] lg:gap-12 lg:py-16 xl:gap-20";

  const featureGrid =
    featureColumns === 3
      ? "sm:grid-cols-2 xl:grid-cols-3"
      : "sm:grid-cols-2";

  const imageDirection = imageSide === "right" ? 48 : -48;
  const contentDirection = imageSide === "right" ? -42 : 42;

  const imagePanelVariants: Variants = {
    hidden: {
      x: imageDirection,
      y: 28,
      scale: 0.97,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: smoothEase,
        delayChildren: 0.08,
        staggerChildren: 0.1,
      },
    },
  };

  const contentPanelVariants: Variants = {
    hidden: {
      x: contentDirection,
      y: 22,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.72,
        ease: smoothEase,
        delayChildren: 0.1,
        staggerChildren: 0.11,
      },
    },
  };

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#1c1c1c] text-white",
        sectionClassName,
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-[calc(100%-2.5rem)] max-w-[97.5rem] items-center gap-10 sm:w-[calc(100%-4rem)]",
          containerLayout,
          containerClassName,
        )}
      >
        {/* Technology visual */}
        <motion.div
          variants={imagePanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className={cn(
            "relative flex min-h-[18rem] items-center justify-center sm:min-h-[24rem] lg:min-h-[27rem]",
            imageSide === "right"
              ? "lg:order-2 lg:justify-end"
              : "lg:justify-start",
            imageWrapClassName,
          )}
        >
          <motion.div
            variants={glowVariants}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] bottom-[8%] h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(179,75,12,0.18),transparent_68%)] blur-2xl"
          />

          <motion.div
            variants={imageInnerVariants}
            whileHover="hover"
            className="relative z-10 w-full max-w-[53.125rem]"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={850}
              height={560}
              sizes="(min-width: 1024px) 52vw, 92vw"
              className={cn(
                "h-auto w-full object-contain",
                imageClassName,
              )}
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <motion.span
              variants={sweepVariants}
              className="absolute inset-y-[10%] left-0 w-[18%] skew-x-[-16deg] bg-[#b34b0c]"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentPanelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className={cn(
            "max-w-[42rem] lg:py-6",
            imageSide === "right" && "lg:order-1",
            contentClassName,
          )}
        >
          <motion.h2
            variants={textVariants}
            className={cn(
              "font-outfit text-3xl font-bold leading-[1.12] sm:text-4xl xl:text-[2.75rem]",
              headingClassName,
            )}
          >
            {heading}
          </motion.h2>

          {paragraphs.length > 0 ? (
            <motion.div
              variants={stackVariants}
              className="mt-6 space-y-4 font-dm-sans text-sm leading-6 text-white/90 sm:text-base"
            >
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={textVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          ) : null}

          {groups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={groupVariants}
              className={groupIndex === 0 ? "mt-5" : "mt-7"}
            >
              {group.title ? (
                <motion.p
                  variants={textVariants}
                  className="mb-4 font-dm-sans text-sm font-semibold leading-6 text-white sm:text-base"
                >
                  {group.title}
                </motion.p>
              ) : null}

              <motion.ul
                variants={stackVariants}
                className={cn(
                  "grid gap-x-8 gap-y-4",
                  featureGrid,
                )}
              >
                {group.features.map((feature) => (
                  <motion.li
                    key={feature.title}
                    variants={featureVariants}
                    whileHover="hover"
                    className={cn(
                      "flex",
                      featureStyle === "icon"
                        ? "items-center gap-3"
                        : "items-start gap-3",
                    )}
                  >
                    {featureStyle === "icon" ? (
                      <motion.span
                        variants={iconVariants}
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center"
                      >
                        {feature.iconSrc ? (
                          <Image
                            src={feature.iconSrc}
                            alt={feature.iconAlt ?? ""}
                            width={36}
                            height={36}
                            className="h-8 w-8 object-contain opacity-90 brightness-105 contrast-110 saturate-125"
                          />
                        ) : (
                          <span className="text-[#b34b0c] opacity-90 brightness-105 contrast-110 saturate-125 [&_svg]:h-8 [&_svg]:w-8">
                            {feature.icon}
                          </span>
                        )}
                      </motion.span>
                    ) : (
                      <motion.span
                        variants={iconVariants}
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                      />
                    )}

                    <p className="font-dm-sans text-sm leading-5 text-white/85">
                      <strong className="font-medium text-white">
                        {feature.title}
                      </strong>

                      {feature.description
                        ? ` ${feature.description}`
                        : null}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}

          {closingText ? (
            <motion.p
              variants={textVariants}
              className="mt-6 font-dm-sans text-sm leading-6 text-white/90 sm:text-base"
            >
              {closingText}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}