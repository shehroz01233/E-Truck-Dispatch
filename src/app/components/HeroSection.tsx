import Image from "next/image";
import type { ReactNode } from "react";
import DemoRequestForm from "./DemoRequestForm";

type HeroSectionProps = {
  h1: ReactNode;
  paragraphs: string[];
  backgroundImage: string;
  backgroundAlt?: string;
};

export default function HeroSection({
  h1,
  paragraphs,
  backgroundImage,
  backgroundAlt = "",
}: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden">
      <Image src={backgroundImage} alt={backgroundAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[#111]/75" />

      <div className="mx-auto grid min-h-[600px] w-[calc(100%-40px)] max-w-[1560px] gap-10 py-16 sm:w-[calc(100%-64px)] lg:grid-cols-[minmax(0,1fr)_minmax(400px,500px)] lg:py-0 2xl:grid-cols-[960px_500px] 2xl:gap-[100px]">
        <div className="max-w-[785px] self-center lg:self-start lg:pt-[118px]">
          <h1 className="text-4xl font-bold capitalize leading-tight sm:text-5xl">
            {h1}
          </h1>
          <div className="mt-8 max-w-[785px] space-y-4 text-base leading-7 text-white/85 sm:text-lg">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <DemoRequestForm />
      </div>
    </section>
  );
}
