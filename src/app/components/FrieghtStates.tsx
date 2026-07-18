"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type StateItem = {
  name: string;
  image: string;
  imageAlt: string;
};

type StatesCoverageProps = {
  heading?: string;
  description?: string;
  states?: StateItem[];
};

const defaultStates: StateItem[] = [
  {
    name: "Ohio",
    image: "/Home/images/15_ohio.webp",
    imageAlt: "Ohio flag",
  },
  {
    name: "Indiana",
    image: "/Home/images/16_indiana.webp",
    imageAlt: "Indiana flag",
  },
  {
    name: "Texas",
    image: "/Home/images/17_texas.webp",
    imageAlt: "Texas flag",
  },
  {
    name: "Florida",
    image: "/Home/images/18_florida.webp",
    imageAlt: "Florida flag",
  },
  {
    name: "New York",
    image: "/Home/images/19_new_york.webp",
    imageAlt: "New York flag",
  },
  {
    name: "California",
    image: "/Home/images/20_california.webp",
    imageAlt: "California flag",
  },
  {
    name: "Kentucky",
    image: "/Home/images/21_kentucky.webp",
    imageAlt: "Kentucky flag",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function StatesCoverage({
  heading = "Truck Dispatch Services Across Key Freight States",
  description = "Our coverage spans major shipping corridors, manufacturing hubs, and distribution centers where load density and broker networks support consistent freight availability.",
  states = defaultStates,
}: StatesCoverageProps) {
  const shouldReduceMotion = useReducedMotion();
  const contentInitial = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -32 };

  return (
    <section className="bg-[#1C1C1C] px-4 py-12 text-white sm:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-[97.5rem] grid-cols-1 gap-[0.9375rem] sm:grid-cols-2 xl:grid-cols-5">
        <motion.div
          className="flex min-h-[17.375rem] flex-col justify-start sm:col-span-2 xl:col-span-2"
          initial={contentInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: smoothEase }}
        >
          <h2 className="max-w-[35.125rem] break-words font-['Outfit'] text-[2.125rem] font-bold leading-[1.12] tracking-[-0.02em] text-white [overflow-wrap:anywhere] sm:text-[2.5rem] xl:text-[3rem]">
            {heading}
          </h2>

          <p className="mt-5 max-w-[32rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.45] text-white/85 [overflow-wrap:anywhere] xl:text-[1.125rem]">
            {description}
          </p>
        </motion.div>

        {states.slice(0, 3).map((state, index) => (
          <StateCard key={state.name} state={state} index={index} />
        ))}

        {states.slice(3, 7).map((state, index) => (
          <StateCard key={state.name} state={state} index={index + 3} />
        ))}

        <motion.article
          className="group flex min-h-[17.375rem] flex-col items-center justify-center border border-[#3F3F3F] bg-[#161616] px-5 py-8 text-center transition-colors duration-300 ease-out hover:bg-[#B34B0C] focus-within:bg-[#B34B0C]"
          initial={contentInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.12, ease: smoothEase }}
        >
          <h3 className="break-words font-['Outfit'] text-[1.125rem] font-bold leading-tight text-white [overflow-wrap:anywhere] xl:text-[1.375rem]">
            Selected States Coverage
          </h3>

          <p className="mt-5 max-w-[16rem] break-words font-['DM_Sans'] text-[0.875rem] leading-[1.4] text-white/90 [overflow-wrap:anywhere] xl:text-[1rem]">
            Explore dispatch services in selected high-demand states with strong
            lanes, load availability, and region-specific support.
          </p>

          <Link
            href="/states"
            className="mt-6 inline-flex h-11 items-center justify-center bg-[#161616] px-5 font-['Outfit'] text-[0.9375rem] font-medium text-white xl:text-[1.125rem]"
          >
            View All States
          </Link>
        </motion.article>
      </div>
    </section>
  );
}

function StateCard({ state, index }: { state: StateItem; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const imageInitial = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 34 };
  const contentInitial = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 };

  return (
    <article className="group flex min-h-[17.375rem] flex-col items-center justify-center border border-[#3F3F3F] bg-[#161616] px-5 py-8 text-center">
      <motion.div
        className="relative h-[6.75rem] w-[11rem] overflow-hidden"
        initial={imageInitial}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : Math.min(index * 0.05, 0.25),
          ease: smoothEase,
        }}
      >
        <Image
          src={state.image}
          alt={state.imageAlt}
          fill
          sizes="11rem"
          className="object-contain"
        />
      </motion.div>

      <motion.h3
        className="mt-5 break-words font-['Outfit'] text-[1.125rem] font-bold text-white transition-colors duration-300 ease-out [overflow-wrap:anywhere] group-hover:text-[#B34B0C] group-focus-within:text-[#B34B0C] xl:text-[1.375rem]"
        initial={contentInitial}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.55,
          delay: shouldReduceMotion ? 0 : Math.min(index * 0.05 + 0.08, 0.33),
          ease: smoothEase,
        }}
      >
        {state.name}
      </motion.h3>
    </article>
  );
}
