
"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export type ComplianceCard = {
  title: string;
  intro?: string;
  items: string[];
  footer?: string;
};

type Props = {
  heading: string;
  description: string;
  cards: ComplianceCard[];
  image: string;
  imageAlt?: string;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-white/75">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b34b0c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComplianceCardBlock({
  card,
  index,
  shouldReduceMotion,
}: {
  card: ComplianceCard;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.07, 0.21),
        ease: smoothEase,
      }}
      className="group relative flex h-full min-h-80 flex-col overflow-hidden bg-[#171717] p-5"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b34b0c] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-[28%] skew-x-[-18deg] bg-white/5 opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100" />

      <h3 className="text-xl font-semibold">{card.title}</h3>

      {card.intro ? (
        <p className="mt-6 text-sm leading-6 text-white/75">{card.intro}</p>
      ) : null}

      <BulletList items={card.items} />

      {card.footer ? (
        <p className="mt-6 text-sm leading-6 text-white/75">
          {card.footer}
        </p>
      ) : null}
    </m.article>
  );
}

export default function ComplianceMatrixSection({
  heading,
  description,
  cards,
  image,
  imageAlt = "Real-time compliance monitoring",
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="py-16">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1560px] items-stretch gap-5 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-fr">
        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: smoothEase }}
          className="flex h-full min-h-80 flex-col justify-center bg-[#b34b0c] p-[50px] md:col-span-2"
        >
          <h2 className="max-w-[563px] text-4xl font-bold sm:text-5xl">
            {heading}
          </h2>

          <p className="mt-8 max-w-[578px] text-lg leading-7">
            {description}
          </p>
        </m.div>

        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`h-full min-h-80 ${
              index > 1 ? "xl:row-start-2" : ""
            }`}
          >
            <ComplianceCardBlock
              card={card}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        ))}

        <m.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.12, ease: smoothEase }}
          className="group relative h-full min-h-80 overflow-hidden md:col-span-2 xl:col-start-3 xl:row-start-2"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="767px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#b34b0c]/50 to-[#b34b0c]/20" />
          <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-[30%] skew-x-[-18deg] bg-white/10 opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100" />
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
