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
    <section className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 lg:py-16 xl:px-[9.375vw]">
      <div className="mx-auto grid w-full max-w-[97.5rem] gap-10 xl:grid-cols-[minmax(0,47fr)_minmax(0,30fr)] xl:gap-[clamp(0.75rem,1.04vw,1.25rem)]">
        <div className="grid gap-[clamp(0.75rem,1.04vw,1.25rem)] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>

        <div className="flex min-w-0 flex-col">
          <h2 className="px-0 font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.5rem] xl:px-[clamp(1.5rem,2.08vw,2.5rem)] xl:text-[clamp(2.125rem,2.5vw,3rem)]">
            {heading}
          </h2>

          {description ? (
            <p className="mt-6 max-w-[32rem] font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/80 xl:ml-[clamp(1.5rem,2.08vw,2.5rem)] xl:mt-[clamp(1.75rem,2.08vw,2.5rem)] xl:text-[clamp(0.75rem,0.84vw,1rem)]">{description}</p>
          ) : null}

          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden sm:aspect-[600/262] xl:mt-auto">
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
      className={`min-h-[16.375rem] border border-[#3F3F3F] px-[clamp(0.875rem,1.04vw,1.25rem)] py-[clamp(1.125rem,1.56vw,1.875rem)] md:aspect-[300/262] md:min-h-0 ${
        item.accent ? "bg-[#B34B0C]" : "bg-[#161616]"
      }`}
    >
      <h3 className="font-['Outfit'] text-[1.125rem] font-semibold leading-[1.25] text-white xl:text-[clamp(1rem,1.15vw,1.375rem)]">
        {item.title}
      </h3>

      <p className="mt-[clamp(1.125rem,1.46vw,1.75rem)] font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/90 xl:text-[clamp(0.6875rem,0.84vw,1rem)]">
        {item.description}
      </p>

      {item.buttonText && item.buttonHref ? (
        <Link
          href={item.buttonHref}
          className="mt-[clamp(1.125rem,1.46vw,1.75rem)] inline-flex h-[clamp(2.125rem,2.3vw,2.75rem)] items-center justify-center bg-[#161616] px-5 font-['Outfit'] text-[0.9375rem] font-medium text-white xl:text-[clamp(0.8125rem,0.94vw,1.125rem)]"
        >
          {item.buttonText}
        </Link>
      ) : null}
    </article>
  );
}
