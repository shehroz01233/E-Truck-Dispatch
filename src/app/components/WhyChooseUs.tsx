import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import * as motion from "motion/react-client";

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
      <br />
      E Truck Dispatching
    </>
  ),
  description = "Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability.",
  image = "/Home/images/26_rectangle_1426.webp",
  imageAlt = "Truck dispatch warehouse",
  items = defaultItems,
}: WhyChooseUsProps) {
  return (
    <section className="overflow-hidden bg-zinc-900 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto w-full max-w-[1560px]">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cards Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <WhyChooseCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="font-['Outfit'] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {heading}
              </h2>

              {description ? (
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 font-['DM_Sans'] text-base leading-relaxed text-white/90 lg:text-lg"
                >
                  {description}
                </motion.p>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.015 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mt-8 aspect-video overflow-hidden rounded lg:mt-auto"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-700/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseCard({
  item,
  index,
}: {
  item: WhyChooseItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        item.accent
          ? { scale: 1.015 }
          : {
              y: -6,
              borderColor: "rgb(180 83 9)",
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`flex flex-col border border-neutral-700 px-5 py-6 transition-colors duration-300 ${
        item.accent
          ? "items-center justify-center bg-amber-700 text-center"
          : "bg-neutral-900 text-left hover:bg-amber-700"
      }`}
    >
      <h3 className="font-['Outfit'] text-xl font-semibold leading-tight text-white">
        {item.title}
      </h3>

      <p className="mt-4 font-['DM_Sans'] text-base leading-relaxed text-white/90">
        {item.description}
      </p>

      {item.buttonText && item.buttonHref ? (
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6"
        >
          <Link
            href={item.buttonHref}
            className="inline-flex h-11 w-40 items-center justify-center bg-neutral-900 font-['Outfit'] text-lg font-medium text-white transition-colors hover:bg-neutral-800"
          >
            {item.buttonText}
          </Link>
        </motion.div>
      ) : null}
    </motion.article>
  );
}