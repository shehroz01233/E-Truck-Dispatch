"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: boolean;
};

export type OurServicesProps = {
  heading: ReactNode;
  description?: string;
  services: Service[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function OurServices({
  heading,
  description,
  services,
}: OurServicesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="overflow-x-hidden bg-[#1c1c1c] px-[1rem] py-[3rem] text-white min-[30rem]:px-[1.5rem] min-[30rem]:py-[4rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:py-[5rem]">
        <div className="mx-auto w-full max-w-[97.5rem]">
          <m.header
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: smoothEase,
            }}
            className="mx-auto text-center"
          >
            <h2 className="break-words font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] [overflow-wrap:anywhere] min-[48rem]:text-[2.5rem] min-[80rem]:text-[3rem]">
              {heading}
            </h2>

            {description ? (
              <p className="mx-auto mt-[1.25rem] max-w-[55rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/90 [overflow-wrap:anywhere] min-[80rem]:mt-[2rem] min-[80rem]:text-[1.125rem]">
                {description}
              </p>
            ) : null}
          </m.header>

          <div className="mt-[2.5rem] grid items-stretch overflow-hidden min-[48rem]:grid-cols-2 min-[80rem]:mt-[4.9375rem] min-[80rem]:grid-cols-4 min-[80rem]:[grid-auto-rows:minmax(22.5625rem,auto)]">
            {services.map((service, index) => (
              <ServicePair
                key={`${service.title}-${index}`}
                service={service}
                index={index}
                reduceMotion={Boolean(shouldReduceMotion)}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function ServicePair({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  const imageOrder =
    [
      "order-1 min-[80rem]:order-1",
      "order-1 min-[80rem]:order-3",
      "order-2 min-[80rem]:order-6",
      "order-2 min-[80rem]:order-8",
    ][index] || "order-1";

  const textOrder =
    [
      "order-2 min-[80rem]:order-2",
      "order-2 min-[80rem]:order-4",
      "order-1 min-[80rem]:order-5",
      "order-1 min-[80rem]:order-7",
    ][index] || "order-2";

  const imageDelay = reduceMotion ? 0 : index * 0.06;
  const contentDelay = reduceMotion ? 0 : index * 0.06 + 0.06;

  return (
    <div className="grid h-full grid-rows-[minmax(21rem,1fr)_minmax(21rem,1fr)] min-[80rem]:contents">
      {/* Image enters from the right — no hover effect */}
      <m.div
        initial={
          reduceMotion
            ? { opacity: 1 }
            : {
                opacity: 0,
                x: 48,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          delay: imageDelay,
          ease: smoothEase,
        }}
        className={`relative h-full min-h-[21rem] min-w-0 overflow-hidden min-[80rem]:min-h-[22.5625rem] ${imageOrder}`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 24.375rem"
          className="object-cover"
        />
      </m.div>

      {/* Text enters from the left */}
      <m.div
        initial={
          reduceMotion
            ? { opacity: 1 }
            : {
                opacity: 0,
                x: -48,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          delay: contentDelay,
          ease: smoothEase,
        }}
        className={`h-full min-h-[21rem] min-w-0 min-[80rem]:min-h-[22.5625rem] ${textOrder}`}
      >
        <article className="relative flex h-full min-h-[21rem] flex-col items-center justify-center overflow-hidden bg-[#161616] px-[1.5rem] py-[2rem] text-center transition-colors duration-300 ease-out hover:bg-[#b34b0c] min-[30rem]:px-[2rem] min-[48rem]:px-[2.5rem] min-[80rem]:min-h-[22.5625rem] min-[80rem]:px-[2.25rem] min-[96rem]:px-[3rem]">
          <h3 className="max-w-[13rem] break-words font-['Outfit'] text-[1.125rem] font-semibold leading-[1.25] text-white [overflow-wrap:anywhere] min-[96rem]:text-[1.375rem]">
            {service.title}
          </h3>

          <p className="mt-[0.75rem] max-w-[14rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white [overflow-wrap:anywhere] min-[96rem]:text-[1rem]">
            {service.description}
          </p>
        </article>
      </m.div>
    </div>
  );
}
