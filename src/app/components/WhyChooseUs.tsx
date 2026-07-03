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
      <div className="mx-auto grid w-full max-w-[1560px] gap-10 xl:grid-cols-[minmax(0,47fr)_minmax(0,30fr)] xl:gap-[clamp(12px,1.04vw,20px)]">
        <div className="grid gap-[clamp(12px,1.04vw,20px)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>

        <div className="flex min-w-0 flex-col">
          <h2 className="px-0 font-['Outfit'] text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px] xl:px-[clamp(24px,2.08vw,40px)] xl:text-[clamp(34px,2.5vw,48px)]">
            {heading}
          </h2>

          {description ? (
            <p className="mt-6 max-w-[512px] font-['DM_Sans'] text-[14px] leading-[1.45] text-white/80 xl:ml-[clamp(24px,2.08vw,40px)] xl:mt-[clamp(28px,2.08vw,40px)] xl:text-[clamp(12px,0.84vw,16px)]">{description}</p>
          ) : null}

          <div className="relative mt-8 aspect-[600/262] w-full overflow-hidden xl:mt-auto">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1279px) 100vw, 600px"
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
      className={`aspect-[300/262] border border-[#3F3F3F] px-[clamp(14px,1.04vw,20px)] py-[clamp(18px,1.56vw,30px)] ${
        item.accent ? "bg-[#B34B0C]" : "bg-[#161616]"
      }`}
    >
      <h3 className="font-['Outfit'] text-[18px] font-semibold leading-[1.25] text-white xl:text-[clamp(16px,1.15vw,22px)]">
        {item.title}
      </h3>

      <p className="mt-[clamp(18px,1.46vw,28px)] font-['DM_Sans'] text-[14px] leading-[1.45] text-white/90 xl:text-[clamp(11px,0.84vw,16px)]">
        {item.description}
      </p>

      {item.buttonText && item.buttonHref ? (
        <Link
          href={item.buttonHref}
          className="mt-[clamp(18px,1.46vw,28px)] inline-flex h-[clamp(34px,2.3vw,44px)] items-center justify-center bg-[#161616] px-5 font-['Outfit'] text-[15px] font-medium text-white xl:text-[clamp(13px,0.94vw,18px)]"
        >
          {item.buttonText}
        </Link>
      ) : null}
    </article>
  );
}
