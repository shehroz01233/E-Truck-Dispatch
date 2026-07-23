"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

export type TestimonialCard = {
  name: string;
  content: ReactNode;
  avatar: string | StaticImageData;
  avatarAlt?: string;
};

export type RatingImage = {
  image: string | StaticImageData;
  imageAlt?: string;
  width: number;
  height: number;
};

export type ReviewBadge = {
  variant: "google" | "trustpilot" | "plain";

  logo: string | StaticImageData;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;

  label?: ReactNode;
  ratingImages?: RatingImage[];

  ratingStrip?: string | StaticImageData;
  ratingStripAlt?: string;
  ratingStripWidth?: number;
  ratingStripHeight?: number;
};

type MutualTestimonialsSectionProps = {
  heading: ReactNode;
  rating?: number;
  reviewText: ReactNode;
  testimonials: TestimonialCard[];
  starImages?: RatingImage[];
  reviewBadges?: ReviewBadge[];
};

type QueueItem = {
  id: number;
  testimonial: TestimonialCard;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

const summaryVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const summaryItemVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const starsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const starVariants: Variants = {
  hidden: {
    opacity: 0.2,
    y: 12,
    scale: 0.5,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 17,
    },
  },
  hover: {
    y: -3,
    scale: 1.15,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

const mobileCardVariants: Variants = {
  hidden: {
    opacity: 0.25,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: smoothEase,
    },
  },
};

/**
 * Five visible U-shaped positions:
 *
 * 0 = left top
 * 1 = left lower
 * 2 = center bottom
 * 3 = right lower
 * 4 = right top
 */
const desktopSlots = [
  { left: "9%", top: "0rem" },
  { left: "29.5%", top: "5rem" },
  { left: "50%", top: "10rem" },
  { left: "70.5%", top: "5rem" },
  { left: "91%", top: "0rem" },
];

const enterPosition = {
  left: "112%",
  top: "0rem",
  opacity: 0,
  scale: 0.96,
};

const exitPosition = {
  left: "-12%",
  top: "0rem",
  opacity: 0,
  scale: 0.96,
};

function createQueue(testimonials: TestimonialCard[]): QueueItem[] {
  return testimonials.map((testimonial, index) => ({
    id: index,
    testimonial,
  }));
}

export default function MutualTestimonialsSection({
  heading,
  rating = 4.9,
  reviewText,
  testimonials,
  starImages = [],
  reviewBadges = [],
}: MutualTestimonialsSectionProps) {
  const [queue, setQueue] = useState<QueueItem[]>(() =>
    createQueue(testimonials),
  );

  const nextId = useRef(testimonials.length);

  useEffect(() => {
    setQueue(createQueue(testimonials));
    nextId.current = testimonials.length;
  }, [testimonials]);

  useEffect(() => {
    if (queue.length <= 1) return;

    const timer = window.setInterval(() => {
      setQueue((currentQueue) => {
        if (currentQueue.length <= 1) return currentQueue;

        const [firstItem, ...remainingItems] = currentQueue;

        const recycledItem: QueueItem = {
          id: nextId.current,
          testimonial: firstItem.testimonial,
        };

        nextId.current += 1;

        return [...remainingItems, recycledItem];
      });
    }, 2800);

    return () => window.clearInterval(timer);
  }, [queue.length]);

  const visibleCards = queue.slice(0, 5);

  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-5 py-12 text-white sm:px-8 lg:px-12 xl:pb-[10rem]">
      <div className="mx-auto max-w-[97.5rem]">
        {/* Review summary */}
        <motion.div
          variants={summaryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-30 flex min-h-[14.1875rem] flex-col items-center text-center"
        >
          <motion.h2
            variants={summaryItemVariants}
            className="font-outfit text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl"
          >
            {heading}
          </motion.h2>

          {starImages.length > 0 ? (
            <motion.div
              variants={starsVariants}
              className="mt-8 flex items-center justify-center gap-[0.3125rem]"
              aria-label={`${rating} out of 5 stars`}
            >
              {starImages.map((star, index) => (
                <motion.span
                  key={`${star.imageAlt ?? "rating-star"}-${index}`}
                  variants={starVariants}
                  whileHover="hover"
                  className="shrink-0"
                >
                  <Image
                    src={star.image}
                    alt={star.imageAlt ?? ""}
                    width={star.width}
                    height={star.height}
                    className="object-contain"
                  />
                </motion.span>
              ))}
            </motion.div>
          ) : null}

          <motion.div
            variants={summaryItemVariants}
            className="mt-4 font-dm-sans text-base leading-normal text-white sm:text-lg"
          >
            {reviewText}
          </motion.div>

          {reviewBadges.length > 0 ? (
            <motion.div
              variants={summaryItemVariants}
              className="mt-5 grid w-full max-w-[17.1875rem] grid-cols-2 items-start gap-[3.4375rem]"
            >
              {reviewBadges.map((badge, index) => (
                <motion.div
                  key={`${badge.logoAlt}-${index}`}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: smoothEase,
                  }}
                >
                  <ReviewPlatform badge={badge} />
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </motion.div>

        {/* Mobile and tablet */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              variants={mobileCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                delay: index * 0.08,
              }}
            >
              <TestimonialContent testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Desktop slot carousel */}
        {visibleCards.length > 0 ? (
          <div className="relative -mt-[6.25rem] hidden h-[31rem] overflow-hidden xl:block">
            {/* Left exit fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/90 to-transparent"
            />

            {/* Right entry fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#1c1c1c] via-[#1c1c1c]/90 to-transparent"
            />

            <AnimatePresence initial={false}>
              {visibleCards.map((item, slotIndex) => {
                const slot =
                  desktopSlots[
                    Math.min(slotIndex, desktopSlots.length - 1)
                  ];

                return (
                  <motion.div
                    key={item.id}
                    initial={enterPosition}
                    animate={{
                      left: slot.left,
                      top: slot.top,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={exitPosition}
                    transition={{
                      duration: 1.05,
                      ease: smoothEase,
                    }}
                    style={{
                      willChange: "left, top, opacity, transform",
                    }}
                    className="absolute z-10 w-[14rem] -translate-x-1/2 2xl:w-[16.5rem] min-[110rem]:w-[18rem]"
                  >
                    <TestimonialContent
                      testimonial={item.testimonial}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function TestimonialContent({
  testimonial,
}: {
  testimonial: TestimonialCard;
}) {
  return (
    <motion.article
      whileHover={{
        y: -7,
        scale: 1.02,
        borderColor: "rgba(179, 75, 12, 0.85)",
        boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35)",
      }}
      transition={{
        duration: 0.24,
        ease: smoothEase,
      }}
      className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900 p-5"
    >
      <div className="relative z-10 font-dm-sans text-base font-normal leading-[1.5] text-white">
        {testimonial.content}
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-3">
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 4,
          }}
          transition={{
            duration: 0.2,
            ease: smoothEase,
          }}
          className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10"
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.avatarAlt ?? testimonial.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </motion.div>

        <h3 className="font-outfit text-xl font-medium capitalize leading-tight text-white">
          {testimonial.name}
        </h3>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#b34b0c] transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

type ReviewPlatformProps = {
  badge: ReviewBadge;
};

function ReviewPlatform({ badge }: ReviewPlatformProps) {
  if (badge.variant === "google") {
    return (
      <div className="flex items-start justify-self-center">
        <Image
          src={badge.logo}
          alt={badge.logoAlt}
          width={badge.logoWidth}
          height={badge.logoHeight}
          className="shrink-0 object-contain"
        />

        <div className="ml-0 pt-2">
          {badge.ratingImages && badge.ratingImages.length > 0 ? (
            <div className="flex items-center">
              {badge.ratingImages.map((star, index) => (
                <Image
                  key={`${star.imageAlt ?? "google-star"}-${index}`}
                  src={star.image}
                  alt={star.imageAlt ?? ""}
                  width={star.width}
                  height={star.height}
                  className="shrink-0 object-contain"
                />
              ))}
            </div>
          ) : null}

          {badge.label ? (
            <div className="mt-1 whitespace-nowrap font-dm-sans text-[0.625rem] font-bold leading-none text-white">
              {badge.label}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (badge.variant === "trustpilot") {
    return (
      <div className="relative h-11 w-[6.875rem] shrink-0 justify-self-center">
        <Image
          src={badge.logo}
          alt={badge.logoAlt}
          width={badge.logoWidth}
          height={badge.logoHeight}
          className="absolute left-0 top-0 h-[2.1875rem] w-[6.875rem] object-contain"
        />

        {badge.ratingStrip ? (
          <Image
            src={badge.ratingStrip}
            alt={badge.ratingStripAlt ?? ""}
            width={badge.ratingStripWidth ?? 77}
            height={badge.ratingStripHeight ?? 24}
            className="absolute right-0 top-5 h-6 w-[4.8125rem] object-contain"
          />
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={badge.logo}
      alt={badge.logoAlt}
      width={badge.logoWidth}
      height={badge.logoHeight}
      className="shrink-0 object-contain"
    />
  );
}