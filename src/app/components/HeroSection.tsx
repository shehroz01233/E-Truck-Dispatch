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
    <section className="relative isolate min-h-[560px] overflow-hidden bg-neutral-900 text-white lg:min-h-[305px] 2xl:min-h-[600px]">
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-neutral-900/58" />

      <div className="mx-auto grid min-h-[560px] w-[calc(100%-40px)] max-w-[792px] gap-8 sm:w-[calc(100%-64px)] lg:min-h-[305px] lg:w-full lg:grid-cols-[430px_245px] lg:justify-between lg:gap-0 2xl:min-h-[600px] 2xl:max-w-[1560px] 2xl:grid-cols-[minmax(0,785px)_minmax(360px,500px)] 2xl:gap-12">
        <div className="self-start pt-[100px] 2xl:pt-[200px]">
          <h1 className="max-w-[390px] text-[24px] font-bold capitalize leading-[1.22] 2xl:max-w-[680px] 2xl:text-[48px]">
            {h1}
          </h1>

          <div className="mt-[14px] max-w-[430px] space-y-[3px] text-[9px] leading-[11px] text-white/90 2xl:mt-8 2xl:max-w-[785px] 2xl:space-y-4 2xl:text-[16px] 2xl:leading-[22px]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* <div className="self-start pt-[70px] lg:w-[245px] max-2xl:[&>*]:!w-full max-2xl:[&_form]:!w-full max-2xl:[&_h2]:!text-[18px] max-2xl:[&_h2]:!leading-[22px] max-2xl:[&_label]:!text-[8px] max-2xl:[&_input]:!h-[26px] max-2xl:[&_input]:!px-[10px] max-2xl:[&_input]:!text-[8px] max-2xl:[&_button]:!h-[26px] max-2xl:[&_button]:!text-[8px] 2xl:w-auto 2xl:pt-[135px]">
          <DemoRequestForm />
        </div> */}
        <div className="self-start pt-[90px] lg:w-[245px] 2xl:w-auto 2xl:pt-[155px]">
  <DemoRequestForm />
</div>
      </div>
    </section>
  );
}