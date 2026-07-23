import Image from "next/image";
import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

type EquipmentShowcaseSectionProps = {
  heading: string;
  names: string[];
  images: string[];
  descriptions: string[];
  imageHeights: number[];
  columns: number[][];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
      delayChildren: 0.12,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left",
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export default function EquipmentShowcaseSection({
  heading,
  names,
  images,
  descriptions,
  imageHeights,
  columns,
}: EquipmentShowcaseSectionProps) {
  return (
    <section className="pb-16 pt-16">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.6,
            margin: "0px 0px -60px 0px",
          }}
          className="mx-auto max-w-[456px] text-center font-['Outfit'] text-[34px] font-bold leading-[1.08] text-white sm:text-5xl"
        >
          {heading}
        </motion.h2>

        <div className="mt-20 grid gap-x-[11px] gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-[72px]">
              {column.map((equipmentIndex) => {
                const name = names[equipmentIndex];
                const imageSrc = images[equipmentIndex];
                const description = descriptions[equipmentIndex];
                const imageHeight = imageHeights[equipmentIndex];
                const reverse = columnIndex % 2 === 1;

                /*
                 * Plain object is created on the server.
                 * No function is passed to the Motion Client Component.
                 */
                const articleVariants: Variants = {
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: columnIndex * 0.08,
                      duration: 0.65,
                      ease: smoothEase,
                      delayChildren: 0.08,
                      staggerChildren: 0.12,
                    },
                  },
                };

                const image = (
                  <motion.div
                    variants={imageVariants}
                    className="relative w-full"
                    style={{
                      height: imageHeight,
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${name} dispatch`}
                      fill
                      sizes="(min-width: 1280px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                );

                const copy = (
                  <motion.div
                    variants={copyVariants}
                    className="px-12 py-6"
                  >
                    <h3 className="font-['Outfit'] text-xl font-semibold text-white">
                      {name} Dispatch
                    </h3>

                    <p className="mt-[26px] font-['DM_Sans'] text-base leading-5 text-white/80">
                      {description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-3 font-['DM_Sans'] text-sm font-medium text-[#b34b0c]">
                      <span>Explore More</span>

                      <motion.span
                        variants={lineVariants}
                        aria-hidden="true"
                        className="h-0.5 w-20 bg-[#b34b0c]"
                      />
                    </div>
                  </motion.div>
                );

                return (
                  <motion.article
                    key={`${name}-${equipmentIndex}`}
                    variants={articleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                      margin: "0px 0px -60px 0px",
                    }}
                  >
                    {reverse ? (
                      <>
                        {copy}
                        {image}
                      </>
                    ) : (
                      <>
                        {image}
                        {copy}
                      </>
                    )}
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}