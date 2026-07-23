"use client";

import Image from "next/image";
import { useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "motion/react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSectionProps = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  faqs: FAQItem[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const faqListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

const faqItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
    y: 14,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0.4,
    scale: 1.08,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

export default function FAQSection({
  heading,
  description,
  image,
  imageAlt,
  faqs,
}: FAQSectionProps) {
  const sectionId = useId();

  const [activeIndex, setActiveIndex] = useState(
    faqs.length > 0 ? 0 : -1,
  );

  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-[1rem] py-[3rem] text-white min-[30rem]:px-[1.5rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:py-[5rem]">
      <div className="mx-auto grid w-full max-w-[97.5rem] gap-[2.5rem] min-[80rem]:grid-cols-[minmax(0,50rem)_minmax(0,44.375rem)] min-[80rem]:items-start min-[80rem]:gap-[3.125rem]">
        {/* FAQ accordion */}
        <motion.div
          variants={faqListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
            margin: "0px 0px -50px 0px",
          }}
          className="order-2 space-y-[0.875rem] min-[80rem]:order-1"
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const buttonId = `${sectionId}-button-${index}`;
            const answerId = `${sectionId}-answer-${index}`;

            return (
              <motion.div
                key={`${faq.question}-${index}`}
                layout
                variants={faqItemVariants}
                className="overflow-hidden"
              >
                <motion.button
                  id={buttonId}
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={answerId}
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === index ? -1 : index,
                    )
                  }
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{
                    duration: 0.2,
                    ease: smoothEase,
                  }}
                  className={`relative flex min-h-[3.5rem] w-full items-center justify-between gap-[1rem] overflow-hidden px-[1.25rem] py-[1rem] text-left font-outfit text-[0.9375rem] font-semibold leading-[1.25] text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cf5a13] focus-visible:ring-inset min-[30rem]:min-h-[3.75rem] min-[30rem]:px-[1.5rem] min-[30rem]:text-[1rem] min-[48rem]:text-[1.125rem] min-[64rem]:min-h-[4rem] min-[64rem]:px-[2rem] min-[80rem]:h-[4.25rem] min-[80rem]:px-[2.5rem] min-[80rem]:py-0 min-[80rem]:text-[1.375rem] min-[80rem]:leading-none ${
                    isActive ? "bg-[#b34b0c]" : "bg-[#161616]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1 origin-center bg-white/90 transition-transform duration-300 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <span className="relative z-10">
                    {faq.question}
                  </span>

                  <Chevron open={isActive} />
                </motion.button>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: smoothEase,
                        },
                        opacity: {
                          duration: 0.25,
                          ease: smoothEase,
                        },
                      }}
                      className="overflow-hidden bg-[#161616]"
                    >
                      <div className="flex min-h-[4rem] items-start px-[1.25rem] pb-[1.25rem] pt-[1rem] min-[30rem]:px-[1.5rem] min-[64rem]:px-[2rem] min-[80rem]:min-h-[5.125rem] min-[80rem]:px-[2.5rem]">
                        <p className="max-w-[44.25rem] font-dm-sans text-[0.8125rem] leading-[1.55] text-white/90 min-[30rem]:text-[0.875rem] min-[48rem]:text-[0.9375rem] min-[80rem]:text-[1rem] min-[80rem]:leading-[1.5]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Heading and image */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "0px 0px -60px 0px",
          }}
          className="order-1 flex min-h-0 w-full min-w-0 flex-col overflow-hidden min-[80rem]:order-2"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="max-w-[25.3125rem] font-outfit text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-white min-[30rem]:text-[2.25rem] min-[48rem]:text-[2.5rem] min-[80rem]:text-[3rem]"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-[1.5rem] max-w-[38.3125rem] font-dm-sans text-[0.875rem] leading-[1.55] text-white/85 min-[30rem]:text-[0.9375rem] min-[48rem]:text-[1rem] min-[80rem]:mt-[2.5rem] min-[80rem]:text-[1.125rem] min-[80rem]:leading-[1.5]"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="relative mt-[2rem] aspect-[710/304] w-full shrink-0 overflow-hidden bg-[#161616]"
          >
            <motion.div
              variants={imageVariants}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 90vw, 44.375rem"
                className="object-cover"
              />
            </motion.div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b34b0c]/20 to-[#b34b0c]/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      animate={{
        rotate: open ? 180 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: smoothEase,
      }}
      className="relative z-10 h-[1.25rem] w-[1.25rem] shrink-0 fill-none stroke-current stroke-2"
    >
      <path d="m4 7 6 6 6-6" />
    </motion.svg>
  );
}