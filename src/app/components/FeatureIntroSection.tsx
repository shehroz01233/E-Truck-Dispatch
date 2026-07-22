import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type FeatureItem =
  | string
  | {
      text: ReactNode;
      icon?: ReactNode;
      iconSrc?: string;
      iconAlt?: string;
    };

type Props = {
  heading: ReactNode;
  description?: ReactNode | ReactNode[];
  features?: FeatureItem[];
  image: string;
  imageAlt: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -55px 0px",
} as const;

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease,
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.55,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.38,
      ease,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 4,
    transition: {
      duration: 0.2,
      ease,
    },
  },
};

export default function FeatureIntroSection({
  heading,
  description,
  features = [],
  image,
  imageAlt,
}: Props) {
  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];
  const usesBulletFeatures = features.every(
    (feature) => typeof feature === "string",
  );

  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1560px] overflow-hidden py-12 sm:w-[calc(100%-48px)] sm:py-16 lg:w-[calc(100%-64px)] lg:py-20">
      <div className="grid gap-10 lg:min-h-[462px] lg:grid-cols-[minmax(0,703px)_minmax(380px,719px)] lg:justify-between lg:gap-8 xl:gap-12">
        {/* Text content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="min-w-0 lg:self-start lg:pt-[46px]"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="max-w-[667px] font-['Outfit'] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {heading}
          </motion.h2>

          {descriptions.length > 0 ? (
            <motion.div
              variants={listVariants}
              className="mt-6 max-w-[649px] space-y-2 font-['DM_Sans'] text-base font-normal capitalize leading-6 text-white sm:text-lg lg:mt-[30px]"
            >
              {descriptions.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUpVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          ) : null}

          {features.length > 0 ? (
            <motion.ul
              variants={listVariants}
              className={usesBulletFeatures ? "mt-[17px] space-y-1" : "mt-7 space-y-4"}
            >
              {features.map((feature, index) => {
                const isString = typeof feature === "string";
                const text = isString ? feature : feature.text;
                const icon = isString ? null : feature.icon;
                const iconSrc = isString ? "" : feature.iconSrc || "";
                const iconAlt = isString ? "" : feature.iconAlt || "";

                return (
                  <motion.li
                    key={index}
                    variants={featureVariants}
                    whileHover="hover"
                    className={`flex items-start font-['DM_Sans'] text-sm font-normal text-white ${
                      isString ? "gap-[10px] leading-6" : "gap-3 leading-5 sm:text-base sm:leading-6"
                    }`}
                  >
                    <motion.span
                      variants={iconVariants}
                      className={`flex shrink-0 items-center justify-center text-[#b34b0c] ${
                        isString ? "h-6 w-1.5" : "mt-[0.1rem] h-7 w-7"
                      }`}
                    >
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={iconAlt}
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                      ) : icon ? (
                        <span className="[&_svg]:h-7 [&_svg]:w-7">
                          {icon}
                        </span>
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b34b0c]" />
                      )}
                    </motion.span>

                    <span>{text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          ) : null}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{
            x: 44,
            y: 24,
            scale: 0.96,
          }}
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
          }}
          whileHover={{
            y: -5,
            scale: 1.01,
          }}
          viewport={viewport}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="relative mx-auto aspect-[719/462] w-full max-w-[719px] overflow-hidden bg-[#171717] lg:mx-0 lg:self-start lg:justify-self-end"
        >
          <motion.div
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.035,
            }}
            viewport={viewport}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 719px, (min-width: 1024px) 45vw, calc(100vw - 32px)"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}