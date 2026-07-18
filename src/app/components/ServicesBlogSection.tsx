"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export type BlogItem = {
  image: string;
  title: string;
  description: string;
};

type ServicesBlogSectionProps = {
  heading: string;
  introduction: string;
  blogs: BlogItem[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;
const cardHover = {
  y: -8,
  boxShadow: "0 1.25rem 2.75rem rgba(0, 0, 0, 0.22)",
};
const springConfig = { stiffness: 180, damping: 18, mass: 0.35 };

export default function ServicesBlogSection({
  heading,
  introduction,
  blogs,
}: ServicesBlogSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="bg-[#1f1f1f] px-4 py-10 text-white min-[30rem]:px-6 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[97.5rem]">
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: smoothEase }}
            className="bg-[#b94f08] px-4 pb-[5.75rem] pt-8 min-[23.4375rem]:px-6 sm:px-8 md:px-10 lg:px-[4.375rem] lg:pb-[8rem] lg:pt-[3.375rem]"
          >
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start lg:gap-16">
              <div>
                <m.h2
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.08, ease: smoothEase }}
                  className="font-['Outfit'] text-[1.875rem] font-bold leading-none text-white min-[23.4375rem]:text-4xl sm:text-5xl"
                >
                  {heading}
                </m.h2>

                <m.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.18, ease: smoothEase }}
                  className="inline-flex"
                >
                  <Link
                    href="#"
                    className="mt-5 inline-flex h-9 items-center justify-center bg-[#161616] px-4 font-['Outfit'] text-sm font-medium text-white transition-colors duration-300 hover:bg-[#202020] sm:mt-6"
                  >
                    View All Blogs
                  </Link>
                </m.div>
              </div>

              <m.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.14, ease: smoothEase }}
                className="max-w-[32.5rem] border-l-2 border-[#161616] pl-4 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white min-[23.4375rem]:pl-5 md:ml-auto"
              >
                {introduction}
              </m.p>
            </div>
          </m.div>

          <div className="relative z-10 -mt-[4.375rem] grid gap-3 px-4 min-[23.4375rem]:px-6 sm:px-8 md:grid-cols-2 md:px-10 lg:-mt-[5.75rem] lg:px-[4.375rem] xl:grid-cols-4">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.image}
                blog={blog}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
      </div>
    </section>
    </LazyMotion>
  );
}

function BlogCard({
  blog,
  index,
  shouldReduceMotion,
}: {
  blog: BlogItem;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const glow = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(255,255,255,0.16), rgba(255,255,255,0) 42%)`;

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x * 100);
    pointerY.set(y * 100);
    rotateX.set((0.5 - y) * 7);
    rotateY.set((x - 0.5) * 7);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <m.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : cardHover}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.18),
        ease: smoothEase,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className="group relative overflow-hidden bg-[#161616]"
    >
      <m.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />

      <m.div
        className="relative aspect-[340/200] overflow-hidden"
        style={{ transform: "translateZ(16px)" }}
      >
        <div className="absolute inset-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 21.25rem"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        </div>
        <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-[35%] skew-x-[-18deg] bg-white/10 opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[115%] group-hover:opacity-100" />
      </m.div>

      <m.div
        className="px-5 pb-6 pt-4"
        style={{ transform: "translateZ(24px)" }}
      >
        <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] text-white transition-colors duration-300 group-hover:text-white">
          {blog.title}
        </h3>

        <p className="mt-3 font-['DM_Sans'] text-[0.9375rem] leading-[1.55] text-white/80 transition-colors duration-300 group-hover:text-white/90">
          {blog.description}
        </p>

        <Link
          href="#"
          className="mt-5 inline-block border-b-2 border-[#b94f08] pb-1 font-['DM_Sans'] text-sm font-medium text-[#b94f08] transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          Read Full Article
        </Link>
      </m.div>
    </m.article>
  );
}
