"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

export type TrustDeliveryCard = {
  text: ReactNode;
  image: string;
  imageAlt?: string;
};

type TrustDeliverySectionProps = {
  heading: ReactNode;
  cards: TrustDeliveryCard[];
};

export default function TrustDeliverySection({
  heading,
  cards,
}: TrustDeliverySectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[97.5rem]">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[46rem] text-center font-['Outfit'] text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]"
        >
          {heading}
        </motion.h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="group/trust-card relative min-h-[22rem] overflow-hidden bg-[#171717]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.62,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt || "Dispatch support image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-[-45%] z-10 w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-[1px] transition-[left,opacity] duration-700 ease-out group-hover/trust-card:left-[120%] group-hover/trust-card:opacity-100"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7">
                <p className="min-h-[3.25rem] font-['Outfit'] text-[1rem] font-semibold leading-[1.3] text-white sm:text-[1.125rem]">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
