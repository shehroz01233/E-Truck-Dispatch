"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type EquipmentShowcaseSectionProps = {
  heading: string;
  names: string[];
  images: string[];
  descriptions: string[];
  imageHeights: number[];
  columns: number[][];
};

export default function EquipmentShowcaseSection({
  heading,
  names,
  images,
  descriptions,
  imageHeights,
  columns,
}: EquipmentShowcaseSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pb-16 pt-16">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1560px] sm:w-[calc(100%-64px)]">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[456px] text-center font-['Outfit'] text-[34px] font-bold leading-[1.08] text-white sm:text-5xl"
        >
          {heading}
        </motion.h2>
        <div className="mt-20 grid gap-x-[11px] gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.72,
                delay: shouldReduceMotion ? 0 : columnIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-[72px]"
            >
              {column.map((equipmentIndex) => {
                const name = names[equipmentIndex];
                const reverse = columnIndex % 2 === 1;
                const image = (
                  <motion.div
                    className="relative w-full"
                    style={{ height: imageHeights[equipmentIndex] }}
                    whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image
                      src={images[equipmentIndex]}
                      alt={`${name} dispatch`}
                      fill
                      sizes="(min-width: 1280px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                );
                const copy = (
                  <motion.div
                    className="flex min-h-[17rem] flex-col px-12 py-6"
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="min-h-[3rem] font-['Outfit'] text-xl font-semibold text-white">
                      {name} Dispatch
                    </h3>
                    <p className="mt-[26px] min-h-[6.25rem] font-['DM_Sans'] text-base leading-5 text-white/80">
                      {descriptions[equipmentIndex]}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-3 pt-7 font-['DM_Sans'] text-sm font-medium text-[#b34b0c]">
                      <span>Explore More</span>
                      <span className="h-0.5 w-20 origin-left bg-[#b34b0c] transition-transform duration-300 group/equipment-item:hover:scale-x-125" />
                    </div>
                  </motion.div>
                );
                return (
                  <motion.article
                    key={name}
                    className="group/equipment-item"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
