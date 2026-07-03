"use client";

import Image from "next/image";
import { useState } from "react";

type FAQ = { question: string; answer: string };
type FAQSectionProps = { heading?: string; description?: string; image?: string; imageAlt?: string; faqs?: FAQ[] };

const defaultFaqs: FAQ[] = [
  { question: "What is truck dispatching?", answer: "A service that manages load booking, rate negotiation, broker communication, and operational paperwork so carriers can focus on driving and revenue generation." },
  { question: "How do dispatch services improve earnings?", answer: "Dispatchers search better lanes, negotiate rates, reduce empty miles, and help carriers avoid weak-paying loads." },
  { question: "Do I have to accept every load presented?", answer: "No. You stay in control. Your dispatcher presents loads that match your rate, lane, and schedule preferences." },
  { question: "How fast do payments come through?", answer: "Payment speed depends on the broker, factoring setup, paperwork accuracy, and payment terms on the rate confirmation." },
  { question: "Is there a contract or upfront fee?", answer: "No upfront fee is required. Dispatch fees apply after broker payment is received." },
  { question: "How quickly can I get started?", answer: "Most carriers can start after onboarding, document review, carrier packet setup, and lane preference confirmation." },
];

export default function FAQSection({
  heading = "Frequently Asked Questions",
  description = "Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability.",
  image = "/Home/images/33_rectangle_1441.webp",
  imageAlt = "Dispatcher answering questions in warehouse",
  faqs = defaultFaqs,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#1C1C1C] px-4 py-14 text-white sm:px-8 xl:px-[9.375vw] xl:py-[clamp(56px,4.17vw,80px)]">
      <div className="mx-auto grid w-full max-w-[1560px] gap-10 xl:grid-cols-[minmax(0,800fr)_minmax(0,710fr)] xl:items-start xl:gap-[clamp(30px,2.6vw,50px)]">
        <div className="space-y-[clamp(14px,1.04vw,20px)]">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden">
                <button type="button" onClick={() => setActiveIndex(isActive ? -1 : index)} className={`flex h-[clamp(52px,3.54vw,68px)] w-full items-center justify-between px-[clamp(20px,2.08vw,40px)] text-left font-sans text-[clamp(14px,1.15vw,22px)] font-semibold text-white transition ${isActive ? "bg-[#B34B0C]" : "bg-[#161616]"}`}>
                  <span>{faq.question}</span>
                  <Chevron open={isActive} />
                </button>
                {isActive ? (
                  <div className="flex min-h-[clamp(64px,4.27vw,82px)] items-start bg-[#161616] px-[clamp(20px,2.08vw,40px)] pb-5 pt-4">
                    <p className="max-w-[708px] font-sans text-[clamp(11px,0.84vw,16px)] leading-[1.5] text-white/90">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="max-w-[405px] font-sans text-[clamp(34px,2.5vw,48px)] font-bold leading-[1.08] tracking-[-0.03em]">{heading}</h2>
          <p className="mt-[clamp(26px,2.08vw,40px)] max-w-[613px] font-sans text-[clamp(12px,0.94vw,18px)] leading-[1.5] text-white/85">{description}</p>
          <div className="relative mt-[clamp(32px,3.23vw,62px)] aspect-[710/332] w-full overflow-hidden">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1279px) 100vw, 37vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B34B0C]/20 to-[#B34B0C]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-5 w-5 shrink-0 fill-none stroke-current stroke-2 transition-transform ${open ? "rotate-180" : ""}`}><path d="m4 7 6 6 6-6" /></svg>;
}
