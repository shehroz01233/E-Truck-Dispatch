import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export type BrokerNetworkFeature = {
  title: ReactNode;
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

export type BrokerNetworkSectionProps = {
  heading: ReactNode;
  description: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  features?: BrokerNetworkFeature[];

  /**
   * right:
   * Content on the left and image on the right.
   *
   * left:
   * Image on the left and content on the right.
   */
  imagePosition?: "left" | "right";

  /**
   * icon:
   * Displays the existing large feature icons.
   *
   * bullet:
   * Displays small orange bullet points.
   */
  featureVariant?: "icon" | "bullet";

  className?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewportOptions = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -70px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Section animation sequence
|--------------------------------------------------------------------------
*/

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
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

const descriptionVariants: Variants = {
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

/*
|--------------------------------------------------------------------------
| Feature animations
|--------------------------------------------------------------------------
*/

const featuresGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
    y: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
      delayChildren: 0.06,
      staggerChildren: 0.06,
    },
  },
};

const featureIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.55,
    rotate: -12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
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

const featureTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Image animations
|--------------------------------------------------------------------------
*/

const imageInnerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.08,
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

export default function BrokerNetworkSection({
  heading,
  description,
  image,
  imageAlt,
  features = [],
  imagePosition = "right",
  featureVariant = "icon",
  className = "",
}: BrokerNetworkSectionProps) {
  const isImageLeft = imagePosition === "left";
  const isBulletVariant = featureVariant === "bullet";

  /*
   * Plain serializable objects generated on the server.
   * No callback function is passed to Motion.
   */
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? 42 : -42,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: smoothEase,
        delayChildren: 0.12,
        staggerChildren: 0.11,
      },
    },
  };

  const imageFrameVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isImageLeft ? -50 : 50,
      clipPath: isImageLeft
        ? "inset(0 100% 0 0)"
        : "inset(0 0 0 100%)",
    },
    visible: {
      opacity: 1,
      x: 0,
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 0.85,
        ease: smoothEase,
        delayChildren: 0.06,
      },
    },
  };

  return (
    <section
      className={`mb-20 mt-20 overflow-hidden bg-transparent px-5 text-white sm:px-8 lg:px-12 ${className}`}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className={`mx-auto grid w-full max-w-[97.5rem] items-center ${
          isImageLeft
            ? "lg:min-h-[25.75rem] lg:grid-cols-[minmax(0,52.5rem)_minmax(0,45rem)] lg:gap-8"
            : "lg:min-h-[27rem] lg:grid-cols-[minmax(0,47rem)_minmax(0,50.5rem)]"
        }`}
      >
        {/* Content */}
        <motion.div
          variants={contentVariants}
          className={`flex min-w-0 flex-col py-12 ${
            isImageLeft
              ? "lg:order-2 lg:py-[3.25rem] lg:pl-4"
              : "lg:order-1 lg:py-[2.0625rem]"
          }`}
        >
          <motion.h2
            variants={headingVariants}
            className={`w-full font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl ${
              isImageLeft
                ? "max-w-[44rem]"
                : "max-w-[43.9375rem]"
            }`}
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={descriptionVariants}
            className={`w-full font-outfit text-base font-medium leading-[1.35] text-white/90 sm:text-lg lg:leading-[1.25] ${
              isImageLeft
                ? "mt-7 max-w-[42rem] lg:mt-[1.75rem]"
                : "mt-7 max-w-[40.5625rem] lg:mt-[2.75rem]"
            }`}
          >
            {description}
          </motion.div>

          {features.length > 0 ? (
            <motion.div
              variants={featuresGridVariants}
              className={
                isBulletVariant
                  ? "mt-8 grid w-full max-w-[43rem] grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:mt-[1.25rem] xl:grid-cols-3"
                  : "mt-8 grid w-full max-w-[40.5625rem] grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:mt-[1.9375rem] lg:grid-cols-[18.1875rem_minmax(0,1fr)]"
              }
            >
              {features.map((feature, index) =>
                isBulletVariant ? (
                  <motion.article
                    key={`${index}-${feature.iconAlt ?? "bullet-feature"}`}
                    variants={featureVariants}
                    className="grid min-w-0 grid-cols-[0.375rem_minmax(0,1fr)] items-start gap-3"
                  >
                    <motion.span
                      variants={bulletVariants}
                      aria-hidden="true"
                      className="mt-[0.45rem] size-[0.375rem] rounded-full bg-[#b34b0c]"
                    />

                    <motion.div
                      variants={featureTitleVariants}
                      className="min-w-0 font-dm-sans text-sm font-normal leading-[1.35] text-white"
                    >
                      {feature.title}
                    </motion.div>
                  </motion.article>
                ) : (
                  <motion.article
                    key={`${index}-${feature.iconAlt ?? "icon-feature"}`}
                    variants={featureVariants}
                    className="grid min-w-0 grid-cols-[2.625rem_minmax(0,1fr)] items-start gap-[0.625rem]"
                  >
                    <motion.span
                      variants={featureIconVariants}
                      className="flex size-[2.625rem] shrink-0 items-center justify-center text-[#b34b0c]"
                    >
                      {feature.icon ? (
                        feature.icon
                      ) : feature.iconSrc ? (
                        <Image
                          src={feature.iconSrc}
                          alt={feature.iconAlt ?? ""}
                          width={42}
                          height={42}
                          className="size-[2.625rem] object-contain"
                        />
                      ) : (
                        <NetworkFeatureIcon />
                      )}
                    </motion.span>

                    <motion.div
                      variants={featureTitleVariants}
                      className="min-w-0 pt-[0.625rem] font-dm-sans text-base font-normal leading-[1.35] text-white"
                    >
                      {feature.title}
                    </motion.div>
                  </motion.article>
                ),
              )}
            </motion.div>
          ) : null}
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageFrameVariants}
          className={`relative min-h-[20rem] overflow-hidden sm:min-h-[27rem] lg:min-h-0 ${
            isImageLeft
              ? "lg:order-1 lg:h-[25.75rem] lg:self-center"
              : "lg:order-2 lg:h-[24rem] lg:self-start"
          }`}
        >
          <motion.div
            variants={imageInnerVariants}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes={
                isImageLeft
                  ? "(min-width: 1024px) 52.5rem, 100vw"
                  : "(min-width: 1024px) 50.5rem, 100vw"
              }
              className={`object-contain object-center ${
                isImageLeft
                  ? "lg:object-left-center"
                  : "lg:object-right-top"
              }`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function NetworkFeatureIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 42 42"
      className="size-full fill-none stroke-current"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="21" cy="21" r="18" />
      <circle cx="21" cy="21" r="5" />

      <path d="M21 3v13M21 26v13M3 21h13M26 21h13" />

      <path d="m8.3 8.3 9.2 9.2M24.5 24.5l9.2 9.2M33.7 8.3l-9.2 9.2M17.5 24.5l-9.2 9.2" />
    </svg>
  );
}