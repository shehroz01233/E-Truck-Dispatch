"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type TechnologyFeature = {
  title: string;
  description?: string;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
  icon?: ReactNode;
};

export type TechnologyFeatureGroup = {
  title?: ReactNode;
  features: TechnologyFeature[];
};

type TechnologyOperationsSectionProps = {
  heading: ReactNode;
  paragraphs?: ReactNode[];
  features?: TechnologyFeature[];
  featureGroups?: TechnologyFeatureGroup[];
  closingText?: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;

  layout?: "default" | "wide";
  imageSide?: "left" | "right";
  featureStyle?: "dot" | "icon";
  featureColumns?: 2 | 3;

  sectionClassName?: string;
  containerClassName?: string;
  imageWrapClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  headingClassName?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const revealEase = [0.22, 1, 0.36, 1] as const;

export default function TechnologyOperationsSection({
  heading,
  paragraphs = [],
  features = [],
  featureGroups,
  closingText,
  image,
  imageAlt,
  layout = "default",
  imageSide = "left",
  featureStyle = "dot",
  featureColumns = 2,
  sectionClassName,
  containerClassName,
  imageWrapClassName,
  imageClassName,
  contentClassName,
  headingClassName,
}: TechnologyOperationsSectionProps) {
  const groups =
    featureGroups && featureGroups.length > 0
      ? featureGroups
      : features.length > 0
        ? [{ features }]
        : [];

  const containerLayout =
    layout === "wide"
      ? "py-16 lg:min-h-[31.25rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(30rem,0.95fr)] lg:gap-16 lg:py-20 xl:gap-24"
      : "py-14 lg:min-h-[31.25rem] lg:grid-cols-[minmax(0,1.08fr)_minmax(27rem,0.92fr)] lg:gap-12 lg:py-16 xl:gap-20";

  const featureGrid =
    featureColumns === 3
      ? "sm:grid-cols-2 xl:grid-cols-3"
      : "sm:grid-cols-2";
  const shouldReduceMotion = useReducedMotion();
  const imageStartX = imageSide === "right" ? 80 : -80;
  const contentStartX = imageSide === "right" ? -54 : 54;

  return (
    <LazyMotion features={domAnimation} strict>
      <section className={cn("bg-[#1c1c1c] text-white", sectionClassName)}>
        <m.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={cn(
            "mx-auto grid w-[calc(100%-2.5rem)] max-w-[97.5rem] items-center gap-10 sm:w-[calc(100%-4rem)]",
            containerLayout,
            containerClassName,
          )}
        >
          <m.div
            variants={{
              hidden: { opacity: 0, x: imageStartX, filter: "blur(10px)" },
              show: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: revealEase },
              },
            }}
            className={cn(
              "group relative flex min-h-[18rem] items-center justify-center sm:min-h-[24rem] lg:min-h-[27rem]",
              imageSide === "right"
                ? "lg:order-2 lg:justify-end"
                : "lg:justify-start",
              imageWrapClassName,
            )}
          >
            <m.div
              aria-hidden="true"
              className="absolute inset-x-[8%] bottom-[8%] h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(179,75,12,0.18),transparent_68%)] blur-2xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.45, 0.9, 0.45],
                      scale: [0.96, 1.08, 0.96],
                    }
              }
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <m.span
              aria-hidden="true"
              className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 z-[1] h-px bg-gradient-to-r from-transparent via-[#c8510b]/80 to-transparent"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [-120, 105, -120], opacity: [0, 0.85, 0] }
              }
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-[12%] left-[-35%] z-20 w-[18%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-[1px] transition-[left,opacity] duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100"
            />

            <m.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[53.125rem]"
            >
              <Image
                src={image}
                alt={imageAlt}
                width={850}
                height={560}
                sizes="(min-width: 1024px) 52vw, 92vw"
                className={cn("h-auto w-full object-contain", imageClassName)}
              />
            </m.div>
          </m.div>

          <m.div
            variants={{
              hidden: { opacity: 0, x: contentStartX },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.78,
                  ease: revealEase,
                  delay: 0.12,
                  staggerChildren: 0.08,
                },
              },
            }}
            className={cn(
              "max-w-[42rem] lg:py-6",
              imageSide === "right" && "lg:order-1",
              contentClassName,
            )}
          >
          <m.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: revealEase } },
            }}
            className={cn(
              "font-outfit text-3xl font-bold leading-[1.12] sm:text-4xl xl:text-[2.75rem]",
              headingClassName,
            )}
          >
            {heading}
          </m.h2>

          {paragraphs.length > 0 ? (
            <m.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.62, ease: revealEase },
                },
              }}
              className="mt-6 space-y-4 font-dm-sans text-sm leading-6 text-white/90 sm:text-base"
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </m.div>
          ) : null}

          {groups.map((group, groupIndex) => (
            <m.div
              key={groupIndex}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.62,
                    ease: revealEase,
                    staggerChildren: 0.055,
                  },
                },
              }}
              className={groupIndex === 0 ? "mt-5" : "mt-7"}
            >
              {group.title ? (
                <p className="mb-4 font-dm-sans text-sm font-semibold leading-6 text-white sm:text-base">
                  {group.title}
                </p>
              ) : null}

              <ul className={cn("grid gap-x-8 gap-y-4", featureGrid)}>
                {group.features.map((feature) => (
                  <m.li
                    key={feature.title}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.45, ease: revealEase },
                      },
                    }}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className={cn(
                      "flex",
                      featureStyle === "icon"
                        ? "items-center gap-3"
                        : "items-start gap-3",
                    )}
                  >
                    {featureStyle === "icon" ? (
                      <m.span
                        aria-hidden="true"
                        whileHover={shouldReduceMotion ? undefined : { rotate: 8, scale: 1.08 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center"
                      >
                        {feature.iconSrc ? (
                          <Image
                            src={feature.iconSrc}
                            alt={feature.iconAlt ?? ""}
                            width={32}
                            height={32}
                            className="h-7 w-7 object-contain"
                          />
                        ) : (
                          <span className="text-[#b34b0c] [&_svg]:h-7 [&_svg]:w-7">
                            {feature.icon}
                          </span>
                        )}
                      </m.span>
                    ) : (
                      <m.span
                        aria-hidden="true"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.75 }}
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]"
                      />
                    )}

                    <p
                      className={cn(
                        "font-dm-sans leading-5 text-white/85",
                        featureStyle === "icon" ? "text-sm" : "text-sm",
                      )}
                    >
                      <strong className="font-medium text-white">
                        {feature.title}
                      </strong>
                      {feature.description ? ` ${feature.description}` : null}
                    </p>
                  </m.li>
                ))}
              </ul>
            </m.div>
          ))}

          {closingText ? (
            <m.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: revealEase } },
              }}
              className="mt-6 font-dm-sans text-sm leading-6 text-white/90 sm:text-base"
            >
              {closingText}
            </m.p>
          ) : null}
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
