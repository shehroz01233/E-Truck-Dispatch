"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type Props = {
  heading: string;
  description?: string;
  groups: RevenueGroup[];
  image: string;
  backgroundImage: string;
};

export type RevenueGroup = {
  title: string;
  intro: string[];
  items?: string[];
  footer?: string;
};

const desktopCardLayout = [
  "h-[27.375rem] w-[18.75rem]",
  "mt-[1.8125rem] h-[25.625rem] w-[18.75rem]",
  "mt-[3.9375rem] h-[23.75rem] w-[18.75rem]",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function RevenuePanelSection({
  heading,
  description,
  groups,
  image,
  backgroundImage,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="mx-auto w-[calc(100%-2.5rem)] max-w-[97.5rem] overflow-hidden bg-[#171717] my-6 text-white sm:w-[calc(100%-4rem)] md:relative md:h-[calc(44.5rem*var(--rp))] md:[--rp:min(calc((100vw-4rem)/97.5rem),1)]">
      {/* laptop / desktop scaled layout */}
      <div className="relative hidden h-[44.5rem] w-[97.5rem] origin-top-left scale-[var(--rp)] md:block">
        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: smoothEase }}
          className="absolute left-[50.875rem] top-[3.75rem] z-[1] h-[33.6875rem] w-[46.652rem]"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="46.652rem"
            className="object-contain object-right-top"
            unoptimized
          />
        </m.div>

        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 95 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: shouldReduceMotion ? 0 : 0.12, ease: smoothEase }}
          className="absolute left-[61.875rem] top-[10.625rem] z-[2] h-[23.125rem] w-[46.75rem]"
        >
          <Image
            src={image}
            alt="Dispatch revenue planning"
            fill
            sizes="46.75rem"
            className="object-contain object-left-bottom"
          />
        </m.div>

        {/* Desktop content */}
        <div className="absolute left-[3.125rem] top-[3.125rem] z-[4] w-[58.75rem]">
          <div className="min-h-[7.75rem]">
            <m.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: smoothEase }}
              className="w-[56.4375rem] text-[3rem] font-bold leading-[1.02] tracking-[-0.02em]"
            >
              {heading}
            </m.h2>

            {description ? (
              <m.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: smoothEase }}
                className="mt-[0.875rem] w-[49.0625rem] text-[1.125rem] leading-[1.55] text-white/85"
              >
                {description}
              </m.p>
            ) : null}
          </div>

          <div className="mt-[1.75rem] flex items-start gap-[1.25rem]">
            {groups.map((group, index) => (
              <m.article
                key={group.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -34, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, borderColor: "#b34b0c" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.62,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.09, 0.2),
                  ease: smoothEase,
                }}
                className={`shrink-0 overflow-hidden border-[0.0625rem] border-neutral-700 bg-[#171717] px-[1.25rem] pb-[1.5rem] pt-[1.875rem] ${
                  desktopCardLayout[index] ?? ""
                }`}
              >
                <RevenueCardContent group={group} desktop />
              </m.article>
            ))}
          </div>
        </div>
      </div>

      {/* mobile stacked layout */}
      <div className="px-[1.75rem] py-[2.5rem] sm:px-[3rem] sm:py-[3rem] md:hidden">
        <m.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: smoothEase }}
          className="text-[2.125rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]"
        >
          {heading}
        </m.h2>

        {description ? (
          <m.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.08, ease: smoothEase }}
            className="mt-[1.75rem] max-w-[49rem] text-[1rem] leading-[1.55] text-white/85 sm:text-[1.125rem]"
          >
            {description}
          </m.p>
        ) : null}

        <div className="mt-[2.5rem] grid gap-[1.25rem]">
          {groups.map((group, index) => (
            <m.article
              key={group.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -5, borderColor: "#b34b0c" }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : Math.min(index * 0.07, 0.18),
                ease: smoothEase,
              }}
              className="border-[0.0625rem] border-neutral-700 bg-[#171717] p-[1.5rem]"
            >
              <RevenueCardContent group={group} />
            </m.article>
          ))}
        </div>

        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.72, ease: smoothEase }}
          className="relative mt-[2.5rem] h-[18rem] w-full"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-contain object-right-bottom"
            unoptimized
          />

          <Image
            src={image}
            alt="Dispatch revenue planning"
            fill
            sizes="100vw"
            className="object-contain object-right-bottom"
          />
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}

function RevenueCardContent({
  group,
  desktop = false,
}: {
  group: RevenueGroup;
  desktop?: boolean;
}) {
  return (
    <>
      <h3
        className={
          desktop
            ? "text-[1.375rem] font-semibold leading-[1.15]"
            : "text-[1.25rem] font-semibold leading-[1.3]"
        }
      >
        {group.title}
      </h3>

      <div
        className={
          desktop
            ? "mt-[1.25rem] space-y-[0.5rem] text-[1rem] leading-[1.25] text-white/80"
            : "mt-[1.25rem] space-y-[0.5rem] text-[0.875rem] leading-[1.45] text-white/80"
        }
      >
        {group.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {group.items?.length ? (
        <ul
          className={
            desktop
              ? "mt-[0.875rem] space-y-[0.625rem]"
              : "mt-[1rem] space-y-[0.75rem]"
          }
        >
          {group.items.map((item) => (
            <li
              key={item}
              className={
                desktop
                  ? "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.3] text-white/80"
                  : "flex items-start gap-[0.75rem] text-[0.875rem] leading-[1.45] text-white/80"
              }
            >
              <span className="mt-[0.45rem] h-[0.375rem] w-[0.375rem] shrink-0 rounded-full bg-[#b34b0c]" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {group.footer ? (
        <p
          className={
            desktop
              ? "mt-[1.25rem] text-[1rem] leading-[1.25] text-white/80"
              : "mt-[1rem] text-[0.875rem] leading-[1.45] text-white/80"
          }
        >
          {group.footer}
        </p>
      ) : null}
    </>
  );
}
