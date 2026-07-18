"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

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
  features: BrokerNetworkFeature[];
  className?: string;
};

export default function BrokerNetworkSection({
  heading,
  description,
  image,
  imageAlt,
  features,
  className = "",
}: BrokerNetworkSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`overflow-hidden mt-20 mb-20 bg-transparent px-5 text-white sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto grid w-full max-w-[97.5rem] lg:min-h-[27rem] lg:grid-cols-[minmax(0,47rem)_minmax(0,50.5rem)]">
        {/* Content */}
        <motion.div
          className="flex min-w-0 flex-col py-12 lg:py-[2.0625rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="w-full max-w-[43.9375rem] font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            {heading}
          </motion.h2>

          <motion.div
            className="mt-7 w-full max-w-[40.5625rem] font-outfit text-base font-medium leading-[1.35] text-white/90 sm:text-lg lg:mt-[2.75rem] lg:leading-[1.25]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.div>

          {features.length > 0 && (
            <div className="mt-8 grid w-full max-w-[40.5625rem] grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:mt-[1.9375rem] lg:grid-cols-[18.1875rem_minmax(0,1fr)]">
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  className="group/broker-feature grid min-w-0 grid-cols-[2.625rem_minmax(0,1fr)] items-start gap-[0.625rem]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="flex size-[2.625rem] shrink-0 items-center justify-center text-[#b34b0c] transition-transform duration-300 group-hover/broker-feature:rotate-6 group-hover/broker-feature:scale-110">
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
                  </span>

                  <div className="min-h-[3rem] min-w-0 pt-[0.625rem] font-dm-sans text-base font-normal leading-[1.35] text-white">
                    {feature.title}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>

        {/* Image */}
        <motion.div
          className="group/broker-image relative min-h-[20rem] overflow-hidden sm:min-h-[27rem] lg:h-[24rem] lg:min-h-0 lg:self-start"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-[10%] left-[-35%] z-20 w-[20%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 blur-[1px] transition-[left,opacity] duration-700 ease-out group-hover/broker-image:left-[112%] group-hover/broker-image:opacity-100"
          />
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={false}
            sizes="(min-width: 1024px) 50.5rem, 100vw"
            className="object-contain object-center lg:object-right-top"
          />
        </motion.div>
      </div>
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
