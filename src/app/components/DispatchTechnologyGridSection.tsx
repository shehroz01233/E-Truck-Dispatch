"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export type DispatchTechnologyCard = {
  title: string;
  description?: string;
  bullets?: string[];
  icon?: ReactNode;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
};

type DispatchTechnologyGridSectionProps = {
  heading: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  cards: DispatchTechnologyCard[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function DispatchTechnologyGridSection({
  heading,
  image,
  imageAlt,
  cards,
}: DispatchTechnologyGridSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const positions = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-3 lg:row-start-1",
    "lg:col-start-1 lg:row-start-2",
    "lg:col-start-3 lg:row-start-2",
  ];

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="bg-[#1c1c1c] px-5 py-12 text-white sm:px-8 lg:py-[3.125rem]">
      <div className="mx-auto grid max-w-[97.5rem] gap-5 md:grid-cols-2 lg:grid-cols-[minmax(0,23.08fr)_minmax(0,48.72fr)_minmax(0,23.08fr)] lg:grid-rows-[minmax(20rem,auto)_minmax(20rem,auto)] lg:gap-x-5 lg:gap-y-[3.4375rem]">
        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: smoothEase }}
          className="group relative min-h-[36rem] overflow-hidden bg-[#161616] md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0"
        >
          <m.div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_52%_56%,rgba(179,75,12,0.22),transparent_56%)]"
            animate={shouldReduceMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <m.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: smoothEase }}
            className="relative z-10 max-w-[42rem] px-7 pt-8 font-outfit text-3xl font-bold leading-[1.12] sm:px-12 sm:pt-12 sm:text-4xl lg:text-[2.75rem]"
          >
            {heading}
          </m.h2>

          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.78, delay: shouldReduceMotion ? 0 : 0.16, ease: smoothEase }}
            className="absolute inset-x-4 bottom-5 top-[9.5rem] sm:inset-x-8 sm:bottom-8 sm:top-[10.5rem]"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1280px) 48rem, 92vw"
              className="object-contain object-center"
            />
          </m.div>
          <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-[22%] skew-x-[-18deg] bg-white/10 opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100" />
        </m.div>

        {cards.map((card, index) => (
          <m.article
            key={card.title}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 18 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -7 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : Math.min(index * 0.07, 0.21),
              ease: smoothEase,
            }}
            className={`min-h-[20rem] bg-[#161616] p-5 sm:p-6 lg:min-h-[20rem] ${
              positions[index] ?? ""
            }`}
          >
            <m.span
              whileHover={shouldReduceMotion ? undefined : { rotate: 8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex h-16 w-16 items-center justify-center bg-[#b34b0c]/20 text-[#b34b0c]"
            >
              {card.icon ? (
                card.icon
              ) : card.iconSrc ? (
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt ?? ""}
                  width={42}
                  height={42}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <TechnologyIcon />
              )}
            </m.span>

            <h3 className="mt-5 max-w-[18rem] font-outfit text-xl font-semibold leading-tight">
              {card.title}
            </h3>

            {card.bullets?.length ? (
              <ul className="mt-3 space-y-2 font-dm-sans text-sm leading-[1.3] text-white/85">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : card.description ? (
              <p className="mt-4 font-dm-sans text-sm leading-[1.45] text-white/85">
                {card.description}
              </p>
            ) : null}
          </m.article>
        ))}
      </div>
    </section>
    </LazyMotion>
  );
}

function TechnologyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-10 w-10 fill-none stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="16" r="5" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" />
    </svg>
  );
}
