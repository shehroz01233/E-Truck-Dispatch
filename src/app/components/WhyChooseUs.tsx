import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type WhyChooseItem = {
  title: string;
  description: string;
  accent?: boolean;
  buttonText?: string;
  buttonHref?: string;
};

type WhyChooseUsProps = {
  heading?: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  items?: WhyChooseItem[];
};

const defaultItems: WhyChooseItem[] = [
  {
    title: "Broker Credit Screening Before Load Acceptance",
    description:
      "Every broker is evaluated on payment history, credit score, and factoring approval status before any rate confirmation is issued. Slow-paying and high-risk accounts are excluded at the sourcing stage.",
  },
  {
    title: "Rate Negotiation Using Market Intelligence",
    description:
      "Rates are countered based on lane demand, equipment availability, broker behavior patterns, and capacity imbalance — not accepted at first offer.",
  },
  {
    title: "Post-Payment Fee Structure",
    description:
      "Dispatch fees apply only after broker payment is received. No upfront costs, no monthly commitments. Performance stays tied directly to your cash flow.",
  },
  {
    title: "Selected States Coverage",
    description:
      "Explore dispatch services in selected high-demand states with strong lanes, load availability, and region-specific support.",
    accent: true,
    buttonText: "View All States",
    buttonHref: "/states",
  },
  {
    title: "Pre-Load and Post-Load Risk Management",
    description:
      "Before booking: broker validation, rate qualification, and load verification. After delivery: documentation accuracy, detention claims, TONU recovery, and payment follow-up.",
  },
  {
    title: "Dedicated Dispatcher with Operational Continuity",
    description:
      "A single dispatcher manages your account long-term, retaining lane performance data and broker interaction history to refine future load decisions.",
  },
];

export default function WhyChooseUs({
  heading = (
    <>
      Why Choose us
      <br />E Truck Dispatching
    </>
  ),
  description = "Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability.",
  image = "/Home/images/26_rectangle_1426.webp",
  imageAlt = "Truck dispatch warehouse",
  items = defaultItems,
}: WhyChooseUsProps) {
  return (
    <section className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-[70rem] gap-10 xl:grid-cols-[minmax(0,42.5rem)_minmax(0,25rem)] xl:gap-10">
        <div className="grid auto-rows-[minmax(7rem,auto)] items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 xl:auto-rows-[minmax(7.5rem,auto)]">
          {items.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>

        <div className="flex min-w-0 flex-col">
          <h2 className="break-words px-0 font-['Outfit'] text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-white [overflow-wrap:anywhere] sm:text-[2.125rem]">
            {heading}
          </h2>

          {description ? (
            <p className="mt-6 max-w-[25rem] break-words font-['DM_Sans'] text-[0.75rem] leading-[1.45] text-white/80 [overflow-wrap:anywhere]">{description}</p>
          ) : null}

          <div className="relative mt-8 aspect-[370/112] w-full overflow-hidden xl:mt-auto">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 79.9375rem) 100vw, 37.5rem"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#B34B0C]/10 to-[#B34B0C]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseCard({ item }: { item: WhyChooseItem }) {
  return (
    <article
      className={`flex h-full min-h-[7rem] min-w-0 flex-col border border-[#3F3F3F] px-4 py-4 transition-colors duration-300 ease-out focus-within:bg-[#B34B0C] xl:min-h-[7.5rem] ${
        item.accent
          ? "items-center justify-center bg-[#B34B0C] text-center"
          : "bg-[#161616] text-left hover:bg-[#B34B0C]"
      }`}
    >
      <div className={`flex min-w-0 flex-1 flex-col ${item.accent ? "items-center justify-center" : "items-start justify-start"}`}>
        <h3 className="max-w-full break-words font-['Outfit'] text-[0.8125rem] font-semibold leading-[1.2] text-white [overflow-wrap:anywhere]">
          {item.title}
        </h3>

        <p className="mt-3 max-w-full break-words font-['DM_Sans'] text-[0.625rem] leading-[1.35] text-white/90 [overflow-wrap:anywhere]">
          {item.description}
        </p>

        {item.buttonText && item.buttonHref ? (
          <Link
            href={item.buttonHref}
            className="mt-4 inline-flex min-h-[1.875rem] w-fit max-w-full items-center justify-center bg-[#161616] px-5 font-['Outfit'] text-[0.6875rem] font-medium text-white"
          >
            {item.buttonText}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
