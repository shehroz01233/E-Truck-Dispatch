"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function FAQSection({
  heading,
  description,
  image,
  imageAlt,
  faqs,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-[#1c1c1c] px-[1rem] py-[3rem] text-white min-[30rem]:px-[1.5rem] min-[48rem]:px-[2rem] min-[64rem]:px-[3rem] min-[80rem]:py-[5rem]">
      <div className="mx-auto grid w-full max-w-[97.5rem] gap-[2.5rem] min-[80rem]:grid-cols-[minmax(0,50rem)_minmax(0,44.375rem)] min-[80rem]:items-start min-[80rem]:gap-[3.125rem]">
        <div className="order-2 space-y-[0.875rem] min-[80rem]:order-1">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={faq.question} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`flex min-h-[3.5rem] w-full items-center justify-between gap-[1rem] px-[1.25rem] py-[1rem] text-left font-outfit text-[0.9375rem] font-semibold leading-[1.25] text-white transition-colors min-[30rem]:min-h-[3.75rem] min-[30rem]:px-[1.5rem] min-[30rem]:text-[1rem] min-[48rem]:text-[1.125rem] min-[64rem]:min-h-[4rem] min-[64rem]:px-[2rem] min-[80rem]:h-[4.25rem] min-[80rem]:px-[2.5rem] min-[80rem]:py-0 min-[80rem]:text-[1.375rem] min-[80rem]:leading-none ${
                    isActive ? "bg-[#b34b0c]" : "bg-[#161616]"
                  }`}
                >
                  <span>{faq.question}</span>
                  <Chevron open={isActive} />
                </button>

                {isActive && (
                  <div className="flex min-h-[4rem] items-start bg-[#161616] px-[1.25rem] pb-[1.25rem] pt-[1rem] min-[30rem]:px-[1.5rem] min-[64rem]:px-[2rem] min-[80rem]:min-h-[5.125rem] min-[80rem]:px-[2.5rem]">
                    <p className="max-w-[44.25rem] font-dm-sans text-[0.8125rem] leading-[1.55] text-white/90 min-[30rem]:text-[0.875rem] min-[48rem]:text-[0.9375rem] min-[80rem]:text-[1rem] min-[80rem]:leading-[1.5]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="order-1 flex min-h-0 w-full min-w-0 flex-col overflow-hidden min-[80rem]:order-2">
          <div className="shrink-0">
            <h2 className="max-w-[25.3125rem] font-outfit text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-white min-[30rem]:text-[2.25rem] min-[48rem]:text-[2.5rem] min-[80rem]:text-[3rem]">
              {heading}
            </h2>

            <p className="mt-[1.5rem] max-w-[38.3125rem] font-dm-sans text-[0.875rem] leading-[1.55] text-white/85 min-[30rem]:text-[0.9375rem] min-[48rem]:text-[1rem] min-[80rem]:mt-[2.5rem] min-[80rem]:text-[1.125rem] min-[80rem]:leading-[1.5]">
              {description}
            </p>
          </div>

          <div className="relative mt-[2rem] aspect-[710/304] w-full shrink-0 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 90vw, 44.375rem"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/20 to-[#b34b0c]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-[1.25rem] w-[1.25rem] shrink-0 fill-none stroke-current stroke-2 transition-transform ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m4 7 6 6 6-6" />
    </svg>
  );
}
