"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export type ServiceShowcaseItem = {
  title: string;
  description: string;
  squareImage: string;
  wideImage: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function ServicesShowcase({ services }: { services: ServiceShowcaseItem[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="bg-[#1a1a1a] px-4 py-[0.6875rem] text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex w-full max-w-[22.875rem] flex-col gap-[clamp(0.25rem,1.282vw,1.25rem)] lg:max-w-[97.5rem]">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={service.title}
              className={`grid aspect-[1560/350] gap-x-[1.282%] overflow-hidden ${
                reversed
                  ? "grid-cols-[51.795%_23.205%_22.436%]"
                  : "grid-cols-[22.436%_23.205%_51.795%]"
              }`}
            >
              <ServiceImage
                src={service.squareImage}
                alt={`${service.title} specialist`}
                className={reversed ? "order-3" : "order-1"}
                sizes="22.436vw"
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />

              <m.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.62,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.22),
                  ease: smoothEase,
                }}
                className="order-2 flex min-h-0 flex-col justify-center overflow-hidden bg-[#161616] bg-[radial-gradient(ellipse_at_center,#272727_0%,#161616_80%)] px-[clamp(0.5rem,3.205vw,3.125rem)] py-[clamp(0.25rem,2.5vw,2.4375rem)]"
              >
                <h2 className="font-['Outfit'] text-[clamp(0.275rem,1.41vw,1.375rem)] font-semibold leading-tight">
                  {service.title}
                </h2>
                <p className="mt-[clamp(0.2rem,1.282vw,1.25rem)] max-w-[16.5625rem] overflow-hidden font-['DM_Sans'] text-[clamp(0.2rem,1.026vw,1rem)] leading-[1.45] text-white/90">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-[clamp(0.2rem,1.538vw,1.5rem)] inline-flex h-[clamp(0.5rem,2.821vw,2.75rem)] w-fit items-center bg-[#b34b0c] px-[clamp(0.3rem,1.282vw,1.25rem)] font-['Outfit'] text-[clamp(0.2rem,1.154vw,1.125rem)] font-medium transition-colors hover:bg-[#d45c13]"
                >
                  Read More
                </Link>
              </m.div>

              <ServiceImage
                src={service.wideImage}
                alt={`${service.title} truck`}
                className={reversed ? "order-1" : "order-3"}
                sizes="51.795vw"
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            </article>
          );
        })}
        </div>
      </section>
    </LazyMotion>
  );
}

function ServiceImage({
  src,
  alt,
  className,
  sizes,
  index,
  shouldReduceMotion,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 42 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.04 + 0.06, 0.28),
        ease: smoothEase,
      }}
      className={`relative min-h-0 overflow-hidden bg-[#161616] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </m.div>
  );
}
